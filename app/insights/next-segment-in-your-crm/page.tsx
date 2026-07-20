import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Your next growth segment is already in your CRM',
  description: 'Off-profile customers are the strongest demand signal a company can get: buyers who fought through positioning not written for them. How to read your closed-won data as an expansion map.',
  alternates: { canonical: '/insights/next-segment-in-your-crm' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Your next growth segment is already in your CRM',
  author: { '@type': 'Organization', name: 'The Steil Group' },
  publisher: { '@type': 'Organization', name: 'The Steil Group', url: 'https://thesteilgroup.com' },
  datePublished: '2026-07-21',
  mainEntityOfPage: 'https://thesteilgroup.com/insights/next-segment-in-your-crm',
};

export default function Article() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article>
        <section className="hero no-rule">
          <div className="container">
            <span className="kicker">Growth Advisory</span>
            <h1>Your next growth segment is already in your CRM</h1>
            <p className="article-meta">The Steil Group · July 2026</p>
          </div>
        </section>
        <section className="prose no-rule" style={{ paddingTop: 0 }}>
          <div className="container stack">
            <p>
              Pull your last 50 closed-won deals. Flag every customer that does not
              match your ICP. Now look at what those flagged accounts have in common.
            </p>
            <p>
              Those off-profile wins are not noise. They are customers who found a use
              case you never marketed &mdash; and who fought through positioning that
              was not written for them, then bought anyway. That is the strongest
              demand signal a company can get: demand that survived zero marketing
              support.
            </p>
            <p>
              Most teams treat these deals as anomalies and get back to the ICP.
              Growing teams treat them as a map. Cluster the outliers by industry, use
              case, and buying trigger, and one of those clusters is usually a segment
              worth naming out loud &mdash; a page on the site, a sequence in the
              outbound, a line in the sales deck.
            </p>
            <p>
              The economics are what make this the first place to look. Expanding into
              a segment your product already wins requires no roadmap changes, no new
              pricing architecture, and no upmarket sales motion. It requires
              marketing operations pointed at buyers who already exist &mdash; which
              is a much cheaper problem than the ones most growth plans start with.
            </p>
            <p>
              The exercise takes an afternoon. What it usually surfaces takes a
              quarter to capture &mdash; and it is the fastest quarter of growth most
              mid-market software companies have available to them.
            </p>
          </div>
        </section>
        <div className="cta-band">
          <div className="container">
            <h2>Want this applied to your GTM?</h2>
            <p>That&rsquo;s the consultation.</p>
            <Link href="/request-a-consultation" className="btn primary">Request a Consultation</Link>
          </div>
        </div>
      </article>
    </>
  );
}
