import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function GeometricMarginFrame() {
  const location = useLocation();
  const leftProgressBarRef = useRef(null);
  const rightProgressBarRef = useRef(null);

  useEffect(() => {
    let ticking = false;
    let cachedDocHeight = 1;

    // Cache document dimensions on resize/orientation change to eliminate layout thrashing
    const measure = () => {
      cachedDocHeight = Math.max(
        1,
        (document.documentElement.scrollHeight || document.body.scrollHeight) - window.innerHeight
      );
    };

    const updateScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || 0;
      const progress = Math.min(1, Math.max(0, scrollTop / cachedDocHeight));

      const transformValue = `scaleY(${progress}) translate3d(0, 0, 0)`;

      if (leftProgressBarRef.current) {
        leftProgressBarRef.current.style.transform = transformValue;
      }
      if (rightProgressBarRef.current) {
        rightProgressBarRef.current.style.transform = transformValue;
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    const handleResize = () => {
      measure();
      handleScroll();
    };

    measure();
    updateScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("orientationchange", handleResize, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, [location.pathname]);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-30 select-none overflow-hidden"
    >
      {/* ================================================================ */}
      {/* 1. LEFT ARCHITECTURAL MARGIN LINE & LIVE SCROLL PROGRESS          */}
      {/* ================================================================ */}
      <div className="absolute top-0 bottom-0 left-1.5 sm:left-4 md:left-6 lg:left-12 xl:left-16 flex flex-col justify-between pointer-events-none">
        {/* Top-Left Geographic Coordinates (Desktop) */}
        <div className="pt-24 flex flex-col items-center -ml-[7px] hidden xl:flex pointer-events-none">
          <span className="-rotate-90 origin-left translate-y-12 text-[8px] font-mono tracking-[0.28em] uppercase text-chocolate-400/70 dark:text-bronze-400/50">
            NCR · 28.6139° N
          </span>
        </div>

        {/* Vertical Margin Hairline (Clean, Continuous across all devices) */}
        <div className="absolute top-0 bottom-0 left-0 w-[1.5px] bg-gradient-to-b from-amber-500/25 via-chocolate-700/15 dark:via-bronze-500/15 to-amber-500/25 pointer-events-none">
          {/* Dynamic Real-Time Live Scroll Progress Glow Bar (LEFT SIDE) */}
          <div
            ref={leftProgressBarRef}
            className="w-[1.5px] h-full bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600 dark:from-bronze-400 dark:via-amber-400 dark:to-amber-500 shadow-[0_0_8px_rgba(212,186,140,0.9)] will-change-transform pointer-events-none"
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
      <div className="absolute top-0 bottom-0 right-1.5 sm:right-4 md:right-6 lg:right-12 xl:right-16 flex flex-col justify-between pointer-events-none">
        {/* Top-Right Geographic Coordinates (Desktop) */}
        <div className="pt-24 flex flex-col items-center -mr-[7px] hidden xl:flex pointer-events-none">
          <span className="rotate-90 origin-right translate-y-12 text-[8px] font-mono tracking-[0.28em] uppercase text-chocolate-400/70 dark:text-bronze-400/50">
            DELHI · 77.2090° E
          </span>
        </div>

        {/* Vertical Margin Hairline (Clean, Continuous across all devices) */}
        <div className="absolute top-0 bottom-0 right-0 w-[1.5px] bg-gradient-to-b from-amber-500/25 via-chocolate-700/15 dark:via-bronze-500/15 to-amber-500/25 pointer-events-none">
          {/* Dynamic Real-Time Live Scroll Progress Glow Bar (RIGHT SIDE) */}
          <div
            ref={rightProgressBarRef}
            className="w-[1.5px] h-full bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600 dark:from-bronze-400 dark:via-amber-400 dark:to-amber-500 shadow-[0_0_8px_rgba(212,186,140,0.9)] will-change-transform pointer-events-none"
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
