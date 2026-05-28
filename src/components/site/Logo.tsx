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
    src: "/logo-wordmark.png",
    width: 240,
    height: 80,
    className: "h-11 w-auto max-w-[14rem] md:h-12 md:max-w-[15rem]",
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
