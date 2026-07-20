import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How It Works — GTM-as-a-Service, Step by Step',
  description:
    'How a STEIL engagement runs: a consultation, a fixed-scope Foundation engagement, then STEIL as your ongoing marketing engine \u2014 GTM-as-a-Service for B2B software and data companies.',
  alternates: { canonical: '/how-it-works' },
};

export default function HowItWorks() {
  return (
    <>
      <section className="hero no-rule">
        <div className="container">
          <span className="kicker">How It Works</span>
          <h1>Land the function. Then run it.</h1>
          <p className="lede">
            Every engagement follows the same shape: diagnose the stall, rebuild the
            foundation, then operate as your marketing function for as long as the math
            says we should.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <ul className="hairlist">
            <li>
              <span className="tag">Step 01 · One conversation</span>
              <h3>The Consultation</h3>
              <p>
                A structured working session on your goals, GTM motion, and competitive
                position. You leave with a clear view of your options &mdash; and our
                honest read on which ones are worth your money. If we&rsquo;re not the
                right fit, we say so and part friends.
              </p>
            </li>
            <li>
              <span className="tag">Step 02 · 3–6 months, fixed scope</span>
              <h3>The Foundation Engagement</h3>
              <p>
                The rebuild: full GTM assessment, messaging and positioning
                framework, digital presence rebuilt (site and SEO baseline), and core
                channels stood up &mdash; paid search, LinkedIn, and AI search
                optimization. It closes with a board-legible readout: what changed, what
                it produced, what to do next.
              </p>
            </li>
            <li>
              <span className="tag">Step 03 · Ongoing</span>
              <h3>STEIL as your marketing function</h3>
              <p>
                A monthly retainer where STEIL <em>is</em> the marketing department:
                partner-level strategy, execution across every active channel, and
                reporting your board can read in ninety seconds. Scale it up or down with
                your growth plan.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <h2>The operating principles</h2>
            <span className="kicker quiet">What you can hold us to</span>
          </div>
          <ul className="hairlist">
            <li>
              <h3>Senior operator, start to finish</h3>
              <p>The person in the pitch is the person in the work. No handoff.</p>
            </li>
            <li>
              <h3>Accountable to pipeline and EBITDA</h3>
              <p>
                Metrics gates are set before work starts, and every report answers the
                only two questions a board asks: what did it cost, what did it produce.
              </p>
            </li>
            <li>
              <h3>Priced for the mid-market</h3>
              <p>
                A fraction of a CMO hire, a fraction of an enterprise agency &mdash; sized
                so the math works at mid-market scale.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <div className="cta-band">
        <div className="container">
          <h2>Step one is a conversation.</h2>
          <p>Bring where you want to grow. We&rsquo;ll bring the options.</p>
          <Link href="/request-a-consultation" className="btn primary">Request a Consultation</Link>
        </div>
      </div>
    </>
  );
}
