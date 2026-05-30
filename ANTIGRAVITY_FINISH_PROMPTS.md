# Antigravity Finish Prompt Pack — Pickaxe Capital / AI Habitat OS

Use these prompts one at a time. Do not paste all of them into Antigravity at once. Finish one prompt, test, commit, then move to the next prompt.

Repository:

```text
https://github.com/Burberrry/Pickaxe-Capital
```

Core rule: do not rebuild from scratch. Improve the existing static Node app served by `server.mjs` and the `public/` app.

---

## Prompt 00 — Repo Read, Safety Lock, and Status Audit

```text
You are working on my GitHub repo:
https://github.com/Burberrry/Pickaxe-Capital

Project:
Pickaxe Capital / AI Habitat OS

Before changing any code, read these files:
1. README.md
2. AGENTS.md
3. PROJECT_STATUS.md
4. NEXT_STEPS.md
5. package.json
6. server.mjs
7. public/app.js
8. public/habitat-data.js

Rules:
- Do not rebuild from scratch.
- Do not create a second app.
- Do not migrate frameworks.
- Do not delete working routes.
- Do not add fake live data.
- Do not add scraping.
- Do not add broker execution or auto-trading.
- Do not put API keys in frontend code.
- Keep mock/demo/local/prototype/future-adapter features clearly labeled.
- Keep the style dark, premium, cyberpunk, readable, and Pickaxe Capital branded.
- CEO B is the founder decision and review layer.

Task:
Audit the current repo and tell me:
1. Active runtime files.
2. Current working routes.
3. Most important broken or messy areas.
4. Which files should be touched first.
5. Which files should not be touched yet.

Then run:
node scripts/build.mjs
node scripts/check-project.mjs

Do not make code changes in this prompt unless a tiny documentation correction is required.

Final response must include:
- Summary of repo reality.
- Routes that should be tested manually.
- Build/check result.
- The next single best coding task.
```

---

## Prompt 01 — Visual QA Cleanup Pass

```text
You are working on Pickaxe Capital / AI Habitat OS.

First read:
README.md
AGENTS.md
PROJECT_STATUS.md
NEXT_STEPS.md

Mission:
Do a browser visual QA and cleanup pass only. Do not add new major features.

Routes to inspect:
- http://localhost:4328/#/vision-map
- http://localhost:4328/#/agents
- http://localhost:4328/#/archive
- http://localhost:4328/#/staging
- http://localhost:4328/#/jarvis-lab
- http://localhost:4328/#/life-os

Fix:
1. Crowded cards.
2. Oversized panels.
3. Weak spacing.
4. Hard-to-read text.
5. Confusing duplicate sections.
6. Horizontal overflow.
7. Weak page headers.
8. Buttons/actions that are hard to understand.

Keep:
- Current routes.
- Current data structure.
- Current static Node runtime.
- Dark premium cyberpunk style.
- CEO B as central decision layer.

Do not:
- Add live APIs.
- Add new routes.
- Add voice/camera/device control.
- Add broker/trading execution.
- Rewrite the entire app.

After changes run:
node scripts/build.mjs
node scripts/check-project.mjs
node scripts/update-readme.mjs

Update:
PROJECT_STATUS.md
NEXT_STEPS.md

Final response:
- Files changed.
- Visual problems fixed.
- Routes tested.
- Build/check results.
- Next best task.
```

---

## Prompt 02 — Home and Vision Map Command Center Polish

```text
You are continuing Pickaxe Capital / AI Habitat OS.

Read first:
README.md
AGENTS.md
PROJECT_STATUS.md
NEXT_STEPS.md

Mission:
Make the homepage and #/vision-map feel like the premium main command center.

Focus routes:
- http://localhost:4328/#/
- http://localhost:4328/#/vision-map

Improve:
1. First 5-second clarity: user instantly understands what Pickaxe Capital / AI Habitat OS is.
2. CEO B command layer is visually central and useful.
3. Market Habitat and Life Habitat are clear.
4. Important action cards are easy to read.
5. Vision map nodes have clearer labels, descriptions, status, and next action.
6. Reduce any clutter or repeated legacy panels.
7. Make the page feel like a Bloomberg-terminal-style AI city command center.

Workflow goal:
Every major card should answer:
- What is this?
- Why does it matter?
- What should CEO B do next?

Do not add live APIs. Keep demo/local/prototype labels honest.

After changes run:
node scripts/build.mjs
node scripts/check-project.mjs
node scripts/update-readme.mjs

Update:
PROJECT_STATUS.md
NEXT_STEPS.md

Final response:
- Files changed.
- What improved on Home/Vision Map.
- Routes tested.
- Build/check results.
- Next best task.
```

