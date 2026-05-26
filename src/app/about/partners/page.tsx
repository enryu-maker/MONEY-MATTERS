import type { Metadata } from "next";
import { PartnersClient } from "./client";

export const metadata: Metadata = {
    title: "Our Partners — Money Matters",
    description: "Direct lending relationships with every major bank in the UAE — Emirates NBD, ADCB, Mashreq, FAB, HSBC and more.",
    openGraph: {
        title: "Our Partners — Money Matters",
        description: "Affiliated with every major UAE bank for residential, commercial and corporate facilities.",
    }
};

export default function PartnersPage() {
    return <PartnersClient />;
}
