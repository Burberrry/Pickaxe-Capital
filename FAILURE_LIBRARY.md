# PICKAXE CAPITAL FAILURE LIBRARY

This file protects the system from repeating dangerous mistakes.

## Failure 1 — Fake Live Data

Problem: A visual, card, or alert includes a market number that was not verified.

Rule: No market number appears unless Source Ledger has source, timestamp, and verification status.

## Failure 2 — Forced Output

Problem: The system creates a research card just because something moved.

Rule: Silence Gate must allow No Output.

## Failure 3 — Missing Invalidation

Problem: A card has a thesis but no invalidation.

Rule: Risk Gate blocks approval.

## Failure 4 — CEO B Bypass

Problem: A card appears approved without human review.

Rule: CEO B Review is mandatory before public output.

## Failure 5 — Scope Creep

Problem: A new feature does not improve the QQQ Research Card Flow.

Rule: Defer it.

## Failure 6 — Options Liquidity Blind Spot

Problem: Options language appears without IV, volume, open interest, spread, and liquidity verification.

Rule: Risk Gate blocks options-specific claims until options context is verified.

## Failure 7 — Visual Hallucination

Problem: A generated image includes fake stock prices, fake chart levels, fake P&L, or fake performance.

Rule: Visual Story Engine must use Source Required / Timestamp Required labels unless data is verified.

## Failure 8 — Compliance Drift

Problem: Copy starts to sound like financial advice, trade instruction, or guaranteed outcome.

Rule: Use research-only language and approved terms only.

## Failure 9 — Black Swan Misread

Problem: Data is technically current but functionally unreliable during extreme volatility.

Rule: Activate Black Swan / Extreme Volatility Mode and require CEO B escalation.

## Failure 10 — Vague Memory

Problem: Memory Vault stores vague notes like “QQQ was wrong.”

Rule: Every memory must include event, what happened, what the system saw, what it missed, issue type, rule created, and future agent task.
