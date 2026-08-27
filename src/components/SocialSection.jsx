import React, { useState } from "react";
import { ChevronDown, ArrowUpRight, Sparkles } from "lucide-react";
import { InstagramIcon, FacebookIcon, YoutubeIcon, WhatsappIcon } from "./SocialIcons";

const SOCIAL_ACCOUNTS = [
  {
    id: "insta-hospitality",
    platform: "Instagram",
    icon: InstagramIcon,
    tag: "Weddings & Five-Star Hospitality",
    handle: "@evaanamhospitalitypvt.ltd",
    title: "EVAANAM Hospitality Pvt. Ltd.",
    bio: "Real-time wedding hospitality deployments, bridal shadows, traditional welcome hostesses, and banquet floor setups across Delhi NCR's premier five-star luxury hotels.",
    badge: "Active Floor Feed",
    highlight: "Live Wedding Deployments",
    ctaText: "Explore Instagram Feed",
    url: "https://instagram.com/evaanamhospitalitypvt.ltd",
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
    badge: "Operations Feed",
    highlight: "Corporate Event Rosters",
    ctaText: "View Corporate Broadcasts",
    url: "https://instagram.com/evaanampvt.ltd",
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
    ctaText: "Watch YouTube Channel",
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
    badge: "Official Page",
    highlight: "Company Announcements",
    ctaText: "Visit Facebook Page",
    url: "https://www.facebook.com/share/1UVz6xkxaY/",
    iconBg: "bg-gradient-to-tr from-blue-500/20 to-indigo-500/20 text-blue-800 dark:text-blue-300",
    accentColor: "border-blue-500/40",
  },
  {
    id: "whatsapp-direct",
    platform: "WhatsApp Operations",
    icon: WhatsappIcon,
    tag: "Operations Support Line",
    handle: "+91 93100 39929",
    title: "EVAANAM Direct Operations Desk",
    bio: "Direct chat line for event planners, venue managers, and production teams. Staffing requirements, roster inquiries, and operational coordination across Delhi NCR.",
    badge: "Direct Desk",
    highlight: "Dedicated Operations Support",
    ctaText: "Chat On WhatsApp",
    url: "https://wa.me/919310039929",
    iconBg: "bg-gradient-to-tr from-emerald-600/20 to-green-500/20 text-emerald-700 dark:text-emerald-300",
    accentColor: "border-emerald-500/40",
  },
];

