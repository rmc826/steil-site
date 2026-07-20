# STEIL case study — Fleet carve-out

Drop-in Next.js route for `rmc826/steil-site`. Uses the site's existing global
CSS classes (`.hero-photo`, `.band-dark`, `.statrow.on-dark`, `.area`, `.split`,
`.hairlist`, `.chip`, `.cta-band`) and the shared `layout.tsx` masthead / Grade
divider / footer — no new CSS or components needed.

## Files
- `app/case-studies/fleet-carve-out/page.tsx` → route **`/case-studies/fleet-carve-out`**
- `public/case-fleet.jpg` → hero photo (placeholder — swap for a licensed image before publishing)

## Add it to the repo

From the root of your local `steil-site` clone:

```bash
# copy the two files in (paths mirror the repo)
mkdir -p app/case-studies/fleet-carve-out
cp /path/to/export/app/case-studies/fleet-carve-out/page.tsx app/case-studies/fleet-carve-out/page.tsx
cp /path/to/export/public/case-fleet.jpg public/case-fleet.jpg

git checkout -b case-study/fleet-carve-out
git add app/case-studies/fleet-carve-out/page.tsx public/case-fleet.jpg
git commit -m "Add fleet carve-out case study"
git push -u origin case-study/fleet-carve-out
```

Then open a PR from that branch. `npm run dev` and visit
`/case-studies/fleet-carve-out` to preview locally first.

## Before publishing
- **Photo:** `public/case-fleet.jpg` is the stock image you supplied. Confirm the
  license permits use, or replace it (keep the same filename).
- **Metrics:** 5× pipeline / 3 logos / 30% conference ROI are stated as given —
  tie to a baseline if legal/marketing wants it.
- **Linking:** it's a standalone page (not in the top nav). To surface it, add a
  link from `/insights` or a new "Work" nav item in `app/layout.tsx`.
- **Client quote:** none included — add a `<blockquote>` in the Resolution or
  Results section if you get an approved testimonial.
