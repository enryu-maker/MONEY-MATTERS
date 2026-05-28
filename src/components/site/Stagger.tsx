"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewport } from "@/lib/motion";

type StaggerProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "ul";
};

export function Stagger({ children, className, as = "div" }: StaggerProps) {
  const Component = motion[as];
  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </Component>
  );
}

export function StaggerItem({
  children,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
}) {
  const Component = motion[as];
  return (
    <Component variants={fadeUp} className={className}>
      {children}
    </Component>
  );
}
