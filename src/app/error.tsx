"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { easeOut, staggerContainer } from "@/lib/motion";

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: easeOut } },
};

export default function ErrorComponent({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <motion.div
        className="max-w-md text-center"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.h1 variants={item} className="text-xl font-semibold tracking-tight text-foreground">
          This page didn&apos;t load
        </motion.h1>
        <motion.p variants={item} className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </motion.p>
        <motion.div variants={item} className="mt-6 flex flex-wrap justify-center gap-2">
          <motion.button
            onClick={() => reset()}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
          >
            Try again
          </motion.button>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-md border hairline bg-background px-4 py-2 text-sm font-medium text-foreground"
            >
              Go home
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
