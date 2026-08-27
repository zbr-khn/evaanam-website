import React from "react";

export default function GeometricDivider({ className = "", label = "" }) {
  return (
    <div className={`relative flex items-center justify-center my-12 select-none overflow-hidden ${className}`}>
      {/* Left Hairline with Gradient Fade */}
      <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-bronze-500/30 to-bronze-500/70" />

      {/* Center Geometric Emblem */}
      <div className="flex items-center space-x-3 px-4">
        {/* Left Chevron Accent */}
        <div className="w-2 h-2 rotate-45 border-t border-l border-bronze-500/60" />

        {/* Center Diamond Cluster */}
        <div className="flex items-center space-x-1.5">
          <div className="w-1.5 h-1.5 rotate-45 bg-bronze-500/50" />
          <div className="w-2.5 h-2.5 rotate-45 border border-bronze-500 bg-cream-100 dark:bg-night-900 flex items-center justify-center">
            <div className="w-1 h-1 bg-bronze-500" />
          </div>
          <div className="w-1.5 h-1.5 rotate-45 bg-bronze-500/50" />
        </div>

        {label && (
          <span className="text-[9px] uppercase font-mono tracking-[0.25em] font-semibold text-bronze-600 dark:text-bronze-400 px-2">
            {label}
          </span>
        )}

        {/* Right Chevron Accent */}
        <div className="w-2 h-2 rotate-45 border-b border-r border-bronze-500/60" />
      </div>

      {/* Right Hairline with Gradient Fade */}
      <div className="flex-grow h-[1px] bg-gradient-to-l from-transparent via-bronze-500/30 to-bronze-500/70" />
    </div>
  );
}
