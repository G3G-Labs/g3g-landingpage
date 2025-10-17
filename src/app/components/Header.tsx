"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Logo from "@/../public/g3g-logo.png";

interface HeaderProps {
  activeSection: string;
  menuItems: {
    id: string;
    label: string;
  }[];
}

export function Header({ activeSection, menuItems }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 w-full z-40 transition-all duration-500 ${
        !headerInView ? "bg-[#2a2a2a]/90 backdrop-blur-md border-b border-white/10" : "bg-[#2a2a2a]/50 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-5">
        <nav className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <a href="#" className="flex gap-4 items-center hover:scale-95 transition-transform duration-300">
              <Image src={Logo} alt="Logo" width={35} height={100} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center gap-6 lg:gap-8"
          >
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-sm font-medium transition-all duration-300 relative ${
                  activeSection === item.id ? "text-sky-500" : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-sky-500 to-emerald-400"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden md:block"
          >
            <a
              href="#contact"
              className="bg-gradient-to-bl flex items-center px-6 py-2 rounded-xl gap-3 font-semibold  to-emerald-400 from-sky-500/60 text-white"
            >
              Fale Conosco
              <ArrowRightIcon className="w-4 h-4" />
            </a>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </nav>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#1f1f1f] border-t border-white/10"
          >
            <div className="container mx-auto px-4 sm:px-6 py-6 flex flex-col gap-4">
              {menuItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`text-base py-2 transition-colors ${
                    activeSection === item.id ? "text-sky-500" : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="bg-sky-500 hover:bg-sky-600 px-5 py-3 rounded-lg text-center text-base font-medium transition-all duration-300 mt-2 shadow-lg shadow-sky-500/20"
              >
                Fale Conosco
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
