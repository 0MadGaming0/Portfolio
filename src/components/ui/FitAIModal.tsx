"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, Variants } from "framer-motion";
import { X, HelpCircle, Lightbulb, Dumbbell, Flame, Activity, Heart, Cpu, Award, Zap, Code, Layers, FileText, ExternalLink } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/data";

// Floating fitness themed backdrops
const FloatingFitnessParticles = () => {
  const particles = [
    { icon: <Dumbbell size={16} />, left: "10%", top: "15%" },
    { icon: <Flame size={16} />, left: "80%", top: "25%" },
    { icon: <Activity size={16} />, left: "15%", top: "65%" },
    { icon: <Heart size={16} />, left: "75%", top: "75%" },
    { icon: <Dumbbell size={16} />, left: "85%", top: "55%" },
    { icon: <Flame size={16} />, left: "5%", top: "45%" }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Red accent lighting orbs */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full bg-red-600/5 blur-[80px]"
          style={{
            width: Math.random() * 200 + 120,
            height: Math.random() * 200 + 120,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 50 - 25, 0],
            y: [0, Math.random() * 50 - 25, 0],
            scale: [1, 1.25, 1],
          }}
          transition={{
            duration: Math.random() * 12 + 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating vector icons */}
      {particles.map((p, idx) => (
        <motion.div
          key={`part-${idx}`}
          className="absolute text-red-500/10 hover:text-red-400/25 transition-colors duration-300 pointer-events-none"
          style={{ left: p.left, top: p.top }}
          animate={{
            y: [0, Math.random() * 30 - 15, 0],
            rotate: [0, Math.random() * 40 - 20, 0],
            opacity: [0.1, 0.25, 0.1]
          }}
          transition={{
            duration: Math.random() * 6 + 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: idx * 0.5
          }}
        >
          {p.icon}
        </motion.div>
      ))}
    </div>
  );
};

// Title split reveal
function FitAITitleReveal() {
  const letters = Array.from("FitAI");
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 15, stiffness: 180 },
    },
    hidden: {
      opacity: 0,
      y: 30,
      transition: { type: "spring", damping: 15, stiffness: 180 },
    },
  };

  return (
    <motion.h3
      variants={container}
      initial="hidden"
      animate="visible"
      className="text-5xl sm:text-7xl font-bebas tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-red-400 uppercase select-none leading-none"
    >
      {letters.map((char, index) => (
        <motion.span variants={child} key={index}>
          {char}
        </motion.span>
      ))}
    </motion.h3>
  );
}

