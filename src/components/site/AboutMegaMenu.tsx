"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Building2, Handshake, Users, type LucideIcon } from "lucide-react";
import { aboutNav, allPartners } from "@/lib/site-data";

const aboutIcons: Record<string, LucideIcon> = {
  "/about": Building2,
  "/about/team": Users,
  "/about/partners": Handshake,
};

const spring = { type: "spring" as const, stiffness: 400, damping: 30 };
const easeOut = [0.16, 1, 0.3, 1] as const;

const itemFade = {
  hidden: { opacity: 0, y: 10, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { ...spring } },
};

type AboutMegaMenuProps = {
  pathname: string;
  onNavigate?: () => void;
  variant?: "desktop" | "mobile";
  animated?: boolean;
};

function cn(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export function AboutMegaMenu({
  pathname,
  onNavigate,
  variant = "desktop",
  animated = false,
}: AboutMegaMenuProps) {
  const isMobile = variant === "mobile";

  const aboutLinks = aboutNav.map((item) => {
          const Icon = aboutIcons[item.href] ?? Building2;
          const active = pathname === item.href;
          const inner = (
            <Link
              href={item.href}
              onClick={onNavigate}
              className={cn(
                "flex gap-3 rounded-xl px-3 py-3 transition-colors",
                active ? "bg-primary/8" : "hover:bg-secondary",
              )}
            >
              <span
                className={cn(
                  "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg",
                  active ? "bg-primary text-primary-foreground" : "bg-secondary text-primary",
                )}
              >
                <Icon className="h-4 w-4" />
              </span>
              <span>
                <span className="block text-sm font-semibold text-foreground">{item.label}</span>
                <span className="mt-0.5 block text-xs text-muted-foreground">{item.description}</span>
              </span>
            </Link>
          );

          if (animated) {
            return (
              <motion.div key={item.href} variants={itemFade} whileHover={{ x: 4 }} whileTap={{ scale: 0.98 }}>
                {inner}
              </motion.div>
            );
          }
          return <div key={item.href}>{inner}</div>;
        });

  return (
    <div className={isMobile ? "mt-2 space-y-3 px-1" : ""}>
      {animated ? (
        <motion.div
          className={cn("space-y-1", !isMobile && "p-2")}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }}
          initial="hidden"
          animate="visible"
        >
          {aboutLinks}
        </motion.div>
      ) : (
        <div className={cn("space-y-1", !isMobile && "p-2")}>{aboutLinks}</div>
      )}

      {animated ? (
        <motion.div
          variants={itemFade}
          className={cn(
            "border-t hairline",
            isMobile ? "rounded-xl bg-secondary/50 p-4" : "bg-muted/40 p-3",
          )}
        >
          <PartnersBlock onNavigate={onNavigate} animated />
        </motion.div>
      ) : (
        <div
          className={cn(
            "border-t hairline",
            isMobile ? "rounded-xl bg-secondary/50 p-4" : "bg-muted/40 p-3",
          )}
        >
          <PartnersBlock onNavigate={onNavigate} />
        </div>
      )}
    </div>
  );
}

function PartnersBlock({
  onNavigate,
  animated,
}: {
  onNavigate?: () => void;
  animated?: boolean;
}) {
  return (
    <>
      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
        Our partners
      </p>
      <motion.ul
        className="mt-3 grid grid-cols-4 gap-2"
        variants={
          animated
            ? { hidden: {}, visible: { transition: { staggerChildren: 0.03, delayChildren: 0.1 } } }
            : undefined
        }
        initial={animated ? "hidden" : undefined}
        animate={animated ? "visible" : undefined}
      >
        {allPartners.map((partner) => (
          <motion.li
            key={partner.logo}
            variants={
              animated
                ? {
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1, transition: spring },
                  }
                : undefined
            }
            whileHover={animated ? { scale: 1.08, y: -2 } : undefined}
            whileTap={animated ? { scale: 0.95 } : undefined}
          >
            <Link
              href="/about/partners"
              onClick={onNavigate}
              title={partner.name}
              className="flex h-11 items-center justify-center rounded-lg border hairline bg-background px-1.5 py-1 transition-colors hover:border-primary/25 hover:shadow-sm"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={72}
                height={32}
                className="max-h-7 w-full object-contain"
              />
            </Link>
          </motion.li>
        ))}
      </motion.ul>
      {animated ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.3 }}
        >
          <Link
            href="/about/partners"
            onClick={onNavigate}
            className="mt-3 inline-block text-xs font-medium text-primary hover:underline"
          >
            View all partners →
          </Link>
        </motion.div>
      ) : (
        <Link
          href="/about/partners"
          onClick={onNavigate}
          className="mt-3 inline-block text-xs font-medium text-primary hover:underline"
        >
          View all partners →
        </Link>
      )}
    </>
  );
}
