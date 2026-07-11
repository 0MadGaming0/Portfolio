"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SKILLS, Skill } from "@/lib/data";
import { Terminal, Database, ShieldAlert, Cpu, Hammer, Layout } from "lucide-react";

// Map category string to icons
const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Frontend":
      return <Layout size={14} />;
    case "Backend":
      return <Terminal size={14} />;
    case "Databases":
      return <Database size={14} />;
    case "AI":
      return <Cpu size={14} />;
    case "Tools":
      return <Hammer size={14} />;
    default:
      return <Terminal size={14} />;
  }
};

const categories = ["All", "Frontend", "Backend", "Databases", "AI", "Tools", "Languages"];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);

  const filteredSkills = activeCategory === "All"
    ? SKILLS
    : SKILLS.filter(skill => skill.category === activeCategory);

  return (
    <section
      id="skills"
      className="relative min-h-screen bg-[#080808] py-24 md:py-32 px-4 md:px-8 border-b border-violet-950/20"
    >
      {/* Background radial glow */}
      <div className="absolute top-[20%] left-0 w-[500px] h-[500px] bg-violet-950/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-0 w-[450px] h-[450px] bg-cyan-950/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-2 items-center text-center"
        >
          <span className="text-xs font-mono tracking-[0.3em] text-cyan-400 uppercase">
            Chapter 4 — Skills Universe
          </span>
          <h2 className="text-3xl md:text-5xl font-space font-extrabold tracking-tight">
            Technology Constellation
          </h2>
          <p className="max-w-md text-slate-400 text-xs md:text-sm font-light mt-2 leading-relaxed">
            Hover over a skill node to explore proficiency metrics, exact usages, and linked project deployments.
          </p>
        </motion.div>

        {/* Tab Filters */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto w-full border border-slate-800/50 bg-[#070a1e]/30 p-2 rounded-full backdrop-blur-md"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[10px] md:text-xs font-mono px-4 py-2 rounded-full cursor-pointer transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-violet-600/30 text-cyan-300 border border-violet-500/40"
                  : "text-slate-400 hover:text-white border border-transparent"
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </motion.div>

        {/* Constellation Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-4">
          
          {/* Skill Nodes Grid */}
          <motion.div
            layout
            className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill, index) => {
                const isHovered = hoveredSkill?.name === skill.name;
                return (
                  <motion.div
                    layout
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4 }}
                    whileHover={{ scale: 1.03 }}
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className={`glass-card p-4 rounded-2xl flex flex-col justify-between h-32 relative overflow-hidden transition-all duration-300 select-none ${
                      isHovered ? "border-cyan-500/45 shadow-[0_0_20px_rgba(6,182,212,0.15)] bg-cyan-950/5" : ""
                    }`}
                  >
                    {/* Corner gradient glow matching category */}
                    <div
                      className={`absolute -top-10 -right-10 w-20 h-20 rounded-full blur-[30px] opacity-20 pointer-events-none transition-colors duration-300 ${
                        skill.category === "Frontend" || skill.category === "AI"
                          ? "bg-cyan-500"
                          : "bg-violet-500"
                      }`}
                    />

                    <div className="flex items-start justify-between w-full">
                      <div className="p-2 bg-slate-800/80 rounded-xl border border-slate-700/40 text-slate-300">
                        {getCategoryIcon(skill.category)}
                      </div>
                      <span className="text-[8px] font-mono border border-slate-800 px-1.5 py-0.5 rounded-full text-slate-400 bg-slate-900/60">
                        {skill.level.toUpperCase()}
                      </span>
                    </div>

                    <div className="flex flex-col gap-0.5">
                      <span className="text-[9px] font-mono text-slate-500 tracking-wider">
                        {skill.category.toUpperCase()}
                      </span>
                      <h3 className="text-sm font-space font-bold text-white group-hover:text-cyan-400">
                        {skill.name}
                      </h3>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* Interactive Universe Sidebar (Meta-Viewer) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="glass-panel p-6 rounded-3xl min-h-[300px] flex flex-col justify-between border border-violet-500/10">
              <AnimatePresence mode="wait">
                {hoveredSkill ? (
                  <motion.div
                    key={hoveredSkill.name}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col gap-4"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-mono text-cyan-400 tracking-widest uppercase">
                        Node Info
                      </span>
                      <span className="text-[9px] font-mono bg-violet-600/20 border border-violet-500/30 text-violet-300 px-2 py-0.5 rounded-full">
                        {hoveredSkill.category.toUpperCase()}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl font-space font-extrabold text-white">
                        {hoveredSkill.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-slate-400">Proficiency:</span>
                        <span className="text-xs text-cyan-400 font-mono font-bold">{hoveredSkill.level}</span>
                      </div>
                    </div>

                    <div className="h-[1px] bg-slate-800" />

                    <div className="flex flex-col gap-1.5">
                      <span className="text-[9px] font-mono text-slate-500 uppercase">Usage Context</span>
                      <p className="text-xs font-light text-slate-300 leading-relaxed">
                        {hoveredSkill.usage}
                      </p>
                    </div>

                    {hoveredSkill.projects.length > 0 && (
                      <div className="flex flex-col gap-1.5 mt-2">
                        <span className="text-[9px] font-mono text-slate-500 uppercase">Deployed in Projects</span>
                        <div className="flex flex-wrap gap-1.5">
                          {hoveredSkill.projects.map((proj) => (
                            <span key={proj} className="text-[10px] font-mono text-violet-300 px-2 py-0.5 rounded-md bg-violet-950/40 border border-violet-500/20">
                              {proj}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col justify-center items-center gap-3 text-center my-auto py-12"
                  >
                    <div className="p-4 rounded-full bg-violet-950/30 border border-violet-500/10 text-violet-400">
                      <Terminal size={24} />
                    </div>
                    <p className="text-xs font-mono text-slate-500 uppercase tracking-widest max-w-[180px]">
                      Awaiting Node Hover Selection
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
