"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { site } from "@/lib/site-data";
import { AnimateIn } from "./AnimateIn";
import { spring } from "@/lib/motion";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/maqzpzwk";
const MIN_MONTHLY_INCOME = 10000;

function validateMonthlyIncome(value: string): string {
  const trimmed = value.trim();
  if (!trimmed) return "Monthly income is required.";
  const amount = Number(trimmed);
  if (!Number.isFinite(amount) || amount <= 0) return "Enter a valid monthly income amount.";
  if (amount < MIN_MONTHLY_INCOME) return "Minimum monthly income is AED 10,000.";
  return "";
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState<"success" | "error" | "">("");
  const [incomeError, setIncomeError] = useState("");

  return (
    <section className="section-pad section-bone border-t hairline">
      <div className="section-container">
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
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const fd = new FormData(form);
                const monthlyIncomeRaw = String(fd.get("monthlyIncome") ?? "");
                const incomeValidationError = validateMonthlyIncome(monthlyIncomeRaw);
                if (incomeValidationError) {
                  setIncomeError(incomeValidationError);
                  setStatusType("error");
                  setStatusMessage(incomeValidationError);
                  return;
                }
                const monthlyIncome = Number(monthlyIncomeRaw);

                setStatusMessage("");
                setStatusType("");
                setIsSubmitting(true);

                try {
                  fd.set("monthlyIncome", String(monthlyIncome));
                  fd.set("_subject", "Consultation Request");

                  const response = await fetch(FORMSPREE_ENDPOINT, {
                    method: "POST",
                    body: fd,
                    headers: { Accept: "application/json" },
                  });

                  let payload: { ok?: boolean; errors?: { message?: string }[] } | null = null;
                  try {
                    payload = await response.json();
                  } catch {
                    payload = null;
                  }

                  if (!response.ok && payload?.ok !== true) {
                    const errorMessage = payload?.errors?.[0]?.message;
                    throw new Error(errorMessage || "Failed to submit form");
                  }

                  form.reset();
                  setIncomeError("");
                  setStatusType("success");
                  setStatusMessage("Thanks! Your consultation request has been submitted.");
                } catch (error) {
                  setStatusType("error");
                  setStatusMessage(
                    error instanceof Error && error.message
                      ? error.message
                      : "Could not submit right now. Please try again in a moment.",
                  );
                } finally {
                  setIsSubmitting(false);
                }
              }}
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                <Field label="Full Name" name="name" required />
                <Field label="Contact No" name="phone" type="tel" required />
                <Field label="Email ID" name="email" type="email" required className="sm:col-span-2 lg:col-span-1" />
                <Field
                  label="What is your monthly income? (AED)"
                  name="monthlyIncome"
                  type="number"
                  required
                  min={MIN_MONTHLY_INCOME}
                  step={1}
                  placeholder="10000"
                  error={incomeError}
                  onBlur={(e) => setIncomeError(validateMonthlyIncome(e.currentTarget.value))}
                  onChange={(e) => {
                    if (incomeError) setIncomeError(validateMonthlyIncome(e.currentTarget.value));
                  }}
                />
                <SelectField
                  label="What is your employment status?"
                  name="employmentStatus"
                  required
                  placeholder="Select employment status"
                  options={[
                    { value: "Employed", label: "Employed" },
                    { value: "Self-Employed", label: "Self-Employed" },
                  ]}
                />
                <TextAreaField
                  label="Any specific requirements / Comments"
                  name="comments"
                  className="sm:col-span-2 lg:col-span-3"
                  rows={4}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                transition={spring}
                disabled={isSubmitting}
                className="mt-8 w-full rounded-full bg-primary py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-cta)]"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </motion.button>

              {statusMessage && (
                <p
                  className={`mt-4 text-sm ${
                    statusType === "success" ? "text-green-700" : "text-red-600"
                  }`}
                >
                  {statusMessage}
                </p>
              )}

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
  step,
  error,
  onBlur,
  onChange,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
  min?: number;
  step?: number;
  error?: string;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
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
        step={step}
        onBlur={onBlur}
        onChange={onChange}
        whileFocus={{ scale: 1.005 }}
        transition={spring}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`mt-2 min-h-[3rem] w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground outline-none transition-shadow placeholder:text-muted-foreground/60 focus:ring-2 ${
          error
            ? "border-red-500 focus:border-red-500 focus:ring-red-500/15"
            : "hairline focus:border-primary/40 focus:ring-primary/15"
        }`}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

function SelectField({
  label,
  name,
  required,
  options,
  placeholder,
  className = "",
}: {
  label: string;
  name: string;
  required?: boolean;
  options: { value: string; label: string }[];
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
      <motion.select
        id={id}
        name={name}
        required={required}
        defaultValue=""
        whileFocus={{ scale: 1.005 }}
        transition={spring}
        className="mt-2 min-h-[3rem] w-full rounded-xl border hairline bg-background px-4 py-3 text-sm text-foreground outline-none transition-shadow focus:border-primary/40 focus:ring-2 focus:ring-primary/15"
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
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
