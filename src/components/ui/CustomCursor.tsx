"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type CursorState = "default" | "hover" | "card" | "text";

export default function CustomCursor() {
  const [state, setState] = useState<CursorState>("default");
  const [isVisible, setIsVisible] = useState(false);
  const [isDown, setIsDown] = useState(false);

  // Exact position — no lag, no spring (dot tracks pixel-perfectly)
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  // Ring follows with a gentle spring lag — feels elastic & premium
  const ringX = useSpring(dotX, { stiffness: 280, damping: 28, mass: 0.4 });
  const ringY = useSpring(dotY, { stiffness: 280, damping: 28, mass: 0.4 });

  useEffect(() => {
    document.body.classList.add("custom-cursor-active");

    const onMove = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      setIsVisible(true);
    };

    const onDown = () => setIsDown(true);
    const onUp = () => setIsDown(false);
    const onLeave = () => setIsVisible(false);
    const onEnter = () => setIsVisible(true);

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;

      if (t.closest(".glass-card") || t.closest("[data-cursor='card']")) {
        setState("card");
      } else if (
        t.tagName === "A" ||
        t.tagName === "BUTTON" ||
        t.closest("a") ||
        t.closest("button") ||
        t.closest("[data-cursor='pointer']") ||
        t.classList.contains("cursor-pointer")
      ) {
        setState("hover");
      } else if (
        t.tagName === "INPUT" ||
        t.tagName === "TEXTAREA" ||
        t.isContentEditable
      ) {
        setState("text");
      } else {
        setState("default");
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown, { passive: true });
    window.addEventListener("mouseup", onUp, { passive: true });
    document.addEventListener("mouseleave", onLeave, { passive: true });
    document.addEventListener("mouseenter", onEnter, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseover", onOver);
      document.body.classList.remove("custom-cursor-active");
    };
  }, [dotX, dotY]);

  if (!isVisible) return null;

  /* ---------- derived values ---------- */
  const isHovering = state === "hover" || state === "card";

  /* Ring size */
  const ringSize = state === "card" ? 64 : state === "hover" ? 48 : 42;

  /* Ring border & fill */
  const ringBorder =
    state === "card"
      ? "rgba(244,63,94,1)"
      : state === "hover"
      ? "rgba(244,63,94,0.95)"
      : "rgba(244,63,94,0.7)";

  const ringBg =
    state === "card"
      ? "rgba(244,63,94,0.2)"
      : "transparent";

  return (
    <>
      {/*
       * Layer 1 — Dot (exact, instant, pixel-perfect)
       * Hidden when hovering interactive elements so text/labels stay clean
       */}
      <motion.span
        className="fixed top-0 left-0 pointer-events-none z-[100001] hidden lg:block"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          willChange: "transform",
        }}
        animate={{
          scale: isDown ? 1.8 : isHovering ? 0 : 1,
          opacity: isHovering ? 0 : 1,
        }}
        transition={{ duration: 0.12 }}
      >
        {/* Crisp dot — sharp white with a strong rose glow */}
        <span
          style={{
            display: "block",
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: "radial-gradient(circle, #fff 20%, #f43f5e 100%)",
            boxShadow: "0 0 0 2px rgba(244,63,94,0.35), 0 0 14px 4px rgba(244,63,94,0.85)",
          }}
        />
      </motion.span>

      {/*
       * Layer 2 — Magnetic Follower Ring (spring lag)
       * Morphs based on context — minimal on default, expanded on hover/card
       */}
      <motion.span
        className="fixed top-0 left-0 pointer-events-none z-[100000] hidden lg:flex items-center justify-center"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          borderRadius: "50%",
          willChange: "transform",
          border: `1.5px solid ${ringBorder}`,
          background: ringBg,
          boxShadow: state !== "default" ? `0 0 12px 2px rgba(244,63,94,0.3)` : `0 0 6px 1px rgba(244,63,94,0.15)`,
        }}
        animate={{
          width: ringSize,
          height: ringSize,
          scale: isDown ? 0.82 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 26 }}
      >
        {/* Inner label — only visible on card hover */}
        <motion.span
          className="text-[9px] font-mono font-semibold tracking-[0.18em] text-rose-300 uppercase select-none"
          initial={false}
          animate={{ opacity: state === "card" ? 1 : 0, scale: state === "card" ? 1 : 0.7 }}
          transition={{ duration: 0.15 }}
        >
          {state === "card" ? "VIEW" : ""}
        </motion.span>

        {/* Small arrow icon on link/button hover */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-rose-400 absolute"
          initial={false}
          animate={{ opacity: state === "hover" ? 1 : 0, scale: state === "hover" ? 1 : 0.5 }}
          transition={{ duration: 0.13 }}
        >
          <line x1="7" y1="17" x2="17" y2="7" />
          <polyline points="7 7 17 7 17 17" />
        </motion.svg>
      </motion.span>

      {/*
       * Layer 3 — Subtle outer pulse ring on card hover only
       * Gives a "magnetic attraction" feel to project cards
       */}
      <motion.span
        className="fixed top-0 left-0 pointer-events-none z-[99999] hidden lg:block rounded-full"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          border: "1px solid rgba(244,63,94,0.2)",
          willChange: "transform",
        }}
        animate={{
          width: state === "card" ? 90 : 42,
          height: state === "card" ? 90 : 42,
          opacity: state === "card" ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 28 }}
      />
    </>
  );
}
