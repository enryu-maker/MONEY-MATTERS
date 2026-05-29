import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import type { BlogPost } from "@/lib/blog-data";

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-AE", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(iso));
}

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group relative flex h-full flex-col rounded-2xl border hairline bg-card p-6 shadow-[var(--shadow-soft)] transition-shadow hover:shadow-[var(--shadow-card)]">
      <p className="text-xs font-medium uppercase tracking-widest text-primary">{post.category}</p>
      <h2 className="mt-3 font-display text-xl font-semibold leading-snug tracking-tight group-hover:text-primary">
        <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0">
          {post.title}
        </Link>
      </h2>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
      <div className="mt-5 flex items-center justify-between gap-3 border-t hairline pt-4 text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5" aria-hidden />
          {post.readMinutes} min read
        </span>
        <span>{formatDate(post.publishedAt)}</span>
      </div>
      <p className="relative mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
        Read article
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </p>
    </article>
  );
}
