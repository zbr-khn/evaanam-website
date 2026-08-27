import React, { useState, useEffect, useRef } from "react";

/**
 * SignaturePreloader
 * Plays the official preloader animation video stretched edge-to-edge covering 100% of the screen,
 * non-skippable, enhanced with high-definition clarity filters, and crossfades to website on finish.
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
        // Handle autoplay policy
      });
    }

    // Safety fallback timer so user is never stuck if video errors
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
      {/* SVG Convolution Filter for Edge Sharpening */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <filter id="video-sharpen">
          <feConvolveMatrix
            order="3"
            preserveAlpha="true"
            kernelMatrix="0 -0.5 0 -0.5 3 -0.5 0 -0.5 0"
          />
        </filter>
      </svg>

      {!videoFailed ? (
        <div className="absolute inset-0 w-full h-full overflow-hidden bg-night-950 flex items-center justify-center">
          <video
            ref={videoRef}
            src="./brand/preloader.mp4"
            autoPlay
            muted
            playsInline
            preload="auto"
            onEnded={handleFinish}
            onError={() => setVideoFailed(true)}
            className="w-full h-full min-w-full min-h-full object-cover"
            style={{
              width: "100vw",
              height: "100vh",
              objectFit: "cover",
              imageRendering: "-webkit-optimize-contrast",
              filter: "contrast(1.16) brightness(1.04) saturate(1.1) url(#video-sharpen)",
              transform: "translate3d(0, 0, 0) scale(1.002)",
              backfaceVisibility: "hidden",
              willChange: "transform, filter",
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
              filter: "contrast(1.15) brightness(1.05)",
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
