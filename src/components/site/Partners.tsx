"use client";
import { motion } from "framer-motion";

const partners = [
    "Emirates NBD", "Mashreq", "ADCB", "FAB", "HSBC", "ENBD",
    "Dubai Islamic", "ADIB", "RAKBANK", "Standard Chartered",
    "CBD", "Ajman Bank", "Noor Bank", "Emirates Islamic",
];

export function Partners() {
    return (
        <section id="partners" className="relative overflow-hidden border-y hairline py-20">
            <div className="mx-auto max-w-7xl px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-10 flex items-center justify-between gap-6"
                >
                    <div className="text-xs uppercase tracking-[0.25em] text-primary/80">
                        <span className="mr-3 inline-block h-px w-8 align-middle bg-primary/40" />
                        Direct bank partners
                    </div>
                    <p className="hidden max-w-md text-sm text-muted-foreground md:block">
                        Direct access to every major lender in the UAE means we negotiate the
                        sharpest rates and the fastest approvals on your behalf.
                    </p>
                </motion.div>
            </div>

            <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />
                <div className="flex overflow-hidden">
                    <motion.div
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        className="flex shrink-0 items-center gap-16 px-8"
                    >
                        {[...partners, ...partners].map((p, i) => (
                            <div
                                key={i}
                                className="font-display text-2xl text-muted-foreground/60 transition-colors hover:text-foreground"
                            >
                                {p}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
