# Pickaxe Sprint Lock Checklist

Status: Required before every Codex sprint.

## Before Editing

- [ ] Read `AGENTS.md`, `PROJECT_STATUS.md`, and `NEXT_STEPS.md`.
- [ ] Read `docs/00_MASTER/PICKAXE_PROJECT_CONTEXT_LOCK.md` for product, route, data, module, or architecture work.
- [ ] Select the matching template from `docs/05_CODEX/CODEX_PROMPT_LIBRARY.md`.
- [ ] Run `git fetch origin --prune`.
- [ ] Run `git status --short --branch`.
- [ ] Run `git log --oneline --decorate -5`.
- [ ] Run `git diff --name-only`.
- [ ] Compare `HEAD` with `origin/main`.
- [ ] Stop if the repo is unexpectedly dirty.
- [ ] Confirm sprint type and exact approved scope.
- [ ] Confirm allowed and forbidden files.
- [ ] Confirm canonical feature name and owner.
- [ ] Confirm whether the task is docs-only or implementation.
- [ ] Confirm whether commit authority and push authority are separate.

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
- [ ] Required language remains present where relevant: Research Only, Manual Review Required, Not Financial Advice, No Broker Execution.
- [ ] No guaranteed outcome language.
- [ ] No broker or betting execution.
- [ ] No copy-trading.
- [ ] No protected-site scraping or bypass.
- [ ] No frontend secrets.
- [ ] No raw Obsidian or private owner data.
- [ ] No fake live data.
- [ ] No fake timestamp or fake provider connection.
- [ ] No fake autonomous agents.
- [ ] No self-modifying system.
- [ ] No auth, payments, subscriptions, autonomous publishing, or performance claims unless separately approved.
- [ ] No new route, renderer, packet model, review queue, or LocalStorage key unless explicitly approved.
- [ ] No `data/signal-alerts.json` change unless explicitly approved.
- [ ] `/ai-handoff` remains local-server-only unless separately approved.
- [ ] Required root/public mirrors remain synchronized.
- [ ] Hard blocks outrank scores.

## Docs-Only Lock

- [ ] No JS, CSS, HTML, runtime data, routes, APIs, backend, or dependencies changed.
- [ ] No implementation work hidden inside documentation scripts.
- [ ] `data/signal-alerts.json` unchanged.
- [ ] Browser QA omitted unless the docs sprint changes runtime-visible tracker metadata that needs visual verification.

## Runtime / UI QA Lock

- [ ] Approved routes and viewports are named.
- [ ] Correct canonical view loads.
- [ ] Main content is nonblank.
- [ ] Console error count is zero.
- [ ] No document-level horizontal overflow.
- [ ] One Starlight canvas remains.
- [ ] Singleton renderer and locked card placement remain intact.
- [ ] Applicable mobile controls meet the approved minimum height.
- [ ] Direct-path bridges reach approved canonical hash routes.
- [ ] Phase 9B candidate remains unverified/non-adopted when in regression scope.

## Push / Hosted Verification Lock

- [ ] Confirm the implementation commit hash and message.
- [ ] Check whether the commit is already on `origin/main` before pushing.
- [ ] Do not create a duplicate commit before checking push state.
- [ ] Push only a clean branch with expected commits.
- [ ] Record the GitHub Pages run ID and both validation/build and deploy results.
- [ ] Wait for deployment completion before hosted QA.
- [ ] Run hosted route checks at approved desktop and mobile viewports.
- [ ] Separate product defects from deployment lag, cache state, and test-harness failures.
- [ ] Hosted `/ai-handoff` remains a GitHub Pages 404 unless separately authorized.
- [ ] If hosted QA fails, report first; do not apply a broad fix.
- [ ] If hosted QA passes, use a docs/tracker-only recording commit only when required.

## Validation

- [ ] `node --run build`
- [ ] `node --run check:project`
- [ ] `node --run check:phase15`
- [ ] `node --run check:agents`
- [ ] `node --run check:mirrors`
- [ ] `node --run smoke:routes`
- [ ] Run `node --check` only for touched JavaScript files.
- [ ] `git diff --check`
- [ ] `git status --short --branch`
- [ ] `git diff --name-only`
- [ ] Required safety-language scan
- [ ] Review scan matches in context
- [ ] Update `PROJECT_STATUS.md`
- [ ] Update `NEXT_STEPS.md`
- [ ] Confirm exact next recommended action
- [ ] Commit only approved files
- [ ] Push only when explicitly authorized and only after successful commit and validation.

## Stop Conditions

Stop on scope drift, unexpected dirty files, failed validation, privacy exposure, unsafe claims, unapproved implementation, ambiguous CEO B authority, a required forbidden-file edit, a new unapproved route/renderer/storage key, or a hosted failure that needs a separately authorized fix.
