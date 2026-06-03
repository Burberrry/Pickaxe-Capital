# LocalStorage Keys

Optional Phase 2E inventory. Keys below were identified by inspecting `public/app.js`. This document should not invent app state that does not exist.

## Backup Set

The app's backup/export logic explicitly handles these primary keys:

| Key Name | Route Using It | Purpose | Safe To Backup? | Demo/Static? | Private? | Warnings |
| --- | --- | --- | --- | --- | --- | --- |
| `pickaxeBookmarks` | `#/bookmarks`, `#/archive` | Browser-local bookmark intake and cleaned source candidates. | Yes, with care | Local/user-provided | Potentially private | May contain private bookmark URLs. Do not publish raw contents. |
| `pickaxeOperatingAgents` | `#/agents` | Operating agent matrix state. | Yes | Prototype | No by default | Agents remain placeholder/planned; no live telemetry claims. |
| `pickaxeMissionQueue` | `#/agents`, `#/staging`, `#/source-hub`, review actions | Local mission/task queue. | Yes | Local/prototype | Could include user notes | Do not imply background jobs. |
| `pickaxeReviewQueue` | `#/alerts`, `#/dashboard`, `#/source-hub`, `#/agents` | CEO B review queue. | Yes | Local/prototype | Could include user notes | CEO B remains final decision layer. |
| `pickaxeWorldState` | `#/agents`, visual/system prototype | Habitat/world state for prototype interactions. | Yes | Prototype | No by default | Do not treat as live agent state. |
| `pickaxeCompletionTracker` | `#/staging`, `/` compact tracker | Build completion tracker state. | Yes | Local/project status | No by default | Local edits can differ from default data in `habitat-data.js`. |
| `pickaxeAlertRules` | `#/alerts`, `#/risk-rules` | Local alert/risk rule definitions. | Yes | Local/prototype | Could include user text | No fake live alert execution. |
| `pickaxeActionCenter` | `#/staging`, `#/agents` | Action center events and validation tasks. | Yes | Local/prototype | Could include user text | Do not imply autonomous execution. |
| `pickaxe_jarvis_command_history` | `#/jarvis-lab` | Typed Jarvis command history. | Yes, with care | Local/prototype | Potentially private | No voice/camera/device control; typed command history may be personal. |
| `pickaxeArchiveVault` | `#/archive`, `#/source-hub` | Parsed/saved archive notes and source candidates. | Yes, with care | Local/user-provided | Potentially private | Clean before publishing; may include source URLs. |
| `pickaxeOptionAlerts` | `#/signals`, `#/alerts` | Demo/research options/signal packets. | Yes | Demo/static/local | No by default | No live chain, fake IV/Greeks/flow, or execution language. |
| `pickaxeLocalNotes` | `#/archive`, `#/bookmarks`, `#/signals` | Manual research notes. | Yes, with care | Local/user-provided | Potentially private | Do not publish raw notes. |

## Additional Keys

| Key Name | Route Using It | Purpose | Safe To Backup? | Demo/Static? | Private? | Warnings |
| --- | --- | --- | --- | --- | --- | --- |
| `pickaxeAdapterOverrides` | `#/source-hub`, `#/staging` | Local adapter readiness/status overrides. | Yes | Prototype/planning | No by default | Must not be represented as real provider connection. |
| `pickaxeAgentFactory` | `/agent-builder-factory` | Agent builder/customization prototype state. | Yes | Prototype | Could include user text | Future/prototype only; no autonomous agent claims. |
| `pickaxeAgentOps` | `#/agents` | Local agent operations/task state. | Yes | Prototype | Could include user text | Agents route is placeholder-only in current product truth. |
| `pickaxeBackupMetadata` | `#/staging` | Backup/restore activity metadata. | Yes | Local/system | No by default | Metadata only; check before publishing. |
| `pickaxeCoverageMatrix` | `#/staging` | QA/coverage matrix state. | Yes | Local/system | No by default | Used for validation/status only. |
| `pickaxeJournalEntries` | journal/research actions | Local research journal entries. | Yes, with care | Local/user-provided | Potentially private | Do not publish raw journal content. |
| `pickaxeLearningLedger` | `#/learning-ledger` | Verified rules, lessons, and playbooks. | Yes, with care | Local/user-provided | Potentially private | Publish only cleaned summaries after CEO B review. |
| `pickaxeMoneyLab` | `#/money-lab` | Research-only experiment tracker state. | Yes, with care | Local/user-provided | Potentially private | No betting/sportsbook/financial execution. |
| `pickaxeSourceHubActions` | `#/source-hub` | Local-only Phase 2D Source Hub action log. | Yes | Local/prototype | Could include user text | No live provider calls; log stays in browser. |

## Privacy Categories

- Safe/system: tracker, coverage matrix, backup metadata, route status, static prototype settings.
- Potentially private: bookmarks, archive notes, local notes, journal entries, Jarvis command history, review queue entries, mission queue entries.
- Must remain local-only: any raw user notes, raw bookmarks, private strategy, private vault references, or Obsidian-derived text.

## Restore Notes

- Existing restore logic is intentionally strict about approved keys.
- Avoid adding new localStorage keys without updating this inventory and the backup/restore guardrails.
- Do not restore unknown keys from imported backup payloads.

## Source Hub Notes

`pickaxeSourceHubActions` is local-only. It can record prototype actions like "Send to CEO B Review", "Archive Source Note", "Assign Archivist", "Assign Forge", and "Create Source Watch Alert". These actions do not call APIs, scrape websites, execute trades, or run agents in the background.

## Obsidian Boundary

No localStorage key should store raw Obsidian vault contents for public use. If a future local workflow stores handoff summaries, it must be explicitly local-only and must not be committed into `public/` or root static files.
