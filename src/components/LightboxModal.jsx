import React, { useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight, MapPin, Tag } from "lucide-react";

export default function LightboxModal({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}) {
  const currentImage = images[currentIndex];
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        onPrev();
      } else if (e.key === "ArrowRight") {
        onNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onClose, onPrev, onNext]);

  // Touch Swipe Handlers for mobile/tablet lightbox browsing
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 40;
    if (diff > threshold) {
      onNext();
    } else if (diff < -threshold) {
      onPrev();
    }
  };

  if (!currentImage) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="fixed inset-0 z-50 flex items-center justify-center bg-night-950/95 backdrop-blur-md animate-fade-in text-cream-100 cursor-pointer select-none touch-pan-y"
    >
      {/* Top Bar Controls */}
      <div className="absolute top-0 left-0 right-0 p-6 flex items-center justify-between z-20">
        <div className="flex items-center space-x-3">
          <span className="micro-label text-amber-400 font-bold">
            {currentImage.categoryLabel}
          </span>
          <span className="text-cream-400/50">|</span>
          <span className="text-xs font-mono text-cream-300 font-bold">
            {currentIndex + 1} / {images.length}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-night-850/80 hover:bg-bronze-600 hover:text-night-950 text-cream-200 transition-all focus:outline-none focus:ring-2 focus:ring-bronze-500"
          aria-label="Close Lightbox (Esc)"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-night-850/80 hover:bg-bronze-600 hover:text-night-950 text-cream-200 transition-all z-20 focus:outline-none focus:ring-2 focus:ring-bronze-500 shadow-xl"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-night-850/80 hover:bg-bronze-600 hover:text-night-950 text-cream-200 transition-all z-20 focus:outline-none focus:ring-2 focus:ring-bronze-500 shadow-xl"
        aria-label="Next Image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div
        className="relative max-w-5xl w-full max-h-[85vh] p-4 sm:p-8 flex flex-col items-center justify-center cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative overflow-hidden max-h-[68vh] shadow-2xl border border-bronze-500/30 rounded-sm bg-night-900">
          <img
            key={currentImage.src}
            src={currentImage.src}
            alt={currentImage.title}
            className="w-auto h-auto max-h-[68vh] max-w-full object-contain animate-fade-in transition-opacity duration-300"
          />
        </div>

        {/* Captions & Operational Details */}
        {(currentImage.title || currentImage.desc) && (
          <div className="mt-4 text-center max-w-2xl px-4 animate-fade-in">
            {currentImage.title && (
              <h4 className="font-serif text-xl sm:text-2xl text-cream-50 font-normal">
                {currentImage.title}
              </h4>
            )}
            {currentImage.subtitle && (
              <p className="text-xs font-sans text-amber-400 uppercase tracking-widest mt-1 font-semibold">
                {currentImage.subtitle}
              </p>
            )}
            {currentImage.desc && (
              <p className="text-xs text-cream-300/80 font-light mt-2 leading-relaxed">
                {currentImage.desc}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
