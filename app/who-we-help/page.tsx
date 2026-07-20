import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Who We Help — Executive, Marketing & Sales Teams at B2B Software Companies',
  description:
    'STEIL works with executive, marketing, and sales leaders at $15\u201350M B2B software and data companies: find the blue ocean, accelerate the marketing engine, and sharpen the competitive edge.',
  alternates: { canonical: '/who-we-help' },
};

export default function WhoWeHelp() {
  return (
    <>
      <section className="hero no-rule">
        <div className="container">
          <span className="kicker">Who We Help</span>
          <h1>Built for the people carrying the number.</h1>
          <p className="lede">
            STEIL works with $15&ndash;50M B2B software and data companies &mdash; and
            inside them, with the three seats that own growth. Different chair,
            different pressure, same engine underneath.
          </p>
        </div>
      </section>

      <section data-reveal>
        <div className="container">
          <div className="section-head">
            <h2>Executives</h2>
            <span className="kicker quiet">CEO · CRO · Board</span>
          </div>
          <div className="stack">
            <p>
              <strong>Find the blue ocean, and pressure-test the commercial motion.</strong>
            </p>
            <p>
              You&rsquo;re carrying the growth thesis, and the honest question is
              whether the current motion can deliver it. STEIL brings an outside read:
              where the untapped segments and use cases are, what the win/loss data
              actually says, whether pricing is leaving value on the table &mdash; and
              a stress test of the commercial engine before the market runs one for
              you.
            </p>
            <p>
              What you get: a growth thesis you can defend in any room, backed by a GTM
              stack that&rsquo;s actually deployed against it.
            </p>
          </div>
        </div>
      </section>

      <section data-reveal>
        <div className="container">
          <div className="section-head">
            <h2>Marketing</h2>
            <span className="kicker quiet">CMO · VP Marketing</span>
          </div>
          <div className="stack">
            <p>
              <strong>Accelerate your marketing engine.</strong>
            </p>
            <p>
              You&rsquo;re expected to produce enterprise-grade output with a
              mid-market team &mdash; more channels, more content, more pipeline
              contribution, same headcount. STEIL plugs in as senior horsepower:
              strategy support at your level, plus hands-on execution across paid
              search, SEO, AI search, programmatic, creative, email, and direct mail.
            </p>
            <p>
              What you get: an engine that ships every week, instrumentation that
              proves what&rsquo;s working, and a partner who makes you look right
              &mdash; not a vendor you have to manage.
            </p>
          </div>
        </div>
      </section>

      <section data-reveal>
        <div className="container">
          <div className="section-head">
            <h2>Sales</h2>
            <span className="kicker quiet">CRO · VP Sales</span>
          </div>
          <div className="stack">
            <p>
              <strong>Sharpen your competitive edge and win faster.</strong>
            </p>
            <p>
              Your team is walking into deals where the competitor got there first
              &mdash; in the buyer&rsquo;s research, in the analyst note, in the answer
              ChatGPT gave them before your first call. STEIL builds the air cover:
              positioning grounded in win/loss truth, sales-ready messaging your reps
              can actually say, competitive intel that&rsquo;s current, and top-of-funnel
              programs that warm accounts before outreach.
            </p>
            <p>
              What you get: fuller pipeline at the top, sharper differentiation in the
              deal, shorter cycles at the close.
            </p>
          </div>
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
