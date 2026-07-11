"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { PROJECTS, Project } from "@/lib/data";
import { ExternalLink, X, HelpCircle, Code, Layers, FileText } from "lucide-react";
import BuildCodeAIModal from "../ui/BuildCodeAIModal";
import FitAIModal from "../ui/FitAIModal";
import SkinScoutModal from "../ui/SkinScoutModal";

const ProjectAmbientParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full bg-red-500/5 blur-[50px]"
        style={{
          width: Math.random() * 150 + 80,
          height: Math.random() * 150 + 80,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          x: [0, Math.random() * 40 - 20, 0],
          y: [0, Math.random() * 40 - 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: Math.random() * 10 + 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);

// 3D Tilt Card component
function TiltCard({ project, onClick }: { project: Project; onClick: () => void }) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Motion values for tilt position
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Spring config for smooth tracking
  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Relative coordinates between -0.5 and 0.5
    const relX = (e.clientX - rect.left) / width - 0.5;
    const relY = (e.clientY - rect.top) / height - 0.5;
    
    x.set(relX);
    y.set(relY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="glass-card rounded-3xl p-6 h-[400px] flex flex-col justify-between cursor-pointer relative overflow-hidden group border border-violet-500/10 hover:border-cyan-500/30 transition-all duration-300"
    >
      {/* Dynamic Glow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/10 via-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Graphic background indicators */}
      <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-cyan-500/5 rounded-full blur-[40px] group-hover:bg-cyan-500/10 transition-colors duration-500 pointer-events-none" />
      
      <div style={{ transform: "translateZ(30px)" }} className="flex flex-col gap-2 relative z-10">
        <div className="flex justify-between items-center">
          <span className="text-[9px] font-mono tracking-widest bg-violet-600/20 border border-violet-500/30 px-2.5 py-0.5 rounded-full text-violet-300">
            {project.category.toUpperCase()}
          </span>
          {project.featured && (
            <span className="text-[8px] font-mono tracking-widest text-cyan-400 font-bold">
              FEATURED
            </span>
          )}
        </div>
        
        <h3 className="text-2xl font-space font-extrabold text-white mt-4 group-hover:text-cyan-400 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-xs text-slate-400 font-mono tracking-wide mt-1">
          {project.tagline}
        </p>
      </div>

      <div style={{ transform: "translateZ(10px)" }} className="relative z-10">
        <p className="text-xs font-light text-slate-400 line-clamp-3 leading-relaxed mb-6">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.techStack.slice(0, 4).map((tech) => (
            <span key={tech} className="text-[9px] font-mono px-2 py-0.5 rounded-md bg-slate-800/80 border border-slate-700/40 text-slate-400">
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="text-[9px] font-mono px-2 py-0.5 rounded-md bg-slate-800/80 border border-slate-700/40 text-slate-400">
              +{project.techStack.length - 4} more
            </span>
          )}
        </div>

        <button className="w-full py-2.5 rounded-xl border border-violet-500/20 bg-violet-600/5 group-hover:bg-violet-600/20 group-hover:border-violet-500/40 text-xs font-mono tracking-widest text-violet-300 group-hover:text-white transition-all duration-300 cursor-pointer">
          CASE STUDY
        </button>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<"All" | "AI" | "Web" | "Fullstack">("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeFilter === "All"
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-[#080808] py-24 md:py-32 px-4 md:px-8 border-b border-violet-950/20"
    >
      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-2 items-center text-center"
        >
          <span className="text-xs font-mono tracking-[0.3em] text-violet-400 uppercase">
            Chapter 5 — Projects
          </span>
          <h2 className="text-3xl md:text-5xl font-space font-extrabold tracking-tight">
            Case Studies
          </h2>
          <p className="max-w-md text-slate-400 text-xs md:text-sm font-light mt-2 leading-relaxed">
            Click on a card to access complete design iterations, challenge analyses, and functional prototypes.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-2 border border-slate-800/50 bg-[#070a1e]/30 p-1.5 rounded-full backdrop-blur-md max-w-sm mx-auto w-full"
        >
          {["All", "AI", "Web", "Fullstack"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter as any)}
              className={`text-[10px] font-mono px-4 py-2 rounded-full cursor-pointer transition-all duration-300 flex-1 ${
                activeFilter === filter
                  ? "bg-violet-600/30 text-cyan-300 border border-violet-500/40"
                  : "text-slate-400 hover:text-white border border-transparent"
              }`}
            >
              {filter.toUpperCase()}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <TiltCard project={project} onClick={() => setSelectedProject(project)} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Case Study Full-Screen Overlay Modal */}
      <AnimatePresence>
        {selectedProject && (
          selectedProject.id === "future-placeholder" ? (
            <BuildCodeAIModal onClose={() => setSelectedProject(null)} />
          ) : selectedProject.id === "fitai" ? (
            <FitAIModal onClose={() => setSelectedProject(null)} />
          ) : selectedProject.id === "skin-disease" ? (
            <SkinScoutModal onClose={() => setSelectedProject(null)} />
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-[#080808]/95 backdrop-blur-2xl overflow-y-auto px-4 py-8 md:p-12 flex justify-center items-start"
            >
              <motion.div
                initial={{ y: 50, scale: 0.95 }}
                animate={{ y: 0, scale: 1 }}
                exit={{ y: 50, scale: 0.95 }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                className="glass-panel-heavy w-full max-w-4xl rounded-3xl border border-red-500/15 overflow-hidden shadow-2xl relative bg-[#09090b]/90"
              >
                <ProjectAmbientParticles />

                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-slate-900 border border-slate-800 hover:bg-red-600/20 hover:border-red-500/40 hover:text-white text-slate-300 transition-colors duration-300 z-55 cursor-pointer shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                  aria-label="Close modal"
                >
                  <X size={16} />
                </button>

                {/* Staggered Modal Content Animation wrapper */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
                  }}
                  initial="hidden"
                  animate="visible"
                >
                  {/* Case Study Hero Header */}
                  <motion.div 
                    variants={{
                      hidden: { opacity: 0, y: 15 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                    }}
                    className="p-8 md:p-12 bg-gradient-to-b from-red-950/10 via-transparent to-transparent flex flex-col gap-4 border-b border-slate-800/40 relative z-10"
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-[10px] font-mono tracking-widest bg-red-600/20 border border-red-500/30 text-red-300 px-3 py-1 rounded-full animate-pulse-slow shadow-[0_0_10px_rgba(239,68,68,0.1)]">
                        {selectedProject.category.toUpperCase()}
                      </span>
                      <span className="text-xs font-mono text-rose-400">
                        {selectedProject.tagline}
                      </span>
                    </div>
                    
                    <h3 className="text-3xl md:text-5xl font-bebas tracking-wide text-white">
                      {selectedProject.title}
                    </h3>
                    
                    <p className="text-sm text-slate-300 leading-relaxed font-light mt-2 max-w-2xl">
                      {selectedProject.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 mt-6">
                      {selectedProject.github !== "#" && (
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-red-500/40 text-xs font-mono tracking-wider text-slate-300 hover:text-white transition-all duration-300 cursor-pointer shadow-[0_4px_15px_rgba(0,0,0,0.3)]"
                        >
                          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg> GitHub Repository
                        </a>
                      )}
                      {selectedProject.live !== "#" && (
                        <a
                          href={selectedProject.live}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-xs font-mono tracking-wider text-white font-bold transition-all duration-300 cursor-pointer shadow-[0_0_15px_rgba(220,38,38,0.15)] hover:shadow-[0_0_25px_rgba(220,38,38,0.35)]"
                        >
                          <ExternalLink size={14} /> {selectedProject.id === "fitai" ? "🚀 Launch FitAI" : "Launch Live Demo"}
                        </a>
                      )}
                    </div>
                  </motion.div>

                  {/* Case Study Details Grid */}
                  <motion.div 
                    variants={{
                      hidden: { opacity: 0, y: 15 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                    }}
                    className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10"
                  >
                    
                    {/* Main Content Area */}
                    <div className="lg:col-span-8 flex flex-col gap-8">
                      {/* Section 1: Problem */}
                      <div className="flex flex-col gap-2.5">
                        <div className="flex items-center gap-2 text-rose-500 font-space font-bold text-sm uppercase tracking-wide">
                          <HelpCircle size={15} /> <span>The Problem</span>
                        </div>
                        <p className="text-xs md:text-sm text-slate-300 font-light leading-relaxed">
                          {selectedProject.problem}
                        </p>
                      </div>

                      {/* Animated Shimmer Divider */}
                      <div className="h-[1px] bg-gradient-to-r from-transparent via-slate-800/80 to-transparent relative overflow-hidden my-2" />

                      {/* Section 2: Solution */}
                      <div className="flex flex-col gap-2.5">
                        <div className="flex items-center gap-2 text-rose-500 font-space font-bold text-sm uppercase tracking-wide">
                          <Code size={15} /> <span>My Solution</span>
                        </div>
                        
                        <div className="text-xs md:text-sm text-slate-300 font-light leading-relaxed flex flex-col gap-2">
                          {selectedProject.approach.split("\n").map((line, idx) => {
                            if (line.trim().startsWith("•")) {
                              return (
                                <div key={idx} className="flex items-start gap-2.5 pl-2">
                                  <span className="text-red-400 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)] animate-pulse" />
                                  <span>{line.replace("•", "").trim()}</span>
                                </div>
                              );
                            }
                            return <p key={idx} className="text-slate-300">{line}</p>;
                          })}
                        </div>
                      </div>

                      {/* Animated Shimmer Divider */}
                      <div className="h-[1px] bg-gradient-to-r from-transparent via-slate-800/80 to-transparent relative overflow-hidden my-2" />

                      {/* Section 3: Challenges */}
                      <div className="flex flex-col gap-2.5">
                        <div className="flex items-center gap-2 text-rose-500 font-space font-bold text-sm uppercase tracking-wide">
                          <Layers size={15} /> <span>Challenges & Constraints</span>
                        </div>
                        
                        <div className="text-xs md:text-sm text-slate-300 font-light leading-relaxed flex flex-col gap-2">
                          {selectedProject.challenges.split("\n").map((line, idx) => {
                            if (line.trim().startsWith("•")) {
                              return (
                                <div key={idx} className="flex items-start gap-2.5 pl-2">
                                  <span className="text-red-400 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)] animate-pulse" />
                                  <span>{line.replace("•", "").trim()}</span>
                                </div>
                              );
                            }
                            return <p key={idx} className="text-slate-300">{line}</p>;
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Sidebar Details Area */}
                    <div className="lg:col-span-4 flex flex-col gap-6 lg:border-l lg:border-slate-800/60 lg:pl-8">
                      <div className="flex flex-col gap-1.5">
                        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">TECH STACK</span>
                        <div className="flex flex-wrap gap-1.5 mt-1">
                          {selectedProject.techStack.map((tech) => (
                            <motion.span 
                              key={tech} 
                              whileHover={{ scale: 1.08, y: -1, borderColor: "rgba(239,68,68,0.3)" }}
                              className="text-[9px] font-mono px-2.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400 cursor-default select-none transition-colors duration-300 hover:text-red-300"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      <div className="h-[1px] bg-slate-850" />

                      <div className="flex flex-col gap-1.5">
                        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest flex items-center gap-1"><FileText size={10} /> KEY LEARNINGS</span>
                        <p className="text-[11px] leading-relaxed text-slate-400 font-light italic">
                          {selectedProject.lessons}
                        </p>
                      </div>
                    </div>

                  </motion.div>
                </motion.div>

              </motion.div>
            </motion.div>
          )
        )}
      </AnimatePresence>
    </section>
  );
}
