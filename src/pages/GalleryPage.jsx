import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Maximize2, Sparkles, Crown, Briefcase, Camera, ArrowUpRight, Award } from "lucide-react";
import LightboxModal from "../components/LightboxModal";
import GeometricDivider from "../components/GeometricDivider";
import { GALLERY_IMAGES } from "../data/evaanamData";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all"); // 'all' | 'activations' | 'wedding' | 'corporate' | 'bts'
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const activationImages = GALLERY_IMAGES.filter((img) => img.category === "activations");
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
      {/* 1. DEDICATED PAGE INTRODUCTION HERO (TONE A: Green / Alabaster White) */}
      <section className="section-tone-a py-20 px-6 sm:px-8 lg:px-12 border-b border-chocolate-700/15 dark:border-emerald-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-6">
            <span className="micro-label flex items-center space-x-1.5 font-bold">
              <Camera className="w-3.5 h-3.5" />
              <span>ON THE FLOOR PORTFOLIO</span>
            </span>
            <h1 className="editorial-heading text-5xl sm:text-6xl md:text-7xl">
              The work, <br />
              <span className="italic text-emerald-700 dark:text-emerald-400">in motion.</span>
            </h1>
            <p className="text-base sm:text-lg font-light leading-relaxed">
              Curated glimpses of our deployment crews across celebrity VIP keynotes, brand experience pavilions, five-star hotel ballrooms, diplomatic conclaves, trade expos, and behind-the-scenes muster briefings.
            </p>

            {/* Quick Stats Strip */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-mono">
              <span className="px-3 py-1 bg-cream-200/90 dark:bg-night-800 border border-chocolate-700/15 dark:border-emerald-500/30 rounded font-bold">
                <strong>{GALLERY_IMAGES.length}</strong> Total Photographs
              </span>
              <span>•</span>
              <span><strong>{activationImages.length}</strong> Executive &amp; Activations</span>
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

      {/* 2. CATEGORY TABS & FILTER (STICKY CONTROLS) (TONE B: Espresso Brown / Sandstone) */}
      <section className="section-tone-b py-6 px-6 sm:px-8 lg:px-12 border-b border-chocolate-700/15 dark:border-bronze-500/20 sticky top-[72px] z-20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
            {/* 1. All Photos Tab */}
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] transition-all whitespace-nowrap flex items-center space-x-1.5 rounded-sm ${
                activeCategory === "all"
                  ? "bg-brand-green dark:bg-bronze-500 text-cream-50 dark:text-night-950 shadow-sm font-bold"
                  : "bg-cream-100 dark:bg-night-800 text-chocolate-700 dark:text-night-muted hover:text-chocolate-950 dark:hover:text-cream-50 border border-chocolate-700/15 dark:border-bronze-500/20"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>All Portfolio ({GALLERY_IMAGES.length})</span>
            </button>

            {/* 2. Executive Engagements & Brand Activations Tab */}
            <button
              onClick={() => setActiveCategory("activations")}
              className={`px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] transition-all whitespace-nowrap flex items-center space-x-1.5 rounded-sm ${
                activeCategory === "activations"
                  ? "bg-amber-600 dark:bg-amber-500 text-cream-50 dark:text-night-950 shadow-sm font-bold"
                  : "bg-cream-100 dark:bg-night-800 text-chocolate-700 dark:text-night-muted hover:text-chocolate-950 dark:hover:text-cream-50 border border-chocolate-700/15 dark:border-bronze-500/20"
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>Executive &amp; Activations ({activationImages.length})</span>
            </button>

            {/* 3. Wedding Hospitality Tab */}
            <button
              onClick={() => setActiveCategory("wedding")}
              className={`px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] transition-all whitespace-nowrap flex items-center space-x-1.5 rounded-sm ${
                activeCategory === "wedding"
                  ? "bg-brand-green dark:bg-bronze-500 text-cream-50 dark:text-night-950 shadow-sm font-bold"
                  : "bg-cream-100 dark:bg-night-800 text-chocolate-700 dark:text-night-muted hover:text-chocolate-950 dark:hover:text-cream-50 border border-chocolate-700/15 dark:border-bronze-500/20"
              }`}
            >
              <Crown className="w-3.5 h-3.5" />
              <span>Weddings ({weddingImages.length})</span>
            </button>

            {/* 4. Corporate & Expos Tab */}
            <button
              onClick={() => setActiveCategory("corporate")}
              className={`px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] transition-all whitespace-nowrap flex items-center space-x-1.5 rounded-sm ${
                activeCategory === "corporate"
                  ? "bg-brand-green dark:bg-bronze-500 text-cream-50 dark:text-night-950 shadow-sm font-bold"
                  : "bg-cream-100 dark:bg-night-800 text-chocolate-700 dark:text-night-muted hover:text-chocolate-950 dark:hover:text-cream-50 border border-chocolate-700/15 dark:border-bronze-500/20"
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Corporate &amp; Expos ({corporateImages.length})</span>
            </button>

            {/* 5. Behind The Scenes Tab */}
            <button
              onClick={() => setActiveCategory("bts")}
              className={`px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] transition-all whitespace-nowrap flex items-center space-x-1.5 rounded-sm ${
                activeCategory === "bts"
                  ? "bg-brand-green dark:bg-bronze-500 text-cream-50 dark:text-night-950 shadow-sm font-bold"
                  : "bg-cream-100 dark:bg-night-800 text-chocolate-700 dark:text-night-muted hover:text-chocolate-950 dark:hover:text-cream-50 border border-chocolate-700/15 dark:border-bronze-500/20"
              }`}
            >
              <Camera className="w-3.5 h-3.5" />
              <span>Behind The Scenes ({btsImages.length})</span>
            </button>
          </div>

          <p className="text-xs font-mono hidden sm:block font-semibold">
            Showing {filteredImages.length} Photographs
          </p>
        </div>
      </section>

      {/* 3. GALLERY CONTENT (ALL PORTFOLIO GRID OR CATEGORY FOCUS) */}
      <section className="section-tone-a py-16 px-6 sm:px-8 lg:px-12 border-b border-chocolate-700/15 dark:border-emerald-500/20">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* A. If viewing All Portfolio, show curated sections with dividers */}
          {activeCategory === "all" ? (
            <div className="space-y-20">
              
              {/* 1. EXECUTIVE ENGAGEMENTS & BRAND ACTIVATIONS SECTION */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
                  <div>
                    <span className="micro-label text-amber-700 dark:text-amber-400 font-bold">SECTION 01 / CELEBRITIES &amp; BRAND PAVILIONS</span>
                    <h2 className="editorial-heading text-3xl sm:text-4xl mt-1">
                      Executive Engagements &amp; Brand Activations
                    </h2>
                    <p className="text-xs font-light mt-1 max-w-2xl">
                      High-profile celebrity VIP escorts (Boman Irani, Rajpal Yadav), tech pavilions (Vivo), and aviation summits (IndiGo, Pronto).
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveCategory("activations")}
                    className="btn-secondary group text-[11px] py-2.5 px-4 font-bold"
                  >
                    <span>View All {activationImages.length} Activation Photos</span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {activationImages.map((image) => (
                    <GalleryCard
                      key={image.id}
                      image={image}
                      onOpen={() => handleOpenLightbox(GALLERY_IMAGES.findIndex((img) => img.id === image.id))}
                    />
                  ))}
                </div>
              </div>

              <GeometricDivider label="FIVE-STAR FLOORS" />

              {/* 2. WEDDING SECTION */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
                  <div>
                    <span className="micro-label text-amber-700 dark:text-amber-400 font-bold">SECTION 02 / FIVE-STAR FLOORS</span>
                    <h2 className="editorial-heading text-3xl sm:text-4xl mt-1">
                      Wedding Hospitality Portfolio
                    </h2>
                    <p className="text-xs font-light mt-1">
                      Bridal shadows, palace courtyard mandap coordination, and silver service banquets.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveCategory("wedding")}
                    className="btn-secondary group text-[11px] py-2.5 px-4 font-bold"
                  >
                    <span>View All {weddingImages.length} Wedding Photos</span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {weddingImages.map((image) => (
                    <GalleryCard
                      key={image.id}
                      image={image}
                      onOpen={() => handleOpenLightbox(GALLERY_IMAGES.findIndex((img) => img.id === image.id))}
                    />
                  ))}
                </div>
              </div>

              <GeometricDivider label="EXPOS & CONVENTIONS" />

              {/* 3. CORPORATE SECTION */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
                  <div>
                    <span className="micro-label text-emerald-700 dark:text-emerald-400 font-bold">SECTION 03 / PLENARIES &amp; SUMMITS</span>
                    <h2 className="editorial-heading text-3xl sm:text-4xl mt-1">
                      Corporate Summits &amp; Expos Portfolio
                    </h2>
                    <p className="text-xs font-light mt-1">
                      Plenary hall stage management, registration check-in desks, and VIP executive lounges.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveCategory("corporate")}
                    className="btn-secondary group text-[11px] py-2.5 px-4 font-bold"
                  >
                    <span>View All {corporateImages.length} Corporate Photos</span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {corporateImages.map((image) => (
                    <GalleryCard
                      key={image.id}
                      image={image}
                      onOpen={() => handleOpenLightbox(GALLERY_IMAGES.findIndex((img) => img.id === image.id))}
                    />
                  ))}
                </div>
              </div>

              <GeometricDivider label="OPERATIONAL DEPLOYMENTS" />

              {/* 4. BEHIND THE SCENES SECTION */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
                  <div>
                    <span className="micro-label font-bold">SECTION 04 / OPERATIONAL MOMENTS</span>
                    <h2 className="editorial-heading text-3xl sm:text-4xl mt-1">
                      Behind The Scenes &amp; Field Coordination
                    </h2>
                    <p className="text-xs font-light mt-1">
                      Pre-shift muster inspections, two-way radio sync, and ballroom overnight transitions.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveCategory("bts")}
                    className="btn-secondary group text-[11px] py-2.5 px-4 font-bold"
                  >
                    <span>View All {btsImages.length} Behind The Scenes Photos</span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {btsImages.map((image) => (
                    <GalleryCard
                      key={image.id}
                      image={image}
                      onOpen={() => handleOpenLightbox(GALLERY_IMAGES.findIndex((img) => img.id === image.id))}
                    />
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* B. Filtered Category Dedicated Grid - Uniform Closed Shape Grid */
            <div>
              <div className="mb-10">
                <span className="micro-label font-bold">
                  {activeCategory === "activations"
                    ? "EXECUTIVE & BRAND ACTIVATIONS DIVISION"
                    : activeCategory === "wedding"
                    ? "WEDDING HOSPITALITY DIVISION"
                    : activeCategory === "corporate"
                    ? "CORPORATE & EXPOS DIVISION"
                    : "OPERATIONS & BEHIND THE SCENES"}
                </span>
                <h2 className="editorial-heading text-4xl sm:text-5xl mt-2">
                  {activeCategory === "activations"
                    ? "Executive Engagements & Brand Activations"
                    : activeCategory === "wedding"
                    ? "Wedding Hospitality Gallery"
                    : activeCategory === "corporate"
                    ? "Corporate Summits & Expos Gallery"
                    : "Behind The Scenes & Operations Gallery"}
                </h2>
                <p className="text-sm font-light mt-2 max-w-2xl">
                  {activeCategory === "activations"
                    ? "On-ground manpower coordination for celebrity keynotes, actor escorts, product launch pavilions, and aviation assemblies."
                    : activeCategory === "wedding"
                    ? "Explore five-star banquet ballrooms, royal courtyard mandaps, and dedicated VIP shadow deployments across Delhi NCR."
                    : activeCategory === "corporate"
                    ? "Explore high-throughput badge scanning, plenary stage coordination, and C-suite lounge staffing at India's largest convention centres."
                    : "Step backstage into pre-shift muster briefings, radio communications channel alignment, and overnight floor setup operations."}
                </p>
              </div>

              {/* Uniform Bounded Grid: Clean, consistent closed shape cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filteredImages.map((image, idx) => (
                  <GalleryCard
                    key={image.id}
                    image={image}
                    onOpen={() => handleOpenLightbox(idx)}
                  />
                ))}
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

      {/* 5. BOTTOM CONVERSION CTA (TONE B: Espresso Brown / Sandstone) */}
      <section className="section-tone-b py-20 px-6 sm:px-8 lg:px-12 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="micro-label text-amber-700 dark:text-amber-400 font-bold">ON-GROUND EXCELLENCE</span>
          <h3 className="editorial-heading text-3xl sm:text-4xl">
            Want to see your event floor run with this precision?
          </h3>
          <p className="text-sm font-light">
            Contact our operations coordinators to reserve trained personnel and supervisors for your dates.
          </p>
          <div className="pt-2">
            <Link to="/contact" className="btn-primary px-8 py-4 font-bold">
              Request Crew Availability
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// Sub-component for clean, bounded, closed-shape card rendering
function GalleryCard({ image, onOpen }) {
  const isPortrait = image.aspect === "tall" || image.id === "h1" || image.id === "h2";

  return (
    <div
      onClick={onOpen}
      className="group relative overflow-hidden rounded-sm bg-night-950 border-2 border-chocolate-700/20 dark:border-bronze-500/30 cursor-pointer shadow-md hover:shadow-2xl hover:border-amber-500/70 dark:hover:border-bronze-400/90 transition-all duration-500 ease-out aspect-[4/3] flex flex-col justify-end"
    >
      {/* 1. Crisp Closed-Shape Fitted Photo */}
      <img
        src={image.src}
        alt={image.title || "EVAANAM Event Portfolio"}
        loading="lazy"
        className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100 ${
          isPortrait ? "object-top" : "object-center"
        }`}
      />

      {/* 2. Gradient Shade Layer for crystal-clear readable typography */}
      <div className="absolute inset-0 bg-gradient-to-t from-night-950/95 via-night-950/35 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300 pointer-events-none" />

      {/* 3. Inset Hairline Decorative Museum Frame */}
      <div className="absolute inset-2 border border-cream-100/10 pointer-events-none rounded-xs group-hover:border-amber-400/30 transition-colors duration-300" />

      {/* 4. Top Category Badge */}
      <div className="absolute top-3.5 left-3.5 z-10">
        <span className="text-[9.5px] font-mono uppercase tracking-widest px-2.5 py-1 bg-night-950/90 text-amber-300 border border-amber-500/40 rounded-sm font-bold shadow-sm backdrop-blur-xs">
          {image.categoryLabel || "Operations"}
        </span>
      </div>

      {/* 5. Top Right Zoom Icon */}
      <div className="absolute top-3.5 right-3.5 z-10 w-8 h-8 rounded-full bg-night-900/85 border border-bronze-500/40 text-amber-300 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105 shadow-md">
        <Maximize2 className="w-3.5 h-3.5" />
      </div>

      {/* 6. Bottom Anchored Typography inside the Closed Shape */}
      {(image.title || image.subtitle) && (
        <div className="relative z-10 p-4 sm:p-5 text-cream-100 transform translate-y-0.5 group-hover:translate-y-0 transition-transform duration-300">
          {image.title && (
            <h4 className="font-serif text-lg sm:text-xl font-medium text-cream-50 leading-snug line-clamp-1 group-hover:text-amber-200 transition-colors">
              {image.title}
            </h4>
          )}
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
