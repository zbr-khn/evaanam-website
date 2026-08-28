import React, { useState } from "react";
import { ChevronDown, ArrowUpRight, Sparkles, Play, ExternalLink } from "lucide-react";
import { InstagramIcon, FacebookIcon, YoutubeIcon, WhatsappIcon } from "./SocialIcons";

const HOSPITALITY_INSTA_FEED = [
  {
    id: "feed-w1",
    src: "./images/gallery-weddings/IMG-6449-JPG.jpg",
    caption: "Silver service banquet alignment at ITC Maurya ballroom. Precision in every place setting.",
    venue: "ITC Maurya, New Delhi",
    isReel: false,
    url: "https://instagram.com/evaanamhospitalitypvt.ltd",
  },
  {
    id: "feed-w2",
    src: "./images/gallery-weddings/IMG-6650-JPG.jpg",
    caption: "Ceremonial floral welcome and traditional aarti hostesses for wedding arrivals at The Leela Palace.",
    venue: "The Leela Palace, Chanakyapuri",
    isReel: true,
    url: "https://instagram.com/evaanamhospitalitypvt.ltd",
  },
  {
    id: "feed-w3",
    src: "./images/gallery-weddings/IMG-2923-JPG.jpg",
    caption: "Royal courtyard mandap supervision & guest escort crew at ITC Grand Bharat.",
    venue: "ITC Grand Bharat, Gurgaon",
    isReel: false,
    url: "https://instagram.com/evaanamhospitalitypvt.ltd",
  },
  {
    id: "feed-w4",
    src: "./images/gallery-weddings/IMG-20260301-WA0010-jpg.jpg",
    caption: "Pre-shift grooming check & VIP shadow channel alignment before the baraat arrival.",
    venue: "Taj Palace, New Delhi",
    isReel: true,
    url: "https://instagram.com/evaanamhospitalitypvt.ltd",
  },
];

const CORPORATE_INSTA_FEED = [
  {
    id: "feed-c1",
    src: "./images/home-highlights/vivo.png",
    caption: "Interactive brand demonstration crew managing high-density footfall at Vivo Experience Pavilion.",
    venue: "Pragati Maidan (IECC)",
    isReel: false,
    url: "https://instagram.com/evaanampvt.ltd",
  },
  {
    id: "feed-c2",
    src: "./images/home-highlights/indigo.png",
    caption: "Leadership Plenary registration & C-suite protocol team for IndiGo aviation summit.",
    venue: "Yashobhoomi (IICC), Dwarka",
    isReel: true,
    url: "https://instagram.com/evaanampvt.ltd",
  },
  {
    id: "feed-c3",
    src: "./images/home-highlights/boman.png",
    caption: "Executive VIP transit escort & green room security coordination for keynote speaker Boman Irani.",
    venue: "Convention Grand Ballroom",
    isReel: false,
    url: "https://instagram.com/evaanampvt.ltd",
  },
  {
    id: "feed-c4",
    src: "./images/home-highlights/pronto.png",
    caption: "Multi-booth product launch facilitators and bilingual stall crew driving visitor engagement at Pronto expo.",
    venue: "India Exposition Mart (IEML)",
    isReel: true,
    url: "https://instagram.com/evaanampvt.ltd",
  },
];

