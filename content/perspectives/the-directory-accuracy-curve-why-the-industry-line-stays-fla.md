---
title: The Directory Accuracy Curve: Why the Industry Line Stays Flat, and What Actually Bends It
description: Directory accuracy isn't a number — it's a trajectory. Here's why most plans' lines stay flat, and what a bend in the curve actually looks like.
kicker: Data Quality
date: 2026-08-02
---

Every health plan can produce a directory-accuracy percentage on demand. Far fewer can produce a trend line. That distinction matters more than the number itself, because a flat line and a climbing one can share the same starting point and tell completely different stories about whether the underlying process actually works.

## The Honest Starting Line

CMS is moving to make directory accuracy a publicly measurable, auditable metric under its forthcoming National Provider Directory mandate — a shift from "plans assert accuracy" to "plans prove it." That regulatory pressure has been building for years, through audit rounds, secret-shopper phone checks, and consent-decree language that already treats provider data as compliance infrastructure, not back-office housekeeping.

The uncomfortable part isn't the audits. It's that despite them, industry accuracy hasn't moved much. Plans measure it, report it, get flagged for it, and the number is roughly where it was the last time anyone measured it. That's the honest starting line — not a flattering baseline dressed up with a favorable sample, but the number every plan is actually held against.

We treat that flat line as data, not an indictment. It tells you something specific: periodic remediation, run after the fact, against a directory that's already 30%+ churned by the time anyone gets to it, produces a flat line by design. You can't out-audit a moving target. The question worth asking isn't "why hasn't the industry fixed this" — it's "what would the line look like if scoring happened at intake instead of after the fact."

## What a Bend Looks Like

Centene's Quantym 3.0 rebuild is a useful answer, with one caveat stated up front: it's an in-progress engagement, not a finished average, and the results below are a proof-of-concept measure — not the full-directory number.

On the specific confidence-tier work — NPI, address, and phone record-matching — the POC moved from 53% to 86% confidence, with accuracy lifts of roughly 29 to 33 points across tiers. That's a narrower, more technical measure than "directory accuracy" as a whole, and it shouldn't be read as the industry-wide number moving. It's evidence of what scoring-at-intake does to a specific, well-defined slice of the record: web-verified phone accuracy in current delivery sits at 91%, backed by a validation process that backtests every release against roughly 8,000 ground-truth calls.

The full-directory target — moving Centene's baseline from 51% toward 80%+ — remains a six-month rebuild in progress, with an internal audit checkpoint still ahead. We're naming it as a target because that's what it is. The honest version of this story is more useful to a buyer than a hockey-stick chart that quietly skips the part where the work is still happening.

## Why the Line Stays Flat, Even When Plans Want It to Move

In our conversations with directory-accuracy teams, two reasons come up more than any others for why the number doesn't move even when leadership wants it to. Neither is universal law — they're patterns we've observed across client engagements, not a diagnosis we'd apply to every plan.

The first is a fear that a more honest directory looks like a thinner network. If validating at intake surfaces more terminated affiliations, wrong addresses, and providers who never really took new patients at that location, the visible network gets smaller before it gets more accurate — and "smaller" is a hard sell internally, even when it's true.

The second is timing. Heading into AEP, the pressure isn't to be accurate — it's to show a member their doctor, at that address, in that plan, right now. A remediation queue that's still working through a backlog doesn't clear in time for open enrollment, so the flawed record ships anyway, because the alternative is showing nothing.

Both patterns are organizational, not technical. A directory-accuracy team already knows how to fix a wrong phone number. What they don't always have is a number their Network Strategy counterpart and their Compliance counterpart will accept as equally defensible — which means the real conversation about the tradeoff never happens on evidence. It happens on instinct, department by department.

## The Same Number, Every Team

This is the part of the story that matters more than the slope of any single chart. H1's role isn't to promise a higher score — it's to give Directory Data Governance, Compliance, and Network Strategy the same defensible number, built from the same methodology, so the internal conversation about tradeoffs has something to stand on besides who argues loudest in the room.

In practice that means confidence-score buckets a DDG lead can hand to a remediation team instead of a full directory dump; record-level explainers a compliance officer can show a regulator instead of an assertion; peer-benchmarked accuracy figures a network strategist can weigh against adequacy risk before a decision gets made, not after a complaint arrives. Every one of those artifacts is built from the same scoring pass — one graph, evaluated once, read differently by whoever needs it.

The flat line isn't evidence that directory accuracy can't move. It's evidence that most plans have been asking the wrong teams to fix it with the wrong tool — an audit cycle instead of a shared, defensible starting point. That's a fixable problem, but it starts with agreeing on the number before arguing about what to do with it.

If your teams are having that argument right now — DDG says one number, Compliance wants another, Network Strategy isn't sure either is right — we'd welcome a conversation about what a shared, defensible baseline would look like for your directory.
