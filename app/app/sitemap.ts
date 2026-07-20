import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://thesteilgroup.com';
  const lastModified = new Date();
  return [
    { url: `${base}/`, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/focus-areas`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/how-it-works`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/who-we-help`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/request-a-consultation`, lastModified, changeFrequency: 'yearly', priority: 0.9 },
    { url: `${base}/contact`, lastModified, changeFrequency: 'yearly', priority: 0.6 },
    // Add /why-pe-backed-saas-stalls here when the essay publishes (and remove its noindex)
  ];
}
