# Pickaxe Public Route Clarity Audit

Date: 2026-06-21
Status: PASS / DOCS-ONLY ROUTE CLARITY AUDIT COMPLETE
Authority: CEO B
Scope: Public arrival and route-discovery governance only. This document does not authorize implementation.

## 1. Current Verified Baseline

- Public Founder front door implementation: `cfea555 Simplify Founder public front door`.
- Founder hosted-record documentation: `1383ea5 Record Founder front door hosted verification`.
- Public front-door visual audit: `0438566 Audit Founder front door visual polish`.
- Latest hosted documentation verification: GitHub Pages run `27916220101`.
- Current hosted status: `PASS / HOSTED DOCS VERIFIED`.
- `/`, `/#/alerts`, and `/app/alerts` remain the canonical Alerts experience.
- `/founder` and `/#/founder` remain the public Founder front door.
- `/ai-handoff` remains local-server-only and returns HTTP `404` on GitHub Pages.
- Runtime files are unchanged.
- `data/signal-alerts.json` remains unchanged at SHA-256 `a84441288df00557333519fb97c02e1fe745164235241a9aa9a89c1273d4302c`.

## 2. Why This Audit Exists

The hosted Founder route is a credible public explanation of Pickaxe Capital once a visitor reaches it. The canonical root route is intentionally different: it opens the locked QQQ Alerts and CEO B review experience.

The resulting problem is not a broken route. It is an arrival-policy gap:

- the operating system treats `/` as Alerts;
- the public story lives at `/founder`;
- a first-time visitor who types or follows the root domain sees an internal research cockpit;
- no visible first-screen path from the root Alerts experience to `/founder` was observed;
- external publishers and future public materials do not yet have a locked rule stating which URL represents Pickaxe Capital publicly.

This audit decides the safest present-tense policy without changing route ownership or runtime.

## 3. Current Route Truth

| Route | Current owner | Governance classification |
| --- | --- | --- |
| `/`, `/#/alerts`, `/app/alerts` | Canonical Alerts renderer | Operational entry; locked research-review experience |
| `/founder`, `/#/founder` | Public mode of `renderFounderLandingPage()` | Canonical public story and Founder front door |
| `/#/ceo-b-profile`, `/ceo-b-profile` | CEO B Profile | Symbolic masked command identity; internal identity surface |
| `/#/ai-habitat-os` | AI Habitat OS map | Internal operating-system explanation |
| `/#/research` | Research Desk | Internal packet-building workflow |
| `/#/source-hub` | Source Hub | Internal provenance and source-verification workflow |
| `/#/archive` | Archive | Internal cleaned-memory and packet-lineage workflow |
| `/#/learning-ledger` | Learning Ledger | Internal lesson-candidate review workflow |
| `/#/staging` | Staging / QA | Internal hosted-state and build-readiness workflow |
| `/ai-handoff` | Local development server | Local-only text endpoint; hosted `404` must remain |

Route ownership is coherent. The missing layer is a public URL policy, not another route.

## 4. Public Arrival Problem Statement

Pickaxe Capital currently has two valid but different entry experiences:

1. an operational entry at `/`, optimized for CEO B and the locked Alerts workflow;
2. a public explanation at `/founder`, optimized for a first-time visitor, partner, investor, or future user.

Using the same root URL for both audiences would require either weakening Alerts ownership or exposing an internal QQQ research workflow as the brand’s default public explanation. Creating a third landing route would add a duplicate public concept.

The safest present model is therefore a governed dual-entry model:

- `/` remains the operational default;
- `/founder` becomes the canonical public and share URL;
- public discovery is handled through link policy before any root UI is modified.

## 5. Routes Reviewed

Hosted desktop `1280x720` and mobile `390x844` review covered:

- `/`
- `/#/alerts`
- `/app/alerts`
- `/#/founder`
- `/founder`
- `/#/ceo-b-profile`
- `/ceo-b-profile`
- `/#/research`
- `/#/source-hub`
- `/#/archive`
- `/#/learning-ledger`
- `/#/ai-habitat-os`
- `/#/staging`

Every route loaded its correct nonblank active view with zero observed console errors, no document-level horizontal overflow, and one visible Starlight field/canvas.

