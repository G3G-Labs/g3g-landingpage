"use client";

import Logo from "@/../public/g3g-logo.png";
import { ArrowUpIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

interface FooterProps {
  menuItems: {
    id: string;
    label: string;
  }[];
}

export function Footer({ menuItems }: FooterProps) {
  return (
    <footer className="py-12 border-t border-white/10 bg-[#1f1f1f] relative z-10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-center items-center md:justify-between gap-8 mb-12">
          <div className="flex flex-col gap-3 items-center md:items-start">
            <a href="#" className="flex items-center hover:scale-95 transition-transform duration-300 w-fit">
              <Image src={Logo} alt="Logo" width={35} height={35} />
            </a>
            <p className="text-sm sm:text-base text-white/70 max-w-xs">G3G Labs - Desenvolvimento de Software</p>
          </div>

          <div className="flex flex-wrap gap-4 sm:gap-6 ">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm text-white/60 hover:text-sky-500 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs sm:text-sm text-white/40">
            © {new Date().getFullYear()} G3G Labs. Todos os direitos reservados.
          </div>

          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/company/g3g-labs/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm text-white/40 hover:text-sky-500 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/g3glabs/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm text-white/40 hover:text-emerald-400 transition-colors"
            >
              Instagram
            </a>
            <a
              href="#home"
              className="flex flex-row gap-2 items-center text-xs sm:text-sm text-white/40 hover:text-yellow-400 transition-colors"
            >
              Voltar ao topo <ArrowUpIcon width={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
