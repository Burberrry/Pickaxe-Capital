# Pickaxe Codex Prompt Library

Status: Copy-paste authorization templates for future CEO B-approved work.

Authority: `AGENTS.md` and `docs/00_MASTER/PICKAXE_PROJECT_CONTEXT_LOCK.md`.

These templates organize authorization. They do not authorize work by themselves. Replace every bracketed variable before use, delete irrelevant optional clauses, and keep each sprint bounded to one objective.

## Shared Variables

```text
[SPRINT_NAME]
[SPRINT_TYPE]
[CURRENT_CHECKPOINT]
[BASELINE_COMMIT]
[IMPLEMENTATION_COMMIT]
[IMPLEMENTATION_COMMIT_MESSAGE]
[HOSTED_RUN_ID]
[APPROVED_OBJECTIVE]
[APPROVED_ROUTES]
[DESKTOP_VIEWPORT]
[MOBILE_VIEWPORT]
[ALLOWED_FILES]
[FORBIDDEN_FILES]
[FILES_TO_READ]
[VALIDATION_COMMANDS]
[COMMIT_MESSAGE]
[PUSH_AUTHORITY]
[STOP_CONDITIONS]
[CANDIDATE_SPRINTS]
```

## Shared Pickaxe Guardrails

Copy this block into implementation, visual-QA, deployment, and hosted-verification prompts.

```text
Preserve all current locked phases, route ownership, direct-path bridges, root/public mirrors, LocalStorage contracts, and financial-safety gates.

Required product boundaries:
- Research Only
- Manual Review Required
- Not Financial Advice
- No Broker Execution
- CEO B remains the final review and decision layer
- no guaranteed outcomes
- no fake live data or fake timestamps
- no live provider connection without separately approved backend/provider/security scope
- no scraping or protected-site bypass
- no authentication, payments, subscriptions, or entitlements
- no autonomous publishing or autonomous rule changes
- no performance, profit, accuracy, or track-record claims
- no new LocalStorage key unless explicitly approved
- no duplicate renderer, route owner, packet model, or review queue
- no data/signal-alerts.json change unless explicitly approved
- /ai-handoff remains local-server-only unless separately authorized
- synchronized root/public mirror pairs remain identical
```

## Current Validation Family

Use only commands that exist in `package.json`. Select the commands proportionate to the sprint.

```text
node --run build
node --run check:project
node --run check:phase15
node --run check:agents
node --run check:mirrors
node --run smoke:routes
```

Also use:

```text
node --check [TOUCHED_JAVASCRIPT_FILE]
git diff --check
git status --short --branch
```

Run JavaScript syntax checks only when JavaScript is touched. Runtime, route, layout, or interaction changes require browser QA at the approved desktop viewport and `390x844` unless CEO B specifies another mobile viewport. Docs-only work does not require browser QA.

## 1. Checkpoint Selection Template

Use for a planning-only sprint that compares candidates and recommends exactly one next bounded sprint.

```text
CEO B authorizes one bounded checkpoint-selection sprint.

This is planning and recommendation only. Do not implement product work or edit runtime files.

Current checkpoint:
- [CURRENT_CHECKPOINT]
- HEAD: [BASELINE_COMMIT]
- expected git state: clean and synchronized with origin/main

Read before analysis:
[FILES_TO_READ]

Candidate sprints:
[CANDIDATE_SPRINTS]

For each candidate, provide:
- recommended scope
- why it matters now
- risk level
- likely files touched
- validation needed
- exact stop conditions
- what must not change
- docs-only, CSS-only, or runtime/UI classification
- sequencing priority

Decision rules:
- improve CEO B execution, source/risk discipline, or future Codex clarity
- prefer low-risk docs/spec work when runtime gain does not clearly justify risk
- preserve every locked phase and hosted checkpoint
- choose exactly one sprint

Prohibited scope:
- runtime edits or product implementation
- Phase 9C, V3.2, or Options Hub
- live data, providers, scraping, broker execution
- auth, payments, subscriptions
- autonomous publishing or performance claims
- new routes, renderers, or storage keys

Validation:
- git status --short --branch
- inspect required documents
- no build unless a file changes

If no file changes:
- do not commit
- do not push

Final response:
## Checkpoint Selection Result
## Current Repo State
## Candidate Comparison
## Recommended Next Sprint
## Files Changed
## Validation
## Boundaries Preserved
## Commit / Push
## Remaining Next Step
## CEO B Decision Needed

End by asking CEO B to approve, reject, or choose a different bounded sprint.
```

## 2. Bounded Implementation Template

Use for one explicitly approved runtime, UI, or documentation implementation.

