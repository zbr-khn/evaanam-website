import React, { useState, useEffect } from "react";

/**
 * SignaturePreloader (Luxury Brand Edition - Circular Sacred Emblem)
 * An elevated celestial circular astrolabe calibration animation in signature EVAANAM colors:
 * - Emblem Shape: Concentric Circular Celestial Astrolabe Rings & Radial Compass Ticks
 * - Background: Deep British Racing Green / Forest Night (#081F18 -> #0C2B22)
 * - Emblem: Imperial Gold (#D4BA8C & #B08D57) with Sacred Circular Gyroscope
 * - Typography: Alabaster Cream (#FAF8F3) with Gold Shimmer & Staggered Glyph Reveal
 * - Baseline: MANPOWER & EXECUTION · PRIVATE LIMITED · WHERE EVERY DETAIL IS AN EXPERIENCE
 */
export default function SignaturePreloader({ onComplete }) {
  const [phase, setPhase] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  const letters = ["E", "V", "A", "A", "N", "A", "M"];

  useEffect(() => {
    const timers = [];

    // Phase 1: Origin Core & Central Ring (150ms)
    timers.push(setTimeout(() => setPhase(1), 150));

    // Phase 2: Concentric Inner & Middle Circles (550ms)
    timers.push(setTimeout(() => setPhase(2), 550));

    // Phase 3: Outer Celestial Astrolabe Circles & Radial Crosshairs (1050ms)
    timers.push(setTimeout(() => setPhase(3), 1050));

    // Phase 4: Staggered Serif Letter Reveal (1650ms)
    timers.push(setTimeout(() => setPhase(4), 1650));

    // Phase 5: Hairline Divider & Corporate Subtitles (2300ms)
    timers.push(setTimeout(() => setPhase(5), 2300));

    // Phase 6: Signature Slogan & Final Precision Lock (2800ms)
    timers.push(setTimeout(() => setPhase(6), 2800));

    // Phase 7: Cinematic Aperture Crossfade Exit (3500ms)
    timers.push(
      setTimeout(() => {
        setIsExiting(true);
      }, 3500)
    );

    // Phase 8: Unmount & Reveal Website (4100ms)
    timers.push(
      setTimeout(() => {
        setIsRemoved(true);
        if (onComplete) onComplete();
      }, 4100)
    );

    return () => {
      timers.forEach((t) => clearTimeout(t));
    };
  }, [onComplete]);

  if (isRemoved) return null;

  return (
    <div
      role="status"
      aria-label="EVAANAM Experience Loading"
      className={`fixed inset-0 z-[999999] w-screen h-screen bg-[#081F18] text-[#FAF8F3] flex items-center justify-center overflow-hidden select-none transition-all duration-800 ease-out pointer-events-auto ${
        isExiting ? "opacity-0 scale-[1.04] pointer-events-none" : "opacity-100 scale-100"
      }`}
    >
      {/* Scoped CSS Keyframes for Circular Astrolabe Motion */}
      <style>{`
        @keyframes circularRotateClockwise {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes circularRotateCounter {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(-360deg); }
        }
        @keyframes corePulse {
          0%, 100% {
            transform: scale(1);
            filter: drop-shadow(0 0 8px rgba(212, 186, 140, 0.9));
          }
          50% {
            transform: scale(1.25);
            filter: drop-shadow(0 0 16px rgba(212, 186, 140, 1));
          }
        }
        @keyframes goldShimmerSweep {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }
        .luxury-gold-shimmer {
          background: linear-gradient(
            110deg,
            #FAF8F3 0%,
            #FAF8F3 30%,
            #D4BA8C 50%,
            #B08D57 60%,
            #FAF8F3 80%,
            #FAF8F3 100%
          );
          background-size: 200% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: goldShimmerSweep 4.5s ease-in-out infinite;
        }
      `}</style>

      {/* 1. Deep Brand Green Vignette & Architectural Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(212, 186, 140, 0.14) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(212, 186, 140, 0.14) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
          backgroundPosition: "center center",
        }}
      />

      {/* Center Emerald Ambient Light Orb */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(13, 48, 37, 0.9) 0%, rgba(8, 31, 24, 0.95) 60%, #061712 100%)",
        }}
      />

      {/* Corner Precision Coordinates */}
      <div className="absolute top-8 left-8 text-[#B08D57]/40 font-mono text-[10px] tracking-widest hidden sm:block">
        + 28°33'N 77°16'E
      </div>
      <div className="absolute top-8 right-8 text-[#B08D57]/40 font-mono text-[10px] tracking-widest hidden sm:block">
        MUSTER OPS +
      </div>
      <div className="absolute bottom-8 left-8 text-[#B08D57]/40 font-mono text-[10px] tracking-widest hidden sm:block">
        + SPEC: 001/DELHI
      </div>
      <div className="absolute bottom-8 right-8 text-[#B08D57]/40 font-mono text-[10px] tracking-widest hidden sm:block">
        PRECISION FLOOR +
      </div>

      {/* 2. Main Identity Centerpiece */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-2xl mx-auto space-y-7">
        
        {/* A. Concentric Circular Sacred Astrolabe Emblem */}
        <div className="relative w-40 h-40 sm:w-48 sm:h-48 flex items-center justify-center">
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full overflow-visible"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* 1. Outer Celestial Compass Ring with Micro Ticks */}
            <g
              style={{
                transformOrigin: "100px 100px",
                animation: phase >= 2 ? "circularRotateClockwise 60s linear infinite" : "none",
                opacity: phase >= 2 ? 0.5 : 0,
                transition: "opacity 1s ease-out",
              }}
            >
              <circle
                cx="100"
                cy="100"
                r="70"
                stroke="#B08D57"
                strokeWidth="0.75"
                strokeDasharray="3 6"
              />
              {/* 4 Cardinal Crosshair Ticks */}
              <line x1="100" y1="24" x2="100" y2="30" stroke="#D4BA8C" strokeWidth="1.2" />
              <line x1="100" y1="170" x2="100" y2="176" stroke="#D4BA8C" strokeWidth="1.2" />
              <line x1="24" y1="100" x2="30" y2="100" stroke="#D4BA8C" strokeWidth="1.2" />
              <line x1="170" y1="100" x2="176" y2="100" stroke="#D4BA8C" strokeWidth="1.2" />
            </g>

            {/* 2. Primary Outer Sacred Circle */}
            <circle
              cx="100"
              cy="100"
              r="56"
              stroke="#D4BA8C"
              strokeWidth="1.3"
              strokeDasharray="352"
              strokeDashoffset={phase >= 3 ? "0" : "352"}
              style={{
                transition: "stroke-dashoffset 1.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.7s",
                opacity: phase >= 3 ? 0.95 : 0,
              }}
            />

            {/* 3. Middle Counter-Rotating Sacred Astrolabe Ring */}
            <g
              style={{
                transformOrigin: "100px 100px",
                animation: phase >= 2 ? "circularRotateCounter 45s linear infinite" : "none",
                opacity: phase >= 2 ? 0.7 : 0,
                transition: "opacity 0.8s ease-out",
              }}
            >
              <circle
                cx="100"
                cy="100"
                r="42"
                stroke="#B08D57"
                strokeWidth="0.9"
                strokeDasharray="8 4"
              />
            </g>

            {/* 4. Inner Concentric Sacred Ring */}
            <circle
              cx="100"
              cy="100"
              r="28"
              stroke="#D4BA8C"
              strokeWidth="1.4"
              strokeDasharray="176"
              strokeDashoffset={phase >= 2 ? "0" : "176"}
              style={{
                transition: "stroke-dashoffset 1.1s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s",
                opacity: phase >= 2 ? 0.95 : 0,
              }}
            />

            {/* 5. Core Sacred Enclosure Ring */}
            <circle
              cx="100"
              cy="100"
              r="15"
              stroke="#B08D57"
              strokeWidth="1"
              strokeDasharray="94"
              strokeDashoffset={phase >= 1 ? "0" : "94"}
              style={{
                transition: "stroke-dashoffset 0.9s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s",
                opacity: phase >= 1 ? 0.85 : 0,
              }}
            />

            {/* 4 Orbital Vertex Flares on the Primary Circle */}
            {phase >= 3 && (
              <g className="transition-opacity duration-700">
                <circle cx="100" cy="44" r="2.2" fill="#FAF8F3" filter="drop-shadow(0 0 5px #D4BA8C)" />
                <circle cx="156" cy="100" r="2.2" fill="#FAF8F3" filter="drop-shadow(0 0 5px #D4BA8C)" />
                <circle cx="100" cy="156" r="2.2" fill="#FAF8F3" filter="drop-shadow(0 0 5px #D4BA8C)" />
                <circle cx="44" cy="100" r="2.2" fill="#FAF8F3" filter="drop-shadow(0 0 5px #D4BA8C)" />
              </g>
            )}

            {/* 6. Radiant Central Gold Origin Core */}
            <circle
              cx="100"
              cy="100"
              r="4.5"
              fill="#FAF8F3"
              stroke="#D4BA8C"
              strokeWidth="1.5"
              style={{
                transformOrigin: "100px 100px",
                animation: phase >= 1 ? "corePulse 2.8s ease-in-out infinite" : "none",
                transform: phase >= 1 ? "scale(1)" : "scale(0)",
                opacity: phase >= 1 ? 1 : 0,
                transition: "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s",
              }}
            />
          </svg>
        </div>

        {/* B. Typography Lockup */}
        <div className="space-y-3.5">
          {/* Staggered Letter-by-Letter EVAANAM Title Reveal */}
          <div className="flex items-center justify-center">
            <h1
              className="luxury-gold-shimmer font-serif text-5xl sm:text-7xl md:text-8xl font-normal uppercase tracking-[0.24em] text-[#FAF8F3] flex justify-center"
              style={{
                letterSpacing: "0.24em",
                textIndent: "0.24em",
              }}
            >
              {letters.map((char, index) => (
                <span
                  key={index}
                  className="inline-block transition-all duration-700 ease-out"
                  style={{
                    opacity: phase >= 4 ? 1 : 0,
                    transform: phase >= 4 ? "translateY(0)" : "translateY(18px)",
                    transitionDelay: `${index * 60}ms`,
                  }}
                >
                  {char}
                </span>
              ))}
            </h1>
          </div>

          {/* Precision Hairline Divider with Centered Diamond */}
          <div
            className={`flex items-center justify-center space-x-3 transition-all duration-800 ease-out ${
              phase >= 5 ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
          >
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#D4BA8C]/60 to-[#D4BA8C]" />
            <div className="w-1.5 h-1.5 rotate-45 bg-[#D4BA8C] shadow-sm" />
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent via-[#D4BA8C]/60 to-[#D4BA8C]" />
          </div>

          {/* Corporate Division Subtitles */}
          <div
            className={`space-y-1 transition-all duration-800 ease-out delay-100 transform ${
              phase >= 5 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.38em] text-[#D4BA8C] font-semibold">
              MANPOWER &amp; EXECUTION
            </p>

            <p className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.42em] text-[#B08D57] font-medium">
              PRIVATE LIMITED
            </p>
          </div>

          {/* Signature Slogan */}
          <div
            className={`pt-2 transition-all duration-800 ease-out delay-200 transform ${
              phase >= 6 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            <p className="font-serif italic text-xs sm:text-sm tracking-[0.24em] text-[#D4BA8C]/85 font-light">
              WHERE EVERY DETAIL IS AN EXPERIENCE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
