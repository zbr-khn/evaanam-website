import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Search, ArrowUpRight, Sparkles, Building2 } from "lucide-react";
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
      {/* 1. DEDICATED PAGE INTRODUCTION HERO (TONE A: Green / Alabaster White) */}
      <section className="section-tone-a py-20 px-6 sm:px-8 lg:px-12 border-b border-chocolate-700/15 dark:border-emerald-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-6">
            <span className="micro-label font-bold">DEPLOYMENT FOOTPRINT</span>
            <h1 className="editorial-heading text-5xl sm:text-6xl md:text-7xl">
              Experienced where <br />
              <span className="italic text-emerald-700 dark:text-emerald-400">the standard is already high.</span>
            </h1>
            <p className="text-base sm:text-lg font-light leading-relaxed">
              Our crew has experience across premium hotels, convention centres, exhibition grounds and major event venues throughout Delhi NCR. We understand venue protocols, service lifts, loading gates, and operational decorum.
            </p>
          </div>
        </div>
      </section>

      {/* 2. SLOW HORIZONTAL MARQUEE / TICKER (TONE B: Espresso Brown / Sandstone) */}
      <div className="section-tone-b py-6 border-b border-chocolate-700/15 dark:border-bronze-500/20">
        <VenueMarquee />
      </div>

      {/* 3. VENUE DIRECTORY & DIRECTORY BOARD (TONE A: Racing Green / Alabaster White) */}
      <section className="section-tone-a py-24 px-6 sm:px-8 lg:px-12 border-b border-chocolate-700/15 dark:border-emerald-500/20">
        <div className="max-w-7xl mx-auto">
          {/* Filter Bar & Search */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between pb-8 mb-12 border-b border-chocolate-700/15 dark:border-emerald-500/20 gap-4">
            {/* Category Filter Tabs */}
            <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] transition-all rounded-sm border-2 cursor-pointer ${
                  activeTab === "all"
                    ? "bg-brand-green dark:bg-bronze-500 text-cream-50 dark:text-night-950 border-amber-400 shadow-md scale-105"
                    : "bg-cream-100 dark:bg-night-800 text-chocolate-700 dark:text-night-muted hover:text-chocolate-950 dark:hover:text-cream-50 border-chocolate-700/20 dark:border-bronze-500/30 hover:border-amber-400"
                }`}
              >
                All Venues (40)
              </button>
              <button
                onClick={() => setActiveTab("hotels")}
                className={`px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] transition-all rounded-sm border-2 cursor-pointer ${
                  activeTab === "hotels"
                    ? "bg-brand-green dark:bg-bronze-500 text-cream-50 dark:text-night-950 border-amber-400 shadow-md scale-105"
                    : "bg-cream-100 dark:bg-night-800 text-chocolate-700 dark:text-night-muted hover:text-chocolate-950 dark:hover:text-cream-50 border-chocolate-700/20 dark:border-bronze-500/30 hover:border-amber-400"
                }`}
              >
                Five-Star Hotels (20)
              </button>
              <button
                onClick={() => setActiveTab("conventions")}
                className={`px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] transition-all rounded-sm border-2 cursor-pointer ${
                  activeTab === "conventions"
                    ? "bg-brand-green dark:bg-bronze-500 text-cream-50 dark:text-night-950 border-amber-400 shadow-md scale-105"
                    : "bg-cream-100 dark:bg-night-800 text-chocolate-700 dark:text-night-muted hover:text-chocolate-950 dark:hover:text-cream-50 border-chocolate-700/20 dark:border-bronze-500/30 hover:border-amber-400"
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
                className="w-full pl-10 pr-4 py-2.5 bg-cream-100 dark:bg-night-800 border-2 border-chocolate-700/20 dark:border-bronze-500/30 text-xs font-sans text-chocolate-950 dark:text-cream-100 placeholder-chocolate-400 dark:placeholder-night-dim focus:outline-none focus:border-amber-500 transition-colors rounded-sm"
              />
            </div>
          </div>

          {/* SECTION 1: FIVE-STAR HOTELS */}
          {showHotels && (
            <div className="mb-20">
              <div className="flex items-center space-x-3 mb-8">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse"></span>
                <h2 className="font-serif text-3xl sm:text-4xl text-chocolate-950 dark:text-cream-50 font-medium">
                  Five-Star Hotels &amp; Luxury Banquets
                </h2>
                <span className="text-xs font-mono text-amber-700 dark:text-amber-400 font-extrabold">
                  ({filteredHotels.length} Properties)
                </span>
              </div>

              {filteredHotels.length === 0 ? (
                <p className="text-sm font-light py-6">No matching hotels found.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                  {filteredHotels.map((hotel, idx) => (
                    <div
                      key={hotel.name}
                      className="p-6 flex flex-col justify-between rounded-sm bg-cream-100/90 dark:bg-night-800/90 border-2 border-chocolate-700/15 dark:border-bronze-500/25 shadow-sm hover:shadow-2xl hover:border-amber-400 dark:hover:border-amber-300 hover:bg-cream-50 dark:hover:bg-night-750 hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer"
                    >
                      <div>
                        <div className="flex items-center justify-between text-[11px] font-mono text-amber-700 dark:text-amber-400 font-bold mb-2">
                          <span className="group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">H-{String(idx + 1).padStart(2, "0")}</span>
                          <span className="text-[10px] px-2 py-0.5 bg-amber-500/10 rounded-sm">Tier 1 Hotel</span>
                        </div>
                        <h3 className="font-serif text-xl font-medium text-chocolate-950 dark:text-cream-50 group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors">
                          {hotel.name}
                        </h3>
                        <p className="text-xs font-sans mt-2 flex items-start space-x-1.5 text-chocolate-600 dark:text-night-muted group-hover:text-chocolate-800 dark:group-hover:text-cream-200 transition-colors">
                          <MapPin className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                          <span>{hotel.location}</span>
                        </p>
                      </div>

                      <div className="mt-5 pt-3 border-t border-chocolate-700/10 dark:border-night-700 flex items-center justify-between text-[11px] font-sans">
                        <span className="text-chocolate-500 dark:text-night-dim">{hotel.type}</span>
                        <span className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center space-x-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
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
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <h2 className="font-serif text-3xl sm:text-4xl text-chocolate-950 dark:text-cream-50 font-medium">
                  Convention Centres, Exhibition Grounds &amp; Stadiums
                </h2>
                <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400 font-extrabold">
                  ({filteredConventions.length} Venues)
                </span>
              </div>

              {filteredConventions.length === 0 ? (
                <p className="text-sm font-light py-6">No matching convention centres or stadiums found.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                  {filteredConventions.map((venue, idx) => (
                    <div
                      key={venue.name}
                      className="p-6 flex flex-col justify-between rounded-sm bg-cream-100/90 dark:bg-night-800/90 border-2 border-chocolate-700/15 dark:border-emerald-500/25 shadow-sm hover:shadow-2xl hover:border-emerald-400 dark:hover:border-emerald-300 hover:bg-cream-50 dark:hover:bg-night-750 hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer"
                    >
                      <div>
                        <div className="flex items-center justify-between text-[11px] font-mono text-emerald-700 dark:text-emerald-400 font-bold mb-2">
                          <span className="group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">C-{String(idx + 1).padStart(2, "0")}</span>
                          <span className="text-[10px] px-2 py-0.5 bg-emerald-500/10 rounded-sm">Mega Arena</span>
                        </div>
                        <h3 className="font-serif text-xl font-medium text-chocolate-950 dark:text-cream-50 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors">
                          {venue.name}
                        </h3>
                        <p className="text-xs font-sans mt-2 flex items-start space-x-1.5 text-chocolate-600 dark:text-night-muted group-hover:text-chocolate-800 dark:group-hover:text-cream-200 transition-colors">
                          <MapPin className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span>{venue.location}</span>
                        </p>
                      </div>

                      <div className="mt-5 pt-3 border-t border-chocolate-700/10 dark:border-night-700 flex items-center justify-between text-[11px] font-sans">
                        <span className="text-chocolate-500 dark:text-night-dim">{venue.type}</span>
                        <span className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center space-x-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
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

      {/* 4. OPERATIONAL VENUE ASSURANCE (TONE B: Espresso Brown / Sandstone) */}
      <section className="section-tone-b py-20 px-6 sm:px-8 lg:px-12 border-b border-chocolate-700/15 dark:border-bronze-500/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 border-2 border-chocolate-700/15 dark:border-bronze-500/20 bg-cream-100/90 dark:bg-night-800/90 rounded-sm hover:border-amber-400 hover:bg-cream-50 dark:hover:bg-night-750 transition-all duration-300">
            <span className="font-mono text-xs font-bold text-amber-700 dark:text-amber-400">01 / RECONNAISSANCE</span>
            <h4 className="font-serif text-2xl text-chocolate-950 dark:text-cream-50 mt-2 mb-3">Pre-Shift Venue Walkthrough</h4>
            <p className="text-xs text-chocolate-700 dark:text-night-muted leading-relaxed font-light">
              Our teams arrive ahead of call-time to walk the banquet halls, service corridors, and green rooms.
            </p>
          </div>
          <div className="p-8 border-2 border-chocolate-700/15 dark:border-bronze-500/20 bg-cream-100/90 dark:bg-night-800/90 rounded-sm hover:border-amber-400 hover:bg-cream-50 dark:hover:bg-night-750 transition-all duration-300">
            <span className="font-mono text-xs font-bold text-amber-700 dark:text-amber-400">02 / PROTOCOL</span>
            <h4 className="font-serif text-2xl text-chocolate-950 dark:text-cream-50 mt-2 mb-3">Venue Property Respect</h4>
            <p className="text-xs text-chocolate-700 dark:text-night-muted leading-relaxed font-light">
              Strict adherence to hotel security policies, loading dock timing, fire exits, and hygiene compliances.
            </p>
          </div>
          <div className="p-8 border-2 border-chocolate-700/15 dark:border-bronze-500/20 bg-cream-100/90 dark:bg-night-800/90 rounded-sm hover:border-amber-400 hover:bg-cream-50 dark:hover:bg-night-750 transition-all duration-300">
            <span className="font-mono text-xs font-bold text-amber-700 dark:text-amber-400">03 / BADGING</span>
            <h4 className="font-serif text-2xl text-chocolate-950 dark:text-cream-50 mt-2 mb-3">Access Gating &amp; Passes</h4>
            <p className="text-xs text-chocolate-700 dark:text-night-muted leading-relaxed font-light">
              Seamless coordination with organizers for contractor wristbands, VIP hall badges, and security access.
            </p>
          </div>
        </div>
      </section>

      {/* 5. BOTTOM CALL TO ACTION (TONE A: Racing Green / Alabaster White) */}
      <section className="section-tone-a py-20 px-6 sm:px-8 lg:px-12 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="micro-label font-bold">VENUE DEPLOYMENT DESK</span>
          <h3 className="editorial-heading text-3xl sm:text-4xl">
            Hosting your next event at one of these venues?
          </h3>
          <p className="text-sm font-light">
            Benefit from crew leads who already know your venue's layouts, key contacts, and service timing.
          </p>
          <div className="pt-2">
            <Link to="/contact" className="btn-primary px-8 py-4 font-bold group inline-flex items-center justify-center space-x-2">
              <span>Book Venue-Experienced Crew</span>
              <ArrowUpRight className="w-4 h-4 ml-1 text-bronze-300 dark:text-night-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
