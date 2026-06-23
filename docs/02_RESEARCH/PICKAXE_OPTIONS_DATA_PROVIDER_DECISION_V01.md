# Pickaxe Options Data Provider Decision v0.1

Status: Provider selected for commercial/licensing due diligence. No options provider is connected.
Date reviewed: June 23, 2026.
Final reviewer: CEO B.
Owner route: existing Options Alerts at `/` and `#/alerts`.
Selected provider candidate: Massive business options data.
Selected first data scope: one filtered `QQQ` option-chain snapshot for one expiration.

## Decision

Use Massive as the first options-chain provider candidate, subject to a written business/commercial agreement and explicit confirmation of display, storage, redistribution, attribution, and realtime entitlements.

Do not use a brokerage API as the first options-data dependency. Pickaxe must preserve the architectural boundary between research data and execution.

```text
CEO B manual request
  -> local/server-only Pickaxe proxy
  -> fixed Massive option-chain endpoint
  -> QQQ + one approved expiration + bounded contract filters
  -> normalized OptionsChainSnapshot
  -> timestamp and stale-data firewall
  -> liquidity and contract-quality gates
  -> CEO B manual review
  -> no broker execution
```

## Why Massive Is the Best Fit

The official option-chain snapshot endpoint provides the fields Pickaxe needs in one provider response:

- contract identity, expiration, type, and strike;
- latest bid and ask plus quote sizes;
- a quote timestamp suitable for freshness checks;
- latest trade data when the subscribed plan includes trades;
- daily volume;
- prior-session open interest;
- implied volatility;
- delta, gamma, theta, and vega when available;
- underlying-asset context;
- filtering by expiration, strike, and contract type.

The official documentation currently labels Options Starter and Developer chain snapshots as 15-minute delayed and Options Advanced as realtime. Business use must use the applicable business terms and market-data agreement; individual pricing or rights must not be assumed to cover Pickaxe Capital.

Massive is preferred over a brokerage-coupled source because it allows Pickaxe to buy market data without adding account, order, position, or execution authority.

## Provider Comparison

| Provider | Options coverage | Timestamp fit | Commercial / architecture fit | Decision |
| --- | --- | --- | --- | --- |
| Massive | Chain snapshot includes quotes, trades, IV, Greeks, volume, and open interest. | Strong: documented quote/trade timestamps support per-contract freshness. | Business plans exist; commercial agreement and market-data rights still require confirmation. No brokerage dependency. | **Selected for due diligence.** |
| Alpha Vantage | Realtime full-chain endpoint with optional Greeks/IV; premium 600 or 1200 requests/minute plan required. | Insufficiently explicit in current public options documentation for Pickaxe's per-contract timestamp rule. | Same provider family as the QQQ quote adapter, but commercial approval remains required. | Keep as fallback only after a sample response proves timestamp semantics. |
| Tradier | Realtime options chain for brokerage accounts; delayed sandbox; ORATS IV/Greeks. | Quote basis is usable, but official guidance says Greeks are hourly. | Realtime data requires a Tradier Brokerage account and production token, creating avoidable brokerage coupling. | Do not select first. |

## Official Sources

- Massive option-chain snapshot: <https://massive.com/docs/rest/options/snapshots/option-chain-snapshot>
- Massive option-contract snapshot: <https://massive.com/docs/rest/options/snapshots/option-contract-snapshot>
- Massive market-data terms: <https://massive.com/legal/market-data-terms-of-service>
- Massive business terms: <https://massive.com/legal/businesses-terms-of-service>
- Alpha Vantage options documentation: <https://www.alphavantage.co/documentation/>
- Alpha Vantage commercial terms: <https://www.alphavantage.co/terms_of_service/>
- Tradier options-chain endpoint: <https://docs.tradier.com/reference/brokerage-api-markets-get-options-chains>
- Tradier market-data rules: <https://docs.tradier.com/docs/market-data>

## First Bounded Request

The first credentialed options request must be narrower than a full unfiltered chain:

