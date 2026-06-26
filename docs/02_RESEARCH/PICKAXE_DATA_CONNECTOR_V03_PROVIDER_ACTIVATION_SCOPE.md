# Pickaxe Data Connector v0.3 — Secure Provider Activation Scope

Status: v0.3B secure adapter implemented locally; external activation remains blocked pending commercial approval, a server-only credential, explicit realtime/delayed entitlement, and the canonical provider legal gates in `PICKAXE_VERIFIED_OPTIONS_DATA_PROVIDER_LEGAL_ARCHITECTURE_REVIEW_V1.md`.
Legal architecture revalidation: 2026-06-26. Alpha Vantage remains a fallback underlying quote candidate only; Massive Business is now the selected options-chain due-diligence candidate.
Baseline: Pickaxe Data Connector v0.2 at implementation commit `b433f6d`, hosted through GitHub Pages run `27936340345` and deployment `5147646743`.
Final reviewer: CEO B.
Recommended first quote provider: Alpha Vantage fallback, only after commercial approval and entitlement.
Recommended first data type: one `QuoteSnapshot` for `QQQ`.
Required transport: local/server proxy only.

## 1. Decision

The first quote-provider activation record remains deliberately narrow and remains blocked:

```text
Local browser
  -> existing provider abstraction
  -> GET /api/provider/quote?ticker=QQQ
  -> local server reads PICKAXE_ALPHA_VANTAGE_API_KEY
  -> Alpha Vantage TIME_SERIES_INTRADAY (1-minute)
  -> normalized QuoteSnapshot
  -> stale-data firewall
  -> source/data confidence
  -> explicitly labeled UI state
```

The v0.3B local implementation contains the normalized adapter and timestamp/freshness parser, but it fails closed before any external request unless live services, the approved provider mode, the exact `QQQ` ticker, a server-only key, an explicit realtime/delayed entitlement, and commercial-use approval are all present. The public frontend does not call it.

This quote adapter is not the first options-chain path. The 2026-06-26 legal architecture review selects Massive Business Options for written options-chain due diligence and keeps Alpha Vantage as a fallback underlying quote candidate.

GitHub Pages must continue to load without a server. On hosted static routes:

- `demoProvider` remains the only active provider;
- `localProxyProvider` and every future provider remain `UNAVAILABLE`;
- no provider request is made;
- no key, token, credential, private endpoint, or environment value reaches browser code;
- failed or missing provider data is never replaced silently with demo data.

## 2. Why a Secure Proxy Is Mandatory

GitHub Pages publishes browser-readable static files. Any key placed in HTML, JavaScript, CSS, JSON, a source map, query parameter, browser storage, or a public build variable is public and must be treated as compromised.

The proxy is the security boundary because it can:

- read secrets from the server process environment;
- restrict provider functions and tickers;
- omit credentials from responses and logs;
- normalize provider-specific fields before the browser sees them;
- apply timeout, size, status, and malformed-response handling;
- enforce starter rate limits;
- pass snapshots through freshness and source-confidence rules;
- return `UNAVAILABLE` without breaking the static UI.

The proxy does not create execution authority. It must never expose broker, account, order, position, or trading endpoints.

## 3. Existing Repository Fit

The repository already contains:

- `server.mjs`, a local-development Node server that is not deployed by GitHub Pages;
- ignored `.env.local` loading;
- explicit static/demo defaults;
- provider definitions and normalized contracts in the v0.2 frontend architecture;
- route smoke validation that launches the local server with live services disabled.

Therefore v0.3B extends the local-only endpoint contract without introducing a framework, dependency, hosted backend, cache, database, or new browser storage.

### Local scaffold

`GET /api/provider/quote?ticker=QQQ`

Default response:

- HTTP `503`;
- `dataMode: "UNAVAILABLE"`;
- `errorCode: "PROVIDER_NOT_CONFIGURED"`;
- all market values and provider timestamps `null`;
- `activationAuthorized: false`;
- no external request.

If local mode is selected but live services, the key, entitlement, commercial approval, or exact ticker authorization is absent, the endpoint returns a structured stop state and makes no external request. Invalid tickers return a normalized `ERROR`.

## 4. Provider Candidate Ranking

Current provider capabilities and commercial terms can change. The official review was refreshed on June 23, 2026 and must be repeated immediately before credentialed activation.

