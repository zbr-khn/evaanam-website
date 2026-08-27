import React from "react";
import EVAANAMLogoSVG from "./EVAANAMLogoSVG";

/**
 * EVAANAMGeometricMark
 * Reusable brand mark derived directly from the official EVAANAM logo.
 */
export default function EVAANAMGeometricMark({
  size = 48,
  className = "",
  showWordmark = false,
  showAllText = false,
  darkTheme = false,
}) {
  return (
    <div className={`inline-flex flex-col items-center select-none ${className}`}>
      <EVAANAMLogoSVG
        width={size}
        height={size}
        showAllText={showAllText}
        className={darkTheme ? "brightness-125 contrast-125" : ""}
      />
    </div>
  );
}
