import type { Metadata } from "next";
import { FaqClient } from "./client";

export const metadata: Metadata = {
    title: "FAQ — Money Matters UAE Mortgage",
    description: "Answers to common questions about UAE mortgages: eligibility, LTV, documentation, non-resident finance, buyouts and equity release.",
    openGraph: {
        title: "FAQ — Money Matters",
        description: "Common questions about UAE mortgage finance, eligibility and process.",
    }
};

export default function FaqPage() {
    return <FaqClient />;
}
