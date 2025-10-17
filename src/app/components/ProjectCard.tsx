"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface Project {
  title: string;
  link: string;
  category: string;
  description: string;
  image: string | StaticImport;
}

interface ProjectCarouselProps {
  projects: Project[];
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const projectPairs = useMemo(() => {
    const pairs = [];
    for (let i = 0; i < projects.length; i += 2) {
      if (i + 1 >= projects.length) {
        pairs.push([projects[i]]);
      } else {
        pairs.push([projects[i], projects[i + 1]]);
      }
    }
    return pairs;
  }, [projects]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectPairs.length);
  }, [projectPairs.length]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projectPairs.length) % projectPairs.length);
  }, [projectPairs.length]);

  useEffect(() => {
    if (!isPaused && projectPairs.length > 1) {
      const interval = setInterval(nextSlide, 7000);
      return () => clearInterval(interval);
    }
  }, [isPaused, nextSlide, projectPairs.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <div
      className="relative overflow-hidden rounded-2xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="aspect-[16/9] sm:aspect-[20/20] md:aspect-[30/9] relative w-full">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
          >
            {projectPairs[currentIndex].map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative h-full rounded-2xl border border-white/10 overflow-hidden group hover:border-sky-500/50 hover:shadow-xl hover:shadow-sky-500/20 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#2a2a2a]/95 via-[#2a2a2a]/70 to-[#2a2a2a]/20 z-10 group-hover:from-[#2a2a2a]/98 transition-all duration-500"></div>

                <Image
                  src={project.image}
                  fill
                  priority
                  alt={project.title}
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                <div className="absolute top-4 left-4 z-20">
                  <span className="inline-flex items-center px-3 py-1 mt-8 rounded-full text-xs font-medium bg-sky-500/30 text-white border border-sky-500/30 backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-20 transform group-hover:translate-y-[-4px] transition-transform duration-300">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 group-hover:text-sky-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-white/70 mb-4 text-xs sm:text-sm md:text-base line-clamp-2 group-hover:text-white/90 transition-colors duration-300">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-white bg-gradient-to-r from-sky-500/20 to-emerald-400/20 hover:from-sky-500/30 hover:to-emerald-400/30 px-4 py-2 rounded-lg backdrop-blur-sm transition-all duration-300 border border-sky-500/30 hover:border-emerald-400/50 group/btn"
                  >
                    Ver projeto
                    <ArrowRightIcon className="w-3 sm:w-3.5 h-3 sm:h-3.5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {projectPairs.length > 1 && (
          <>
            <motion.button
              onClick={prevSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-[#2a2a2a]/90 backdrop-blur-md text-white hover:bg-gradient-to-r hover:from-sky-500 hover:to-emerald-400 transition-all duration-300 border border-white/20 hover:border-white/40 shadow-lg hover:shadow-sky-500/50"
              aria-label="Slide anterior"
            >
              <ArrowLeftIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>

            <motion.button
              onClick={nextSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-[#2a2a2a]/90 backdrop-blur-md text-white hover:bg-gradient-to-r hover:from-sky-500 hover:to-emerald-400 transition-all duration-300 border border-white/20 hover:border-white/40 shadow-lg hover:shadow-emerald-400/50"
              aria-label="Próximo slide"
            >
              <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
          </>
        )}

        {projectPairs.length > 1 && (
          <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-[#2a2a2a]/60 backdrop-blur-md px-3 py-2 rounded-full border border-white/10">
            {projectPairs.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-6 h-2 bg-gradient-to-r from-sky-500 to-emerald-400"
                    : "w-2 h-2 bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Ir para slide ${index + 1}`}
                aria-current={index === currentIndex ? "true" : "false"}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
