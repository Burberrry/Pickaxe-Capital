# Pickaxe Capital — Project Context Lock

Status: Durable Codex project context.
Updated: 2026-06-21.
Authority: CEO B.
Scope: Mission, architecture, locked checkpoints, module context, brand/data rules, and future planning boundaries.

This document expands the permanent rules in `AGENTS.md`. It is context, not authorization to implement any module or future phase.

## 1. Core Mission

Pickaxe Capital is a research-only, source-verified, risk-first market intelligence OS for options traders and founder-led decision-making.

The near-term business goal is a minimal-spend private options alert and research lab that helps CEO B review market setups faster and more clearly. The long-term ambition is a premium intelligence platform with investor-grade credibility and eventual public-company potential.

The platform does not sell predictions. It sells the pickaxe: verified tools, disciplined rituals, scarce objects, and research-first artifacts for people who build conviction before they act.

Pickaxe Capital is the public brand and product layer. AI Habitat OS is the internal command center connecting research, source verification, risk, memory, agents, and CEO B review. CEO B remains the founder decision layer; the system organizes and prepares decisions but never replaces the founder.

The canonical naming and memory rules are defined in `docs/00_MASTER/PICKAXE_BRAND_SIMPLIFICATION_AND_MEMORY_HYGIENE.md`. `Pickaxe Capital / AI Habitat OS` is retained only as historical wording where needed; it is no longer the public-facing project title.

## 2. CEO B Operating Doctrine

- CEO B final review is mandatory.
- Research first.
- Risk first.
- Source verification required.
- Manual review required.
- Clarity before complexity.
- Capital preservation before return.
- Bad news must be shown clearly.
- Missed opportunities become lessons.
- Rejected or blocked packets can become no-trade intelligence.
- Approval of a research improvement does not automatically change prompts, scores, gates, alerts, publication state, or system rules.
- Codex implements only a separately approved bounded scope.

The governing flow is:

```text
Input
  -> Source Verification
  -> Research Packet
  -> Challenge / Risk Gate
  -> CEO B Review
  -> Research-Only Output or No Output
  -> Archive
  -> Learning Ledger
  -> Proposed Improvement
  -> Separate CEO B Decision
```

## 3. Current Website Architecture

- Static-first single-page application.
- Vanilla HTML, CSS, and JavaScript.
- `public/` is the deployed GitHub Pages artifact.
- Root files are synchronized editing mirrors where listed by `scripts/check-mirrors.mjs`.
- `public/index.html` is the app shell; `public/app.js` owns hash routing and active renderers.
- Canonical navigation is hash-route based.
- GitHub Pages direct paths require explicit directory-index bridges.
- `/app/alerts` forwards to `#/alerts`.
- `/agents`, `/vision-map`, `/staging`, and `/ceo-b-profile` forward to matching hash routes.
- `/jarvis-lab` forwards to `#/jarvisLab`; `/life-os` forwards to `#/lifeOS`.
- `/ai-handoff` and `/source-hub-staging` are generated local-server text endpoints and must remain local-only.
- Browser LocalStorage contains the public deployment state. Existing keys and restore boundaries are documented in `docs/LOCAL_STORAGE_KEYS.md`.
- `server.mjs` is a local-development server with demo/static endpoints by default.
- GitHub Pages has no backend, live provider, broker, authentication, payment, subscription, secret-management, or autonomous publishing layer.
- `src/` Astro files are inactive references, not the current runtime.
- Route ownership is documented in `docs/ROUTE_MAP.md`; effective duplicate render paths are documented in `docs/ACTIVE_RENDER_PATHS.md`.

## 4. Current Locked Phases

### Phase 7 — Pickaxe Starlight Field

- Status: Passed / Hosted.
- Purpose: one subtle global decorative starfield behind the app shell.
- Locked boundaries: one canvas, bounded density, restrained gold/silver palette, pointer-events disabled, hidden-tab pause, reduced-motion static behavior.
- Do not change: initialization count, interaction boundary, motion safeguards, or readability without a separately approved visual fix.

### Phase 8 — Intelligence Orbit And Agent Visual System

