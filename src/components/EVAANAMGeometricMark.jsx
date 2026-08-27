import React from "react";
import EVAANAMLogoSVG from "./EVAANAMLogoSVG";
import { useTheme } from "../context/ThemeContext";

/**
 * EVAANAMGeometricMark
 * Reusable brand mark derived directly from the official EVAANAM logo.
 */
export default function EVAANAMGeometricMark({
  size = 48,
  className = "",
  showWordmark = false,
  showAllText = false,
  darkTheme,
}) {
  const { isDark } = useTheme();
  const effectiveDark = darkTheme !== undefined ? darkTheme : isDark;

  return (
    <div className={`inline-flex flex-col items-center select-none ${className}`}>
      <EVAANAMLogoSVG
        width={size}
        height={size}
        showAllText={showAllText}
        darkTheme={effectiveDark}
      />
    </div>
  );
}
