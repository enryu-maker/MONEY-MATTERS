"use client";

import { useCallback, useEffect, useMemo, useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { AnimateIn } from "./AnimateIn";
import { SectionHeader } from "./SectionHeader";

const AED = (n: number) =>
  new Intl.NumberFormat("en-AE", {
    style: "currency",
    currency: "AED",
    maximumFractionDigits: 0,
  }).format(n);

function parseNumber(raw: string): number | null {
  const cleaned = raw.replace(/,/g, "").replace(/%/g, "").trim();
  if (cleaned === "") return null;
  const n = Number(cleaned);
  if (!Number.isFinite(n) || n < 0) return null;
  return n;
}

function formatWithCommas(n: number, decimals = 0) {
  return new Intl.NumberFormat("en-AE", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(n);
}

function sliderPos(value: number, min: number, max: number) {
  if (max <= min) return 0;
  const clamped = Math.min(max, Math.max(min, value));
  return ((clamped - min) / (max - min)) * 100;
}

function useCoarsePointer() {
  return useSyncExternalStore(
    (onStoreChange) => {
      const mq = window.matchMedia("(pointer: coarse)");
      mq.addEventListener("change", onStoreChange);
      return () => mq.removeEventListener("change", onStoreChange);
    },
    () => window.matchMedia("(pointer: coarse)").matches,
    () => false,
  );
}

function CalcSlider({
  label,
  min,
  max,
  step,
  value,
  displayValue,
  onChange,
}: {
  label: string;
  min: number;
  max: number;
  step: number;
  value: number;
  displayValue: number;
  onChange: (v: number) => void;
}) {
  const sliderValue = Math.min(max, Math.max(min, value));

  return (
    <div className="calc-slider-zone">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={sliderValue}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{
          background: `linear-gradient(to right, var(--primary) 0%, var(--primary) ${sliderPos(displayValue, min, max)}%, var(--muted) ${sliderPos(displayValue, min, max)}%, var(--muted) 100%)`,
        }}
        className="calc-range w-full"
        aria-label={`${label} slider`}
      />
    </div>
  );
}

function TapToEditField({
  label,
  display,
  draft,
  onDraftChange,
  onCommit,
  prefix,
  suffix,
}: {
  label: string;
  display: string;
  draft: string;
  onDraftChange: (v: string) => void;
  onCommit: () => void;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}) {
  const coarse = useCoarsePointer();
  const [editing, setEditing] = useState(false);

  const close = () => {
    onCommit();
    setEditing(false);
  };

  if (coarse && !editing) {
    return (
      <button
        type="button"
        onClick={() => setEditing(true)}
        className="flex w-full min-h-[3.25rem] items-center overflow-hidden rounded-xl border hairline bg-secondary/40 text-left transition-colors active:bg-secondary/70"
        aria-label={`${label}, tap to type`}
      >
        {prefix}
        <span className="flex flex-1 flex-col px-4 py-3">
          <span className="font-semibold tabular-nums text-foreground">{display}</span>
          <span className="text-xs font-medium text-primary">Tap to type</span>
        </span>
        {suffix}
      </button>
    );
  }

  return (
    <div className="flex items-center overflow-hidden rounded-xl border hairline bg-secondary/40 focus-within:border-primary/40 focus-within:ring-2 focus-within:ring-primary/10">
      {prefix}
      <input
        type="text"
        inputMode="decimal"
        value={draft}
        autoFocus={coarse && editing}
        onChange={(e) => onDraftChange(e.target.value)}
        onBlur={close}
        onKeyDown={(e) => e.key === "Enter" && close()}
        className="calc-input min-h-[3.25rem] w-full flex-1 border-0 bg-transparent px-4 font-semibold tabular-nums text-foreground outline-none"
        aria-label={label}
      />
      {suffix}
    </div>
  );
}

type PaymentRow = {
  month: number;
  payment: number;
  principal: number;
  interest: number;
  balance: number;
};

function buildSchedule(loan: number, annualRate: number, months: number): PaymentRow[] {
  if (loan <= 0 || months < 1) return [];

  const r = annualRate / 100 / 12;
  const emi =
    r === 0
      ? loan / months
      : (loan * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);

  let balance = loan;
  const rows: PaymentRow[] = [];

  for (let month = 1; month <= months; month++) {
    const interest = r === 0 ? 0 : balance * r;
    let principal = emi - interest;
    let payment = emi;

    if (month === months) {
      principal = balance;
      payment = principal + interest;
      balance = 0;
    } else {
      balance = Math.max(0, balance - principal);
    }

    rows.push({ month, payment, principal, interest, balance });
  }

  return rows;
}

const TENURE_MAX_MONTHS = 300;

export function Calculator() {
  const [price, setPrice] = useState(2_000_000);
  const [downPaymentPct, setDownPaymentPct] = useState(25);
  const [loanAmount, setLoanAmount] = useState(1_500_000);
  const [rate, setRate] = useState(4.25);
  const [tenureMonths, setTenureMonths] = useState(300);
  const [detailsOpen, setDetailsOpen] = useState(false);

  const downPayment = useMemo(
    () => Math.min(price, Math.round((price * downPaymentPct) / 100)),
    [price, downPaymentPct],
  );
  const setPriceAndSync = useCallback((next: number) => {
    setPrice(next);
    const dp = Math.min(next, Math.round((next * downPaymentPct) / 100));
    setLoanAmount(Math.max(0, next - dp));
  }, [downPaymentPct]);

  const setDownPctAndSync = useCallback(
    (pct: number) => {
      const clamped = Math.min(100, Math.max(0, Math.round(pct * 100) / 100));
      setDownPaymentPct(clamped);
      const dp = Math.min(price, Math.round((price * clamped) / 100));
      setLoanAmount(Math.max(0, price - dp));
    },
    [price],
  );

  const setDownAmountAndSync = useCallback(
    (amount: number) => {
      const clamped = Math.min(price, Math.max(0, Math.round(amount)));
      const pct = price > 0 ? Math.round((clamped / price) * 10000) / 100 : 0;
      setDownPaymentPct(pct);
      setLoanAmount(Math.max(0, price - clamped));
    },
    [price],
  );

  const setLoanAndSync = useCallback(
    (nextLoan: number) => {
      const clampedLoan = Math.min(price, Math.max(0, Math.round(nextLoan)));
      setLoanAmount(clampedLoan);
      const dp = Math.max(0, price - clampedLoan);
      const pct = price > 0 ? Math.round((dp / price) * 10000) / 100 : 0;
      setDownPaymentPct(pct);
    },
    [price],
  );

  const setTenure = useCallback((months: number) => {
    setTenureMonths(Math.min(TENURE_MAX_MONTHS, Math.max(1, Math.round(months))));
  }, []);

  const { emi, totalPay, totalInt, schedule, months } = useMemo(() => {
    const loan = Math.max(0, loanAmount);
    const monthCount = Math.min(TENURE_MAX_MONTHS, Math.max(1, Math.round(tenureMonths)));
    const schedule = buildSchedule(loan, rate, monthCount);
    const emi = schedule[0]?.payment ?? 0;
    const totalPay = schedule.reduce((sum, row) => sum + row.payment, 0);
    const totalInt = totalPay - loan;
    return { emi, totalPay, totalInt, schedule, months: monthCount };
  }, [loanAmount, rate, tenureMonths]);

  const hasSchedule = schedule.length > 0 && loanAmount > 0;

  useEffect(() => {
    if (!detailsOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDetailsOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [detailsOpen]);

  return (
    <section className="section-pad bg-background">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="EMI Calculator"
          center
          title="Calculate your monthly payment"
          sub="Enter any amount in the fields below, or use the sliders as a guide."
        />

        <AnimateIn variant="scaleIn" delay={0.05}>
        <div className="mt-10 overflow-hidden rounded-3xl border hairline bg-card shadow-[var(--shadow-card)] lg:grid lg:grid-cols-[1fr_minmax(320px,400px)] lg:items-stretch">
          {/* Inputs */}
          <div className="divide-y hairline p-6 sm:p-8 lg:p-10">
            <FieldGroup title="Property">
              <MoneyControl
                label="Property value"
                value={price}
                sliderMin={500_000}
                sliderMax={15_000_000}
                sliderStep={50_000}
                onChange={setPriceAndSync}
              />
            </FieldGroup>

            <FieldGroup title="Down payment">
              <DownPaymentControl
                percent={downPaymentPct}
                amount={downPayment}
                price={price}
                onPercentChange={setDownPctAndSync}
                onAmountChange={setDownAmountAndSync}
              />
            </FieldGroup>

            <FieldGroup title="Loan amount">
              <MoneyControl
                label="Loan amount"
                value={loanAmount}
                sliderMin={0}
                sliderMax={Math.max(price, loanAmount, 1)}
                sliderStep={10_000}
                onChange={setLoanAndSync}
              />
            </FieldGroup>

            <FieldGroup title="Rate & term">
              <PercentControl
                label="Interest rate (per year)"
                value={rate}
                sliderMin={1}
                sliderMax={12}
                sliderStep={0.01}
                onChange={setRate}
              />
              <MonthsControl
                label="Loan tenure"
                value={tenureMonths}
                sliderMin={12}
                sliderMax={TENURE_MAX_MONTHS}
                sliderStep={1}
                maxMonths={TENURE_MAX_MONTHS}
                onChange={setTenure}
              />
            </FieldGroup>
          </div>

          {/* Results */}
          <aside className="flex flex-col justify-between bg-primary p-6 text-primary-foreground sm:p-8">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/75">
                Monthly EMI
              </p>
              <p className="mt-1 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                {hasSchedule ? AED(emi) : "—"}
              </p>
              <dl className="mt-6 space-y-2.5 text-sm">
                <ResultRow label="Loan amount" value={hasSchedule ? AED(loanAmount) : "—"} />
                <ResultRow label="Interest rate" value={hasSchedule ? `${rate.toFixed(2)}% p.a.` : "—"} />
                <ResultRow label="Tenure" value={hasSchedule ? `${months} months` : "—"} />
                <ResultRow label="Total interest" value={hasSchedule ? AED(totalInt) : "—"} />
                <ResultRow label="Total payable" value={hasSchedule ? AED(totalPay) : "—"} bold />
              </dl>

              <button
                type="button"
                disabled={!hasSchedule}
                onClick={() => setDetailsOpen(true)}
                className="mt-6 w-full rounded-full border-2 border-primary-foreground/30 bg-primary-foreground/10 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/20 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Get total payment details
              </button>
            </div>

            <a
              href="/contact"
              className="mt-8 block rounded-full bg-primary-foreground py-3.5 text-center text-sm font-semibold text-primary shadow-lg transition-opacity hover:opacity-95"
            >
              Get this rate confirmed
            </a>
          </aside>
        </div>
        </AnimateIn>
      </div>

      <PaymentDetailsModal
        open={detailsOpen}
        onClose={() => setDetailsOpen(false)}
        schedule={schedule}
        summary={{
          emi,
          loanAmount,
          downPayment,
          price,
          rate,
          months,
          totalInt,
          totalPay,
        }}
        hasSchedule={hasSchedule}
      />
    </section>
  );
}

function PaymentDetailsModal({
  open,
  onClose,
  schedule,
  summary,
  hasSchedule,
}: {
  open: boolean;
  onClose: () => void;
  schedule: PaymentRow[];
  hasSchedule: boolean;
  summary: {
    emi: number;
    loanAmount: number;
    downPayment: number;
    price: number;
    rate: number;
    months: number;
    totalInt: number;
    totalPay: number;
  };
}) {
  return (
    <AnimatePresence>
      {open && hasSchedule && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-4">
          <motion.button
            type="button"
            aria-label="Close dialog"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-foreground/50 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="payment-details-title"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.98 }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            className="relative flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-3xl border hairline bg-background shadow-[var(--shadow-card)] sm:rounded-3xl"
          >
            <div className="flex shrink-0 items-start justify-between gap-4 border-b hairline px-5 py-5 sm:px-6">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
                  Payment breakdown
                </p>
                <h2 id="payment-details-title" className="mt-1 font-display text-2xl font-semibold">
                  Total payment details
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  {summary.months} monthly payments · {summary.rate.toFixed(2)}% interest
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border hairline hover:bg-secondary"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="shrink-0 grid grid-cols-2 gap-3 border-b hairline bg-secondary/30 px-5 py-4 sm:grid-cols-4 sm:px-6">
              <ModalStat label="Monthly EMI" value={AED(summary.emi)} highlight />
              <ModalStat label="Loan" value={AED(summary.loanAmount)} />
              <ModalStat label="Total interest" value={AED(summary.totalInt)} />
              <ModalStat label="Total payable" value={AED(summary.totalPay)} />
            </div>

            <div className="min-h-0 flex-1 overflow-auto overscroll-contain px-5 py-4 sm:px-6">
              <PaymentScheduleTable schedule={schedule} variant="modal" />
            </div>

            <div className="flex shrink-0 flex-col gap-2 border-t hairline p-5 sm:flex-row sm:px-6">
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border hairline px-6 py-3 text-sm font-medium hover:bg-secondary sm:flex-1"
              >
                Close
              </button>
              <a
                href="/contact"
                className="rounded-full bg-primary px-6 py-3 text-center text-sm font-semibold text-primary-foreground shadow-[var(--shadow-cta)] sm:flex-1"
              >
                Get this rate confirmed
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function ModalStat({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className={`rounded-xl p-3 ${highlight ? "bg-primary/10 ring-1 ring-primary/20" : "bg-card"}`}>
      <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">{label}</p>
      <p className={`mt-1 tabular-nums ${highlight ? "font-display text-lg font-semibold text-primary" : "text-sm font-semibold"}`}>
        {value}
      </p>
    </div>
  );
}

function PaymentScheduleTable({
  schedule,
  variant = "modal",
}: {
  schedule: PaymentRow[];
  variant?: "modal";
}) {
  return (
    <table className={`w-full text-left ${variant === "modal" ? "text-sm" : "text-xs"}`}>
      <thead className="sticky top-0 z-10 bg-background">
        <tr className="border-b hairline text-muted-foreground">
          <th className="py-3 pr-3 font-medium">Month</th>
          <th className="py-3 pr-3 font-medium">Payment</th>
          <th className="hidden py-3 pr-3 font-medium sm:table-cell">Principal</th>
          <th className="hidden py-3 pr-3 font-medium sm:table-cell">Interest</th>
          <th className="py-3 text-right font-medium">Balance</th>
        </tr>
      </thead>
      <tbody>
        {schedule.map((row) => (
          <tr key={row.month} className="border-b hairline last:border-0">
            <td className="py-2.5 pr-3 tabular-nums text-muted-foreground">{row.month}</td>
            <td className="py-2.5 pr-3 font-medium tabular-nums">{AED(row.payment)}</td>
            <td className="hidden py-2.5 pr-3 tabular-nums sm:table-cell">{AED(row.principal)}</td>
            <td className="hidden py-2.5 pr-3 tabular-nums sm:table-cell">{AED(row.interest)}</td>
            <td className="py-2.5 text-right tabular-nums">{AED(row.balance)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function FieldGroup({
  title,
  children,
  action,
}: {
  title: string;
  children: React.ReactNode;
  action?: React.ReactNode;
}) {
  return (
    <div className="space-y-4 py-6 first:pt-0 last:pb-0">
      <div className="flex items-center justify-between gap-2">
        <h3 className="font-display text-lg font-semibold text-foreground">{title}</h3>
        {action}
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function ResultRow({ label, value, bold }: { label: string; value: string; bold?: boolean }) {
  return (
    <div className="flex justify-between gap-3">
      <dt className="text-primary-foreground/75">{label}</dt>
      <dd className={`tabular-nums ${bold ? "font-semibold" : "font-medium"}`}>{value}</dd>
    </div>
  );
}

function MoneyControl({
  label,
  value,
  sliderMin,
  sliderMax,
  sliderStep,
  onChange,
}: {
  label: string;
  value: number;
  sliderMin: number;
  sliderMax: number;
  sliderStep: number;
  onChange: (v: number) => void;
}) {
  const [draft, setDraft] = useState(formatWithCommas(value));

  useEffect(() => {
    setDraft(formatWithCommas(value));
  }, [value]);

  const commit = () => {
    const parsed = parseNumber(draft);
    if (parsed !== null) {
      onChange(Math.round(parsed));
      setDraft(formatWithCommas(Math.round(parsed)));
    } else {
      setDraft(formatWithCommas(value));
    }
  };

  const sliderValue = Math.min(sliderMax, Math.max(sliderMin, value));

  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-muted-foreground">{label}</label>
      <CalcSlider
        label={label}
        min={sliderMin}
        max={sliderMax}
        step={sliderStep}
        value={sliderValue}
        displayValue={value}
        onChange={onChange}
      />
      <div className="calc-field-inputs">
        <TapToEditField
          label={label}
          display={formatWithCommas(value)}
          draft={draft}
          onDraftChange={setDraft}
          onCommit={commit}
          prefix={
            <span className="shrink-0 border-r hairline bg-secondary/60 px-4 py-3.5 text-sm font-medium text-muted-foreground">
              AED
            </span>
          }
        />
      </div>
      {value > sliderMax && (
        <p className="text-xs text-muted-foreground">
          Slider tops at {AED(sliderMax)} — your entered amount is used for EMI.
        </p>
      )}
    </div>
  );
}

function PercentControl({
  label,
  value,
  sliderMin,
  sliderMax,
  sliderStep,
  onChange,
}: {
  label: string;
  value: number;
  sliderMin: number;
  sliderMax: number;
  sliderStep: number;
  onChange: (v: number) => void;
}) {
  const [draft, setDraft] = useState(value.toFixed(2));

  useEffect(() => {
    setDraft(value.toFixed(2));
  }, [value]);

  const commit = () => {
    const parsed = parseNumber(draft);
    if (parsed !== null) {
      const next = Math.round(parsed * 100) / 100;
      onChange(next);
      setDraft(next.toFixed(2));
    } else {
      setDraft(value.toFixed(2));
    }
  };

  const sliderValue = Math.min(sliderMax, Math.max(sliderMin, value));

  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-muted-foreground">{label}</label>
      <CalcSlider
        label={label}
        min={sliderMin}
        max={sliderMax}
        step={sliderStep}
        value={sliderValue}
        displayValue={value}
        onChange={(v) => onChange(Math.round(v * 100) / 100)}
      />
      <div className="calc-field-inputs">
        <TapToEditField
          label={label}
          display={`${value.toFixed(2)}%`}
          draft={draft}
          onDraftChange={setDraft}
          onCommit={commit}
          suffix={
            <span className="shrink-0 border-l hairline bg-secondary/60 px-4 py-3.5 text-sm font-medium text-muted-foreground">
              %
            </span>
          }
        />
      </div>
      <p className="text-xs text-muted-foreground">Adjust by 0.01% — type any rate you need.</p>
    </div>
  );
}

function DownPaymentControl({
  percent,
  amount,
  price,
  onPercentChange,
  onAmountChange,
}: {
  percent: number;
  amount: number;
  price: number;
  onPercentChange: (pct: number) => void;
  onAmountChange: (amount: number) => void;
}) {
  const [pctDraft, setPctDraft] = useState(percent.toFixed(1));
  const [amountDraft, setAmountDraft] = useState(formatWithCommas(amount));

  useEffect(() => {
    setPctDraft(percent.toFixed(1));
  }, [percent]);

  useEffect(() => {
    setAmountDraft(formatWithCommas(amount));
  }, [amount]);

  const commitPct = () => {
    const parsed = parseNumber(pctDraft);
    if (parsed !== null) {
      onPercentChange(parsed);
      setPctDraft(Math.min(100, Math.max(0, parsed)).toFixed(1));
    } else {
      setPctDraft(percent.toFixed(1));
    }
  };

  const commitAmount = () => {
    const parsed = parseNumber(amountDraft);
    if (parsed !== null) {
      onAmountChange(parsed);
      setAmountDraft(formatWithCommas(Math.min(price, Math.max(0, Math.round(parsed)))));
    } else {
      setAmountDraft(formatWithCommas(amount));
    }
  };

  const sliderPct = Math.min(100, Math.max(0, percent));

  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-muted-foreground">Down payment</label>

      <p className="font-display text-2xl font-semibold tabular-nums tracking-tight text-foreground sm:text-3xl">
        {AED(amount)}
      </p>
      <p className="text-xs text-muted-foreground">of {AED(price)} property value</p>

      <CalcSlider
        label="Down payment"
        min={0}
        max={100}
        step={0.5}
        value={sliderPct}
        displayValue={percent}
        onChange={onPercentChange}
      />

      <div className="calc-field-inputs grid gap-3 sm:grid-cols-2">
        <TapToEditField
          label="Down payment percentage"
          display={`${percent.toFixed(1)}%`}
          draft={pctDraft}
          onDraftChange={setPctDraft}
          onCommit={commitPct}
          suffix={
            <span className="shrink-0 border-l hairline bg-secondary/60 px-4 py-3.5 text-sm font-medium text-muted-foreground">
              %
            </span>
          }
        />
        <TapToEditField
          label="Down payment amount"
          display={formatWithCommas(amount)}
          draft={amountDraft}
          onDraftChange={setAmountDraft}
          onCommit={commitAmount}
          prefix={
            <span className="shrink-0 border-r hairline bg-secondary/60 px-4 py-3.5 text-sm font-medium text-muted-foreground">
              AED
            </span>
          }
        />
      </div>
    </div>
  );
}

function MonthsControl({
  label,
  value,
  sliderMin,
  sliderMax,
  sliderStep,
  maxMonths,
  onChange,
}: {
  label: string;
  value: number;
  sliderMin: number;
  sliderMax: number;
  sliderStep: number;
  maxMonths: number;
  onChange: (v: number) => void;
}) {
  const [draft, setDraft] = useState(String(Math.round(value)));

  useEffect(() => {
    setDraft(String(Math.round(value)));
  }, [value]);

  const commit = () => {
    const parsed = parseNumber(draft);
    if (parsed !== null && parsed >= 1) {
      const months = Math.min(maxMonths, Math.round(parsed));
      onChange(months);
      setDraft(String(months));
    } else {
      setDraft(String(Math.round(value)));
    }
  };

  const sliderValue = Math.min(sliderMax, Math.max(sliderMin, Math.round(value)));

  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-muted-foreground">{label}</label>
      <CalcSlider
        label={label}
        min={sliderMin}
        max={sliderMax}
        step={sliderStep}
        value={sliderValue}
        displayValue={value}
        onChange={onChange}
      />
      <div className="calc-field-inputs">
        <TapToEditField
          label={label}
          display={String(Math.round(value))}
          draft={draft}
          onDraftChange={setDraft}
          onCommit={commit}
          suffix={
            <span className="shrink-0 border-l hairline bg-secondary/60 px-4 py-3.5 text-sm font-medium text-muted-foreground">
              months
            </span>
          }
        />
      </div>
      {value > sliderMax && (
        <p className="text-xs text-muted-foreground">
          Slider tops at {maxMonths} months — your entered tenure is used for EMI.
        </p>
      )}
    </div>
  );
}
