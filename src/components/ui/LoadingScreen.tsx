"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const duration = 2000; // 2 seconds total loading
    const intervalTime = 20;
    const increment = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 800); // Wait for transition out
          }, 400);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          className="fixed inset-0 bg-[#080808] z-[99999] flex flex-col justify-between p-8 md:p-16 select-none"
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100vh", 
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
        >
          {/* Top Panel - Brand */}
          <div className="flex justify-between items-start w-full">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs tracking-[0.3em] font-mono text-cyan-400 font-bold"
            >
              PORTFOLIO // V2.0
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xs tracking-[0.3em] font-mono text-violet-400 font-bold"
            >
              EST. 2026
            </motion.div>
          </div>

          {/* Center Panel - Main Text */}
          <div className="flex flex-col justify-center items-center flex-grow">
            <div className="overflow-hidden mb-6">
              <motion.h1 
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1], delay: 0.2 }}
                className="text-4xl md:text-7xl font-space font-extrabold tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-violet-500"
              >
                M A D H A V
              </motion.h1>
            </div>
            
            <div className="overflow-hidden h-6">
              <motion.p
                initial={{ y: 40 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-xs md:text-sm font-mono tracking-[0.5em] text-slate-400 uppercase"
              >
                Front-End Developer
              </motion.p>
            </div>
          </div>

          {/* Bottom Panel - Loading Progress */}
          <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col gap-2 flex-grow max-w-lg">
              <div className="flex justify-between items-center text-xs font-mono text-slate-400">
                <span>INITIALIZING ENGINE</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="h-[2px] bg-slate-800 w-full rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-cyan-500 to-violet-600"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
            
            <div className="text-right font-mono text-[9px] leading-relaxed text-slate-500 uppercase hidden md:block">
              <div>SYS.LOC: PRESET_ENV</div>
              <div>R3F_GL_CAPS: ENABLED</div>
              <div>SYS.STATUS: PROT_READY</div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
