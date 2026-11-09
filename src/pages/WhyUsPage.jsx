import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, UserCheck, Sparkles, Zap, UserPlus, Award, Radio, Clock, ArrowUpRight, CheckCircle2 } from "lucide-react";
import OperationsTimeline from "../components/OperationsTimeline";
import StatCounter from "../components/StatCounter";
import ScrollReveal from "../components/ScrollReveal";
import { WHY_US_PILLARS } from "../data/evaanamData";

const PILLAR_ICONS = [
  Zap,          // 01 No Ghosting
  ShieldCheck,  // 02 Background Checked
  Sparkles,     // 03 Uniformed & Groomed
  UserPlus,     // 04 Rapid Replacement
  UserCheck,    // 05 Single POC
  Award         // 06 Venue Experience
];

const CREW_READINESS_PILLARS = [
  {
    icon: Sparkles,
    badge: "GROOMING STANDARD",
    title: "Impeccable Grooming & Etiquette",
    desc: "Strict black-tie & ethnic uniform standards, groomed posture, articulate multilingual diction, and 5-star hospitality decorum.",
  },
  {
    icon: Radio,
    badge: "MUSTER BRIEFING",
    title: "60-Min Pre-Call Muster & Radio Sync",
    desc: "Crews arrive 1 hour early for floor inspection, station allocation, and two-way radio channel synchronization before guests arrive.",
  },
  {
    icon: ShieldCheck,
    badge: "ZERO GHOSTING",
    title: "Active Standby Bench Backup",
    desc: "Every deployment maintains a dedicated, pre-briefed backup bench. If any personal emergency arises, replacement arrives immediately.",
  },
  {
    icon: UserCheck,
    badge: "100% VETTED",
    title: "Verified Identity & Police Clearances",
    desc: "Full biometric verification and background audits across our 200+ roster, trusted across 40+ five-star properties in Delhi NCR.",
  },
];

export default function WhyUsPage() {
  return (
    <div className="animate-fade-in pt-28">
      {/* 1. HERO SECTION */}
      <section className="relative py-20 px-6 sm:px-8 lg:px-12 border-b border-chocolate-700/10 dark:border-white/10 overflow-hidden">
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-amber-500/10 dark:bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto">
          <ScrollReveal variant="up">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 dark:bg-amber-400/10 border border-amber-500/20 text-amber-800 dark:text-amber-300 text-xs font-mono font-medium">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>ZERO-COMPROMISE OPERATIONAL RELIABILITY</span>
              </div>
              <h1 className="editorial-heading text-5xl sm:text-6xl md:text-7xl">
                Manpower is easy to arrange. <br />
                <span className="italic text-glow-amber">Reliable manpower is not.</span>
              </h1>
              <p className="text-base sm:text-lg font-light leading-relaxed text-chocolate-700 dark:text-night-muted">
                In luxury hospitality and live corporate experiences, a single missing usher or unbriefed steward disrupts the entire guest journey. We engineer reliability, grooming, and accountability into every single roster.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. THE SIX REFINED PILLARS */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 border-b border-chocolate-700/10 dark:border-white/10 bg-cream-100/30 dark:bg-night-950/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal variant="up">
            <div className="mb-16">
              <span className="micro-label text-amber-700 dark:text-amber-400 font-bold">CORE PROMISES</span>
              <h2 className="editorial-heading text-4xl sm:text-5xl text-chocolate-950 dark:text-cream-50 mt-2">
                Six Pillars of Operational Credibility
              </h2>
              <p className="text-sm text-chocolate-700 dark:text-night-muted font-light mt-2 max-w-xl">
                Why leading wedding planners, luxury hotels, and event producers in Delhi NCR trust EVAANAM with their highest-stakes floors.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_US_PILLARS.map((pillar, idx) => {
              const Icon = PILLAR_ICONS[idx];
              return (
                <ScrollReveal key={pillar.number} variant="up" delay={idx * 80}>
                  <div className="glass-card glass-card-hover rounded-2xl p-8 flex flex-col justify-between group h-full">
                    <div className="space-y-5">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-sm font-extrabold text-amber-600 dark:text-amber-400">
                          {pillar.number}
                        </span>
                        <div className="w-11 h-11 rounded-xl bg-amber-500/10 dark:bg-white/5 border border-amber-500/20 dark:border-white/10 flex items-center justify-center text-amber-600 dark:text-amber-400 group-hover:bg-amber-500 group-hover:text-night-950 group-hover:scale-105 transition-all duration-300">
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>
                      <h3 className="font-serif text-2xl text-chocolate-950 dark:text-cream-50 font-medium group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-chocolate-600 dark:text-night-muted font-light leading-relaxed">
                        {pillar.description || pillar.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. OPERATIONAL TIMELINE */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 border-b border-chocolate-700/10 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <OperationsTimeline />
        </div>
      </section>

      {/* 4. STATS STRIP */}
      <section className="border-b border-chocolate-700/10 dark:border-white/10 bg-cream-100/50 dark:bg-night-950/50 backdrop-blur-md">
        <StatCounter />
      </section>

      {/* 5. CREW PEDIGREE & READY TO DEPLOY SECTION */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 relative overflow-hidden">
        <div className="max-w-6xl mx-auto space-y-16">
          <ScrollReveal variant="up">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-800 dark:text-amber-300 text-xs font-mono font-medium">
                READY TO DEPLOY
              </span>
              <h2 className="editorial-heading text-4xl sm:text-5xl md:text-6xl">
                Experience structured event manpower.
              </h2>
              <p className="text-base sm:text-lg font-light leading-relaxed text-chocolate-700 dark:text-night-muted">
                Book a consultation for your upcoming wedding or corporate gathering. Here is what guarantees floor excellence on day one:
              </p>
            </div>
          </ScrollReveal>

          {/* 4 Crew Experience & Readiness Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CREW_READINESS_PILLARS.map((card, idx) => {
              const Icon = card.icon;
              return (
                <ScrollReveal key={card.title} variant="up" delay={idx * 100}>
                  <div className="glass-card glass-card-hover rounded-2xl p-7 flex flex-col justify-between group h-full">
                    <div className="space-y-4">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/10 dark:bg-white/5 border border-amber-500/20 dark:border-white/10 flex items-center justify-center text-amber-600 dark:text-amber-400 group-hover:bg-amber-500 group-hover:text-night-950 group-hover:scale-105 transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[9.5px] uppercase font-mono tracking-widest font-extrabold text-amber-600 dark:text-amber-400 block">
                        {card.badge}
                      </span>
                      <h4 className="font-serif text-xl font-medium text-chocolate-950 dark:text-cream-50 group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">
                        {card.title}
                      </h4>
                      <p className="text-xs text-chocolate-600 dark:text-night-muted font-light leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal variant="up" delay={200}>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/contact" className="btn-primary group px-8 py-4">
                <span>Request Crew Roster</span>
                <ArrowUpRight className="w-4 h-4 ml-2 text-night-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
