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

const leaders = team.slice(0, 2);
const advisors = team.slice(2);

type TeamSectionProps = {
  showAll?: boolean;
  showViewAll?: boolean;
};

export function TeamSection({ showAll = false, showViewAll = false }: TeamSectionProps) {
  return (
    <section className="section-pad section-bone">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeader
          eyebrow="Our Team"
          title="We would be happy to assist you"
          sub="Licensed mortgage consultants dedicated to your property finance journey in the UAE."
          center={!showAll}
        />

        {/* Leadership */}
        <div className="mx-auto mt-12 max-w-5xl">
          <div className="mb-6 flex items-center justify-center gap-3 sm:justify-start">
            <span className="h-px w-8 bg-primary/40 sm:w-12" aria-hidden />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Leadership
            </span>
            <span className="h-px w-8 flex-1 max-w-[120px] bg-primary/20 sm:max-w-none" aria-hidden />
          </div>

          <Stagger className="grid gap-5 md:grid-cols-2 md:gap-6" as="ul">
            {leaders.map((member) => (
              <StaggerItem key={member.name} as="li" className="h-full">
                <LeaderCard member={member} expanded={showAll} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* Specialists */}
        {showAll && advisors.length > 0 && (
          <div className="mx-auto mt-14 max-w-5xl md:mt-16">
            <div className="mb-8 flex items-center justify-center gap-3 sm:justify-start">
              <span className="h-px w-8 bg-primary/40 sm:w-12" aria-hidden />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Mortgage specialists
              </span>
              <span className="h-px w-8 flex-1 max-w-[120px] bg-primary/20 sm:max-w-none" aria-hidden />
            </div>

            <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6" as="ul">
              {advisors.map((member) => (
                <StaggerItem key={member.name} as="li" className="h-full">
                  <AdvisorCard member={member} expanded={showAll} />
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        )}

        {showViewAll && (
          <AnimateIn className="mt-12 text-center" variant="scaleIn">
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

type Member = (typeof team)[number];

function LeaderCard({ member, expanded }: { member: Member; expanded: boolean }) {
  return (
    <motion.article
      initial="rest"
      whileHover="hover"
      variants={cardHover}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border hairline bg-card shadow-[var(--shadow-soft)] sm:flex-row sm:items-stretch"
    >
      <div className="relative aspect-[4/5] w-full shrink-0 overflow-hidden bg-secondary sm:aspect-auto sm:h-full sm:w-40 md:w-44">
        <Image
          src={member.image}
          alt={`${member.name} — ${member.role}`}
          fill
          className="object-cover object-[center_18%] transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, 176px"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent sm:bg-linear-to-r sm:from-black/15"
          aria-hidden
        />
      </div>

      <div className="flex flex-1 flex-col justify-center px-5 py-5 text-center sm:px-6 sm:py-6 sm:text-left">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-primary">
          Leadership
        </p>
        <h3 className="mt-2 font-display text-xl font-semibold tracking-tight">{member.name}</h3>
        <p className="mt-1 text-sm font-medium text-muted-foreground">{member.role}</p>
        <p
          className={`mt-3 text-sm leading-relaxed text-muted-foreground ${
            expanded ? "" : "line-clamp-4"
          }`}
        >
          {member.bio}
        </p>
      </div>
    </motion.article>
  );
}

function AdvisorCard({ member, expanded }: { member: Member; expanded: boolean }) {
  return (
    <motion.article
      initial="rest"
      whileHover="hover"
      variants={cardHover}
      className="group flex h-full flex-col items-center rounded-2xl border hairline bg-card px-5 pb-6 pt-8 text-center shadow-[var(--shadow-soft)]"
    >
      <div className="relative h-28 w-28 overflow-hidden rounded-full border-[3px] border-background shadow-[var(--shadow-soft)] ring-2 ring-primary/15">
        <Image
          src={member.image}
          alt={`${member.name} — ${member.role}`}
          fill
          className="object-cover object-[center_18%] transition-transform duration-500 group-hover:scale-105"
          sizes="112px"
        />
      </div>

      <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">{member.name}</h3>
      <p className="mt-1 text-sm font-medium text-primary">{member.role}</p>
      <div className="mx-auto mt-3 h-px w-10 bg-primary/25" aria-hidden />
      <p
        className={`mt-3 w-full text-sm leading-relaxed text-muted-foreground ${
          expanded ? "" : "line-clamp-4"
        }`}
      >
        {member.bio}
      </p>
    </motion.article>
  );
}
