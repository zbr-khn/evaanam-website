import React, { useState } from "react";
import EVAANAMLogoSVG from "./EVAANAMLogoSVG";
import { useTheme } from "../context/ThemeContext";

/**
 * EVAANAMGeometricMark
 * Displays user's official brand logo image from /brand/ if available,
 * with fallback to vector geometric mark.
 */
export default function EVAANAMGeometricMark({
  size = 36,
  className = "",
  showWordmark = false,
  showAllText = false,
  darkTheme,
}) {
  const { isDark } = useTheme();
  const effectiveDark = darkTheme !== undefined ? darkTheme : isDark;
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`inline-flex items-center justify-center select-none ${className}`}>
      {!imageError ? (
        <img
          src="./brand/logo.png"
          alt="EVAANAM Brand Logo"
          style={{ width: `${size}px`, height: `${size}px` }}
          className="object-contain"
          onError={() => setImageError(true)}
        />
      ) : (
        <EVAANAMLogoSVG
          width={size}
          height={size}
          showAllText={showAllText}
          darkTheme={effectiveDark}
        />
      )}
    </div>
  );
}
