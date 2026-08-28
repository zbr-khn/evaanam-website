import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { ArrowUp } from "lucide-react";

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const circleProgressRef = useRef(null);
  const location = useLocation();

  const radius = 18;
  const circumference = 2 * Math.PI * radius; // ~113.1

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
      const shouldShow = scrollTop > window.innerHeight * 0.7;
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
    <div className="relative group animate-fade-in flex items-center justify-end mb-1">
      {/* Expanded Hover Pill Label */}
      <div
        className={`absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-chocolate-950 dark:bg-night-950 text-cream-100 text-xs font-sans font-medium rounded-full border border-bronze-500/40 shadow-xl whitespace-nowrap transition-all duration-300 pointer-events-none flex items-center space-x-2 ${
          hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
        }`}
      >
        <span>Back to Top</span>
      </div>

      <button
        onClick={scrollToTop}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex items-center justify-center w-11 h-11 rounded-full bg-cream-50/95 dark:bg-night-900/95 backdrop-blur-md text-chocolate-900 dark:text-cream-100 hover:text-amber-500 dark:hover:text-amber-300 transition-all duration-300 shadow-xl border-2 border-chocolate-700/20 dark:border-bronze-500/40 group focus:outline-none hover:scale-105 active:scale-95 cursor-pointer"
        aria-label="Back to top of page"
      >
        {/* SVG Circular Live Scroll Progress Indicator */}
        <svg
          className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5"
          viewBox="0 0 44 44"
        >
          {/* Background track circle */}
          <circle
            cx="22"
            cy="22"
            r={radius}
            className="stroke-chocolate-700/15 dark:stroke-bronze-500/20 fill-none"
            strokeWidth="2.5"
          />

          {/* Active Progress circle */}
          <circle
            ref={circleProgressRef}
            cx="22"
            cy="22"
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
