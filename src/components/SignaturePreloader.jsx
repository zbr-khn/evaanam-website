import React, { useState, useEffect } from "react";

/**
 * SignaturePreloader
 * Recreates the authentic luxury EVAANAM brand animation derived from the official identity:
 * - Architectural grid background
 * - Sacred geometry dual-square astrolabe & concentric gold ring construction
 * - Radiant central origin point
 * - Serif EVAANAM typography reveal
 * - MANPOWER & EXECUTION · PRIVATE LIMITED
 * - WHERE EVERY DETAIL IS AN EXPERIENCE
 */
export default function SignaturePreloader({ onComplete }) {
  const [phase, setPhase] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    // Stage-by-stage progressive cinematic animation
    const timers = [];

    // Phase 1: Origin Point ignition (200ms)
    timers.push(setTimeout(() => setPhase(1), 200));

    // Phase 2: Concentric Ring drawing (600ms)
    timers.push(setTimeout(() => setPhase(2), 600));

    // Phase 3: Dual Geometric Diamonds Drawing & Alignment (1100ms)
    timers.push(setTimeout(() => setPhase(3), 1100));

    // Phase 4: EVAANAM Serif Wordmark Reveal (1750ms)
    timers.push(setTimeout(() => setPhase(4), 1750));

    // Phase 5: Secondary Typography & Slogan (2350ms)
    timers.push(setTimeout(() => setPhase(5), 2350));

    // Phase 6: Precision Lock & Aperture Expansion (3300ms)
    timers.push(
      setTimeout(() => {
        setIsExiting(true);
      }, 3300)
    );

    // Final: Crossfade Unmount (3900ms)
    timers.push(
      setTimeout(() => {
        setIsRemoved(true);
        if (onComplete) onComplete();
      }, 3900)
    );

    return () => {
      timers.forEach((t) => clearTimeout(t));
    };
  }, [onComplete]);

  if (isRemoved) return null;

  return (
    <div
      role="status"
      aria-label="EVAANAM Brand Experience Loading"
      className={`fixed inset-0 z-[999999] w-screen h-screen bg-[#0C0E0D] text-[#F5F1E8] flex items-center justify-center overflow-hidden select-none transition-all duration-700 ease-out pointer-events-auto ${
        isExiting ? "opacity-0 scale-[1.03] pointer-events-none" : "opacity-100 scale-100"
      }`}
    >
      {/* Scoped CSS for SVG Drawing & Shimmer Effects */}
      <style>{`
        @keyframes strokeDraw {
          to {
            stroke-dashoffset: 0;
          }
        }
        @keyframes slowSpin {
          0% {
            transform: rotate(45deg);
          }
          100% {
            transform: rotate(405deg);
          }
        }
        @keyframes slowSpinReverse {
          0% {
            transform: rotate(25deg);
          }
          100% {
            transform: rotate(-335deg);
          }
        }
        @keyframes goldGlowPulse {
          0%, 100% {
            opacity: 0.8;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.15);
          }
        }
        @keyframes letterShimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        .shimmer-text {
          background: linear-gradient(90deg, #F5F1E8 0%, #D4BA8C 50%, #F5F1E8 100%);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: letterShimmer 4s ease-in-out infinite;
        }
      `}</style>

      {/* 1. Subtle Architectural Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(176, 141, 87, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(176, 141, 87, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          backgroundPosition: "center center",
        }}
      />

      {/* Subtle Central Radial Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(197, 164, 109, 0.08) 0%, transparent 65%, #080A09 100%)",
        }}
      />

      {/* 2. Main Identity Centerpiece */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-2xl mx-auto space-y-8">
        
        {/* A. Sacred Geometry Emblem */}
        <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center">
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full overflow-visible"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer Diamond Square 1 (Rotated 45deg) */}
            <rect
              x="62"
              y="62"
              width="76"
              height="76"
              stroke="#D4BA8C"
              strokeWidth="1.2"
              strokeDasharray="304"
              strokeDashoffset={phase >= 3 ? "0" : "304"}
              style={{
                transformOrigin: "100px 100px",
                transform: "rotate(45deg)",
                transition: "stroke-dashoffset 1.2s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s",
                opacity: phase >= 3 ? 0.9 : 0,
              }}
            />

            {/* Inner Diamond Square 2 (Rotated ~28deg, creating the sacred dual-rhombus geometry) */}
            <rect
              x="62"
              y="62"
              width="76"
              height="76"
              stroke="#B08D57"
              strokeWidth="0.9"
              strokeDasharray="304"
              strokeDashoffset={phase >= 3 ? "0" : "304"}
              style={{
                transformOrigin: "100px 100px",
                transform: "rotate(28deg)",
                transition: "stroke-dashoffset 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.15s, opacity 0.8s",
                opacity: phase >= 3 ? 0.75 : 0,
              }}
            />

            {/* Concentric Circle */}
            <circle
              cx="100"
              cy="100"
              r="26"
              stroke="#C5A46D"
              strokeWidth="1.1"
              strokeDasharray="164"
              strokeDashoffset={phase >= 2 ? "0" : "164"}
              style={{
                transition: "stroke-dashoffset 1s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s",
                opacity: phase >= 2 ? 0.95 : 0,
              }}
            />

            {/* Outer Subtle Alignment Ring */}
            <circle
              cx="100"
              cy="100"
              r="48"
              stroke="#B08D57"
              strokeWidth="0.5"
              strokeDasharray="4 4"
              style={{
                transition: "opacity 1s ease-out",
                opacity: phase >= 3 ? 0.35 : 0,
              }}
            />

            {/* Radiant Central Gold Origin Dot */}
            <circle
              cx="100"
              cy="100"
              r="3.5"
              fill="#D4BA8C"
              style={{
                transformOrigin: "100px 100px",
                transition: "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.5s",
                transform: phase >= 1 ? "scale(1)" : "scale(0)",
                opacity: phase >= 1 ? 1 : 0,
                filter: "drop-shadow(0 0 6px rgba(212, 186, 140, 0.8))",
              }}
            />
          </svg>
        </div>

        {/* B. Typography Section */}
        <div className="space-y-3 sm:space-y-4">
          {/* Main Title: EVAANAM */}
          <div
            className={`transition-all duration-1000 ease-out transform ${
              phase >= 4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <h1
              className="shimmer-text font-serif text-5xl sm:text-7xl md:text-8xl font-normal uppercase tracking-[0.22em] text-[#F5F1E8]"
              style={{
                letterSpacing: "0.22em",
                textIndent: "0.22em", // offsets trailing letter-spacing for true centering
              }}
            >
              EVAANAM
            </h1>
          </div>

          {/* Subtitle Lines */}
          <div
            className={`space-y-1.5 transition-all duration-1000 ease-out delay-150 transform ${
              phase >= 5 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            {/* MANPOWER & EXECUTION */}
            <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.38em] text-[#C5A46D] font-medium">
              MANPOWER &amp; EXECUTION
            </p>

            {/* PRIVATE LIMITED */}
            <p className="text-[9px] sm:text-[10.5px] font-mono uppercase tracking-[0.42em] text-[#B08D57]/90 font-normal">
              PRIVATE LIMITED
            </p>
          </div>

          {/* Signature Slogan: WHERE EVERY DETAIL IS AN EXPERIENCE */}
          <div
            className={`pt-3 transition-all duration-1000 ease-out delay-300 transform ${
              phase >= 5 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            <p className="font-serif italic text-xs sm:text-sm tracking-[0.26em] text-[#C5A46D]/80 font-light">
              WHERE EVERY DETAIL IS AN EXPERIENCE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
