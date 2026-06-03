# Phase 2G Archive / Source Workflow Design Spec

Status: design spec only. Do not implement until B approves.

Date: 2026-06-03

## 1. Executive Summary

Archive / Source Workflow is the natural next practical sprint after Phase 2D Source Hub because the trust layer now exists, but the memory-compounding loop is still only partially connected.

Product truth for this workflow:

- Source Hub verifies.
- Archive preserves.
- CEO B approves.
- Mission Control summarizes.
- Obsidian remains private.
- Website shows cleaned public-safe state.

The future sprint should make Source Hub and Archive work together as a local-only research memory system. Source Hub should classify source candidates, assign trust labels, and block weak escalation. Archive should store cleaned research notes that CEO B can reuse later. Mission Control should summarize only cleaned status. Raw private Obsidian notes, raw bookmark exports, private URLs, and unfinished research thoughts must stay private unless CEO B turns them into cleaned summaries.

This is not a live data sprint, provider adapter sprint, Options Hub sprint, Watchlists redesign, or Agent Habitat rebuild.

## 2. Current State

### `#/source-hub`

Current Source Hub exists as the Phase 2D Intelligence Cockpit. It has:

- Command header and safety line.
- Source verification matrix.
- Source-to-route map.
- Planned/local agent ownership.
- Manual/demo source intake queue.
- Escalation rules.
- Adapter readiness boundary.
- Private memory boundary.
- Mission Control integration preview.
- Local-only action log.
- Local Source Hub actions stored in `pickaxeSourceHubActions`.

Current Source Hub action wiring already supports:

- Send to CEO B Review through `pickaxeReviewQueue`.
- Archive Source Note into `pickaxeArchiveVault`.
- Assign Archivist / Forge / Sentry-style local missions through `pickaxeMissionQueue`.
- Copy a sanitized source summary.

Current limitations:

- Archive Source Note creates a basic local archive item, but the workflow does not yet show a strong source lineage or cleaned/public-safe status.
- Archive candidate status is not prominent enough.
- Source Hub does not yet show a clear "already archived" confirmation state.
- Source cards do not yet distinguish public-safe fields from local/private-only fields.

### `#/archive`

Archive currently exists as a stable Archive Vault / Compounding Intelligence route. It has:

- Seed `archiveVaultItems` from shared data.
- Local parsed/archive items stored in `pickaxeArchiveVault`.
- Search, filters, layout toggle, duplicate panel, source map, next actions, and archive cards.
- Actions such as restore to review, summarize, checklist, extract opportunity, send to agent, and archive status override.

Current limitations:

- Source origin is not always explicit enough for Source Hub candidates.
- Archive cards do not yet have a dedicated cleaned/public-safe flag.
- Archive does not yet show a strong source lineage from Source Hub action ID to archive item ID.
- Learning extraction is present as a concept, but not yet a clean source-to-lesson workflow.

### `#/alerts`

Alerts is stable as the research review queue/home route. It already supports CEO B review posture and local alert/risk rules.

Current limitations:

- Alert packets do not yet consistently show source-backed archive status.
- Alerts should only receive source context after Source Hub marks it verified or source-required.

### `#/dashboard`

Mission Control is live-locked as the flagship overview. It already summarizes sources, alerts, watchlists, risk, archive memory, and next missions.

Current limitations:

- It should not show raw source details.
- Future Source/Archive work should add only cleaned summary counts and status indicators.

### `#/bookmarks`

Bookmarks Mine is a private local workflow for bookmark import and cleaned summaries. It already has local bookmark state and a promote-to-Archive action.

Current limitations:

- Raw bookmark exports are private and should not flow directly into public archive cards.
- Future workflow should emphasize "cleaned summary first" before Archive promotion.

### `#/learning-ledger`

Learning Ledger is stable/prototype memory for lessons, rules, and playbooks.

Current limitations:

- It should eventually receive only reviewed Archive lessons, not raw source content.
- Lesson candidates should require CEO B approval before becoming reusable rules.

### Relevant LocalStorage Keys

- `pickaxeSourceHubActions`
- `pickaxeArchiveVault`
- `pickaxeReviewQueue`
- `pickaxeMissionQueue`
- `pickaxeBookmarks`
- `pickaxeLocalNotes`
- `pickaxeLearningLedger`

## 3. Desired User Workflow

Ideal local-only flow:

1. A source candidate enters Source Hub.
2. Source Hub assigns source type, trust label, related route, and owner department.
3. CEO B reviews the source candidate.
4. CEO B can archive it as a cleaned research note.
5. Archive stores cleaned source memory with source lineage and safety labels.
6. Learning Ledger can later extract reviewed lessons.
7. Mission Control can show cleaned source/archive status only.
8. Raw private Obsidian notes and raw bookmark exports stay private.

Decision pattern:

