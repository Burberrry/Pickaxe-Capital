# Pickaxe Verified Options Data Provider Legal Architecture Review V1

Status: Canonical legal and architecture review.
Authority: CEO B.
Date reviewed: 2026-06-26.
Scope: Docs-only provider legal, commercial, entitlement, and architecture decision record for future Options Alerts data activation.
Runtime impact: None. No provider, credential, backend, public display, alert delivery, broker, account, or execution path is activated by this review.

## 1. Executive Decision

Massive is the selected first options-chain provider candidate for written business due diligence only. It is not approved, connected, credentialed, or public-facing.

The selected future path is:

```text
Massive Options Business / written order form
  -> OPRA and third-party data rights confirmed in writing
  -> server-only credential
  -> one CEO B-authorized local QQQ chain proof
  -> normalized snapshot
  -> freshness, entitlement, and field filters
  -> Research Only display candidate
  -> Separate Public Activation Required
```

Self-serve individual market-data plans are not acceptable for Pickaxe Capital's public or commercial use. Alpha Vantage remains a fallback for a one-symbol underlying quote only after written commercial approval and entitlement confirmation. Tradier is not selected for the first path because its real-time market-data path is brokerage-account coupled. Cboe/OPRA and institutional feeds remain serious future paths, but they are not a simple first local proof.

No public display of live or delayed options-chain data is authorized by this document. Public activation requires a separate CEO B decision, counsel/vendor confirmation, and an implementation sprint.

## 2. Current Runtime Truth

The active Pickaxe app remains a static-first vanilla HTML/CSS/JavaScript SPA served from `public/` through GitHub Pages. Browser state is LocalStorage/static only.

Current product truth remains:

- `Research Only`
- `Demo / Static Data`
- `Source Required`
- `Unknown / No Verified Time`
- `Not Financial Advice`
- `No Broker Execution`
- `No External Action`
- `Options involve substantial risk`

No backend, live provider adapter, credential, account, broker execution, alert delivery, authentication, payment, subscription, autonomous publishing, or public market-data entitlement is active.

## 3. Existing Provider Work

The repository already contains provider-preparation work, but it remains fail-closed:

- `lib/massive-options-chain.mjs` normalizes deterministic Massive-style options-chain fixture data into a bounded `OptionsChainSnapshot`.
- `scripts/check-options-chain.mjs` validates the Massive normalizer without a live provider request.
- `lib/alpha-vantage-quote.mjs` contains a local-only Alpha Vantage quote adapter that fails closed unless every authorization gate is present.
- `scripts/check-provider-quote.mjs` validates the Alpha quote adapter using deterministic fixtures and fail-closed states.
- `server.mjs` exposes local-development demo/static endpoints by default and keeps provider quote behavior unavailable unless separately configured.

This review does not modify runtime code and does not authorize any credentialed request.

## 4. Research Method

Research used current official or primary provider sources only. No protected-site scraping, account creation, vendor outreach, credential request, contract acceptance, or commercial negotiation was performed.

Review method:

1. Read existing Pickaxe provider docs and local adapter code.
2. Review official provider docs, pricing pages, legal pages, policy pages, and fee schedules.
3. Treat API availability, commercial rights, display rights, redistribution rights, storage rights, and derived-data rights as separate gates.
4. Mark unclear rights as `VENDOR CONFIRMATION REQUIRED`.
5. Preserve the current static/demo runtime boundary.

This is a technical and product governance review, not legal advice.

## 5. Official Source Ledger

| Source | Official reviewed area | Decision relevance |
| --- | --- | --- |
| Massive options overview and chain snapshot docs | Options-chain snapshot fields, quotes, trades, Greeks, IV, open interest, underlying context, plan recency | Strongest first API fit for Pickaxe's one-chain proof. |
| Massive pricing | Individual plan cost, plan recency, self-serve limits, quote/trade availability | Self-serve plans do not resolve Pickaxe business/public rights. Business price is not public. |
| Massive market-data terms | Individual/personal market-data limits, OPRA subscriber terms, derivative/republication restrictions | Individual/self-serve use is not acceptable for Pickaxe public/commercial product. |
| Massive business terms | Business account, authorized users, third-party agreements, customer apps, restrictions, termination/deletion | Potentially suitable only through written business/order-form rights. |
| Massive stock last quote docs | Stock NBBO bid/ask, sizes, exchange details, timestamps | Best aligned underlying quote path if included in same business entitlement. |
| Alpha Vantage documentation | `TIME_SERIES_INTRADAY`, `REALTIME_OPTIONS`, `HISTORICAL_OPTIONS`, entitlement parameters | Useful fallback, but options timestamp semantics and public rights require confirmation. |
| Alpha Vantage premium and policy pages | Premium plan rates, realtime/delayed policy, commercial onboarding | Commercial use requires direct onboarding; self-serve personal plan is not enough. |
| Alpha Vantage terms | Personal/non-commercial default license and commercial-use triggers | Public/product use requires written commercial terms. |
| Tradier market-data docs | Brokerage API real-time data, sandbox delayed data, Greeks cadence, options chain endpoint | Technically usable but rejected as first path due brokerage coupling. |
| Tradier rate-limit docs | Production and sandbox per-token limits | Useful if reconsidered later under separate brokerage/data authorization. |
| OPRA official site and fee schedule | OPRA role, vendor/subscriber classification, current/delayed distinction, fees | Public display and redistribution require OPRA-aware vendor rights. |
| Cboe U.S. Options Market Data Services | Cboe One Options and Cboe options feed products | Serious institutional path, not first simple API proof. |
| Cboe DataShop Option EOD Summary | Historical/EOD options datasets, NBBO snapshots, IV/Greeks add-ons | Good archive/backtest path; not a real-time public chain source. |
| Databento OPRA/options pages | OPRA real-time/historical APIs, full direct-feed coverage, OCC symbology | Serious institutional/API candidate, likely higher integration and licensing work. |
| Intrinio options pages and guides | Delayed OPRA, business display positioning, chain/Greeks/open-interest coverage | Serious delayed/display candidate requiring terms review and sample proof. |
| ORATS data API pages | Live/delayed/historical options analytics, Greeks/IV, SMV data | Strong analytics supplement; raw display/OPRA rights still require confirmation. |

## 6. Mandatory Pickaxe Requirements

Any future options provider must meet these requirements before public use:

