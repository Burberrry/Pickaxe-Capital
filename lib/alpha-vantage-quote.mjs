const PROVIDER_DOCS_URL = "https://www.alphavantage.co/documentation/";
const PROVIDER_QUERY_URL = "https://www.alphavantage.co/query";
const ALLOWED_TICKERS = new Set(["QQQ", "SPY", "NVDA", "TSLA", "AAPL", "AMD", "MSFT", "GOOGL", "GLD", "SLV", "USO", "VIX"]);
const ALLOWED_ENTITLEMENTS = new Set(["realtime", "delayed"]);
const MAX_RESPONSE_BYTES = 1_000_000;
const REQUEST_TIMEOUT_MS = 8_000;

export async function requestAlphaVantageQuoteSnapshot({
  ticker,
  proxyMode,
  requiredProxyMode,
  liveServicesEnabled,
  apiKey,
  entitlement,
  commercialUseApproved,
  reserveRequest = () => true,
  fetchImpl = globalThis.fetch,
  now = () => new Date(),
}) {
  const normalizedEntitlement = String(entitlement || "").trim().toLowerCase();
  const base = buildBaseSnapshot(ticker, proxyMode, requiredProxyMode);

  if (proxyMode !== requiredProxyMode) {
    return unavailable(base, "PROVIDER_NOT_CONFIGURED", "The local QuoteSnapshot proxy is disabled. Hosted GitHub Pages remains DEMO / UNAVAILABLE.");
  }

  if (!liveServicesEnabled) {
    return unavailable(base, "LIVE_SERVICES_DISABLED", "Local live services must be explicitly enabled before a provider request can run.");
  }

  if (!ALLOWED_TICKERS.has(ticker)) {
    return {
      status: 403,
      payload: {
        ...base,
        dataMode: "ERROR",
        errorCode: "TICKER_NOT_AUTHORIZED",
        errorMessage: "This bounded connector is authorized only for the Pickaxe live-alerts allowlist.",
        staleReason: "No provider request was made.",
      },
    };
  }

  if (!String(apiKey || "").trim()) {
    return unavailable(base, "API_KEY_MISSING", "PICKAXE_ALPHA_VANTAGE_API_KEY is required in the local server environment. Never place it in frontend code.");
  }

  if (!ALLOWED_ENTITLEMENTS.has(normalizedEntitlement)) {
    return unavailable(base, "ENTITLEMENT_NOT_CONFIGURED", "Set PICKAXE_ALPHA_VANTAGE_ENTITLEMENT to realtime or delayed. Historical/default responses are not accepted as current market data.");
  }

  if (!commercialUseApproved) {
    return unavailable(base, "COMMERCIAL_USE_APPROVAL_REQUIRED", "Alpha Vantage commercial-use approval must be confirmed before Pickaxe Capital requests or displays provider data.");
  }

  if (typeof fetchImpl !== "function") {
    return providerError(base, "FETCH_UNAVAILABLE", "The local server does not have a usable fetch implementation.");
  }

  if (typeof reserveRequest !== "function" || !reserveRequest()) {
    return {
      status: 429,
      payload: {
        ...base,
        errorCode: "MANUAL_REQUEST_LIMIT_REACHED",
        errorMessage: "The single manual provider request for this server process has already been used. Restart the local server before another approved verification.",
        staleReason: "No provider request was made.",
      },
    };
  }

  const requestUrl = new URL(PROVIDER_QUERY_URL);
  requestUrl.searchParams.set("function", "TIME_SERIES_INTRADAY");
  requestUrl.searchParams.set("symbol", ticker);
  requestUrl.searchParams.set("interval", "1min");
  requestUrl.searchParams.set("outputsize", "compact");
  requestUrl.searchParams.set("datatype", "json");
  requestUrl.searchParams.set("entitlement", normalizedEntitlement);
  requestUrl.searchParams.set("apikey", String(apiKey).trim());

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
  let response;

  try {
    response = await fetchImpl(requestUrl, {
      method: "GET",
      headers: { Accept: "application/json" },
      signal: controller.signal,
    });
  } catch (error) {
    const timedOut = error?.name === "AbortError";
    return providerError(
      base,
      timedOut ? "PROVIDER_TIMEOUT" : "PROVIDER_REQUEST_FAILED",
      timedOut ? "Alpha Vantage did not respond within 8 seconds." : "The Alpha Vantage request failed before a valid response was received.",
    );
  } finally {
    clearTimeout(timeout);
  }

  if (!response?.ok) {
    const errorCode = response?.status === 429
      ? "PROVIDER_RATE_LIMITED"
      : response?.status === 401 || response?.status === 403
        ? "PROVIDER_AUTH_OR_ENTITLEMENT_FAILED"
        : "PROVIDER_HTTP_ERROR";
    return providerError(base, errorCode, `Alpha Vantage returned HTTP ${response?.status || "unknown"}.`);
  }

  let raw;
  try {
    raw = await response.text();
  } catch {
    return providerError(base, "PROVIDER_BODY_READ_FAILED", "The Alpha Vantage response body could not be read.");
  }

  if (Buffer.byteLength(raw, "utf8") > MAX_RESPONSE_BYTES) {
    return providerError(base, "PROVIDER_RESPONSE_TOO_LARGE", "The Alpha Vantage response exceeded the 1 MB safety limit.");
  }

  let providerPayload;
  try {
    providerPayload = JSON.parse(raw);
  } catch {
    return providerError(base, "PROVIDER_INVALID_JSON", "Alpha Vantage returned a non-JSON response.");
  }

  const providerMessage = providerPayload?.["Error Message"] || providerPayload?.Note || providerPayload?.Information;
  if (providerMessage) {
    return providerError(base, "PROVIDER_REJECTED_REQUEST", "Alpha Vantage rejected or limited the request. Check the server-side key, entitlement, commercial approval, and rate limit.");
  }

  const metadata = providerPayload?.["Meta Data"];
  const seriesKey = Object.keys(providerPayload || {}).find((key) => /^Time Series \(1min\)$/i.test(key));
  const series = seriesKey ? providerPayload[seriesKey] : null;
  const marketTime = cleanProviderField(metadata?.["3. Last Refreshed"]);
  const timezone = cleanProviderField(metadata?.["6. Time Zone"] || metadata?.["5. Time Zone"]);
  const providerSymbol = cleanProviderField(metadata?.["2. Symbol"]).toUpperCase();
  const latestBarKey = marketTime && series?.[marketTime]
    ? marketTime
    : Object.keys(series || {}).sort().at(-1) || "";
  const latestBar = latestBarKey ? series?.[latestBarKey] : null;
  const price = finitePositiveNumber(latestBar?.["4. close"]);

  if (!metadata || !series || providerSymbol !== ticker || !latestBarKey || price === null || !timezone) {
    return providerError(base, "PROVIDER_MALFORMED_RESPONSE", "Alpha Vantage returned an incomplete or mismatched intraday response.");
  }

  const receivedAt = now().toISOString();
  const freshness = classifyFreshness({
    marketTime: latestBarKey,
    timezone,
    receivedAt,
    entitlement: normalizedEntitlement,
  });
  const dataMode = normalizedEntitlement === "realtime" ? "LIVE" : "DELAYED";

  return {
    status: 200,
    payload: {
      ...base,
      price,
      marketTime: latestBarKey,
      source: "Alpha Vantage TIME_SERIES_INTRADAY",
      sourceUrl: PROVIDER_DOCS_URL,
      dataMode,
      quoteType: normalizedEntitlement === "realtime"
        ? "1-minute intraday close · realtime entitlement"
        : "1-minute intraday close · 15-minute delayed entitlement",
      timezone,
      receivedAt,
      isStale: freshness.isStale,
      staleReason: freshness.reason,
      freshnessClassification: freshness.classification,
      ageMinutes: freshness.ageMinutes,
      maximumAgeMinutes: freshness.maximumAgeMinutes,
      verificationStatus: freshness.isStale ? "SOURCE_PRESENT_BUT_STALE" : "SOURCE_TIMESTAMP_AND_FRESHNESS_PRESENT",
      changeBasis: "Daily change is intentionally omitted because this endpoint returns intraday bars, not a documented daily-change field.",
      providerCandidate: "alphaVantageIntradayProvider",
      activationAuthorized: true,
    },
  };
}

