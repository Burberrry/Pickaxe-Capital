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
assert.equal(emptyStatus.privateLocalMassive.statusMode, "PRIVATE_LOCAL_CREDENTIAL_MISSING");
assert.equal(emptyStatus.privateLocalMassive.publicDisplayEnabled, false);
assert.equal(emptyStatus.privateLocalMassive.browserProviderRequest, false);
assert.equal(emptyStatus.privateLocalMassive.attribution.includes("Options data provided by Massive"), true);

assert.equal(cleanLiveAlertsTicker(" qqq<script> "), "QQQSCRIPT");
assert.equal(isLiveAlertsTickerAllowed("QQQ"), true);
assert.equal(isLiveAlertsTickerAllowed("MSTR"), false);

let fetchCount = 0;
const blockedOptions = await requestMassiveOptionsChainSnapshot({
  ticker: "QQQ",
  expiration: "2026-06-26",
  contractType: "call",
  liveServicesEnabled: false,
  privateLocalResearchOnly: false,
  providerMode: "disabled",
  apiKey: "",
  entitlement: "",
  commercialUseApproved: false,
  opraRightsConfirmed: false,
  privatePocConfirmed: false,
  publicDisplayEnabled: false,
  providerCacheMode: "disabled",
  fetchImpl: async () => {
    fetchCount += 1;
    throw new Error("should not fetch while blocked");
  },
});
assert.equal(blockedOptions.status, 503);
assert.equal(blockedOptions.payload.dataMode, "PRIVATE_LOCAL_MASSIVE_BLOCKED");
assert.equal(fetchCount, 0);

const noKeyOptions = await requestMassiveOptionsChainSnapshot({
  ticker: "QQQ",
  expiration: "2026-06-26",
  contractType: "call",
  liveServicesEnabled: true,
  privateLocalResearchOnly: true,
  providerMode: "private-local-massive-proof",
  apiKey: "",
  entitlement: "realtime",
  commercialUseApproved: true,
  opraRightsConfirmed: true,
  privatePocConfirmed: true,
  publicDisplayEnabled: false,
  providerCacheMode: "disabled",
  fetchImpl: async () => {
    fetchCount += 1;
    throw new Error("should not fetch without key");
  },
});
assert.equal(noKeyOptions.status, 503);
assert.equal(noKeyOptions.payload.dataMode, "PRIVATE_LOCAL_CREDENTIAL_MISSING");
assert.equal(fetchCount, 0);

const readyEnv = {
  PICKAXE_ENABLE_LIVE_SERVICES: "true",
  PICKAXE_PROVIDER_MODE: "alpha-vantage-quote",
  PICKAXE_ALPHA_VANTAGE_API_KEY: "server-only-test-key",
  PICKAXE_ALPHA_VANTAGE_ENTITLEMENT: "delayed",
  PICKAXE_ALPHA_VANTAGE_COMMERCIAL_USE_APPROVED: "true",
  PICKAXE_PRIVATE_LOCAL_RESEARCH_ONLY: "true",
  PICKAXE_MASSIVE_PROVIDER_MODE: "private-local-massive-proof",
  PICKAXE_MASSIVE_PRIVATE_POC_CONFIRMED: "true",
  PICKAXE_MASSIVE_API_KEY: "server-only-massive-test-key",
  PICKAXE_MASSIVE_OPTIONS_ENTITLEMENT: "realtime",
  PICKAXE_MASSIVE_COMMERCIAL_USE_APPROVED: "true",
  PICKAXE_MASSIVE_OPRA_RIGHTS_CONFIRMED: "true",
  PICKAXE_MASSIVE_PUBLIC_DISPLAY_ENABLED: "false",
  PICKAXE_PROVIDER_CACHE_MODE: "disabled",
  PICKAXE_MASSIVE_QQQ_EXPIRATION: "2026-06-26",
  PICKAXE_MASSIVE_QQQ_CONTRACT_TYPE: "call",
};
const readyStatus = buildLiveAlertsStatus({ env: readyEnv, receivedAt: "2026-06-28T12:00:00.000Z" });
assert.equal(readyStatus.activationBlocked, false);
assert.equal(readyStatus.providerStatus, "SERVER_PROVIDER_GATES_READY");
assert.equal(readyStatus.privateLocalMassive.ready, true);
assert.equal(readyStatus.privateLocalMassive.statusMode, "PRIVATE_LOCAL_MASSIVE_VERIFIED");

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

