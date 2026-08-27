import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

// Curated atmospheric palette progression across scroll
// Light mode stages: Warm Cream -> Alabaster Light -> Sand Cream -> Editorial Linen -> Deep Cream
// Dark mode stages: Deep Green-Black -> Forest Surface -> Elevated Night -> Slate Forest -> Abyssal Night
const PALETTES = {
  light: [
    "#F5F1E8", // 0% Top (Primary Cream)
    "#FAF8F3", // 25% Scroll (Soft Light Alabaster)
    "#EDE6D6", // 50% Scroll (Deeper Sand Linen)
    "#F7F4EC", // 75% Scroll (Warm Editorial Ivory)
    "#E8DFCE", // 100% Scroll (Vintage Rich Sand)
  ],
  dark: [
    "#111713", // 0% Top (Deep Green-Black)
    "#17221C", // 25% Scroll (Forest Surface)
    "#202B24", // 50% Scroll (Elevated Night 800)
    "#19251F", // 75% Scroll (Slate Emerald Night)
    "#0E1410", // 100% Scroll (Abyssal Deep Night)
  ]
};

export function useScrollBackground() {
  const location = useLocation();
  const { theme } = useTheme();

  useEffect(() => {
    const isDark = theme === "dark" || document.documentElement.classList.contains("dark");
    const colorSet = isDark ? PALETTES.dark : PALETTES.light;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (docHeight <= 0) return;

          const scrollProgress = Math.max(0, Math.min(1, window.scrollY / docHeight));
          
          // Determine color interpolation index
          const totalSegments = colorSet.length - 1;
          const segmentIndex = Math.min(totalSegments - 1, Math.floor(scrollProgress * totalSegments));
          const activeColor = colorSet[segmentIndex];

          document.documentElement.style.setProperty("--current-scroll-bg", activeColor);
          document.body.style.backgroundColor = activeColor;

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial invoke on route change

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname, theme]);
}

export default useScrollBackground;
