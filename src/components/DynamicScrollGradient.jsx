import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

/**
 * DynamicScrollGradient
 * Real-time scroll-driven dual-tone canvas:
 * - Interpolates between British Racing Green (#081F18) and Espresso Chocolate (#1A120B) in Dark Mode
 * - Interpolates between Crisp Alabaster White (#FAF8F3) and Warm Biscuit Sandstone (#EFE8DE) in Light Mode
 * - Renders a physical upward-creeping color curtain that rises as you scroll.
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

  // Dynamic calculations
  const creepY = Math.sin(scrollProgress * Math.PI * 4) * 20;
  const rotationAngle = 135 + scrollProgress * 180;
  const orb1Y = (scrollProgress * 80) % 100;
  const orb1X = Math.sin(scrollProgress * Math.PI * 2) * 25;
  const orb2Y = 85 - ((scrollProgress * 70) % 100);
  const orb2X = -Math.cos(scrollProgress * Math.PI * 2) * 25;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-20 overflow-hidden select-none"
    >
      {/* 1. Base Interpolating Solid Foundation */}
      <div
        className="absolute inset-0 transition-colors duration-300 ease-out"
        style={{ backgroundColor: "var(--scroll-bg-current, #081F18)" }}
      />

      {/* 2. Upward Creeping Fluid Color Wave (Rises and sweeps with scroll) */}
      <div
        className="absolute inset-x-0 bottom-0 h-[120vh] transition-transform duration-500 ease-out opacity-60 dark:opacity-40"
        style={{
          transform: `translate3d(0, ${creepY}%, 0)`,
          background: isDark
            ? `radial-gradient(ellipse 90% 70% at 50% 100%, rgba(26, 18, 11, 0.9) 0%, rgba(8, 31, 24, 0.4) 60%, transparent 100%)`
            : `radial-gradient(ellipse 90% 70% at 50% 100%, rgba(239, 232, 222, 0.95) 0%, rgba(250, 248, 243, 0.4) 60%, transparent 100%)`,
        }}
      />

      {/* 3. Floating Luxury Radial Light Bloom 01 */}
      <div
        className="absolute w-[600px] sm:w-[950px] h-[600px] sm:h-[950px] rounded-full blur-3xl transition-transform duration-500 ease-out opacity-45 dark:opacity-35"
        style={{
          top: `${orb1Y}%`,
          left: `${25 + orb1X}%`,
          transform: "translate(-50%, -50%) translate3d(0, 0, 0)",
          background: isDark
            ? "radial-gradient(circle, rgba(14, 52, 40, 0.85) 0%, rgba(42, 28, 18, 0.6) 55%, transparent 75%)"
            : "radial-gradient(circle, rgba(243, 236, 226, 0.85) 0%, rgba(220, 206, 186, 0.5) 55%, transparent 75%)",
          willChange: "transform, top, left",
        }}
      />

      {/* 4. Floating Luxury Radial Light Bloom 02 */}
      <div
        className="absolute w-[500px] sm:w-[800px] h-[500px] sm:h-[800px] rounded-full blur-3xl transition-transform duration-500 ease-out opacity-40 dark:opacity-30"
        style={{
          top: `${orb2Y}%`,
          right: `${15 + orb2X}%`,
          transform: "translate(50%, -50%) translate3d(0, 0, 0)",
          background: isDark
            ? "radial-gradient(circle, rgba(42, 28, 18, 0.8) 0%, rgba(14, 52, 40, 0.5) 50%, transparent 75%)"
            : "radial-gradient(circle, rgba(230, 218, 200, 0.8) 0%, rgba(250, 248, 244, 0.4) 55%, transparent 75%)",
          willChange: "transform, top, right",
        }}
      />
    </div>
  );
}
