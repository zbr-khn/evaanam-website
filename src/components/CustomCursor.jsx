import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const trailing = useRef({ x: -100, y: -100 });
  const isHovered = useRef(false);
  const isClicked = useRef(false);
  const isVisible = useRef(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible.current) {
        isVisible.current = true;
        if (dotRef.current) dotRef.current.style.opacity = "1";
        if (ringRef.current) ringRef.current.style.opacity = "1";
      }

      // Fast check without heavy getComputedStyle
      const target = e.target;
      const interactive = target && (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.tagName === "SELECT" ||
        target.closest("button") ||
        target.closest("a") ||
        target.closest("input") ||
        target.closest("[role='button']") ||
        target.classList.contains("cursor-pointer")
      );

      isHovered.current = !!interactive;
    };

    const handleMouseDown = () => {
      isClicked.current = true;
    };

    const handleMouseUp = () => {
      isClicked.current = false;
    };

    const handleMouseLeave = () => {
      isVisible.current = false;
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
    };

    const handleMouseEnter = () => {
      isVisible.current = true;
      if (dotRef.current) dotRef.current.style.opacity = "1";
      if (ringRef.current) ringRef.current.style.opacity = "1";
    };

    // 60-120fps GPU Lerp Loop (ZERO React re-renders)
    let animationId;
    const animate = () => {
      const ease = 0.22;
      trailing.current.x += (mousePos.current.x - trailing.current.x) * ease;
      trailing.current.y += (mousePos.current.y - trailing.current.y) * ease;

      const scaleRing = isClicked.current ? 0.75 : isHovered.current ? 1.5 : 1;
      const scaleDot = isHovered.current ? 0.5 : 1;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0) translate(-50%, -50%) scale(${scaleDot})`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${trailing.current.x}px, ${trailing.current.y}px, 0) translate(-50%, -50%) scale(${scaleRing})`;
        if (isHovered.current) {
          ringRef.current.style.borderColor = "rgba(212, 175, 55, 0.8)";
          ringRef.current.style.backgroundColor = "rgba(212, 175, 55, 0.08)";
        } else {
          ringRef.current.style.borderColor = "rgba(212, 175, 55, 0.4)";
          ringRef.current.style.backgroundColor = "transparent";
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });
    window.addEventListener("mouseup", handleMouseUp, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    document.addEventListener("mouseenter", handleMouseEnter, { passive: true });

    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(animationId);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden select-none"
    >
      {/* Precision Micro Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-bronze-400 opacity-0 pointer-events-none will-change-transform shadow-[0_0_8px_rgba(212,175,55,0.8)]"
      />

      {/* Luxury Trailing Outer Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-bronze-500/40 opacity-0 pointer-events-none will-change-transform transition-[border-color,background-color] duration-150 ease-out flex items-center justify-center"
      >
        <div className="w-1 h-1 bg-bronze-400/30 rounded-full" />
      </div>
    </div>
  );
}
