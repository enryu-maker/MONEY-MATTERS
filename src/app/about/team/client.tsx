"use client";

import { motion } from "framer-motion";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";

const team = [
    {
        name: "Rajiv Menon",
        role: "Managing Director",
        bio: "20+ years in UAE banking. Former head of mortgages at a tier-one regional bank. Specialises in HNW and corporate facilities.",
        initials: "RM",
    },
    {
        name: "Aisha Al Marri",
        role: "Senior Mortgage Advisor",
        bio: "Residential and luxury property specialist. Deep relationships across UAE retail banking lending desks.",
        initials: "AM",
    },
    {
        name: "David Whitman",
        role: "Head of Non-Resident Desk",
        bio: "Structures international financing for UK, GCC and Asia-based investors acquiring UAE collateral.",
        initials: "DW",
    },
    {
        name: "Priya Sharma",
        role: "Commercial Real Estate Lead",
        bio: "Office, retail and logistics finance. Long-term facilities for institutional and family-office portfolios.",
        initials: "PS",
    },
    {
        name: "Omar Haddad",
        role: "Buyout & Equity Release",
        bio: "Refinance specialist focused on re-pricing legacy facilities and structured equity release programs.",
        initials: "OH",
    },
    {
        name: "Sarah Lin",
        role: "Client Relationship Director",
        bio: "End-to-end transaction oversight from pre-approval through DLD transfer for the firm's private clients.",
        initials: "SL",
    },
];

export function TeamClient() {
    return (
        <PageShell>
            <PageHero
                eyebrow="Team"
                title="Senior advisors,"
                highlight="boutique service."
                description="Our team brings together decades of UAE banking, real estate and wealth advisory — under one boutique roof in Business Bay."
            />

            <section className="px-6 pb-28">
                <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {team.map((m, i) => (
                        <motion.div
                            key={m.name}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: i * 0.06 }}
                            whileHover={{ y: -4 }}
                            className="group relative overflow-hidden rounded-3xl glass p-7"
                        >
                            <div className="flex items-center gap-4">
                                <div className="grid h-16 w-16 place-items-center rounded-full border border-primary/30 bg-primary/5">
                                    <span className="font-display text-xl text-gradient-gold">{m.initials}</span>
                                </div>
                                <div>
                                    <h3 className="text-xl">{m.name}</h3>
                                    <div className="text-xs uppercase tracking-widest text-primary/80">{m.role}</div>
                                </div>
                            </div>
                            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
                            <div className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                        </motion.div>
                    ))}
                </div>
            </section>
        </PageShell>
    );
}
