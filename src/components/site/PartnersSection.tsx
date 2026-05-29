"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { bankPartners } from "@/lib/site-data";
import { Stagger, StaggerItem } from "./Stagger";
import { spring } from "@/lib/motion";

export function PartnersSection() {
  return (
    <section className="section-pad section-bone">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Our Partners"
          title="Meet our partners"
          sub="Direct relationships with major UAE banks and trusted industry partners."
          center
        />
        <Stagger className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6" as="ul">
          {bankPartners.map((bank) => (
            <StaggerItem key={bank.logo} as="li">
              <motion.div
                whileHover={{ scale: 1.06, y: -3 }}
                transition={spring}
                className="flex h-24 items-center justify-center rounded-2xl border hairline bg-card px-4 py-3 shadow-[var(--shadow-soft)]"
              >
                <Image
                  src={bank.logo}
                  alt={bank.name}
                  width={140}
                  height={56}
                  className="max-h-12 w-full object-contain"
                />
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
