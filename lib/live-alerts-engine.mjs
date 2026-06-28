import { normalizeMassiveOptionsChain } from "./massive-options-chain.mjs";

export const LIVE_ALERTS_TICKER_ALLOWLIST = Object.freeze([
  "QQQ",
  "SPY",
  "NVDA",
  "TSLA",
  "AAPL",
  "AMD",
  "MSFT",
  "GOOGL",
  "GLD",
  "SLV",
  "USO",
  "VIX",
]);

export const LIVE_ALERTS_MODES = Object.freeze([
  "LIVE_VERIFIED",
  "DELAYED_VERIFIED",
  "STALE",
  "SOURCE_REQUIRED",
  "PROVIDER_UNAVAILABLE",
  "CREDENTIAL_MISSING",
  "LEGAL_BLOCKED",
  "DEMO_FALLBACK",
]);

const ALPHA_VANTAGE_DOCS_URL = "https://www.alphavantage.co/documentation/";
const ALPHA_VANTAGE_TERMS_URL = "https://www.alphavantage.co/terms_of_service/";
const MASSIVE_OPTIONS_DOCS_URL = "https://massive.com/docs/rest/options/snapshots/option-chain-snapshot";
const MASSIVE_MARKET_DATA_TERMS_URL = "https://massive.com/legal/market-data-terms-of-service";
const MASSIVE_OPTIONS_ENDPOINT_BASE = "https://api.massive.com/v3/snapshot/options";
const MASSIVE_ALLOWED_ENTITLEMENTS = new Set(["realtime", "delayed"]);
const MASSIVE_REQUEST_TIMEOUT_MS = 8_000;
const MASSIVE_MAX_RESPONSE_BYTES = 1_500_000;

export function cleanLiveAlertsTicker(value = "") {
  return String(value || "").trim().toUpperCase().replace(/[^A-Z0-9.-]/g, "").slice(0, 12);
}

export function isLiveAlertsTickerAllowed(ticker = "") {
  return LIVE_ALERTS_TICKER_ALLOWLIST.includes(cleanLiveAlertsTicker(ticker));
}

export function buildLiveAlertsStatus({
  env = process.env,
  receivedAt = new Date().toISOString(),
} = {}) {
  const quoteGate = buildQuoteGate(env);
  const optionsGate = buildOptionsGate(env);
  const providerReady = quoteGate.ready && optionsGate.ready;
  const dataMode = providerReady
    ? "SOURCE_REQUIRED"
    : chooseBlockedMode([...quoteGate.missingGates, ...optionsGate.missingGates]);
  const missingGates = dedupeGates([...quoteGate.missingGates, ...optionsGate.missingGates]);

  return {
    ok: true,
    service: "Pickaxe Live Alerts",
    uiHeadline: providerReady ? "LIVE ALERTS READY / WAITING FOR VERIFIED SNAPSHOT" : "LIVE ALERTS READY / ACTIVATION BLOCKED",
    dataMode,
    activationBlocked: !providerReady,
    serverOnly: true,
    publicHostingStatus: "GitHub Pages is static and cannot hold provider credentials or run provider adapters.",
    allowlist: [...LIVE_ALERTS_TICKER_ALLOWLIST],
    providers: {
      quote: quoteGate.provider,
      optionsChain: optionsGate.provider,
    },
    quoteStatus: quoteGate.status,
    optionsChainStatus: optionsGate.status,
    providerStatus: providerReady ? "SERVER_PROVIDER_GATES_READY" : "SERVER_PROVIDER_GATES_BLOCKED",
    lastVerifiedAt: null,
    proxyReceivedAt: receivedAt,
    freshnessState: providerReady ? "SOURCE_REQUIRED" : "UNAVAILABLE",
    missingGates,
    endpoints: [
      "/api/live/status",
      "/api/live/quote?ticker=QQQ",
      "/api/live/options-chain?ticker=QQQ",
      "/api/live/alerts",
    ],
    sourceLinks: [
      { provider: "Alpha Vantage", label: "Documentation", url: ALPHA_VANTAGE_DOCS_URL },
      { provider: "Alpha Vantage", label: "Terms", url: ALPHA_VANTAGE_TERMS_URL },
      { provider: "Massive", label: "Options Chain Snapshot", url: MASSIVE_OPTIONS_DOCS_URL },
      { provider: "Massive", label: "Market Data Terms", url: MASSIVE_MARKET_DATA_TERMS_URL },
    ],
    nextAction: providerReady
      ? "Request a verified quote/options snapshot through the local server endpoint; do not expose provider keys to the browser."
      : "CEO B must provide server-only credentials and written provider/commercial/OPRA rights before live alerts can activate.",
    safety: [
      "Research Only",
      "Not Financial Advice",
      "No Broker Execution",
      "No External Action",
      "Options involve substantial risk.",
    ],
  };
}