---

## Prompt 03 — Agents Page: AI Habitat OS Operating Layer

```text
You are working on the #/agents page of Pickaxe Capital / AI Habitat OS.

Read first:
README.md
AGENTS.md
PROJECT_STATUS.md
NEXT_STEPS.md
public/habitat-data.js
public/app.js

Mission:
Make #/agents feel like the main AI Habitat OS operating layer.

Focus route:
http://localhost:4328/#/agents

Improve:
1. Agent city layout readability.
2. CEO B command center visibility.
3. Each agent has a clear role, mission, confidence, risk flag, owned route, and next action.
4. Agent task assignment is obvious and saves locally if already supported.
5. Review queue is simple and understandable.
6. Activity feed is clearly labeled as mock/local/prototype if not live.
7. Agent movement/animation remains performant and not distracting.
8. Remove or hide duplicate legacy agent sections only if the stronger current version exists.

Do not:
- Add fake live telemetry.
- Add actual background autonomous jobs.
- Add external APIs.
- Create a new agent framework.

After changes run:
node scripts/build.mjs
node scripts/check-project.mjs
node scripts/update-readme.mjs

Update:
PROJECT_STATUS.md
NEXT_STEPS.md

Final response:
- Files changed.
- What improved on #/agents.
- Local actions tested.
- Build/check results.
- Next best task.
```

---

## Prompt 04 — Command Workflow: Intake → CEO B Review → Mission → Archive

```text
You are improving the core workflow of Pickaxe Capital / AI Habitat OS.

Read first:
README.md
AGENTS.md
PROJECT_STATUS.md
NEXT_STEPS.md
public/app.js
public/habitat-data.js

Mission:
Make the site flow clearly from intake to CEO B Review to agent mission to archive/tracker.

Focus routes:
- http://localhost:4328/#/vision-map
- http://localhost:4328/#/agents
- http://localhost:4328/#/archive
- http://localhost:4328/#/staging

Tasks:
1. Make review/mission actions clearer.
2. Make CEO B Review Stack simple: approve, reject, send to agent, archive.
3. Confirm agent task assignment saves locally.
4. Confirm mission/checklist items appear in the right place.
5. Improve empty states so the user always knows what to do next.
6. Keep mock/local/prototype labels honest.
7. Make localStorage behavior clear in UI copy.

Do not add live APIs yet.
Do not rebuild the app.
Do not add broker execution.

After changes run:
node scripts/build.mjs
node scripts/check-project.mjs
node scripts/update-readme.mjs

Update:
PROJECT_STATUS.md
NEXT_STEPS.md

Final response:
- Files changed.
- Workflow improved.
- Routes tested.
- LocalStorage actions tested.
- Build/check results.
- Next best task.
```

---

## Prompt 05 — Archive and Bookmark Intelligence Cleanup

```text
You are improving the Archive and Bookmark Intelligence parts of Pickaxe Capital / AI Habitat OS.

Read first:
README.md
AGENTS.md
PROJECT_STATUS.md
NEXT_STEPS.md
public/app.js
public/habitat-data.js

Focus routes:
- http://localhost:4328/#/archive
- http://localhost:4328/#/bookmarks
- http://localhost:4328/#/source-hub

Mission:
Make Archive and Bookmarks feel like a compounding intelligence vault.

Improve:
1. Manual intake UX.
2. Search/filter/sort clarity.
3. Duplicate detection copy and layout.
4. Send-to-agent and send-to-review actions.
5. Archive cards: summary, source, tag, confidence, status, next action.
6. Empty states.
7. Labels: Manual, Local, Mock, Adapter Ready.
8. Source cards should be safe external links, not scraping.

Do not:
- Scrape X/Twitter.
- Scrape protected sites.
- Claim live bookmark sync unless implemented through an official API.
- Add a backend yet.

After changes run:
node scripts/build.mjs
node scripts/check-project.mjs
node scripts/update-readme.mjs

Update:
PROJECT_STATUS.md
NEXT_STEPS.md

Final response:
- Files changed.
- Archive/bookmark improvements.
- Routes tested.
- Build/check results.
- Next best task.
```

