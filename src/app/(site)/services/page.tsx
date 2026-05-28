import { PageBanner } from "@/components/site/PageBanner";
import { Services } from "@/components/site/Services";
import { BankMarquee } from "@/components/site/BankMarquee";
import { site } from "@/lib/site-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Our Services — ${site.name}`,
  description:
    "Resale and fresh purchase, buyout, equity release, non-resident, corporate, and commercial real estate financing in the UAE.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageBanner
        eyebrow="Services"
        title="Our services"
        description="Mortgages for all kinds of properties — retail and corporate, residential and commercial."
      />
      <Services />
      <BankMarquee label="Meet our banking partners" />
    </main>
  );
}
