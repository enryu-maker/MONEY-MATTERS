"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import Link from "next/link";

const groups = [
    {
        cat: "Eligibility",
        items: [
            {
                q: "Who can apply for a mortgage in the UAE?",
                a: "Both UAE residents and non-residents are eligible. Residents must typically demonstrate stable salary or business income with at least 6 months of credit history. Non-residents qualify on the basis of international income documentation and an acceptable home-country credit profile.",
            },
            {
                q: "What is the maximum LTV available?",
                a: "Residents: up to 80% for first property (under AED 5M) and 60–70% for subsequent or higher-value property. Non-residents: typically 50–65% depending on lender, ticket size and nationality.",
            },
            {
                q: "Can self-employed applicants qualify?",
                a: "Yes. Lenders require audited financials (typically 2 years), trade licence, bank statements (6 months minimum) and a clean personal and corporate credit profile.",
            },
        ],
    },
    {
        cat: "Process & Documentation",
        items: [
            {
                q: "How long does the mortgage process take?",
                a: "Pre-approval: 3–7 working days. Full mortgage finalisation and DLD transfer: typically 3–6 weeks from MOU signing, depending on developer NOC turnaround and valuation.",
            },
            {
                q: "What documentation do I need?",
                a: "Passport, Emirates ID (residents), salary certificate or audited financials, last 6 months of bank statements, credit bureau report, and source-of-funds evidence for the equity contribution.",
            },
            {
                q: "Are there early settlement fees?",
                a: "UAE Central Bank caps early settlement fees at 1% of the outstanding balance or AED 10,000 — whichever is lower. This is a key input when evaluating a buyout.",
            },
        ],
    },
    {
        cat: "Products",
        items: [
            {
                q: "What is a buyout mortgage?",
                a: "A buyout refinances an existing mortgage with a new lender at improved terms — typically a lower rate or better tenor. We evaluate the rate differential against early settlement and processing fees to determine break-even.",
            },
            {
                q: "How does equity release work?",
                a: "Equity release lets owners of low-LTV or fully-paid property borrow against the appreciated value of the asset — unlocking liquidity for new acquisitions, business deployment or diversification, without selling.",
            },
            {
                q: "Do you arrange Islamic finance?",
                a: "Yes. We work directly with all major Sharia-compliant lenders across the UAE for both Murabaha and Ijara structures on residential and commercial collateral.",
            },
        ],
    },
];

export function FaqClient() {
    return (
        <PageShell>
            <PageHero
                eyebrow="FAQ"
                title="Answers to the questions"
                highlight="we hear most."
                description="Clear, concise guidance on UAE mortgage eligibility, process, documentation and products — direct from our desk."
            />

            <section className="px-6 pb-24">
                <div className="mx-auto max-w-4xl space-y-14">
                    {groups.map((g, gi) => (
                        <motion.div
                            key={g.cat}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: gi * 0.05 }}
                        >
                            <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-primary/80">
                                <span className="h-px w-8 bg-primary/40" /> {g.cat}
                            </div>
                            <div className="space-y-3">
                                {g.items.map((it, i) => (
                                    <FaqItem key={i} q={it.q} a={it.a} />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mx-auto mt-20 max-w-4xl rounded-3xl glass-strong p-10 text-center">
                    <h3 className="font-display text-3xl md:text-4xl">
                        Still have <em className="text-gradient-gold not-italic">questions?</em>
                    </h3>
                    <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
                        Our advisors respond within one business day — usually faster.
                    </p>
                    <Link
                        href="/#contact"
                        className="mt-7 inline-flex rounded-full bg-[var(--grad-gold)] px-7 py-4 text-sm font-medium text-primary-foreground shadow-[var(--shadow-gold)]"
                    >
                        Speak with an advisor →
                    </Link>
                </div>
            </section>
        </PageShell>
    );
}

function FaqItem({ q, a }: { q: string; a: string }) {
    const [open, setOpen] = useState(false);
    return (
        <motion.div layout className="overflow-hidden rounded-2xl glass">
            <button
                onClick={() => setOpen((v) => !v)}
                className="flex w-full items-center justify-between gap-6 p-6 text-left"
            >
                <span className="text-base text-foreground md:text-lg">{q}</span>
                <motion.span
                    animate={{ rotate: open ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-primary/40 bg-primary/10"
                >
                    <Plus className="h-4 w-4" />
                </motion.span>
            </button>
            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{a}</div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
