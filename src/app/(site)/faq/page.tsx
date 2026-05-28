import { PageBanner } from "@/components/site/PageBanner";
import { FAQ } from "@/components/site/FAQ";
import { site } from "@/lib/site-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `FAQ's — ${site.name}`,
  description: "Frequently asked questions about UAE mortgages, pre-approval, down payments, and non-resident finance.",
};

export default function FaqPage() {
  return (
    <main>
      <PageBanner
        eyebrow="FAQ's"
        title="We would be happy to assist you"
        description="We have great answers — ask us anything about mortgages in the UAE."
      />
      <FAQ />
    </main>
  );
}
