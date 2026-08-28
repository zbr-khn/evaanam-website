import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, UserCheck, Sparkles, Zap, UserPlus, Award, CheckCircle2 } from "lucide-react";
import OperationsTimeline from "../components/OperationsTimeline";
import StatCounter from "../components/StatCounter";
import { WHY_US_PILLARS } from "../data/evaanamData";

const PILLAR_ICONS = [
  Zap,          // 01 No Ghosting
  ShieldCheck,  // 02 Background Checked
  Sparkles,     // 03 Uniformed & Groomed
  UserPlus,     // 04 Rapid Replacement
  UserCheck,    // 05 Single POC
  Award         // 06 Venue Experience
];

export default function WhyUsPage() {
  return (
    <div className="animate-fade-in pt-28">
      {/* 1. DEDICATED PAGE INTRODUCTION HERO (BLEED A) */}
      <section className="bleed-b-to-a section-tone-a py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
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
        </div>
      </section>

      {/* 2. THE SIX REFINED PILLARS (BLEED A -> B) */}
      <section className="bleed-a-to-b section-tone-b py-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="micro-label text-amber-700 dark:text-amber-400 font-bold">CORE PROMISES</span>
            <h2 className="editorial-heading text-4xl sm:text-5xl text-chocolate-950 dark:text-cream-50 mt-2">
              Six Pillars of Operational Credibility
            </h2>
            <p className="text-sm text-chocolate-700 dark:text-night-muted font-light mt-2 max-w-xl">
              Why leading wedding planners, luxury hotels, and event producers in Delhi NCR trust EVAANAM with their highest-stakes floors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_US_PILLARS.map((pillar, idx) => {
              const Icon = PILLAR_ICONS[idx];
              return (
                <div
                  key={pillar.number}
                  className="p-8 sm:p-10 flex flex-col justify-between group rounded-sm bg-cream-100/90 dark:bg-night-800/90 border border-chocolate-700/15 dark:border-bronze-500/20 shadow-md hover:shadow-xl hover:border-amber-500/60 dark:hover:border-bronze-400/80 transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-sm font-bold text-amber-700 dark:text-amber-400">
                        {pillar.number}
                      </span>
                      <div className="w-10 h-10 rounded-sm bg-cream-200 dark:bg-night-750 flex items-center justify-center text-amber-700 dark:text-amber-400 group-hover:bg-brand-green dark:group-hover:bg-bronze-500 group-hover:text-cream-50 dark:group-hover:text-night-950 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="font-serif text-2xl text-chocolate-950 dark:text-cream-50 font-medium">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-chocolate-600/90 dark:text-night-muted font-light leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
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

      {/* 5. CTA (BLEED B -> A) */}
      <section className="bleed-b-to-a section-tone-a py-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="micro-label font-bold">READY TO DEPLOY</span>
          <h2 className="editorial-heading text-4xl sm:text-5xl">
            Experience structured event manpower.
          </h2>
          <p className="text-base font-light max-w-lg mx-auto">
            Book a consultation for your upcoming wedding or corporate gathering.
          </p>
          <div className="pt-2">
            <Link to="/contact" className="btn-primary">
              Request Crew Roster
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
