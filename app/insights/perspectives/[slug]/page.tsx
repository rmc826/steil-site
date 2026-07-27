import type { Metadata } from 'next';
import Link from 'next/link';
import { displayDate, getMdPost, listMdPosts, mdToHtml } from '../../../../lib/insights';

export function generateStaticParams() {
  const posts = listMdPosts();
  // static export refuses a dynamic route with zero paths; emit an unlisted
  // no-index placeholder until the first article lands
  if (posts.length === 0) return [{ slug: '__no-articles-yet' }];
  return posts.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getMdPost(slug);
  if (!post) return { robots: { index: false } };
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/insights/perspectives/${post.slug}` },
  };
}

export default async function Article({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getMdPost(slug);
  if (!post) {
    return (
      <section className="hero no-rule">
        <div className="container">
          <span className="kicker">Perspectives</span>
          <h1>New articles are on the way.</h1>
        </div>
      </section>
    );
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    author: { '@type': 'Organization', name: 'The Steil Group' },
    publisher: { '@type': 'Organization', name: 'The Steil Group', url: 'https://thesteilgroup.com' },
    datePublished: post.date,
    mainEntityOfPage: `https://thesteilgroup.com/insights/perspectives/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article>
        <section className="hero no-rule">
          <div className="container">
            <span className="kicker">{post.kicker}</span>
            <h1>{post.title}</h1>
            <p className="article-meta">The Steil Group · {displayDate(post.date)}</p>
          </div>
        </section>
        <section className="prose no-rule" style={{ paddingTop: 0 }}>
          <div
            className="container stack"
            dangerouslySetInnerHTML={{ __html: mdToHtml(post.body) }}
          />
        </section>
        <div className="cta-band">
          <div className="container">
            <h2>Want this applied to your GTM?</h2>
            <p>That&rsquo;s the consultation.</p>
            <Link href="/request-a-consultation" className="btn primary">Request a Consultation</Link>
          </div>
        </div>
      </article>
    </>
  );
}
