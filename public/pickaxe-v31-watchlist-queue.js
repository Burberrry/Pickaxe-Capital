(() => {
  const KEY = "pickaxe.v31.watchlist.selected";
  const WATCHLIST = [
    ["SPY", "Index structure", "Market breadth", "Source + risk review"],
    ["QQQ", "Growth leadership", "AI / mega-cap tech", "Golden-path demo"],
    ["TSLA", "Event risk", "Volatility / catalysts", "Options context required"],
    ["NVDA", "AI leadership", "Crowding / momentum", "Source quality required"],
    ["AAPL", "Mega-cap quality", "Consumer tech", "Theme verification"],
    ["MSFT", "AI cloud", "Enterprise software", "Trend confirmation"],
    ["DXY", "Dollar pressure", "Macro liquidity", "Macro source required"],
    ["VIX", "Volatility regime", "Risk temperature", "Regime verification"],
    ["BTC", "Crypto liquidity", "Risk-on proxy", "Compliance review"],
  ];

  const esc = (value) => String(value ?? "").replace(/[&<>\"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;",
  }[char]));

  function getSelected() {
    try { return window.localStorage && window.localStorage.getItem(KEY) || "QQQ"; }
    catch (_error) { return "QQQ"; }
  }

  function setSelected(symbol) {
    try { if (window.localStorage) window.localStorage.setItem(KEY, symbol); }
    catch (_error) {}
  }

  function card([symbol, role, theme, gate], selected) {
    return `
      <article class="v31-watch-card ${selected === symbol ? "selected" : ""}">
        <span>${esc(role)}</span>
        <strong>${esc(symbol)}</strong>
        <p>${esc(theme)}</p>
        <div class="v31-watch-chip-row">
          <span class="v31-watch-chip">Demo Data</span>
          <span class="v31-watch-chip">${esc(gate)}</span>
          <span class="v31-watch-chip">No Output Until Gates Pass</span>
        </div>
        <button type="button" class="v31-watch-btn" data-v31-watch-symbol="${esc(symbol)}">Load Candidate</button>
      </article>
    `;
  }

  function render() {
    const anchor = document.querySelector("#v31ReviewSimulator") || document.querySelector("#v31SignalsDeepDive");
    if (!anchor) return;
    let mount = document.querySelector("#v31WatchlistQueue");
    if (!mount) {
      mount = document.createElement("section");
      mount.id = "v31WatchlistQueue";
      mount.className = "v31-watchlist-queue";
      anchor.insertAdjacentElement("afterend", mount);
    }

    const selected = getSelected();
    const match = WATCHLIST.find(([symbol]) => symbol === selected) || WATCHLIST[1];
    mount.innerHTML = `
      <div class="v31-watch-head">
        <div>
          <p class="v31-watch-kicker">Patch 4 / Watchlist Review Queue / Demo Universe</p>
          <h3>Watchlist Becomes the Pipeline</h3>
          <p>QQQ is the golden-path test case. The watchlist is the broader research universe. Every symbol stays blocked until Source Ledger, Silence Gate, Risk Gate, and CEO B Standard are complete.</p>
        </div>
        <div class="v31-watch-state">
          <p class="v31-watch-kicker">Current Candidate</p>
          <strong>${esc(match[0])}</strong>
          <p>${esc(match[1])} • ${esc(match[2])} • Public Output: Not Allowed</p>
        </div>
      </div>
      <div class="v31-watch-grid">
        ${WATCHLIST.map((item) => card(item, selected)).join("")}
      </div>
      <p class="v31-watch-note">No prices. No fake timestamps. No trade execution. Watchlist candidates are research objects only.</p>
    `;
  }

  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-v31-watch-symbol]");
    if (!button) return;
    event.preventDefault();
    setSelected(button.getAttribute("data-v31-watch-symbol"));
    render();
  });

  const schedule = () => window.requestAnimationFrame(render);
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", schedule, { once: true });
  else schedule();
  window.addEventListener("hashchange", schedule);
  window.addEventListener("load", schedule, { once: true });
  window.renderV31WatchlistQueue = render;
})();
