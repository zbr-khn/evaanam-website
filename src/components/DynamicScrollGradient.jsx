import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

/**
 * DynamicScrollGradient
 * Hardware-accelerated 60-120fps background transition canvas:
 * - Uses GPU compositor layer (will-change: transform)
 * - Zero React component re-renders during scrolling
 */
export default function DynamicScrollGradient() {
  const { isDark } = useTheme();
  const location = useLocation();
  const waveRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const updateWave = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(1, Math.max(0, scrollY / docHeight)) : 0;
      
      if (waveRef.current) {
        const creepY = Math.sin(progress * Math.PI * 4) * 15;
        waveRef.current.style.transform = `translate3d(0, ${creepY}%, 0)`;
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateWave);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateWave();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-20 overflow-hidden select-none"
      style={{ contain: "paint", willChange: "transform" }}
    >
      {/* 1. Base Interpolating Solid Foundation */}
      <div
        className="absolute inset-0 transition-colors duration-200 ease-out"
        style={{ backgroundColor: "var(--scroll-bg-current, #081F18)" }}
      />

      {/* 2. Hardware-Accelerated Fluid Upward Creeping Tone Wave */}
      <div
        ref={waveRef}
        className="absolute inset-x-0 bottom-0 h-[100vh] opacity-40 dark:opacity-30 pointer-events-none will-change-transform"
        style={{
          transform: "translate3d(0, 0, 0)",
          background: isDark
            ? `radial-gradient(ellipse 90% 70% at 50% 100%, rgba(26, 18, 11, 0.8) 0%, rgba(8, 31, 24, 0.3) 60%, transparent 100%)`
            : `radial-gradient(ellipse 90% 70% at 50% 100%, rgba(239, 232, 222, 0.85) 0%, rgba(250, 248, 243, 0.3) 60%, transparent 100%)`,
        }}
      />
    </div>
  );
}
