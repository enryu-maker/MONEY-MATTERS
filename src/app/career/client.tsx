"use client";

import { motion } from "framer-motion";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import Link from "next/link";

const roles = [
    {
        title: "Senior Mortgage Advisor",
        type: "Full-time · Business Bay",
        desc: "Own a portfolio of HNW residential and corporate clients. 7+ years UAE banking or mortgage advisory required.",
    },
    {
        title: "Non-Resident Desk Analyst",
        type: "Full-time · Business Bay",
        desc: "Structure international financing for UK, GCC and Asia-based investors. Strong documentation and credit underwriting skills.",
    },
    {
        title: "Commercial Real Estate Specialist",
        type: "Full-time · Business Bay",
        desc: "Office, retail and logistics finance. Existing lender relationships across UAE commercial credit desks preferred.",
    },
    {
        title: "Client Relationship Associate",
        type: "Full-time · Business Bay",
        desc: "End-to-end transaction support from pre-approval through DLD transfer. Detail-obsessed operators only.",
    },
];

const values = [
    { t: "Boutique by design", b: "Small teams, senior people, long client relationships." },
    { t: "Independent thinking", b: "We are paid for judgment, not for placement volume." },
    { t: "Compounding mastery", b: "Deep specialisation beats shallow breadth, every time." },
];

export function CareerClient() {
    return (
        <PageShell>
            <PageHero
                eyebrow="Careers"
                title="Build a career in"
                highlight="premium UAE finance."
                description="We're a boutique mortgage consultancy in Business Bay. We hire selectively — for judgment, discretion, and a long-term view of the craft."
            />

            <section className="px-6 pb-16">
                <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
                    {values.map((v, i) => (
                        <motion.div
                            key={v.t}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.08 }}
                            className="glass rounded-3xl p-8"
                        >
                            <h3 className="text-xl text-gradient-gold">{v.t}</h3>
                            <p className="mt-3 text-sm text-muted-foreground">{v.b}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="px-6 pb-28">
                <div className="mx-auto max-w-5xl">
                    <h2 className="text-center text-4xl md:text-5xl">
                        Open <em className="text-gradient-gold not-italic">positions.</em>
                    </h2>
                    <div className="mt-12 space-y-4">
                        {roles.map((r, i) => (
                            <motion.div
                                key={r.title}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.05 }}
                                whileHover={{ x: 4 }}
                                className="group flex flex-col gap-4 rounded-2xl glass p-7 md:flex-row md:items-center md:justify-between"
                            >
                                <div>
                                    <h3 className="text-xl md:text-2xl">{r.title}</h3>
                                    <div className="mt-1 text-[11px] uppercase tracking-widest text-primary/80">
                                        {r.type}
                                    </div>
                                    <p className="mt-3 max-w-2xl text-sm text-muted-foreground">{r.desc}</p>
                                </div>
                                <Link
                                    href="/#contact"
                                    className="shrink-0 rounded-full border border-primary/40 bg-primary/10 px-5 py-3 text-xs uppercase tracking-widest transition-all hover:border-primary/70 hover:bg-primary/15"
                                >
                                    Apply →
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </PageShell>
    );
}