export function buildLiveQuotePayload({
  ticker,
  status,
  providerResult,
  receivedAt = new Date().toISOString(),
} = {}) {
  const normalizedTicker = cleanLiveAlertsTicker(ticker || "QQQ");
  const base = {
    ok: false,
    ticker: normalizedTicker,
    provider: "Alpha Vantage",
    providerMode: "alpha-vantage-quote",
    quoteBasis: "1-minute intraday close",
    price: null,
    bid: null,
    ask: null,
    previousClose: null,
    sessionChange: null,
    sessionChangePercent: null,
    providerMarketTimestamp: null,
    proxyReceivedTimestamp: receivedAt,
    timezone: null,
    freshnessState: status?.freshnessState || "UNAVAILABLE",
    staleReason: "No provider request was made.",
    sourceStatus: status?.quoteStatus || "BLOCKED",
    legalStatus: getGateStatus(status, "Quote provider commercial-use approval"),
    attribution: "Alpha Vantage",
    dataMode: status?.dataMode || "PROVIDER_UNAVAILABLE",
    sourceUrl: ALPHA_VANTAGE_DOCS_URL,
    missingGates: status?.missingGates || [],
  };

  if (!providerResult?.payload || providerResult.status !== 200) {
    const payload = providerResult?.payload || {};
    return {
      status: providerResult?.status || 503,
      payload: {
        ...base,
        errorCode: mapProviderErrorCode(payload.errorCode || "PROVIDER_GATE_BLOCKED"),
        errorMessage: payload.errorMessage || "Live quote activation is blocked by provider, legal, entitlement, or credential gates.",
      },
    };
  }

  const provider = providerResult.payload;
  const stale = Boolean(provider.isStale);
  const dataMode = stale ? "STALE" : provider.dataMode === "LIVE" ? "LIVE_VERIFIED" : "DELAYED_VERIFIED";

  return {
    status: 200,
    payload: {
      ...base,
      ok: true,
      dataMode,
      price: provider.price,
      providerMarketTimestamp: provider.marketTime,
      proxyReceivedTimestamp: provider.receivedAt || receivedAt,
      timezone: provider.timezone,
      freshnessState: stale ? "STALE" : "FRESH",
      staleReason: provider.staleReason || "",
      sourceStatus: provider.verificationStatus || "SOURCE_TIMESTAMP_AND_FRESHNESS_PRESENT",
      legalStatus: "CONFIRMED_BY_SERVER_ENV",
      quoteBasis: provider.quoteType || base.quoteBasis,
      sourceUrl: provider.sourceUrl || ALPHA_VANTAGE_DOCS_URL,
      missingGates: [],
    },
  };
}

