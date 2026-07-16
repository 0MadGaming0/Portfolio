"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Printer, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Briefcase, 
  GraduationCap, 
  Code, 
  Layers 
} from "lucide-react";
import { motion } from "framer-motion";

export default function ResumePage() {
  const [isLightMode, setIsLightMode] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const resumeData = {
    name: "MADHAV S PILLAI",
    location: "Kerala, India",
    phone: "+91 95443 53734",
    email: "madhavsp05@gmail.com",
    linkedin: "https://www.linkedin.com/in/madhav-s-pillai",
    github: "https://github.com/0MadGaming0",
    portfolio: "https://fitai-go.vercel.app/",
    summary: "Passionate Software Developer specializing in front-end and full-stack web development. Experienced with React, JavaScript, Python, Flask, MongoDB, HTML, CSS, Git, and REST APIs, with a strong interest in building scalable, user-centric web applications and continuously learning modern technologies.",
    skills: {
      languages: ["JavaScript", "Python", "HTML5", "CSS3"],
      frameworks: ["React.js", "Flask"],
      database: ["MongoDB"],
      tools: ["Git", "GitHub", "REST APIs"]
    },
    experience: [
      {
        role: "Outreach Lead",
        company: "TinkerHub SBCE",
        period: "June 2025 – May 2026",
        bullets: [
          "Led outreach initiatives that increased student engagement in technology-focused events and programs.",
          "Coordinated technical workshops and student outreach initiatives.",
          "Collaborated with cross-functional teams to promote TinkerHub initiatives across campus."
        ]
      },
      {
        role: "AI & Software Development Intern",
        company: "IEEE EMBS Student Internship Program",
        period: "2026",
        bullets: [
          "Developed features for an AI-powered skin disease detection application using Python and Flask.",
          "Integrated image classification and an AI chatbot to enhance the user experience.",
          "Collaborated with a multidisciplinary team to test and improve the application."
        ]
      }
    ],
    education: {
      degree: "Bachelor of Technology (BTech) in Computer Science and Engineering",
      institution: "Sree Buddha College of Engineering",
      timeline: "Expected 2027",
      grade: "CGPA: 6.16/10"
    },
    projects: [
      {
        title: "FitAI",
        description: "Built an AI-powered fitness platform using React, Flask, MongoDB, and Groq AI featuring workout recommendations, authentication, and progress tracking."
      },
      {
        title: "Animated Portfolio",
        description: "Interactive portfolio showcasing projects using React and modern UI animations."
      },
      {
        title: "Skin Disease Detection",
        description: "AI-powered web application for skin disease classification using deep learning."
      }
    ]
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 pb-20 ${isLightMode ? "bg-slate-50 text-slate-900" : "bg-[#080808] text-white"}`}>
      
      {/* Global CSS overrides for printing */}
      <style jsx global>{`
        @media print {
          body {
            background-color: white !important;
            color: black !important;
            font-size: 11px !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          .no-print {
            display: none !important;
          }
          .print-container {
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 !important;
            padding: 20px !important;
            box-shadow: none !important;
            background: white !important;
            border: none !important;
            color: black !important;
          }
          .print-text-dark {
            color: #0f172a !important;
          }
          .print-text-muted {
            color: #475569 !important;
          }
          .print-border {
            border-color: #cbd5e1 !important;
          }
          .print-bg-light {
            background-color: #f8fafc !important;
            border-color: #e2e8f0 !important;
          }
          .print-badge {
            background-color: #f1f5f9 !important;
            color: #334155 !important;
            border: 1px solid #cbd5e1 !important;
          }
          /* Prevent multiple pages */
          @page {
            size: A4;
            margin: 10mm 15mm;
          }
        }
      `}</style>

      {/* Floating Action Controls */}
      <div className="max-w-4xl mx-auto px-4 pt-8 md:pt-12 no-print">
        <div className="flex flex-wrap items-center justify-between gap-4 glass-panel px-6 py-4 rounded-3xl border border-violet-500/10 mb-8">
          <Link 
            href="/"
            className="flex items-center gap-2 text-xs font-mono tracking-wider text-slate-400 hover:text-white transition-colors duration-300 group cursor-pointer"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            BACK TO PORTFOLIO
          </Link>
          
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={() => setIsLightMode(!isLightMode)}
              className="px-4 py-2 text-xs font-mono tracking-wider rounded-full border border-slate-700/80 hover:border-violet-500 bg-[#080808]/40 hover:bg-violet-950/20 text-slate-300 hover:text-white transition-all duration-300 cursor-pointer"
            >
              THEME: {isLightMode ? "LIGHT" : "DARK"}
            </button>

            {/* Print/Download PDF Button */}
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono tracking-wider bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white font-bold transition-all duration-300 shadow-[0_0_20px_rgba(239,68,68,0.25)] border border-violet-500/20 cursor-pointer"
            >
              <Printer size={14} />
              PRINT / SAVE PDF
            </button>
          </div>
        </div>
      </div>

      {/* Main Resume Sheet */}
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`print-container transition-all duration-500 rounded-3xl p-8 md:p-12 border ${
            isLightMode 
              ? "bg-white border-slate-200 shadow-xl shadow-slate-200/50 text-slate-800" 
              : "glass-panel border-violet-500/10 shadow-2xl shadow-black/80 text-slate-300"
          }`}
        >
          {/* Header section */}
          <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b pb-8 print-border border-slate-850/50">
            <div>
              <h1 className={`text-4xl md:text-5xl font-space font-extrabold tracking-tight select-none print-text-dark ${
                isLightMode ? "text-slate-900" : "text-white"
              }`}>
                {resumeData.name}
              </h1>
              <p className="text-sm font-mono tracking-wider text-cyan-400 mt-2 uppercase font-semibold">
                Software Developer
              </p>
            </div>
            
            <div className="flex flex-col gap-2 text-xs md:text-right font-light">
              <span className="flex items-center md:justify-end gap-2 text-slate-400 print-text-muted">
                <MapPin size={12} className="text-violet-400" />
                {resumeData.location}
              </span>
              <span className="flex items-center md:justify-end gap-2 text-slate-400 print-text-muted">
                <Phone size={12} className="text-violet-400" />
                {resumeData.phone}
              </span>
              <span className="flex items-center md:justify-end gap-2 text-slate-400 print-text-muted">
                <Mail size={12} className="text-violet-400" />
                <a href={`mailto:${resumeData.email}`} className="hover:text-cyan-400 transition-colors">
                  {resumeData.email}
                </a>
              </span>
            </div>
          </header>

          {/* Social Links Row */}
          <div className="flex flex-wrap gap-4 py-4 border-b print-border border-slate-850/50 text-xs font-mono">
            <a 
              href={resumeData.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 text-slate-400 hover:text-cyan-400 transition-colors print-text-muted"
            >
              <svg className="w-[12px] h-[12px] inline-block text-violet-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              linkedin.com/in/madhav-s-pillai
            </a>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <a 
              href={resumeData.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 text-slate-400 hover:text-cyan-400 transition-colors print-text-muted"
            >
              <svg className="w-[12px] h-[12px] inline-block text-violet-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              github.com/0MadGaming0
            </a>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <a 
              href={resumeData.portfolio} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 text-slate-400 hover:text-cyan-400 transition-colors print-text-muted"
            >
              <Globe size={12} className="text-violet-400" />
              Portfolio Website
            </a>
          </div>

          {/* Grid Layout for details */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8">
            
            {/* Left Column (Details, Skills, Education) */}
            <div className="md:col-span-4 flex flex-col gap-8">
              
              {/* Summary Section */}
              <section className="flex flex-col gap-3">
                <h2 className={`text-xs font-mono tracking-[0.2em] font-extrabold uppercase print-text-dark ${
                  isLightMode ? "text-slate-900" : "text-white"
                }`}>
                  Summary
                </h2>
                <div className="h-0.5 w-10 bg-cyan-400" />
                <p className="text-xs md:text-[13px] leading-relaxed font-light text-slate-400 print-text-muted">
                  {resumeData.summary}
                </p>
              </section>

              {/* Skills Section */}
              <section className="flex flex-col gap-4">
                <h2 className={`text-xs font-mono tracking-[0.2em] font-extrabold uppercase print-text-dark ${
                  isLightMode ? "text-slate-900" : "text-white"
                }`}>
                  Skills
                </h2>
                <div className="h-0.5 w-10 bg-cyan-400 -mt-1" />
                
                <div className="flex flex-col gap-3 text-xs">
                  <div>
                    <h3 className={`font-semibold print-text-dark mb-1 ${isLightMode ? "text-slate-800" : "text-slate-200"}`}>Languages</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {resumeData.skills.languages.map((skill) => (
                        <span key={skill} className={`print-badge px-2 py-0.5 rounded text-[10px] font-mono ${
                          isLightMode ? "bg-slate-100 border border-slate-200 text-slate-700" : "bg-violet-950/20 border border-violet-500/20 text-violet-300"
                        }`}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className={`font-semibold print-text-dark mb-1 ${isLightMode ? "text-slate-800" : "text-slate-200"}`}>Frameworks & Libs</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {resumeData.skills.frameworks.map((skill) => (
                        <span key={skill} className={`print-badge px-2 py-0.5 rounded text-[10px] font-mono ${
                          isLightMode ? "bg-slate-100 border border-slate-200 text-slate-700" : "bg-violet-950/20 border border-violet-500/20 text-violet-300"
                        }`}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className={`font-semibold print-text-dark mb-1 ${isLightMode ? "text-slate-800" : "text-slate-200"}`}>Database</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {resumeData.skills.database.map((skill) => (
                        <span key={skill} className={`print-badge px-2 py-0.5 rounded text-[10px] font-mono ${
                          isLightMode ? "bg-slate-100 border border-slate-200 text-slate-700" : "bg-violet-950/20 border border-violet-500/20 text-violet-300"
                        }`}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className={`font-semibold print-text-dark mb-1 ${isLightMode ? "text-slate-800" : "text-slate-200"}`}>Tools</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {resumeData.skills.tools.map((skill) => (
                        <span key={skill} className={`print-badge px-2 py-0.5 rounded text-[10px] font-mono ${
                          isLightMode ? "bg-slate-100 border border-slate-200 text-slate-700" : "bg-violet-950/20 border border-violet-500/20 text-violet-300"
                        }`}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Education Section */}
              <section className="flex flex-col gap-3">
                <h2 className={`text-xs font-mono tracking-[0.2em] font-extrabold uppercase print-text-dark ${
                  isLightMode ? "text-slate-900" : "text-white"
                }`}>
                  Education
                </h2>
                <div className="h-0.5 w-10 bg-cyan-400" />
                
                <div className="flex flex-col gap-1 text-xs">
                  <h3 className={`font-bold print-text-dark ${isLightMode ? "text-slate-800" : "text-white"}`}>
                    {resumeData.education.degree}
                  </h3>
                  <span className="text-slate-400 print-text-muted font-light">{resumeData.education.institution}</span>
                  <div className="flex justify-between text-[11px] font-mono text-cyan-500 mt-1">
                    <span>{resumeData.education.timeline}</span>
                    <span>{resumeData.education.grade}</span>
                  </div>
                </div>
              </section>

            </div>

            {/* Right Column (Experience & Projects) */}
            <div className="md:col-span-8 flex flex-col gap-8">
              
              {/* Experience Section */}
              <section className="flex flex-col gap-4">
                <h2 className={`text-xs font-mono tracking-[0.2em] font-extrabold uppercase print-text-dark ${
                  isLightMode ? "text-slate-900" : "text-white"
                }`}>
                  Experience
                </h2>
                <div className="h-0.5 w-10 bg-cyan-400 -mt-1" />

                <div className="flex flex-col gap-6">
                  {resumeData.experience.map((exp, index) => (
                    <div key={index} className="flex flex-col gap-1.5 text-xs">
                      <div className="flex flex-wrap justify-between items-baseline gap-2">
                        <h3 className={`text-sm font-bold print-text-dark ${isLightMode ? "text-slate-800" : "text-white"}`}>
                          {exp.role} <span className="text-cyan-400 font-normal">@ {exp.company}</span>
                        </h3>
                        <span className="text-[10px] font-mono text-violet-400 whitespace-nowrap">{exp.period}</span>
                      </div>
                      
                      <ul className="list-disc pl-4 flex flex-col gap-1.5 font-light text-slate-400 print-text-muted">
                        {exp.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="leading-relaxed">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* Projects Section */}
              <section className="flex flex-col gap-4">
                <h2 className={`text-xs font-mono tracking-[0.2em] font-extrabold uppercase print-text-dark ${
                  isLightMode ? "text-slate-900" : "text-white"
                }`}>
                  Projects
                </h2>
                <div className="h-0.5 w-10 bg-cyan-400 -mt-1" />

                <div className="flex flex-col gap-4">
                  {resumeData.projects.map((project, index) => (
                    <div key={index} className="flex flex-col gap-1 text-xs">
                      <h3 className={`font-bold print-text-dark ${isLightMode ? "text-slate-800" : "text-white"}`}>
                        {project.title}
                      </h3>
                      <p className="font-light text-slate-400 print-text-muted leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

            </div>

          </div>

        </motion.div>
      </div>

    </div>
  );
}
