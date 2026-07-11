"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import MagneticButton from "../ui/MagneticButton";
import { AnimatePresence, motion as framerMotion } from "framer-motion";
import { PERSONAL_INFO } from "@/lib/data";

interface ContactFormInputs {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormInputs>();

  const onSubmit = async (data: ContactFormInputs) => {
    setIsSubmitting(true);
    // Simulate API request
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitSuccess(true);
      reset();
      setTimeout(() => setSubmitSuccess(null), 5000);
    } catch {
      setSubmitSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-[#080808] py-24 md:py-32 px-4 md:px-8 border-b border-violet-950/20 flex items-center"
    >
      <div className="absolute top-[20%] left-0 w-[450px] h-[450px] bg-[#0c1033] rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-0 w-[450px] h-[450px] bg-[#1a0a3a] rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full flex flex-col gap-12">
        <framerMotion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-2 items-center text-center"
        >
          <span className="text-xs font-mono tracking-[0.3em] text-cyan-400 uppercase">
            Chapter 8 — Contact
          </span>
          <h2 className="text-3xl md:text-5xl font-space font-extrabold tracking-tight">
            Connect With Me
          </h2>
          <p className="max-w-md text-slate-400 text-xs md:text-sm font-light mt-2 leading-relaxed">
            Interested in collaboration, contract roles, or project integrations? Drop a message below.
          </p>
        </framerMotion.div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-4">
          
          {/* Info Sidebar Column */}
          <framerMotion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-4 flex flex-col justify-between gap-6 glass-panel p-8 rounded-3xl border border-slate-800/60"
          >
            <div className="flex flex-col gap-8">
              <h3 className="text-lg font-space font-bold text-white uppercase tracking-wider">
                Connection Channels
              </h3>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/40 text-slate-300 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-all duration-300">
                    <Mail size={18} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-slate-500">EMAIL DIRECT</span>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-xs font-semibold text-slate-300 hover:text-white transition-colors">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/40 text-slate-300 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-all duration-300">
                    <MapPin size={18} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-slate-500">GEOLOCATION</span>
                    <span className="text-xs font-semibold text-slate-300">
                      India
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 mt-8">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                FOLLOW OR FORK
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-slate-850 hover:bg-violet-600/20 rounded-xl border border-slate-800 hover:border-violet-500/40 text-slate-400 hover:text-white transition-all duration-300 cursor-pointer"
                  aria-label="GitHub"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-slate-850 hover:bg-violet-600/20 rounded-xl border border-slate-800 hover:border-violet-500/40 text-slate-400 hover:text-white transition-all duration-300 cursor-pointer"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
              </div>
            </div>
          </framerMotion.div>

          {/* Form Interactive Glass Card */}
          <framerMotion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8 glass-card p-8 rounded-3xl relative"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Name field */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    placeholder="John Doe"
                    className="w-full bg-[#080808]/40 border border-slate-850 focus:border-cyan-500/40 focus:outline-none rounded-xl px-4 py-3 text-xs text-white placeholder-slate-600 transition-colors"
                  />
                  {errors.name && (
                    <span className="text-[10px] text-red-400 font-mono flex items-center gap-1 mt-0.5">
                      <AlertCircle size={10} /> {errors.name.message}
                    </span>
                  )}
                </div>

                {/* Email field */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    placeholder="john@example.com"
                    className="w-full bg-[#080808]/40 border border-slate-850 focus:border-cyan-500/40 focus:outline-none rounded-xl px-4 py-3 text-xs text-white placeholder-slate-600 transition-colors"
                  />
                  {errors.email && (
                    <span className="text-[10px] text-red-400 font-mono flex items-center gap-1 mt-0.5">
                      <AlertCircle size={10} /> {errors.email.message}
                    </span>
                  )}
                </div>
              </div>

              {/* Subject field */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="subject" className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  {...register("subject", { required: "Subject is required" })}
                  placeholder="Collaboration details"
                  className="w-full bg-[#080808]/40 border border-slate-850 focus:border-cyan-500/40 focus:outline-none rounded-xl px-4 py-3 text-xs text-white placeholder-slate-600 transition-colors"
                />
                {errors.subject && (
                  <span className="text-[10px] text-red-400 font-mono flex items-center gap-1 mt-0.5">
                    <AlertCircle size={10} /> {errors.subject.message}
                  </span>
                )}
              </div>

              {/* Message field */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                  Message Details
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register("message", { required: "Message details are required" })}
                  placeholder="Hey Madhav, let's connect regarding..."
                  className="w-full bg-[#080808]/40 border border-slate-850 focus:border-cyan-500/40 focus:outline-none rounded-xl p-4 text-xs text-white placeholder-slate-600 resize-none transition-colors"
                />
                {errors.message && (
                  <span className="text-[10px] text-red-400 font-mono flex items-center gap-1 mt-0.5">
                    <AlertCircle size={10} /> {errors.message.message}
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between gap-4 mt-2">
                <AnimatePresence mode="wait">
                  {submitSuccess && (
                    <framerMotion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="text-xs text-green-400 font-mono flex items-center gap-1.5"
                    >
                      <CheckCircle size={14} /> Message sent successfully!
                    </framerMotion.div>
                  )}
                  {submitSuccess === false && (
                    <framerMotion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="text-xs text-red-400 font-mono flex items-center gap-1.5"
                    >
                      <AlertCircle size={14} /> Submit failed. Please try again.
                    </framerMotion.div>
                  )}
                </AnimatePresence>

                <MagneticButton className="ml-auto w-full sm:w-auto">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto cursor-pointer flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-xs font-mono tracking-widest bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white font-bold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed border border-violet-500/20 shadow-[0_0_15px_rgba(124,58,237,0.2)]"
                  >
                    {isSubmitting ? (
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        SEND MESSAGE <Send size={12} />
                      </>
                    )}
                  </button>
                </MagneticButton>
              </div>
            </form>
          </framerMotion.div>

        </div>
      </div>
    </section>
  );
}
