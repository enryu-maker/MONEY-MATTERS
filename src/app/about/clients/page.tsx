import type { Metadata } from "next";
import { ClientsClient } from "./client";

export const metadata: Metadata = {
    title: "Our Clients — Money Matters",
    description: "We serve UAE residents, international non-residents, family offices and corporates across residential and commercial property finance.",
    openGraph: {
        title: "Our Clients — Money Matters",
        description: "Residents, non-residents, family offices and corporates.",
    }
};

export default function ClientsPage() {
    return <ClientsClient />;
}
