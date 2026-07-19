import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'STEIL — The Marketing Function for PE-Backed Software Companies',
  description:
    'Growth stalled. The hold period didn\u2019t. STEIL is the marketing function for PE-backed and small-cap software companies that can\u2019t justify building one — strategy at the partner level, execution across every channel that matters.',
  alternates: { canonical: '/' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'The Steil Group',
  alternateName: 'STEIL',
  url: 'https://thesteilgroup.com',
  description:
    'Outsourced marketing function (GTM-as-a-Service) for PE-backed and small-cap software companies: GTM strategy, demand generation, AI search optimization, and product messaging, accountable to pipeline and EBITDA.',
  areaServed: 'United States',
  serviceType: [
    'Go-to-market strategy',
    'Demand generation',
    'AI search optimization',
    'Product messaging and positioning',
  ],
  email: 'ryan@thesteilgroup.com',
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="hero no-rule">
        <div className="container">
          <span className="kicker">GTM-as-a-Service · PE-Backed &amp; Small-Cap Software</span>
          <h1>
            Growth stalled.
            <br />
            The hold period didn&rsquo;t.
          </h1>
          <p className="lede">
            STEIL is the marketing function for software companies that can&rsquo;t justify
            building one — strategy at the partner level, execution across every channel
            that matters, accountable to pipeline and EBITDA, not impressions.
          </p>
          <div className="cta-row">
            <Link href="/request-a-diagnostic" className="btn primary">
              Request a Diagnostic
            </Link>
            <Link href="/how-it-works" className="btn">
              How It Works
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <h2>Why growth stalls</h2>
            <span className="kicker quiet">The Thesis</span>
          </div>
          <div className="stack">
            <p>
              A $15&ndash;50M software company rarely stalls for lack of effort. It stalls
              for structural reasons: the go-to-market motion that got it here stopped
              compounding, competitive pressure rose, and ownership is asking for margin
              expansion with no new capital.
            </p>
            <p>
              The standard answers don&rsquo;t fit. A full marketing organization is a
              seven-figure commitment. A $400K CMO is a bet most boards won&rsquo;t
              underwrite mid-hold. An agency executes channels but doesn&rsquo;t own the
              strategy. What the company needs is the <em>function</em> — and that&rsquo;s
              what STEIL is.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <h2>What makes STEIL different</h2>
            <span className="kicker quiet">Three things, honestly</span>
          </div>
          <ul className="hairlist">
            <li>
              <span className="tag">01 — Fluent in your board&rsquo;s language</span>
              <h3>PE-native reporting</h3>
              <p>
                Every readout is built for the room it ends up in: hold-period math,
                pipeline coverage, CAC trajectory. Board-legible in ninety seconds, not a
                deck of impressions.
              </p>
            </li>
            <li>
              <span className="tag">02 — No junior handoff</span>
              <h3>A senior operator on every account</h3>
              <p>
                The person who diagnoses your stall is the person who runs the work. No
                pitch-team-then-account-team switch. Ever.
              </p>
            </li>
            <li>
              <span className="tag">03 — The channel incumbents are behind on</span>
              <h3>AI search optimization, named and owned</h3>
              <p>
                Your buyers ask ChatGPT, Claude, and Perplexity who to shortlist. Getting
                recommended there is a discipline, and it&rsquo;s a standing part of every
                STEIL engagement.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <h2>Focus areas</h2>
            <span className="kicker quiet">
              <Link href="/focus-areas">All four →</Link>
            </span>
          </div>
          <ul className="hairlist">
            <li>
              <h3>GTM Strategy &amp; Advisory</h3>
              <p>Stall diagnosis, untapped segments, pricing strategy, win/loss truth.</p>
            </li>
            <li>
              <h3>Demand &amp; Digital</h3>
              <p>
                Paid search, paid social, LinkedIn ABM, and SEO — sized for a $15&ndash;50M
                company, not a Fortune 500 budget.
              </p>
            </li>
            <li>
              <h3>AI Search Optimization</h3>
              <p>Get recommended when buyers ask the machines who to buy from.</p>
            </li>
            <li>
              <h3>Product Messaging &amp; Positioning</h3>
              <p>A narrative that survives a board meeting, and a sales team that can say it.</p>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <h2>How an engagement runs</h2>
            <span className="kicker quiet">
              <Link href="/how-it-works">The full model →</Link>
            </span>
          </div>
          <div className="statrow">
            <div>
              <div className="num">01</div>
              <div className="lbl">Diagnostic conversation</div>
            </div>
            <div>
              <div className="num">02</div>
              <div className="lbl">Foundation engagement · 3&ndash;6 mo</div>
            </div>
            <div>
              <div className="num">03</div>
              <div className="lbl">STEIL as your marketing function</div>
            </div>
          </div>
        </div>
      </section>

      <div className="cta-band">
        <div className="container">
          <h2>Start with the diagnostic.</h2>
          <p>
            One conversation. We&rsquo;ll tell you whether the stall is a marketing problem
            — and if it isn&rsquo;t, we&rsquo;ll tell you that too.
          </p>
          <Link href="/request-a-diagnostic" className="btn primary">
            Request a Diagnostic
          </Link>
        </div>
      </div>
    </>
  );
}
