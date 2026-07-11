"use client";

import { motion } from "framer-motion";
import { ACHIEVEMENTS } from "@/lib/data";
import { Award, Star, BookOpen, Layers, Flame } from "lucide-react";

const getAchievementIcon = (index: number) => {
  switch (index) {
    case 0:
      return <Layers className="text-cyan-400" size={20} />;
    case 1:
      return <Award className="text-violet-400" size={20} />;
    case 2:
      return <Star className="text-yellow-500" size={20} />;
    case 3:
      return <Flame className="text-orange-500" size={20} />;
    default:
      return <BookOpen className="text-green-400" size={20} />;
  }
};

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative bg-[#080808] py-24 md:py-32 px-4 md:px-8 border-b border-violet-950/20"
    >
      <div className="absolute top-[20%] left-0 w-[400px] h-[400px] bg-violet-950/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-0 w-[400px] h-[400px] bg-cyan-950/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-2 items-center text-center"
        >
          <span className="text-xs font-mono tracking-[0.3em] text-violet-400 uppercase">
            Achievements
          </span>
          <h2 className="text-3xl md:text-5xl font-space font-extrabold tracking-tight">
            Key Milestones
          </h2>
          <p className="max-w-md text-slate-400 text-xs md:text-sm font-light mt-2 leading-relaxed">
            Highlighting core deliverables, community leadership, and ongoing architectural accomplishments.
          </p>
        </motion.div>

        {/* Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
          {ACHIEVEMENTS.map((ach, index) => (
            <motion.div
              key={ach.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 rounded-2xl flex flex-col justify-between min-h-[220px] relative overflow-hidden group border border-violet-500/10 hover:border-cyan-500/30"
            >
              {/* Subtle top node lighting */}
              <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 bg-slate-800/80 rounded-xl border border-slate-700/40 text-slate-300">
                    {getAchievementIcon(index)}
                  </div>
                  <span className="text-xl font-space font-extrabold text-cyan-400 tracking-tight">
                    {ach.metric}
                  </span>
                </div>

                <h3 className="text-sm font-space font-bold text-white tracking-wide mt-2">
                  {ach.title}
                </h3>
              </div>

              <p className="text-xs font-light text-slate-400 leading-relaxed mt-4">
                {ach.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
