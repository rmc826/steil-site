import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Who We Help — Executive, Marketing & Sales Teams at B2B Software Companies',
  description:
    'STEIL works with executive, marketing, and sales leaders at B2B software and data companies: find the blue ocean, accelerate the marketing engine, and sharpen the competitive edge.',
  alternates: { canonical: '/who-we-help' },
};

export default function WhoWeHelp() {
  return (
    <>
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
