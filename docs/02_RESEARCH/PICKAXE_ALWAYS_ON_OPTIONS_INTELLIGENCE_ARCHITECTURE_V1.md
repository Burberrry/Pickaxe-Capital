# Pickaxe Always-On Options Intelligence Architecture V1

Status: Architecture lock and implementation record.
Authority: CEO B.
Date: 2026-06-26.
Runtime scope: static-first Options Alerts feed in `public/`; no live provider, broker execution, alert delivery, authentication, payments, subscriptions, or autonomous publishing.

## 1. Founder Decision

CEO B selected the feed-first Options Alerts model: open Pickaxe, see alerts, select one, review details. The previous primary Quick Start and How to Use surfaces are no longer part of the active Alerts workflow.

## 2. Product Name

The public product remains Pickaxe Capital. The visible product is Options Alerts with the descriptor Research OS.

## 3. Architecture Name

The internal architecture name is Pickaxe Always-On Options Intelligence Architecture v1. It describes the future system shape, not a claim of currently running live agents.

## 4. Active Runtime Boundary

The active runtime remains a static-first vanilla HTML/CSS/JavaScript SPA served from `public/` and mirrored at the root files required by the repository.

## 5. Current Data State

Current data is Demo / Static Data and Source Required. The system must not show live market values unless a workflow verifies source, quote type, timestamp, timezone, and verification status.

## 6. Current Action State

The current action state is BLOCKED - NO EXTERNAL ACTION. This means no broker execution, order ticket, copy trading, publication, or alert delivery is connected.

## 7. Primary User Flow

The canonical flow is: open Pickaxe, see the alerts feed, select one alert, review detail, inspect evidence and gates, then stop at No External Action until a separately authorized governance and public activation decision passes.

## 8. Alert Feed Contract

The feed shows static research setups ordered by Research Readiness. Feed order does not imply expected return, investment merit, or actionability.

## 9. Required Feed Columns

The feed includes Time, Ticker, Type, Alert, Expiration, Strike, Research Readiness, Source, Status, and Open.

## 10. Missing Field Rule

Unavailable contract fields must stay visibly unavailable. The system must not infer expiration, strike, fill quality, source time, provider state, or live options-chain details.

## 11. Default Selection Rule

The default selected alert is the highest-ranked static research setup by the existing Research Readiness order. Today that is QQQ.

## 12. Selection Sync Rule

Feed selection, selected detail, System Verdict, Evidence Packet, Research Packet, and existing V3.1 candidate sync must continue to reference the same selected candidate.

## 13. Filter Rule

Filters are ephemeral page state only. Search, type, ticker, expiration, and status filters must not create a LocalStorage contract or alter the underlying data model.

## 14. Selected Detail Contract

The selected detail must show ticker, setup name, type, unavailable expiration and strike when not verified, readiness, source state, timestamp state, options quality, catalyst, risk, invalidation, next requirement, CEO B Standard, and action boundary.

## 15. System Contributors

The compact contributor layer may show Source, Options Flow, Technicals, Catalyst, Risk, Sentiment, Memory, System Intelligence, and CEO B Standard as deterministic gate labels only.

## 16. Contributor Safety

Contributor labels do not imply live agents, telemetry, provider analysis, sentiment scraping, technical automation, memory adoption, or autonomous learning.

## 17. Evidence Packet Contract

The Evidence Packet must identify what is known, missing, unverified, blocked, and required next for the selected alert.

## 18. Research Packet Contract

The Research Packet remains a detailed static thesis and evidence surface. It is not an order ticket and must not include buy/sell commands.

## 19. Readiness Meaning

Research Readiness measures research quality and packet completeness only. It never means expected return, probability of profit, or trade recommendation.

## 20. Confidence Meaning

Confidence means source, packet, or review quality only. It does not represent expected return or personalized financial advice.

## 21. Gate Precedence

Source, Timestamp, Options-Chain, Spread / Liquidity, Risk, System Intelligence, CEO B Standard, and Action Boundary gates remain authoritative over visual rank.

## 22. Hard Block Rule

Any missing hard gate keeps the setup blocked from external action regardless of readiness score, options grade, or visual priority.

## 23. Source Boundary

Sources must be verified through an authorized workflow before any public or action-oriented output. Walter Bloomberg or social feeds may be watch sources only, not final verification.

## 24. Provider Boundary

No browser provider requests, frontend keys, server proxy, polling loop, retries, caching, or live adapter is active in this architecture lock.

## 25. Broker Boundary

No broker connection, order placement, order preview, portfolio connection, execution adapter, or account workflow is active.

## 26. Alert Delivery Boundary

No SMS, email, push notification, webhook, Discord, Telegram, Slack, or autonomous alert delivery is active.

## 27. Publishing Boundary

Public research output remains blocked unless source, risk, and CEO B gates allow it in a separately authorized workflow.

## 28. Options Risk Language

Options surfaces must continue to state that options involve substantial risk.

## 29. Safety Language

Relevant surfaces must preserve Research Only, Not Financial Advice, No Broker Execution, Demo/Static Data, No External Action, CEO B Standard: Applied, Founder Override Available, Separate Public Activation Required, and Governance review required before production promotion language. Use Manual Review Required only when it describes a real internal review gate, not a public accept/decline bottleneck.

## 30. Route Boundary

No new route is created. The active route remains Alerts through `/`, `#/alerts`, and the `/app/alerts` bridge.

## 31. Local-Only Endpoints

`/ai-handoff` and `/source-hub-staging` remain local-server text endpoints and must not become public static bridges.

## 32. Renderer Boundary

The implementation must preserve one canonical Alerts renderer path and must not create duplicate Alerts page concepts.

## 33. Storage Boundary

The implementation must not add a new persistent storage key, review queue, packet model, or browser persistence contract.

## 34. Mirror Boundary

Root mirror files must stay synchronized with required `public/` pairs.

## 35. Data File Boundary

`data/signal-alerts.json` remains unchanged in this architecture lock.

## 36. V3.1 Preservation

The V3.1 QQQ golden path, selected-candidate behavior, and detailed Signals placement beneath the Alerts overlay remain preserved.

## 37. Starlight Preservation

The Pickaxe Starlight Field remains a single visual system instance. The feed does not add a second canvas or competing visual engine.

## 38. Mobile Rule

Mobile must remain usable at 390x844 with no horizontal overflow. Feed rows may collapse into compact review cards.

## 39. Accessibility Rule

Feed rows must be keyboard-usable, expose selected state, avoid color-only meaning, and preserve visible focus.

## 40. Visual Rule

The feed must stay Pickaxe-branded: premium dark surfaces, metallic gold structure, readable silver/white type, restrained status color, and no marketing-style landing page.

## 41. Future Always-On Path

Future always-on behavior requires separate CEO B authorization, source/legal review, server-only credential handling, stale-data controls, logging, governance review, Founder Override Available handling, and a public activation decision.

## 42. Current Acceptance Evidence

Local QA verifies a five-row static feed, default QQQ selection, NVDA selection sync, GLD filter behavior, selected detail, contributor states, Evidence Packet visibility, one Starlight canvas, no console errors, and no desktop or mobile horizontal overflow.

## 43. Next Bounded Recommendation

The next bounded recommendation is Verified Options Data Provider Legal + Architecture Review - docs-only. Do not activate live data, providers, broker execution, alert delivery, or autonomous publishing without a separate CEO B authorization.
