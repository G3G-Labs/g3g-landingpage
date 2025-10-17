import { LinkIcon } from "@heroicons/react/16/solid";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 md:py-32 w-full relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(52,211,153,0.1),transparent_80%)]"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 mb-6">
              <EnvelopeIcon className="w-6 h-6 text-emerald-400" />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Vamos construir juntos?</h2>

            <p className="text-base sm:text-lg text-white/70 mb-8">
              Conte-nos sobre seu projeto. Responderemos em até 24 horas com uma proposta personalizada e sem
              compromisso.
            </p>

            <div className="w-full flex flex-col md:flex-row gap-4 justify-center items-center">
              <motion.a
                href="https://www.linkedin.com/company/g3g-labs"
                target="_blank"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-start gap-4 bg-white/10 hover:bg-white/15 px-6 py-4 rounded-xl transition-colors backdrop-blur-sm border border-white/10 hover:border-white/20"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-sky-500 to-emerald-400 flex items-center justify-center flex-shrink-0">
                  <LinkIcon className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-white/50 mb-1">LinkedIn</div>
                  <h1 className="text-white/90 font-medium">@g3glabs</h1>
                </div>
              </motion.a>
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-start gap-4 bg-white/10 hover:bg-white/15 px-6 py-4 rounded-xl transition-colors backdrop-blur-sm border border-white/10 hover:border-white/20"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-sky-500 to-emerald-400 flex items-center justify-center flex-shrink-0">
                  <EnvelopeIcon className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-white/50 mb-1">Email</div>
                  <div className="text-white/90 font-medium">g3glabs@gmail.com</div>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