export default function FitAIModal({ onClose }: { onClose: () => void }) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const coreFeatures = [
    { title: "AI Workout Generator", desc: "Instantly compile custom training templates matched to dynamic user health markers." },
    { title: "Personalized Plans", desc: "Intelligent workout routines that scale difficulty weights based on progress logs." },
    { title: "Nutrition Advice", desc: "Dynamic calorie recommendations, food breakdowns, and nutritional calculators." },
    { title: "Exercise Library", desc: "Comprehensive lookup references detailing correct forms, muscle focuses, and guidelines." },
    { title: "BMI Calculator", desc: "Fast weight index calculator tracking changes over time with visual indicators." },
    { title: "Progress Dashboard", desc: "Polished dashboard tracking historical metrics and workout consistency logs." }
  ];

  const techStack = [
    "React", "Next.js", "Flask", "Python", "MongoDB", "Tailwind CSS", "Groq API", "JWT Authentication", "REST APIs"
  ];

  const challenges = [
    "Building scalable authentication",
    "Designing an intuitive dashboard",
    "Integrating AI recommendations",
    "Managing user workout history",
    "Optimizing application performance",
    "Creating a responsive user experience"
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-[#080808]/95 backdrop-blur-2xl overflow-y-auto px-4 py-8 md:p-12 flex justify-center items-start cursor-default"
    >
      <motion.div
        ref={modalRef}
        initial={{ y: 80, scale: 0.96 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 80, scale: 0.96 }}
        transition={{ type: "spring", damping: 25, stiffness: 220 }}
        className="glass-panel-heavy w-full max-w-4xl rounded-3xl border border-red-500/15 overflow-hidden shadow-2xl relative bg-[#09090b]/80"
      >
        <FloatingFitnessParticles />

        {/* Sticky Header Top Navigation */}
        <div className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-[#09090b]/85 border-b border-slate-800/40 backdrop-blur-md">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[9px] font-mono tracking-widest bg-red-600/35 border border-red-500/40 text-red-300 px-3 py-1 rounded-full uppercase">
              AI + FITNESS
            </span>
            <span className="text-[9px] font-mono tracking-wider text-green-400 font-bold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping" />
              <span>Live Product</span>
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-900 border border-slate-800 hover:bg-red-600/20 hover:border-red-500/40 hover:text-white text-slate-400 transition-colors duration-300 cursor-pointer shadow-[0_0_10px_rgba(0,0,0,0.5)]"
            aria-label="Close modal"
          >
            <X size={16} />
          </button>
        </div>

        {/* Hero Section Header */}
        <div className="p-8 md:p-12 flex flex-col items-center gap-8 relative z-10 border-b border-slate-800/40">
          <div className="flex flex-col items-center text-center gap-4 max-w-2xl">
            <FitAITitleReveal />
            <h4 className="text-sm md:text-base font-space font-semibold text-slate-200 tracking-wide leading-relaxed mt-2">
              A next-generation AI-powered fitness platform that delivers personalized workouts, nutrition guidance, intelligent progress tracking, and exercise recommendations—all in one seamless experience.
            </h4>
            <p className="text-[11px] font-mono uppercase tracking-widest text-red-400">
              Designed to make professional fitness coaching accessible to everyone.
            </p>
          </div>

          {/* Action Trigger Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 z-20">
            <a
              href="https://fitai-go.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-xs font-mono tracking-wider text-white font-bold transition-all duration-300 cursor-pointer shadow-[0_0_15px_rgba(220,38,38,0.15)] hover:shadow-[0_0_25px_rgba(220,38,38,0.35)] hover:scale-102"
            >
              🚀 Launch FitAI
            </a>
            <a
              href="https://github.com/0MadGaming0/Fitness-App"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-red-500/40 text-xs font-mono tracking-wider text-slate-300 hover:text-white transition-all duration-300 cursor-pointer shadow-[0_4px_15px_rgba(0,0,0,0.3)] hover:scale-102"
            >
              <Code size={14} /> GitHub Repository
            </a>
          </div>
        </div>

        {/* Problem vs Solution Split */}
        <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 border-b border-slate-800/40">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-6 rounded-2xl border border-red-500/10 hover:border-red-500/20 transition-all duration-300"
          >
            <div className="flex items-center gap-2 text-red-500 font-space font-extrabold text-xs uppercase tracking-widest mb-3">
              <HelpCircle size={15} /> <span>The Problem</span>
            </div>
            <p className="text-xs sm:text-sm font-light text-slate-400 leading-relaxed">
              Most fitness platforms lock advanced features behind expensive subscriptions, making personalized workout planning, nutrition guidance, and long-term progress tracking inaccessible for students and beginners. Users are often forced to switch between multiple apps for workouts, calorie tracking, BMI calculation, and exercise references.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-6 rounded-2xl border border-red-500/10 hover:border-red-500/20 transition-all duration-300"
          >
            <div className="flex items-center gap-2 text-red-500 font-space font-extrabold text-xs uppercase tracking-widest mb-3">
              <Lightbulb size={15} /> <span>My Solution</span>
            </div>
            <p className="text-xs sm:text-sm font-light text-slate-400 leading-relaxed">
              Developed a complete AI-powered fitness ecosystem that combines personalized workout generation, nutrition recommendations, BMI tracking, exercise libraries, and user progress monitoring into a single modern application. The platform uses AI to recommend workouts based on user goals while providing an intuitive dashboard designed for long-term consistency.
            </p>
          </motion.div>
        </div>

        {/* Feature Cards Grid */}
        <div className="p-8 md:p-12 flex flex-col gap-8 relative z-10 border-b border-slate-800/40">
          <div className="flex flex-col gap-1.5 items-center text-center">
            <span className="text-[10px] font-mono tracking-[0.3em] text-red-500 uppercase">Ecosystem Core</span>
            <h4 className="text-xl md:text-2xl font-bebas tracking-wider text-white">Features Architecture</h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {coreFeatures.map((feat, index) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -5 }}
                className="glass-card p-5 rounded-2xl border border-slate-800/50 hover:border-red-500/20 flex flex-col gap-2 transition-colors duration-300"
              >
                <div className="p-2 w-8 h-8 rounded-xl bg-red-950/20 border border-red-500/15 text-red-400 flex items-center justify-center">
                  <Flame size={14} className="animate-pulse" />
                </div>
                <h5 className="text-[11px] font-space font-extrabold tracking-wider text-white uppercase mt-1">
                  {feat.title}
                </h5>
                <p className="text-[10px] font-light text-slate-400 leading-relaxed">
                  {feat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tech Stack & Challenges Grid */}
        <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10 border-b border-slate-800/40">
          {/* Tech Stack Chips */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="flex flex-col">
              <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">Tech Stack</span>
              <h4 className="text-lg font-bebas text-white mt-0.5 uppercase">Engine Architecture</h4>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-1">
              {techStack.map((tech) => (
                <motion.span 
                  key={tech} 
                  whileHover={{ scale: 1.08, y: -1, borderColor: "rgba(239,68,68,0.3)" }}
                  className="text-[9px] font-mono px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-400 hover:text-red-300 hover:border-red-500/20 transition-all duration-300 select-none cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Challenges list */}
          <div className="lg:col-span-6 flex flex-col gap-4 lg:border-l lg:border-slate-800/60 lg:pl-8">
            <div className="flex flex-col">
              <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">Challenges</span>
              <h4 className="text-lg font-bebas text-white mt-0.5 uppercase">Engineering Obstacles</h4>
            </div>
            <ul className="flex flex-col gap-2 mt-1">
              {challenges.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-[10px] sm:text-[11px] font-light text-slate-400 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0 animate-pulse" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Lessons & Impact Footer details */}
        <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 bg-gradient-to-t from-red-950/10 to-transparent">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-mono tracking-widest text-red-500 uppercase font-bold">Key Learnings</span>
            <p className="text-xs sm:text-sm font-light text-slate-350 leading-relaxed">
              {`Building FitAI strengthened my understanding of full-stack application architecture, authentication systems, AI integration, API development, database design, and creating production-ready user experiences.`}
            </p>
          </div>

          <div className="flex flex-col gap-2 md:border-l md:border-slate-800/60 md:pl-8">
            <span className="text-[10px] font-mono tracking-widest text-red-500 uppercase font-bold">Project Impact</span>
            <p className="text-xs sm:text-sm font-light text-slate-350 leading-relaxed">
              {`FitAI demonstrates how artificial intelligence can simplify fitness planning by replacing multiple standalone tools with one intelligent platform. The project focuses on accessibility, usability, and helping users stay consistent with their health goals.`}
            </p>
          </div>
        </div>

      </motion.div>
    </motion.div>
  );
}
