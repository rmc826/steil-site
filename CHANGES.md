# STEIL site update — handoff package

Sprint change: **new iconography** (the sanctioned STEIL stroke-only icon set),
**drop the How It Works and Request a Consultation pages** (the latter is
duplicative with Contact), repoint all CTAs to Contact, and update the contact
email to **rc@steilgrowth.com**.

Everything in this folder mirrors the `steil-site` repo layout. Copy files to the
matching paths, apply the two manual steps, delete the retired routes, commit.

> Note: your repo currently contains a stray **nested `app/app/` duplicate tree**.
> The canonical Next.js source is the top-level `app/`. These instructions target
> the top-level `app/`. Consider deleting `app/app/` in the same commit to avoid
> confusion — nothing imports from it.

---

## 1. Add (new file)

| From (this package) | To (repo) |
| --- | --- |
| `components/Icon.tsx` | `components/Icon.tsx` |

The sanctioned icon set: 18 stroke-only icons on a 24-unit grid, 2px default
stroke, square terminals, mitre joins, zero fills. Import: `import { Icon } from
'@/components/Icon';` — usage `<Icon name="alignment" size={34} />`. Blue is a
signal: pass `color="var(--steil-blue)"` (or `var(--blue-on-dark)` on the Ink
band) for a single emphasis mark, never a whole set. (This is the same component
that lives in the design system at `components/icon/Icon.jsx`, ported to TSX.)

## 2. Replace (overwrite existing)

| File | What changed |
| --- | --- |
| `app/layout.tsx` | Nav array drops **How It Works**, **Request a Consultation**, and the plain **Contact** link (it was duplicative). Single entry point is the **Get in touch** CTA (`className="nav-cta"`) → `/contact`. Footer email → `rc@steilgrowth.com`. |
| `app/contact/page.tsx` | mailto fallback email → `rc@steilgrowth.com`. This is now the one contact surface. |
| `app/page.tsx` | Icons added to the four core areas (`full-channel`, `velocity`, `pipeline`, `alignment`). Hero CTAs: primary **Get in touch** → `/contact`, secondary **Focus Areas** → `/focus-areas` (was "How It Works"). Closing CTA → `/contact`. JSON-LD email → `rc@steilgrowth.com`. |
| `app/focus-areas/page.tsx` | The four inline `Art` SVGs replaced with `<Icon>` (`full-channel`, `velocity`, `pipeline`, `alignment`); area 03 uses `var(--blue-on-dark)`. Closing CTA → `/contact`. |
| `app/sitemap.ts` | Removed `/how-it-works` and `/request-a-consultation`. |
| `vercel.json` | Added 301 redirects `/how-it-works → /focus-areas` and `/request-a-consultation → /contact`; repointed `/request-a-diagnostic → /contact` (its old target is gone). |

## 3. Edit by hand

**a. `app/globals.css`** — append the rules in `app/globals.append.css` to the end
of the file (purely additive; nothing above is removed).

**b. Repoint the remaining CTAs.** These pages still link to the deleted
`/request-a-consultation`. Do a find/replace across the repo:

- `href="/request-a-consultation"` → `href="/contact"`
- button label `Request a Consultation` → `Get in touch`

Files that contain it: `app/about/page.tsx`, `app/who-we-help/page.tsx`,
`app/insights/page.tsx`, `app/insights/ai-search-shortlist-channel/page.tsx`,
`app/insights/direct-mail-2026/page.tsx`, `app/insights/next-segment-in-your-crm/page.tsx`,
`app/why-pe-backed-saas-stalls/page.tsx`.

**c. Confirm no old email remains.** All contact emails must be
`rc@steilgrowth.com`. `app/layout.tsx` and `app/contact/page.tsx` are already
patched in this package. The only other `mailto:ryan@thesteilgroup.com` lived on
the now-deleted `request-a-consultation` / `request-a-diagnostic` pages, so it
disappears with them — but grep once to be sure:
`grep -rn "ryan@thesteilgroup.com" app` should return nothing.
(The `thesteilgroup.com` *domain* in metadata/URLs is left as-is — only the email
changed. Tell me if the domain is also moving to steilgrowth.com.)

## 4. Delete (retired routes)

- `app/how-it-works/` (whole folder)
- `app/request-a-consultation/` (whole folder)
- `app/app/` — the stray duplicate tree (optional but recommended)

The `/request-a-diagnostic` route is handled by the redirect in `vercel.json`; you
can leave or remove `app/request-a-diagnostic/`.

## 5. Also update `SPEC.md` (living doc)

Under **Page inventory**, remove `/how-it-works` and `/request-a-consultation`;
update the redirect note to `/request-a-diagnostic → /contact`. Add a decision-log
line for this sprint (new icon set adopted; How It Works + Consultation pages
retired; email → rc@steilgrowth.com). Note: per the current CTA rule the primary
CTA copy is now **"Get in touch"** pointing at Contact.

---

### Verify locally

    npm install
    npm run dev     # check: nav has 5 links + Get in touch; home core areas
                    # and focus-areas show icons; no /request-a-consultation or
                    # /how-it-works links remain; footer email is rc@steilgrowth.com
    npm run build   # static export must pass with no dangling links
