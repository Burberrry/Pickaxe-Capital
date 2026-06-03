# Pickaxe Privacy Storage Audit

Status: Phase 2H docs-only privacy and localStorage reference.

This document extends `docs/LOCAL_STORAGE_KEYS.md`, `docs/OBSIDIAN_WORKFLOW_GUIDE.md`, and the Phase 2F QA audit into a master privacy policy for future implementation.

## Core Privacy Boundary

- Website = public-safe cockpit.
- Obsidian = private memory.
- localStorage = browser-local state that may contain private user text.
- Source Hub = sanitizer and provenance gate.
- Archive = cleaned memory, not raw vault storage.
- CEO B = approval layer for public-safe conversion.

## Storage Families

| Family | Example keys | Sensitivity | Handling |
| --- | --- | --- | --- |
| System state | `pickaxeCompletionTracker`, `pickaxeBackupMetadata`, `pickaxeCoverageMatrix` | low to medium | Allowed locally; avoid exposing raw internal state without need. |
| Research queue | `pickaxeMissionQueue`, `pickaxeReviewQueue`, `pickaxeActionCenter` | medium | Local-only; sanitize before export or publication. |
| Personal notes | `pickaxeLocalNotes`, `pickaxeJournalEntries`, `pickaxeLearningLedger` | high | Never publish raw; export only reviewed summaries. |
| Source intake | `pickaxeBookmarks`, `pickaxeSourceHubActions` | high | Treat as untrusted and often private; clean through Source Hub. |
| Archive memory | `pickaxeArchiveVault` | high | Local by default; convert to sanitized archive entities before publication. |
| Lab / experimental | `pickaxeMoneyLab`, `pickaxeOptionAlerts` | high | Keep local; no public exposure without explicit CEO B review. |
| Prototype agent keys | `pickaxeOperatingAgents`, `pickaxeWorldState`, `pickaxeAgentOps`, `pickaxeAgentFactory` | medium to high | Placeholder/demo only; never imply real autonomous operations. |

## Current Key Families

- `pickaxeCompletionTracker`
- `pickaxeBackupMetadata`
- `pickaxeCoverageMatrix`
- `pickaxeMissionQueue`
- `pickaxeReviewQueue`
- `pickaxeActionCenter`
- `pickaxeLocalNotes`
- `pickaxeJournalEntries`
- `pickaxeLearningLedger`
- `pickaxeBookmarks`
- `pickaxeSourceHubActions`
- `pickaxeArchiveVault`
- `pickaxeMoneyLab`
- `pickaxeOptionAlerts`
- `pickaxeOperatingAgents`
- `pickaxeWorldState`
- `pickaxeAgentOps`
- `pickaxeAgentFactory`

Related existing keys from `docs/LOCAL_STORAGE_KEYS.md` should retain their current warnings, including `pickaxeAlertRules`, `pickaxeAdapterOverrides`, and `pickaxe_jarvis_command_history`.

## Required Rules

- No secrets in localStorage.
- No API keys, tokens, session identifiers, provider credentials, or account identifiers in localStorage.
- No raw Obsidian exports in public-visible state.
- No public frontend route should expose raw notes, raw bookmarks, raw vault paths, or private URLs.
- Every stored entity should eventually include `privacy_tier`.
- Recommended privacy tiers: `public_safe`, `internal`, `local_only`, `private`.
- Local-only and internal fields must never appear in public packets.
- Raw bookmarks and raw notes must stay private until cleaned and approved.
- Public frontend should show only cleaned/sanitized summaries.
- Export/import flows should be opt-in and redaction-aware.

## Public-Safe Fields

Usually safe after review:

- stable IDs
- route ownership
- source type
- cleaned title
- cleaned summary
- trust label
- review status
- source reference IDs
- privacy tier
- created/reviewed timestamps
- risk notes without private details

## Local Or Private-Only Fields

Never publish by default:

- raw Obsidian content
- vault paths
- local filesystem paths
- private URLs
- raw bookmark exports
- emails
- usernames
- account identifiers
- session identifiers
- API keys or tokens
- raw screenshots with account context
- personal financial details
- private strategy notes
- internal scoring notes not approved for public display

## QA Scan Requirements

Before release, QA should scan for:

- vault paths
- private URLs
- usernames
- emails
- raw notes
- raw bookmark dumps
- tokens/secrets
- local-only field names in public packet schemas
- blocked Options/Execution language

Suggested future scan:

```bash
rg -n "Obsidian|vault|/Users/|@|token|secret|api[_-]?key|raw_url|private_notes|internal_notes" public src docs
```

The scan is not enough by itself. Human review is still required because private context can appear without obvious keywords.

## Entity Storage Policy

Every future stored entity should separate fields by tier:

```json
{
  "id": "entity_001",
  "privacy_tier": "public_safe",
  "public_fields": {},
  "internal_fields": {},
  "local_only_fields": {}
}
```

Future implementation does not have to use this exact nesting, but it must preserve the concept: public-safe output cannot include local-only or private fields.

## Route-Specific Notes

### Source Hub

Source Hub may hold source metadata and local actions. It must not expose raw private source content publicly.

### Watchlists

Watchlists should show cleaned thesis context and source IDs only. It should not contain private conviction notes or raw source URLs.

### Alerts

Public alerts must pass privacy strip, blocked-language scan, and CEO B approval.

### Archive

Archive can preserve private local memory, but public-facing archive cards must be cleaned records with privacy tier and review state.

### Agents

Agent keys are prototype/placeholder state. They must never imply live workers, telemetry, or autonomous execution.

### Options Research

`pickaxeOptionAlerts` is demo/research/local state. It must not be treated as live options flow or a provider-backed alert feed.

## Release Blockers

Stop release if:

- private Obsidian content enters public code
- local-only fields appear in a public packet
- raw bookmark exports appear in public UI
- secrets or session identifiers are stored or exposed
- docs-only sprint changes runtime files
- agents imply live autonomy
- route text claims live data without provenance