- Status: Locked after local and hosted regression QA.
- Purpose: a 16-node static/local Intelligence Orbit on Alerts and a seven-identity visual agent layer around the nine-department Agent Habitat workflow.
- Locked boundaries: browser-local/static representation, CEO B review routing, one Orbit, one Starlight canvas, no fake telemetry or autonomous agents.
- Do not change: Orbit ownership, Agent Habitat route structure, visual-agent lineup, or Phase 7 behavior during unrelated work.

### V3.1 — QQQ Golden Path

- Status: Pass / Hosted.
- Purpose: demonstrate `Market Input -> Source Ledger -> Agent Habitat -> Silence Gate -> Risk Gate -> CEO B Review -> Public Research Card -> Memory Vault`.
- Locked boundaries: QQQ demo data, five-step browser-local review simulator, nine-symbol Watchlist Review Queue, selected-candidate synchronization, Research Packet v2 contracts, and `pickaxe.v31.watchlist.selected`.
- Do not change: detailed Signals card placement beneath the Alerts overlay, candidate identity contracts, simulator order, canonical Alerts renderer, or starfield in unrelated work.

### Phase 9A — Alerts Product Shell

- Status: Pass / Hosted.
- Purpose: keep Alerts as the canonical CEO B research review experience, with conceptual access previews, acknowledgment gate, and selected-packet detail drawer.
- Locked boundaries: one active Alerts renderer, source/risk/CEO B gates, research-only wording, browser-local actions, and the mirrored `/app/alerts` bridge.
- Do not change: create a second Alerts shell, renderer, packet model, review queue, access system, payment layer, or publication path.

### Phase 9B — Memory Vault / Archive Lesson

- Status: Pass / Hosted.
- Purpose: convert the reviewed QQQ no-output path into one stable packet-linked lesson candidate shared by Archive and Learning Ledger.
- Locked boundaries: packet `PC-DEMO-QQQ-001`, candidate `lesson-packet-PC-DEMO-QQQ-001`, existing `pickaxeResearchPackets` and `pickaxeLearningLedger` keys, preserved evidence/risk lineage, and manual CEO B dispositions.
- Do not change: mark the lesson verified, adopted, profitable, performance-proven, or automatically learned; create duplicate candidates, packet models, keys, or rule updates.

### Six-Route Direct-Path Bridge Repair

- Status: Pass / Hosted.
- Purpose: prevent GitHub Pages 404s before the SPA loads.
- Locked bridge pairs:
  - `/agents` -> `#/agents`
  - `/vision-map` -> `#/vision-map`
  - `/staging` -> `#/staging`
  - `/ceo-b-profile` -> `#/ceo-b-profile`
  - `/jarvis-lab` -> `#/jarvisLab`
  - `/life-os` -> `#/lifeOS`
- Locked boundaries: mirrored root/public bridge files and validation coverage in `scripts/check-mirrors.mjs` and `scripts/smoke-routes.mjs`.
- Do not change: bridge destinations, convert `/ai-handoff` into a public bridge, or add a generic fallback architecture without explicit scope.

## 5. Major Active Product Surfaces

| Surface | Current role |
| --- | --- |
| `/`, `#/alerts` | Alerts Desk and CEO B research review queue; canonical homepage. |
| `#/dashboard` | Mission Control, the pinned CEO B operating overview. |
| `#/source-hub` | Trust, source verification, intake, and provider-boundary cockpit. |
| `#/archive` | Cleaned intelligence memory vault and packet lineage. |
| `#/learning-ledger` | Lesson candidate and proposed research-improvement review. |
| `#/agents` | Browser-local Agent Habitat and visual command layer. |
| `#/ai-habitat-os` | Nine-zone strategic system map and workflow loop. |
| `#/watchlists` | Static research-universe foundation. |
| `#/staging` | QA, completion tracker, storage, and build-readiness layer. |
| `#/vision-map` | Living Agent Network and strategic visual map. |
| `#/research` | Manual source-linked Research Packet builder. |
| `#/signals` | Signals Lab and research workbench; no live feed. |
| `#/bookmarks` | Bookmark Miner and manual Chrome/X import workflow. |
| `#/trend-radar` | Static narrative and global-trend research radar. |
| `#/money-lab` | Research-only experiment and risk sandbox. |
| `#/ceo-b-profile` | CEO B identity and operating doctrine. |
| `#/jarvisLab`, `/jarvis-lab` | Typed local command-routing prototype. |
| `#/lifeOS`, `/life-os` | Life OS and future device-role overview. |
| `#/founder`, `/founder` | Founder identity, product story, and proof of work. |
| `#/roadmap` | Static product/build roadmap; concepts are not implementation authorization. |

