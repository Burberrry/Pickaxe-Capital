# Pickaxe Sprint Lock Checklist

Status: Required before every Codex sprint.

## Before Editing

- [ ] Read `docs/00_MASTER/PICKAXE_MASTER_BUILD_BIBLE_v3.md`.
- [ ] Run `git status -sb`.
- [ ] Run `git log --oneline --decorate -8`.
- [ ] Run `git diff --name-only`.
- [ ] Stop if the repo is unexpectedly dirty.
- [ ] Confirm sprint type and exact approved scope.
- [ ] Confirm allowed and forbidden files.
- [ ] Confirm canonical feature name and owner.
- [ ] Confirm whether the task is docs-only or implementation.

## Franchise Lock

- [ ] Feature Name
- [ ] Owner Route
- [ ] Purpose
- [ ] Inputs
- [ ] Outputs
- [ ] Rules
- [ ] Safety Boundaries
- [ ] Source Requirements
- [ ] CEO B Decision
- [ ] Archive Outcome
- [ ] Definition of Done

## Safety Lock

- [ ] CEO B remains final reviewer.
- [ ] No guaranteed outcome language.
- [ ] No broker or betting execution.
- [ ] No copy-trading.
- [ ] No protected-site scraping or bypass.
- [ ] No frontend secrets.
- [ ] No raw Obsidian or private owner data.
- [ ] No fake live data.
- [ ] No fake autonomous agents.
- [ ] No self-modifying system.
- [ ] Hard blocks outrank scores.

## Docs-Only Lock

- [ ] No JS, CSS, HTML, runtime data, routes, APIs, backend, or dependencies changed.
- [ ] No implementation work hidden inside documentation scripts.
- [ ] `data/signal-alerts.json` unchanged.

## Validation

- [ ] `git diff --name-only`
- [ ] `/Applications/Codex.app/Contents/Resources/node --run build`
- [ ] `/Applications/Codex.app/Contents/Resources/node --run check:project`
- [ ] Required safety-language scan
- [ ] Review scan matches in context
- [ ] Update `PROJECT_STATUS.md`
- [ ] Update `NEXT_STEPS.md`
- [ ] Confirm exact next recommended action
- [ ] Commit only approved files
- [ ] Push only after successful commit and validation

## Stop Conditions

Stop on scope drift, unexpected dirty files, failed validation, privacy exposure, unsafe claims, unapproved implementation, or ambiguous CEO B authority.
