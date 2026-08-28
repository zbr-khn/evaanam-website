import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Maximize2, ShieldCheck, Sparkles } from "lucide-react";
import LightboxModal from "./LightboxModal";

// Verified Authentic Deployment Highlights from evaanamData
const FEATURED_HIGHLIGHTS = [
  {
    id: "ex-1",
    client: "Vivo",
    tag: "Brand Activation",
    title: "Experience Pavilion: Vivo",
    desc: "Interactive product demo crew and attendee walkthroughs at premier technology launch pavillion.",
    src: "./gallery/vivo.png",
    aspect: "landscape",
  },
  {
    id: "ex-2",
    client: "IndiGo",
    tag: "Aviation Summit",
    title: "Leadership Plenary: IndiGo",
    desc: "High-throughput delegate registration, executive seating coordination, and VIP protocol management.",
    src: "./gallery/indigo.png",
    aspect: "landscape",
  },
  {
    id: "ex-3",
    client: "Pronto",
    tag: "Product Launch",
    title: "Brand Showcase: Pronto",
    desc: "Bilingual stall hosts, product demonstration assistance, and visitor engagement coordination.",
    src: "./gallery/pronto.png",
    aspect: "landscape",
  },
  {
    id: "ex-4",
    client: "Boman Irani",
    tag: "Celebrity VIP Escort",
    title: "VIP Escort: Boman Irani",
    desc: "Discreet close-protection coordination, stage transit escort, and green room access management.",
    src: "./gallery/boman-irani.png",
    aspect: "portrait",
  },
  {
    id: "ex-5",
    client: "Rajpal Yadav",
    tag: "Celebrity VIP Escort",
    title: "Celebrity Handling: Rajpal Yadav",
    desc: "Red carpet arrival security, holding area hospitality, and stage transit support.",
    src: "./gallery/rajpal-yadav.png",
    aspect: "portrait",
  },
];

