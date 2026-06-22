# Pickaxe Data Connector v0.3 — Secure Provider Activation Scope

Status: v0.3A local scope and proxy-readiness plan. No external provider is activated.
Baseline: Pickaxe Data Connector v0.2 at implementation commit `b433f6d`, hosted through GitHub Pages run `27936340345` and deployment `5147646743`.
Final reviewer: CEO B.
Recommended first provider: Alpha Vantage.
Recommended first data type: one `QuoteSnapshot` for `QQQ`.
Required transport: local/server proxy only.

## 1. Decision

The first real-provider activation should be deliberately narrow:

```text
Local browser
  -> existing provider abstraction
  -> GET /api/provider/quote?ticker=QQQ
  -> local server reads PICKAXE_ALPHA_VANTAGE_API_KEY
  -> Alpha Vantage GLOBAL_QUOTE
  -> normalized QuoteSnapshot
  -> stale-data firewall
  -> source/data confidence
  -> explicitly labeled UI state
```

The v0.3A implementation stops before the external-provider call. The local endpoint exists only as a disabled-by-default contract scaffold and always returns a structured `UNAVAILABLE` or `ERROR` response. The public frontend does not call it.

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

Therefore v0.3A adds one local-only endpoint contract instead of introducing a framework, dependency, hosted backend, cache, database, or new browser storage.

### Local scaffold

`GET /api/provider/quote?ticker=QQQ`

Default response:

- HTTP `503`;
- `dataMode: "UNAVAILABLE"`;
- `errorCode: "PROVIDER_NOT_CONFIGURED"`;
- all market values and provider timestamps `null`;
- `activationAuthorized: false`;
- no external request.

If local mode is selected but the key is absent, the endpoint returns `API_KEY_MISSING`. If both mode and key are present during v0.3A, it still returns `ACTIVATION_NOT_AUTHORIZED` and makes no external request. Invalid tickers return a normalized `ERROR`.

## 4. Provider Candidate Ranking

Current provider capabilities and commercial terms can change. v0.3B must re-check official documentation and licensing immediately before activation.

| Rank | Candidate | Security / cost / documentation | Quote fit | Options upgrade path | Decision |
| --- | --- | --- | --- | --- | --- |
| 1 | Local Proxy | Required security transport; no external data itself; simplest hosted separation. | Enables one controlled quote endpoint. | Can later isolate options adapters. | **Mandatory activation boundary.** |
| 2 | Alpha Vantage | Simple key-based REST documentation and a one-ticker quote endpoint. The official documentation states that the default quote is end-of-day/historical; realtime or 15-minute delayed US quotes require premium entitlement. | Strong first provider-contract experiment, provided v0.3B does not mislabel end-of-day data as current. | Realtime options are premium and require a later entitlement and product-terms review. | **First external-provider candidate.** |
| 3 | Manual Snapshot | No provider key or network risk; timestamp and source can be required. | Safe operational fallback, not automated provider activation. | Manual options input is possible but not automatically verified. | Keep as the safest fallback and test fixture. |
| 4 | Finnhub | Clear quote API and explicit `429` rate-limit behavior; key still requires proxy protection. | Good alternate quote candidate. | Broader intelligence path, but options fit is weaker for the first Pickaxe sequence. | Secondary quote candidate. |
| 5 | Massive / Polygon | Strong stock quote/trade coverage and an eventual options-data path; plan, exchange, display, and redistribution rules need careful review. | Technically strong. | Stronger long-term options path. | Defer until licensing and plan fit are approved. |
| 6 | Tradier | Clear equities/options quote model and a direct options upgrade path, but real-time market data is tied to brokerage-account status; sandbox data is delayed. | Good technically, higher account/entitlement complexity. | Strong. | Do not use first; avoid mixing provider activation with brokerage context. |

Official references reviewed for this scope:

- Alpha Vantage API documentation: <https://www.alphavantage.co/documentation/>
- Finnhub rate-limit documentation: <https://finnhub.io/docs/api/rate-limit>
- Tradier market-data documentation: <https://docs.tradier.com/docs/market-data>
- Tradier quote fields: <https://docs.tradier.com/docs/quotes>
- Massive stock REST overview: <https://massive.com/docs/rest/stocks/overview>

