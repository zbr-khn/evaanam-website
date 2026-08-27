import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Maximize2, Sparkles } from "lucide-react";
import { GALLERY_IMAGES } from "../data/evaanamData";
import LightboxModal from "./LightboxModal";

export default function HomeImageCarousel({ className = "" }) {
  // Select top highlight images representing weddings, corporate, and BTS
  const carouselImages = GALLERY_IMAGES.slice(0, 10);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef(null);

  // Auto-play interval
  useEffect(() => {
    if (!isPaused && lightboxIndex === null) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
      }, 4200);
    }
    return () => clearInterval(autoPlayRef.current);
  }, [isPaused, lightboxIndex, carouselImages.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className={`py-12 bg-transparent relative select-none overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header with Navigation Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="micro-label text-bronze-600 dark:text-bronze-400 flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>LIVE FLOOR PORTFOLIO</span>
            </span>
            <h2 className="editorial-heading text-3xl sm:text-4xl text-chocolate-950 dark:text-cream-50 mt-1">
              Deployments Across Delhi NCR
            </h2>
          </div>

          {/* Carousel Arrow Controls & Indicator */}
          <div className="flex items-center space-x-3 self-end sm:self-auto">
            <span className="text-xs font-mono text-chocolate-500 dark:text-night-muted pr-2">
              <strong className="text-chocolate-900 dark:text-cream-100 font-bold">{currentIndex + 1}</strong> / {carouselImages.length}
            </span>

            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous Slide"
              className="w-10 h-10 rounded-full bg-cream-100 dark:bg-night-800 border border-chocolate-700/15 dark:border-bronze-500/25 text-chocolate-700 dark:text-cream-100 flex items-center justify-center hover:bg-brand-green dark:hover:bg-bronze-500 hover:text-cream-50 dark:hover:text-night-950 transition-all focus:outline-none"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next Slide"
              className="w-10 h-10 rounded-full bg-cream-100 dark:bg-night-800 border border-chocolate-700/15 dark:border-bronze-500/25 text-chocolate-700 dark:text-cream-100 flex items-center justify-center hover:bg-brand-green dark:hover:bg-bronze-500 hover:text-cream-50 dark:hover:text-night-950 transition-all focus:outline-none"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel Visual Viewport */}
        <div
          className="relative overflow-hidden rounded-sm border border-chocolate-700/10 dark:border-bronze-500/20 shadow-lg"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Slide Carousel Track */}
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {carouselImages.map((img, idx) => (
              <div
                key={img.id}
                className="w-full flex-shrink-0 relative aspect-[16/9] sm:aspect-[21/9] min-h-[360px] sm:min-h-[440px] bg-night-950 cursor-pointer group"
                onClick={() => setLightboxIndex(idx)}
              >
                {/* Background Image */}
                <img
                  src={img.src}
                  alt={img.title}
                  loading={idx === 0 ? "eager" : "lazy"}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />

                {/* Dark Cinematic Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-night-950 via-night-950/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                {/* Click to Zoom Icon Top Right */}
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-night-900/80 border border-bronze-500/40 text-cream-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105">
                  <Maximize2 className="w-4 h-4 text-bronze-400" />
                </div>

                {/* Slide Caption Box Bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 text-cream-100 space-y-2 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                  <div className="flex items-center space-x-3">
                    <span className="text-[10px] uppercase font-mono tracking-widest font-semibold px-2.5 py-1 bg-night-950/90 text-bronze-300 border border-bronze-500/30 rounded-sm">
                      {img.categoryLabel}
                    </span>
                    <span className="text-xs text-cream-300/80 font-sans hidden sm:inline">
                      {img.subtitle}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-cream-50 font-medium leading-snug">
                    {img.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-cream-300/80 font-light max-w-2xl line-clamp-2">
                    {img.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Slide Indicator Bar */}
          <div className="absolute bottom-3 right-6 flex items-center space-x-1.5 z-20">
            {carouselImages.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={() => setCurrentIndex(dotIdx)}
                aria-label={`Go to slide ${dotIdx + 1}`}
                className={`h-1 rounded-full transition-all duration-300 ${
                  currentIndex === dotIdx
                    ? "w-6 bg-bronze-400"
                    : "w-2 bg-cream-100/30 hover:bg-cream-100/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox for full screen inspection */}
      {lightboxIndex !== null && (
        <LightboxModal
          images={carouselImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1))}
          onNext={() => setLightboxIndex((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1))}
        />
      )}
    </section>
  );
}
