"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function ContactCTA() {
  return (
    <section className="section-pad section-bone">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-4xl rounded-3xl bg-primary px-6 py-14 text-center text-primary-foreground md:px-12 md:py-16"
      >
        <h2 className="font-display text-3xl font-semibold leading-[1.08] md:text-4xl">
          Want to learn more about our services?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/85 md:text-base">
          Let&apos;s talk — get expert mortgage advice and secure the best rates today.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="w-full rounded-full bg-background px-8 py-3.5 text-sm font-semibold text-primary sm:w-auto"
          >
            Let&apos;s talk
          </Link>
          <Link
            href="/calculator"
            className="w-full rounded-full border border-primary-foreground/30 px-8 py-3.5 text-sm font-medium sm:w-auto hover:bg-white/10"
          >
            Calculate your mortgage
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
