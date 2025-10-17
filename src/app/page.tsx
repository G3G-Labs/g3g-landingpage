"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";

import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Projects from "./components/Projects";
import About from "./components/About";

export default function Page() {
  const [activeSection, setActiveSection] = useState("home");
  const { scrollYProgress } = useScroll();

  const progressBarScaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const sectionId = section.getAttribute("id");
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight && sectionId) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { id: "home", label: "Início" },
    { id: "about", label: "Sobre" },
    { id: "services", label: "Serviços" },
    { id: "projects", label: "Projetos" },
    { id: "contact", label: "Contato" },
  ];

  return (
    <div className="bg-[#2a2a2a] text-white overflow-x-hidden">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 via-emerald-400 to-yellow-500 z-50 origin-left"
        style={{ scaleX: progressBarScaleX }}
      />
      <Header activeSection={activeSection} menuItems={menuItems} />
      <Hero />
      <About />
      <Service />
      <Projects />
      <Contact />
      <Footer menuItems={menuItems} />
    </div>
  );
}
