/**
 * Components module - reusable render functions for pages and sections
 */

import { 
  link, 
  microBadge, 
  stat, 
  panelTitle, 
  emptyState, 
  toneForStatus, 
  statusLabel,
  sanitize 
} from "./utils.js";
import { state, getCounts } from "./state.js";

const DATA = window.PICKAXE_DATA;

// Pipeline stage configuration
const pipelineStages = [
  { step: "01", name: "Source Intake", owner: "Source Hub", status: "Demo", tone: "blue", detail: "Manual imports, saved links, demo packets." },
  { step: "02", name: "Market Scout", owner: "Market Scout", status: "Demo", tone: "blue", detail: "Turns raw ideas into ticker candidates." },
  { step: "03", name: "Research Bench", owner: "Catalyst + Technical", status: "Demo", tone: "blue", detail: "Builds thesis, invalidation, and scenario notes." },
  { step: "04", name: "Options Quality", owner: "Flow Hunter", status: "Future Adapter", tone: "warn", detail: "Requires backend provider before real chain checks." },
  { step: "05", name: "Risk Gate", owner: "Risk Sentinel", status: "Risk Rejected", tone: "red", detail: "Rejects weak, illiquid, or unclear setups." },
  { step: "06", name: "Compliance Lock", owner: "Compliance Guard", status: "Manual Review", tone: "green", detail: "Forces research-only, no-guarantee language." },
  { step: "07", name: "CEO B Decision", owner: "CEO B", status: "Manual Review", tone: "gold", detail: "Human approves, rejects, or returns to review." }
];

// Workbench lane configuration
const workbenchLanes = [
  { name: "Candidate Intake", micro: "Demo", copy: "Static packets and manually imported ideas start here." },
  { name: "Research Assembly", micro: "Manual Review", copy: "Agents summarize thesis, catalyst, invalidation, and risk notes." },
  { name: "Risk Gate", micro: "Risk Rejected", copy: "Weak setups are archived before they become alert memos." },
  { name: "CEO B Approval", micro: "Manual Review", copy: "Only human-approved packets move to Alerts." }
];

/**
 * Render stage card
 */
export function stageNode(stage) {
  return `
    <article class="stage-card ${stage.tone}">
      <div class="stage-step">${sanitize(stage.step)}</div>
      <div>
        <div class="mini-row"><h4>${sanitize(stage.name)}</h4>${microBadge(stage.status, stage.tone)}</div>
        <p>${sanitize(stage.detail)}</p>
        <small>${sanitize(stage.owner)}</small>
      </div>
    </article>
  `;
}

/**
 * Render alert card
 */
export function alertCard(a) {
  const tone = a.status === "risk_rejected" ? "red" : a.ceoBDecision === "approved" ? "gold" : toneForStatus(a.status);
  const approved = a.ceoBDecision === "approved";
  return `
    <article class="card alert-card ${tone}">
      <div class="card-head">
        <div>
          <p class="eyebrow">${sanitize(a.id)} • ${sanitize(a.strategy)}</p>
          <h3>${sanitize(a.ticker)} ${sanitize(a.direction)}</h3>
        </div>
        ${microBadge(statusLabel(a.status), tone)}
      </div>
      <p>${sanitize(a.thesis)}</p>
      <div class="mini-grid">
        <span>Expiry <b>${sanitize(a.expiry)}</b></span>
        <span>Strike <b>${sanitize(a.strike)}</b></span>
        <span>Spread Quality <b>${sanitize(a.spreadQuality)}</b></span>
        <span>Confidence <b>${sanitize(a.confidence)}%</b></span>
        <span>Volume <b>${sanitize(a.volume)}</b></span>
        <span>Open Interest <b>${sanitize(a.openInterest)}</b></span>
      </div>
      <details>
        <summary>Research packet details</summary>
        <p><b>Catalyst:</b> ${sanitize(a.catalyst)}</p>
        <p><b>Invalidation:</b> ${sanitize(a.invalidation)}</p>
        <p><b>Risk:</b> ${a.riskNotes.map(sanitize).join("; ")}</p>
        <p><b>Scenario:</b> ${sanitize(a.targetScenario)}</p>
        <p class="muted">${sanitize(a.disclaimer)}</p>
      </details>
      <div class="actions">
        <button data-approve="${a.id}" ${approved ? "disabled" : ""} aria-label="CEO B Approve ${a.ticker}">${approved ? "Approved" : "CEO B Approve"}</button>
        <button data-reject="${a.id}" class="danger" aria-label="Risk Reject ${a.ticker}">Risk Reject</button>
        <button data-review="${a.id}" class="secondary" aria-label="Send ${a.ticker} to review">Send to Review</button>
      </div>
    </article>
  `;
}

