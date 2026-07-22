"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import ParticleBackground from "../three/ParticleBackground";
import MagneticButton from "../ui/MagneticButton";
import { ArrowDown, Mail } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/data";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const textIndex = useRef(0);
  const charIndex = useRef(0);
  const isDeleting = useRef(false);

  const roles = [
    "Front-End Developer",
    "AI App Builder",
    "UI/UX Enthusiast",
    "Open Source Contributor",
  ];

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[textIndex.current];
      if (isDeleting.current) {
        setTypedText(currentRole.substring(0, charIndex.current - 1));
        charIndex.current -= 1;
      } else {
        setTypedText(currentRole.substring(0, charIndex.current + 1));
        charIndex.current += 1;
      }
      let speed = isDeleting.current ? 35 : 65;
      if (!isDeleting.current && charIndex.current === currentRole.length) {
        speed = 2200;
        isDeleting.current = true;
      } else if (isDeleting.current && charIndex.current === 0) {
        isDeleting.current = false;
        textIndex.current = (textIndex.current + 1) % roles.length;
        speed = 450;
      }
      setTimeout(handleTyping, speed);
    };
    const timer = setTimeout(handleTyping, 900);
    return () => clearTimeout(timer);
  }, []);

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const bgNameY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-end overflow-hidden bg-[#080808]"
    >
      {/* 3D Particle Background */}
      <ParticleBackground />

      {/* Mouse radial glow */}
      <div
        className="absolute inset-0 pointer-events-none z-0 hidden md:block"
        style={{
          background: `radial-gradient(700px circle at ${mousePos.x}px ${mousePos.y}px, rgba(239, 68, 68, 0.08), transparent 40%)`,
        }}
      />

      {/* ─── LARGE BACKGROUND NAME ─── */}
      <motion.div
        style={{ y: bgNameY }}
        className="absolute inset-0 flex items-start justify-center pt-[15vh] md:pt-[10vh] pointer-events-none select-none z-0"
        aria-hidden="true"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 0.95, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-bebas text-[18vw] lg:text-[15.5vw] leading-none tracking-normal uppercase whitespace-nowrap select-none text-center w-full px-4"
          style={{
            background: "linear-gradient(180deg, #DC2626 0%, #450A0A 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textShadow: "none",
            filter: "drop-shadow(0 0 80px rgba(220, 38, 38, 0.35))",
          }}
        >
          PORTFOLIO
        </motion.h1>
      </motion.div>

      {/* ─── CENTERED PHOTO ─── */}
      <motion.div
        style={{ y: photoY }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 pointer-events-none select-none"
      >
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="relative"
          style={{ width: "min(55vw, 420px)", aspectRatio: "3/4" }}
        >
          {/* Glow halo behind photo */}
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-violet-600/30 via-violet-600/10 to-transparent blur-3xl rounded-full" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#080808] via-transparent to-transparent z-20" />

          <Image
            src={PERSONAL_INFO.avatar}
            alt="Madhav profile photo"
            fill
            priority
            unoptimized
            className="object-cover object-[center_55%]"
          />
        </motion.div>
      </motion.div>

      {/* ─── BOTTOM FADE ─── */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#080808] to-transparent z-20 pointer-events-none" />

      {/* ─── CONTENT OVERLAY ─── */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="relative z-30 w-full pb-16 px-6 md:px-12"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">

          {/* Left — Role & intro */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-3"
          >
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-[10px] font-mono tracking-[0.3em] text-cyan-400 uppercase">
                Available for Hire
              </span>
            </div>

            <div>
              <p className="text-4xl md:text-5xl font-alex text-rose-200/90 select-none mb-0 leading-none">
                Hello, I&apos;m
              </p>
              <h2 
                className="text-5xl md:text-7xl lg:text-8xl font-bebas text-white leading-[0.85] tracking-wide uppercase select-none flex flex-col"
              >
                <span className="whitespace-nowrap">MADHAV</span>
                <span className="whitespace-nowrap">S PILLAI</span>
              </h2>
              <p className="text-[11px] font-mono font-bold uppercase tracking-widest text-violet-500 mt-2">
                Front-End Developer & UI Engineer
              </p>
            </div>

            <div className="h-6 flex items-center">
              <p className="text-xs font-mono text-cyan-400 tracking-wider flex items-center gap-1">
                <span>{typedText}</span>
                <span className="w-[2px] h-3.5 bg-cyan-400 inline-block animate-pulse" />
              </p>
            </div>

            <p className="text-[11px] text-slate-400 leading-relaxed max-w-xs font-light">
              {PERSONAL_INFO.tagline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-2.5 mt-2">
              <MagneticButton>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="cursor-pointer px-5 py-2.5 rounded-full text-[10px] font-mono tracking-widest bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white font-bold transition-all duration-300 shadow-[0_0_20px_rgba(239,68,68,0.3)] border border-violet-500/20"
                >
                  VIEW PROJECTS
                </button>
              </MagneticButton>

              <MagneticButton>
                <a
                  href="/resume"
                  className="cursor-pointer block px-5 py-2.5 rounded-full text-[10px] font-mono tracking-widest border border-slate-700 hover:border-violet-500 bg-[#080808]/40 text-slate-300 hover:text-white transition-all duration-300"
                >
                  DOWNLOAD RESUME
                </a>
              </MagneticButton>
            </div>
          </motion.div>

          {/* Center — spacer for photo */}
          <div className="hidden lg:block lg:col-span-4" />

          {/* Right — Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="lg:col-span-3 flex flex-col gap-5 lg:mb-4"
          >
            {/* Vertical Stats */}
            <div className="flex flex-col gap-4">
              {[
                { value: "3+", label: "Years Experience" },
                { value: "12+", label: "Projects Completed" },
                { value: "200+", label: "GitHub Commits" },
              ].map((s, idx) => (
                <div 
                  key={s.label} 
                  className="flex items-center gap-4 border-b border-slate-800/60 pb-3 last:border-0 last:pb-0"
                >
                  <span className="text-4xl font-bebas text-violet-500 tracking-wider min-w-[60px]">
                    {s.value}
                  </span>
                  <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest leading-snug">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* ─── FLOATING SOCIAL BAR (left) ─── */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 left-6 hidden md:flex flex-col gap-6 z-40 items-center"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" aria-label="GitHub"
          className="text-slate-400 hover:text-red-500 hover:scale-120 transition-all duration-300 cursor-pointer p-1.5 hover:bg-red-500/5 rounded-full border border-transparent hover:border-red-500/10 hover:shadow-[0_0_10px_rgba(239,68,68,0.15)]">
          <svg className="w-[19px] h-[19px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
        </a>
        <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"
          className="text-slate-400 hover:text-red-500 hover:scale-120 transition-all duration-300 cursor-pointer p-1.5 hover:bg-red-500/5 rounded-full border border-transparent hover:border-red-500/10 hover:shadow-[0_0_10px_rgba(239,68,68,0.15)]">
          <svg className="w-[19px] h-[19px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
        <a href={`mailto:${PERSONAL_INFO.email}`} aria-label="Email"
          className="text-slate-400 hover:text-red-500 hover:scale-120 transition-all duration-300 cursor-pointer p-1.5 hover:bg-red-500/5 rounded-full border border-transparent hover:border-red-500/10 hover:shadow-[0_0_10px_rgba(239,68,68,0.15)]">
          <Mail size={19} />
        </a>
        <div className="w-[1px] h-14 bg-gradient-to-b from-slate-700 via-slate-800 to-transparent self-center mt-2" />
      </motion.div>

      {/* ─── SCROLL INDICATOR ─── */}
      <motion.button
        className="absolute bottom-8 right-6 md:right-12 flex flex-col items-center gap-1.5 cursor-pointer z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        onClick={() => scrollToSection("about")}
        aria-label="Scroll to explore"
      >
        <span className="text-[9px] font-mono tracking-[0.25em] text-slate-500 uppercase [writing-mode:vertical-lr]">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={13} className="text-violet-400" />
        </motion.div>
      </motion.button>
    </section>
  );
}
