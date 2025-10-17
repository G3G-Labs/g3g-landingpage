import {
  ArrowRightIcon,
  CommandLineIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  WindowIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import React from "react";
import { Button } from "./Button";
import { SectionTitle } from "./SectionTitle";
import { ServiceCard } from "./ServiceCard";

const services = [
  {
    icon: <CommandLineIcon className="w-6 h-6" />,
    title: "Desenvolvimento Backend",
    description:
      "Criamos APIs RESTful e GraphQL robustas, microserviços escaláveis e sistemas de alta performance com Node.js, NestJS e arquiteturas modernas.",
    color: "from-emerald-400 to-emerald-500",
  },
  {
    icon: <WindowIcon className="w-6 h-6" />,
    title: "Aplicações Web",
    description:
      "Desenvolvemos interfaces modernas e responsivas com React, Next.js e TypeScript. Experiências digitais que convertem e encantam seus usuários.",
    color: "from-sky-500 to-sky-600",
  },
  {
    icon: <DevicePhoneMobileIcon className="w-6 h-6" />,
    title: "Apps Mobile",
    description:
      "Aplicativos nativos de alta performance para iOS e Android usando React Native. Uma base de código, duas plataformas.",
    color: "from-yellow-500 to-yellow-600",
  },
  {
    icon: <GlobeAltIcon className="w-6 h-6" />,
    title: "Cloud & DevOps",
    description:
      "Deploy automatizado, CI/CD, infraestrutura como código e monitoramento em cloud. Suas aplicações sempre disponíveis e escaláveis.",
    color: "from-sky-500 to-emerald-400",
  },
];

export default function Service() {
  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 bg-[#1f1f1f] relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(6,182,212,0.1),transparent_80%)]"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <SectionTitle
          title="Nossos Serviços"
          description="Oferecemos desenvolvimento full-stack completo, do backend à interface do usuário. Tecnologias modernas, código de qualidade e entregas dentro do prazo."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              index={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              color={service.color}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-12 sm:mt-16 p-6 sm:p-8 bg-gradient-to-r from-sky-500/10 to-emerald-400/10 rounded-2xl backdrop-blur-sm border border-sky-500/20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">Pronto para tirar sua ideia do papel?</h3>
              <p className="text-sm sm:text-base text-white/70">
                Agende uma conversa e vamos transformar seu projeto em realidade.
              </p>
            </div>
            <Button href="#contact" variant="primary" className="whitespace-nowrap w-full md:w-auto">
              Começar agora
              <ArrowRightIcon className="w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
