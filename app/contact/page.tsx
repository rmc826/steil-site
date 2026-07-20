import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with The Steil Group.',
  alternates: { canonical: '/contact' },
};

const TALLY_CONTACT = process.env.NEXT_PUBLIC_TALLY_CONTACT_ID;

export default function Contact() {
  return (
    <>
      <section className="hero no-rule">
        <div className="container">
          <span className="kicker">Contact</span>
          <h1>Talk to us.</h1>
          <p className="lede">
            Questions, ideas, or just want to compare notes on your GTM &mdash;
            we&rsquo;ll get back to you within two business days.
          </p>
        </div>
      </section>
      <section>
        <div className="container">
          {TALLY_CONTACT ? (
            <iframe
              className="tally-frame"
              src={`https://tally.so/embed/${TALLY_CONTACT}?alignLeft=1&hideTitle=1&transparentBackground=1`}
              title="Contact The Steil Group"
              loading="lazy"
            />
          ) : (
            <p>
              Email <a href="mailto:rc@steilgrowth.com">rc@steilgrowth.com</a>{' '}
              and we&rsquo;ll take it from there.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
