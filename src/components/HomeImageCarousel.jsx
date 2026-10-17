import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Maximize2, Sparkles, Crown, Briefcase, ArrowUpRight } from "lucide-react";
import LightboxModal from "./LightboxModal";

// Curated mix of both authentic Wedding Hospitality & Corporate Summit images
const HOMEPAGE_CAROUSEL_IMAGES = [
  {
    id: "w1",
    category: "wedding",
    categoryLabel: "Wedding Hospitality",
    title: "Grand Banquet Table & Service Alignment",
    subtitle: "ITC Maurya Ballroom · VIP Table Stewards",
    src: "./images/gallery-weddings/IMG-6449-JPG.jpg",
    desc: "Precision banquet alignment and discreet high-touch hospitality for five-star wedding celebrations.",
    tag: "Banquet Hospitality",
  },
  {
    id: "c1",
    category: "corporate",
    categoryLabel: "Corporate & Expos",
    title: "IndiGo Leadership Conclave Registration",
    subtitle: "Aerocity Conclave · Badge & Check-in Desks",
    src: "./images/gallery-corporate/IMG-20250419-WA0011-jpg.jpg",
    desc: "High-speed badge printing, delegate welcome kits, and QR scanning at executive aviation conclave.",
    tag: "Corporate Summit",
  },
  {
    id: "w2",
    category: "wedding",
    categoryLabel: "Wedding Hospitality",
    title: "Ceremonial Welcome & Aarti Hostesses",
    subtitle: "The Leela Palace · Traditional Welcome Hostesses",
    src: "./images/gallery-weddings/IMG-6650-JPG.jpg",
    desc: "Ceremonial greetings and floral petal welcome for high-profile wedding entourage.",
    tag: "Traditional Welcome",
  },
  {
    id: "c3",
    category: "corporate",
    categoryLabel: "Corporate & Expos",
    title: "Pragati Maidan Trade Expo Stall Management",
    subtitle: "Pragati Maidan (IECC) · Exhibition Stall Crew",
    src: "./images/gallery-corporate/IMG-20260301-WA0012-jpg.jpg",
    desc: "Bilingual booth facilitators, product demo leads, and high-touch corporate buyer hospitality.",
    tag: "Trade Expo",
  },
  {
    id: "w3",
    category: "wedding",
    categoryLabel: "Wedding Hospitality",
    title: "Palace Courtyard Mandap Supervision",
    subtitle: "ITC Grand Bharat · Floor Supervisors",
    src: "./images/gallery-weddings/IMG-2923-JPG.jpg",
    desc: "Continuous coordination between ritual pandits, wedding planners, and hospitality runners.",
    tag: "Palace Mandap",
  },
  {
    id: "c2",
    category: "corporate",
    categoryLabel: "Corporate & Expos",
    title: "International Summit Plenary Hall Marshals",
    subtitle: "Bharat Mandapam · Plenary Marshals",
    src: "./images/gallery-corporate/IMG-20260301-WA0011-jpg.jpg",
    desc: "Access control, session seating protocol, and roving mic runners for G20-tier plenary summit.",
    tag: "Plenary Summit",
  },
  {
    id: "w4",
    category: "wedding",
    categoryLabel: "Wedding Hospitality",
    title: "VIP Bridal & Groom Shadow Escort",
    subtitle: "Taj Palace · Dedicated Personal Shadows",
    src: "./images/gallery-weddings/IMG-20260301-WA0010-jpg.jpg",
    desc: "Attentive bridal assistance, attire care, touch-up logistics, and personal escort.",
    tag: "VIP Shadow",
  },
  {
    id: "c4",
    category: "corporate",
    categoryLabel: "Corporate & Expos",
    title: "C-Suite Boardroom Protocol Hostesses",
    subtitle: "The Oberoi Gurgaon · Boardroom Hostesses",
    src: "./images/gallery-corporate/IMG-20260301-WA0013-jpg.jpg",
    desc: "Discreet beverage service, agenda briefing distribution, and VIP executive handling.",
    tag: "Executive Protocol",
  },
];

