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
  const titleCase = (value, fallback) => statusText(value, fallback).replace(/\b\w/g, (char) => char.toUpperCase());

  function ensureMount(target, id, position = "afterbegin", className = "v31-mission-control") {
    if (!target) return null;
    let mount = target.querySelector(`#${id}`);
    if (!mount) {
      mount = document.createElement("section");
      mount.id = id;
      mount.className = className;
      target.insertAdjacentElement(position, mount);
    }
    return mount;
  }

  function ensureAfter(target, anchorId, id, className = "v31-signals-deep-dive") {
    if (!target) return null;
    let mount = target.querySelector(`#${id}`);
    const anchor = target.querySelector(`#${anchorId}`);
    if (!mount) {
      mount = document.createElement("section");
      mount.id = id;
      mount.className = className;
    }
    if (anchor && anchor.nextElementSibling !== mount) {
      anchor.insertAdjacentElement("afterend", mount);
    } else if (!anchor && !mount.parentElement) {
      target.insertAdjacentElement("afterbegin", mount);
    }
    return mount;
  }

  function ensureAlertsGoldenPath(target) {
    if (!target) return null;
    let group = target.querySelector("#v31GoldenPathGroup");
    if (!group) {
      group = document.createElement("details");
      group.id = "v31GoldenPathGroup";
      group.className = "v31-golden-path-group";
      group.innerHTML = `
        <summary>
          <span>
            <strong>QQQ Golden Path · Demo Reference</strong>
            <small>Locked V3.1 source, risk, CEO B review, simulator, and watchlist workflow</small>
          </span>
          <em>Not the selected alert above · No live data</em>
        </summary>
        <div class="v31-golden-path-body"></div>
      `;
      const operatorWorkspace = target.querySelector(".alerts-operator-workspace");
      if (operatorWorkspace) operatorWorkspace.insertAdjacentElement("afterend", group);
      else target.insertAdjacentElement("afterbegin", group);
      group.open = Boolean(window.PickaxeV31GoldenPathOpen);
      group.addEventListener("toggle", () => {
        window.PickaxeV31GoldenPathOpen = group.open;
      });
    }
    const body = group.querySelector(".v31-golden-path-body");
    ["v31MissionControlAlerts", "v31SignalsDeepDive", "v31ReviewSimulator", "v31WatchlistQueue"].forEach((id) => {
      const existing = target.querySelector(`#${id}`);
      if (existing && existing.parentElement !== body) body.append(existing);
    });
    return body;
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

  function renderDeepSignalsCard(mount) {
    if (!mount) return;
    const demo = window.PICKAXE_DEMO_DATA || {};
    const card = demo.qqqResearchCard || {};
    const statuses = card.statuses || {};
    const sources = Array.isArray(demo.sourceLedger) ? demo.sourceLedger : [];
    const agents = Array.isArray(demo.agentNotes) ? demo.agentNotes : [];
    const risk = demo.riskGate || {};
    const ceo = demo.ceoBReview || {};
    const memory = Array.isArray(demo.memoryVault) ? demo.memoryVault[0] : null;
    const silence = demo.silenceGate || {};

    mount.innerHTML = `
      <article class="v31-deep-panel" aria-label="V3.1 Signals Desk QQQ demo research card">
        <p class="v31-kicker">Signals Desk / QQQ Demo Card / Not Approved</p>
        <div class="v31-deep-title">
          <h3>${esc(card.ticker || "QQQ")} Demo<br />Research Card</h3>
          <div class="v31-status-row">
            <span class="v31-status-chip gold">${esc(card.demoLabel || "Demo Data")}</span>
            <span class="v31-status-chip warn">Bias: ${esc(titleCase(card.bias, "Watch"))}</span>
            <span class="v31-status-chip warn">Timeframe: ${esc(titleCase(card.timeframe, "Swing"))}</span>
            <span class="v31-status-chip block">Public Output: ${statuses.publicOutputAllowed ? "Allowed" : "Not Allowed"}</span>
          </div>
        </div>

        <div class="v31-card-grid">
          <div class="v31-mini-card"><span>Setup Type</span><strong>${esc(titleCase(card.setupType, "Mean Reversion Watch"))}</strong><p>Demo-only workflow object; no trade instruction.</p></div>
          <div class="v31-mini-card"><span>Trigger</span><strong>${esc(card.levels?.trigger || "Source Required")}</strong><p>Requires verified chart level and timestamp.</p></div>
          <div class="v31-mini-card"><span>Invalidation</span><strong>${esc(card.levels?.invalidation || "Source Required")}</strong><p>No invalidation means Risk Gate blocks approval.</p></div>
          <div class="v31-mini-card"><span>Options Context</span><strong>${esc(titleCase(card.optionsContext?.contractType, "Watch Only"))}</strong><p>${esc(card.optionsContext?.warning || "Options may expire worthless.")}</p></div>
        </div>

        <div class="v31-deep-grid">
          <section class="v31-deep-section">
            <span>Thesis</span>
            <strong>${esc(card.thesis?.oneLine || "QQQ demo watch candidate.")}</strong>
            <p>${esc(card.thesis?.confirm || "Requires verified price, source timestamp, and risk review.")}</p>
          </section>
          <section class="v31-deep-section">
            <span>Gate Status</span>
            <strong>Source: ${esc(statusText(statuses.sourceLedger, "unverified"))}</strong>
            <p>Silence: ${esc(statusText(statuses.silenceGate || silence.decision, "needs_more_evidence"))} • Risk: ${esc(statusText(statuses.riskGate || risk.status, "not_passed"))} • CEO B: ${esc(statusText(statuses.ceoBReview || ceo.status, "needs_review"))}</p>
          </section>

          <section class="v31-deep-section full">
            <span>Source Ledger Mini-Table</span>
            <div class="v31-table-wrap">
              <table class="v31-table">
                <thead><tr><th>Source</th><th>Category</th><th>Status</th><th>Required Before Approval</th></tr></thead>
                <tbody>
                  ${sources.map((source) => `
                    <tr>
                      <td>${esc(source.name)}</td>
                      <td>${esc(titleCase(source.category, "Manual"))}</td>
                      <td>${esc(statusText(source.status, "source_required"))}</td>
                      <td>${source.timestampRequired ? "Timestamp" : "Review"}${source.screenshotRequired ? " + Screenshot" : ""}</td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>
          </section>

          <section class="v31-deep-section">
            <span>Agent Notes</span>
            <ul class="v31-deep-list">
              ${agents.map((agent) => `<li><strong>${esc(agent.agent)}</strong><p>${esc(agent.note)} ${esc(agent.escalation)}</p></li>`).join("")}
            </ul>
          </section>

          <section class="v31-deep-section">
            <span>Risk Gate Hard Stops</span>
            <ul class="v31-deep-list">
              ${(risk.hardStops || ["No verified current price", "No invalidation"]).map((item) => `<li>${esc(item)}</li>`).join("")}
            </ul>
          </section>

          <section class="v31-deep-section full">
            <span>CEO B Review Checklist Preview</span>
            <div class="v31-checklist">
              ${(ceo.checklist || []).slice(0, 8).map((item) => `<div class="v31-check-item">${esc(item)}</div>`).join("")}
            </div>
          </section>

          <section class="v31-deep-section full">
            <span>Memory Vault Lesson</span>
            <strong>${esc(memory?.outcome || "no_output_correct")}</strong>
            <p>${esc(memory?.ruleCreated || "No public output unless Source Ledger, Silence Gate, Risk Gate, and CEO B Review pass.")}</p>
            <p>${esc(memory?.futureAgentTask || "Create verified-source checklist before public visual generation.")}</p>
          </section>
        </div>

        <p class="v31-footer-note">Demo data only. Research only. Not financial advice. No trade execution. No guaranteed outcomes. Public output remains not allowed.</p>
      </article>
    `;
  }

  function renderV31MissionControl() {
    const command = document.querySelector("#command");
    const dashboardContent = document.querySelector("#dashboardContent");
    const alertsContent = document.querySelector("#alertsContent");

    renderPanel(ensureMount(command, "v31MissionControlCommand", "afterbegin"), "Command Console");
    renderPanel(ensureMount(dashboardContent, "v31MissionControlDashboard", "afterbegin"), "Mission Control");
    const alertsGoldenPath = ensureAlertsGoldenPath(alertsContent);
    const alertsMount = ensureMount(alertsGoldenPath, "v31MissionControlAlerts", "afterbegin");
    renderPanel(alertsMount, "Alerts Desk");
    renderDeepSignalsCard(ensureAfter(alertsGoldenPath, "v31MissionControlAlerts", "v31SignalsDeepDive", "v31-signals-deep-dive"));
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
