# Pickaxe Product Coherence Audit

Status: Planning-only audit. No runtime implementation authorized by this document.

Date: 2026-06-20.

Authority: CEO B.

Baseline:

- Local `HEAD`: `993b622` (`Record Finance Terminal hosted verification`).
- Hosted runtime: `e7df530` (`Implement Finance Terminal static research panel`).
- GitHub Pages deployment: run `27811973984`, successful validation/build and deploy.

## Objective

Determine whether the current Pickaxe Capital / AI Habitat OS experience works, looks coherent, and advances the documented game plan:

```text
Source
  -> Research Packet
  -> Risk Gate
  -> CEO B Review
  -> Research-Only Output or No Output
  -> Archive
  -> Learning Ledger
  -> Better Next Packet
```

This audit uses the current project context lock as the authority when older vision files conflict with current safety truth. “Live,” autonomous-agent, exact-contract, and execution language in older vision notes is not current product authorization.

## Evidence Reviewed

Documentation:

- `AGENTS.md`
- `docs/00_MASTER/PICKAXE_PROJECT_CONTEXT_LOCK.md`
- `docs/00_MASTER/PICKAXE_MASTER_BUILD_BIBLE_v3.md`
- `docs/00_MASTER/PICKAXE_MASTER_VISION_MAP.md`
- `docs/00_MASTER/PICKAXE_NEXT_GAME_PLAN.md`
- `docs/vision/PRODUCT_DIRECTION.md`
- `docs/vision/UI_PRINCIPLES.md`
- `docs/04_DESIGN/PICKAXE_DESIGN_SYSTEM.md`
- `docs/UI_POLISH_BACKLOG.md`
- `docs/ACTIVE_RENDER_PATHS.md`

Hosted routes reviewed at `1280x720` and `390x844`:

- `#/alerts`
- `#/dashboard`
- `#/source-hub`
- `#/research`
- `#/archive`
- `#/learning-ledger`
- `#/agents`
- `#/staging`

## What Is Working

- All audited routes loaded the correct nonblank view.
- All audited routes had zero observed console errors and no document-level horizontal overflow.
- One locked Starlight field remained present.
- Source-required, static/demo, manual-review, no-execution, and CEO B review boundaries are visible.
- The operating spine exists across Source Hub, Research Desk, Alerts, Archive, and Learning Ledger.
- Research Desk is the clearest current example of the intended product: it explains purpose, boundaries, workflow, and manual action in one consistent dark command surface.
- The current static/manual product does not falsely imply a connected provider, broker, autonomous agent system, or verified market feed.

## Confirmed Product-Coherence Gaps

### P0 — V3.1 Dark-Panel Contrast Regression

The visible QQQ Research Card Flow on `#/alerts` and `#/dashboard` is rendered on a dark panel, but broad route-theme selectors override the V3.1 text colors.

Visible computed values on both routes:

| Element | Current visible color | Intended dark-panel color |
| --- | --- | --- |
| `.v31-title-row h2` | `rgb(29, 29, 31)` | `#fff7e8` |
| `.v31-standard` | `rgb(134, 134, 139)` | light ivory at readable opacity |
| `.v31-flow-step strong` | `rgb(29, 29, 31)` | light ivory |
| `.v31-selected-candidate strong` | `rgb(29, 29, 31)` | `#fff7e8` |
| `.v31-mini-card strong` | `rgb(29, 29, 31)` | light ivory |
| `.v31-mini-card p` | `rgb(134, 134, 139)` | light ivory at readable opacity |

The review simulator and watchlist queue retain their intended light-on-dark text. The regression is concentrated in the V3.1 mission-control hero and detailed Signals card.

Impact:

- The first operating unit does not meet the “clear in 10 seconds” standard.
- Mission Control begins with an unreadable synchronized card before its own command content.
- Safety and decision context exist but are visually suppressed.

### P1 — Mobile Navigation Delays Operational Value

At `390x844`, route content begins at approximately `468.5px` because the 21-item navigation occupies the top of the page.

Observed document heights:

- Alerts: approximately `29,285px`.
- Research Desk: approximately `18,049px`.
- Mission Control: approximately `8,586px`.
- Source Hub: approximately `8,028px`.

This makes the product functional but slow to scan on mobile. A structural navigation change remains deferred because `docs/UI_POLISH_BACKLOG.md` requires CEO B’s visual blueprint before major route regrouping.

### P1 — Flagship Hierarchy Is Split

Mission Control is documented as the flagship overview, while Alerts is the canonical homepage and first operating unit. Both currently open with the synchronized V3.1 QQQ card, so Mission Control’s actual decision queue and next action are pushed below the first screen.

The placement is locked and must not be changed during the contrast repair. A later hierarchy sprint requires explicit CEO B scope.

### P2 — Cross-Route Visual Language Is Inconsistent

Research Desk, Alerts, Mission Control, Agents, and Staging use dark command surfaces. Source Hub uses a large white editorial surface. It is readable and functional, but it does not match the governing premium dark / graphite / metallic-gold design language.

