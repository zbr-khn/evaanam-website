import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Minus, Check } from "lucide-react";
import { WEDDING_ROLES, CORPORATE_ROLES, EVENT_TYPES } from "../data/evaanamData";
import ManpowerCalculator from "../components/ManpowerCalculator";

export default function ServicesPage() {
  const [openWeddingRole, setOpenWeddingRole] = useState(WEDDING_ROLES[0].id);
  const [openCorporateRole, setOpenCorporateRole] = useState(CORPORATE_ROLES[0].id);
  const [hoveredEventType, setHoveredEventType] = useState(0);

  const toggleWeddingRole = (id) => {
    setOpenWeddingRole(openWeddingRole === id ? null : id);
  };

  const toggleCorporateRole = (id) => {
    setOpenCorporateRole(openCorporateRole === id ? null : id);
  };

  return (
    <div className="animate-fade-in pt-28">
      {/* 1. DEDICATED PAGE INTRODUCTION HERO (TONE A: Green / Alabaster White) */}
      <section className="section-tone-a py-20 px-6 sm:px-8 lg:px-12 border-b border-chocolate-700/15 dark:border-emerald-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-6">
            <span className="micro-label">OUR SERVICES</span>
            <h1 className="editorial-heading text-5xl sm:text-6xl md:text-7xl">
              People who know <br />
              <span className="italic text-emerald-700 dark:text-emerald-400">how the floor moves.</span>
            </h1>
            <p className="text-base sm:text-lg font-light leading-relaxed">
              EVAANAM deploys specialized, verified event crews engineered for five-star wedding banquets, high-pressure corporate summits, and large-scale industrial exhibitions across Delhi NCR.
            </p>
          </div>
        </div>
      </section>

      {/* 2. WEDDING HOSPITALITY SECTION (TONE B: Espresso Brown / Sandstone) */}
      <section className="section-tone-b py-24 px-6 sm:px-8 lg:px-12 border-b border-chocolate-700/15 dark:border-bronze-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Header info */}
            <div className="lg:col-span-4 space-y-6">
              <div className="sticky top-32 space-y-4">
                <span className="micro-label text-amber-700 dark:text-amber-400 font-bold">CHAPTER 01</span>
                <h2 className="editorial-heading text-3xl sm:text-4xl text-chocolate-950 dark:text-cream-50">
                  Wedding Hospitality
                </h2>
                <p className="text-base text-amber-900 dark:text-amber-300 font-serif italic">
                  Five-star floors, multi-day functions, VIP coverage.
                </p>
                <p className="text-xs text-chocolate-700 dark:text-night-muted font-light leading-relaxed">
                  From ceremonial entrances to midnight logistics, our 14 dedicated wedding hospitality roles ensure every family member, VIP guest, and dignitary experiences flawless Indian hospitality.
                </p>
                <div className="pt-4">
                  <a
                    href="#calculator-section"
                    className="btn-primary w-full sm:w-auto text-center font-bold"
                  >
                    <span>Configure Wedding Roster</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Expandable Accordion of 14 Roles */}
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-chocolate-700/15 dark:border-bronze-500/20 text-xs uppercase tracking-wider font-semibold text-chocolate-700 dark:text-night-muted">
                <span>Operational Role</span>
                <span>Scope &amp; Deployment</span>
              </div>

              {WEDDING_ROLES.map((role, idx) => {
                const isOpen = openWeddingRole === role.id;
                return (
                  <div
                    key={role.id}
                    className={`border transition-all duration-300 rounded-sm ${
                      isOpen
                        ? "bg-cream-50 dark:bg-night-800 border-amber-500/60 dark:border-bronze-500/60 shadow-md"
                        : "bg-cream-100/80 dark:bg-night-850/80 border-chocolate-700/10 dark:border-bronze-500/15 hover:border-amber-500/40"
                    }`}
                  >
                    <button
                      onClick={() => toggleWeddingRole(role.id)}
                      className="w-full py-5 px-6 flex items-center justify-between text-left focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center space-x-4">
                        <span className="font-mono text-xs font-bold text-amber-700 dark:text-amber-400">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className="font-serif text-lg sm:text-xl font-medium text-chocolate-950 dark:text-cream-50">
                          {role.title}
                        </span>
                      </div>
                      <div className="w-8 h-8 rounded-full flex items-center justify-center bg-cream-200 dark:bg-night-750 border border-chocolate-700/15 dark:border-bronze-500/20 text-chocolate-700 dark:text-cream-200">
                        {isOpen ? <Minus className="w-4 h-4 text-amber-600 dark:text-amber-400" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-chocolate-700 dark:text-night-muted font-light leading-relaxed border-t border-chocolate-700/10 dark:border-night-700 animate-fade-in">
                        <p>{role.desc}</p>
                        <div className="mt-4 pt-3 flex flex-wrap items-center gap-4 text-[11px] font-mono text-chocolate-600 dark:text-night-dim">
                          <span className="flex items-center space-x-1 text-amber-700 dark:text-amber-400 font-semibold">
                            <Check className="w-3.5 h-3.5" />
                            <span>Trained &amp; Uniformed</span>
                          </span>
                          <span className="flex items-center space-x-1 text-amber-700 dark:text-amber-400 font-semibold">
                            <Check className="w-3.5 h-3.5" />
                            <span>Identity Verified</span>
                          </span>
                          <span className="flex items-center space-x-1 text-amber-700 dark:text-amber-400 font-semibold">
                            <Check className="w-3.5 h-3.5" />
                            <span>Supervisor Managed</span>
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORPORATE & EXPOS SECTION (TONE A: Racing Green / Alabaster White) */}
      <section className="section-tone-a py-24 px-6 sm:px-8 lg:px-12 border-b border-chocolate-700/15 dark:border-emerald-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Header info */}
            <div className="lg:col-span-4 space-y-6">
              <div className="sticky top-32 space-y-4">
                <span className="micro-label font-bold">CHAPTER 02</span>
                <h2 className="editorial-heading text-3xl sm:text-4xl">
                  Corporate &amp; Expos
                </h2>
                <p className="text-base text-emerald-800 dark:text-emerald-400 font-serif italic">
                  Expos, activations, launches and conventions.
                </p>
                <p className="text-xs font-light leading-relaxed">
                  Engineered for high-throughput delegate scanning, multi-hall management, C-suite hospitality, and live show running across Delhi NCR's top convention venues.
                </p>
                <div className="pt-4">
                  <a
                    href="#calculator-section"
                    className="btn-primary w-full sm:w-auto text-center font-bold"
                  >
                    <span>Configure Corporate Crew</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Expandable Accordion of 13 Roles */}
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-chocolate-700/15 dark:border-emerald-500/20 text-xs uppercase tracking-wider font-semibold">
                <span>Operational Role</span>
                <span>Scope &amp; Deployment</span>
              </div>

              {CORPORATE_ROLES.map((role, idx) => {
                const isOpen = openCorporateRole === role.id;
                return (
                  <div
                    key={role.id}
                    className={`border transition-all duration-300 rounded-sm ${
                      isOpen
                        ? "bg-cream-50 dark:bg-night-800 border-emerald-500/60 shadow-md"
                        : "bg-cream-100/80 dark:bg-night-850/80 border-chocolate-700/10 dark:border-emerald-500/20 hover:border-emerald-500/40"
                    }`}
                  >
                    <button
                      onClick={() => toggleCorporateRole(role.id)}
                      className="w-full py-5 px-6 flex items-center justify-between text-left focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center space-x-4">
                        <span className="font-mono text-xs font-bold text-emerald-700 dark:text-emerald-400">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className="font-serif text-lg sm:text-xl font-medium text-chocolate-950 dark:text-cream-50">
                          {role.title}
                        </span>
                      </div>
                      <div className="w-8 h-8 rounded-full flex items-center justify-center bg-cream-200 dark:bg-night-750 border border-chocolate-700/15 dark:border-emerald-500/20 text-chocolate-700 dark:text-cream-200">
                        {isOpen ? <Minus className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm font-light leading-relaxed border-t border-chocolate-700/10 dark:border-night-700 animate-fade-in">
                        <p>{role.desc}</p>
                        <div className="mt-4 pt-3 flex flex-wrap items-center gap-4 text-[11px] font-mono">
                          <span className="flex items-center space-x-1 text-emerald-700 dark:text-emerald-400 font-semibold">
                            <Check className="w-3.5 h-3.5" />
                            <span>Tech-App Savvy</span>
                          </span>
                          <span className="flex items-center space-x-1 text-emerald-700 dark:text-emerald-400 font-semibold">
                            <Check className="w-3.5 h-3.5" />
                            <span>Fluent &amp; Articulate</span>
                          </span>
                          <span className="flex items-center space-x-1 text-emerald-700 dark:text-emerald-400 font-semibold">
                            <Check className="w-3.5 h-3.5" />
                            <span>Rapid Deployment Roster</span>
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. MANPOWER ROSTER CALCULATOR SECTION (TONE B: Espresso Brown / Sandstone) */}
      <section id="calculator-section" className="section-tone-b py-24 px-6 sm:px-8 lg:px-12 border-b border-chocolate-700/15 dark:border-bronze-500/20">
        <ManpowerCalculator />
      </section>

      {/* 5. EVENT TYPES (TONE A: Racing Green / Alabaster White) */}
      <section className="section-tone-a py-24 px-6 sm:px-8 lg:px-12 border-b border-chocolate-700/15 dark:border-emerald-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="micro-label">SECTOR SPECIALIZATION</span>
            <h2 className="editorial-heading text-4xl sm:text-5xl mt-2">
              Event Types We Power
            </h2>
            <p className="text-sm font-light mt-2 max-w-xl">
              Hover through our primary operating categories across weddings, state summits, stadiums, and conventions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Typography List */}
            <div className="lg:col-span-7 space-y-4">
              {EVENT_TYPES.map((type, idx) => {
                const isHovered = hoveredEventType === idx;
                return (
                  <div
                    key={type.title}
                    onMouseEnter={() => setHoveredEventType(idx)}
                    className={`p-6 border-b transition-all duration-300 cursor-pointer rounded-sm ${
                      isHovered
                        ? "border-emerald-500 bg-cream-100/90 dark:bg-night-800 pl-8 shadow-sm"
                        : "border-chocolate-700/10 dark:border-night-700 hover:border-emerald-500/40"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <h3
                        className={`font-serif text-2xl sm:text-3xl transition-colors ${
                          isHovered ? "text-chocolate-950 dark:text-cream-50 font-medium" : "opacity-80"
                        }`}
                      >
                        {type.title}
                      </h3>
                      <span className="font-mono text-xs text-emerald-700 dark:text-emerald-400 font-bold">
                        0{idx + 1}
                      </span>
                    </div>

                    <p className="text-xs font-serif italic text-emerald-700 dark:text-emerald-400 mt-1">
                      {type.subtitle}
                    </p>

                    {isHovered && (
                      <div className="mt-3 animate-fade-in space-y-2">
                        <p className="text-xs font-light leading-relaxed">
                          {type.desc}
                        </p>
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {type.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] uppercase font-sans tracking-wider px-2 py-0.5 bg-cream-200 dark:bg-night-900 text-chocolate-700 dark:text-cream-200 border border-chocolate-700/10 dark:border-emerald-500/20"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right: Dynamic Interactive Preview Image */}
            <div className="lg:col-span-5 hidden lg:block">
              <div className="relative overflow-hidden border border-chocolate-700/15 dark:border-bronze-500/20 aspect-[4/5] shadow-2xl bg-night-950 rounded-sm">
                <img
                  key={EVENT_TYPES[hoveredEventType].image}
                  src={EVENT_TYPES[hoveredEventType].image}
                  alt={EVENT_TYPES[hoveredEventType].title}
                  className="w-full h-full object-cover animate-fade-in transition-all duration-700 opacity-90 dark:opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-cream-100">
                  <span className="micro-label text-amber-400 font-bold">Sector Spotlight</span>
                  <h4 className="font-serif text-2xl font-normal text-cream-50 mt-1">
                    {EVENT_TYPES[hoveredEventType].title}
                  </h4>
                  <p className="text-xs text-cream-300/80 font-light mt-1">
                    {EVENT_TYPES[hoveredEventType].subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CONVERSION CTA (TONE B: Espresso Brown / Sandstone) */}
      <section className="section-tone-b py-20 px-6 sm:px-8 lg:px-12 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="micro-label text-amber-700 dark:text-amber-400 font-bold">CUSTOM ROSTER DEPLOYMENT</span>
          <h3 className="editorial-heading text-3xl sm:text-4xl">
            Need a tailored crew configuration for your event?
          </h3>
          <p className="text-sm font-light">
            Share your schedule, headcount requirements, and shift timings. We provide fully briefed personnel matching your exact venue standards.
          </p>
          <div className="pt-2">
            <Link to="/contact" className="btn-primary px-8 py-4 font-bold">
              Request Manpower Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