export default function ExecutiveCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const total = FEATURED_HIGHLIGHTS.length;

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const isDragging = useRef(false);

  // Auto-slide every 6 seconds unless hovered or dragging
  useEffect(() => {
    if (isPaused || lightboxIndex !== null) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, lightboxIndex, total]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

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
    if (diff > threshold) handleNext();
    else if (diff < -threshold) handlePrev();
  };

  const handleMouseDown = (e) => {
    isDragging.current = true;
    touchStartX.current = e.clientX;
    touchEndX.current = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    touchEndX.current = e.clientX;
  };

  const handleMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;
    if (diff > threshold) handleNext();
    else if (diff < -threshold) handlePrev();
  };

  const current = FEATURED_HIGHLIGHTS[currentIndex];

  return (
    <section className="py-16 sm:py-20 px-6 sm:px-8 lg:px-12 bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="micro-label flex items-center space-x-1.5 font-bold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>VERIFIED OPERATIONS PORTFOLIO</span>
            </span>
            <h2 className="editorial-heading text-3xl sm:text-4xl md:text-5xl mt-1">
              Executive Engagements &amp; Brand Activations
            </h2>
            <p className="text-xs sm:text-sm font-light mt-1 max-w-2xl">
              Authentic on-ground photography from landmark deployments across Delhi NCR.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center space-x-3 shrink-0">
            <span className="text-xs font-mono font-semibold hidden sm:inline-block">
              <strong>0{currentIndex + 1}</strong> / 0{total}
            </span>
            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous Highlight"
                className="w-10 h-10 rounded-sm bg-brand-green dark:bg-bronze-500 text-cream-50 dark:text-night-950 border-2 border-bronze-400/80 flex items-center justify-center hover:bg-amber-400 hover:text-chocolate-950 dark:hover:bg-amber-300 transition-all focus:outline-none shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4 font-bold" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next Highlight"
                className="w-10 h-10 rounded-sm bg-brand-green dark:bg-bronze-500 text-cream-50 dark:text-night-950 border-2 border-bronze-400/80 flex items-center justify-center hover:bg-amber-400 hover:text-chocolate-950 dark:hover:bg-amber-300 transition-all focus:outline-none shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
              >
                <ChevronRight className="w-4 h-4 font-bold" />
              </button>
            </div>
          </div>
        </div>

        {/* Cinematic Architectural Framed Viewport with Borders & Corner Brackets */}
        <div
          className="relative overflow-hidden rounded-md border-2 border-bronze-500/70 dark:border-bronze-400/80 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-night-950 cursor-grab active:cursor-grabbing touch-pan-y"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            setIsPaused(false);
            isDragging.current = false;
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          {/* Architectural Inset Museum Hairline */}
          <div className="absolute inset-2 border border-bronze-400/25 rounded-xs pointer-events-none z-30" />

          {/* 4 Gold Corner Accent Notches */}
          <div className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-amber-400 pointer-events-none z-30" />
          <div className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-amber-400 pointer-events-none z-30" />
          <div className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-amber-400 pointer-events-none z-30" />
          <div className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-amber-400 pointer-events-none z-30" />

          {/* Slide Track */}
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {FEATURED_HIGHLIGHTS.map((item, idx) => (
              <div
                key={item.id}
                className="w-full flex-shrink-0 relative h-[420px] sm:h-[520px] md:h-[580px] bg-night-950 cursor-pointer group flex items-center justify-center overflow-hidden"
                onClick={() => {
                  const diff = Math.abs(touchStartX.current - touchEndX.current);
                  if (diff < 10) setLightboxIndex(idx);
                }}
              >
                {/* 1. LAYER 1: Ambient Background Aura */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={item.src}
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-cover scale-125 blur-3xl opacity-35 dark:opacity-25"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-night-950 via-night-950/50 to-night-950/40" />
                </div>

                {/* 2. LAYER 2: Foreground Crisp Uncropped Photo (Centered in Middle) */}
                <div className="relative z-10 w-full h-full flex items-center justify-center p-6 sm:p-10 pt-10 sm:pt-12 pb-24 sm:pb-28">
                  <img
                    src={item.src}
                    alt={item.title}
                    loading={idx === 0 ? "eager" : "lazy"}
                    draggable={false}
                    className="max-h-[82%] max-w-[92%] object-contain rounded-sm shadow-2xl transition-transform duration-700 ease-out group-hover:scale-[1.02] pointer-events-none"
                  />
                </div>

                {/* Top Badges */}
                <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-20 flex items-center space-x-2">
                  <span className="text-[10px] uppercase font-mono tracking-widest font-extrabold px-3 py-1 bg-night-950/90 text-amber-300 border-2 border-amber-500/60 rounded-sm shadow">
                    {item.tag}
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-widest font-bold px-2.5 py-1 bg-night-900/85 text-bronze-300 border border-bronze-500/40 rounded-sm hidden sm:inline-block shadow">
                    {item.client}
                  </span>
                </div>

                {/* Zoom Icon */}
                <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-20 w-10 h-10 rounded-full bg-night-900/90 border-2 border-bronze-500/60 text-cream-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105 shadow-lg">
                  <Maximize2 className="w-4 h-4 text-amber-300" />
                </div>

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-0 left-0 right-0 z-20 p-4 sm:p-6 bg-gradient-to-t from-night-950 via-night-950/90 to-transparent text-cream-100 space-y-1 backdrop-blur-xs">
                  <div className="flex items-center space-x-2">
                    <span className="text-[11px] uppercase font-mono text-amber-400 font-extrabold">
                      {item.client}
                    </span>
                    <span className="text-cream-400 text-xs hidden sm:inline">•</span>
                    <span className="text-xs text-cream-300 font-sans hidden sm:inline">
                      Verified Floor Execution
                    </span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl md:text-2xl text-cream-50 font-medium leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-cream-300/90 font-light max-w-3xl line-clamp-1 sm:line-clamp-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Swipe Gesture Micro Indicator (Mobile & Desktop) */}
          <div className="absolute bottom-4 left-6 z-30 hidden sm:flex items-center space-x-1.5 text-[10px] font-mono text-cream-300/60 pointer-events-none">
            <span>← Swipe / Drag to navigate →</span>
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
                    ? "w-8 bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]"
                    : "w-2 bg-cream-100/40 hover:bg-cream-100/70"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Preview Strip with Structured Borders */}
        <div className="mt-4 grid grid-cols-5 gap-2 sm:gap-3">
          {FEATURED_HIGHLIGHTS.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(idx)}
              className={`relative rounded-sm overflow-hidden aspect-[16/9] border-2 transition-all duration-300 text-left group bg-night-950 ${
                currentIndex === idx
                  ? "border-amber-400 ring-2 ring-amber-400/50 scale-100 opacity-100 shadow-md"
                  : "border-chocolate-700/20 dark:border-bronze-500/20 opacity-60 hover:opacity-100 hover:border-bronze-400/50"
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
