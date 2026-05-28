import { PageBanner } from "@/components/site/PageBanner";
import { AboutIntro } from "@/components/site/AboutIntro";
import { WhyUs } from "@/components/site/WhyUs";
import { TeamSection } from "@/components/site/TeamSection";
import { about, site } from "@/lib/site-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `About Us — ${site.name}`,
  description: about.intro,
};

export default function AboutPage() {
  return (
    <main>
      <PageBanner eyebrow="About" title="Our company" description={about.intro} />
      <AboutIntro />
      <TeamSection showViewAll />
      <WhyUs />
    </main>
  );
}
