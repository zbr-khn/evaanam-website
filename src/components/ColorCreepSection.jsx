import React, { useEffect, useRef, useState } from "react";

/**
 * ColorCreepSection Component
 * Creates an editorial scroll-driven "color creeping up" background transition:
 * - Content (text, headlines, cards) is rendered in the crisp foreground (z-10).
 * - A luxury tone backdrop smoothly rises up with a feathered leading edge as you scroll into view.
 */
export default function ColorCreepSection({
  tone = "a", // "a" (Green in Dark / White in Light) | "b" (Brown in Dark / Biscuit in Light)
  children,
  className = "",
  id,
}) {
  const sectionRef = useRef(null);
  const [isCrept, setIsCrept] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsCrept(true);
        }
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -60px 0px", // triggers smoothly as user approaches
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
      className={`relative overflow-hidden ${toneClass} ${className}`}
    >
      {/* 1. Creeping Color Backdrop Curtain (Rises up smoothly behind the text) */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 z-0 pointer-events-none transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isCrept
            ? "opacity-100 transform translate-y-0"
            : "opacity-30 transform translate-y-16"
        }`}
      >
        {/* Soft Feathered Blend at Top & Bottom Boundaries */}
        <div className="absolute top-0 left-0 right-0 h-28 sm:h-40 bg-gradient-to-b from-transparent via-current/10 to-transparent pointer-events-none opacity-40" />
        <div className="absolute bottom-0 left-0 right-0 h-28 sm:h-40 bg-gradient-to-t from-transparent via-current/10 to-transparent pointer-events-none opacity-40" />
      </div>

      {/* 2. Stable Foreground Content Layer */}
      <div className="relative z-10">{children}</div>
    </section>
  );
}
