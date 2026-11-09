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
      {/* 1. DEDICATED PAGE INTRODUCTION HERO */}
      <section className="relative py-20 px-6 sm:px-8 lg:px-12 border-b border-chocolate-700/10 dark:border-white/10 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-amber-500/10 dark:bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-800 dark:text-amber-300 text-xs font-mono font-medium">
              <Camera className="w-3.5 h-3.5" />
              <span>ON THE FLOOR PORTFOLIO</span>
            </div>
            <h1 className="editorial-heading text-5xl sm:text-6xl md:text-7xl">
              The work, <br />
              <span className="italic text-glow-amber">in motion.</span>
            </h1>
            <p className="text-base sm:text-lg font-light leading-relaxed text-chocolate-700 dark:text-night-muted">
              Curated glimpses of our deployment crews across celebrity VIP keynotes, brand experience pavilions, five-star hotel ballrooms, diplomatic conclaves, trade expos, and behind-the-scenes muster briefings.
            </p>

            {/* Quick Stats Strip */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5 text-xs font-mono">
              <span className="px-3 py-1 bg-white/70 dark:bg-white/5 border border-chocolate-700/15 dark:border-white/10 rounded-full font-bold text-chocolate-900 dark:text-cream-100 backdrop-blur-sm">
                <strong>{GALLERY_IMAGES.length}</strong> Total Photographs
              </span>
              <span className="text-chocolate-400 dark:text-night-dim">•</span>
              <span className="text-chocolate-700 dark:text-night-muted"><strong>{activationImages.length}</strong> Executive &amp; Activations</span>
              <span className="text-chocolate-400 dark:text-night-dim">•</span>
              <span className="text-chocolate-700 dark:text-night-muted"><strong>{weddingImages.length}</strong> Wedding Hospitality</span>
              <span className="text-chocolate-400 dark:text-night-dim">•</span>
              <span className="text-chocolate-700 dark:text-night-muted"><strong>{corporateImages.length}</strong> Corporate &amp; Expos</span>
              <span className="text-chocolate-400 dark:text-night-dim">•</span>
              <span className="text-chocolate-700 dark:text-night-muted"><strong>{btsImages.length}</strong> Behind The Scenes</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY TABS & FILTER (STICKY CONTROLS) */}
      <section className="py-4 px-6 sm:px-8 lg:px-12 border-b border-chocolate-700/10 dark:border-white/10 sticky top-[72px] z-20 backdrop-blur-2xl bg-cream-100/85 dark:bg-night-950/85">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
            {/* 1. All Photos Tab */}
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition-all whitespace-nowrap flex items-center space-x-1.5 rounded-full cursor-pointer ${
                activeCategory === "all"
                  ? "bg-gradient-to-r from-amber-500 to-amber-600 text-night-950 shadow-md shadow-amber-500/20 font-bold"
                  : "bg-white/60 dark:bg-white/5 text-chocolate-700 dark:text-night-muted hover:text-chocolate-950 dark:hover:text-cream-50 border border-chocolate-700/15 dark:border-white/10"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>All ({GALLERY_IMAGES.length})</span>
            </button>

            {/* 2. Executive Engagements & Brand Activations Tab */}
            <button
              onClick={() => setActiveCategory("activations")}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition-all whitespace-nowrap flex items-center space-x-1.5 rounded-full cursor-pointer ${
                activeCategory === "activations"
                  ? "bg-gradient-to-r from-amber-500 to-amber-600 text-night-950 shadow-md shadow-amber-500/20 font-bold"
                  : "bg-white/60 dark:bg-white/5 text-chocolate-700 dark:text-night-muted hover:text-chocolate-950 dark:hover:text-cream-50 border border-chocolate-700/15 dark:border-white/10"
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>Executive ({activationImages.length})</span>
            </button>

            {/* 3. Wedding Hospitality Tab */}
            <button
              onClick={() => setActiveCategory("wedding")}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition-all whitespace-nowrap flex items-center space-x-1.5 rounded-full cursor-pointer ${
                activeCategory === "wedding"
                  ? "bg-gradient-to-r from-amber-500 to-amber-600 text-night-950 shadow-md shadow-amber-500/20 font-bold"
                  : "bg-white/60 dark:bg-white/5 text-chocolate-700 dark:text-night-muted hover:text-chocolate-950 dark:hover:text-cream-50 border border-chocolate-700/15 dark:border-white/10"
              }`}
            >
              <Crown className="w-3.5 h-3.5" />
              <span>Weddings ({weddingImages.length})</span>
            </button>

            {/* 4. Corporate & Expos Tab */}
            <button
              onClick={() => setActiveCategory("corporate")}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition-all whitespace-nowrap flex items-center space-x-1.5 rounded-full cursor-pointer ${
                activeCategory === "corporate"
                  ? "bg-gradient-to-r from-amber-500 to-amber-600 text-night-950 shadow-md shadow-amber-500/20 font-bold"
                  : "bg-white/60 dark:bg-white/5 text-chocolate-700 dark:text-night-muted hover:text-chocolate-950 dark:hover:text-cream-50 border border-chocolate-700/15 dark:border-white/10"
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Corporate ({corporateImages.length})</span>
            </button>

            {/* 5. Behind The Scenes Tab */}
            <button
              onClick={() => setActiveCategory("bts")}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition-all whitespace-nowrap flex items-center space-x-1.5 rounded-full cursor-pointer ${
                activeCategory === "bts"
                  ? "bg-gradient-to-r from-amber-500 to-amber-600 text-night-950 shadow-md shadow-amber-500/20 font-bold"
                  : "bg-white/60 dark:bg-white/5 text-chocolate-700 dark:text-night-muted hover:text-chocolate-950 dark:hover:text-cream-50 border border-chocolate-700/15 dark:border-white/10"
              }`}
            >
              <Camera className="w-3.5 h-3.5" />
              <span>BTS ({btsImages.length})</span>
            </button>
          </div>

          <p className="text-xs font-mono hidden sm:block font-semibold text-chocolate-600 dark:text-night-muted">
            Showing {filteredImages.length} Photographs
          </p>
        </div>
      </section>

      {/* 3. GALLERY CONTENT */}
      <section className="py-16 px-6 sm:px-8 lg:px-12 border-b border-chocolate-700/10 dark:border-white/10">
        <div className="max-w-7xl mx-auto space-y-16">
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
                    <p className="text-xs font-light mt-1 max-w-2xl text-chocolate-700 dark:text-night-muted">
                      High-profile celebrity VIP escorts (Boman Irani, Rajpal Yadav), tech pavilions (Vivo), and aviation summits (IndiGo, Pronto).
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveCategory("activations")}
                    className="btn-secondary group text-[11px] py-2 px-4 font-bold rounded-full"
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
                    <p className="text-xs font-light mt-1 text-chocolate-700 dark:text-night-muted">
                      Bridal shadows, palace courtyard mandap coordination, and silver service banquets.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveCategory("wedding")}
                    className="btn-secondary group text-[11px] py-2 px-4 font-bold rounded-full"
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
                    <p className="text-xs font-light mt-1 text-chocolate-700 dark:text-night-muted">
                      Plenary hall stage management, registration check-in desks, and VIP executive lounges.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveCategory("corporate")}
                    className="btn-secondary group text-[11px] py-2 px-4 font-bold rounded-full"
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
                    <p className="text-xs font-light mt-1 text-chocolate-700 dark:text-night-muted">
                      Pre-shift muster inspections, two-way radio sync, and ballroom overnight transitions.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveCategory("bts")}
                    className="btn-secondary group text-[11px] py-2 px-4 font-bold rounded-full"
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
                <p className="text-sm font-light mt-2 max-w-2xl text-chocolate-700 dark:text-night-muted">
                  {activeCategory === "activations"
                    ? "On-ground manpower coordination for celebrity keynotes, actor escorts, product launch pavilions, and aviation assemblies."
                    : activeCategory === "wedding"
                    ? "Explore five-star banquet ballrooms, royal courtyard mandaps, and dedicated VIP shadow deployments across Delhi NCR."
                    : activeCategory === "corporate"
                    ? "Explore high-throughput badge scanning, plenary stage coordination, and C-suite lounge staffing at India's largest convention centres."
                    : "Step backstage into pre-shift muster briefings, radio communications channel alignment, and overnight floor setup operations."}
                </p>
              </div>

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

      {/* 5. BOTTOM CONVERSION CTA */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-800 dark:text-amber-300 text-xs font-mono font-medium">
            ON-GROUND EXCELLENCE
          </span>
          <h3 className="editorial-heading text-3xl sm:text-5xl">
            Want to see your event floor run with this precision?
          </h3>
          <p className="text-sm font-light text-chocolate-700 dark:text-night-muted">
            Contact our operations coordinators to reserve trained personnel and supervisors for your dates.
          </p>
          <div className="pt-4">
            <Link to="/contact" className="btn-primary px-8 py-4 font-bold group inline-flex items-center justify-center space-x-2">
              <span>Request Crew Availability</span>
              <ArrowUpRight className="w-4 h-4 ml-1 text-night-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// Sub-component for clean glassmorphic card rendering
function GalleryCard({ image, onOpen }) {
  const isPortrait = image.aspect === "tall" || image.id === "h1" || image.id === "h2";

  return (
    <div
      onClick={onOpen}
      className="group relative overflow-hidden rounded-2xl glass-card cursor-pointer shadow-lg hover:shadow-2xl hover:border-amber-400/50 transition-all duration-500 ease-out aspect-[4/3] flex flex-col justify-end"
    >
      {/* 1. Crisp Image */}
      <img
        src={image.src}
        alt={image.title || "EVAANAM Event Portfolio"}
        loading="lazy"
        className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 opacity-90 group-hover:opacity-100 ${
          isPortrait ? "object-top" : "object-center"
        }`}
      />

      {/* 2. Gradient Shade Layer */}
      <div className="absolute inset-0 bg-gradient-to-t from-night-950/95 via-night-950/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300 pointer-events-none" />

      {/* 3. Top Category Badge */}
      <div className="absolute top-3.5 left-3.5 z-10">
        <span className="text-[10px] font-mono uppercase tracking-widest px-3 py-1 bg-night-950/80 text-amber-300 border border-amber-400/30 rounded-full font-bold shadow-sm backdrop-blur-md">
          {image.categoryLabel || "Operations"}
        </span>
      </div>

      {/* 4. Top Right Zoom Icon */}
      <div className="absolute top-3.5 right-3.5 z-10 w-8 h-8 rounded-full bg-amber-400/20 backdrop-blur-md border border-amber-400/40 text-amber-300 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105 shadow-md">
        <Maximize2 className="w-3.5 h-3.5" />
      </div>

      {/* 5. Bottom Anchored Typography */}
      {(image.title || image.subtitle) && (
        <div className="relative z-10 p-5 text-cream-100 transform translate-y-0.5 group-hover:translate-y-0 transition-transform duration-300">
          {image.title && (
            <h4 className="font-serif text-lg sm:text-xl font-medium text-cream-50 leading-snug line-clamp-1 group-hover:text-amber-200 transition-colors">
              {image.title}
            </h4>
          )}
          {image.subtitle && (
            <p className="text-[11px] text-cream-300/80 font-sans mt-1 line-clamp-1">
              {image.subtitle}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