const toNanoseconds = (iso) => String(BigInt(Date.parse(iso)) * 1_000_000n);
let proofFetchCount = 0;
const privateOptionsProof = await requestMassiveOptionsChainSnapshot({
  ticker: "QQQ",
  expiration: "2026-06-26",
  contractType: "call",
  liveServicesEnabled: true,
  privateLocalResearchOnly: true,
  providerMode: "private-local-massive-proof",
  apiKey: "server-only-massive-test-key",
  entitlement: "delayed",
  commercialUseApproved: true,
  opraRightsConfirmed: true,
  privatePocConfirmed: true,
  publicDisplayEnabled: false,
  providerCacheMode: "disabled",
  now: () => new Date("2026-06-26T20:00:00.000Z"),
  fetchImpl: async () => {
    proofFetchCount += 1;
    return new Response(JSON.stringify({
      status: "OK",
      request_id: "sanitized-fixture",
      results: [{
        details: {
          ticker: "O:QQQ260626C00600000",
          contract_type: "call",
          expiration_date: "2026-06-26",
          strike_price: 600,
        },
        last_quote: {
          bid: 5.8,
          ask: 6,
          bid_size: 25,
          ask_size: 20,
          midpoint: 5.9,
          last_updated: toNanoseconds("2026-06-26T19:45:00.000Z"),
        },
        last_trade: {
          price: 5.9,
          sip_timestamp: toNanoseconds("2026-06-26T19:44:30.000Z"),
        },
        day: { volume: 740 },
        open_interest: 4200,
        implied_volatility: 0.244,
        greeks: { delta: 0.54, gamma: 0.03, theta: -0.21, vega: 0.12 },
      }],
    }), { status: 200, headers: { "content-type": "application/json" } });
  },
});
assert.equal(proofFetchCount, 1);
assert.equal(privateOptionsProof.status, 200);
assert.equal(privateOptionsProof.payload.dataMode, "PRIVATE_LOCAL_MASSIVE_DELAYED_VERIFIED");
assert.equal(privateOptionsProof.payload.contracts.length, 1);
assert.equal(JSON.stringify(privateOptionsProof.payload).includes("server-only-massive-test-key"), false);

const privateLocalPayload = buildLiveAlertsPayload({
  status: {
    ...readyStatus,
    activationBlocked: true,
    privateLocalMassive: {
      ...readyStatus.privateLocalMassive,
      ready: true,
      statusMode: "PRIVATE_LOCAL_MASSIVE_DELAYED_VERIFIED",
    },
  },
  ticker: "QQQ",
  quote: null,
  optionsChain: privateOptionsProof.payload,
  receivedAt: "2026-06-26T20:00:00.000Z",
});
assert.equal(privateLocalPayload.ok, true);
assert.equal(privateLocalPayload.dataMode, "PRIVATE_LOCAL_MASSIVE_DELAYED_VERIFIED");
assert.equal(privateLocalPayload.candidates[0].latestVerifiedQuoteTimestamp, null);
assert.equal(privateLocalPayload.candidates[0].latestVerifiedOptionsTimestamp, "2026-06-26T19:45:00.000Z");
assert.equal(privateLocalPayload.candidates[0].exactContract.provider, "Massive");
assert.equal(privateLocalPayload.candidates[0].actionBoundary, "NO EXTERNAL ACTION");

console.log("Live-alerts checks passed: blocked gates, allowlist, no blocked provider fetch, normalized quote payload, and candidate fallback contract.");
