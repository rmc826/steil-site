import type { Metadata } from 'next';
import Link from 'next/link';
import { Icon } from '@/components/Icon';

export const metadata: Metadata = {
  title: 'Focus Areas — Integrated Strategy, GTM Testing, Bottom-of-Funnel, Alignment',
  description:
    'STEIL\u2019s four core areas: integrated marketing strategy across print, digital, conferences, and AI; GTM pressure testing; bottom-of-funnel capture and competitive differentiation; sales and marketing alignment.',
  alternates: { canonical: '/focus-areas' },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does STEIL do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'STEIL is a GTM-as-a-Service agency for B2B software and data companies ($15–50M revenue). We deliver integrated marketing strategy, demand generation, AI search optimization, and sales-marketing alignment — functioning as an outsourced marketing department accountable to pipeline and EBITDA.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is GTM-as-a-Service?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GTM-as-a-Service is STEIL\'s model for delivering a full go-to-market function — strategy through execution — without the company needing to build an in-house marketing team. It includes integrated marketing strategy, demand generation, AI search visibility, conference marketing, print campaigns, and sales enablement, all managed as a unified engagement.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is AI search optimization?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI search optimization ensures your company appears in recommendations when buyers ask ChatGPT, Claude, Perplexity, and other AI assistants who to shortlist. It is a distinct discipline from traditional SEO — AI models weight structured entity data, consistent positioning across sources, and citable third-party authority.',
      },
    },
    {
      '@type': 'Question',
      name: 'What size companies does STEIL work with?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'STEIL works with B2B software and data companies in the $15–50M revenue range — typically companies that need enterprise-grade marketing capability but cannot justify building a full in-house team. Clients include CEOs, CROs, VPs of Sales, and VPs of Marketing.',
      },
    },
  ],
};

export default function FocusAreas() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <section className="hero no-rule">
        <div className="container">
          <span className="kicker">Focus Areas</span>
          <h1>Four core areas. One engine.</h1>
          <p className="lede">
            Everything we deploy rolls up to one of these &mdash; and every engagement
            connects them, because that&rsquo;s the point.
          </p>
        </div>
      </section>

      <section className="no-rule" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="area" data-reveal>
            <div>
              <div className="bignum">01</div>
              <div className="area-art">
                <Icon name="full-channel" size={92} strokeWidth={1.25} color="var(--steil-blue)" />
              </div>
            </div>
            <div>
              <h3>Develop an integrated marketing strategy</h3>
              <p>
                One plan across print, digital, conferences, and AI &mdash; every
                channel carrying the same narrative instead of running as disconnected
                line items.
              </p>
              <div className="chips">
                <span className="chip">Print Campaigns</span>
                <span className="chip">Programmatic Display &amp; Video</span>
                <span className="chip">Managed Conference Experiences</span>
                <span className="chip blue">AI Ad Placement</span>
                <span className="chip">Email &amp; Direct Mail</span>
                <span className="chip">Creative &amp; Design</span>
              </div>
            </div>
          </div>

          <div className="area" data-reveal>
            <div>
              <div className="bignum">02</div>
              <div className="area-art">
                <Icon name="velocity" size={92} strokeWidth={1.25} color="var(--steil-blue)" />
              </div>
            </div>
            <div>
              <h3>Pressure-test your GTM strategy</h3>
              <p>
                An outside read on segments, pricing, and win/loss truth &mdash; then
                fast iteration cycles, so the strategy improves quarterly instead of at
                the annual offsite.
              </p>
              <div className="chips">
                <span className="chip">Win/Loss Analysis</span>
                <span className="chip">Pricing</span>
                <span className="chip">Segment Economics</span>
                <span className="chip">Use-Case Identification</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="area-dark" data-reveal>
        <div className="container">
          <div className="area" style={{ borderTop: 'none', padding: 0 }}>
            <div>
              <div className="bignum">03</div>
              <div className="area-art">
                <Icon name="pipeline" size={92} strokeWidth={1.25} color="var(--blue-on-dark)" />
              </div>
            </div>
            <div>
              <h3>Capture bottom-of-funnel traffic</h3>
              <p>
                Deals are decided in searches, shortlists, and AI answers. We make sure
                you own yours &mdash; and that what buyers find there separates you
                from the field.
              </p>
              <p className="try-it">
                Try it: ask ChatGPT <em>&ldquo;best [your category] for mid-market
                companies&rdquo;</em> &mdash; if you&rsquo;re not in the answer, a
                competitor is.
              </p>
              <div className="chips" style={{ marginTop: 24 }}>
                <span className="chip">Google Ads</span>
                <span className="chip">SEO</span>
                <span className="chip blue">AI Search Visibility</span>
                <span className="chip">Competitive Differentiation</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="no-rule">
        <div className="container">
          <div className="area" style={{ borderTop: 'none' }} data-reveal>
            <div>
              <div className="bignum">04</div>
              <div className="area-art">
                <Icon name="alignment" size={92} strokeWidth={1.25} color="var(--steil-blue)" />
              </div>
            </div>
            <div>
              <h3>Align sales + marketing</h3>
              <p>
                Shared targets, shared narrative, shared pipeline &mdash; better
                connectivity across the GTM so the handoffs stop leaking deals.
              </p>
              <div className="chips">
                <span className="chip">LinkedIn ABM</span>
                <span className="chip">Sales-Ready Messaging</span>
                <span className="chip">Shared Reporting</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section data-reveal>
        <div className="container">
          <div className="section-head">
            <h2>Frequently asked questions</h2>
          </div>
          <ul className="hairlist">
            <li>
              <h3>What does STEIL do?</h3>
              <p>
                STEIL is a GTM-as-a-Service agency for B2B software and data companies
                ($15&ndash;50M revenue). We deliver integrated marketing strategy, demand
                generation, AI search optimization, and sales-marketing alignment &mdash;
                functioning as an outsourced marketing department accountable to pipeline
                and EBITDA.
              </p>
            </li>
            <li>
              <h3>What is GTM-as-a-Service?</h3>
              <p>
                It&rsquo;s our model for delivering a full go-to-market function &mdash;
                strategy through execution &mdash; without the company needing to build an
                in-house marketing team. It includes everything from{' '}
                <Link href="/insights/perspectives/ai-search-shortlist-channel">AI search visibility</Link>{' '}
                to conference marketing to sales enablement, managed as a unified engagement.
              </p>
            </li>
            <li>
              <h3>What is AI search optimization?</h3>
              <p>
                It ensures your company appears in recommendations when buyers ask
                ChatGPT, Claude, Perplexity, and other AI assistants who to shortlist. It
                is a distinct discipline from traditional SEO &mdash;{' '}
                <Link href="/insights/perspectives/ai-search-shortlist-channel">read more about it</Link>.
              </p>
            </li>
            <li>
              <h3>What size companies does STEIL work with?</h3>
              <p>
                B2B software and data companies in the $15&ndash;50M revenue range.{' '}
                <Link href="/who-we-help">See who we help</Link> for more on the roles
                and buying groups we work with.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <div className="cta-band">
        <div className="container">
          <h2>Not sure where to start?</h2>
          <p>That&rsquo;s what a first conversation is for.</p>
          <Link href="/contact" className="btn primary">Get in touch</Link>
        </div>
      </div>
    </>
  );
}
