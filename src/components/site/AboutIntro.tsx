"use client";

import { motion } from "framer-motion";
import { about, site } from "@/lib/site-data";
import { AnimateIn } from "./AnimateIn";
import { Stagger, StaggerItem } from "./Stagger";
import { cardHover, spring } from "@/lib/motion";

export function AboutIntro() {
  return (
    <section className="section-pad">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <AnimateIn variant="fadeLeft">
          <motion.div
            className="overflow-hidden rounded-2xl border hairline shadow-[var(--shadow-card)]"
            whileHover={{ scale: 1.02 }}
            transition={spring}
          >
            <img
              src="/about/about-hero.png"
              alt="Money Matters mortgage consultants in Dubai, UAE"
              className="aspect-[4/3] w-full object-cover"
            />
          </motion.div>
        </AnimateIn>
        <AnimateIn variant="fadeRight" delay={0.08}>
          <h2 className="font-display text-3xl font-semibold md:text-4xl">About Us</h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">{about.intro}</p>
          <div className="mt-5 rounded-2xl border border-primary/20 bg-primary/5 p-4 md:p-5">
            <p className="text-sm font-medium leading-relaxed text-foreground md:text-base">{about.detail}</p>
          </div>
          <Stagger className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <StaggerItem>
              <motion.div
                initial="rest"
                whileHover="hover"
                variants={cardHover}
                className="rounded-xl border hairline bg-card p-4"
              >
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">Founded</dt>
                <dd className="mt-1 font-display text-2xl font-semibold text-primary">{site.founded}</dd>
              </motion.div>
            </StaggerItem>
            <StaggerItem>
              <motion.div
                initial="rest"
                whileHover="hover"
                variants={cardHover}
                className="rounded-xl border hairline bg-card p-4"
              >
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">Licensed / Certified</dt>
                <ul className="mt-1 font-display text-lg font-semibold">
                  <li>Dubai Economic Department</li>
                  <li>RERA Mortgage Brokers</li>
                </ul>              </motion.div>
            </StaggerItem>
          </Stagger>
        </AnimateIn>
      </div>
    </section>
  );
}
