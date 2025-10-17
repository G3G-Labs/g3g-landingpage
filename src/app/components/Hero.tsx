import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import React from "react";
import { Button } from "./Button";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-16">
      <div>
        <video
          src="/background.mp4"
          autoPlay
          loop
          preload="auto"
          controls={false}
          muted
          playsInline
          className="h-[91vh] sm:h-[91vh] md:h-[92vh]"
          style={{
            position: "absolute",
            top: 73,
            left: 0,
            filter: "brightness(0.5)",
            width: "100vw",

            objectFit: "cover",
          }}
        />
      </div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_rgba(6,182,212,0.15),transparent_70%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_rgba(52,211,153,0.1),transparent_70%)]"></div>
        <div className="absolute bottom-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_rgba(522,211,153,0.1),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 z-10">
        <motion.div className="w-full max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-xs sm:text-sm font-medium text-sky-400 mb-6">
              Micro-SaaS Builders
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-6 px-4"
          >
            <span className="block">
              Projetos <br /> Desafiadores?
            </span>
            <span className="block mt-2">
              Entregamos <br />
              <span className="bg-gradient-to-br underline-offset-8 decoration-white underline decoration-1 decoration-wavy to-sky-500 via-emerald-400 bg-clip-text text-transparent from-yellow-500">
                RESULTADOS
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-white/70 mb-8 max-w-2xl mx-auto px-4"
          >
            Transformamos ideias em soluções digitais escaláveis. Desenvolvemos aplicações web, mobile e sistemas
            backend que geram valor real para seu negócio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center px-4"
          >
            <Button href="#contact" variant="primary">
              Iniciar projeto
              <ArrowRightIcon className="w-5 h-5" />
            </Button>

            <Button href="#services" variant="secondary">
              Conheça nossos serviços
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <motion.a
          href="#about"
          initial={{ opacity: 0, y: -10 }}
          animate={{
            opacity: 1,
            y: [0, 10, 0],
          }}
          transition={{
            opacity: { duration: 0.5, delay: 1 },
            y: {
              delay: 1,
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
            },
          }}
          className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-sky-500/50 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white/60"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </motion.a>
      </div>
    </section>
  );
}