```text
Candidate source
  -> Source type assigned
  -> Trust label assigned
  -> Private fields separated
  -> CEO B review requested
  -> Cleaned summary written
  -> Archive candidate saved
  -> Learning candidate optional
  -> Mission Control summary only
```

## 4. Source Card Requirements

Future source card schema:

| Field | Purpose | Public Frontend Safe? | Notes |
| --- | --- | --- | --- |
| `id` | Stable local/source ID. | Yes | Use deterministic prefixes such as `source-` or `manual-`. |
| `sourceTitle` | Human-readable source title. | Yes, if sanitized | Do not include private note titles unless cleaned. |
| `sourceType` | Filing, IR, transcript, bookmark, screenshot, macro note, chart note, Obsidian handoff summary, etc. | Yes | Label private/local types clearly. |
| `relatedTickerTheme` | Ticker, sector, theme, or research bucket. | Yes | Keep research-only. |
| `sourceStatus` | Source Attached, Source Missing, Needs Verification, Archive Candidate, CEO B Review Required. | Yes | No fake connected/provider status. |
| `trustLevel` | Primary Source, High Trust, Medium Trust, User Imported, Needs Verification, Private Local Only, Demo Placeholder. | Yes | Trust is source confidence, not financial advice. |
| `relatedRoute` | Route that may use this source. | Yes | Example: `#/source-hub`, `#/alerts`, `#/archive`. |
| `ownerDepartment` | Archivist, Forge, Sentry, Risk Desk, CEO B. | Yes | Planned/local ownership only. |
| `safeUrl` | Public-safe URL if appropriate. | Sometimes | Omit or mask private URLs. |
| `localReference` | Local reference, vault pointer, screenshot filename, or browser-only marker. | No by default | Keep local/private unless sanitized. |
| `privacyLevel` | Public Safe, Local Only, Private Local Only, Needs Cleaning. | Yes | Key boundary label. |
| `ceoReviewStatus` | Waiting, Approved, Rejected, Needs More Context. | Yes | CEO B remains final decision layer. |
| `archiveStatus` | Not Archived, Archive Candidate, Archived Clean Note, Returned to Review. | Yes | Should drive Archive confirmation state. |
| `riskNote` | Source risk or uncertainty. | Yes, if sanitized | Avoid trade recommendations. |
| `cleanedSummary` | Short public-safe research summary. | Yes | This is what can move forward. |
| `privateNotes` | Raw user thoughts, vault excerpts, raw bookmark text. | No | Must not be committed or rendered publicly. |
| `nextAction` | Manual next step. | Yes | Use review/verify/archive language. |
| `createdDate` | Local creation date. | Yes | Static/local date only. |
| `lastReviewedDate` | Last CEO B review date. | Yes | Static/local date only. |
| `sourceHubActionId` | Link to action log entry. | Yes | Helps lineage. |

Required source card labels:

- Manual Source
- Demo Source
- Local Import
- Needs Verification
- Source Attached
- Source Missing
- CEO B Review Required
- Archive Candidate
- Private Local Only
- Cleaned Summary Required

Forbidden labels:

- Live
- Real-time
- Auto-ingested
- Connected Provider
- Scraped
- Executed
- Trade Signal
- Buy
- Sell

## 5. Archive Card Requirements

Future archive card schema:

| Field | Purpose | Public Frontend Safe? | Notes |
| --- | --- | --- | --- |
| `id` | Stable archive item ID. | Yes | Example: `archive-source-...`. |
| `archiveTitle` | Cleaned archive title. | Yes | No raw private note titles unless approved. |
| `sourceOrigin` | Source Hub, Bookmarks, Alerts, Signals, Obsidian Handoff Summary, Manual Note. | Yes | Shows lineage. |
| `cleanedSummary` | Public-safe summary. | Yes | Primary archive content. |
| `relatedRoute` | Route that produced or uses the note. | Yes | Example: `#/source-hub`, `#/alerts`, `#/bookmarks`. |
| `relatedTickerTheme` | Ticker/theme/context. | Yes | Research-only. |
| `lessonType` | Thesis, Catalyst, Risk, Process Rule, Mistake Avoided, Watchlist Context. | Yes | Supports Learning Ledger later. |
| `reviewStatus` | CEO B Approved, Needs Review, Returned to Source Hub, Archived. | Yes | CEO B final approval required. |
| `confidenceTrustLabel` | Primary Source, High Trust, Medium Trust, User Imported, Needs Verification. | Yes | Source confidence only. |
| `safetyBoundary` | No raw private data, no live data, no execution, etc. | Yes | Should be visible. |
| `linkedSourceId` | Original source card ID. | Yes | Internal lineage. |
| `linkedSourceHubActionId` | Source Hub action log ID. | Yes | Internal lineage. |
| `localNoteReferences` | Local-only note reference or private vault pointer. | No by default | Never expose raw vault details publicly. |
| `privateDataRemoved` | Boolean or label. | Yes | Must be true before public-safe archive display. |
| `ceoBApproval` | Approved / Pending / Rejected. | Yes | Required before public-safe research memory. |
| `createdDate` | Local archive date. | Yes | Static/local only. |
| `lastReviewedDate` | Last review date. | Yes | Static/local only. |

