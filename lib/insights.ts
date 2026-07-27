// Markdown-driven perspectives articles. Files live in content/perspectives/*.md
// with frontmatter; the STEIL platform's blog dispatcher commits new ones on
// approval, Vercel rebuilds, the article is live. The original hand-coded
// articles are untouched — this pipeline is for everything after them.

import fs from 'fs';
import path from 'path';

const CONTENT_DIR = path.join(process.cwd(), 'content', 'perspectives');

export type MdPost = {
  slug: string;
  title: string;
  description: string;
  kicker: string;
  date: string; // ISO yyyy-mm-dd
  body: string; // markdown
};

function parseFrontmatter(raw: string): { meta: Record<string, string>; body: string } {
  if (!raw.startsWith('---')) return { meta: {}, body: raw };
  const end = raw.indexOf('\n---', 3);
  if (end === -1) return { meta: {}, body: raw };
  const meta: Record<string, string> = {};
  for (const line of raw.slice(3, end).split('\n')) {
    const i = line.indexOf(':');
    if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  }
  return { meta, body: raw.slice(end + 4).trim() };
}

export function listMdPosts(): MdPost[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => {
      const { meta, body } = parseFrontmatter(
        fs.readFileSync(path.join(CONTENT_DIR, f), 'utf8'),
      );
      return {
        slug: f.replace(/\.md$/, ''),
        title: meta.title ?? f,
        description: meta.description ?? '',
        kicker: meta.kicker ?? 'Perspectives',
        date: meta.date ?? '',
        body,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getMdPost(slug: string): MdPost | undefined {
  return listMdPosts().find((p) => p.slug === slug);
}

export function displayDate(iso: string): string {
  if (!iso) return '';
  const d = new Date(iso + 'T00:00:00Z');
  return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' });
}

// Minimal markdown -> HTML for our own reviewed, model-drafted articles:
// paragraphs, h2/h3, bold, italics, links, lists, blockquotes. Build-time only.
function inline(md: string): string {
  return md
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2">$1</a>');
}

export function mdToHtml(md: string): string {
  const blocks = md.split(/\n{2,}/).map((b) => b.trim()).filter(Boolean);
  return blocks
    .map((b) => {
      if (b.startsWith('### ')) return `<h3>${inline(b.slice(4))}</h3>`;
      if (b.startsWith('## ')) return `<h2>${inline(b.slice(3))}</h2>`;
      if (b.startsWith('# ')) return `<h2>${inline(b.slice(2))}</h2>`;
      if (b.startsWith('> ')) return `<blockquote><p>${inline(b.replace(/^> ?/gm, ''))}</p></blockquote>`;
      if (/^[-*] /m.test(b) && b.split('\n').every((l) => /^[-*] /.test(l)))
        return `<ul>${b.split('\n').map((l) => `<li>${inline(l.slice(2))}</li>`).join('')}</ul>`;
      if (/^\d+\. /m.test(b) && b.split('\n').every((l) => /^\d+\. /.test(l)))
        return `<ol>${b.split('\n').map((l) => `<li>${inline(l.replace(/^\d+\. /, ''))}</li>`).join('')}</ol>`;
      return `<p>${inline(b.replace(/\n/g, ' '))}</p>`;
    })
    .join('\n');
}