| Rank | Candidate | Security / cost / documentation | Quote fit | Options upgrade path | Decision |
| --- | --- | --- | --- | --- | --- |
| 1 | Local Proxy | Required security transport; no external data itself; simplest hosted separation. | Enables one controlled quote endpoint. | Can later isolate options adapters. | **Mandatory activation boundary.** |
| 2 | Alpha Vantage | Simple key-based REST documentation. Default quote/intraday behavior is historical or end-of-day; realtime or 15-minute delayed U.S. data requires premium entitlement. The terms classify company/public-product use as commercial and require direct approval. | Technically suitable only through timestamped intraday bars and only after commercial approval. | Realtime options are premium and require a later entitlement and product-terms review. | **Adapter implemented; activation legally blocked until approval.** |
| 3 | Manual Snapshot | No provider key or network risk; timestamp and source can be required. | Safe operational fallback, not automated provider activation. | Manual options input is possible but not automatically verified. | Keep as the safest fallback and test fixture. |
| 4 | Finnhub | Clear quote API and explicit `429` rate-limit behavior; key still requires proxy protection. | Good alternate quote candidate. | Broader intelligence path, but options fit is weaker for the first Pickaxe sequence. | Secondary quote candidate. |
| 5 | Massive / Polygon | Strong stock quote/trade coverage and an eventual options-data path; plan, exchange, display, and redistribution rules need careful review. | Technically strong. | Stronger long-term options path. | Defer until licensing and plan fit are approved. |
| 6 | Tradier | Clear equities/options quote model and a direct options upgrade path, but real-time market data is tied to brokerage-account status; sandbox data is delayed. | Good technically, higher account/entitlement complexity. | Strong. | Do not use first; avoid mixing provider activation with brokerage context. |

Official references reviewed for this scope:

- Alpha Vantage API documentation: <https://www.alphavantage.co/documentation/>
- Alpha Vantage support and limits: <https://www.alphavantage.co/support/>
- Alpha Vantage realtime-data policy: <https://www.alphavantage.co/realtime_data_policy/>
- Alpha Vantage terms of service: <https://www.alphavantage.co/terms_of_service/>
- Finnhub rate-limit documentation: <https://finnhub.io/docs/api/rate-limit>
- Tradier market-data documentation: <https://docs.tradier.com/docs/market-data>
- Tradier quote fields: <https://docs.tradier.com/docs/quotes>
- Massive stock REST overview: <https://massive.com/docs/rest/stocks/overview>

## 5. First Activation Target

### Provider

Alpha Vantage, subject to confirmed commercial-use approval, premium market-data entitlement, attribution requirements, and a server-only credential.

### Data type

One `QuoteSnapshot` for `QQQ`, requested manually through the local server only.

### Why this is first

- It tests the smallest normalized contract.
- It avoids option-chain complexity, large payloads, Greeks, OCC symbology, and brokerage context.
- It exercises source, quote type, timestamp, timezone, freshness, and confidence requirements.
- It can be rate-limited to a single explicit request.
- Failure can remain isolated from the hosted demo experience.

The adapter uses `TIME_SERIES_INTRADAY` rather than `GLOBAL_QUOTE` because the simple quote response does not provide the precise market timestamp required by Pickaxe. Historical/default responses are rejected. `LIVE` is used only when the server explicitly requests the provider's realtime entitlement; `DELAYED` is used only for the documented 15-minute delayed entitlement. Provider time and timezone are preserved, and stale data remains visibly blocked by freshness diagnostics.

## 6. Environment Variables

Names only; never commit values:

```text
PICKAXE_PROVIDER_MODE=alpha-vantage-quote
PICKAXE_ALPHA_VANTAGE_API_KEY=
PICKAXE_ALPHA_VANTAGE_ENTITLEMENT=realtime|delayed
PICKAXE_ALPHA_VANTAGE_COMMERCIAL_USE_APPROVED=false
PICKAXE_FINNHUB_API_KEY=
PICKAXE_TRADIER_TOKEN=
PICKAXE_POLYGON_API_KEY=
```

Rules:

