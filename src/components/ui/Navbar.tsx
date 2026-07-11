"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/data";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // IntersectionObserver to detect active section
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px", // Detect active section in middle of viewport
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    navItems.forEach((item) => {
      const section = document.querySelector(item.href);
      if (section) observer.observe(section);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center px-4 ${
          isScrolled ? "pt-4" : "pt-8"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div
          className={`w-full max-w-5xl flex items-center justify-between transition-all duration-500 rounded-full px-6 md:px-8 ${
            isScrolled
              ? "glass-panel h-14 shadow-lg shadow-[#080808]/50"
              : "bg-transparent h-18"
          }`}
        >
          {/* Logo / Brand Name */}
          <button
            onClick={() => scrollToSection("#home")}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <span className="text-lg font-space font-extrabold tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-500 group-hover:from-violet-400 group-hover:to-cyan-500 transition-all duration-300">
              {PERSONAL_INFO.name.toUpperCase()}
            </span>
            <span className="text-[9px] font-mono border border-violet-500/30 text-violet-400 px-1.5 py-0.5 rounded-full hidden sm:inline-block">
              DEV
            </span>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative text-xs tracking-wider font-medium px-4 py-2 rounded-full transition-colors duration-300 cursor-pointer ${
                    isActive ? "text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-violet-600/25 border border-violet-500/30 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTA */}
          <button
            onClick={() => scrollToSection("#contact")}
            className="hidden lg:flex items-center gap-1.5 text-xs font-mono tracking-wider text-cyan-400 hover:text-white transition-colors duration-300 cursor-pointer"
          >
            Connect <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </button>

          {/* Mobile Hamburguer Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-slate-300 hover:text-white p-2 transition-colors duration-300 cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Glass Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#080808]/90 backdrop-blur-xl lg:hidden flex flex-col justify-center px-8"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <motion.button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className="text-left font-space text-2xl font-bold tracking-wider cursor-pointer"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                  >
                    <span
                      className={`transition-colors duration-300 ${
                        isActive
                          ? "bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-500"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </span>
                  </motion.button>
                );
              })}
              
              <motion.button
                onClick={() => scrollToSection("#contact")}
                className="mt-8 py-3 rounded-full text-center border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 transition-colors duration-300 font-mono text-sm tracking-widest cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.4 }}
              >
                GET IN TOUCH
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
