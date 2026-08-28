import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, UserCheck, Sparkles, Zap, UserPlus, Award, CheckCircle2, Radio, Clock, ArrowUpRight } from "lucide-react";
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
      {/* 1. DEDICATED PAGE INTRODUCTION HERO (BLEED A) */}
      <section className="bleed-b-to-a section-tone-a py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal variant="up">
            <div className="max-w-3xl space-y-6">
              <span className="micro-label font-bold">WHY EVAANAM</span>
              <h1 className="editorial-heading text-5xl sm:text-6xl md:text-7xl">
                Manpower is easy to arrange. <br />
                <span className="italic text-emerald-700 dark:text-emerald-400">Reliable manpower is not.</span>
              </h1>
              <p className="text-base sm:text-lg font-light leading-relaxed">
                In luxury hospitality and live corporate experiences, a single missing usher or unbriefed steward disrupts the entire guest journey. We engineer reliability into every deployment.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. THE SIX REFINED PILLARS (BLEED A -> B) */}
      <section className="bleed-a-to-b section-tone-b py-24 px-6 sm:px-8 lg:px-12">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_US_PILLARS.map((pillar, idx) => {
              const Icon = PILLAR_ICONS[idx];
              return (
                <ScrollReveal key={pillar.number} variant="up" delay={idx * 80}>
                  <div
                    className="p-8 sm:p-10 flex flex-col justify-between group rounded-sm bg-cream-100/90 dark:bg-night-800/90 border-2 border-chocolate-700/15 dark:border-bronze-500/20 shadow-md hover:shadow-2xl hover:border-amber-500/70 dark:hover:border-bronze-400/80 hover:bg-cream-50 dark:hover:bg-night-750 hover:-translate-y-1.5 transition-all duration-400 h-full cursor-pointer"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-sm font-extrabold text-amber-700 dark:text-amber-400">
                          {pillar.number}
                        </span>
                        <div className="w-10 h-10 rounded-sm bg-cream-200 dark:bg-night-750 border border-chocolate-700/10 dark:border-bronze-500/20 flex items-center justify-center text-amber-700 dark:text-amber-400 group-hover:bg-brand-green dark:group-hover:bg-bronze-500 group-hover:text-cream-50 dark:group-hover:text-night-950 group-hover:scale-110 transition-all duration-300 shadow-sm">
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>
                      <h3 className="font-serif text-2xl text-chocolate-950 dark:text-cream-50 font-medium group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-chocolate-600/90 dark:text-night-muted font-light leading-relaxed">
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

      {/* 3. OPERATIONAL TIMELINE (BLEED B -> A) */}
      <section className="bleed-b-to-a section-tone-a py-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <OperationsTimeline />
        </div>
      </section>

      {/* 4. STATS STRIP (BLEED A -> B) */}
      <section className="bleed-a-to-b section-tone-b">
        <StatCounter />
      </section>

      {/* 5. CREW PEDIGREE & READY TO DEPLOY SECTION (BLEED B -> A) */}
      <section className="bleed-b-to-a section-tone-a py-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto space-y-16">
          
          <ScrollReveal variant="up">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <span className="micro-label font-bold">READY TO DEPLOY</span>
              <h2 className="editorial-heading text-4xl sm:text-5xl md:text-6xl">
                Experience structured event manpower.
              </h2>
              <p className="text-base sm:text-lg font-light leading-relaxed">
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
                  <div className="p-7 flex flex-col justify-between group rounded-sm bg-cream-100/95 dark:bg-night-800/95 border-2 border-chocolate-700/15 dark:border-bronze-500/25 shadow-md hover:shadow-2xl hover:border-amber-500/70 dark:hover:border-bronze-400/80 hover:bg-cream-50 dark:hover:bg-night-750 hover:-translate-y-1.5 transition-all duration-300 h-full">
                    <div className="space-y-3.5">
                      <div className="w-10 h-10 rounded-sm bg-cream-200 dark:bg-night-750 border border-chocolate-700/10 dark:border-bronze-500/20 flex items-center justify-center text-amber-700 dark:text-amber-400 group-hover:bg-brand-green dark:group-hover:bg-bronze-500 group-hover:text-cream-50 dark:group-hover:text-night-950 group-hover:scale-110 transition-all duration-300 shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[9.5px] uppercase font-mono tracking-widest font-extrabold text-amber-700 dark:text-amber-400 block">
                        {card.badge}
                      </span>
                      <h4 className="font-serif text-xl font-medium text-chocolate-950 dark:text-cream-50 group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors">
                        {card.title}
                      </h4>
                      <p className="text-xs text-chocolate-600/90 dark:text-night-muted font-light leading-relaxed">
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
              <Link to="/contact" className="btn-primary group">
                <span>Request Crew Roster</span>
                <ArrowUpRight className="w-4 h-4 ml-2 text-bronze-300 dark:text-night-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
