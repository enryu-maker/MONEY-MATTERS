"use client";

import { motion } from "framer-motion";
import hero from "@/assets/hero-dubai.jpg";
import { about, site } from "@/lib/site-data";

const heroStats = [
  { kind: "uae" as const, label: `Since ${site.founded}` },
  { kind: "stacked" as const, lines: ["RERA", "Certified"], sub: "Mortgage Broker" },
  { kind: "stacked" as const, lines: ["DREI"], sub: "Affiliated" },
  { kind: "metric" as const, value: "50+ yrs", label: "Collective experience" },
  { kind: "metric" as const, value: "3K+", label: "Satisfied clients" },
  { kind: "metric" as const, value: "3.5 Bn+", label: "Loan approved" },
] as const;

const statHeadline =
  "font-display text-[1.05rem] font-bold leading-[1.1] text-foreground sm:text-[1.2rem] md:text-[1.25rem] lg:text-[1.35rem]";
const statLabel =
  "mt-1.5 min-h-[2rem] text-[10px] font-medium uppercase leading-snug tracking-[0.12em] text-muted-foreground sm:mt-2 sm:text-[11px] lg:text-xs";

function HeroStatCell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-[5rem] flex-col justify-end text-center sm:min-h-[5.5rem] sm:text-left md:min-h-[6rem] lg:min-h-[6.25rem]">
      {children}
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative min-h-[88svh] overflow-hidden pt-20">
      <div className="absolute inset-0">
        <img
          src={hero.src}
          alt="Dubai skyline — Money Matters mortgage consultants"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/75 via-black/45 to-black/25" />
        <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-background/80 via-background/25 to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(88svh-5rem)] max-w-7xl flex-col justify-between px-4 py-16 md:px-6">
        <div className="flex flex-col justify-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm"
          >
            One of the oldest mortgage broker firms in the UAE.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="max-w-3xl font-display text-4xl leading-[1.05] text-white sm:text-5xl md:text-6xl"
          >
            Your complete mortgage
            <br />
            solution in Dubai &amp; the UAE
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/85 md:text-lg"
          >
            {about.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap"
          >
            <a
              href="/calculator"
              className="rounded-full bg-primary px-6 py-3 text-center text-sm font-medium text-primary-foreground shadow-[var(--shadow-cta)] sm:text-left"
            >
              Calculate your mortgage instantly
            </a>
            <a
              href="/contact"
              className="rounded-full border border-white/35 bg-white/10 px-6 py-3 text-center text-sm font-medium text-white backdrop-blur-sm hover:bg-white/20 sm:text-left"
            >
              Let&apos;s Talk
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.32 }}
          className="mt-10 w-full pb-2"
        >
          <div className="rounded-2xl border hairline bg-white/92 px-2 py-4 shadow-[var(--shadow-soft)] backdrop-blur-sm sm:px-4 sm:py-6 lg:px-3 lg:py-5">
            <div className="grid grid-cols-2 gap-x-2 gap-y-5 sm:grid-cols-3 sm:gap-x-3 sm:gap-y-6 lg:grid-cols-6 lg:gap-x-0 lg:gap-y-0">
              {heroStats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.38 + i * 0.06 }}
                  className="min-w-0 px-1 sm:px-2 md:px-3 lg:border-l lg:border-border/20 lg:px-4 lg:first:border-l-0"
                >
                  <HeroStatCell>
                    {stat.kind === "uae" && (
                      <>
                        <div className={`${statHeadline} min-h-[2.5rem] sm:min-h-[2.75rem] lg:min-h-[3rem]`}>
                          <span>UAE </span>
                          <span className="text-xs font-semibold normal-case text-muted-foreground sm:text-sm lg:text-base">
                            presence
                          </span>
                        </div>
                        <p className={statLabel}>{stat.label}</p>
                      </>
                    )}
                    {stat.kind === "stacked" && (
                      <>
                        <div className={`${statHeadline} min-h-[2.5rem] space-y-0.5 sm:min-h-[2.75rem] lg:min-h-[3rem]`}>
                          {stat.lines.map((line) => (
                            <span key={line} className="block">
                              {line}
                            </span>
                          ))}
                        </div>
                        <p className={`${statLabel} normal-case`}>{stat.sub}</p>
                      </>
                    )}
                    {stat.kind === "metric" && (
                      <>
                        <p className={`${statHeadline} min-h-[2.5rem] sm:min-h-[2.75rem] lg:min-h-[3rem]`}>{stat.value}</p>
                        <p className={statLabel}>{stat.label}</p>
                      </>
                    )}
                  </HeroStatCell>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
