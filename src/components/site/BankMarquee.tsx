"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { bankPartners, type PartnerLogoSize } from "@/lib/site-data";
import { AnimateIn } from "./AnimateIn";

type LogoScale = PartnerLogoSize;

function logoScaleByName(name: string): LogoScale {
  if (name.includes("Mashreq")) return "large";
  if (name.includes("Ajman") || name.includes("First Abu Dhabi") || name.includes("Bank of Baroda")) {
    return "small";
  }
  return "default";
}

function resolveLogoScale(partner: (typeof bankPartners)[number]): LogoScale {
  return "logoSize" in partner && partner.logoSize ? partner.logoSize : logoScaleByName(partner.name);
}

const logoSizeClass: Record<LogoScale, string> = {
  large: "h-[4.5rem] w-auto max-w-[16rem] md:h-[6rem] md:max-w-[19rem]",
  default: "h-14 w-auto max-w-[12rem] md:h-[4.5rem] md:max-w-[15rem]",
  small: "h-10 w-auto max-w-[9rem] md:h-12 md:max-w-[11rem]",
};

const logoSlotClass: Record<LogoScale, string> = {
  large: "h-24 w-60 md:h-28 md:w-72",
  default: "h-20 w-52 md:h-24 md:w-64",
  small: "h-16 w-44 md:h-20 md:w-52",
};

function PartnerLogo({ partner }: { partner: (typeof bankPartners)[number] }) {
  const scale = resolveLogoScale(partner);

  return (
    <div
      className={`flex shrink-0 items-center justify-center px-3 ${logoSlotClass[scale]}`}
    >
      <Image
        src={partner.logo}
        alt={partner.name}
        width={280}
        height={112}
        className={`object-contain object-center ${logoSizeClass[scale]}`}
      />
    </div>
  );
}

export function BankMarquee({ label }: { label?: string }) {
  const items = [...bankPartners, ...bankPartners];

  return (
    <section className="border-y hairline bg-white py-10">
      {label && (
        <AnimateIn className="mb-8 text-center" variant="fadeIn">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground md:text-base">
            {label}
          </p>
        </AnimateIn>
      )}
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-white to-transparent" />
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex w-max items-center gap-12 px-8 md:gap-14"
        >
          {items.map((bank, i) => (
            <PartnerLogo key={`${bank.logo}-${i}`} partner={bank} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
