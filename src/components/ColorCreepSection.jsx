import React, { useEffect, useRef, useState } from "react";

/**
 * ColorCreepSection Component
 * Renders distinct dual-tone backgrounds with smooth, continuous creeping gradient transitions:
 * - Tone A: Deep British Racing Green (#081F18) in Dark / Crisp Alabaster White (#FAF8F3) in Light
 * - Tone B: Rich Espresso Chocolate (#1A120B) in Dark / Warm Biscuit Sandstone (#EFE8DE) in Light
 * - Seamless top gradient seam that smoothly melts the previous tone into the current tone as you scroll.
 */
export default function ColorCreepSection({
  tone = "a", // "a" | "b"
  children,
  className = "",
  id,
  showTopGradient = true,
}) {
  const sectionRef = useRef(null);
  const [isCrept, setIsCrept] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsCrept(true);
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  const toneClass = tone === "b" ? "section-tone-b" : "section-tone-a";

  return (
    <section
      id={id}
      ref={sectionRef}
      data-tone={tone}
      className={`relative overflow-hidden ${toneClass} ${className}`}
    >
      {/* 1. Seamless Upward-Creeping Dual-Tone Gradient Seam at Top */}
      {showTopGradient && (
        <div
          aria-hidden="true"
          className="absolute top-0 left-0 right-0 h-28 sm:h-40 pointer-events-none z-0"
          style={{
            background:
              tone === "b"
                ? "linear-gradient(to bottom, var(--tone-a-blend, rgba(8,31,24,0.6)) 0%, transparent 100%)"
                : "linear-gradient(to bottom, var(--tone-b-blend, rgba(26,18,11,0.6)) 0%, transparent 100%)",
          }}
        />
      )}

      {/* 2. Hardware-Accelerated Dynamic Liquid Glow Curtain */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 z-0 pointer-events-none transition-all duration-700 ease-out will-change-transform ${
          isCrept ? "opacity-100 translate-y-0" : "opacity-30 translate-y-8"
        }`}
      >
        <div
          className="absolute inset-0 opacity-40 dark:opacity-30"
          style={{
            background:
              tone === "b"
                ? "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(229,169,98,0.08) 0%, transparent 80%)"
                : "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(104,211,145,0.08) 0%, transparent 80%)",
          }}
        />
      </div>

      {/* 3. Stable Foreground Content Layer */}
      <div className="relative z-10">{children}</div>
    </section>
  );
}
