import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Focus Areas — GTM Strategy, Demand, AI Search Optimization',
  description:
    'STEIL\u2019s four practice areas: GTM strategy and advisory, demand and digital marketing, AI search optimization, and product messaging for PE-backed and small-cap software companies.',
  alternates: { canonical: '/focus-areas' },
};

export default function FocusAreas() {
  return (
    <>
      <section className="hero no-rule">
        <div className="container">
          <span className="kicker">Focus Areas</span>
          <h1>Four disciplines. One function.</h1>
          <p className="lede">
            Everything a marketing organization would do for a $15&ndash;50M software
            company &mdash; run as one integrated function instead of four vendors.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <ul className="hairlist">
            <li>
              <span className="tag">01 — Strategy</span>
              <h3>GTM Strategy &amp; Advisory</h3>
              <p>
                Diagnosis of why growth stalled: which segments are tapped out, which are
                untouched, where pricing leaks value, and what win/loss data actually says
                when someone reads it honestly. Output: a GTM plan the board can hold you
                to.
              </p>
            </li>
            <li>
              <span className="tag">02 — Demand</span>
              <h3>Demand &amp; Digital</h3>
              <p>
                Paid search, paid social, LinkedIn ABM, and SEO programs sized for
                mid-market economics. No enterprise-agency retainers, no channel run for
                its own sake &mdash; every dollar mapped to pipeline it can be blamed for.
              </p>
            </li>
            <li>
              <span className="tag">03 — The new channel</span>
              <h3>AI Search Optimization</h3>
              <p>
                Your buyers increasingly start with ChatGPT, Claude, or Perplexity instead
                of Google. Being the answer those systems give is an optimization
                discipline &mdash; structured entity data, citable authority content,
                machine-legible positioning. Most incumbents haven&rsquo;t built it.
                STEIL has, and it ships with every engagement.
              </p>
            </li>
            <li>
              <span className="tag">04 — Narrative</span>
              <h3>Product Messaging &amp; Positioning</h3>
              <p>
                A positioning framework that survives contact with a board meeting, and a
                messaging system your sales team can actually say out loud &mdash; from
                first cold email to final negotiation.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <div className="cta-band">
        <div className="container">
          <h2>Not sure where to start?</h2>
          <p>That&rsquo;s what the consultation is for.</p>
          <Link href="/request-a-consultation" className="btn primary">Request a Consultation</Link>
        </div>
      </div>
    </>
  );
}
