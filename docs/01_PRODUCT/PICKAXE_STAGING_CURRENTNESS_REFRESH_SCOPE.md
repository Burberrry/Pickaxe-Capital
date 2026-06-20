# Pickaxe Staging Currentness Refresh Scope

Status: Planning-only implementation scope. No runtime change is authorized by this document alone.

Date: 2026-06-20.

Authority: CEO B.

## 1. Objective

Refresh the existing `#/staging` owner route so its first command layer accurately distinguishes:

- the current hosted production baseline;
- the latest validated local checkpoint;
- the local commits waiting for separate push authorization;
- the exact next CEO B decision.

This is a build-truth correction, not a Staging redesign and not a new product feature.

## 2. Why This Matters Now

The active Staging renderer still presents:

- `Route-by-route Visual QA Polish` as the active checkpoint;
- commits `eb57392` and `6adeedf`;
- GitHub Pages runs `27754364622` and `27794662992`;
- `main / origin/main` as if local and remote are synchronized;
- `Staging QA polish · Built / Local Pass` as the latest local session.

Current repository truth is:

- Hosted runtime: `e7df530` (`Implement Finance Terminal static research panel`).
- Hosted deployment: GitHub Pages run `27811973984`, successful validation/build and deploy.
- Local documentation record: `993b622` (`Record Finance Terminal hosted verification`).
- Local product-coherence audit: `c754edc` (`Audit Pickaxe product coherence`).
- Local V3.1 contrast repair: `e7aeace` (`Restore V3.1 dark panel contrast`).
- Local Staging scope: `d8d6685` (`Define Staging currentness refresh scope`).
- Pre-implementation branch state: local `main` is four commits ahead of `origin/main`.
- The V3.1 contrast repair is validated locally but is not hosted.

Staging owns release and build truth. Presenting old state weakens CEO B decision quality and auditability.

## 3. Owner Route And Renderer

- Owner route: `#/staging`.
- Direct-path bridge: `/staging` -> `#/staging`.
- Active renderer: final `renderStagingAdvanced = function ()` assignment in `public/app.js`.
- Root mirror: `app.js`.

Do not edit an earlier bootstrap-reachable Staging declaration.

## 4. Exact Runtime Scope

Update only the current Staging presentation and Build Completion Tracker metadata needed to show:

### First command layer

1. **Current Local Checkpoint**
   - `Staging Currentness Refresh`
   - `PASS / LOCAL`
   - scope commit `d8d6685`
   - prior runtime fix `e7aeace`
   - automated and browser QA required
   - not pushed / not hosted

2. **Current Hosted Baseline**
   - `Finance Terminal Static / Manual Research Panel`
   - `PASS / HOSTED`
   - implementation commit `e7df530`
   - GitHub Pages run `27811973984`
   - validation/build and deploy succeeded

3. **Local Commit Stack**
   - `993b622` — hosted Finance Terminal record
   - `c754edc` — product-coherence audit
   - `e7aeace` — V3.1 contrast restoration
   - `d8d6685` — Staging currentness scope
   - current Staging implementation — local only
   - do not describe these commits as hosted

4. **Next CEO B Decision**
   - authorize one bounded push and hosted-verification sprint for the expected local commit series;
   - or keep the local lock;
   - no product, navigation, provider, Options Hub, storage, or workflow work is implied.

### Locked checkpoint board

Add concise current entries for:

- Finance Terminal static/manual panel — Passed / Hosted.
- Product Coherence Audit — Passed / Docs-Only.
- V3.1 Contrast Restoration — Passed / Local, pending deployment.

Preserve all existing locked Phase 7, Phase 8, V3.1, Phase 9A, Phase 9B, bridge, and safety truth.

### Build Completion Tracker metadata

Add or update only the minimal top-level records needed for:

- Finance Terminal hosted verification;
- Product Coherence Audit;
- V3.1 contrast restoration;
- the latest local session and next recommended action.

