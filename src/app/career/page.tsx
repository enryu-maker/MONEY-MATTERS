import type { Metadata } from "next";
import { CareerClient } from "./client";

export const metadata: Metadata = {
    title: "Careers — Money Matters",
    description: "Build your career at Dubai's boutique premium mortgage consultancy. Senior advisor and analyst roles in Business Bay.",
    openGraph: {
        title: "Careers — Money Matters",
        description: "Senior advisor and analyst roles at a boutique UAE mortgage consultancy.",
    }
};

export default function CareerPage() {
    return <CareerClient />;
}
