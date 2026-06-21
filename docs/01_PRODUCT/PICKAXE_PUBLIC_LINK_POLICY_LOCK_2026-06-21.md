# Pickaxe Public Link Policy Lock

Authority: CEO B
Date: 2026-06-21
Status: PASS / DOCS-ONLY PUBLIC LINK POLICY LOCK COMPLETE
Scope: Public-versus-operational URL governance only. This document does not authorize runtime implementation.

## 1. Current Verified Baseline

- Route clarity audit: `1c037d2 Audit public route clarity`.
- Latest hosted documentation verification: GitHub Pages run `27917464169`.
- Hosted status: `PASS / HOSTED DOCS VERIFIED`.
- `/` returns HTTP `200` and remains the canonical Alerts / Research OS entry.
- `/founder` returns HTTP `200` and resolves to the public Founder front door at `/#/founder`.
- `/ai-handoff` remains local-only and returns HTTP `404` on GitHub Pages.
- Runtime, route, navigation, bridge, Starlight, LocalStorage, asset, tracker, provider, package, and workflow files remain unchanged.
- `data/signal-alerts.json` remains unchanged at SHA-256 `a84441288df00557333519fb97c02e1fe745164235241a9aa9a89c1273d4302c`.

## 2. Purpose Of The Link Policy

Pickaxe Capital has two valid entry contexts:

- a public explanation for people who do not yet know the company;
- an operational Research OS entry for CEO B and informed reviewers.

This policy prevents public introductions from landing directly in the internal QQQ Alerts workflow while preserving the locked operational homepage. It creates one consistent outward-facing URL without adding or reassigning a route.

## 3. Canonical Public URL

The canonical public URL is:

`/founder`

It is the approved first link for an unfamiliar visitor, investor, partner, collaborator, media contact, or future user. It presents the Pickaxe Capital public story, evidence-first doctrine, operating loop, proof of work, safety boundaries, and intentional entry into the Research OS.

`/#/founder` is the canonical SPA destination reached by `/founder`, but outward-facing links should prefer the cleaner direct path `/founder`.

The root URL `/` is not the default public introduction link.

## 4. Operational URL Rules

The approved operational URLs are:

- `/`
- `/#/alerts`
- `/app/alerts`

These URLs lead to the canonical Alerts / Research OS experience. They are appropriate when the recipient already understands Pickaxe Capital or when the purpose is direct operational, product, QA, or technical review.

Operational URLs do not replace `/founder` as the public introduction.

## 5. Public-Link Use Cases

Use `/founder` for:

- public social profiles;
- investor or partner introductions;
- collaborator introductions;
- public decks;
- public documents;
- press or media references;
- QR codes;
- external campaign links;
- portfolio references;
- proof-of-work sharing;
- first-time visitor links;
- any general Pickaxe Capital public introduction.

The governing test is simple: if the recipient may reasonably ask “What is Pickaxe Capital?”, start at `/founder`.

## 6. Operational-Link Use Cases

Use `/`, `/#/alerts`, or `/app/alerts` for:

- CEO B operational bookmarks;
- direct Research OS access;
- Alerts QA;
- internal product review;
- demos where the recipient already understands the project;
- technical reviews focused on Alerts;
- Research OS links from the Founder page.

The governing test is: if the recipient already understands the company and needs the operating surface, use an operational URL.

## 7. Routes Not For Public-First Sharing

- Do not use `/` as the default public introduction link.
- Do not use `/ceo-b-profile` or `/#/ceo-b-profile` as the public brand homepage. These routes represent the symbolic masked CEO B command identity.
- Do not use `/#/ai-habitat-os` as the public brand homepage. It describes internal architecture.
- Do not use Research, Source Hub, Archive, Learning Ledger, Staging, or other internal workflow routes as general public introductions.
- Do not publish or link `/ai-handoff`. It is a local-server-only text endpoint and must remain hosted `404`.
- Do not create or imply `/public`.

Direct links to internal routes remain acceptable when the route itself is the explicit subject and the recipient has the required context.

## 8. Link Examples

### Approved public examples

- `Learn about Pickaxe Capital: https://burberrry.github.io/Pickaxe-Capital/founder`
- `Start at /founder`
- `Review the Pickaxe Capital public story`
- `View the public Founder front door`
- `Explore the public story, then enter the Research OS from Founder`

### Approved operational examples

- `Open the operational Alerts entry: https://burberrry.github.io/Pickaxe-Capital/`
- `Open Alerts directly: https://burberrry.github.io/Pickaxe-Capital/#/alerts`
- `Open the Alerts bridge: https://burberrry.github.io/Pickaxe-Capital/app/alerts`
- `Review the static/manual Research OS`

### Disallowed examples

- Using the root domain as an unexplained public-company introduction.
- Presenting CEO B Profile or AI Habitat OS as the public homepage.
- Publishing `/ai-handoff`.
- Describing any URL as a subscription, execution, customer-performance, or live-signal destination.