---

## Prompt 06 — Alerts Rules Center

```text
You are improving the alerts section of Pickaxe Capital / AI Habitat OS.

Read first:
README.md
AGENTS.md
PROJECT_STATUS.md
NEXT_STEPS.md
public/app.js
public/habitat-data.js

Focus route:
http://localhost:4328/#/app/alerts

Mission:
Turn alerts into a clear research-only rules center.

Build or improve:
1. Alert rule cards.
2. Fields: rule name, condition, source, status, confidence, risk, CEO B action.
3. Categories: market gate, options-flow idea, source watch, build task, life/admin reminder.
4. Local enable/disable state if the app already supports localStorage patterns.
5. Clear labels: Demo, Local, Mock, Adapter Ready, Connected.
6. Clear disclaimer: alerts are research workflow prompts, not financial advice or trade execution.

Do not:
- Add real broker execution.
- Add auto-trading.
- Add fake live alerts.
- Add API keys in frontend code.

After changes run:
node scripts/build.mjs
node scripts/check-project.mjs
node scripts/update-readme.mjs

Update:
PROJECT_STATUS.md
NEXT_STEPS.md

Final response:
- Files changed.
- Alert rules improved.
- Route tested.
- Build/check results.
- Next best task.
```

---

## Prompt 07 — Data Export and Import Backup System

```text
You are adding local-first data portability to Pickaxe Capital / AI Habitat OS.

Read first:
README.md
AGENTS.md
PROJECT_STATUS.md
NEXT_STEPS.md
public/app.js
public/habitat-data.js

Mission:
Add export/import JSON backup for local browser state.

Focus route:
http://localhost:4328/#/staging

Also connect from:
- #/archive if useful
- #/agents if useful
- #/bookmarks if useful

Requirements:
1. Export localStorage data to a timestamped JSON file.
2. Include known Pickaxe localStorage keys such as tracker, archive, bookmarks, review stack, missions, and agent tasks if present.
3. Add import JSON with preview before overwrite.
4. Add clear warning that data is browser-local.
5. Add backup success/error messages.
6. Do not require a backend.
7. Keep UI simple and premium.

Safety:
- Do not upload data anywhere.
- Do not add external services.
- Do not break existing localStorage features.

After changes run:
node scripts/build.mjs
node scripts/check-project.mjs
node scripts/update-readme.mjs

Update:
PROJECT_STATUS.md
NEXT_STEPS.md

Final response:
- Files changed.
- Export/import behavior.
- LocalStorage keys included.
- Route tested.
- Build/check results.
- Next best task.
```

---

## Prompt 08 — Adapter Interfaces Without Real API Connection

```text
You are preparing Pickaxe Capital / AI Habitat OS for future real integrations without adding live APIs yet.

Read first:
README.md
AGENTS.md
PROJECT_STATUS.md
NEXT_STEPS.md
public/app.js
public/habitat-data.js
server.mjs

Mission:
Define clean adapter interfaces and status labels for future providers.

Create or improve an adapter-ready structure for:
1. Market data.
2. Options flow.
3. News/geopolitics.
4. Bookmark intelligence.
5. AI model review.
6. GitHub/project status.

Rules:
- Do not add real API keys.
- Do not call paid APIs.
- Do not fake connected status.
- Do not add broker execution.
- Do not scrape protected sites.
- Keep adapters as interfaces/stubs/config only.

UI labels must include:
- Mock
- Manual
- Local
- Adapter Ready
- Connected
- Error

Show adapter status clearly on:
- #/source-hub
- #/signals
- #/agents
- #/staging

After changes run:
node scripts/build.mjs
node scripts/check-project.mjs
node scripts/update-readme.mjs

Update:
PROJECT_STATUS.md
NEXT_STEPS.md

Final response:
- Files changed.
- Adapter interfaces created/improved.
- Routes tested.
- Build/check results.
- Next best task.
```

