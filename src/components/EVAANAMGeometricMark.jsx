import React from "react";
import EVAANAMLogoSVG from "./EVAANAMLogoSVG";
import { useTheme } from "../context/ThemeContext";

/**
 * EVAANAMGeometricMark
 * Reusable brand mark rendering the authentic sacred geometry emblem.
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

  return (
    <div className={`inline-flex items-center justify-center select-none ${className}`}>
      <EVAANAMLogoSVG
        width={size}
        height={size}
        showAllText={showAllText}
        darkTheme={effectiveDark}
      />
    </div>
  );
}
