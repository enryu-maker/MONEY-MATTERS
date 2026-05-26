import type { Metadata } from "next";
import { ProfileClient } from "./client";

export const metadata: Metadata = {
    title: "Profile — Money Matters Mortgage Consultancy",
    description: "Boutique UAE mortgage consultancy in Business Bay since 2016. Our story, principles, and approach to bespoke property finance.",
    openGraph: {
        title: "Profile — Money Matters",
        description: "Our story, principles & boutique approach to UAE mortgage advisory.",
    }
};

export default function ProfilePage() {
    return <ProfileClient />;
}
