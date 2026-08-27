import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Building2, Search, ArrowUpRight, CheckCircle2, Shield } from "lucide-react";
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
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-cream-200 border-b border-chocolate-700/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-6">
            <span className="micro-label">DEPLOYMENT FOOTPRINT</span>
            <h1 className="editorial-heading text-5xl sm:text-6xl md:text-7xl text-chocolate-950">
              Experienced where <br />
              <span className="italic text-bronze-600">the standard is already high.</span>
            </h1>
            <p className="text-base sm:text-lg text-chocolate-600 font-light leading-relaxed">
              Our crew has experience across premium hotels, convention centres, exhibition grounds and major event venues throughout Delhi NCR. We understand venue protocols, service lifts, loading gates, and operational decorum.
            </p>
          </div>
        </div>
      </section>

      {/* 2. SLOW HORIZONTAL MARQUEE / TICKER */}
      <div className="py-6 bg-cream-100 border-b border-chocolate-700/10">
        <VenueMarquee />
      </div>

      {/* 3. VENUE DIRECTORY & DIRECTORY BOARD */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-cream-200">
        <div className="max-w-7xl mx-auto">
          {/* Filter Bar & Search */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between pb-8 mb-12 border-b border-chocolate-700/15 gap-4">
            {/* Category Filter Tabs */}
            <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] transition-all ${
                  activeTab === "all"
                    ? "bg-chocolate-700 text-cream-50"
                    : "bg-cream-100 text-chocolate-600 hover:text-chocolate-900 border border-chocolate-700/10"
                }`}
              >
                All Venues (40)
              </button>
              <button
                onClick={() => setActiveTab("hotels")}
                className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] transition-all ${
                  activeTab === "hotels"
                    ? "bg-chocolate-700 text-cream-50"
                    : "bg-cream-100 text-chocolate-600 hover:text-chocolate-900 border border-chocolate-700/10"
                }`}
              >
                Five-Star Hotels (20)
              </button>
              <button
                onClick={() => setActiveTab("conventions")}
                className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] transition-all ${
                  activeTab === "conventions"
                    ? "bg-chocolate-700 text-cream-50"
                    : "bg-cream-100 text-chocolate-600 hover:text-chocolate-900 border border-chocolate-700/10"
                }`}
              >
                Convention &amp; Stadiums (20)
              </button>
            </div>

            {/* Quick Search */}
            <div className="relative max-w-xs w-full">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-chocolate-400" />
              <input
                type="text"
                placeholder="Search venue or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-cream-100 border border-chocolate-700/15 text-xs font-sans text-chocolate-800 placeholder-chocolate-400 focus:outline-none focus:border-bronze-500 transition-colors"
              />
            </div>
          </div>

          {/* SECTION 1: FIVE-STAR HOTELS */}
          {showHotels && (
            <div className="mb-20">
              <div className="flex items-center space-x-3 mb-8">
                <span className="w-2.5 h-2.5 rounded-full bg-bronze-500"></span>
                <h2 className="font-serif text-3xl sm:text-4xl text-chocolate-950 font-medium">
                  Five-Star Hotels &amp; Luxury Banquets
                </h2>
                <span className="text-xs font-mono text-bronze-600">
                  ({filteredHotels.length} Properties)
                </span>
              </div>

              {filteredHotels.length === 0 ? (
                <p className="text-sm text-chocolate-500 py-6">No matching hotels found.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {filteredHotels.map((hotel, idx) => (
                    <div
                      key={hotel.name}
                      className="card-luxury p-6 flex flex-col justify-between hover:border-bronze-500/60 transition-all group"
                    >
                      <div>
                        <div className="flex items-center justify-between text-[11px] font-mono text-bronze-600 mb-2">
                          <span>H-{String(idx + 1).padStart(2, "0")}</span>
                          <span className="text-chocolate-400">NCR Tier 1</span>
                        </div>
                        <h3 className="font-serif text-xl font-medium text-chocolate-950 group-hover:text-bronze-700 transition-colors">
                          {hotel.name}
                        </h3>
                        <p className="text-xs text-chocolate-500 font-sans mt-2 flex items-start space-x-1.5">
                          <MapPin className="w-3.5 h-3.5 text-bronze-500 shrink-0 mt-0.5" />
                          <span>{hotel.location}</span>
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-chocolate-700/10 flex items-center justify-between text-[11px] text-chocolate-500">
                        <span>{hotel.type}</span>
                        <span className="text-bronze-600 font-semibold">Active Roster</span>
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
                <span className="w-2.5 h-2.5 rounded-full bg-chocolate-700"></span>
                <h2 className="font-serif text-3xl sm:text-4xl text-chocolate-950 font-medium">
                  Convention Centres, Exhibition Grounds &amp; Stadiums
                </h2>
                <span className="text-xs font-mono text-bronze-600">
                  ({filteredConventions.length} Venues)
                </span>
              </div>

              {filteredConventions.length === 0 ? (
                <p className="text-sm text-chocolate-500 py-6">No matching convention centres or stadiums found.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {filteredConventions.map((venue, idx) => (
                    <div
                      key={venue.name}
                      className="card-luxury p-6 flex flex-col justify-between hover:border-bronze-500/60 transition-all group"
                    >
                      <div>
                        <div className="flex items-center justify-between text-[11px] font-mono text-bronze-600 mb-2">
                          <span>C-{String(idx + 1).padStart(2, "0")}</span>
                          <span className="text-chocolate-400">Mega Arena</span>
                        </div>
                        <h3 className="font-serif text-xl font-medium text-chocolate-950 group-hover:text-bronze-700 transition-colors">
                          {venue.name}
                        </h3>
                        <p className="text-xs text-chocolate-500 font-sans mt-2 flex items-start space-x-1.5">
                          <MapPin className="w-3.5 h-3.5 text-bronze-500 shrink-0 mt-0.5" />
                          <span>{venue.location}</span>
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-chocolate-700/10 flex items-center justify-between text-[11px] text-chocolate-500">
                        <span>{venue.type}</span>
                        <span className="text-bronze-600 font-semibold">Ready</span>
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
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-cream-100 border-t border-chocolate-700/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 border border-chocolate-700/10 bg-cream-200">
            <span className="font-mono text-xs font-semibold text-bronze-600">01 / ORIENTATION</span>
            <h4 className="font-serif text-2xl text-chocolate-950 mt-2 mb-3">Pre-Shift Venue Walkthrough</h4>
            <p className="text-xs text-chocolate-600 leading-relaxed font-light">
              Our teams arrive 90 minutes prior to call-time to walk the banquet halls, service corridors, and green rooms.
            </p>
          </div>
          <div className="p-8 border border-chocolate-700/10 bg-cream-200">
            <span className="font-mono text-xs font-semibold text-bronze-600">02 / PROTOCOL</span>
            <h4 className="font-serif text-2xl text-chocolate-950 mt-2 mb-3">Venue Property Respect</h4>
            <p className="text-xs text-chocolate-600 leading-relaxed font-light">
              Strict adherence to hotel security policies, loading dock timing, fire exits, and hygiene compliances.
            </p>
          </div>
          <div className="p-8 border border-chocolate-700/10 bg-cream-200">
            <span className="font-mono text-xs font-semibold text-bronze-600">03 / BADGING</span>
            <h4 className="font-serif text-2xl text-chocolate-950 mt-2 mb-3">Access Gating &amp; Passes</h4>
            <p className="text-xs text-chocolate-600 leading-relaxed font-light">
              Seamless coordination with organizers for contractor wristbands, VIP hall badges, and security access.
            </p>
          </div>
        </div>
      </section>

      {/* 5. BOTTOM CALL TO ACTION */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-cream-200 text-center border-t border-chocolate-700/10">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="micro-label">VENUE DEPLOYMENT DESK</span>
          <h3 className="font-serif text-3xl sm:text-4xl text-chocolate-950">
            Hosting your next event at one of these venues?
          </h3>
          <p className="text-sm text-chocolate-600 font-light">
            Benefit from crew leads who already know your venue's layouts, key contacts, and service timing.
          </p>
          <div className="pt-2">
            <Link to="/contact" className="btn-primary px-8 py-4">
              Book Venue-Experienced Crew
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
