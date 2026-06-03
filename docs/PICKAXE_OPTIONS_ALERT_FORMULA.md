# Pickaxe Options Alert Formula

Status: Phase 2H docs-only research specification.

This document is a future guardrail for Options Research. It does not approve implementation.

## Non-Negotiable Framing

This is not a trading system.

This is not broker execution.

This is not financial advice.

This is not a prediction engine.

This is a research packet generation and CEO B review system.

Options Research remains deferred until B explicitly approves it. No public Options Hub UI, live options chain, provider adapter, broker pathway, or fake live data should be built from this document.

## Intended Workflow

```text
Evidence intake
  -> Source verification
  -> Conservative feature scoring
  -> Trust multiplier
  -> Risk penalty
  -> Hard filters
  -> CEO B manual review
  -> private archive or public-safe packet
```

## Evidence Intake

Accept only source-linked evidence:

- company investor relations pages
- SEC filings or official filings where applicable
- official earnings or event calendars
- approved market data snapshots after a real provider plan exists
- Source Hub records with trust status
- internal contract snapshots only when provenance is known
- sanitized manual notes after CEO B review

Secondary commentary may provide context, but it cannot be decisive on its own. A public-facing packet must never rely on a screenshot, anonymous post, or single unverified headline.

## Source Verification

Each packet must include:

- `source_refs`
- source count
- source type mix
- average trust bucket
- source freshness
- conflict status
- public/private field split

No packet moves forward if its source basis cannot be independently reviewed.

## Feature Scoring

Feature families are normalized to 0.00-1.00 before scoring.

| Feature | Meaning |
| --- | --- |
| `contract_quality` | Spread, open interest, volume, days to expiry, and whether the contract can be interpreted safely. |
| `relative_activity` | Activity compared with the contract or symbol's own baseline. |
| `volatility_context` | IV percentile, skew context, event-volatility flags, and premium distortion risk. |
| `underlying_context` | Thesis coherence, trend state, realized volatility, and support/resistance context. |
| `catalyst_context` | Source-verified reason the packet matters now. |
| `source_confirmation` | Source diversity, trust, and freshness. |
| `market_regime` | Broader index, sector, and volatility regime context. |

## Formula

```text
base_score = 0.20 * contract_quality
           + 0.18 * relative_activity
           + 0.15 * volatility_context
           + 0.15 * underlying_context
           + 0.17 * catalyst_context
           + 0.10 * source_confirmation
           + 0.05 * market_regime

final_confidence = clamp(0, 100, 100 * base_score * trust_multiplier - risk_penalty)
```

Example trust multiplier:

```text
trust_multiplier = min(1.00, 0.60 + 0.08 * verified_source_count + 0.02 * avg_source_trust_bucket)
```

Example risk penalty:

```text
risk_penalty = short_dte_penalty
             + wide_spread_penalty
             + low_oi_penalty
             + single_source_penalty
             + event_ambiguity_penalty
             + stale_snapshot_penalty
             + governance_penalty
```

Design intent:

- This score is for research ranking only.
- Risk penalties should be stronger than hype.
- Trust cannot be added later; it changes the score directly.
- No single flashy signal should overpower weak provenance.
- Low-quality contracts should fail even when the story sounds interesting.

## Hard Filters

Hard filters block publication or escalation regardless of score.

| Filter | Rule |
| --- | --- |
| Human approval | CEO B approval required for every public packet. |
| Minimum source coverage | At least two independently reviewable sources for narrative or catalyst. |
| Source freshness | Stale evidence or stale contract snapshot blocks publication. |
| Contract quality | Contract must pass basic interpretability checks. |
| Liquidity floor | Block if liquidity is too low for the product class. |
| DTE rule | Default public packets require at least 14 calendar days to expiry. |
| Spread rule | Block if bid/ask spread is wider than allowed threshold. |
| Open interest rule | Block if open interest is below threshold. |
| Conflict rule | If sources materially disagree, downgrade to research memo or private archive. |
| Stale snapshot rule | Expire packets when contract or source snapshot is out of date. |
| Privacy strip rule | Public packet must remove internal notes, local paths, raw URLs, and raw vault exports. |
| Blocked-language rule | Any blocked advisory/execution language fails the packet. |

