import React, { useState, useEffect } from "react";

/**
 * SignaturePreloader
 * Custom, premium geometric preloader specifically derived from the authentic EVAANAM EAM logo.
 *
 * Sequence:
 * 0.00s — Phase 01: Central Gold Origin Point
 * 0.25s — Phase 02: Central 'A' Construction (bottom wishbone legs -> apex gold spire)
 * 0.70s — Phase 03: 'E' and 'M' Construction (dark green #0C2B22 with 50ms natural asymmetry)
 * 1.15s — Phase 04: Circular Arcs & 8 Angle-Matched Radial Construction Lines
 * 1.55s — Phase 05: Orbital Calibration Motion (clockwise outer arc & counter-clockwise inner arc)
 * 1.90s — Phase 06: Alignment Lock ("Precision Moment" — all geometry locks for 250ms)
 * 2.15s — Phase 07: Solid Vector Logo Reveal & Typography (E V ∧ ∧ N ∧ M, — HOSPITALITY —, — ◆ —, Pvt. Ltd.)
 * 2.55s — Phase 08: Aperture Expansion & Smooth Crossfade Exit to Website (~2.8s total duration)
 */
export default function SignaturePreloader({ onComplete }) {
  const [phase, setPhase] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    // Check user preference for reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      const quickTimer = setTimeout(() => {
        setIsExiting(true);
        setTimeout(() => {
          setIsRemoved(true);
          if (onComplete) onComplete();
        }, 300);
      }, 500);
      return () => clearTimeout(quickTimer);
    }

    const timers = [];

    // Phase 1: Origin Point
    setPhase(1);

    // Phase 2: Central A Construction (250ms)
    timers.push(setTimeout(() => setPhase(2), 250));

    // Phase 3: E & M Structures (700ms)
    timers.push(setTimeout(() => setPhase(3), 700));

    // Phase 4: Circular Arcs & Radial Alignment Lines (1150ms)
    timers.push(setTimeout(() => setPhase(4), 1150));

    // Phase 5: Orbital Calibration (1550ms)
    timers.push(setTimeout(() => setPhase(5), 1550));

    // Phase 6: Alignment Moment (1900ms)
    timers.push(setTimeout(() => setPhase(6), 1900));

    // Phase 7: Solid Logo & Wordmark Reveal (2150ms)
    timers.push(setTimeout(() => setPhase(7), 2150));

    // Phase 8: Aperture Expansion & Exit (2550ms)
    timers.push(
      setTimeout(() => {
        setIsExiting(true);
      }, 2550)
    );

    // Complete & Unmount (2850ms)
    timers.push(
      setTimeout(() => {
        setIsRemoved(true);
        if (onComplete) onComplete();
      }, 2850)
    );

    return () => {
      timers.forEach((t) => clearTimeout(t));
    };
  }, [onComplete]);

  if (isRemoved) return null;

  const darkGreen = "#0C2B22";
  const gold = "#A67C47";
  const charcoal = "#1E2A24";

  return (
    <div
      role="status"
      aria-label="EVAANAM Brand Experience Loading"
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-cream-200 select-none transition-all duration-500 ease-out ${
        isExiting ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ backgroundColor: "#F5F1E8" }}
    >
      <div
        className={`relative flex flex-col items-center justify-center p-6 transition-all duration-700 ease-out ${
          isExiting ? "scale-110 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        {/* Master SVG Canvas */}
        <svg
          viewBox="0 0 500 500"
          className="w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] max-w-[90vw] overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* ============================================================ */}
          {/* PHASE 01: ORIGIN GOLD POINT & VERTICAL AXIS                  */}
          {/* ============================================================ */}
          <circle
            cx="250"
            cy="180"
            r={phase >= 1 ? "3" : "0"}
            fill={gold}
            className={`transition-all duration-300 ${
              phase >= 1 ? "opacity-100" : "opacity-0"
            } ${phase >= 7 ? "opacity-0" : ""}`}
          />

          {/* Central Vertical Symmetry Axis */}
          <line
            x1="250"
            y1="30"
            x2="250"
            y2="330"
            stroke={gold}
            strokeWidth="0.8"
            strokeDasharray="3 4"
            className={`transition-all duration-500 ${
              phase >= 2 && phase < 7 ? "opacity-40" : "opacity-0"
            }`}
          />

          {/* ============================================================ */}
          {/* PHASE 04 & 05: CIRCULAR ARCS & RADIAL ALIGNMENT LINES        */}
          {/* ============================================================ */}

          {/* Outer Clockwise Rotating Arc (~75% circumference) */}
          <g
            className={`transition-all duration-500 origin-[250px_180px] ${
              phase >= 4 && phase < 7 ? "opacity-100" : "opacity-0"
            } ${phase >= 5 && phase < 6 ? "animate-[spin_5s_linear_infinite]" : ""}`}
          >
            <circle
              cx="250"
              cy="180"
              r="170"
              stroke={gold}
              strokeWidth="0.8"
              strokeDasharray="800 270"
              strokeDashoffset={phase >= 4 ? "0" : "1070"}
              strokeOpacity="0.45"
              className="transition-all duration-700 ease-out"
            />
            {/* Outer Orbital Nodes */}
            <circle cx="420" cy="180" r="2.5" fill={gold} fillOpacity="0.8" />
            <circle cx="130" cy="60" r="2" fill={gold} fillOpacity="0.7" />
            <circle cx="370" cy="300" r="2.5" fill={gold} fillOpacity="0.8" />
          </g>

          {/* Inner Counter-Clockwise Rotating Arc */}
          <g
            className={`transition-all duration-500 origin-[250px_180px] ${
              phase >= 4 && phase < 7 ? "opacity-100" : "opacity-0"
            } ${phase >= 5 && phase < 6 ? "animate-[spin_6s_linear_infinite_reverse]" : ""}`}
          >
            <circle
              cx="250"
              cy="180"
              r="120"
              stroke={darkGreen}
              strokeWidth="0.75"
              strokeDasharray="560 200"
              strokeDashoffset={phase >= 4 ? "0" : "760"}
              strokeOpacity="0.35"
              className="transition-all duration-700 ease-out"
            />
            {/* Inner Orbital Nodes */}
            <circle cx="250" cy="60" r="2.5" fill={darkGreen} fillOpacity="0.7" />
            <circle cx="165" cy="265" r="2" fill={darkGreen} fillOpacity="0.6" />
            <circle cx="335" cy="95" r="2.5" fill={gold} fillOpacity="0.8" />
          </g>

          {/* 8 Radial Construction Lines matching logo geometry slopes */}
          <g
            stroke={gold}
            strokeWidth="0.65"
            strokeDasharray="2 3"
            className={`transition-opacity duration-500 ${
              phase >= 4 && phase < 7 ? "opacity-40" : "opacity-0"
            }`}
          >
            {/* Diagonal matching A's Left Wishbone Slope */}
            <line x1="120" y1="310" x2="380" y2="50" />
            {/* Diagonal matching A's Right Wishbone Slope */}
            <line x1="120" y1="50" x2="380" y2="310" />
            {/* Top Peak Alignment (E & M peaks) */}
            <line x1="80" y1="80" x2="420" y2="80" />
            {/* Base Alignment (E & M base) */}
            <line x1="80" y1="280" x2="420" y2="280" />
            {/* A Flared Foot Level */}
            <line x1="100" y1="295" x2="400" y2="295" />
            {/* E Middle Arm Level */}
            <line x1="100" y1="180" x2="400" y2="180" />
          </g>

          {/* ============================================================ */}
          {/* PHASE 02: CENTRAL 'A' CONSTRUCTION (GOLD #A67C47)            */}
          {/* ============================================================ */}
          <g
            stroke={gold}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-all duration-500"
          >
            {/* Left Wishbone Leg of A: drawn bottom -> top */}
            <line
              x1="200"
              y1="295"
              x2="250"
              y2="116"
              strokeWidth="4.5"
              strokeDasharray="200"
              strokeDashoffset={phase >= 2 ? "0" : "200"}
              className="transition-all duration-500 ease-out"
            />

            {/* Right Wishbone Leg of A: drawn bottom -> top */}
            <line
              x1="300"
              y1="295"
              x2="250"
              y2="116"
              strokeWidth="4.5"
              strokeDasharray="200"
              strokeDashoffset={phase >= 2 ? "0" : "200"}
              style={{ transitionDelay: "40ms" }}
              className="transition-all duration-500 ease-out"
            />

            {/* Left Foot Flare */}
            <line
              x1="186"
              y1="295"
              x2="212"
              y2="295"
              strokeWidth="4.5"
              strokeDasharray="30"
              strokeDashoffset={phase >= 2 ? "0" : "30"}
              style={{ transitionDelay: "120ms" }}
              className="transition-all duration-400 ease-out"
            />

            {/* Right Foot Flare */}
            <line
              x1="288"
              y1="295"
              x2="314"
              y2="295"
              strokeWidth="4.5"
              strokeDasharray="30"
              strokeDashoffset={phase >= 2 ? "0" : "30"}
              style={{ transitionDelay: "160ms" }}
              className="transition-all duration-400 ease-out"
            />

            {/* Top Spire Arrowhead of A: drawn to apex (250, 56) */}
            <path
              d="M 232,118 L 250,56 L 268,118 L 250,96 Z"
              strokeWidth="3.5"
              strokeDasharray="160"
              strokeDashoffset={phase >= 2 ? "0" : "160"}
              style={{ transitionDelay: "220ms" }}
              className="transition-all duration-500 ease-out"
            />

            {/* Apex Gold Anchor Point */}
            <circle
              cx="250"
              cy="56"
              r="3.5"
              fill={gold}
              stroke="none"
              className={`transition-all duration-300 ${
                phase >= 2 ? "opacity-100 scale-100" : "opacity-0 scale-50"
              }`}
            />
          </g>

          {/* ============================================================ */}
          {/* PHASE 03: LEFT 'E' STRUCTURE (DARK GREEN #0C2B22)            */}
          {/* ============================================================ */}
          <g
            stroke={darkGreen}
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-all duration-500"
          >
            {/* E Main Vertical Spine: (130, 80) -> (130, 280) */}
            <line
              x1="130"
              y1="80"
              x2="130"
              y2="280"
              strokeDasharray="200"
              strokeDashoffset={phase >= 3 ? "0" : "200"}
              className="transition-all duration-500 ease-out"
            />

            {/* E Top Slanted Roof Diagonal */}
            <line
              x1="130"
              y1="80"
              x2="178"
              y2="144"
              strokeDasharray="80"
              strokeDashoffset={phase >= 3 ? "0" : "80"}
              style={{ transitionDelay: "70ms" }}
              className="transition-all duration-400 ease-out"
            />

            {/* E Middle Horizontal Bar */}
            <line
              x1="130"
              y1="180"
              x2="178"
              y2="180"
              strokeDasharray="50"
              strokeDashoffset={phase >= 3 ? "0" : "50"}
              style={{ transitionDelay: "140ms" }}
              className="transition-all duration-400 ease-out"
            />

            {/* E Bottom Slanted Floor Diagonal */}
            <line
              x1="130"
              y1="280"
              x2="178"
              y2="216"
              strokeDasharray="80"
              strokeDashoffset={phase >= 3 ? "0" : "80"}
              style={{ transitionDelay: "200ms" }}
              className="transition-all duration-400 ease-out"
            />
          </g>

          {/* ============================================================ */}
          {/* PHASE 03: RIGHT 'M' STRUCTURE (DARK GREEN #0C2B22)           */}
          {/* ============================================================ */}
          <g
            stroke={darkGreen}
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-all duration-500"
          >
            {/* M Outer Right Vertical Spine: (370, 80) -> (370, 280) */}
            <line
              x1="370"
              y1="80"
              x2="370"
              y2="280"
              strokeDasharray="200"
              strokeDashoffset={phase >= 3 ? "0" : "200"}
              style={{ transitionDelay: "50ms" }}
              className="transition-all duration-500 ease-out"
            />

            {/* M Top Slanted Roof Diagonal */}
            <line
              x1="370"
              y1="80"
              x2="322"
              y2="144"
              strokeDasharray="80"
              strokeDashoffset={phase >= 3 ? "0" : "80"}
              style={{ transitionDelay: "120ms" }}
              className="transition-all duration-400 ease-out"
            />

            {/* M Inner Left Vertical Spine */}
            <line
              x1="326"
              y1="144"
              x2="326"
              y2="280"
              strokeDasharray="140"
              strokeDashoffset={phase >= 3 ? "0" : "140"}
              style={{ transitionDelay: "180ms" }}
              className="transition-all duration-400 ease-out"
            />
          </g>

          {/* ============================================================ */}
          {/* PHASE 07: SOLID LOGO OVERLAY (EXACT AUTHENTIC SHAPES)        */}
          {/* ============================================================ */}
          <g
            className={`transition-opacity duration-500 ${
              phase >= 7 ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Left E Solid */}
            <g fill={darkGreen}>
              <polygon points="120,80 140,80 140,280 120,280" />
              <polygon points="120,80 184,136 170,152 120,108" />
              <polygon points="120,172 178,172 178,190 120,190" />
              <polygon points="120,280 120,252 170,208 184,224" />
            </g>

            {/* Right M Solid */}
            <g fill={darkGreen}>
              <polygon points="360,80 380,80 380,280 360,280" />
              <polygon points="380,80 316,136 330,152 380,108" />
              <polygon points="316,136 336,136 336,280 316,280" />
            </g>

            {/* Center A Solid */}
            <g fill={gold}>
              <polygon points="250,56 268,118 250,96 232,118" />
              <path d="M 250,116 L 262,156 L 250,174 L 238,156 Z" />
              <polygon points="248,154 260,188 212,295 190,295 200,282 236,192" />
              <polygon points="186,295 212,295 212,289 186,289" />
              <polygon points="252,154 240,188 288,295 310,295 300,282 264,192" />
              <polygon points="288,295 314,295 314,289 288,289" />
            </g>
          </g>

          {/* ============================================================ */}
          {/* PHASE 07: TYPOGRAPHY & BRAND WORDMARK                        */}
          {/* ============================================================ */}
          <g
            className={`transition-all duration-500 ease-out ${
              phase >= 7
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3 pointer-events-none"
            }`}
          >
            {/* "E V ∧ ∧ N ∧ M" with crossbar-less A's */}
            <g fill={darkGreen} transform="translate(0, 350)">
              <path d="M 68,0 L 98,0 L 98,4 L 72,4 L 72,16 L 95,16 L 95,20 L 72,20 L 72,32 L 98,32 L 98,36 L 68,36 Z" />
              <path d="M 132,0 L 148,36 L 152,36 L 168,0 L 163,0 L 150,30 L 137,0 Z" />
              <path d="M 200,36 L 216,0 L 220,0 L 236,36 L 231,36 L 218,6 L 205,36 Z" />
              <path d="M 264,36 L 280,0 L 284,0 L 300,36 L 295,36 L 282,6 L 269,36 Z" />
              <path d="M 330,0 L 334,0 L 358,30 L 358,0 L 362,0 L 362,36 L 358,36 L 334,6 L 334,36 L 330,36 Z" />
              <path d="M 392,36 L 408,0 L 412,0 L 428,36 L 423,36 L 410,6 L 397,36 Z" />
              <path d="M 456,0 L 460,0 L 476,26 L 492,0 L 496,0 L 496,36 L 492,36 L 492,8 L 477,32 L 475,32 L 460,8 L 460,36 L 456,36 Z" />
            </g>

            {/* "— HOSPITALITY —" (Gold #A67C47) */}
            <g fill={gold} stroke={gold} transform="translate(0, 404)">
              <line x1="68" y1="-5" x2="136" y2="-5" strokeWidth="1.2" />
              <text
                x="250"
                y="0"
                fontFamily="'Plus Jakarta Sans', 'Inter', sans-serif"
                fontSize="15"
                fontWeight="500"
                letterSpacing="7"
                textAnchor="middle"
                stroke="none"
              >
                HOSPITALITY
              </text>
              <line x1="364" y1="-5" x2="432" y2="-5" strokeWidth="1.2" />
            </g>

            {/* Divider: Hairline with Centered Gold Diamond */}
            <g transform="translate(0, 442)">
              <line x1="160" y1="0" x2="236" y2="0" stroke={darkGreen} strokeWidth="0.9" strokeOpacity="0.8" />
              <polygon points="250,-5 255,0 250,5 245,0" fill={gold} />
              <line x1="264" y1="0" x2="340" y2="0" stroke={darkGreen} strokeWidth="0.9" strokeOpacity="0.8" />
            </g>

            {/* "Pvt. Ltd." (Serif) */}
            <g transform="translate(0, 480)">
              <text
                x="250"
                y="0"
                fontFamily="'Cormorant Garamond', Georgia, serif"
                fontSize="24"
                fontWeight="500"
                letterSpacing="4"
                fill={charcoal}
                textAnchor="middle"
              >
                Pvt. Ltd.
              </text>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}
