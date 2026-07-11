"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, Variants } from "framer-motion";
import { X, HelpCircle, Lightbulb, Activity, Cpu, Shield, HelpCircle as HelpIcon, Layers, FileText, Code, HeartPulse, Sparkles } from "lucide-react";

// Floating neural network cellular nodes in the background
const NeuralNetworkBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Red & Blue healthcare gradient lighting orbs */}
      <motion.div
        className="absolute rounded-full bg-blue-600/5 blur-[80px]"
        style={{ width: 250, height: 250, left: "20%", top: "25%" }}
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full bg-red-500/5 blur-[80px]"
        style={{ width: 300, height: 300, right: "15%", bottom: "20%" }}
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating Network Synapses */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`node-${i}`}
          className="absolute bg-blue-500/10 rounded-full border border-blue-400/20 flex items-center justify-center p-2"
          style={{
            left: `${15 + i * 14}%`,
            top: `${10 + (i % 3) * 22}%`,
          }}
          animate={{
            y: [0, Math.random() * 20 - 10, 0],
            scale: [0.9, 1.1, 0.9],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: Math.random() * 6 + 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        </motion.div>
      ))}
    </div>
  );
};

// Title split reveal
function SkinScoutTitleReveal() {
  const letters = Array.from("SkinScout");
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
      className="text-5xl sm:text-7xl font-bebas tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-rose-450 to-red-400 uppercase select-none leading-none"
    >
      {letters.map((char, index) => (
        <motion.span variants={child} key={index}>
          {char}
        </motion.span>
      ))}
    </motion.h3>
  );
}

