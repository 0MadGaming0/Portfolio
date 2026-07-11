"use client";

import { ArrowUp } from "lucide-react";
import MagneticButton from "../ui/MagneticButton";
import { PERSONAL_INFO } from "@/lib/data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#080808] py-12 px-4 md:px-8 border-t border-slate-900">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Animated logo/signature */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-space font-extrabold tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-500">
            {PERSONAL_INFO.name.toUpperCase()}
          </span>
          <span className="text-[8px] font-mono text-slate-500">
            © 2026 / ALL RIGHTS RESERVED
          </span>
        </div>

        {/* Info */}
        <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest text-center md:text-right flex items-center gap-6">
          <span>DESIGNED & CODED WITH PASSION</span>
          
          {/* Back to top magnetic button */}
          <MagneticButton>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp size={14} />
            </button>
          </MagneticButton>
        </div>
      </div>
    </footer>
  );
}
