import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import React from "react";
import { Button } from "./Button";
import { ProjectCarousel } from "./ProjectCard";
import { SectionTitle } from "./SectionTitle";

import Azapy from "@/../public/azapy.png";
import ClubeGenius from "@/../public/clubegenius.png";
import Plannering from "@/../public/plannering.png";
import Provale from "@/../public/provale.png";

export default function Projects() {
  const projects = [
    {
      title: "Provale",
      category: "Proteção veicular",
      image: Provale,
      description: "Sistema integrado de atendimento via WhatsApp com automação e gestão de conversas em tempo real",
      link: "https://www.provalepv.com.br/",
    },
    {
      title: "Azapy",
      category: "Comunicação",
      image: Azapy,
      description: "Sistema integrado de atendimento via WhatsApp com automação e gestão de conversas em tempo real",
      link: "https://www.azapy.com.br/",
    },
    {
      title: "Plannering",
      category: "Educação",
      image: Plannering,
      description:
        "Plataforma completa para gestão escolar com planejamento de aulas, notas e comunicação escola-família",
      link: "https://www.plannering.site/",
    },
    {
      title: "Clube Genius",
      category: "Gestão Esportiva",
      image: ClubeGenius,
      description: "Sistema de administração para clubes esportivos com controle de membros, eventos e finanças",
      link: "https://www.clubegenius.com.br/",
    },
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionTitle
          title="Projetos Recentes"
          description="Confira alguns dos projetos que desenvolvemos. Do MVP à versão completa, ajudamos empresas a crescer com tecnologia."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <ProjectCarousel projects={projects} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-center"
        >
          <Button href="#contact" variant="secondary">
            Quero um orçamento gratuito
            <ArrowRightIcon className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
