import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

/**
 * DynamicScrollGradient
 * Rich, vivid dual-tone gradient scroll transition engine:
 * - Alternates seamlessly between Deep British Racing Green and Rich Espresso Chocolate in Dark Mode
 * - Alternates seamlessly between Crisp Alabaster White and Warm Biscuit Sandstone in Light Mode
 * - Hardware accelerated for buttery-smooth 60-120fps scrolling
 */
export default function DynamicScrollGradient() {
  const { isDark } = useTheme();
  const location = useLocation();
  const gradientRef = useRef(null);
  const orb1Ref = useRef(null);
  const orb2Ref = useRef(null);

  useEffect(() => {
    let ticking = false;

    const updateScrollGradients = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(1, Math.max(0, scrollY / docHeight)) : 0;

      // 1. Dynamic angle rotation and shift on scroll
      const angle = 135 + progress * 180;
      const shiftY = Math.sin(progress * Math.PI * 4) * 20;

      if (gradientRef.current) {
        gradientRef.current.style.transform = `translate3d(0, ${shiftY * 0.5}%, 0)`;
      }

      // 2. Ambient Floating Orbs GPU translate
      if (orb1Ref.current) {
        const orb1Y = (progress * 70) % 100;
        const orb1X = Math.sin(progress * Math.PI * 2) * 20;
        orb1Ref.current.style.transform = `translate3d(${orb1X}vw, ${orb1Y}vh, 0)`;
      }

      if (orb2Ref.current) {
        const orb2Y = 80 - ((progress * 65) % 100);
        const orb2X = -Math.cos(progress * Math.PI * 2) * 20;
        orb2Ref.current.style.transform = `translate3d(${orb2X}vw, ${orb2Y}vh, 0)`;
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollGradients);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateScrollGradients();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-20 overflow-hidden select-none"
      style={{ contain: "paint" }}
    >
      {/* 1. Base Real-Time Interpolating Foundation */}
      <div
        className="absolute inset-0 transition-colors duration-200 ease-out"
        style={{ backgroundColor: "var(--scroll-bg-current, #081F18)" }}
      />

      {/* 2. Rich Multi-Stop Dual-Tone Flow Layer */}
      <div
        ref={gradientRef}
        className="absolute -inset-y-[30%] inset-x-0 opacity-80 dark:opacity-70 will-change-transform pointer-events-none"
        style={{
          background: isDark
            ? `linear-gradient(145deg, 
                rgba(8, 31, 24, 0.95) 0%, 
                rgba(32, 20, 16, 0.9) 25%, 
                rgba(12, 40, 31, 0.95) 50%, 
                rgba(38, 24, 18, 0.9) 75%, 
                rgba(8, 31, 24, 0.95) 100%)`
            : `linear-gradient(145deg, 
                rgba(250, 248, 243, 0.98) 0%, 
                rgba(238, 227, 213, 0.9) 25%, 
                rgba(248, 246, 240, 0.98) 50%, 
                rgba(235, 222, 206, 0.9) 75%, 
                rgba(250, 248, 243, 0.98) 100%)`,
        }}
      />

      {/* 3. Floating Luxury Radial Bloom 01 (Deep Emerald / Biscuit Gold) */}
      <div
        ref={orb1Ref}
        className="absolute -top-32 -left-32 w-[600px] sm:w-[900px] h-[600px] sm:h-[900px] rounded-full pointer-events-none will-change-transform opacity-50 dark:opacity-40"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(16, 58, 44, 0.7) 0%, rgba(35, 22, 18, 0.4) 50%, transparent 70%)"
            : "radial-gradient(circle, rgba(238, 226, 210, 0.8) 0%, rgba(225, 210, 190, 0.4) 50%, transparent 70%)",
        }}
      />

      {/* 4. Floating Luxury Radial Bloom 02 (Rich Espresso / Warm Sandstone) */}
      <div
        ref={orb2Ref}
        className="absolute -bottom-32 -right-32 w-[550px] sm:w-[850px] h-[550px] sm:h-[850px] rounded-full pointer-events-none will-change-transform opacity-45 dark:opacity-35"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(42, 26, 20, 0.7) 0%, rgba(14, 48, 36, 0.4) 50%, transparent 70%)"
            : "radial-gradient(circle, rgba(230, 216, 196, 0.8) 0%, rgba(245, 242, 235, 0.4) 50%, transparent 70%)",
        }}
      />
    </div>
  );
}