Legacy aliases and additional routes are inventoried in `docs/ROUTE_MAP.md`.

## 6. Pickaxe Module Registry

These modules are project context, not current implementation scope.

### Pickaxe X Visual Intelligence Engine v2.0 — Ticker-To-Image Standard

- Purpose: ticker or market idea -> verified data -> timestamp/source-labeled `1200x1200` chart-led X-ready intelligence image.
- Layout: Hero Bar; Core Market Panel; Indicator + Context Band; Scenario + Risk Band; Final Decision Footer.
- Rules: no live market number unless checked in the same workflow; visible source/time labels; chart-led composition; CEO B final review; publish only if the defined QA score is at least `900/1000`.
- Style: black/charcoal/gunmetal, metallic gold, silver/white text, green bullish accents, red bearish accents, and the official circular crossed-pickaxe logo.
- Boundary: research-only artifact, not a trade command or guaranteed prediction.

### Pickaxe Finance Terminal — Options Intelligence & Alert Engine

- Purpose: a Google Finance-inspired but Pickaxe-specific options research terminal.
- Focus: consolidate Webull, browser, and AI research workflows; verify sources; review options candidates; present clean animated UX; score research quality and risk; require CEO B review.
- Business constraint: minimal-spend private profit lab before upgraded data.
- Boundary: not Options Hub authorization, not live data, and not broker execution.

### Pickaxe Market Nature Lab / Market Reflex Complexity Engine

- Purpose: study complex market reflex behavior rather than blindly follow or inverse public calls.
- Includes: crowd reflex chains, inverse-the-inverse, rumor/news reflex, attention shocks, gamma/IV traps, liquidity traps, false breakouts, and no-trade intelligence.
- Core line: “The crowd sees the signal. Pickaxe studies the reflex chain.”

### Global Trend Radar / Narrative Tape

- Purpose: convert social and global trends into market-relevant intelligence cards.
- Scores: Attention Velocity, Capital Relevance, Source Quality, Market Translation, Options Relevance, and Risk Flags.
- Boundary: trends are research inputs, not verified market conclusions.

### SpaceX S-1 Truth Scanner / IPO Truth Scanner

- Purpose: convert S-1 filings into verified dashboards.
- Required context: SEC verification, business segments, revenue, loss, EBITDA, capex, share structure, risks, optionality, and CEO B review.
- Boundary: filing analysis must distinguish reported facts, calculations, assumptions, and unresolved questions.

### Pickaxe Blueprint Scenario Engine — All Famous Playbooks

- Purpose: use famous founders, CEOs, investors, operators, companies, empires, brands, funds, athletes, and movements as reference archetypes.
- Steve Jobs is one reference, not the subject.
- Boundary: secondary to the core Pickaxe mission; do not impersonate, copy protected expression, or turn analogy into claimed evidence.

### Pickaxe Product Forge — SlabWorld / VaultFrame Display Business

- Purpose: turn collectible/card ideas into sellable products such as PSA-style slab display frames with custom backgrounds and UV/dust protection.
- Boundary: future business-builder formula, not a market-alert system.

### Pickaxe Pokémon Collection / Investment Dashboard

- Purpose: alternative-assets intelligence for uploaded Pokémon card collections, slabs, sealed products, offers, and comps.
- Boundary: live verified comps are required before valuation claims.

### Pickaxe Atelier — Private Objects By Pickaxe Capital

- Purpose: separate product arm for private objects, rituals, and research-first artifacts.
- Tagline: “Sell the pickaxe. Own the ritual. Preserve the standard.”
- Boundary: remain separate from the financial research platform; catalog disclaimer required.

### Bazaar Tea & Coffee House / Business Builder OS

- Purpose: help a family shop in Naqsh-e Jahan / Isfahan become a premium-value Persian heritage café, gift boutique, merchandise, and social engine.
- Boundary: separate business-builder module, not part of financial alerts.

