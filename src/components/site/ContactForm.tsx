"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/site-data";
import { AnimateIn } from "./AnimateIn";
import { spring } from "@/lib/motion";

export function ContactForm() {
  return (
    <section className="section-pad section-bone border-t hairline">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
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
                const monthlyIncome = Number(fd.get("monthlyIncome") ?? 0);

                if (!Number.isFinite(monthlyIncome) || monthlyIncome < 10000) {
                  alert("Minimum monthly income should be AED 10,000.");
                  return;
                }

                const body = [
                  `Name: ${fd.get("name")}`,
                  `Contact No: ${fd.get("phone")}`,
                  `Email ID: ${fd.get("email")}`,
                  `Monthly Income (AED): ${monthlyIncome}`,
                  `Employment Status: ${fd.get("employmentStatus")}`,
                  `Specific Requirements / Comments: ${fd.get("comments") || "N/A"}`,
                ].join("\n");
                window.location.href = `mailto:${site.email}?subject=Consultation%20Request&body=${encodeURIComponent(body)}`;
              }}
            >
              <div className="grid gap-5 sm:grid-cols-3">
                <Field label="Full Name" name="name" required className="sm:col-span-1" />
                <Field label="Contact No" name="phone" type="tel" required />
                <Field label="Email ID" name="email" type="email" required />
                <Field
                  label="What is your monthly income? (AED)"
                  name="monthlyIncome"
                  type="number"
                  required
                  min={10000}
                  placeholder="10000"
                />
                <SelectField
                  label="What is your employment status?"
                  name="employmentStatus"
                  required
                  options={[
                    { value: "Employed", label: "Employed" },
                    { value: "Self-Employed", label: "Self-Employed" },
                    { value: "Business Owner", label: "Business Owner" },
                    { value: "Other", label: "Other" },
                  ]}
                />
                <TextAreaField
                  label="Any specific requirements / Comments"
                  name="comments"
                  className="sm:col-span-3"
                  rows={4}
                />
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
  min,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
  min?: number;
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
        min={min}
        whileFocus={{ scale: 1.005 }}
        transition={spring}
        className="mt-2 min-h-[3rem] w-full rounded-xl border hairline bg-background px-4 py-3 text-sm text-foreground outline-none transition-shadow placeholder:text-muted-foreground/60 focus:border-primary/40 focus:ring-2 focus:ring-primary/15"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  required,
  options,
  className = "",
}: {
  label: string;
  name: string;
  required?: boolean;
  options: { value: string; label: string }[];
  className?: string;
}) {
  const id = `contact-${name}`;

  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium text-foreground">
        {label}
        {required && <span className="text-primary"> *</span>}
      </label>
      <motion.select
        id={id}
        name={name}
        required={required}
        defaultValue={options[0]?.value ?? ""}
        whileFocus={{ scale: 1.005 }}
        transition={spring}
        className="mt-2 min-h-[3rem] w-full rounded-xl border hairline bg-background px-4 py-3 text-sm text-foreground outline-none transition-shadow focus:border-primary/40 focus:ring-2 focus:ring-primary/15"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </motion.select>
    </div>
  );
}

function TextAreaField({
  label,
  name,
  required,
  className = "",
  rows = 4,
}: {
  label: string;
  name: string;
  required?: boolean;
  className?: string;
  rows?: number;
}) {
  const id = `contact-${name}`;

  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium text-foreground">
        {label}
        {required && <span className="text-primary"> *</span>}
      </label>
      <motion.textarea
        id={id}
        name={name}
        required={required}
        rows={rows}
        whileFocus={{ scale: 1.003 }}
        transition={spring}
        className="mt-2 w-full rounded-xl border hairline bg-background px-4 py-3 text-sm text-foreground outline-none transition-shadow placeholder:text-muted-foreground/60 focus:border-primary/40 focus:ring-2 focus:ring-primary/15"
      />
    </div>
  );
}
