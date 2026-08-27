import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ArrowUp } from "lucide-react";

export default function BackToTopButton() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;

    const calculateScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (docHeight > 0) {
        const progress = Math.min(1, Math.max(0, scrollTop / docHeight));
        setScrollProgress(progress);
      } else {
        setScrollProgress(0);
      }

      // Display only when user has scrolled down at least 1 entire page (viewport height)
      if (scrollTop > window.innerHeight * 0.95) {
        setVisible(true);
      } else {
        setVisible(false);
      }
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
  }, [location.pathname]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // SVG circular perimeter metrics
  const radius = 20;
  const circumference = 2 * Math.PI * radius; // ~125.66
  const strokeDashoffset = circumference - scrollProgress * circumference;
  const percentText = Math.round(scrollProgress * 100);

  if (!visible) return null;

  return (
    <div className="relative group select-none">
      {/* Percentage Tooltip on Hover */}
      <div
        className={`absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2.5 py-1 bg-chocolate-950 dark:bg-night-950 text-cream-100 text-[10px] font-mono uppercase tracking-wider rounded border border-bronze-500/30 whitespace-nowrap shadow-lg transition-all duration-200 pointer-events-none ${
          hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-1"
        }`}
      >
        <span>Top ({percentText}%)</span>
      </div>

      {/* Main Animated Circle Button */}
      <button
        type="button"
        onClick={scrollToTop}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label={`Scroll back to top (${percentText}% scrolled)`}
        className="w-12 h-12 rounded-full bg-cream-100 dark:bg-night-850 text-chocolate-800 dark:text-cream-100 shadow-2xl border-2 border-chocolate-700/20 dark:border-bronze-500/40 flex items-center justify-center relative hover:scale-105 active:scale-95 transition-transform duration-200 group-hover:border-bronze-500 focus:outline-none focus:ring-2 focus:ring-bronze-500"
      >
        {/* SVG Progress Ring */}
        <svg
          className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
          viewBox="0 0 48 48"
        >
          {/* Background Track Ring */}
          <circle
            cx="24"
            cy="24"
            r={radius}
            className="stroke-chocolate-700/15 dark:stroke-night-700"
            strokeWidth="3"
            fill="none"
          />
          {/* Active Live Progress Arc (Direct real-time update with zero CSS lag) */}
          <circle
            cx="24"
            cy="24"
            r={radius}
            className="stroke-bronze-500 dark:stroke-amber-400"
            strokeWidth="3"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="none"
            style={{
              willChange: "stroke-dashoffset",
            }}
          />
        </svg>

        {/* Center Icon */}
        <ArrowUp className="w-4 h-4 text-chocolate-800 dark:text-cream-100 group-hover:text-bronze-600 dark:group-hover:text-amber-400 group-hover:-translate-y-0.5 transition-transform" />
      </button>
    </div>
  );
}