export async function requestMassiveOptionsChainSnapshot({
  ticker,
  expiration,
  contractType,
  liveServicesEnabled,
  apiKey,
  entitlement,
  commercialUseApproved,
  opraRightsConfirmed,
  reserveRequest = () => true,
  fetchImpl = globalThis.fetch,
  now = () => new Date(),
} = {}) {
  const normalizedTicker = cleanLiveAlertsTicker(ticker || "");
  const normalizedExpiration = String(expiration || "").trim();
  const normalizedContractType = String(contractType || "").trim().toLowerCase();
  const normalizedEntitlement = String(entitlement || "").trim().toLowerCase();
  const base = {
    ok: false,
    ticker: normalizedTicker,
    provider: "Massive",
    providerMode: "massive-options-chain",
    expiration: normalizedExpiration || null,
    optionType: normalizedContractType || null,
    contracts: [],
    dataMode: "PROVIDER_UNAVAILABLE",
    sourceUrl: MASSIVE_OPTIONS_DOCS_URL,
    legalStatus: commercialUseApproved && opraRightsConfirmed ? "CONFIRMED_BY_SERVER_ENV" : "UNCONFIRMED",
    attribution: "Massive",
    proxyReceivedTimestamp: now().toISOString(),
    freshnessState: "UNAVAILABLE",
    staleReason: "No provider request was made.",
  };

  if (!liveServicesEnabled) return blocked(base, 503, "PROVIDER_UNAVAILABLE", "Local live services must be explicitly enabled before a Massive request can run.");
  if (!isLiveAlertsTickerAllowed(normalizedTicker)) return blocked(base, 403, "SOURCE_REQUIRED", "Ticker is outside the Pickaxe live-alerts allowlist.");
  if (!commercialUseApproved) return blocked(base, 503, "LEGAL_BLOCKED", "Massive business/commercial-use approval is not confirmed in the server environment.");
  if (!opraRightsConfirmed) return blocked(base, 503, "LEGAL_BLOCKED", "OPRA/options redistribution and display rights are not confirmed in the server environment.");
  if (!String(apiKey || "").trim()) return blocked(base, 503, "CREDENTIAL_MISSING", "PICKAXE_MASSIVE_API_KEY is required in the local server environment. Never place it in frontend code.");
  if (!MASSIVE_ALLOWED_ENTITLEMENTS.has(normalizedEntitlement)) {
    return blocked(base, 503, "SOURCE_REQUIRED", "Set PICKAXE_MASSIVE_OPTIONS_ENTITLEMENT to realtime or delayed before requesting options-chain data.");
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(normalizedExpiration)) {
    return blocked(base, 400, "SOURCE_REQUIRED", "A bounded expiration=YYYY-MM-DD parameter is required before requesting an options chain.");
  }
  if (!["call", "put"].includes(normalizedContractType)) {
    return blocked(base, 400, "SOURCE_REQUIRED", "A bounded contractType=call or contractType=put parameter is required before requesting an options chain.");
  }
  if (typeof fetchImpl !== "function") return blocked(base, 503, "PROVIDER_UNAVAILABLE", "The local server does not have a usable fetch implementation.");
  if (typeof reserveRequest !== "function" || !reserveRequest()) {
    return blocked(base, 429, "PROVIDER_UNAVAILABLE", "The single local options-chain proof request for this server process has already been used.");
  }

  const requestUrl = new URL(`${MASSIVE_OPTIONS_ENDPOINT_BASE}/${encodeURIComponent(normalizedTicker)}`);
  requestUrl.searchParams.set("contract_type", normalizedContractType);
  requestUrl.searchParams.set("expiration_date", normalizedExpiration);
  requestUrl.searchParams.set("limit", "50");
  requestUrl.searchParams.set("apiKey", String(apiKey).trim());

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), MASSIVE_REQUEST_TIMEOUT_MS);
  let response;

  try {
    response = await fetchImpl(requestUrl, {
      method: "GET",
      headers: { Accept: "application/json" },
      signal: controller.signal,
    });
  } catch (error) {
    const timedOut = error?.name === "AbortError";
    return blocked(
      base,
      502,
      "PROVIDER_UNAVAILABLE",
      timedOut ? "Massive did not respond within 8 seconds." : "The Massive request failed before a valid response was received.",
    );
  } finally {
    clearTimeout(timeout);
  }

  if (!response?.ok) {
    const mode = response?.status === 401 || response?.status === 403 ? "CREDENTIAL_MISSING" : "PROVIDER_UNAVAILABLE";
    return blocked(base, 502, mode, `Massive returned HTTP ${response?.status || "unknown"}.`);
  }

  let raw;
  try {
    raw = await response.text();
  } catch {
    return blocked(base, 502, "PROVIDER_UNAVAILABLE", "The Massive response body could not be read.");
  }

  if (Buffer.byteLength(raw, "utf8") > MASSIVE_MAX_RESPONSE_BYTES) {
    return blocked(base, 502, "PROVIDER_UNAVAILABLE", "The Massive response exceeded the 1.5 MB safety limit.");
  }

  let payload;
  try {
    payload = JSON.parse(raw);
  } catch {
    return blocked(base, 502, "PROVIDER_UNAVAILABLE", "Massive returned a non-JSON response.");
  }

  const dataMode = normalizedEntitlement === "realtime" ? "LIVE" : "DELAYED";
  const receivedAt = now().toISOString();
  const normalized = normalizeMassiveOptionsChain(payload, {
    ticker: normalizedTicker,
    expiration: normalizedExpiration,
    contractType: normalizedContractType,
    dataMode,
    receivedAt,
  });
  const accepted = normalized.dataMode === "LIVE" || normalized.dataMode === "DELAYED";
  const stale = Boolean(normalized.isStale);

  return {
    status: accepted ? 200 : 502,
    payload: {
      ...base,
      ...normalized,
      ok: accepted,
      dataMode: accepted ? stale ? "STALE" : normalized.dataMode === "LIVE" ? "LIVE_VERIFIED" : "DELAYED_VERIFIED" : "PROVIDER_UNAVAILABLE",
      optionType: normalizedContractType,
      proxyReceivedTimestamp: receivedAt,
      freshnessState: stale ? "STALE" : accepted ? "FRESH" : "UNAVAILABLE",
      legalStatus: "CONFIRMED_BY_SERVER_ENV",
      sourceStatus: normalized.verificationStatus,
      errorCode: accepted ? undefined : "OPTIONS_CHAIN_REJECTED",
      errorMessage: accepted ? undefined : "Options-chain provider data was not accepted. No demo fallback was substituted.",
    },
  };
}

