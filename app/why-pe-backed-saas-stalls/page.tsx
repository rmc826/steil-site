import type { Metadata } from 'next';
import Link from 'next/link';

// ============================================================
// POV PIECE — DRAFT SCAFFOLD (WS3 anchor content asset)
// This page ships noindex until the real essay is in place.
// When final: (1) replace the outline below with the essay,
// (2) delete the `robots` line, (3) update datePublished.
// ============================================================

export const metadata: Metadata = {
  title: 'Why PE-Backed SaaS Stalls',
  description:
    'The structural reasons PE portfolio company growth stalls: a GTM motion that stopped compounding, rising competitive pressure, and hold-period math that demands margin without new capital.',
  alternates: { canonical: '/why-pe-backed-saas-stalls' },
  robots: { index: false, follow: true }, // REMOVE when the essay is final
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Why PE-Backed SaaS Stalls',
  author: { '@type': 'Person', name: 'Ryan Steil' },
  publisher: { '@type': 'Organization', name: 'The Steil Group', url: 'https://thesteilgroup.com' },
  datePublished: '2026-08-01', // UPDATE on publish
  mainEntityOfPage: 'https://thesteilgroup.com/why-pe-backed-saas-stalls',
};

export default function POVPiece() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article>
        <section className="hero no-rule">
          <div className="container">
            <span className="kicker">Point of View</span>
            <h1>Why PE-backed SaaS stalls</h1>
            <p className="article-meta">Ryan Steil · Draft — do not distribute</p>
          </div>
        </section>

        <section className="prose">
          <div className="container stack">
            {/* ---- OUTLINE TO REPLACE WITH FINAL ESSAY ---- */}
            <p>
              [Opening: the pattern — a portco enters the hold at 25% growth and exits
              year two at 8%, and everyone blames sales execution first.]
            </p>
            <h2>The motion that got you here stopped compounding</h2>
            <p>[Founder-led + referral + one paid channel has a ceiling; show the shape.]</p>
            <h2>Competition arrived during the hold</h2>
            <p>[Category matured; differentiation eroded; win rates tell the story first.]</p>
            <h2>The margin mandate makes it worse</h2>
            <p>
              [EBITDA pressure cuts the exact investments that restart growth — the
              doom loop of the stalled portco.]
            </p>
            <h2>What restarting actually takes</h2>
            <p>[The function, not the org. Diagnostic → foundation → operate.]</p>
          </div>
        </section>

        <div className="cta-band">
          <div className="container">
            <h2>Is this your portfolio company?</h2>
            <p>The diagnostic is where we find out.</p>
            <Link href="/request-a-diagnostic" className="btn primary">Request a Diagnostic</Link>
          </div>
        </div>
      </article>
    </>
  );
}
