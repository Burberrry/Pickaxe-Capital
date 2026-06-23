import assert from "node:assert/strict";
import { normalizeMassiveOptionsChain } from "../lib/massive-options-chain.mjs";

const receivedAt = "2026-06-23T14:32:00.000Z";
const toNanoseconds = (iso) => String(BigInt(Date.parse(iso)) * 1_000_000n);
const providerPayload = {
  status: "OK",
  request_id: "fixture-request-id",
  next_url: "https://api.massive.com/v3/snapshot/options/QQQ?cursor=ignored",
  results: [
    {
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
        last_updated: toNanoseconds("2026-06-23T14:30:00.000Z"),
      },
      last_trade: {
        price: 5.9,
        sip_timestamp: toNanoseconds("2026-06-23T14:29:30.000Z"),
      },
      day: { volume: 740 },
      open_interest: 4200,
      implied_volatility: 0.244,
      greeks: {
        delta: 0.54,
        gamma: 0.03,
        theta: -0.21,
        vega: 0.12,
      },
    },
    {
      details: {
        ticker: "O:QQQ260626C00605000",
        contract_type: "call",
        expiration_date: "2026-06-26",
        strike_price: 605,
      },
      last_quote: {
        bid: 4.2,
        ask: 4,
        bid_size: 2,
        ask_size: 1,
        last_updated: toNanoseconds("2026-06-23T13:30:00.000Z"),
      },
      day: { volume: 8 },
      open_interest: 40,
      implied_volatility: 0.27,
      greeks: {},
    },
  ],
};

const normalized = normalizeMassiveOptionsChain(providerPayload, {
  ticker: "QQQ",
  expiration: "2026-06-26",
  contractType: "call",
  dataMode: "LIVE",
  receivedAt,
});

assert.equal(normalized.dataMode, "LIVE");
assert.equal(normalized.contractCount, 2);
assert.equal(normalized.eligibleContractCount, 1);
assert.equal(normalized.staleContractCount, 1);
assert.equal(normalized.blockedContractCount, 1);
assert.equal(normalized.truncated, true);
assert.equal(normalized.nextPageIgnored, true);
assert.equal(normalized.requestId, "fixture-request-id");

const eligible = normalized.contracts[0];
assert.equal(eligible.symbol, "O:QQQ260626C00600000");
assert.equal(eligible.bid, 5.8);
assert.equal(eligible.ask, 6);
assert.equal(eligible.mid, 5.9);
assert.equal(eligible.spread, 0.2);
assert.equal(eligible.spreadPercent, 3.39);
assert.equal(eligible.quoteTime, "2026-06-23T14:30:00.000Z");
assert.equal(eligible.lastTradeTime, "2026-06-23T14:29:30.000Z");
assert.equal(eligible.ageMinutes, 2);
assert.equal(eligible.isStale, false);
assert.equal(eligible.openInterestAsOf, "PRIOR_TRADING_DAY_DATE_NOT_PROVIDED");
assert.equal(eligible.liquidityGrade, "A");
assert.equal(eligible.greeksStatus, "PRESENT");
assert.deepEqual(eligible.hardBlocks, []);
assert.equal(eligible.eligibleForReview, true);

const blocked = normalized.contracts[1];
assert.equal(blocked.isStale, true);
assert.equal(blocked.liquidityGrade, "D");
assert.equal(blocked.eligibleForReview, false);
assert.equal(blocked.hardBlocks.includes("CROSSED_MARKET"), true);
assert.equal(blocked.hardBlocks.includes("STALE_QUOTE"), true);

const rejected = normalizeMassiveOptionsChain({ status: "ERROR", results: [] }, {
  ticker: "QQQ",
  expiration: "2026-06-26",
  contractType: "call",
  dataMode: "LIVE",
  receivedAt,
});
assert.equal(rejected.dataMode, "ERROR");
assert.equal(rejected.verificationStatus, "REJECTED");
assert.equal(rejected.errorReasons.includes("PROVIDER_STATUS_NOT_OK"), true);

const missingTimestamp = normalizeMassiveOptionsChain({
  status: "OK",
  results: [{
    details: {
      ticker: "O:QQQ260626C00610000",
      contract_type: "call",
      expiration_date: "2026-06-26",
      strike_price: 610,
    },
    last_quote: { bid: 2.1, ask: 2.3, bid_size: 5, ask_size: 5 },
    day: { volume: 100 },
    open_interest: 500,
  }],
}, {
  ticker: "QQQ",
  expiration: "2026-06-26",
  contractType: "call",
  dataMode: "DELAYED",
  receivedAt,
});
assert.equal(missingTimestamp.contracts[0].hardBlocks.includes("MISSING_QUOTE_TIMESTAMP"), true);
assert.equal(missingTimestamp.contracts[0].hardBlocks.includes("UNVERIFIABLE_QUOTE_FRESHNESS"), true);
assert.equal(missingTimestamp.contracts[0].eligibleForReview, false);

const mismatchedSymbol = normalizeMassiveOptionsChain({
  status: "OK",
  results: [{
    details: {
      ticker: "O:QQQM260626C00610000",
      contract_type: "call",
      expiration_date: "2026-06-26",
      strike_price: 610,
    },
    last_quote: {
      bid: 2.1,
      ask: 2.2,
      bid_size: 10,
      ask_size: 10,
      last_updated: toNanoseconds("2026-06-23T14:31:00.000Z"),
    },
    day: { volume: 100 },
    open_interest: 500,
  }],
}, {
  ticker: "QQQ",
  expiration: "2026-06-26",
  contractType: "call",
  dataMode: "LIVE",
  receivedAt,
});
assert.equal(mismatchedSymbol.contracts[0].hardBlocks.includes("CONTRACT_SYMBOL_MISMATCH"), true);

assert.equal(JSON.stringify(normalized).includes("cursor=ignored"), false);
console.log("Options-chain checks passed: normalization, nanosecond timestamps, spreads, freshness, liquidity grades, hard blocks, truncation, and rejection.");