- Written business/commercial authorization for Pickaxe Capital.
- Written realtime or delayed entitlement.
- Written public display, internal display, derived-data, storage, retention, attribution, and redistribution terms.
- OPRA/exchange subscriber, vendor, and user-classification obligations understood.
- Server-only credentials and no frontend keys.
- Fixed-function endpoint allowlist; no arbitrary proxy.
- One underlying (`QQQ`) and one approved expiration in the first credentialed proof.
- No broker, order, account, position, portfolio, or execution dependency.
- Source, quote type, timestamp, timezone, entitlement, and verification status on every user-facing value.
- Fail-closed behavior for missing fields, stale timestamps, partial payloads, entitlement mismatch, rate limits, malformed data, or unclear rights.

## 7. Provider Shortlist

| Provider | Status | Why |
| --- | --- | --- |
| Massive | `SELECTED FOR WRITTEN DUE DILIGENCE` | Best first options-chain API fit; must use business/order-form path. |
| Alpha Vantage | `FALLBACK` | Simple quote adapter exists, but commercial and entitlement gates remain blocked. |
| Tradier | `NOT SELECTED` | Real-time data path is tied to brokerage account status. |
| OPRA direct | `NOT SELECTED` | Primary official options SIP; direct/vendor path is legal and operationally heavy. |
| Cboe One Options | `CONDITIONALLY SUITABLE` | Cboe-exchange options feed, not a full OPRA replacement for first Pickaxe chain. |
| Cboe DataShop | `CONDITIONALLY SUITABLE` | Strong historical/EOD datasets; not a first live chain proof. |
| Databento | `CONDITIONALLY SUITABLE` | Licensed OPRA API path with real-time and historical interfaces; terms/cost require review. |
| Intrinio | `CONDITIONALLY SUITABLE` | Delayed OPRA and display-oriented positioning; exact agreement must be reviewed. |
| ORATS | `FALLBACK` | Strong options analytics/Greeks; raw market-data display rights require confirmation. |

## 8. Legal / Commercial Matrix

| Provider | Public/commercial use from public terms | Required next step |
| --- | --- | --- |
| Massive self-serve individual | `NO` for Pickaxe public/commercial use | Do not use. |
| Massive Business | `PENDING WRITTEN CONFIRMATION` | Obtain order form covering apps, Edge Users, display, derived data, storage, attribution, and OPRA terms. |
| Alpha Vantage self-serve premium | `NO` for Pickaxe public/commercial use | Do not use for public product. |
| Alpha Vantage commercial | `PENDING WRITTEN CONFIRMATION` | Contact sales only in a separately authorized vendor sprint. |
| Tradier Brokerage API | `NOT SELECTED` | Do not use first; separate brokerage/data review required. |
| OPRA/Cboe/Databento/Intrinio/ORATS | `PENDING WRITTEN CONFIRMATION` | Confirm exact display, redistribution, user classification, fees, and retention rights. |

Detailed gate matrix:

