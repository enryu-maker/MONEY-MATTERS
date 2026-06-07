"use client";
import { motion } from "framer-motion";

import { fadeUp, viewport } from "@/lib/motion";

export function SectionHeader({
    eyebrow,
    title,
    sub,
    center,
    largeEyebrow,
}: {
    eyebrow: string;
    title: React.ReactNode;
    sub?: string;
    center?: boolean;
    largeEyebrow?: boolean;
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
                className={`font-semibold uppercase text-primary ${
                    largeEyebrow
                        ? "text-sm tracking-[0.22em] md:text-base"
                        : "text-xs font-medium tracking-[0.2em]"
                } ${center ? "text-center" : ""}`}
            >
                {eyebrow}
            </p>
            <h2 className="mt-3 font-display text-3xl leading-[1.08] tracking-tight text-foreground sm:mt-4 sm:text-4xl md:text-5xl lg:text-[3.25rem]">
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
