import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI search: the shortlist channel nobody staffed',
  description: 'B2B buyers increasingly build their first vendor shortlist by asking ChatGPT, Claude, or Perplexity. Ranking on Google and being recommended by AI are different disciplines \u2014 and the gap is a land grab.',
  alternates: { canonical: '/insights/ai-search-shortlist-channel' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AI search: the shortlist channel nobody staffed',
  author: { '@type': 'Organization', name: 'The Steil Group' },
  publisher: { '@type': 'Organization', name: 'The Steil Group', url: 'https://thesteilgroup.com' },
  datePublished: '2026-07-21',
  mainEntityOfPage: 'https://thesteilgroup.com/insights/ai-search-shortlist-channel',
};

export default function Article() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article>
        <section className="hero no-rule">
          <div className="container">
            <span className="kicker">AI Search</span>
            <h1>AI search: the shortlist channel nobody staffed</h1>
            <p className="article-meta">The Steil Group · July 2026</p>
          </div>
        </section>
        <section className="prose no-rule" style={{ paddingTop: 0 }}>
          <div className="container stack">
            <p>
              Run one test before reading further: ask an AI assistant &ldquo;best
              [your category] for mid-market companies.&rdquo; If your company is in
              the answer, you are on shortlists you never knew existed. If it is not,
              a competitor is &mdash; every night, while the SEO dashboard says
              everything is fine.
            </p>
            <p>
              The shift underneath is simple: the first research step for a growing
              share of B2B buyers is no longer a search engine, it is a conversation
              with an AI assistant. The output of that conversation is a shortlist,
              and shortlists are where deals are won before anyone books a demo.
            </p>
            <p>
              What almost nobody has internalized is that ranking on Google and being
              recommended by AI are different disciplines. AI systems weight
              different signals: structured entity data, consistent positioning across
              sources, citable third-party authority, and content written so a machine
              can extract a clear claim about who you serve and what you do best.
              Fifteen years of SEO habits produce almost none of that by default.
            </p>
            <p>
              The practical move is a visibility audit &mdash; what the major
              assistants say about your category today, where your company appears,
              and what the sources behind those answers are &mdash; followed by fixing
              the machine-legibility of your own site and seeding the third-party
              sources the models actually read.
            </p>
            <p>
              SEO took fifteen years to become a line item in every budget. This will
              take three. The companies moving now are buying shortlist share at
              pre-auction prices.
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
