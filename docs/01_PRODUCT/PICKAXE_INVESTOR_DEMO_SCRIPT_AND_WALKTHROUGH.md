# Pickaxe Investor Demo Script and Walkthrough

## Purpose

This is CEO B's demo script for the current hosted Pickaxe Capital website: the Options Alerts Research OS.

Use it to explain Pickaxe clearly, safely, and confidently as an early product. The current site ranks options setups by research readiness, source quality, options quality, risk gates, and System Intelligence before any external action.

Current hosted checkpoint: `Pickaxe Options Alerts Website v1`.

Hosted URL: `https://burberrry.github.io/Pickaxe-Capital/`.

Current product state:

- `DEMO / Source Required`
- `UNKNOWN / No market timestamp`
- `BLOCKED — NO EXTERNAL ACTION`
- No live data active
- No broker execution
- No provider/browser request active
- No alert-delivery, authentication, payment, or subscription system active

## 30-second opening script

Pickaxe Capital is building a research-only Options Alerts Research OS.

The product does not tell users what to trade. It ranks options setups by readiness: source quality, timestamp quality, options-chain quality, risk gates, and System Intelligence.

Today the system is intentionally blocked because no verified live provider or usable market timestamp is active. That is the point of the product standard: no external action until the data, options chain, risk checks, and governance gates are clean.

Pickaxe is the research discipline before any move.

## 2-minute demo script

Start at `/`.

This is the main product: Options Alerts Research OS. It shows the current setup queue for QQQ, NVDA, SPY, TSLA, and GLD.

The first thing to notice is the state row: the data is `DEMO / Source Required`, freshness is `UNKNOWN / No market timestamp`, and the system is `BLOCKED`.

The setup cards rank research readiness. They do not predict profit. They show which ideas have the cleanest research packet and what is still missing.

Open one setup, such as NVDA. The selected setup shows readiness, options quality, source state, risk state, and the System Intelligence Verdict.

The verdict is the operating boundary. Right now it says `BLOCKED — NO EXTERNAL ACTION` because the system does not have a verified provider, usable timestamp, or verified options chain.

Open the Research Packet. This is where the product turns a setup into a reviewable research object.

Open the Evidence Packet. This shows why the setup is still blocked and what evidence would be needed before review can move forward.

Then show Sources. This explains why the system is source-required.

Then show Rules. This explains the gate model.

Then show Status. This explains what is and is not active in the current static GitHub Pages version.

End with Founder as secondary context. Founder explains the operating standard and product story. The product itself is the Alerts workflow.

## 5-minute deeper walkthrough

### What to show first

Start with `/`.

The homepage is the product. It should be framed as:

> Pickaxe Capital — Options Alerts Research OS.

Do not start with internal architecture. Do not start with founder story. Start with the live hosted product surface and the blocked research discipline.

### Alerts walkthrough

The Alerts surface is the core product demo.

Show the setup cards first:

- QQQ
- NVDA
- SPY
- TSLA
- GLD

Explain that each card is a research object, not a trade command.

Each setup is ranked by research readiness. Readiness means packet completeness and review quality. It does not mean expected return.

Point out the source-required state. The current site is intentionally honest: it does not claim usable live data.

Point out the options grade. This is a research-quality label for the current packet. It is not a promise of execution quality, return, or outcome.

Then show the System Intelligence Verdict.

The current verdict is:

`BLOCKED — NO EXTERNAL ACTION`

Explain it plainly:

Pickaxe can organize the setup, but it cannot allow external action because the source, timestamp, and options-chain gates are not verified.

Open the Research Packet.

Say:

The Research Packet is the structured review object. It gives the setup context, readiness state, missing requirements, and review boundary.

Open the Evidence Packet.

Say:

The Evidence Packet shows what the system knows, what it does not know, and why the setup remains blocked.

### Sources walkthrough

The Sources route explains why the current system is blocked.

Use this language:

Pickaxe is not pretending to be live. The current public website is demo/source-required.

The system is blocked because:

- there is no verified provider active;
- there is no usable market timestamp;
- there is no verified options chain;
- there is no active browser provider request;
- future providers require separate CEO B approval and server-only credentials.

Explain the trust model:

Pickaxe does not let the browser invent a market state. Provider activation must happen through an approved backend/provider/security plan.

### Rules walkthrough

The Rules route explains the gate model.

The gates are:

