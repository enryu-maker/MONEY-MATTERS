"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Logo } from "@/components/site/Logo";
import { easeOut, staggerContainer } from "@/lib/motion";

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
};

export default function NotFound() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center px-6 text-center">
      <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
        <motion.div variants={item}>
          <Logo className="mb-10" />
        </motion.div>
        <motion.p variants={item} className="text-xs font-medium uppercase tracking-widest text-primary">
          404
        </motion.p>
        <motion.h1 variants={item} className="mt-4 font-display text-4xl font-semibold">
          Page not found
        </motion.h1>
        <motion.p variants={item} className="mt-3 max-w-sm text-sm text-muted-foreground">
          This page doesn&apos;t exist. Return to our homepage to explore mortgage services.
        </motion.p>
        <motion.div variants={item} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
          <Link
            href="/"
            className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-cta)]"
          >
            Back to home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