Desktop evidence:

- `/`, `/#/alerts`, and `/app/alerts` open the QQQ Research Card Flow.
- No visible first-screen Founder link was observed on the root Alerts experience.
- `/founder` and `/#/founder` resolve to the same public Founder view.
- Supporting routes retain distinct internal owners and do not compete with the Founder route as a public story.

Mobile evidence:

- The same route ownership and discovery pattern persists.
- Main route content begins below the shared navigation block at approximately `469px`.
- The root still opens QQQ Alerts; the Founder route still opens the public story.
- No mobile overflow or duplicate visible Starlight field was observed.

## 6. First-Time Visitor Journey From `/`

### Current journey

1. Visitor opens the root domain.
2. The first screen identifies `Pickaxe Capital V3.1 / Alerts Desk / Demo Data Only`.
3. The visitor sees a QQQ research-card flow, source gates, risk gates, and CEO B review states.
4. The interface truthfully communicates a static/manual research cockpit.
5. The visitor receives no visible first-screen explanation that `/founder` contains the public story.

### Result

The root is credible as a product demonstration but incomplete as an unaided public introduction. It answers “how the internal research workflow behaves” before answering “what Pickaxe Capital is.”

### Present policy implication

Do not use `/` as the default link in public profiles, investor correspondence, partner introductions, press references, public decks, or general brand sharing. Preserve it for operational use and direct Research OS access.

## 7. First-Time Visitor Journey From `/founder`

### Current journey

1. Visitor opens `/founder`.
2. The route resolves to `/#/founder`.
3. The visitor sees Pickaxe Capital’s evidence-first proposition, source and risk boundaries, CEO B manual review doctrine, operating loop, capabilities, exclusions, Proof of Work, private-first posture, and Research OS CTA.
4. The visitor can enter Alerts intentionally through `Enter Research OS`.

### Result

This is the clearest current public arrival path. It explains the brand before exposing the operating system. It also creates a deliberate direction of travel:

```text
Public story
  -> Trust and boundaries
  -> Proof of work
  -> Intentional entry to Research OS
```

That sequence is safer and clearer than sending an unfamiliar visitor directly into QQQ Alerts.

## 8. Strategy Comparison

Scores use the required 1–1000 framework: public clarity, first-time comprehension, Founder credibility, OS preservation, route-owner safety, implementation risk, SEO/share-link clarity, mobile impact, compliance/trust preservation, strategic alignment, and avoidance of unsupported provider, execution, payment, subscription, or performance implications.

| Rank | Strategy | Score | Assessment |
| ---: | --- | ---: | --- |
| 1 | Keep `/` as Alerts and use `/founder` as the public link everywhere outside the app | **962** | Best current balance. Requires no runtime change, preserves every locked route, creates a clear share URL, and sends public visitors through context before the Research OS. |
| 2 | Keep `/` as Alerts but later add one small first-screen public-discovery link or badge to `/founder` | **914** | Potentially useful after the link policy is proven insufficient. Low conceptual scope, but still modifies the canonical Alerts first screen and requires careful singleton, placement, mobile, and regression QA. |
| 3 | Keep `/` as Alerts but add a later route-scoped `Public Story` CTA inside the Alerts hero/header | **861** | More visible than a badge, but introduces marketing hierarchy into the locked operational hero and risks weakening the QQQ review focus. |
| 4 | Create a future separate public route such as `/public` or `/#/public`, without changing `/` | **703** | Avoids touching Alerts but duplicates the existing Founder public-page concept, creates route and bridge burden, and fragments public links. |
| 5 | Reassign `/` to the public Founder front door and move Alerts to `/#/alerts` | **526** | Strong conventional public-site behavior, but currently conflicts with locked homepage ownership, direct operational habits, route assumptions, and the explicit preference to preserve `/` as Alerts. |

## 9. Recommended Public Arrival Model

Adopt a **dual-entry, single-public-canonical model**:

- **Operational entry:** `/`, `/#/alerts`, and `/app/alerts`.
- **Public entry:** `/founder`.
- **Canonical public narrative:** `/founder`, which resolves to `/#/founder`.
- **Research OS transition:** the existing `Enter Research OS` CTA from Founder to `/#/alerts`.
- **Internal identity and workflow routes:** remain discoverable only through intentional internal navigation and direct operating links.

