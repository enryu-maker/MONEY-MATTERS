import { Hero } from "@/components/site/Hero";
import { BankMarquee } from "@/components/site/BankMarquee";
import { GallerySection } from "@/components/site/GallerySection";
import { ServicesPreview } from "@/components/site/ServicesPreview";
import { Testimonials } from "@/components/site/Testimonials";
import { ContactCTA } from "@/components/site/ContactCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { defaultDescription, pageSeo, webPageJsonLd } from "@/lib/seo";

export const metadata = pageSeo.home;

export default function HomePage() {
  return (
    <main>
      <JsonLd
        data={webPageJsonLd({
          name: "Money Matters — Mortgage Broker Dubai & UAE",
          path: "/",
          description: defaultDescription,
        })}
      />
      <Hero />
      <BankMarquee label="Major Banking Partners" />
      <ServicesPreview />
      <GallerySection />
      <Testimonials />
      <ContactCTA />
    </main>
  );
}