## CEO B Manual Review Gates

CEO B may:

- reject for insufficient source diversity
- reject for weak contract quality
- reject if thesis strength exceeds evidence strength
- return for revision when catalyst is valid but packet construction is weak
- approve private-only for useful memory that is not public-safe
- approve public-safe only when confidence, risk notes, provenance, privacy, and language all pass

Manual checkpoint questions:

- Can this be explained in two sentences without hidden assumptions?
- Would the research still hold if the contract image disappeared and only the evidence bundle remained?
- Does the packet teach, or does it imitate urgency?

## Public-Safe Packet Schema

```json
{
  "id": "alt_2026_06_03_msft_001",
  "privacy_tier": "public_safe",
  "status": "approved",
  "created_at": "2026-06-03T15:10:00Z",
  "approved_at": "2026-06-03T15:42:00Z",
  "approved_by": "CEO B",
  "symbol": "MSFT",
  "direction_bias": "bullish_research_watch",
  "setup_type": "call_activity_plus_catalyst",
  "contract_snapshot": {
    "expiration": "2026-07-19",
    "strike": 420,
    "option_type": "call",
    "days_to_expiry": 46
  },
  "confidence": 78.4,
  "evidence_summary": [
    "Source-verified catalyst within 30 days",
    "Contract quality passed liquidity rules",
    "Relative activity above local baseline"
  ],
  "risk_notes": [
    "Premium-sensitive setup",
    "Packet is research-only and non-executing"
  ],
  "source_refs": [
    "src_earnings_calendar_001",
    "src_company_ir_014",
    "src_contract_snapshot_221"
  ],
  "disclaimer": "Research-only packet. No execution, recommendation, or automated trading."
}
```

Public packet must not include:

- private notes
- raw source URLs
- raw Obsidian memory
- local-only fields
- private screenshots
- account identifiers
- provider credentials
- direct order language

## Private Packet Extension

```json
{
  "raw_source_urls": ["local_or_private_redacted"],
  "source_trust_breakdown": {
    "src_earnings_calendar_001": 0.93,
    "src_company_ir_014": 0.97,
    "src_contract_snapshot_221": 0.88
  },
  "feature_scores": {
    "contract_quality": 0.84,
    "relative_activity": 0.79,
    "volatility_context": 0.65,
    "underlying_context": 0.71,
    "catalyst_context": 0.86,
    "source_confirmation": 0.91,
    "market_regime": 0.58
  },
  "internal_notes": "Revision request cleared after spread narrowed.",
  "rejected_alternatives": [
    "shorter-dated weekly contract blocked by DTE rule"
  ],
  "archive_links": [
    "arch_msft_prior_earnings_2026q1"
  ],
  "visibility": "local_only"
}
```

## Blocked Language

Blocked words and claims include:

- buy
- sell
- execute
- guaranteed
- prediction
- real-time
- live flow
- subscribers
- auto-trade
- copy-trade
- broker-connected
- order routing

Safer language:

- research packet
- CEO B review
- source-backed
- manual review
- local-only
- public-safe
- evidence bundle
- risk note
- invalidation
- archive memory

## Invalidation Logic

Every packet needs invalidation before review:

- catalyst is disproven, postponed, or no longer source-backed
- contract snapshot becomes stale
- spread widens beyond threshold
- open interest falls below threshold
- source conflict emerges
- market regime shifts enough to weaken the setup
- underlying thesis breaks
- privacy strip fails
- blocked language appears
- CEO B rejects or requests more evidence

## Archive Feedback Loop

```text
Packet outcome
  -> Archive record
  -> lesson candidate
  -> Risk Rules update
  -> future scoring calibration
```

Archive should preserve:

- approved packet
- rejected packet
- reason for rejection
- false-positive pattern
- source quality notes
- risk rule changes
- invalidation outcomes

The feedback loop improves research discipline. It must not become automatic trading optimization.

## Why Options Research Remains Deferred

Options Research has higher safety and capability risk than the existing Source Hub, Watchlists, Alerts, and Archive routes. It needs:

- approved data provenance
- explicit source freshness rules
- hard privacy stripping
- blocked language enforcement
- CEO B review gates
- no-execution UX boundaries
- clear public/private packet split

Until B approves implementation, this document is governance and planning only.