| Requirement | Massive Business | Alpha Vantage Commercial | Tradier | OPRA / Cboe | Databento | Intrinio | ORATS |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Company/business use | `PENDING WRITTEN CONFIRMATION` | `PENDING WRITTEN CONFIRMATION` | `PENDING WRITTEN CONFIRMATION` | `PENDING WRITTEN CONFIRMATION` | `PENDING WRITTEN CONFIRMATION` | `PENDING WRITTEN CONFIRMATION` | `PENDING WRITTEN CONFIRMATION` |
| Commercial product use | `PENDING WRITTEN CONFIRMATION` | `PENDING WRITTEN CONFIRMATION` | `PENDING WRITTEN CONFIRMATION` | `PENDING WRITTEN CONFIRMATION` | `PENDING WRITTEN CONFIRMATION` | `PENDING WRITTEN CONFIRMATION` | `PENDING WRITTEN CONFIRMATION` |
| Internal employee/team display | `PENDING WRITTEN CONFIRMATION` | `PENDING WRITTEN CONFIRMATION` | `PENDING WRITTEN CONFIRMATION` | `PENDING WRITTEN CONFIRMATION` | `PENDING WRITTEN CONFIRMATION` | `PENDING WRITTEN CONFIRMATION` | `PENDING WRITTEN CONFIRMATION` |
| Public website display | `PENDING WRITTEN CONFIRMATION` | `PENDING WRITTEN CONFIRMATION` | `NOT SELECTED` | `PENDING WRITTEN CONFIRMATION` | `PENDING WRITTEN CONFIRMATION` | `PENDING WRITTEN CONFIRMATION` | `PENDING WRITTEN CONFIRMATION` |
| Unauthenticated public display | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `NOT SELECTED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` |
| Authenticated user display | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` |
| Raw quote redistribution | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `OPRA VENDOR RIGHTS REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` |
| Derived-data display | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` |
| Derived analytics | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `PARTIAL / ANALYTICS SUPPLEMENT` |
| Data storage | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` |
| Caching | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` |
| Audit-trail retention | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` |
| Historical replay | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `PARTIAL / HISTORICAL OPTIONS DOCUMENTED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `PARTIAL / DATASHOP HISTORICAL` | `PARTIAL / HISTORICAL API` | `PARTIAL / HISTORICAL PRODUCTS` | `PARTIAL / HISTORICAL PRODUCTS` |
| Screenshot use | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` |
| Investor-demo display | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` |
| Public marketing use | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` |
| Data export | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` |
| API-response persistence | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` |
| Attribution required | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `EXCHANGE / OPRA CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` |
| Provider logo required | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` |
| Exchange attribution required | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `PENDING WRITTEN CONFIRMATION` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` |
| OPRA agreement required | `PENDING WRITTEN CONFIRMATION` | `PENDING WRITTEN CONFIRMATION` | `PENDING WRITTEN CONFIRMATION` | `YES / ROLE TBD` | `PENDING WRITTEN CONFIRMATION` | `PENDING WRITTEN CONFIRMATION` | `PENDING WRITTEN CONFIRMATION` |
| Professional subscriber classification | `PENDING WRITTEN CONFIRMATION` | `PENDING WRITTEN CONFIRMATION` | `PENDING WRITTEN CONFIRMATION` | `LIKELY BUSINESS / PROFESSIONAL REVIEW` | `PENDING WRITTEN CONFIRMATION` | `PENDING WRITTEN CONFIRMATION` | `PENDING WRITTEN CONFIRMATION` |
| Per-user or per-device fees | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `OPRA/CBOE FEES MAY APPLY` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` |
| Per-application fees | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` |
| Redistribution fees | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `OPRA REDISTRIBUTION REVIEW REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` |
| Delayed rights differ from realtime | `YES / CONFIRM PLAN` | `YES / CONFIRM ENTITLEMENT` | `YES / BROKERAGE VS SANDBOX` | `YES / OPRA CURRENT VS DELAYED` | `YES / CONFIRM PLAN` | `YES / CONFIRM PLAN` | `YES / CONFIRM PLAN` |
| Derived rights differ from raw | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` |
| Separate market-data agreement | `YES / BUSINESS ORDER FORM` | `YES / COMMERCIAL APPROVAL` | `YES / ACCOUNT AND DATA TERMS` | `YES` | `YES / LICENSE FLOW` | `YES / AGREEMENT` | `YES / AGREEMENT` |
| Direct sales approval | `YES` | `YES FOR COMMERCIAL USE` | `PENDING` | `YES FOR DIRECT PATH` | `PENDING` | `PENDING` | `PENDING` |
| Written approval required | `YES` | `YES` | `YES` | `YES` | `YES` | `YES` | `YES` |
| Self-service plan acceptable | `NO FOR PICKAXE PUBLIC USE` | `NO FOR PICKAXE PUBLIC USE` | `NOT SELECTED` | `NO` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` |
| Termination or audit obligations | `PENDING WRITTEN CONFIRMATION` | `PENDING WRITTEN CONFIRMATION` | `PENDING WRITTEN CONFIRMATION` | `PENDING WRITTEN CONFIRMATION` | `PENDING WRITTEN CONFIRMATION` | `PENDING WRITTEN CONFIRMATION` | `PENDING WRITTEN CONFIRMATION` |
| Geographic restrictions | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` |
| Data-retention limits | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` | `UNKNOWN - VENDOR CONFIRMATION REQUIRED` |

## 9. Public Display and Redistribution Matrix

| Use case | Current status | Notes |
| --- | --- | --- |
| Internal local CEO B proof | `PENDING PROVIDER AGREEMENT` | Earliest possible credentialed test after written rights and key setup. |
| Public unauthenticated display of live options chain | `NOT APPROVED` | Requires explicit vendor/OPRA/display rights and separate implementation sprint. |
| Public unauthenticated display of delayed options chain | `NOT APPROVED` | Delayed data can still be regulated or contractually restricted. |
| Public display of derived scores only | `VENDOR CONFIRMATION REQUIRED` | Derived-data definitions and non-display restrictions must be confirmed. |
| Static fixture/demo display | `ALLOWED` | Must remain labeled demo/static/source-required. |
| Raw provider payload storage | `NOT APPROVED` | Retention/deletion rights must be written before any storage. |
| Normalized snapshot logging | `VENDOR CONFIRMATION REQUIRED` | Store only if agreement permits; otherwise use volatile diagnostics only. |

## 10. OPRA / Exchange Entitlement Review

OPRA is the official U.S. listed-options SIP that disseminates consolidated last-sale and quotation information from approved options exchanges. OPRA classifies recipients as vendors and/or subscribers. A vendor has rights to retransmit externally; a subscriber has rights for internal use only.

Important OPRA implications for Pickaxe:

- Public display to users can create vendor/distribution obligations.
- Current and delayed options data must be treated as different entitlement classes, not generic API data.
- Nonprofessional classification is limited and cannot be assumed for Pickaxe Capital company/product use.
- OPRA fee schedules include subscriber, usage-based vendor, redistribution, indirect access, direct access, and non-display categories.
- A future provider agreement must say whether Pickaxe is relying on the provider's vendor rights, becoming a vendor/subscriber itself, or operating only as an internal business subscriber.

Pickaxe must not infer OPRA rights from a generic API key.

## 11. Technical Field Matrix

| Required field class | Massive | Alpha Vantage | Tradier | Other institutional paths |
| --- | --- | --- | --- | --- |
| Contract identity | Strong | Likely strong | Strong | Strong |
| Expiration/strike/type | Strong | Strong | Strong | Strong |
| Bid/ask and sizes | Strong if plan includes quotes | Needs sample confirmation | Strong | Strong |
| Per-contract quote timestamp | Strong in Massive docs | Not sufficiently explicit in public options docs | Needs sample confirmation | Strong but vendor-specific |
| Last trade and timestamp | Strong if plan includes trades | Needs sample confirmation | Strong | Strong |
| Volume | Strong | Likely strong | Strong | Strong |
| Open interest | Strong, prior-session semantics | Needs cadence confirmation | Strong | Strong |
| IV/Greeks | Strong but may be absent | Optional `require_greeks` | ORATS courtesy/hourly cadence noted | Strong, often derived/vendor-specific |
| Underlying quote context | Present in chain docs but may require stocks plan | Quote adapter possible | Available through brokerage API | Provider-specific |

Status matrix:

| Field / behavior | Massive | Alpha Vantage | Tradier | Cboe / OPRA / DataShop | Databento | Intrinio | ORATS |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Underlying ticker | `SUPPORTED` | `SUPPORTED` | `SUPPORTED` | `SUPPORTED` | `SUPPORTED` | `SUPPORTED` | `SUPPORTED` |
| OCC option symbol | `SUPPORTED` | `SUPPORTED` | `SUPPORTED` | `SUPPORTED` | `SUPPORTED` | `SUPPORTED` | `SUPPORTED` |
| Expiration / strike / type | `SUPPORTED` | `SUPPORTED` | `SUPPORTED` | `SUPPORTED` | `SUPPORTED` | `SUPPORTED` | `SUPPORTED` |
| Exercise style / multiplier | `PARTIAL` | `NOT DOCUMENTED` | `NOT DOCUMENTED` | `PARTIAL` | `VENDOR CONFIRMATION REQUIRED` | `VENDOR CONFIRMATION REQUIRED` | `VENDOR CONFIRMATION REQUIRED` |
| Bid / ask | `SUPPORTED IF QUOTES LICENSED` | `VENDOR CONFIRMATION REQUIRED` | `SUPPORTED` | `SUPPORTED / PRODUCT-SPECIFIC` | `SUPPORTED` | `SUPPORTED` | `VENDOR CONFIRMATION REQUIRED` |
| Bid / ask size | `SUPPORTED IF QUOTES LICENSED` | `VENDOR CONFIRMATION REQUIRED` | `SUPPORTED` | `SUPPORTED / PRODUCT-SPECIFIC` | `SUPPORTED` | `SUPPORTED` | `VENDOR CONFIRMATION REQUIRED` |
| NBBO basis | `VENDOR CONFIRMATION REQUIRED` | `VENDOR CONFIRMATION REQUIRED` | `PARTIAL` | `SUPPORTED / PRODUCT-SPECIFIC` | `SUPPORTED` | `VENDOR CONFIRMATION REQUIRED` | `VENDOR CONFIRMATION REQUIRED` |
| Quote timestamp / timezone | `SUPPORTED` | `NOT DOCUMENTED FOR OPTIONS CHAIN` | `VENDOR CONFIRMATION REQUIRED` | `SUPPORTED / PRODUCT-SPECIFIC` | `SUPPORTED` | `VENDOR CONFIRMATION REQUIRED` | `VENDOR CONFIRMATION REQUIRED` |
| Quote sequence/correction | `NOT DOCUMENTED` | `NOT DOCUMENTED` | `NOT DOCUMENTED` | `PARTIAL / PRODUCT-SPECIFIC` | `VENDOR CONFIRMATION REQUIRED` | `VENDOR CONFIRMATION REQUIRED` | `VENDOR CONFIRMATION REQUIRED` |
| Last trade / size / timestamp | `SUPPORTED IF TRADES LICENSED` | `VENDOR CONFIRMATION REQUIRED` | `SUPPORTED` | `SUPPORTED / PRODUCT-SPECIFIC` | `SUPPORTED` | `SUPPORTED` | `VENDOR CONFIRMATION REQUIRED` |
| Trade conditions/corrections | `PARTIAL` | `NOT DOCUMENTED` | `VENDOR CONFIRMATION REQUIRED` | `PARTIAL / PRODUCT-SPECIFIC` | `SUPPORTED` | `VENDOR CONFIRMATION REQUIRED` | `VENDOR CONFIRMATION REQUIRED` |
| Daily volume | `SUPPORTED` | `SUPPORTED` | `SUPPORTED` | `SUPPORTED` | `SUPPORTED` | `SUPPORTED` | `SUPPORTED` |
| Open interest basis | `PREVIOUS SESSION` | `VENDOR CONFIRMATION REQUIRED` | `VENDOR CONFIRMATION REQUIRED` | `PREVIOUS SESSION / PRODUCT-SPECIFIC` | `VENDOR CONFIRMATION REQUIRED` | `SUPPORTED / CADENCE CONFIRMATION REQUIRED` | `SUPPORTED / CADENCE CONFIRMATION REQUIRED` |
| IV and core Greeks | `SUPPORTED / MAY BE ABSENT` | `CALCULATED / OPTIONAL` | `CALCULATED / HOURLY NOTE` | `CALCULATED ADD-ON` | `VENDOR CONFIRMATION REQUIRED` | `SUPPORTED` | `SUPPORTED` |
| Rho | `NOT DOCUMENTED IN CHAIN SNAPSHOT` | `SUPPORTED IN HISTORICAL OPTIONS` | `VENDOR CONFIRMATION REQUIRED` | `CALCULATED ADD-ON` | `VENDOR CONFIRMATION REQUIRED` | `VENDOR CONFIRMATION REQUIRED` | `SUPPORTED` |
| Underlying quote timestamp | `PARTIAL / STOCKS ENTITLEMENT MAY BE REQUIRED` | `SUPPORTED FOR QUOTE FALLBACK` | `SUPPORTED` | `PRODUCT-SPECIFIC` | `SUPPORTED` | `VENDOR CONFIRMATION REQUIRED` | `VENDOR CONFIRMATION REQUIRED` |
| REST snapshot | `SUPPORTED` | `SUPPORTED` | `SUPPORTED` | `PRODUCT-SPECIFIC` | `SUPPORTED` | `SUPPORTED` | `SUPPORTED` |
| Streaming/WebSocket | `SUPPORTED / PLAN-SPECIFIC` | `NOT SELECTED FOR FIRST PROOF` | `SUPPORTED / ACCOUNT-SPECIFIC` | `SUPPORTED / PRODUCT-SPECIFIC` | `SUPPORTED` | `VENDOR CONFIRMATION REQUIRED` | `VENDOR CONFIRMATION REQUIRED` |
| Filtering / max contracts | `SUPPORTED / LIMIT REQUIRED` | `PARTIAL` | `SUPPORTED BY EXPIRATION` | `PRODUCT-SPECIFIC` | `SUPPORTED` | `SUPPORTED` | `SUPPORTED` |
| Provider outage/error signaling | `VENDOR CONFIRMATION REQUIRED` | `SUPPORTED / PROVIDER ERROR PAYLOADS` | `SUPPORTED / HTTP STATUS` | `VENDOR CONFIRMATION REQUIRED` | `VENDOR CONFIRMATION REQUIRED` | `VENDOR CONFIRMATION REQUIRED` | `VENDOR CONFIRMATION REQUIRED` |

## 12. Timestamp and Freshness Matrix

| Timestamp type | Pickaxe requirement |
| --- | --- |
| Provider receipt time | Useful for diagnostics only; not a market timestamp. |
| SIP/quote timestamp | Required for freshness if bid/ask is displayed or scored. |
| Trade timestamp | Separate from quote freshness and cannot make a stale quote usable. |
| Underlying quote timestamp | Required before strike range or options packet promotion. |
| Open-interest date | Must be labeled prior-session unless provider proves otherwise. |
| Derived Greek timestamp | Must be present or labeled unavailable/stale if used as a gate. |

Default future freshness limits remain starter rules, not legal truth:

- Realtime quote: max 5 minutes old unless CEO B and provider terms set a narrower value.
- Delayed quote: max 25 minutes old for a 15-minute delayed entitlement.
- Unknown timestamp: hard block.
- Missing timezone or unparseable provider timestamp: hard block.

## 13. Rate-Limit and Payload Matrix

| Provider | Known public limit / payload issue | Pickaxe first-proof control |
| --- | --- | --- |
| Massive | Chain snapshot limit documented with max result size; plan-specific throughput varies. | One manual QQQ request, one expiration, bounded strikes, limit <= 50, no pagination. |
| Alpha Vantage | Realtime options require high premium request tiers; quote endpoint uses premium entitlement for realtime/delayed. | One manual QQQ quote only; no options proof first. |
| Tradier | Market data limits are per access token and brokerage/sandbox differ. | Not first; no brokerage token. |
| OPRA/direct/Databento | Full options feed can be large and operationally heavy. | Not first unless separately scoped. |
| Intrinio/ORATS/Cboe DataShop | Product-specific package and delivery model. | Require sample payload and contract terms before scoring. |

## 14. Pricing and Cost Matrix

Pricing is not approval. It is a planning input only.

| Provider | Public cost signal | Pickaxe interpretation |
| --- | --- | --- |
| Massive self-serve Options | Basic/Starter/Developer/Advanced public tiers exist; Advanced is the first self-serve realtime options tier. | Self-serve individual rights are not acceptable for Pickaxe public/commercial use. |
| Massive Business | Price not publicly fixed in reviewed pages. | Sales/order-form quote required. |
| Alpha Vantage premium | Public monthly tiers run from low premium through 600/1200 req/min tiers; realtime options require high tiers. | Commercial onboarding still required for Pickaxe. |
| Tradier | API access tied to brokerage/sandbox model. | Cost is not the blocker; architecture coupling is. |
| OPRA | Fee schedule includes professional, nonprofessional, vendor, redistribution, direct access, and non-display categories. | Provider agreement must allocate/report these obligations. |
| Cboe One Options | Public fee schedules show meaningful distributor/user/enterprise fees. | Institutional future path, not first proof. |
| Databento/Intrinio/ORATS | Public pages show products; exact production terms depend on subscription/license. | Request vendor quote only in separate authorized sprint. |

Cost views:

| Cost view | Massive | Alpha Vantage | Tradier | Cboe / OPRA | Databento | Intrinio | ORATS |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Credentialed Local Proof | `PRICE NOT PUBLIC - SALES QUOTE REQUIRED` for Business | Commercial approval plus premium entitlement required | Not selected first | Direct path too heavy; DataShop historical possible | Quote/license required | Quote/license required | Quote/license required |
| Internal Research MVP | `PRICE NOT PUBLIC - SALES QUOTE REQUIRED` | Commercial agreement required | Brokerage/data review required | OPRA/Cboe fees likely material | Quote/license required | Quote/license required | Quote/license required |
| Public Options Alerts Product | `PRICE NOT PUBLIC - SALES QUOTE REQUIRED` plus OPRA/display terms | Commercial/public display agreement required | Not selected first | Vendor/subscriber/display fees must be resolved | Quote/license required | Quote/license required | Quote/license required |

## 15. Provider Scores

Scores use the sprint's 100-point model. They are research-fit scores, not investment quality or expected return. Unknown legal/public-display rights receive no approval credit until confirmed.

| Provider | Legal/commercial /30 | Fields /20 | Timestamp /15 | Display clarity /10 | Security /10 | Cost/scaling /10 | No brokerage /5 | Score | Confidence | Decision |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- | --- |
| Massive Business | 12 | 18 | 13 | 2 | 9 | 4 | 5 | 63 / 100 | Medium | `SELECTED FOR WRITTEN DUE DILIGENCE` |
| Databento | 10 | 18 | 13 | 2 | 8 | 4 | 5 | 60 / 100 | Medium-low | `CONDITIONALLY SUITABLE` |
| Intrinio | 10 | 15 | 8 | 3 | 8 | 5 | 5 | 54 / 100 | Medium-low | `CONDITIONALLY SUITABLE` |
| Alpha Vantage Commercial | 9 | 12 | 7 | 1 | 8 | 6 | 5 | 48 / 100 | Medium-low | `FALLBACK` |
| ORATS | 8 | 14 | 7 | 1 | 7 | 4 | 5 | 46 / 100 | Low-medium | `CONDITIONALLY SUITABLE` as analytics supplement |
| Cboe One / DataShop | 8 | 14 | 10 | 1 | 6 | 2 | 5 | 46 / 100 | Low-medium | `CONDITIONALLY SUITABLE` for institutional/historical roles |
| OPRA direct | 6 | 20 | 15 | 1 | 4 | 1 | 5 | 52 / 100 | Low | `NOT SELECTED` first |
| Tradier | 5 | 15 | 8 | 1 | 7 | 5 | 0 | 41 / 100 | Medium | `NOT SELECTED` first |

Hard scoring gaps: all providers lack enough public, written, Pickaxe-specific evidence for unauthenticated public display, raw redistribution, derived-data display, storage, caching, audit retention, screenshot use, investor-demo display, and exact OPRA/professional-user classification.

## 16. Massive Review

Massive is the strongest first technical fit because its options-chain snapshot endpoint maps directly to the Pickaxe one-chain proof:

- one underlying ticker path;
- filters for expiration, strike, and contract type;
- contract identity and details;
- bid/ask quote fields when the plan includes quotes;
- last trade fields when the plan includes trades;
- quote and trade timestamps;
- day volume;
- open interest;
- IV and Greeks when available;
- underlying-asset context.

Massive self-serve terms remain unsuitable for Pickaxe public/commercial use. Massive Business terms are potentially workable because they reference business customers, order forms, authorized users, customer-owned apps, third-party agreements, and controlled rights. However, those terms do not by themselves grant Pickaxe public display, redistribution, storage, or derived-data rights. The order form and third-party data agreements must answer those questions.

Decision: `SELECTED FOR WRITTEN DUE DILIGENCE`.

## 17. Alpha Vantage Review

Alpha Vantage remains useful as a small fallback quote path because the repository already contains a fail-closed `QQQ` quote adapter. Official docs also expose options APIs, including realtime and historical options.

Blocks:

- Public terms default to personal/non-commercial use unless otherwise agreed in writing.
- Realtime or delayed U.S. market data requires entitlement handling.
- Commercial/business use requires direct onboarding.
- Public options docs do not clearly prove every per-contract timestamp and cadence field Pickaxe needs before a first chain proof.

Decision: `FALLBACK`, for underlying quote only after written commercial approval and entitlement. Not selected as first options-chain provider.

## 18. Tradier Review

Tradier has a documented options-chain endpoint and a useful market-data model, but the official market-data docs state that real-time equities/options data is available to Tradier Brokerage account holders, while sandbox is delayed. Tradier also notes Greeks/volatility are courtesy of ORATS and that Greeks are hourly in the brokerage API context.

Pickaxe must preserve the boundary between research data and execution. A brokerage-account dependency in the first provider path creates avoidable account/order/context risk even if no execution endpoint is used.

Decision: `NOT SELECTED`.

## 19. Cboe / OPRA Review

OPRA is the authoritative listed-options market-data source class. It is legally and operationally central, but direct OPRA/vendor handling is too heavy for the first Pickaxe proof.

Cboe is a major options market operator and offers U.S. options market-data services, including Cboe One Options and historical datasets through Cboe DataShop. Cboe One Options is useful for Cboe exchange data but should not be treated as a full OPRA replacement without written confirmation. Cboe DataShop is a strong archive/research source for EOD and interval data, including NBBO snapshots and optional calculations, but it is not the first live chain API target.

Decision: `CONDITIONALLY SUITABLE`.

## 20. Additional Serious Candidate Reviews

Databento: Serious fallback. Official pages position Databento as a licensed distributor with OPRA real-time and historical APIs covering US equity options and OCC-style symbology. It may be a better institutional API path than a retail-oriented vendor if Massive Business terms fail. Requires quote, terms, sample payload, display rights, and cost review.

Intrinio: Serious delayed/display candidate. Official Intrinio pages describe OPRA-sourced delayed and realtime options packages, full-chain coverage, Greeks, IV, bid/ask, volume, open interest, and display-oriented business positioning. Must verify exact contract, user classification, public display, storage, and attribution rights.

ORATS: Serious analytics supplement. ORATS offers live, delayed, and historical options data and analytics, including Greeks, IV, theoretical values, and historical datasets. It is not selected as the raw first chain source because display rights, OPRA basis, and exact bid/ask/timestamp terms must be confirmed.

Cboe DataShop: Serious historical/EOD source. It can support backtesting and research archive validation after legal review, but it does not replace the first credentialed local options-chain proof.

## 21. Selected Provider Status

Selected provider candidate: `Massive Business Options`.

Selected status: `SELECTED FOR WRITTEN DUE DILIGENCE`.

Not approved:

- no API key;
- no contract;
- no order form;
- no OPRA rights confirmation;
- no public display;
- no browser request;
- no backend deployment;
- no cache;
- no alert delivery;
- no autonomous publishing;
- no broker execution.

## 22. Underlying Quote Provider Status

Preferred first underlying quote path is Massive under the same business/legal umbrella if the order form confirms the required stock/underlying quote entitlement. Massive's stock last-quote docs describe NBBO bid/ask, sizes, exchange details, and timestamps, which aligns well with Pickaxe's freshness firewall.

Alpha Vantage remains the fallback underlying quote source only because the local adapter already exists and fails closed. It must not be used until Alpha Vantage confirms Pickaxe commercial use and entitlement in writing.

Decision: keep one vendor path if Massive can cover both options chain and underlying quote under written terms; otherwise use Alpha Vantage as a separate fallback quote proof in a later sprint.

## 23. Hard Gaps

The following gaps block credentialed activation:

- Massive Business quote/order-form price and terms.
- OPRA/exchange role: subscriber, vendor, edge user, or provider-covered distribution.
- Public display rights for live and delayed options data.
- Internal display rights and approved user classes.
- Derived-data rights for scores, grades, freshness, readiness, and summaries.
- Storage and retention rules for raw, normalized, and derived data.
- Attribution requirements.
- Whether underlying quote data requires a separate stocks plan or entitlement.
- Whether quote fields are present in the chosen options plan.
- Whether an unauthenticated public GitHub Pages display is allowed.
- Whether server logs may retain normalized snapshots.
- Vendor-approved field-level redaction rules.

## 24. Vendor Confirmation Requirements

Massive or any selected provider must confirm in writing:

1. Pickaxe Capital business/commercial use is permitted.
2. The plan covers the intended user class and public/private display mode.
3. OPRA/exchange fees and subscriber/vendor obligations are allocated.
4. The exact data mode is realtime or delayed.
5. Quote fields, trade fields, Greeks, IV, volume, open interest, and underlying fields are included.
6. Per-contract timestamp semantics and timezone basis are documented.
7. Public display is allowed or prohibited.
8. Delayed public display is allowed or prohibited.
9. Derived scoring and normalized display are allowed or prohibited.
10. Raw payload storage is allowed or prohibited.
11. Normalized snapshot storage is allowed or prohibited.
12. Retention/deletion rules after termination.
13. Attribution wording.
14. Rate limits, payload limits, and pagination rules.
15. Whether the first local proof may use one `QQQ` chain and one expiration.

## 25. Legal Decision Gates

All gates must pass before a credentialed provider proof:

- `Commercial Use Approved`
- `OPRA / Exchange Rights Confirmed`
- `Public Display Not Yet Active`
- `Internal Local Proof Allowed`
- `Data Mode Confirmed`
- `Timestamp Semantics Confirmed`
- `Storage / Retention Confirmed`
- `Attribution Confirmed`
- `Server-Only Credential Confirmed`
- `CEO B Standard: Applied`
- `Founder Override Available`
- `Separate Public Activation Required`
- `Governance review required before production promotion`

## 26. Secure Server-Side Architecture

The future architecture must remain local/server-side first:

```text
Browser
  -> local Pickaxe route/control
  -> fixed local server endpoint
  -> server reads ignored env key
  -> provider allowlist chooses one endpoint
  -> provider response size and timeout limits
  -> raw payload classified and discarded unless retention is licensed
  -> normalized snapshot built
  -> field-level entitlement filter
  -> freshness firewall
  -> display-safe research snapshot
