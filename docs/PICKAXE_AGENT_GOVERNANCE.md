# Pickaxe Agent Governance

Status: Phase 2H docs-only governance reference.

Agents remain placeholder-only until B explicitly approves a rebuild. This document defines future ownership lanes, not live autonomous workers.

## Governing Principles

- CEO B remains the final decision layer.
- Agents are ownership lanes, not active employees, bots, or autonomous workers.
- No agent can publish alerts.
- No agent can execute trades.
- No agent can scrape protected sources.
- No agent can connect providers.
- No agent can access private vault contents.
- No agent can make final decisions.
- No fake live telemetry is allowed.
- No autonomous publication is allowed.
- No execution authority is allowed.
- Least privilege is mandatory.

## Review Requirement

Every future lane requires:

- explicit B approval before implementation
- allowed data list
- forbidden data list
- allowed actions list
- forbidden actions list
- stop rules
- public/local status
- review and audit trail

## Lane Matrix

### Source Verifier

- Role: validate source type, provenance, freshness, trust, conflicts, and sanitization.
- Allowed data: public source metadata, approved fetch outputs, sanitized manual source summaries, Source Hub records.
- Forbidden data: raw Obsidian vault contents, private account pages, protected sites, credentials, raw bookmark exports unless local-only.
- Allowed actions: classify source type, assign trust status, flag conflicts, propose route targets, mark privacy tier.
- Forbidden actions: scrape, bypass auth, call unapproved providers, publish, execute, alter Watchlists directly.
- Public/local status: local-first; public output only as cleaned source metadata.
- Stop rules: stop on auth wall, robots/protected-source issue, unverifiable origin, source conflict, private data exposure.
- Least-privilege rule: read source metadata only; no broad browser or filesystem access by default.
- Review requirement: CEO B or Source Hub review before downstream use.
- No fake live telemetry: source status cannot imply continuous monitoring.

### Watchlist Curator

- Role: propose watchlist adds/removes, thesis updates, tags, and source gap labels.
- Allowed data: Watchlists, Source Hub records, Archive summaries, catalyst tags.
- Forbidden data: personal portfolio data, broker data, private notes, raw Obsidian memory.
- Allowed actions: draft watchlist changes, identify missing sources, suggest thesis copy.
- Forbidden actions: directly modify Watchlists without approval, rank as buy/sell, use fake quotes, publish changes.
- Public/local status: local-first drafts; public-safe summaries only after approval.
- Stop rules: stop if thesis lacks source support, contains advisory language, or touches locked Watchlists scope without approval.
- Least-privilege rule: no direct runtime writes without an approved implementation sprint.
- Review requirement: CEO B approval required before any watchlist change.
- No fake live telemetry: no live quote, price, or ranking claims.

### Signal Scorer

- Role: compute research scores for candidate setups using normalized, source-backed features.
- Allowed data: Watchlists, Source Hub records, approved contract snapshots, Risk Rules.
- Forbidden data: unverified live flow, private notes, broker data, provider data without approval.
- Allowed actions: calculate draft research scores, flag invalidation, route to review queue.
- Forbidden actions: publish alerts, call trades, predict outcomes, override risk filters.
- Public/local status: local-only until an approved packet workflow exists.
- Stop rules: stop if data is stale, quality filters fail, source count is insufficient, or blocked language appears.
- Least-privilege rule: batch scoring only; no continuous loop claims.
- Review requirement: CEO B review required before any alert packet moves public-safe.
- No fake live telemetry: no "real-time" or "live flow" labels.

### Alert Packet Composer

- Role: draft research packets from source-backed candidates and Risk Rules.
- Allowed data: candidate signals, source refs, risk rules, approved public-safe summaries.
- Forbidden data: raw source URLs in public packets, raw Obsidian memory, private reasoning, account identifiers.
- Allowed actions: draft packet, strip private fields, attach risk notes, queue for CEO B review.
- Forbidden actions: publish directly, execute, create broker links, use advisory language.
- Public/local status: local-only drafts; public-safe only after CEO B approval.
- Stop rules: stop if citations are missing, thesis is weak, privacy strip fails, or blocked language appears.
- Least-privilege rule: can compose packets only from already-normalized entities.
- Review requirement: explicit CEO B approval timestamp required for public packet.
- No autonomous publication: composer cannot publish by itself.

### Archive Curator

- Role: save sanitized records, preserve rejected ideas, link sources, and prepare lesson candidates.
- Allowed data: approved packets, rejected packets, cleaned source summaries, archive links.
- Forbidden data: raw vault exports, raw bookmarks, private URLs by default, personal notes in public records.
- Allowed actions: create archive candidates, mark privacy tier, link source IDs, suggest lesson candidates.
- Forbidden actions: publish raw records, expose local paths, rewrite source truth, bypass CEO B.
- Public/local status: mixed; local-only for drafts, public-safe for sanitized approved summaries.
- Stop rules: stop if record contains private notes, vault paths, usernames, emails, raw URLs, or unsanitized source text.
- Least-privilege rule: write only sanitized archive records.
- Review requirement: CEO B approval required before public-safe archive memory.
- No fake live telemetry: archive is durable memory, not a live feed.

### QA Sentinel

- Role: check build, project integrity, route truth, privacy, blocked language, and sprint scope.
- Allowed data: repo metadata, docs, build outputs, route inventory, rule scans.
- Forbidden data: private vault contents, secrets, personal account data, raw notes.
- Allowed actions: run validation commands, list changed files, report blockers, stop release.
- Forbidden actions: silently fix scope drift, approve release alone, modify runtime during docs-only sprint.
- Public/local status: local-only reports unless summarized safely.
- Stop rules: stop on build/check failure, privacy leak, runtime change during docs-only scope, Watchlists drift, `data/signal-alerts.json` drift.
- Least-privilege rule: inspect and report; do not mutate unless an implementation task explicitly allows it.
- Review requirement: final release requires CEO B or user approval.
- No fake live telemetry: QA checks are validation runs, not continuous monitoring.

### CEO B

- Role: final decision layer for review, approval, rejection, publication, override, and prioritization.
- Allowed data: all public-safe cockpit summaries and user-approved local context.
- Forbidden data: none by role, but private content must still remain out of public runtime unless explicitly sanitized and approved.
- Allowed actions: approve, reject, request more evidence, choose sprint, authorize implementation.
- Forbidden actions: not applicable as a system lane, but the website must not claim to replace B.
- Public/local status: decision layer shown publicly only as product concept and review authority.
- Stop rules: stop if any route implies CEO B is replaced by automation.
- Least-privilege rule: system features should prepare decisions, not make them.
- Review requirement: CEO B is the review requirement.
- No execution authority transfer: no agent receives B's final decision role.

## Universal Forbidden Actions

No future agent may:

- publish alerts without CEO B approval
- place or route orders
- connect brokers
- run copy-trading
- access private vault contents
- scrape or bypass protected sites
- claim live monitoring without a real approved backend
- write private data into public frontend files
- modify Watchlists outside approved scope
- change `data/signal-alerts.json` unexpectedly

## Implementation Status

Current status is documentary only. The `#/agents` route remains a placeholder and should not be rebuilt until B approves a specific Agent Habitat sprint.
