import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
  size?: "header" | "footer";
};

const sizes = {
  header: {
    src: "/logo-wordmark.png",
    width: 220,
    height: 72,
    className: "h-9 w-auto max-w-[10.5rem] sm:max-w-[11.5rem] md:h-10 md:max-w-[13rem]",
  },
  footer: {
    src: "/logo-full.png",
    width: 200,
    height: 140,
    className: "h-[4.25rem] w-auto max-w-[10.5rem] object-contain object-left md:h-[4.75rem] md:max-w-[11.5rem]",
  },
} as const;

export function Logo({ className = "", size = "header" }: LogoProps) {
  const { src, width, height, className: sizeClass } = sizes[size];

  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 items-center ${className}`}
      aria-label="Money Matters — Home"
    >
      <Image
        src={src}
        alt=""
        width={width}
        height={height}
        className={sizeClass}
        priority={size === "header"}
      />
    </Link>
  );
}