Archive cards should answer:

- Where did this come from?
- Is it cleaned?
- Who reviewed it?
- Which route can use it?
- What source confidence does it carry?
- What private data was removed?
- What should CEO B do next?

## 6. LocalStorage Impact

Expected key behavior:

| Key | Future Role | Write Rules | Privacy Warning |
| --- | --- | --- | --- |
| `pickaxeSourceHubActions` | Record local Source Hub actions such as review, archive, assign, copy. | Append short action entries with source IDs and cleaned titles. | Should not store raw private notes or raw bookmark exports. |
| `pickaxeArchiveVault` | Store archive cards and cleaned source memory. | Add `parsedLinks` entries for cleaned archive candidates and status overrides. | May contain private URLs if user imports them; do not publish raw content. |
| `pickaxeReviewQueue` | CEO B review gate. | Add review packets for source approval, archive cleanup, and lesson extraction. | Could contain user notes; keep local-only. |
| `pickaxeMissionQueue` | Manual task queue for Archivist/Forge/Sentry/Risk Desk. | Add local prototype tasks only. | Must not imply background jobs or autonomous work. |
| `pickaxeBookmarks` | Store local/private bookmark candidates. | Raw imports stay here until cleaned. | Potentially private URLs and text; never commit raw contents. |
| `pickaxeLocalNotes` | Store manual research notes. | Use as private/local note source only. | Do not publish raw notes. |
| `pickaxeLearningLedger` | Store verified lessons and playbooks. | Write only reviewed lesson candidates later. | Lessons should be cleaned and CEO B approved. |

Implementation principle:

- Source Hub should create archive candidates with cleaned summaries and lineage.
- Archive should not become a raw dump of bookmarks, screenshots, Obsidian notes, or private URLs.
- Learning Ledger should receive only reviewed lessons, not raw source items.

## 7. Route Changes For Future Implementation

These are future changes only. Do not implement until B approves.

### `#/source-hub`

- Keep current Phase 2D layout stable.
- Improve "Archive Source Note" action to mark the source as an archive candidate.
- Add clearer source-to-archive confirmation state.
- Show whether a source already has an archive item.
- Separate cleaned summary from private/local reference.
- Make source lineage visible: source ID, action ID, archive item ID.

### `#/archive`

- Improve archived source card display.
- Add source-origin filters: Source Hub, Bookmarks, Alerts, Signals, Manual Note, Obsidian Handoff Summary.
- Add trust filters: Primary Source, High Trust, Medium Trust, User Imported, Needs Verification.
- Add "send back to CEO B review".
- Add "extract lesson candidate".
- Add cleaned/public-safe status labels.
- Show linked Source Hub action ID and linked source ID.

### `#/dashboard`

- Show summary counts/status later only.
- No raw source content.
- Suggested future summary cards:
  - Archive candidates awaiting CEO B review.
  - Source gaps resolved this session.
  - Cleaned archive notes available.
  - Learning candidates pending.

### `#/alerts`

- Optionally show source-backed review packet status.
- Alerts should not upgrade without source context.
- Do not create fake urgency or execution language.

### `#/bookmarks`

- Keep raw import private.
- Only cleaned summaries should move forward.
- Add clearer "promote cleaned summary to Source Hub/Archive" path later.
- Preserve manual import and no-scraping boundary.

### `#/learning-ledger`

- Add lesson candidates only after Archive and CEO B review.
- Keep lessons as cleaned operating rules, not raw notes.

## 8. Safety Rules

Hard rules for future implementation:

- No raw Obsidian notes in public frontend.
- No raw bookmarks in public frontend.
- No private URLs published by default.
- No scraping.
- No live APIs.
- No fake source ingestion.
- No fake connected providers.
- No broker or execution language.
- No buy/sell recommendations.
- No fake autonomous agent ownership.
- No background agent telemetry.
- CEO B final approval required before a source becomes public-safe research memory.
- Source confidence is not financial advice.
- Archive memory is research context, not a trading recommendation.
- Watchlists remains unchanged unless B explicitly approves or a visible bug is found.
- Agents remains placeholder-only.

## 9. UI / Design Direction

Future page feel:

- Premium graphite/gold surfaces.
- Restrained cyan for source/intelligence status.
- Calm source pipeline cards.
- Clean Archive memory cards.
- Visible source lineage.
- Visible trust labels.
- Obvious private/public boundary.
- Dense but readable, not a messy link dump.
- No noisy tech demo.
- No fake terminal clutter.
- No fake provider console.

