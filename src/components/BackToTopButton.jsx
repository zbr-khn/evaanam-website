import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { ArrowUp } from "lucide-react";

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const circleProgressRef = useRef(null);
  const location = useLocation();

  const radius = 20;
  const circumference = 2 * Math.PI * radius; // ~125.66

  useEffect(() => {
    let ticking = false;

    const calculateScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || 0;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0;

      if (circleProgressRef.current) {
        const offset = circumference - progress * circumference;
        circleProgressRef.current.style.strokeDashoffset = `${offset}`;
      }

      // Display when scrolled past 1 viewport
      const shouldShow = scrollTop > window.innerHeight * 0.9;
      setVisible((prev) => (prev !== shouldShow ? shouldShow : prev));

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(calculateScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    calculateScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [location.pathname, circumference]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 animate-fade-in">
      <button
        onClick={scrollToTop}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex items-center justify-center w-12 h-12 rounded-full bg-cream-50/95 dark:bg-night-900/95 backdrop-blur-md text-chocolate-900 dark:text-cream-100 hover:text-amber-600 dark:hover:text-amber-400 transition-all duration-300 shadow-xl border border-chocolate-700/20 dark:border-bronze-500/30 group focus:outline-none"
        aria-label="Back to top of page"
      >
        {/* SVG Circular Live Scroll Progress Indicator */}
        <svg
          className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
          viewBox="0 0 48 48"
        >
          {/* Background track circle */}
          <circle
            cx="24"
            cy="24"
            r={radius}
            className="stroke-chocolate-700/15 dark:stroke-bronze-500/20 fill-none"
            strokeWidth="2.5"
          />

          {/* Active Progress circle */}
          <circle
            ref={circleProgressRef}
            cx="24"
            cy="24"
            r={radius}
            className="stroke-amber-500 dark:stroke-bronze-400 fill-none transition-all duration-75"
            strokeWidth="2.5"
            strokeLinecap="round"
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: circumference,
            }}
          />
        </svg>

        {/* Upward Arrow Icon */}
        <ArrowUp className={`w-4 h-4 transition-transform duration-300 ${hovered ? "-translate-y-0.5 scale-110" : ""}`} />
      </button>
    </div>
  );
}