This model keeps one public story and one operational home. It does not create a new landing page, alias, renderer, bridge, or navigation concept.

## 10. Recommended Public Link Policy

Use `/founder` for:

- public social profiles;
- investor, partner, and collaborator introductions;
- public-facing decks and documents;
- general brand sharing;
- press or media references;
- portfolio and proof-of-work references;
- QR codes or external campaign links;
- any context where the recipient may not already understand Pickaxe Capital.

Use `/`, `/#/alerts`, or `/app/alerts` for:

- CEO B operational bookmarks;
- internal demos where the research workflow is already understood;
- direct Alerts QA;
- Research OS links from the Founder page;
- technical or product reviews explicitly focused on Alerts.

Use `/ceo-b-profile` only when the symbolic command identity is the intended subject. Do not substitute it for the public Founder link.

Use `/#/ai-habitat-os` only when explaining internal architecture. Do not present AI Habitat OS as the public brand homepage.

Do not publish or link `/ai-handoff`; it remains local-only.

## 11. Recommended Future Implementation, If Any

No runtime implementation is required now.

The existing `/founder` route already supplies the necessary public explanation. The immediate gap can be addressed by locking and applying the external public-link policy. Runtime work should be reconsidered only if real usage demonstrates that:

- visitors commonly arrive at `/` without an intentional operational context;
- public materials cannot consistently control the destination URL;
- the absence of a root-to-Founder link creates measurable confusion;
- a bounded Alerts-safe discovery element can be added without altering the QQQ hierarchy.

If those conditions are later demonstrated, strategy 2 is the smallest candidate for a separate implementation scope. This audit does not authorize it.

## 12. Files Likely Needed For Future Implementation

The recommended next sprint is documentation-only:

- one canonical public-link-policy lock under `docs/`;
- `PROJECT_STATUS.md`;
- `NEXT_STEPS.md`;
- optionally existing public documentation that contains outward-facing URLs, but only if explicitly included in that future sprint.

No runtime file is needed for the recommended next sprint.

If CEO B later authorizes a root discovery micro implementation, a separate scope must identify the exact active Alerts renderer, route-scoped style owner, synchronized mirrors, and cache keys before any edit. This document does not grant that scope.

## 13. Files Blocked For Future Implementation

For the recommended docs-only policy sprint:

- `public/app.js` and `app.js`;
- `public/styles.css` and `styles.css`;
- `public/index.html` and `index.html`;
- `public/habitat-data.js` and `habitat-data.js`;
- all route bridge files;
- all assets and logos;
- all navigation and runtime files;
- all LocalStorage schema and migration files;
- all provider, server, API, package, dependency, and workflow files;
- all tracker data files;
- `data/signal-alerts.json`.

## 14. Required Copy Boundaries

Any public link-policy wording must:

- name the public brand as `Pickaxe Capital`;
- describe `/founder` as the public story, public front door, or Founder overview;
- describe Alerts as a static/manual Research OS or research-review environment;
- keep CEO B as the final human review layer;
- distinguish AI Habitat OS as internal architecture;
- avoid implying that Founder B and symbolic CEO B are the same visual identity;
- avoid “live alerts,” “AI trading,” “automated signals,” “real-time provider,” or autonomous-agent claims;
- avoid customer, AUM, scale, accuracy, return, profit, performance, endorsement, or track-record claims;
- avoid buy/sell instructions, personalization, execution, brokerage, custody, payment, subscription, or access promises.

## 15. Compliance And Trust Boundaries

- Research Only.
- Manual Review Required.
- Not Financial Advice.
- No Broker Execution.
- Demo/Static Data where current market or provider state might otherwise be inferred.
- Options involve substantial risk where options-specific content is presented.
- Source verification, risk gates, and CEO B review remain mandatory.
- Confidence and conviction describe research quality or completeness, not expected return.
- Public output remains blocked when source, risk, or CEO B gates fail.
- No public-link policy may imply that visiting a route creates an account, entitlement, subscription, payment, request, publication state, alert, or execution.

