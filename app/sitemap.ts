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
    { url: `${base}/about`, lastModified, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${base}/insights`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/insights/next-segment-in-your-crm`, lastModified, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${base}/insights/ai-search-shortlist-channel`, lastModified, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${base}/insights/direct-mail-2026`, lastModified, changeFrequency: 'yearly', priority: 0.7 },
    // Add /why-pe-backed-saas-stalls here when the essay publishes (and remove its noindex)
  ];
}
