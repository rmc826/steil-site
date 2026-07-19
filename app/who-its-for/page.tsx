import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Who It\u2019s For — PE Portfolio Companies & Small-Cap Software',
  description:
    'STEIL works with PE-owned software companies at $15\u201350M revenue and public small-cap software companies under street pressure \u2014 anyone who needs the marketing function without building the org.',
  alternates: { canonical: '/who-its-for' },
};

export default function WhoItsFor() {
  return (
    <>
      <section className="hero no-rule">
        <div className="container">
          <span className="kicker">Who It&rsquo;s For</span>
          <h1>Built for the hold period.</h1>
          <p className="lede">
            STEIL exists for software companies in a specific squeeze: real revenue,
            stalled growth, ownership demanding margin expansion, and no appetite to fund
            a marketing organization.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <h2>PE-owned software companies</h2>
            <span className="kicker quiet">$15&ndash;50M revenue</span>
          </div>
          <div className="stack">
            <p>
              You&rsquo;re a CEO with a sponsor behind you and a hold-period clock in
              front of you. The growth that justified the entry multiple has flattened,
              and the exit math doesn&rsquo;t work at this trajectory. You know marketing
              is underbuilt &mdash; but a CMO search takes nine months, costs $400K a
              year, and might not work.
            </p>
            <p>
              STEIL is the alternative: the full function, running in weeks, reporting in
              the language your board already speaks. When it works at one portfolio
              company, sponsors tend to ask about the others. We like that conversation.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <h2>Public small-cap software</h2>
            <span className="kicker quiet">Flat top-line, watched closely</span>
          </div>
          <div className="stack">
            <p>
              Russell 2000 software with a flat top line lives under a different clock:
              the street&rsquo;s. Activist attention, &ldquo;grow or get acquired&rdquo;
              coverage, and a budget that can&rsquo;t absorb a big-agency retainer. The
              structural problem is the same one PE portfolio companies face &mdash; and
              so is the fix.
            </p>
            <p>
              If that&rsquo;s your seat, the diagnostic works the same way. The reporting
              just swaps sponsor language for investor language.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <h2>Who it&rsquo;s not for</h2>
            <span className="kicker quiet">Honesty saves everyone time</span>
          </div>
          <ul className="hairlist">
            <li>
              <p>
                <strong>Pre-revenue or early-stage startups.</strong> You need
                founder-led sales and product-market fit, not a marketing function.
              </p>
            </li>
            <li>
              <p>
                <strong>Companies growing 40%+.</strong> Whatever you&rsquo;re doing is
                working. Don&rsquo;t let us touch it.
              </p>
            </li>
            <li>
              <p>
                <strong>Anyone who wants impressions.</strong> We report pipeline and
                EBITDA impact. If the goal is brand awareness for its own sake,
                we&rsquo;re the wrong fit.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <div className="cta-band">
        <div className="container">
          <h2>Sound like your seat?</h2>
          <p>The diagnostic is one conversation. Worst case, you get an honest outside read.</p>
          <Link href="/request-a-diagnostic" className="btn primary">Request a Diagnostic</Link>
        </div>
      </div>
    </>
  );
}