export function buildLiveAlertsPayload({
  status,
  ticker = "QQQ",
  quote,
  optionsChain,
  receivedAt = new Date().toISOString(),
} = {}) {
  const normalizedTicker = cleanLiveAlertsTicker(ticker || "QQQ");
  const blocked = Boolean(status?.activationBlocked);
  const fallbackRows = buildDemoFallbackRows();

  if (blocked || !quote?.ok) {
    return {
      ok: false,
      service: "Pickaxe Live Alerts",
      uiHeadline: "LIVE ALERTS READY / ACTIVATION BLOCKED",
      dataMode: status?.dataMode || "LEGAL_BLOCKED",
      activationBlocked: true,
      providerStatus: status?.providerStatus || "SERVER_PROVIDER_GATES_BLOCKED",
      generatedAt: receivedAt,
      lastVerifiedAt: null,
      candidates: [],
      demoFallbackRows: fallbackRows,
      missingGates: status?.missingGates || [],
      nextAction: status?.nextAction || "Confirm server-only provider credentials and written provider rights.",
      safety: status?.safety || [],
    };
  }

  const chainUsable = optionsChain?.ok && (optionsChain.dataMode === "LIVE_VERIFIED" || optionsChain.dataMode === "DELAYED_VERIFIED");
  const chainContracts = Array.isArray(optionsChain?.contracts) ? optionsChain.contracts : [];
  const bestContract = chainContracts.find((contract) => contract.eligibleForReview) || chainContracts[0] || null;
  const quoteMode = quote.dataMode;
  const readiness = chainUsable && bestContract?.eligibleForReview ? 82 : 58;
  const optionsGate = chainUsable ? "PASS" : "SOURCE_REQUIRED";
  const spreadGate = bestContract?.eligibleForReview ? "PASS" : chainUsable ? "BLOCKED" : "SOURCE_REQUIRED";
  const missingEvidence = [
    !chainUsable ? "Verified options-chain snapshot" : "",
    !bestContract?.eligibleForReview ? "Eligible contract with complete liquidity/spread fields" : "",
    "CEO B final review record",
  ].filter(Boolean);

  return {
    ok: true,
    service: "Pickaxe Live Alerts",
    uiHeadline: quoteMode === "LIVE_VERIFIED" ? "LIVE ALERTS READY / LIVE VERIFIED" : "LIVE ALERTS READY / DELAYED VERIFIED",
    dataMode: quoteMode,
    activationBlocked: false,
    providerStatus: "SERVER_PROVIDER_SNAPSHOT_VERIFIED",
    generatedAt: receivedAt,
    lastVerifiedAt: quote.providerMarketTimestamp,
    candidates: [{
      id: `PIC-LIVE-${normalizedTicker}-SNAPSHOT-001`,
      ticker: normalizedTicker,
      setupName: chainUsable ? "Verified Snapshot Momentum Review" : "Verified Quote / Chain Required",
      bias: "Conditional / Research Only",
      timeframe: "Current verified snapshot",
      researchReadiness: readiness,
      readinessClass: readiness >= 80 ? "REVIEW QUALITY" : "SOURCE REQUIRED",
      sourceGate: "PASS",
      timestampGate: quote.freshnessState === "FRESH" ? "PASS" : "STALE",
      optionsChainGate: optionsGate,
      spreadLiquidityGate: spreadGate,
      riskGate: "CEO_B_REVIEW_REQUIRED",
      catalystNewsGate: "SOURCE_REQUIRED",
      actionBoundary: "NO EXTERNAL ACTION",
      systemVerdict: chainUsable && bestContract?.eligibleForReview ? "REVIEW CANDIDATE / NO EXTERNAL ACTION" : "SOURCE REQUIRED / NO EXTERNAL ACTION",
      whyRanked: `Server verified ${normalizedTicker} quote snapshot through ${quote.provider}; options chain ${chainUsable ? "returned provider-normalized contracts" : "still requires authorized chain evidence"}.`,
      missingEvidence,
      invalidation: "Invalidate the research packet if the verified source timestamp turns stale or the underlying structure no longer matches the setup.",
      noTradeCondition: "No external action if quote freshness, options-chain, spread/liquidity, risk, or CEO B gates are incomplete.",
      nextRequirement: chainUsable ? "CEO B review of verified snapshot packet." : "Request an authorized options-chain snapshot with expiration and contract type.",
      confidenceInSourceData: quote.freshnessState === "FRESH" ? "SOURCE_TIMESTAMP_AND_FRESHNESS_PRESENT" : "STALE_OR_UNVERIFIED",
      generatedTimestamp: receivedAt,
      dataMode: quoteMode,
      latestVerifiedQuoteTimestamp: quote.providerMarketTimestamp,
      sourceProvider: quote.provider,
      optionsContext: bestContract
        ? `${bestContract.symbol || "Contract"} · bid ${formatNullable(bestContract.bid)} / ask ${formatNullable(bestContract.ask)} · spread ${formatNullable(bestContract.spreadPercent)}% · ${bestContract.liquidityGrade || "ungraded"}`
        : "Options chain source required",
    }],
    demoFallbackRows: fallbackRows,
    missingGates: missingEvidence,
    safety: status?.safety || [],
  };
}

