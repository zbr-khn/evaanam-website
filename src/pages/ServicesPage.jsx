import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Minus, ArrowUpRight, Check, Sparkles, Briefcase, ChevronDown } from "lucide-react";
import { WEDDING_ROLES, CORPORATE_ROLES, EVENT_TYPES } from "../data/evaanamData";

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
      {/* 1. DEDICATED PAGE INTRODUCTION HERO */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-cream-200 border-b border-chocolate-700/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-6">
            <span className="micro-label">OUR SERVICES</span>
            <h1 className="editorial-heading text-5xl sm:text-6xl md:text-7xl text-chocolate-950">
              People who know <br />
              <span className="italic text-bronze-600">how the floor moves.</span>
            </h1>
            <p className="text-base sm:text-lg text-chocolate-600 font-light leading-relaxed">
              EVAANAM deploys specialized, verified event crews engineered for five-star wedding banquets, high-pressure corporate summits, and large-scale industrial exhibitions across Delhi NCR.
            </p>
          </div>
        </div>
      </section>

      {/* 2. WEDDING HOSPITALITY SECTION */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-cream-100 border-b border-chocolate-700/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Header info */}
            <div className="lg:col-span-4 space-y-6">
              <div className="sticky top-32 space-y-4">
                <span className="micro-label text-bronze-600">CHAPTER 01</span>
                <h2 className="editorial-heading text-3xl sm:text-4xl text-chocolate-950">
                  Wedding Hospitality
                </h2>
                <p className="text-base text-chocolate-600 font-serif italic">
                  Five-star floors, multi-day functions, VIP coverage.
                </p>
                <p className="text-xs text-chocolate-500 font-light leading-relaxed">
                  From ceremonial entrances to midnight logistics, our 14 dedicated wedding hospitality roles ensure every family member, VIP guest, and dignitary experiences flawless Indian hospitality.
                </p>
                <div className="pt-4">
                  <Link
                    to="/contact"
                    className="btn-primary w-full sm:w-auto text-center"
                  >
                    <span>Request Wedding Crew</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Expandable Accordion of 14 Roles */}
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-chocolate-700/15 text-xs uppercase tracking-wider font-semibold text-chocolate-600">
                <span>Operational Role</span>
                <span>Scope &amp; Deployment</span>
              </div>

              {WEDDING_ROLES.map((role, idx) => {
                const isOpen = openWeddingRole === role.id;
                return (
                  <div
                    key={role.id}
                    className={`border transition-all duration-300 ${
                      isOpen
                        ? "bg-cream-50 border-bronze-500/60 shadow-sm"
                        : "bg-cream-200/60 border-chocolate-700/10 hover:border-bronze-500/30"
                    }`}
                  >
                    <button
                      onClick={() => toggleWeddingRole(role.id)}
                      className="w-full py-5 px-6 flex items-center justify-between text-left focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center space-x-4">
                        <span className="font-mono text-xs font-semibold text-bronze-600">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className="font-serif text-lg sm:text-xl font-medium text-chocolate-950">
                          {role.title}
                        </span>
                      </div>
                      <div className="w-8 h-8 rounded-full flex items-center justify-center bg-cream-100 border border-chocolate-700/15 text-chocolate-700">
                        {isOpen ? <Minus className="w-4 h-4 text-bronze-600" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-chocolate-600 font-light leading-relaxed border-t border-chocolate-700/10 animate-fade-in">
                        <p>{role.desc}</p>
                        <div className="mt-4 pt-3 flex flex-wrap items-center gap-4 text-[11px] font-mono text-chocolate-500">
                          <span className="flex items-center space-x-1 text-bronze-600">
                            <Check className="w-3.5 h-3.5" />
                            <span>Trained &amp; Uniformed</span>
                          </span>
                          <span className="flex items-center space-x-1 text-bronze-600">
                            <Check className="w-3.5 h-3.5" />
                            <span>Identity Verified</span>
                          </span>
                          <span className="flex items-center space-x-1 text-bronze-600">
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

      {/* 3. CORPORATE & EXPOS SECTION */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-cream-200 border-b border-chocolate-700/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Header info */}
            <div className="lg:col-span-4 space-y-6">
              <div className="sticky top-32 space-y-4">
                <span className="micro-label text-bronze-600">CHAPTER 02</span>
                <h2 className="editorial-heading text-3xl sm:text-4xl text-chocolate-950">
                  Corporate &amp; Expos
                </h2>
                <p className="text-base text-chocolate-600 font-serif italic">
                  Expos, activations, launches and conventions.
                </p>
                <p className="text-xs text-chocolate-500 font-light leading-relaxed">
                  Engineered for high-throughput delegate scanning, multi-hall management, C-suite hospitality, and live show running across Delhi NCR's top convention venues.
                </p>
                <div className="pt-4">
                  <Link
                    to="/contact"
                    className="btn-primary w-full sm:w-auto text-center"
                  >
                    <span>Request Corporate Crew</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Expandable Accordion of 13 Roles */}
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-chocolate-700/15 text-xs uppercase tracking-wider font-semibold text-chocolate-600">
                <span>Operational Role</span>
                <span>Scope &amp; Deployment</span>
              </div>

              {CORPORATE_ROLES.map((role, idx) => {
                const isOpen = openCorporateRole === role.id;
                return (
                  <div
                    key={role.id}
                    className={`border transition-all duration-300 ${
                      isOpen
                        ? "bg-cream-50 border-bronze-500/60 shadow-sm"
                        : "bg-cream-100/80 border-chocolate-700/10 hover:border-bronze-500/30"
                    }`}
                  >
                    <button
                      onClick={() => toggleCorporateRole(role.id)}
                      className="w-full py-5 px-6 flex items-center justify-between text-left focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center space-x-4">
                        <span className="font-mono text-xs font-semibold text-bronze-600">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className="font-serif text-lg sm:text-xl font-medium text-chocolate-950">
                          {role.title}
                        </span>
                      </div>
                      <div className="w-8 h-8 rounded-full flex items-center justify-center bg-cream-200 border border-chocolate-700/15 text-chocolate-700">
                        {isOpen ? <Minus className="w-4 h-4 text-bronze-600" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-chocolate-600 font-light leading-relaxed border-t border-chocolate-700/10 animate-fade-in">
                        <p>{role.desc}</p>
                        <div className="mt-4 pt-3 flex flex-wrap items-center gap-4 text-[11px] font-mono text-chocolate-500">
                          <span className="flex items-center space-x-1 text-bronze-600">
                            <Check className="w-3.5 h-3.5" />
                            <span>Tech-App Savvy</span>
                          </span>
                          <span className="flex items-center space-x-1 text-bronze-600">
                            <Check className="w-3.5 h-3.5" />
                            <span>Fluent &amp; Articulate</span>
                          </span>
                          <span className="flex items-center space-x-1 text-bronze-600">
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

      {/* 4. EVENT TYPES (EDITORIAL HOVER SECTION) */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-cream-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="micro-label">SECTOR SPECIALIZATION</span>
            <h2 className="editorial-heading text-4xl sm:text-5xl text-chocolate-950 mt-2">
              Event Types We Power
            </h2>
            <p className="text-sm text-chocolate-600 font-light mt-2 max-w-xl">
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
                    className={`p-6 border-b transition-all duration-300 cursor-pointer ${
                      isHovered
                        ? "border-bronze-500 bg-cream-50 pl-8"
                        : "border-chocolate-700/10 hover:border-chocolate-700/30"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <h3
                        className={`font-serif text-2xl sm:text-3xl transition-colors ${
                          isHovered ? "text-chocolate-950 font-medium" : "text-chocolate-600"
                        }`}
                      >
                        {type.title}
                      </h3>
                      <span className="font-mono text-xs text-bronze-600">
                        0{idx + 1}
                      </span>
                    </div>

                    <p className="text-xs font-serif italic text-bronze-600 mt-1">
                      {type.subtitle}
                    </p>

                    {isHovered && (
                      <div className="mt-3 animate-fade-in space-y-2">
                        <p className="text-xs text-chocolate-600 font-light leading-relaxed">
                          {type.desc}
                        </p>
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {type.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] uppercase font-sans tracking-wider px-2 py-0.5 bg-cream-200 text-chocolate-700 border border-chocolate-700/10"
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
              <div className="relative overflow-hidden border border-chocolate-700/15 aspect-[4/5] shadow-lg bg-chocolate-900">
                <img
                  key={EVENT_TYPES[hoveredEventType].image}
                  src={EVENT_TYPES[hoveredEventType].image}
                  alt={EVENT_TYPES[hoveredEventType].title}
                  className="w-full h-full object-cover animate-fade-in transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-chocolate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-cream-100">
                  <span className="micro-label text-bronze-400">Sector Spotlight</span>
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

      {/* 5. BOTTOM CONVERSION CTA */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-cream-200 text-center border-t border-chocolate-700/10">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="micro-label">CUSTOM ROSTER DEPLOYMENT</span>
          <h3 className="font-serif text-3xl sm:text-4xl text-chocolate-950">
            Need a tailored crew configuration for your event?
          </h3>
          <p className="text-sm text-chocolate-600 font-light">
            Share your schedule, headcount requirements, and shift timings. We provide fully briefed personnel matching your exact venue standards.
          </p>
          <div className="pt-2">
            <Link to="/contact" className="btn-primary px-8 py-4">
              Request Manpower Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
