"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  variant: "primary" | "secondary";
  children: ReactNode;
  className?: string;
}

export function Button({ href, variant, children, className = "" }: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300";

  const variantStyles = {
    primary:
      "bg-gradient-to-bl  to-emerald-400 from-sky-500/60 text-white shadow-lg shadow-sky-500/20 hover:shadow-sky-500/30",
    secondary: "bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 backdrop-blur-sm",
  };

  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </motion.a>
  );
}
