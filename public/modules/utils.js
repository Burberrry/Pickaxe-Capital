/**
 * Utility functions for rendering, routing, and safety
 */

/**
 * Safely escape HTML to prevent injection
 * @param {string} text - Text to escape
 * @returns {string} Escaped HTML-safe text
 */
export function escapeHtml(text) {
  if (!text) return "";
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

/**
 * Safe sanitization for alert displays
 * Only allows basic text, no script injection
 * @param {string} value - Value to sanitize
 * @returns {string} Safe string
 */
export function sanitize(value) {
  if (typeof value !== "string") return "";
  return escapeHtml(value).slice(0, 500); // Cap at 500 chars
}

/**
 * Get clean route path from hash or pathname
 * @returns {string} Clean path
 */
export function getCleanPath() {
  const hash = window.location.hash.replace("#", "");
  const path = hash || window.location.pathname.replace("/Pickaxe-Capital", "") || "/";
  return path === "/public/" ? "/" : path;
}

/**
 * Create hash link
 * @param {string} path - Route path
 * @returns {string} Hash URL
 */
export function link(path) {
  return `#${path}`;
}

/**
 * Status to display tone mapping
 * @param {string} status - Status value
 * @returns {string} Tone class (red, gold, green, blue, warn)
 */
export function toneForStatus(status = "") {
  const value = status.toLowerCase();
  if (value.includes("risk") || value.includes("reject")) return "red";
  if (value.includes("future") || value.includes("watch")) return "warn";
  if (value.includes("manual") || value.includes("approved")) return "gold";
  if (value.includes("active") || value.includes("research")) return "green";
  return "blue";
}

/**
 * Human-readable status label
 * @param {string} value - Status value
 * @returns {string} Display label
 */
export function statusLabel(value = "") {
  const map = {
    ceo_review: "Manual Review",
    approved_manual_review: "Manual Review Approved",
    risk_rejected: "Risk Rejected",
    watch_only: "Watch Only"
  };
  return map[value] || value.replaceAll("_", " ");
}

/**
 * Create a badge badge HTML element
 * @param {string} label - Badge text
 * @param {string} tone - Tone class (default: blue)
 * @returns {string} Badge HTML
 */
export function microBadge(label, tone = "blue") {
  return `<span class="badge ${tone}">${sanitize(label)}</span>`;
}

/**
 * Create a stat card HTML element
 * @param {string} label - Stat label
 * @param {string|number} value - Stat value
 * @param {string} note - Note text
 * @param {string} tone - Tone class
 * @returns {string} Stat HTML
 */
export function stat(label, value, note, tone = "") {
  return `
    <div class="stat ${tone}">
      <div class="stat-top"><span>${sanitize(label)}</span><i></i></div>
      <strong>${sanitize(String(value))}</strong>
      <small>${sanitize(note)}</small>
    </div>
  `;
}

/**
 * Create a panel title section
 * @param {string} title - Panel title
 * @param {string} micro - Micro text (optional)
 * @param {string} right - Right-side content (optional)
 * @returns {string} Panel title HTML
 */
export function panelTitle(title, micro = "", right = "") {
  return `
    <div class="panel-title">
      <div>
        ${micro ? `<p class="eyebrow">${sanitize(micro)}</p>` : ""}
        <h3>${sanitize(title)}</h3>
      </div>
      ${right}
    </div>
  `;
}

/**
 * Empty state placeholder
 * @param {string} title - Title text
 * @param {string} copy - Copy text
 * @returns {string} Empty state HTML
 */
export function emptyState(title, copy) {
  return `
    <div class="empty">
      <b>${sanitize(title)}</b>
      <span>${sanitize(copy)}</span>
    </div>
  `;
}

/**
 * Safe render with error boundary
 * @param {Function} renderFn - Render function
 * @returns {string} HTML or error fallback
 */
export function safeRender(renderFn) {
  try {
    return renderFn();
  } catch (e) {
    console.error("Render error:", e);
    return `
      <section class="panel error-state">
        <h2>Error Loading Page</h2>
        <p>Something went wrong. Please refresh and try again.</p>
        <small>${sanitize(e.message)}</small>
      </section>
    `;
  }
}

/**
 * Validate habitat data structure
 * @param {Object} data - Data to validate
 * @returns {boolean} Valid or not
 */
export function validateHabitatData(data) {
  if (!data) return false;
  if (!data.optionAlertPackets || !Array.isArray(data.optionAlertPackets)) return false;
  if (!data.agentPipeline || !Array.isArray(data.agentPipeline)) return false;
  if (!data.riskRules || !Array.isArray(data.riskRules)) return false;
  if (!data.dataSources || !Array.isArray(data.dataSources)) return false;
  return true;
}
