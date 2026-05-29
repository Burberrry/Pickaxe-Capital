const DATA = window.PICKAXE_DATA;

const state = {
  alerts: JSON.parse(localStorage.getItem("pickaxe.alerts") || "null") || DATA.optionAlertPackets,
  checklist: JSON.parse(localStorage.getItem("pickaxe.checklist") || "null") || DATA.checklist
};

function saveState() {
  localStorage.setItem("pickaxe.alerts", JSON.stringify(state.alerts));
  localStorage.setItem("pickaxe.checklist", JSON.stringify(state.checklist));
}

function route() {
  const hash = window.location.hash.replace("#", "");
  const path = hash || window.location.pathname.replace("/Pickaxe-Capital", "") || "/";
  const clean = path === "/public/" ? "/" : path;
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
  document.getElementById("app").innerHTML = layout(renderer());
  wireActions();
}

function link(path) {
  return `#${path}`;
}

function layout(content) {
  const nav = [
    ["/", "Command"],
    ["/mission-control", "Mission Control"],
    ["/agent-engine", "Agent Engine"],
    ["/signals", "Signals"],
    ["/alerts", "Alerts"],
    ["/risk-rules", "Risk Rules"],
    ["/data-sources", "Data Sources"],
    ["/compliance", "Compliance"],
    ["/archive", "Archive"]
  ].map(([href, label]) => `<a href="${link(href)}">${label}</a>`).join("");

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
      <div class="side-card">
        <span class="badge gold">CEO B</span>
        <p>Manual human gate. Research packets cannot become alerts without review.</p>
      </div>
    </aside>
    <main class="main">
      <header class="topbar">
        <div>
          <p class="eyebrow">${DATA.company.mode}</p>
          <h1>Pickaxe Capital Market Habitat</h1>
        </div>
        <span class="badge blue">${DATA.company.safety}</span>
      </header>
      ${content}
    </main>
  `;
}

function stat(label, value, tone = "") {
  return `<div class="stat ${tone}"><span>${label}</span><strong>${value}</strong></div>`;
}

function renderHome() {
  const pending = state.alerts.filter(a => a.status === "ceo_review").length;
  const approved = state.alerts.filter(a => a.ceoBDecision === "approved").length;
  const rejected = state.alerts.filter(a => a.status === "risk_rejected").length;
  return `
    <section class="hero">
      <p class="eyebrow">Private command center</p>
      <h2>Agents research. Risk Sentinel filters. CEO B approves.</h2>
      <p>This is a premium static prototype for research-only market packets. It does not place trades, promise returns, or expose API keys.</p>
      <div class="hero-actions">
        <a class="button" href="${link("/mission-control")}">Open Mission Control</a>
        <a class="button secondary" href="${link("/signals")}">Review Signals</a>
      </div>
    </section>
    <section class="grid four">
      ${stat("Candidates", state.alerts.length)}
      ${stat("CEO B Pending", pending, "blue")}
      ${stat("Risk Rejected", rejected, "red")}
      ${stat("Approved Manual Review", approved, "gold")}
    </section>
    <section class="panel">
      <h3>Operating Flow</h3>
      <div class="pipeline">
        ${["Source Hub","Market Scout","Flow Hunter","Catalyst","Technical","Macro","Risk Sentinel","Compliance","CEO B","Manual Alert"].map(x => `<span>${x}</span>`).join("")}
      </div>
    </section>
  `;
}

function renderMissionControl() {
  const pending = state.alerts.filter(a => a.status === "ceo_review").length;
  const approved = state.alerts.filter(a => a.ceoBDecision === "approved").length;
  const rejected = state.alerts.filter(a => a.status === "risk_rejected").length;
  const checklist = state.checklist.map(item => `
    <label class="check">
      <input type="checkbox" data-check="${item.id}" ${item.done ? "checked" : ""}>
      <span>${item.text}</span>
    </label>
  `).join("");

  return `
    <section class="grid six">
      ${stat("Research Candidates", state.alerts.length)}
      ${stat("CEO B Pending", pending, "blue")}
      ${stat("Risk Rejected", rejected, "red")}
      ${stat("Approved", approved, "gold")}
      ${stat("Sources", DATA.dataSources.length)}
      ${stat("Build", "Static")}
    </section>

    <section class="grid two">
      <div class="panel">
        <h3>Priority Stack</h3>
        <div class="stack">
          <div><strong>Top Opportunity</strong><span>NVDA demo call-spread candidate</span></div>
          <div><strong>Biggest Risk</strong><span>Static data cannot validate liquidity</span></div>
          <div><strong>Best Watchlist</strong><span>SPY risk-off hedge candidate</span></div>
          <div><strong>Agent Requiring Review</strong><span>Options Flow Hunter needs real provider adapter</span></div>
        </div>
      </div>
      <div class="panel">
        <h3>CEO B Command Core</h3>
        <div class="pipeline vertical">
          ${DATA.agentPipeline.map(a => `<span>${a.name}</span>`).join("")}
        </div>
      </div>
    </section>

    <section class="grid two">
      <div class="panel">
        <h3>Agent Feed</h3>
        ${DATA.agentPipeline.slice(1, 6).map(a => `<div class="feed"><b>${a.name}</b><span>${a.role}</span></div>`).join("")}
      </div>
      <div class="panel">
        <h3>Today’s Checklist</h3>
        ${checklist}
      </div>
    </section>
  `;
}

function renderAgentEngine() {
  return `
    <section class="grid cards">
      ${DATA.agentPipeline.map(a => `
        <article class="card">
          <div class="card-head">
            <h3>${a.name}</h3>
            <span class="badge ${a.status.includes("Future") ? "warn" : "blue"}">${a.status}</span>
          </div>
          <p>${a.role}</p>
          <dl>
            <dt>Habitat</dt><dd>${a.habitat}</dd>
            <dt>Inputs</dt><dd>${a.inputs}</dd>
            <dt>Outputs</dt><dd>${a.outputs}</dd>
            <dt>Route</dt><dd>${a.route}</dd>
            <dt>Risk Flag</dt><dd>${a.riskFlag}</dd>
          </dl>
          <div class="meter"><span style="width:${a.confidence}%"></span></div>
        </article>
      `).join("")}
    </section>
  `;
}

function renderSignals() {
  return `
    <section class="panel">
      <h3>Research Workbench</h3>
      <p class="muted">All packets are demo/static and research-only. Send promising candidates to CEO B, reject weak setups, or archive ideas.</p>
    </section>
    <section class="grid cards">
      ${state.alerts.map(alertCard).join("")}
    </section>
  `;
}

function renderAlerts() {
  const approved = state.alerts.filter(a => a.ceoBDecision === "approved");
  return `
    <section class="panel">
      <h3>CEO B Approved Manual-Review Alerts</h3>
      <p class="muted">Only manually approved research packets appear here. Execution stays outside this website.</p>
    </section>
    <section class="grid cards">
      ${(approved.length ? approved : []).map(alertCard).join("") || `<div class="empty">No approved manual-review packets yet. Go to Signals and approve a candidate.</div>`}
    </section>
  `;
}

function alertCard(a) {
  const tone = a.status === "risk_rejected" ? "red" : a.ceoBDecision === "approved" ? "gold" : "blue";
  return `
    <article class="card alert-card">
      <div class="card-head">
        <h3>${a.ticker} ${a.direction}</h3>
        <span class="badge ${tone}">${a.status.replaceAll("_", " ")}</span>
      </div>
      <p>${a.thesis}</p>
      <div class="mini-grid">
        <span>Strategy <b>${a.strategy}</b></span>
        <span>Expiry <b>${a.expiry}</b></span>
        <span>Strike <b>${a.strike}</b></span>
        <span>Confidence <b>${a.confidence}%</b></span>
      </div>
      <details>
        <summary>Packet details</summary>
        <p><b>Catalyst:</b> ${a.catalyst}</p>
        <p><b>Invalidation:</b> ${a.invalidation}</p>
        <p><b>Risk:</b> ${a.riskNotes.join("; ")}</p>
        <p class="muted">${a.disclaimer}</p>
      </details>
      <div class="actions">
        <button data-approve="${a.id}">CEO B Approve</button>
        <button data-reject="${a.id}" class="danger">Reject</button>
        <button data-review="${a.id}" class="secondary">Send to Review</button>
      </div>
    </article>
  `;
}

function renderRiskRules() {
  return `
    <section class="grid cards">
      ${DATA.riskRules.map(r => `
        <article class="card">
          <div class="card-head">
            <h3>${r.rule}</h3>
            <span class="badge ${r.severity === "Critical" ? "red" : r.severity === "High" ? "warn" : "blue"}">${r.severity}</span>
          </div>
          <p>${r.action}</p>
        </article>
      `).join("")}
    </section>
  `;
}

function renderDataSources() {
  return `
    <section class="grid cards">
      ${DATA.dataSources.map(s => `
        <article class="card">
          <div class="card-head">
            <h3>${s.name}</h3>
            <span class="badge ${s.status.includes("Future") ? "warn" : s.status.includes("Research") ? "blue" : "gold"}">${s.status}</span>
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
      <h3>Important Disclosures</h3>
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
      <h3>Archive / Memory Loop</h3>
      <p class="muted">Rejected ideas are kept so agents can learn what not to repeat.</p>
    </section>
    <section class="grid cards">${rejected.map(alertCard).join("") || `<div class="empty">No rejected ideas yet.</div>`}</section>
  `;
}

function wireActions() {
  document.querySelectorAll("[data-approve]").forEach(btn => btn.addEventListener("click", () => {
    const item = state.alerts.find(a => a.id === btn.dataset.approve);
    item.ceoBDecision = "approved";
    item.status = "approved_manual_review";
    saveState();
    route();
  }));

  document.querySelectorAll("[data-reject]").forEach(btn => btn.addEventListener("click", () => {
    const item = state.alerts.find(a => a.id === btn.dataset.reject);
    item.ceoBDecision = "rejected";
    item.status = "risk_rejected";
    saveState();
    route();
  }));

  document.querySelectorAll("[data-review]").forEach(btn => btn.addEventListener("click", () => {
    const item = state.alerts.find(a => a.id === btn.dataset.review);
    item.ceoBDecision = "pending";
    item.status = "ceo_review";
    saveState();
    route();
  }));

  document.querySelectorAll("[data-check]").forEach(input => input.addEventListener("change", () => {
    const item = state.checklist.find(i => i.id === input.dataset.check);
    item.done = input.checked;
    saveState();
  }));
}

window.addEventListener("hashchange", route);
route();