```

The browser must never submit provider hostnames, provider paths, API keys, authorization headers, arbitrary symbols, arbitrary expirations, or raw provider query strings.

Required stages:

1. `AUTHORIZED PROVIDER`: written commercial, OPRA/exchange, display, storage, attribution, and entitlement gates are recorded.
2. `SERVER-ONLY FIXED-FUNCTION ADAPTER`: fixed host, endpoint family, ticker allowlist, schema allowlist, timeout, payload limit, one manual first request, and process-environment secret.
3. `RAW RESPONSE VALIDATION`: validate content type, status, provider error payloads, request ID, schema, contract count, pagination, unexpected symbols, and malformed values.
4. `NORMALIZATION`: map only licensed fields into `QuoteSnapshot` or `OptionsChainSnapshot` with source, data mode, market time, receipt time, and verification state.
5. `TIMESTAMP + FRESHNESS FIREWALL`: reject missing, future, ambiguous, stale, crossed, or incomplete quote data before any quality grade.
6. `FIELD-LEVEL ENTITLEMENT FILTER`: remove fields not licensed for internal or public display and append attribution requirements.
7. `OPTIONS QUALITY / LIQUIDITY GATES`: calculate spread and liquidity labels as research quality only.
8. `SYSTEM INTELLIGENCE`: combine source, timestamp, options, liquidity, risk, and boundary gates without action commands.
9. `CEO B STANDARD`: apply governance doctrine and preserve Founder Override Available.
10. `VERSIONED RESEARCH SNAPSHOT`: create a minimal, audit-safe snapshot only if retention rights permit.
11. `PUBLIC DISPLAY CONTRACT`: expose only licensed display fields with source, quote type, timestamp, timezone, verification state, and No External Action.
12. `OPTIONS ALERTS WEBSITE`: static-first public display remains blocked until a separate activation sprint.

## 27. Raw / Normalized / Derived / Display Data Classes

| Class | Definition | Default handling |
| --- | --- | --- |
| Raw provider data | Original provider response body and headers | Do not store unless licensed; omit from public output. |
| Normalized data | Pickaxe `OptionsChainSnapshot` fields after parsing | Store only if licensed; otherwise memory-only proof. |
| Derived data | Liquidity grade, freshness state, readiness contribution, warnings | Requires derived-data rights confirmation. |
| Display data | User-facing numbers, labels, timestamps, source, quote type | Must pass field-level entitlement and public-display gates. |
| Audit data | Request time, provider, entitlement mode, fail reason, source URL | Keep credential-free and payload-free by default. |

## 28. Secret Handling

Provider secrets must:

- live only in ignored local/server environment state;
- never appear in public JavaScript, HTML, CSS, JSON, source maps, logs, screenshots, docs, PRs, browser storage, or query strings;
- never use browser-public prefixes;
- never be returned by `/api/health` or error responses;
- be rotated immediately if exposed;
- be created only after CEO B authorizes the credential sprint.

## 29. Field-Level Entitlement Filter

Every field must be filtered before display:

- If quote fields are not licensed, bid/ask/spread/quote timestamp are omitted and contract quality is blocked.
- If trade fields are not licensed, last trade fields are omitted and not used as substitutes for quotes.
- If Greeks/IV are not licensed or absent, values remain `null` and no estimate is invented.
- If open interest cadence is unclear, it is labeled prior-session or omitted.
- If underlying quote entitlement is missing, strike-range selection remains source-required.
- If public display is not licensed, all live/delayed values remain local-only or omitted.

## 30. Freshness Firewall

Freshness is a hard gate:

- Missing quote timestamp: hard block.
- Unparseable timestamp: hard block.
- Quote older than entitlement-specific threshold: hard block.
- Delayed data labeled as live: hard block.
- Live data without live entitlement proof: hard block.
- Provider time without timezone basis: hard block.
- Underlying quote stale while option quote is fresh: block strike-range promotion.
- Fresh trade with stale quote: still blocked.

Freshness never means expected return, trade quality, or fill quality.

## 31. Fail-Closed Behavior

A future provider proof must return unavailable/error states rather than guess:

- provider not configured;
- key missing;
- commercial approval missing;
- entitlement missing;
- ticker not authorized;
- expiration not authorized;
- manual request limit reached;
- provider rate-limited;
- provider unauthorized;
- response too large;
- malformed payload;
- missing bid/ask/timestamp;
- stale quote;
- future timestamp;
- crossed market;
- missing contract identity;
- wrong underlying;
- wrong expiration;
- wrong contract type;
- more than 50 contracts in the first proof;
- pagination required in the first proof;
- attribution unavailable;
- public display not authorized.

Every material failure must return `UNAVAILABLE`, `STALE`, `ERROR`, or `BLOCKED`. No failed provider request may silently substitute demo data.

## 32. Storage / Cache / Retention

Default first proof:

- no cache;
- no database;
- no LocalStorage write;
- no signal-data write;
- no archive write;
- no raw payload retention;
- no normalized snapshot retention unless explicitly licensed;
- no automated polling;
- no retries;
- no pagination follow-up.

Retention design:

| Data item | Default | Required written answer |
| --- | --- | --- |
| Raw response | Do not retain | Is raw API-response persistence allowed, and for how long? |
| Normalized snapshot | Memory-only proof | Is normalized internal data storage allowed? |
| Derived analytics | Memory-only proof | Are derived scores/grades/research states unrestricted or licensed? |
| Audit logs | Credential-free, payload-free only | Can provider IDs, timestamps, and fail reasons be retained? |
| Screenshots | Not approved | Are screenshots allowed for internal, investor-demo, or public use? |
| Research packets | Demo/static only | Can licensed fields be embedded in packets? |
| Evidence packets | Demo/static only | Can licensed field provenance be retained? |
| Historical replay | Not approved | Is replay allowed under the plan? |
| Model training | Not approved | Explicit rights required; otherwise prohibited. |
| Termination/deletion | Delete unless contract says otherwise | Deletion, backup, and audit obligations. |

If a provider license permits retention, a later sprint must specify retention duration, deletion behavior, encrypted storage, audit fields, backup handling, and termination cleanup.

## 33. Attribution

Attribution must be vendor-approved before display. Candidate wording cannot be finalized until the provider agreement answers:

- exact provider name;
- OPRA or exchange attribution language;
- realtime/delayed label;
- timestamp/timezone display;
- whether the provider requires logo or text attribution;
- whether derived scores must be marked as Pickaxe-derived.

No attribution placeholder may imply licensed data before activation.

## 34. Audit Trail

The first credentialed proof must produce a credential-free local audit record:

- sprint name;
- provider;
- endpoint class;
- ticker;
- expiration;
- contract type;
- result limit;
- entitlement mode;
- request start and receipt time;
- source URL;
- response status class;
- normalized contract count;
- stale/fail reason;
- raw payload retained: yes/no with legal basis;
- CEO B Standard applied;
- No External Action preserved.

## 35. First Credentialed Local Proof Plan

Only after written legal/commercial gates pass:

1. Create a separate implementation branch.
2. Configure one ignored server-only key locally.
3. Use one manually triggered local request.
4. Underlying: `QQQ`.
5. Expiration: one CEO B-approved date.
6. Contract type: one side only, call or put.
7. Strike range: bounded from a verified underlying quote.
8. Limit: <= 50 contracts.
9. No pagination.
10. No polling.
11. No retries.
12. No public GitHub Pages integration.
13. Compare raw fields against fixture assumptions.
14. Record acceptance/fail reasons.

## 36. Proof Acceptance Criteria

The proof passes only if:

- legal/commercial gates are documented as passed;
- no credential appears in git or browser files;
- provider response fields match the normalized contract;
- per-contract quote timestamp is present and parseable;
- bid/ask/spread are present and sane;
- open interest date/cadence is labeled;
- Greeks/IV are either present or explicitly unavailable;
- source, quote type, timestamp, timezone, and verification status are available for display;
- stale-data firewall works;
- field entitlement filter works;
- fail-closed states work;
- no browser provider request occurs;
- no public data activation occurs.

## 37. Public Activation Criteria

Public activation is a separate later decision. It requires:

- CEO B explicit authorization;
- legal/counsel/vendor review;
- public display rights;
- delayed/realtime user classification;
- attribution text;
- data-retention policy;
- production server boundary;
- monitoring and kill switch;
- public safety labels;
- options-risk language;
- no broker execution;
- no autonomous publishing;
- browser QA;
- full validation;
- separate commit and deployment review.

## 38. Stop Conditions

Stop immediately if any future sprint requires:

- accepting vendor terms without CEO B authorization;
- requesting credentials without authorization;
- adding frontend keys;
- using self-serve personal data for Pickaxe public/commercial use;
- scraping protected sites;
- using a brokerage account as the first data path;
- showing fake live values;
- omitting timestamps;
- omitting source labels;
- storing provider data without retention rights;
- adding a public route or renderer to bypass current locks;
- adding broker/order/account/portfolio endpoints;
- making public market-data claims before legal approval.

## 39. Vendor Due-Diligence Questions

Questions for Massive or any replacement provider:

1. Can Pickaxe Capital use the data in a commercial/public research product?
2. Which plan/order form covers one local proof and later public display?
3. Are Pickaxe users Authorized Users, Edge Users, Subscribers, or another class?
4. Does the agreement cover unauthenticated public website display?
5. Does it cover delayed display?
6. Does it cover internal-only display?
7. Does it cover derived scores and grades?
8. Can normalized snapshots be stored?
9. Can raw payloads be stored?
10. What retention/deletion rules apply after termination?
11. Which OPRA/exchange agreements apply?
12. Who handles OPRA reporting and fees?
13. Are quote/trade fields included in the selected plan?
14. Are per-contract quote timestamps included?
15. What timezone and timestamp basis is used?
16. Is open interest prior-session, current-session, or another cadence?
17. Are underlying quote fields included or is a stocks plan required?
18. What attribution must be displayed?
19. What are the rate, payload, and pagination limits?
20. Is the first local `QQQ` one-expiration proof allowed before public launch?
21. Are screenshots allowed for internal review, investor demos, or public marketing?
22. Are audit logs with timestamps, request IDs, and fail reasons allowed?
23. Is historical replay allowed for research packets or backtesting?
24. Is model-training use prohibited or separately licensable?
25. Are WebSocket or streaming rights included or separately licensed?
26. What termination, deletion, and backup-retention obligations apply?

## 40. Draft Vendor Outreach

Do not send without CEO B authorization.

```text
Subject: Pickaxe Capital - options data commercial/display rights review

