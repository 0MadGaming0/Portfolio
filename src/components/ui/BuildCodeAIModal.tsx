"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, Variants } from "framer-motion";
import { X, HelpCircle, Lightbulb, Terminal, Cpu, Award, Zap, Code, Star, GitBranch, Share2, Compass } from "lucide-react";

// Particle system helper inside modal
const ModalAmbientParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-blue-500/5 blur-[70px]"
          style={{
            width: Math.random() * 200 + 100,
            height: Math.random() * 200 + 100,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 60 - 30, 0],
            y: [0, Math.random() * 60 - 30, 0],
            scale: [1, 1.25, 1],
          }}
          transition={{
            duration: Math.random() * 12 + 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Simulated typing code code-block floating component
const FloatingCodeBlock = () => {
  const [lineIndex, setLineIndex] = useState(0);
  const codeLines = [
    "const mentor = new AICodingMentor({",
    "  model: 'langgraph-rag-agents',",
    "  personality: 'senior-engineer'",
    "});",
    "",
    "await mentor.reviewPR(pullRequest);",
    "// Output: 🚀 Looks ready to ship!"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLineIndex((prev) => (prev + 1) % (codeLines.length + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass-panel p-5 rounded-2xl border border-slate-800 text-[10px] sm:text-xs font-mono text-slate-300 w-full max-w-sm shadow-[0_20px_50px_rgba(30,58,138,0.15)] select-none">
      <div className="flex gap-1.5 mb-3 border-b border-slate-800/60 pb-2">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
      </div>
      <div className="flex flex-col gap-1 text-left min-h-[140px]">
        {codeLines.slice(0, lineIndex).map((line, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className={line.startsWith("//") ? "text-green-400" : line.includes("AICodingMentor") ? "text-blue-300" : "text-slate-400"}
          >
            {line}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Title split reveal
function GiantHeading({ text }: { text: string }) {
  const letters = Array.from(text);
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.04 },
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
      className="text-4xl sm:text-6xl md:text-7xl font-space font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400 tracking-tight leading-none uppercase select-none"
    >
      {letters.map((char, index) => (
        <motion.span variants={child} key={index}>
          {char}
        </motion.span>
      ))}
    </motion.h3>
  );
}

export default function BuildCodeAIModal({ onClose }: { onClose: () => void }) {
  const modalRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Disable scrolling behind modal
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const features = [
    { title: "AI Coding Mentor", icon: <Cpu size={16} />, desc: "An intelligent companion agent reviewing code and correcting syntax errors like a senior engineer." },
    { title: "Browser-based IDE", icon: <Terminal size={16} />, desc: "Full Monaco editor workspace running code containers directly inside client browser sandboxes." },
    { title: "GitHub Integration", icon: <GitBranch size={16} />, desc: "Auto-push project solutions, manage repositories, and create pull requests natively." },
    { title: "Portfolio Generation", icon: <Share2 size={16} />, desc: "Dynamically packages successfully deployed lessons into showcase portfolios for recruiters." },
    { title: "Gamification Metrics", icon: <Award size={16} />, desc: "Earn achievements, badges, and unlock challenges for every real-world project built." },
    { title: "Interview Prep", icon: <Compass size={16} />, desc: "Confront sandbox simulation challenges matching recruitment test templates at leading startups." },
  ];

  const techStack = [
    "React", "Next.js", "Node.js", "Python", "FastAPI",
    "MongoDB", "PostgreSQL", "Docker", "Redis",
    "WebSockets", "Groq / OpenAI", "LangGraph", "RAG", "GitHub API", "Monaco Editor"
  ];

  const futureAIFeatures = [
    "AI mentor that explains errors like a senior developer",
    "Generates personalized coding roadmaps",
    "Reviews pull requests",
    "Suggests improvements",
    "Tracks learning progress",
    "Adapts difficulty automatically",
    "Generates project ideas",
    "Helps contribute to open source"
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
        className="glass-panel-heavy w-full max-w-4xl rounded-3xl border border-blue-500/10 overflow-hidden shadow-2xl relative bg-[#09090b]/80"
      >
        <ModalAmbientParticles />

        {/* Top Header Sticky Bar */}
        <div className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-[#09090b]/85 border-b border-slate-800/40 backdrop-blur-md">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[9px] font-mono tracking-widest bg-blue-600/35 border border-blue-500/40 text-blue-300 px-3 py-1 rounded-full uppercase">
              EdTech + AI
            </span>
            <span className="text-[9px] font-mono tracking-wider text-cyan-400 animate-pulse font-bold">
              ● Currently Researching & Designing
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-900 border border-slate-800 hover:bg-blue-600/20 hover:border-blue-500/40 hover:text-white text-slate-400 transition-colors duration-300 cursor-pointer"
            aria-label="Close modal"
          >
            <X size={16} />
          </button>
        </div>

        {/* Hero Concept Launcher Layout */}
        <div className="p-8 md:p-12 flex flex-col items-center gap-12 relative z-10 border-b border-slate-800/40">
          <div className="flex flex-col items-center text-center gap-6 max-w-2xl">
            <GiantHeading text="BuildCode AI" />
            <h4 className="text-sm md:text-base font-space font-semibold text-slate-200 tracking-wide leading-relaxed">
              An AI-powered learning platform where students master programming by building real-world projects instead of watching endless tutorials.
            </h4>
            <p className="text-xs md:text-sm text-slate-400 font-light leading-relaxed">
              The platform combines personalized AI mentoring, interactive coding, project-based learning, and gamification to make learning software development engaging, practical, and completely free.
            </p>
          </div>

          {/* Floating code widget */}
          <FloatingCodeBlock />
        </div>

        {/* Problem vs Vision Cards Split Grid */}
        <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 border-b border-slate-800/40">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-6 rounded-2xl border border-red-500/10 hover:border-red-500/20 transition-all duration-300"
          >
            <div className="flex items-center gap-2 text-red-400 font-space font-extrabold text-xs uppercase tracking-widest mb-3">
              <HelpCircle size={15} /> <span>The Problem</span>
            </div>
            <p className="text-xs sm:text-sm font-light text-slate-400 leading-relaxed">
              Most coding platforms teach syntax instead of problem-solving. Learners spend hours watching videos but struggle to build real applications, contribute to GitHub, or prepare for technical interviews.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-6 rounded-2xl border border-blue-500/10 hover:border-blue-500/20 transition-all duration-300"
          >
            <div className="flex items-center gap-2 text-blue-400 font-space font-extrabold text-xs uppercase tracking-widest mb-3">
              <Lightbulb size={15} /> <span>My Vision</span>
            </div>
            <p className="text-xs sm:text-sm font-light text-slate-400 leading-relaxed">
              Create an immersive learning platform where users learn by building. Instead of lectures, every lesson results in a deployable project. The platform adapts to each learner using AI, explains mistakes like a mentor, generates personalized roadmaps, and encourages continuous learning through hands-on practice.
            </p>
          </motion.div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="p-8 md:p-12 flex flex-col gap-8 relative z-10 border-b border-slate-800/40">
          <div className="flex flex-col gap-1.5 items-center text-center">
            <span className="text-[10px] font-mono tracking-[0.3em] text-blue-500 uppercase">Interactive Systems</span>
            <h4 className="text-xl md:text-2xl font-bebas tracking-wider text-white">Core Features Overview</h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {features.map((feat, index) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -5 }}
                className="glass-card p-5 rounded-2xl border border-slate-800/50 hover:border-blue-500/20 flex flex-col gap-2.5 transition-colors duration-300"
              >
                <div className="p-2 w-8 h-8 rounded-xl bg-blue-950/20 border border-blue-500/15 text-blue-400 flex items-center justify-center">
                  {feat.icon}
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

        {/* Architecture & Tech stack */}
        <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10 border-b border-slate-800/40">
          {/* Tech Stack list */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="flex flex-col">
              <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">Tech Stack</span>
              <h4 className="text-lg font-bebas text-white mt-0.5 uppercase">Visionary Architecture</h4>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-1">
              {techStack.map((tech) => (
                <span key={tech} className="text-[9px] font-mono px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-300 hover:border-blue-500/20 transition-all duration-300 select-none">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Future AI Features lists */}
          <div className="lg:col-span-6 flex flex-col gap-4 lg:border-l lg:border-slate-800/60 lg:pl-8">
            <div className="flex flex-col">
              <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">Capabilities</span>
              <h4 className="text-lg font-bebas text-white mt-0.5 uppercase">Future AI Integrations</h4>
            </div>
            <ul className="flex flex-col gap-2 mt-1">
              {futureAIFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-[10px] sm:text-[11px] font-light text-slate-400 leading-relaxed">
                  <span className="w-1 h-1 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mission Statement Long term goal */}
        <div className="p-8 md:p-12 flex flex-col gap-6 items-center text-center relative z-10 bg-gradient-to-t from-blue-950/10 to-transparent">
          <span className="text-[10px] font-mono tracking-[0.4em] text-blue-500 uppercase">
            Long-Term Vision
          </span>
          <blockquote className="text-base sm:text-lg font-space font-medium text-slate-200 leading-relaxed italic max-w-2xl select-none">
            &ldquo;Create a completely free learning platform where students from anywhere in the world can become job-ready software engineers through practical experience rather than passive learning.&rdquo;
          </blockquote>
          <div className="w-12 h-[1px] bg-blue-500/20 my-1" />
          <div className="flex flex-col gap-1 text-[11px] text-slate-400 max-w-md leading-relaxed">
            <span className="font-semibold text-slate-300 uppercase font-space text-[10px] tracking-wider">Expected Impact</span>
            Help thousands of students learn software engineering through building, experimenting, and shipping real applications while creating portfolio-worthy projects.
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
