import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Minus, Check, ArrowUpRight, Sparkles, Layers, Building2 } from "lucide-react";
import { WEDDING_ROLES, CORPORATE_ROLES, EVENT_TYPES } from "../data/evaanamData";
import ManpowerCalculator from "../components/ManpowerCalculator";
import ScrollReveal from "../components/ScrollReveal";

export default function ServicesPage() {
  const [openWeddingRole, setOpenWeddingRole] = useState(null);
  const [openCorporateRole, setOpenCorporateRole] = useState(null);
  const [hoveredEventType, setHoveredEventType] = useState(0);

  const toggleWeddingRole = (id) => {
    setOpenWeddingRole((prev) => (prev === id ? null : id));
  };

  const toggleCorporateRole = (id) => {
    setOpenCorporateRole((prev) => (prev === id ? null : id));
  };

  const safeEventTypes = EVENT_TYPES && EVENT_TYPES.length > 0 ? EVENT_TYPES : [];
  const currentEventType = safeEventTypes[hoveredEventType] || safeEventTypes[0] || {
    title: "Weddings & Celebrations",
    subtitle: "Five-Star Floors & Multi-Day Functions",
    desc: "From sangeet choreography runners to VIP personal shadows and overnight hospitality desks.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80",
    tags: ["VIP Shadows", "Welcome Hostesses", "Helpdesk", "Runners"]
  };

  return (
    <div className="animate-fade-in pt-28">
      {/* 1. DEDICATED PAGE INTRODUCTION HERO */}
      <section className="relative py-20 px-6 sm:px-8 lg:px-12 border-b border-chocolate-700/10 dark:border-white/10 overflow-hidden">
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-amber-500/10 dark:bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto">
          <ScrollReveal variant="up">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-800 dark:text-amber-300 text-xs font-mono font-medium">
                <Layers className="w-3.5 h-3.5" />
                <span>27 SPECIALIZED ON-FLOOR ROLES</span>
              </div>
              <h1 className="editorial-heading text-5xl sm:text-6xl md:text-7xl">
                People who know <br />
                <span className="italic text-glow-amber">how the floor moves.</span>
              </h1>
              <p className="text-base sm:text-lg font-light leading-relaxed text-chocolate-700 dark:text-night-muted">
                EVAANAM deploys specialized, verified event crews engineered for five-star wedding banquets, high-pressure corporate summits, and large-scale industrial exhibitions across Delhi NCR.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. WEDDING HOSPITALITY SECTION */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 border-b border-chocolate-700/10 dark:border-white/10 bg-cream-100/30 dark:bg-night-950/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Header info */}
            <div className="lg:col-span-4 space-y-6">
              <div className="sticky top-32 space-y-5">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-800 dark:text-amber-300 text-xs font-mono font-medium">
                  CHAPTER 01
                </span>
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
                    className="btn-primary w-full sm:w-auto text-center font-bold group inline-flex items-center justify-center space-x-2 px-6 py-3.5"
                  >
                    <span>Configure Wedding Roster</span>
                    <ArrowUpRight className="w-4 h-4 ml-1 text-night-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Expandable Accordion */}
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-chocolate-700/10 dark:border-white/10 text-xs uppercase tracking-wider font-semibold text-chocolate-500 dark:text-night-dim">
                <span>Operational Role</span>
                <span>Scope &amp; Deployment</span>
              </div>

              {WEDDING_ROLES && WEDDING_ROLES.map((role, idx) => {
                const isOpen = openWeddingRole === role.id;
                return (
                  <div
                    key={role.id}
                    onMouseEnter={() => setOpenWeddingRole(role.id)}
                    onMouseLeave={() => setOpenWeddingRole(null)}
                    className={`glass-card rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden ${
                      isOpen
                        ? "border-amber-400/80 shadow-[0_12px_32px_rgba(212,186,140,0.18)] scale-[1.01]"
                        : "hover:border-amber-400/40"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleWeddingRole(role.id)}
                      className="w-full py-5 px-6 flex items-center justify-between text-left focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center space-x-4">
                        <span className={`font-mono text-xs font-bold transition-colors ${isOpen ? "text-amber-500 scale-110" : "text-chocolate-500 dark:text-night-dim"}`}>
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className={`font-serif text-lg sm:text-xl font-medium transition-colors ${isOpen ? "text-amber-700 dark:text-amber-300 font-semibold" : "text-chocolate-950 dark:text-cream-50"}`}>
                          {role.title}
                        </span>
                      </div>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${
                        isOpen 
                          ? "bg-amber-400 text-night-950 border-amber-300 rotate-180 shadow-sm" 
                          : "bg-white/40 dark:bg-white/5 border-chocolate-700/10 dark:border-white/10 text-chocolate-700 dark:text-cream-200"
                      }`}>
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm font-light leading-relaxed border-t border-chocolate-700/10 dark:border-white/10 animate-fade-in space-y-3">
                        <p className="text-chocolate-700 dark:text-night-muted">{role.description || role.desc}</p>
                        <div className="mt-4 pt-3 flex flex-wrap items-center gap-4 text-[11px] font-mono border-t border-chocolate-700/10 dark:border-white/10">
                          <span className="flex items-center space-x-1 text-amber-700 dark:text-amber-400 font-semibold">
                            <Check className="w-3.5 h-3.5" />
                            <span>Groomed &amp; Uniformed</span>
                          </span>
                          <span className="flex items-center space-x-1 text-amber-700 dark:text-amber-400 font-semibold">
                            <Check className="w-3.5 h-3.5" />
                            <span>Identity Verified</span>
                          </span>
                          <span className="flex items-center space-x-1 text-amber-700 dark:text-amber-400 font-semibold">
                            <Check className="w-3.5 h-3.5" />
                            <span>Pre-Shift Briefed</span>
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
      <section className="py-24 px-6 sm:px-8 lg:px-12 border-b border-chocolate-700/10 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Header info */}
            <div className="lg:col-span-4 space-y-6">
              <div className="sticky top-32 space-y-5">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-xs font-mono font-medium">
                  CHAPTER 02
                </span>
                <h2 className="editorial-heading text-3xl sm:text-4xl">
                  Corporate &amp; Expos
                </h2>
                <p className="text-base text-emerald-800 dark:text-emerald-300 font-serif italic">
                  Expos, activations, launches and conventions.
                </p>
                <p className="text-xs font-light leading-relaxed text-chocolate-700 dark:text-night-muted">
                  From high-throughput badge registration to stage show running, our 13 specialized corporate personnel ensure smooth coordination for conclaves, auto expos, tech summits, and brand popups.
                </p>
                <div className="pt-4">
                  <a
                    href="#calculator-section"
                    className="btn-primary w-full sm:w-auto text-center font-bold group inline-flex items-center justify-center space-x-2 px-6 py-3.5"
                  >
                    <span>Configure Corporate Crew</span>
                    <ArrowUpRight className="w-4 h-4 ml-1 text-night-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Expandable Accordion */}
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-chocolate-700/10 dark:border-white/10 text-xs uppercase tracking-wider font-semibold text-chocolate-500 dark:text-night-dim">
                <span>Operational Role</span>
                <span>Scope &amp; Deployment</span>
              </div>

              {CORPORATE_ROLES && CORPORATE_ROLES.map((role, idx) => {
                const isOpen = openCorporateRole === role.id;
                return (
                  <div
                    key={role.id}
                    onMouseEnter={() => setOpenCorporateRole(role.id)}
                    onMouseLeave={() => setOpenCorporateRole(null)}
                    className={`glass-card rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden ${
                      isOpen
                        ? "border-emerald-400/80 shadow-[0_12px_32px_rgba(52,211,153,0.18)] scale-[1.01]"
                        : "hover:border-emerald-400/40"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleCorporateRole(role.id)}
                      className="w-full py-5 px-6 flex items-center justify-between text-left focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center space-x-4">
                        <span className={`font-mono text-xs font-bold transition-colors ${isOpen ? "text-emerald-500 scale-110" : "text-chocolate-500 dark:text-night-dim"}`}>
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className={`font-serif text-lg sm:text-xl font-medium transition-colors ${isOpen ? "text-emerald-700 dark:text-emerald-300 font-semibold" : "text-chocolate-950 dark:text-cream-50"}`}>
                          {role.title}
                        </span>
                      </div>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${
                        isOpen 
                          ? "bg-emerald-500 text-night-950 border-emerald-400 rotate-180 shadow-sm" 
                          : "bg-white/40 dark:bg-white/5 border-chocolate-700/10 dark:border-white/10 text-chocolate-700 dark:text-cream-200"
                      }`}>
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm font-light leading-relaxed border-t border-chocolate-700/10 dark:border-white/10 animate-fade-in space-y-3">
                        <p className="text-chocolate-700 dark:text-night-muted">{role.description || role.desc}</p>
                        <div className="mt-4 pt-3 flex flex-wrap items-center gap-4 text-[11px] font-mono border-t border-chocolate-700/10 dark:border-white/10">
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

      {/* 4. MANPOWER ROSTER CALCULATOR SECTION */}
      <section id="calculator-section" className="py-24 px-6 sm:px-8 lg:px-12 border-b border-chocolate-700/10 dark:border-white/10 bg-cream-100/30 dark:bg-night-950/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <ManpowerCalculator />
        </div>
      </section>

      {/* 5. SECTOR SPECIALIZATION */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 border-b border-chocolate-700/10 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-800 dark:text-amber-300 text-xs font-mono font-medium">
              SECTOR SPECIALIZATION
            </span>
            <h2 className="editorial-heading text-4xl sm:text-5xl mt-4">
              Tailored for Delhi NCR's Diverse Event Ecosystem
            </h2>
            <p className="text-base font-light mt-3 text-chocolate-700 dark:text-night-muted">
              Different event categories demand distinct staffing mentalities. Hover over each sector to inspect our tailored operational blueprints.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Interactive List */}
            <div className="lg:col-span-7 space-y-4">
              {safeEventTypes.map((type, idx) => {
                const isHovered = hoveredEventType === idx;
                return (
                  <div
                    key={type.title || idx}
                    onMouseEnter={() => setHoveredEventType(idx)}
                    className={`p-6 glass-card rounded-2xl transition-all duration-300 cursor-pointer ${
                      isHovered
                        ? "border-amber-400 bg-amber-500/10 dark:bg-amber-400/10 pl-8 shadow-xl scale-[1.01]"
                        : "hover:border-amber-400/40"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <h3
                        className={`font-serif text-2xl sm:text-3xl transition-colors ${
                          isHovered ? "text-amber-700 dark:text-amber-300 font-bold" : "text-chocolate-950 dark:text-cream-50"
                        }`}
                      >
                        {type.title}
                      </h3>
                      <span className={`font-mono text-xs font-extrabold transition-colors ${isHovered ? "text-amber-500 scale-110" : "text-chocolate-500 dark:text-night-dim"}`}>
                        0{idx + 1}
                      </span>
                    </div>

                    <p className={`text-xs font-serif italic mt-1.5 transition-colors ${isHovered ? "text-amber-600 dark:text-amber-300" : "text-chocolate-600 dark:text-night-muted"}`}>
                      {type.subtitle}
                    </p>

                    {isHovered && (
                      <div className="mt-4 animate-fade-in space-y-3 pt-3 border-t border-amber-500/20">
                        <p className="text-xs font-light leading-relaxed text-chocolate-700 dark:text-night-muted">
                          {type.desc}
                        </p>
                        <div className="flex flex-wrap gap-2 pt-1">
                          {type.tags && type.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] uppercase font-mono tracking-wider px-3 py-1 bg-amber-500/10 text-amber-800 dark:text-amber-300 border border-amber-500/20 rounded-full"
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
              <div className="relative overflow-hidden glass-card rounded-3xl aspect-[4/5] shadow-2xl p-2 group">
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <img
                    key={currentEventType.image}
                    src={currentEventType.image}
                    alt={currentEventType.title}
                    className="w-full h-full object-cover animate-fade-in transition-all duration-700 scale-105 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-night-950/90 via-night-950/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-cream-100 space-y-1.5">
                    <span className="text-[10px] uppercase tracking-widest font-mono text-amber-400 font-bold">
                      Sector Blueprint
                    </span>
                    <h4 className="font-serif text-2xl font-normal text-cream-50">
                      {currentEventType.title}
                    </h4>
                    <p className="text-xs text-cream-300/80 font-light">
                      {currentEventType.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CONVERSION CTA */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-800 dark:text-amber-300 text-xs font-mono font-medium">
            CUSTOM ROSTER DEPLOYMENT
          </span>
          <h3 className="editorial-heading text-3xl sm:text-5xl">
            Need a tailored crew configuration for your event?
          </h3>
          <p className="text-sm font-light text-chocolate-700 dark:text-night-muted">
            Share your schedule, headcount requirements, and shift timings. We provide fully briefed personnel matching your exact venue standards.
          </p>
          <div className="pt-4">
            <Link to="/contact" className="btn-primary px-8 py-4 font-bold group inline-flex items-center justify-center space-x-2">
              <span>Request Manpower Consultation</span>
              <ArrowUpRight className="w-4 h-4 ml-1 text-night-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
