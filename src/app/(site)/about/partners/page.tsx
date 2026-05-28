import { PageBanner } from "@/components/site/PageBanner";
import { PartnersSection } from "@/components/site/PartnersSection";
import { site } from "@/lib/site-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Our Partners — ${site.name}`,
  description:
    "Money Matters is affiliated with major UAE banks and trusted industry partners including Emirates NBD, Mashreq, ADCB, FAB, HSBC, and more.",
};

export default function PartnersPage() {
  return (
    <main>
      <PageBanner
        eyebrow="About / Partners"
        title="Our partners"
        description="Affiliated with major UAE banks since 2016 — plus trusted industry partners across the region."
      />
      <PartnersSection />
    </main>
  );
}
