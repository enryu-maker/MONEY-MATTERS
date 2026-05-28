"use client";

import { motion, type Variants } from "framer-motion";
import { fadeIn, fadeLeft, fadeRight, fadeUp, scaleIn, viewport } from "@/lib/motion";

const variants = {
  fadeUp,
  fadeIn,
  fadeLeft,
  fadeRight,
  scaleIn,
} as const satisfies Record<string, Variants>;

type AnimateInProps = {
  children: React.ReactNode;
  className?: string;
  variant?: keyof typeof variants;
  delay?: number;
  as?: "div" | "section" | "article" | "ul";
};

export function AnimateIn({
  children,
  className,
  variant = "fadeUp",
  delay = 0,
  as = "div",
}: AnimateInProps) {
  const Component = motion[as];

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={variants[variant]}
      transition={{ delay }}
      className={className}
    >
      {children}
    </Component>
  );
}
