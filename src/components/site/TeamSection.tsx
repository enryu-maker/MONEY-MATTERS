"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { team } from "@/lib/site-data";
import { SectionHeader } from "./SectionHeader";
import { Stagger, StaggerItem } from "./Stagger";
import { cardHover, spring } from "@/lib/motion";
import { AnimateIn } from "./AnimateIn";

type TeamSectionProps = {
  showAll?: boolean;
  showViewAll?: boolean;
};

export function TeamSection({ showAll = false, showViewAll = false }: TeamSectionProps) {
  const members = showAll ? team : team.slice(0, 3);

  return (
    <section className="section-pad section-bone">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Our Team"
          title="We would be happy to assist you"
          sub="Licensed mortgage consultants dedicated to your property finance journey in the UAE."
          center={!showAll}
        />
        <Stagger className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3" as="ul">
          {members.map((member) => (
            <StaggerItem key={member.name} as="li">
              <motion.article
                initial="rest"
                whileHover="hover"
                variants={cardHover}
                className="overflow-hidden rounded-2xl border hairline bg-card shadow-[var(--shadow-card)]"
              >
                <div className="relative aspect-square bg-secondary overflow-hidden">
                  <Image
                    src={member.image}
                    alt={`${member.name} — ${member.role} at Money Matters`}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold">{member.name}</h3>
                  <p className="mt-1 text-sm font-medium text-primary">{member.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </Stagger>
        {showViewAll && (
          <AnimateIn className="mt-10 text-center" variant="scaleIn">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} transition={spring}>
              <Link
                href="/about/team"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-cta)]"
              >
                Meet the full team
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </AnimateIn>
        )}
      </div>
    </section>
  );
}
