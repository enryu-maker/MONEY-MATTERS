"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/site-data";
import { SectionHeader } from "./SectionHeader";

export function Services() {
  return (
    <section className="section-pad">
      <div className="section-container">
        <SectionHeader
          eyebrow="Our Services"
          title="Mortgage solutions for every property class in the UAE"
          sub="Retail and corporate, residential and commercial — affiliated with major banks across the UAE financial sector."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, y: -4 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group flex flex-col rounded-2xl border hairline bg-card p-7 shadow-[var(--shadow-soft)]"
            >
              <p className="text-xs uppercase tracking-[0.14em] text-primary md:text-sm">{s.summary}</p>
              <h3 className="mt-3 font-display text-2xl font-semibold">{s.title}</h3>
              <p className="mt-3 flex-1 text-base leading-relaxed text-muted-foreground">{s.description}</p>
              <a
                href="/contact"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary"
              >
                Read more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
