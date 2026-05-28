import Link from "next/link";
import { Logo } from "@/components/site/Logo";

export default function NotFound() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center px-6 text-center">
      <Logo className="mb-10" />
      <p className="text-xs font-medium uppercase tracking-widest text-primary">404</p>
      <h1 className="mt-4 font-display text-4xl font-semibold">Page not found</h1>
      <p className="mt-3 max-w-sm text-sm text-muted-foreground">
        This page doesn&apos;t exist. Return to our homepage to explore mortgage services.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-cta)]"
      >
        Back to home
      </Link>
    </div>
  );
}
