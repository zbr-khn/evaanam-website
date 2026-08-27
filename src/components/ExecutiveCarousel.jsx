import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Sparkles, ArrowUpRight, Maximize2 } from "lucide-react";
import { FEATURED_HIGHLIGHTS } from "../data/evaanamData";
import LightboxModal from "./LightboxModal";

export default function ExecutiveCarousel({ className = "" }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef(null);

  const total = FEATURED_HIGHLIGHTS.length;

  // Auto-play interval (every 4.5s)
  useEffect(() => {
    if (!isPaused && lightboxIndex === null) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
      }, 4500);
    }
    return () => clearInterval(autoPlayRef.current);
  }, [isPaused, lightboxIndex, total]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  return (
    <section className={`py-16 sm:py-20 px-6 sm:px-8 lg:px-12 bg-transparent select-none overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header with Title & Arrow Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 sm:mb-10 gap-6">
          <div>
            <span className="micro-label text-bronze-600 dark:text-bronze-400 flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>FEATURED HIGHLIGHTS</span>
            </span>
            <h2 className="editorial-heading text-3xl sm:text-4xl md:text-5xl text-chocolate-950 dark:text-cream-50 mt-1">
              Executive Engagements &amp; Brand Activations
            </h2>
            <p className="text-xs sm:text-sm text-chocolate-600 dark:text-night-muted font-light mt-1 max-w-2xl">
              On-ground manpower coordination for premier consumer brands, aviation conclaves, and high-profile celebrity keynotes.
            </p>
          </div>

          <div className="flex items-center space-x-3 self-stretch sm:self-auto justify-between sm:justify-end">
            <Link
              to="/gallery"
              className="btn-secondary text-xs font-bold whitespace-nowrap py-2.5 px-4"
            >
              <span>Explore Portfolio</span>
            </Link>

            {/* Slide Navigation Buttons */}
            <div className="flex items-center space-x-1.5">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous Highlight"
                className="w-10 h-10 rounded-sm bg-cream-200 dark:bg-night-800 border-2 border-chocolate-700/20 dark:border-bronze-500/30 text-chocolate-900 dark:text-cream-50 flex items-center justify-center hover:bg-brand-green dark:hover:bg-bronze-500 hover:text-cream-50 dark:hover:text-night-950 transition-all focus:outline-none shadow-sm active:scale-95"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <span className="text-xs font-mono font-bold text-chocolate-700 dark:text-cream-200 px-2 min-w-[55px] text-center">
                0{currentIndex + 1} / 0{total}
              </span>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next Highlight"
                className="w-10 h-10 rounded-sm bg-cream-200 dark:bg-night-800 border-2 border-chocolate-700/20 dark:border-bronze-500/30 text-chocolate-900 dark:text-cream-50 flex items-center justify-center hover:bg-brand-green dark:hover:bg-bronze-500 hover:text-cream-50 dark:hover:text-night-950 transition-all focus:outline-none shadow-sm active:scale-95"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Cinematic Dual-Layer Uncropped Viewport */}
        <div
          className="relative overflow-hidden rounded-sm border-2 border-chocolate-700/20 dark:border-bronze-500/30 shadow-2xl bg-night-950"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Slide Track */}
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {FEATURED_HIGHLIGHTS.map((item, idx) => (
              <div
                key={item.id}
                className="w-full flex-shrink-0 relative h-[420px] sm:h-[520px] md:h-[580px] bg-night-950 cursor-pointer group flex items-center justify-center overflow-hidden"
                onClick={() => setLightboxIndex(idx)}
              >
                {/* 1. LAYER 1: Ambient Background Aura (Blurred & darkened so no empty black borders) */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={item.src}
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-cover scale-125 blur-3xl opacity-35 dark:opacity-25"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-night-950 via-night-950/50 to-night-950/40" />
                </div>

                {/* 2. LAYER 2: Foreground Crisp Uncropped Photo (object-contain with natural aspect ratio) */}
                <div className="relative z-10 w-full h-full flex items-center justify-center p-4 sm:p-8 pb-28 sm:pb-32">
                  <img
                    src={item.src}
                    alt={item.title}
                    loading={idx === 0 ? "eager" : "lazy"}
                    className="max-h-full max-w-full object-contain rounded-sm shadow-2xl transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                </div>

                {/* Top Badges */}
                <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-20 flex items-center space-x-2">
                  <span className="text-[10px] uppercase font-mono tracking-widest font-bold px-3 py-1 bg-night-950/90 text-amber-300 border border-amber-500/40 rounded-sm shadow">
                    {item.tag}
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-widest font-semibold px-2.5 py-1 bg-night-900/85 text-bronze-300 border border-bronze-500/30 rounded-sm hidden sm:inline-block shadow">
                    {item.client}
                  </span>
                </div>

                {/* Zoom Icon */}
                <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-20 w-10 h-10 rounded-full bg-night-900/80 border border-bronze-500/40 text-cream-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105 shadow-lg">
                  <Maximize2 className="w-4 h-4 text-amber-300" />
                </div>

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-0 left-0 right-0 z-20 p-5 sm:p-8 bg-gradient-to-t from-night-950 via-night-950/90 to-transparent text-cream-100 space-y-1 sm:space-y-2 backdrop-blur-xs">
                  <div className="flex items-center space-x-2">
                    <span className="text-[11px] uppercase font-mono text-bronze-400 font-bold">
                      {item.client}
                    </span>
                    <span className="text-cream-400 text-xs hidden sm:inline">•</span>
                    <span className="text-xs text-cream-300 font-sans hidden sm:inline">
                      Verified Floor Execution
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-cream-50 font-medium leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-cream-300/90 font-light max-w-3xl line-clamp-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Progress Bar & Dot Indicators */}
          <div className="absolute bottom-4 right-6 flex items-center space-x-1.5 z-30">
            {FEATURED_HIGHLIGHTS.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={() => setCurrentIndex(dotIdx)}
                aria-label={`Go to slide ${dotIdx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === dotIdx
                    ? "w-8 bg-amber-400"
                    : "w-2 bg-cream-100/40 hover:bg-cream-100/70"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Preview Strip */}
        <div className="mt-4 grid grid-cols-5 gap-2 sm:gap-3">
          {FEATURED_HIGHLIGHTS.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(idx)}
              className={`relative rounded-sm overflow-hidden aspect-[16/9] border-2 transition-all duration-300 text-left group bg-night-950 ${
                currentIndex === idx
                  ? "border-amber-400 ring-2 ring-amber-400/30 scale-100 opacity-100"
                  : "border-chocolate-700/20 dark:border-bronze-500/20 opacity-60 hover:opacity-100"
              }`}
            >
              <img src={item.src} alt={item.title} className="w-full h-full object-contain p-1" />
              <div className="absolute inset-0 bg-night-950/20 group-hover:bg-transparent transition-colors" />
              <span className="absolute bottom-1 left-1.5 text-[9px] font-mono text-cream-100 font-bold drop-shadow">
                0{idx + 1}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <LightboxModal
          images={FEATURED_HIGHLIGHTS}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((prev) => (prev === 0 ? total - 1 : prev - 1))}
          onNext={() => setLightboxIndex((prev) => (prev === total - 1 ? 0 : prev + 1))}
        />
      )}
    </section>
  );
}
