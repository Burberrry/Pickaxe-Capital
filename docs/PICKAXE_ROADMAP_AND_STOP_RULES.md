# Pickaxe Roadmap And Stop Rules

Status: Phase 2H docs-only roadmap and governance reference.

This document converts the PDF roadmap and current Phase 2E / 2F / 2G planning state into a single stop-rule guide for future Codex sessions.

## Recommended Sequence

1. Blueprint freeze and section spec
2. Archive / Source Workflow implementation
3. Mission Control hierarchy and provenance polish
4. Options research docs only
5. Private-only packet lab
6. Public Options route only later, if approved
7. Agent Habitat rebuild only later, if approved

## Sprint 1: Blueprint Freeze And Section Spec

Status: current Phase 2H docs-only sprint.

Scope:

- create master 20-section spec
- create information/entity map
- create research-only options formula doc
- create agent governance doc
- create privacy/storage audit
- create roadmap and stop rules

Out of scope:

- runtime changes
- route changes
- UI implementation
- Watchlists changes
- Options Hub
- Agents rebuild
- live APIs or adapters

Validation:

```bash
git status -sb
git diff --name-only
/Applications/Codex.app/Contents/Resources/node --run build
/Applications/Codex.app/Contents/Resources/node --run check:project
```

## Sprint 2: Archive / Source Workflow Implementation

Status: recommended next implementation sprint only if B approves.

Scope:

- Source Hub to Archive sanitized records
- archive record schema with `privacy_tier`
- source and evidence linkage
- review states: queued, reviewed, archived, rejected
- local-only handling for private fields

Out of scope:

- Options route work
- Agents rebuild
- live APIs
- broker/execution pathways
- Obsidian exposure
- Watchlists redesign

## Sprint 3: Mission Control Hierarchy And Provenance Polish

Status: future after Archive / Source workflow or after B prioritizes visual polish.

Scope:

- clearer first-screen hierarchy
- CEO B next actions visible
- source gaps visible
- reviewed vs pending states visible
- provenance labels
- static/demo/local labels
- keyboard and focus improvements where needed

Out of scope:

- Watchlists redesign
- route architecture changes
- fake live telemetry
- broker/provider connections

## Sprint 4: Options Research Docs Only

Status: partially covered by Phase 2H formula. Additional docs-only packet lab spec may be created later.

Scope:

- private-only packet lab rules
- risk rules for options packet generation
- blocked-language checks
- public/private packet split

Out of scope:

- public Options UI
- live chains or quotes
- mocked live options flow
- advisory/trading language
- provider adapters
- broker connections

## Sprint 5: Private-Only Packet Lab

Status: deferred until explicit B approval.

Scope if approved:

- local-only packet generation
- no public route
- no publication without CEO B approval
- no private data in public packets
- archive feedback loop

Out of scope:

- public Options route
- broker/execution workflow
- copy-trading
- live provider claims

## Sprint 6: Public Options Route

Status: future only if approved after private lab proves safe.

Required before start:

- approved data provenance plan
- public packet schema
- privacy strip implementation
- blocked-language enforcement
- CEO B approval gate
- build/check passing
- explicit B approval

## Sprint 7: Agent Habitat Rebuild

Status: future only if approved.

Required before start:

- lane permissions matrix
- no-autonomy copy contract
- no fake telemetry rule
- least-privilege implementation plan
- CEO B final decision gate

## Hard Stop Rules

Stop immediately if:

- private Obsidian content enters public code
- docs-only sprint changes runtime files
- build/check fails
- Agents imply live autonomy
- a route claims live data without provenance
- workflow introduces broker, execution, copy-trading, betting, or sportsbook behavior
- public packet includes local-only fields
- Watchlists changes outside approved scope
- `data/signal-alerts.json` changes unexpectedly
- source workflow scrapes or bypasses protected sites
- Options Hub starts without explicit approval
- provider adapters start without explicit approval
- public frontend exposes raw bookmark exports
- localStorage stores secrets, tokens, or session identifiers

## Baseline Validation Commands

```bash
git status -sb
git diff --name-only
/Applications/Codex.app/Contents/Resources/node --run build
/Applications/Codex.app/Contents/Resources/node --run check:project
```

## Future Language Scan

Run this before implementation releases that touch public copy or docs:

```bash
rg -n "broker|execute|copy-trad|sportsbook|autonomous trad|real-time|live flow|buy|sell|guaranteed|prediction" public src docs
```

Findings are not automatically failures. Many docs include negative safety boundaries. QA should verify context and block only unsafe claims or public-facing capability inflation.

## QA Checklist

| Check | Pass condition |
| --- | --- |
| Repo cleanliness | No unintended modified files. |
| Build | Production build succeeds. |
| Project checks | Existing project integrity checks pass. |
| Privacy | No Obsidian paths, raw bookmark dumps, personal notes, or local-only data in public files. |
| Language | No unsafe execution, recommendation, guaranteed-return, or fake-live wording in public UI. |
| Watchlists | No changes unless explicitly approved. |
| Agents | Still placeholder-only. |
| Alert data | `data/signal-alerts.json` unchanged unless intentionally part of an approved sprint. |
| Route truth | Mission Control remains flagship; Source Hub remains trust layer. |

## Handoff Rule

Future Codex sessions should read this file, then the relevant master spec, then the older Phase 2E / 2F / 2G docs only as needed. Do not start implementation from roadmap language alone; implementation requires explicit sprint approval.
