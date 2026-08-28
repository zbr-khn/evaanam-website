import React, { useEffect, useRef, useState } from "react";

/**
 * ColorCreepSection Component
 * Creates ultra-smooth continuous dual-tone gradient transitions:
 * - Tone A: Deep British Racing Green (#081F18) in Dark / Crisp Alabaster White (#FAF8F3) in Light
 * - Tone B: Rich Espresso Chocolate (#1A120B) in Dark / Warm Biscuit Sandstone (#EFE8DE) in Light
 * - Deep 250px progressive easing curve at boundaries eliminates abrupt color cuts.
 */
export default function ColorCreepSection({
  tone = "a", // "a" | "b"
  children,
  className = "",
  id,
  showTransition = true,
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
      {/* 1. Deep Easing Transition Ramp at Top (Smooth progressive color morph) */}
      {showTransition && (
        <div
          aria-hidden="true"
          className="absolute top-0 left-0 right-0 h-44 sm:h-64 pointer-events-none z-0"
          style={{
            background:
              tone === "b"
                ? "linear-gradient(to bottom, var(--tone-a-color) 0%, var(--tone-a-to-b-mid) 45%, transparent 100%)"
                : "linear-gradient(to bottom, var(--tone-b-color) 0%, var(--tone-b-to-a-mid) 45%, transparent 100%)",
          }}
        />
      )}

      {/* 2. Hardware-Accelerated Dynamic Liquid Glow Curtain */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 z-0 pointer-events-none transition-all duration-1000 ease-out will-change-transform ${
          isCrept ? "opacity-100 translate-y-0" : "opacity-25 translate-y-12"
        }`}
      >
        <div
          className="absolute inset-0 opacity-35 dark:opacity-25"
          style={{
            background:
              tone === "b"
                ? "radial-gradient(ellipse 90% 60% at 50% 100%, rgba(229,169,98,0.12) 0%, transparent 75%)"
                : "radial-gradient(ellipse 90% 60% at 50% 100%, rgba(104,211,145,0.12) 0%, transparent 75%)",
          }}
        />
      </div>

      {/* 3. Stable Foreground Content Layer */}
      <div className="relative z-10">{children}</div>
    </section>
  );
}