Source Hub is a locked stable route. Do not restyle it during the next sprint.

### P2 — Staging Does Not Lead With The Latest Hosted Checkpoint

The hosted Staging first screen still leads with the earlier route-by-route visual QA checkpoint rather than the newer Finance Terminal hosted deployment. This weakens Staging’s role as current build truth, but it is not a functional defect.

## Institutional Quality Gate Summary

| Gate | Current assessment | Evidence |
| --- | --- | --- |
| Clarity | Needs improvement | Flagship V3.1 text is low contrast; mobile reaches route content late. |
| Trust | Strong | Safety, static/manual, source, and CEO B boundaries are explicit. |
| Research quality | Strong prototype | Structured packet, source states, risk gates, and counter-thesis fields exist. |
| Decision quality | Partial | The flow exists, but the first-screen hierarchy obscures the next action. |
| Memory | Strong prototype | Archive and Learning Ledger preserve packet-linked internal lessons. |
| Source integrity | Strong prototype | Source Hub and Research Desk keep source-required states visible. |
| Risk control | Strong | Hard blocks outrank scores and public output remains blocked. |
| Human review | Strong | CEO B remains the final decision layer. |
| User experience | Needs improvement | Contrast, mobile navigation height, and page length slow scanning. |
| Architecture | Strong for current phase | Static-first owner routes and storage boundaries remain coherent. |
| Simplicity | Mixed | Core flow is understandable; 21 routes and repeated detail create density. |
| Proof | Strong | Hosted routes, working local workflows, and explicit state labels are visible. |
| Strategic fit | Strong | The operating spine advances the research-first game plan without fake capability. |

## Candidate Sprint Comparison

| Candidate | Value now | Risk | Classification | Decision |
| --- | --- | --- | --- | --- |
| V3.1 dark-panel contrast restoration | Restores readability to the flagship workflow on Alerts and Mission Control. | Low | CSS-only runtime fix | **Recommend next** |
| Staging current-checkpoint refresh | Makes build truth current. | Low | Runtime metadata / presentation | Do after contrast fix |
| Mobile navigation regrouping | Improves first-screen access substantially. | High | Structural UI / navigation | Blocked pending CEO B blueprint |
| Source Hub dark-theme unification | Improves brand consistency. | Medium | Route-scoped visual redesign | Defer; Source Hub is locked |
| Mission Control hierarchy change | Restores its command overview above synchronized research detail. | Medium/High | Locked placement / layout | Defer; requires explicit scope |

## Recommended Next Bounded Sprint

Name: `V3.1 dark-panel contrast restoration — Alerts + Mission Control only`.

Type: CSS-only visual defect repair.

Owner routes:

- `/`
- `#/alerts`
- `/app/alerts`
- `#/dashboard`

Approved objective if CEO B authorizes it:

- Restore the intended light-on-dark V3.1 text hierarchy for the visible QQQ Research Card Flow and detailed Signals card.
- Preserve all V3.1 markup, renderers, data, selected-candidate behavior, simulator order, watchlist queue, card placement, and storage contracts.

Likely files:

- `public/pickaxe-v31-mission-control.css`
- `public/pickaxe-v31-candidate-sync.css`
- `public/index.html` and `index.html` for cache-key synchronization
- `PROJECT_STATUS.md`
- `NEXT_STEPS.md`

Do not change:

- JavaScript
- routes or navigation
- renderer ownership
- card placement
- QQQ demo content
- LocalStorage keys or values
- Research Packet models
- Alerts review queue
- Source Hub, Research Desk, Archive, Learning Ledger, Agents, Staging, or Watchlists
- Phase 7 Starlight behavior
- `data/signal-alerts.json`

Acceptance criteria:

- V3.1 headings, selected candidate, flow steps, mini-card values, descriptive copy, and footer are readable on their dark surfaces.
- The detailed Signals card retains readable light-on-dark type.
- The review simulator and watchlist queue remain unchanged.
- Desktop `1280x720` and mobile `390x844` pass on all approved routes.
- Correct active view, nonblank content, zero console errors, no document-level horizontal overflow, and one Starlight field.
- Existing selected-candidate synchronization, refresh persistence, simulator/reset behavior, safety language, and public-output block remain intact.

## Stop Condition

Do not begin the CSS repair until CEO B authorizes this exact bounded sprint. Do not combine it with navigation, hierarchy, Source Hub, Staging, provider, Options Hub, storage, or workflow changes.

## Implementation Follow-Up

The separately continued bounded work implemented this recommendation locally on 2026-06-20.

- Restored the V3.1 light-on-dark hierarchy with route-scoped CSS only.
- Preserved renderer ownership, card placement, data, synchronization, simulator, watchlist queue, storage, routes, and safety gates.
- Desktop `1280x720` and mobile `390x844` QA passed for `/`, `#/alerts`, `/app/alerts`, and `#/dashboard`.
- Selected-candidate synchronization, refresh persistence, simulator advancement/reset, one Starlight field, zero console errors, and no horizontal overflow were verified.
- The implementation remains local until a separately authorized push and hosted-verification sprint.