function buildQuoteGate(env) {
  const missingGates = [];
  const liveEnabled = String(env.PICKAXE_ENABLE_LIVE_SERVICES || "").toLowerCase() === "true";
  const providerMode = String(env.PICKAXE_PROVIDER_MODE || "").trim().toLowerCase();
  const entitlement = String(env.PICKAXE_ALPHA_VANTAGE_ENTITLEMENT || "").trim().toLowerCase();
  const commercialUseApproved = String(env.PICKAXE_ALPHA_VANTAGE_COMMERCIAL_USE_APPROVED || "").trim().toLowerCase() === "true";
  const hasKey = Boolean(String(env.PICKAXE_ALPHA_VANTAGE_API_KEY || "").trim());

  if (!liveEnabled) missingGates.push(gate("Live services enablement", "PICKAXE_ENABLE_LIVE_SERVICES=true", "PROVIDER_UNAVAILABLE"));
  if (providerMode !== "alpha-vantage-quote") missingGates.push(gate("Quote provider mode", "PICKAXE_PROVIDER_MODE=alpha-vantage-quote", "PROVIDER_UNAVAILABLE"));
  if (!commercialUseApproved) missingGates.push(gate("Quote provider commercial-use approval", "PICKAXE_ALPHA_VANTAGE_COMMERCIAL_USE_APPROVED=true", "LEGAL_BLOCKED"));
  if (!hasKey) missingGates.push(gate("Quote server-only credential", "PICKAXE_ALPHA_VANTAGE_API_KEY", "CREDENTIAL_MISSING"));
  if (!["realtime", "delayed"].includes(entitlement)) missingGates.push(gate("Quote realtime/delayed entitlement", "PICKAXE_ALPHA_VANTAGE_ENTITLEMENT=realtime|delayed", "SOURCE_REQUIRED"));

  return {
    provider: {
      id: "alpha-vantage-quote",
      name: "Alpha Vantage",
      selectedFor: "underlying quote",
      docsUrl: ALPHA_VANTAGE_DOCS_URL,
      termsUrl: ALPHA_VANTAGE_TERMS_URL,
      serverOnly: true,
      ready: missingGates.length === 0,
    },
    status: missingGates.length ? "BLOCKED" : "READY",
    ready: missingGates.length === 0,
    missingGates,
  };
}

