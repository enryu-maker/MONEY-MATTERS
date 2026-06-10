import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
  size?: "header" | "footer";
};

const sizes = {
  header: {
    src: "/logo-wordmark.png",
    width: 480,
    height: 120,
    className:
      "block h-10 w-auto max-w-[11.5rem] object-contain object-center sm:max-w-[12.5rem] md:h-11 md:max-w-[14rem]",
  },
  footer: {
    src: "/logo-full.png",
    width: 400,
    height: 280,
    className: "h-14 w-auto max-w-[10rem] object-contain object-left sm:max-w-[11rem]",
  },
} as const;

export function Logo({ className = "", size = "header" }: LogoProps) {
  const { src, width, height, className: sizeClass } = sizes[size];

  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 items-center overflow-visible py-1 ${className}`}
      aria-label="Money Matters — Home"
    >
      <Image
        src={src}
        alt=""
        width={width}
        height={height}
        quality={100}
        className={sizeClass}
        priority={size === "header"}
        loading="eager"
        unoptimized
      />
    </Link>
  );
}