- Store local values only in ignored `.env.local` or the process environment.
- Do not add a real `.env` file.
- Do not expose values through `/api/health`, error messages, logs, browser storage, HTML, or public JavaScript.
- Do not prefix secrets with browser-public conventions.
- Rotate a key immediately if it appears in Git history, browser source, logs, screenshots, or an issue.

No `.env.example` is added because the repository’s current `.gitignore` intentionally ignores `.env.*`; this canonical document is the safe placeholder record.

## 7. v0.3B Activation Sequence

1. Current official documentation, terms, quote basis, timestamp fields, and rate limits were reviewed on June 23, 2026.
2. CEO B authorized one provider/ticker readiness implementation through the current website-completion request.
3. The adapter remains disabled until a commercial-use agreement and premium entitlement are obtained.
4. Set the key only in the local server environment.
5. Call only `TIME_SERIES_INTRADAY` for `QQQ`, `1min`, `compact`, with an explicit `realtime` or `delayed` entitlement.
6. Enforce one manual provider request per server process, an eight-second timeout, and a 1 MB response limit.
7. Reject non-JSON, rate-limit, provider-note, missing-field, mismatched-symbol, and malformed payloads.
8. Preserve the provider’s actual market timestamp and timezone; never synthesize them.
9. Run the stale-data classifier with a five-minute realtime limit or 25-minute delayed limit.
10. Return the normalized response without credentials or raw provider internals.
11. Add an explicit local-only frontend opt-in only if separately authorized after legal and credential gates pass.
12. Keep hosted GitHub Pages on `demoProvider`.

## 8. Security Rules

- Allowlist provider mode and data type.
- Validate ticker with a bounded pattern and length.
- Use `GET` only for the first quote read.
- Never accept a provider URL from the browser.
- Never proxy arbitrary hosts, paths, headers, or query strings.
- Never forward browser-supplied authorization headers.
- Keep credentials server-side.
- Use a bounded timeout and response-size limit.
- Treat HTTP `401`, `403`, `429`, `5xx`, provider notes, and malformed bodies as structured failures.
- Do not log response bodies or secrets.
- Do not cache or persist snapshots in v0.3B.
- Do not write LocalStorage, signal data, journal data, or archive data.
- Do not retry automatically.
- Do not poll.
- Do not activate options, news, technicals, or market regime in the same sprint.

## 9. Normalization and Truth Requirements

A successful future response must populate:

- `ticker`
- `price`
- `change`
- `changePercent`
- `marketTime`
- `source`
- `sourceUrl`
- `dataMode`
- `quoteType`
- `timezone`
- `receivedAt`
- `isStale`
- `staleReason`

`receivedAt` is the local proxy receipt time. It is not the market timestamp. `marketTime` must come from a documented provider field or remain `null`.

No response may be called verified merely because an HTTP request succeeded. Source identity, field completeness, quote basis, timestamp semantics, freshness, and failure state all remain independent gates.

## 10. Hosted and Failure Behavior

| Condition | Required result |
| --- | --- |
| GitHub Pages | Existing DEMO UI loads; proxy remains unavailable; no provider request. |
| Local default mode | Structured `UNAVAILABLE`; no provider request. |
| Invalid ticker | Structured `ERROR`; no provider request. |
| Mode enabled, key missing | Structured `UNAVAILABLE / API_KEY_MISSING`; no provider request. |
| Live services disabled | Structured `UNAVAILABLE / LIVE_SERVICES_DISABLED`; no provider request. |
| Ticker other than QQQ | Structured `ERROR / TICKER_NOT_AUTHORIZED`; no provider request. |
| Entitlement absent or not realtime/delayed | Structured `UNAVAILABLE / ENTITLEMENT_NOT_CONFIGURED`; no provider request. |
| Commercial approval absent | Structured `UNAVAILABLE / COMMERCIAL_USE_APPROVAL_REQUIRED`; no provider request. |
| Manual request already used | Structured `UNAVAILABLE / MANUAL_REQUEST_LIMIT_REACHED`; no repeated provider request. |
| Timeout, `429`, provider error, malformed body | Structured `ERROR`; never demo substitution. |
| Stale response | Preserve source and price, set `isStale: true`, and require manual review; never claim current actionability. |

## 11. QA Checklist for v0.3B

