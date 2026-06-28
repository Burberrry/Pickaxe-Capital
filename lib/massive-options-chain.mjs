const MASSIVE_OPTIONS_DOCS_URL = "https://massive.com/docs/rest/options/snapshots/option-chain-snapshot";
const ALLOWED_DATA_MODES = new Set(["LIVE", "DELAYED"]);
const MAX_CONTRACTS = 50;

export function normalizeMassiveOptionsChain(payload, {
  ticker,
  expiration,
  contractType,
  dataMode,
  receivedAt = new Date().toISOString(),
} = {}) {
  const normalizedTicker = String(ticker || "").trim().toUpperCase();
  const normalizedExpiration = String(expiration || "").trim();
  const normalizedContractType = String(contractType || "").trim().toLowerCase();
  const normalizedDataMode = String(dataMode || "").trim().toUpperCase();
  const underlyingReferencePrice = inferUnderlyingReferencePrice(payload);
  const base = {
    ticker: normalizedTicker,
    expiration: normalizedExpiration,
    contracts: [],
    source: "Massive Option Chain Snapshot",
    sourceUrl: MASSIVE_OPTIONS_DOCS_URL,
    dataMode: ALLOWED_DATA_MODES.has(normalizedDataMode) ? normalizedDataMode : "ERROR",
    quoteType: normalizedDataMode === "LIVE"
      ? "Realtime options quote entitlement"
      : normalizedDataMode === "DELAYED"
        ? "15-minute delayed options quote entitlement"
        : "Unavailable",
    receivedAt,
    isStale: false,
    staleReason: "",
    requestId: cleanText(payload?.request_id, 120),
    contractCount: 0,
    eligibleContractCount: 0,
    staleContractCount: 0,
    blockedContractCount: 0,
    truncated: Boolean(payload?.next_url),
    nextPageIgnored: Boolean(payload?.next_url),
    underlyingReferencePrice,
    strikeWindowPercent: underlyingReferencePrice === null ? null : 8,
    strikeWindowStatus: underlyingReferencePrice === null ? "UNDERLYING_REFERENCE_UNAVAILABLE" : "APPLIED",
    verificationStatus: "UNAVAILABLE",
  };

  const requestErrors = [];
  if (!/^[A-Z0-9.-]{1,12}$/.test(normalizedTicker)) requestErrors.push("INVALID_TICKER");
  if (!/^\d{4}-\d{2}-\d{2}$/.test(normalizedExpiration)) requestErrors.push("INVALID_EXPIRATION");
  if (!["call", "put"].includes(normalizedContractType)) requestErrors.push("INVALID_CONTRACT_TYPE");
  if (!ALLOWED_DATA_MODES.has(normalizedDataMode)) requestErrors.push("INVALID_DATA_MODE");
  if (!Number.isFinite(Date.parse(receivedAt))) requestErrors.push("INVALID_RECEIVED_AT");
  if (!payload || typeof payload !== "object" || !Array.isArray(payload.results)) requestErrors.push("MALFORMED_PROVIDER_RESPONSE");
  if (String(payload?.status || "").toUpperCase() && String(payload.status).toUpperCase() !== "OK") {
    requestErrors.push("PROVIDER_STATUS_NOT_OK");
  }

  if (requestErrors.length) {
    return {
      ...base,
      dataMode: "ERROR",
      isStale: true,
      staleReason: "Provider chain was not accepted.",
      verificationStatus: "REJECTED",
      errorCode: "OPTIONS_CHAIN_REJECTED",
      errorReasons: [...new Set(requestErrors)],
    };
  }

  const initialResults = payload.results.slice(0, MAX_CONTRACTS);
  const normalizedContracts = initialResults.map((result) => normalizeContract(result, {
    ticker: normalizedTicker,
    expiration: normalizedExpiration,
    contractType: normalizedContractType,
    dataMode: normalizedDataMode,
    receivedAt,
  }));
  const contracts = applyStrikeWindow(normalizedContracts, underlyingReferencePrice);
  const staleContractCount = contracts.filter((contract) => contract.isStale).length;
  const blockedContractCount = contracts.filter((contract) => contract.hardBlocks.length > 0).length;
  const eligibleContractCount = contracts.filter((contract) => contract.eligibleForReview).length;
  const truncated = base.truncated || payload.results.length > MAX_CONTRACTS;
  const allStale = contracts.length > 0 && staleContractCount === contracts.length;

  return {
    ...base,
    contracts,
    contractCount: contracts.length,
    eligibleContractCount,
    staleContractCount,
    blockedContractCount,
    truncated,
    strikeWindowStatus: underlyingReferencePrice === null
      ? "UNDERLYING_REFERENCE_UNAVAILABLE"
      : contracts.length === normalizedContracts.length
        ? "APPLIED"
        : `APPLIED_${contracts.length}_OF_${normalizedContracts.length}`,
    isStale: allStale,
    staleReason: allStale
      ? "Every returned contract has a stale or unverifiable quote. Manual review required."
      : staleContractCount
        ? `${staleContractCount} of ${contracts.length} contracts have stale or unverifiable quotes.`
        : "Returned contract quotes are within the configured entitlement freshness limit.",
    verificationStatus: blockedContractCount
      ? "PARTIAL_WITH_BLOCKED_CONTRACTS"
      : contracts.length
        ? "SOURCE_TIMESTAMPS_AND_FIELDS_PRESENT"
        : "EMPTY_CHAIN",
  };
}

