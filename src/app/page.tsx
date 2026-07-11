"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import ExperienceSection from "@/components/sections/Experience";
import Achievements from "@/components/sections/Achievements";
import Vision from "@/components/sections/Vision";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import { Sparkles, Terminal, X } from "lucide-react";

export default function Home() {
  const [konamiUnlocked, setKonamiUnlocked] = useState(false);

  useEffect(() => {
    // Konami code sequence: Up Up Down Down Left Right Left Right B A
    const konamiCode = [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
      "b",
      "a",
    ];
    let codeIndex = 0;

    const handleKeyDown = (e: KeyboardEvent) => {
      const requiredKey = konamiCode[codeIndex];
      if (e.key === requiredKey) {
        codeIndex++;
        if (codeIndex === konamiCode.length) {
          setKonamiUnlocked(true);
          codeIndex = 0; // Reset
        }
      } else {
        codeIndex = 0; // Reset index on wrong keypress
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main className="relative flex flex-col min-h-screen bg-[#080808] selection:bg-cyan-500/30 selection:text-white">
      {/* Chapter 1: Hero Intro */}
      <Hero />

      {/* Chapter 2 & 3: Narrative About & Journey Timeline */}
      <About />

      {/* Chapter 4: Skills Universe Constellation */}
      <Skills />

      {/* Chapter 5: Case Studies Projects Grid */}
      <Projects />

      {/* Chapter 6: Timeline connected Experience pathway */}
      <ExperienceSection />

      {/* Achievements metrics grids */}
      <Achievements />

      {/* Chapter 7: Typography Vision banner */}
      <Vision />

      {/* Chapter 8: Form Contact & Info Footer */}
      <Contact />
      <Footer />

      {/* Easter Egg Modal */}
      <AnimatePresence>
        {konamiUnlocked && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#080808]/95 backdrop-blur-2xl p-6"
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="glass-panel-heavy p-8 max-w-md w-full rounded-3xl border border-cyan-500/40 relative shadow-[0_0_50px_rgba(6,182,212,0.3)] text-center flex flex-col items-center gap-6"
            >
              <button
                onClick={() => setKonamiUnlocked(false)}
                className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-800 hover:bg-red-500/20 text-slate-400 hover:text-red-400 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X size={16} />
              </button>

              <div className="p-4 bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 rounded-full animate-bounce">
                <Sparkles size={32} />
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-space font-extrabold text-white tracking-wider uppercase glow-text-cyan">
                  Easter Egg Unlocked!
                </h3>
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">
                  Konami code accepted.
                </span>
              </div>

              <div className="bg-[#080808]/60 border border-slate-800 rounded-xl p-4 w-full text-left font-mono text-[10px] text-slate-400 flex gap-2.5 items-start">
                <Terminal size={14} className="text-violet-400 shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <div>// DUMPING SESSION VARIABLES...</div>
                  <div>DEV_MODE: TRUE</div>
                  <div>PASSCODE: ACC_ACCEPTED</div>
                  <div>RECRUITER_PRIORITY: MAX</div>
                  <div className="text-cyan-300 font-bold mt-2">Hire Madhav! He pays attention to details.</div>
                </div>
              </div>

              <button
                onClick={() => setKonamiUnlocked(false)}
                className="w-full py-3 rounded-xl border border-cyan-500/30 bg-cyan-500/10 hover:bg-cyan-500/20 text-xs font-mono tracking-widest text-cyan-400 hover:text-white font-bold transition-all duration-300 cursor-pointer shadow-[0_0_15px_rgba(6,182,212,0.1)]"
              >
                CLOSE TERMINAL
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
