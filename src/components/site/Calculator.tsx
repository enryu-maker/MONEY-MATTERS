"use client";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { SectionHeader } from "./Services";

const AED = (n: number) =>
    new Intl.NumberFormat("en-AE", {
        style: "currency",
        currency: "AED",
        maximumFractionDigits: 0,
    }).format(n);

export function Calculator() {
    const [price, setPrice] = useState(5_000_000);
    const [dpPct, setDpPct] = useState(25);
    const [rate, setRate] = useState(4.25);
    const [months, setMonths] = useState(300);

    const { loan, ltv, emi, totalPay, totalInt } = useMemo(() => {
        const dp = (price * dpPct) / 100;
        const loan = Math.max(price - dp, 0);
        const ltv = price > 0 ? (loan / price) * 100 : 0;
        const r = rate / 100 / 12;
        const n = months;
        const emi = r === 0 ? loan / n : (loan * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        const totalPay = emi * n;
        const totalInt = totalPay - loan;
        return { loan, ltv, emi, totalPay, totalInt };
    }, [price, dpPct, rate, months]);

    const years = Math.floor(months / 12);
    const remMonths = months % 12;
    const ltvDash = 2 * Math.PI * 56;
    const ltvOffset = ltvDash - (ltv / 100) * ltvDash;

    return (
        <section id="calculator" className="relative px-6 py-32">
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-1/4 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/[0.04] blur-[120px]" />
            </div>
            <div className="mx-auto max-w-7xl">
                <SectionHeader
                    eyebrow="UAE Mortgage Calculator"
                    title={
                        <>
                            Plan your finance in <em className="text-gradient-gold not-italic">real time.</em>
                        </>
                    }
                    sub="An instant, transparent view of your monthly EMI, total repayment, and loan-to-value — calibrated for the UAE market."
                />

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-16 grid gap-px overflow-hidden rounded-3xl glass-strong lg:grid-cols-5"
                >
                    {/* Inputs */}
                    <div className="space-y-10 bg-background/40 p-8 md:p-12 lg:col-span-3">
                        <Slider
                            label="Property Value"
                            value={price}
                            min={50_000_000 / 1000}
                            max={100_000_000}
                            step={50_000}
                            display={AED(price)}
                            onChange={setPrice}
                        />
                        <Slider
                            label="Down Payment"
                            value={dpPct}
                            min={15}
                            max={80}
                            step={1}
                            display={`${dpPct}%  ·  ${AED((price * dpPct) / 100)}`}
                            onChange={setDpPct}
                        />
                        <Slider
                            label="Interest Rate"
                            value={rate}
                            min={2}
                            max={9}
                            step={0.05}
                            display={`${rate.toFixed(2)}%`}
                            onChange={setRate}
                        />
                        <Slider
                            label="Tenure"
                            value={months}
                            min={12}
                            max={300}
                            step={1}
                            display={`${months} months  ·  ${years}y ${remMonths}m`}
                            onChange={setMonths}
                        />
                    </div>

                    {/* Outputs */}
                    <div className="bg-linear-to-br from-background/80 to-background/40 p-8 md:p-12 lg:col-span-2">
                        <div className="flex items-center justify-center">
                            <div className="relative">
                                <svg width="160" height="160" viewBox="0 0 160 160">
                                    <circle
                                        cx="80"
                                        cy="80"
                                        r="56"
                                        fill="none"
                                        stroke="oklch(1 0 0 / 0.08)"
                                        strokeWidth="6"
                                    />
                                    <motion.circle
                                        cx="80"
                                        cy="80"
                                        r="56"
                                        fill="none"
                                        stroke="url(#goldGrad)"
                                        strokeWidth="6"
                                        strokeLinecap="round"
                                        strokeDasharray={ltvDash}
                                        animate={{ strokeDashoffset: ltvOffset }}
                                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                        transform="rotate(-90 80 80)"
                                    />
                                    <defs>
                                        <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
                                            <stop offset="0%" stopColor="#f4e2b8" />
                                            <stop offset="100%" stopColor="#caa55a" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="text-xs uppercase tracking-widest text-muted-foreground">LTV</span>
                                    <span className="font-display text-3xl text-gradient-gold">
                                        {ltv.toFixed(1)}%
                                    </span>
                                </div>
                            </div>
                        </div>

                        <Stat big label="Monthly EMI" value={AED(emi || 0)} />
                        <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-xl border hairline">
                            <Stat label="Loan Amount" value={AED(loan)} />
                            <Stat label="Total Repayment" value={AED(totalPay || 0)} />
                            <Stat label="Total Interest" value={AED(totalInt || 0)} />
                        </div>

                        <a
                            href="#contact"
                            className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-[var(--grad-gold)] px-6 py-4 text-sm font-medium text-primary-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-[1.01]"
                        >
                            Get a tailored offer →
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function Slider({
    label,
    value,
    min,
    max,
    step,
    display,
    onChange,
}: {
    label: string;
    value: number;
    min: number;
    max: number;
    step: number;
    display: string;
    onChange: (v: number) => void;
}) {
    const pct = ((value - min) / (max - min)) * 100;
    return (
        <div>
            <div className="flex items-baseline justify-between">
                <label className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{label}</label>
                <motion.span
                    key={display}
                    initial={{ opacity: 0.5, y: -2 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-display text-xl text-gradient-gold"
                >
                    {display}
                </motion.span>
            </div>
            <div className="relative mt-4 h-1.5 w-full rounded-full bg-foreground/8">
                <div
                    className="absolute inset-y-0 left-0 rounded-full bg-[var(--grad-gold)]"
                    style={{ width: `${pct}%` }}
                />
                <div
                    className="absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-primary shadow-[var(--shadow-gold)] ring-4 ring-background"
                    style={{ left: `calc(${pct}% - 8px)` }}
                />
                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={value}
                    onChange={(e) => onChange(parseFloat(e.target.value))}
                    className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                    aria-label={label}
                />
            </div>
        </div>
    );
}

function Stat({ label, value, big = false }: { label: string; value: string; big?: boolean }) {
    return (
        <div className={`bg-background/50 p-5 ${big ? "mt-8" : ""}`}>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
            <motion.div
                key={value}
                initial={{ opacity: 0.6, y: -3 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`mt-1 font-display ${big ? "text-4xl text-gradient-gold" : "text-2xl"}`}
            >
                {value}
            </motion.div>
        </div>
    );
}
