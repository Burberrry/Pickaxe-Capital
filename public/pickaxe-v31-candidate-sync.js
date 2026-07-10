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

/* Pickaxe Starlight Field V2 — luxury living sky, one global canvas. */
(() => {
  if (window.__pickaxeStarlightV2) return;

  const canvas = document.getElementById("pickaxe-starlight-field");
  if (!(canvas instanceof HTMLCanvasElement)) return;

  const ctx = canvas.getContext("2d", { alpha: true });
  if (!ctx) return;

  window.__pickaxeStarlightV2 = true;

  const styleId = "pickaxe-starlight-v2-styles";
  if (!document.getElementById(styleId)) {
    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = `
      body {
        position: relative;
        isolation: isolate;
        overflow-x: hidden;
        background:
          radial-gradient(circle at 18% 8%, rgba(201, 168, 106, 0.055), transparent 29%),
          radial-gradient(circle at 84% 16%, rgba(216, 222, 229, 0.035), transparent 25%),
          linear-gradient(180deg, #05070a 0%, #080b10 48%, #050608 100%) !important;
      }
      .pickaxe-starlight-field {
        position: fixed;
        inset: 0;
        z-index: 0;
        display: block;
        width: 100vw;
        height: 100vh;
        pointer-events: none;
        opacity: 0.9;
      }
      .shell {
        position: relative;
        z-index: 1;
      }
      @media (prefers-reduced-motion: reduce) {
        .pickaxe-starlight-field { opacity: 0.72; }
      }
    `;
    document.head.appendChild(style);
  }

  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const FRAME_INTERVAL = 1000 / 30;
  const MAX_DPR = 1.5;
  const TAU = Math.PI * 2;
  const STAR_COLORS = [
    [243, 239, 230],
    [216, 222, 229],
    [201, 168, 106],
    [255, 248, 230],
  ];

  let width = 0;
  let height = 0;
  let dpr = 1;
  let stars = [];
  let shootingTracks = [];
  let trackOrder = [];
  let trackCursor = 0;
  let activeShot = null;
  let nextShotAt = 0;
  let animationFrame = 0;
  let resizeFrame = 0;
  let lastDrawAt = 0;

  const randomBetween = (min, max) => min + Math.random() * (max - min);
  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

  function gaussian() {
    let u = 0;
    let v = 0;
    while (u === 0) u = Math.random();
    while (v === 0) v = Math.random();
    return Math.sqrt(-2 * Math.log(u)) * Math.cos(TAU * v);
  }

  function weightedColor() {
    const roll = Math.random();
    if (roll < 0.62) return STAR_COLORS[0];
    if (roll < 0.84) return STAR_COLORS[1];
    if (roll < 0.96) return STAR_COLORS[2];
    return STAR_COLORS[3];
  }

  function buildStars() {
    const area = width * height;
    const target = width < 700
      ? clamp(Math.round(area / 1450), 170, 280)
      : clamp(Math.round(area / 1800), 420, 1040);

    const clusters = Array.from({ length: 5 }, () => ({
      x: randomBetween(0.08, 0.92),
      y: randomBetween(0.06, 0.94),
      spreadX: randomBetween(0.09, 0.22),
      spreadY: randomBetween(0.08, 0.18),
    }));

    stars = Array.from({ length: target }, () => {
      let x = Math.random();
      let y = Math.random();

      if (Math.random() < 0.34) {
        const cluster = clusters[Math.floor(Math.random() * clusters.length)];
        x = clamp(cluster.x + gaussian() * cluster.spreadX, 0.01, 0.99);
        y = clamp(cluster.y + gaussian() * cluster.spreadY, 0.01, 0.99);
      }

      const depthRoll = Math.random();
      const depth = depthRoll < 0.6 ? 0 : depthRoll < 0.9 ? 1 : 2;
      const radius = depth === 0
        ? randomBetween(0.28, 0.62)
        : depth === 1
          ? randomBetween(0.55, 1.05)
          : randomBetween(0.9, 1.65);
      const baseAlpha = depth === 0
        ? randomBetween(0.18, 0.42)
        : depth === 1
          ? randomBetween(0.34, 0.68)
          : randomBetween(0.52, 0.9);
      const twinkle = depth === 0
        ? randomBetween(0.012, 0.035)
        : depth === 1
          ? randomBetween(0.025, 0.065)
          : randomBetween(0.04, 0.1);

      return {
        x,
        y,
        radius,
        baseAlpha,
        twinkle,
        phase: randomBetween(0, TAU),
        speed: randomBetween(0.00035, 0.0011),
        color: weightedColor(),
        halo: depth === 2 && Math.random() < 0.16,
      };
    });
  }

  function buildShootingTracks() {
    shootingTracks = Array.from({ length: 8 }, (_, index) => {
      const direction = index % 3 === 0 ? -1 : 1;
      const angle = direction === 1
        ? randomBetween(0.26, 0.58)
        : randomBetween(Math.PI - 0.58, Math.PI - 0.26);
      const length = randomBetween(Math.min(width, height) * 0.16, Math.min(width, height) * 0.34);
      const startX = direction === 1
        ? randomBetween(-width * 0.06, width * 0.82)
        : randomBetween(width * 0.18, width * 1.06);
      const startY = randomBetween(height * 0.05, height * 0.72);

      return {
        startX,
        startY,
        angle,
        length,
        tail: randomBetween(68, 128),
        duration: randomBetween(900, 1320),
      };
    });

    trackOrder = shootingTracks.map((_, index) => index);
    for (let i = trackOrder.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [trackOrder[i], trackOrder[j]] = [trackOrder[j], trackOrder[i]];
    }
    trackCursor = 0;
  }

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
    width = Math.max(1, window.innerWidth);
    height = Math.max(1, window.innerHeight);

    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    buildStars();
    buildShootingTracks();
    activeShot = null;
    nextShotAt = performance.now() + randomBetween(6500, 12000);
    draw(performance.now(), true);
  }

  function drawStar(star, now, isStatic) {
    const [r, g, b] = star.color;
    const pulse = isStatic ? 0 : Math.sin(now * star.speed + star.phase) * star.twinkle;
    const alpha = clamp(star.baseAlpha + pulse, 0.06, 0.96);
    const x = star.x * width;
    const y = star.y * height;

    if (star.halo) {
      const glow = ctx.createRadialGradient(x, y, 0, x, y, star.radius * 5.5);
      glow.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${alpha * 0.42})`);
      glow.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(x, y, star.radius * 5.5, 0, TAU);
      ctx.fill();
    }

    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
    ctx.beginPath();
    ctx.arc(x, y, star.radius, 0, TAU);
    ctx.fill();
  }

  function startShootingStar(now) {
    if (motionQuery.matches || !shootingTracks.length) return;

    if (trackCursor >= trackOrder.length) {
      buildShootingTracks();
    }

    const track = shootingTracks[trackOrder[trackCursor]];
    trackCursor += 1;
    activeShot = { ...track, startedAt: now };
  }

  function drawShootingStar(now) {
    if (!activeShot) return;

    const elapsed = now - activeShot.startedAt;
    const progress = elapsed / activeShot.duration;
    if (progress >= 1) {
      activeShot = null;
      nextShotAt = now + randomBetween(15000, 29000);
      return;
    }

    const eased = 1 - Math.pow(1 - progress, 2);
    const fade = Math.sin(Math.PI * progress);
    const dx = Math.cos(activeShot.angle);
    const dy = Math.sin(activeShot.angle);
    const headX = activeShot.startX + dx * activeShot.length * eased;
    const headY = activeShot.startY + dy * activeShot.length * eased;
    const tailX = headX - dx * activeShot.tail;
    const tailY = headY - dy * activeShot.tail;

    const gradient = ctx.createLinearGradient(tailX, tailY, headX, headY);
    gradient.addColorStop(0, "rgba(255, 248, 230, 0)");
    gradient.addColorStop(0.68, `rgba(216, 222, 229, ${0.34 * fade})`);
    gradient.addColorStop(1, `rgba(255, 248, 230, ${0.92 * fade})`);

    ctx.save();
    ctx.lineCap = "round";
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 1.25;
    ctx.shadowColor = `rgba(255, 248, 230, ${0.7 * fade})`;
    ctx.shadowBlur = 11;
    ctx.beginPath();
    ctx.moveTo(tailX, tailY);
    ctx.lineTo(headX, headY);
    ctx.stroke();

    ctx.fillStyle = `rgba(255, 248, 230, ${fade})`;
    ctx.beginPath();
    ctx.arc(headX, headY, 1.45, 0, TAU);
    ctx.fill();
    ctx.restore();
  }

  function draw(now, isStatic = false) {
    ctx.clearRect(0, 0, width, height);
    for (const star of stars) drawStar(star, now, isStatic);

    if (!isStatic && !motionQuery.matches) {
      if (!activeShot && now >= nextShotAt) startShootingStar(now);
      drawShootingStar(now);
    }
  }

  function animate(now) {
    animationFrame = window.requestAnimationFrame(animate);
    if (now - lastDrawAt < FRAME_INTERVAL) return;
    lastDrawAt = now;
    draw(now, false);
  }

  function stopAnimation() {
    if (!animationFrame) return;
    window.cancelAnimationFrame(animationFrame);
    animationFrame = 0;
  }

  function startAnimation() {
    stopAnimation();
    if (document.hidden || motionQuery.matches) {
      draw(performance.now(), true);
      return;
    }
    lastDrawAt = 0;
    animationFrame = window.requestAnimationFrame(animate);
  }

  function scheduleResize() {
    if (resizeFrame) window.cancelAnimationFrame(resizeFrame);
    resizeFrame = window.requestAnimationFrame(() => {
      resizeFrame = 0;
      resize();
      startAnimation();
    });
  }

  window.addEventListener("resize", scheduleResize, { passive: true });
  document.addEventListener("visibilitychange", startAnimation);
  if (typeof motionQuery.addEventListener === "function") {
    motionQuery.addEventListener("change", startAnimation);
  } else if (typeof motionQuery.addListener === "function") {
    motionQuery.addListener(startAnimation);
  }

  resize();
  startAnimation();
})();
