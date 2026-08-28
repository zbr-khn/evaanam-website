import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

/**
 * SignaturePreloader (Optimized 60fps/120fps Smooth Performance)
 * - Detects Light Mode vs Dark Mode on initialization.
 * - Light Mode: Crisp Alabaster White (#FAF8F3) canvas with Antique Gold & Forest Emerald accents.
 * - Dark Mode: Deep British Racing Green (#081F18) canvas with Imperial Gold & Alabaster Cream accents.
 * - Big Sacred Concentric Circle Astrolabe layered directly BEHIND the "EVAANAM" typography.
 * - Finale: Big Circle zooms in and fades out SIMULTANEOUSLY into the website.
 */
export default function SignaturePreloader({ onComplete }) {
  const { isDark } = useTheme();
  const [phase, setPhase] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  // Synchronous theme detection fallback
  const isDarkMode =
    typeof document !== "undefined"
      ? document.documentElement.classList.contains("dark")
      : isDark;

  const letters = ["E", "V", "A", "A", "N", "A", "M"];

  useEffect(() => {
    const timers = [];

    // Phase 1: Origin Core & Radial Ambient Aura (100ms)
    timers.push(setTimeout(() => setPhase(1), 100));

    // Phase 2: Big Concentric Astrolabe Rings Drawing Behind (400ms)
    timers.push(setTimeout(() => setPhase(2), 400));

    // Phase 3: Outer Compass Dial & Cardinal Ticks (850ms)
    timers.push(setTimeout(() => setPhase(3), 850));

    // Phase 4: EVAANAM Letters Reveal in Front of the Circle (1300ms)
    timers.push(setTimeout(() => setPhase(4), 1300));

    // Phase 5: Hairline Divider & Subtitles (1850ms)
    timers.push(setTimeout(() => setPhase(5), 1850));

    // Phase 6: Signature Slogan & Precision Lock (2350ms)
    timers.push(setTimeout(() => setPhase(6), 2350));

    // Phase 7: Simultaneous Zoom-In & Fade Finale (3000ms)
    timers.push(
      setTimeout(() => {
        setIsExiting(true);
      }, 3000)
    );

    // Phase 8: Complete Unmount & Handoff (4200ms)
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

  // Palette variables based on mode
  const bgCanvas = isDarkMode ? "bg-[#081F18] text-[#FAF8F3]" : "bg-[#FAF8F3] text-[#12241C]";
  const gridColor = isDarkMode ? "rgba(212, 186, 140, 0.12)" : "rgba(176, 141, 87, 0.12)";
  const ambientOrbGradient = isDarkMode
    ? "radial-gradient(circle, rgba(13, 48, 37, 0.9) 0%, rgba(8, 31, 24, 0.8) 55%, #05140F 100%)"
    : "radial-gradient(circle, rgba(235, 222, 206, 0.85) 0%, rgba(245, 240, 230, 0.6) 55%, #FAF8F3 100%)";

  const primaryStroke = isDarkMode ? "#D4BA8C" : "#846231";
  const secondaryStroke = isDarkMode ? "#B08D57" : "#B08D57";
  const vertexDotColor = isDarkMode ? "#FAF8F3" : "#12241C";
  const coreFill = isDarkMode ? "#FAF8F3" : "#12241C";
  const coreStroke = isDarkMode ? "#D4BA8C" : "#B08D57";

  return (
    <div
      role="status"
      aria-label="EVAANAM Experience Loading"
      className={`fixed inset-0 z-[999999] w-screen h-screen ${bgCanvas} flex items-center justify-center overflow-hidden select-none pointer-events-auto ${
        isExiting ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{
        transform: "translate3d(0, 0, 0)",
        willChange: "opacity",
        backfaceVisibility: "hidden",
        transition: "opacity 1200ms cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {/* Scoped High-Performance CSS Keyframes */}
      <style>{`
        @keyframes circularRotateClockwise {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes circularRotateCounter {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(-360deg); }
        }
        @keyframes corePulseSmooth {
          0%, 100% {
            transform: scale(1);
            opacity: 0.9;
          }
          50% {
            transform: scale(1.25);
            opacity: 1;
          }
        }
        .shimmer-dark-gold-text {
          background: linear-gradient(
            110deg,
            #FAF8F3 0%,
            #FAF8F3 35%,
            #D4BA8C 50%,
            #FAF8F3 65%,
            #FAF8F3 100%
          );
          background-size: 200% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .shimmer-light-gold-text {
          background: linear-gradient(
            110deg,
            #12241C 0%,
            #12241C 35%,
            #B08D57 50%,
            #12241C 65%,
            #12241C 100%
          );
          background-size: 200% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      {/* 1. Vignette & Architectural Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${gridColor} 1px, transparent 1px),
            linear-gradient(to bottom, ${gridColor} 1px, transparent 1px)
          `,
          backgroundSize: "75px 75px",
          backgroundPosition: "center center",
        }}
      />

      {/* Center Ambient Light Orb (Expands during simultaneous exit) */}
      <div
        className="absolute w-[600px] sm:w-[850px] h-[600px] sm:h-[850px] rounded-full pointer-events-none opacity-90"
        style={{
          background: ambientOrbGradient,
          transform: isExiting ? "scale(3) translate3d(0,0,0)" : "scale(1) translate3d(0,0,0)",
          transition: "transform 1200ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />

      {/* 2. Main Identity Centerpiece Stack */}
      <div className="relative z-10 flex items-center justify-center text-center px-6 max-w-5xl mx-auto w-full h-full">
        
        {/* ================================================================ */}
        {/* LAYER A: BIG SACRED CONCENTRIC CIRCLE ASTROLABE (BEHIND TEXT)    */}
        {/* ================================================================ */}
        <div
          className="absolute w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] md:w-[620px] md:h-[620px] pointer-events-none flex items-center justify-center"
          style={{
            transformOrigin: "center center",
            willChange: "transform",
            transform: isExiting ? "scale(5) translate3d(0, 0, 0)" : "scale(1) translate3d(0, 0, 0)",
            transition: "transform 1200ms cubic-bezier(0.16, 1, 0.3, 1)",
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
                animation: phase >= 2 ? "circularRotateClockwise 60s linear infinite" : "none",
                opacity: phase >= 2 ? (isDarkMode ? 0.45 : 0.55) : 0,
                transition: "opacity 0.8s ease-out",
                willChange: "transform",
              }}
            >
              <circle
                cx="200"
                cy="200"
                r="175"
                stroke={secondaryStroke}
                strokeWidth="0.8"
                strokeDasharray="4 8"
              />
              {/* 4 Cardinal Crosshair Extensions */}
              <line x1="200" y1="12" x2="200" y2="28" stroke={primaryStroke} strokeWidth="1.5" />
              <line x1="200" y1="372" x2="200" y2="388" stroke={primaryStroke} strokeWidth="1.5" />
              <line x1="12" y1="200" x2="28" y2="200" stroke={primaryStroke} strokeWidth="1.5" />
              <line x1="372" y1="200" x2="388" y2="200" stroke={primaryStroke} strokeWidth="1.5" />
            </g>

            {/* 2. Primary Outer Sacred Circle */}
            <circle
              cx="200"
              cy="200"
              r="140"
              stroke={primaryStroke}
              strokeWidth="1.5"
              strokeDasharray="880"
              strokeDashoffset={phase >= 2 ? "0" : "880"}
              style={{
                transition: "stroke-dashoffset 1.2s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s",
                opacity: phase >= 2 ? (isDarkMode ? 0.9 : 0.85) : 0,
              }}
            />

            {/* 3. Middle Counter-Rotating Sacred Astrolabe Ring */}
            <g
              style={{
                transformOrigin: "200px 200px",
                animation: phase >= 2 ? "circularRotateCounter 45s linear infinite" : "none",
                opacity: phase >= 2 ? (isDarkMode ? 0.65 : 0.6) : 0,
                transition: "opacity 0.8s ease-out",
                willChange: "transform",
              }}
            >
              <circle
                cx="200"
                cy="200"
                r="105"
                stroke={secondaryStroke}
                strokeWidth="1"
                strokeDasharray="10 5"
              />
            </g>

            {/* 4. Inner Concentric Sacred Ring */}
            <circle
              cx="200"
              cy="200"
              r="70"
              stroke={primaryStroke}
              strokeWidth="1.4"
              strokeDasharray="440"
              strokeDashoffset={phase >= 2 ? "0" : "440"}
              style={{
                transition: "stroke-dashoffset 1s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s",
                opacity: phase >= 2 ? 0.95 : 0,
              }}
            />

            {/* 5. Core Sacred Ring Enclosure */}
            <circle
              cx="200"
              cy="200"
              r="38"
              stroke={secondaryStroke}
              strokeWidth="1"
              strokeDasharray="240"
              strokeDashoffset={phase >= 1 ? "0" : "240"}
              style={{
                transition: "stroke-dashoffset 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s",
                opacity: phase >= 1 ? 0.85 : 0,
              }}
            />

            {/* 4 Orbital Vertex Flares on the Primary Circle */}
            {phase >= 3 && (
              <g className="transition-opacity duration-600">
                <circle cx="200" cy="60" r="3" fill={vertexDotColor} />
                <circle cx="340" cy="200" r="3" fill={vertexDotColor} />
                <circle cx="200" cy="340" r="3" fill={vertexDotColor} />
                <circle cx="60" cy="200" r="3" fill={vertexDotColor} />
              </g>
            )}

            {/* 6. Central Radiant Gold Origin Core */}
            <circle
              cx="200"
              cy="200"
              r="6"
              fill={coreFill}
              stroke={coreStroke}
              strokeWidth="2"
              style={{
                transformOrigin: "200px 200px",
                animation: phase >= 1 ? "corePulseSmooth 2.5s ease-in-out infinite" : "none",
                transform: phase >= 1 ? "scale(1)" : "scale(0)",
                opacity: phase >= 1 ? 1 : 0,
                transition: "transform 0.5s ease-out, opacity 0.4s",
              }}
            />
          </svg>
        </div>

        {/* ================================================================ */}
        {/* LAYER B: FOREGROUND TYPOGRAPHY LOCKUP (IN FRONT OF BIG CIRCLE)   */}
        {/* ================================================================ */}
        <div
          className="relative z-20 flex flex-col items-center justify-center space-y-4 sm:space-y-5"
          style={{
            opacity: isExiting ? 0 : 1,
            transform: isExiting ? "scale(0.95) translate3d(0, -10px, 0)" : "scale(1) translate3d(0, 0, 0)",
            transition: "opacity 800ms ease-out, transform 800ms ease-out",
          }}
        >
          {/* Staggered Letter-by-Letter EVAANAM Title Reveal */}
          <div className="flex items-center justify-center">
            <h1
              className={`${
                isDarkMode ? "shimmer-dark-gold-text text-[#FAF8F3]" : "shimmer-light-gold-text text-[#12241C]"
              } font-serif text-5xl sm:text-7xl md:text-9xl font-normal uppercase tracking-[0.24em] flex justify-center`}
              style={{
                letterSpacing: "0.24em",
                textIndent: "0.24em",
              }}
            >
              {letters.map((char, index) => (
                <span
                  key={index}
                  className="inline-block transition-all duration-500 ease-out"
                  style={{
                    opacity: phase >= 4 ? 1 : 0,
                    transform: phase >= 4 ? "translateY(0)" : "translateY(16px)",
                    transitionDelay: `${index * 45}ms`,
                  }}
                >
                  {char}
                </span>
              ))}
            </h1>
          </div>

          {/* Precision Hairline Divider with Centered Diamond */}
          <div
            className={`flex items-center justify-center space-x-3 transition-all duration-600 ease-out ${
              phase >= 5 ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
          >
            <div
              className={`h-[1px] w-14 sm:w-28 bg-gradient-to-r from-transparent ${
                isDarkMode ? "via-[#D4BA8C]/60 to-[#D4BA8C]" : "via-[#B08D57]/60 to-[#B08D57]"
              }`}
            />
            <div
              className={`w-1.5 h-1.5 rotate-45 ${
                isDarkMode ? "bg-[#D4BA8C]" : "bg-[#B08D57]"
              }`}
            />
            <div
              className={`h-[1px] w-14 sm:w-28 bg-gradient-to-l from-transparent ${
                isDarkMode ? "via-[#D4BA8C]/60 to-[#D4BA8C]" : "via-[#B08D57]/60 to-[#B08D57]"
              }`}
            />
          </div>

          {/* Corporate Division Subtitles */}
          <div
            className={`space-y-1.5 transition-all duration-600 ease-out delay-75 transform ${
              phase >= 5 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            <p
              className={`text-[10px] sm:text-xs md:text-sm font-mono uppercase tracking-[0.38em] font-semibold ${
                isDarkMode ? "text-[#D4BA8C]" : "text-[#846231]"
              }`}
            >
              MANPOWER &amp; EXECUTION
            </p>

            <p
              className={`text-[9px] sm:text-[10px] md:text-xs font-mono uppercase tracking-[0.42em] font-medium ${
                isDarkMode ? "text-[#B08D57]" : "text-[#967442]"
              }`}
            >
              PRIVATE LIMITED
            </p>
          </div>

          {/* Signature Slogan */}
          <div
            className={`pt-2 transition-all duration-600 ease-out delay-150 transform ${
              phase >= 6 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            <p
              className={`font-serif italic text-xs sm:text-sm md:text-base tracking-[0.24em] font-light ${
                isDarkMode ? "text-[#D4BA8C]/90" : "text-[#5C4522]"
              }`}
            >
              WHERE EVERY DETAIL IS AN EXPERIENCE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
