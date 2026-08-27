import React, { useState, useEffect } from "react";

/**
 * SignaturePreloader (Big Celestial Circle Behind Text + Cinematic Zoom-In Finale)
 * - Big Sacred Concentric Circle Astrolabe layered directly BEHIND the "EVAANAM" typography
 * - Signature Colors: Deep British Racing Green (#081F18), Imperial Gold (#D4BA8C), Alabaster Cream (#FAF8F3)
 * - Finale: Big Circle dramatically zooms in across the entire viewport (scale 10x) and fades, revealing the Hero Landing Page.
 */
export default function SignaturePreloader({ onComplete }) {
  const [phase, setPhase] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  const letters = ["E", "V", "A", "A", "N", "A", "M"];

  useEffect(() => {
    const timers = [];

    // Phase 1: Origin Core & Radial Ambient Aura (150ms)
    timers.push(setTimeout(() => setPhase(1), 150));

    // Phase 2: Big Concentric Astrolabe Rings Drawing Behind (500ms)
    timers.push(setTimeout(() => setPhase(2), 500));

    // Phase 3: Outer Compass Dial & Cardinal Ticks (950ms)
    timers.push(setTimeout(() => setPhase(3), 950));

    // Phase 4: EVAANAM Letters Reveal in Front of the Circle (1500ms)
    timers.push(setTimeout(() => setPhase(4), 1500));

    // Phase 5: Hairline Divider & Subtitles (2100ms)
    timers.push(setTimeout(() => setPhase(5), 2100));

    // Phase 6: Signature Slogan & Precision Lock (2600ms)
    timers.push(setTimeout(() => setPhase(6), 2600));

    // Phase 7: Big Circle Dramatic Zoom-In Finale (3300ms)
    timers.push(
      setTimeout(() => {
        setIsExiting(true);
      }, 3300)
    );

    // Phase 8: Complete Transition to Hero Section (4200ms)
    timers.push(
      setTimeout(() => {
        setIsRemoved(true);
        if (onComplete) onComplete();
      }, 4200)
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
      className={`fixed inset-0 z-[999999] w-screen h-screen bg-[#081F18] text-[#FAF8F3] flex items-center justify-center overflow-hidden select-none transition-all duration-1000 ease-in-out pointer-events-auto ${
        isExiting ? "opacity-0 scale-[8] pointer-events-none" : "opacity-100 scale-100"
      }`}
      style={{
        transformOrigin: "center center",
      }}
    >
      {/* Scoped CSS Keyframes for High-Fidelity Astrolabe Motion */}
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
            filter: drop-shadow(0 0 12px rgba(212, 186, 140, 0.9));
          }
          50% {
            transform: scale(1.3);
            filter: drop-shadow(0 0 24px rgba(212, 186, 140, 1));
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
          animation: goldShimmerSweep 4s ease-in-out infinite;
        }
      `}</style>

      {/* 1. Deep Brand Green Vignette & Architectural Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(212, 186, 140, 0.14) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(212, 186, 140, 0.14) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          backgroundPosition: "center center",
        }}
      />

      {/* Center Emerald Ambient Light Orb */}
      <div
        className="absolute w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(13, 48, 37, 0.95) 0%, rgba(8, 31, 24, 0.9) 60%, #061712 100%)",
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

      {/* 2. Main Identity Centerpiece Stack */}
      <div className="relative z-10 flex items-center justify-center text-center px-6 max-w-5xl mx-auto w-full h-full">
        
        {/* ================================================================ */}
        {/* LAYER A: BIG SACRED CONCENTRIC CIRCLE ASTROLABE (BEHIND TEXT)    */}
        {/* ================================================================ */}
        <div
          className={`absolute w-[340px] h-[340px] sm:w-[540px] sm:h-[540px] md:w-[680px] md:h-[680px] pointer-events-none transition-all duration-1000 ease-out flex items-center justify-center ${
            isExiting ? "scale-[6] opacity-0" : "scale-100 opacity-100"
          }`}
          style={{
            transformOrigin: "center center",
          }}
        >
          <svg
            viewBox="0 0 400 400"
            className="w-full h-full overflow-visible"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* 1. Outermost Celestial Compass Dial with Micro Ticks */}
            <g
              style={{
                transformOrigin: "200px 200px",
                animation: phase >= 2 ? "circularRotateClockwise 70s linear infinite" : "none",
                opacity: phase >= 2 ? 0.45 : 0,
                transition: "opacity 1.2s ease-out",
              }}
            >
              <circle
                cx="200"
                cy="200"
                r="175"
                stroke="#B08D57"
                strokeWidth="0.8"
                strokeDasharray="4 8"
              />
              {/* 4 Cardinal Crosshair Extensions */}
              <line x1="200" y1="12" x2="200" y2="28" stroke="#D4BA8C" strokeWidth="1.5" />
              <line x1="200" y1="372" x2="200" y2="388" stroke="#D4BA8C" strokeWidth="1.5" />
              <line x1="12" y1="200" x2="28" y2="200" stroke="#D4BA8C" strokeWidth="1.5" />
              <line x1="372" y1="200" x2="388" y2="200" stroke="#D4BA8C" strokeWidth="1.5" />
            </g>

            {/* 2. Primary Outer Sacred Circle */}
            <circle
              cx="200"
              cy="200"
              r="140"
              stroke="#D4BA8C"
              strokeWidth="1.5"
              strokeDasharray="880"
              strokeDashoffset={phase >= 2 ? "0" : "880"}
              style={{
                transition: "stroke-dashoffset 1.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s",
                opacity: phase >= 2 ? 0.9 : 0,
              }}
            />

            {/* 3. Middle Counter-Rotating Sacred Astrolabe Ring */}
            <g
              style={{
                transformOrigin: "200px 200px",
                animation: phase >= 2 ? "circularRotateCounter 50s linear infinite" : "none",
                opacity: phase >= 2 ? 0.65 : 0,
                transition: "opacity 1s ease-out",
              }}
            >
              <circle
                cx="200"
                cy="200"
                r="105"
                stroke="#B08D57"
                strokeWidth="1"
                strokeDasharray="10 5"
              />
            </g>

            {/* 4. Inner Concentric Sacred Ring */}
            <circle
              cx="200"
              cy="200"
              r="70"
              stroke="#D4BA8C"
              strokeWidth="1.4"
              strokeDasharray="440"
              strokeDashoffset={phase >= 2 ? "0" : "440"}
              style={{
                transition: "stroke-dashoffset 1.2s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s",
                opacity: phase >= 2 ? 0.95 : 0,
              }}
            />

            {/* 5. Core Sacred Ring Enclosure */}
            <circle
              cx="200"
              cy="200"
              r="38"
              stroke="#B08D57"
              strokeWidth="1"
              strokeDasharray="240"
              strokeDashoffset={phase >= 1 ? "0" : "240"}
              style={{
                transition: "stroke-dashoffset 1s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s",
                opacity: phase >= 1 ? 0.85 : 0,
              }}
            />

            {/* 4 Orbital Vertex Flares on the Primary Circle */}
            {phase >= 3 && (
              <g className="transition-opacity duration-800">
                <circle cx="200" cy="60" r="3" fill="#FAF8F3" filter="drop-shadow(0 0 6px #D4BA8C)" />
                <circle cx="340" cy="200" r="3" fill="#FAF8F3" filter="drop-shadow(0 0 6px #D4BA8C)" />
                <circle cx="200" cy="340" r="3" fill="#FAF8F3" filter="drop-shadow(0 0 6px #D4BA8C)" />
                <circle cx="60" cy="200" r="3" fill="#FAF8F3" filter="drop-shadow(0 0 6px #D4BA8C)" />
              </g>
            )}

            {/* 6. Central Radiant Gold Origin Core */}
            <circle
              cx="200"
              cy="200"
              r="6"
              fill="#FAF8F3"
              stroke="#D4BA8C"
              strokeWidth="2"
              style={{
                transformOrigin: "200px 200px",
                animation: phase >= 1 ? "corePulse 2.8s ease-in-out infinite" : "none",
                transform: phase >= 1 ? "scale(1)" : "scale(0)",
                opacity: phase >= 1 ? 1 : 0,
                transition: "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s",
              }}
            />
          </svg>
        </div>

        {/* ================================================================ */}
        {/* LAYER B: FOREGROUND TYPOGRAPHY LOCKUP (IN FRONT OF BIG CIRCLE)   */}
        {/* ================================================================ */}
        <div className="relative z-20 flex flex-col items-center justify-center space-y-4 sm:space-y-5">
          {/* Staggered Letter-by-Letter EVAANAM Title Reveal */}
          <div className="flex items-center justify-center">
            <h1
              className="luxury-gold-shimmer font-serif text-5xl sm:text-7xl md:text-9xl font-normal uppercase tracking-[0.24em] text-[#FAF8F3] flex justify-center drop-shadow-2xl"
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
                    transform: phase >= 4 ? "translateY(0)" : "translateY(22px)",
                    transitionDelay: `${index * 55}ms`,
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
            <div className="h-[1px] w-14 sm:w-28 bg-gradient-to-r from-transparent via-[#D4BA8C]/60 to-[#D4BA8C]" />
            <div className="w-1.5 h-1.5 rotate-45 bg-[#D4BA8C] shadow-sm" />
            <div className="h-[1px] w-14 sm:w-28 bg-gradient-to-l from-transparent via-[#D4BA8C]/60 to-[#D4BA8C]" />
          </div>

          {/* Corporate Division Subtitles */}
          <div
            className={`space-y-1.5 transition-all duration-800 ease-out delay-100 transform ${
              phase >= 5 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            <p className="text-[10px] sm:text-xs md:text-sm font-mono uppercase tracking-[0.38em] text-[#D4BA8C] font-semibold drop-shadow">
              MANPOWER &amp; EXECUTION
            </p>

            <p className="text-[9px] sm:text-[10px] md:text-xs font-mono uppercase tracking-[0.42em] text-[#B08D57] font-medium">
              PRIVATE LIMITED
            </p>
          </div>

          {/* Signature Slogan */}
          <div
            className={`pt-2 transition-all duration-800 ease-out delay-200 transform ${
              phase >= 6 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            <p className="font-serif italic text-xs sm:text-sm md:text-base tracking-[0.24em] text-[#D4BA8C]/90 font-light drop-shadow">
              WHERE EVERY DETAIL IS AN EXPERIENCE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
