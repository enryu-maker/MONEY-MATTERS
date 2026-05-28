"use client";

import { motion } from "framer-motion";
import consult from "@/assets/consult.jpg";
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
              src={consult.src}
              alt="Money Matters mortgage consultants in Dubai, UAE"
              className="aspect-[4/3] w-full object-cover"
            />
          </motion.div>
        </AnimateIn>
        <AnimateIn variant="fadeRight" delay={0.08}>
          <h2 className="font-display text-3xl font-semibold md:text-4xl">About Us</h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">{about.intro}</p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">{about.detail}</p>
          <Stagger className="mt-8 grid grid-cols-2 gap-4">
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
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">Licensed</dt>
                <dd className="mt-1 font-display text-lg font-semibold">DED · Dubai</dd>
              </motion.div>
            </StaggerItem>
          </Stagger>
        </AnimateIn>
      </div>
    </section>
  );
}
