# Pickaxe Public Homepage Copy Simplification Runtime Scope

Status: Docs-only implementation scope.
Date: 2026-06-21.
Authority: CEO B.
Runtime authority: None.
Source of truth: `docs/01_PRODUCT/PICKAXE_PUBLIC_HOMEPAGE_COPY_SIMPLIFICATION_SCOPE.md`.

## 1. Implementation Goal

The future runtime sprint should simplify the public Pickaxe Capital front door so a first-time visitor can understand the company, its research method, its boundaries, and the path into the internal research OS without encountering the full internal system first.

The implementation must preserve the working AI Habitat OS and every locked research workflow. It should change only the existing public-facing copy and structure on one already-owned public route. It must not redesign the application shell, reassign the homepage, create a route, duplicate a renderer, change navigation, or alter research behavior.

The implementation target is a concise public company introduction, not a product rebuild:

- Pickaxe Capital remains the public brand.
- AI Habitat OS remains the internal operating-system layer.
- CEO B remains the final manual review and decision layer.
- Founder B remains a separately governed human founder layer.
- All current capabilities remain static/manual unless explicitly labeled otherwise.
- Alerts, research, source, risk, archive, and learning workflows remain unchanged.

This document is an implementation plan only. It does not authorize runtime edits.

## 2. Owner Route Decision

### Current Route Truth

The current runtime has two distinct owners:

- `/` and `#/alerts` are owned by `renderAlertsPage()` -> `renderResearchGatedAlertsDesk()`. They are the canonical Alerts Desk and CEO B research review queue.
- `#/founder` and `/founder` are owned by the public mode of `renderFounderProfile()`, which calls the single existing `renderFounderLandingPage()` renderer.

The direct `/founder` path already has synchronized root/public bridge files that forward to `#/founder`. The Founder route already contains public product positioning, proof of work, static access concepts, compliance copy, and links into the internal OS. It is therefore the repository's clean existing public-owner surface.

### Required Decision

Preserve `/` and `#/alerts` as the Alerts Desk.

Do not silently convert `/` into a marketing homepage. Do not replace, wrap, split, or duplicate the canonical Alerts renderer. Do not alter the `/app/alerts` bridge.

Use `#/founder` and `/founder` as the simplified Pickaxe Capital public front door for the first runtime implementation. Refine the existing `renderFounderLandingPage()` output in place.

### Lowest-Risk Implementation Path

The lowest-risk path is:

1. keep all route resolution unchanged;
2. keep all navigation unchanged;
3. keep the `founder` view and `founderMode === "public"` contract unchanged;
4. rewrite only the markup returned by the existing `renderFounderLandingPage()` function;
5. retain the existing Proof of Work data and carousel behavior;
6. add or refine only route-scoped Founder landing styles;
7. update synchronized root/public mirrors and HTML cache keys only as required;
8. perform broad route regression QA because shared app and style files are involved.

This path creates no new owner, no route ambiguity, and no collision with Alerts.

## 3. Public Front Door Options

### Option A — Simplify The Existing Public Founder Route Only

**Implementation surface**

Refine the current `#/founder` and `/founder` presentation through `renderFounderLandingPage()`.

**Benefits**

- Uses an existing public route and renderer.
- Preserves `/` and `#/alerts` exactly.
- Preserves the `/founder` direct-path bridge.
- Requires no new navigation, route, container, or page concept.
- Reuses the current public landing styles and Proof of Work carousel.
- Keeps Founder B and CEO B route modes technically separate.
- Has the smallest implementation and regression surface.

**Risks**

- The repository root still opens Alerts rather than the public front door.
- Visitors must receive or select the `/founder` URL to see the simplified introduction.
- The route label “Founder” may remain narrower than the broader company content unless a later navigation audit is approved.

**Route impact**

None. Existing route ownership and bridge behavior remain intact.

**User confusion risk**

Low to moderate. The public route will explain Pickaxe Capital clearly, but `/` will continue to open Alerts. This tradeoff is explicit and safer than silently changing the root owner.

**Compliance risk**

Low. The route is already public-facing and already contains visible research and execution boundaries. The implementation should remove speculative access/pricing clutter and strengthen the canonical compliance line.

**QA burden**

Moderate. Full Founder route QA plus regression checks on Alerts and the internal operating spine are required because shared JavaScript and CSS mirror files change.

### Option B — Create A Lightweight Public Landing Section While Preserving `/` And `#/alerts` As Alerts

**Implementation surface**

Add a public introduction above or around the existing Alerts Desk, or conditionally show different top content depending on whether the same Alerts owner was reached through `/` or `#/alerts`.

