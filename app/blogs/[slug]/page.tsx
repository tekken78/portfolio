// app/blogs/[slug]/page.tsx (Server Component)
import { PortableText } from "@portabletext/react";
import { client, urlFor } from "@/sanity/lib/client";
import styles from "@/styles/Blog.module.css";
import type { PortableTextBlock } from "@portabletext/types";

type BlogPost = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt?: string;
  content?: PortableTextBlock[];
  coverImage?: { asset: any; alt?: string };
  author?: string;
};

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  // ✅ unwrap params (server side, runs once)
  const { slug } = await params;

  // ✅ fetch on server
  const query = `*[_type=="blog" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    publishedAt,
    content,
    coverImage,
    author
  }`;

  const post: BlogPost | null = await client.fetch(query, { slug });

  if (!post) {
    return <p className={styles.notFound}>Blog post not found.</p>;
  }

  return (
    <main className={styles.blogContainer}>
      <article className={styles.blogPost}>
        <h1 className={styles.blogTitle}>{post.title}</h1>

        {/* Cover Image + Author/Date */}
        {post.coverImage && (
          <div className={styles.coverImageWrapper}>
            <img
              src={urlFor(post.coverImage).width(800).url()}
              alt={post.title}
              className={styles.blogCoverImage}
            />
            <div className={styles.coverInfo}>
              <span>{post.author || "Unknown Author"}</span>
              <span>•</span>
              {post.publishedAt && (
                <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
              )}
            </div>
          </div>
        )}

        {/* Blog Content */}
        {post.content ? (
          <PortableText value={post.content} />
        ) : (
          <p>No content available.</p>
        )}
      </article>
    </main>
  );
}
