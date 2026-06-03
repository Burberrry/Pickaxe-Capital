# Phase 2F Pre-Sprint QA Audit

Date: 2026-06-03

Purpose: docs-only QA and consistency audit before B chooses the next build sprint. This report does not introduce UI changes, product features, live data, adapters, or Agent Habitat rebuild work.

## 1. Executive Summary

Pickaxe Capital / AI Habitat OS is currently in a locked planning state. Phase 2C App Shell / Navigation Reset is live-locked, the sidebar number-badge cleanup is live-verified, Phase 2D Source Hub Intelligence Cockpit is live-locked, and Phase 2E Planning Architecture Pack is pushed and clean.

Current product truth:

- Website = cockpit.
- Obsidian = private memory.
- CEO B = decision layer.
- Mission Control = overview layer and flagship route at `#/dashboard`.
- Source Hub = trust/intelligence layer at `#/source-hub`.
- Watchlists = Research Universe.
- Agents = placeholder-only until B approves a rebuild.

Stable areas:

- `#/dashboard` Mission Control is the flagship overview.
- `#/source-hub` is the source trust layer.
- `#/watchlists` is stable and should not be touched unless a visible bug appears.
- `#/agents` is intentionally a quiet future placeholder.
- Static-first GitHub Pages safety remains the governing technical boundary.

Future or deferred areas:

- Options Hub remains deferred until B explicitly approves a research-only options sprint.
- Agent Habitat rebuild remains deferred until B approves visual direction.
- Live APIs, provider adapters, broker integrations, betting/sportsbook integrations, copy-trading, OpenClaw installation, and public Obsidian publishing remain out of scope.

## 2. Route Health Audit

| Route | Current Status | Current Purpose | Likely Visual Quality | Safety Risk | Keep Stable | Polish Later | Defer | Notes for B |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `/` | Stable | Root/home entry, currently Alerts Desk/compact command center. | Medium | Low | Yes | Maybe | No | Keep GitHub Pages friendly and avoid changing root behavior during planning. |
| `#/dashboard` | Live-locked flagship | Mission Control overview for CEO B, market state, source gaps, watchlists, alerts, risk, and next mission. | High | Low/Medium | Yes | Yes | No | Best candidate for visual polish after B's drawing, not before. |
| `#/alerts` | Stable | Alerts Desk and CEO B research review queue. | Medium | Medium | Yes | Yes | No | Needs source-backed refinement later; avoid fake urgency. |
| `#/mission-control` | Stable legacy/static | Command Console style route and mission context. | Medium | Low | Yes | Maybe | No | Could be merged conceptually into Mission Control later if B wants less duplication. |
| `#/vision-map` | Stable/prototype | Visual map of system, routes, agents, and future operating structure. | Medium | Low/Medium | Yes | Yes | No | Good candidate to absorb B's 20-section drawing after interpretation. |
| `#/agents` | Placeholder | Future Agent Habitat schematic only. | Medium/High for placeholder | High if expanded early | Yes | Later | Yes | Do not rebuild yet; no fake live agents, telemetry, or background jobs. |
| `#/signals` | Stable/prototype | Research signal board, not trade calls. | Medium | Medium/High | Yes | Maybe | Yes | Must stay source-required and research-only. |
| `#/source-hub` | Live-locked | Source verification, citation mapping, adapter boundaries, and CEO B escalation control. | High | Low/Medium | Yes | Maybe | No | Keep stable after Phase 2D; naturally feeds Archive workflow. |
| `#/risk-rules` | Stable | Manual safety blocks, risk rules, and escalation gates. | Medium | Low | Yes | Maybe | No | Useful support page for future source/archive workflows. |
| `#/learning-ledger` | Stable/prototype | Lessons, rules, and repeatable decision memory. | Medium | Low | Yes | Maybe | No | Should eventually receive reviewed Archive outputs. |
| `#/trend-radar` | Stable/prototype | Theme radar and world-pulse research board. | Medium | Medium | Yes | Maybe | Yes | Avoid fake real-time theme feeds. |
| `#/archive` | Stable | Saved intelligence memory and research archive. | Medium | Low/Medium | Yes | Yes | No | Strong next workflow candidate after Source Hub. |
| `#/bookmarks` | Stable/prototype | Local bookmark intake and source candidate workflow. | Medium | Medium | Yes | Maybe | No | Can contain private URLs in localStorage; do not publish raw imports. |
| `#/money-lab` | Stable/research-only | Research sandbox with explicit no execution boundaries. | Medium | High | Yes | No | Yes | Do not expand without B approval. |
| `#/staging` | Stable | QA, build truth, completion tracker, route health, storage checks. | Medium | Low | Yes | Maybe | No | Keep updated when future sprints complete. |
| `#/ai-habitat-os` | Stable/prototype | System-level Habitat OS map and operating concept. | Medium | Medium | Yes | Yes | No | Should wait for B's blueprint before major restructure. |
| `#/watchlists` | Stable | Research Universe for tickers, themes, catalysts, and thesis context. | High/Medium | Medium | Yes | Only if bug | No | Do not touch during unrelated sprints. |
| `#/markets` | Future concept | Future markets/regime cockpit. | Placeholder | High | Yes | Later | Yes | Would need strict source/static boundaries or approved backend plan. |
| `#/options` | Future concept | Future research-only options cockpit. | Placeholder | High | Yes | Later | Yes | Do not start without explicit B approval and strict no-execution language. |
| `#/catalysts` | Future concept | Future catalyst calendar/research board. | Placeholder | Medium/High | Yes | Later | Yes | Should follow Source/Archive trust workflow. |
| `#/research` | Future concept | Future source-linked research workspace. | Placeholder | Medium | Yes | Later | Yes | Could become the bridge between Source Hub and Archive. |
| `#/roadmap` | Future concept | Future build/sprint cockpit. | Placeholder | Low | Yes | Later | Maybe | Phase 2E/2F docs can feed this route later. |

