import Link from "next/link";
import { PageBanner } from "@/components/site/PageBanner";
import { BlogCard } from "@/components/site/BlogCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { blogPosts } from "@/lib/blog-data";
import { blogCollectionJsonLd, breadcrumbJsonLd, pageSeo } from "@/lib/seo";

export const metadata = pageSeo.blog;

export default function BlogPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  return (
    <main>
      <JsonLd
        data={[
          blogCollectionJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
          ]),
        ]}
      />
      <PageBanner
        eyebrow="Blog"
        title="Mortgage guides for UAE buyers"
        description="Practical advice on down payments, non-resident finance, refinancing, and navigating Dubai property loans."
      />
      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sorted.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
          <p className="mt-12 text-center text-sm text-muted-foreground">
            Need tailored advice?{" "}
            <Link href="/contact" className="font-medium text-primary hover:underline">
              Speak with our mortgage team
            </Link>{" "}
            or use our{" "}
            <Link href="/calculator" className="font-medium text-primary hover:underline">
              EMI calculator
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
