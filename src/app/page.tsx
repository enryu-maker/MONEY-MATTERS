import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Calculator } from "@/components/site/Calculator";
import { About } from "@/components/site/About";
import { Partners } from "@/components/site/Partners";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Money Matters · Premium UAE Mortgage Consultancy in Dubai",
    description: "Boutique mortgage consultancy in Business Bay, Dubai. Bespoke residential, commercial, corporate, and non-resident mortgages across the UAE since 2016.",
    openGraph: {
        title: "Money Matters · Premium UAE Mortgage Consultancy",
        description: "Engineering bespoke mortgage solutions across the UAE — for residents, non-residents, and corporates. Direct access to every major bank.",
        type: "website",
    }
};

export default function Index() {
    return (
        <main className="relative">
            <Navbar />
            <Hero />
            <Services />
            <Calculator />
            <About />
            <Partners />
            <Testimonials />
            <Contact />
            <Footer />
        </main>
    );
}
