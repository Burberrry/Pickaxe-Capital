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
  const vaultItems = DATA.archiveVaultItems || [];
  
  return `
    <section class="panel">
      ${panelTitle("Archive / Memory Loop", "Rejected packets become lessons", microBadge("Risk Rejected", "red"))}
      <p class="muted">Rejected ideas and manually promoted research links stay visible here as reference lessons.</p>
    </section>

    <section class="grid cards">
      ${rejected.length ? rejected.map(alertCard).join("") : emptyState("No rejected alert packets yet.", "Risk-reject weak packets from the Signals page.")}
    </section>

    <section class="panel">
      ${panelTitle("Research Vault", "Manually promoted bookmark sources", microBadge("Permanent Memory", "gold"))}
      <div class="agent-table">
        ${vaultItems.length ? vaultItems.map(item => `
          <div class="feed" style="margin-bottom: 8px;">
            <div class="mini-row">
              <strong>${sanitize(item.title)}</strong>
              ${microBadge(item.category, toneForStatus(item.category))}
            </div>
            <a href="${sanitize(item.url)}" target="_blank" rel="noopener noreferrer" style="color: var(--blue); font-size: 12px; word-break: break-all; display: block; margin-top: 4px;">
              ${sanitize(item.url)}
            </a>
            <p class="muted" style="margin-top: 6px; font-size: 11px;">
              <b>Provenance:</b> ${sanitize(item.summary)} • <b>Added:</b> ${sanitize(item.dateAdded)}
            </p>
          </div>
        `).join("") : emptyState("No vault items yet.", "Promote links from the Bookmark Miner review queue.")}
      </div>
    </section>
  `;
}

/**
 * Render vision map page
 */
