import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import StatCounter from "../components/StatCounter";
import VenueMarquee from "../components/VenueMarquee";
import SocialSection from "../components/SocialSection";
import { COMPANY_INFO, GALLERY_IMAGES } from "../data/evaanamData";

export default function HomePage() {
  // Teaser images for gallery section
  const teaserImages = GALLERY_IMAGES.slice(0, 3);

  return (
    <div className="animate-fade-in">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-28 pb-16 px-6 sm:px-8 lg:px-12 overflow-hidden bg-night-950 text-cream-100">
        {/* Background Image with slow Ken Burns effect & luxury dark overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2000&q=85"
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
                <span className="micro-label text-bronze-300">
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
                <Link
                  to="/contact"
                  className="btn-bronze group"
                >
                  <span>Request Manpower</span>
                  <ArrowUpRight className="w-4 h-4 ml-2 text-night-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>

                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-7 py-3.5 border border-cream-200/30 text-cream-100 font-sans text-xs font-semibold uppercase tracking-[0.18em] transition-all hover:bg-cream-200 hover:text-chocolate-950 dark:hover:bg-night-800 dark:hover:text-cream-50"
                >
                  <span>Explore Our Services</span>
                </Link>
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

            {/* Asymmetric Side Badge */}
            <div className="lg:col-span-4 hidden lg:flex flex-col justify-end">
              <div className="p-6 bg-night-900/80 border border-bronze-500/20 backdrop-blur-sm space-y-3">
                <span className="micro-label text-bronze-400">Execution Standard</span>
                <p className="font-serif text-lg text-cream-100 italic leading-snug">
                  “Hospitality on the surface. Operations underneath.”
                </p>
                <div className="pt-2 border-t border-chocolate-800 dark:border-night-700 flex items-center justify-between text-[11px] text-cream-300/70 font-sans">
                  <span>Delhi · Gurgaon · Noida</span>
                  <span className="text-bronze-400 font-medium">5-Star Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION / POSITIONING */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-cream-200 dark:bg-night-900 border-b border-chocolate-700/10 dark:border-bronze-500/15">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Large Typography */}
            <div className="lg:col-span-6 space-y-4">
              <span className="micro-label">BUILT FOR TWO WORLDS</span>
              <h2 className="editorial-heading text-4xl sm:text-5xl lg:text-6xl text-chocolate-950 dark:text-cream-50">
                Hospitality on the surface. <br />
                <span className="text-bronze-600 dark:text-bronze-400 italic">Operations underneath.</span>
              </h2>
            </div>

            {/* Right: Detailed Context & Navigation Gateway */}
            <div className="lg:col-span-6 space-y-6">
              <p className="text-base sm:text-lg text-chocolate-700 dark:text-cream-100 font-light leading-relaxed">
                EVAANAM provides trained event manpower and execution support for weddings, corporate events, brand activations, exhibitions, government events and sports events across Delhi NCR.
              </p>
              <p className="text-sm text-chocolate-600 dark:text-night-muted leading-relaxed font-light">
                Our teams are recruited, verified, trained, groomed and supervised before they reach the floor — so clients can focus on the event, not the manpower.
              </p>
              <div className="pt-2">
                <Link
                  to="/why-us"
                  className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-semibold text-chocolate-900 dark:text-cream-100 hover:text-bronze-600 dark:hover:text-bronze-400 transition-colors border-b border-bronze-500/50 pb-1"
                >
                  <span>Explore Our Operational Pillars</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-bronze-500" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STATISTICS SECTION */}
      <StatCounter />

      {/* 4. CONCISE SERVICE PREVIEW */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-cream-200 dark:bg-night-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="micro-label">OUR CORE CAPABILITIES</span>
              <h2 className="editorial-heading text-4xl sm:text-5xl text-chocolate-950 dark:text-cream-50 mt-2">
                Built for two worlds. <br />
                <span className="italic text-bronze-600 dark:text-bronze-400">Held to one standard.</span>
              </h2>
            </div>
            <Link
              to="/services"
              className="btn-secondary self-start md:self-auto"
            >
              <span>View All 27 Roles</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Service Box 1: Wedding Hospitality */}
            <div className="card-luxury p-8 sm:p-10 flex flex-col justify-between group hover:border-bronze-500/50 transition-all dark:bg-night-800 dark:border-bronze-500/20">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-bronze-600 dark:text-bronze-400">01 / WEDDING</span>
                  <span className="text-[11px] uppercase tracking-wider text-chocolate-500 dark:text-night-muted font-sans">14 Specialist Roles</span>
                </div>
                <h3 className="font-serif text-3xl text-chocolate-950 dark:text-cream-50 font-medium">
                  Wedding Hospitality
                </h3>
                <p className="text-sm text-chocolate-600 dark:text-bronze-300/90 font-serif italic">
                  Five-star floors, multi-day functions, VIP coverage.
                </p>
                <p className="text-xs text-chocolate-600/90 dark:text-night-muted font-light leading-relaxed">
                  From VIP personal shadows and traditional welcome hostesses to round-the-clock helpdesks and floor runners, our wedding teams blend warmth with operational precision.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {["VIP Shadows", "Welcome Hostesses", "Helpdesk Crew", "Runners", "Stewards"].map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2.5 py-1 bg-cream-200 dark:bg-night-850 text-chocolate-700 dark:text-cream-200 border border-chocolate-700/10 dark:border-bronze-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-chocolate-700/10 dark:border-night-700">
                <Link
                  to="/services"
                  className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.18em] font-semibold text-chocolate-900 dark:text-cream-100 group-hover:text-bronze-600 dark:group-hover:text-bronze-400 transition-colors"
                >
                  <span>Explore Wedding Crew Roles</span>
                  <ChevronRight className="w-4 h-4 text-bronze-500 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Service Box 2: Corporate & Expos */}
            <div className="card-luxury p-8 sm:p-10 flex flex-col justify-between group hover:border-bronze-500/50 transition-all dark:bg-night-800 dark:border-bronze-500/20">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-bronze-600 dark:text-bronze-400">02 / CORPORATE</span>
                  <span className="text-[11px] uppercase tracking-wider text-chocolate-500 dark:text-night-muted font-sans">13 Specialist Roles</span>
                </div>
                <h3 className="font-serif text-3xl text-chocolate-950 dark:text-cream-50 font-medium">
                  Corporate &amp; Expos
                </h3>
                <p className="text-sm text-chocolate-600 dark:text-bronze-300/90 font-serif italic">
                  Expos, activations, launches and conventions.
                </p>
                <p className="text-xs text-chocolate-600/90 dark:text-night-muted font-light leading-relaxed">
                  High-throughput badge registration, C-suite lounge hostesses, stage show runners, brand ambassadors, and technical production supervisors for premier business events.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {["Registration Desks", "Show Runners", "Brand Ambassadors", "Stall Crew", "Supervisors"].map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2.5 py-1 bg-cream-200 dark:bg-night-850 text-chocolate-700 dark:text-cream-200 border border-chocolate-700/10 dark:border-bronze-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-chocolate-700/10 dark:border-night-700">
                <Link
                  to="/services"
                  className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.18em] font-semibold text-chocolate-900 dark:text-cream-100 group-hover:text-bronze-600 dark:group-hover:text-bronze-400 transition-colors"
                >
                  <span>Explore Corporate Crew Roles</span>
                  <ChevronRight className="w-4 h-4 text-bronze-500 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LARGE VISUAL BREAK (KEN BURNS) */}
      <section className="relative h-[480px] sm:h-[550px] flex items-center justify-center overflow-hidden bg-night-950 text-cream-100 text-center px-6">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=2000&q=85"
            alt="Event Floor in Motion"
            className="w-full h-full object-cover object-center ken-burns opacity-30 dark:opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-night-950/90 via-night-950/60 to-night-950/90" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <span className="micro-label text-bronze-400">OPERATIONAL ASSURANCE</span>
          <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-cream-50 leading-snug">
            From first arrival to final departure, <br />
            <span className="italic text-bronze-300">the floor stays covered.</span>
          </h3>
          <p className="text-xs sm:text-sm text-cream-300/80 font-light tracking-wide max-w-xl mx-auto">
            Zero last-minute dropouts. Verified replacements on standby. A single point of coordination for your entire production team.
          </p>
        </div>
      </section>

      {/* 6. VENUE TICKER PREVIEW */}
      <section className="py-16 bg-cream-200 dark:bg-night-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="micro-label">DEPLOYMENT FOOTPRINT</span>
            <h3 className="font-serif text-2xl sm:text-3xl text-chocolate-950 dark:text-cream-50 font-medium mt-1">
              Experienced where the standard is already high.
            </h3>
          </div>
          <Link
            to="/venues"
            className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-[0.18em] font-semibold text-chocolate-900 dark:text-cream-100 hover:text-bronze-600 dark:hover:text-bronze-400 transition-colors"
          >
            <span>Explore 40+ Venues</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-bronze-500" />
          </Link>
        </div>

        <VenueMarquee />
      </section>

      {/* 7. GALLERY TEASER */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-cream-100/80 dark:bg-night-850 border-t border-chocolate-700/10 dark:border-bronze-500/15">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="micro-label">ON THE FLOOR</span>
              <h2 className="editorial-heading text-4xl sm:text-5xl text-chocolate-950 dark:text-cream-50 mt-2">
                The work, in motion.
              </h2>
            </div>
            <Link to="/gallery" className="btn-secondary">
              <span>View Full Gallery (19 Photos)</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teaserImages.map((img) => (
              <Link
                key={img.id}
                to="/gallery"
                className="group relative overflow-hidden bg-cream-200 dark:bg-night-800 border border-chocolate-700/10 dark:border-bronze-500/20 aspect-[4/3] block"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-cream-100">
                  <span className="text-[10px] font-mono text-bronze-400 uppercase tracking-wider block mb-1">
                    {img.categoryLabel}
                  </span>
                  <h4 className="font-serif text-lg font-medium text-cream-50 leading-snug">
                    {img.title}
                  </h4>
                  <p className="text-[11px] text-cream-300/80 font-sans mt-1">
                    {img.subtitle}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. ANIMATED SOCIAL SECTION */}
      <SocialSection showHeader={true} />

      {/* 9. FINAL CALL TO CONVERSATION */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-cream-100 dark:bg-night-850 border-t border-chocolate-700/10 dark:border-bronze-500/15">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <span className="micro-label">START A CONVERSATION</span>
          <h2 className="editorial-heading text-4xl sm:text-5xl lg:text-6xl text-chocolate-950 dark:text-cream-50">
            Planning an event? <br />
            <span className="italic text-bronze-600 dark:text-bronze-400">Let's build your team.</span>
          </h2>
          <p className="text-base text-chocolate-600 dark:text-night-muted font-light max-w-xl mx-auto leading-relaxed">
            Tell us your venue, event dates, and crew requirements. Our operations desk responds within 2 hours with customized crew profiles.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/contact"
              className="btn-primary px-10 py-4 text-xs font-semibold"
            >
              Request Manpower
            </Link>
            <a
              href={`tel:${COMPANY_INFO.phones[0].number}`}
              className="text-xs uppercase tracking-[0.2em] font-semibold text-chocolate-800 dark:text-cream-200 hover:text-bronze-600 dark:hover:text-bronze-400 transition-colors"
            >
              Or Call Operations: {COMPANY_INFO.phones[0].display}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
