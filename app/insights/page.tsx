import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Insights — Growth Advisory & B2B Marketing',
  description:
    'STEIL\u2019s working notes on growth advisory and B2B marketing: finding untapped segments, AI search visibility, channel strategy, and GTM for software and data companies.',
  alternates: { canonical: '/insights' },
};

const posts = [
  {
    slug: 'next-segment-in-your-crm',
    date: 'Jul 2026',
    title: 'Your next growth segment is already in your CRM',
    teaser: 'Off-profile wins aren\u2019t noise. They\u2019re a map of demand that survived zero marketing support.',
  },
  {
    slug: 'ai-search-shortlist-channel',
    date: 'Jul 2026',
    title: 'AI search: the shortlist channel nobody staffed',
    teaser: 'Your buyers\u2019 first vendor list comes from a ChatGPT prompt at 9pm. Being in that answer is a discipline.',
  },
  {
    slug: 'direct-mail-2026',
    date: 'Jul 2026',
    title: 'The channel with a 100% open rate',
    teaser: 'Executives get 150 emails a day and two interesting packages a year. The math writes itself.',
  },
];

export default function Insights() {
  return (
    <>
      <section className="hero no-rule">
        <div className="container">
          <span className="kicker">Insights</span>
          <h1>Working notes on growth.</h1>
          <p className="lede">
            What we&rsquo;re seeing across B2B software GTM &mdash; short, practical,
            and written to be argued with.
          </p>
        </div>
      </section>
      <section className="no-rule" style={{ paddingTop: 0 }}>
        <div className="container">
          {posts.map((p) => (
            <div className="insight-item" key={p.slug} data-reveal>
              <span className="date">{p.date}</span>
              <div>
                <h3><Link href={`/insights/${p.slug}`}>{p.title}</Link></h3>
                <p>{p.teaser}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="cta-band">
        <div className="container">
          <h2>Want this applied to your GTM?</h2>
          <p>That&rsquo;s the consultation.</p>
          <Link href="/request-a-consultation" className="btn primary">Request a Consultation</Link>
        </div>
      </div>
    </>
  );
}
