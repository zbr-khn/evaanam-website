import React from "react";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle({ className = "", isMobile = false }) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "Switch to daytime light mode" : "Switch to evening dark mode"}
      title={isDark ? "Switch to Daytime Light Mode" : "Switch to Evening Dark Mode"}
      className={`relative inline-flex items-center justify-between p-1 rounded-full transition-all duration-400 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-bronze-500 focus-visible:ring-offset-2 ${
        isMobile
          ? "w-[64px] h-[36px] min-h-[44px] px-1.5"
          : "w-[50px] h-[28px]"
      } ${
        isDark
          ? "bg-night-800 border border-bronze-500/40 text-bronze-300"
          : "bg-cream-100 border border-chocolate-700/20 text-brand-green"
      } ${className}`}
    >
      {/* Sliding Pill Thumb */}
      <span
        className={`absolute rounded-full transition-all duration-300 ease-out shadow-sm flex items-center justify-center ${
          isMobile
            ? "w-[28px] h-[28px]"
            : "w-[20px] h-[20px]"
        } ${
          isDark
            ? "translate-x-[26px] bg-night-950 border border-bronze-500/60"
            : "translate-x-[2px] bg-cream-50 border border-chocolate-700/15"
        }`}
      >
        {isDark ? (
          /* Moon icon on dark thumb */
          <svg
            className={`${isMobile ? "w-3.5 h-3.5" : "w-3 h-3"} text-bronze-300`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          </svg>
        ) : (
          /* Sun icon on light thumb */
          <svg
            className={`${isMobile ? "w-3.5 h-3.5" : "w-3 h-3"} text-brand-green`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
          </svg>
        )}
      </span>

      {/* Background Icons (Subtle) */}
      <span className="w-full flex items-center justify-between px-1 pointer-events-none opacity-40">
        <svg
          className={`${isMobile ? "w-3.5 h-3.5" : "w-2.5 h-2.5"} ${isDark ? "opacity-0" : "opacity-100"} transition-opacity`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="4" />
        </svg>
        <svg
          className={`${isMobile ? "w-3.5 h-3.5" : "w-2.5 h-2.5"} ${isDark ? "opacity-100" : "opacity-0"} transition-opacity`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      </span>
    </button>
  );
}