function inferUnderlyingReferencePrice(payload) {
  const candidates = [
    payload?.underlying_asset?.price,
    payload?.underlying_asset?.last_trade?.price,
    payload?.underlying_asset?.last_quote?.midpoint,
    payload?.underlyingAsset?.price,
    payload?.underlying?.price,
  ];
  for (const candidate of candidates) {
    const number = finitePositiveNumber(candidate);
    if (number !== null) return number;
  }
  return null;
}

function applyStrikeWindow(contracts, underlyingReferencePrice) {
  if (underlyingReferencePrice === null) return contracts;
  const lower = underlyingReferencePrice * 0.92;
  const upper = underlyingReferencePrice * 1.08;
  return contracts.filter((contract) => (
    contract.strike !== null
    && contract.strike >= lower
    && contract.strike <= upper
  ));
}

function normalizeContract(result, context) {
  const details = result?.details || {};
  const quote = result?.last_quote || {};
  const trade = result?.last_trade || {};
  const greeks = result?.greeks || {};
  const symbol = cleanText(details.ticker || result?.ticker, 64).toUpperCase();
  const type = cleanText(details.contract_type, 12).toLowerCase();
  const strike = finitePositiveNumber(details.strike_price);
  const expiration = cleanText(details.expiration_date, 10);
  const bid = finiteNonNegativeNumber(quote.bid);
  const ask = finiteNonNegativeNumber(quote.ask);
  const bidSize = finiteNonNegativeNumber(quote.bid_size);
  const askSize = finiteNonNegativeNumber(quote.ask_size);
  const providerMid = finiteNonNegativeNumber(quote.midpoint);
  const mid = providerMid ?? (bid !== null && ask !== null ? round((bid + ask) / 2, 4) : null);
  const spread = bid !== null && ask !== null ? round(ask - bid, 4) : null;
  const spreadPercent = spread !== null && mid && mid > 0 ? round((spread / mid) * 100, 2) : null;
  const quoteTime = providerTimestampToIso(quote.sip_timestamp ?? quote.last_updated);
  const lastTradeTime = providerTimestampToIso(trade.sip_timestamp ?? trade.last_updated);
  const last = finiteNonNegativeNumber(trade.price);
  const volume = finiteNonNegativeNumber(result?.day?.volume);
  const openInterest = finiteNonNegativeNumber(result?.open_interest);
  const impliedVolatility = finiteNonNegativeNumber(result?.implied_volatility);
  const delta = finiteNumber(greeks.delta);
  const gamma = finiteNumber(greeks.gamma);
  const theta = finiteNumber(greeks.theta);
  const vega = finiteNumber(greeks.vega);
  const freshness = classifyOptionFreshness({
    quoteTime,
    receivedAt: context.receivedAt,
    dataMode: context.dataMode,
  });
  const hardBlocks = [];

  if (!symbol) hardBlocks.push("MISSING_CONTRACT_SYMBOL");
  if (symbol && !symbolMatchesTicker(symbol, context.ticker)) hardBlocks.push("CONTRACT_SYMBOL_MISMATCH");
  if (type !== context.contractType) hardBlocks.push("CONTRACT_TYPE_MISMATCH");
  if (expiration !== context.expiration) hardBlocks.push("EXPIRATION_MISMATCH");
  if (expiration && expiration < context.receivedAt.slice(0, 10)) hardBlocks.push("EXPIRED_CONTRACT");
  if (strike === null) hardBlocks.push("MISSING_STRIKE");
  if (bid === null) hardBlocks.push("MISSING_BID");
  if (ask === null) hardBlocks.push("MISSING_ASK");
  if (bid !== null && ask !== null && ask < bid) hardBlocks.push("CROSSED_MARKET");
  if (!quoteTime) hardBlocks.push("MISSING_QUOTE_TIMESTAMP");
  if (freshness.isStale) hardBlocks.push(freshness.classification === "UNKNOWN" ? "UNVERIFIABLE_QUOTE_FRESHNESS" : "STALE_QUOTE");

  const liquidity = gradeLiquidity({ spreadPercent, volume, openInterest, bidSize, askSize });
  if (liquidity.grade === "BLOCKED") hardBlocks.push("LIQUIDITY_FIELDS_INCOMPLETE");

  return {
    symbol,
    type,
    strike,
    expiration,
    bid,
    ask,
    bidSize,
    askSize,
    mid,
    spread,
    spreadPercent,
    last,
    lastTradeTime,
    quoteTime,
    volume,
    openInterest,
    openInterestAsOf: openInterest === null ? null : "PRIOR_TRADING_DAY_DATE_NOT_PROVIDED",
    impliedVolatility,
    delta,
    gamma,
    theta,
    vega,
    greeksStatus: [delta, gamma, theta, vega].every((value) => value !== null) ? "PRESENT" : "PARTIAL_OR_UNAVAILABLE",
    liquidityGrade: liquidity.grade,
    liquidityGradeBasis: liquidity.reason,
    dataMode: context.dataMode,
    isStale: freshness.isStale,
    staleReason: freshness.reason,
    ageMinutes: freshness.ageMinutes,
    maximumAgeMinutes: freshness.maximumAgeMinutes,
    hardBlocks: [...new Set(hardBlocks)],
    eligibleForReview: hardBlocks.length === 0,
  };
}

