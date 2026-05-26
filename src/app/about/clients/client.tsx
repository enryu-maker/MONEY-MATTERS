"use client";

import { motion } from "framer-motion";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";

const segments = [
    {
        title: "UAE Residents",
        body: "Salaried executives and self-employed professionals acquiring primary residences and investment property across the Emirates.",
        stat: "60%",
        label: "of our book",
    },
    {
        title: "Non-Residents",
        body: "International buyers from the UK, GCC, India, and Asia-Pacific structuring UAE property finance from abroad.",
        stat: "25+",
        label: "nationalities served",
    },
    {
        title: "Family Offices",
        body: "Bespoke equity release and portfolio refinancing for HNW families with multi-asset UAE real estate holdings.",
        stat: "Private",
        label: "wealth advisory",
    },
    {
        title: "Corporates & SMEs",
        body: "Commercial real estate facilities, owner-occupier office acquisitions and structured corporate mortgage programs.",
        stat: "AED 50M+",
        label: "single-ticket capacity",
    },
];

const quotes = [
    {
        q: "They re-priced an AED 7M facility in under three weeks — saved us close to AED 200,000 over the remaining tenor.",
        a: "Family Office Principal, Dubai",
    },
    {
        q: "The only broker in Dubai who actually understood non-resident structures without three months of back-and-forth.",
        a: "London-based Investor",
    },
    {
        q: "Refreshingly direct. They told us when to wait, when to act, and structured the deal cleanly.",
        a: "CEO, Logistics Group",
    },
];

export function ClientsClient() {
    return (
        <PageShell>
            <PageHero
                eyebrow="Our Clients"
                title="Discerning borrowers,"
                highlight="discreetly served."
                description="From first-time UAE residents to global family offices — our clients share one trait: they want bespoke advice, not a product pitch."
            />

            <section className="px-6 pb-20">
                <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
                    {segments.map((s, i) => (
                        <motion.div
                            key={s.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: i * 0.08 }}
                            className="glass rounded-3xl p-9"
                        >
                            <div className="flex items-baseline justify-between gap-6">
                                <h3 className="text-2xl md:text-3xl">{s.title}</h3>
                                <div className="text-right">
                                    <div className="font-display text-3xl text-gradient-gold">{s.stat}</div>
                                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                                        {s.label}
                                    </div>
                                </div>
                            </div>
                            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="px-6 pb-28">
                <div className="mx-auto max-w-7xl">
                    <h2 className="text-center text-3xl md:text-4xl">
                        What clients <em className="text-gradient-gold not-italic">say.</em>
                    </h2>
                    <div className="mt-12 grid gap-6 md:grid-cols-3">
                        {quotes.map((q, i) => (
                            <motion.figure
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: i * 0.1 }}
                                className="glass rounded-3xl p-8"
                            >
                                <div className="font-display text-3xl text-gradient-gold">“</div>
                                <blockquote className="mt-2 text-sm leading-relaxed text-foreground/90">
                                    {q.q}
                                </blockquote>
                                <figcaption className="mt-6 text-xs uppercase tracking-widest text-muted-foreground">
                                    — {q.a}
                                </figcaption>
                            </motion.figure>
                        ))}
                    </div>
                </div>
            </section>
        </PageShell>
    );
}
