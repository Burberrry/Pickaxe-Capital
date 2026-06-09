# Pickaxe Codex Prompt Library

Status: Governance templates for future approved work.

## Required Prompt Header

```text
Project: Pickaxe Capital / AI Habitat OS
Governing source: docs/00_MASTER/PICKAXE_MASTER_BUILD_BIBLE_v3.md
Sprint type:
Approved scope:
Allowed files:
Forbidden files:
Canonical feature name:
Owner route:
Safety boundaries:
Validation commands:
Commit message:
Stop condition:
```

## Docs-Only Integration Prompt

```text
Read the Master Build Bible first.
Run the required clean-repo checks.
Edit only approved documentation files.
Use canonical names from the Idea Registry.
Update route ownership, dependencies, safety, status, and exact next action.
Do not edit runtime files or infer implementation approval.
Run docs-only diff, safety scan, build, and project checks.
Commit only when validation passes.
```

## Franchise Card Prompt

```text
Create a franchise card with:
Feature Name
Owner Route
Purpose
Inputs
Outputs
Rules
Safety Boundaries
Source Requirements
CEO B Decision
Archive Outcome
Definition of Done
Blockers
Dependencies
Suggested UI placement
Static/manual data fields
Copy language allowed
Copy language banned

Stop after documentation. Do not implement.
```

## Options Alerts Implementation Prompt Gate

Do not use this template until CEO B explicitly authorizes implementation.

```text
Read docs/02_RESEARCH/PICKAXE_OPTIONS_ALERTS_SPEC.md.
Name the exact approved panels and runtime files.
Preserve the current / and #/alerts compatibility routes.
Implement only static/manual/unavailable data states.
Make all documented Risk Desk hard blocks deterministic and stronger than scores.
Keep CEO B Review Required until an explicit local decision.
Create no autonomous publication or execution path.
Preserve privacy stripping, Archive Outcome, and Learning Ledger boundaries.
Run build, project check, route checks, responsive checks, safety scan, mirror checks, and rollback verification.
Stop after the approved implementation scope.
```

## Research Feature Prompt

```text
Separate Verified Fact, Interpretation, Speculation, Private Note, and Blocked.
Require Source Hub lineage.
Make hard blocks outrank scores.
Keep CEO B as final reviewer.
Use research-only language.
Do not add execution, private data, fake live data, or autonomous behavior.
```

## Build the Machine Review Prompt

```text
Review the latest outcome.
Identify the mistake or bottleneck.
Extract one reusable lesson.
Propose the smallest rule, checklist, source, design, or prompt improvement.
Do not apply the change.
Record the proposal for CEO B approval.
```

## Runtime Sprint Prompt Rule

A future runtime prompt must name exact files, routes, acceptance criteria, validation, and rollback boundary. Strategy docs alone never authorize code.
