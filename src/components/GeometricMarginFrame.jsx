import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function GeometricMarginFrame() {
  const location = useLocation();
  const leftProgressBarRef = useRef(null);
  const rightProgressBarRef = useRef(null);

  useEffect(() => {
    // Disable on mobile/small viewports to conserve battery & 60-120fps CPU performance
    if (window.innerWidth < 768) return;

    let ticking = false;

    const updateScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || 0;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0;

      if (leftProgressBarRef.current) {
        leftProgressBarRef.current.style.transform = `scaleY(${progress}) translate3d(0, 0, 0)`;
      }
      if (rightProgressBarRef.current) {
        rightProgressBarRef.current.style.transform = `scaleY(${progress}) translate3d(0, 0, 0)`;
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
    window.addEventListener("resize", handleScroll, { passive: true });
    updateScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [location.pathname]);

  return (
    <div
      aria-hidden="true"
      className="hidden md:block fixed inset-0 pointer-events-none z-30 select-none overflow-hidden"
    >
      {/* ================================================================ */}
      {/* 1. LEFT ARCHITECTURAL MARGIN LINE & LIVE SCROLL PROGRESS          */}
      {/* ================================================================ */}
      <div className="absolute top-0 bottom-0 left-2 sm:left-6 lg:left-12 xl:left-16 flex flex-col justify-between">
        {/* Top-Left Geographic Coordinates */}
        <div className="pt-24 flex flex-col items-center -ml-[7px]">
          <span className="hidden xl:block -rotate-90 origin-left translate-y-12 text-[8px] font-mono tracking-[0.28em] uppercase text-chocolate-400/70 dark:text-bronze-400/50">
            NCR · 28.6139° N
          </span>
        </div>

        {/* Vertical Margin Hairline (Clean, Continuous) */}
        <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-gradient-to-b from-bronze-500/20 via-chocolate-700/10 dark:via-bronze-500/10 to-bronze-500/20">
          {/* Dynamic Real-Time Live Scroll Progress Glow Bar (LEFT SIDE) */}
          <div
            ref={leftProgressBarRef}
            className="w-[1px] h-full bg-gradient-to-b from-bronze-400 via-bronze-500 to-amber-400 shadow-[0_0_8px_rgba(176,141,87,0.8)] will-change-transform"
            style={{
              transformOrigin: "top center",
              transform: "scaleY(0) translate3d(0, 0, 0)",
            }}
          />
        </div>
      </div>

      {/* ================================================================ */}
      {/* 2. RIGHT ARCHITECTURAL MARGIN LINE & LIVE SCROLL PROGRESS         */}
      {/* ================================================================ */}
      <div className="absolute top-0 bottom-0 right-2 sm:right-6 lg:right-12 xl:right-16 flex flex-col justify-between">
        {/* Top-Right Geographic Coordinates */}
        <div className="pt-24 flex flex-col items-center -mr-[7px]">
          <span className="hidden xl:block rotate-90 origin-right translate-y-12 text-[8px] font-mono tracking-[0.28em] uppercase text-chocolate-400/70 dark:text-bronze-400/50">
            DELHI · 77.2090° E
          </span>
        </div>

        {/* Vertical Margin Hairline (Clean, Continuous) */}
        <div className="absolute top-0 bottom-0 right-0 w-[1px] bg-gradient-to-b from-bronze-500/20 via-chocolate-700/10 dark:via-bronze-500/10 to-bronze-500/20">
          {/* Dynamic Real-Time Live Scroll Progress Glow Bar (RIGHT SIDE) */}
          <div
            ref={rightProgressBarRef}
            className="w-[1px] h-full bg-gradient-to-b from-bronze-400 via-bronze-500 to-amber-400 shadow-[0_0_8px_rgba(176,141,87,0.8)] will-change-transform"
            style={{
              transformOrigin: "top center",
              transform: "scaleY(0) translate3d(0, 0, 0)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