## 3. Design Consistency Audit

The Phase 2C shell gives the app a more coherent graphite/gold private market OS frame. Mission Control and Source Hub are now the strongest visual anchors: both feel closer to the premium command-center direction and use clearer hierarchy than older prototype routes.

Consistent areas:

- Topbar and sidebar now support the "CEO B Market OS" identity.
- Number-only sidebar badges reduce terminal clutter.
- Graphite/gold navigation reads calmer and more premium than the older multicolor route-code system.
- Mission Control and Source Hub share command-card density, safety labels, and research-only framing.

Areas that may still feel older or noisier:

- Alerts, Signals, Archive, Bookmarks, Vision Map, Staging, and Habitat OS likely retain more Phase 1/early Phase 2 visual density.
- Some older route content may feel more prototype-like than Mission Control and Source Hub.
- Historical agent/system language in older sections may need future copy tightening, even when the current Agents route is safe.
- Watchlists is stable and useful, but should not be redesigned until B's drawing clarifies the full system layout.

Future design notes:

- Wait for B's hand-drawn 20-section blueprint before restructuring large route groups.
- Keep density, but reduce decorative noise where it weakens scanability.
- Preserve the dark graphite shell, restrained gold active states, and limited cyan source/intelligence accents.
- Avoid making every route look equally loud; the OS needs hierarchy.

## 4. Safety Language Audit

No new unsafe runtime changes were made during this audit. Most scanned matches for risky terms are negative safety boundaries, such as "no live APIs", "no broker execution", "no fake telemetry", or "no scraping".

Items to watch before future public-copy cleanup:

| Location | Context | Risk | Recommended Future Wording |
| --- | --- | --- | --- |
| `PROJECT_STATUS.md` historical notes | Older local Obsidian vault path and note path appear in history. | Docs/privacy risk if shared publicly. | Keep vault paths out of public docs; use "local Obsidian vault" instead. |
| `PROJECT_STATUS.md` historical notes | "real-time item counts" appears in backup/health history. | Could imply live data. | "local item counts" or "current local counts". |
| `PROJECT_STATUS.md` historical notes | "right-side live operations feed" appears in old Agent Habitat history. | Could imply telemetry. | "mock/local operations feed". |
| `public/habitat-data.js` | Default action text includes "Execute manually in broker. This website does not place trades." | "Execute" is too close to trading language. | "Review manually outside Pickaxe if CEO B chooses. This website does not place trades." |
| `public/habitat-data.js` | Older `habitatWorld` data includes "Active Demo" and "live-map information". | Could be confusing if exposed near Agents. | "Static demo" and "external map source". |
| `public/habitat-data.js` | External source label "OsirisAI Live Map". | External source title, but "Live" is a sensitive word. | Preserve as source title only; add "external source label" if surfaced. |
| `scripts/build.mjs`, `scripts/check-project.mjs`, `public/index.html` | Required quote includes "living autonomous intelligence civilization". | Brand/north-star language can be misread as capability. | Keep as identity quote only; avoid placing it near agent capability claims without a safety line. |
| `docs/antigravity-context/source_docs/All_my_bookmarks.html` | Raw bookmark export contains many external titles with risky terms. | Private/raw source text risk. | Do not copy raw bookmark exports into public UI. |

No obvious current frontend claim was found that the system executes trades, connects to brokers, runs live autonomous agents, scrapes sites, or publishes private Obsidian notes. Future copy passes should focus on old historical docs and old default data that could be exposed by future pages.

