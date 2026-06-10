"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";
import { services } from "@/lib/site-data";
import { SectionHeader } from "./SectionHeader";
import { Stagger, StaggerItem } from "./Stagger";
import { cardHover, spring } from "@/lib/motion";
import { AnimateIn } from "./AnimateIn";

const PREVIEW_COUNT = 3;

const cardClass =
  "flex h-full flex-col rounded-2xl border hairline bg-card p-6 shadow-[var(--shadow-soft)]";

export function ServicesPreview() {
  const preview = services.slice(0, PREVIEW_COUNT);
  const moreServices = services.slice(PREVIEW_COUNT);
  const moreCount = moreServices.length;

  return (
    <section className="section-pad">
      <div className="section-container">
        <SectionHeader
          eyebrow="Our Services"
          largeEyebrow
          title="What we do"
          sub={`${services.length} specialized mortgage solutions — factual, unbiased guidance across the full range of UAE mortgage products.`}
        />
        <Stagger className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
          {preview.map((s) => (
            <StaggerItem key={s.title}>
              <motion.article
                initial="rest"
                whileHover="hover"
                variants={cardHover}
                className={cardClass}
              >
                <h3 className="font-display text-xl font-semibold lg:text-2xl">{s.title}</h3>
                <p className="mt-3 line-clamp-4 flex-1 text-base leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </motion.article>
            </StaggerItem>
          ))}
          <StaggerItem>
            <motion.div initial="rest" whileHover="hover" variants={cardHover} className="h-full">
              <Link
                href="/services"
                className={`${cardClass} group relative overflow-hidden border-primary/20 bg-primary/[0.04] transition-colors hover:border-primary/35 hover:bg-primary/[0.07]`}
              >
                <div
                  className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/10"
                  aria-hidden
                />
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-semibold text-primary-foreground">
                    +{moreCount}
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                    More services
                  </p>
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold lg:text-2xl">
                  Explore all {services.length} solutions
                </h3>
                <ul className="mt-3 space-y-1.5 text-sm leading-snug text-muted-foreground">
                  {moreServices.slice(0, 4).map((s) => (
                    <li key={s.title} className="flex items-start gap-2">
                      <Plus className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" aria-hidden />
                      <span className="line-clamp-1">{s.title}</span>
                    </li>
                  ))}
                  {moreCount > 4 ? (
                    <li className="pl-5 text-xs font-medium text-primary">
                      +{moreCount - 4} more
                    </li>
                  ) : null}
                </ul>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-transform group-hover:gap-2.5">
                  View all services
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </motion.div>
          </StaggerItem>
        </Stagger>
        <AnimateIn className="mt-10 text-center" variant="scaleIn" delay={0.1}>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} transition={spring}>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-cta)]"
            >
              View all {services.length} services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </AnimateIn>
      </div>
    </section>
  );
}
