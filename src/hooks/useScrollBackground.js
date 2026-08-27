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
    // Clear any conflicting inline styles on body so CSS variables and classes take full priority
    document.body.style.removeProperty("background-color");

    let ticking = false;

    const updateScrollColors = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = docHeight > 0 ? Math.max(0, Math.min(1, window.scrollY / docHeight)) : 0;
      
      const totalSegments = PALETTES.light.length - 1;
      const segmentIndex = Math.min(totalSegments, Math.floor(scrollProgress * totalSegments));
      
      const lightColor = PALETTES.light[segmentIndex];
      const darkColor = PALETTES.dark[segmentIndex];

      // Set both CSS variables simultaneously on documentElement
      document.documentElement.style.setProperty("--scroll-bg-light", lightColor);
      document.documentElement.style.setProperty("--scroll-bg-dark", darkColor);
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateScrollColors();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateScrollColors(); // Immediate sync on mount, route change, or theme toggle

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname, theme]);
}

export default useScrollBackground;
