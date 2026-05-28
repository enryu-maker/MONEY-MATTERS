import { Hero } from "@/components/site/Hero";
import { BankMarquee } from "@/components/site/BankMarquee";
import { ServicesPreview } from "@/components/site/ServicesPreview";
import { Testimonials } from "@/components/site/Testimonials";
import { ContactCTA } from "@/components/site/ContactCTA";
import { about, site } from "@/lib/site-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${site.name} — Trusted Mortgage Consultancy in UAE`,
  description: about.intro,
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <BankMarquee label={`Affiliated with major UAE banks since ${site.founded}`} />
      <ServicesPreview />
      <Testimonials />
      <ContactCTA />
    </main>
  );
}
