"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

export default function HangingLightBulb() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";
  const [isPulling, setIsPulling] = useState(false);

  const handleClick = () => {
    setIsPulling(true);
    toggleTheme();
    setTimeout(() => setIsPulling(false), 400);
  };

  return (
    <div className="fixed top-0 right-6 sm:right-16 md:right-24 z-[60] select-none pointer-events-auto">
      <motion.div
        className="flex flex-col items-center cursor-pointer group origin-top"
        onClick={handleClick}
        style={{ transformOrigin: "top center" }}
        animate={
          isPulling
            ? { y: [0, 22, -4, 0], rotate: [0, -12, 10, -5, 0] }
            : { rotate: [-3, 3, -3] }
        }
        transition={
          isPulling
            ? { duration: 0.5, ease: "easeOut" }
            : { duration: 4.5, repeat: Infinity, ease: "easeInOut" }
        }
        whileHover={{ scale: 1.05 }}
      >
        {/* Hanging Wire Cord */}
        <div className={`w-[2px] h-16 sm:h-20 transition-colors duration-500 ${
          isLight ? "bg-slate-400" : "bg-slate-600 group-hover:bg-amber-400/80"
        }`} />

        {/* Socket Fixture */}
        <div className={`w-3.5 h-3 rounded-t-sm transition-colors duration-500 ${
          isLight ? "bg-slate-500 border border-slate-400" : "bg-slate-700 border border-slate-600"
        }`} />
        <div className={`w-4.5 h-1.5 transition-colors duration-500 ${
          isLight ? "bg-slate-600" : "bg-slate-800"
        }`} />

        {/* Bulb & Glow Container */}
        <div className="relative flex items-center justify-center -mt-0.5">
          {/* Ambient Glow Rays (Light Mode active) */}
          {isLight && (
            <>
              {/* Radial Light Halo */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="absolute w-40 h-40 rounded-full bg-amber-300/25 blur-2xl pointer-events-none -z-10"
              />
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="absolute w-20 h-20 rounded-full bg-amber-400/40 blur-md pointer-events-none -z-10"
              />

              {/* Light Cone Ray Beam */}
              <div className="absolute top-6 w-32 h-44 bg-gradient-to-b from-amber-300/20 via-amber-200/5 to-transparent blur-md pointer-events-none -z-10 [clip-path:polygon(40%_0%,60%_0%,100%_100%,0%_100%)]" />
            </>
          )}

          {/* Bulb SVG Icon (Flipped 180deg so socket cap connects to cord and glass bulb faces downwards) */}
          <svg
            width="32"
            height="42"
            viewBox="0 0 32 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`rotate-180 transition-all duration-500 ${
              isLight
                ? "drop-shadow-[0_0_18px_rgba(251,191,36,0.95)] drop-shadow-[0_0_35px_rgba(245,158,11,0.6)]"
                : "drop-shadow-[0_0_6px_rgba(255,255,255,0.15)] group-hover:drop-shadow-[0_0_12px_rgba(251,191,36,0.5)]"
            }`}
          >
            {/* Outer Glass Shell */}
            <path
              d="M16 2C9.37258 2 4 7.37258 4 14C4 18.5204 6.50532 22.4564 10.2173 24.5126C11.3129 25.1197 12 26.2736 12 27.5273V30C12 31.1046 12.8954 32 14 32H18 C19.1046 32 20 31.1046 20 30V27.5273C20 26.2736 20.6871 25.1197 21.7827 24.5126C25.4947 22.4564 28 18.5204 28 14C28 7.37258 22.6274 2 16 2Z"
              fill={isLight ? "url(#amber-glow)" : "rgba(30, 41, 59, 0.75)"}
              stroke={isLight ? "#F59E0B" : "#64748B"}
              strokeWidth="1.5"
            />

            {/* Filament Lines */}
            <path
              d="M12 20L14 13L16 17L18 13L20 20"
              stroke={isLight ? "#FEF08A" : "#475569"}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-colors duration-500"
            />

            {/* Bottom Metallic Contacts */}
            <rect x="13" y="32" width="6" height="2" rx="1" fill={isLight ? "#D97706" : "#334155"} />
            <rect x="14" y="35" width="4" height="2" rx="1" fill={isLight ? "#B45309" : "#1E293B"} />

            {/* SVG Gradients for Glowing Bulb */}
            <defs>
              <radialGradient id="amber-glow" cx="50%" cy="40%" r="60%">
                <stop offset="0%" stopColor="#FFFBEB" />
                <stop offset="40%" stopColor="#FDE047" />
                <stop offset="80%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#D97706" />
              </radialGradient>
            </defs>
          </svg>

          {/* Interactive Pull Tooltip Pill */}
          <div className="absolute top-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap bg-slate-900/90 text-[9px] font-mono text-amber-300 px-2 py-0.5 rounded-full border border-amber-500/30 shadow-lg">
            {isLight ? "PULL FOR DARK MODE" : "PULL FOR LIGHT MODE"}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
