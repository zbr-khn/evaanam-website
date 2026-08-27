import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

// Color keyframes alternating between:
// Dark Mode: Green -> Brown -> Green -> Brown -> Green -> Brown
// Light Mode: White -> Soft Light Brown -> White -> Soft Light Brown -> White -> Soft Light Brown
const PALETTE_STOPS = {
  dark: [
    [8, 31, 24],    // 0%: Deep British Racing Green (#081F18)
    [30, 21, 21],   // 20%: Rich Chocolate Brown (#1E1515)
    [12, 38, 30],   // 40%: Forest Emerald Green (#0C261E)
    [34, 24, 24],   // 60%: Deep Espresso Brown (#221818)
    [9, 33, 25],    // 80%: Deep Emerald Night (#092119)
    [25, 16, 16],   // 100%: Rich Velvet Chocolate (#191010)
  ],
  light: [
    [252, 250, 246], // 0%: Crisp Warm White (#FCFAF6)
    [243, 236, 226], // 20%: Soft Light Linen Brown (#F3ECE2)
    [250, 250, 247], // 40%: Pure Pearl White (#FAFAF7)
    [237, 226, 212], // 60%: Warm Biscuit Light Brown (#EDE2D4)
    [249, 247, 243], // 80%: Crisp White Linen (#F9F7F3)
    [239, 230, 216], // 100%: Soft Antique Light Brown (#EFE6D8)
  ],
};

// Helper to linearly interpolate between two RGB colors
function interpolateColor(color1, color2, factor) {
  const r = Math.round(color1[0] + factor * (color2[0] - color1[0]));
  const g = Math.round(color1[1] + factor * (color2[1] - color1[1]));
  const b = Math.round(color1[2] + factor * (color2[2] - color1[2]));
  return `rgb(${r}, ${g}, ${b})`;
}

// Get exact interpolated color from scroll progress (0.0 to 1.0)
function getScrollColor(progress, isDark) {
  const stops = isDark ? PALETTE_STOPS.dark : PALETTE_STOPS.light;
  const numSegments = stops.length - 1;
  const scaledProgress = Math.max(0, Math.min(1, progress)) * numSegments;
  const index = Math.min(Math.floor(scaledProgress), numSegments - 1);
  const factor = scaledProgress - index;

  return interpolateColor(stops[index], stops[index + 1], factor);
}

export default function useScrollBackground() {
  const location = useLocation();
  const { isDark } = useTheme();

  useEffect(() => {
    let ticking = false;

    const updateBackground = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.max(0, Math.min(1, window.scrollY / docHeight)) : 0;
      
      const activeColor = getScrollColor(progress, isDark);
      const lightColor = getScrollColor(progress, false);
      const darkColor = getScrollColor(progress, true);

      // Set CSS variables and apply directly to html and body
      document.documentElement.style.setProperty("--scroll-bg-current", activeColor);
      document.documentElement.style.setProperty("--scroll-bg-light", lightColor);
      document.documentElement.style.setProperty("--scroll-bg-dark", darkColor);
      
      document.documentElement.style.backgroundColor = activeColor;
      document.body.style.backgroundColor = "transparent";

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateBackground);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateBackground();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname, isDark]);
}