- Source gate
- Timestamp gate
- Options-chain gate
- Spread/liquidity gate
- Risk gate
- System Intelligence gate
- Governance standard

The core rule:

No external action unless the gates pass.

The product is not designed to push speed before verification. It is designed to prevent false confidence.

### Status walkthrough

The Status route explains the current product boundary.

Say:

This hosted version is a static GitHub Pages SPA. It is intentionally simple and safe.

Current state:

- demo/source-required data;
- no live provider;
- no broker;
- no authentication;
- no payment system;
- no subscription system;
- no alert-delivery system;
- stable route ownership.

That means the demo can be shown safely without implying hidden execution, hidden subscriptions, or hidden live data.

### Founder walkthrough

Founder is secondary context.

Show it after the product workflow.

Say:

The Founder page explains the operating standard behind Pickaxe Capital. It supports the product story, but the main product is the Options Alerts Research OS.

## What not to say

Do not use these phrases or claims as product promises:

- "buy"
- "sell"
- "guaranteed"
- "profit"
- "win rate"
- "live alerts"
- "real-time data" unless verified
- "we execute trades"
- "investment advice"
- "broker"
- "paid signals"
- "approved provider is live"
- "proven performance"
- "customers", "revenue", or "AUM" unless separately verified

Do not present Pickaxe Capital as:

- a broker;
- an adviser;
- a fund;
- a signal seller;
- a trade-execution platform;
- a platform with verified live market data before that provider state is approved and active.

## Safe language

Use these phrases:

- "research-only"
- "demo/source-required"
- "System Intelligence ranks readiness"
- "gates control action boundaries"
- "no external action"
- "not financial advice"
- "no broker execution"
- "options involve substantial risk"
- "provider activation requires separate approval"

Useful investor-facing phrasing:

- Pickaxe ranks research readiness, not expected return.
- The current setup is blocked because the source gates are not satisfied.
- The product standard is clear: no verified source, no external action.
- The first business milestone is a safer, clearer research workflow before any provider or monetization expansion.

## Investor FAQ

### What is Pickaxe?

Pickaxe Capital is a research-only market intelligence product focused first on options alerts research. It organizes setups into reviewable packets and uses gates to control whether anything can advance.

### Is this live?

No. The current hosted website is demo/source-required. It is not using live market data and does not claim a usable live timestamp.

### Does it trade?

No. Pickaxe does not execute trades. There is no broker connection and no order-placement system.

### Is this financial advice?

No. The product is research-only and not financial advice. Options involve substantial risk.

### Why is the current setup blocked?

Because the current hosted site has no verified provider, no usable market timestamp, and no verified options chain. The System Intelligence Verdict therefore blocks external action.

### What data is missing?

The missing pieces are verified market source, quote type, timestamp, timezone, verification status, options-chain data, spread/liquidity context, and risk-gate evidence.

### What happens when providers are approved?

Provider activation would require separate CEO B approval, server-only credentials, commercial-use approval, and a verified workflow. The browser should not receive private provider keys.

### Why Options Alerts first?

Options alerts force the product to prove discipline early. Options require source quality, timestamp quality, chain quality, liquidity checks, risk controls, and clear action boundaries. That makes them a strong first product surface for Pickaxe.

### What comes after this?

The next sensible step is either final mobile polish after the Options Alerts Website v1 lock or provider activation legal/credential review as a docs-only planning sprint.

### What makes this defensible?

The defensibility is the operating standard: source verification, risk-first gates, research packet structure, clear blocked states, and CEO B governance before external action. Pickaxe is not trying to be another noisy signal feed.

## Demo risk notes

Use these boundaries during every demo:

- This is research-only.
- This is not financial advice.
- Options involve substantial risk.
- The current public website uses demo/source-required data.
- No live provider is active.
- No broker execution is active.
- No authentication, payment, subscription, or alert-delivery system is active.
- No external action is allowed while the source, timestamp, options-chain, risk, and governance gates are blocked.
- No performance, profit, win-rate, customer, revenue, or AUM claim should be made unless separately verified and approved.

## Final close script

Pickaxe Capital is not trying to be a louder alert feed.

It is building the research standard before the alert: source checks, options quality, risk gates, System Intelligence, and CEO B governance.

The current product is intentionally blocked because the live provider layer is not approved. That is the discipline. Pickaxe only moves from research to action boundaries when the evidence is clean.

This is the foundation for a safer, more credible Options Alerts Research OS.
