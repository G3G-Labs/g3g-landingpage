"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  color: string;
  index: number;
}

export function ServiceCard({ icon, title, description, color, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-sky-500/30 transition-all duration-300 group"
      whileHover={{ y: -5 }}
    >
      <div
        className={`bg-gradient-to-br ${color} w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
      >
        {icon}
      </div>

      <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{title}</h3>

      <p className="text-sm sm:text-base text-white/60 mb-6 leading-relaxed">{description}</p>

      <a
        href="#contact"
        className="inline-flex items-center text-sm font-medium text-sky-500 hover:text-emerald-400 transition-colors group"
      >
        Saiba mais
        <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </a>
    </motion.div>
  );
}