export function renderVisionMap() {
  const nodes = DATA.visionCommandNodes || [];
  const matrix = DATA.ownershipMatrix || [];
  const review = DATA.ceoReviewQueue || [];
  const integrations = DATA.stalledIntegrations || [];
  
  return `
    <section class="ops-hero">
      <div>
        <p class="eyebrow">Vision Map</p>
        <h2>Command Architecture Board</h2>
        <p>Interactive mapping of the Pickaxe Capital / AI Habitat OS nodes, ownership lanes, and stalled integration barriers.</p>
      </div>
      <div class="command-matrix">
        <span>Nodes</span><b>${nodes.length} Active</b>
        <span>Integration Status</span><b>Local Sandbox</b>
      </div>
    </section>

    <section class="panel">
      ${panelTitle("System Command Nodes", "Architecture blocks", microBadge("Static Map", "blue"))}
      <div class="grid cards">
        ${nodes.map(n => `
          <article class="card">
            <div class="card-head">
              <h3>${sanitize(n.name)}</h3>
              ${microBadge(n.type, toneForStatus(n.type))}
            </div>
            <p>${sanitize(n.purpose)}</p>
            <dl>
              <dt>Owner Agent</dt><dd>${sanitize(n.ownerAgent)}</dd>
              <dt>Next Action</dt><dd>${sanitize(n.nextAction)}</dd>
              <dt>Status</dt><dd>${sanitize(n.status)}</dd>
              <dt>Route</dt><dd><code>${sanitize(n.route)}</code></dd>
            </dl>
          </article>
        `).join("")}
      </div>
    </section>

    <section class="grid two">
      <div class="panel">
        ${panelTitle("Ownership & Resource Matrix", "Routing directories")}
        <div class="agent-table">
          ${matrix.map(([route, owner, desc, note]) => `
            <div class="agent-row">
              <span><code>${sanitize(route)}</code></span>
              <b>${sanitize(owner)}</b>
              <small>${sanitize(desc)} • ${sanitize(note)}</small>
            </div>
          `).join("")}
        </div>
      </div>
      <div class="panel">
        ${panelTitle("CEO B Review Queue", "Decisions pending manual review", microBadge("Gates", "gold"))}
        <div class="stack premium-stack">
          ${review.map(r => `
            <div>
              <strong>${sanitize(r.title)}</strong>
              <span>${sanitize(r.note)}</span>
              <em>Owner: ${sanitize(r.owner)} • Priority: ${sanitize(r.priority)}</em>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <section class="panel">
      ${panelTitle("Stalled Integration Guardrails", "Honest placeholders", microBadge("Requires backend proxy", "warn"))}
      <div class="grid three" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px;">
        ${integrations.map(item => `
          <article class="card" style="padding: 12px; border-color: var(--warn-soft);">
            <small style="color: var(--warn); font-weight: 800; text-transform: uppercase;">Stalled Block</small>
            <p style="margin-top: 6px; font-size: 13px; color: var(--muted);">${sanitize(item)}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

/**
 * Render founder profile page
 */
export function renderFounder() {
  const f = DATA.founderProfile;
  if (!f) return `<h2>Founder profile data missing. Check habitat-data.js</h2>`;
  
  const isPublic = window.location.hash.includes("/founder") || window.location.pathname.includes("/founder");
  const modeLabel = isPublic ? "Public Portfolio Vibe" : "CEO B OS Profile";
  
  return `
    <section class="panel" style="padding: 0; overflow: hidden; border-radius: 18px; border: 1px solid var(--line);">
      <div class="founder-hero" style="display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1.2fr); gap: 20px; padding: 30px; background: linear-gradient(135deg, rgba(216,173,76,.08), transparent 40%);">
        <div class="founder-image-panel" style="display: flex; flex-direction: column; gap: 12px; justify-content: center; align-items: center; text-align: center; border-right: 1px solid var(--line); padding-right: 20px;">
          <div class="logo" style="width: 80px; height: 80px; font-size: 40px; border-radius: 20px; margin-bottom: 12px;">⛏</div>
          <div>
            <p class="eyebrow" style="color: var(--gold); font-size: 12px;">Founder Layer</p>
            <h2 style="font-size: 38px; letter-spacing: -0.04em; margin-bottom: 6px;">CEO B</h2>
            <blockquote style="font-style: italic; color: var(--muted); margin: 0; font-size: 14px;">"Systems over chaos. Leverage over busywork."</blockquote>
          </div>
        </div>
        <div class="founder-hero-copy" style="display: flex; flex-direction: column; justify-content: center;">
          <p class="eyebrow">${sanitize(modeLabel)}</p>
          <h2 style="font-size: 28px; line-height: 1.2; letter-spacing: -0.03em; margin-bottom: 12px;">High-agency systems operator.</h2>
          <p style="color: var(--muted); line-height: 1.6; font-size: 14px;">You treat AI like high-leverage computational machinery. Your queries are sparse, precise, and objective. You respect margins, costs, asset cleanup, and compound outcomes.</p>
          <div class="founder-principles" style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: 12px;">
            <span class="badge gold">Systems First</span>
            <span class="badge blue">Signal > Noise</span>
            <span class="badge green">Execution Focus</span>
          </div>
        </div>
      </div>
    </section>

    <section class="grid two">
      <div class="panel">
        ${panelTitle("How You Think", "Operating doctrine")}
        <div class="agent-table">
          ${f.howYouThink.map(([title, desc]) => `
            <div class="feed" style="margin-bottom: 8px;">
              <strong>${sanitize(title)}</strong>
              <p class="muted" style="margin-top: 4px; font-size: 13px;">${sanitize(desc)}</p>
            </div>
          `).join("")}
        </div>
      </div>
      <div class="panel">
        ${panelTitle("Signal Strengths", "Core leverage")}
        <div class="agent-table">
          ${f.strengths.map(([title, desc]) => `
            <div class="feed" style="margin-bottom: 8px;">
              <strong>${sanitize(title)}</strong>
              <p class="muted" style="margin-top: 4px; font-size: 13px;">${sanitize(desc)}</p>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <section class="panel">
      ${panelTitle("Vibe Check", "Attribute scores", microBadge("9.5/10 execution", "gold"))}
      <div class="vibe-bars" style="display: grid; gap: 10px;">
        ${f.vibeCheck.map(([label, score]) => `
          <div class="vibe-row" style="display: grid; grid-template-columns: 100px 1fr 40px; align-items: center; gap: 14px; font-family: monospace; font-size: 12px;">
            <span>${sanitize(label)}</span>
            <div class="vibe-track" style="height: 8px; background: rgba(255,255,255,.05); border-radius: 4px; overflow: hidden;">
              <i style="display: block; height: 100%; width: ${score * 10}%; background: linear-gradient(90deg, var(--blue), var(--gold)); border-radius: inherit;"></i>
            </div>
            <strong>${score}/10</strong>
          </div>
        `).join("")}
      </div>
    </section>

    <section class="grid three" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px;">
      <div class="panel">
        ${panelTitle("Values", "Guardrail principles")}
        <div style="font-size: 13px; line-height: 1.6;">
          ${f.values.map(v => `<p style="margin: 6px 0;">◆ ${sanitize(v)}</p>`).join("")}
        </div>
      </div>
      <div class="panel">
        ${panelTitle("Action Guide", "In practice")}
        <div style="font-size: 13px; line-height: 1.6;">
          ${f.inAction.map(a => `<p style="margin: 6px 0;">✓ ${sanitize(a)}</p>`).join("")}
        </div>
      </div>
      <div class="panel">
        ${panelTitle("Potential Limits", "Blind spots")}
        <div style="font-size: 13px; line-height: 1.6; color: var(--red);">
          ${f.blindSpots.map(b => `<p style="margin: 6px 0;">✕ ${sanitize(b)}</p>`).join("")}
        </div>
      </div>
    </section>
  `;
}

/**
 * Render project update page
 */
export function renderProjectUpdate() {
  const c = DATA.buildCompletionTracker || { areas: [], latestSession: {} };
  return `
    <section class="ops-hero">
      <div>
        <p class="eyebrow">Project Update</p>
        <h2>Nominal Operational Ledger</h2>
        <p>A structured ledger designed for AI models and human developers to audit the active repository, routes, and build parameters.</p>
      </div>
      <div class="command-matrix">
        <span>Uptime</span><b>Nominal</b>
        <span>Environment</span><b>Mac OS Sandbox</b>
      </div>
    </section>

    <section class="panel">
      ${panelTitle("Build Completion Tracker", "Implementation progression", microBadge("82% Complete", "green"))}
      <div class="grid cards">
        ${c.areas.map(a => `
          <article class="card">
            <div class="card-head">
              <h3>${sanitize(a.name)}</h3>
              ${microBadge(a.status, a.status === "Ready" ? "green" : "warn")}
            </div>
            <p>${sanitize(a.notes)}</p>
            <div class="meter-label"><span>Progression</span><b>${a.completion}%</b></div>
            <div class="meter"><span style="width:${a.completion}%"></span></div>
          </article>
        `).join("")}
      </div>
    </section>

    <section class="panel">
      ${panelTitle("Latest Session Update", "Modifications summary", microBadge("QA Verified", "gold"))}
      <div style="font-family: monospace; font-size: 12px; line-height: 1.6;">
        <p><b>Updated Date:</b> ${sanitize(c.latestSession.lastUpdated || new Date().toISOString().split('T')[0])}</p>
        <p><b>Validation Command:</b> <code>${sanitize(c.latestSession.validationCommand || "npm run build")}</code></p>
        <p><b>Validation Result:</b> <span class="badge green" style="padding: 2px 6px;">${sanitize(c.latestSession.validationResult || "Nominal check passed")}</span></p>
        <h4 style="color: var(--gold); margin-top: 14px; margin-bottom: 8px;">Files Changed:</h4>
        <ul style="padding-left: 18px; margin: 0;">
          ${c.latestSession.filesChanged.map(f => `<li><code>${sanitize(f)}</code></li>`).join("")}
        </ul>
        <h4 style="color: var(--gold); margin-top: 14px; margin-bottom: 8px;">Features Implemented:</h4>
        <ul style="padding-left: 18px; margin: 0;">
          ${c.latestSession.featuresAdded.map(f => `<li>${sanitize(f)}</li>`).join("")}
        </ul>
      </div>
    </section>
  `;
}

/**
 * Render bookmarks importer page (Local-first Bookmark Miner)
 */
export function renderBookmarks() {
  const rawList = state.bookmarks || [];
  const search = (state.bookmarksSearch || "").trim().toLowerCase();
  const catFilter = state.bookmarksCategoryFilter || "all";
  const trustFilter = state.bookmarksTrustFilter || "all";
  
  // Apply search/filters
  let filtered = rawList;
  if (search) {
    filtered = filtered.filter(b => 
      b.title.toLowerCase().includes(search) || 
      b.url.toLowerCase().includes(search) || 
      b.domain.toLowerCase().includes(search)
    );
  }
  if (catFilter !== "all") {
    filtered = filtered.filter(b => b.category === catFilter);
  }
  if (trustFilter !== "all") {
    filtered = filtered.filter(b => b.trustLevel === trustFilter);
  }

  // Statistics
  const total = rawList.length;
  const duplicateCount = rawList.filter(b => b.isDuplicate).length;
  
  const domainCounts = {};
  rawList.forEach(b => {
    domainCounts[b.domain] = (domainCounts[b.domain] || 0) + 1;
  });
  const topDomains = Object.entries(domainCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  const pendingCount = rawList.filter(b => b.ceoBDecision === "pending" || !b.ceoBDecision).length;

  // Pagination (15 items per page to prevent lag)
  const itemsPerPage = 15;
  const totalPages = Math.max(1, Math.ceil(filtered.length / itemsPerPage));
  if (state.bookmarksPage >= totalPages) state.bookmarksPage = totalPages - 1;
  if (state.bookmarksPage < 0) state.bookmarksPage = 0;
  
  const paginated = filtered.slice(
    state.bookmarksPage * itemsPerPage,
    (state.bookmarksPage + 1) * itemsPerPage
  );

  const exportHref = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(rawList, null, 2));

  return `
    <section class="ops-hero">
      <div>
        <p class="eyebrow">Local-first Bookmark Miner</p>
        <h2>Chrome Bookmarks Intelligence</h2>
        <p>Upload your Chrome bookmarks export HTML file. Link sorting, duplicate flags, taxonomy classifications, and trust scores occur locally in your browser.</p>
      </div>
      <div class="command-matrix">
        <span>Status</span><b>Local Parser</b>
        <span>No scraping</span><b>Active</b>
      </div>
    </section>

    <section class="grid three dense-kpis">
      ${stat("Total Bookmarks", total, "Imported locally", "blue")}
      ${stat("Review Queue", pendingCount, "Awaiting CEO B review", "gold")}
      ${stat("Duplicate URLs", duplicateCount, "Deduplicated", "red")}
    </section>

    <section class="panel">
      ${panelTitle("Bookmarks Import surface", "FileReader uploads only", microBadge("In-browser", "blue"))}
      <div class="control-band" style="display: flex; gap: 14px; align-items: center; flex-wrap: wrap;">
        <label class="button" style="display: inline-block; cursor: pointer;">
          Choose Chrome Bookmarks HTML
          <input type="file" id="bookmarksFile" accept=".html" style="display: none;" />
        </label>
        <span class="muted" style="font-size: 11px;">Upload <code>All_my_bookmarks.html</code> directly. Processing is instant.</span>
        ${total > 0 ? `
          <a class="button secondary" href="${exportHref}" download="pickaxe_bookmarks_export.json" style="margin-left: auto;">
            Export Mined JSON
          </a>
        ` : ""}
      </div>
    </section>

    ${total > 0 ? `
      <section class="grid two">
        <div class="panel">
          ${panelTitle("Top Domains Distribution", "Link frequency")}
          <table style="width:100%; border-collapse: collapse; font-family: monospace; font-size: 12px; text-align: left;">
            <thead>
              <tr style="border-bottom: 1px solid var(--line); color: var(--muted);">
                <th style="padding: 8px 0;">Domain</th>
                <th style="padding: 8px 0; text-align: right;">Count</th>
              </tr>
            </thead>
            <tbody>
              ${topDomains.map(([domain, count]) => `
                <tr style="border-bottom: 1px solid var(--line);">
                  <td style="padding: 8px 0; color: #dfe7f2;">${sanitize(domain)}</td>
                  <td style="padding: 8px 0; text-align: right; color: var(--gold);">${count}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
        <div class="panel">
          ${panelTitle("Classification Summary", "Mined taxonomy")}
          <div style="display: flex; gap: 6px; flex-wrap: wrap; align-content: start;">
            ${[
              "Market Intelligence", "Company / Stock Research", "Macro / Policy", "Social Sentiment Leads",
              "Trading Education", "AI / Coding", "Website / Product Lab", "Founder / Business",
              "Archive / Long-Term Knowledge", "Personal / Life", "System / Retrieval Junk", "Low Trust / Noise"
            ].map(cat => {
              const count = rawList.filter(b => b.category === cat).length;
              if (count === 0) return "";
              return `<span class="badge blue" style="margin-bottom: 4px;">${cat}: ${count}</span>`;
            }).join("")}
          </div>
        </div>
      </section>

      <section class="panel">
        ${panelTitle("Review Queue & Catalog", "CEO B manually promotes items", `<span class="muted">${filtered.length} matching</span>`)}
        
        <div class="control-band" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; margin-bottom: 16px; align-items: center;">
          <div>
            <label for="bmSearch" style="font-size: 11px; display: block; margin-bottom: 4px; color: var(--muted);">Search title/domain</label>
            <input id="bmSearch" value="${sanitize(state.bookmarksSearch)}" placeholder="Search..." style="width: 100%; padding: 8px; border: 1px solid var(--line); border-radius: 8px; background: rgba(0,0,0,.22); color: var(--text);" />
          </div>
          <div>
            <label for="bmCatFilter" style="font-size: 11px; display: block; margin-bottom: 4px; color: var(--muted);">Category</label>
            <select id="bmCatFilter" style="width: 100%; padding: 8px; border: 1px solid var(--line); border-radius: 8px; background: rgba(0,0,0,.22); color: var(--text);">
              <option value="all" ${catFilter === "all" ? "selected" : ""}>All Categories</option>
              ${[
                "Market Intelligence", "Company / Stock Research", "Macro / Policy", "Social Sentiment Leads",
                "Trading Education", "AI / Coding", "Website / Product Lab", "Founder / Business",
                "Archive / Long-Term Knowledge", "Personal / Life", "System / Retrieval Junk", "Low Trust / Noise"
              ].map(cat => `<option value="${cat}" ${catFilter === cat ? "selected" : ""}>${cat}</option>`).join("")}
            </select>
          </div>
          <div>
            <label for="bmTrustFilter" style="font-size: 11px; display: block; margin-bottom: 4px; color: var(--muted);">Trust Level</label>
            <select id="bmTrustFilter" style="width: 100%; padding: 8px; border: 1px solid var(--line); border-radius: 8px; background: rgba(0,0,0,.22); color: var(--text);">
              <option value="all" ${trustFilter === "all" ? "selected" : ""}>All Trust Levels</option>
              ${["Primary", "Analytical", "Secondary", "UGC / Social", "Retrieval Artifact", "Low Trust / Noise"].map(trust => `
                <option value="${trust}" ${trustFilter === trust ? "selected" : ""}>${trust}</option>
              `).join("")}
            </select>
          </div>
        </div>

        <div style="display: grid; gap: 12px; margin-bottom: 16px;">
          ${paginated.map(b => {
            const decision = b.ceoBDecision || "pending";
            const tone = toneForStatus(decision);
            return `
              <div class="feed" style="border-left: 3px solid ${decision === 'pending' ? 'var(--blue)' : decision === 'ignored' ? 'var(--muted-2)' : 'var(--green)'}; padding-left: 14px; background: rgba(255,255,255,.018);">
                <div class="mini-row" style="margin-bottom: 4px;">
                  <strong style="color: #e2eaf5; font-size: 14px;">${sanitize(b.title)}</strong>
                  <div>
                    ${b.isDuplicate ? `<span class="badge red" style="margin-right: 4px;">Duplicate</span>` : ""}
                    ${microBadge(b.category, "blue")}
                    ${microBadge(b.trustLevel, toneForStatus(b.trustLevel))}
                    ${microBadge(decision, tone)}
                  </div>
                </div>
                
                <a href="${sanitize(b.url)}" target="_blank" rel="noopener noreferrer" style="color: var(--blue); font-size: 12px; word-break: break-all; display: block; margin-bottom: 6px;">
                  ${sanitize(b.url)}
                </a>
                
                <div class="mini-row" style="align-items: center;">
                  <span class="muted" style="font-size: 11px;">
                    <b>Folder:</b> ${sanitize(b.folderPath)} • <b>Added:</b> ${sanitize(b.dateAdded)}
                  </span>
                  
                  ${decision === "pending" ? `
                    <div style="display: flex; gap: 6px;">
                      <button class="secondary" data-bm-id="${b.id}" data-bm-action="signal" style="padding: 4px 8px; font-size: 11px;">+ Signal</button>
                      <button class="secondary" data-bm-id="${b.id}" data-bm-action="source" style="padding: 4px 8px; font-size: 11px;">+ Source</button>
                      <button class="secondary" data-bm-id="${b.id}" data-bm-action="archive" style="padding: 4px 8px; font-size: 11px;">+ Vault</button>
                      <button class="danger" data-bm-id="${b.id}" data-bm-action="ignore" style="padding: 4px 8px; font-size: 11px;">Ignore</button>
                    </div>
                  ` : `<span class="muted" style="font-size: 11px;">CEO B decision: ${sanitize(decision)}</span>`}
                </div>
              </div>
            `;
          }).join("") || emptyState("No bookmarks match the current search/filters.", "Try relaxing filters.")}
        </div>

        <div style="display: flex; gap: 14px; align-items: center; justify-content: center;">
          <button id="prevBmPage" ${state.bookmarksPage === 0 ? "disabled" : ""} style="padding: 6px 12px;">Previous</button>
          <span style="font-family: monospace; font-size: 12px;">Page ${state.bookmarksPage + 1} / ${totalPages}</span>
          <button id="nextBmPage" ${state.bookmarksPage >= totalPages - 1 ? "disabled" : ""} style="padding: 6px 12px;">Next</button>
        </div>
      </section>
    ` : emptyState("Bookmark database is empty.", "Upload Chrome bookmarks HTML file to mine items.")}
  `;
}

