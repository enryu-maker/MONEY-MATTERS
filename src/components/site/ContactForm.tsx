"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/site-data";
import { AnimateIn } from "./AnimateIn";
import { spring } from "@/lib/motion";

export function ContactForm() {
  return (
    <section className="section-pad section-bone border-t hairline">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl">
          <AnimateIn>
            <div className="text-center md:text-left">
              <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
                Get expert mortgage advice and secure the best rates today.
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground md:mx-0">
                Fill out the form to schedule your consultation with our trusted mortgage
                consultant.
              </p>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.08}>
            <motion.form
              className="mt-8 rounded-2xl border hairline bg-card p-6 shadow-[var(--shadow-soft)] sm:p-8 md:p-10"
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
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full Name" name="name" required className="sm:col-span-1" />
                <Field label="Phone Number" name="phone" type="tel" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Location" name="location" placeholder="e.g. Dubai, UAE" />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                transition={spring}
                className="mt-8 w-full rounded-full bg-primary py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-cta)]"
              >
                Submit
              </motion.button>

              <p className="mt-6 border-t hairline pt-6 text-center text-xs leading-relaxed text-muted-foreground sm:text-left">
                We value your privacy. Your contact information is never shared with any third
                party and will remain internal where you can opt out at any time.{" "}
                <a
                  href={site.privacyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary hover:underline"
                >
                  Privacy Policy
                </a>
              </p>
            </motion.form>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
}) {
  const id = `contact-${name}`;

  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium text-foreground">
        {label}
        {required && <span className="text-primary"> *</span>}
      </label>
      <motion.input
        id={id}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        whileFocus={{ scale: 1.005 }}
        transition={spring}
        className="mt-2 min-h-[3rem] w-full rounded-xl border hairline bg-background px-4 py-3 text-sm text-foreground outline-none transition-shadow placeholder:text-muted-foreground/60 focus:border-primary/40 focus:ring-2 focus:ring-primary/15"
      />
    </div>
  );
}