## 9. Copy Boundaries

### Allowed language

- `Public Founder front door`
- `Pickaxe Capital public story`
- `Start at /founder`
- `Enter Research OS from Founder`
- `Operational Alerts entry`
- `Static/manual Research OS`
- `Source verification, risk gates, and CEO B review`

### Banned language

- `Live alerts`
- `AI trading bot`
- `Automated signals`
- `Guaranteed returns`
- `Verified profits`
- `Real-time provider connected`
- `Broker execution`
- `Subscribe for signals`
- `Customers/AUM/performance proof`
- `Autonomous trading`
- `Copy trading`
- `Personalized advice`

Public link copy must name the public brand as Pickaxe Capital. AI Habitat OS is referenced only when internal architecture is relevant. CEO B remains the final human review layer; Founder B remains a separately governed human-founder layer.

## 10. Compliance And Trust Boundaries

- Research Only.
- Manual Review Required.
- Not Financial Advice.
- No Broker Execution.
- Demo/Static Data where provider or current-market status could otherwise be inferred.
- Options involve substantial risk where options-specific material is present.
- Source verification, risk gates, and CEO B review remain mandatory.
- Confidence and conviction describe research quality or completeness, not expected return.
- No link may imply account creation, entitlement, payment, subscription, request transmission, publication, alert delivery, brokerage, custody, or execution.
- No link copy may imply customers, AUM, performance, profits, accuracy, returns, endorsements, scale, or track record.

## 11. What Must Remain Locked

- `/`, `/#/alerts`, and `/app/alerts` remain canonical Alerts.
- `/founder` and `/#/founder` remain the sole public Founder front door.
- `/` is not reassigned.
- `/public` is not created.
- No root discovery element is added by this policy.
- Navigation remains unchanged.
- Founder copy and renderer ownership remain unchanged.
- V3.1 QQQ behavior, singleton cards, selected-candidate synchronization, detailed Signals placement, and CEO B Review Queue remain unchanged.
- Starlight remains one field/canvas with current lifecycle and reduced-motion behavior.
- LocalStorage keys, packet models, review queues, Archive and Learning Ledger contracts remain unchanged.
- Route bridges, assets, Build Completion Tracker data, providers, packages, and workflows remain unchanged.
- `/ai-handoff` remains local-only and hosted `404`.
- `data/signal-alerts.json` remains unchanged.

## 12. Future Implementation Trigger Conditions

No runtime implementation is required now.

A future root-to-Founder discovery implementation may be considered only if evidence shows all of the following:

- meaningful first-time traffic lands on `/` without prior operational context;
- outward-facing materials cannot reliably enforce `/founder`;
- visitor or reviewer confusion is repeatedly observed or measured;
- a single Alerts-safe discovery element can solve the problem without weakening the QQQ first-screen hierarchy;
- CEO B authorizes a separate bounded implementation scope naming the exact renderer, placement, files, copy, and QA matrix.

Until those conditions are met, policy and link alignment are sufficient.

## 13. Future Implementation Hard Stops

Stop if a future link-policy or alignment sprint requires:

- reassigning `/`;
- changing route ownership;
- adding `/public`, a renderer, alias, bridge, or duplicate public page;
- changing navigation;
- changing Alerts behavior or Founder copy;
- broad CSS, JavaScript, HTML, asset, or tracker changes;
- changing Starlight or LocalStorage;
- adding a provider, authentication, payment, subscription, access workflow, publication path, alert delivery, broker connection, or execution;
- changing `data/signal-alerts.json`;
- using banned or unsupported claims.

## 14. Governance And Review

- CEO B is the final authority for exceptions to this policy.
- Codex and future contributors must apply this policy when creating or updating public-facing documentation.
- Existing outward-facing links should be reviewed in a separate explicitly authorized docs-only alignment sprint.
- A documentation alignment sprint may update only files named in its scope; this lock does not authorize broad link replacement.
- Runtime implementation remains separately governed.

## 15. CEO B Final Policy

The public-versus-operational URL policy is:

1. **Public-first:** use `/founder`.
2. **Operational-first:** use `/`, `/#/alerts`, or `/app/alerts`.
3. **Identity or architecture-specific:** use CEO B Profile or AI Habitat OS only when those subjects are explicitly intended.
4. **Local-only:** never publish `/ai-handoff`.

No public-first link should bypass the Pickaxe Capital public story and send an unfamiliar visitor directly into the operational Alerts cockpit.

## 16. Final Lock Conclusion

Pickaxe Capital now has one locked outward-facing URL policy without changing runtime:

- `/founder` is the canonical public URL.
- `/`, `/#/alerts`, and `/app/alerts` are operational URLs.
- Route ownership, navigation, and the internal OS remain unchanged.

**Final result: PASS / DOCS-ONLY PUBLIC LINK POLICY LOCK COMPLETE.**

## 17. Next Bounded Recommendation

`Pickaxe public profile and README link alignment — docs-only`

Do not begin it automatically.
