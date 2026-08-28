import React, { useEffect, useRef, useState } from "react";

/**
 * ColorCreepSection Component
 * Ultra-smooth, hardware-accelerated 60-120fps background transition section.
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
      {/* 1. Hardware-Accelerated Creeping Color Backdrop Curtain */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 z-0 pointer-events-none transition-all duration-700 ease-out will-change-transform ${
          isCrept
            ? "opacity-100 transform translate-y-0"
            : "opacity-20 transform translate-y-12"
        }`}
      >
        {/* Soft Feathered Blend */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent via-current/10 to-transparent pointer-events-none opacity-30" />
      </div>

      {/* 2. Stable Foreground Content Layer */}
      <div className="relative z-10">{children}</div>
    </section>
  );
}
