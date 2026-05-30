# Pickaxe Capital / AI Habitat OS

Pickaxe Capital is the public brand. AI Habitat OS is the internal operating system. CEO B is the founder decision layer for reviewing, ranking, and approving work.

This project is a premium dark cyber-finance command center and AI-agent habitat. The immediate goal is to finish a stable, readable, static-first website before adding deeper integrations.

## Current Status

- Active app: `server.mjs` serving the static `public/` app.
- Main route: `#/vision-map`.
- Priority route: `#/agents`.
- Build and project checks should pass before each handoff.
- Mock, local, prototype, and future-adapter features must stay clearly labeled.
- Keep the project honest: no fake live integrations, no hidden execution, and no protected-site scraping.

## Quick Start

```bash
git clone https://github.com/Burberrry/Pickaxe-Capital.git
cd Pickaxe-Capital
node server.mjs
```

Open:

```text
http://localhost:4328/#/vision-map
```

Useful checks:

```bash
node scripts/build.mjs
node scripts/check-project.mjs
node scripts/update-readme.mjs
```

## Core Routes

| Route | Purpose |
|---|---|
| `#/vision-map` | Main command center |
| `#/agents` | AI Habitat OS agent world |
| `#/signals` | Market intelligence workbench |
| `#/archive` | Intelligence vault |
| `#/bookmarks` | Manual bookmark intake |
| `#/source-hub` | External source cockpit |
| `#/staging` | Build tracker, QA, and status |
| `#/founder` | Founder / brand page |
| `#/ceo-b-profile` | CEO B command profile |
| `#/jarvis-lab` | Local command prototype |
| `#/life-os` | Life Habitat prototype |
| `#/ai-handoff` | Copy/paste project handoff |

## Auto-Updating Game Plan

The section below is refreshed from `AGENTS.md`, `PROJECT_STATUS.md`, and `NEXT_STEPS.md` by running:

```bash
node scripts/update-readme.mjs
```

<!-- PICKAXE-AUTO-UPDATE:START -->

### Last README Game Plan Update

- Generated: 2026-05-30
- Sources: `AGENTS.md`, `PROJECT_STATUS.md`, `NEXT_STEPS.md`

### Working Now

- `/`
- `/agents`
- `/vision-map`
- `/archive`
- `/staging`
- `/founder`
- `/ceo-b-profile`
- `/bookmarks`

### Current State

- `/agents` is fully integrated with the AI Habitat OS operating layer, review stacks, and active mission boards.
- `/vision-map` is wired dynamically into the Review and Mission pipelines. Node and agent drawers support stateful actions that push task and review items. Selected agent markers support highlights.
- `/bookmarks` supports manual intake and Chrome/X bookmark batch analy

### Next Priority

1. **Jarvis command console improvements**: Connect Jarvis command console to agent missions and archives more deeply.
2. **Dedicated /device-hub**: Add a dedicated `/device-hub` layout only after `/life-os` is stable.

### Non-Negotiable Build Rules

- Never delete working pages without asking.
- Do not rebuild from scratch unless explicitly asked.
- Do not duplicate pages; merge duplicate ideas into the stronger page.
- Reuse components before creating new ones.
- No duplicate data/component/page concepts.
- Mock data must be labeled.
- No fake live integrations.
- No scraping or bypassing protected sites.
- Use safe external-source fallbacks.
- Keep design dark, premium, cyberpunk, readable, and Pickaxe Capital branded.

<!-- PICKAXE-AUTO-UPDATE:END -->

## Finish Roadmap

### Phase 0 — Protect the Foundation: 0% to 10%

- [ ] Do not start a new app or framework.
- [ ] Keep `server.mjs` and `public/` as the active runtime.
- [ ] Keep all working routes alive.
- [ ] Run build/check before and after meaningful edits.
- [ ] Update `PROJECT_STATUS.md`, `NEXT_STEPS.md`, and README before stopping.

### Phase 1 — Visual QA and Cleanup: 10% to 25%

- [ ] Test normal browser zoom.
- [ ] Fix crowded cards, spacing, and oversized sections.
- [ ] Remove duplicate legacy panels only when safe.
- [ ] Confirm no console errors.
- [ ] Confirm no horizontal overflow.

### Phase 2 — Lock the Command Workflow: 25% to 40%

- [ ] Confirm intake to review to mission to archive flow.
- [ ] Confirm `/agents` task assignment saves locally.
- [ ] Make CEO B Review Stack simple and useful.
- [ ] Make `/staging` the clear source of build truth.

### Phase 3 — Alerts and Rules: 40% to 52%

- [ ] Improve `#/app/alerts` with rule cards.
- [ ] Add condition, source, confidence, risk, and CEO B action fields.
- [ ] Keep examples clearly labeled as demo until connected.
- [ ] Add local enable/disable state.

### Phase 4 — Data Portability: 52% to 65%

- [ ] Add export/import JSON for localStorage state.
- [ ] Include bookmarks, archive, review stack, missions, tracker, and agent tasks.
- [ ] Add restore preview before overwrite.
- [ ] Keep it local-first.

### Phase 5 — Adapter Interface Prep: 65% to 75%

- [ ] Define clean interfaces for future data providers.
- [ ] Add labels: Mock, Manual, Local, Adapter Ready, Connected.
- [ ] Keep private keys out of frontend code.
- [ ] Add one real adapter at a time only after the static app is clean.

### Phase 6 — Game Brain / AI Habitat OS: 75% to 85%

- [ ] Write the Game Bible.
- [ ] Define core loop, agent stats, mission types, risk, upgrades, and progression.
- [ ] Add save/load first with localStorage.
- [ ] Make the agent city feel alive without pretending it is fully autonomous.

### Phase 7 — Optional Backend: 85% to 93%

- [ ] Add backend only for private keys, scheduled jobs, persistent storage, or model calls.
- [ ] Keep static deployment possible when backend is not connected.
- [ ] Use official APIs only.

### Phase 8 — Polish and Launch: 93% to 100%

- [ ] Final polish for Home, Vision Map, Agents, Archive, and Staging.
- [ ] Add screenshots or a short walkthrough.
- [ ] Publish clear local/GitHub Pages instructions.
- [ ] Keep README and status files updated.

## Rule for Future AI/Codex/Antigravity Sessions

1. Read `README.md`, `AGENTS.md`, `PROJECT_STATUS.md`, and `NEXT_STEPS.md` first.
2. Do not rebuild from scratch.
3. Work on the next highest-priority item only.
4. Run build/check and verify affected routes.
5. Update status files.
6. Run `node scripts/update-readme.mjs`.
7. Commit finished work.