export default function SocialSection({ showHeader = true, className = "" }) {
  // Store expanded item IDs (first item open by default for immediate discoverability)
  const [expandedIds, setExpandedIds] = useState(["insta-hospitality"]);

  const toggleItem = (id) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleExpandAll = () => {
    if (expandedIds.length === SOCIAL_ACCOUNTS.length) {
      setExpandedIds([]);
    } else {
      setExpandedIds(SOCIAL_ACCOUNTS.map((acc) => acc.id));
    }
  };

  return (
    <section
      className={`py-24 bg-transparent border-t border-chocolate-700/10 dark:border-bronze-500/15 relative overflow-hidden ${className}`}
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {showHeader && (
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4 sm:space-y-5">
            <span className="micro-label">FOLLOW OUR JOURNEY</span>
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
                className="text-xs uppercase tracking-[0.18em] font-semibold text-bronze-600 dark:text-bronze-400 hover:text-chocolate-950 dark:hover:text-cream-50 border-b border-bronze-500/40 pb-0.5 transition-colors"
              >
                {expandedIds.length === SOCIAL_ACCOUNTS.length
                  ? "Collapse All Channels"
                  : "Expand All Channels (5)"}
              </button>
            </div>
          </div>
        )}

        {/* VERTICAL OPENABLE BANNER LIST */}
        <div className="space-y-4">
          {SOCIAL_ACCOUNTS.map((acc) => {
            const Icon = acc.icon;
            const isOpen = expandedIds.includes(acc.id);

            return (
              <div
                key={acc.id}
                className={`border rounded-sm transition-all duration-400 overflow-hidden shadow-sm ${
                  isOpen
                    ? "bg-cream-100 dark:bg-night-800 border-bronze-500/60 ring-1 ring-bronze-500/20"
                    : "bg-cream-100/80 dark:bg-night-850/80 border-chocolate-700/15 dark:border-bronze-500/20 hover:border-bronze-500/40 hover:bg-cream-50 dark:hover:bg-night-800"
                }`}
              >
                {/* 1. COMPACT COLLAPSIBLE BANNER HEADER */}
                <button
                  type="button"
                  onClick={() => toggleItem(acc.id)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left focus:outline-none transition-colors"
                >
                  {/* Left: Icon & Platform Info */}
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center border border-chocolate-700/10 dark:border-bronze-500/20 shrink-0 shadow-sm transition-transform duration-300 ${acc.iconBg} ${
                        isOpen ? "scale-105" : ""
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="space-y-0.5">
                      <div className="flex items-center space-x-2">
                        <span className="text-[10px] uppercase font-mono tracking-widest font-semibold text-bronze-600 dark:text-bronze-400">
                          {acc.platform}
                        </span>
                        <span className="text-chocolate-400 dark:text-night-dim text-xs">•</span>
                        <span className="text-xs text-chocolate-500 dark:text-night-muted font-sans hidden sm:inline">
                          {acc.tag}
                        </span>
                      </div>

                      <h3 className="font-serif text-xl sm:text-2xl text-chocolate-950 dark:text-cream-50 font-medium leading-snug">
                        {acc.title}
                      </h3>
                      <p className="text-xs font-mono text-chocolate-500 dark:text-night-dim">
                        {acc.handle}
                      </p>
                    </div>
                  </div>

                  {/* Right: Badge & Dropdown Arrow */}
                  <div className="flex items-center justify-between sm:justify-end space-x-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-chocolate-700/10 dark:border-night-700">
                    <span className="text-[10px] uppercase font-mono tracking-wider font-semibold px-2.5 py-1 bg-cream-200 dark:bg-night-750 text-chocolate-700 dark:text-cream-200 border border-chocolate-700/10 dark:border-bronze-500/20">
                      {acc.badge}
                    </span>

                    {/* Animated Dropdown Toggle Button */}
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300 ${
                        isOpen
                          ? "bg-brand-green dark:bg-bronze-500 text-cream-50 dark:text-night-950 border-transparent rotate-180 shadow-sm"
                          : "bg-cream-200 dark:bg-night-750 text-chocolate-700 dark:text-cream-200 border-chocolate-700/15 dark:border-bronze-500/20 hover:bg-bronze-500 hover:text-chocolate-950"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </button>

                {/* 2. FULL EXPANDED LUXURY CARD CONTENT */}
                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-chocolate-700/10 dark:border-night-700 animate-fade-in">
                    <div className="p-6 bg-cream-50 dark:bg-night-900 border border-chocolate-700/10 dark:border-bronze-500/15 rounded-sm space-y-5">
                      {/* Bio & Details */}
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-xs font-semibold text-bronze-600 dark:text-bronze-400 font-mono">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>{acc.highlight}</span>
                        </div>

                        <p className="text-xs sm:text-sm text-chocolate-600 dark:text-night-muted font-light leading-relaxed">
                          {acc.bio}
                        </p>
                      </div>

                      {/* Footer Actions: Live Status + External Direct CTA Link */}
                      <div className="pt-4 border-t border-chocolate-700/10 dark:border-night-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-center space-x-2.5">
                          <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bronze-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-bronze-500"></span>
                          </span>
                          <span className="text-xs font-sans text-chocolate-600 dark:text-night-muted font-medium">
                            Channel active
                          </span>
                        </div>

                        <a
                          href={acc.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary py-3 px-6 text-xs font-semibold uppercase tracking-wider flex items-center justify-center space-x-2 group"
                        >
                          <span>{acc.ctaText}</span>
                          <ArrowUpRight className="w-4 h-4 text-bronze-300 dark:text-night-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
