"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { easeOut, staggerContainer } from "@/lib/motion";

const item = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: easeOut },
  },
};

export function PageBanner({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="section-bone border-b hairline overflow-hidden">
      <motion.div
        className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-16"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.nav
          variants={item}
          className="mb-6 text-xs text-muted-foreground"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{eyebrow}</span>
        </motion.nav>
        <motion.p variants={item} className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </motion.p>
        <motion.h1
          variants={item}
          className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            variants={item}
            className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            {description}
          </motion.p>
        )}
        <motion.div
          variants={item}
          className="mt-8 h-1 w-16 rounded-full bg-primary"
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.35, duration: 0.5, ease: easeOut }}
        />
      </motion.div>
    </section>
  );
}