function buildOptionsGate(env) {
  const missingGates = [];
  const liveEnabled = String(env.PICKAXE_ENABLE_LIVE_SERVICES || "").toLowerCase() === "true";
  const entitlement = String(env.PICKAXE_MASSIVE_OPTIONS_ENTITLEMENT || "").trim().toLowerCase();
  const commercialUseApproved = String(env.PICKAXE_MASSIVE_COMMERCIAL_USE_APPROVED || "").trim().toLowerCase() === "true";
  const opraRightsConfirmed = String(env.PICKAXE_MASSIVE_OPRA_RIGHTS_CONFIRMED || "").trim().toLowerCase() === "true";
  const hasKey = Boolean(String(env.PICKAXE_MASSIVE_API_KEY || "").trim());

  if (!liveEnabled) missingGates.push(gate("Live services enablement", "PICKAXE_ENABLE_LIVE_SERVICES=true", "PROVIDER_UNAVAILABLE"));
  if (!commercialUseApproved) missingGates.push(gate("Options provider business/commercial approval", "PICKAXE_MASSIVE_COMMERCIAL_USE_APPROVED=true", "LEGAL_BLOCKED"));
  if (!opraRightsConfirmed) missingGates.push(gate("Options OPRA/display rights", "PICKAXE_MASSIVE_OPRA_RIGHTS_CONFIRMED=true", "LEGAL_BLOCKED"));
  if (!hasKey) missingGates.push(gate("Options server-only credential", "PICKAXE_MASSIVE_API_KEY", "CREDENTIAL_MISSING"));
  if (!MASSIVE_ALLOWED_ENTITLEMENTS.has(entitlement)) missingGates.push(gate("Options realtime/delayed entitlement", "PICKAXE_MASSIVE_OPTIONS_ENTITLEMENT=realtime|delayed", "SOURCE_REQUIRED"));

  return {
    provider: {
      id: "massive-options-chain",
      name: "Massive",
      selectedFor: "options-chain snapshot",
      docsUrl: MASSIVE_OPTIONS_DOCS_URL,
      termsUrl: MASSIVE_MARKET_DATA_TERMS_URL,
      serverOnly: true,
      ready: missingGates.length === 0,
    },
    status: missingGates.length ? "BLOCKED" : "READY",
    ready: missingGates.length === 0,
    missingGates,
  };
}

function chooseBlockedMode(missingGates = []) {
  const modes = new Set(missingGates.map((item) => item.mode));
  if (modes.has("LEGAL_BLOCKED")) return "LEGAL_BLOCKED";
  if (modes.has("CREDENTIAL_MISSING")) return "CREDENTIAL_MISSING";
  if (modes.has("PROVIDER_UNAVAILABLE")) return "PROVIDER_UNAVAILABLE";
  if (modes.has("SOURCE_REQUIRED")) return "SOURCE_REQUIRED";
  return "SOURCE_REQUIRED";
}

function gate(label, required, mode) {
  return { label, required, mode, status: "MISSING" };
}

function dedupeGates(gates = []) {
  const seen = new Set();
  return gates.filter((gateItem) => {
    const key = `${gateItem.label}:${gateItem.required}:${gateItem.mode}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function blocked(base, status, dataMode, errorMessage) {
  return {
    status,
    payload: {
      ...base,
      dataMode,
      errorCode: dataMode,
      errorMessage,
    },
  };
}

function getGateStatus(status, label) {
  return status?.missingGates?.some((gateItem) => gateItem.label === label) ? "UNCONFIRMED" : "CONFIRMED_BY_SERVER_ENV";
}

function mapProviderErrorCode(code) {
  if (/COMMERCIAL|LEGAL|APPROVAL|OPRA/i.test(code)) return "LEGAL_BLOCKED";
  if (/KEY|AUTH|CREDENTIAL/i.test(code)) return "CREDENTIAL_MISSING";
  if (/TICKER|ENTITLEMENT|SOURCE/i.test(code)) return "SOURCE_REQUIRED";
  return "PROVIDER_UNAVAILABLE";
}

function buildDemoFallbackRows() {
  return [
    ["QQQ", "Momentum Breakout", "DEMO_FALLBACK", "Source, timestamp, and options-chain gates required."],
    ["NVDA", "VWAP Reclaim", "DEMO_FALLBACK", "Catalyst and volatility source checks required."],
    ["SPY", "Pullback to Trend", "DEMO_FALLBACK", "Breadth and trend-support evidence required."],
    ["TSLA", "Volatility Expansion", "DEMO_FALLBACK", "Headline, IV, and spread evidence required."],
    ["GLD", "Mean Reversion", "DEMO_FALLBACK", "Rates, dollar, and macro source evidence required."],
  ].map(([ticker, setupName, dataMode, missingEvidence], index) => ({
    id: `PIC-DEMO-${ticker}-${String(index + 1).padStart(3, "0")}`,
    ticker,
    setupName,
    dataMode,
    sourceGate: "DEMO_FALLBACK",
    actionBoundary: "NO EXTERNAL ACTION",
    missingEvidence,
  }));
}

function formatNullable(value) {
  return value === null || value === undefined || value === "" ? "source required" : String(value);
}