const SOCIAL_ACCOUNTS = [
  {
    id: "insta-hospitality",
    platform: "Instagram",
    icon: InstagramIcon,
    tag: "Weddings & Five-Star Hospitality",
    handle: "@evaanamhospitalitypvt.ltd",
    title: "EVAANAM Hospitality Pvt. Ltd.",
    bio: "Real-time wedding hospitality deployments, bridal shadows, traditional welcome hostesses, and banquet floor setups across Delhi NCR's premier five-star luxury hotels.",
    badge: "Official Hospitality Feed",
    highlight: "Weddings & Five-Star Banquets",
    ctaText: "Follow @evaanamhospitalitypvt.ltd",
    url: "https://instagram.com/evaanamhospitalitypvt.ltd",
    feedItems: HOSPITALITY_INSTA_FEED,
    iconBg: "bg-gradient-to-tr from-amber-500/20 to-orange-500/20 text-amber-700 dark:text-amber-300",
    accentColor: "border-amber-500/40",
  },
  {
    id: "insta-corporate",
    platform: "Instagram",
    icon: InstagramIcon,
    tag: "Corporate Summits & Trade Expos",
    handle: "@evaanampvt.ltd",
    title: "EVAANAM Corporate & Operations",
    bio: "Exhibition hall marshaling, C-suite boardroom protocol, registration check-in desks, and technical show runners at Pragati Maidan, Yashobhoomi & IEML.",
    badge: "Official Corporate Feed",
    highlight: "Conclaves & Trade Expos",
    ctaText: "Follow @evaanampvt.ltd",
    url: "https://instagram.com/evaanampvt.ltd",
    feedItems: CORPORATE_INSTA_FEED,
    iconBg: "bg-gradient-to-tr from-emerald-500/20 to-teal-500/20 text-emerald-800 dark:text-emerald-300",
    accentColor: "border-emerald-500/40",
  },
  {
    id: "youtube-channel",
    platform: "YouTube",
    icon: YoutubeIcon,
    tag: "On-Floor Highlights & Video Reels",
    handle: "@evaanam_pvt._ltd",
    title: "EVAANAM Crew On The Floor",
    bio: "Watch our trained crews in action. Event highlights, pre-shift muster briefings, venue walkthrough reels, and supervisor coordination on active floors.",
    badge: "Official Video Channel",
    highlight: "Floor Reels & Walkthroughs",
    ctaText: "Subscribe to YouTube Channel",
    url: "https://youtube.com/@evaanam_pvt._ltd",
    iconBg: "bg-gradient-to-tr from-red-500/20 to-rose-500/20 text-red-700 dark:text-red-300",
    accentColor: "border-red-500/40",
  },
  {
    id: "facebook-page",
    platform: "Facebook",
    icon: FacebookIcon,
    tag: "Production Bulletins & Company News",
    handle: "EVAANAM Official Page",
    title: "EVAANAM Operations Desk",
    bio: "Official corporate news, upcoming event notices, operational updates, and event industry collaborations across the National Capital Region.",
    badge: "Official Corporate Page",
    highlight: "Company Bulletins",
    ctaText: "Connect on Facebook",
    url: "https://facebook.com/evaanam",
    iconBg: "bg-gradient-to-tr from-blue-500/20 to-indigo-500/20 text-blue-700 dark:text-blue-300",
    accentColor: "border-blue-500/40",
  },
  {
    id: "whatsapp-direct",
    platform: "WhatsApp",
    icon: WhatsappIcon,
    tag: "Instant 24/7 Operations Desk Dispatch",
    handle: "+91 93100 39929",
    title: "EVAANAM Operations Coordinator",
    bio: "Real-time coordinator channel for urgent manpower requisitions, shift additions, supervisor briefings, and immediate event floor coordination.",
    badge: "Direct Operations Desk",
    highlight: "Instant 24/7 Support",
    ctaText: "Chat on WhatsApp Now",
    url: "https://wa.me/919310039929",
    iconBg: "bg-gradient-to-tr from-emerald-500/20 to-green-500/20 text-emerald-700 dark:text-emerald-300",
    accentColor: "border-emerald-500/40",
  },
];