## 16. Desktop / Mobile QA Matrix For Any Later Implementation

No browser QA is required for the recommended docs-only policy lock unless it modifies runtime-visible documentation.

If a later root discovery micro implementation is separately authorized, QA must cover:

| Route | Desktop `1280x720` | Mobile `390x844` | Required proof |
| --- | --- | --- | --- |
| `/` | Required | Required | Alerts remains canonical; one discovery element only; QQQ hierarchy and singleton cards unchanged |
| `/#/alerts` | Required | Required | Same canonical Alerts renderer and discovery behavior as `/` |
| `/app/alerts` | Required | Required | Bridge resolves to canonical Alerts with no duplicate element |
| `/#/founder` | Required | Required | Public Founder view unchanged and destination correct |
| `/founder` | Required | Required | Direct path resolves to `/#/founder` |
| `/#/ceo-b-profile`, `/ceo-b-profile` | Regression | Regression | Symbolic CEO B identity unchanged |
| `/#/research` | Regression | Regression | Research workflow unchanged |
| `/#/source-hub` | Regression | Regression | Source ownership unchanged |
| `/#/archive` | Regression | Regression | Archive contracts unchanged |
| `/#/learning-ledger` | Regression | Regression | Lesson state unchanged |
| `/#/ai-habitat-os` | Regression | Regression | Internal OS map unchanged |
| `/#/staging` | Regression | Regression | Tracker and hosted-state behavior unchanged |
| `/ai-handoff` | HTTP check | HTTP check | Remains `404` on GitHub Pages |

Every affected route must have the correct active view, nonblank content, zero console errors, no document-level horizontal overflow, and one visible Starlight field/canvas.

## 17. What Must Remain Locked

- `/`, `/#/alerts`, and `/app/alerts` remain canonical Alerts.
- `/founder` and `/#/founder` remain the sole public Founder front door.
- The root URL is not reassigned.
- No new public route, renderer, alias, bridge, or page concept is added.
- Navigation remains unchanged.
- V3.1 QQQ behavior, selected-candidate synchronization, card placement, and CEO B Review Queue remain unchanged.
- Starlight remains one field/canvas with current lifecycle and reduced-motion behavior.
- Existing LocalStorage keys, packet models, review queues, archive records, and lesson contracts remain unchanged.
- CEO B Profile and AI Habitat OS remain internal identity and architecture surfaces.
- Assets and Build Completion Tracker data remain unchanged.
- `/ai-handoff` remains local-only.
- `data/signal-alerts.json` remains unchanged.

## 18. Hard Stops

Stop any future policy or implementation sprint if it requires:

- reassigning `/`;
- changing Alerts ownership or behavior;
- changing navigation;
- adding a route, bridge, renderer, storage key, packet model, or review queue;
- changing Founder copy;
- changing CEO B identity or AI Habitat OS ownership;
- broad CSS outside an explicitly approved owner route;
- changing Starlight, LocalStorage, assets, tracker data, providers, authentication, payment, subscription, access, publication, alerts, broker connectivity, or execution;
- changing `data/signal-alerts.json`;
- representing a public link as evidence of customers, scale, performance, returns, profit, or market readiness.

## 19. CEO B Final Recommendation

Keep `/` as the locked operational Alerts entry. Keep `/founder` as the public Founder front door. Do not create `/public`, do not reassign `/`, and do not add a marketing CTA inside Alerts now.

Lock one public-link rule: **any outward-facing Pickaxe Capital link intended for a first-time visitor should point to `/founder`; operational and product-review links may point directly to Alerts.**

This gives Pickaxe Capital a clear public arrival model immediately without risking the internal OS. If later evidence shows uncontrolled root traffic is a material problem, CEO B can separately authorize an Alerts-safe discovery micro-scope.

## 20. Recommended Next Bounded Sprint

`Pickaxe public link policy lock — docs-only`

This is the only recommended next sprint. Do not begin it automatically.

## Audit Conclusion

The route system does not need restructuring. It needs a locked audience-to-URL policy.

**Final result: PASS / DOCS-ONLY ROUTE CLARITY AUDIT COMPLETE.**