**Benefits**

- Gives root visitors some public context.
- Could preserve the Alerts queue below the introductory section.
- Avoids moving the Alerts hash route.

**Risks**

- Mixes the public company front door with the internal CEO B review desk.
- Makes one renderer responsible for two audiences.
- Can create duplicate hero, compliance, proof, or CTA concepts.
- Risks shifting the locked detailed Signals card and Alerts hierarchy.
- Conditional root-versus-hash behavior adds routing and testing complexity.
- Increases first-load length and mobile navigation delay.

**Route impact**

No nominal route change, but the canonical Alerts owner and first impression would change materially.

**User confusion risk**

High. A public visitor could interpret static/manual research packets as a live customer signal product, while an internal operator must pass through marketing copy to reach the review queue.

**Compliance risk**

Moderate to high. Public positioning and internal candidate states would appear on one surface, increasing the burden to distinguish verified gates from pending packets and demo/static data.

**QA burden**

High. Requires full Alerts/V3.1 placement, selected-candidate, queue, interaction, mobile hierarchy, and route-alias regression QA in addition to public-copy QA.

### Option C — Reassign `/` To A Public Homepage And Keep Alerts At `#/alerts` Only

**Implementation surface**

Change route resolution so the bare root renders a distinct public homepage while `#/alerts` remains the Alerts owner.

**Benefits**

- Produces the clearest conventional public website experience.
- Separates public company communication from internal research operations.
- Aligns with the long-term two-world website blueprint.

**Risks**

- Changes a locked route owner.
- Requires route branching or a new public renderer/container.
- Changes current navigation and active-route assumptions.
- Can break root aliases, direct entry behavior, cache behavior, and existing links.
- Expands into public-shell versus internal-shell architecture.

**Route impact**

High. `/` would no longer be the canonical Alerts homepage.

**User confusion risk**

Moderate during migration because existing users and links currently expect Alerts at root.

**Compliance risk**

Moderate. The public/internal separation is cleaner after completion, but the migration must not weaken Alerts disclosures or imply new public access.

**QA burden**

Very high. Requires a separately authorized route-ownership, renderer, shell, navigation, direct-path, desktop/mobile, and hosted-regression sprint.

### Recommendation

Choose **Option A**.

Option A is the only option that delivers the approved public copy direction without changing a locked route owner or combining public marketing with the Alerts review queue. Option C may remain a later strategic target, but it requires a separate CEO B route-ownership and public-shell authorization. Option B should not be used as an interim shortcut because it increases ambiguity and risk on the flagship Alerts surface.

## 4. Recommended Future Runtime Implementation

### Route And Renderer

Owner routes:

- `#/founder`
- `/founder`

Active owner:

- `renderFounderProfile()` when `state.founderMode === "public"`
- existing `renderFounderLandingPage()` markup only

Do not change:

- `openRequestedView()`;
- `setView()`;
- `state.founderMode`;
- route aliases;
- direct-path bridge files;
- the Founder/CEO B shared container contract;
- `renderFounderProfile()` command-profile behavior;
- `renderAlertsPage()` or any Alerts renderer.

### Exact Implementation Shape

Replace the current long public Founder landing output with one concise nine-section Pickaxe Capital front door:

1. Hero
2. Problem
3. Solution
4. Operating Loop
5. What Pickaxe Does
6. What Pickaxe Does Not Do
7. Proof of Work
8. Private Access / Founder-Led Build
9. Final CTA

Reuse:

- the existing `.founder-landing-page` injection point;
- the existing `.access-page-shell` route-scoped style family where useful;
- the existing `proofOfWorkCards` data;
- `renderProofOfWorkCards()`;
- Proof of Work carousel controls and `window.moveProofOfWorkCarousel`;
- the current official logo already provided by the shared shell if it remains visible without asset edits;
- current Starlight behavior.

Remove from the public first-door output:

- the three access/pricing tier cards;
- pricing language such as `Pricing under review`;
- the static name/email/role access-request form;
- local “prepare request” interaction;
- the long private module inventory;
- the future research-generator inventory;
- speculative access products;
- repeated internal route lists;
- copy that describes planned capabilities as current product access.

The underlying helper may remain if it is used elsewhere, but no new access interaction should be added. Remove a now-unused helper only if the future sprint confirms it has no references and the removal stays within the approved Founder implementation scope.

### CTA Behavior

Use only existing safe destinations:

- **Enter Research OS** -> `#/alerts`
- **View Founder Proof of Work** -> same-page `#proofOfWorkTitle`
- **Review System Status** -> `#/staging`
- **Request Private Access** -> same-page `#privateAccess`

