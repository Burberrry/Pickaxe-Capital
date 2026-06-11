# Phase 1.5 Deliverable Report

## 1. Executive Decision

Phase 1.5 foundational truth cleanup passed local validation. The public product, default local runtime, deployment artifact, public language, route documentation, and automated safety checks now agree that Pickaxe Capital is a static/demo, human-reviewed research prototype.

No Phase 2 visual redesign was performed.

## 2. Files Changed

- Runtime and deployment: `.github/workflows/pages.yml`, `server.mjs`, `package.json`
- Mirrored public app: `app.js`, `public/app.js`, `habitat-data.js`, `public/habitat-data.js`, `index.html`, `public/index.html`
- Validation: `scripts/check-mirrors.mjs`, `scripts/check-public-safety.mjs`, `scripts/check-deploy-boundary.mjs`, `scripts/check-routes.mjs`
- Project truth: `README.md`, `PROJECT_STATUS.md`, `NEXT_STEPS.md`, `docs/LOCAL_STORAGE_KEYS.md`, `docs/ROUTE_STATUS_MATRIX.md`
- New documentation: `docs/PUBLIC_DEPLOYMENT_BOUNDARY.md`, `docs/ACTIVE_RENDER_PATHS.md`
- Phase files: `PHASE_1_5_FOUNDATIONAL_TRUTH_CLEANUP.md`, `PHASE_2_ALERTS_DESK_AND_HERO.md`, `PHASE_3_AGENTS_AND_HABITAT_OS.md`, `PHASE_4_POLISH_MOBILE_VALIDATION.md`
- Session record: `PHASE_1_5_DELIVERABLE_REPORT.md`

Root/public mirrors remain synchronized. Styles were not changed.

## 3. Live API Behavior Changes

- Added the explicit local development gate `PICKAXE_ENABLE_LIVE_SERVICES=true`.
- Default mode is `static-demo`.
- Default market, options, signals, checklist, and research endpoints return labeled deterministic demo responses.
- Default requests do not call Yahoo Finance, CBOE, or OpenAI.
- Default signal and research requests do not write `data/signal-alerts.json` or `data/agent-runs.json`.
- Retained external-service code is marked `DEV-ONLY / DISABLED BY DEFAULT / NOT USED BY GITHUB PAGES`.
- `/api/health` reports `liveServicesEnabled: false` by default.

## 4. GitHub Pages Deployment Boundary Changes

- `.github/workflows/pages.yml` now uploads `public/` instead of the repository root.
- `docs/PUBLIC_DEPLOYMENT_BOUNDARY.md` documents allowed public assets and prohibited private materials.
- Deployment checks reject repository-root publication and forbidden top-level public directories.

## 5. Execution-Like Language Removed or Relabelled

- `BUY CALL` became `Call Research Setup`.
- `BUY STRENGTH` became `Strength Research Setup`.
- `EXECUTE / Take Action` became `PUBLISH RESEARCH / Complete Review`.
- `Trading Agent` became `Market Research Agent`.
- Generic approval buttons became `Approve for Research`.
- Approval states normalize to `Approved for Research — Not a Trade Command`.
- `CEO_B_COMMAND_ALERT` became `CEO_B_RESEARCH_REVIEW`.
- Trade-direction rules and execution slogans were rewritten as research-review guidance.
- The reusable alert disclaimer is present:

`Research only. Not financial advice. No broker execution. Options involve substantial risk. User judgment required.`

Legacy LocalStorage approval and route values are normalized when read, so no destructive migration is expected.

## 6. Docs Reconciled

- Phase 1 and Phase 1.5 status are recorded.
- Phase 2 remains hero plus `#/alerts` only.
- Agents and AI Habitat OS remain Phase 3 targets.
- Public behavior is documented as static/demo.
- Live services are documented as disabled by default.
- GitHub Pages is documented as a `public/`-only deployment.
- Research Desk is documented as an implemented local workflow.
- Stale repository links now point to `Burberrry/Pickaxe-Capital`.

## 7. Active Render Paths Documented

`docs/ACTIVE_RENDER_PATHS.md` identifies the effective renderers for Alerts Desk, Agents, AI Habitat OS, Mission Control, Source Hub, and Research Desk. It also identifies overridden and unreachable implementations that should not be edited during Phase 2.

## 8. New Validation Checks

- `npm run check:mirrors`
- `npm run check:public-safety`
- `npm run check:deploy-boundary`
- `npm run check:routes`
- `npm run check:phase15`

The route check covers all 21 target hash routes.

## 9. Validation Results

- `npm run build`: passed
- `npm run check:project`: passed
- `npm run check:phase15`: passed
- JavaScript syntax checks: passed
- Git diff whitespace check: passed
- Root/public mirror comparison: passed
- Default API mode: confirmed `static-demo`
- External-service disabled message: confirmed
- `/ai-handoff`: HTTP 200 with corrected repo and runtime truth
- Desktop 21-route browser sweep: all routes active, nonblank, no console errors, no horizontal overflow
- Required direct-route 390px sweep: passed for `/`, `/agents`, `/vision-map`, `/archive`, `/staging`, `/founder`, `/ceo-b-profile`, `/jarvis-lab`, and `/life-os`
- `#/alerts` at 390px: required approval and disclaimer copy visible; no unsafe `BUY CALL` or `EXECUTE` label visible
- `data/signal-alerts.json` hash: unchanged
- `data/agent-runs.json` hash: unchanged
- Secrets exposed: none found

## 10. Remaining Risks

- Duplicate and overridden render functions remain technical debt. They are documented, not refactored.
- Live-service code remains in `server.mjs` for explicit future local development. It must stay disabled for public/static operation.
- Existing users may retain other historical free-text notes in LocalStorage; known approval and route states normalize safely.
- GitHub Pages deployment has not been pushed in this session, so the live site will not reflect this cleanup until the repository is committed and deployed.

## 11. Phase 2 Authorization

The foundational checks pass. Phase 2 is technically safe to begin after CEO B reads and accepts this report. This session stops here and does not begin Phase 2.

## 12. Next Highest-Leverage Step

CEO B reviews this report, then starts a separate Phase 2 session scoped only to the homepage hero and `#/alerts`.

Phase 2 authorized: Hero + Alerts Desk may begin.
