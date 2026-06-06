"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/site-data";
import { SectionHeader } from "./SectionHeader";
import { Stagger, StaggerItem } from "./Stagger";
import { cardHover, spring } from "@/lib/motion";
import { AnimateIn } from "./AnimateIn";

export function ServicesPreview() {
  const preview = services.slice(0, 3);

  return (
    <section className="section-pad">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Our Services"
          largeEyebrow
          title="What we do"
          sub="Factual, unbiased guidance across the full range of UAE mortgage products."
        />
        <Stagger className="mt-10 grid gap-4 md:grid-cols-3">
          {preview.map((s) => (
            <StaggerItem key={s.title}>
              <motion.article
                initial="rest"
                whileHover="hover"
                variants={cardHover}
                className="h-full rounded-2xl border hairline bg-card p-6 shadow-[var(--shadow-soft)]"
              >
                <h3 className="font-display text-2xl font-semibold">{s.title}</h3>
                <p className="mt-3 line-clamp-4 text-base leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </motion.article>
            </StaggerItem>
          ))}
        </Stagger>
        <AnimateIn className="mt-10 text-center" variant="scaleIn" delay={0.1}>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} transition={spring}>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-cta)]"
            >
              View all services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </AnimateIn>
      </div>
    </section>
  );
}