Recommended visual hierarchy:

1. Source or archive item title.
2. Trust/public-safe status.
3. Source origin and related route.
4. Cleaned summary.
5. CEO B review state.
6. Next manual action.
7. Local/private boundary.

## 10. Implementation Plan For Later

Small safe steps:

1. Add shared source/archive schema comments or data helpers.
2. Add a normalized Source Hub archive-candidate creator.
3. Wire Source Hub "Archive Source Note" into `pickaxeArchiveVault` with lineage fields.
4. Add Source Hub confirmation state for sources already archived.
5. Improve Archive cards to show source origin, trust label, and cleaned/public-safe flag.
6. Add Archive filters by source type, trust, route, and review state.
7. Add CEO B review round-trip from Archive back to `pickaxeReviewQueue`.
8. Add lesson-candidate action into `pickaxeLearningLedger` only after CEO B review.
9. Add dashboard summary only, with no raw source content.
10. Validate public/private boundary.
11. Live-check routes.

Recommended implementation scope:

- Primary routes: `#/source-hub`, `#/archive`.
- Secondary route checks only: `#/dashboard`, `#/alerts`, `#/bookmarks`, `#/learning-ledger`, `#/staging`, `#/agents`.
- Do not touch Watchlists.
- Do not touch Agents except route verification.

## 11. Validation Plan

Future implementation must run:

```bash
/Applications/Codex.app/Contents/Resources/node --run build
/Applications/Codex.app/Contents/Resources/node --run check:project
```

Route checks:

- `/`
- `#/dashboard`
- `#/source-hub`
- `#/archive`
- `#/alerts`
- `#/bookmarks`
- `#/learning-ledger`
- `#/staging`
- `#/agents`

Confirm:

- No console errors.
- No 404s.
- No horizontal overflow.
- No private Obsidian content.
- No raw bookmark content.
- Agents remains placeholder-only.
- Watchlists remains unchanged.
- Source Hub remains stable.
- Archive workflow is local-only.
- `data/signal-alerts.json` remains clean.
- Root/public mirrors remain synced if runtime files change.
- No fake live data, scraping, provider connection, broker execution, copy-trading, or buy/sell language.

## 12. Codex Prompt For Future Implementation

### Future Prompt: Phase 2G Archive / Source Workflow Implementation

Do not run this prompt until B approves.

```text
Implement Phase 2G Archive / Source Workflow for Pickaxe Capital / AI Habitat OS.

Current locked truth: Website = cockpit, Obsidian = private memory, CEO B = decision layer, Mission Control = overview, Source Hub = trust layer, Watchlists = Research Universe, Agents = placeholder-only. Phase 2D Source Hub is live-locked, Phase 2E Planning Pack is locked, and Phase 2F QA Audit is locked.

Scope: improve the local-only workflow between #/source-hub and #/archive. Keep Source Hub layout stable. Do not touch Watchlists. Do not rebuild Agents. Do not start Options Hub, live APIs, provider adapters, broker integrations, betting/sportsbook integrations, copy-trading, OpenClaw, or 20-section asset integration.

Build:
1. Add/normalize source and archive card schema handling using existing vanilla JS patterns.
2. Improve Source Hub "Archive Source Note" so it creates a cleaned archive candidate in pickaxeArchiveVault with source ID, Source Hub action ID, trust label, source origin, related route, privacy level, cleaned summary, and CEO B review state.
3. Show Source Hub confirmation state when a source has been archived locally.
4. Improve #/archive cards to display source origin, trust label, cleaned/public-safe status, linked source ID, and CEO B review state.
5. Add Archive filters for source origin, trust label, route, and review state if feasible without destabilizing the page.
6. Add local-only actions: send back to CEO B review and create lesson candidate. These must only write localStorage.
7. Add Mission Control summary counts only if safe; no raw source content.

Safety:
- No raw Obsidian notes in public frontend.
- No raw bookmarks in public frontend.
- No private URLs published by default.
- No scraping.
- No live APIs.
- No fake connected providers.
- No broker/execution language.
- No buy/sell recommendations.
- No fake autonomous agents or telemetry.
- CEO B approval required before public-safe research memory.

Validation:
Run /Applications/Codex.app/Contents/Resources/node --run build
Run /Applications/Codex.app/Contents/Resources/node --run check:project
Browser-check /, #/dashboard, #/source-hub, #/archive, #/alerts, #/bookmarks, #/learning-ledger, #/staging, and #/agents.
Confirm no console errors, no 404s, no horizontal overflow, no private Obsidian content, no raw bookmark content, Watchlists unchanged, Agents placeholder-only, Source Hub stable, Archive workflow local-only, and data/signal-alerts.json clean.

Commit as: Add Phase 2G archive source workflow
```