export default function HomeImageCarousel({ className = "" }) {
  const [filter, setFilter] = useState("all"); // 'all' | 'wedding' | 'corporate'
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef(null);

  // Filtered images based on active tab
  const displayImages = HOMEPAGE_CAROUSEL_IMAGES.filter((img) =>
    filter === "all" ? true : img.category === filter
  );

  // Reset index when filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [filter]);

  // Auto-play interval
  useEffect(() => {
    if (!isPaused && lightboxIndex === null && displayImages.length > 1) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev === displayImages.length - 1 ? 0 : prev + 1));
      }, 4800);
    }
    return () => clearInterval(autoPlayRef.current);
  }, [isPaused, lightboxIndex, displayImages.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? displayImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === displayImages.length - 1 ? 0 : prev + 1));
  };

  const currentItem = displayImages[currentIndex] || displayImages[0];

  return (
    <section className={`py-20 bg-transparent border-t border-chocolate-700/10 dark:border-bronze-500/15 select-none overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header with Category Filter Tabs & Navigation Controls */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-10 gap-6">
          <div>
            <span className="micro-label text-bronze-600 dark:text-bronze-400 flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ON-FLOOR OPERATIONS GALLERY</span>
            </span>
            <h2 className="editorial-heading text-3xl sm:text-4xl md:text-5xl text-chocolate-950 dark:text-cream-50 mt-1">
              The work, in motion.
            </h2>
            <p className="text-xs sm:text-sm text-chocolate-600 dark:text-night-muted font-light mt-1 max-w-xl">
              Real-time glimpse of our verified crews across luxury wedding banquets and high-stakes corporate trade summits.
            </p>
          </div>

          {/* Interactive Controls Bar: Filter Pills + Arrow Buttons */}
          <div className="flex flex-wrap items-center gap-3 self-stretch sm:self-auto justify-between sm:justify-end">
            {/* Category Filter Tabs */}
            <div className="flex items-center space-x-1.5 bg-cream-200/90 dark:bg-night-800 p-1 rounded-sm border border-chocolate-700/15 dark:border-bronze-500/20">
              <button
                type="button"
                onClick={() => setFilter("all")}
                className={`px-3 py-1.5 text-[11px] font-sans font-bold uppercase tracking-wider rounded-sm transition-all ${
                  filter === "all"
                    ? "bg-brand-green dark:bg-bronze-500 text-cream-50 dark:text-night-950 shadow-sm"
                    : "text-chocolate-700 dark:text-night-muted hover:text-chocolate-950 dark:hover:text-cream-50"
                }`}
              >
                All (8)
              </button>
              <button
                type="button"
                onClick={() => setFilter("wedding")}
                className={`px-3 py-1.5 text-[11px] font-sans font-bold uppercase tracking-wider rounded-sm transition-all flex items-center space-x-1 ${
                  filter === "wedding"
                    ? "bg-amber-600 dark:bg-amber-500 text-cream-50 dark:text-night-950 shadow-sm"
                    : "text-chocolate-700 dark:text-night-muted hover:text-chocolate-950 dark:hover:text-cream-50"
                }`}
              >
                <Crown className="w-3 h-3" />
                <span>Weddings</span>
              </button>
              <button
                type="button"
                onClick={() => setFilter("corporate")}
                className={`px-3 py-1.5 text-[11px] font-sans font-bold uppercase tracking-wider rounded-sm transition-all flex items-center space-x-1 ${
                  filter === "corporate"
                    ? "bg-emerald-700 dark:bg-emerald-600 text-cream-50 dark:text-night-950 shadow-sm"
                    : "text-chocolate-700 dark:text-night-muted hover:text-chocolate-950 dark:hover:text-cream-50"
                }`}
              >
                <Briefcase className="w-3 h-3" />
                <span>Corporate</span>
              </button>
            </div>

            {/* Slide Arrows & Counter */}
            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous Slide"
                className="w-10 h-10 rounded-sm bg-cream-200 dark:bg-night-800 border-2 border-chocolate-700/20 dark:border-bronze-500/30 text-chocolate-900 dark:text-cream-50 flex items-center justify-center hover:bg-brand-green dark:hover:bg-bronze-500 hover:text-cream-50 dark:hover:text-night-950 transition-all focus:outline-none shadow-sm active:scale-95"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <span className="text-xs font-mono font-bold text-chocolate-700 dark:text-cream-200 px-2 min-w-[50px] text-center">
                0{currentIndex + 1} / 0{displayImages.length}
              </span>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next Slide"
                className="w-10 h-10 rounded-sm bg-cream-200 dark:bg-night-800 border-2 border-chocolate-700/20 dark:border-bronze-500/30 text-chocolate-900 dark:text-cream-50 flex items-center justify-center hover:bg-brand-green dark:hover:bg-bronze-500 hover:text-cream-50 dark:hover:text-night-950 transition-all focus:outline-none shadow-sm active:scale-95"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Cinematic Main Carousel Viewport */}
        <div
          className="relative overflow-hidden rounded-sm border-2 border-chocolate-700/20 dark:border-bronze-500/30 shadow-2xl bg-night-950"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Slide Track */}
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {displayImages.map((img, idx) => (
              <div
                key={img.id}
                className="w-full flex-shrink-0 relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] min-h-[380px] sm:min-h-[460px] bg-night-950 cursor-pointer group"
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
                <div className="absolute inset-0 bg-gradient-to-t from-night-950 via-night-950/45 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

                {/* Micro Badge Top Left */}
                <div className="absolute top-5 left-5 z-10 flex items-center space-x-2">
                  <span className={`text-[10px] uppercase font-mono tracking-widest font-bold px-3 py-1 bg-night-950/90 border rounded-sm ${
                    img.category === "wedding" 
                      ? "text-amber-300 border-amber-500/40" 
                      : "text-emerald-300 border-emerald-500/40"
                  }`}>
                    {img.categoryLabel}
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-widest font-semibold px-2.5 py-1 bg-night-900/80 text-bronze-300 border border-bronze-500/30 rounded-sm">
                    {img.tag}
                  </span>
                </div>

                {/* Click to Expand Icon Top Right */}
                <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-night-900/80 border border-bronze-500/40 text-cream-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105 shadow-lg">
                  <Maximize2 className="w-4 h-4 text-amber-300" />
                </div>

                {/* Slide Caption Box Bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 text-cream-100 space-y-2.5 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                  <span className="text-xs uppercase font-mono text-bronze-400 font-bold block">
                    {img.subtitle}
                  </span>

                  <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-cream-50 font-medium leading-snug">
                    {img.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-cream-300/90 font-light max-w-2xl line-clamp-2 leading-relaxed">
                    {img.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Progress Bar & Dot Indicators */}
          <div className="absolute bottom-4 right-6 flex items-center space-x-1.5 z-20">
            {displayImages.map((_, dotIdx) => (
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

        {/* Bottom CTA to explore all gallery photos */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-chocolate-700/10 dark:border-bronze-500/15">
          <p className="text-xs font-mono text-chocolate-600 dark:text-night-muted">
            Swipe or use arrow controls to explore active deployment photography.
          </p>

          <Link
            to="/gallery"
            className="btn-secondary text-xs font-bold flex items-center space-x-2 py-3 px-6"
          >
            <span>View Full Gallery (19 Photos)</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Lightbox for full screen inspection */}
      {lightboxIndex !== null && (
        <LightboxModal
          images={displayImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((prev) => (prev === 0 ? displayImages.length - 1 : prev - 1))}
          onNext={() => setLightboxIndex((prev) => (prev === displayImages.length - 1 ? 0 : prev + 1))}
        />
      )}
    </section>
  );
}
