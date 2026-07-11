"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EXPERIENCES, Experience } from "@/lib/data";
import { Briefcase, Calendar, ChevronDown, ChevronUp, MapPin } from "lucide-react";

export default function ExperienceSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      id="experience"
      className="relative min-h-screen bg-[#080808] py-24 md:py-32 px-4 md:px-8 border-b border-violet-950/20"
    >
      {/* Glow shapes */}
      <div className="absolute top-[40%] right-0 w-[450px] h-[450px] bg-violet-950/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-0 w-[450px] h-[450px] bg-cyan-950/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-2 items-center text-center"
        >
          <span className="text-xs font-mono tracking-[0.3em] text-cyan-400 uppercase">
            Chapter 6 — Experience
          </span>
          <h2 className="text-3xl md:text-5xl font-space font-extrabold tracking-tight">
            Professional Pathway
          </h2>
          <p className="max-w-md text-slate-400 text-xs md:text-sm font-light mt-2 leading-relaxed">
            An interactive timeline of my roles, leadership projects, and developer contributions. Click to expand full details.
          </p>
        </motion.div>

        {/* Connected Milestones Layout */}
        <div className="relative flex flex-col gap-8 mt-8">
          
          {/* Vertical spine connector line */}
          <div className="absolute left-6 md:left-8 top-2 bottom-2 w-[2px] bg-gradient-to-b from-cyan-500 via-violet-600 to-slate-800 pointer-events-none" />

          {EXPERIENCES.map((exp, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <motion.div
                key={exp.role + index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-16 md:pl-20"
              >
                {/* Node Ring Dot */}
                <motion.button
                  onClick={() => toggleExpand(index)}
                  className={`absolute left-0 md:left-2 top-0 w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-300 cursor-pointer z-10 ${
                    isExpanded
                      ? "bg-violet-600 border-violet-500 shadow-[0_0_15px_rgba(124,58,237,0.6)] text-white"
                      : "bg-[#070a1e] border-slate-700/80 hover:border-cyan-500 text-slate-400 hover:text-cyan-400"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Briefcase size={16} />
                </motion.button>

                {/* Milestone Detail Card */}
                <div
                  onClick={() => toggleExpand(index)}
                  className={`glass-card p-6 rounded-2xl border cursor-pointer transition-all duration-300 ${
                    isExpanded
                      ? "border-violet-500/40 bg-violet-950/5 shadow-[0_0_25px_rgba(124,58,237,0.08)]"
                      : "border-slate-800/60 hover:border-slate-700/80 bg-[#070a1e]/20"
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-space font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-xs text-slate-400">
                        <span className="font-semibold text-cyan-400">{exp.company}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                        <span className="flex items-center gap-1 font-mono text-[10px]"><Calendar size={10} /> {exp.period}</span>
                      </div>
                    </div>

                    <div className="text-slate-400 hover:text-white transition-colors duration-200">
                      {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </div>
                  </div>

                  {/* Expanded description items */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 border-t border-slate-800/80 mt-4 flex flex-col gap-4">
                          <ul className="flex flex-col gap-3">
                            {exp.description.map((desc, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                className="text-xs md:text-sm text-slate-300 leading-relaxed font-light list-disc list-inside"
                              >
                                {desc}
                              </motion.li>
                            ))}
                          </ul>

                          <div className="flex flex-wrap gap-1.5 mt-2">
                            {exp.skills.map((skill) => (
                              <span
                                key={skill}
                                className="text-[9px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              </motion.div>
            );
          })}
          
        </div>
      </div>
    </section>
  );
}
