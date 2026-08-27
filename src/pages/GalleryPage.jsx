import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Maximize2, Sparkles, Crown, Briefcase, Camera, ArrowUpRight } from "lucide-react";
import LightboxModal from "../components/LightboxModal";
import GeometricDivider from "../components/GeometricDivider";
import { GALLERY_IMAGES } from "../data/evaanamData";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all"); // 'all' | 'wedding' | 'corporate' | 'bts'
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const weddingImages = GALLERY_IMAGES.filter((img) => img.category === "wedding");
  const corporateImages = GALLERY_IMAGES.filter((img) => img.category === "corporate");
  const btsImages = GALLERY_IMAGES.filter((img) => img.category === "bts");

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
            <span className="micro-label flex items-center space-x-1.5 text-bronze-600 dark:text-bronze-400">
              <Camera className="w-3.5 h-3.5" />
              <span>ON THE FLOOR PORTFOLIO</span>
            </span>
            <h1 className="editorial-heading text-5xl sm:text-6xl md:text-7xl text-chocolate-950 dark:text-cream-50">
              The work, <br />
              <span className="italic text-bronze-600 dark:text-bronze-400">in motion.</span>
            </h1>
            <p className="text-base sm:text-lg text-chocolate-600 dark:text-night-muted font-light leading-relaxed">
              Curated glimpses of our deployment crews across Delhi NCR's premier five-star hotel ballrooms, diplomatic conclaves, trade expos, and behind-the-scenes muster briefings.
            </p>

            {/* Quick Stats Strip */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-chocolate-600 dark:text-night-muted">
              <span className="px-3 py-1 bg-cream-100 dark:bg-night-800 border border-chocolate-700/10 dark:border-bronze-500/20 rounded">
                <strong>{GALLERY_IMAGES.length}</strong> Total Photographs
              </span>
              <span>•</span>
              <span><strong>{weddingImages.length}</strong> Wedding Hospitality</span>
              <span>•</span>
              <span><strong>{corporateImages.length}</strong> Corporate &amp; Expos</span>
              <span>•</span>
              <span><strong>{btsImages.length}</strong> Behind The Scenes</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY TABS & FILTER (STICKY CONTROLS) */}
      <section className="py-6 px-6 sm:px-8 lg:px-12 bg-cream-100/90 dark:bg-night-850/90 border-b border-chocolate-700/10 dark:border-bronze-500/15 sticky top-[72px] z-20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
            {/* 1. All Photos Tab (Common Gallery) */}
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] transition-all whitespace-nowrap flex items-center space-x-1.5 ${
                activeCategory === "all"
                  ? "bg-brand-green dark:bg-bronze-500 text-cream-50 dark:text-night-950 shadow-sm"
                  : "bg-cream-200 dark:bg-night-800 text-chocolate-600 dark:text-night-muted hover:text-chocolate-900 dark:hover:text-cream-50 border border-chocolate-700/10 dark:border-bronze-500/15"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>All Portfolio ({GALLERY_IMAGES.length})</span>
            </button>

            {/* 2. Wedding Hospitality Tab */}
            <button
              onClick={() => setActiveCategory("wedding")}
              className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] transition-all whitespace-nowrap flex items-center space-x-1.5 ${
                activeCategory === "wedding"
                  ? "bg-brand-green dark:bg-bronze-500 text-cream-50 dark:text-night-950 shadow-sm"
                  : "bg-cream-200 dark:bg-night-800 text-chocolate-600 dark:text-night-muted hover:text-chocolate-900 dark:hover:text-cream-50 border border-chocolate-700/10 dark:border-bronze-500/15"
              }`}
            >
              <Crown className="w-3.5 h-3.5" />
              <span>Weddings ({weddingImages.length})</span>
            </button>

            {/* 3. Corporate & Expos Tab */}
            <button
              onClick={() => setActiveCategory("corporate")}
              className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] transition-all whitespace-nowrap flex items-center space-x-1.5 ${
                activeCategory === "corporate"
                  ? "bg-brand-green dark:bg-bronze-500 text-cream-50 dark:text-night-950 shadow-sm"
                  : "bg-cream-200 dark:bg-night-800 text-chocolate-600 dark:text-night-muted hover:text-chocolate-900 dark:hover:text-cream-50 border border-chocolate-700/10 dark:border-bronze-500/15"
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Corporate &amp; Expos ({corporateImages.length})</span>
            </button>

            {/* 4. Behind The Scenes & Extra Tab */}
            <button
              onClick={() => setActiveCategory("bts")}
              className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] transition-all whitespace-nowrap flex items-center space-x-1.5 ${
                activeCategory === "bts"
                  ? "bg-brand-green dark:bg-bronze-500 text-cream-50 dark:text-night-950 shadow-sm"
                  : "bg-cream-200 dark:bg-night-800 text-chocolate-600 dark:text-night-muted hover:text-chocolate-900 dark:hover:text-cream-50 border border-chocolate-700/10 dark:border-bronze-500/15"
              }`}
            >
              <Camera className="w-3.5 h-3.5" />
              <span>Behind The Scenes ({btsImages.length})</span>
            </button>
          </div>

          <p className="text-xs text-chocolate-500 dark:text-night-dim font-mono hidden sm:block">
            Showing {filteredImages.length} Photographs
          </p>
        </div>
      </section>

      {/* 3. GALLERY CONTENT (ALL PORTFOLIO GRID OR CATEGORY FOCUS) */}
      <section className="py-16 px-6 sm:px-8 lg:px-12 bg-transparent">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* A. If viewing All Portfolio, show curated sections with dividers */}
          {activeCategory === "all" ? (
            <div className="space-y-20">
              {/* WEDDING SECTION */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
                  <div>
                    <span className="micro-label text-amber-700 dark:text-amber-400">SECTION 01 / FIVE-STAR FLOORS</span>
                    <h2 className="editorial-heading text-3xl sm:text-4xl text-chocolate-950 dark:text-cream-50 mt-1">
                      Wedding Hospitality Portfolio
                    </h2>
                    <p className="text-xs text-chocolate-600 dark:text-night-muted mt-1 font-light">
                      Bridal shadows, palace courtyard mandap coordination, and silver service banquets.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveCategory("wedding")}
                    className="text-xs uppercase font-mono tracking-wider font-semibold text-bronze-600 dark:text-bronze-400 hover:text-chocolate-950 dark:hover:text-cream-50 flex items-center space-x-1"
                  >
                    <span>View All {weddingImages.length} Wedding Photos</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {weddingImages.slice(0, 6).map((image, idx) => (
                    <GalleryCard
                      key={image.id}
                      image={image}
                      onOpen={() => handleOpenLightbox(GALLERY_IMAGES.findIndex((img) => img.id === image.id))}
                    />
                  ))}
                </div>
              </div>

              <GeometricDivider label="EXPOS & CONVENTIONS" />

              {/* CORPORATE SECTION */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
                  <div>
                    <span className="micro-label text-emerald-700 dark:text-emerald-400">SECTION 02 / PLENARIES & SUMMITS</span>
                    <h2 className="editorial-heading text-3xl sm:text-4xl text-chocolate-950 dark:text-cream-50 mt-1">
                      Corporate Summits &amp; Expos Portfolio
                    </h2>
                    <p className="text-xs text-chocolate-600 dark:text-night-muted mt-1 font-light">
                      Plenary hall stage management, registration check-in desks, and VIP executive lounges.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveCategory("corporate")}
                    className="text-xs uppercase font-mono tracking-wider font-semibold text-bronze-600 dark:text-bronze-400 hover:text-chocolate-950 dark:hover:text-cream-50 flex items-center space-x-1"
                  >
                    <span>View All {corporateImages.length} Corporate Photos</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {corporateImages.slice(0, 6).map((image, idx) => (
                    <GalleryCard
                      key={image.id}
                      image={image}
                      onOpen={() => handleOpenLightbox(GALLERY_IMAGES.findIndex((img) => img.id === image.id))}
                    />
                  ))}
                </div>
              </div>

              <GeometricDivider label="OPERATIONAL DEPLOYMENTS" />

              {/* BEHIND THE SCENES SECTION */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
                  <div>
                    <span className="micro-label text-bronze-600 dark:text-bronze-400">SECTION 03 / OPERATIONAL MOMENTS</span>
                    <h2 className="editorial-heading text-3xl sm:text-4xl text-chocolate-950 dark:text-cream-50 mt-1">
                      Behind The Scenes &amp; Field Coordination
                    </h2>
                    <p className="text-xs text-chocolate-600 dark:text-night-muted mt-1 font-light">
                      Pre-shift muster inspections, two-way radio sync, and ballroom overnight transitions.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveCategory("bts")}
                    className="text-xs uppercase font-mono tracking-wider font-semibold text-bronze-600 dark:text-bronze-400 hover:text-chocolate-950 dark:hover:text-cream-50 flex items-center space-x-1"
                  >
                    <span>View All {btsImages.length} Behind The Scenes Photos</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {btsImages.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {btsImages.map((image, idx) => (
                      <GalleryCard
                        key={image.id}
                        image={image}
                        onOpen={() => handleOpenLightbox(GALLERY_IMAGES.findIndex((img) => img.id === image.id))}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="p-10 border border-dashed border-chocolate-700/20 dark:border-bronze-500/30 rounded-sm bg-cream-100/60 dark:bg-night-800/60 text-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-cream-200 dark:bg-night-750 border border-bronze-500/30 text-bronze-500 flex items-center justify-center mx-auto">
                      <Camera className="w-5 h-5" />
                    </div>
                    <div className="max-w-md mx-auto space-y-1">
                      <h4 className="font-serif text-lg text-chocolate-950 dark:text-cream-50 font-medium">
                        Behind The Scenes Photos Awaiting Drop
                      </h4>
                      <p className="text-xs text-chocolate-600 dark:text-night-muted font-light leading-relaxed">
                        Drop your backstage crew briefing, uniform muster, or radio sync photos into <code className="font-mono text-bronze-600 dark:text-bronze-400 bg-cream-200 dark:bg-night-900 px-1.5 py-0.5 rounded text-[11px]">public/images/gallery-bts/</code> to feature them in this section.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* B. Filtered Category Dedicated Grid */
            <div>
              <div className="mb-10">
                <span className="micro-label text-bronze-600 dark:text-bronze-400">
                  {activeCategory === "wedding"
                    ? "WEDDING HOSPITALITY DIVISION"
                    : activeCategory === "corporate"
                    ? "CORPORATE & EXPOS DIVISION"
                    : "OPERATIONS & BEHIND THE SCENES"}
                </span>
                <h2 className="editorial-heading text-4xl sm:text-5xl text-chocolate-950 dark:text-cream-50 mt-2">
                  {activeCategory === "wedding"
                    ? "Wedding Hospitality Gallery"
                    : activeCategory === "corporate"
                    ? "Corporate Summits & Expos Gallery"
                    : "Behind The Scenes & Operations Gallery"}
                </h2>
                <p className="text-sm text-chocolate-600 dark:text-night-muted font-light mt-2 max-w-2xl">
                  {activeCategory === "wedding"
                    ? "Explore five-star banquet ballrooms, royal courtyard mandaps, and dedicated VIP shadow deployments across Delhi NCR."
                    : activeCategory === "corporate"
                    ? "Explore high-throughput badge scanning, plenary stage coordination, and C-suite lounge staffing at India's largest convention centres."
                    : "Step backstage into pre-shift muster briefings, radio communications channel alignment, and overnight floor setup operations."}
                </p>
              </div>

              {/* Asymmetric Editorial Grid for Selected Category */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredImages.map((image, idx) => {
                  const isLarge = idx % 4 === 0;
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

                      {/* Captions (Hidden for BTS images) */}
                      {image.title && (
                        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-cream-100 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                          <div className="flex items-center space-x-2 mb-1.5">
                            <span className="text-[10px] font-mono text-bronze-400 uppercase tracking-widest px-2 py-0.5 bg-night-950/90 rounded-sm">
                              {image.categoryLabel}
                            </span>
                          </div>

                          <h3 className="font-serif text-xl sm:text-2xl font-medium text-cream-50 leading-snug">
                            {image.title}
                          </h3>

                          {image.subtitle && (
                            <p className="text-xs text-cream-300/80 font-sans mt-1">
                              {image.subtitle}
                            </p>
                          )}

                          {image.desc && (
                            <p className="text-xs text-cream-300/60 font-light mt-2 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block">
                              {image.desc}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
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

// Sub-component for clean card rendering in the All Portfolio layout
function GalleryCard({ image, onOpen }) {
  return (
    <div
      onClick={onOpen}
      className="group relative overflow-hidden bg-night-950 border border-chocolate-700/15 dark:border-bronze-500/20 cursor-pointer shadow-sm aspect-[4/3] rounded-sm"
    >
      <img
        src={image.src}
        alt={image.title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-night-950/85 via-night-950/20 to-transparent opacity-75 group-hover:opacity-95 transition-opacity" />

      {/* Zoom Icon */}
      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-night-900/80 border border-bronze-500/30 text-cream-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
        <Maximize2 className="w-3.5 h-3.5 text-bronze-400" />
      </div>

      {/* Captions (Only if title exists) */}
      {image.title && (
        <div className="absolute bottom-0 left-0 right-0 p-5 text-cream-100">
          <span className="text-[9px] font-mono text-bronze-300 uppercase tracking-widest px-2 py-0.5 bg-night-950/90 rounded-sm inline-block mb-1">
            {image.categoryLabel}
          </span>
          <h4 className="font-serif text-lg font-medium text-cream-50 leading-snug line-clamp-1">
            {image.title}
          </h4>
          {image.subtitle && (
            <p className="text-[11px] text-cream-300/80 font-sans mt-0.5 line-clamp-1">
              {image.subtitle}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