```text
CEO B authorizes one bounded [SPRINT_TYPE] sprint: [SPRINT_NAME].

Approved objective:
[APPROVED_OBJECTIVE]

Owner route or document:
[APPROVED_ROUTES]

Expected baseline:
- current checkpoint: [CURRENT_CHECKPOINT]
- baseline commit: [BASELINE_COMMIT]
- clean and synchronized with origin/main

Read before editing:
[FILES_TO_READ]

Allowed files:
[ALLOWED_FILES]

Forbidden files:
[FORBIDDEN_FILES]

[INSERT SHARED PICKAXE GUARDRAILS]

Acceptance criteria:
[ACCEPTANCE_CRITERIA]

Hard stop conditions:
[STOP_CONDITIONS]

Stop immediately if the work requires:
- a new route or renderer not explicitly approved
- a new LocalStorage key not explicitly approved
- a packet, review-queue, or storage-contract change outside scope
- financial/research logic changes outside scope
- edits to a forbidden file
- a broad redesign or architecture migration

Local QA:
- approved routes: [APPROVED_ROUTES]
- desktop: [DESKTOP_VIEWPORT]
- mobile: [MOBILE_VIEWPORT]
- correct active view and nonblank content
- no console errors
- no document-level horizontal overflow
- one Starlight canvas
- locked renderer/card/workflow invariants remain intact

Validation:
[VALIDATION_COMMANDS]
- JavaScript syntax checks only for touched JavaScript
- git diff --check
- git status --short --branch

Commit:
[COMMIT_MESSAGE]

Push authority:
[PUSH_AUTHORITY]
Do not infer push authorization from implementation authorization.

Final response:
## Implemented
## Current Product Truth
## Routes Checked
## Files Changed
## Validation
## Boundaries Preserved
## Commit / Push
## Remaining Next Step
```

## 3. Push and Hosted Verification Template

Use when a completed local commit needs push, Pages deployment, and production QA.

```text
CEO B authorizes one bounded push and hosted-verification sprint for [SPRINT_NAME].

Implementation commit:
- hash: [IMPLEMENTATION_COMMIT]
- message: [IMPLEMENTATION_COMMIT_MESSAGE]

Do not create another generic commit before checking actual git state.

Before push:
- git status --short --branch
- git log --oneline -5
- confirm HEAD contains [IMPLEMENTATION_COMMIT]
- confirm expected implementation files only
- confirm data/signal-alerts.json is unchanged unless explicitly approved
- confirm whether [IMPLEMENTATION_COMMIT] is already on origin/main

Push:
- if already on origin/main, do not push again
- if not on origin/main and the branch is clean, push main to origin/main
- never include unrelated changes

Deployment:
- find the GitHub Pages run for [IMPLEMENTATION_COMMIT]
- record run ID, validation/build status, and deploy status
- wait for completion before hosted QA

Hosted QA:
- routes: [APPROVED_ROUTES]
- desktop: [DESKTOP_VIEWPORT]
- mobile: [MOBILE_VIEWPORT]
- correct canonical view
- nonblank content
- zero console errors
- no document-level horizontal overflow
- one Starlight canvas
- singleton renderers and locked card placement
- direct-path bridges reach their approved canonical hashes
- /ai-handoff remains local-server-only and public GitHub Pages behavior stays 404

[INSERT SHARED PICKAXE GUARDRAILS]

If hosted QA passes:
- update docs/tracker only when the hosted result must be recorded
- use the Docs / Tracker Hosted Recording Template

If hosted QA fails:
- do not redesign or start a feature
- use the Hosted QA Failure Template

Final response:
## Result
## Push
## Deploy / Hosted Verification
## Hosted QA Result
## Routes Checked
## Defects
## Documentation Corrected
## Files Changed
## Validation
## Boundaries Preserved
## Commit / Push
## Remaining Next Step
```

## 4. Hosted QA Failure Template

Use to report a production failure before any fix is authorized.

```text
CEO B authorizes hosted diagnosis only for [SPRINT_NAME]. Do not implement a fix.

Deployment context:
- implementation commit: [IMPLEMENTATION_COMMIT]
- Pages run: [HOSTED_RUN_ID]

Inspect:
- route: [FAILED_ROUTE]
- viewport: [FAILED_VIEWPORT]
- expected canonical view: [EXPECTED_VIEW]

Report:
- failure category: app failure / direct-path failure / deployment lag / cache issue / route defect / renderer defect / layout overflow / console failure
- exact route and final URL
- viewport
- visible result or blank state
- console error count and messages
- document overflow state
- Starlight canvas count
- direct-path forwarding result
- locked renderer/workflow state
- likely files responsible
- evidence separating product failure from test-harness failure
- smallest bounded fix recommendation

Do not:
- edit files
- redesign the route
- add a route owner or renderer
- change LocalStorage or packet contracts
- change product behavior
- start another feature

Final response:
## Result
## Hosted QA Result
## Exact Failure
## Evidence
## Likely Cause
## Likely Files
## Files Changed
## Validation
## Boundaries Preserved
## Commit / Push
## Bounded Fix Recommendation
## Remaining Next Step
## CEO B Decision Needed
```

## 5. Docs / Tracker Hosted Recording Template

Use only after implementation and hosted QA already passed.