Hello,

Pickaxe Capital is evaluating a server-side options data integration for a research-only product. The initial proof would be local-only: one manually triggered QQQ options-chain snapshot for one expiration, with no broker execution, no order routing, no public launch, no polling, and no redistribution until rights are confirmed.

We need written confirmation of the plan/order form required for business/commercial use, OPRA/exchange obligations, realtime or delayed entitlement, public display rights, internal display rights, derived-data rights, raw and normalized data retention rules, attribution requirements, quote/trade/Greeks/open-interest field availability, timestamp semantics, and whether an underlying stock quote entitlement is included.

Please confirm the appropriate business plan and agreement path for this use case.
```

## 41. CEO B Decision Required

CEO B must decide before any external vendor action:

- whether to contact Massive for Business Options terms;
- whether to include a Massive stock/underlying quote entitlement in the same path;
- whether Alpha Vantage remains only the quote fallback;
- whether Databento or Intrinio should be parallel backup inquiries;
- whether legal counsel should review public display and OPRA classification before vendor outreach.

Default until decision: `No External Action`.

## 42. Exact Next Sprint

Recommended exact next sprint:

`Massive Business Licensing Confirmation Pack — vendor outreach / docs-only`

Scope:

- refine vendor questions;
- prepare CEO B approval checklist;
- no account creation;
- no credential request;
- no vendor contact unless explicitly authorized;
- no runtime changes;
- no public activation.

The next implementation sprint should occur only after written commercial/provider gates pass.

## 43. Sources

- Massive options overview: <https://massive.com/docs/rest/options/overview>
- Massive option-chain snapshot: <https://massive.com/docs/rest/options/snapshots/option-chain-snapshot>
- Massive option-contract snapshot: <https://massive.com/docs/rest/options/snapshots/option-contract-snapshot>
- Massive stock last quote: <https://massive.com/docs/rest/stocks/trades-quotes/last-quote>
- Massive pricing: <https://massive.com/pricing>
- Massive market-data terms: <https://massive.com/legal/market-data-terms-of-service>
- Massive business terms: <https://massive.com/legal/businesses-terms-of-service>
- Alpha Vantage documentation: <https://www.alphavantage.co/documentation/>
- Alpha Vantage premium: <https://www.alphavantage.co/premium/>
- Alpha Vantage realtime-data policy: <https://www.alphavantage.co/realtime_data_policy/>
- Alpha Vantage terms: <https://www.alphavantage.co/terms_of_service/>
- Tradier market data: <https://docs.tradier.com/docs/market-data>
- Tradier options chains: <https://docs.tradier.com/reference/brokerage-api-markets-get-options-chains>
- Tradier rate limiting: <https://docs.tradier.com/docs/rate-limiting>
- OPRA official site: <https://www.opraplan.com/>
- OPRA fee schedule: <https://cdn.opraplan.com/documents/OPRA_Fee_Schedule.pdf>
- OPRA FAQs: <https://www.opraplan.com/faqs>
- Cboe U.S. Options Market Data Services: <https://www.cboe.com/en/data/market-data-services/us/options/>
- Cboe market data product price list: <https://cdn.cboe.com/resources/membership/US_Market_Data_Product_Price_List.pdf>
- Cboe DataShop Option EOD Summary: <https://datashop.cboe.com/option-eod-summary>
- Databento options data: <https://databento.com/options>
- Databento OPRA dataset: <https://databento.com/datasets/OPRA.PILLAR>
- Intrinio real-time options: <https://intrinio.com/options/options-realtime>
- Intrinio EOD historical options: <https://intrinio.com/options/eod-historical-options>
- Intrinio Silver Options guide: <https://intrinio.com/guides/options-silver>
- ORATS data API: <https://orats.com/data-api>
- ORATS one-minute data: <https://orats.com/one-minute-data>
- ORATS near EOD data: <https://orats.com/near-eod-data>
