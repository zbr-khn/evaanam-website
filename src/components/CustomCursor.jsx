import React, { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const requestRef = useRef();
  const mousePos = useRef({ x: -100, y: -100 });
  const trailing = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Check if device is touch-enabled
    if (window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if current target or ancestor is interactive
      const target = e.target;
      const isInteractive = target && (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.tagName === "SELECT" ||
        target.getAttribute("role") === "button" ||
        target.closest("button") ||
        target.closest("a") ||
        target.closest("input") ||
        target.closest("[role='button']") ||
        target.classList.contains("cursor-pointer") ||
        window.getComputedStyle(target).cursor === "pointer"
      );

      setIsHovered(!!isInteractive);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Smooth Lerp Animation for the outer ring
    const animateTrailing = () => {
      const ease = 0.18; // smooth lag factor
      trailing.current.x += (mousePos.current.x - trailing.current.x) * ease;
      trailing.current.y += (mousePos.current.y - trailing.current.y) * ease;
      
      setTrailingPos({
        x: trailing.current.x,
        y: trailing.current.y,
      });

      requestRef.current = requestAnimationFrame(animateTrailing);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    requestRef.current = requestAnimationFrame(animateTrailing);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* 1. Precision Inner Point (Instant Follow) */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] transition-opacity duration-300"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          willChange: "transform",
        }}
      >
        <div
          className={`-translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-200 ${
            isHovered
              ? "w-2.5 h-2.5 bg-bronze-500 shadow-md shadow-bronze-500/50"
              : isClicked
              ? "w-1.5 h-1.5 bg-chocolate-900 dark:bg-cream-50"
              : "w-2 h-2 bg-bronze-600 dark:bg-bronze-400"
          }`}
        />
      </div>

      {/* 2. Outer Smooth Halo Ring (Eased Follow) */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9998] transition-opacity duration-300"
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0)`,
          willChange: "transform",
        }}
      >
        <div
          className={`-translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-300 ease-out ${
            isHovered
              ? "w-12 h-12 border-bronze-500/80 bg-bronze-500/10 dark:bg-bronze-400/15 backdrop-blur-[0.5px] scale-110"
              : isClicked
              ? "w-7 h-7 border-bronze-600/90 bg-bronze-500/20 scale-90"
              : "w-9 h-9 border-bronze-500/40 dark:border-bronze-400/40 bg-transparent"
          }`}
        />
      </div>
    </>
  );
}
