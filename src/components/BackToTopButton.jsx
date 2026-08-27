import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTopButton() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    let ticking = false;

    const calculateScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (docHeight > 0) {
        const progress = Math.min(1, Math.max(0, scrollTop / docHeight));
        setScrollProgress(progress);
      }

      if (scrollTop > 220) {
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
    calculateScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <div className="relative group">
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
        className="w-12 h-12 rounded-full bg-cream-100 dark:bg-night-850 text-chocolate-800 dark:text-cream-100 shadow-xl border border-chocolate-700/15 dark:border-bronze-500/30 flex items-center justify-center relative hover:scale-105 active:scale-95 transition-all duration-300 group-hover:border-bronze-500 focus:outline-none focus:ring-2 focus:ring-bronze-500 focus:ring-offset-2 dark:focus:ring-offset-night-900"
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
            className="stroke-chocolate-700/10 dark:stroke-night-700"
            strokeWidth="2.5"
            fill="none"
          />
          {/* Active Animated Progress Arc */}
          <circle
            cx="24"
            cy="24"
            r={radius}
            className="stroke-bronze-500 transition-all duration-150 ease-out"
            strokeWidth="2.5"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="none"
          />
        </svg>

        {/* Center Icon */}
        <ArrowUp className="w-4 h-4 text-chocolate-800 dark:text-cream-100 group-hover:text-bronze-600 dark:group-hover:text-bronze-400 group-hover:-translate-y-0.5 transition-all" />
      </button>
    </div>
  );
}
