import Link from "next/link";
import type { BlogBlock, BlogPost } from "@/lib/blog-data";

export function BlogPostBody({ post }: { post: BlogPost }) {
  return (
    <article className="blog-prose">
      {post.blocks.map((block, i) => (
        <Block key={i} block={block} />
      ))}
      <div className="not-prose mt-12 rounded-2xl border hairline bg-secondary/40 p-6 sm:p-8">
        <p className="font-display text-lg font-semibold">Ready for personalised advice?</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Our Dubai mortgage consultants compare UAE bank offers at no cost to you.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-cta)]"
          >
            Book a consultation
          </Link>
          <Link
            href="/calculator"
            className="rounded-full border hairline bg-card px-5 py-2.5 text-sm font-medium hover:border-primary/30"
          >
            EMI calculator
          </Link>
        </div>
      </div>
    </article>
  );
}

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "h2":
      return <h2>{block.text}</h2>;
    case "h3":
      return <h3>{block.text}</h3>;
    case "ul":
      return (
        <ul>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    default:
      return <p>{block.text}</p>;
  }
}
