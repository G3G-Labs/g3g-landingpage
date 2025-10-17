"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionTitleProps {
  title: string;
  description: string;
  icon?: ReactNode;
}

export function SectionTitle({ title, description, icon }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="max-w-3xl mx-auto text-center mb-12 sm:mb-16"
    >
      {icon && (
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500/10 to-emerald-400/10 border border-white/10 mb-6">
          {icon}
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">{title}</h2>
      <p className="text-base sm:text-lg text-white/70 leading-relaxed px-4">{description}</p>
    </motion.div>
  );
}
