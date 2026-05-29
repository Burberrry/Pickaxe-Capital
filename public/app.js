/**
 * Pickaxe Capital Market Habitat - Refactored Main App
 * 
 * This is the main entry point that orchestrates all modules.
 * It registers routes, initializes state, and manages the layout.
 */

import { state, recoverState, getCounts } from "./modules/state.js";
import { registerRoute, initRouter } from "./modules/router.js";
import { setLayout, wireActions } from "./modules/actions.js";
import { link, microBadge, sanitize, validateHabitatData } from "./modules/utils.js";
import {
  renderHome,
  renderMissionControl,
  renderAgentEngine,
  renderSignals,
  renderAlerts,
  renderRiskRules,
  renderDataSources,
  renderCompliance,
  renderArchive
} from "./modules/components.js";

const DATA = window.PICKAXE_DATA;

/**
 * Validate habitat data on app start
 */
if (!validateHabitatData(DATA)) {
  console.error("Invalid habitat data structure");
  document.getElementById("app").innerHTML = `
    <main class="main">
      <section class="panel">
        <h2>Fatal Error</h2>
        <p>Habitat data is corrupted. Please check habitat-data.js</p>
      </section>
    </main>
  `;
  throw new Error("Invalid PICKAXE_DATA");
}

/**
 * Recover state from localStorage if corrupted
 */
recoverState();

/**
 * Register all routes
 */
registerRoute("/", renderHome);
registerRoute("/mission-control", renderMissionControl);
registerRoute("/agent-engine", renderAgentEngine);
registerRoute("/agents", renderAgentEngine); // Alias
registerRoute("/signals", renderSignals);
registerRoute("/alerts", renderAlerts);
registerRoute("/risk-rules", renderRiskRules);
registerRoute("/data-sources", renderDataSources);
registerRoute("/compliance", renderCompliance);
registerRoute("/archive", renderArchive);
registerRoute("/source-hub", renderDataSources); // Alias
registerRoute("/staging", renderMissionControl); // Alias
registerRoute("/ai-handoff", renderAgentEngine); // Alias

/**
 * Main layout wrapper
 * @param {string} content - Page content
 * @param {string} currentPath - Current route path
 * @returns {string} Full page HTML
 */
function layout(content, currentPath) {
  const nav = [
    ["/", "Command", "HQ"],
    ["/mission-control", "Mission Control", "Ops"],
    ["/agent-engine", "Agent Engine", "Pipeline"],
    ["/signals", "Signals", "Workbench"],
    ["/alerts", "Alerts", "Memos"],
    ["/risk-rules", "Risk Rules", "Gates"],
    ["/data-sources", "Data Sources", "Adapters"],
    ["/compliance", "Compliance", "Policy"],
    ["/archive", "Archive", "Memory"]
  ].map(([href, label, micro]) => `
    <a class="${currentPath === href ? "active" : ""}" href="${link(href)}" aria-label="Navigate to ${label}">
      <span>${sanitize(label)}</span><small>${sanitize(micro)}</small>
    </a>
  `).join("");

  const c = getCounts();
  return `
    <aside class="sidebar">
      <div class="brand">
        <div class="logo">⛏</div>
        <div>
          <strong>${sanitize(DATA.company.name)}</strong>
          <span>${sanitize(DATA.company.product)}</span>
        </div>
      </div>
      <nav>${nav}</nav>
      <div class="side-card command-lock">
        <div class="mini-row"><span class="badge gold">CEO B</span><span class="live-dot">Manual</span></div>
        <p>Research packets require human review. The site never places trades, promises returns, or exposes keys.</p>
      </div>
    </aside>
    <main class="main">
      <header class="topbar">
        <div>
          <p class="eyebrow">${sanitize(DATA.company.mode)} • GitHub Pages static build</p>
          <h1>Pickaxe Capital Hedge-Fund Command OS</h1>
        </div>
        <div class="top-actions">
          <span class="badge blue">${sanitize(DATA.company.safety)}</span>
          <span class="badge green">${c.approved} Approved</span>
        </div>
      </header>
      <section class="ticker-strip" aria-label="Operating constraints">
        <span>NO AUTO-TRADING</span>
        <span>NO API KEYS IN FRONTEND</span>
        <span>STATIC DEMO DATA</span>
        <span>MANUAL REVIEW ONLY</span>
        <span>NO GUARANTEED PROFITS</span>
      </section>
      ${content}
    </main>
  `;
}

/**
 * Pass layout function to actions module for re-renders
 */
setLayout(layout);

/**
 * Initialize the router with layout
 */
initRouter(layout);

/**
 * Wire up all event handlers
 */
wireActions();

/**
 * Re-wire actions whenever route changes
 * (ensures event listeners are attached to newly rendered elements)
 */
window.addEventListener("hashchange", () => {
  // Small delay to ensure DOM is updated
  setTimeout(wireActions, 0);
});