- underlying: `QQQ`;
- expiration: one CEO B-approved date;
- contract type: call or put, never both in the first request;
- strike range: a bounded range around the verified underlying price;
- result limit: no more than 50 contracts;
- request mode: one manual request per local server process;
- no pagination follow-up in the first test;
- no polling, retry, cache, persistence, alert delivery, or browser connection.

The exact expiration and strike range must be supplied only after the underlying quote is verified in the same review workflow.

## Required Normalized Fields

### Chain-level fields

- `ticker`
- `expiration`
- `source`
- `sourceUrl`
- `dataMode`
- `quoteType`
- `receivedAt`
- `isStale`
- `staleReason`
- `requestId`
- `contractCount`
- `truncated`

### Contract-level fields

- `symbol`
- `type`
- `strike`
- `expiration`
- `bid`
- `ask`
- `bidSize`
- `askSize`
- `mid`
- `spread`
- `spreadPercent`
- `last`
- `lastTradeTime`
- `quoteTime`
- `volume`
- `openInterest`
- `openInterestAsOf`
- `impliedVolatility`
- `delta`
- `gamma`
- `theta`
- `vega`
- `liquidityGrade`
- `dataMode`
- `isStale`
- `staleReason`

## Truth and Freshness Rules

- Convert provider nanosecond timestamps to ISO 8601 UTC without inventing timezone information.
- Preserve the raw provider timestamp in server diagnostics, not public output.
- Quote freshness is evaluated per contract from the latest quote timestamp.
- Trade freshness is separate from quote freshness.
- Open interest is explicitly labeled prior-session data unless the provider contract states otherwise.
- Greeks and IV may be absent. Missing values remain `null`; they are never estimated silently.
- A missing bid, ask, quote timestamp, or source identity blocks contract-quality approval.
- A crossed or negative market, zero/negative price, impossible spread, mismatched ticker, or expired contract is rejected.
- A stale quote cannot be promoted by strong volume, open interest, score, or narrative.
- `LIVE` and `DELAYED` describe provider entitlement, not guaranteed correctness or expected return.
- All user-facing numbers must show source, quote type, timestamp, timezone/UTC basis, and verification state.

## Contract Quality Gates

A contract remains ineligible for CEO B review if any hard block applies:

- missing or stale quote timestamp;
- bid or ask missing;
- ask below bid;
- spread exceeds the approved threshold;
- volume or open interest is unavailable where the setup requires it;
- expiration does not match the approved packet;
- contract symbol cannot be parsed and matched to the response details;
- event risk or IV context is missing;
- provider response is partial, malformed, rate-limited, or outside the licensed entitlement.

Liquidity grade is a research-quality label only. It is not a prediction of fills or profitability.

## Security and Legal Gates

Before any implementation can make a request:

1. Massive confirms Pickaxe Capital's business/commercial use in writing.
2. The agreement confirms realtime or delayed options entitlement.
3. Display, internal use, storage, derived-data, attribution, and redistribution rules are recorded.
4. The API key exists only in ignored local/server environment state.
5. The endpoint host, path, ticker, expiration, filters, and result limit are allowlisted.
6. Response size and timeout limits are implemented.
7. Browser callers cannot supply a provider URL, authorization header, or arbitrary query.
8. The public GitHub Pages app remains independent from the local server.
9. No account, order, position, or broker endpoint is added.

## Stop Conditions

Stop if any of these remain unclear:

- commercial-use rights;
- realtime/delayed entitlement;
- display or redistribution rights;
- quote timestamp semantics;
- whether quote fields are included in the selected plan;
- whether options data requires an additional stocks plan for the underlying;
- attribution requirements;
- request limits;
- data retention restrictions.

Do not substitute free, scraped, broker-page, or unlabeled data.

## Next Bounded Sprint

`Options Data Connector v0.2 — Massive business/licensing confirmation and one fixture-backed parser`

That sprint may implement a pure response normalizer and deterministic fixtures. It must not make a credentialed request until the legal and plan gates above are documented as passed.