The Private Access section must be informational only. The CTA may scroll to the static section, but it must not submit, store, transmit, email, authenticate, create an account, join a list, or imply that a request was received.

No CTA may:

- create a new route;
- change navigation;
- write LocalStorage;
- invoke a provider;
- open a checkout;
- send a message;
- create an entitlement;
- execute or publish research.

### Static / Manual Truth

The public front door must state that:

- current research experiences are static/manual;
- no live market provider is connected;
- no brokerage or execution is connected;
- no request or access workflow is connected;
- CEO B review is manual;
- source verification is a gate, not a blanket state for every item;
- Proof of Work represents verified build milestones, not investment performance.

### Files Expected In The Future Runtime Sprint

The smallest expected runtime implementation should touch:

- `public/app.js` and `app.js` — `renderFounderLandingPage()` only, plus deletion of any confirmed route-local dead helper;
- `public/styles.css` and `styles.css` — Founder landing route-scoped styles only;
- `public/index.html` and `index.html` — cache keys only;
- `PROJECT_STATUS.md`;
- `NEXT_STEPS.md`.

Build Completion Tracker metadata should be omitted unless CEO B explicitly includes it in that implementation authorization.

## 5. Future Homepage Structure

### A. Hero

Purpose: identify Pickaxe Capital and explain the company in one sentence.

Required content:

- `Pickaxe Capital` brand label;
- approved headline;
- approved subheadline;
- four trust badges;
- primary **Enter Research OS** action;
- secondary **View Founder Proof of Work** action;
- visible static/manual context.

The hero must not contain pricing, module inventories, live dashboards, generated market numbers, or a private-access form.

### B. Problem

Purpose: explain fragmented market research.

Use the approved heading:

`Markets move faster than fragmented tools can explain.`

Explain that charts, filings, news, options flow, watchlists, social sentiment, and screenshots live across too many places. State that Pickaxe is being built to turn that chaos into structured research packets.

### C. Solution

Purpose: explain the evidence-building method.

Use the approved heading:

`The system does not chase signals. It builds evidence.`

State that the result is a clearer research record for a better manual decision, not a trade command.

### D. Operating Loop

Purpose: present the approved process at a glance.

Render seven concise steps in an accessible, responsive layout:

`Capture → Verify → Analyze → Risk Check → CEO B Review → Archive → Learn`

The step layout may reuse the current `.access-loop` concept. It must collapse without horizontal overflow at `390x844`.

### E. What Pickaxe Does

Purpose: summarize implemented static/manual capabilities.

Use concise cards for:

- Options Alert Candidates;
- Source Verification;
- Research Packets;
- Market Command Center;
- AI Habitat OS;
- Archive / Learning Ledger;
- Visual Intelligence;
- Manual CEO B Review.

Options copy must state that options involve substantial risk. Every capability must avoid live-provider or autonomous-agent implications.

### F. What Pickaxe Does Not Do

Purpose: make exclusions unmistakable.

State:

- no financial advice;
- no brokerage;
- no exchange services;
- no custody;
- no execution;
- no guaranteed performance;
- no autonomous trading;
- no copy-trading;
- no personalized buy/sell commands;
- no signal-selling or “AI trading bot” framing.

### G. Proof of Work

Purpose: show verified internal milestones.

Reuse the existing Proof of Work carousel and its current shared data. Do not create new proof data, edit the tracker schema, or invent customer/performance evidence.

The section must state that the cards are internal build milestones, not endorsements, returns, accuracy, profit, or track-record proof.

### H. Private Access / Founder-Led Build

Purpose: explain current product stage.

Use a short static section with `id="privateAccess"`.

State that Pickaxe Capital is being built as a private, founder-led research OS first. State that no request workflow, account, payment, subscription, or entitlement is connected.

Do not render form fields, access tiers, prices, checkout language, or a simulated submission result.

### I. Final CTA

Purpose: end with a clear path into the current research environment.

Include:

- **Enter Research OS** -> `#/alerts`
- **View Founder Proof of Work** -> `#proofOfWorkTitle`
- **Review System Status** -> `#/staging`

Place the full compliance line at or immediately before the footer.

## 6. Approved Copy Blocks

The future implementation must reuse the canonical copy direction without weakening it.

### Hero Headline

> Market intelligence, verified before it becomes action.

### Hero Subheadline

> Pickaxe Capital organizes research, sources, risk checks, and AI-assisted market workflows into one founder-led intelligence system — with CEO B review before anything moves forward.

### Required Badges

