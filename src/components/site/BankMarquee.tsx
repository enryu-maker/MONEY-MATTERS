"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { bankPartners, type BankPartner, type PartnerLogoSize } from "@/lib/site-data";
import { AnimateIn } from "./AnimateIn";

type LogoScale = PartnerLogoSize;

/** Card slot — matches PartnersSection grid cells for even spacing & look */
const LOGO_CARD =
  "flex h-24 w-[15rem] shrink-0 items-center justify-center rounded-2xl border hairline bg-card px-4 py-3 shadow-[var(--shadow-soft)] md:h-24 md:w-[17rem]";

const MARQUEE_GAP = "gap-4 md:gap-4";

function logoScaleByName(name: string): LogoScale {
  if (name.includes("Mashreq")) return "large";
  if (name.includes("Ajman") || name.includes("First Abu Dhabi") || name.includes("Bank of Baroda")) {
    return "small";
  }
  return "default";
}

function resolveLogoScale(partner: BankPartner): LogoScale {
  return partner.logoSize ?? logoScaleByName(partner.name);
}

const logoSizeClass: Record<LogoScale, string> = {
  large: "max-h-16 w-full object-contain md:max-h-[4.5rem]",
  default: "max-h-12 w-full object-contain",
  small: "max-h-9 w-full object-contain md:max-h-10",
};

function PartnerLogo({ partner }: { partner: BankPartner }) {
  const scale = resolveLogoScale(partner);

  return (
    <div className={LOGO_CARD}>
      <Image
        src={partner.logo}
        alt={partner.name}
        width={140}
        height={56}
        className={logoSizeClass[scale]}
      />
    </div>
  );
}

export function BankMarquee({ label }: { label?: string }) {
  const items = [...bankPartners, ...bankPartners];

  return (
    <section className="section-bone border-t hairline py-10 md:py-12">
      {label && (
        <AnimateIn className="mb-8 text-center" variant="fadeIn">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground md:text-base">
            {label}
          </p>
        </AnimateIn>
      )}
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-linear-to-r from-secondary to-transparent md:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-linear-to-l from-secondary to-transparent md:w-24" />
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className={`flex w-max items-center ${MARQUEE_GAP}`}
        >
          {items.map((bank, i) => (
            <PartnerLogo key={`${bank.logo}-${i}`} partner={bank} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