- [ ] Key exists only in ignored local/server environment.
- [ ] Git and public-source scans find no credential.
- [ ] Hosted routes load with the proxy absent.
- [ ] Default local endpoint returns normalized `UNAVAILABLE`.
- [ ] Invalid ticker returns normalized `ERROR`.
- [ ] Missing key returns `API_KEY_MISSING`.
- [x] A deterministic QQQ provider fixture returns a normalized contract without making a live provider request.
- [ ] Provider market time is preserved or omitted, never invented.
- [ ] Quote type and timezone are explicit.
- [ ] Freshness diagnostics show received time, current time, age, maximum age, and reason.
- [ ] Source confidence is labeled source/data confidence.
- [x] Provider rejection does not retry or substitute demo data.
- [x] Malformed and missing-field handling returns a structured error.
- [ ] No cache, persistence, LocalStorage, or signal-data write occurs.
- [ ] `demoProvider` remains the hosted default.
- [ ] Required Alerts, Founder, Staging, bridge, V3.1, and Starlight regression QA passes.

## 12. Rollback Plan

1. Set `PICKAXE_PROVIDER_MODE=disabled` or remove it.
2. Restart the local server.
3. Confirm `/api/provider/quote?ticker=QQQ` returns `PROVIDER_NOT_CONFIGURED`.
4. Remove any separately authorized frontend opt-in.
5. Revoke or rotate the provider key if exposure is suspected.
6. Confirm hosted GitHub Pages remains unchanged and demo-only.
7. Re-run the full validation and route/browser QA family.

Rollback must not require deleting provider contracts or altering the v0.2 hosted checkpoint.

## 13. Stop Conditions

Stop immediately if activation would require:

- a key in frontend or committed files;
- an arbitrary open proxy;
- a public GitHub Pages dependency on the local server;
- a fake price, timestamp, quote type, provider state, or verification claim;
- automatic fallback from failed provider data to unlabeled demo data;
- persistence, polling, retries, caching, alert delivery, Options Hub, or execution;
- a broker/account connection;
- a route, renderer, packet, review queue, LocalStorage key, or `data/signal-alerts.json` change;
- unclear provider terms, attribution, licensing, or market-data entitlement;
- more than one provider or data type in the first activation sprint.

## 14. v0.3B Secure-Readiness Acceptance Criteria

The secure-readiness implementation passes when:

1. The provider ranking and one-ticker target remain explicit.
2. The local proxy is disabled by default.
3. Commercial approval, key, entitlement, mode, live-service, and ticker gates all fail closed before fetch.
4. The adapter uses a fixed provider host and fixed intraday function; the browser cannot supply a provider URL.
5. The parser preserves source, market time, timezone, receipt time, quote basis, and freshness diagnostics.
6. Daily change fields remain `null` rather than being inferred from one-minute bars.
7. Provider errors never trigger an unlabeled demo fallback.
8. Automated fixture coverage verifies the normalized success path without a real credential or provider call.
9. GitHub Pages remains static, demo-first, and backend-independent.
10. Existing routes, renderers, storage contracts, safety language, mirrors, and signal data remain intact.

## 15. 2026-06-26 Revalidation Note

This document remains the canonical record for the existing blocked Alpha Vantage quote adapter and secure local proxy pattern. It is superseded for options-chain provider selection by `docs/02_RESEARCH/PICKAXE_VERIFIED_OPTIONS_DATA_PROVIDER_LEGAL_ARCHITECTURE_REVIEW_V1.md`.

Revalidated status:

- Alpha Vantage quote adapter remains fail-closed and local-only.
- No external Alpha Vantage request is authorized.
- Alpha Vantage self-serve/personal use is not approved for Pickaxe public/commercial use.
- Commercial use, realtime/delayed entitlement, timestamp semantics, display rights, storage rights, and attribution remain blocked until written confirmation.
- Massive Business should be the first options-chain due-diligence path if CEO B authorizes vendor follow-up.
- No public integration, browser provider request, cache, polling, retry, alert delivery, credential creation, broker path, or GitHub Pages dependency is authorized.

## 16. Next Bounded Sprint

Recommended next:

`Massive Business Licensing Confirmation Pack — vendor outreach / docs-only`

Do not start any credentialed request until the selected provider confirms commercial use for Pickaxe Capital and CEO B authorizes server-only credential setup and entitlement. Public/browser integration remains a later, separately bounded decision.
