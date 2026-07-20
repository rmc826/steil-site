# STEIL — Site & Brand Spec (living document)
*Read this first in any working session. Update it every sprint. Decisions here override older conversation history.*
*Last updated: July 20, 2026 (Sprint 2)*

## Positioning
- STEIL is a **growth agency — GTM-as-a-Service** for **B2B software and data companies ($15–50M revenue)**.
- Value prop: **"We help B2B software and data companies increase their brand visibility by enabling them to scale their marketing operations."**
- We sell growth advisory (blue ocean, market expansion, use-case identification) fused with full-channel delivery.
- Audience: CEOs, CROs, VPs of Sales, VPs of Marketing. NOT sponsor/PE-speak — no "hold period," no "portco" on the site.

## Voice
- Agency "we." No headcount references, no "senior operator/no handoff" solo tells.
- Practitioner-confident, concrete, no hard sell. CTA = **"Request a Consultation"** (NEVER "diagnostic" — diagnostic implies broken; consultation implies options).
- The name STEIL is just the brand lever. **No German etymology, no /style/ pronunciation, no "steep" lore anywhere.** The Grade (2:1 rising stroke) stays as a pure visual motif.

## The four core areas (homepage, verbatim intent)
1. Develop an integrated marketing strategy across print, digital, conferences, AI
2. Pressure-test your GTM strategy and iterate quickly
3. Capture bottom-of-funnel traffic and establish competitive differentiation
4. Align sales + marketing for better connectivity across the GTM

## Services list
AI Ad Placement · Google Ads · Programmatic Display & Video · Managed Conference Experiences · Print Campaigns · SEO · AI Search Visibility · Email & Direct Mail · Creative & Design · LinkedIn ABM

## Proof
- Hero stats: **+50% new-logo pipeline · 7x valuation · +30% new logos** — labeled "From past engagements."
- "Trusted by" marquee: **HiLabs, Powerfleet, Derive Systems.** (renamed from Past Engagements 2026-07-20)
- Attribution stories per stat: OWED (see planner P1). Employment-agreement review: OWED (F4).

## Visual system
- Brand sheet v1.0: Paper #FAFAF7, Ink #0F1215, Steil Blue #2333E8, Ice #E8EBFB, Stone #6E7680. Archivo (display) / Source Serif 4 (body) / IBM Plex Mono (kickers, data). Hairlines, kickers, no card shadows.
- Photography direction: **candid business/working-session imagery** (people mid-discussion, no camera eye contact). NOT mountains/terrain (rejected — brand metaphor lost to buyer logic). Hero photo: public/hero.jpg (Unsplash, campaign-creators). Charts-as-decoration rejected.
- Wordmark = fixed vector paths (components/Wordmark.tsx). Never retype.

## Page inventory
/ · /focus-areas · /how-it-works · /who-we-help · /insights (+3 articles) · /request-a-consultation · /contact · /why-pe-backed-saas-stalls (draft, noindex)
Design system per page: oversized mono numerals, tight copy (2 sentences/block), service chips, one dark or photo band per page, reveal-on-scroll. "Operator-led" language banned on service pages; permitted ONLY on /about as founder story (Ryan "RC" Campbell, 11+ yrs corporate). Voice = partner energy: "running a company is hard, we make it easy to work with us," strategic arm, not vendor. Insights = content home; LinkedIn posts link to articles, articles target SEO phrases (growth advisory, AI search visibility, B2B marketing).
Redirects: /who-its-for → /who-we-help · /request-a-diagnostic → /request-a-consultation

## Tech
Next.js 15 static export on Vercel. Env vars (build-time — redeploy after changes): NEXT_PUBLIC_TALLY_FORM_ID, NEXT_PUBLIC_TALLY_CONTACT_ID, NEXT_PUBLIC_GA_ID, NEXT_PUBLIC_POSTHOG_KEY. Fonts self-hosted in app/fonts/.

## Decision log
- 2026-07-19: Brand kit v1.0. Editorial system, electric ultramarine accent.
- 2026-07-19: Site live on Vercel + Namecheap DNS.
- 2026-07-20 (later): How It Works + Who We Help rebuilt visual-first; "operator-led" removed; Insights section added with 3 seed articles; marquee relabeled Trusted by.
- 2026-07-20: Operator voice REJECTED → agency voice. "Top of funnel" hero REJECTED → blue ocean triplet. Chart graphic REJECTED → photo hero. Mountains REJECTED → conference-room photography. Diagnostic → Consultation. German lore removed. Who It's For → Who We Help (by buying group). Hero stats + Past Engagements marquee added at Ryan's direction.

## Backlog (next sprints)
Persona capability pages · case studies x3 · POV essay final · real deliverable screenshots · PostHog key · conversion events on CTAs · mid-page photo band (needs 2nd image) · Ryan headshot section
