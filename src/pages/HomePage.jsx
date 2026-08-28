import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ChevronRight, Sparkles, Check, Crown, Briefcase, MessageSquare, Calculator } from "lucide-react";
import StatCounter from "../components/StatCounter";
import VenueMarquee from "../components/VenueMarquee";
import SocialSection from "../components/SocialSection";
import GeometricDivider from "../components/GeometricDivider";
import ExecutiveCarousel from "../components/ExecutiveCarousel";
import TestimonialMarquee from "../components/TestimonialMarquee";
import ScrollReveal from "../components/ScrollReveal";
import ContactFormSection from "../components/ContactFormSection";
import CalculatorModal from "../components/CalculatorModal";
import { COMPANY_INFO } from "../data/evaanamData";

export default function HomePage() {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  return (
    <div className="animate-fade-in">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (TONE A: Deep British Racing Green / Alabaster White)      */}
      {/* ========================================================================= */}
      <section className="section-tone-a relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-28 pb-16 px-6 sm:px-8 lg:px-12 overflow-hidden text-cream-100 border-b border-chocolate-700/15 dark:border-emerald-500/20">
        {/* Background Image with slow Ken Burns effect & luxury dark overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="./images/gallery-weddings/IMG-6449-JPG.jpg"
            alt="Luxury Wedding & Banquet Event Floor"
            className="w-full h-full object-cover object-center ken-burns opacity-35 dark:opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-night-950 via-night-950/75 to-night-950/85" />
          {/* Fine bronze decorative lines */}
          <div className="absolute top-0 left-12 bottom-0 w-[1px] bg-bronze-500/15 hidden lg:block" />
          <div className="absolute top-0 right-12 bottom-0 w-[1px] bg-bronze-500/15 hidden lg:block" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8 space-y-6">
              {/* Micro Eyebrow */}
              <div className="inline-flex items-center space-x-2.5 px-3 py-1.5 bg-night-900/90 border border-bronze-500/30 rounded-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-bronze-400"></span>
                <span className="micro-label text-bronze-300 font-bold">
                  Event Manpower &amp; Execution
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-cream-50 leading-[1.04] tracking-tight">
                The Right People <br />
                <span className="italic font-normal text-bronze-300">For Every Floor.</span>
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-cream-300/90 font-light max-w-2xl leading-relaxed">
                Trained, verified and professionally managed event crew for weddings, corporate events, exhibitions and large-scale experiences across Delhi NCR.
              </p>

              {/* CTAs */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3.5 sm:space-y-0 sm:space-x-4">
                <a
                  href="#contact-form-section"
                  className="btn-bronze group"
                >
                  <span>Request Manpower</span>
                  <ArrowUpRight className="w-4 h-4 ml-2 text-night-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* Hero Button: Roster Calculator opens modal directly */}
                <button
                  type="button"
                  onClick={() => setIsCalculatorOpen(true)}
                  className="inline-flex items-center justify-center px-7 py-3.5 border border-cream-200/30 text-cream-100 font-sans text-xs font-semibold uppercase tracking-[0.18em] transition-all hover:bg-cream-200 hover:text-chocolate-950 dark:hover:bg-night-800 dark:hover:text-cream-50 space-x-2 rounded-sm cursor-pointer shadow-sm hover:border-amber-400"
                >
                  <Calculator className="w-3.5 h-3.5 text-amber-300" />
                  <span>Roster Calculator</span>
                </button>
              </div>

              {/* Credibility Line */}
              <div className="pt-6 flex items-center space-x-2 text-xs font-sans tracking-wider text-bronze-400/90 font-medium">
                <span>200+ Crew Network</span>
                <span className="text-chocolate-600 dark:text-night-dim">·</span>
                <span>300+ Projects</span>
                <span className="text-chocolate-600 dark:text-night-dim">·</span>
                <span>30+ Premium Venues</span>
              </div>
            </div>

            {/* Hero Quick Badge Column */}
            <div className="lg:col-span-4 hidden lg:block">
              <div className="p-6 bg-night-900/80 backdrop-blur-md border border-bronze-500/30 text-cream-200 space-y-4 shadow-xl">
                <span className="micro-label text-bronze-300 font-bold">
                  OPERATIONAL COMMITMENT
                </span>
                <p className="font-serif text-xl italic text-cream-100 leading-snug">
                  "Structured workforce operations with verified stand-by personnel."
                </p>
                <div className="pt-2 border-t border-bronze-500/20 flex items-center justify-between text-xs text-cream-300/80 font-mono">
                  <span>NCR Floor Ready</span>
                  <span className="text-bronze-400 font-semibold">24/7 Dispatch</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. EXECUTIVE ENGAGEMENTS CAROUSEL (TONE B: Espresso Brown / Sandstone)     */}
      {/* ========================================================================= */}
      <section className="section-tone-b border-b border-chocolate-700/15 dark:border-bronze-500/20">
        <ScrollReveal variant="up" threshold={0.1}>
          <ExecutiveCarousel />
        </ScrollReveal>
      </section>

      {/* ========================================================================= */}
      {/* 3. STATS STRIP & PHILOSOPHY (TONE A: Racing Green / Alabaster White)       */}
      {/* ========================================================================= */}
      <section className="section-tone-a border-b border-chocolate-700/15 dark:border-emerald-500/20">
        <ScrollReveal variant="up" threshold={0.15}>
          <StatCounter light={true} />
        </ScrollReveal>

        <ScrollReveal variant="up" threshold={0.15}>
          <div className="py-24 px-6 sm:px-8 lg:px-12">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <span className="micro-label">THE EVAANAM PHILOSOPHY</span>
              <h2 className="editorial-heading text-4xl sm:text-5xl md:text-6xl">
                Manpower is easy to arrange. <br />
                <span className="italic text-emerald-700 dark:text-emerald-400">Reliable manpower is not.</span>
              </h2>
              <p className="text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
                In luxury hospitality, there is no second take. EVAANAM was founded to replace unvetted freelance chaos with structured, disciplined, and professionally supervised workforce operations.
              </p>
              <div className="pt-2">
                <Link
                  to="/why-us"
                  className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-semibold text-emerald-800 dark:text-emerald-400 hover:opacity-80 transition-opacity border-b border-emerald-500/40 pb-1"
                >
                  <span>Explore The Workforce Operations System™</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <GeometricDivider className="max-w-4xl mx-auto mt-16" label="OPERATIONAL DIVISIONS" />
          </div>
        </ScrollReveal>
      </section>

      {/* ========================================================================= */}
      {/* 4. TWO PRIMARY SERVICE VERTICALS (TONE B: Espresso Brown / Sandstone)      */}
      {/* ========================================================================= */}
      <section className="section-tone-b py-24 px-6 sm:px-8 lg:px-12 border-b border-chocolate-700/15 dark:border-bronze-500/20">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal variant="up">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <span className="micro-label">SPECIALIZED DIVISIONS</span>
                <h2 className="editorial-heading text-4xl sm:text-5xl mt-2">
                  Engineered for High-Pressure Floors
                </h2>
              </div>
              <Link
                to="/services"
                className="btn-secondary"
              >
                <span>View All 27 Roles</span>
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* SERVICE CARD 1: WEDDING HOSPITALITY */}
            <ScrollReveal variant="left" delay={100}>
              <div className="group relative rounded-sm p-6 sm:p-10 flex flex-col justify-between overflow-hidden bg-cream-100/90 dark:bg-night-800/90 border border-chocolate-700/15 dark:border-bronze-500/20 shadow-md hover:shadow-2xl hover:-translate-y-2.5 transition-all duration-500 ease-out hover:border-amber-500/60 dark:hover:border-bronze-400/80 h-full">
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-20 dark:group-hover:opacity-15 transition-opacity duration-700">
                  <img
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80"
                    alt="Luxury Wedding Hospitality"
                    className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cream-100 via-cream-100/80 to-transparent dark:from-night-800 dark:via-night-800/80" />
                </div>

                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-amber-400/20 dark:via-bronze-400/20 to-transparent pointer-events-none" />
                <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-transparent group-hover:bg-gradient-to-r group-hover:from-amber-400 group-hover:via-bronze-500 group-hover:to-amber-400 transition-all duration-500" />

                <div className="space-y-6 relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 rounded-full bg-amber-500 inline-block group-hover:animate-ping" />
                      <span className="font-mono text-xs font-semibold text-amber-700 dark:text-amber-400">
                        01 / WEDDING HOSPITALITY
                      </span>
                    </div>

                    <div className="flex items-center space-x-1.5 px-3 py-1 bg-amber-500/10 dark:bg-amber-400/10 border border-amber-500/30 text-amber-800 dark:text-amber-300 rounded-full text-[10.5px] font-mono font-semibold transform group-hover:scale-105 group-hover:-translate-y-1 transition-all duration-300 shadow-sm">
                      <Crown className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                      <span>14 Specialist Roles</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-serif text-3xl sm:text-4xl text-chocolate-950 dark:text-cream-50 font-medium group-hover:text-amber-700 dark:group-hover:text-bronze-350 transition-colors duration-300">
                      Wedding Hospitality
                    </h3>
                    <p className="text-sm text-chocolate-600 dark:text-bronze-300/90 font-serif italic mt-1">
                      Five-star floors, multi-day functions, VIP coverage.
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-chocolate-600/90 dark:text-night-muted font-light leading-relaxed">
                    From VIP personal shadows and traditional welcome hostesses to round-the-clock helpdesks and floor runners, our wedding teams blend warmth with operational precision.
                  </p>

                  <div className="space-y-2 pt-1">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-chocolate-400 dark:text-night-dim block">
                      Featured Floor Roles
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { name: "VIP Shadows", count: "Personal VIP" },
                        { name: "Welcome Hostesses", count: "Groomed" },
                        { name: "Helpdesk Crew", count: "24/7 Desk" },
                        { name: "Floor Runners", count: "Agile" },
                        { name: "Banquet Stewards", count: "Silver Service" },
                      ].map((tag) => (
                        <span
                          key={tag.name}
                          className="text-[11px] px-3 py-1.5 bg-cream-200 dark:bg-night-850 text-chocolate-800 dark:text-cream-100 border border-chocolate-700/10 dark:border-bronze-500/20 rounded-sm font-medium transition-all duration-300 group-hover:border-amber-500/40 group-hover:bg-cream-50 dark:group-hover:bg-night-750 group-hover:shadow-sm"
                        >
                          {tag.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-3.5 bg-amber-500/5 dark:bg-night-750/90 border border-amber-500/20 rounded text-xs font-sans text-chocolate-700 dark:text-cream-200 flex items-center justify-between opacity-90 group-hover:opacity-100 group-hover:border-amber-500/50 transition-all duration-300">
                    <div className="flex items-center space-x-2 text-amber-700 dark:text-amber-300 font-semibold text-[11px]">
                      <Check className="w-3.5 h-3.5 text-amber-600" />
                      <span>Groomed · Verified · Pre-Shift Briefed</span>
                    </div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-amber-800 dark:text-amber-400">
                      Floor Ready
                    </span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-chocolate-700/10 dark:border-night-700 relative z-10">
                  <Link
                    to="/services"
                    className="w-full py-3.5 px-5 bg-cream-200 dark:bg-night-750 border-2 border-chocolate-700/30 dark:border-bronze-500/40 rounded-sm flex items-center justify-between text-xs uppercase tracking-[0.2em] font-bold text-chocolate-950 dark:text-cream-50 group-hover:bg-brand-green dark:group-hover:bg-bronze-500 group-hover:text-cream-50 dark:group-hover:text-night-950 group-hover:border-transparent transition-all duration-300 shadow-sm"
                  >
                    <span>Explore 14 Wedding Roles</span>
                    <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* SERVICE CARD 2: CORPORATE & EXPOS */}
            <ScrollReveal variant="right" delay={200}>
              <div className="group relative rounded-sm p-8 sm:p-10 flex flex-col justify-between overflow-hidden bg-cream-100/90 dark:bg-night-800/90 border border-chocolate-700/15 dark:border-bronze-500/20 shadow-md hover:shadow-2xl hover:-translate-y-2.5 transition-all duration-500 ease-out hover:border-emerald-500/60 dark:hover:border-emerald-400/80 h-full">
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-20 dark:group-hover:opacity-15 transition-opacity duration-700">
                  <img
                    src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80"
                    alt="Corporate Summits & Expos"
                    className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cream-100 via-cream-100/80 to-transparent dark:from-night-800 dark:via-night-800/80" />
                </div>

                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-emerald-400/20 dark:via-emerald-400/20 to-transparent pointer-events-none" />
                <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:via-teal-500 group-hover:to-emerald-400 transition-all duration-500" />

                <div className="space-y-6 relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block group-hover:animate-ping" />
                      <span className="font-mono text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                        02 / CORPORATE &amp; EXPOS
                      </span>
                    </div>

                    <div className="flex items-center space-x-1.5 px-3 py-1 bg-emerald-500/10 dark:bg-emerald-400/10 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300 rounded-full text-[10.5px] font-mono font-semibold transform group-hover:scale-105 group-hover:-translate-y-1 transition-all duration-300 shadow-sm">
                      <Briefcase className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span>13 Specialist Roles</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-serif text-3xl sm:text-4xl text-chocolate-950 dark:text-cream-50 font-medium group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors duration-300">
                      Corporate &amp; Expos
                    </h3>
                    <p className="text-sm text-chocolate-600 dark:text-bronze-300/90 font-serif italic mt-1">
                      Expos, activations, launches and conventions.
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-chocolate-600/90 dark:text-night-muted font-light leading-relaxed">
                    High-throughput badge registration, C-suite lounge hostesses, stage show runners, brand ambassadors, and technical production supervisors for premier business events.
                  </p>

                  <div className="space-y-2 pt-1">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-chocolate-400 dark:text-night-dim block">
                      Featured Summit Roles
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { name: "Registration Desks", count: "QR Check-in" },
                        { name: "Show Runners", count: "Stage & AV" },
                        { name: "Brand Ambassadors", count: "Bilingual" },
                        { name: "Stall Crew", count: "Lead Capture" },
                        { name: "Floor Supervisors", count: "Multi-Hall" },
                      ].map((tag) => (
                        <span
                          key={tag.name}
                          className="text-[11px] px-3 py-1.5 bg-cream-200 dark:bg-night-850 text-chocolate-800 dark:text-cream-100 border border-chocolate-700/10 dark:border-bronze-500/20 rounded-sm font-medium transition-all duration-300 group-hover:border-emerald-500/40 group-hover:bg-cream-50 dark:group-hover:bg-night-750 group-hover:shadow-sm"
                        >
                          {tag.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-3.5 bg-emerald-500/5 dark:bg-night-750/90 border border-emerald-500/20 rounded text-xs font-sans text-chocolate-700 dark:text-cream-200 flex items-center justify-between opacity-90 group-hover:opacity-100 group-hover:border-emerald-500/50 transition-all duration-300">
                    <div className="flex items-center space-x-2 text-emerald-700 dark:text-emerald-300 font-semibold text-[11px]">
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Tech-App Savvy · Articulate · Rapid Roster</span>
                    </div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-emerald-800 dark:text-emerald-400">
                      High Throughput
                    </span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-chocolate-700/10 dark:border-night-700 relative z-10">
                  <Link
                    to="/services"
                    className="w-full py-3.5 px-5 bg-cream-200 dark:bg-night-750 border-2 border-chocolate-700/30 dark:border-bronze-500/40 rounded-sm flex items-center justify-between text-xs uppercase tracking-[0.2em] font-bold text-chocolate-950 dark:text-cream-50 group-hover:bg-brand-green dark:group-hover:bg-bronze-500 group-hover:text-cream-50 dark:group-hover:text-night-950 group-hover:border-transparent transition-all duration-300 shadow-sm"
                  >
                    <span>Explore 13 Corporate Roles</span>
                    <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. CONTACT & REQUISITION FORM SECTION (TONE A: Racing Green / Alabaster White) */}
      {/* ========================================================================= */}
      <section className="section-tone-a py-24 px-6 sm:px-8 lg:px-12 border-b border-chocolate-700/15 dark:border-emerald-500/20">
        <ScrollReveal variant="up" threshold={0.08}>
          <ContactFormSection />
        </ScrollReveal>
      </section>

      {/* ========================================================================= */}
      {/* 6. OPERATIONAL ASSURANCE BANNER (TONE B: Espresso Brown / Sandstone)       */}
      {/* ========================================================================= */}
      <section className="section-tone-b border-b border-chocolate-700/15 dark:border-bronze-500/20">
        <ScrollReveal variant="scale" threshold={0.15}>
          <div className="relative h-[480px] sm:h-[550px] flex items-center justify-center overflow-hidden text-center px-6">
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src="./images/gallery-corporate/IMG-20250419-WA0011-jpg.jpg"
                alt="Event Floor in Motion"
                className="w-full h-full object-cover object-center ken-burns opacity-30 dark:opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night-950/90 via-night-950/60 to-night-950/90" />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto space-y-6 text-cream-100">
              <span className="micro-label text-amber-400 font-bold">OPERATIONAL ASSURANCE</span>
              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light leading-snug">
                From first arrival to final departure, <br />
                <span className="italic text-amber-300">the floor stays covered.</span>
              </h3>
              <p className="text-xs sm:text-sm text-cream-300/90 font-light tracking-wide max-w-xl mx-auto">
                Zero last-minute dropouts. Verified replacements on standby. A single point of coordination for your entire production team.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ========================================================================= */}
      {/* 7. VENUE FOOTPRINT (TONE A: Racing Green / Alabaster White)                */}
      {/* ========================================================================= */}
      <section className="section-tone-a py-16 border-b border-chocolate-700/15 dark:border-emerald-500/20">
        <ScrollReveal variant="up" threshold={0.12}>
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="micro-label">DEPLOYMENT FOOTPRINT</span>
              <h3 className="editorial-heading text-2xl sm:text-3xl font-medium mt-1">
                Experienced where the standard is already high.
              </h3>
            </div>
            <Link
              to="/venues"
              className="inline-flex items-center space-x-2 px-4 py-2 bg-cream-200/90 dark:bg-night-800 border-2 border-chocolate-700/30 dark:border-emerald-500/40 rounded-sm text-xs uppercase tracking-[0.2em] font-bold text-chocolate-950 dark:text-cream-50 hover:bg-brand-green dark:hover:bg-bronze-500 hover:text-cream-50 dark:hover:text-night-950 hover:border-transparent transition-all shadow-sm"
            >
              <span>Explore 40+ Venues</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <VenueMarquee />
        </ScrollReveal>
      </section>

      {/* ========================================================================= */}
      {/* 8. TESTIMONIALS (TONE B: Espresso Brown / Sandstone)                       */}
      {/* ========================================================================= */}
      <section className="section-tone-b py-20 border-b border-chocolate-700/15 dark:border-bronze-500/20">
        <ScrollReveal variant="up" threshold={0.12}>
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-8 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div>
              <span className="micro-label text-amber-700 dark:text-amber-400 font-bold">CLIENT ENDORSEMENTS &amp; REVIEWS</span>
              <h2 className="editorial-heading text-3xl sm:text-4xl md:text-5xl mt-1">
                500+ Events Delivered – <span className="italic text-amber-700 dark:text-amber-400">100+ Happy Clients</span>
              </h2>
              <p className="text-xs sm:text-sm font-light mt-1 max-w-xl">
                Authentic feedback from corporate organizers, luxury wedding planners, and exhibition managers.
              </p>
            </div>
            
            <div className="flex items-center space-x-2 px-3.5 py-2 bg-cream-100/80 dark:bg-night-800/80 border border-chocolate-700/10 dark:border-bronze-500/20 rounded-sm">
              <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400">★★★★★</span>
              <span className="text-xs font-mono font-semibold text-chocolate-900 dark:text-cream-100">
                5.0 / 5.0 Rating
              </span>
            </div>
          </div>

          <TestimonialMarquee />
        </ScrollReveal>
      </section>

      {/* ========================================================================= */}
      {/* 9. SOCIAL JOURNEY (TONE A: Racing Green / Alabaster White)                 */}
      {/* ========================================================================= */}
      <section className="section-tone-a border-b border-chocolate-700/15 dark:border-emerald-500/20">
        <ScrollReveal variant="up" threshold={0.12}>
          <SocialSection showHeader={true} />
        </ScrollReveal>
      </section>

      {/* ========================================================================= */}
      {/* 10. MEET EVA SPOTLIGHT (TONE B: Espresso Brown / Sandstone)                */}
      {/* ========================================================================= */}
      <section className="section-tone-b py-20 px-6 sm:px-8 lg:px-12 border-b border-chocolate-700/15 dark:border-bronze-500/20">
        <ScrollReveal variant="scale" threshold={0.12}>
          <div className="max-w-7xl mx-auto">
            <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-brand-green via-night-900 to-night-950 border border-bronze-500/30 p-8 sm:p-12 shadow-2xl text-cream-100">
              <div className="absolute top-0 right-0 w-96 h-96 bg-bronze-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Column: Information & Brand Pitch */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="inline-flex items-center space-x-2 px-3 py-1 bg-night-900/90 border border-bronze-400/40 rounded-full text-amber-300">
                    <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                    <span className="text-[10px] font-mono uppercase tracking-widest font-semibold">
                      AI Operations Concierge · 24/7
                    </span>
                  </div>

                  <h2 className="editorial-heading text-3xl sm:text-4xl md:text-5xl text-cream-50 leading-tight">
                    Meet <span className="italic text-amber-300">Eva</span> — Your Instant Staffing &amp; Operations Assistant.
                  </h2>

                  <p className="text-xs sm:text-sm text-cream-200/90 font-light leading-relaxed max-w-xl">
                    Planning an event in Delhi NCR or pan-India? Eva estimates your exact crew headcounts, verifies venue logistics across 40+ five-star hotels, and transfers structured briefing requisitions directly to our on-duty WhatsApp dispatch coordinators.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    <div className="p-3 bg-night-850/80 border border-bronze-500/20 rounded-sm">
                      <p className="text-[11px] font-bold text-cream-50">⚡ Instant Headcounts</p>
                      <p className="text-[10px] text-cream-300/70 font-light mt-0.5">Calculates stewards, VIP shadows &amp; runners</p>
                    </div>
                    <div className="p-3 bg-night-850/80 border border-bronze-500/20 rounded-sm">
                      <p className="text-[11px] font-bold text-cream-50">📍 40+ Venues</p>
                      <p className="text-[10px] text-cream-300/70 font-light mt-0.5">Taj, ITC, Leela &amp; Pragati Maidan ready</p>
                    </div>
                    <div className="p-3 bg-night-850/80 border border-bronze-500/20 rounded-sm">
                      <p className="text-[11px] font-bold text-cream-50">💬 1-Click WhatsApp</p>
                      <p className="text-[10px] text-cream-300/70 font-light mt-0.5">Pre-formatted roster briefing sent in 1 tap</p>
                    </div>
                  </div>

                  <div className="pt-3 flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => window.dispatchEvent(new CustomEvent("open-eva-chat"))}
                      className="px-6 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-night-950 rounded-sm font-bold text-xs uppercase tracking-wider shadow-lg flex items-center space-x-2 transition-all duration-300 hover:scale-105"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Chat with Eva Now</span>
                    </button>

                    <a
                      href="https://wa.me/919310039929?text=Hello%20Eva%20%26%20EVAANAM%20Team,%20I%20would%20like%20to%20consult%20on%20manpower%20staffing%20for%20an%20upcoming%20event."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3.5 bg-cream-100/10 hover:bg-cream-100/20 text-cream-100 border border-bronze-500/40 rounded-sm font-semibold text-xs uppercase tracking-wider transition-all duration-300 flex items-center space-x-2"
                    >
                      <span>Open Direct WhatsApp</span>
                      <ArrowUpRight className="w-4 h-4 text-bronze-400" />
                    </a>
                  </div>
                </div>

                {/* Right Column: Visual Mockup Card */}
                <div className="lg:col-span-5 flex justify-center">
                  <div
                    onClick={() => window.dispatchEvent(new CustomEvent("open-eva-chat"))}
                    className="w-full max-w-sm bg-night-900/90 border border-bronze-500/40 rounded-lg p-5 shadow-2xl space-y-4 cursor-pointer hover:border-amber-400/70 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between border-b border-chocolate-700/30 pb-3">
                      <div className="flex items-center space-x-2.5">
                        <div className="w-8 h-8 rounded-full bg-bronze-500/20 border border-bronze-400/40 flex items-center justify-center text-amber-300">
                          <Sparkles className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-cream-50 flex items-center space-x-1">
                            <span>Eva</span>
                            <span className="text-[8px] font-mono px-1 py-0.2 bg-amber-400/20 text-amber-300 rounded font-bold">AI</span>
                          </h4>
                          <p className="text-[9px] font-mono text-emerald-400">● Active Dispatch Concierge</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-bronze-400 uppercase tracking-widest group-hover:text-amber-300 transition-colors">
                        Tap to Chat →
                      </span>
                    </div>

                    <div className="space-y-2.5 text-xs">
                      <div className="p-3 bg-night-800/90 rounded text-cream-200 text-[11px] leading-relaxed border border-chocolate-700/20">
                        "Hi! I can calculate the exact number of stewards, hostesses, and supervisors needed for your banquet floor. Where is your event taking place?"
                      </div>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        <span className="text-[10px] px-2.5 py-1 bg-amber-500/20 text-amber-200 border border-amber-500/40 rounded-full font-mono">
                          ITC Maurya / Taj Palace
                        </span>
                        <span className="text-[10px] px-2.5 py-1 bg-night-800 text-cream-300 border border-chocolate-700/30 rounded-full font-mono">
                          Yashobhoomi / Expo
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ========================================================================= */}
      {/* 11. FINAL CALL TO CONVERSATION (TONE A: Racing Green / Alabaster White)    */}
      {/* ========================================================================= */}
      <section className="section-tone-a py-24 px-6 sm:px-8 lg:px-12">
        <ScrollReveal variant="up" threshold={0.15}>
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <span className="micro-label">START A CONVERSATION</span>
            <h2 className="editorial-heading text-4xl sm:text-5xl lg:text-6xl">
              Planning an event? <br />
              <span className="italic text-emerald-700 dark:text-emerald-400">Let's build your team.</span>
            </h2>
            <p className="text-base font-light max-w-xl mx-auto leading-relaxed">
              Tell us your venue, event dates, and crew requirements. Our operations desk will prepare customized crew profiles for your event.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="#contact-form-section"
                className="btn-primary px-10 py-4 text-xs font-bold"
              >
                Request Manpower
              </a>
              <a
                href={`tel:${COMPANY_INFO.phones[0].number}`}
                className="text-xs uppercase tracking-[0.2em] font-semibold text-emerald-900 dark:text-emerald-300 hover:opacity-80 transition-opacity"
              >
                Or Call Operations: {COMPANY_INFO.phones[0].display}
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ========================================================================= */}
      {/* INTERACTIVE ROSTER CALCULATOR MODAL (Triggered via Hero Button)            */}
      {/* ========================================================================= */}
      <CalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
      />
    </div>
  );
}