export default function SkinScoutModal({ onClose }: { onClose: () => void }) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const coreFeatures = [
    { title: "AI Skin Classification", desc: "Predicts possible skin conditions utilizing high-accuracy convolutional model fine-tuning." },
    { title: "Confidence Scoring", desc: "Computes prediction certainty levels based on neural classification values." },
    { title: "Intelligent Medical Chatbot", desc: "Explainable LLM chatbot assistant answering client questions based on prediction contexts." },
    { title: "Image Upload & Analysis", desc: "Drag-and-drop dashboard supporting image preprocessing and live pipeline predictions." },
    { title: "Educational Disease Info", desc: "Comprehensive lookup references discussing lesion history, properties, and awareness factors." },
    { title: "Disclaimer System", desc: "Strict medical disclaimer warning modals advising users to consult professional physicians." }
  ];

  const techStack = [
    "Python", "Flask", "React", "ResNet18", "HAM10000 Dataset", "Tailwind CSS", "Groq API", "REST APIs"
  ];

  const challenges = [
    "Dataset imbalance management",
    "Image compression and preprocessing",
    "Model size and accuracy optimization",
    "Minimizing prediction api latency",
    "Responsible AI medical communication",
    "Ensuring safety and disclaimer thresholds"
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
        className="glass-panel-heavy w-full max-w-4xl rounded-3xl border border-blue-500/15 overflow-hidden shadow-2xl relative bg-[#09090b]/80"
      >
        <NeuralNetworkBackground />

        {/* Sticky Top Header Navigation */}
        <div className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-[#09090b]/85 border-b border-slate-800/40 backdrop-blur-md">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[9px] font-mono tracking-widest bg-blue-600/25 border border-blue-500/30 text-blue-300 px-3 py-1 rounded-full uppercase">
              AI + HEALTHCARE
            </span>
            <span className="text-[9px] font-mono tracking-wider text-cyan-400 font-bold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-ping" />
              <span>Research Project</span>
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-900 border border-slate-800 hover:bg-blue-600/20 hover:border-blue-500/40 hover:text-white text-slate-400 transition-colors duration-300 cursor-pointer shadow-[0_0_10px_rgba(0,0,0,0.5)]"
            aria-label="Close modal"
          >
            <X size={16} />
          </button>
        </div>

        {/* Hero Section Header */}
        <div className="p-8 md:p-12 flex flex-col items-center gap-8 relative z-10 border-b border-slate-800/40">
          <div className="flex flex-col items-center text-center gap-4 max-w-2xl">
            <SkinScoutTitleReveal />
            <h4 className="text-sm md:text-base font-space font-semibold text-slate-200 tracking-wide leading-relaxed mt-2">
              An AI-assisted skin analysis platform that combines computer vision with conversational AI to provide educational skin health insights through intelligent image classification.
            </h4>
            <p className="text-[10px] font-mono uppercase tracking-widest text-blue-400">
              Built using deep learning to demonstrate how AI can support early awareness and healthcare accessibility.
            </p>
          </div>

          {/* Action Trigger Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 z-20">
            <a
              href="https://github.com/0MadGaming0/SkinScout-Skin-Disease-Detector"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/40 text-xs font-mono tracking-wider text-slate-355 hover:text-white transition-all duration-300 cursor-pointer shadow-[0_4px_15px_rgba(0,0,0,0.3)] hover:scale-102"
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
            className="glass-card p-6 rounded-2xl border border-blue-500/10 hover:border-blue-500/20 transition-all duration-300"
          >
            <div className="flex items-center gap-2 text-blue-400 font-space font-extrabold text-xs uppercase tracking-widest mb-3">
              <HelpCircle size={15} /> <span>The Problem</span>
            </div>
            <p className="text-xs sm:text-sm font-light text-slate-450 leading-relaxed flex flex-col gap-2">
              <span>Access to dermatological expertise can be limited due to cost, location, and availability.</span>
              <span>Many people ignore suspicious skin conditions because early consultations are not always easily accessible.</span>
              <span>AI has the potential to assist users by providing educational insights before they seek professional medical advice.</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-6 rounded-2xl border border-blue-500/10 hover:border-blue-500/20 transition-all duration-300"
          >
            <div className="flex items-center gap-2 text-blue-400 font-space font-extrabold text-xs uppercase tracking-widest mb-3">
              <Lightbulb size={15} /> <span>My Solution</span>
            </div>
            <p className="text-xs sm:text-sm font-light text-slate-455 leading-relaxed">
              Developed an end-to-end AI platform capable of analyzing skin lesion images using a deep learning model trained on the HAM10000 dataset. The platform combines AI image classification with an intelligent chatbot that explains predictions while emphasizing that professional medical consultation is always recommended.
            </p>
          </motion.div>
        </div>

        {/* Feature Cards Grid */}
        <div className="p-8 md:p-12 flex flex-col gap-8 relative z-10 border-b border-slate-800/40">
          <div className="flex flex-col gap-1.5 items-center text-center">
            <span className="text-[10px] font-mono tracking-[0.3em] text-blue-500 uppercase">Engine Capabilities</span>
            <h4 className="text-xl md:text-2xl font-bebas tracking-wider text-white">Platform Features</h4>
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
                className="glass-card p-5 rounded-2xl border border-slate-800/50 hover:border-blue-500/20 flex flex-col gap-2 transition-colors duration-300"
              >
                <div className="p-2 w-8 h-8 rounded-xl bg-blue-955/20 border border-blue-500/15 text-blue-400 flex items-center justify-center">
                  <HeartPulse size={14} className="animate-pulse" />
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
                  whileHover={{ scale: 1.08, y: -1, borderColor: "rgba(59,130,246,0.3)" }}
                  className="text-[9px] font-mono px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-300 hover:border-blue-500/20 transition-all duration-300 select-none cursor-default"
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
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0 animate-pulse" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Lessons & Impact Footer details */}
        <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 bg-gradient-to-t from-blue-955/10 to-transparent">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-mono tracking-widest text-blue-500 uppercase font-bold">Key Learnings</span>
            <p className="text-xs sm:text-sm font-light text-slate-350 leading-relaxed">
              {`This project deepened my understanding of deep learning, computer vision, AI model deployment, backend integration, API development, and designing responsible AI experiences for healthcare applications.`}
            </p>
          </div>

          <div className="flex flex-col gap-2 md:border-l md:border-slate-800/60 md:pl-8">
            <span className="text-[10px] font-mono tracking-widest text-blue-500 uppercase font-bold">Project Impact</span>
            <p className="text-xs sm:text-sm font-light text-slate-350 leading-relaxed">
              {`SkinScout demonstrates how artificial intelligence can support healthcare by making educational skin analysis more accessible while encouraging users to seek professional medical advice when necessary.`}
            </p>
          </div>
        </div>

      </motion.div>
    </motion.div>
  );
}
