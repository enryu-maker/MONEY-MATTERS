"use client";

import { site } from "@/lib/site-data";

export function ContactForm() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-xl">
        <h2 className="font-display text-2xl font-semibold md:text-3xl">
          Get expert mortgage advice and secure the best rates today.
        </h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Fill out the form to schedule your consultation with our trusted mortgage consultant.
        </p>
        <form
          className="mt-8 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            const body = [
              `Name: ${fd.get("name")}`,
              `Phone: ${fd.get("phone")}`,
              `Email: ${fd.get("email")}`,
              `Location: ${fd.get("location")}`,
            ].join("\n");
            window.location.href = `mailto:${site.email}?subject=Consultation%20Request&body=${encodeURIComponent(body)}`;
          }}
        >
          <Field label="Full Name" name="name" required />
          <Field label="Phone Number" name="phone" type="tel" required />
          <Field label="Email" name="email" type="email" required />
          <Field label="Location" name="location" />
          <button
            type="submit"
            className="w-full rounded-full bg-primary py-3.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-cta)]"
          >
            Submit
          </button>
          <p className="text-xs leading-relaxed text-muted-foreground">
            We value your privacy. Your contact information is never shared with any third party
            and will remain internal, where you can opt out at any time.{" "}
            <a href={site.privacyUrl} className="underline hover:text-primary">
              Privacy Policy
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-xl border hairline bg-card px-4 py-3 text-sm outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/15"
      />
    </div>
  );
}
