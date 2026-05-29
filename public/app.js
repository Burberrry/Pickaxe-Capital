const DATA = window.PICKAXE_DATA;

const state = {
  alerts: JSON.parse(localStorage.getItem("pickaxe.alerts") || "null") || DATA.optionAlertPackets,
  checklist: JSON.parse(localStorage.getItem("pickaxe.checklist") || "null") || DATA.checklist
};

const pipelineStages = [
  { step: "01", name: "Source Intake", owner: "Source Hub", status: "Demo", tone: "blue", detail: "Manual imports, saved links, demo packets." },
  { step: "02", name: "Market Scout", owner: "Market Scout", status: "Demo", tone: "blue", detail: "Turns raw ideas into ticker candidates." },
  { step: "03", name: "Research Bench", owner: "Catalyst + Technical", status: "Demo", tone: "blue", detail: "Builds thesis, invalidation, and scenario notes." },
  { step: "04", name: "Options Quality", owner: "Flow Hunter", status: "Future Adapter", tone: "warn", detail: "Requires backend provider before real chain checks." },
  { step: "05", name: "Risk Gate", owner: "Risk Sentinel", status: "Risk Rejected", tone: "red", detail: "Rejects weak, illiquid, or unclear setups." },
  { step: "06", name: "Compliance Lock", owner: "Compliance Guard", status: "Manual Review", tone: "green", detail: "Forces research-only, no-guarantee language." },
  { step: "07", name: "CEO B Decision", owner: "CEO B", status: "Manual Review", tone: "gold", detail: "Human approves, rejects, or returns to review." }
];

const workbenchLanes = [
  { name: "Candidate Intake", micro: "Demo", copy: "Static packets and manually imported ideas start here." },
  { name: "Research Assembly", micro: "Manual Review", copy: "Agents summarize thesis, catalyst, invalidation, and risk notes." },
  { name: "Risk Gate", micro: "Risk Rejected", copy: "Weak setups are archived before they become alert memos." },
  { name: "CEO B Approval", micro: "Manual Review", copy: "Only human-approved packets move to Alerts." }
];

function saveState() {
  localStorage.setItem("pickaxe.alerts", JSON.stringify(state.alerts));
  localStorage.setItem("pickaxe.checklist", JSON.stringify(state.checklist));
}

function getCleanPath() {
  const hash = window.location.hash.replace("#", "");
  const path = hash || window.location.pathname.replace("/Pickaxe-Capital", "") || "/";
  return path === "/public/" ? "/" : path;
}

function route() {
  const clean = getCleanPath();
  const routes = {
    "/": renderHome,
    "/mission-control": renderMissionControl,
    "/agent-engine": renderAgentEngine,
    "/agents": renderAgentEngine,
    "/signals": renderSignals,
    "/alerts": renderAlerts,
    "/risk-rules": renderRiskRules,
    "/data-sources": renderDataSources,
    "/compliance": renderCompliance,
    "/archive": renderArchive,
    "/source-hub": renderDataSources,
    "/staging": renderMissionControl,
    "/ai-handoff": renderAgentEngine
  };
  const renderer = routes[clean] || renderHome;
  document.getElementById("app").innerHTML = layout(renderer(), clean);
  wireActions();
}

function link(path) {
  return `#${path}`;
}

function counts() {
  return {
    total: state.alerts.length,
    pending: state.alerts.filter(a => a.status === "ceo_review").length,
    approved: state.alerts.filter(a => a.ceoBDecision === "approved").length,
    rejected: state.alerts.filter(a => a.status === "risk_rejected").length,
    watch: state.alerts.filter(a => a.status === "watch_only").length,
    sources: DATA.dataSources.length
  };
}

