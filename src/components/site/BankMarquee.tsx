"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { bankPartners } from "@/lib/site-data";

function PartnerLogo({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="flex h-14 w-36 shrink-0 items-center justify-center px-2 md:h-16 md:w-44">
      <Image
        src={logo}
        alt={name}
        width={160}
        height={64}
        className="max-h-10 w-auto max-w-[9rem] object-contain opacity-80 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 md:max-h-12 md:max-w-[10.5rem]"
      />
    </div>
  );
}

export function BankMarquee({ label }: { label?: string }) {
  const items = [...bankPartners, ...bankPartners];

  return (
    <section className="border-y hairline section-bone py-10">
      {label && (
        <p className="mb-8 text-center text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          {label}
        </p>
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