- Research Only
- Source Verified
- CEO B Reviewed
- No Broker Execution

`Source Verified` and `CEO B Reviewed` describe required gates. They must not imply that every draft, candidate, or archive item has passed those gates.

### Operating Loop

> Capture → Verify → Analyze → Risk Check → CEO B Review → Archive → Learn

The visual implementation may use right-arrow glyphs, but the accessible text must preserve the exact stage order.

### Required Compliance Line

> Research only. Not financial advice. Pickaxe Capital is not a broker-dealer, investment adviser, exchange, custodian, or execution platform. Options involve substantial risk. All alert candidates require source verification and CEO B manual review.

### Required Current-State Label

Where static/manual capabilities are summarized, include:

> Demo/Static Data. Manual Review Required. No Broker Execution.

### Copy Source Rule

The complete section copy remains in `docs/01_PRODUCT/PICKAXE_PUBLIC_HOMEPAGE_COPY_SIMPLIFICATION_SCOPE.md`. The future implementation may tighten line breaks and card excerpts for responsive layout, but it must not introduce new claims, change the meaning, or omit the required safety language.

## 7. Runtime Preservation Rules

The future implementation must preserve:

- `/` and `#/alerts` as the canonical Alerts owner;
- `/app/alerts` -> `#/alerts`;
- the canonical Alerts renderer;
- Alerts/V3.1 singleton behavior;
- the QQQ golden path and selected-candidate synchronization;
- detailed Signals card placement beneath the Alerts overlay;
- Research Packet v2 behavior and packet identity contracts;
- the CEO B Review Queue;
- Source Hub workflow and source records;
- Archive workflow and packet lineage;
- Learning Ledger workflow and unverified/non-adopted lesson state;
- Research Desk workflow;
- Finance Terminal static/manual panel;
- Pickaxe X static/manual preview;
- Staging / QA command center;
- Founder route public-mode boundary;
- CEO B profile command-mode boundary;
- AI Habitat OS route and behavior;
- every direct-path bridge;
- `/ai-handoff` and `/source-hub-staging` as local-server-only endpoints;
- one Starlight canvas;
- Starlight hidden-tab lifecycle;
- reduced-motion behavior;
- all current LocalStorage keys and payload contracts;
- root/public mirror rules;
- existing packet models and review queues;
- current static/manual labeling;
- `data/signal-alerts.json` unchanged.

The implementation must not:

- change `openRequestedView()` or route mapping;
- change the nav rail or top bar;
- add or rename a route;
- add a renderer or page container;
- modify the Founder direct-path bridge;
- modify the CEO B profile content;
- modify shared proof data;
- modify any market/research data;
- add a LocalStorage write;
- add a backend, provider, API, auth, payment, subscription, access, email, or execution integration;
- alter Starlight code or CSS;
- introduce performance, accuracy, return, profit, customer, scale, or institutional-client claims.

## 8. Likely Future Files

### Potential Runtime Files

- `public/app.js`
- `app.js`
- `public/styles.css`
- `styles.css`
- `public/index.html`
- `index.html`

### Potential Metadata / Status Files

- `PROJECT_STATUS.md`
- `NEXT_STEPS.md`
- possibly `public/habitat-data.js`
- possibly `habitat-data.js`

The `habitat-data.js` mirror pair may be touched only if a future authorization explicitly requires Build Completion Tracker metadata. The recommended narrow implementation does not require that update.

### Blocked Unless Explicitly Required

- assets, logos, and images;
- `public/founder/index.html` and `founder/index.html`;
- all other route bridge files;
- navigation markup;
- LocalStorage schema or migration files;
- packet or review-queue models;
- provider, server, or API files;
- dependencies;
- `data/signal-alerts.json`.

If the implementation cannot be completed by editing the existing Founder renderer and route-scoped styles, stop and request a new scope.

## 9. QA Plan For Future Runtime Sprint

### Automated Validation

Run:

```text
node --run build
node --run check:project
node --run check:phase15
node --run check:agents
node --run check:mirrors
node --run smoke:routes
node --check public/app.js
node --check app.js
git diff --check
git status --short --branch
```

Also confirm the root/public app, style, and HTML mirror pairs are identical and `data/signal-alerts.json` retains its locked checksum.

### Desktop QA

Check at `1280x720`:

- `/`
- `#/alerts`
- `/app/alerts`
- `#/founder`
- `/founder`
- `#/ceo-b-profile`
- `/ceo-b-profile`
- `#/research`
- `#/source-hub`
- `#/archive`
- `#/learning-ledger`
- `#/ai-habitat-os`
- `#/staging`

