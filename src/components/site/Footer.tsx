"use client";
export function Footer() {
    return (
        <footer className="border-t hairline px-6 py-16">
            <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-12">
                <div className="md:col-span-5">
                    <div className="flex items-center gap-2.5">
                        <span className="grid h-8 w-8 place-items-center rounded-full border border-primary/30 bg-primary/5">
                            <span className="font-display text-base text-gradient-gold">M</span>
                        </span>
                        <span className="font-display text-lg">
                            Money <span className="text-gradient-gold">Matters</span>
                        </span>
                    </div>
                    <p className="mt-5 max-w-sm text-sm text-muted-foreground">
                        A boutique UAE mortgage consultancy. Licensed under the Dubai Economy
                        Department. Affiliated with every major bank in the region.
                    </p>
                    <div className="mt-6 flex gap-3">
                        {["Facebook", "Instagram", "LinkedIn"].map((s) => (
                            <a
                                key={s}
                                href="#"
                                className="rounded-full border hairline px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                            >
                                {s}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="md:col-span-3">
                    <div className="text-xs uppercase tracking-widest text-primary/80">Services</div>
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                        <li>Resale / Fresh Purchase</li>
                        <li>Buyout</li>
                        <li>Equity Release</li>
                        <li>Non-Resident Mortgages</li>
                        <li>Corporate Mortgages</li>
                        <li>Commercial Real Estate</li>
                    </ul>
                </div>

                <div className="md:col-span-4">
                    <div className="text-xs uppercase tracking-widest text-primary/80">Newsletter</div>
                    <p className="mt-4 text-sm text-muted-foreground">
                        Receive market briefings and rate updates from our desk.
                    </p>
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="mt-4 flex overflow-hidden rounded-full glass"
                    >
                        <input
                            type="email"
                            required
                            placeholder="Email address"
                            className="flex-1 bg-transparent px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none"
                        />
                        <button className="bg-[var(--grad-gold)] px-5 py-3 text-sm font-medium text-primary-foreground">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
            <div className="mx-auto mt-14 flex max-w-7xl flex-col items-start justify-between gap-3 border-t hairline pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
                <div>© {new Date().getFullYear()} Money Matters Mortgage Brokers · All rights reserved</div>
                <div className="flex gap-5">
                    <a href="#" className="hover:text-foreground">Privacy Policy</a>
                    <a href="#" className="hover:text-foreground">Cookies</a>
                </div>
            </div>
        </footer>
    );
}
