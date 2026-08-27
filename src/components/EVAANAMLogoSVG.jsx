import React from "react";

/**
 * EVAANAMLogoSVG
 * Exact vector representation of the authentic circular celestial EVAANAM identity:
 * - Concentric Circular Sacred Astrolabe Rings & Cardinal Ticks
 * - Core Radiant Gold Origin Point
 * - EVAANAM serif typography
 * - MANPOWER & EXECUTION · PRIVATE LIMITED
 */
export default function EVAANAMLogoSVG({
  width = 48,
  height = 48,
  className = "",
  showAllText = false,
  darkTheme = false,
}) {
  const gold = "#B08D57";
  const goldLight = "#D4BA8C";
  const textColor = darkTheme ? "#F5F1E8" : "#241C1C";
  const subtextColor = darkTheme ? "#C5A46D" : "#7C5D30";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={showAllText ? "0 0 400 320" : "0 0 200 200"}
      width={width}
      height={height}
      className={`select-none overflow-visible transition-colors duration-400 ${className}`}
      fill="none"
    >
      {/* 1. CONCENTRIC CIRCULAR SACRED EMBLEM */}
      <g transform={showAllText ? "translate(100, 0)" : "translate(0, 0)"}>
        {/* Outer Dotted/Hashed Celestial Ring */}
        <circle
          cx="100"
          cy="100"
          r="68"
          stroke={gold}
          strokeWidth="1"
          strokeDasharray="3 5"
        />

        {/* 4 Cardinal Crosshairs */}
        <line x1="100" y1="26" x2="100" y2="32" stroke={goldLight} strokeWidth="1.5" />
        <line x1="100" y1="168" x2="100" y2="174" stroke={goldLight} strokeWidth="1.5" />
        <line x1="26" y1="100" x2="32" y2="100" stroke={goldLight} strokeWidth="1.5" />
        <line x1="168" y1="100" x2="174" y2="100" stroke={goldLight} strokeWidth="1.5" />

        {/* Primary Sacred Gold Circle */}
        <circle
          cx="100"
          cy="100"
          r="54"
          stroke={goldLight}
          strokeWidth="2"
        />

        {/* Middle Sacred Ring */}
        <circle
          cx="100"
          cy="100"
          r="40"
          stroke={gold}
          strokeWidth="1.2"
          strokeDasharray="6 3"
        />

        {/* Inner Concentric Circle */}
        <circle
          cx="100"
          cy="100"
          r="26"
          stroke={goldLight}
          strokeWidth="1.8"
        />

        {/* Core Enclosure Ring */}
        <circle
          cx="100"
          cy="100"
          r="14"
          stroke={gold}
          strokeWidth="1.2"
        />

        {/* Central Origin Dot */}
        <circle
          cx="100"
          cy="100"
          r="4.5"
          fill={goldLight}
        />
      </g>

      {/* 2. OPTIONAL TYPOGRAPHY */}
      {showAllText && (
        <g id="evaanam-text-lockup" transform="translate(200, 220)">
          {/* EVAANAM Wordmark */}
          <text
            x="0"
            y="0"
            textAnchor="middle"
            fontFamily="'Cormorant Garamond', 'Playfair Display', Georgia, serif"
            fontSize="38"
            fontWeight="400"
            letterSpacing="0.22em"
            fill={textColor}
          >
            EVAANAM
          </text>

          {/* MANPOWER & EXECUTION */}
          <text
            x="0"
            y="26"
            textAnchor="middle"
            fontFamily="'Plus Jakarta Sans', monospace, sans-serif"
            fontSize="8"
            fontWeight="600"
            letterSpacing="0.32em"
            fill={subtextColor}
          >
            MANPOWER &amp; EXECUTION
          </text>

          {/* PRIVATE LIMITED */}
          <text
            x="0"
            y="40"
            textAnchor="middle"
            fontFamily="'Plus Jakarta Sans', monospace, sans-serif"
            fontSize="7"
            fontWeight="500"
            letterSpacing="0.36em"
            fill={gold}
          >
            PRIVATE LIMITED
          </text>

          {/* WHERE EVERY DETAIL IS AN EXPERIENCE */}
          <text
            x="0"
            y="62"
            textAnchor="middle"
            fontFamily="'Cormorant Garamond', Georgia, serif"
            fontSize="9.5"
            fontStyle="italic"
            fontWeight="300"
            letterSpacing="0.2em"
            fill={subtextColor}
          >
            WHERE EVERY DETAIL IS AN EXPERIENCE
          </text>
        </g>
      )}
    </svg>
  );
}