## 5. Public / Private Boundary Audit

Confirmed intended boundary:

- Public frontend should not expose raw Obsidian notes.
- `/ai-handoff` is a local/server handoff endpoint for Codex/ChatGPT context.
- `/source-hub-staging` is local-only context.
- Source Hub may describe the local-only handoff boundary, but should not fetch public-only files in a way that creates GitHub Pages 404s.
- LocalStorage can contain private user data and should not be published raw.

Risks to watch:

- Local vault paths in historical docs should not become public-facing UI copy.
- Obsidian-derived text should stay in local handoff summaries unless B explicitly sanitizes it.
- Bookmark exports and local notes can contain private strategy, URLs, personal context, and source text.
- Future Archive/Source workflows should move cleaned summaries, not raw vault content.

## 6. LocalStorage / Data Risk Audit

Safe/system-oriented keys:

- `pickaxeCompletionTracker`
- `pickaxeBackupMetadata`
- `pickaxeCoverageMatrix`
- route/status style local settings where present

Keys that can contain private user text:

- `pickaxeBookmarks`
- `pickaxeMissionQueue`
- `pickaxeReviewQueue`
- `pickaxeAlertRules`
- `pickaxeActionCenter`
- `pickaxe_jarvis_command_history`
- `pickaxeArchiveVault`
- `pickaxeLocalNotes`
- `pickaxeJournalEntries`
- `pickaxeLearningLedger`
- `pickaxeMoneyLab`
- `pickaxeSourceHubActions`

Prototype/demo keys:

- `pickaxeOperatingAgents`
- `pickaxeWorldState`
- `pickaxeOptionAlerts`
- `pickaxeAdapterOverrides`
- `pickaxeAgentFactory`
- `pickaxeAgentOps`

Agent-related warning:

- `pickaxeOperatingAgents`, `pickaxeWorldState`, `pickaxeAgentOps`, and `pickaxeAgentFactory` must not imply live execution, background jobs, telemetry, or autonomous work. In the current product truth, Agents is a placeholder/ownership layer only.

Backup warning:

- LocalStorage backups may include private source URLs, notes, research thoughts, and command history. They are useful for local continuity but must not be committed, pasted into public frontend files, or published without CEO B review.

## 7. Next Sprint Recommendation

Ranked recommendation after B finishes the drawing:

1. B finishes the 20-section drawing and fills `docs/VISUAL_BLUEPRINT_INTAKE_TEMPLATE.md`.
   - Safest next move because it prevents route churn before the architecture is clear.
2. Archive / Source Workflow.
   - Best practical workflow because it naturally follows Source Hub and improves the trust chain.
3. Mission Control visual polish.
   - Highest visual-impact move once B's drawing confirms hierarchy.
4. Obsidian workflow strengthening.
   - Useful if kept local-only and focused on sanitized handoff summaries.
5. Options Hub.
   - Higher risk. Start only after explicit B approval with research-only copy and no fake chains, Greeks, flow, trades, or execution.
6. Agent Habitat rebuild.
   - Defer until visual direction is approved. Keep Agents placeholder-only until then.

Recommended sequence:

- Drawing interpretation first.
- Then choose either Archive/Source Workflow for product trust or Mission Control polish for first-impression strength.
- Leave Options and Agents for later because they carry the highest safety/capability risk.

## 8. Codex Stop Rules For Next Sprint

Codex should stop and report if:

- Repo is dirty before the sprint starts.
- Build fails.
- Project check fails.
- `data/signal-alerts.json` changes unexpectedly.
- Private Obsidian content appears in public files.
- Agents becomes fake-live, telemetry-driven, or autonomous without approval.
- Source Hub starts public fetches that create GitHub Pages 404s.
- Live-data, broker execution, betting/sportsbook execution, copy-trading, or provider-connection language appears.
- Watchlists changes outside a visible bug fix.
- Options Hub work begins without B approval.
- Runtime/public UI files change during a planning-only sprint.

## 9. Suggested Prompt For B's Drawing Session

Paste this after uploading the hand-drawn blueprint:

```text
You are helping plan Pickaxe Capital / AI Habitat OS. Website = cockpit, Obsidian = private memory, CEO B = decision layer, Mission Control = overview, Source Hub = trust layer, Watchlists = Research Universe, Agents = placeholder-only until approved.

Read my drawing and convert it into a clean product blueprint: route hierarchy, 20-section grouping, visual layout direction, source/Archive/Watchlists/Mission Control connections, what should stay stable, what should be deferred, and the next safest Codex sprint. Do not propose live APIs, broker execution, fake live data, copy-trading, betting integrations, or private Obsidian publishing.

End with a concise Codex implementation prompt for the next approved sprint only.
```
