# Pickaxe Information Flow And Entity Map

Status: Phase 2H docs-only master flow reference.

This document consolidates the PDF architecture, `docs/INFORMATION_FLOW_MAP.md`, and the Phase 2G Archive / Source Workflow spec into a clean flow and schema reference. It complements the earlier docs and should be used by Codex/ChatGPT before future implementation sprints.

## Operating Truth

- Website = cockpit.
- Obsidian = private memory.
- CEO B = decision layer.
- Mission Control = flagship overview.
- Source Hub = trust and intelligence layer.
- Watchlists = Research Universe.
- Archive = saved intelligence memory.
- Agents = future ownership lanes only.
- Options Research = deferred.

## Primary Flow

```text
External Sources
  -> Source Hub
  -> Watchlists
  -> Signals
  -> Alerts
  -> CEO B Review
  -> Archive
  -> Mission Control
```

Rules:

- External sources do not bypass Source Hub.
- Watchlists organize the Research Universe; they do not publish calls.
- Signals create research candidates; they do not issue trading instructions.
- Alerts are research packets; public packets require CEO B approval.
- Archive stores reviewed memory; it is not a raw dump.
- Mission Control summarizes cleaned state only.

## Obsidian Handoff Flow

```text
Obsidian private vault
  -> local-only handoff
  -> ChatGPT/Codex context
  -> cleaned public-safe decisions only
```

Rules:

- Obsidian remains outside the public website.
- Raw vault contents, paths, screenshots, raw bookmark exports, and private notes must not enter public runtime files.
- Handoff text is context, not publishable content.
- Any Obsidian-derived idea must be cleaned, summarized, and approved by CEO B before public use.

## Source Hub Distribution Flow

```text
Source Hub
  -> Watchlists for thesis support
  -> Signals for candidate setup context
  -> Alerts for packet provenance
  -> Archive for durable memory
  -> Dashboard/Mission Control for summary counts and source gaps
```

Rules:

- Source Hub sends public-safe summaries downstream, not raw private fields.
- Dashboard receives summary state only.
- Alerts and Signals must retain source references and trust state.
- Archive records must show source origin, privacy tier, and CEO B review state.

## Archive To Learning Flow

```text
Archive
  -> reviewed outcome
  -> lesson candidate
  -> CEO B approval
  -> Learning Ledger
```

Rules:

- Learning Ledger receives reviewed lessons, not raw source records.
- Lessons should be abstracted and reusable.
- False positives, rejected ideas, and invalidation notes are valuable archive memory when sanitized.

## Risk Blocking Flow

```text
Risk Rules
  -> block unsafe escalation
  -> return packet to draft, private archive, or source review
```

Risk Rules blocks:

- weak provenance
- stale snapshots
- insufficient source coverage
- private data leakage
- execution language
- fake live/provider claims
- autonomous agent claims
- public packets with local-only fields

## Agent Ownership Flow

```text
Agents
  -> future ownership lanes only
  -> no live autonomous workers
  -> CEO B remains final decision layer
```

Agents may be described as planned lanes, but they cannot publish, execute, scrape, connect providers, access private vault contents, or make final decisions.

## Entity Schemas

Each entity should eventually include `privacy_tier` with one of: `public_safe`, `internal`, `local_only`, `private`.

### `source_record`

- Required fields: `id`, `title`, `source_type`, `origin`, `trust_status`, `last_checked`, `public_safe`, `privacy_tier`, `route_targets`.
- Public-safe fields: `id`, `title` when sanitized, `source_type`, `origin`, `trust_status`, `last_checked`, `public_safe`, `route_targets`, `summary`.
- Local/private-only fields: raw URLs, local vault references, private notes, screenshots with account context, raw bookmark text.
- Route ownership: `#/source-hub`.
- Validation rule: cannot feed Watchlists, Signals, Alerts, or Archive unless `trust_status`, `last_checked`, and `privacy_tier` are present.

### `watch_item`

- Required fields: `id`, `symbol_or_theme`, `category`, `thesis`, `source_refs`, `review_status`, `last_reviewed`, `privacy_tier`.
- Public-safe fields: symbol/theme, category, cleaned thesis, public source IDs, review status, catalyst tags.
- Local/private-only fields: private conviction notes, personal allocation notes, raw URLs, unreviewed Obsidian excerpts.
- Route ownership: `#/watchlists`.
- Validation rule: cannot increase priority without at least one valid `source_ref` or explicit `source_required` label.

### `signal_candidate`

- Required fields: `id`, `symbol_or_theme`, `setup_type`, `feature_scores`, `evidence_refs`, `invalidation`, `review_status`, `privacy_tier`.
- Public-safe fields: cleaned setup type, feature labels, evidence summary, invalidation summary, research-only status.
- Local/private-only fields: raw model notes, raw private screenshots, local-only source URLs, unapproved feature calculations.
- Route ownership: `#/signals`.
- Validation rule: cannot become an alert packet unless evidence, invalidation, and Risk Rules status are attached.

### `alert_packet`