function buildBaseSnapshot(ticker, proxyMode, requiredProxyMode) {
  return {
    ticker,
    price: null,
    change: null,
    changePercent: null,
    marketTime: null,
    source: "Pickaxe Local Proxy",
    sourceUrl: "",
    dataMode: "UNAVAILABLE",
    quoteType: "Unavailable",
    timezone: null,
    receivedAt: null,
    isStale: false,
    staleReason: "",
    providerId: "localProxyProvider",
    providerCandidate: "futureAlphaVantageProvider",
    proxyMode: proxyMode === requiredProxyMode ? requiredProxyMode : "disabled",
    activationAuthorized: false,
  };
}

function unavailable(base, errorCode, errorMessage) {
  return {
    status: 503,
    payload: {
      ...base,
      errorCode,
      errorMessage,
      staleReason: "No provider request was made.",
    },
  };
}

function providerError(base, errorCode, errorMessage) {
  return {
    status: 502,
    payload: {
      ...base,
      dataMode: "ERROR",
      errorCode,
      errorMessage,
      staleReason: "Provider data was not accepted. No demo fallback was substituted.",
      activationAuthorized: true,
    },
  };
}

function cleanProviderField(value) {
  return String(value || "").trim().slice(0, 120);
}

function finitePositiveNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) && number > 0 ? number : null;
}

