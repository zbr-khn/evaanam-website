import React, { useEffect, useRef, useState } from "react";

/**
 * ScrollReveal Component
 * Smoothly animates children into view when they enter the viewport as the user scrolls down.
 * Supports direction variants: "up" (default), "left", "right", "scale", "fade"
 * Supports custom delay (in ms) and threshold.
 */
export default function ScrollReveal({
  children,
  className = "",
  variant = "up", // "up" | "left" | "right" | "scale" | "fade"
  delay = 0, // delay in milliseconds
  threshold = 0.1,
}) {
  const [isRevealed, setIsRevealed] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          // Once revealed, unobserve to retain GPU performance
          if (domRef.current) {
            observer.unobserve(domRef.current);
          }
        }
      },
      {
        threshold: Math.min(Math.max(threshold, 0.05), 0.5),
        rootMargin: "0px 0px -50px 0px", // Trigger slightly before element enters view for buttery response
      }
    );

    const currentElem = domRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) observer.unobserve(currentElem);
    };
  }, [threshold]);

  const variantClass =
    variant === "left"
      ? "scroll-reveal-left"
      : variant === "right"
      ? "scroll-reveal-right"
      : variant === "scale"
      ? "scroll-reveal-scale"
      : "scroll-reveal";

  return (
    <div
      ref={domRef}
      className={`${variantClass} ${isRevealed ? "is-revealed" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
