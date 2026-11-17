import React from "react";
import { Link } from "react-router-dom";
import { 
  ArrowUpRight, 
  Users, 
  Building2, 
  ShieldCheck, 
  Camera, 
  MapPin, 
  PhoneCall, 
  Calculator,
  CheckCircle2
} from "lucide-react";
import StatCounter from "../components/StatCounter";
import ScrollReveal from "../components/ScrollReveal";
import ColorCreepSection from "../components/ColorCreepSection";
import VenueMarquee from "../components/VenueMarquee";
import HomeRosterEstimator from "../components/HomeRosterEstimator";
import HomeOperationsPillars from "../components/HomeOperationsPillars";
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
      title: "Why Us System",
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
      {/* 1. HERO SECTION: 3D CURVED HORIZON ARC WITH REFINED EDITORIAL FOREGROUND */}
      {/* ========================================================================= */}
      <section data-tone="a" className="relative min-h-[92vh] sm:min-h-[96vh] flex items-center justify-center pt-28 pb-16 px-6 sm:px-8 lg:px-12 text-cream-100 bg-night-950 overflow-hidden">
        {/* Continuous 3D Curved Horizon Arc Background */}
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
          <TiltedGridHero
            images={EVAANAM_BRAND_IMAGES}
            speed={4.5}
            tileHeight={34}
            aspectRatio={16 / 9}
            gap={6}
            axis={48}
            curve={74}
            fade={14}
            className="w-full h-full"
          />
        </div>

        {/* Ambient Radial Vignette */}
        <div className="pointer-events-none absolute inset-0 z-[1] bg-radial from-night-950/75 via-night-950/50 to-night-950/85" />

        {/* Hero Foreground Container */}
        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8 space-y-6">
              {/* Micro Eyebrow with Glass Tint */}
              <div className="inline-flex items-center space-x-2.5 px-4 py-2 backdrop-blur-xl bg-black/40 border border-amber-500/40 rounded-full shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-mono tracking-widest text-amber-300 font-bold uppercase">
                  Event Manpower &amp; Execution · Delhi NCR
                </span>
              </div>

              {/* Main Editorial Headline */}
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-cream-50 leading-[1.04] tracking-tight drop-shadow-md">
                The Right People <br />
                <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-bronze-300">
                  For Every Floor.
                </span>
              </h1>

              {/* Supporting Positioning Copy */}
              <p className="text-base sm:text-lg text-cream-200/90 font-light max-w-2xl leading-relaxed drop-shadow-sm">
                Trained, verified and professionally managed event crews engineered for five-star wedding banquets, corporate summits, and large-scale industrial exhibitions across Delhi NCR.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3.5 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/services#calculator-section"
                  className="btn-primary group shadow-2xl backdrop-blur-md"
                >
                  <Calculator className="w-3.5 h-3.5 mr-2 text-amber-300 dark:text-night-950" />
                  <span>Configure Crew Roster</span>
                </Link>

                <Link
                  to="/contact"
                  className="backdrop-blur-xl bg-white/10 hover:bg-white/20 border border-white/25 text-cream-50 px-8 py-4 rounded-full font-sans text-xs uppercase tracking-widest font-bold flex items-center justify-center group transition-all duration-300 shadow-lg hover:border-amber-400"
                >
                  <span>Request Floor Booking</span>
                  <ArrowUpRight className="w-4 h-4 ml-2 text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>

              {/* Grounded Operational Standards Ribbon */}
              <div className="pt-4 flex flex-wrap items-center gap-2.5 text-xs font-sans tracking-wide">
                <span className="px-3.5 py-1.5 backdrop-blur-md bg-black/40 border border-white/15 rounded-full text-amber-300 font-medium">
                  Five-Star Venue Protocols
                </span>
                <span className="px-3.5 py-1.5 backdrop-blur-md bg-black/40 border border-white/15 rounded-full text-cream-200 font-medium">
                  Dedicated Floor Supervisors
                </span>
                <span className="px-3.5 py-1.5 backdrop-blur-md bg-black/40 border border-white/15 rounded-full text-cream-200 font-medium">
                  Biometric Identity Verification
                </span>
                <span className="px-3.5 py-1.5 backdrop-blur-md bg-black/40 border border-amber-500/30 rounded-full text-emerald-300 font-medium">
                  Active Standby Backup
                </span>
              </div>
            </div>

            {/* Quick Navigation Card */}
            <div className="lg:col-span-4 hidden lg:block">
              <div className="backdrop-blur-2xl bg-black/40 border border-white/15 rounded-3xl p-6 space-y-4 shadow-2xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold">
                    OPERATIONAL DIVISIONS
                  </span>
                  <span className="text-[10px] font-mono text-cream-400">Delhi NCR Hub</span>
                </div>
                <div className="space-y-3">
                  <Link to="/services" className="flex items-center justify-between p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group">
                    <span className="text-xs font-medium text-cream-100">Wedding Hospitality (14 Roles)</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                  <Link to="/services" className="flex items-center justify-between p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group">
                    <span className="text-xs font-medium text-cream-100">Corporate &amp; Summits (13 Roles)</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                  <Link to="/venues" className="flex items-center justify-between p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group">
                    <span className="text-xs font-medium text-cream-100">40+ Delhi NCR Venues</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SLOW HORIZONTAL MARQUEE / TICKER                                       */}
      {/* ========================================================================= */}
      <div className="border-y border-chocolate-700/10 dark:border-white/10 bg-cream-100/50 dark:bg-night-950/50 backdrop-blur-md">
        <VenueMarquee />
      </div>

      {/* ========================================================================= */}
      {/* 3. GROUNDED OPERATIONAL STANDARDS STRIP                                   */}
      {/* ========================================================================= */}
      <ColorCreepSection tone="b">
        <StatCounter />
      </ColorCreepSection>

      {/* ========================================================================= */}
      {/* 4. INTERACTIVE LIVE ROSTER ESTIMATOR (HERO COMPANION)                     */}
      {/* ========================================================================= */}
      <ColorCreepSection tone="a" className="py-20 px-6 sm:px-8 lg:px-12 border-b border-chocolate-700/10 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal variant="up">
            <HomeRosterEstimator />
          </ScrollReveal>
        </div>
      </ColorCreepSection>

      {/* ========================================================================= */}
      {/* 5. THE SIX CORE DIRECTORY CHAPTERS                                        */}
      {/* ========================================================================= */}
      <ColorCreepSection tone="b" className="py-24 px-6 sm:px-8 lg:px-12 border-b border-chocolate-700/10 dark:border-white/10">
        <div className="max-w-7xl mx-auto space-y-16">
          <ScrollReveal variant="up">
            <div className="max-w-3xl space-y-4">
              <span className="micro-label text-amber-700 dark:text-amber-400 font-bold">
                OPERATIONAL DIRECTORY
              </span>
              <h2 className="editorial-heading text-4xl sm:text-5xl md:text-6xl text-chocolate-950 dark:text-cream-50">
                Explore The EVAANAM Standard
              </h2>
              <p className="text-base font-light text-chocolate-700 dark:text-night-muted leading-relaxed">
                Structured into six focused chapters detailing our workforce pedigree, venue coverage, compliance systems, and priority dispatch desk.
              </p>
            </div>
          </ScrollReveal>

          {/* 6 Portal Cards Grid with Glassmorphism */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {PORTAL_PAGES.map((page, idx) => {
              const Icon = page.icon;
              return (
                <ScrollReveal key={page.id} variant="up" delay={idx * 80}>
                  <Link
                    to={page.link}
                    className="glass-card glass-card-hover rounded-3xl p-8 flex flex-col justify-between group h-full block cursor-pointer relative overflow-hidden"
                  >
                    <div className="space-y-5">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-sm font-extrabold text-amber-600 dark:text-amber-400">
                          {page.number}
                        </span>
                        <div className="w-11 h-11 rounded-2xl bg-amber-500/10 dark:bg-white/5 border border-amber-500/20 dark:border-white/10 flex items-center justify-center text-amber-600 dark:text-amber-400 group-hover:bg-amber-500 group-hover:text-night-950 transition-all duration-300">
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <span className="text-[10px] uppercase font-mono tracking-widest text-chocolate-500 dark:text-night-dim font-bold block">
                          {page.tag}
                        </span>
                        <h3 className="font-serif text-2xl sm:text-3xl font-medium text-chocolate-950 dark:text-cream-50 group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">
                          {page.title}
                        </h3>
                        <p className="text-xs font-serif italic text-amber-700 dark:text-amber-400">
                          {page.subtitle}
                        </p>
                      </div>

                      <p className="text-xs text-chocolate-600 dark:text-night-muted font-light leading-relaxed">
                        {page.desc}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-chocolate-700/10 dark:border-white/10 flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-chocolate-900 dark:text-cream-100 group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors flex items-center">
                        <span>{page.linkText}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </span>
                      <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/40 dark:bg-white/5 border border-chocolate-700/10 dark:border-white/10 text-chocolate-600 dark:text-night-muted">
                        {page.badge}
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </ColorCreepSection>

      {/* ========================================================================= */}
      {/* 6. OPERATIONAL ASSURANCE: 6-STAGE RELIABILITY STANDARD                      */}
      {/* ========================================================================= */}
      <ColorCreepSection tone="a" className="py-24 px-6 sm:px-8 lg:px-12 border-b border-chocolate-700/10 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal variant="up">
            <HomeOperationsPillars />
          </ScrollReveal>
        </div>
      </ColorCreepSection>

      {/* ========================================================================= */}
      {/* 7. BOTTOM DIRECT CALL TO ACTION                                            */}
      {/* ========================================================================= */}
      <ColorCreepSection tone="b" className="py-24 px-6 sm:px-8 lg:px-12 text-center border-t border-chocolate-700/10 dark:border-white/10">
        <ScrollReveal variant="up">
          <div className="max-w-4xl mx-auto backdrop-blur-2xl bg-cream-100/50 dark:bg-night-900/40 border border-chocolate-700/10 dark:border-white/10 rounded-3xl p-10 sm:p-14 shadow-2xl space-y-6">
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
                className="btn-primary group px-8 py-4 text-xs font-bold uppercase tracking-wider shadow-xl backdrop-blur-md"
              >
                <span>Book Deployment Crew</span>
                <ArrowUpRight className="w-4 h-4 ml-2 text-amber-300 dark:text-night-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <Link
                to="/contact"
                className="backdrop-blur-md bg-white/10 hover:bg-white/20 border border-chocolate-700/15 dark:border-white/15 px-8 py-4 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300 shadow-md text-chocolate-900 dark:text-cream-100"
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
