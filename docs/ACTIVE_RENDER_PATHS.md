# Active Render Paths

The current app contains legacy and overridden render functions. Do not edit the first matching function name without confirming it is the active render path.

## Effective Paths

| Route | Effective render path |
| --- | --- |
| `/` and `#/alerts` | Router selects `alerts`; active `renderAlertsPage()` calls `getUnifiedResearchPacketsForAlerts()` and writes `renderResearchGatedAlertsDesk(...)` into `#alertsContent`. Code after the early `return` in `renderAlertsPage()` is legacy/dead. |
| `#/agents` | The later `renderAgentsPage()` definition is effective. It renders the current Phase 3 placeholder/schematic. The earlier definition is overridden. |
| `#/ai-habitat-os` | `renderStaticIntelligencePages()` reaches the final `renderLifeOSPage()` override, which writes the AI Habitat OS content into `#aiHabitatOS`. |
| `#/dashboard` | The later `renderDashboardPage()` definition is effective. The earlier dashboard implementation is overridden. |
| `#/source-hub` | The later `renderSourceHubPage()` definition is effective. The earlier Source Hub implementation is overridden. |
| `#/research` | `renderResearchDeskPage()` is the effective Research Desk renderer. A later static-page helper must not replace its completed markup. |

## Known Legacy or Overridden Paths

- Multiple `renderAlertsDeskMarkup()` definitions exist. They are not the active `#/alerts` output while `renderAlertsPage()` returns immediately after `renderResearchGatedAlertsDesk(...)`.
- The first `renderAgentsPage()` is overridden by a later definition.
- The first `renderDashboardPage()` is overridden by a later definition.
- The first `renderSourceHubPage()` is overridden by a later definition.
- `renderAlertsPage()` contains unreachable legacy markup after its early `return`.
- Several late page-refresh helpers re-render broad route groups; confirm the final function assignment before editing shared behavior.

These duplicates should be removed only in a separately approved refactor. Phase 2 must target the effective Alerts Desk path documented above.
