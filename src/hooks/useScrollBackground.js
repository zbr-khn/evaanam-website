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

function interpolateRGB(c1, c2, factor) {
  const t = Math.max(0, Math.min(1, factor));
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
    let cachedSections = [];
    let ticking = false;

    // Cache section layout metrics on load and resize (Zero layout thrashing on scroll)
    const computeSectionMetrics = () => {
      const elements = Array.from(document.querySelectorAll("[data-tone]"));
      const scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
      
      cachedSections = elements.map((el) => {
        const rect = el.getBoundingClientRect();
        const top = rect.top + scrollY;
        const height = rect.height;
        const center = top + height * 0.5;
        return {
          center,
          tone: el.getAttribute("data-tone") || "a",
        };
      });
    };

    const updateBackground = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
      const viewportHeight = window.innerHeight;
      const scrollCenter = scrollY + viewportHeight * 0.45;
      const modeColors = isDark ? COLORS.dark : COLORS.light;

      let activeColor = isDark ? "rgb(8, 31, 24)" : "rgb(250, 248, 243)";

      if (cachedSections.length > 0) {
        let prevSection = null;
        let nextSection = null;

        for (let i = 0; i < cachedSections.length; i++) {
          if (cachedSections[i].center <= scrollCenter) {
            prevSection = cachedSections[i];
          } else {
            nextSection = cachedSections[i];
            break;
          }
        }

        if (prevSection && nextSection) {
          const span = Math.max(1, nextSection.center - prevSection.center);
          const progress = Math.max(0, Math.min(1, (scrollCenter - prevSection.center) / span));

          const prevColor = prevSection.tone === "b" ? modeColors.b : modeColors.a;
          const nextColor = nextSection.tone === "b" ? modeColors.b : modeColors.a;

          activeColor = interpolateRGB(prevColor, nextColor, progress);
        } else if (prevSection) {
          const c = prevSection.tone === "b" ? modeColors.b : modeColors.a;
          activeColor = `rgb(${c[0]}, ${c[1]}, ${c[2]})`;
        } else if (nextSection) {
          const c = nextSection.tone === "b" ? modeColors.b : modeColors.a;
          activeColor = `rgb(${c[0]}, ${c[1]}, ${c[2]})`;
        }
      } else {
        const docHeight = document.documentElement.scrollHeight - viewportHeight;
        const progress = docHeight > 0 ? Math.max(0, Math.min(1, scrollY / docHeight)) : 0;
        const wave = (Math.sin(progress * Math.PI * 4 - Math.PI / 2) + 1) / 2;
        activeColor = interpolateRGB(modeColors.a, modeColors.b, wave);
      }

      document.documentElement.style.setProperty("--scroll-bg-current", activeColor);
      document.documentElement.style.backgroundColor = activeColor;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateBackground);
        ticking = true;
      }
    };

    const handleResize = () => {
      computeSectionMetrics();
      updateBackground();
    };

    // Initial calculation after layout stabilizes
    setTimeout(() => {
      computeSectionMetrics();
      updateBackground();
    }, 50);

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [location.pathname, isDark]);
}