```text
CEO B authorizes one docs/tracker-only hosted-recording sprint for [SPRINT_NAME].

Verified hosted result:
- implementation commit: [IMPLEMENTATION_COMMIT]
- deployment run: [HOSTED_RUN_ID]
- hosted routes/viewports: [HOSTED_ROUTE_MATRIX]

Stale statements to correct:
[STALE_STATEMENTS]

Allowed files:
- PROJECT_STATUS.md
- NEXT_STEPS.md
- habitat-data.js
- public/habitat-data.js

Forbidden:
- all runtime, renderer, route, style, bridge, simulator, and server files
- data/signal-alerts.json

Required edits:
- record PASS / HOSTED or the exact verified status
- record deployment run and hosted matrix
- replace awaiting-push or local-pass wording
- preserve synchronized habitat-data.js mirrors
- set one next bounded recommendation requiring CEO B authorization

Validation:
- node --run build
- node --run check:project
- node --run check:phase15
- node --run check:agents
- node --run check:mirrors
- node --run smoke:routes
- node --check habitat-data.js
- node --check public/habitat-data.js
- git diff --check
- git status --short --branch

Commit:
[COMMIT_MESSAGE]

Push:
[PUSH_AUTHORITY]

Final response:
## Hosted Record Updated
## Files Changed
## Validation
## Boundaries Preserved
## Commit / Push
## Remaining Next Step
```

## 6. Visual QA Template

Use for defect discovery and only fix confirmed defects inside the approved route scope.

```text
CEO B authorizes one bounded visual-QA sprint for [SPRINT_NAME].

Routes:
[APPROVED_ROUTES]

Viewports:
- desktop: [DESKTOP_VIEWPORT]
- mobile: [MOBILE_VIEWPORT]

Phase 1 — inspect before editing:
- verify correct canonical view and nonblank content
- capture console errors
- check document-level and route-container horizontal overflow
- check one Starlight canvas
- check singleton renderer and locked card placement
- check applicable mobile controls meet the approved minimum height
- check direct-path bridges
- record each confirmed defect with route, viewport, evidence, and likely owner file

Do not fix an unconfirmed defect.
Do not redesign, add features, or expand route scope.

Phase 2 — bounded repair:
- fix only confirmed defects caused by files in [ALLOWED_FILES]
- stop if a fix requires [FORBIDDEN_FILES], new routes, new renderers, storage changes, or product logic

[INSERT SHARED PICKAXE GUARDRAILS]

Regression QA:
[REGRESSION_ROUTES]

Validation:
[VALIDATION_COMMANDS]
- syntax checks for touched JavaScript
- git diff --check
- git status --short --branch

Commit only if a real defect was fixed:
[COMMIT_MESSAGE]

If no defect is confirmed:
- make no changes
- do not commit
- do not push

Final response:
## Visual QA Result
## Confirmed Defects
## Fixes Implemented
## Routes Checked
## Files Changed
## Validation
## Boundaries Preserved
## Commit / Push
## Remaining Next Step
```

## 7. Final Report Format Library

### Planning Result

```text
## Checkpoint Selection Result
## Current Repo State
## Candidate Comparison
## Recommended Next Sprint
## Files Changed
## Validation
## Boundaries Preserved
## Commit / Push
## Remaining Next Step
## CEO B Decision Needed
```

### Local Implementation Result

```text
## Implemented
## Current Product Truth
## Routes Checked
## Files Changed
## Validation
## Boundaries Preserved
## Commit / Push
## Remaining Next Step
```

### Push / Hosted Verification Result

```text
## Result
## Push
## Deploy / Hosted Verification
## Hosted QA Result
## Routes Checked
## Defects
## Documentation Corrected
## Files Changed
## Validation
## Boundaries Preserved
## Commit / Push
## Remaining Next Step
```

### Hosted Failure Result

```text
## Result
## Hosted QA Result
## Exact Failure
## Evidence
## Likely Cause
## Likely Files
## Files Changed
## Validation
## Boundaries Preserved
## Commit / Push
## Bounded Fix Recommendation
## Remaining Next Step
## CEO B Decision Needed
```

### Docs-Only Result

```text
## Implemented
## Documents Updated
## Files Changed
## Validation
## Boundaries Preserved
## Commit / Push
## Remaining Next Step
```

### No-Change Verification Result

```text
## Result
## State Verified
## Checks Performed
## Files Changed
## Validation
## Boundaries Preserved
## Commit / Push
## Remaining Next Step
```

## Supporting Mini-Gates

Use these as short review clauses inside a bounded prompt.

- Research: thesis, sources, dates, evidence, counter-thesis, risks, research-only conclusion, archive outcome.
- Options: liquidity, spread, open interest, event risk, IV context, catalyst, no instruction language, CEO B review.
- Source: publisher, timestamp, primary/secondary status, freshness, bias, verification, conflicts, archive state.
- Website: one purpose, hierarchy, CTA, public/private boundary, status labels, clutter, accessibility, institutional feel.
- Agent: mission, inputs, outputs, forbidden actions, human-review trigger, owner route, archive path.
- Prompt: specific request, output format, context, constraints, success standard, reusable result, next decision.

## Runtime Sprint Rule

A runtime prompt must name exact routes, files, acceptance criteria, viewports, validation, commit message, push authority, and rollback/stop boundary. Strategy documents and templates never authorize runtime code.