### Mobile QA

Check the same core routes at `390x844`.

### Required Route Checks

For every checked route:

- correct active view;
- nonblank content;
- zero console errors;
- no document-level horizontal overflow;
- exactly one Starlight field;
- direct paths reach their approved hash owners;
- no unintended route or navigation change.

### Required Founder Front-Door Checks

For `#/founder` and `/founder`:

- exactly one public front-door output;
- nine sections appear in the approved order;
- hero headline and subheadline match the approved copy;
- all four badges are visible;
- operating loop order is correct;
- copy remains readable at desktop and mobile;
- no duplicate homepage sections;
- no pricing cards;
- no access-request form;
- no future-generator inventory;
- Proof of Work carousel still functions;
- Proof of Work remains build evidence, not performance evidence;
- **Enter Research OS** reaches `#/alerts`;
- **View Founder Proof of Work** reaches the same-page proof section;
- **Review System Status** reaches `#/staging`;
- **Request Private Access** reaches only the static information section;
- full compliance line is visible;
- static/manual label is visible;
- no fake live data;
- no provider claim;
- no broker/execution capability wording;
- no performance claim.

### Required Alerts Regression Checks

For `/`, `#/alerts`, and `/app/alerts`:

- one canonical Alerts container;
- one V3.1 mission-control card;
- one detailed Signals card in its locked placement;
- selected candidate remains synchronized;
- CEO B Review Queue remains functional;
- no public front-door section appears inside Alerts;
- no duplicate Alerts renderer;
- no changed packet, risk, or review behavior.

### Required Boundary Checks

- Founder route stays in public mode.
- CEO B profile routes stay in command-profile mode.
- AI Habitat OS remains internal and unchanged.
- Research retains Research Packet v2, Finance Terminal, and Pickaxe X.
- Source Hub, Archive, Learning Ledger, and Staging remain unchanged.
- reduced-motion disables nonessential motion as before.
- no new LocalStorage key appears before or after navigation.
- hosted `/ai-handoff` remains `404` after any later authorized deployment.

## 10. Acceptance Criteria For This Scope Sprint

This docs-only scope sprint passes only if:

- `docs/01_PRODUCT/PICKAXE_PUBLIC_HOMEPAGE_COPY_SIMPLIFICATION_RUNTIME_SCOPE.md` exists;
- the scope recommends the existing `#/founder` and `/founder` owner surface;
- the scope preserves `/` and `#/alerts` as Alerts;
- all three public-front-door options are compared;
- Option A is recommended as the lowest-risk path;
- the exact future renderer, structure, copy blocks, CTA behavior, and static/manual truth are defined;
- future implementation files are identified;
- future desktop and mobile QA is defined;
- all runtime and financial-safety boundaries are preserved;
- no runtime file is edited;
- no homepage implementation is performed;
- `PROJECT_STATUS.md` and `NEXT_STEPS.md` are updated;
- Build Completion Tracker runtime data is not edited;
- `data/signal-alerts.json` remains unchanged;
- standard validation passes;
- browser QA is omitted because no runtime-visible file changed;
- the approved documentation files are committed;
- final git status is clean after commit.

## 11. Hard Stops

Stop immediately if:

- runtime implementation begins in this scope sprint;
- `/` must be reassigned without explicit CEO B approval;
- Alerts ownership, rendering, hierarchy, or behavior would change;
- a duplicate Alerts renderer or public homepage renderer is required;
- a new route or bridge is required;
- navigation must be redesigned;
- the Founder/CEO B shared route-mode boundary must change;
- Starlight code, canvas count, lifecycle, or reduced-motion behavior must change;
- a LocalStorage key, payload, restore boundary, packet model, or review queue must change;
- `data/signal-alerts.json` must change;
- a logo, image, portrait, or other asset must change;
- proof data or tracker schema must change;
- compliance language would be weakened;
- a private Founder B asset or local path would be exposed;
- live provider, API, authentication, payment, subscription, entitlement, access transmission, broker, custody, execution, autonomous trading, autonomous publishing, or performance language appears;
- the work expands beyond the existing Founder public renderer and route-scoped presentation.

## Next Bounded Recommendation

After CEO B reviews and locks this scope, CEO B may authorize:

`Pickaxe public front door simplification — #/founder owner-route-limited runtime implementation`

That sprint should edit only the existing Founder public renderer, route-scoped styles, synchronized mirrors, cache keys, and required status records. It must preserve `/`, `#/alerts`, `/app/alerts`, navigation, bridges, LocalStorage, Starlight, every internal workflow, and `data/signal-alerts.json`.
