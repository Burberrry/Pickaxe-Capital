(() => {
  const FLOW_STEPS = [
    "Market Input",
    "Source Ledger",
    "Agent Habitat",
    "Silence Gate",
    "Risk Gate",
    "CEO B Review",
    "Public Research Card",
    "Memory Vault",
  ];

  const esc = (value) => String(value ?? "").replace(/[&<>\"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;",
  }[char]));

  const statusText = (value, fallback) => String(value || fallback || "unknown").replace(/_/g, " ");

  function ensureMount(target, id, position = "afterbegin") {
    if (!target) return null;
    let mount = target.querySelector(`#${id}`);
    if (!mount) {
      mount = document.createElement("section");
      mount.id = id;
      mount.className = "v31-mission-control";
      target.insertAdjacentElement(position, mount);
    }
    return mount;
  }

  function renderPanel(mount, contextLabel = "Mission Control") {
    if (!mount) return;
    const demo = window.PICKAXE_DEMO_DATA || {};
    const card = demo.qqqResearchCard || {};
    const statuses = card.statuses || {};
    const risk = demo.riskGate || {};
    const silence = demo.silenceGate || {};
    const memory = Array.isArray(demo.memoryVault) ? demo.memoryVault[0] : null;

    mount.innerHTML = `
      <article class="v31-hero-panel" aria-label="Pickaxe Capital V3.1 QQQ Research Card Flow">
        <p class="v31-kicker">Pickaxe Capital V3.1 / ${esc(contextLabel)} / Demo Data Only</p>
        <div class="v31-title-row">
          <h2>QQQ Research<br />Card Flow</h2>
          <p class="v31-standard"><strong>1000/1000 rule:</strong> no public research without Source Ledger, Silence Gate, Risk Gate, and CEO B Review. No fake live data.</p>
        </div>
        <div class="v31-flow-line">
          ${FLOW_STEPS.map((step, index) => `<div class="v31-flow-step"><span>${String(index + 1).padStart(2, "0")}</span><strong>${esc(step)}</strong></div>`).join("")}
        </div>
        <div class="v31-status-row">
          <span class="v31-status-chip gold">${esc(card.demoLabel || demo.meta?.label || "Demo Data")}</span>
          <span class="v31-status-chip warn">Source Ledger: ${esc(statusText(statuses.sourceLedger, "unverified"))}</span>
          <span class="v31-status-chip warn">Timestamp Required</span>
          <span class="v31-status-chip warn">Silence Gate: ${esc(statusText(statuses.silenceGate || silence.decision, "needs_more_evidence"))}</span>
          <span class="v31-status-chip block">Risk Gate: ${esc(statusText(statuses.riskGate || risk.status, "not_passed"))}</span>
          <span class="v31-status-chip gold">CEO B: ${esc(statusText(statuses.ceoBReview, "needs_review"))}</span>
          <span class="v31-status-chip block">Public Output: ${statuses.publicOutputAllowed ? "Allowed" : "Not Allowed"}</span>
        </div>
        <div class="v31-card-grid">
          <div class="v31-mini-card"><span>Ticker</span><strong>${esc(card.ticker || "QQQ")}</strong><p>${esc(card.thesis?.oneLine || "Demo watch candidate only.")}</p></div>
          <div class="v31-mini-card"><span>Trigger</span><strong>${esc(card.levels?.trigger || "Source Required")}</strong><p>No fake price, chart level, or timestamp is allowed.</p></div>
          <div class="v31-mini-card"><span>Risk Stops</span><strong>${esc((risk.hardStops || ["No verified current price"])[0])}</strong><p>${esc((risk.hardStops || []).slice(1, 3).join(" • ") || "Risk Gate blocks incomplete cards.")}</p></div>
          <div class="v31-mini-card"><span>Memory Rule</span><strong>${esc(memory?.outcome || "no_output_correct")}</strong><p>${esc(memory?.ruleCreated || "No public output unless every gate passes.")}</p></div>
        </div>
        <p class="v31-footer-note">Research only. Not financial advice. No trade execution. No guaranteed outcomes.</p>
      </article>
    `;
  }

  function renderV31MissionControl() {
    const command = document.querySelector("#command");
    const dashboardContent = document.querySelector("#dashboardContent");
    const alertsContent = document.querySelector("#alertsContent");

    renderPanel(ensureMount(command, "v31MissionControlCommand", "afterbegin"), "Command Console");
    renderPanel(ensureMount(dashboardContent, "v31MissionControlDashboard", "afterbegin"), "Mission Control");
    renderPanel(ensureMount(alertsContent, "v31MissionControlAlerts", "afterbegin"), "Alerts Desk");
  }

  window.renderV31MissionControl = renderV31MissionControl;

  function scheduleRender() {
    window.requestAnimationFrame(() => {
      try {
        renderV31MissionControl();
      } catch (error) {
        console.error("V3.1 Mission Control render failed:", error);
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", scheduleRender, { once: true });
  } else {
    scheduleRender();
  }
  window.addEventListener("hashchange", scheduleRender);
  window.addEventListener("load", scheduleRender, { once: true });
})();
