import React, { useEffect, useState } from "react";

export default function GeometricMarginFrame() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    const updateScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setScrollProgress(Math.min(1, Math.max(0, window.scrollY / docHeight)));
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-30 select-none overflow-hidden"
    >
      {/* ================================================================ */}
      {/* 1. LEFT ARCHITECTURAL MARGIN LINE & GEOMETRIC ACCENTS            */}
      {/* ================================================================ */}
      <div className="absolute top-0 bottom-0 left-4 sm:left-8 lg:left-12 xl:left-16 flex flex-col justify-between">
        {/* Top-Left Geometric Crosshair Node */}
        <div className="pt-24 flex flex-col items-center -ml-[7px]">
          {/* Geometric Diamond Crosshair */}
          <div className="relative flex items-center justify-center w-3.5 h-3.5">
            <div className="absolute w-[1px] h-3.5 bg-bronze-500/60" />
            <div className="absolute h-[1px] w-3.5 bg-bronze-500/60" />
            <div className="w-1.5 h-1.5 rotate-45 border border-bronze-500/80 bg-cream-100 dark:bg-night-900" />
          </div>

          {/* Micro Vertical Coordinate Text */}
          <span className="hidden xl:block mt-3 -rotate-90 origin-left translate-y-12 text-[8px] font-mono tracking-[0.28em] uppercase text-chocolate-400/80 dark:text-bronze-400/60">
            NCR · 28.6139° N
          </span>
        </div>

        {/* Vertical Margin Hairline (Full Height) */}
        <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-gradient-to-b from-bronze-500/25 via-chocolate-700/10 dark:via-bronze-500/15 to-bronze-500/25">
          {/* Dynamic Scroll Progress Glow Bar */}
          <div
            className="w-[1px] bg-gradient-to-b from-bronze-400 via-bronze-500 to-amber-400 shadow-[0_0_8px_rgba(176,141,87,0.6)] transition-all duration-150 ease-out"
            style={{ height: `${scrollProgress * 100}%` }}
          />

          {/* Hash Marks along Margin Line (Architectural Ruler Ticks) */}
          <div className="absolute top-[25%] -left-1 w-2.5 h-[1px] bg-bronze-500/40" />
          <div className="absolute top-[50%] -left-1.5 w-3.5 h-[1px] bg-bronze-500/60 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rotate-45 border border-bronze-500 bg-cream-100 dark:bg-night-900 -ml-0.5" />
          </div>
          <div className="absolute top-[75%] -left-1 w-2.5 h-[1px] bg-bronze-500/40" />
        </div>

        {/* Bottom-Left Geometric Corner Node */}
        <div className="pb-8 -ml-[7px] flex flex-col items-center">
          <div className="relative flex items-center justify-center w-3.5 h-3.5">
            <div className="absolute w-[1px] h-3.5 bg-bronze-500/60" />
            <div className="absolute h-[1px] w-3.5 bg-bronze-500/60" />
            <div className="w-1 h-1 bg-bronze-500" />
          </div>
        </div>
      </div>

      {/* ================================================================ */}
      {/* 2. RIGHT ARCHITECTURAL MARGIN LINE & GEOMETRIC ACCENTS           */}
      {/* ================================================================ */}
      <div className="absolute top-0 bottom-0 right-4 sm:right-8 lg:right-12 xl:right-16 flex flex-col justify-between">
        {/* Top-Right Geometric Crosshair Node */}
        <div className="pt-24 flex flex-col items-center -mr-[7px]">
          {/* Geometric Diamond Crosshair */}
          <div className="relative flex items-center justify-center w-3.5 h-3.5">
            <div className="absolute w-[1px] h-3.5 bg-bronze-500/60" />
            <div className="absolute h-[1px] w-3.5 bg-bronze-500/60" />
            <div className="w-1.5 h-1.5 rotate-45 border border-bronze-500/80 bg-cream-100 dark:bg-night-900" />
          </div>

          {/* Micro Vertical Title Text */}
          <span className="hidden xl:block mt-3 rotate-90 origin-right translate-y-12 text-[8px] font-mono tracking-[0.28em] uppercase text-chocolate-400/80 dark:text-bronze-400/60">
            EVAANAM · OPS FRAME
          </span>
        </div>

        {/* Vertical Margin Hairline (Full Height) */}
        <div className="absolute top-0 bottom-0 right-0 w-[1px] bg-gradient-to-b from-bronze-500/25 via-chocolate-700/10 dark:via-bronze-500/15 to-bronze-500/25">
          {/* Dynamic Scroll Progress Glow Bar */}
          <div
            className="w-[1px] bg-gradient-to-b from-bronze-400 via-bronze-500 to-amber-400 shadow-[0_0_8px_rgba(176,141,87,0.6)] transition-all duration-150 ease-out"
            style={{ height: `${scrollProgress * 100}%` }}
          />

          {/* Hash Marks along Margin Line */}
          <div className="absolute top-[25%] -right-1 w-2.5 h-[1px] bg-bronze-500/40" />
          <div className="absolute top-[50%] -right-1.5 w-3.5 h-[1px] bg-bronze-500/60 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rotate-45 border border-bronze-500 bg-cream-100 dark:bg-night-900 -mr-0.5" />
          </div>
          <div className="absolute top-[75%] -right-1 w-2.5 h-[1px] bg-bronze-500/40" />
        </div>

        {/* Bottom-Right Geometric Corner Node */}
        <div className="pb-8 -mr-[7px] flex flex-col items-center">
          <div className="relative flex items-center justify-center w-3.5 h-3.5">
            <div className="absolute w-[1px] h-3.5 bg-bronze-500/60" />
            <div className="absolute h-[1px] w-3.5 bg-bronze-500/60" />
            <div className="w-1 h-1 bg-bronze-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
