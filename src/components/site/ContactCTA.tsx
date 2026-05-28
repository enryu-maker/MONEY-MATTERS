"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { spring, staggerContainer } from "@/lib/motion";

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export function ContactCTA() {
  return (
    <section className="section-pad section-bone">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={staggerContainer}
        className="mx-auto max-w-4xl rounded-3xl bg-primary px-6 py-14 text-center text-primary-foreground md:px-12 md:py-16"
      >
        <motion.h2
          variants={item}
          className="font-display text-3xl font-semibold leading-[1.08] md:text-4xl"
        >
          Want to learn more about our services?
        </motion.h2>
        <motion.p
          variants={item}
          className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/85 md:text-base"
        >
          Let&apos;s talk — get expert mortgage advice and secure the best rates today.
        </motion.p>
        <motion.div
          variants={item}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} transition={spring}>
            <Link
              href="/contact"
              className="block w-full rounded-full bg-background px-8 py-3.5 text-sm font-semibold text-primary sm:w-auto"
            >
              Let&apos;s talk
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} transition={spring}>
            <Link
              href="/calculator"
              className="block w-full rounded-full border border-primary-foreground/30 px-8 py-3.5 text-sm font-medium sm:w-auto hover:bg-white/10"
            >
              Calculate your mortgage
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
