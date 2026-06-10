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

## Institutional Prompt Engine Lock

- [ ] Treat raw CEO B input as founder signal, not final prompt.
- [ ] Convert rough idea, short command, messy note, screenshot, partial thought, or unfinished concept into an institutional-grade prompt before answering.
- [ ] Identify the real objective.
- [ ] Identify the target page, feature, agent, workflow, or decision.
- [ ] Define the institutional standard required.
- [ ] Define the user or operator experience.
- [ ] Define needed data inputs.
- [ ] Define expected outputs.
- [ ] Define agents or departments involved.
- [ ] Define risk, disclosure, and research boundaries.
- [ ] Define build format or deliverable.
- [ ] Define the next execution step.
- [ ] Apply the Pickaxe Institutional Quality Gate before final output.
- [ ] Archive the lesson or prompt improvement when the work changes future behavior.

## Institutional Quality Gate

- [ ] Clarity
- [ ] Trust
- [ ] Research Quality
- [ ] Decision Quality
- [ ] Memory
- [ ] Source Integrity
- [ ] Risk Control
- [ ] Human Review
- [ ] Research Boundary
- [ ] User Experience
- [ ] System Architecture
- [ ] Automation Readiness
- [ ] Data Quality
- [ ] Public-Company Discipline
- [ ] Investability
- [ ] Founder Leverage
- [ ] Compounding Value
- [ ] Simplicity
- [ ] Proof
- [ ] Strategic Fit

## Mini-Gates

### Research Gate

- [ ] Thesis clarity
- [ ] Source list
- [ ] Date visibility
- [ ] Evidence strength
- [ ] Counter-thesis
- [ ] Stated risks
- [ ] Research-only conclusion
- [ ] Archived decision

### Options Gate

- [ ] Contract liquidity
- [ ] Spread acceptability
- [ ] Open interest
- [ ] Event risk
- [ ] IV context
- [ ] Real catalyst
- [ ] No instruction language
- [ ] CEO B review required

### Source Gate

- [ ] Publisher
- [ ] Timestamp
- [ ] Primary or secondary
- [ ] Freshness
- [ ] Bias
- [ ] Verification state
- [ ] Conflicting evidence
- [ ] Tags and archive status

### Website Gate

- [ ] One clear purpose
- [ ] Clean layout
- [ ] Sensible CTA
- [ ] Public/private boundary
- [ ] Visible status labels
- [ ] Reduced clutter
- [ ] Institutional feel
- [ ] Master-plan support

### Agent Gate

- [ ] Clear mission
- [ ] Inputs
- [ ] Outputs
- [ ] Forbidden actions
- [ ] Human review trigger
- [ ] Supported route/page
- [ ] Archive path

### Company Gate

- [ ] Recordkeeping
- [ ] Governance
- [ ] Audit trail
- [ ] Reporting
- [ ] Investor credibility
- [ ] Operational clarity

### Prompt Gate

- [ ] Specific request
- [ ] Defined output format
- [ ] Included context
- [ ] Included constraints
- [ ] Success standard
- [ ] Reusable answer
- [ ] System improvement

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
- [ ] Blockers
- [ ] Dependencies
- [ ] Suggested UI placement
- [ ] Static/manual data fields
- [ ] Copy language allowed
- [ ] Copy language banned

## Options Alerts Lock

- [ ] Candidate Identity and Why Now approved.
- [ ] Source Trail and Evidence Quality approved.
- [ ] Contract Quality and Liquidity approved.
- [ ] Volatility Intelligence Panel approved.
- [ ] Risk Desk and CEO B Review State approved.
- [ ] Ten Risk Desk hard blocks approved.
- [ ] CEO B Review Gate approved.
- [ ] Archive Outcome handoff approved.
- [ ] Learning Ledger connection approved.
- [ ] Static/manual data plan approved.
- [ ] Definition of Ready satisfied.
- [ ] Exact implementation files separately approved.

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