/**
 * Render alert memo (approved alerts)
 */
export function alertMemo(a) {
  return `
    <article class="memo-card">
      <div class="memo-head">
        <div>
          <p class="eyebrow">${sanitize(a.id)} • Research memo</p>
          <h3>${sanitize(a.ticker)} ${sanitize(a.direction)} — ${sanitize(a.strategy)}</h3>
        </div>
        ${microBadge("Approved Manual Review", "gold")}
      </div>
      <div class="memo-grid">
        <section>
          <h4>Executive Summary</h4>
          <p>${sanitize(a.thesis)}</p>
        </section>
        <section>
          <h4>Setup Snapshot</h4>
          <ul>
            <li><b>Expiry:</b> ${sanitize(a.expiry)}</li>
            <li><b>Strike:</b> ${sanitize(a.strike)}</li>
            <li><b>Spread Quality:</b> ${sanitize(a.spreadQuality)}</li>
            <li><b>Confidence:</b> ${sanitize(a.confidence)}% demo score</li>
          </ul>
        </section>
        <section>
          <h4>Catalyst + Invalidation</h4>
          <p><b>Catalyst:</b> ${sanitize(a.catalyst)}</p>
          <p><b>Invalidation:</b> ${sanitize(a.invalidation)}</p>
        </section>
        <section>
          <h4>Risk Memo</h4>
          <p>${a.riskNotes.map(sanitize).join("; ")}</p>
          <p class="muted">Execution is manual and external. This memo is not financial advice and does not guarantee profits.</p>
        </section>
      </div>
      <div class="memo-foot">
        <span>CEO B reviewed: ${sanitize(a.ceoBDecision)}</span>
        <span>No auto-trading • No live data • Research only</span>
      </div>
    </article>
  `;
}

/**
 * Render home page
 */
