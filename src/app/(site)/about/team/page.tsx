import { PageBanner } from "@/components/site/PageBanner";
import { TeamSection } from "@/components/site/TeamSection";
import { site } from "@/lib/site-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Our Team — ${site.name}`,
  description:
    "Meet Siddharth Chhugani, Mala Mehra, Sandip Banerjee, Mohammed Sarbar Ahmed, and Sebastian Tellis — your Money Matters mortgage consultants in Dubai.",
};

export default function TeamPage() {
  return (
    <main>
      <PageBanner
        eyebrow="About / Team"
        title="Our team"
        description="We would be happy to assist you with expert mortgage advice across the UAE."
      />
      <TeamSection showAll />
    </main>
  );
}
