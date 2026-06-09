import { PageBanner } from "@/components/site/PageBanner";
import { ContactDetails } from "@/components/site/ContactDetails";
import { ContactForm } from "@/components/site/ContactForm";
import { breadcrumbJsonLd, contactPageJsonLd, pageSeo } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata = pageSeo.contact;

export default function ContactPage() {
  return (
    <main>
      <JsonLd
        data={[
          contactPageJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />
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
