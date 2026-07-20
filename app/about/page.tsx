import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About — An Operator-Led Growth Agency',
  description:
    'STEIL is an operator-led growth agency founded by Ryan \u201CRC\u201D Campbell. We partner with mid-sized B2B software and data companies to scale their growth engine with the resources of a much larger company.',
  alternates: { canonical: '/about' },
};

export default function About() {
  return (
    <>
      <section className="hero no-rule">
        <div className="container">
          <span className="kicker">About</span>
          <h1>We&rsquo;ve sat in your seat.</h1>
          <p className="lede">
            STEIL is an operator-led agency &mdash; built by someone who spent a
            career inside the companies we now serve.
          </p>
        </div>
      </section>

      <section className="no-rule" style={{ paddingTop: 0 }} data-reveal>
        <div className="container">
          <div className="stack">
            <p>
              After more than eleven years in corporate, our founder Ryan
              &ldquo;RC&rdquo; Campbell kept seeing the same pattern: mid-sized
              companies wrestling with the same organizational challenges &mdash;
              stretched teams, disconnected channels, strategies that never quite
              reach execution &mdash; and traditional agencies that run campaigns
              without ever enabling the company to scale.
            </p>
            <p>
              That&rsquo;s where we come in. We sit down with you and your teams,
              develop a deep understanding of your challenges, and build a holistic
              strategy that covers product positioning, target markets, and the
              integrated channel plan &mdash; then we deploy it with you. The result
              is a growth engine that runs with the resources of a much larger
              company, without you having to build one.
            </p>
          </div>
        </div>
      </section>

      <div className="area-dark" data-reveal>
        <div className="container">
          <div className="section-head" style={{ marginBottom: 24 }}>
            <h2 style={{ color: 'var(--paper)' }}>What we believe</h2>
            <span className="kicker">The Short Version</span>
          </div>
          <div className="helpgrid" style={{ borderColor: 'rgba(250,250,247,.22)' }}>
            <div style={{ borderColor: 'rgba(250,250,247,.22)' }}>
              <span className="tag">01</span>
              <h3 style={{ color: 'var(--paper)' }}>Partners, not vendors</h3>
              <p style={{ color: 'rgba(250,250,247,.75)' }}>
                We plug into your team and act like we work there &mdash; because for
                the length of the engagement, we do.
              </p>
            </div>
            <div style={{ borderColor: 'rgba(250,250,247,.22)' }}>
              <span className="tag">02</span>
              <h3 style={{ color: 'var(--paper)' }}>Strategy that ships</h3>
              <p style={{ color: 'rgba(250,250,247,.75)' }}>
                A plan that doesn&rsquo;t reach execution is a document. We build the
                strategy and run the channels that carry it.
              </p>
            </div>
            <div style={{ borderColor: 'rgba(250,250,247,.22)' }}>
              <span className="tag">03</span>
              <h3 style={{ color: 'var(--paper)' }}>Honesty over optics</h3>
              <p style={{ color: 'rgba(250,250,247,.75)' }}>
                If something isn&rsquo;t working &mdash; including us &mdash;
                you&rsquo;ll hear it from us first.
              </p>
            </div>
            <div style={{ borderColor: 'rgba(250,250,247,.22)' }}>
              <span className="tag">04</span>
              <h3 style={{ color: 'var(--paper)' }}>Built for your size</h3>
              <p style={{ color: 'rgba(250,250,247,.75)' }}>
                Mid-market budgets deserve enterprise-grade thinking. That gap is the
                whole reason STEIL exists.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="cta-band">
        <div className="container">
          <h2>Let&rsquo;s talk about your growth.</h2>
          <p>One conversation. No pitch deck.</p>
          <Link href="/request-a-consultation" className="btn primary">Request a Consultation</Link>
        </div>
      </div>
    </>
  );
}
