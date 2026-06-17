(() => {
  const KEY = "pickaxe.v31.watchlist.selected";
  const WATCH = {
    SPY: ["Index structure", "Market breadth", "Source and risk review required"],
    QQQ: ["Growth leadership", "AI and mega-cap tech", "Golden-path demo"],
    TSLA: ["Event risk", "Volatility and catalysts", "Options context required"],
    NVDA: ["AI leadership", "Crowding and momentum", "Source quality required"],
    AAPL: ["Mega-cap quality", "Consumer tech", "Theme verification required"],
    MSFT: ["AI cloud", "Enterprise software", "Trend confirmation required"],
    DXY: ["Dollar pressure", "Macro liquidity", "Macro source required"],
    VIX: ["Volatility regime", "Risk temperature", "Regime verification required"],
    BTC: ["Crypto liquidity", "Risk-on proxy", "Compliance review required"],
  };

  const esc = (value) => String(value ?? "").replace(/[&<>\"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;",
  }[char]));

  function selected() {
    try {
      const value = window.localStorage && window.localStorage.getItem(KEY);
      return WATCH[value] ? value : "QQQ";
    } catch (_error) {
      return "QQQ";
    }
  }

  function panel(symbol) {
    const [role, theme, gate] = WATCH[symbol] || WATCH.QQQ;
    return `
      <div class="v31-selected-candidate">
        <div>
          <span>Selected Candidate</span>
          <strong>${esc(symbol)}</strong>
          <p>${esc(role)} • ${esc(theme)} • ${esc(gate)}</p>
        </div>
        <div class="v31-selected-warning">Public Output: Not Allowed</div>
      </div>
    `;
  }

  function paintInto(container, id, symbol) {
    if (!container) return;
    let node = container.querySelector(`#${id}`);
    if (!node) {
      node = document.createElement("div");
      node.id = id;
      const title = container.querySelector(".v31-title-row, .v31-deep-title");
      if (title) title.insertAdjacentElement("afterend", node);
      else container.insertAdjacentElement("afterbegin", node);
    }
    node.innerHTML = panel(symbol);
  }

  function render() {
    const symbol = selected();
    paintInto(document.querySelector("#v31MissionControlAlerts"), "v31SelectedCandidateAlerts", symbol);
    paintInto(document.querySelector("#v31MissionControlDashboard"), "v31SelectedCandidateDashboard", symbol);
    paintInto(document.querySelector("#v31MissionControlCommand"), "v31SelectedCandidateCommand", symbol);
    paintInto(document.querySelector("#v31SignalsDeepDive"), "v31SelectedCandidateDeep", symbol);
    const pageTitle = document.querySelector("#pageTitle");
    if (pageTitle && window.location.hash === "#/alerts") pageTitle.textContent = `${symbol} Watchlist Review`;
  }

  document.addEventListener("click", (event) => {
    if (!event.target.closest("[data-v31-watch-symbol]")) return;
    window.setTimeout(render, 0);
  });

  const schedule = () => window.requestAnimationFrame(render);
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", schedule, { once: true });
  else schedule();
  window.addEventListener("hashchange", schedule);
  window.addEventListener("load", schedule, { once: true });
  window.renderV31CandidateSync = render;
})();
