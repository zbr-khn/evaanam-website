import React from "react";

/**
 * ColorCreepSection Component
 * Creates seamless continuous gradient color bleeds from one tone into the next:
 * - Tone A -> Tone B: Bleeds smoothly from Green/Alabaster to Espresso/Biscuit
 * - Tone B -> Tone A: Bleeds smoothly from Espresso/Biscuit to Green/Alabaster
 * - ZERO hard cut lines or fainted border dividers.
 */
export default function ColorCreepSection({
  tone = "a", // "a" | "b"
  children,
  className = "",
  id,
}) {
  const bleedClass = tone === "b" ? "bleed-a-to-b section-tone-b" : "bleed-b-to-a section-tone-a";

  return (
    <section
      id={id}
      data-tone={tone}
      className={`relative overflow-hidden ${bleedClass} ${className}`}
    >
      {/* Stable Foreground Content Layer */}
      <div className="relative z-10">{children}</div>
    </section>
  );
}