### Command Planet / AI Habitat World

- Purpose: future 3D black/gold command-world concept containing Mission Control, Trend Radar, Options Desk, Risk Gate, Source Ledger, Memory Vault, Signal Archive, Agent Habitat, and CEO B Review Tower.
- Boundary: MVP only later; never attempt a full 3D build without explicit scope.

## 7. Removed / Forbidden Module

Do not restore, cite as active direction, or weave back into product language:

- Pickaxe Market Vector Engine.
- Satellite-to-vector AI pipeline analogy.
- SpatialClaw-style code-agent framing.
- “From market noise to verified signal geometry.”

Restore only if CEO B explicitly asks for a separately scoped reconsideration.

## 8. Visual Brand Rules

- Black, charcoal, and gunmetal base.
- Metallic gold structure.
- Silver and white text.
- Emerald green bull accents.
- Crimson red bear accents.
- Premium glass dashboard UI.
- Subtle locked Starlight field.
- Official circular crossed-pickaxe logo.
- No duplicate panels or unexplained empty space.
- Apple-level premium feel: precise hierarchy, restrained motion, excellent readability.
- Less words, more visual clarity.
- X posts should be compact, chart-led, source-labeled, timestamped when market data is used, and research-only.

### CEO B Visual Anchor

- CEO B uses one consistent symbolic masked identity across Pickaxe Capital and AI Habitat OS.
- Permanent identity cues: sculptural full-face metallic gold mask, black/charcoal luxury tailoring, restrained antique-gold details, and calm institutional authority.
- The mask remains consistent while outfits may change by scene, module, or status.
- Approved outfit families include executive suit, research command suit, restrained tactical market-operator look, luxury overcoat, founder/public-company tailoring, and ceremonial Pickaxe signature attire.
- CEO B masked identity and the human founder portrait are separate visual layers.
- The supplied founder photograph remains private source material unless CEO B separately approves a cleaned public use.
- Canonical detailed rules: `docs/00_MASTER/CEO_B_VISUAL_IDENTITY_LOCK.md`.

## 9. Data / Source Rules

- Source verification is mandatory before research can advance.
- Every live market number requires source, quote type, timestamp, timezone, and verification status from the same workflow.
- When live verification is unavailable, omit the number or clearly label it demo/static/manual/source-required.
- Walter Bloomberg / `@DeItaone` can be watch sources, not final verification.
- Do not scrape or bypass protected sites.
- Do not invent data, timestamps, provider status, telemetry, market results, or performance.
- Do not place private API keys or provider secrets in frontend code.
- Confidence and conviction represent research quality or completeness, not expected return.
- Options involve substantial risk; options-specific research must keep that risk visible.
- Public output remains blocked until source, risk, and CEO B gates permit a research-only artifact.
- Local Obsidian memory remains local-only unless explicitly cleaned, approved, and intentionally published as a sanitized summary.

## 10. Codex Behavior Rules

Codex must:

- inspect before editing;
- read `AGENTS.md`, `PROJECT_STATUS.md`, and `NEXT_STEPS.md` at sprint start;
- read this context lock for product, module, route, data, or architecture planning;
- preserve locked routes and phases;
- inspect active render paths before touching duplicated renderer names;
- avoid duplicate renderers, page concepts, packet models, review queues, and storage keys;
- keep root/public mirrors synchronized;
- preserve LocalStorage and backup/restore contracts;
- avoid feature creep during docs, QA, or repair sprints;
- update status, next steps, and tracker metadata when appropriate;
- validate before reporting or committing;
- push only when authorized;
- stop after the bounded task;
- request CEO B authorization before any new feature scope.

## 11. Suggested Future Sprint Queue

Planning context only. Do not implement automatically.

1. Project Context Lock / `AGENTS.md` upgrade.
2. `AGENTS.md` + docs verification pass.
3. Route-by-route visual QA polish.
4. Alerts Desk visual refinement.
5. Pickaxe X Visual Intelligence Engine prototype specification.
6. Finance Terminal / Options Intelligence specification.
7. Source provider architecture specification.
8. Options Hub only after CEO B approval.
9. Live data only after an approved backend/provider/security plan.
10. Monetization only after product safety and the value loop are stable.
