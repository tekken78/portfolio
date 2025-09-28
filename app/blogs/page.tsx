'use client';

import { useEffect, useState } from 'react';
import styles from '@/styles/Blog.module.css';
import { client } from '@/sanity/lib/client';
import { PortableText } from '@portabletext/react';

// Minimal types for Portable Text blocks we expect
type PTChild = { text?: string };
type PTBlock = { _type?: string; children?: PTChild[] };

// Blog shape we fetch from Sanity
type BlogPost = {
  _id: string;
  title: string;
  slug?: { current: string };
  publishedAt?: string;
  content?: PTBlock[];
  excerpt?: string;
};

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
    const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

    if (!projectId || !dataset) {
      console.error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID or NEXT_PUBLIC_SANITY_DATASET');
      setLoading(false);
      return;
    }

    const groq = `*[_type == "blog"]{_id,title,slug,publishedAt,excerpt,content}`;
    const url = `https://${projectId}.api.sanity.io/v2023-10-21/data/query/${dataset}?query=${encodeURIComponent(
      groq
    )}`;

    fetch(url)
      .then((r) => r.json())
      .then((data) => setPosts(data.result || []))
      .catch((err) => console.error('Error fetching blogs:', err))
      .finally(() => setLoading(false));
  }, []);

  // Helper: build plain-text excerpt from Portable Text blocks
  function extractTextFromPortableText(blocks?: PTBlock[]) {
    if (!blocks || !blocks.length) return '';
    const paragraphs = blocks.map((b) => (b.children || []).map((c) => c.text || '').join(''));
    return paragraphs.join(' ').replace(/\s+/g, ' ').trim();
  }

  function getExcerpt(post: BlogPost, max = 160) {
    if (post.excerpt && post.excerpt.trim().length) return post.excerpt.trim();
    const text = extractTextFromPortableText(post.content);
    if (!text) return 'No excerpt available.';
    if (text.length <= max) return text;
    const cut = text.slice(0, max);
    return cut.slice(0, cut.lastIndexOf(' ')) + '…';
  }

  return (
    <main className={styles.blogContainer}>
      <h1 className={styles.pageTitle}>Thoughts, Code & Curiosity</h1>

      {loading ? (
        <p className={styles.loading}>Loading posts…</p>
      ) : (
        <div className={styles.postsGrid}>
          {posts.map((post) => (
            <article key={post._id} className={styles.card}>
              <h2 className={styles.cardTitle}>{post.title}</h2>

              <p className={styles.cardExcerpt}>{getExcerpt(post)}</p>

              {post.slug?.current && (
                <a className={styles.readMore} href={`/blogs/${post.slug.current}`}>
                  Read More →
                </a>
              )}
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
