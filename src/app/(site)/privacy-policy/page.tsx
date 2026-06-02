import { JsonLd } from "@/components/seo/JsonLd";
import { PageBanner } from "@/components/site/PageBanner";
import { breadcrumbJsonLd, pageSeo } from "@/lib/seo";

export const metadata = pageSeo.privacy;

export default function PrivacyPolicyPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy-policy" },
        ])}
      />
      <PageBanner
        eyebrow="Legal"
        title="Privacy Policy"
        description="How we collect, use, and protect your information when you use Money Matters services."
      />

      <section className="section-pad section-bone">
        <div className="mx-auto max-w-4xl space-y-8 px-4 md:px-6">
          <p className="text-sm text-muted-foreground">Last updated: April 21, 2023</p>

          <p className="text-sm leading-relaxed text-muted-foreground">
            Money Matters ("us", "we", or "our") operates the Money Matters website (the
            "Service"). This page informs you of our policies regarding the collection, use, and
            disclosure of Personal Information when you use our Service.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            We will not use or share your information with anyone except as described in this
            Privacy Policy. We use your Personal Information for providing and improving the
            Service. By using the Service, you agree to the collection and use of information in
            accordance with this policy.
          </p>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-semibold">Information Collection And Use</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              While using our Service, we may ask you to provide us with certain personally
              identifiable information that can be used to contact or identify you. Personally
              identifiable information ("Personal Information") may include, but is not limited to:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              <li>Name</li>
              <li>Email address</li>
              <li>Telephone number</li>
              <li>Address</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-semibold">Log Data</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              We collect information that your browser sends whenever you visit our Service ("Log
              Data"). This Log Data may include information such as your computer's Internet
              Protocol ("IP") address, browser type, browser version, the pages of our Service that
              you visit, the time and date of your visit, the time spent on those pages, and other
              statistics.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-semibold">Cookies</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Cookies are files with a small amount of data, which may include an anonymous unique
              identifier. Cookies are sent to your browser from a website and stored on your
              device.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              We use cookies to collect information. You can instruct your browser to refuse all
              cookies or indicate when a cookie is being sent. However, if you do not accept
              cookies, you may not be able to use some portions of our Service.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-semibold">Service Providers</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              We may employ third party companies and individuals to facilitate our Service, to
              provide the Service on our behalf, to perform Service-related services, or to assist
              us in analyzing how our Service is used.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              These third parties have access to your Personal Information only to perform these
              tasks on our behalf and are obligated not to disclose or use it for any other
              purpose.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-semibold">Security</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              The security of your Personal Information is important to us, but remember that no
              method of transmission over the Internet, or method of electronic storage, is 100%
              secure. While we strive to use commercially acceptable means to protect your Personal
              Information, we cannot guarantee its absolute security.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-semibold">Links To Other Sites</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Our Service may contain links to other sites that are not operated by us. If you
              click on a third-party link, you will be directed to that third party's site. We
              strongly advise you to review the Privacy Policy of every site you visit.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              We have no control over, and assume no responsibility for the content, privacy
              policies, or practices of any third-party sites or services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-semibold">Children's Privacy</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Our Service does not address anyone under the age of 18 ("Children"). We do not
              knowingly collect personally identifiable information from children under 18.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              If you are a parent or guardian and you are aware that your child has provided us
              with Personal Information, please contact us. If we discover that a child under 18
              has provided us with Personal Information, we will delete such information from our
              servers immediately.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-semibold">Compliance With Laws</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              We will disclose your Personal Information where required to do so by law or subpoena.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-semibold">Changes To This Privacy Policy</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              We may update our Privacy Policy from time to time. We will notify you of any changes
              by posting the new Privacy Policy on this page.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              You are advised to review this Privacy Policy periodically for any changes. Changes to
              this Privacy Policy are effective when they are posted on this page.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-semibold">Contact Us</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              If you have any questions about this Privacy Policy, please contact us.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
