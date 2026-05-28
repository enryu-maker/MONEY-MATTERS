"use client";

import { motion } from "framer-motion";
import hero from "@/assets/hero-dubai.jpg";
import { about, site } from "@/lib/site-data";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[88svh] overflow-hidden pt-20">
      <div className="absolute inset-0">
        <img
          src={hero.src}
          alt="Dubai skyline — Money Matters mortgage consultants"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/75 via-black/45 to-black/25" />
        <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(88svh-5rem)] max-w-7xl flex-col justify-center px-4 py-16 md:px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm"
        >
          Trusted Mortgage Consultancy in UAE
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="max-w-3xl font-display text-4xl leading-[1.05] text-white sm:text-5xl md:text-6xl"
        >
          Looking for a complete
          <br />
          mortgage solution?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-white/85 md:text-lg"
        >
          {about.intro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.24 }}
          className="mt-9 flex flex-wrap gap-3"
        >
          <a
            href="/calculator"
            className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-cta)]"
          >
            Calculate your mortgage instantly
          </a>
          <a
            href="/contact"
            className="rounded-full border border-white/35 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm hover:bg-white/20"
          >
            Let&apos;s Talk
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.32 }}
          className="mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/15 pt-10"
        >
          {[
            { v: String(site.founded), l: "Serving UAE since" },
            { v: "DED", l: "Licensed brokers" },
            { v: "Major", l: "Bank partners" },
          ].map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.38 + i * 0.08 }}
            >
              <div className="font-display text-2xl font-semibold text-white md:text-3xl">{s.v}</div>
              <div className="mt-1 text-xs text-white/65">{s.l}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
