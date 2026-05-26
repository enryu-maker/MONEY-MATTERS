import type { Metadata } from "next";
import { TeamClient } from "./client";

export const metadata: Metadata = {
    title: "Team — Money Matters",
    description: "Senior mortgage advisors with decades of UAE banking and real estate experience.",
    openGraph: {
        title: "Team — Money Matters",
        description: "Meet the senior advisors structuring bespoke UAE mortgage facilities.",
    }
};

export default function TeamPage() {
    return <TeamClient />;
}
