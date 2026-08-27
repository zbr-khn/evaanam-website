import React, { useState, useEffect, useRef } from "react";

/**
 * SignaturePreloader
 * Plays the official preloader animation video in full screen with ultra-sharp fidelity,
 * non-skippable full playback, and seamless exit to the website upon completion.
 */
export default function SignaturePreloader({ onComplete }) {
  const [isExiting, setIsExiting] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const videoRef = useRef(null);

  const handleFinish = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsRemoved(true);
      if (onComplete) onComplete();
    }, 700);
  };

  useEffect(() => {
    // Attempt playback immediately on mount
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Fallback if browser requires user interaction
      });
    }

    // Safety fallback timer so user is never stuck if video fails silently
    const safetyTimer = setTimeout(() => {
      handleFinish();
    }, 15000);

    return () => clearTimeout(safetyTimer);
  }, []);

  if (isRemoved) return null;

  return (
    <div
      role="status"
      aria-label="EVAANAM Experience Loading"
      className={`fixed inset-0 z-[999999] w-screen h-screen bg-night-950 flex items-center justify-center overflow-hidden select-none transition-opacity duration-700 ease-out pointer-events-auto ${
        isExiting ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {!videoFailed ? (
        <div className="relative w-full h-full flex items-center justify-center bg-night-950">
          <video
            ref={videoRef}
            src="./brand/preloader.mp4"
            autoPlay
            muted
            playsInline
            preload="auto"
            onEnded={handleFinish}
            onError={() => setVideoFailed(true)}
            className="w-full h-full object-cover sm:object-contain"
            style={{
              imageRendering: "-webkit-optimize-contrast",
              filter: "contrast(1.08) brightness(1.03) saturate(1.06)",
              transform: "translateZ(0)",
              backfaceVisibility: "hidden",
              willChange: "transform",
            }}
          />
        </div>
      ) : (
        /* Fallback if video is unavailable */
        <div className="flex flex-col items-center justify-center space-y-6 animate-fade-in text-center p-6">
          <img
            src="./brand/logo.jpg"
            alt="EVAANAM"
            className="w-28 h-28 object-contain rounded-sm shadow-2xl animate-pulse-subtle"
            style={{
              imageRendering: "-webkit-optimize-contrast",
              filter: "contrast(1.08) brightness(1.02)",
            }}
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
          <div className="space-y-2">
            <span className="font-serif text-3xl sm:text-5xl font-light tracking-[0.22em] text-cream-50 uppercase">
              EVAANAM
            </span>
            <p className="text-xs uppercase font-mono tracking-[0.35em] text-bronze-400">
              Hospitality &amp; Operations
            </p>
          </div>
          <div className="w-32 h-[2px] bg-bronze-500/30 rounded-full overflow-hidden mt-6">
            <div className="w-full h-full bg-bronze-400 animate-marquee" />
          </div>
        </div>
      )}
    </div>
  );
}
