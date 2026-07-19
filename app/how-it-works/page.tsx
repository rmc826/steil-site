import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How It Works — Fractional GTM for PE Portfolio Companies',
  description:
    'How a STEIL engagement runs: a GTM diagnostic, a fixed-scope Foundation engagement, then STEIL as your ongoing fractional marketing function \u2014 built for PE portfolio companies and small-cap software.',
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
              <h3>The Diagnostic</h3>
              <p>
                A structured working session on your growth data, GTM motion, and
                competitive position. You leave with our honest read on whether the stall
                is a marketing problem. If it isn&rsquo;t &mdash; if it&rsquo;s product,
                pricing power, or market &mdash; we say so and part friends.
              </p>
            </li>
            <li>
              <span className="tag">Step 02 · 3–6 months, fixed scope</span>
              <h3>The Foundation Engagement</h3>
              <p>
                The rebuild: full GTM diagnostic review, messaging and positioning
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
                reporting written in the language your sponsor reads. Scale it up or down
                with the hold-period plan.
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
                so the math works inside a hold period.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <div className="cta-band">
        <div className="container">
          <h2>Step one is a conversation.</h2>
          <p>Bring your growth data. We&rsquo;ll bring the honest read.</p>
          <Link href="/request-a-diagnostic" className="btn primary">Request a Diagnostic</Link>
        </div>
      </div>
    </>
  );
}
