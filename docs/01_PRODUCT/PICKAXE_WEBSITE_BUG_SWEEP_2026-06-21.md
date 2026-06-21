# Pickaxe Capital Website Bug Sweep — 2026-06-21

Status: **PASS / AUDIT COMPLETE — RUNTIME FIXES DEFERRED BY LOCAL BROWSER QA GATE**

## Sprint Boundary

- Sprint: `Pickaxe website bug hunt and highest-ROI micro-polish — usage-bounded sprint`.
- Starting commit: `3301fdd Lock public link policy`.
- Starting branch: clean synchronized `main`, `0` commits ahead of and `0` commits behind `origin/main`.
- Current verified hosted checkpoint: Pickaxe Public Link Policy Lock.
- Current verified GitHub Pages run: `27917685408`.
- Runtime changes were authorized only when a complete local desktop/mobile validation cycle could be finished.
- Push was not authorized.

## Baseline Validation

The complete required validation family passed before the route sweep:

```text
node --run build
node --run check:project
node --run check:phase15
node --run check:agents
node --run check:mirrors
node --run smoke:routes
git diff --check
git status --short --branch
```

Additional baseline confirmations:

- Root/public mirror validation passed for all 15 required pairs.
- Route smoke validation passed for 9 direct routes, 8 hash routes, 4 static assets, and the static/demo health boundary.
- `data/signal-alerts.json` remained unchanged at SHA-256 `a84441288df00557333519fb97c02e1fe745164235241a9aa9a89c1273d4302c`.

## Browser Route Sweep

Because the in-app browser blocked the local `localhost` target under its URL safety policy, the read-only route sweep used the HTTPS GitHub Pages deployment. This was valid for discovery because local `HEAD`, `origin/main`, and the verified hosted checkpoint were synchronized before the sweep. The restriction prevented compliant post-change local browser QA, so no runtime fix was implemented or committed.

Desktop `1280x720` and mobile `390x844` coverage:

- `/`
- `/#/alerts`
- `/app/alerts`
- `/founder`
- `/#/founder`
- `/ceo-b-profile`
- `/#/ceo-b-profile`
- `/#/research`
- `/#/source-hub`
- `/#/archive`
- `/#/learning-ledger`
- `/#/ai-habitat-os`
- `/#/staging`
- `/agents`
- `/#/agents`
- `/vision-map`
- `/#/vision-map`
- `/staging`
- `/jarvis-lab`
- `/life-os`

All 20 route entries:

- loaded the expected nonblank active view;
- produced zero observed console errors;
- had no document-level horizontal overflow;
- displayed one visible Starlight canvas;
- preserved the expected direct-path bridge destination;
- retained relevant research, manual-review, no-advice, no-execution, demo/static, and options-risk language.

Founder same-page Proof of Work navigation was interaction-tested and correctly preserved `#/founder`.

## Confirmed Bugs

### P0

None.

### P1

#### 1. Staging presents an obsolete current hosted checkpoint

The first screen of `/#/staging` and `/staging` currently says:

```text
Active hosted checkpoint: Staging Currentness Refresh
Current Hosted Checkpoint: Staging Currentness Refresh
RUN 27864954632
```

That is factually stale. The verified current checkpoint is:

```text
Pickaxe Public Link Policy Lock
3301fdd
GitHub Pages run 27917685408
PASS / HOSTED DOCS VERIFIED
```

Owner evidence:

- `public/app.js` and `app.js` hardcode the obsolete first-screen checkpoint near the active `renderStagingAdvanced` renderer.
- `public/habitat-data.js` and `habitat-data.js` retain older tracker metadata and do not contain the current Public Link Policy Lock record.

Smallest safe future repair:

- update only the existing Staging current-checkpoint presentation and synchronized tracker metadata;
- preserve the renderer, tracker schema, LocalStorage contract, routes, navigation, and all historical records;
- synchronize root/public mirrors and cache keys as required;
- run the full validation family plus desktop/mobile QA for `/#/staging`, `/staging`, `/`, `/#/alerts`, `/app/alerts`, `/founder`, and `/#/founder`.

#### 2. Important mobile route actions are below the 44px target minimum

Confirmed computed heights at `390x844` include:

- Founder primary and secondary calls to action: approximately `39px`.
- Alerts `Open Archive` and `Open Learning Ledger`: `40px`.
- AI Habitat OS route/action links: approximately `29px`.
- Agent Habitat system/action links: approximately `27px` to `29px`.
- Life OS `Open Jarvis Lab`: approximately `39px`.

The highest-value subset is the public Founder action group, followed by the Alerts Archive/Learning actions. Inline source links and dense diagnostic tables should not be broadened into a global button rewrite.

Smallest safe future repair:

- use route-scoped mobile CSS only;
- apply `min-height: 44px` to confirmed primary/action controls;
- do not alter shared navigation ownership or global link styling;
- validate focus, wrapping, overflow, and destinations at desktop and `390x844`.

#### 3. Mobile content starts below an approximately 469px shared navigation block

Every audited mobile route began its main content near `469px`. This creates substantial first-screen travel, especially on the public Founder route.

This was not fixed because the sprint explicitly blocks navigation changes unless navigation is unusable and the repair is tiny and isolated. The sweep did not establish a safe route-scoped correction that would preserve the shared shell and locked navigation behavior.

### P2

No additional P2 polish was selected. Confirmed P1 factual correctness and mobile usability defects outrank decorative work.

## Fixes Implemented

None.

Runtime fixes were intentionally deferred because the local browser target was blocked and the sprint requires post-change desktop/mobile browser QA before committing runtime work. The hosted site could be audited but could not validate an unpushed local change. Push remained unauthorized.

## Files Changed

- `docs/01_PRODUCT/PICKAXE_WEBSITE_BUG_SWEEP_2026-06-21.md`

No JavaScript, CSS, HTML, route, bridge, renderer, tracker runtime data, LocalStorage contract, Starlight behavior, packet model, review queue, signal data, provider, workflow, or asset changed.

## Locked Truth Confirmations

- `/` remains the operational Alerts / Research OS entry.
- `/#/alerts` remains the canonical Alerts hash route.
- `/app/alerts` still bridges to `#/alerts`.
- `/founder` and `/#/founder` remain the public Founder front door.
- `/ai-handoff` remains local-only and was not converted into a public bridge.
- Routes, navigation, bridges, Starlight, LocalStorage contracts, packet models, review queues, Archive contracts, Learning Ledger contracts, and signal data remain unchanged.
- `data/signal-alerts.json` remains unchanged.

## Recommended Next Bounded Sprint

Authorize `Repair Staging current hosted checkpoint — existing renderer and tracker metadata only`.

Limit the sprint to the current Staging checkpoint fields in the existing active renderer, synchronized tracker metadata, required root/public mirrors, cache keys if needed, status records, the full automated validation family, and local desktop/mobile browser QA. Do not combine it with navigation work or the mobile tap-target batch.

After that repair is independently validated and committed, authorize a separate `Polish public Founder mobile action targets — route-scoped CSS only` sprint.
