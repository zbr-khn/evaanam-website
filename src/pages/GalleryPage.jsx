import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Maximize2 } from "lucide-react";
import LightboxModal from "../components/LightboxModal";
import { GALLERY_IMAGES } from "../data/evaanamData";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all"); // 'all' | 'wedding' | 'corporate'
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredImages = GALLERY_IMAGES.filter((img) =>
    activeCategory === "all" ? true : img.category === activeCategory
  );

  const handleOpenLightbox = (index) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
    }
  };

  const handleNextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <div className="animate-fade-in pt-28">
      {/* 1. DEDICATED PAGE INTRODUCTION HERO */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-transparent border-b border-chocolate-700/10 dark:border-bronze-500/15">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-6">
            <span className="micro-label">ON THE FLOOR</span>
            <h1 className="editorial-heading text-5xl sm:text-6xl md:text-7xl text-chocolate-950 dark:text-cream-50">
              The work, <br />
              <span className="italic text-bronze-600 dark:text-bronze-400">in motion.</span>
            </h1>
            <p className="text-base sm:text-lg text-chocolate-600 dark:text-night-muted font-light leading-relaxed">
              Curated glimpses of our deployment crews across Delhi NCR's premier five-star hotel ballrooms, diplomatic conclaves, trade expos, and high-profile wedding celebrations.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY TABS & FILTER */}
      <section className="py-8 px-6 sm:px-8 lg:px-12 bg-cream-100/90 dark:bg-night-850/90 border-b border-chocolate-700/10 dark:border-bronze-500/15 sticky top-[72px] z-20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] transition-all whitespace-nowrap ${
                activeCategory === "all"
                  ? "bg-brand-green dark:bg-bronze-500 text-cream-50 dark:text-night-950"
                  : "bg-cream-200 dark:bg-night-800 text-chocolate-600 dark:text-night-muted hover:text-chocolate-900 dark:hover:text-cream-50 border border-chocolate-700/10 dark:border-bronze-500/15"
              }`}
            >
              All Portfolio ({GALLERY_IMAGES.length})
            </button>
            <button
              onClick={() => setActiveCategory("wedding")}
              className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] transition-all whitespace-nowrap ${
                activeCategory === "wedding"
                  ? "bg-brand-green dark:bg-bronze-500 text-cream-50 dark:text-night-950"
                  : "bg-cream-200 dark:bg-night-800 text-chocolate-600 dark:text-night-muted hover:text-chocolate-900 dark:hover:text-cream-50 border border-chocolate-700/10 dark:border-bronze-500/15"
              }`}
            >
              Wedding Hospitality (9)
            </button>
            <button
              onClick={() => setActiveCategory("corporate")}
              className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] transition-all whitespace-nowrap ${
                activeCategory === "corporate"
                  ? "bg-brand-green dark:bg-bronze-500 text-cream-50 dark:text-night-950"
                  : "bg-cream-200 dark:bg-night-800 text-chocolate-600 dark:text-night-muted hover:text-chocolate-900 dark:hover:text-cream-50 border border-chocolate-700/10 dark:border-bronze-500/15"
              }`}
            >
              Corporate &amp; Expos (10)
            </button>
          </div>

          <p className="text-xs text-chocolate-500 dark:text-night-dim font-mono hidden sm:block">
            Showing {filteredImages.length} Curated Photographs
          </p>
        </div>
      </section>

      {/* 3. ASYMMETRIC EDITORIAL GALLERY GRID */}
      <section className="py-16 px-6 sm:px-8 lg:px-12 bg-transparent">
        <div className="max-w-7xl mx-auto">
          {/* Asymmetric layout with varied column spans */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image, idx) => {
              // Asymmetric sizing for editorial interest
              const isLarge = idx % 5 === 0;

              return (
                <div
                  key={image.id}
                  onClick={() => handleOpenLightbox(idx)}
                  className={`group relative overflow-hidden bg-night-950 border border-chocolate-700/15 dark:border-bronze-500/20 cursor-pointer shadow-sm ${
                    isLarge ? "md:col-span-2 aspect-[16/10]" : "aspect-[4/3]"
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02] opacity-90 dark:opacity-80 group-hover:opacity-100"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-night-950/85 via-night-950/20 to-transparent opacity-70 group-hover:opacity-95 transition-opacity duration-300" />

                  {/* Hover Quick Zoom Icon */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-night-900/80 border border-bronze-500/30 text-cream-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105">
                    <Maximize2 className="w-4 h-4 text-bronze-400" />
                  </div>

                  {/* Captions */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-cream-100 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center space-x-2 mb-1.5">
                      <span className="text-[10px] font-mono text-bronze-400 uppercase tracking-widest px-2 py-0.5 bg-night-950/90 rounded-sm">
                        {image.categoryLabel}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-medium text-cream-50 leading-snug">
                      {image.title}
                    </h3>

                    <p className="text-xs text-cream-300/80 font-sans mt-1">
                      {image.subtitle}
                    </p>

                    <p className="text-xs text-cream-300/60 font-light mt-2 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block">
                      {image.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. LIGHTBOX MODAL */}
      {lightboxIndex !== null && (
        <LightboxModal
          images={filteredImages}
          currentIndex={lightboxIndex}
          onClose={handleCloseLightbox}
          onPrev={handlePrevImage}
          onNext={handleNextImage}
        />
      )}

      {/* 5. BOTTOM CONVERSION CTA */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-transparent text-center border-t border-chocolate-700/10 dark:border-bronze-500/15">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="micro-label">ON-GROUND EXCELLENCE</span>
          <h3 className="font-serif text-3xl sm:text-4xl text-chocolate-950 dark:text-cream-50">
            Want to see your event floor run with this precision?
          </h3>
          <p className="text-sm text-chocolate-600 dark:text-night-muted font-light">
            Contact our operations coordinators to reserve trained personnel and supervisors for your dates.
          </p>
          <div className="pt-2">
            <Link to="/contact" className="btn-primary px-8 py-4">
              Request Crew Availability
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
