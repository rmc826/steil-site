import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'From a race to the bottom to a category of one',
  description:
    'How a 20-person B2B carve-out inside a consumer automotive brand rebuilt its go-to-market — from targeting to messaging — moving off a low-margin, high-competition product and onto a high-margin, low-competition one. 5× pipeline, 3 new enterprise logos, 30% return on conference spend.',
  alternates: { canonical: '/insights/fleet-carve-out' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'From a race to the bottom to a category of one',
  author: { '@type': 'Organization', name: 'The Steil Group' },
  publisher: { '@type': 'Organization', name: 'The Steil Group', url: 'https://thesteilgroup.com' },
  datePublished: '2026-07-20',
  mainEntityOfPage: 'https://thesteilgroup.com/insights/fleet-carve-out',
};

export default function CaseStudy() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article>
        {/* HERO — the one photo band. Swap /case-fleet.jpg for a licensed image before publishing. */}
        <section
          className="hero hero-photo band-dark no-rule"
          style={{
            background:
              "linear-gradient(rgba(15,18,21,0.84), rgba(15,18,21,0.9)), url('/case-fleet.jpg') center 58% / cover no-repeat",
          }}
        >
          <div className="container">
            <span className="kicker">Case Study &middot; B2B Commercial Fleet</span>
            <h1>From a race to the bottom to a category of one.</h1>
            <p className="lede">
              How a 20-person B2B carve-out inside a consumer automotive brand rebuilt its go-to-market
              &mdash; from who it targeted to what it stood for &mdash; and turned a commodity into a premium.
            </p>
            <div className="statrow on-dark">
              <div>
                <div className="num">5&times;</div>
                <div className="lbl">Increase in pipeline</div>
              </div>
              <div>
                <div className="num">3</div>
                <div className="lbl">New enterprise logos</div>
              </div>
              <div>
                <div className="num">30%</div>
                <div className="lbl">Return on conference spend</div>
              </div>
            </div>
          </div>
        </section>

        {/* AT A GLANCE */}
        <section className="no-rule" style={{ paddingBottom: 0 }}>
          <div className="container">
            <div className="statrow">
              <div>
                <div className="lbl" style={{ marginTop: 0 }}>Client</div>
                <p className="data" style={{ marginTop: 8 }}>Blinded &mdash; fleet carve-out</p>
              </div>
              <div>
                <div className="lbl" style={{ marginTop: 0 }}>Sector</div>
                <p className="data" style={{ marginTop: 8 }}>B2B commercial vehicles</p>
              </div>
              <div>
                <div className="lbl" style={{ marginTop: 0 }}>Team</div>
                <p className="data" style={{ marginTop: 8 }}>20 people</p>
              </div>
              <div>
                <div className="lbl" style={{ marginTop: 0 }}>Engagement</div>
                <p className="data" style={{ marginTop: 8 }}>GTM transformation</p>
              </div>
            </div>
          </div>
        </section>

        {/* SITUATION / COMPLICATION / RESOLUTION */}
        <section className="no-rule">
          <div className="container">
            <div className="area" data-reveal>
              <div className="bignum">01</div>
              <div>
                <h3>Situation</h3>
                <p>
                  A 20-person B2B unit had been carved out of a larger consumer automotive brand and told to
                  grow on its own. It inherited a parent built for the showroom floor &mdash; and now had to
                  sell to fleet buyers, operations leaders and procurement it had never really spoken to.
                  Everything about how it engaged prospects, from targeting to messaging, needed to change.
                </p>
              </div>
            </div>

            <div className="area" data-reveal>
              <div className="bignum">02</div>
              <div>
                <h3>Complication</h3>
                <p>
                  The core message revolved around a low-margin, high-competition category where a dozen
                  vendors looked identical on paper. Price was the only lever anyone reached for. Every deal
                  became an RFP, every RFP a race to the bottom &mdash; and a 20-person team could not win a
                  war fought on discount alone.
                </p>
              </div>
            </div>

            <div className="area" data-reveal>
              <div className="bignum">03</div>
              <div>
                <h3>Resolution</h3>
                <p>
                  We sat down with the CRO and rebuilt the commercial strategy, messaging and product
                  positioning together &mdash; migrating the story off the low-margin, high-competition product
                  and onto a high-margin, low-competition one. The new positioning rested on three levers
                  buyers actually pay for.
                </p>
                <div className="chips">
                  <span className="chip blue">Safety</span>
                  <span className="chip blue">Savings</span>
                  <span className="chip blue">Sustainability</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BLUE OCEAN */}
        <section data-reveal>
          <div className="container">
            <div className="section-head">
              <h2>Find the blue ocean.</h2>
              <span className="kicker quiet">Repositioning</span>
            </div>
            <p className="lede" style={{ marginBottom: 32 }}>
              The commodity product was a red ocean &mdash; crowded, bloody, priced to zero. So we stopped
              competing in it. We reframed the same fleet around outcomes procurement is measured on, moving
              the conversation from unit price to total value and lifting the team into a category with far
              fewer credible competitors.
            </p>
            <div className="split" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
              <div>
                <span className="tag" style={{ color: 'var(--steil-blue)', fontFamily: 'var(--font-mono), monospace', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: 10 }}>Safety</span>
                <p style={{ fontSize: 15 }}>Fewer incidents, lower liability, drivers home on time &mdash; the metric a fleet director reports upward.</p>
              </div>
              <div>
                <span className="tag" style={{ color: 'var(--steil-blue)', fontFamily: 'var(--font-mono), monospace', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: 10 }}>Savings</span>
                <p style={{ fontSize: 15 }}>Total cost of ownership across the life of the vehicle, not the number on the invoice at signing.</p>
              </div>
              <div>
                <span className="tag" style={{ color: 'var(--steil-blue)', fontFamily: 'var(--font-mono), monospace', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: 10 }}>Sustainability</span>
                <p style={{ fontSize: 15 }}>A credible path to fleet emissions targets &mdash; increasingly a board-level mandate, not a nice-to-have.</p>
              </div>
            </div>
          </div>
        </section>

        {/* BEFORE / AFTER */}
        <section data-reveal>
          <div className="container">
            <div className="section-head">
              <h2>Before &amp; after the message.</h2>
              <span className="kicker quiet">Positioning shift</span>
            </div>
            <div className="split">
              <div>
                <span className="kicker quiet" style={{ marginBottom: 20 }}>Before</span>
                <ul className="hairlist" style={{ maxWidth: 'none' }}>
                  <li><span className="tag">Target</span><p style={{ color: 'var(--stone)' }}>Anyone buying a vehicle</p></li>
                  <li><span className="tag">Category</span><p style={{ color: 'var(--stone)' }}>Commodity vehicle supplier</p></li>
                  <li><span className="tag">Core message</span><p style={{ color: 'var(--stone)' }}>&ldquo;Reliable vehicles at a competitive price.&rdquo;</p></li>
                  <li><span className="tag">Wins on</span><p style={{ color: 'var(--stone)' }}>Price</p></li>
                </ul>
              </div>
              <div>
                <span className="kicker" style={{ marginBottom: 20 }}>After</span>
                <ul className="hairlist" style={{ maxWidth: 'none' }}>
                  <li><span className="tag">Target</span><p>Enterprise fleet operators &amp; procurement</p></li>
                  <li><span className="tag">Category</span><p>Fleet performance partner</p></li>
                  <li><span className="tag">Core message</span><p>&ldquo;Safer, cheaper to run, and on the path to your emissions targets.&rdquo;</p></li>
                  <li><span className="tag">Wins on</span><p>Total value &amp; margin</p></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* APPROACH */}
        <section data-reveal>
          <div className="container">
            <div className="section-head">
              <h2>How we got there.</h2>
              <span className="kicker quiet">The engagement</span>
            </div>
            <div className="workrow" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
              <div style={{ borderTop: '1.5px solid var(--steil-blue)', paddingTop: 16 }}>
                <div className="lbl" style={{ marginTop: 0 }}>Step 01</div>
                <h3 style={{ fontSize: 18, margin: '10px 0 8px' }}>Diagnose</h3>
                <p style={{ fontSize: 14.5 }}>CRO working sessions, win/loss review and a hard look at who actually paid a premium.</p>
              </div>
              <div style={{ borderTop: '1.5px solid var(--steil-blue)', paddingTop: 16 }}>
                <div className="lbl" style={{ marginTop: 0 }}>Step 02</div>
                <h3 style={{ fontSize: 18, margin: '10px 0 8px' }}>Reposition</h3>
                <p style={{ fontSize: 14.5 }}>Named the blue-ocean category and built the three-lever narrative: safety, savings, sustainability.</p>
              </div>
              <div style={{ borderTop: '1.5px solid var(--steil-blue)', paddingTop: 16 }}>
                <div className="lbl" style={{ marginTop: 0 }}>Step 03</div>
                <h3 style={{ fontSize: 18, margin: '10px 0 8px' }}>Retarget</h3>
                <p style={{ fontSize: 14.5 }}>Redrew the ICP around enterprise fleets and built a named-account list the reps could work.</p>
              </div>
              <div style={{ borderTop: '1.5px solid var(--steil-blue)', paddingTop: 16 }}>
                <div className="lbl" style={{ marginTop: 0 }}>Step 04</div>
                <h3 style={{ fontSize: 18, margin: '10px 0 8px' }}>Activate</h3>
                <p style={{ fontSize: 14.5 }}>Rolled the message across sales enablement and a focused conference motion that finally paid back.</p>
              </div>
            </div>
          </div>
        </section>

        {/* RESULTS */}
        <section data-reveal>
          <div className="container">
            <div className="section-head">
              <h2>What changed.</h2>
              <span className="kicker quiet">Results</span>
            </div>
            <div className="statrow">
              <div>
                <div className="num">5&times;</div>
                <div className="lbl">Increase in pipeline</div>
                <p style={{ fontSize: 14.5, color: 'var(--stone)', marginTop: 14 }}>Enterprise-fit accounts entering the funnel, not just more of the same low-value leads.</p>
              </div>
              <div>
                <div className="num">3</div>
                <div className="lbl">New enterprise logos</div>
                <p style={{ fontSize: 14.5, color: 'var(--stone)', marginTop: 14 }}>Marquee fleet operators the team could never have reached with a price-led pitch.</p>
              </div>
              <div>
                <div className="num">30%</div>
                <div className="lbl">Return on conference spend</div>
                <p style={{ fontSize: 14.5, color: 'var(--stone)', marginTop: 14 }}>A once-flat event budget turned into a measurable, repeatable pipeline channel.</p>
              </div>
            </div>
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