- Required fields: `id`, `status`, `privacy_tier`, `created_at`, `symbol_or_theme`, `confidence`, `evidence_summary`, `risk_notes`, `source_refs`, `ceo_b_review_status`.
- Public-safe fields: approved status, cleaned evidence summary, risk notes, source IDs, non-advisory confidence, approval timestamp.
- Local/private-only fields: raw source URLs, internal notes, private reasoning, rejected alternatives, local-only feature details.
- Route ownership: `#/alerts`.
- Validation rule: no public packet may publish without CEO B approval, privacy strip, blocked-language pass, and source coverage pass.

### `archive_record`

- Required fields: `id`, `record_type`, `title`, `cleaned_summary`, `source_origin`, `source_refs`, `decision`, `review_status`, `privacy_tier`, `created_at`.
- Public-safe fields: title, cleaned summary, source origin, source IDs, decision status, tags, public-safe lesson links.
- Local/private-only fields: raw vault references, private URLs, raw bookmark bodies, internal notes, account screenshots.
- Route ownership: `#/archive`.
- Validation rule: public-safe archive display requires `private_data_removed: true` or equivalent privacy status.

### `research_note`

- Required fields: `id`, `title`, `body_summary`, `source_refs`, `tags`, `visibility`, `privacy_tier`, `updated_at`.
- Public-safe fields: title and summary only after cleaning, tags, public source IDs.
- Local/private-only fields: full body drafts, raw Obsidian text, personal strategy, raw URLs, private screenshots.
- Route ownership: `#/research` future route and local handoff workflows.
- Validation rule: default visibility is `local_only`; publishing requires CEO B approval and privacy strip.

### `catalyst_event`

- Required fields: `id`, `symbol_or_theme`, `category`, `event_at`, `timezone`, `source_refs`, `confidence`, `last_checked`, `privacy_tier`.
- Public-safe fields: symbol/theme, category, date/time, timezone, confidence, source IDs.
- Local/private-only fields: unverified rumors, private calendar notes, raw imported calendar URLs.
- Route ownership: `#/catalysts` future route.
- Validation rule: cannot appear as source-verified without official or independently reviewable source references.

### `trend_theme`

- Required fields: `id`, `name`, `regime_label`, `summary`, `source_refs`, `symbols_or_themes`, `updated_at`, `privacy_tier`.
- Public-safe fields: theme name, regime label, cleaned summary, public source IDs, related symbols/themes.
- Local/private-only fields: raw social notes, private thesis notes, unverified screenshots.
- Route ownership: `#/trend-radar`.
- Validation rule: must disclose whether inputs are static, delayed, manual, or source-backed.

### `learning_entry`

- Required fields: `id`, `lesson_type`, `statement`, `linked_records`, `severity`, `adopted_rule`, `created_at`, `privacy_tier`.
- Public-safe fields: cleaned lesson, linked archive IDs, severity, adopted rule status.
- Local/private-only fields: personal notes, raw mistakes, private financial details, private source URLs.
- Route ownership: `#/learning-ledger`.
- Validation rule: every lesson must link to an archive record, QA event, or CEO B decision.

### `risk_rule`

- Required fields: `id`, `category`, `rule_text`, `hard_stop`, `applies_to`, `version`, `effective_at`.
- Public-safe fields: category, rule text, hard stop status, affected routes, version.
- Local/private-only fields: internal enforcement notes, private examples, unapproved thresholds.
- Route ownership: `#/risk-rules`.
- Validation rule: hard-stop rules must block escalation before public packet creation.

### `roadmap_item`

- Required fields: `id`, `title`, `status`, `scope`, `out_of_scope`, `dependencies`, `approval_required`, `validation_commands`.
- Public-safe fields: title, status, scope, out-of-scope, dependency IDs, validation commands.
- Local/private-only fields: private strategy notes, unapproved dates, sensitive priorities.
- Route ownership: `#/roadmap` future route and docs.
- Validation rule: no implementation sprint can begin unless scope, out-of-scope, and approval status are explicit.

### `mission_snapshot`

- Required fields: `id`, `generated_at`, `source_gap_count`, `pending_reviews`, `watchlist_health`, `archive_summary`, `risk_status`, `qa_status`, `privacy_tier`.
- Public-safe fields: aggregate counts, cleaned status labels, route links, next manual action.
- Local/private-only fields: raw review text, private notes, raw source URLs.
- Route ownership: `#/dashboard` and `/` compact panel.
- Validation rule: Mission Control may show aggregate state only; raw source content stays in Source Hub or local storage.

### `staging_report`

- Required fields: `id`, `generated_at`, `changed_files`, `validation_commands`, `validation_results`, `privacy_scan`, `route_truth`, `remaining_problems`, `next_recommended_task`.
- Public-safe fields: changed file paths when non-private, validation result, route truth, remaining public-safe problems.
- Local/private-only fields: private paths, local usernames, raw notes, secrets, raw PDFs.
- Route ownership: `#/staging`.
- Validation rule: release is blocked if runtime files changed during docs-only scope, build/check failed, or privacy scan finds private content.
