import { LightBulbIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import React from "react";
import { Button } from "./Button";
import { SectionTitle } from "./SectionTitle";

export default function About() {
  const stats = [
    { value: "100%", label: "Satisfação dos Clientes" },
    { value: "10+", label: "Projetos Entregues" },
    { value: "2 anos", label: "de Mercado" },
    { value: "24/7", label: "Suporte Técnico" },
  ];

  return (
    <section id="about" className="relative py-16 sm:py-20 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionTitle
          title="Sobre a G3G Labs"
          description="Somos especialistas em criar micro-SaaS e soluções digitais sob medida. Combinamos expertise técnica com visão de produto para desenvolver aplicações que resolvem problemas reais e geram resultados mensuráveis."
          icon={<LightBulbIcon className="w-6 h-6 text-emerald-400" />}
        />

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Nossa filosofia</h3>
            <p className="text-sm sm:text-base text-white/70 mb-4 sm:mb-6">
              Acreditamos que tecnologia deve impulsionar negócios, não complicá-los. Por isso, desenvolvemos soluções
              práticas, escaláveis e focadas em resultados reais. Código limpo, entregas rápidas e comunicação
              transparente são pilares do nosso trabalho.
            </p>

            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {[
                "Metodologia ágil com entregas iterativas",
                "Código limpo, testado e documentado",
                "Design centrado no usuário (UX/UI)",
                "Arquitetura escalável e performática",
                "Suporte contínuo e manutenção evolutiva",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-sky-500 to-emerald-400 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base text-white/80">{item}</span>
                </motion.div>
              ))}
            </div>

            <Button href="#services" variant="secondary">
              Nossos serviços
              <ArrowRightIcon className="w-4 h-4" />
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm"
          >
            <div className="grid grid-cols-2 gap-6 sm:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="text-center p-3 sm:p-4"
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-emerald-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-white/60">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-6 sm:mt-8 border-t border-white/10 pt-6"
            >
              <div className="text-base sm:text-lg font-medium mb-3">Clientes que confiam</div>
              <div className="flex flex-wrap gap-4 sm:gap-6 justify-around">
                {["Startups", "Educação", "E-commerce", "Saúde"].map((client, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="text-xs sm:text-sm text-white/40 font-medium"
                  >
                    {client}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