---

## Prompt 09 — Signals Page Research Workbench Polish

```text
You are improving #/signals for Pickaxe Capital / AI Habitat OS.

Read first:
README.md
AGENTS.md
PROJECT_STATUS.md
NEXT_STEPS.md
public/app.js
public/habitat-data.js

Focus route:
http://localhost:4328/#/signals

Mission:
Make the signals page a clean research-only market intelligence workbench.

Improve:
1. Filters and selected-signal detail layout.
2. Clear separation between demo/mock signals and future live adapters.
3. Signal cards should show ticker/theme, thesis, source, confidence, risk, status, CEO B next action.
4. Add stronger empty states.
5. Connect useful actions to review/mission/archive if the local flow already exists.
6. Make it obvious this is not financial advice and not trade execution.

Do not:
- Add broker execution.
- Add fake live prices.
- Add auto-trading.
- Add API keys in frontend.

After changes run:
node scripts/build.mjs
node scripts/check-project.mjs
node scripts/update-readme.mjs

Update:
PROJECT_STATUS.md
NEXT_STEPS.md

Final response:
- Files changed.
- Signals improvements.
- Route tested.
- Build/check results.
- Next best task.
```

---

## Prompt 10 — Game Brain / AI Habitat OS Game Bible

```text
You are adding the game-brain foundation to Pickaxe Capital / AI Habitat OS.

Read first:
README.md
AGENTS.md
PROJECT_STATUS.md
NEXT_STEPS.md
public/app.js
public/habitat-data.js

Mission:
Create the Game Bible and add a lightweight game-loop foundation without rebuilding the app.

Create or update documentation:
- GAME_BIBLE.md

Game Bible must include:
1. World concept: Pickaxe Capital / AI Habitat OS.
2. CEO B role.
3. Agent roles.
4. Mission types.
5. Resources.
6. Risk system.
7. Progression system.
8. Upgrade system.
9. Save/load plan.
10. What is mock/local now versus future connected.

Optional small UI improvement:
If safe, add a small Game Brain panel to #/agents or #/staging showing:
- Current level.
- Completed missions.
- Active agents.
- Next upgrade.
- Local/prototype label.

Do not:
- Create a full game engine.
- Add WebGL or heavy graphics.
- Add backend.
- Add fake autonomy.

After changes run:
node scripts/build.mjs
node scripts/check-project.mjs
node scripts/update-readme.mjs

Update:
PROJECT_STATUS.md
NEXT_STEPS.md

Final response:
- Files changed.
- Game Bible summary.
- Any UI changes.
- Routes tested.
- Build/check results.
- Next best task.
```

---

## Prompt 11 — Mobile, Responsive, and Performance Pass

```text
You are doing a responsive/performance pass for Pickaxe Capital / AI Habitat OS.

Read first:
README.md
AGENTS.md
PROJECT_STATUS.md
NEXT_STEPS.md
public/app.js
public/styles.css or the active CSS files

Mission:
Make the site usable on normal desktop, laptop, tablet, and mobile widths.

Test routes:
- #/
- #/vision-map
- #/agents
- #/signals
- #/archive
- #/staging

Fix:
1. Horizontal overflow.
2. Tiny text.
3. Cards too wide for mobile.
4. Sticky/fixed elements covering content.
5. Animations that hurt readability.
6. Buttons too close together.
7. Giant maps that fail on small screens.

Performance rules:
- Prefer CSS transforms and opacity for animation.
- Avoid huge DOM duplication.
- Avoid heavy libraries.
- Do not add new dependencies unless absolutely necessary.

After changes run:
node scripts/build.mjs
node scripts/check-project.mjs
node scripts/update-readme.mjs

Update:
PROJECT_STATUS.md
NEXT_STEPS.md

Final response:
- Files changed.
- Screen sizes tested.
- Routes tested.
- Build/check results.
- Next best task.
```

