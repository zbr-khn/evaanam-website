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
import ExecutiveCarousel from "../components/ExecutiveCarousel";
import ScrollReveal from "../components/ScrollReveal";
import ColorCreepSection from "../components/ColorCreepSection";
import { COMPANY_INFO } from "../data/evaanamData";

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
      image: "./images/gallery-corporate/IMG-20250419-WA0011-jpg.jpg"
    },
    {
      id: "gallery",
      number: "04",
      tag: "FLOOR DOSSIER",
      title: "Visual Gallery",
      subtitle: "Active Deployments & Celebrity Highlights",
      desc: "View our photo and video documentation: real-time banquet silver service alignments, mandap coordination, behind-the-scenes muster briefings, and executive celebrity escorts including Boman Irani and Rajpal Yadav.",
      link: "/gallery",
      linkText: "View Floor Gallery",
      icon: Camera,
      badge: "Floor Photos & VIP Highlights",
      themeColor: "emerald",
      image: "./images/home-highlights/boman.png"
    },
    {
      id: "location",
      number: "05",
      tag: "CENTRAL BASE",
      title: "Location & Transit",
      subtitle: "Operations HQ & Rapid Response Hubs",
      desc: "Inspect our central operations office in New Friends Colony, South Delhi. View rapid transit routes via Jamia Millia Islamia Metro Station (Magenta Line) and our 4 regional response corridors covering Central Delhi, Aerocity, Gurgaon, and Noida.",
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
      {/* 1. HERO SECTION                                                            */}
      {/* ========================================================================= */}
      <section data-tone="a" className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center pt-28 pb-16 px-6 sm:px-8 lg:px-12 overflow-hidden text-cream-100 bg-brand-dark">
        {/* Background Image with slow Ken Burns effect & luxury dark overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="./gallery/hero-updated.png"
            alt="EVAANAM Luxury Event Floor Manpower & Execution"
            className="w-full h-full object-cover object-center ken-burns opacity-35 dark:opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-night-950 via-night-950/80 to-night-950/90" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8 space-y-6">
              {/* Micro Eyebrow */}
              <div className="inline-flex items-center space-x-2.5 px-3 py-1.5 bg-night-900/90 border border-amber-500/30 rounded-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
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
              <p className="text-base sm:text-lg text-cream-200 font-light max-w-2xl leading-relaxed">
                Trained, verified and professionally managed event crews engineered for five-star wedding banquets, corporate summits, and large-scale industrial exhibitions across Delhi NCR.
              </p>

              {/* CTAs */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3.5 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/services#calculator-section"
                  className="btn-primary group"
                >
                  <Calculator className="w-3.5 h-3.5 mr-2 text-amber-300 dark:text-night-950 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Configure Crew Roster ⚡</span>
                </Link>

                <Link
                  to="/contact"
                  className="btn-secondary group"
                >
                  <span>Request Floor Booking</span>
                  <ArrowUpRight className="w-4 h-4 ml-2 text-amber-400 dark:text-cream-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>

              {/* Credibility Line */}
              <div className="pt-6 flex items-center space-x-2 text-xs font-sans tracking-wider text-amber-400/90 font-medium">
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
              <div className="p-6 bg-night-900/85 backdrop-blur-md border border-amber-500/30 text-cream-200 space-y-4 shadow-2xl rounded-sm">
                <span className="micro-label text-amber-400 font-bold">
                  OPERATIONAL ASSURANCE
                </span>
                <p className="font-serif text-xl italic text-cream-100 leading-snug">
                  "Structured workforce operations with verified stand-by personnel and zero dropouts."
                </p>
                <div className="pt-2 border-t border-amber-500/20 flex items-center justify-between text-xs text-cream-300/80 font-mono">
                  <span>Delhi NCR Ready</span>
                  <span className="text-amber-400 font-semibold">24/7 Desk</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. EXECUTIVE PHOTO CAROUSEL (HIGHLIGHT MOMENTS)                            */}
      {/* ========================================================================= */}
      <ColorCreepSection tone="b" className="py-4">
        <ScrollReveal variant="up" threshold={0.1}>
          <ExecutiveCarousel />
        </ScrollReveal>
      </ColorCreepSection>

      {/* ========================================================================= */}
      {/* 3. REAL-TIME STATS STRIP (TONE A)                                          */}
      {/* ========================================================================= */}
      <ColorCreepSection tone="a" className="py-12 border-b border-chocolate-700/10 dark:border-bronze-500/15">
        <ScrollReveal variant="up" threshold={0.15}>
          <StatCounter />
        </ScrollReveal>
      </ColorCreepSection>

      {/* ========================================================================= */}
      {/* 4. EXECUTIVE PORTAL FEED: WHAT TO FIND ON EACH PAGE                        */}
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

          {/* 6 Clean Portal Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PORTAL_PAGES.map((page, idx) => {
              const Icon = page.icon;
              return (
                <ScrollReveal key={page.id} variant="up" delay={idx * 80}>
                  <div className="group relative rounded-sm p-8 flex flex-col justify-between overflow-hidden bg-cream-100/90 dark:bg-night-800/90 border-2 border-chocolate-700/15 dark:border-bronze-500/20 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-400 ease-out hover:border-amber-500/70 dark:hover:border-amber-400/70 h-full">
                    
                    {/* Top Indicator & Number */}
                    <div className="space-y-5">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-extrabold text-amber-700 dark:text-amber-400 tracking-widest">
                          CHAPTER {page.number}
                        </span>

                        <div className="p-2.5 rounded-sm bg-cream-200 dark:bg-night-750 border border-chocolate-700/10 dark:border-bronze-500/20 text-amber-700 dark:text-amber-400 group-hover:bg-amber-500 group-hover:text-night-950 transition-colors duration-300">
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

                      {/* Badge Tag */}
                      <div className="pt-2">
                        <span className="inline-block text-[10.5px] font-mono font-semibold px-3 py-1 bg-cream-200/90 dark:bg-night-850 text-chocolate-800 dark:text-cream-200 border border-chocolate-700/10 dark:border-bronze-500/20 rounded-sm">
                          {page.badge}
                        </span>
                      </div>
                    </div>

                    {/* Bottom CTA Button */}
                    <div className="mt-8 pt-6 border-t border-chocolate-700/10 dark:border-night-700">
                      <Link
                        to={page.link}
                        className="btn-primary group w-full py-3.5 px-5 text-xs font-bold uppercase tracking-wider flex items-center justify-between"
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
      {/* 5. MEET EVA AI OPERATIONS ASSISTANT BANNER (TONE A)                        */}
      {/* ========================================================================= */}
      <ColorCreepSection tone="a" className="py-20 px-6 sm:px-8 lg:px-12">
        <ScrollReveal variant="scale" threshold={0.12}>
          <div className="max-w-7xl mx-auto">
            <div className="relative overflow-hidden rounded-sm bg-cream-100/95 dark:bg-night-900 border-2 border-chocolate-700/20 dark:border-amber-500/30 p-8 sm:p-12 shadow-2xl text-chocolate-950 dark:text-cream-100 transition-all duration-300">
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Pitch */}
                <div className="lg:col-span-8 space-y-4">
                  <div className="inline-flex items-center space-x-2 px-3 py-1 bg-cream-200 dark:bg-night-850 border border-amber-600/30 dark:border-amber-400/40 rounded-full text-amber-800 dark:text-amber-300 shadow-sm">
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
                      className="btn-primary group py-3 px-6 text-xs font-bold uppercase tracking-wider cursor-pointer"
                    >
                      <Sparkles className="w-4 h-4 mr-2" />
                      <span>Chat with Eva Now</span>
                    </button>

                    <a
                      href="https://wa.me/919310039929?text=Hello%20Eva%20%26%20EVAANAM%20Team,%20I%20would%20like%20to%20consult%20on%20manpower%20staffing%20for%20an%20upcoming%20event."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary group py-3 px-6 text-xs font-bold uppercase tracking-wider cursor-pointer"
                    >
                      <span>WhatsApp Operations Desk</span>
                      <ArrowUpRight className="w-4 h-4 ml-1.5 text-amber-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>

                {/* Right Feature Highlights */}
                <div className="lg:col-span-4 space-y-2.5">
                  <div className="p-3.5 bg-cream-200/80 dark:bg-night-800 border border-chocolate-700/10 dark:border-bronze-500/20 rounded-sm">
                    <p className="text-xs font-bold text-chocolate-950 dark:text-cream-50">⚡ Instant Headcounts</p>
                    <p className="text-[11px] text-chocolate-600 dark:text-night-muted font-light mt-0.5">Calculates stewards, hostesses, shadows &amp; supervisors</p>
                  </div>

                  <div className="p-3.5 bg-cream-200/80 dark:bg-night-800 border border-chocolate-700/10 dark:border-bronze-500/20 rounded-sm">
                    <p className="text-xs font-bold text-chocolate-950 dark:text-cream-50">📍 40+ Venues NCR</p>
                    <p className="text-[11px] text-chocolate-600 dark:text-night-muted font-light mt-0.5">Taj, ITC, Leela, Yashobhoomi &amp; Pragati Maidan ready</p>
                  </div>

                  <div className="p-3.5 bg-cream-200/80 dark:bg-night-800 border border-chocolate-700/10 dark:border-bronze-500/20 rounded-sm">
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
      {/* 6. BOTTOM DIRECT CALL TO ACTION (TONE B)                                   */}
      {/* ========================================================================= */}
      <ColorCreepSection tone="b" className="py-20 px-6 sm:px-8 lg:px-12 text-center border-t border-chocolate-700/10 dark:border-bronze-500/15">
        <ScrollReveal variant="up">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="micro-label text-amber-700 dark:text-amber-400 font-bold">
              LET'S BUILD YOUR EVENT TEAM
            </span>
            <h2 className="editorial-heading text-4xl sm:text-5xl">
              Ready to deploy structured event manpower?
            </h2>
            <p className="text-sm font-light max-w-xl mx-auto leading-relaxed">
              Share your schedule, headcount requirements, and shift timings. Our operations desk will structure fully briefed personnel matching your exact venue standards.
            </p>
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="btn-primary group px-8 py-4 text-xs font-bold uppercase tracking-wider"
              >
                <span>Book Deployment Crew</span>
                <ArrowUpRight className="w-4 h-4 ml-2 text-amber-300 dark:text-night-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <a
                href={`tel:${COMPANY_INFO.phones[0].number}`}
                className="btn-secondary group px-8 py-4 text-xs font-bold uppercase tracking-wider"
              >
                <span>Call Hotline: {COMPANY_INFO.phones[0].display}</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </ColorCreepSection>
    </div>
  );
}
