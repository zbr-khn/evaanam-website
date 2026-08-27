import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

/**
 * DynamicScrollGradient
 * Alternates between:
 * - Dark Mode: Deep British Racing Green (#081F18) <-> Rich Chocolate Brown (#1E1515)
 * - Light Mode: Crisp Pure White (#FCFAF6) <-> Soft Light Linen Brown (#F3ECE2)
 */
export default function DynamicScrollGradient() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();
  const { isDark } = useTheme();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const progress = docHeight > 0 ? Math.max(0, Math.min(1, window.scrollY / docHeight)) : 0;
          setScrollProgress(progress);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // Derived dynamic calculations
  const rotationAngle = 135 + scrollProgress * 180;
  const orb1Y = scrollProgress * 75;
  const orb1X = Math.sin(scrollProgress * Math.PI) * 30;
  const orb2Y = 70 - scrollProgress * 60;
  const orb2X = -Math.cos(scrollProgress * Math.PI) * 25;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-20 overflow-hidden select-none"
    >
      {/* 1. Base Continuous Morphing Linear Gradient Alternating Green/Brown */}
      <div
        className="absolute inset-0 transition-all duration-200 ease-out opacity-85"
        style={{
          background: isDark
            ? `linear-gradient(${rotationAngle}deg, 
                rgba(8, 31, 24, 0.9) 0%, 
                rgba(30, 21, 21, 0.85) 30%, 
                rgba(12, 38, 30, 0.9) 60%, 
                rgba(34, 24, 24, 0.85) 85%, 
                rgba(8, 31, 24, 0.95) 100%)`
            : `linear-gradient(${rotationAngle}deg, 
                rgba(252, 250, 246, 0.95) 0%, 
                rgba(243, 236, 226, 0.9) 30%, 
                rgba(250, 250, 247, 0.95) 60%, 
                rgba(237, 226, 212, 0.9) 85%, 
                rgba(252, 250, 246, 0.95) 100%)`,
        }}
      />

      {/* 2. Floating Ambient Radial Light Bloom 01 */}
      <div
        className="absolute w-[600px] sm:w-[900px] h-[600px] sm:h-[900px] rounded-full blur-3xl transition-transform duration-300 ease-out opacity-40 dark:opacity-30"
        style={{
          top: `${orb1Y}%`,
          left: `${20 + orb1X}%`,
          transform: "translate(-50%, -50%) translate3d(0, 0, 0)",
          background: isDark
            ? "radial-gradient(circle, rgba(13, 48, 37, 0.8) 0%, rgba(46, 30, 30, 0.6) 50%, transparent 75%)"
            : "radial-gradient(circle, rgba(243, 236, 226, 0.8) 0%, rgba(220, 206, 186, 0.5) 55%, transparent 75%)",
          willChange: "transform, top, left",
        }}
      />

      {/* 3. Floating Ambient Radial Light Bloom 02 */}
      <div
        className="absolute w-[500px] sm:w-[750px] h-[500px] sm:h-[750px] rounded-full blur-3xl transition-transform duration-300 ease-out opacity-35 dark:opacity-25"
        style={{
          top: `${orb2Y}%`,
          right: `${15 + orb2X}%`,
          transform: "translate(50%, -50%) translate3d(0, 0, 0)",
          background: isDark
            ? "radial-gradient(circle, rgba(46, 30, 30, 0.7) 0%, rgba(13, 48, 37, 0.5) 50%, transparent 75%)"
            : "radial-gradient(circle, rgba(230, 218, 200, 0.7) 0%, rgba(250, 248, 244, 0.4) 55%, transparent 75%)",
          willChange: "transform, top, right",
        }}
      />
    </div>
  );
}
