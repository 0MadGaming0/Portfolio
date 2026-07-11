"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { PERSONAL_INFO, STATS, EXPERIENCES } from "@/lib/data";
import { Calendar, Award, Code, Lightbulb } from "lucide-react";

// Counter component for stats
function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000; // 2 seconds
      const incrementTime = Math.max(Math.floor(duration / end), 15);
      
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-space font-extrabold text-3xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-400">
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative min-h-screen bg-[#080808] py-24 md:py-32 px-4 md:px-8 border-b border-violet-950/20"
    >
      {/* Background radial glow */}
      <div className="absolute top-[30%] right-0 w-[400px] h-[400px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto flex flex-col gap-24">
        {/* Chapter 2: Why I Build */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual - Photo frame with animated tilt and glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group w-72 h-96 sm:w-80 sm:h-[420px] rounded-3xl overflow-hidden shadow-2xl">
              {/* Animated glowing borders */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-3xl blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200" />
              
              <div className="relative w-full h-full bg-[#070a1e] rounded-3xl overflow-hidden border border-violet-500/20">
                <Image
                  src={PERSONAL_INFO.avatar}
                  alt="Madhav avatar image"
                  fill
                  sizes="(max-w-768px) 100vw, 350px"
                  priority
                  unoptimized
                  className="object-cover object-[center_60%] transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Floating design elements */}
                <div className="absolute bottom-4 left-4 right-4 glass-panel px-4 py-3 rounded-2xl flex items-center justify-between border border-white/5">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-cyan-400">DESIGNATION</span>
                    <span className="text-xs font-semibold text-white font-space">Front-End Developer</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-violet-600/30 flex items-center justify-center border border-violet-500/20">
                    <Code size={14} className="text-violet-400" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Narrative Story */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-2"
            >
              <span className="text-xs font-mono tracking-[0.3em] text-cyan-400 uppercase">
                Chapter 2 — Why I Build
              </span>
              <h2 className="text-3xl md:text-5xl font-space font-extrabold tracking-tight">
                Crafting With Purpose
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-400 font-light leading-relaxed flex flex-col gap-4 text-sm md:text-base"
            >
              <p>
                {PERSONAL_INFO.aboutShort}
              </p>
              <blockquote className="border-l-2 border-violet-500 pl-4 py-1 my-2 text-slate-300 font-mono italic text-xs md:text-sm bg-violet-500/5 rounded-r-lg">
                &ldquo;{PERSONAL_INFO.story}&rdquo;
              </blockquote>
              <p>
                Every project I build is an attempt to create accessible, elegant systems that resolve real problems. I leverage modern component abstractions and visual design rules to craft interfaces that are highly functional and delightful to use.
              </p>
            </motion.div>

            {/* Stats list */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 border-t border-slate-800/60 pt-6">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="flex flex-col gap-1"
                >
                  <Counter value={stat.value} suffix={stat.suffix} />
                  <span className="text-[10px] md:text-xs font-mono tracking-wider text-slate-400 uppercase">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Chapter 3: Learning Journey */}
        <div className="flex flex-col gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-2 items-center text-center"
          >
            <span className="text-xs font-mono tracking-[0.3em] text-violet-400 uppercase">
              Chapter 3 — Journey Timeline
            </span>
            <h2 className="text-3xl md:text-5xl font-space font-extrabold tracking-tight">
              My Growth Curve
            </h2>
          </motion.div>

          <div className="relative max-w-4xl mx-auto w-full mt-6">
            {/* Timeline center line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-cyan-500 via-violet-600 to-transparent pointer-events-none" />

            <div className="flex flex-col gap-12">
              {EXPERIENCES.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={item.role + index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`flex flex-col md:flex-row justify-between items-start md:items-center relative w-full ${
                      isEven ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Node Dot */}
                    <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-cyan-400 border border-[#080808] shadow-[0_0_10px_rgba(6,182,212,0.8)] z-10" />

                    {/* Content Card */}
                    <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${isEven ? "md:pl-8" : "md:pr-8"}`}>
                      <div className="glass-card p-6 rounded-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-3 bg-violet-600/10 text-violet-400 rounded-bl-2xl border-l border-b border-violet-500/15">
                          {index === 0 ? <Code size={16} /> : index === 1 ? <Award size={16} /> : <Calendar size={16} />}
                        </div>
                        
                        <div className="flex flex-col gap-1.5">
                          <span className="text-[10px] font-mono text-cyan-400 tracking-wider font-semibold">
                            {item.period}
                          </span>
                          <h3 className="text-lg font-space font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                            {item.role}
                          </h3>
                          <span className="text-xs font-semibold text-slate-300">
                            {item.company}
                          </span>
                          <ul className="mt-3 flex flex-col gap-2">
                            {item.description.slice(0, 2).map((desc, idx) => (
                              <li key={idx} className="text-xs text-slate-400 font-light list-disc list-inside leading-relaxed">
                                {desc}
                              </li>
                            ))}
                          </ul>
                          
                          <div className="flex flex-wrap gap-1.5 mt-4">
                            {item.skills.map((skill) => (
                              <span key={skill} className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-slate-800/60 border border-slate-700/50 text-slate-400">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Spacer for desktop layout */}
                    <div className="hidden md:block w-[45%]" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
