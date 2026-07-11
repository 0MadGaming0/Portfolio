"use client";

import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/lib/data";

export default function Vision() {
  const words = PERSONAL_INFO.vision.split(" ");

  // Container variants to stagger word fades
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  // Individual word animation
  const wordVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section
      id="vision"
      className="relative min-h-[70vh] bg-[#080808] flex items-center justify-center py-24 md:py-32 px-4 md:px-8 border-b border-violet-950/20 overflow-hidden"
    >
      {/* Background shifting gradient mesh */}
      <div className="absolute inset-0 bg-radial-gradient from-violet-950/10 via-[#080808]/80 to-[#080808] pointer-events-none" />
      <div className="absolute top-[10%] left-[20%] w-[350px] h-[350px] bg-violet-600/5 rounded-full blur-[110px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-[10%] right-[20%] w-[350px] h-[350px] bg-cyan-600/5 rounded-full blur-[110px] animate-pulse-slow pointer-events-none" />

      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-1 items-center"
        >
          <span className="text-xs font-mono tracking-[0.3em] text-cyan-400 uppercase">
            Chapter 7 — Vision
          </span>
        </motion.div>

        {/* Large Typographic Word Reveal */}
        <motion.h2
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center font-space text-3xl md:text-5xl font-extrabold tracking-tight leading-normal md:leading-relaxed max-w-3xl"
        >
          {words.map((word, i) => {
            // Highlight specific words (experiences, useful, beautiful, accessible)
            const cleanWord = word.replace(/[.,"—]/g, "");
            const isHighlighted = ["experiences", "useful", "beautiful", "accessible"].includes(cleanWord.toLowerCase());
            
            return (
              <motion.span
                key={word + i}
                variants={wordVariants}
                className={`inline-block mr-3 ${
                  isHighlighted
                    ? "bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-400 font-black"
                    : "text-slate-300"
                }`}
              >
                {word}
              </motion.span>
            );
          })}
        </motion.h2>
      </div>
    </section>
  );
}
