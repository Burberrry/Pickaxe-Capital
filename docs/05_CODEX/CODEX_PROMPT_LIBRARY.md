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

Stop after documentation. Do not implement.
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