---

## Prompt 12 — Documentation, GitHub Pages, and Public Demo Polish

```text
You are preparing Pickaxe Capital / AI Habitat OS for a cleaner GitHub/public demo.

Read first:
README.md
AGENTS.md
PROJECT_STATUS.md
NEXT_STEPS.md
package.json
server.mjs

Mission:
Make the project easier to understand and run.

Improve documentation:
1. README quick start.
2. README route list.
3. README current limitations.
4. README finish roadmap if needed.
5. Add screenshots section placeholders if screenshots do not exist yet.
6. Add clear GitHub Pages/local deployment notes if applicable.
7. Make sure README auto-update block remains intact.

Check:
- The screenshot in GitHub should no longer show “Add a README”.
- README explains this is static-first and not a live trading system.
- README tells future AI agents what not to break.

Do not:
- Rewrite the brand voice into generic startup copy.
- Claim live features that are not connected.
- Add fake users, fake returns, or fake performance.

After changes run:
node scripts/build.mjs
node scripts/check-project.mjs
node scripts/update-readme.mjs

Update:
PROJECT_STATUS.md
NEXT_STEPS.md

Final response:
- Files changed.
- Documentation improved.
- Build/check results.
- Next best task.
```

---

## Prompt 13 — Final QA and Launch Checklist

```text
You are doing the final QA pass for Pickaxe Capital / AI Habitat OS.

Read first:
README.md
AGENTS.md
PROJECT_STATUS.md
NEXT_STEPS.md

Mission:
Verify the website is stable, readable, and ready for demo.

Test routes:
- #/
- #/vision-map
- #/agents
- #/signals
- #/archive
- #/bookmarks
- #/source-hub
- #/staging
- #/founder
- #/ceo-b-profile
- #/jarvis-lab
- #/life-os
- #/app/alerts
- #/ai-handoff

Check:
1. Route loads.
2. No console errors.
3. No horizontal overflow.
4. Main actions are understandable.
5. Mock/local/prototype/future-adapter labels are visible.
6. README is updated.
7. PROJECT_STATUS.md is updated.
8. NEXT_STEPS.md is updated.
9. Build passes.
10. Project check passes.

Run:
node scripts/build.mjs
node scripts/check-project.mjs
node scripts/update-readme.mjs

Create or update a final checklist in PROJECT_STATUS.md with:
- Passed routes.
- Failed routes.
- Bugs found.
- Bugs fixed.
- Remaining risks.
- Recommended next version.

Final response:
- Final QA summary.
- Files changed.
- Routes passed/failed.
- Build/check results.
- Whether the site is demo-ready.
- Next version roadmap.
```

---

## Emergency Recovery Prompt

Use this only if Antigravity breaks the website.

```text
The last change broke Pickaxe Capital / AI Habitat OS.

Do not add features.
Do not refactor broadly.
Do not rewrite the app.

Task:
1. Identify the smallest change that caused the break.
2. Restore the last working behavior.
3. Keep all working routes alive.
4. Run build/check.
5. Update PROJECT_STATUS.md with the exact bug and fix.

Focus only on recovery.

Run:
node scripts/build.mjs
node scripts/check-project.mjs

Final response:
- Root cause.
- Files changed.
- Routes retested.
- Build/check result.
```

---

## Best Usage Order

1. Prompt 00 — Audit.
2. Prompt 01 — Visual QA cleanup.
3. Prompt 02 — Home/Vision Map polish.
4. Prompt 03 — Agents page polish.
5. Prompt 04 — Core workflow.
6. Prompt 05 — Archive/Bookmarks.
7. Prompt 06 — Alerts rules.
8. Prompt 07 — Export/import backup.
9. Prompt 08 — Adapter interfaces.
10. Prompt 09 — Signals page polish.
11. Prompt 10 — Game Bible.
12. Prompt 11 — Responsive/performance.
13. Prompt 12 — Documentation/demo.
14. Prompt 13 — Final QA.

Stop after each prompt. Test. Commit. Then continue.
