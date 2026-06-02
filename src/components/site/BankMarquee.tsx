"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { bankPartners } from "@/lib/site-data";
import { AnimateIn } from "./AnimateIn";

function PartnerLogo({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="flex h-16 w-44 shrink-0 items-center justify-center px-3 md:h-20 md:w-56">
      <Image
        src={logo}
        alt={name}
        width={200}
        height={80}
        className="max-h-12 w-auto max-w-[11rem] object-contain md:max-h-14 md:max-w-[13rem]"
      />
    </div>
  );
}

export function BankMarquee({ label }: { label?: string }) {
  const items = [...bankPartners, ...bankPartners];

  return (
    <section className="border-y hairline section-bone py-10">
      {label && (
        <AnimateIn className="mb-8 text-center" variant="fadeIn">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">{label}</p>
        </AnimateIn>
      )}
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-[var(--bone)] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-[var(--bone)] to-transparent" />
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex w-max items-center gap-10 px-8 md:gap-14"
        >
          {items.map((bank, i) => (
            <PartnerLogo key={`${bank.logo}-${i}`} name={bank.name} logo={bank.logo} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
