import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Analytics } from '@vercel/analytics/react';
import Link from 'next/link';
import Wordmark from '@/components/Wordmark';
import GradeRule from '@/components/GradeRule';
import AnalyticsProvider from '@/components/AnalyticsProvider';
import Reveal from '@/components/Reveal';
import GA from '@/components/GA';
import './globals.css';

// Fonts are vendored in app/fonts/ (from the google/fonts repo, OFL-licensed)
// and self-hosted via next/font/local — no build-time or runtime Google request.
const display = localFont({
  src: './fonts/Archivo-Variable.ttf',
  variable: '--font-display',
  display: 'swap',
  weight: '100 900',
  declarations: [{ prop: 'font-stretch', value: '62% 125%' }],
});

const body = localFont({
  src: [
    { path: './fonts/SourceSerif4-Variable.ttf', style: 'normal' },
    { path: './fonts/SourceSerif4-Italic-Variable.ttf', style: 'italic' },
  ],
  variable: '--font-body',
  display: 'swap',
  weight: '200 900',
});

const mono = localFont({
  src: [
    { path: './fonts/IBMPlexMono-Regular.ttf', weight: '400', style: 'normal' },
    { path: './fonts/IBMPlexMono-Medium.ttf', weight: '500', style: 'normal' },
  ],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://thesteilgroup.com'),
  title: {
    default: 'STEIL — The Marketing Function for PE-Backed Software Companies',
    template: '%s — STEIL',
  },
  description:
    'STEIL is the outsourced marketing function for PE-backed and small-cap software companies: partner-level GTM strategy, full-channel execution, accountable to pipeline and EBITDA.',
  openGraph: {
    siteName: 'The Steil Group',
    type: 'website',
    locale: 'en_US',
  },
};

const nav = [
  { href: '/focus-areas', label: 'Focus Areas' },
  { href: '/who-we-help', label: 'Who We Help' },
  {
    href: '/insights',
    label: 'Insights',
    children: [
      { href: '/insights/case-studies/fleet-carve-out', label: 'Case Studies' },
      { href: '/insights/perspectives/next-segment-in-your-crm', label: 'Perspectives' },
    ],
  },
  { href: '/about', label: 'About' },
];

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'The Steil Group',
  alternateName: 'STEIL',
  url: 'https://thesteilgroup.com',
  logo: 'https://thesteilgroup.com/icon.svg',
  description:
    'GTM-as-a-Service for B2B software and data companies ($15–50M revenue). Integrated marketing strategy, demand generation, AI search optimization, and sales-marketing alignment — delivered as a fractional marketing function.',
  email: 'rc@steilgrowth.com',
  areaServed: { '@type': 'Country', name: 'United States' },
  founder: {
    '@type': 'Person',
    name: 'Ryan Campbell',
    alternateName: 'RC',
    jobTitle: 'Founder',
  },
  serviceType: [
    'GTM-as-a-Service',
    'Integrated marketing strategy',
    'Demand generation',
    'AI search optimization',
    'Go-to-market advisory',
    'Sales and marketing alignment',
    'B2B marketing',
    'Programmatic advertising',
    'LinkedIn ABM',
    'Conference marketing',
  ],
  knowsAbout: [
    'B2B software marketing',
    'Go-to-market strategy',
    'AI search visibility',
    'Demand generation for mid-market software',
    'PE-backed software growth',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <header className="site-header">
          <div className="container nav">
            <Link href="/" className="wordmark-link" aria-label="STEIL home">
              <Wordmark />
            </Link>
            <nav aria-label="Primary">
              <ul>
                {nav.map((item) => (
                  <li key={item.href} className={'children' in item ? 'has-dropdown' : undefined}>
                    <Link href={item.href}>{item.label}</Link>
                    {'children' in item && (
                      <ul className="nav-dropdown">
                        {(item as any).children.map((child: any) => (
                          <li key={child.href}>
                            <Link href={child.href}>{child.label}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
                <li>
                  <Link href="/contact" className="nav-cta">
                    Get in touch
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <div className="container">
          <GradeRule />
        </div>
        <main>{children}</main>
        <footer className="site-footer">
          <div className="container inner">
            <span>STEIL · GTM-as-a-Service</span>
            <span>
              <a href="mailto:rc@steilgrowth.com">rc@steilgrowth.com</a>
            </span>
            <span>© {new Date().getFullYear()} The Steil Group LLC</span>
          </div>
        </footer>
        <GA />
        <Reveal />
        <AnalyticsProvider />
        <Analytics />
      </body>
    </html>
  );
}
