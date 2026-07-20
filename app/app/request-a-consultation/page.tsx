import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Request a Consultation',
  description:
    'Request a consultation with STEIL: a working session on your growth goals and GTM motion, and a clear view of your options \u2014 whether you\u2019re scaling what works or looking for the next move.',
  alternates: { canonical: '/request-a-consultation' },
};

const TALLY_ID = process.env.NEXT_PUBLIC_TALLY_FORM_ID;

export default function RequestAConsultation() {
  return (
    <>
      <section className="hero no-rule">
        <div className="container">
          <span className="kicker">Request a Consultation</span>
          <h1>See your options.</h1>
          <p className="lede">
            Nothing has to be broken. Bring where you want to grow &mdash; a new
            segment, a bigger brand footprint, a channel you haven&rsquo;t cracked
            &mdash; and we&rsquo;ll walk through what your options actually look like.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          {TALLY_ID ? (
            <iframe
              className="tally-frame"
              src={`https://tally.so/embed/${TALLY_ID}?alignLeft=1&hideTitle=1&transparentBackground=1`}
              title="Request a Consultation"
              loading="lazy"
            />
          ) : (
            <div className="stack">
              <p>
                Email <a href="mailto:ryan@thesteilgroup.com">ryan@thesteilgroup.com</a>{' '}
                with a few lines on your company and where you&rsquo;re trying to grow.
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
              <div className="lbl">Working session on your goals</div>
            </div>
            <div>
              <div className="num">1 pg</div>
              <div className="lbl">Written read: your options, prioritized</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
