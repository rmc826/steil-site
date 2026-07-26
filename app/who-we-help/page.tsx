import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Who We Help — Executive, Marketing & Sales Teams at B2B Software Companies',
  description:
    'STEIL works with executive, marketing, and sales leaders at B2B software and data companies: find the blue ocean, accelerate the marketing engine, and sharpen the competitive edge.',
  alternates: { canonical: '/who-we-help' },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does STEIL work with executive teams?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'STEIL works directly with CEOs, CROs, and boards to pressure-test the commercial motion, identify untapped growth segments, and deploy a GTM stack against them. Every readout is built for the boardroom — pipeline coverage, CAC trajectory, hold-period math.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can STEIL replace an in-house marketing team?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. STEIL functions as a fractional marketing department — senior strategy plus hands-on execution across every channel. Clients get enterprise-grade output on a mid-market budget without hiring a full team. We plug into your existing structure and operate as an extension of the company.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does STEIL help sales teams?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'STEIL builds positioning from win/loss truth, creates messaging sales reps can actually use, and runs top-of-funnel programs that warm accounts before outreach. The result is a fuller pipeline and shorter sales cycles.',
      },
    },
  ],
};

export default function WhoWeHelp() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <section className="hero no-rule">
        <div className="container">
          <span className="kicker">Who We Help</span>
          <h1>Running a company is hard.<br />Working with us isn&rsquo;t.</h1>
          <p className="lede">
            We&rsquo;re the strategic arm of your growth &mdash; a partner that plugs
            into your team, understands the pressure each seat carries, and scales
            your marketing operations like an extension of the company.
          </p>
        </div>
      </section>

      <section className="no-rule" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="area" data-reveal>
            <div><div className="bignum">01</div></div>
            <div>
              <h3>Executives</h3>
              <p>
                <strong>Find the blue ocean. Pressure-test the commercial motion.</strong>{' '}
                An outside read on where growth actually comes from &mdash; and a GTM
                stack deployed against it, not a deck that dies in a drawer.
              </p>
              <div className="chips">
                <span className="chip">CEO</span>
                <span className="chip">CRO</span>
                <span className="chip">Board</span>
                <span className="chip blue">Growth Thesis, Defended</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="area-dark" data-reveal>
        <div className="container">
          <div className="area" style={{ borderTop: 'none', padding: 0 }}>
            <div><div className="bignum">02</div></div>
            <div>
              <h3>Marketing</h3>
              <p>
                <strong>Accelerate your marketing engine.</strong> Enterprise-grade
                output on a mid-market budget: senior strategy support plus hands-on
                execution across every channel &mdash; a partner who makes you look
                right, not a vendor you manage.
              </p>
              <div className="chips" style={{ marginTop: 20 }}>
                <span className="chip">CMO</span>
                <span className="chip">VP Marketing</span>
                <span className="chip blue">An Engine That Ships Weekly</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="no-rule">
        <div className="container">
          <div className="area" style={{ borderTop: 'none' }} data-reveal>
            <div><div className="bignum">03</div></div>
            <div>
              <h3>Sales</h3>
              <p>
                <strong>Sharpen your competitive edge and win faster.</strong>{' '}
                Positioning built on win/loss truth, messaging your reps can say out
                loud, and top-of-funnel programs that warm accounts before outreach.
              </p>
              <div className="chips">
                <span className="chip">CRO</span>
                <span className="chip">VP Sales</span>
                <span className="chip blue">Fuller Pipeline, Shorter Cycles</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section data-reveal>
        <div className="container">
          <div className="section-head">
            <h2>Common questions</h2>
          </div>
          <ul className="hairlist">
            <li>
              <h3>How does STEIL work with executive teams?</h3>
              <p>
                We work directly with CEOs, CROs, and boards to pressure-test the
                commercial motion, identify{' '}
                <Link href="/insights/perspectives/next-segment-in-your-crm">untapped growth segments</Link>,
                and deploy a GTM stack against them. Every readout is built for the
                boardroom.
              </p>
            </li>
            <li>
              <h3>Can STEIL replace an in-house marketing team?</h3>
              <p>
                Yes. We function as a fractional marketing department &mdash; senior
                strategy plus hands-on execution across every channel. See our{' '}
                <Link href="/focus-areas">four core areas</Link> and the{' '}
                <Link href="/insights/case-studies/fleet-carve-out">fleet carve-out case study</Link>{' '}
                for how an engagement runs in practice.
              </p>
            </li>
            <li>
              <h3>How does STEIL help sales teams?</h3>
              <p>
                We build positioning from win/loss truth, create messaging reps can
                actually use, and run top-of-funnel programs that warm accounts before
                outreach. The result is a fuller pipeline and shorter sales cycles.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <div className="cta-band">
        <div className="container">
          <h2>Whichever seat you&rsquo;re in, start the same way.</h2>
          <p>One consultation on your GTM motion. Bring the pressure you&rsquo;re under.</p>
          <Link href="/request-a-consultation" className="btn primary">Request a Consultation</Link>
        </div>
      </div>
    </>
  );
}
