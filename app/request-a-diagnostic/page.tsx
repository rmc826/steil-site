import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Request a GTM Diagnostic',
  description:
    'Request a GTM diagnostic from STEIL: a structured working session on your growth data and go-to-market motion, with an honest read on whether the stall is a marketing problem.',
  alternates: { canonical: '/request-a-diagnostic' },
};

const TALLY_ID = process.env.NEXT_PUBLIC_TALLY_FORM_ID;

export default function RequestADiagnostic() {
  return (
    <>
      <section className="hero no-rule">
        <div className="container">
          <span className="kicker">Request a Diagnostic</span>
          <h1>One conversation. An honest read.</h1>
          <p className="lede">
            Tell us where growth stalled. We&rsquo;ll come back within two business days
            to schedule a working session &mdash; and we&rsquo;ll tell you up front if we
            don&rsquo;t think we&rsquo;re the right fit.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          {TALLY_ID ? (
            <iframe
              className="tally-frame"
              src={`https://tally.so/embed/${TALLY_ID}?alignLeft=1&hideTitle=1&transparentBackground=1`}
              title="Request a Diagnostic"
              loading="lazy"
            />
          ) : (
            <div className="stack">
              <p>
                {/* Set NEXT_PUBLIC_TALLY_FORM_ID in Vercel to replace this fallback with the embedded form. */}
                Email <a href="mailto:ryan@thesteilgroup.com">ryan@thesteilgroup.com</a>{' '}
                with three things: your revenue range, your growth rate over the last
                eight quarters, and the one metric your board is unhappy about.
              </p>
            </div>
          )}
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <h2>What happens next</h2>
            <span className="kicker quiet">No pitch deck, promise</span>
          </div>
          <div className="statrow">
            <div>
              <div className="num">48h</div>
              <div className="lbl">We reply and schedule</div>
            </div>
            <div>
              <div className="num">90m</div>
              <div className="lbl">Working session on your data</div>
            </div>
            <div>
              <div className="num">1 pg</div>
              <div className="lbl">Written read: stall cause &amp; options</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
