"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site-data";
import { Stagger, StaggerItem } from "./Stagger";
import { cardHover } from "@/lib/motion";

const cardClass =
  "flex h-full min-h-[220px] flex-col rounded-2xl border hairline bg-card p-7 shadow-[var(--shadow-soft)]";

export function ContactDetails() {
  return (
    <section className="section-pad">
      <Stagger className="mx-auto grid max-w-7xl items-stretch gap-5 md:grid-cols-3">
        <StaggerItem className="h-full">
          <motion.a
            href={`tel:${site.phoneLandlineTel}`}
            initial="rest"
            whileHover="hover"
            variants={cardHover}
            className={cardClass}
          >
            <Phone className="h-5 w-5 shrink-0 text-primary" />
            <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">Call us</p>
            <p className="mt-2 font-display text-xl font-semibold leading-snug md:text-2xl">
              {site.phoneLandline}
            </p>
            <p className="mt-auto pt-4 text-sm text-muted-foreground">Mon-Fri 9 am to 6 pm GST</p>
          </motion.a>
        </StaggerItem>
        <StaggerItem className="h-full">
          <motion.a
            href={`mailto:${site.email}`}
            initial="rest"
            whileHover="hover"
            variants={cardHover}
            className={cardClass}
          >
            <Mail className="h-5 w-5 shrink-0 text-primary" />
            <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">Email</p>
            <p className="mt-2 font-display text-xl font-semibold leading-snug break-all">
              {site.email}
            </p>
            <p className="mt-auto pt-4 text-sm text-muted-foreground">
              We respond within one business day
            </p>
          </motion.a>
        </StaggerItem>
        <StaggerItem className="h-full">
          <motion.div
            initial="rest"
            whileHover="hover"
            variants={cardHover}
            className={cardClass}
          >
            <MapPin className="h-5 w-5 shrink-0 text-primary" />
            <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">Visit</p>
            <p className="mt-2 flex-1 text-base leading-relaxed">{site.address}</p>
            <p className="mt-auto pt-4 text-sm text-muted-foreground">{site.poBox}</p>
          </motion.div>
        </StaggerItem>
      </Stagger>
    </section>
  );
}