function classifyFreshness({ marketTime, timezone, receivedAt, entitlement }) {
  const maximumAgeMinutes = entitlement === "realtime" ? 5 : 25;
  const marketWallTime = parseWallClock(marketTime);
  const receivedWallTime = getWallClockParts(new Date(receivedAt), timezone);

  if (!marketWallTime || !receivedWallTime) {
    return {
      isStale: true,
      classification: "UNKNOWN",
      ageMinutes: null,
      maximumAgeMinutes,
      reason: "Freshness could not be verified from the provider timestamp and timezone.",
    };
  }

  const marketMs = Date.UTC(
    marketWallTime.year,
    marketWallTime.month - 1,
    marketWallTime.day,
    marketWallTime.hour,
    marketWallTime.minute,
    marketWallTime.second,
  );
  const receivedMs = Date.UTC(
    receivedWallTime.year,
    receivedWallTime.month - 1,
    receivedWallTime.day,
    receivedWallTime.hour,
    receivedWallTime.minute,
    receivedWallTime.second,
  );
  const ageMinutes = Math.round(((receivedMs - marketMs) / 60_000) * 10) / 10;

  if (!Number.isFinite(ageMinutes) || ageMinutes < -1) {
    return {
      isStale: true,
      classification: "UNKNOWN",
      ageMinutes: Number.isFinite(ageMinutes) ? ageMinutes : null,
      maximumAgeMinutes,
      reason: "Provider market time is inconsistent with the local receipt time.",
    };
  }

  const isStale = ageMinutes > maximumAgeMinutes;
  return {
    isStale,
    classification: isStale ? "STALE" : "FRESH",
    ageMinutes,
    maximumAgeMinutes,
    reason: isStale
      ? `Provider bar is ${ageMinutes} minutes old, beyond the ${maximumAgeMinutes}-minute ${entitlement} limit. Manual review required.`
      : `Provider bar is ${ageMinutes} minutes old and within the ${maximumAgeMinutes}-minute ${entitlement} limit.`,
  };
}

function parseWallClock(value) {
  const match = String(value || "").match(/^(\d{4})-(\d{2})-(\d{2})[ T](\d{2}):(\d{2}):(\d{2})$/);
  if (!match) return null;
  return {
    year: Number(match[1]),
    month: Number(match[2]),
    day: Number(match[3]),
    hour: Number(match[4]),
    minute: Number(match[5]),
    second: Number(match[6]),
  };
}

function getWallClockParts(date, timezone) {
  try {
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: timezone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hourCycle: "h23",
    });
    const parts = Object.fromEntries(
      formatter.formatToParts(date)
        .filter((part) => part.type !== "literal")
        .map((part) => [part.type, Number(part.value)]),
    );
    return {
      year: parts.year,
      month: parts.month,
      day: parts.day,
      hour: parts.hour,
      minute: parts.minute,
      second: parts.second,
    };
  } catch {
    return null;
  }
}