export default function SocialSection({ className = "", showHeader = true }) {
  const [expandedIds, setExpandedIds] = useState(["insta-hospitality", "insta-corporate"]);

  const toggleExpand = (id) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleExpandAll = () => {
    if (expandedIds.length === SOCIAL_ACCOUNTS.length) {
      setExpandedIds([]);
    } else {
      setExpandedIds(SOCIAL_ACCOUNTS.map((a) => a.id));
    }
  };

  return (
    <section
      className={`py-24 bg-transparent border-t border-chocolate-700/10 dark:border-bronze-500/15 relative overflow-hidden ${className}`}
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {showHeader && (
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4 sm:space-y-5">
            <span className="micro-label font-bold">FOLLOW OUR JOURNEY</span>
            <h2 className="editorial-heading text-4xl sm:text-5xl md:text-6xl text-chocolate-950 dark:text-cream-50">
              Follow Us Behind The Scenes
            </h2>
            <p className="text-base sm:text-lg text-chocolate-600 dark:text-night-muted font-light leading-relaxed">
              Step directly into luxury ballrooms, backstage docks, and VIP green rooms. Follow our daily floor deployments, crew briefings, and behind-the-scenes action across Delhi NCR.
            </p>

            {/* Quick Helper Toggle Bar */}
            <div className="pt-3 flex items-center justify-center space-x-3">
              <button
                type="button"
                onClick={handleExpandAll}
                className="btn-primary group text-xs py-3 px-6 font-extrabold tracking-[0.2em] uppercase cursor-pointer"
              >
                <span>
                  {expandedIds.length === SOCIAL_ACCOUNTS.length
                    ? "Collapse All Channels"
                    : "Expand All Channels (5)"}
                </span>
              </button>
            </div>
          </div>
        )}

        {/* VERTICAL OPENABLE BANNER LIST */}
        <div className="space-y-4">
          {SOCIAL_ACCOUNTS.map((acc) => {
            const Icon = acc.icon;
            const isOpen = expandedIds.includes(acc.id);
            const isInstagram = acc.platform === "Instagram";

            return (
              <div
                key={acc.id}
                className={`border-2 rounded-sm transition-all duration-400 overflow-hidden shadow-sm ${
                  isOpen
                    ? "bg-cream-100 dark:bg-night-800 border-amber-500/70 shadow-xl"
                    : "bg-cream-100/80 dark:bg-night-850/80 border-chocolate-700/15 dark:border-bronze-500/30 hover:border-amber-500/60 hover:bg-cream-50 dark:hover:bg-night-800"
                }`}
              >
                {/* 1. COMPACT CLICKABLE BANNER HEADER */}
                <button
                  type="button"
                  onClick={() => toggleExpand(acc.id)}
                  className="w-full p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-12 h-12 rounded-sm flex items-center justify-center border shrink-0 transition-transform duration-300 ${
                        isOpen ? "scale-105" : ""
                      } ${acc.iconBg} ${acc.accentColor}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-widest font-extrabold text-amber-700 dark:text-amber-400">
                        {acc.tag}
                      </span>
                      <h3 className="font-serif text-xl sm:text-2xl font-medium text-chocolate-950 dark:text-cream-50 leading-tight mt-0.5">
                        {acc.title}
                      </h3>
                      <p className="text-xs font-mono text-chocolate-600 dark:text-night-dim font-bold">
                        {acc.handle}
                      </p>
                    </div>
                  </div>

                  {/* Right: Badge & Dropdown Arrow */}
                  <div className="flex items-center justify-between sm:justify-end space-x-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-chocolate-700/10 dark:border-night-700">
                    <span className="text-[10px] uppercase font-mono tracking-wider font-extrabold px-3 py-1 bg-cream-200 dark:bg-night-750 text-chocolate-800 dark:text-cream-100 border border-chocolate-700/20 dark:border-bronze-500/30 rounded-sm">
                      {acc.badge}
                    </span>

                    {/* Animated Dropdown Toggle Button */}
                    <div
                      className={`w-9 h-9 rounded-sm flex items-center justify-center border-2 transition-all duration-300 ${
                        isOpen
                          ? "bg-brand-green dark:bg-bronze-500 text-cream-50 dark:text-night-950 border-amber-400 rotate-180 shadow-md"
                          : "bg-cream-200 dark:bg-night-750 text-chocolate-700 dark:text-cream-200 border-chocolate-700/20 dark:border-bronze-500/30 hover:bg-bronze-500 hover:text-chocolate-950"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4 font-bold" />
                    </div>
                  </div>
                </button>

                {/* 2. FULL EXPANDED LUXURY CARD CONTENT */}
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-chocolate-700/10 dark:border-night-700 animate-fade-in space-y-6">
                    <div className="p-6 bg-cream-50 dark:bg-night-900 border-2 border-chocolate-700/15 dark:border-bronze-500/25 rounded-sm space-y-6 shadow-inner">
                      {/* Profile Overview Bar */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-chocolate-700/10 dark:border-night-750">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-1.5 text-xs font-bold text-amber-700 dark:text-amber-300 font-mono">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>{acc.highlight}</span>
                          </div>
                          <span className="text-chocolate-400 dark:text-night-dim">•</span>
                          <span className="text-xs font-mono font-semibold text-chocolate-700 dark:text-cream-200">
                            {acc.handle}
                          </span>
                        </div>

                        <div className="flex items-center space-x-2">
                          <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                          </span>
                          <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400 font-bold uppercase tracking-wider">
                            Active Desk Feed
                          </span>
                        </div>
                      </div>

                      {/* Bio Description */}
                      <p className="text-xs sm:text-sm text-chocolate-700 dark:text-cream-200 font-light leading-relaxed">
                        {acc.bio}
                      </p>

                      {/* ================================================================ */}
                      {/* INSTAGRAM LIVE RECENT POSTS & REELS FEED GRID                     */}
                      {/* ================================================================ */}
                      {isInstagram && acc.feedItems && (
                        <div className="space-y-3 pt-2">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] uppercase font-mono tracking-widest font-extrabold text-chocolate-600 dark:text-bronze-400 flex items-center space-x-1.5">
                              <InstagramIcon className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                              <span>Recent Deployments &amp; Reels</span>
                            </span>
                            <span className="text-[10px] font-mono text-chocolate-400 dark:text-night-dim">
                              Tap post to open on Instagram
                            </span>
                          </div>

                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                            {acc.feedItems.map((post) => (
                              <a
                                key={post.id}
                                href={post.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative aspect-square rounded-sm overflow-hidden bg-night-950 border-2 border-chocolate-700/20 dark:border-bronze-500/30 shadow-md hover:shadow-xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-end"
                              >
                                <img
                                  src={post.src}
                                  alt="EVAANAM Instagram Deployment"
                                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                                />

                                {/* Dark Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-night-950/95 via-night-950/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

                                {/* Reel Indicator Badge */}
                                {post.isReel && (
                                  <div className="absolute top-2 right-2 z-10 w-6 h-6 rounded-full bg-night-900/85 backdrop-blur-xs flex items-center justify-center text-amber-300 border border-amber-400/40 shadow">
                                    <Play className="w-2.5 h-2.5 fill-amber-300" />
                                  </div>
                                )}

                                {/* Bottom Info: Venue & Caption */}
                                <div className="relative z-10 p-2.5 text-cream-100 space-y-1 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                                  <p className="text-[10px] text-cream-200 font-sans line-clamp-2 leading-tight drop-shadow-sm font-light">
                                    {post.caption}
                                  </p>

                                  <div className="flex items-center justify-between text-[9px] font-mono text-amber-300/90 pt-1 border-t border-cream-100/10">
                                    <span className="truncate">{post.venue}</span>
                                    <ArrowUpRight className="w-3 h-3 opacity-80 shrink-0 ml-1" />
                                  </div>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Footer Actions: Follow Channel Button */}
                      <div className="pt-4 border-t border-chocolate-700/10 dark:border-night-750 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="text-xs font-mono text-chocolate-600 dark:text-night-muted">
                          Official channel verified by EVAANAM Operations Desk
                        </div>

                        <a
                          href={acc.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary group py-3.5 px-7 text-xs font-extrabold uppercase tracking-wider flex items-center justify-center space-x-2"
                        >
                          <span>{acc.ctaText}</span>
                          <ArrowUpRight className="w-4 h-4 ml-1.5 text-bronze-300 dark:text-night-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
