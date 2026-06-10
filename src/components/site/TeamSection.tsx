"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { corporateAdvisors, team } from "@/lib/site-data";
import { SectionHeader } from "./SectionHeader";
import { Stagger, StaggerItem } from "./Stagger";
import { cardHover, spring } from "@/lib/motion";
import { AnimateIn } from "./AnimateIn";

const leaders = team.slice(0, 3);
const advisors = team.slice(3);

const TEAM_GRID = "grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6";

type TeamMember = {
  name: string;
  role: string;
  image: string;
  bio: string;
};

type TeamSectionProps = {
  showAll?: boolean;
  showViewAll?: boolean;
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6 flex items-center justify-center gap-3 sm:mb-8 sm:justify-start">
      <span className="h-px w-8 bg-primary/40 sm:w-12" aria-hidden />
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        {children}
      </span>
      <span className="h-px w-8 max-w-[120px] flex-1 bg-primary/20 sm:max-w-none" aria-hidden />
    </div>
  );
}

function TeamGroup({
  label,
  members,
  expanded,
}: {
  label: string;
  members: readonly TeamMember[];
  expanded: boolean;
}) {
  if (members.length === 0) return null;

  return (
    <div className="mx-auto max-w-5xl">
      <SectionLabel>{label}</SectionLabel>
      <Stagger className={TEAM_GRID} as="ul">
        {members.map((member) => (
          <StaggerItem key={member.name} as="li" className="h-full">
            <TeamCard member={member} expanded={expanded} />
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
}

export function TeamSection({ showAll = false, showViewAll = false }: TeamSectionProps) {
  return (
    <section className="section-pad section-bone">
      <div className="section-container">
        <SectionHeader
          eyebrow="Our Team"
          title="We would be happy to assist you"
          sub="Licensed mortgage consultants dedicated to your property finance journey in the UAE."
          center={!showAll}
        />

        <div className="mt-12">
          <TeamGroup label="Leadership" members={leaders} expanded={showAll} />
        </div>

        {showAll && (
          <div className="mt-14 md:mt-16">
            <TeamGroup label="Mortgage specialists" members={advisors} expanded={showAll} />
          </div>
        )}

        {showAll && corporateAdvisors.length > 0 && (
          <div className="mt-14 md:mt-16">
            <TeamGroup label="Corporate Advisors" members={corporateAdvisors} expanded={showAll} />
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

function TeamCard({ member, expanded }: { member: TeamMember; expanded: boolean }) {
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
          className="object-cover object-[center_18%] grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
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
