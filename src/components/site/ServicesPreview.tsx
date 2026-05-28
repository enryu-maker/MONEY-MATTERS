import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/site-data";
import { SectionHeader } from "./SectionHeader";

export function ServicesPreview() {
  const preview = services.slice(0, 3);

  return (
    <section className="section-pad">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Our Services"
          title="What we do"
          sub="Factual, unbiased guidance across the full range of UAE mortgage products."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {preview.map((s) => (
            <article key={s.title} className="rounded-2xl border hairline bg-card p-6 shadow-[var(--shadow-soft)]">
              <h3 className="font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-cta)]"
          >
            View all services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