function layout(content, clean) {
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
    <a class="${clean === href ? "active" : ""}" href="${link(href)}">
      <span>${label}</span><small>${micro}</small>
    </a>
  `).join("");

  const c = counts();
  return `
    <aside class="sidebar">
      <div class="brand">
        <div class="logo">⛏</div>
        <div>
          <strong>${DATA.company.name}</strong>
          <span>${DATA.company.product}</span>
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
          <p class="eyebrow">${DATA.company.mode} • GitHub Pages static build</p>
          <h1>Pickaxe Capital Hedge-Fund Command OS</h1>
        </div>
        <div class="top-actions">
          <span class="badge blue">${DATA.company.safety}</span>
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

function toneForStatus(status = "") {
  const value = status.toLowerCase();
  if (value.includes("risk") || value.includes("reject")) return "red";
  if (value.includes("future") || value.includes("watch")) return "warn";
  if (value.includes("manual") || value.includes("approved")) return "gold";
  if (value.includes("active") || value.includes("research")) return "green";
  return "blue";
}

function statusLabel(value = "") {
  const map = {
    ceo_review: "Manual Review",
    approved_manual_review: "Manual Review Approved",
    risk_rejected: "Risk Rejected",
    watch_only: "Watch Only"
  };
  return map[value] || value.replaceAll("_", " ");
}

function stat(label, value, note, tone = "") {
  return `
    <div class="stat ${tone}">
      <div class="stat-top"><span>${label}</span><i></i></div>
      <strong>${value}</strong>
      <small>${note}</small>
    </div>
  `;
}

function panelTitle(title, micro = "", right = "") {
  return `
    <div class="panel-title">
      <div>
        ${micro ? `<p class="eyebrow">${micro}</p>` : ""}
        <h3>${title}</h3>
      </div>
      ${right}
    </div>
  `;
}

function microBadge(label, tone = "blue") {
  return `<span class="badge ${tone}">${label}</span>`;
}

function renderHome() {
  const c = counts();
  return `
    <section class="hero command-hero">
      <div>
        <p class="eyebrow">Private command center</p>
        <h2>Agents research. Risk Sentinel filters. CEO B decides.</h2>
        <p>This is an investor-grade static prototype for options research packets. It is built to look serious while staying honest: no live integrations, no auto-trading, no guarantees, and no frontend secrets.</p>
        <div class="hero-actions">
          <a class="button" href="${link("/mission-control")}">Open Mission Control</a>
          <a class="button secondary" href="${link("/signals")}">Review Signals</a>
        </div>
      </div>
      <div class="terminal-card">
        <div class="terminal-head"><span>CEO_B_CORE</span><b>MANUAL</b></div>
        <code>INTAKE → RESEARCH → RISK → COMPLIANCE → CEO_B_REVIEW → MEMO</code>
        <p>No execution occurs inside the website.</p>
      </div>
    </section>
    <section class="grid four dense-kpis">
      ${stat("Candidates", c.total, "Static demo packets", "blue")}
      ${stat("CEO B Pending", c.pending, "Needs manual decision", "gold")}
      ${stat("Risk Rejected", c.rejected, "Archived as weak ideas", "red")}
      ${stat("Approved Memos", c.approved, "Research-only alerts", "green")}
    </section>
    <section class="panel">
      ${panelTitle("Operating Flow", "Research-only pipeline", microBadge("Static / Manual", "blue"))}
      <div class="pipeline runway">
        ${pipelineStages.map(stageNode).join("")}
      </div>
    </section>
  `;
}

function renderMissionControl() {
  const c = counts();
  const checklist = state.checklist.map(item => `
    <label class="check">
      <input type="checkbox" data-check="${item.id}" ${item.done ? "checked" : ""}>
      <span>${item.text}</span>
    </label>
  `).join("");

  return `
    <section class="ops-hero">
      <div>
        <p class="eyebrow">Mission Control</p>
        <h2>CEO B Command Core</h2>
        <p>Dense operational view for the research pipeline: sources, agents, risk gates, compliance language, and final manual review.</p>
      </div>
      <div class="command-matrix">
        <span>Protocol</span><b>Manual Review</b>
        <span>Execution</span><b>External Only</b>
        <span>Data</span><b>Demo / Static</b>
        <span>Safety</span><b>No Guarantees</b>
      </div>
    </section>

    <section class="grid six dense-kpis">
      ${stat("Research Candidates", c.total, "All packets", "blue")}
      ${stat("CEO B Pending", c.pending, "Awaiting decision", "gold")}
      ${stat("Watch Only", c.watch, "Not approved", "warn")}
      ${stat("Risk Rejected", c.rejected, "Stopped by gate", "red")}
      ${stat("Sources", c.sources, "Adapters listed", "green")}
      ${stat("Build", "Static", "GitHub Pages safe", "blue")}
    </section>

    <section class="panel command-core">
      ${panelTitle("CEO B Command Core", "Agent pipeline", microBadge("Manual Review", "gold"))}
      <div class="core-grid">
        ${pipelineStages.map(stageNode).join("")}
      </div>
    </section>

    <section class="grid two mission-grid">
      <div class="panel">
        ${panelTitle("Priority Stack", "Executive readout", microBadge("Demo", "blue"))}
        <div class="stack premium-stack">
          <div><strong>Top Candidate</strong><span>NVDA demo call-spread packet remains manual-review only.</span><em>Action: verify liquidity externally</em></div>
          <div><strong>Highest Constraint</strong><span>Frontend cannot validate real spreads, volume, or Greeks.</span><em>Action: future backend adapter only</em></div>
          <div><strong>Risk Watch</strong><span>SPY downside hedge is watch-only until macro confirmation.</span><em>Action: keep in workbench</em></div>
          <div><strong>Rejected Memory</strong><span>AAPL setup lacks catalyst and invalidation quality.</span><em>Action: archive as lesson</em></div>
        </div>
      </div>
      <div class="panel">
        ${panelTitle("Agent Status Board", "Operating branches", microBadge("Future Adapter", "warn"))}
        <div class="agent-table">
          ${DATA.agentPipeline.map(a => `
            <div class="agent-row">
              <span>${a.name}</span>
              ${microBadge(a.status, toneForStatus(a.status))}
              <small>${a.riskFlag}</small>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <section class="grid two mission-grid">
      <div class="panel">
        ${panelTitle("Agent Feed", "Latest static activity")}
        ${DATA.agentPipeline.slice(1, 7).map(a => `<div class="feed"><b>${a.name}</b><span>${a.role}</span><small>${a.habitat} • ${a.outputs}</small></div>`).join("")}
      </div>
      <div class="panel">
        ${panelTitle("Today’s Build Checklist", "Local progress")}
        ${checklist || emptyState("No checklist items yet.", "Add build tasks to habitat-data.js later.")}
      </div>
    </section>
  `;
}

function stageNode(stage) {
  return `
    <article class="stage-card ${stage.tone}">
      <div class="stage-step">${stage.step}</div>
      <div>
        <div class="mini-row"><h4>${stage.name}</h4>${microBadge(stage.status, stage.tone)}</div>
        <p>${stage.detail}</p>
        <small>${stage.owner}</small>
      </div>
    </article>
  `;
}

function renderAgentEngine() {
  return `
    <section class="panel">
      ${panelTitle("Agent Engine", "Branch-by-branch operating map", microBadge("No live execution", "blue"))}
      <p class="muted">Each agent is a research role inside the static command system. Future adapters require a backend proxy and manual controls; API keys never belong in this frontend.</p>
    </section>
    <section class="grid cards agent-cards">
      ${DATA.agentPipeline.map(a => `
        <article class="card agent-card">
          <div class="card-head">
            <h3>${a.name}</h3>
            ${microBadge(a.status, toneForStatus(a.status))}
          </div>
          <p>${a.role}</p>
          <dl>
            <dt>Habitat</dt><dd>${a.habitat}</dd>
            <dt>Inputs</dt><dd>${a.inputs}</dd>
            <dt>Outputs</dt><dd>${a.outputs}</dd>
            <dt>Route</dt><dd>${a.route}</dd>
            <dt>Risk Flag</dt><dd>${a.riskFlag}</dd>
          </dl>
          <div class="meter-label"><span>Readiness</span><b>${a.confidence}%</b></div>
          <div class="meter"><span style="width:${a.confidence}%"></span></div>
        </article>
      `).join("")}
    </section>
  `;
}

function renderSignals() {
  return `
    <section class="workbench-hero">
      <div>
        <p class="eyebrow">Signals</p>
        <h2>Research Workbench</h2>
        <p>Candidate packets are assembled, challenged, and routed to CEO B. This page does not show live prices or execution buttons.</p>
      </div>
      <div class="research-toolbar">
        ${microBadge("Demo", "blue")}
        ${microBadge("Manual Review", "gold")}
        ${microBadge("Risk Rejected", "red")}
        ${microBadge("Future Adapter", "warn")}
      </div>
    </section>

    <section class="grid four lanes">
      ${workbenchLanes.map(lane => `
        <article class="lane-card">
          ${microBadge(lane.micro, toneForStatus(lane.micro))}
          <h3>${lane.name}</h3>
          <p>${lane.copy}</p>
        </article>
      `).join("")}
    </section>

    <section class="panel">
      ${panelTitle("Packet Queue", "Manual research candidates", `<span class="muted count-label">${state.alerts.length} packets</span>`)}
      <div class="research-list">
        ${state.alerts.length ? state.alerts.map(alertCard).join("") : emptyState("No signal packets yet.", "Add research packets to habitat-data.js or import manually later.")}
      </div>
    </section>
  `;
}

function renderAlerts() {
  const approved = state.alerts.filter(a => a.ceoBDecision === "approved");
  return `
    <section class="memo-hero">
      <div>
        <p class="eyebrow">Alerts</p>
        <h2>Approved Research Memos</h2>
        <p>Approved packets become professional research memos only after CEO B manual review. Execution remains outside the website.</p>
      </div>
      ${microBadge("Manual Review Only", "gold")}
    </section>
    <section class="memo-list">
      ${approved.length ? approved.map(alertMemo).join("") : emptyState("No approved research memos yet.", "Go to Signals and approve a packet after manual review.")}
    </section>
  `;
}

function alertCard(a) {
  const tone = a.status === "risk_rejected" ? "red" : a.ceoBDecision === "approved" ? "gold" : toneForStatus(a.status);
  const approved = a.ceoBDecision === "approved";
  return `
    <article class="card alert-card ${tone}">
      <div class="card-head">
        <div>
          <p class="eyebrow">${a.id} • ${a.strategy}</p>
          <h3>${a.ticker} ${a.direction}</h3>
        </div>
        ${microBadge(statusLabel(a.status), tone)}
      </div>
      <p>${a.thesis}</p>
      <div class="mini-grid">
        <span>Expiry <b>${a.expiry}</b></span>
        <span>Strike <b>${a.strike}</b></span>
        <span>Spread Quality <b>${a.spreadQuality}</b></span>
        <span>Confidence <b>${a.confidence}%</b></span>
        <span>Volume <b>${a.volume}</b></span>
        <span>Open Interest <b>${a.openInterest}</b></span>
      </div>
      <details>
        <summary>Research packet details</summary>
        <p><b>Catalyst:</b> ${a.catalyst}</p>
        <p><b>Invalidation:</b> ${a.invalidation}</p>
        <p><b>Risk:</b> ${a.riskNotes.join("; ")}</p>
        <p><b>Scenario:</b> ${a.targetScenario}</p>
        <p class="muted">${a.disclaimer}</p>
      </details>
      <div class="actions">
        <button data-approve="${a.id}" ${approved ? "disabled" : ""}>${approved ? "Approved" : "CEO B Approve"}</button>
        <button data-reject="${a.id}" class="danger">Risk Reject</button>
        <button data-review="${a.id}" class="secondary">Send to Review</button>
      </div>
    </article>
  `;
}

function alertMemo(a) {
  return `
    <article class="memo-card">
      <div class="memo-head">
        <div>
          <p class="eyebrow">${a.id} • Research memo</p>
          <h3>${a.ticker} ${a.direction} — ${a.strategy}</h3>
        </div>
        ${microBadge("Approved Manual Review", "gold")}
      </div>
      <div class="memo-grid">
        <section>
          <h4>Executive Summary</h4>
          <p>${a.thesis}</p>
        </section>
        <section>
          <h4>Setup Snapshot</h4>
          <ul>
            <li><b>Expiry:</b> ${a.expiry}</li>
            <li><b>Strike:</b> ${a.strike}</li>
            <li><b>Spread Quality:</b> ${a.spreadQuality}</li>
            <li><b>Confidence:</b> ${a.confidence}% demo score</li>
          </ul>
        </section>
        <section>
          <h4>Catalyst + Invalidation</h4>
          <p><b>Catalyst:</b> ${a.catalyst}</p>
          <p><b>Invalidation:</b> ${a.invalidation}</p>
        </section>
        <section>
          <h4>Risk Memo</h4>
          <p>${a.riskNotes.join("; ")}</p>
          <p class="muted">Execution is manual and external. This memo is not financial advice and does not guarantee profits.</p>
        </section>
      </div>
      <div class="memo-foot">
        <span>CEO B reviewed: ${a.ceoBDecision}</span>
        <span>No auto-trading • No live data • Research only</span>
      </div>
    </article>
  `;
}

function renderRiskRules() {
  return `
    <section class="panel">
      ${panelTitle("Risk Rules", "Hard gates before CEO B", microBadge("No guarantees", "red"))}
      <p class="muted">Risk Sentinel can reject packets for liquidity, catalyst, invalidation, sizing, or disclosure problems.</p>
    </section>
    <section class="grid cards">
      ${DATA.riskRules.map(r => `
        <article class="card rule-card">
          <div class="card-head">
            <h3>${r.rule}</h3>
            ${microBadge(r.severity, r.severity === "Critical" ? "red" : r.severity === "High" ? "warn" : "blue")}
          </div>
          <p>${r.action}</p>
        </article>
      `).join("")}
    </section>
  `;
}

function renderDataSources() {
  return `
    <section class="panel">
      ${panelTitle("Data Sources", "Adapters are honest placeholders", microBadge("No frontend keys", "gold"))}
      <p class="muted">Future integrations must use a backend proxy, citations, and manual-review controls. This static GitHub Pages app must never expose API keys.</p>
    </section>
    <section class="grid cards">
      ${DATA.dataSources.map(s => `
        <article class="card source-card">
          <div class="card-head">
            <h3>${s.name}</h3>
            ${microBadge(s.status, toneForStatus(s.status))}
          </div>
          <p>${s.category}</p>
          <dl>
            <dt>Used by</dt><dd>${s.agents}</dd>
            <dt>Data Type</dt><dd>${s.dataType}</dd>
            <dt>Next Step</dt><dd>${s.next}</dd>
            <dt>Safety</dt><dd>${s.safety}</dd>
          </dl>
        </article>
      `).join("")}
    </section>
  `;
}

function renderCompliance() {
  return `
    <section class="panel compliance">
      ${panelTitle("Important Disclosures", "Compliance Guard", microBadge("Research Only", "green"))}
      <ul>
        ${DATA.complianceDisclosures.map(d => `<li>${d}</li>`).join("")}
      </ul>
    </section>
  `;
}

function renderArchive() {
  const rejected = state.alerts.filter(a => a.status === "risk_rejected");
  return `
    <section class="panel">
      ${panelTitle("Archive / Memory Loop", "Rejected packets become lessons", microBadge("Risk Rejected", "red"))}
      <p class="muted">Rejected ideas stay visible so the system remembers what not to repeat.</p>
    </section>
    <section class="grid cards">
      ${rejected.length ? rejected.map(alertCard).join("") : emptyState("No rejected ideas yet.", "Risk-reject weak packets from the Signals page.")}
    </section>
  `;
}

function emptyState(title, copy) {
  return `
    <div class="empty">
      <b>${title}</b>
      <span>${copy}</span>
    </div>
  `;
}

function wireActions() {
  document.querySelectorAll("[data-approve]").forEach(btn => btn.addEventListener("click", () => {
    const item = state.alerts.find(a => a.id === btn.dataset.approve);
    if (!item) return;
    item.ceoBDecision = "approved";
    item.status = "approved_manual_review";
    saveState();
    route();
  }));

  document.querySelectorAll("[data-reject]").forEach(btn => btn.addEventListener("click", () => {
    const item = state.alerts.find(a => a.id === btn.dataset.reject);
    if (!item) return;
    item.ceoBDecision = "rejected";
    item.status = "risk_rejected";
    saveState();
    route();
  }));

  document.querySelectorAll("[data-review]").forEach(btn => btn.addEventListener("click", () => {
    const item = state.alerts.find(a => a.id === btn.dataset.review);
    if (!item) return;
    item.ceoBDecision = "pending";
    item.status = "ceo_review";
    saveState();
    route();
  }));

  document.querySelectorAll("[data-check]").forEach(input => input.addEventListener("change", () => {
    const item = state.checklist.find(i => i.id === input.dataset.check);
    if (!item) return;
    item.done = input.checked;
    saveState();
  }));
}

window.addEventListener("hashchange", route);
route();
