import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogPostBody } from "@/components/site/BlogPostBody";
import { BlogCard } from "@/components/site/BlogCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { blogPosts, getAllBlogSlugs, getBlogPost } from "@/lib/blog-data";
import { blogPostingJsonLd, breadcrumbJsonLd, buildBlogPostMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-AE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(iso));
}

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return buildBlogPostMetadata(post);
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <main>
      <JsonLd
        data={[
          blogPostingJsonLd(post),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />

      <header className="section-bone border-b hairline">
        <div className="mx-auto max-w-3xl px-4 py-14 md:px-6 md:py-16">
          <nav className="text-xs text-muted-foreground" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-primary">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{post.category}</span>
          </nav>
          <p className="mt-6 text-xs font-medium uppercase tracking-widest text-primary">
            {post.category}
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl md:leading-tight">
            {post.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{post.excerpt}</p>
          <p className="mt-6 text-sm text-muted-foreground">
            {formatDate(post.publishedAt)} · {post.readMinutes} min read · {post.author}
          </p>
        </div>
      </header>

      <article className="section-pad">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <BlogPostBody post={post} />
        </div>
      </article>

      {related.length > 0 && (
        <section className="section-pad section-bone border-t hairline">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <h2 className="font-display text-2xl font-semibold">More mortgage guides</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
