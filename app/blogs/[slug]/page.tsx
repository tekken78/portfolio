'use client';

import { PortableText } from '@portabletext/react';
import { client } from '@/sanity/lib/client';
import styles from '@/styles/Blog.module.css';

import type { PortableTextBlock } from '@portabletext/types';

type BlogPost = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt?: string;
  content?: PortableTextBlock[];
};

interface BlogPageProps {
  params: { slug: string };
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const slug = params.slug;

  // Fetch single blog post by slug
  const query = `*[_type=="blog" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    publishedAt,
    content
  }`;

  const post: BlogPost | null = await client.fetch(query, { slug });

  if (!post) {
    return <p className={styles.notFound}>Blog post not found.</p>;
  }

  return (
    <main className={styles.blogContainer}>
      <article className={styles.blogPost}>
        <h1 className={styles.blogTitle}>{post.title}</h1>
        {post.publishedAt && (
          <p className={styles.blogDate}>
            {new Date(post.publishedAt).toLocaleDateString()}
          </p>
        )}
        {post.content ? (
          <PortableText value={post.content} />
        ) : (
          <p>No content available.</p>
        )}
      </article>
    </main>
  );
}
