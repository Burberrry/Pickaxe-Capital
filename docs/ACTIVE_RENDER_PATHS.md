# Active Render Paths

Verified: 2026-06-12 after the Phase 8A + 8B Intelligence Orbit and Agent Visual System sprint.

## Execution Model

`public/app.js` is a classic browser script, not an ES module. Function declarations are hoisted, while later function assignments replace them only when execution reaches the assignment. Some older declarations therefore remain bootstrap-reachable even though later assignments own the final route output.

Do not delete a duplicated name based only on source order. Confirm whether an early startup call can reach the declaration before the final assignment executes.

## Effective Paths

| Route | Effective final renderer | Earlier definition status |
| --- | --- | --- |
| `/`, `#/alerts` | `renderAlertsPage()` -> `renderResearchGatedAlertsDesk()` -> `#alertsContent`, then `initializePickaxeOrbit()` | Phase 8 adds the active Intelligence Orbit, visual intelligence cards, and command sidecar around the preserved Research Packet v2 path. |
| `#/dashboard` | Final `renderDashboardPage = function ()` -> `#dashboardContent` | One overwritten assignment with no intervening calls was removed. |
| `#/agents` | Final `renderAgentsPage = function ()` -> `#agentOperatingSystem` | Earlier declaration remains bootstrap-reachable and is retained. Phase 8 adds seven visual identities and telemetry around the preserved Phase 3 local workflow. |
| `#/ai-habitat-os` | Final `renderLifeOSPage = function ()` -> `#aiHabitatOS` | Earlier declaration remains bootstrap-reachable and is retained. |
| `#/lifeOS` | Final `renderLifeOSPage = function ()` -> `#lifeOSContent` | Shares the final assignment with AI Habitat OS but receives separate markup. |
| `#/source-hub` | Final `renderSourceHubPage = function ()` -> Source Hub containers | Earlier declaration and pre-override refresh calls remain; retain until startup is reorganized. |
| `#/archive` | Final `renderArchiveIntelligence = function ()` -> `renderArchiveVaultExperience()` | Earlier declaration is used before the final assignment and remains. |
| `#/watchlists` | `renderWatchlistsPage` assigned once, then called after route setup | No later replacement exists. |
| `#/staging` | Final `renderStagingAdvanced = function ()` -> `#stagingAdvanced` | Earlier declaration remains bootstrap-reachable. |
| `#/research` | `renderResearchDeskPage()` -> `#researchContent` | Single active definition; not overridden. |
| `#/signals` | Final `renderSignalsIntelligence = function ()` -> `#signalsIntelligence` | Earlier declaration remains bootstrap-reachable. |

## Removed Dead Paths

- Three zero-reference `renderAlertsDeskMarkup` definitions.
- Unreachable legacy Alerts markup after the active `renderAlertsPage()` output.
- Unreachable Agent Operations markup after `renderAgentWorldOS()`.
- The overwritten first Dashboard assignment, which had no calls before the final assignment.

## Retained Duplicate Names

The earlier Agents, Life OS, Source Hub, Archive, Staging, and Signals declarations are retained because startup execution can reach them before their later assignments. Removing them safely requires a separate bootstrap-order refactor, not another visual or product sprint.

## CSS Ownership

- Phase 3 Agent Habitat and AI Habitat OS base styles live in the `/* Active route: Phase 3 Agent Habitat + AI Habitat OS */` section of `public/styles.css`.
- Phase 8 Alerts Orbit and Agent visual alignment styles live in the route-scoped Phase 8 block immediately before the locked Phase 7 starfield block.
- Obsolete Agent game-board and placeholder selectors were removed after their markup paths were removed.
- The broad Phase 2 premium selector no longer targets `#agents`; Phase 3 styling owns that route directly.
- Alerts Desk retains its final Phase 2 base block and receives only the later route-scoped Phase 8 presentation layer.
- Dashboard, Source Hub, Archive, Watchlists, and Staging retain their current route-scoped blocks because they remain visible and browser-verified.

## Known Remaining Risk

Broad historical CSS and bootstrap render layers still exist for older routes. Consolidate them only route by route with before/after browser evidence. The local `utility-compat.css` snapshot remains the utility compatibility boundary.
