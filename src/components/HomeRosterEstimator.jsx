import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Users, Calculator, Sparkles, ArrowUpRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { WhatsappIcon } from "./SocialIcons";

export default function HomeRosterEstimator() {
  const [eventType, setEventType] = useState("wedding"); // 'wedding' | 'corporate' | 'expo'
  const [guestCount, setGuestCount] = useState(450);

  // Dynamic roster calculations based on industry standard guest-to-crew ratios
  const calculation = useMemo(() => {
    let stewards = 0;
    let hostesses = 0;
    let shadows = 0;
    let supervisors = 0;
    let runners = 0;

    if (eventType === "wedding") {
      stewards = Math.max(6, Math.round(guestCount / 35));
      hostesses = guestCount < 300 ? 4 : guestCount < 700 ? 6 : 10;
      shadows = guestCount < 500 ? 2 : 4;
      supervisors = Math.max(1, Math.ceil(guestCount / 400));
      runners = Math.max(2, Math.ceil(guestCount / 350));
    } else if (eventType === "corporate") {
      stewards = Math.max(4, Math.round(guestCount / 50));
      hostesses = guestCount < 300 ? 4 : guestCount < 800 ? 8 : 12; // Registration & Ushering
      shadows = guestCount < 500 ? 1 : 2; // Speaker / VIP escort
      supervisors = Math.max(1, Math.ceil(guestCount / 350));
      runners = Math.max(2, Math.ceil(guestCount / 250));
    } else {
      stewards = Math.max(4, Math.round(guestCount / 60));
      hostesses = Math.max(4, Math.round(guestCount / 100)); // Booth & Crowd Leads
      shadows = 1;
      supervisors = Math.max(1, Math.ceil(guestCount / 500));
      runners = Math.max(2, Math.ceil(guestCount / 300));
    }

    const total = stewards + hostesses + shadows + supervisors + runners;

    return {
      stewards,
      hostesses,
      shadows,
      supervisors,
      runners,
      total,
    };
  }, [eventType, guestCount]);

  const whatsappMessage = encodeURIComponent(
    `Hello EVAANAM Operations Team, I am planning a ${
      eventType === "wedding" ? "Luxury Wedding" : eventType === "corporate" ? "Corporate Summit" : "Trade Expo"
    } for approximately ${guestCount} attendees in Delhi NCR. Roster estimate: ${calculation.total} personnel (${calculation.stewards} Stewards, ${calculation.hostesses} Hostesses, ${calculation.shadows} Shadows, ${calculation.supervisors} Supervisors, ${calculation.runners} Runners). Please provide availability and quote.`
  );

  return (
    <div className="w-full relative">
      <div className="backdrop-blur-2xl bg-cream-100/60 dark:bg-night-900/60 border border-chocolate-700/15 dark:border-white/10 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_12px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_16px_48px_rgba(0,0,0,0.4)]">
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-chocolate-700/10 dark:border-white/10">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-amber-500/15 border border-amber-500/30 rounded-full text-amber-700 dark:text-amber-300 text-xs font-mono font-bold mb-2">
              <Calculator className="w-3.5 h-3.5" />
              <span>LIVE WORKFORCE SIZING</span>
            </div>
            <h3 className="editorial-heading text-3xl sm:text-4xl text-chocolate-950 dark:text-cream-50">
              Interactive Crew Roster Estimator
            </h3>
            <p className="text-xs sm:text-sm text-chocolate-600 dark:text-night-muted font-light mt-1">
              Select your event format and attendee scale for instant Five-Star ratio recommendations.
            </p>
          </div>

          {/* Event Format Tabs */}
          <div className="flex items-center gap-1.5 p-1.5 bg-cream-200/80 dark:bg-night-800/80 rounded-2xl border border-chocolate-700/10 dark:border-white/10 shrink-0 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setEventType("wedding")}
              className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all ${
                eventType === "wedding"
                  ? "bg-brand-green dark:bg-bronze-500 text-cream-50 dark:text-night-950 shadow-md font-bold"
                  : "text-chocolate-700 dark:text-night-muted hover:text-amber-600"
              }`}
            >
              💍 Wedding
            </button>
            <button
              type="button"
              onClick={() => setEventType("corporate")}
              className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all ${
                eventType === "corporate"
                  ? "bg-brand-green dark:bg-bronze-500 text-cream-50 dark:text-night-950 shadow-md font-bold"
                  : "text-chocolate-700 dark:text-night-muted hover:text-amber-600"
              }`}
            >
              🏢 Corporate
            </button>
            <button
              type="button"
              onClick={() => setEventType("expo")}
              className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all ${
                eventType === "expo"
                  ? "bg-brand-green dark:bg-bronze-500 text-cream-50 dark:text-night-950 shadow-md font-bold"
                  : "text-chocolate-700 dark:text-night-muted hover:text-amber-600"
              }`}
            >
              🚀 Expo / Pavilion
            </button>
          </div>
        </div>

        {/* Interactive Slider & Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-8 items-center">
          {/* Left Column: Headcount Slider & Summary */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono font-bold">
                <span className="text-chocolate-700 dark:text-night-muted uppercase tracking-wider">
                  Expected Attendees / Guests
                </span>
                <span className="text-amber-600 dark:text-amber-400 text-base font-serif font-bold">
                  {guestCount.toLocaleString()} Guests
                </span>
              </div>

              {/* Range Slider */}
              <input
                type="range"
                min="100"
                max="2000"
                step="50"
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                className="w-full h-2 bg-cream-200 dark:bg-night-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[10px] font-mono text-chocolate-400 dark:text-night-dim">
                <span>100 Intimate</span>
                <span>500 Grand</span>
                <span>1,000 Major</span>
                <span>2,000+ Mega</span>
              </div>
            </div>

            {/* Total Personnel Highlight Card */}
            <div className="p-6 backdrop-blur-md bg-white/40 dark:bg-white/[0.04] border border-amber-500/30 rounded-2xl flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-700 dark:text-amber-400 font-bold block">
                  RECOMMENDED DEPLOYMENT
                </span>
                <p className="font-serif text-3xl sm:text-4xl text-chocolate-950 dark:text-cream-50 font-medium">
                  {calculation.total} <span className="text-sm font-sans text-chocolate-500 dark:text-night-muted">Crew Members</span>
                </p>
                <p className="text-[11px] text-chocolate-600 dark:text-night-muted mt-1">
                  Includes backup bench allocation &amp; supervisor.
                </p>
              </div>

              <div className="w-14 h-14 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0">
                <Users className="w-6 h-6 text-amber-600 dark:text-amber-400" />
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={`https://wa.me/?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group py-3.5 px-6 text-xs flex-1 justify-center"
              >
                <WhatsappIcon className="w-4 h-4 mr-2" />
                <span>Instant WhatsApp Quote</span>
              </a>

              <Link
                to="/services#calculator-section"
                className="backdrop-blur-md bg-white/10 hover:bg-white/20 border border-chocolate-700/15 dark:border-white/15 px-5 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-center transition-all flex items-center justify-center group"
              >
                <span>Full Calculator</span>
                <ArrowUpRight className="w-4 h-4 ml-1.5 text-amber-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Role Breakdown Chips */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3.5">
            <div className="p-4 rounded-2xl backdrop-blur-md bg-white/30 dark:bg-white/[0.03] border border-chocolate-700/10 dark:border-white/10 space-y-1">
              <span className="text-2xl font-serif font-bold text-amber-600 dark:text-amber-400">
                {calculation.stewards}
              </span>
              <p className="text-xs font-bold text-chocolate-950 dark:text-cream-50 leading-tight">
                Banquet Stewards
              </p>
              <p className="text-[10.5px] text-chocolate-500 dark:text-night-muted font-light">
                Silver service, table alignment &amp; food pass
              </p>
            </div>

            <div className="p-4 rounded-2xl backdrop-blur-md bg-white/30 dark:bg-white/[0.03] border border-chocolate-700/10 dark:border-white/10 space-y-1">
              <span className="text-2xl font-serif font-bold text-amber-600 dark:text-amber-400">
                {calculation.hostesses}
              </span>
              <p className="text-xs font-bold text-chocolate-950 dark:text-cream-50 leading-tight">
                Welcome Hostesses
              </p>
              <p className="text-[10.5px] text-chocolate-500 dark:text-night-muted font-light">
                Registration, guest greetings &amp; aarti welcome
              </p>
            </div>

            <div className="p-4 rounded-2xl backdrop-blur-md bg-white/30 dark:bg-white/[0.03] border border-chocolate-700/10 dark:border-white/10 space-y-1">
              <span className="text-2xl font-serif font-bold text-amber-600 dark:text-amber-400">
                {calculation.shadows}
              </span>
              <p className="text-xs font-bold text-chocolate-950 dark:text-cream-50 leading-tight">
                VIP / Principal Shadows
              </p>
              <p className="text-[10.5px] text-chocolate-500 dark:text-night-muted font-light">
                Close assistance for bride, groom &amp; speakers
              </p>
            </div>

            <div className="p-4 rounded-2xl backdrop-blur-md bg-white/30 dark:bg-white/[0.03] border border-chocolate-700/10 dark:border-white/10 space-y-1">
              <span className="text-2xl font-serif font-bold text-amber-600 dark:text-amber-400">
                {calculation.supervisors}
              </span>
              <p className="text-xs font-bold text-chocolate-950 dark:text-cream-50 leading-tight">
                On-Floor Supervisors
              </p>
              <p className="text-[10.5px] text-chocolate-500 dark:text-night-muted font-light">
                Single POC, radio sync &amp; muster check-in
              </p>
            </div>

            <div className="p-4 rounded-2xl backdrop-blur-md bg-white/30 dark:bg-white/[0.03] border border-chocolate-700/10 dark:border-white/10 space-y-1">
              <span className="text-2xl font-serif font-bold text-amber-600 dark:text-amber-400">
                {calculation.runners}
              </span>
              <p className="text-xs font-bold text-chocolate-950 dark:text-cream-50 leading-tight">
                Backstage Runners
              </p>
              <p className="text-[10.5px] text-chocolate-500 dark:text-night-muted font-light">
                Green room transit, gifts &amp; logistics handoff
              </p>
            </div>

            <div className="p-4 rounded-2xl backdrop-blur-md bg-amber-500/10 dark:bg-amber-400/5 border border-amber-500/30 flex flex-col justify-center space-y-1 text-center">
              <ShieldCheck className="w-5 h-5 text-amber-600 dark:text-amber-400 mx-auto" />
              <p className="text-[11px] font-mono font-bold text-chocolate-950 dark:text-cream-50">
                Zero Dropouts
              </p>
              <p className="text-[9.5px] text-chocolate-500 dark:text-night-dim">
                Standby bench on active call
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
