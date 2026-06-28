import assert from "node:assert/strict";
import {
  buildLiveAlertsPayload,
  buildLiveAlertsStatus,
  buildLiveQuotePayload,
  cleanLiveAlertsTicker,
  isLiveAlertsTickerAllowed,
  requestMassiveOptionsChainSnapshot,
} from "../lib/live-alerts-engine.mjs";

const emptyStatus = buildLiveAlertsStatus({ env: {}, receivedAt: "2026-06-28T12:00:00.000Z" });
assert.equal(emptyStatus.uiHeadline, "LIVE ALERTS READY / ACTIVATION BLOCKED");
assert.equal(emptyStatus.dataMode, "LEGAL_BLOCKED");
assert.equal(emptyStatus.activationBlocked, true);
assert.equal(emptyStatus.serverOnly, true);
assert.equal(emptyStatus.providers.quote.id, "alpha-vantage-quote");
assert.equal(emptyStatus.providers.optionsChain.id, "massive-options-chain");
assert.equal(emptyStatus.allowlist.includes("QQQ"), true);
assert.equal(emptyStatus.allowlist.includes("MSTR"), false);
assert.equal(emptyStatus.missingGates.some((gate) => gate.required === "PICKAXE_ALPHA_VANTAGE_API_KEY"), true);
assert.equal(emptyStatus.missingGates.some((gate) => gate.required === "PICKAXE_MASSIVE_OPRA_RIGHTS_CONFIRMED=true"), true);

assert.equal(cleanLiveAlertsTicker(" qqq<script> "), "QQQSCRIPT");
assert.equal(isLiveAlertsTickerAllowed("QQQ"), true);
assert.equal(isLiveAlertsTickerAllowed("MSTR"), false);

let fetchCount = 0;
const blockedOptions = await requestMassiveOptionsChainSnapshot({
  ticker: "QQQ",
  expiration: "2026-06-26",
  contractType: "call",
  liveServicesEnabled: false,
  apiKey: "",
  entitlement: "",
  commercialUseApproved: false,
  opraRightsConfirmed: false,
  fetchImpl: async () => {
    fetchCount += 1;
    throw new Error("should not fetch while blocked");
  },
});
assert.equal(blockedOptions.status, 503);
assert.equal(blockedOptions.payload.dataMode, "PROVIDER_UNAVAILABLE");
assert.equal(fetchCount, 0);

const noKeyOptions = await requestMassiveOptionsChainSnapshot({
  ticker: "QQQ",
  expiration: "2026-06-26",
  contractType: "call",
  liveServicesEnabled: true,
  apiKey: "",
  entitlement: "realtime",
  commercialUseApproved: true,
  opraRightsConfirmed: true,
  fetchImpl: async () => {
    fetchCount += 1;
    throw new Error("should not fetch without key");
  },
});
assert.equal(noKeyOptions.status, 503);
assert.equal(noKeyOptions.payload.dataMode, "CREDENTIAL_MISSING");
assert.equal(fetchCount, 0);

const readyEnv = {
  PICKAXE_ENABLE_LIVE_SERVICES: "true",
  PICKAXE_PROVIDER_MODE: "alpha-vantage-quote",
  PICKAXE_ALPHA_VANTAGE_API_KEY: "server-only-test-key",
  PICKAXE_ALPHA_VANTAGE_ENTITLEMENT: "delayed",
  PICKAXE_ALPHA_VANTAGE_COMMERCIAL_USE_APPROVED: "true",
  PICKAXE_MASSIVE_API_KEY: "server-only-massive-test-key",
  PICKAXE_MASSIVE_OPTIONS_ENTITLEMENT: "realtime",
  PICKAXE_MASSIVE_COMMERCIAL_USE_APPROVED: "true",
  PICKAXE_MASSIVE_OPRA_RIGHTS_CONFIRMED: "true",
};
const readyStatus = buildLiveAlertsStatus({ env: readyEnv, receivedAt: "2026-06-28T12:00:00.000Z" });
assert.equal(readyStatus.activationBlocked, false);
assert.equal(readyStatus.providerStatus, "SERVER_PROVIDER_GATES_READY");

const quote = buildLiveQuotePayload({
  ticker: "QQQ",
  status: readyStatus,
  providerResult: {
    status: 200,
    payload: {
      price: 602.25,
      marketTime: "2026-06-26 15:58:00",
      receivedAt: "2026-06-26T19:59:00.000Z",
      timezone: "US/Eastern",
      dataMode: "DELAYED",
      isStale: false,
      staleReason: "Fresh delayed data.",
      verificationStatus: "SOURCE_TIMESTAMP_AND_FRESHNESS_PRESENT",
      quoteType: "1-minute intraday close - delayed entitlement",
      sourceUrl: "https://www.alphavantage.co/documentation/",
    },
  },
});
assert.equal(quote.status, 200);
assert.equal(quote.payload.dataMode, "DELAYED_VERIFIED");
assert.equal(quote.payload.price, 602.25);
assert.equal(JSON.stringify(quote.payload).includes("server-only-test-key"), false);

const livePayloadBlocked = buildLiveAlertsPayload({ status: emptyStatus, ticker: "QQQ" });
assert.equal(livePayloadBlocked.ok, false);
assert.equal(livePayloadBlocked.demoFallbackRows.length, 5);
assert.equal(livePayloadBlocked.demoFallbackRows[0].dataMode, "DEMO_FALLBACK");

const livePayloadReady = buildLiveAlertsPayload({
  status: readyStatus,
  ticker: "QQQ",
  quote: quote.payload,
  optionsChain: { ok: false, dataMode: "SOURCE_REQUIRED", contracts: [] },
  receivedAt: "2026-06-26T20:00:00.000Z",
});
assert.equal(livePayloadReady.ok, true);
assert.equal(livePayloadReady.candidates.length, 1);
assert.equal(livePayloadReady.candidates[0].sourceGate, "PASS");
assert.equal(livePayloadReady.candidates[0].optionsChainGate, "SOURCE_REQUIRED");
assert.equal(livePayloadReady.candidates[0].actionBoundary, "NO EXTERNAL ACTION");

console.log("Live-alerts checks passed: blocked gates, allowlist, no blocked provider fetch, normalized quote payload, and candidate fallback contract.");
