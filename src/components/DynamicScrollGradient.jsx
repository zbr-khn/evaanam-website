import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

/**
 * DynamicScrollGradient
 * A fixed luxury atmospheric ambient gradient backdrop that smoothly morphs,
 * rotates, and shifts color tones and floating light orbs in real time as the user scrolls.
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
  const rotationAngle = 120 + scrollProgress * 180; // 120deg to 300deg rotation
  const orb1Y = scrollProgress * 70; // 0% to 70% vertical travel
  const orb1X = Math.sin(scrollProgress * Math.PI) * 25; // Curved lateral drift
  const orb2Y = 60 - scrollProgress * 50; // Inverted vertical travel
  const orb2X = -Math.cos(scrollProgress * Math.PI) * 20;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-30 overflow-hidden select-none transition-opacity duration-700"
    >
      {/* 1. Base Continuous Morphing Linear Gradient */}
      <div
        className="absolute inset-0 transition-all duration-300 ease-out"
        style={{
          background: isDark
            ? `linear-gradient(${rotationAngle}deg, 
                #081F18 0%, 
                #0C2B22 ${25 + scrollProgress * 20}%, 
                #14251D ${50 + scrollProgress * 15}%, 
                #0F1E17 ${75 + scrollProgress * 10}%, 
                #061510 100%)`
            : `linear-gradient(${rotationAngle}deg, 
                #FAF8F3 0%, 
                #F5EFE4 ${25 + scrollProgress * 20}%, 
                #EDE5D4 ${50 + scrollProgress * 15}%, 
                #F7F3EA ${75 + scrollProgress * 10}%, 
                #E9DFCD 100%)`,
        }}
      />

      {/* 2. Floating Ambient Radial Light Bloom 01 (Emerald / Gold Aura) */}
      <div
        className="absolute w-[650px] sm:w-[900px] h-[650px] sm:h-[900px] rounded-full blur-3xl transition-transform duration-500 ease-out opacity-45 dark:opacity-35"
        style={{
          top: `${orb1Y}%`,
          left: `${20 + orb1X}%`,
          transform: "translate(-50%, -50%) translate3d(0, 0, 0)",
          background: isDark
            ? "radial-gradient(circle, rgba(13, 48, 37, 0.85) 0%, rgba(176, 141, 87, 0.18) 45%, transparent 70%)"
            : "radial-gradient(circle, rgba(212, 186, 140, 0.45) 0%, rgba(245, 239, 228, 0.6) 50%, transparent 75%)",
          willChange: "transform, top, left",
        }}
      />

      {/* 3. Floating Ambient Radial Light Bloom 02 (Deep Bronze Glow) */}
      <div
        className="absolute w-[550px] sm:w-[800px] h-[550px] sm:h-[800px] rounded-full blur-3xl transition-transform duration-500 ease-out opacity-40 dark:opacity-25"
        style={{
          top: `${orb2Y}%`,
          right: `${15 + orb2X}%`,
          transform: "translate(50%, -50%) translate3d(0, 0, 0)",
          background: isDark
            ? "radial-gradient(circle, rgba(176, 141, 87, 0.22) 0%, rgba(13, 48, 37, 0.6) 55%, transparent 75%)"
            : "radial-gradient(circle, rgba(223, 215, 196, 0.6) 0%, rgba(247, 244, 236, 0.4) 50%, transparent 70%)",
          willChange: "transform, top, right",
        }}
      />

      {/* 4. Subtle Film Grain & Grid Overlay for Organic Texture */}
      <div
        className="absolute inset-0 opacity-[0.035] dark:opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(176, 141, 87, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(176, 141, 87, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
    </div>
  );
}
