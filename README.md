# Pickaxe Capital / AI Habitat OS

Pickaxe Capital is a founder-owned research and decision-infrastructure cockpit. AI Habitat OS is the internal operating system behind the cockpit. CEO B is the human manual review and command layer.

## Current Status

Phase 1 inspection and Phase 1.5 foundational truth cleanup are complete locally. Phase 2 remains limited to the hero and Alerts Desk and may begin only after CEO B reviews the Phase 1.5 deliverable report.

The public product is a static/demo GitHub Pages market-research application focused on Options Alerts, source verification, research packet review, Archive memory, and Learning Ledger outcomes. Live Yahoo Finance, CBOE, and optional AI development paths are disabled by default in `server.mjs` and are not used by GitHub Pages.

> **Research only. Manual review required. No broker execution. No copy-trading. No guaranteed outcomes.**

## Live Links

- [Main Cockpit](https://burberrry.github.io/Pickaxe-Capital/)
- [Options Alerts](https://burberrry.github.io/Pickaxe-Capital/?v=options-alerts-panels-1-5#/alerts)
- [Mission Control](https://burberrry.github.io/Pickaxe-Capital/#/dashboard)
- [Source Hub](https://burberrry.github.io/Pickaxe-Capital/#/source-hub)
- [Archive](https://burberrry.github.io/Pickaxe-Capital/#/archive)

## Latest Checkpoint

- `3dc9b68` Implement Options Alerts static research panels
- `750072b` Specify Options Alerts franchise cards and review gates
- `a8570c3` Integrate Pickaxe company story and operating doctrine

## Implemented Options Alerts Panels

- Candidate Identity and Why Now
- Source Trail and Evidence Quality
- Contract Quality and Liquidity
- Volatility Intelligence and Event Risk
- Risk Desk and CEO B Review State

## Core Workflow

```text
Source Hub
→ Research Packet
→ Options Alerts
→ Risk Desk / CEO B Review State
→ Archive
→ Learning Ledger
```

## What This Project Is

- Static-first market research cockpit
- Research-only Options Alerts review surface
- CEO B manual decision layer
- Source and memory operating system
- LocalStorage/static GitHub Pages prototype

## What This Project Is Not

- Not a brokerage
- No broker execution
- No auto-trading
- No copy-trading
- No guaranteed returns
- No fake live data
- No scraping
- No frontend API keys
- No raw Obsidian publishing

## Core Routes

- `/` and `#/alerts`: Options Alerts / Alerts Desk compatibility route
- `#/dashboard`: Mission Control
- `#/source-hub`: Source Hub
- `#/research`: Research Workspace
- `#/archive`: Archive
- `#/learning-ledger`: Learning Ledger
- `#/watchlists`: Watchlists
- `#/staging`: Staging / QA
- `#/ai-habitat-os`: AI Habitat OS

## Architecture

- Vanilla HTML, CSS, and JavaScript
- Static-first deployment through GitHub Pages
- LocalStorage-backed prototype state
- `server.mjs` for local development
- Root and `public/` assets are maintained as mirrors
- GitHub Pages deploys `public/` only
- Live services are disabled by default and require `PICKAXE_ENABLE_LIVE_SERVICES=true` for explicit local development
- No broker services, trade execution, or private frontend credentials

See `docs/PUBLIC_DEPLOYMENT_BOUNDARY.md` and `docs/ACTIVE_RENDER_PATHS.md` before changing deployment or route renderers.

## Quick Start

```bash
git clone git@github.com:Burberrry/Pickaxe-Capital.git
cd Pickaxe-Capital
node server.mjs
```

Open the local address printed by the server.

If `npm` is unavailable in the Codex desktop environment, run the build with:

```bash
/Applications/Codex.app/Contents/Resources/node --run build
```

## Review Boundary

Options Alerts organizes research candidates and supporting evidence for human review. Risk gates and evidence blocks can prevent a candidate from advancing, but the system does not place orders or make autonomous investment decisions. CEO B remains the manual review and command layer.

## Auto-Updated Game Plan

<!-- PICKAXE-AUTO-UPDATE:START -->

### Last README Game Plan Update

- Generated: 2026-06-23
- Sources: `AGENTS.md`, `PROJECT_STATUS.md`, `NEXT_STEPS.md`

### Working Now

- Phase 3 Agent Habitat and AI Habitat OS are complete, browser-local, research-only, and live on GitHub Pages.
- Phase 4 local utility CSS and dependency-free route smoke coverage are active.
- Phase 5 pre-deploy validation and public-only Pages deployment are active.
- Phase 5.3 keeps the bounded README auto-update marker contract active.
- Phase 6 adds a verified-internal-milestone Proof of Work carousel to the public Founder page.
- Phase 7 adds a global decorative Pickaxe Starlight Field with reduced-motion and hidden-tab safeguards.
- Phase 8 adds the static/local Intelligence Orbit, premium Alerts alignment, and seven-agent visual command layer.

### Current State

- The active product is a vanilla HTML/CSS/JavaScript static SPA served from `public/`.
- `#/agents` is the seven-identity visual command layer around the nine-department browser-local Agent Habitat workflow.
- `#/ai-habitat-os` is the nine-zone browser-local strategic system map.
- Research remains static/manual with source verification and CEO B final review.
- No live providers, autonomous background agents, broker execution, copy-trading, fake live data, or private frontend keys are connected.

### Next Priority

- Keep Phase 7, Phase 8, and the validated Phase 9A runtime stable.
- Keep the hosted `/app/alerts` bridge, Phase 9A, and V3.1 locked.
- Keep Phase 9B, Phase 9C, Signal Engine Hardening, Options Hub, providers, payments, and execution deferred.

### Non-Negotiable Build Rules

- Do not rebuild from scratch.
- Keep mock data labeled.
- No fake live integrations.
- No auto-trading or broker order placement.

<!-- PICKAXE-AUTO-UPDATE:END -->

## Future Direction

Planned expansion includes Quant Lab and Memory OS capabilities. Future work must preserve the research-only boundary, explicit human review, static-first safety model, and prohibition on broker execution, copy-trading, fake live data, scraping, and exposed frontend secrets.

