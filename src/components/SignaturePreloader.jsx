import React, { useState, useEffect, useRef } from "react";

/**
 * SignaturePreloader
 * Plays the official preloader animation video from /brand/preloader.mp4 (or .webm)
 * with graceful fallback and seamless transition to the main website.
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
    }, 600);
  };

  useEffect(() => {
    // Safety max timer so user is never stuck
    const safetyTimer = setTimeout(() => {
      handleFinish();
    }, 4500);

    return () => clearTimeout(safetyTimer);
  }, []);

  if (isRemoved) return null;

  return (
    <div
      role="status"
      aria-label="EVAANAM Brand Loading"
      onClick={handleFinish}
      className={`fixed inset-0 z-[99999] flex items-center justify-center select-none bg-night-950 text-cream-100 transition-opacity duration-600 ease-out cursor-pointer ${
        isExiting ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative w-full max-w-4xl max-h-[85vh] flex items-center justify-center p-6">
        {!videoFailed ? (
          <video
            ref={videoRef}
            src="./brand/preloader.mp4"
            autoPlay
            muted
            playsInline
            onEnded={handleFinish}
            onError={() => setVideoFailed(true)}
            className="w-auto h-auto max-w-full max-h-[75vh] object-contain rounded-sm shadow-2xl"
          />
        ) : (
          /* Elegant Fallback if video is not yet placed in /brand/ */
          <div className="flex flex-col items-center justify-center space-y-5 animate-fade-in text-center">
            <img
              src="./brand/logo.png"
              alt="EVAANAM"
              className="w-20 h-20 object-contain animate-pulse-subtle"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
            <div className="space-y-1.5">
              <span className="font-serif text-3xl sm:text-4xl font-light tracking-[0.2em] text-cream-50 uppercase">
                EVAANAM
              </span>
              <p className="text-[10px] uppercase font-mono tracking-[0.3em] text-bronze-400">
                Hospitality &amp; Operations
              </p>
            </div>
            <div className="w-24 h-[1.5px] bg-bronze-500/40 rounded-full overflow-hidden mt-4">
              <div className="w-full h-full bg-bronze-400 animate-marquee" />
            </div>
          </div>
        )}
      </div>

      {/* Subtle Skip Prompt */}
      <div className="absolute bottom-8 text-[11px] font-mono tracking-widest text-cream-400/50 uppercase">
        Click anywhere to skip
      </div>
    </div>
  );
}