export function renderHome() {
  const c = getCounts();
  return `
    <section class="hero command-hero">
      <div>
        <p class="eyebrow">Private command center</p>
        <h2>Agents research. Risk Sentinel filters. CEO B decides.</h2>
        <p>This is an investor-grade static prototype for options research packets. It is built to look serious while staying honest: no live integrations, no auto-trading, no guarantees, and no fake keys.</p>
        <div class="hero-actions">
          <a class="button" href="${link("/mission-control")}" aria-label="Open Mission Control">Open Mission Control</a>
          <a class="button secondary" href="${link("/signals")}" aria-label="Review Signals">Review Signals</a>
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

/**
 * Render mission control page
 */
export function renderMissionControl() {
  const c = getCounts();
  const checklist = state.checklist.map(item => `
    <label class="check">
      <input type="checkbox" data-check="${sanitize(item.id)}" ${item.done ? "checked" : ""} aria-label="${sanitize(item.text)}">
      <span>${sanitize(item.text)}</span>
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
              <span>${sanitize(a.name)}</span>
              ${microBadge(a.status, toneForStatus(a.status))}
              <small>${sanitize(a.riskFlag)}</small>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <section class="grid two mission-grid">
      <div class="panel">
        ${panelTitle("Agent Feed", "Latest static activity")}
        ${DATA.agentPipeline.slice(1, 7).map(a => `<div class="feed"><b>${sanitize(a.name)}</b><span>${sanitize(a.role)}</span><small>${sanitize(a.habitat)} • ${sanitize(a.outputs)}</small></div>`).join("")}
      </div>
      <div class="panel">
        ${panelTitle("Today's Build Checklist", "Local progress")}
        ${checklist || emptyState("No checklist items yet.", "Add build tasks to habitat-data.js later.")}
      </div>
    </section>
  `;
}

/**
 * Render agent engine page
 */
export function renderAgentEngine() {
  return `
    <section class="panel">
      ${panelTitle("Agent Engine", "Branch-by-branch operating map", microBadge("No live execution", "blue"))}
      <p class="muted">Each agent is a research role inside the static command system. Future adapters require a backend proxy and manual controls; API keys never belong in this frontend.</p>
    </section>
    <section class="grid cards agent-cards">
      ${DATA.agentPipeline.map(a => `
        <article class="card agent-card">
          <div class="card-head">
            <h3>${sanitize(a.name)}</h3>
            ${microBadge(a.status, toneForStatus(a.status))}
          </div>
          <p>${sanitize(a.role)}</p>
          <dl>
            <dt>Habitat</dt><dd>${sanitize(a.habitat)}</dd>
            <dt>Inputs</dt><dd>${sanitize(a.inputs)}</dd>
            <dt>Outputs</dt><dd>${sanitize(a.outputs)}</dd>
            <dt>Route</dt><dd>${sanitize(a.route)}</dd>
            <dt>Risk Flag</dt><dd>${sanitize(a.riskFlag)}</dd>
          </dl>
          <div class="meter-label"><span>Readiness</span><b>${sanitize(a.confidence)}%</b></div>
          <div class="meter"><span style="width:${a.confidence}%"></span></div>
        </article>
      `).join("")}
    </section>
  `;
}

/**
 * Render signals page
 */
export function renderSignals() {
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
          <h3>${sanitize(lane.name)}</h3>
          <p>${sanitize(lane.copy)}</p>
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

/**
 * Render alerts page
 */
export function renderAlerts() {
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

/**
 * Render risk rules page
 */
export function renderRiskRules() {
  return `
    <section class="panel">
      ${panelTitle("Risk Rules", "Hard gates before CEO B", microBadge("No guarantees", "red"))}
      <p class="muted">Risk Sentinel can reject packets for liquidity, catalyst, invalidation, sizing, or disclosure problems.</p>
    </section>
    <section class="grid cards">
      ${DATA.riskRules.map(r => `
        <article class="card rule-card">
          <div class="card-head">
            <h3>${sanitize(r.rule)}</h3>
            ${microBadge(r.severity, r.severity === "Critical" ? "red" : r.severity === "High" ? "warn" : "blue")}
          </div>
          <p>${sanitize(r.action)}</p>
        </article>
      `).join("")}
    </section>
  `;
}

/**
 * Render data sources page
 */
export function renderDataSources() {
  return `
    <section class="panel">
      ${panelTitle("Data Sources", "Adapters are honest placeholders", microBadge("No frontend keys", "gold"))}
      <p class="muted">Future integrations must use a backend proxy, citations, and manual-review controls. This static GitHub Pages app must never expose API keys.</p>
    </section>
    <section class="grid cards">
      ${DATA.dataSources.map(s => `
        <article class="card source-card">
          <div class="card-head">
            <h3>${sanitize(s.name)}</h3>
            ${microBadge(s.status, toneForStatus(s.status))}
          </div>
          <p>${sanitize(s.category)}</p>
          <dl>
            <dt>Used by</dt><dd>${sanitize(s.agents)}</dd>
            <dt>Data Type</dt><dd>${sanitize(s.dataType)}</dd>
            <dt>Next Step</dt><dd>${sanitize(s.next)}</dd>
            <dt>Safety</dt><dd>${sanitize(s.safety)}</dd>
          </dl>
        </article>
      `).join("")}
    </section>
  `;
}

/**
 * Render compliance page
 */
export function renderCompliance() {
  return `
    <section class="panel compliance">
      ${panelTitle("Important Disclosures", "Compliance Guard", microBadge("Research Only", "green"))}
      <ul>
        ${DATA.complianceDisclosures.map(d => `<li>${sanitize(d)}</li>`).join("")}
      </ul>
    </section>
  `;
}

/**
 * Render archive page
 */
export function renderArchive() {
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