function gradeLiquidity({ spreadPercent, volume, openInterest, bidSize, askSize }) {
  if ([spreadPercent, volume, openInterest, bidSize, askSize].some((value) => value === null)) {
    return {
      grade: "BLOCKED",
      reason: "Bid/ask, quote sizes, volume, and prior-session open interest are required for the preliminary liquidity grade.",
    };
  }

  if (spreadPercent <= 5 && volume >= 100 && openInterest >= 500 && bidSize >= 10 && askSize >= 10) {
    return { grade: "A", reason: "Preliminary research-quality grade: spread ≤5%, volume ≥100, open interest ≥500, and both quote sizes ≥10." };
  }
  if (spreadPercent <= 10 && volume >= 50 && openInterest >= 200 && bidSize >= 5 && askSize >= 5) {
    return { grade: "B", reason: "Preliminary research-quality grade: spread ≤10%, volume ≥50, open interest ≥200, and both quote sizes ≥5." };
  }
  if (spreadPercent <= 20 && volume >= 10 && openInterest >= 50) {
    return { grade: "C", reason: "Preliminary research-quality grade only; spread or participation requires closer manual review." };
  }
  return { grade: "D", reason: "Wide spread or low participation. This is not a prediction of fill quality." };
}

function classifyOptionFreshness({ quoteTime, receivedAt, dataMode }) {
  const maximumAgeMinutes = dataMode === "LIVE" ? 5 : 25;
  const quoteMs = Date.parse(quoteTime || "");
  const receivedMs = Date.parse(receivedAt || "");
  if (!Number.isFinite(quoteMs) || !Number.isFinite(receivedMs)) {
    return {
      isStale: true,
      classification: "UNKNOWN",
      ageMinutes: null,
      maximumAgeMinutes,
      reason: "Quote freshness cannot be verified from the provider timestamp.",
    };
  }

  const ageMinutes = round((receivedMs - quoteMs) / 60_000, 1);
  if (ageMinutes < -1) {
    return {
      isStale: true,
      classification: "UNKNOWN",
      ageMinutes,
      maximumAgeMinutes,
      reason: "Provider quote time is later than the proxy receipt time.",
    };
  }

  const isStale = ageMinutes > maximumAgeMinutes;
  return {
    isStale,
    classification: isStale ? "STALE" : "FRESH",
    ageMinutes,
    maximumAgeMinutes,
    reason: isStale
      ? `Quote is ${ageMinutes} minutes old, beyond the ${maximumAgeMinutes}-minute ${dataMode.toLowerCase()} limit.`
      : `Quote is ${ageMinutes} minutes old and within the ${maximumAgeMinutes}-minute ${dataMode.toLowerCase()} limit.`,
  };
}

function providerTimestampToIso(value) {
  if (value === null || value === undefined || value === "") return null;
  if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}T/.test(value)) {
    const parsed = Date.parse(value);
    return Number.isFinite(parsed) ? new Date(parsed).toISOString() : null;
  }

  const numeric = Number(value);
  if (!Number.isFinite(numeric) || numeric <= 0) return null;
  let milliseconds = numeric;
  if (numeric >= 1e17) milliseconds = numeric / 1e6;
  else if (numeric >= 1e14) milliseconds = numeric / 1e3;
  else if (numeric < 1e11) milliseconds = numeric * 1e3;
  const date = new Date(milliseconds);
  return Number.isFinite(date.getTime()) ? date.toISOString() : null;
}

function symbolMatchesTicker(symbol, ticker) {
  const normalized = symbol.startsWith("O:") ? symbol.slice(2) : symbol;
  const match = normalized.match(/^([A-Z0-9.-]{1,6})\d{6}[CP]\d{8}$/);
  return Boolean(match && match[1] === ticker);
}

function finiteNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

function finiteNonNegativeNumber(value) {
  const number = finiteNumber(value);
  return number !== null && number >= 0 ? number : null;
}

function finitePositiveNumber(value) {
  const number = finiteNumber(value);
  return number !== null && number > 0 ? number : null;
}

function round(value, decimals) {
  const factor = 10 ** decimals;
  return Math.round((value + Number.EPSILON) * factor) / factor;
}

function cleanText(value, maxLength) {
  return String(value || "").replace(/\s+/g, " ").trim().slice(0, maxLength);
}
