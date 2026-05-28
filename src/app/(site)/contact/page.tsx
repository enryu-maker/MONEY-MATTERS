import { PageBanner } from "@/components/site/PageBanner";
import { ContactDetails } from "@/components/site/ContactDetails";
import { ContactForm } from "@/components/site/ContactForm";
import { site } from "@/lib/site-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Contact — ${site.name}`,
  description: `Call ${site.phone}, email ${site.email}, or visit us in Business Bay, Dubai.`,
};

export default function ContactPage() {
  return (
    <main>
      <PageBanner
        eyebrow="Contact"
        title="Let's talk"
        description="Get expert mortgage advice and secure the best rates today."
      />
      <ContactDetails />
      <ContactForm />
    </main>
  );
}
