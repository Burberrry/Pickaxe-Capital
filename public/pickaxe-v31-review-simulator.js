(() => {
  const KEY = "pickaxe.v31.qqq.sim";
  const base = () => ({ source: false, silence: false, risk: false, ceo: false, archive: false });
  let fallback = base();

  const esc = (value) => String(value ?? "").replace(/[&<>\"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;",
  }[char]));

  function read() {
    try {
      const raw = window.localStorage && window.localStorage.getItem(KEY);
      return raw ? { ...base(), ...JSON.parse(raw) } : { ...fallback };
    } catch (_error) {
      return { ...fallback };
    }
  }

  function save(next) {
    fallback = { ...base(), ...next };
    try {
      if (window.localStorage) window.localStorage.setItem(KEY, JSON.stringify(fallback));
    } catch (_error) {}
  }

  function cls(done, active) {
    return done ? "done" : active ? "active" : "";
  }

  function btn(action, label, disabled, extra = "") {
    return `<button type="button" class="v31-sim-btn ${extra}" data-v31-sim="${esc(action)}"${disabled ? " disabled" : ""}>${esc(label)}</button>`;
  }

  function render() {
    const anchor = document.querySelector("#v31SignalsDeepDive");
    if (!anchor) return;
    let mount = document.querySelector("#v31ReviewSimulator");
    if (!mount) {
      mount = document.createElement("section");
      mount.id = "v31ReviewSimulator";
      mount.className = "v31-review-simulator";
      anchor.insertAdjacentElement("afterend", mount);
    }
    const s = read();
    const steps = [
      ["01", "Source Check", s.source, !s.source, s.source ? "Checked: source still required" : "Pending Source Ledger"],
      ["02", "Silence Gate", s.silence, s.source && !s.silence, s.silence ? "No Output selected" : "Needs more evidence"],
      ["03", "Risk Gate", s.risk, s.silence && !s.risk, s.risk ? "No-Go recorded" : "Not passed"],
      ["04", "CEO B", s.ceo, s.risk && !s.ceo, s.ceo ? "Review complete" : "Needs review"],
      ["05", "Memory Vault", s.archive, s.ceo && !s.archive, s.archive ? "Lesson archived" : "Waiting"],
    ];
    mount.innerHTML = `
      <p class="v31-sim-kicker">Patch 3 / QQQ Review Simulator / Local Demo</p>
      <h3>Run the Pickaxe Review Ritual</h3>
      <p>This local simulator proves the review sequence. It never changes market data and never allows public output.</p>
      <div class="v31-sim-steps">
        ${steps.map(([num, title, done, active, text]) => `
          <div class="v31-sim-step ${cls(done, active)}"><span>${esc(num)} / ${esc(title)}</span><strong>${esc(text)}</strong></div>
        `).join("")}
      </div>
      <div class="v31-sim-actions">
        ${btn("source", "Run Source Check", s.source)}
        ${btn("silence", "Choose No Output", !s.source || s.silence)}
        ${btn("risk", "Run Risk Review", !s.silence || s.risk)}
        ${btn("ceo", "CEO B Review", !s.risk || s.ceo)}
        ${btn("archive", "Archive Lesson", !s.ceo || s.archive)}
        ${btn("reset", "Reset Demo", false, "reset")}
      </div>
      <p class="v31-sim-note">Public Output: Not Allowed • Demo Data Only • Research Only</p>
    `;
  }

  function apply(action) {
    if (action === "reset") { save(base()); render(); return; }
    const s = read();
    if (action === "source") s.source = true;
    if (action === "silence" && s.source) s.silence = true;
    if (action === "risk" && s.silence) s.risk = true;
    if (action === "ceo" && s.risk) s.ceo = true;
    if (action === "archive" && s.ceo) s.archive = true;
    save(s);
    render();
  }

  document.addEventListener("click", (event) => {
    const target = event.target.closest("[data-v31-sim]");
    if (!target) return;
    event.preventDefault();
    apply(target.getAttribute("data-v31-sim"));
  });

  const schedule = () => window.requestAnimationFrame(render);
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", schedule, { once: true });
  else schedule();
  window.addEventListener("hashchange", schedule);
  window.addEventListener("load", schedule, { once: true });
  window.renderV31ReviewSimulator = render;
})();
