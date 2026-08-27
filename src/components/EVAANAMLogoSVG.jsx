import React from "react";

/**
 * EVAANAMLogoSVG
 * Exact vector representation of the authentic EVAANAM identity:
 * - Dual interlocking tilted diamond squares (Sacred Geometry Astrolabe)
 * - Concentric gold circle
 * - Central radiant gold origin point
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
      {/* 1. SACRED GEOMETRY EMBLEM */}
      <g transform={showAllText ? "translate(100, 0)" : "translate(0, 0)"}>
        {/* Outer Diamond Square 1 (Rotated 45deg) */}
        <rect
          x="62"
          y="62"
          width="76"
          height="76"
          stroke={goldLight}
          strokeWidth="2"
          transform="rotate(45 100 100)"
        />

        {/* Inner Diamond Square 2 (Rotated 28deg) */}
        <rect
          x="62"
          y="62"
          width="76"
          height="76"
          stroke={gold}
          strokeWidth="1.6"
          strokeOpacity="0.8"
          transform="rotate(28 100 100)"
        />

        {/* Concentric Circle */}
        <circle
          cx="100"
          cy="100"
          r="26"
          stroke={goldLight}
          strokeWidth="1.8"
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
