import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How It Works — GTM-as-a-Service in Three Steps',
  description:
    'How a STEIL engagement runs: a consultation to see your options, a fixed-scope foundation that builds the strategy and stands up the stack, then an ongoing growth engine we run for you.',
  alternates: { canonical: '/how-it-works' },
};

export default function HowItWorks() {
  return (
    <>
      <section className="hero no-rule">
        <div className="container">
          <span className="kicker">How It Works</span>
          <h1>Easy to start.<br />Built to scale.</h1>
          <p className="lede">
            We designed the way we work around a simple idea: partnering with an
            agency should feel like adding a strategic arm to your company &mdash; not
            managing another vendor.
          </p>
        </div>
      </section>

      <section className="no-rule" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="area" data-reveal>
            <div><div className="bignum">01</div></div>
            <div>
              <h3>The consultation</h3>
              <p>
                A working session on where you want to grow. You leave with a clear
                view of your options and our honest read on which are worth your money
                &mdash; even if the answer is &ldquo;not us.&rdquo;
              </p>
              <div className="chips">
                <span className="chip">90 Minutes</span>
                <span className="chip">Your Data</span>
                <span className="chip">Written Read</span>
              </div>
            </div>
          </div>

          <div className="area" data-reveal>
            <div><div className="bignum">02</div></div>
            <div>
              <h3>The foundation</h3>
              <p>
                A fixed-scope engagement that builds the strategy and stands up the
                stack &mdash; positioning, digital presence, and the core channels,
                closing with an executive readout.
              </p>
              <div className="chips">
                <span className="chip">3&ndash;6 Months</span>
                <span className="chip">Fixed Scope</span>
                <span className="chip">Executive Readout</span>
              </div>
            </div>
          </div>

          <div className="area" data-reveal>
            <div><div className="bignum">03</div></div>
            <div>
              <h3>The growth engine</h3>
              <p>
                Ongoing GTM-as-a-Service: we run the marketing engine &mdash; strategy,
                channels, creative, reporting &mdash; and you read the results in a
                monthly executive summary.
              </p>
              <div className="chips">
                <span className="chip">Monthly Retainer</span>
                <span className="chip">Full Stack</span>
                <span className="chip">Scale Up / Down</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="photo-band" data-reveal>
        <div className="container">
          <span className="kicker">One Partner</span>
          <h2>Strategy through execution &mdash; the plan and the engine, from the same place.</h2>
        </div>
      </div>

      <section className="no-rule">
        <div className="container">
          <div className="section-head">
            <h2>What you can expect</h2>
            <span className="kicker quiet">In Numbers</span>
          </div>
          <div className="statrow">
            <div><div className="num">48h</div><div className="lbl">Response on every request</div></div>
            <div><div className="num">3&ndash;6mo</div><div className="lbl">Foundation, fixed scope</div></div>
            <div><div className="num">1/mo</div><div className="lbl">Executive readout, board-ready</div></div>
          </div>
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
