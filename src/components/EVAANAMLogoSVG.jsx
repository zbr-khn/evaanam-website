import React from "react";

/**
 * EVAANAMLogoSVG
 * Exact vector recreation of the official EVAANAM Hospitality logo:
 * - Upper EAM monogram with Dark Green (#0C2B22 / #F5F1E8 in dark mode) E and M
 * - Soaring two-tier Gold (#A67C47 / #B08D57) central A (top arrowhead spire + wishbone legs with flared feet)
 * - Geometric "E V ∧ ∧ N ∧ M" with crossbar-less chevron A's
 * - Gold "— HOSPITALITY —" with hairlines
 * - Hairline divider with centered gold diamond
 * - "Pvt. Ltd." serif wordmark
 */
export default function EVAANAMLogoSVG({
  width = 300,
  height = 300,
  className = "",
  showAllText = true,
  darkTheme = false,
}) {
  const brandPrimary = darkTheme ? "#F5F1E8" : "#0C2B22";
  const gold = "#B08D57";
  const mutedText = darkTheme ? "#C9C1B5" : "#1E2A24";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      width={width}
      height={height}
      className={`select-none overflow-visible transition-colors duration-400 ${className}`}
    >
      {/* ================================================================ */}
      {/* 1. UPPER EAM MONOGRAM                                            */}
      {/* ================================================================ */}
      <g id="evaanam-monogram">
        {/* LEFT 'E' STRUCTURE */}
        <g fill={brandPrimary} id="e-structure">
          {/* Vertical Main Spine of E */}
          <polygon points="120,80 140,80 140,280 120,280" />
          
          {/* Top Slanted Diagonal of E */}
          <polygon points="120,80 184,136 170,152 120,108" />
          
          {/* Middle Horizontal Bar of E */}
          <polygon points="120,172 178,172 178,190 120,190" />
          
          {/* Bottom Slanted Diagonal of E */}
          <polygon points="120,280 120,252 170,208 184,224" />
        </g>

        {/* RIGHT 'M' STRUCTURE */}
        <g fill={brandPrimary} id="m-structure">
          {/* Outer Right Vertical Spine of M */}
          <polygon points="360,80 380,80 380,280 360,280" />
          
          {/* Top Slanted Diagonal of M */}
          <polygon points="380,80 316,136 330,152 380,108" />
          
          {/* Inner Left Vertical Spine of M */}
          <polygon points="316,136 336,136 336,280 316,280" />
        </g>

        {/* CENTRAL 'A' STRUCTURE (Gold) */}
        <g fill={gold} id="a-structure">
          {/* Top Spire / Arrowhead Chevron */}
          <polygon points="250,56 268,118 250,96 232,118" />

          {/* Lower Wishbone Legs of A */}
          <path d="M 250,116 L 262,156 L 250,174 L 238,156 Z" />
          
          {/* Left Wishbone Leg with Flared Foot */}
          <polygon points="248,154 260,188 212,295 190,295 200,282 236,192" />
          <polygon points="186,295 212,295 212,289 186,289" />

          {/* Right Wishbone Leg with Flared Foot */}
          <polygon points="252,154 240,188 288,295 310,295 300,282 264,192" />
          <polygon points="288,295 314,295 314,289 288,289" />
        </g>
      </g>

      {/* ================================================================ */}
      {/* 2. TYPOGRAPHY & BRAND WORDMARK                                   */}
      {/* ================================================================ */}
      {showAllText && (
        <g id="evaanam-typography">
          {/* "E V ∧ ∧ N ∧ M" with geometric crossbar-less A's */}
          <g fill={brandPrimary} transform="translate(0, 350)">
            {/* E */}
            <path d="M 68,0 L 98,0 L 98,4 L 72,4 L 72,16 L 95,16 L 95,20 L 72,20 L 72,32 L 98,32 L 98,36 L 68,36 Z" />
            
            {/* V */}
            <path d="M 132,0 L 148,36 L 152,36 L 168,0 L 163,0 L 150,30 L 137,0 Z" />
            
            {/* ∧ (Chevron A) */}
            <path d="M 200,36 L 216,0 L 220,0 L 236,36 L 231,36 L 218,6 L 205,36 Z" />
            
            {/* ∧ (Chevron A) */}
            <path d="M 264,36 L 280,0 L 284,0 L 300,36 L 295,36 L 282,6 L 269,36 Z" />
            
            {/* N */}
            <path d="M 330,0 L 334,0 L 358,30 L 358,0 L 362,0 L 362,36 L 358,36 L 334,6 L 334,36 L 330,36 Z" />
            
            {/* ∧ (Chevron A) */}
            <path d="M 392,36 L 408,0 L 412,0 L 428,36 L 423,36 L 410,6 L 397,36 Z" />
            
            {/* M */}
            <path d="M 456,0 L 460,0 L 476,26 L 492,0 L 496,0 L 496,36 L 492,36 L 492,8 L 477,32 L 475,32 L 460,8 L 460,36 L 456,36 Z" />
          </g>

          {/* "— HOSPITALITY —" (Gold) */}
          <g fill={gold} stroke={gold} transform="translate(0, 404)">
            {/* Left Line */}
            <line x1="68" y1="-5" x2="136" y2="-5" strokeWidth="1.2" />
            
            {/* Text HOSPITALITY */}
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

            {/* Right Line */}
            <line x1="364" y1="-5" x2="432" y2="-5" strokeWidth="1.2" />
          </g>

          {/* Divider: Hairline with Centered Gold Diamond */}
          <g transform="translate(0, 442)">
            {/* Left Hairline */}
            <line x1="160" y1="0" x2="236" y2="0" stroke={brandPrimary} strokeWidth="0.9" strokeOpacity="0.8" />
            
            {/* Gold Diamond */}
            <polygon points="250,-5 255,0 250,5 245,0" fill={gold} />
            
            {/* Right Hairline */}
            <line x1="264" y1="0" x2="340" y2="0" stroke={brandPrimary} strokeWidth="0.9" strokeOpacity="0.8" />
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
              fill={mutedText}
              textAnchor="middle"
            >
              Pvt. Ltd.
            </text>
          </g>
        </g>
      )}
    </svg>
  );
}
