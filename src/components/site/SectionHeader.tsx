"use client";
import { motion } from "framer-motion";

import { fadeUp, viewport } from "@/lib/motion";

export function SectionHeader({
    eyebrow,
    title,
    sub,
    center,
}: {
    eyebrow: string;
    title: React.ReactNode;
    sub?: string;
    center?: boolean;
}) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
            className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}
        >
            <p
                className={`text-xs font-medium uppercase tracking-[0.2em] text-primary ${center ? "text-center" : ""}`}
            >
                {eyebrow}
            </p>
            <h2 className="mt-4 font-display text-4xl leading-[1.08] tracking-tight text-foreground md:text-5xl lg:text-[3.25rem]">
                {title}
            </h2>
            {sub && (
                <p
                    className={`mt-5 text-base leading-relaxed text-muted-foreground md:text-lg ${center ? "mx-auto max-w-2xl" : "max-w-2xl"}`}
                >
                    {sub}
                </p>
            )}
        </motion.div>
    );
}
