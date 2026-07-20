import type { Metadata } from 'next';
import Link from 'next/link';
import Marquee from '@/components/Marquee';
import { Icon } from '@/components/Icon';

export const metadata: Metadata = {
  title: 'STEIL — GTM-as-a-Service for B2B Software & Data Companies',
  description:
    'We help B2B software and data companies increase their brand visibility by scaling their marketing operations \u2014 integrated strategy across print, digital, conferences, and AI, delivered as a service.',
  alternates: { canonical: '/' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'The Steil Group',
  alternateName: 'STEIL',
  url: 'https://thesteilgroup.com',
  description:
    'GTM-as-a-Service for B2B software and data companies: integrated marketing strategy across print, digital, conferences, and AI; GTM pressure testing; bottom-of-funnel capture and competitive differentiation; sales and marketing alignment.',
  areaServed: 'United States',
  serviceType: [
    'Integrated marketing strategy',
    'GTM strategy',
    'Demand generation',
    'AI advertising',
    'Programmatic advertising',
    'Conference marketing',
    'Print campaigns',
  ],
  email: 'rc@steilgrowth.com',
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ---------- HERO ---------- */}
      <section className="band-dark hero-photo no-rule">
        <div className="container">
          <span className="kicker">GTM-as-a-Service · B2B Software &amp; Data</span>
          <h1>
            Find your blue ocean.
            <br />
            Build your brand.
            <br />
            Unlock growth.
          </h1>
          <p className="lede" style={{ margin: '26px 0 40px' }}>
            We help B2B software and data companies increase their brand visibility by
            scaling their marketing operations &mdash; strategy through execution,
            delivered as a service.
          </p>
          <div className="cta-row">
            <Link href="/contact" className="btn primary">
              Get in touch
            </Link>
            <Link href="/focus-areas" className="btn">
              Focus Areas
            </Link>
          </div>
          <div className="statrow on-dark">
            <div>
              <div className="num">+50%</div>
              <div className="lbl">New-logo pipeline growth</div>
            </div>
            <div>
              <div className="num">7x</div>
              <div className="lbl">Increase in valuation</div>
            </div>
            <div>
              <div className="num">+30%</div>
              <div className="lbl">New-logo growth</div>
            </div>
          </div>
          <span className="src">From past engagements</span>
        </div>
      </section>

      {/* ---------- PAST ENGAGEMENTS ---------- */}
      <Marquee />

      {/* ---------- CORE AREAS ---------- */}
      <section className="no-rule" data-reveal>
        <div className="container">
          <div className="section-head">
            <h2>We work across four core areas</h2>
            <span className="kicker quiet">What We Do</span>
          </div>
          <div className="helpgrid">
            <div>
              <div className="icon-head">
                <span className="tag">01</span>
                <Icon name="full-channel" size={34} />
              </div>
              <h3>Develop an integrated marketing strategy</h3>
              <p>
                One plan across print, digital, conferences, and AI &mdash; every
                channel carrying the same narrative, sized to your budget, sequenced to
                your buyers.
              </p>
            </div>
            <div>
              <div className="icon-head">
                <span className="tag">02</span>
                <Icon name="velocity" size={34} />
              </div>
              <h3>Pressure-test your GTM strategy</h3>
              <p>
                An outside read on segments, pricing, and win/loss &mdash; then fast
                iteration cycles so the strategy improves quarterly instead of at the
                annual offsite.
              </p>
            </div>
            <div>
              <div className="icon-head">
                <span className="tag">03</span>
                <Icon name="pipeline" size={34} />
              </div>
              <h3>Capture bottom-of-funnel traffic</h3>
              <p>
                Own the searches, shortlists, and AI answers where deals are actually
                decided &mdash; and establish the competitive differentiation that wins
                them.
              </p>
            </div>
            <div>
              <div className="icon-head">
                <span className="tag">04</span>
                <Icon name="alignment" size={34} />
              </div>
              <h3>Align sales + marketing</h3>
              <p>
                Shared targets, shared narrative, shared pipeline &mdash; better
                connectivity across the GTM so the handoffs stop leaking deals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- SERVICES ---------- */}
      <section data-reveal>
        <div className="container">
          <div className="section-head">
            <h2>Services under our integrated strategy</h2>
            <span className="kicker quiet">The Delivery Stack</span>
          </div>
          <p style={{ marginBottom: 28 }}>
            Every engagement draws from the same stack &mdash; deployed together, not
            sold apart.
          </p>
          <div className="chips">
            <span className="chip blue">AI Ad Placement</span>
            <span className="chip">Google Ads</span>
            <span className="chip">Programmatic Display &amp; Video</span>
            <span className="chip">Managed Conference Experiences</span>
            <span className="chip">Print Campaigns</span>
            <span className="chip">SEO</span>
            <span className="chip">AI Search Visibility</span>
            <span className="chip">Email &amp; Direct Mail</span>
            <span className="chip">Creative &amp; Design</span>
            <span className="chip">LinkedIn ABM</span>
          </div>
        </div>
      </section>

      {/* ---------- THE WORK ---------- */}
      <section data-reveal>
        <div className="container">
          <div className="section-head">
            <h2>What the work looks like</h2>
            <span className="kicker quiet">Real Deliverables</span>
          </div>
          <div className="workrow">
            {/*
              Replace each SVG placeholder with a real (sanitized) image:
              drop files into public/work/ and swap in
              <img className="frame-media" src="/work/filename.png" alt="..." />
            */}
            <figure className="work-frame">
              <svg className="frame-media" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="300" fill="#E8EBFB"/><rect x="40" y="48" width="200" height="14" fill="#0F1215"/><rect x="40" y="76" width="140" height="8" fill="#6E7680"/><rect x="40" y="120" width="90" height="110" fill="#FAFAF7"/><rect x="145" y="150" width="90" height="80" fill="#FAFAF7"/><rect x="250" y="100" width="110" height="130" fill="#2333E8"/><rect x="40" y="252" width="320" height="6" fill="#6E7680" opacity=".4"/></svg>
              <figcaption>GTM Assessment — Findings Deck</figcaption>
            </figure>
            <figure className="work-frame">
              <svg className="frame-media" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="300" fill="#0F1215"/><path d="M40 240 L110 214 L180 200 L250 192 L290 188 L360 60" stroke="#4C5CFF" strokeWidth="3" fill="none"/><line x1="40" y1="260" x2="360" y2="260" stroke="#6E7680"/><rect x="40" y="40" width="120" height="10" fill="#FAFAF7"/><rect x="40" y="60" width="80" height="8" fill="#6E7680"/></svg>
              <figcaption>Channel Performance — Executive Readout</figcaption>
            </figure>
            <figure className="work-frame">
              <svg className="frame-media" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="300" fill="#FAFAF7"/><rect x="40" y="44" width="240" height="16" fill="#0F1215"/><rect x="40" y="84" width="320" height="1" fill="#6E7680"/><rect x="40" y="108" width="300" height="8" fill="#6E7680" opacity=".7"/><rect x="40" y="126" width="280" height="8" fill="#6E7680" opacity=".7"/><rect x="40" y="144" width="300" height="8" fill="#6E7680" opacity=".7"/><rect x="40" y="184" width="110" height="34" fill="#2333E8"/><rect x="40" y="240" width="320" height="1" fill="#6E7680"/></svg>
              <figcaption>Messaging Framework — Sales-Ready</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <div className="cta-band">
        <div className="container">
          <h2>Start with a conversation.</h2>
          <p>
            One working session on where you want to grow. You leave with a clear view
            of your options.
          </p>
          <Link href="/contact" className="btn primary">
            Get in touch
          </Link>
        </div>
      </div>
    </>
  );
}
