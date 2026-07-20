import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Focus Areas — Integrated Strategy, GTM Testing, Bottom-of-Funnel, Alignment',
  description:
    'STEIL\u2019s four core areas: integrated marketing strategy across print, digital, conferences, and AI; GTM pressure testing; bottom-of-funnel capture and competitive differentiation; sales and marketing alignment.',
  alternates: { canonical: '/focus-areas' },
};

/* In-brand line art per area — geometric, stroke-based, no icons libraries */
const Art = {
  layers: (
    <svg viewBox="0 0 150 110" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="10" y="70" width="130" height="14" fill="none" stroke="#2333E8" strokeWidth="2" />
      <rect x="24" y="48" width="102" height="14" fill="none" stroke="#2333E8" strokeWidth="2" />
      <rect x="38" y="26" width="74" height="14" fill="none" stroke="#2333E8" strokeWidth="2" />
      <path d="M75 10 L75 100" stroke="#0F1215" strokeWidth="2" />
    </svg>
  ),
  cycle: (
    <svg viewBox="0 0 150 110" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M30 55 A45 45 0 1 1 75 100" fill="none" stroke="#2333E8" strokeWidth="2" />
      <path d="M75 100 L60 92 M75 100 L68 86" stroke="#2333E8" strokeWidth="2" fill="none" />
      <path d="M55 55 L95 55 M75 35 L75 75" stroke="#0F1215" strokeWidth="2" />
    </svg>
  ),
  funnel: (
    <svg viewBox="0 0 150 110" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M20 15 L130 15 L90 60 L90 95 L60 95 L60 60 Z" fill="none" stroke="#7C89F5" strokeWidth="2" />
      <path d="M60 78 L90 78" stroke="#7C89F5" strokeWidth="2" />
      <rect x="66" y="84" width="18" height="11" fill="#7C89F5" />
    </svg>
  ),
  converge: (
    <svg viewBox="0 0 150 110" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M10 20 L90 55 L10 90" fill="none" stroke="#2333E8" strokeWidth="2" />
      <path d="M140 20 L90 55 L140 90" fill="none" stroke="#0F1215" strokeWidth="2" />
      <circle cx="90" cy="55" r="5" fill="#2333E8" />
    </svg>
  ),
};

export default function FocusAreas() {
  return (
    <>
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
              <div className="area-art">{Art.layers}</div>
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
              <div className="area-art">{Art.cycle}</div>
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
              <div className="area-art">{Art.funnel}</div>
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
              <div className="area-art">{Art.converge}</div>
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
