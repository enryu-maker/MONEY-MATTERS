"use client";

import { useSyncExternalStore, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronRight, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site-data";
import { Stagger, StaggerItem } from "./Stagger";
import { cardHover } from "@/lib/motion";

const cardClass =
  "group flex h-full min-h-[220px] cursor-pointer flex-col rounded-2xl border hairline bg-card p-7 shadow-[var(--shadow-soft)] transition-colors duration-200 hover:border-primary/25 hover:bg-primary/5";

const cardShadowRest = "0 4px 24px -6px oklch(13% 0.01 30 / 0.08)";
const cardShadowPrompt = "0 10px 32px -8px oklch(52% 0.21 26 / 0.2)";

function useIsMobile() {
  return useSyncExternalStore(
    (onStoreChange) => {
      const mq = window.matchMedia("(max-width: 767px)");
      mq.addEventListener("change", onStoreChange);
      return () => mq.removeEventListener("change", onStoreChange);
    },
    () => window.matchMedia("(max-width: 767px)").matches,
    () => false,
  );
}

function ActionHint({ children }: { children: ReactNode }) {
  return (
    <span className="contact-hint-nudge inline-flex items-center gap-1 text-xs font-medium text-primary opacity-100 transition-opacity duration-200 md:opacity-0 md:group-hover:opacity-100">
      {children}
      <ChevronRight className="h-3.5 w-3.5 md:hidden" aria-hidden />
    </span>
  );
}

type ContactCardProps = {
  index: number;
  isMobile: boolean;
  href: string;
  target?: string;
  rel?: string;
  icon: ReactNode;
  label: string;
  title: ReactNode;
  footer: ReactNode;
  hint: ReactNode;
};

function ContactCard({
  index,
  isMobile,
  href,
  target,
  rel,
  icon,
  label,
  title,
  footer,
  hint,
}: ContactCardProps) {
  return (
    <StaggerItem className="h-full">
      <motion.a
        href={href}
        target={target}
        rel={rel}
        initial="rest"
        whileHover={isMobile ? undefined : "hover"}
        whileTap={{ scale: 0.98 }}
        variants={cardHover}
        animate={
          isMobile
            ? {
                y: [0, -5, 0],
                boxShadow: [cardShadowRest, cardShadowPrompt, cardShadowRest],
                borderColor: [
                  "var(--border)",
                  "oklch(52% 0.21 26 / 0.4)",
                  "var(--border)",
                ],
              }
            : undefined
        }
        transition={
          isMobile
            ? {
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.5,
              }
            : undefined
        }
        className={cardClass}
      >
        {icon}
        <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
        {title}
        <div className="mt-auto flex flex-col gap-1 pt-4">
          {footer}
          <ActionHint>{hint}</ActionHint>
        </div>
      </motion.a>
    </StaggerItem>
  );
}

export function ContactDetails() {
  const isMobile = useIsMobile();
  const reduceMotion = useReducedMotion();
  const showMobilePrompt = isMobile && !reduceMotion;

  return (
    <section className="section-pad">
      {isMobile ? (
        <p className="section-container mx-auto mb-5 flex items-center justify-center gap-2 text-center text-sm font-medium text-primary md:hidden">
          {showMobilePrompt ? (
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden
            >
              <ChevronRight className="h-4 w-4" />
            </motion.span>
          ) : (
            <ChevronRight className="h-4 w-4" aria-hidden />
          )}
          Tap a card to get in touch
          {showMobilePrompt ? (
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              aria-hidden
            >
              <ChevronRight className="h-4 w-4" />
            </motion.span>
          ) : (
            <ChevronRight className="h-4 w-4" aria-hidden />
          )}
        </p>
      ) : null}
      <Stagger className="section-container mx-auto grid items-stretch gap-5 md:grid-cols-3">
        <ContactCard
          index={0}
          isMobile={showMobilePrompt}
          href={`tel:${site.phoneLandlineTel}`}
          icon={
            <Phone className="h-5 w-5 shrink-0 text-primary opacity-80 transition-opacity group-hover:opacity-100" />
          }
          label="Call us"
          title={
            <p className="mt-2 font-display text-xl font-semibold leading-snug transition-colors group-hover:text-primary group-hover:underline group-hover:underline-offset-4 md:text-2xl">
              {site.phoneLandline}
            </p>
          }
          footer={<p className="text-sm text-muted-foreground">Mon-Fri 9 am to 6 pm GST</p>}
          hint="Tap to call"
        />
        <ContactCard
          index={1}
          isMobile={showMobilePrompt}
          href={`mailto:${site.email}`}
          icon={
            <Mail className="h-5 w-5 shrink-0 text-primary opacity-80 transition-opacity group-hover:opacity-100" />
          }
          label="Email"
          title={
            <p className="mt-2 font-display text-xl font-semibold leading-snug break-all transition-colors group-hover:text-primary group-hover:underline group-hover:underline-offset-4">
              {site.email}
            </p>
          }
          footer={
            <p className="text-sm text-muted-foreground">We respond within one business day</p>
          }
          hint="Send email"
        />
        <ContactCard
          index={2}
          isMobile={showMobilePrompt}
          href={site.addressUrl}
          target="_blank"
          rel="noopener noreferrer"
          icon={
            <MapPin className="h-5 w-5 shrink-0 text-primary opacity-80 transition-opacity group-hover:opacity-100" />
          }
          label="Visit"
          title={
            <p className="mt-2 flex-1 text-base font-semibold leading-relaxed transition-colors group-hover:text-primary group-hover:underline group-hover:underline-offset-4">
              {site.address}
            </p>
          }
          footer={<p className="text-sm text-muted-foreground">{site.poBox}</p>}
          hint={
            <>
              Open in Maps
              <ExternalLink className="h-3 w-3" />
            </>
          }
        />
      </Stagger>
    </section>
  );
}
