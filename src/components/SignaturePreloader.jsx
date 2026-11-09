import React, { useState, useEffect, useCallback } from "react";
import { useTheme } from "../context/ThemeContext";

/**
 * SignaturePreloader (Optimized 60fps/120fps Smooth Performance)
 * - Detects Light Mode vs Dark Mode on initialization.
 * - Session-aware: Only displays on first visit per session, or executes a swift luxury intro.
 * - Tap / Click anywhere to instantly dismiss.
 */
export default function SignaturePreloader({ onComplete }) {
  const { isDark } = useTheme();
  const [phase, setPhase] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isRemoved, setIsRemoved] = useState(() => {
    if (typeof window !== "undefined") {
      return Boolean(sessionStorage.getItem("evaanam-session-seen"));
    }
    return false;
  });

  const isDarkMode =
    typeof document !== "undefined"
      ? document.documentElement.classList.contains("dark")
      : isDark;

  const letters = ["E", "V", "A", "A", "N", "A", "M"];

  const handleDismiss = useCallback(() => {
    setIsExiting(true);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("evaanam-session-seen", "true");
    }
    setTimeout(() => {
      setIsRemoved(true);
      if (onComplete) onComplete();
    }, 400);
  }, [onComplete]);

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("evaanam-session-seen")) {
      setIsRemoved(true);
      if (onComplete) onComplete();
      return;
    }

    const timers = [];
    timers.push(setTimeout(() => setPhase(1), 50));
    timers.push(setTimeout(() => setPhase(2), 200));
    timers.push(setTimeout(() => setPhase(3), 450));
    timers.push(setTimeout(() => setPhase(4), 700));
    timers.push(setTimeout(() => setPhase(5), 950));
    timers.push(setTimeout(() => setPhase(6), 1150));
    timers.push(setTimeout(() => setIsExiting(true), 1600));
    timers.push(
      setTimeout(() => {
        setIsRemoved(true);
        if (typeof window !== "undefined") {
          sessionStorage.setItem("evaanam-session-seen", "true");
        }
        if (onComplete) onComplete();
      }, 2100)
    );

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  if (isRemoved) return null;

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
      onClick={handleDismiss}
      className={`fixed inset-0 z-[100] flex items-center justify-center overflow-hidden transition-opacity duration-600 cursor-pointer ${bgCanvas} ${
        isExiting ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Background Architectural Grid Lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `linear-gradient(to right, ${gridColor} 1px, transparent 1px), linear-gradient(to bottom, ${gridColor} 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial Ambient Core Glow */}
      <div
        className="absolute w-[700px] h-[700px] rounded-full pointer-events-none transition-all duration-1000 ease-out"
        style={{
          background: ambientOrbGradient,
          transform: isExiting ? "scale(2.2)" : "scale(1)",
          opacity: isExiting ? 0 : phase >= 1 ? 1 : 0,
        }}
      />

      {/* Central Assembly */}
      <div className="relative flex flex-col items-center justify-center select-none px-6">
        {/* Sacred Concentric Rings SVG */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{
            transform: isExiting ? "scale(1.8) rotate(30deg)" : "scale(1) rotate(0deg)",
            opacity: isExiting ? 0 : 0.85,
            transition: "transform 1000ms cubic-bezier(0.16, 1, 0.3, 1), opacity 800ms ease-out",
          }}
        >
          <svg
            className="w-[380px] sm:w-[480px] md:w-[620px] h-[380px] sm:h-[480px] md:h-[620px]"
            viewBox="0 0 400 400"
            fill="none"
          >
            <circle
              cx="200"
              cy="200"
              r="170"
              stroke={primaryStroke}
              strokeWidth="1.2"
              strokeDasharray="6 4"
              opacity={phase >= 2 ? "0.6" : "0"}
              className="transition-opacity duration-700"
            />
            <circle
              cx="200"
              cy="200"
              r="140"
              stroke={secondaryStroke}
              strokeWidth="1.5"
              opacity={phase >= 2 ? "0.75" : "0"}
              className="transition-opacity duration-700"
            />
            <circle
              cx="200"
              cy="200"
              r="100"
              stroke={primaryStroke}
              strokeWidth="1.2"
              opacity={phase >= 3 ? "0.85" : "0"}
              className="transition-opacity duration-700"
            />
            {phase >= 3 && (
              <g className="transition-opacity duration-500">
                <circle cx="200" cy="60" r="3" fill={vertexDotColor} />
                <circle cx="340" cy="200" r="3" fill={vertexDotColor} />
                <circle cx="200" cy="340" r="3" fill={vertexDotColor} />
                <circle cx="60" cy="200" r="3" fill={vertexDotColor} />
              </g>
            )}
            <circle
              cx="200"
              cy="200"
              r="5"
              fill={coreFill}
              stroke={coreStroke}
              strokeWidth="2"
              opacity={phase >= 1 ? 1 : 0}
              className="transition-opacity duration-500"
            />
          </svg>
        </div>

        {/* Foreground Content */}
        <div
          className="relative z-20 flex flex-col items-center justify-center space-y-4 sm:space-y-5"
          style={{
            opacity: isExiting ? 0 : 1,
            transform: isExiting ? "scale(0.96) translateY(-8px)" : "scale(1) translateY(0)",
            transition: "opacity 600ms ease-out, transform 600ms ease-out",
          }}
        >
          {/* EVAANAM Letter by letter */}
          <div className="flex items-center justify-center">
            <h1
              className="font-serif text-5xl sm:text-7xl md:text-8xl font-normal uppercase tracking-[0.24em] flex justify-center text-amber-300 dark:text-cream-50"
              style={{ letterSpacing: "0.24em", textIndent: "0.24em" }}
            >
              {letters.map((char, index) => (
                <span
                  key={index}
                  className="inline-block transition-all duration-400 ease-out"
                  style={{
                    opacity: phase >= 4 ? 1 : 0,
                    transform: phase >= 4 ? "translateY(0)" : "translateY(12px)",
                    transitionDelay: `${index * 35}ms`,
                  }}
                >
                  {char}
                </span>
              ))}
            </h1>
          </div>

          {/* Hairline Divider with Diamond */}
          <div
            className={`flex items-center justify-center space-x-3 transition-all duration-500 ease-out ${
              phase >= 5 ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
          >
            <div
              className={`h-[1px] w-12 sm:w-24 bg-gradient-to-r from-transparent ${
                isDarkMode ? "via-[#D4BA8C]/60 to-[#D4BA8C]" : "via-[#B08D57]/60 to-[#B08D57]"
              }`}
            />
            <div
              className={`w-1.5 h-1.5 rotate-45 ${
                isDarkMode ? "bg-[#D4BA8C]" : "bg-[#B08D57]"
              }`}
            />
            <div
              className={`h-[1px] w-12 sm:w-24 bg-gradient-to-l from-transparent ${
                isDarkMode ? "via-[#D4BA8C]/60 to-[#D4BA8C]" : "via-[#B08D57]/60 to-[#B08D57]"
              }`}
            />
          </div>

          {/* Subtitle */}
          <div
            className={`space-y-1 text-center transition-all duration-500 ease-out ${
              phase >= 5 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            <p
              className={`text-[10px] sm:text-xs font-mono uppercase tracking-[0.34em] font-semibold ${
                isDarkMode ? "text-[#D4BA8C]" : "text-[#846231]"
              }`}
            >
              MANPOWER &amp; OPERATIONS
            </p>
            <p
              className={`text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.38em] font-medium ${
                isDarkMode ? "text-[#B08D57]" : "text-[#967442]"
              }`}
            >
              DELHI NCR
            </p>
          </div>

          {/* Click to skip indicator */}
          <p className="text-[10px] text-cream-400/40 uppercase tracking-widest pt-2 font-mono">
            Click to enter
          </p>
        </div>
      </div>
    </div>
  );
}
