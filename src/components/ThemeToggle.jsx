import React from "react";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle({ className = "" }) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "Switch to daytime light mode" : "Switch to evening dark mode"}
      title={isDark ? "Switch to Daytime Light Mode" : "Switch to Evening Dark Mode"}
      className={`relative inline-flex items-center shrink-0 w-[56px] h-[28px] p-[3px] rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-bronze-500 focus-visible:ring-offset-2 ${
        isDark
          ? "bg-night-800 border border-bronze-500/40"
          : "bg-cream-300/80 border border-chocolate-700/25"
      } ${className}`}
    >
      {/* Background Subtle Reference Icons */}
      <span className="w-full flex items-center justify-between px-1.5 pointer-events-none text-[10px]">
        {/* Sun Outline */}
        <svg
          className={`w-3 h-3 transition-opacity duration-300 ${
            isDark ? "text-night-dim opacity-30" : "text-amber-600 opacity-60"
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>

        {/* Moon Outline */}
        <svg
          className={`w-3 h-3 transition-opacity duration-300 ${
            isDark ? "text-amber-400 opacity-60" : "text-chocolate-400 opacity-30"
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      </span>

      {/* Sliding Active Thumb */}
      <span
        className={`absolute top-[2px] left-[2px] w-[22px] h-[22px] rounded-full shadow-md transition-transform duration-300 ease-out flex items-center justify-center ${
          isDark
            ? "translate-x-[28px] bg-night-950 text-amber-400 border border-bronze-500/60"
            : "translate-x-0 bg-cream-50 text-brand-green border border-chocolate-700/15"
        }`}
      >
        {isDark ? (
          /* Active Moon Icon */
          <svg
            className="w-3 h-3 text-amber-400"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="none"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          </svg>
        ) : (
          /* Active Sun Icon */
          <svg
            className="w-3.5 h-3.5 text-brand-green"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
          </svg>
        )}
      </span>
    </button>
  );
}
