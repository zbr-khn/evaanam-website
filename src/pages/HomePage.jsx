import React from "react";
import { Link } from "react-router-dom";
import { 
  ArrowUpRight, 
  Sparkles, 
  Users, 
  Building2, 
  ShieldCheck, 
  Camera, 
  MapPin, 
  PhoneCall, 
  Calculator,
  Crown,
  Briefcase
} from "lucide-react";
import StatCounter from "../components/StatCounter";
import ScrollReveal from "../components/ScrollReveal";
import ColorCreepSection from "../components/ColorCreepSection";
import { COMPANY_INFO } from "../data/evaanamData";
import { TiltedGridHero } from "../components/ui/tilted-grid-hero";
import { EVAANAM_BRAND_IMAGES } from "../components/ui/tilted-grid-hero-brand";

export default function HomePage() {

  const PORTAL_PAGES = [
    {
      id: "services",
      number: "01",
      tag: "WORKFORCE & ROLES",
      title: "Specialist Services",
      subtitle: "27 Tailored Operational Roles & Calculator",
      desc: "Explore our specialized deployment divisions: 14 dedicated wedding hospitality positions (VIP shadows, welcome hostesses, banquet stewards) and 13 corporate summit roles (show runners, registration teams, brand ambassadors). Includes the interactive floor roster calculator.",
      link: "/services",
      linkText: "Explore Services & 27 Roles",
      icon: Users,
      badge: "14 Wedding + 13 Corporate Roles",
      themeColor: "amber",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "venues",
      number: "02",
      tag: "DEPLOYMENT FOOTPRINT",
      title: "Venue Directory",
      subtitle: "40+ Premier Venues Across Delhi NCR",
      desc: "Discover where our teams operate daily: 20 luxury five-star hotel ballrooms (The Leela Palace, ITC Maurya, Taj Palace, JW Marriott Aerocity) and 20 major convention arenas and exhibition centers (Bharat Mandapam, Yashobhoomi IICC, Pragati Maidan, IEML).",
      link: "/venues",
      linkText: "Explore 40+ Venues",
      icon: Building2,
      badge: "20 Hotels + 20 Arenas",
      themeColor: "emerald",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "why-us",
      number: "03",
      tag: "STANDARDS & ASSURANCE",
      title: "Why Us System™",
      subtitle: "Structured Workforce Operations",
      desc: "Learn about the EVAANAM quality guarantee: our 7-stage recruitment to performance review protocol, verified standby backup bench (zero ghosting), 5-star grooming standards, and dedicated on-floor supervisory management.",
      link: "/why-us",
      linkText: "Discover Operations System",
      icon: ShieldCheck,
      badge: "7-Stage Standard · Zero Ghosting",
      themeColor: "amber",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "gallery",
      number: "04",
      tag: "FLOOR DOSSIER",
      title: "Visual Gallery",
      subtitle: "Active Deployments & Executive Highlights",
      desc: "View our comprehensive photo and video documentation: real-time banquet silver service alignments, mandap coordination, behind-the-scenes muster briefings, and executive VIP protocol escorts.",
      link: "/gallery",
      linkText: "View Photo Portfolio",
      icon: Camera,
      badge: "Operations Photo Archive",
      themeColor: "emerald",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "location",
      number: "05",
      tag: "CENTRAL BASE",
      title: "Location & Transit",
      subtitle: "Operations HQ & Rapid Response Hubs",
      desc: "Inspect our central operations base in New Delhi. View rapid transit routes and our regional response corridors covering South & Central Delhi, Aerocity, Gurgaon, and Noida.",
      link: "/location",
      linkText: "View Location & Metro Guide",
      icon: MapPin,
      badge: "South Delhi HQ · Metro Access",
      themeColor: "amber",
      image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "contact",
      number: "06",
      tag: "PRIORITY DISPATCH",
      title: "Contact & Booking",
      subtitle: "Custom Roster & Instant WhatsApp Desk",
      desc: "Submit your event schedule, venue details, and headcount expectations directly to our senior coordinators. Switch between the comprehensive requisition form and the interactive roster calculator for instant WhatsApp quotes.",
      link: "/contact",
      linkText: "Book Deployment Crew",
      icon: PhoneCall,
      badge: "24/7 Operations Line",
      themeColor: "emerald",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80"
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION: 3D CURVED HORIZON ARC BACKGROUND + GLASSMORPHISM           */}
      {/* ========================================================================= */}
      <section data-tone="a" className="relative min-h-[92vh] sm:min-h-[96vh] flex items-center justify-center pt-28 pb-16 px-6 sm:px-8 lg:px-12 text-cream-100 bg-night-950 overflow-hidden">
        {/* 3D Curved Horizon Arc Background (Continuously Streaming Behind Hero) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
          <TiltedGridHero
            images={EVAANAM_BRAND_IMAGES}
            speed={4.5}
            tileHeight={34}
            aspectRatio={16 / 9}
            gap={6}
            axis={48}
            curve={75}
            fade={15}
            className="w-full h-full"
          />
        </div>

        {/* Subtle Ambient Radial Lighting for Luxury Glass Depth */}
        <div className="pointer-events-none absolute inset-0 z-[1] bg-radial from-transparent via-night-950/30 to-night-950/75" />

        {/* Glassmorphic Hero Foreground Card */}
        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <div className="backdrop-blur-2xl bg-night-950/50 dark:bg-night-950/60 border border-white/15 dark:border-white/10 rounded-3xl p-8 sm:p-12 lg:p-14 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
              <div className="lg:col-span-8 space-y-6">
                {/* Micro Eyebrow with Glass Tint */}
                <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 backdrop-blur-md bg-amber-500/10 border border-amber-500/30 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                  <span className="micro-label text-amber-300 font-bold">
                    Event Manpower &amp; Execution · Delhi NCR
                  </span>
                </div>

                {/* Main Headline */}
                <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-cream-50 leading-[1.04] tracking-tight">
                  The Right People <br />
                  <span className="italic font-normal text-amber-300">For Every Floor.</span>
                </h1>

                {/* Supporting Text */}
                <p className="text-base sm:text-lg text-cream-200/90 font-light max-w-2xl leading-relaxed">
                  Trained, verified and professionally managed event crews engineered for five-star wedding banquets, corporate summits, and large-scale industrial exhibitions across Delhi NCR.
                </p>

                {/* CTAs with Glass Styling */}
                <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3.5 sm:space-y-0 sm:space-x-4">
                  <Link
                    to="/services#calculator-section"
                    className="btn-primary group shadow-lg backdrop-blur-md"
                  >
                    <Calculator className="w-3.5 h-3.5 mr-2 text-amber-300 dark:text-night-950 group-hover:rotate-12 transition-transform duration-300" />
                    <span>Configure Crew Roster ⚡</span>
                  </Link>

                  <Link
                    to="/contact"
                    className="backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 text-cream-100 px-6 py-3.5 rounded-sm font-sans text-xs uppercase tracking-widest font-semibold flex items-center justify-center group transition-all duration-300 shadow-md"
                  >
                    <span>Request Floor Booking</span>
                    <ArrowUpRight className="w-4 h-4 ml-2 text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>

                {/* Credibility Line */}
                <div className="pt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-sans tracking-wider text-amber-300/90 font-medium">
                  <span>200+ Crew Network</span>
                  <span className="text-cream-400/40">·</span>
                  <span>300+ Projects</span>
                  <span className="text-cream-400/40">·</span>
                  <span>30+ Five-Star Venues</span>
                  <span className="text-cream-400/40">·</span>
                  <span>24-Hr Rapid Dispatch</span>
                </div>
              </div>

              {/* Hero Quick Badge Column */}
              <div className="lg:col-span-4 hidden lg:block">
                <div className="p-6 backdrop-blur-2xl bg-white/[0.06] dark:bg-night-900/60 border border-white/20 dark:border-white/15 text-cream-200 space-y-4 shadow-2xl rounded-2xl">
                  <span className="micro-label text-amber-400 font-bold">
                    OPERATIONAL ASSURANCE
                  </span>
                  <p className="font-serif text-xl italic text-cream-100 leading-snug">
                    "Structured workforce operations with verified stand-by personnel and zero dropouts."
                  </p>
                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-cream-300/80 font-mono">
                    <span>Delhi NCR Ready</span>
                    <span className="text-amber-400 font-semibold">24/7 Desk</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. REAL-TIME STATS STRIP (GLASSMORPHISM)                                   */}
      {/* ========================================================================= */}
      <ColorCreepSection tone="a" className="py-14 border-b border-chocolate-700/10 dark:border-bronze-500/15">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <ScrollReveal variant="up" threshold={0.15}>
            <div className="backdrop-blur-xl bg-cream-100/50 dark:bg-night-900/40 border border-chocolate-700/10 dark:border-white/10 rounded-3xl p-8 sm:p-10 shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
              <StatCounter />
            </div>
          </ScrollReveal>
        </div>
      </ColorCreepSection>

      {/* ========================================================================= */}
      {/* 3. EXECUTIVE PORTAL FEED: WHAT TO FIND ON EACH PAGE                        */}
      {/* ========================================================================= */}
      <ColorCreepSection tone="b" className="py-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Section Header */}
          <ScrollReveal variant="up">
            <div className="max-w-3xl space-y-4">
              <span className="micro-label text-amber-700 dark:text-amber-400 font-bold">
                WEBSITE DIRECTORY &amp; CHAPTERS
              </span>
              <h2 className="editorial-heading text-4xl sm:text-5xl md:text-6xl text-chocolate-950 dark:text-cream-50">
                Explore the EVAANAM Platform
              </h2>
              <p className="text-base sm:text-lg text-chocolate-600 dark:text-night-muted font-light leading-relaxed">
                Select a section below to dive directly into detailed role descriptions, venue intelligence, operational standards, or booking tools.
              </p>
            </div>
          </ScrollReveal>

          {/* 6 Clean Portal Cards Grid with Glassmorphism */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PORTAL_PAGES.map((page, idx) => {
              const Icon = page.icon;
              return (
                <ScrollReveal key={page.id} variant="up" delay={idx * 80}>
                  <div className="group relative rounded-2xl p-8 flex flex-col justify-between overflow-hidden backdrop-blur-xl bg-cream-100/60 dark:bg-night-900/50 border border-chocolate-700/15 dark:border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.35)] hover:border-amber-500/50 hover:shadow-[0_16px_48px_0_rgba(0,0,0,0.2)] hover:-translate-y-1.5 transition-all duration-400 ease-out h-full">
                    
                    {/* Top Indicator & Number */}
                    <div className="space-y-5">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-extrabold text-amber-700 dark:text-amber-400 tracking-widest">
                          CHAPTER {page.number}
                        </span>

                        <div className="p-2.5 rounded-xl backdrop-blur-md bg-cream-200/80 dark:bg-white/5 border border-chocolate-700/10 dark:border-white/10 text-amber-700 dark:text-amber-400 group-hover:bg-amber-500 group-hover:text-night-950 transition-colors duration-300">
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>

                      {/* Title & Subtitle */}
                      <div>
                        <span className="text-[10px] uppercase font-mono tracking-widest text-chocolate-500 dark:text-night-dim font-bold block mb-1">
                          {page.tag}
                        </span>
                        <h3 className="font-serif text-2xl sm:text-3xl text-chocolate-950 dark:text-cream-50 font-medium group-hover:text-amber-800 dark:group-hover:text-amber-300 transition-colors">
                          {page.title}
                        </h3>
                        <p className="text-xs text-amber-800 dark:text-amber-300/90 font-serif italic mt-0.5">
                          {page.subtitle}
                        </p>
                      </div>

                      {/* Brief Explanation */}
                      <p className="text-xs sm:text-sm text-chocolate-700 dark:text-night-muted font-light leading-relaxed">
                        {page.desc}
                      </p>

                      {/* Badge Tag with Frosted Pill */}
                      <div className="pt-2">
                        <span className="inline-block text-[10.5px] font-mono font-semibold px-3 py-1 backdrop-blur-md bg-cream-200/80 dark:bg-white/5 text-chocolate-800 dark:text-cream-200 border border-chocolate-700/10 dark:border-white/10 rounded-full">
                          {page.badge}
                        </span>
                      </div>
                    </div>

                    {/* Bottom CTA Button */}
                    <div className="mt-8 pt-6 border-t border-chocolate-700/10 dark:border-white/10">
                      <Link
                        to={page.link}
                        className="btn-primary group w-full py-3.5 px-5 text-xs font-bold uppercase tracking-wider flex items-center justify-between shadow-sm backdrop-blur-md"
                      >
                        <span>{page.linkText}</span>
                        <ArrowUpRight className="w-4 h-4 ml-1.5 text-amber-300 dark:text-night-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </ColorCreepSection>

      {/* ========================================================================= */}
      {/* 4. MEET EVA AI OPERATIONS ASSISTANT BANNER (GLASSMORPHISM)                 */}
      {/* ========================================================================= */}
      <ColorCreepSection tone="a" className="py-20 px-6 sm:px-8 lg:px-12">
        <ScrollReveal variant="scale" threshold={0.12}>
          <div className="max-w-7xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl backdrop-blur-2xl bg-cream-100/70 dark:bg-night-900/60 border border-chocolate-700/15 dark:border-white/15 p-8 sm:p-12 shadow-2xl text-chocolate-950 dark:text-cream-100 transition-all duration-300">
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Pitch */}
                <div className="lg:col-span-8 space-y-4">
                  <div className="inline-flex items-center space-x-2 px-3 py-1 backdrop-blur-md bg-amber-500/15 border border-amber-600/30 dark:border-amber-400/40 rounded-full text-amber-800 dark:text-amber-300 shadow-sm">
                    <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                    <span className="text-[10px] font-mono uppercase tracking-widest font-bold">
                      24/7 AI OPERATIONS CONCIERGE
                    </span>
                  </div>

                  <h3 className="editorial-heading text-3xl sm:text-4xl text-chocolate-950 dark:text-cream-50 leading-tight">
                    Need instant headcount estimates or urgent crew coverage?
                  </h3>

                  <p className="text-xs sm:text-sm text-chocolate-700 dark:text-cream-200/90 font-light leading-relaxed max-w-xl">
                    Meet <strong>Eva</strong>, our operations assistant. Calculate exact banquet stewards, hostesses, and supervisors, or forward your brief directly to our on-duty WhatsApp coordinators.
                  </p>

                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => window.dispatchEvent(new CustomEvent("open-eva-chat"))}
                      className="btn-primary group py-3 px-6 text-xs font-bold uppercase tracking-wider cursor-pointer shadow-lg backdrop-blur-md"
                    >
                      <Sparkles className="w-4 h-4 mr-2" />
                      <span>Chat with Eva Now</span>
                    </button>

                    <a
                      href="https://wa.me/?text=Hello%20Event%20Operations%20Team,%20I%20would%20like%20to%20consult%20on%20manpower%20staffing%20for%20an%20upcoming%20event."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="backdrop-blur-md bg-white/10 hover:bg-white/20 border border-chocolate-700/15 dark:border-white/15 py-3 px-6 text-xs font-bold uppercase tracking-wider cursor-pointer rounded-sm flex items-center transition-all duration-300"
                    >
                      <span>WhatsApp Operations Desk</span>
                      <ArrowUpRight className="w-4 h-4 ml-1.5 text-amber-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>

                {/* Right Feature Highlights */}
                <div className="lg:col-span-4 space-y-2.5">
                  <div className="p-3.5 backdrop-blur-md bg-cream-200/60 dark:bg-white/5 border border-chocolate-700/10 dark:border-white/10 rounded-xl">
                    <p className="text-xs font-bold text-chocolate-950 dark:text-cream-50">⚡ Instant Headcounts</p>
                    <p className="text-[11px] text-chocolate-600 dark:text-night-muted font-light mt-0.5">Calculates stewards, hostesses, shadows &amp; supervisors</p>
                  </div>

                  <div className="p-3.5 backdrop-blur-md bg-cream-200/60 dark:bg-white/5 border border-chocolate-700/10 dark:border-white/10 rounded-xl">
                    <p className="text-xs font-bold text-chocolate-950 dark:text-cream-50">📍 40+ Venues NCR</p>
                    <p className="text-[11px] text-chocolate-600 dark:text-night-muted font-light mt-0.5">Taj, ITC, Leela, Yashobhoomi &amp; Pragati Maidan ready</p>
                  </div>

                  <div className="p-3.5 backdrop-blur-md bg-cream-200/60 dark:bg-white/5 border border-chocolate-700/10 dark:border-white/10 rounded-xl">
                    <p className="text-xs font-bold text-chocolate-950 dark:text-cream-50">💬 1-Tap Dispatch</p>
                    <p className="text-[11px] text-chocolate-600 dark:text-night-muted font-light mt-0.5">Structured briefing sent to WhatsApp in seconds</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </ScrollReveal>
      </ColorCreepSection>

      {/* ========================================================================= */}
      {/* 5. BOTTOM DIRECT CALL TO ACTION (GLASSMORPHISM)                            */}
      {/* ========================================================================= */}
      <ColorCreepSection tone="b" className="py-20 px-6 sm:px-8 lg:px-12 text-center border-t border-chocolate-700/10 dark:border-bronze-500/15">
        <ScrollReveal variant="up">
          <div className="max-w-4xl mx-auto backdrop-blur-xl bg-cream-100/50 dark:bg-night-900/40 border border-chocolate-700/10 dark:border-white/10 rounded-3xl p-10 sm:p-14 shadow-xl space-y-6">
            <span className="micro-label text-amber-700 dark:text-amber-400 font-bold">
              LET'S BUILD YOUR EVENT TEAM
            </span>
            <h2 className="editorial-heading text-4xl sm:text-5xl">
              Ready to deploy structured event manpower?
            </h2>
            <p className="text-sm font-light max-w-xl mx-auto leading-relaxed text-chocolate-700 dark:text-cream-200/90">
              Share your schedule, headcount requirements, and shift timings. Our operations desk will structure fully briefed personnel matching your exact venue standards.
            </p>
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="btn-primary group px-8 py-4 text-xs font-bold uppercase tracking-wider shadow-lg backdrop-blur-md"
              >
                <span>Book Deployment Crew</span>
                <ArrowUpRight className="w-4 h-4 ml-2 text-amber-300 dark:text-night-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <Link
                to="/contact"
                className="backdrop-blur-md bg-white/10 hover:bg-white/20 border border-chocolate-700/15 dark:border-white/15 px-8 py-4 text-xs font-bold uppercase tracking-wider rounded-sm transition-all duration-300"
              >
                <span>Contact Operations Desk</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </ColorCreepSection>
    </div>
  );
}
