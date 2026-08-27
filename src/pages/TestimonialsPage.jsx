import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Star, Quote, CheckCircle2, Sparkles, ThumbsUp, Building2, Crown, Briefcase, Users, ArrowUpRight, ShieldCheck } from "lucide-react";
import { TESTIMONIALS } from "../data/evaanamData";
import TestimonialMarquee from "../components/TestimonialMarquee";
import GeometricDivider from "../components/GeometricDivider";

export default function TestimonialsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredReviews = TESTIMONIALS.filter((item) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "corporate") return item.category.includes("Corporate") || item.category.includes("Tech");
    if (activeFilter === "wedding") return item.category.includes("Wedding");
    if (activeFilter === "expos") return item.category.includes("Expos") || item.category.includes("Activations") || item.category.includes("Production");
    if (activeFilter === "crew") return item.category.includes("Workforce");
    return true;
  });

  return (
    <div className="animate-fade-in pt-28">
      {/* 1. HERO SECTION WITH PROVEN STATS */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-transparent border-b border-chocolate-700/10 dark:border-bronze-500/15">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl space-y-6">
            <span className="micro-label flex items-center space-x-1.5 text-bronze-600 dark:text-bronze-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CLIENT ENDORSEMENTS &amp; REVIEWS</span>
            </span>

            <h1 className="editorial-heading text-5xl sm:text-6xl md:text-7xl text-chocolate-950 dark:text-cream-50">
              500+ Events Delivered – <br />
              <span className="italic text-bronze-600 dark:text-bronze-400">100+ Happy Clients.</span>
            </h1>

            <p className="text-base sm:text-lg text-chocolate-600 dark:text-night-muted font-light leading-relaxed max-w-3xl">
              Authentic feedback from enterprise brand managers, luxury wedding planners, trade exhibition organizers, and on-ground floor crews who rely on our manpower operations.
            </p>

            {/* Overall Rating & Highlights Strip */}
            <div className="pt-2 flex flex-wrap items-center gap-6">
              <div className="flex items-center space-x-2 p-3 bg-cream-100 dark:bg-night-800 border border-chocolate-700/10 dark:border-bronze-500/20 rounded-sm">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-mono font-bold text-chocolate-900 dark:text-cream-100 pl-1">
                  5.0 / 5.0 Rating
                </span>
              </div>

              <div className="flex items-center space-x-2 text-xs font-mono text-chocolate-600 dark:text-night-muted">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>100% Verified Client Reviews</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INFINITE RUNNING CARDS RIBBON IN A LOOP */}
      <section className="py-12 bg-transparent border-b border-chocolate-700/10 dark:border-bronze-500/15">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-4">
          <span className="micro-label text-bronze-600 dark:text-bronze-400">
            CONTINUOUS REVIEWS RIBBON (PAUSE ON HOVER)
          </span>
        </div>

        {/* Looping Marquee Ribbon */}
        <TestimonialMarquee />
      </section>

      {/* 3. CATEGORIZED DETAILED TESTIMONIALS GRID */}
      <section className="py-16 px-6 sm:px-8 lg:px-12 bg-transparent">
        <div className="max-w-7xl mx-auto space-y-10">
          {/* Filter Tabs Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-chocolate-700/10 dark:border-bronze-500/15 pb-6">
            <div className="flex items-center space-x-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
              <button
                type="button"
                onClick={() => setActiveFilter("all")}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded transition-all whitespace-nowrap ${
                  activeFilter === "all"
                    ? "bg-brand-green dark:bg-bronze-500 text-cream-50 dark:text-night-950 shadow-sm"
                    : "bg-cream-200 dark:bg-night-800 text-chocolate-600 dark:text-night-muted hover:text-chocolate-900 dark:hover:text-cream-50 border border-chocolate-700/10 dark:border-bronze-500/15"
                }`}
              >
                All Reviews ({TESTIMONIALS.length})
              </button>

              <button
                type="button"
                onClick={() => setActiveFilter("corporate")}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded transition-all whitespace-nowrap flex items-center space-x-1.5 ${
                  activeFilter === "corporate"
                    ? "bg-brand-green dark:bg-bronze-500 text-cream-50 dark:text-night-950 shadow-sm"
                    : "bg-cream-200 dark:bg-night-800 text-chocolate-600 dark:text-night-muted hover:text-chocolate-900 dark:hover:text-cream-50 border border-chocolate-700/10 dark:border-bronze-500/15"
                }`}
              >
                <Briefcase className="w-3.5 h-3.5" />
                <span>Corporate &amp; Tech</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveFilter("wedding")}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded transition-all whitespace-nowrap flex items-center space-x-1.5 ${
                  activeFilter === "wedding"
                    ? "bg-brand-green dark:bg-bronze-500 text-cream-50 dark:text-night-950 shadow-sm"
                    : "bg-cream-200 dark:bg-night-800 text-chocolate-600 dark:text-night-muted hover:text-chocolate-900 dark:hover:text-cream-50 border border-chocolate-700/10 dark:border-bronze-500/15"
                }`}
              >
                <Crown className="w-3.5 h-3.5" />
                <span>Wedding Hospitality</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveFilter("expos")}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded transition-all whitespace-nowrap flex items-center space-x-1.5 ${
                  activeFilter === "expos"
                    ? "bg-brand-green dark:bg-bronze-500 text-cream-50 dark:text-night-950 shadow-sm"
                    : "bg-cream-200 dark:bg-night-800 text-chocolate-600 dark:text-night-muted hover:text-chocolate-900 dark:hover:text-cream-50 border border-chocolate-700/10 dark:border-bronze-500/15"
                }`}
              >
                <Building2 className="w-3.5 h-3.5" />
                <span>Expos &amp; Activations</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveFilter("crew")}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded transition-all whitespace-nowrap flex items-center space-x-1.5 ${
                  activeFilter === "crew"
                    ? "bg-brand-green dark:bg-bronze-500 text-cream-50 dark:text-night-950 shadow-sm"
                    : "bg-cream-200 dark:bg-night-800 text-chocolate-600 dark:text-night-muted hover:text-chocolate-900 dark:hover:text-cream-50 border border-chocolate-700/10 dark:border-bronze-500/15"
                }`}
              >
                <Users className="w-3.5 h-3.5" />
                <span>Workforce &amp; Staff</span>
              </button>
            </div>

            <p className="text-xs text-chocolate-500 dark:text-night-dim font-mono hidden sm:block">
              Displaying {filteredReviews.length} Verified Endorsements
            </p>
          </div>

          {/* Grid of Reviews */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReviews.map((item) => (
              <div
                key={item.id}
                className="card-luxury p-7 space-y-5 dark:bg-night-800 dark:border-bronze-500/20 hover:border-bronze-500/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Top Bar: Stars + Category */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-amber-400 text-amber-400 drop-shadow-sm"
                        />
                      ))}
                    </div>

                    <span className="text-[9.5px] uppercase font-mono tracking-wider px-2 py-0.5 bg-cream-200 dark:bg-night-750 text-chocolate-700 dark:text-bronze-400 rounded">
                      {item.category}
                    </span>
                  </div>

                  {/* Quote */}
                  <div className="space-y-2">
                    <Quote className="w-5 h-5 text-bronze-400/70" />
                    <p className="font-serif text-lg text-chocolate-950 dark:text-cream-50 italic leading-snug">
                      "{item.quote}"
                    </p>
                  </div>
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-chocolate-700/10 dark:border-bronze-500/15 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-semibold text-chocolate-950 dark:text-cream-50 font-sans flex items-center space-x-1.5">
                      <span>{item.author}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    </h4>
                    <p className="text-xs text-chocolate-600 dark:text-night-muted font-light">
                      {item.role}
                    </p>
                  </div>

                  <span className="text-xs font-mono text-bronze-600 dark:text-bronze-400 uppercase font-semibold">
                    {item.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GeometricDivider label="OPERATIONAL EXCELLENCE" />

      {/* 4. BOTTOM ACTION CTA */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-transparent text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="micro-label text-bronze-600 dark:text-bronze-400">SEAMLESS MANPOWER</span>
          <h3 className="editorial-heading text-4xl sm:text-5xl text-chocolate-950 dark:text-cream-50">
            Ready to experience effortless floor staffing?
          </h3>
          <p className="text-sm text-chocolate-600 dark:text-night-muted font-light leading-relaxed">
            Join 100+ satisfied clients across Delhi NCR. Contact our operations desk to reserve verified, professionally groomed manpower for your upcoming dates.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-primary px-8 py-4 text-xs tracking-widest font-semibold uppercase">
              <span>Request Manpower Today</span>
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Link>
            <Link to="/gallery" className="btn-secondary text-xs">
              <span>View On-Ground Gallery</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
