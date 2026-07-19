# STEIL — thesteilgroup.com

Next.js 15 (App Router, static export) · brand sheet v1.0 tokens · self-hosted fonts.

## Deploy to Vercel

1. Push this repo to GitHub, then "Add New Project" in Vercel and import it.
   Framework preset auto-detects Next.js; no config needed (static export is set
   in `next.config.mjs`).
2. In Vercel → Settings → Domains: add `thesteilgroup.com` as primary; add
   `www.thesteilgroup.com` and set it to redirect to the apex.
3. In Vercel → Settings → Environment Variables, add (see `.env.example`):
   - `NEXT_PUBLIC_TALLY_FORM_ID` — the ID from your Tally form URL (tally.so/r/XXXX).
     Until set, the diagnostic page shows a mailto fallback.
   - `NEXT_PUBLIC_POSTHOG_KEY` (+ optional `NEXT_PUBLIC_POSTHOG_HOST`).
     Vercel Analytics needs no key — just enable Analytics on the project.
4. Redeploy after setting env vars (they're baked in at build time).

## Launch-day SEO checklist

- [ ] Google Search Console: verify the domain (DNS TXT record on thesteilgroup.com)
- [ ] Submit https://thesteilgroup.com/sitemap.xml in Search Console
- [ ] Finish the POV essay in `app/why-pe-backed-saas-stalls/page.tsx`:
      replace the outline, delete the `robots: { index: false }` line,
      set `datePublished`, and add the URL to `app/sitemap.ts`
- [ ] Request indexing on the POV piece the day it publishes
- [ ] Bing Webmaster Tools (free, and feeds some AI search engines): verify + submit sitemap

## Where things live

- Brand tokens: `app/globals.css` (`:root` block — matches brand sheet v1.0)
- Fonts: `app/fonts/` — vendored from the google/fonts repo (OFL license),
  self-hosted via `next/font/local`. No Google request at build or runtime.
- Wordmark: `components/Wordmark.tsx` — fixed vector paths; never retype the logo
- The Grade divider: `components/GradeRule.tsx` — one per page, in the layout
- Per-page SEO: each `page.tsx` exports `metadata` (title/description/canonical)
- Structured data: JSON-LD on home (ProfessionalService) and the POV piece (Article)
- Sitemap/robots: `app/sitemap.ts`, `app/robots.ts`

## Local dev

    npm install
    npm run dev      # http://localhost:3000
    npm run build    # static export to out/