Do not rewrite historical tracker entries.

## 5. Required Truth Labels

Use exact state distinctions:

- `PASS / HOSTED`
- `PASS / LOCAL`
- `NOT PUSHED`
- `HOSTED BASELINE`
- `LOCAL COMMITS PENDING AUTHORIZATION`
- `CEO B REVIEW REQUIRED`

Never label the contrast repair or the two documentation commits as hosted until deployment and hosted QA actually pass.

## 6. Allowed Files For A Future Implementation

- `public/app.js`
- `app.js`
- `public/habitat-data.js`
- `habitat-data.js`
- `public/index.html`
- `index.html`
- `PROJECT_STATUS.md`
- `NEXT_STEPS.md`

HTML changes are cache-key updates only if required.

## 7. Forbidden Files And Behavior

Do not change:

- `public/styles.css` or `styles.css` unless a confirmed Staging-only presentation defect requires a separately approved amendment;
- any V3.1 JavaScript or CSS;
- any route, bridge, renderer owner, navigation item, or direct-path destination;
- any LocalStorage key, backup/restore boundary, tracker editor behavior, or recovery behavior;
- Research Packet, Options Alerts, Source Hub, Archive, Learning Ledger, Watchlists, Agents, or Finance Terminal behavior;
- Starlight initialization or motion;
- `data/signal-alerts.json`;
- provider, scraping, authentication, payment, subscription, broker, publishing, or performance scope.

## 8. Acceptance Criteria

- `#/staging` and `/staging` show the correct canonical Staging view.
- The first command layer distinguishes hosted baseline from local pending state in under 10 seconds.
- Commit IDs, run ID, and deployment labels match actual git and GitHub Pages evidence.
- The page avoids self-invalidating static claims about its own final commit hash or permanent branch-ahead count.
- No local-only commit is labeled hosted.
- Existing tracker, editing, backup, restore, recovery, diagnostics, and details controls remain present and functional.
- Required safety language remains visible.
- One Starlight field remains.
- Zero console errors.
- No document-level horizontal overflow.
- Desktop `1280x720` and mobile `390x844` pass.
- Regression checks pass for `/`, `#/alerts`, `/app/alerts`, `#/research`, and `#/staging`.

## 9. Validation

```text
node --run build
node --run check:project
node --run check:phase15
node --run check:agents
node --run check:mirrors
node --run smoke:routes
node --check app.js
node --check public/app.js
node --check habitat-data.js
node --check public/habitat-data.js
git diff --check
git status --short --branch
```

Browser QA is required because the future implementation changes visible route content.

## 10. Definition Of Done

The existing Staging route accurately communicates current hosted truth, current local truth, and the next CEO B decision without changing product behavior or implying that unpushed work is deployed.

## 11. Stop Condition

Stop if implementation requires a style redesign, new route, new renderer, new storage key, tracker-schema change, workflow change, or edits outside the allowed files.

Do not push as part of the implementation sprint unless push authority is separately explicit.

## 12. Implementation Follow-Up

The bounded implementation was started from scope commit `d8d6685`.

- The final active Staging renderer now distinguishes the hosted Finance Terminal baseline from the validated local series.
- The first command layer identifies the current Staging refresh as `PASS / LOCAL` and `NOT PUSHED`.
- Stable named checkpoints replace the self-invalidating permanent branch-count requirement.
- Current tracker metadata was updated without changing tracker schema, editing, backup/restore, recovery, or diagnostics behavior.
- Existing browser-saved tracker state remains untouched; refreshed defaults apply to clean/reset state.
- Desktop `1280x720` and mobile `390x844` QA passed for `#/staging`, `/staging`, and required regression routes with one Starlight field, zero console errors, and no document-level horizontal overflow.
- Existing tracker and backup/import/reset controls remained present, and the four first-layer Staging actions measured 46px high at desktop and mobile.
- Push and hosted verification remain separately authorized.