## 5. First Activation Target

### Provider

Alpha Vantage, subject to a fresh terms, attribution, rate-limit, and data-entitlement review in v0.3B.

### Data type

One `QuoteSnapshot` for `QQQ`, requested manually during local QA only.

### Why this is first

- It tests the smallest normalized contract.
- It avoids option-chain complexity, large payloads, Greeks, OCC symbology, and brokerage context.
- It exercises source, quote type, timestamp, timezone, freshness, and confidence requirements.
- It can be rate-limited to a single explicit request.
- Failure can remain isolated from the hosted demo experience.

The first response must not be labeled `LIVE`, `DELAYED`, or `VERIFIED` until the provider’s quote basis and timestamp semantics are confirmed from the response and current provider documentation. If the default end-of-day/historical response cannot be represented truthfully by the current data-mode enum, v0.3B must return `UNAVAILABLE` or separately authorize a contract extension; it must not force the response into a misleading mode.

## 6. Environment Variables

Names only; never commit values:

```text
PICKAXE_PROVIDER_MODE=alpha-vantage-quote
PICKAXE_ALPHA_VANTAGE_API_KEY=
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

No `.env.example` is added in v0.3A because the repository’s current `.gitignore` intentionally ignores `.env.*`; this canonical document is the safe placeholder record.

## 7. v0.3B Activation Sequence

1. Re-check current official Alpha Vantage documentation, terms, quote basis, timestamp fields, attribution, and limits.
2. Obtain CEO B authorization for exactly one provider and one ticker.
3. Set the key only in the local server environment.
4. Add a server-side timeout and one-request/manual-trigger guard.
5. Call only the approved quote endpoint.
6. Reject non-JSON, oversized, rate-limit, provider-note, missing-field, and malformed payloads.
7. Map the response to the existing `QuoteSnapshot` contract.
8. Preserve the provider’s actual market timestamp and timezone; never synthesize them.
9. Run the stale-data classifier.
10. Compute source/data confidence.
11. Return the normalized response without credentials or raw provider internals.
12. Add an explicit local-only frontend opt-in only if separately authorized.
13. Keep hosted GitHub Pages on `demoProvider`.

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
| Mode and key present during v0.3A | Structured `UNAVAILABLE / ACTIVATION_NOT_AUTHORIZED`; no provider request. |
| Future timeout, `429`, provider error, malformed body | Structured `ERROR` or `UNAVAILABLE`; never demo substitution. |
| Future stale/expired response | Preserve source; label `STALE` or block as `EXPIRED`; never claim current data. |

## 11. QA Checklist for v0.3B

- [ ] Key exists only in ignored local/server environment.
- [ ] Git and public-source scans find no credential.
- [ ] Hosted routes load with the proxy absent.
- [ ] Default local endpoint returns normalized `UNAVAILABLE`.
- [ ] Invalid ticker returns normalized `ERROR`.
- [ ] Missing key returns `API_KEY_MISSING`.
- [ ] One approved QQQ request returns a normalized contract.
- [ ] Provider market time is preserved or omitted, never invented.
- [ ] Quote type and timezone are explicit.
- [ ] Freshness diagnostics show received time, current time, age, maximum age, and reason.
- [ ] Source confidence is labeled source/data confidence.
- [ ] Rate-limit response does not retry or break the page.
- [ ] Malformed response does not break the page.
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

## 14. Acceptance Criteria

v0.3A passes when:

1. The provider ranking and first activation target are explicit.
2. The local proxy boundary is disabled by default.
3. The scaffold makes no external provider request.
4. The browser frontend does not call the scaffold.
5. Missing configuration returns normalized `UNAVAILABLE`.
6. Invalid input returns normalized `ERROR`.
7. Environment variable names are documented without values.
8. GitHub Pages remains static, demo-first, and backend-independent.
9. Security, QA, rollback, and stop rules are recorded.
10. Existing routes, renderers, storage contracts, safety language, mirrors, and signal data remain intact.

## 15. Next Bounded Sprint

Recommended next:

`Pickaxe Data Connector v0.3B — First QuoteSnapshot Provider Activation through secure local proxy`

This is a recommendation only. It is not started or authorized by v0.3A.
