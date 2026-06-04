"use client";

import { motion } from "framer-motion";
import hero from "@/assets/hero-dubai.jpg";
import { about, site } from "@/lib/site-data";

const heroStats = [
  { kind: "uae" as const, label: `Since ${site.founded}` },
  { kind: "stacked" as const, lines: ["RERA Certified", "Mortgage Broker"] },
  { kind: "stacked" as const, lines: ["DREI", "Affiliated"] },
  { kind: "metric" as const, value: "50+ yrs", label: "Collective experience" },
  { kind: "metric" as const, value: "5000+", label: "Satisfied clients" },
  { kind: "metric" as const, value: "2 Bn +", label: "Loan Disbursed" },
] as const;

const statValue =
  "font-display text-[1.35rem] font-bold leading-none tracking-tight text-foreground sm:text-[1.5rem] xl:text-[1.65rem] 2xl:text-[1.75rem]";
const statLabel =
  "mt-2 text-[10px] font-medium uppercase leading-tight tracking-[0.14em] text-muted-foreground xl:text-[11px]";
function HeroStatCell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-[4.25rem] min-w-0 flex-col justify-end text-center sm:min-h-[4.75rem] sm:text-left xl:min-h-[5rem]">
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
          className="mb-5 inline-flex w-fit items-center uppercase gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm"
        >
          oldest mortgage broker firms in the UAE
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
          className="mt-9 flex flex-wrap gap-3"
        >
          <a
            href="/calculator"
            className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-cta)]"
          >
            Calculate your mortgage instantly
          </a>
          <a
            href="/contact"
            className="rounded-full border border-white/35 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm hover:bg-white/20"
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
          <div className="grid grid-cols-2 gap-x-4 gap-y-5 rounded-2xl border hairline bg-white/92 px-4 py-5 shadow-[var(--shadow-soft)] backdrop-blur-sm sm:grid-cols-3 sm:gap-x-6 sm:px-6 sm:py-6 xl:grid-cols-6 xl:gap-x-5 xl:gap-y-0 xl:py-6">
            {heroStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.38 + i * 0.06 }}
                className="min-w-0"
              >
                <HeroStatCell>
                  {stat.kind === "uae" && (
                    <>
                      <div className={statValue}>
                        <span>UAE </span>
                        <span className="text-xs font-medium normal-case text-muted-foreground sm:text-sm xl:text-[13px]">
                          presence
                        </span>
                      </div>
                      <p className={statLabel}>{stat.label}</p>
                    </>
                  )}
                  {stat.kind === "stacked" && (
                    <>
                      <p className={statValue}>{stat.lines[0]}</p>
                      <p className={`${statLabel} normal-case`}>{stat.lines[1]}</p>
                    </>
                  )}
                  {stat.kind === "metric" && (
                    <>
                      <p className={statValue}>{stat.value}</p>
                      <p className={statLabel}>{stat.label}</p>
                    </>
                  )}
                </HeroStatCell>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
