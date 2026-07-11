"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ACHIEVEMENTS, Achievement } from "@/lib/data";
import { Code, Users, Compass, Sparkles } from "lucide-react";

const getAchievementIcon = (index: number) => {
  switch (index) {
    case 0:
      return <Code className="text-red-400" size={20} />;
    case 1:
      return <Users className="text-red-400" size={20} />;
    case 2:
      return <Compass className="text-red-400" size={20} />;
    case 3:
      return <Sparkles className="text-red-400" size={20} />;
    default:
      return <Code className="text-red-400" size={20} />;
  }
};

// Custom animated counter/spin selector
function AnimatedMetric({ value, isHovered }: { value: string; isHovered: boolean }) {
  const [displayValue, setDisplayValue] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [key, setKey] = useState(0);

  // Trigger recount on hover
  useEffect(() => {
    if (isHovered) {
      setKey(prev => prev + 1);
    }
  }, [isHovered]);

  useEffect(() => {
    if (value === "∞") {
      setDisplayValue("∞");
      return;
    }

    const match = value.match(/^(\d+)(.*)$/);
    if (!match || !isInView) {
      setDisplayValue(value);
      return;
    }

    const targetNum = parseInt(match[1], 10);
    const suffix = match[2];
    
    let start = 0;
    const duration = 1000; // 1 second count-up
    const stepTime = Math.max(Math.floor(duration / targetNum), 20);
    
    const timer = setInterval(() => {
      start += 1;
      setDisplayValue(`${start}${suffix}`);
      if (start >= targetNum) {
        clearInterval(timer);
        setDisplayValue(value);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value, isInView, key]);

  if (value === "∞") {
    return (
      <motion.span
        ref={ref}
        animate={isHovered ? { scale: 1.18 } : { scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
        className="text-4xl font-space font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-rose-500 to-red-400 select-none leading-none inline-block h-[40px]"
      >
        ∞
      </motion.span>
    );
  }

  return (
    <span ref={ref} className="text-3xl font-bebas tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-rose-500 to-red-400 leading-none h-[40px] block select-none">
      {displayValue}
    </span>
  );
}

// Single Achievement Card with custom Mouse Parallax Glow and Border Glow animations
function AchievementCard({ ach, index }: { ach: Achievement; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ type: "spring", stiffness: 60, damping: 12, delay: index * 0.12 }}
      whileHover={{ y: -10, scale: 1.025 }}
      className="glass-card p-7 rounded-3xl flex flex-col justify-between min-h-[260px] relative overflow-hidden group border border-violet-500/10 hover:border-transparent transition-all duration-500 cursor-default"
    >
      {/* Animated gradient border on hover */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-red-600 via-violet-650 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ padding: "1px" }}>
        <div className="absolute inset-0 bg-[#080808]/95 rounded-3xl" />
      </div>

      {/* Mouse Follow Radial Glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
        style={{
          background: `radial-gradient(150px circle at ${mousePos.x}px ${mousePos.y}px, rgba(239, 68, 68, 0.15), transparent 80%)`,
        }}
      />

      {/* Pulsing indicator dot in top-right corner */}
      <div className="absolute top-4 right-4 flex h-2 w-2 z-20">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
      </div>

      <div className="flex flex-col gap-4 relative z-20">
        <div className="flex items-center justify-between">
          {/* Floating & Rotating Icon Box */}
          <motion.div 
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.25 }}
            variants={{
              hover: { rotate: 15, scale: 1.12 }
            }}
            className="p-3 bg-red-950/20 rounded-2xl border border-red-500/10 text-red-400 group-hover:text-red-300 group-hover:border-red-500/30 transition-all duration-300 shadow-[0_0_15px_rgba(220,38,38,0.05)]"
          >
            {getAchievementIcon(index)}
          </motion.div>
        </div>

        <div className="flex flex-col gap-0.5 mt-2">
          <AnimatedMetric value={ach.metric} isHovered={isHovered} />
          
          <h3 className="text-xs font-space font-extrabold text-white tracking-wider uppercase mt-1">
            {ach.title}
          </h3>
        </div>
      </div>

      <p className="text-[11px] font-light text-slate-400 leading-relaxed mt-4 relative z-20">
        {ach.description}
      </p>
    </motion.div>
  );
}

// Background Floating Particles
const BackgroundParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-red-500/5 blur-[80px]"
          style={{
            width: Math.random() * 180 + 120,
            height: Math.random() * 180 + 120,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 50 - 25, 0],
            y: [0, Math.random() * 50 - 25, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: Math.random() * 10 + 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Mindset custom typewriter
function MindsetTyper() {
  const words = [
    "Building AI apps...",
    "Learning new technologies...",
    "Exploring software engineering...",
    "Creating useful products...",
    "Solving real-world problems...",
    "Shipping ideas..."
  ];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setBlink((prev) => !prev);
    }, 530);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 1600);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 35 : 70);

    return () => clearTimeout(timeout);
  }, [subIndex, reverse, index]);

  return (
    <div className="h-8 flex items-center justify-center">
      <p className="text-xs md:text-sm font-mono text-red-500 tracking-widest font-bold uppercase">
        {words[index].substring(0, subIndex)}
        <span className={`${blink ? "opacity-100" : "opacity-0"} w-[2px] h-3.5 bg-red-500 inline-block ml-1 align-middle`} />
      </p>
    </div>
  );
}

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative bg-[#080808] py-24 md:py-32 px-4 md:px-8 border-b border-violet-950/20 overflow-hidden"
    >
      <BackgroundParticles />

      {/* Backlight background glow shapes */}
      <div className="absolute top-[20%] left-0 w-[450px] h-[450px] bg-red-950/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-0 w-[450px] h-[450px] bg-red-950/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto flex flex-col gap-12 relative z-10">
        {/* Header section with staggered fade-in */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-2 items-center text-center"
        >
          <span className="text-xs font-mono tracking-[0.3em] text-red-500 uppercase">
            Coding Philosophy
          </span>
          <h2 className="text-3xl md:text-5xl font-bebas tracking-wide">
            Always Building.
          </h2>
          <p className="max-w-md text-slate-400 text-xs md:text-sm font-light mt-2 leading-relaxed">
            I believe the best way to learn is by building. Every new idea becomes an opportunity to experiment, solve problems, and improve as a developer.
          </p>
        </motion.div>

        {/* Responsive Grid with four premium cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
          {ACHIEVEMENTS.map((ach, index) => (
            <AchievementCard key={ach.title} ach={ach} index={index} />
          ))}
        </div>

        {/* Mindset Quote & Typer Block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 pt-12 border-t border-red-950/20 flex flex-col gap-5 items-center text-center max-w-2xl mx-auto"
        >
          <span className="text-[10px] font-mono tracking-[0.4em] text-red-500/80 uppercase">
            Current Mindset
          </span>
          
          <blockquote className="text-lg md:text-xl font-space font-medium text-slate-200 leading-relaxed italic select-none">
            &ldquo;I don&apos;t wait until I know everything. I build, learn, improve, and repeat.&rdquo;
          </blockquote>

          <div className="w-12 h-[1px] bg-red-550/30 my-1" />

          <MindsetTyper />
        </motion.div>
      </div>
    </section>
  );
}
