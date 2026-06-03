# Next Sprint Options

Phase 2E decision menu for B. Do not start any option until B explicitly chooses it.

## Current Stable Truth

- Mission Control = flagship overview.
- Source Hub = trust/intelligence layer.
- Watchlists = Research Universe.
- Agents = placeholder-only.
- Obsidian = private memory.
- Website = cockpit.
- CEO B = decision layer.

## Option A - 20-Section Blueprint / Ideal Layout Planning

Purpose:
Prepare the whole product architecture before more coding.

Why it helps:
This is the lowest-risk way to turn B's hand-drawn visual OS into route groups, page priorities, and a build order without destabilizing the current app.

What route changes:
None by default. This is a planning sprint that may later inform `#/vision-map`, `#/roadmap`, and the sidebar grouping.

What not to build:
No UI changes, no new routes, no visual assets, no Agent Habitat rebuild, no Options Hub.

Output:
Better section structure, drawing interpretation, route map, visual blueprint, and sprint order.

Risk:
Low.

Recommended when:
B wants to draw and design the full OS before another build.

Validation requirements:
Docs-only diff, build check, project check, clean `data/signal-alerts.json`.

Recommended sequence:
1. B fills `docs/VISUAL_BLUEPRINT_INTAKE_TEMPLATE.md`.
2. Codex converts it into a route/section plan.
3. B approves one implementation sprint.

## Option B - Archive / Source Workflow

Purpose:
Make Source Hub send verified notes into Archive and CEO B review more cleanly.

Why it helps:
It naturally follows Phase 2D because Source Hub is now the trust layer and Archive is the saved intelligence memory.

What route changes:
Likely `#/source-hub`, `#/archive`, and possibly `#/alerts` only if needed for review routing.

What not to build:
No live APIs, scraping, provider adapters, private note publishing, or Watchlists redesign.

Output:
Cleaner source cards, archive candidate flow, CEO B review queue actions, source status labels, and archived source memory.

Risk:
Low/Medium.

Recommended when:
B wants the cockpit to start compounding source-backed memory.

Validation requirements:
Build, project check, route checks for `#/source-hub`, `#/archive`, `#/alerts`, `#/dashboard`, and `#/staging`; no private Obsidian leakage.

Recommended sequence:
1. Keep Source Hub layout stable.
2. Tighten local-only source-to-archive actions.
3. Improve Archive review display.
4. Validate no public/private boundary issues.

## Option C - Options Intelligence Hub

Purpose:
Research-only options cockpit.

Why it helps:
It is a high-interest future route that can organize options research, risk notes, catalysts, and source requirements.

What route changes:
`#/options` primarily; possibly `#/signals`, `#/risk-rules`, and `#/source-hub` only for links/status.

What not to build:
No live options chain, broker execution, buy/sell language, fake Greeks, fake IV, fake flow, fake probability, fake provider state, or trade execution.

Output:
Static/manual options research cockpit with source requirement, catalyst note, risk note, and CEO B review gates.

Risk:
Medium.

Recommended when:
B explicitly approves Options Hub and agrees to strict research-only language.

Validation requirements:
Build, project check, browser route checks, safety text scan for forbidden language, no fake live market/flow claims.

Recommended sequence:
1. Define options safety contract.
2. Build static research cards only.
3. Wire local-only review/archive actions.
4. Validate risk wording hard.

## Option D - Mission Control Visual Polish

Purpose:
Make the flagship dashboard visually stronger now that shell and Source Hub are locked.

Why it helps:
Mission Control is the first impression of the cockpit. A polish pass can improve hierarchy without changing product scope.

What route changes:
`#/dashboard` only, with smoke checks for `#/watchlists` and `#/source-hub`.

What not to build:
No new features, no live data, no fake telemetry, no Watchlists rewrite, no Agents rebuild.

Output:
Stronger visual hierarchy, clearer source-gap summary, better module rhythm, improved CEO B command feel.

Risk:
Low/Medium.

Recommended when:
B wants the cockpit to feel more premium before expanding routes.

Validation requirements:
Build, project check, browser checks for dashboard/watchlists/source-hub, no horizontal overflow.

Recommended sequence:
1. Identify visual pain points.
2. Adjust dashboard layout and density only.
3. Confirm no Source Hub/Watchlists regression.

## Option E - Obsidian Workflow Strengthening

Purpose:
Improve local handoff and private memory process without exposing raw notes.

Why it helps:
It strengthens the B -> Obsidian -> Codex/ChatGPT -> website workflow while preserving the private/public boundary.

What route changes:
Potentially `/ai-handoff`, `/source-hub-staging`, and docs only. Public frontend should show only sanitized memory status.

What not to build:
No public note browser, no raw vault publishing, no in-browser vault read, no private path exposure on GitHub Pages.

Output:
Clearer handoff workflow, better templates, safer summary rules, and a repeatable pre-session process.

Risk:
Low if kept local-only.

Recommended when:
B wants better memory continuity before the next build sprint.

Validation requirements:
Build, project check, local handoff check, public safety scan, no private frontend content.

Recommended sequence:
1. Clarify what notes feed handoff.
2. Add or update local-only templates/docs.
3. Verify public app stays sanitized.

## Recommended Order

1. Option A if B wants to use the hand-drawn 20-section blueprint first.
2. Option B if B wants the next practical product workflow after Source Hub.
3. Option D if B wants a premium cockpit polish pass.
4. Option E if memory continuity is the pain point.
5. Option C only after explicit B approval because options content has higher safety risk.
