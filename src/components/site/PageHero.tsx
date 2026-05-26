import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function PageHero({
    eyebrow,
    title,
    highlight,
    description,
    children,
}: {
    eyebrow: string;
    title: string;
    highlight?: string;
    description?: string;
    children?: ReactNode;
}) {
    return (
        <section className="relative overflow-hidden px-6 pt-40 pb-20 md:pt-48 md:pb-28">
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10"
                style={{
                    background:
                        "radial-gradient(ellipse 60% 50% at 50% 0%, oklch(0.82 0.10 85 / 0.18), transparent 65%), radial-gradient(ellipse 50% 50% at 80% 100%, oklch(0.40 0.08 165 / 0.10), transparent 70%)",
                }}
            />
            <div className="mx-auto max-w-5xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-primary/80"
                >
                    <span className="h-px w-8 bg-primary/40" /> {eyebrow}{" "}
                    <span className="h-px w-8 bg-primary/40" />
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-6 text-5xl leading-[1] tracking-tight md:text-7xl"
                >
                    {title}{" "}
                    {highlight && <em className="text-gradient-gold not-italic">{highlight}</em>}
                </motion.h1>
                {description && (
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.3 }}
                        className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
                    >
                        {description}
                    </motion.p>
                )}
                {children && <div className="mt-10">{children}</div>}
            </div>
        </section>
    );
}
