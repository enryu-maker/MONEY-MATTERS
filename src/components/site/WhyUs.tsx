"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const reasons = [
  {
    n: "01",
    title: "Independent advice",
    desc: "Factual, unbiased recommendations across mortgage overlays — retail, corporate, residential, and commercial.",
  },
  {
    n: "02",
    title: "Major bank network",
    desc: "Affiliated with major banks in the UAE — we compare products so you can make an informed decision.",
  },
  {
    n: "03",
    title: "End-to-end support",
    desc: "From pre-approval through to transfer, we handhold you and handle requirements until completion.",
  },
  {
    n: "04",
    title: "Since 2016",
    desc: "Licensed under the Dubai Economy Department, serving an ever-growing clientele across the UAE.",
  },
];

export function WhyUs() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeader
              eyebrow="Why Money Matters"
              title="Your mortgage broker in Business Bay, Dubai"
              sub="We work directly with our clients, catering to their specific needs pertaining to mortgage loans."
            />
            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-full border hairline px-6 py-2.5 text-sm font-medium hover:bg-secondary"
            >
              Contact now
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((r, i) => (
              <motion.div
                key={r.n}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border hairline bg-card p-6 shadow-[var(--shadow-soft)]"
              >
                <span className="font-display text-sm font-semibold text-primary">{r.n}</span>
                <h3 className="mt-3 font-display text-lg font-semibold">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
