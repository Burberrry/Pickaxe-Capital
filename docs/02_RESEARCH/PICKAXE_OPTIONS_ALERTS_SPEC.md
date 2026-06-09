# Pickaxe Options Alerts Spec

Status: Documentation only. Implementation is not approved.
Canonical product: `Options Alerts`.
Current compatibility label and route: `Alerts Desk` at `/` and `#/alerts`.

## Purpose

Options Alerts is the flagship research operating unit. It converts verified context into a reviewable options research packet while keeping risk controls and CEO B approval above every score.

## Required Operating Chain

```text
Source Hub
  -> Research Packet
  -> Contract Quality
  -> Volatility Intelligence Panel
  -> Risk Desk
  -> CEO B Review Gate
  -> Archive Outcome
  -> Learning Ledger
```

## Planned Panels 1-5

These panel definitions require a separate docs sprint before implementation:

1. Candidate Identity and Why Now
2. Source Trail and Evidence Quality
3. Contract Quality and Liquidity
4. Volatility Intelligence and Event Risk
5. Risk Desk and CEO B Review State

## Volatility Intelligence Panel

Future fields:

- implied volatility
- realized volatility
- IV percentile or rank methodology
- term structure
- skew
- event premium
- volatility regime
- premium distortion warning
- source timestamp
- interpretation limits

The panel explains context. It does not predict direction, expected profit, or execution timing.

## Hard Blocks

- missing or stale source trail
- unresolved source conflict
- weak contract interpretability
- insufficient liquidity
- unacceptable spread
- event ambiguity
- missing volatility context when premium risk is material
- private data in a public-safe packet
- advisory or execution language
- missing CEO B review

## Output States

- Research Packet Candidate
- Needs More Evidence
- Watchlist Review
- Archive Candidate
- Rejected
- Suppressed Noise

## Safety

- research and education only
- static/manual-first
- no guaranteed returns
- no broker execution or account sync
- no copy-trading
- no fake live data
- no autonomous publication
- no public private-note fields
- hard blocks outrank confidence scores

## Definition of Ready for Implementation

- all five franchise cards approved
- source requirements approved
- Risk Desk rules approved
- CEO B Review Gate approved
- Archive Outcome schema approved
- static data plan approved
- exact in-scope files approved
