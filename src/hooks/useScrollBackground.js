import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

// Exact Dual-Tone RGB Constants
const COLORS = {
  dark: {
    a: [8, 31, 24],    // Tone A: Deep British Racing Green (#081F18)
    b: [26, 18, 11],   // Tone B: Warm Espresso Chocolate Brown (#1A120B)
  },
  light: {
    a: [250, 248, 243], // Tone A: Crisp Alabaster White (#FAF8F3)
    b: [239, 232, 222], // Tone B: Warm Biscuit Sandstone (#EFE8DE)
  },
};

// Interpolate RGB values
function interpolateRGB(c1, c2, factor) {
  const t = Math.max(0, Math.min(1, factor));
  // Smooth cubic ease for luxury feel
  const ease = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  const r = Math.round(c1[0] + ease * (c2[0] - c1[0]));
  const g = Math.round(c1[1] + ease * (c2[1] - c1[1]));
  const b = Math.round(c1[2] + ease * (c2[2] - c1[2]));
  return `rgb(${r}, ${g}, ${b})`;
}

export default function useScrollBackground() {
  const location = useLocation();
  const { isDark } = useTheme();

  useEffect(() => {
    let ticking = false;

    const updateBackground = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const viewportHeight = window.innerHeight;
      const scrollCenter = scrollY + viewportHeight * 0.45;

      // Find all sections marked with data-tone
      const sections = Array.from(document.querySelectorAll("[data-tone]"));

      let activeColor = isDark ? "rgb(8, 31, 24)" : "rgb(250, 248, 243)";
      let currentRatio = 0; // 0 = Tone A (Green/White), 1 = Tone B (Brown/Sandstone)

      if (sections.length > 0) {
        // Find which sections we are between
        let prevSection = null;
        let nextSection = null;

        for (let i = 0; i < sections.length; i++) {
          const rect = sections[i].getBoundingClientRect();
          const top = rect.top + scrollY;
          const height = rect.height;
          const center = top + height * 0.5;

          if (center <= scrollCenter) {
            prevSection = { el: sections[i], center, tone: sections[i].getAttribute("data-tone") };
          } else {
            nextSection = { el: sections[i], center, tone: sections[i].getAttribute("data-tone") };
            break;
          }
        }

        const modeColors = isDark ? COLORS.dark : COLORS.light;

        if (prevSection && nextSection) {
          const span = Math.max(1, nextSection.center - prevSection.center);
          const progress = Math.max(0, Math.min(1, (scrollCenter - prevSection.center) / span));

          const prevColor = prevSection.tone === "b" ? modeColors.b : modeColors.a;
          const nextColor = nextSection.tone === "b" ? modeColors.b : modeColors.a;

          activeColor = interpolateRGB(prevColor, nextColor, progress);
          const prevVal = prevSection.tone === "b" ? 1 : 0;
          const nextVal = nextSection.tone === "b" ? 1 : 0;
          currentRatio = prevVal + progress * (nextVal - prevVal);
        } else if (prevSection) {
          const c = prevSection.tone === "b" ? modeColors.b : modeColors.a;
          activeColor = `rgb(${c[0]}, ${c[1]}, ${c[2]})`;
          currentRatio = prevSection.tone === "b" ? 1 : 0;
        } else if (nextSection) {
          const c = nextSection.tone === "b" ? modeColors.b : modeColors.a;
          activeColor = `rgb(${c[0]}, ${c[1]}, ${c[2]})`;
          currentRatio = nextSection.tone === "b" ? 1 : 0;
        }
      } else {
        // Fallback: calculate overall document scroll progress
        const docHeight = document.documentElement.scrollHeight - viewportHeight;
        const progress = docHeight > 0 ? Math.max(0, Math.min(1, scrollY / docHeight)) : 0;
        // Alternating wave: 0 -> 1 -> 0 -> 1 -> 0 ...
        const wave = (Math.sin(progress * Math.PI * 4 - Math.PI / 2) + 1) / 2;
        const modeColors = isDark ? COLORS.dark : COLORS.light;
        activeColor = interpolateRGB(modeColors.a, modeColors.b, wave);
        currentRatio = wave;
      }

      // Apply dynamically to html document
      document.documentElement.style.setProperty("--scroll-bg-current", activeColor);
      document.documentElement.style.setProperty("--tone-ratio", currentRatio.toFixed(3));
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
    window.addEventListener("resize", handleScroll, { passive: true });
    updateBackground();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [location.pathname, isDark]);
}
