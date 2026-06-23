import assert from "node:assert/strict";
import { requestAlphaVantageQuoteSnapshot } from "../lib/alpha-vantage-quote.mjs";

const requiredProxyMode = "alpha-vantage-quote";
const validPayload = {
  "Meta Data": {
    "1. Information": "Intraday (1min) open, high, low, close prices and volume",
    "2. Symbol": "QQQ",
    "3. Last Refreshed": "2026-06-23 10:30:00",
    "4. Interval": "1min",
    "5. Output Size": "Compact",
    "6. Time Zone": "US/Eastern",
  },
  "Time Series (1min)": {
    "2026-06-23 10:30:00": {
      "1. open": "602.1000",
      "2. high": "602.3000",
      "3. low": "601.9500",
      "4. close": "602.2500",
      "5. volume": "125000",
    },
  },
};

let fetchCount = 0;
const successFetch = async (url) => {
  fetchCount += 1;
  assert.equal(url.hostname, "www.alphavantage.co");
  assert.equal(url.searchParams.get("function"), "TIME_SERIES_INTRADAY");
  assert.equal(url.searchParams.get("symbol"), "QQQ");
  assert.equal(url.searchParams.get("interval"), "1min");
  assert.equal(url.searchParams.get("entitlement"), "realtime");
  assert.equal(url.searchParams.get("apikey"), "server-only-test-key");
  return new Response(JSON.stringify(validPayload), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};

const disabled = await requestAlphaVantageQuoteSnapshot({
  ticker: "QQQ",
  proxyMode: "disabled",
  requiredProxyMode,
  liveServicesEnabled: false,
});
assert.equal(disabled.status, 503);
assert.equal(disabled.payload.errorCode, "PROVIDER_NOT_CONFIGURED");
assert.equal(fetchCount, 0);

const legalBlock = await requestAlphaVantageQuoteSnapshot({
  ticker: "QQQ",
  proxyMode: requiredProxyMode,
  requiredProxyMode,
  liveServicesEnabled: true,
  apiKey: "server-only-test-key",
  entitlement: "realtime",
  commercialUseApproved: false,
  fetchImpl: successFetch,
});
assert.equal(legalBlock.status, 503);
assert.equal(legalBlock.payload.errorCode, "COMMERCIAL_USE_APPROVAL_REQUIRED");
assert.equal(fetchCount, 0);

const unauthorizedTicker = await requestAlphaVantageQuoteSnapshot({
  ticker: "SPY",
  proxyMode: requiredProxyMode,
  requiredProxyMode,
  liveServicesEnabled: true,
  apiKey: "server-only-test-key",
  entitlement: "realtime",
  commercialUseApproved: true,
  fetchImpl: successFetch,
});
assert.equal(unauthorizedTicker.status, 403);
assert.equal(unauthorizedTicker.payload.errorCode, "TICKER_NOT_AUTHORIZED");
assert.equal(fetchCount, 0);

const snapshot = await requestAlphaVantageQuoteSnapshot({
  ticker: "QQQ",
  proxyMode: requiredProxyMode,
  requiredProxyMode,
  liveServicesEnabled: true,
  apiKey: "server-only-test-key",
  entitlement: "realtime",
  commercialUseApproved: true,
  fetchImpl: successFetch,
  now: () => new Date("2026-06-23T14:31:00.000Z"),
});
assert.equal(snapshot.status, 200);
assert.equal(snapshot.payload.price, 602.25);
assert.equal(snapshot.payload.marketTime, "2026-06-23 10:30:00");
assert.equal(snapshot.payload.timezone, "US/Eastern");
assert.equal(snapshot.payload.dataMode, "LIVE");
assert.equal(snapshot.payload.isStale, false);
assert.equal(snapshot.payload.ageMinutes, 1);
assert.equal(snapshot.payload.change, null);
assert.equal(snapshot.payload.changePercent, null);
assert.equal(snapshot.payload.activationAuthorized, true);
assert.equal(fetchCount, 1);
assert.equal(JSON.stringify(snapshot.payload).includes("server-only-test-key"), false);
assert.equal(JSON.stringify(snapshot.payload).includes("apikey="), false);

let manualRequestAvailable = true;
const reserveSingleRequest = () => {
  if (!manualRequestAvailable) return false;
  manualRequestAvailable = false;
  return true;
};
const guardedSnapshot = await requestAlphaVantageQuoteSnapshot({
  ticker: "QQQ",
  proxyMode: requiredProxyMode,
  requiredProxyMode,
  liveServicesEnabled: true,
  apiKey: "server-only-test-key",
  entitlement: "realtime",
  commercialUseApproved: true,
  reserveRequest: reserveSingleRequest,
  fetchImpl: successFetch,
  now: () => new Date("2026-06-23T14:31:00.000Z"),
});
assert.equal(guardedSnapshot.status, 200);
const blockedRepeat = await requestAlphaVantageQuoteSnapshot({
  ticker: "QQQ",
  proxyMode: requiredProxyMode,
  requiredProxyMode,
  liveServicesEnabled: true,
  apiKey: "server-only-test-key",
  entitlement: "realtime",
  commercialUseApproved: true,
  reserveRequest: reserveSingleRequest,
  fetchImpl: successFetch,
});
assert.equal(blockedRepeat.status, 429);
assert.equal(blockedRepeat.payload.errorCode, "MANUAL_REQUEST_LIMIT_REACHED");
assert.equal(fetchCount, 2);

const providerNote = await requestAlphaVantageQuoteSnapshot({
  ticker: "QQQ",
  proxyMode: requiredProxyMode,
  requiredProxyMode,
  liveServicesEnabled: true,
  apiKey: "server-only-test-key",
  entitlement: "delayed",
  commercialUseApproved: true,
  fetchImpl: async () => new Response(JSON.stringify({ Note: "Rate limit reached." }), { status: 200 }),
});
assert.equal(providerNote.status, 502);
assert.equal(providerNote.payload.errorCode, "PROVIDER_REJECTED_REQUEST");
assert.equal(providerNote.payload.price, null);

console.log("Provider quote checks passed: disabled, legal gate, ticker allowlist, single-request guard, normalized timestamped snapshot, freshness, and provider rejection.");
