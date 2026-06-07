"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { testimonials } from "@/lib/site-data";

export function Testimonials() {
  const featured = testimonials.slice(0, 3);

  return (
    <section className="section-pad section-bone">
      <div className="section-container">
        <SectionHeader
          eyebrow="We love them"
          title="What our clients have to say"
          sub="Verified Google reviews from clients across the UAE and overseas."
        />

        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {featured.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, y: -4 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col rounded-2xl border hairline bg-card p-7 shadow-[var(--shadow-soft)]"
            >
              <p className="flex-1 text-sm leading-relaxed text-foreground/90">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-6 border-t hairline pt-5">
                <cite className="not-italic">
                  <div className="font-display font-semibold">{t.name}</div>
                  <div className="mt-0.5 text-xs text-muted-foreground">{t.source}</div>
                </cite>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
