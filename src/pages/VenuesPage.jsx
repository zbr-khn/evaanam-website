import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Search, ArrowUpRight, Sparkles, Building2, ShieldCheck, CheckCircle2 } from "lucide-react";
import VenueMarquee from "../components/VenueMarquee";
import { FIVE_STAR_HOTELS, CONVENTION_AND_ARENAS } from "../data/evaanamData";

export default function VenuesPage() {
  const [activeTab, setActiveTab] = useState("all"); // 'all' | 'hotels' | 'conventions'
  const [searchTerm, setSearchTerm] = useState("");

  const filteredHotels = FIVE_STAR_HOTELS.filter((v) =>
    v.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    v.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredConventions = CONVENTION_AND_ARENAS.filter((v) =>
    v.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    v.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const showHotels = activeTab === "all" || activeTab === "hotels";
  const showConventions = activeTab === "all" || activeTab === "conventions";

  return (
    <div className="animate-fade-in pt-28">
      {/* 1. DEDICATED PAGE INTRODUCTION HERO */}
      <section className="relative py-20 px-6 sm:px-8 lg:px-12 border-b border-chocolate-700/10 dark:border-white/10 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-amber-500/10 dark:bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 dark:bg-amber-400/10 border border-amber-500/20 text-amber-800 dark:text-amber-300 text-xs font-mono font-medium">
              <Building2 className="w-3.5 h-3.5" />
              <span>DEPLOYMENT FOOTPRINT · 40+ VENUES ACROSS DELHI NCR</span>
            </div>
            <h1 className="editorial-heading text-5xl sm:text-6xl md:text-7xl">
              Experienced where <br />
              <span className="italic text-glow-amber">the standard is already high.</span>
            </h1>
            <p className="text-base sm:text-lg font-light leading-relaxed text-chocolate-700 dark:text-night-muted">
              Our crew leads bring proven operational familiarity across premier 5-star hotel ballrooms, diplomatic banquet halls, and multi-acre convention arenas. We understand venue-specific loading protocols, service freight lifts, guest corridors, and security decorum.
            </p>
          </div>
        </div>
      </section>

      {/* 2. SLOW HORIZONTAL MARQUEE / TICKER */}
      <div className="py-6 border-b border-chocolate-700/10 dark:border-white/10 bg-cream-100/50 dark:bg-night-950/50 backdrop-blur-md">
        <VenueMarquee />
      </div>

      {/* 3. VENUE DIRECTORY & DIRECTORY BOARD */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 border-b border-chocolate-700/10 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          {/* Filter Bar & Search */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between pb-8 mb-12 border-b border-chocolate-700/10 dark:border-white/10 gap-4">
            {/* Category Filter Tabs */}
            <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-5 py-2.5 text-xs font-bold uppercase tracking-[0.16em] transition-all rounded-full border cursor-pointer ${
                  activeTab === "all"
                    ? "bg-gradient-to-r from-amber-500 to-amber-600 text-night-950 border-amber-400 shadow-md shadow-amber-500/20 scale-105"
                    : "bg-white/60 dark:bg-white/[0.04] text-chocolate-700 dark:text-night-muted hover:text-chocolate-950 dark:hover:text-cream-50 border-chocolate-700/15 dark:border-white/10 backdrop-blur-sm"
                }`}
              >
                All Venues (40)
              </button>
              <button
                onClick={() => setActiveTab("hotels")}
                className={`px-5 py-2.5 text-xs font-bold uppercase tracking-[0.16em] transition-all rounded-full border cursor-pointer ${
                  activeTab === "hotels"
                    ? "bg-gradient-to-r from-amber-500 to-amber-600 text-night-950 border-amber-400 shadow-md shadow-amber-500/20 scale-105"
                    : "bg-white/60 dark:bg-white/[0.04] text-chocolate-700 dark:text-night-muted hover:text-chocolate-950 dark:hover:text-cream-50 border-chocolate-700/15 dark:border-white/10 backdrop-blur-sm"
                }`}
              >
                Five-Star Hotels (20)
              </button>
              <button
                onClick={() => setActiveTab("conventions")}
                className={`px-5 py-2.5 text-xs font-bold uppercase tracking-[0.16em] transition-all rounded-full border cursor-pointer ${
                  activeTab === "conventions"
                    ? "bg-gradient-to-r from-amber-500 to-amber-600 text-night-950 border-amber-400 shadow-md shadow-amber-500/20 scale-105"
                    : "bg-white/60 dark:bg-white/[0.04] text-chocolate-700 dark:text-night-muted hover:text-chocolate-950 dark:hover:text-cream-50 border-chocolate-700/15 dark:border-white/10 backdrop-blur-sm"
                }`}
              >
                Convention &amp; Stadiums (20)
              </button>
            </div>

            {/* Quick Search */}
            <div className="relative max-w-xs w-full">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-chocolate-400 dark:text-night-dim" />
              <input
                type="text"
                placeholder="Search venue or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white/70 dark:bg-white/[0.05] border border-chocolate-700/15 dark:border-white/10 rounded-full text-xs font-sans text-chocolate-950 dark:text-cream-100 placeholder-chocolate-400 dark:placeholder-night-dim focus:outline-none focus:border-amber-400 transition-colors backdrop-blur-md shadow-sm"
              />
            </div>
          </div>

          {/* SECTION 1: FIVE-STAR HOTELS */}
          {showHotels && (
            <div className="mb-20">
              <div className="flex items-center space-x-3 mb-8">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)] animate-pulse" />
                <h2 className="font-serif text-3xl sm:text-4xl text-chocolate-950 dark:text-cream-50 font-medium">
                  Five-Star Hotels &amp; Luxury Banquets
                </h2>
                <span className="text-xs font-mono text-amber-700 dark:text-amber-400 font-bold px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
                  {filteredHotels.length} Properties
                </span>
              </div>

              {filteredHotels.length === 0 ? (
                <p className="text-sm font-light py-6 text-chocolate-600 dark:text-night-muted">No matching hotels found.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                  {filteredHotels.map((hotel, idx) => (
                    <div
                      key={hotel.name}
                      className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between group cursor-pointer relative"
                    >
                      <div>
                        <div className="flex items-center justify-between text-[11px] font-mono text-amber-700 dark:text-amber-400 font-bold mb-3">
                          <span className="group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">
                            H-{String(idx + 1).padStart(2, "0")}
                          </span>
                          <span className="text-[10px] px-2.5 py-0.5 bg-amber-500/10 dark:bg-amber-400/10 text-amber-800 dark:text-amber-300 border border-amber-500/20 rounded-full font-medium">
                            Tier 1 Hotel
                          </span>
                        </div>
                        <h3 className="font-serif text-xl font-medium text-chocolate-950 dark:text-cream-50 group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors leading-snug">
                          {hotel.name}
                        </h3>
                        <p className="text-xs font-sans mt-2.5 flex items-start space-x-1.5 text-chocolate-600 dark:text-night-muted">
                          <MapPin className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                          <span>{hotel.location}</span>
                        </p>
                      </div>

                      <div className="mt-6 pt-3 border-t border-chocolate-700/10 dark:border-white/10 flex items-center justify-between text-[11px] font-sans">
                        <span className="text-chocolate-500 dark:text-night-dim font-light">{hotel.type}</span>
                        <span className="text-emerald-700 dark:text-emerald-400 font-medium flex items-center space-x-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)] inline-block" />
                          <span>Active Roster</span>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* SECTION 2: CONVENTION CENTRES & STADIUMS */}
          {showConventions && (
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse" />
                <h2 className="font-serif text-3xl sm:text-4xl text-chocolate-950 dark:text-cream-50 font-medium">
                  Convention Centres, Exhibition Grounds &amp; Stadiums
                </h2>
                <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400 font-bold px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  {filteredConventions.length} Venues
                </span>
              </div>

              {filteredConventions.length === 0 ? (
                <p className="text-sm font-light py-6 text-chocolate-600 dark:text-night-muted">No matching convention centres or stadiums found.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                  {filteredConventions.map((venue, idx) => (
                    <div
                      key={venue.name}
                      className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between group cursor-pointer relative"
                    >
                      <div>
                        <div className="flex items-center justify-between text-[11px] font-mono text-emerald-700 dark:text-emerald-400 font-bold mb-3">
                          <span className="group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">
                            C-{String(idx + 1).padStart(2, "0")}
                          </span>
                          <span className="text-[10px] px-2.5 py-0.5 bg-emerald-500/10 dark:bg-emerald-400/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20 rounded-full font-medium">
                            Mega Arena
                          </span>
                        </div>
                        <h3 className="font-serif text-xl font-medium text-chocolate-950 dark:text-cream-50 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors leading-snug">
                          {venue.name}
                        </h3>
                        <p className="text-xs font-sans mt-2.5 flex items-start space-x-1.5 text-chocolate-600 dark:text-night-muted">
                          <MapPin className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span>{venue.location}</span>
                        </p>
                      </div>

                      <div className="mt-6 pt-3 border-t border-chocolate-700/10 dark:border-white/10 flex items-center justify-between text-[11px] font-sans">
                        <span className="text-chocolate-500 dark:text-night-dim font-light">{venue.type}</span>
                        <span className="text-emerald-700 dark:text-emerald-400 font-medium flex items-center space-x-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)] inline-block" />
                          <span>Ready Floor</span>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* 4. OPERATIONAL VENUE ASSURANCE */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 border-b border-chocolate-700/10 dark:border-white/10 bg-cream-100/30 dark:bg-night-950/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300">
            <span className="font-mono text-xs font-bold text-amber-600 dark:text-amber-400 tracking-wider">01 / RECONNAISSANCE</span>
            <h4 className="font-serif text-2xl text-chocolate-950 dark:text-cream-50 mt-2 mb-3">Pre-Shift Venue Walkthrough</h4>
            <p className="text-xs text-chocolate-700 dark:text-night-muted leading-relaxed font-light">
              Our floor supervisors arrive ahead of call-time to inspect banquet halls, service corridors, loading docks, and green rooms.
            </p>
          </div>
          <div className="glass-card rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300">
            <span className="font-mono text-xs font-bold text-amber-600 dark:text-amber-400 tracking-wider">02 / PROTOCOL</span>
            <h4 className="font-serif text-2xl text-chocolate-950 dark:text-cream-50 mt-2 mb-3">Venue Property Respect</h4>
            <p className="text-xs text-chocolate-700 dark:text-night-muted leading-relaxed font-light">
              Strict compliance with hotel security policies, loading dock schedules, fire exits, lift segregation, and hygiene standards.
            </p>
          </div>
          <div className="glass-card rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300">
            <span className="font-mono text-xs font-bold text-amber-600 dark:text-amber-400 tracking-wider">03 / BADGING</span>
            <h4 className="font-serif text-2xl text-chocolate-950 dark:text-cream-50 mt-2 mb-3">Access Gating &amp; Passes</h4>
            <p className="text-xs text-chocolate-700 dark:text-night-muted leading-relaxed font-light">
              Seamless coordination with organizers for contractor wristbands, VIP hall access badges, and secure back-of-house clearances.
            </p>
          </div>
        </div>
      </section>

      {/* 5. BOTTOM CALL TO ACTION */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-vignette opacity-50 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto space-y-6">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-800 dark:text-amber-300 text-xs font-mono font-medium">
            VENUE DEPLOYMENT DESK
          </span>
          <h3 className="editorial-heading text-3xl sm:text-5xl">
            Hosting your next event at one of these venues?
          </h3>
          <p className="text-sm font-light text-chocolate-700 dark:text-night-muted">
            Benefit from crew leads who already know your venue's layouts, key contacts, and service timing.
          </p>
          <div className="pt-4">
            <Link to="/contact" className="btn-primary px-8 py-4 font-bold group inline-flex items-center justify-center space-x-2">
              <span>Book Venue-Experienced Crew</span>
              <ArrowUpRight className="w-4 h-4 ml-1 text-night-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
