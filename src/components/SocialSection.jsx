import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { InstagramIcon, FacebookIcon, YoutubeIcon, WhatsappIcon } from "./SocialIcons";
import EVAANAMGeometricMark from "./EVAANAMGeometricMark";

const SOCIAL_ACCOUNTS = [
  {
    id: "insta-hospitality",
    platform: "Instagram",
    icon: InstagramIcon,
    tag: "Weddings & Five-Star Floors",
    handle: "@evaanamhospitalitypvt.ltd",
    title: "EVAANAM Hospitality Pvt. Ltd.",
    bio: "Wedding hospitality crew · Five-star floors · Delhi NCR",
    badge: "101 Posts",
    statusText: "Active Floor Feed",
    url: "https://instagram.com/evaanamhospitalitypvt.ltd",
    gradientBorder: "group-hover:border-bronze-500",
    iconBg: "bg-amber-500/10 text-amber-700 group-hover:bg-bronze-500 group-hover:text-chocolate-950",
  },
  {
    id: "insta-corporate",
    platform: "Instagram",
    icon: InstagramIcon,
    tag: "Corporate Summits & Expos",
    handle: "@evaanampvt.ltd",
    title: "EVAANAM Corporate & Operations",
    bio: "Expos, summits, activations & convention floor crews across Delhi NCR",
    badge: "Operations Feed",
    statusText: "Live Rosters",
    url: "https://instagram.com/evaanampvt.ltd",
    gradientBorder: "group-hover:border-emerald-600/60",
    iconBg: "bg-emerald-500/10 text-emerald-800 group-hover:bg-chocolate-700 group-hover:text-cream-50",
  },
  {
    id: "youtube-channel",
    platform: "YouTube",
    icon: YoutubeIcon,
    tag: "Floor In Motion",
    handle: "@evaanampvt.ltd",
    title: "EVAANAM Crew On The Floor",
    bio: "On-floor event highlights, briefing videos & VIP banquet floor reels",
    badge: "Video Library",
    statusText: "Official Channel",
    url: "https://youtube.com/@evaanampvt.ltd",
    gradientBorder: "group-hover:border-red-500/60",
    iconBg: "bg-red-500/10 text-red-700 group-hover:bg-red-700 group-hover:text-cream-50",
  },
  {
    id: "facebook-page",
    platform: "Facebook",
    icon: FacebookIcon,
    tag: "Production Updates",
    handle: "@evaanampvt.ltd",
    title: "EVAANAM Operations",
    bio: "Official company page, deployment notices & event production updates",
    badge: "Official Page",
    statusText: "Verified Business",
    url: "https://facebook.com/evaanampvt.ltd",
    gradientBorder: "group-hover:border-blue-500/60",
    iconBg: "bg-blue-500/10 text-blue-800 group-hover:bg-chocolate-700 group-hover:text-cream-50",
  },
  {
    id: "whatsapp-direct",
    platform: "WhatsApp Operations",
    icon: WhatsappIcon,
    tag: "Instant 24/7 Booking",
    handle: "+91 93100 39929",
    title: "EVAANAM Priority Operations Desk",
    bio: "Instant event floor inquiries, rapid crew substitutions & immediate call-outs",
    badge: "24/7 Rapid Desk",
    statusText: "< 15 Min Response",
    url: "https://wa.me/919310039929",
    gradientBorder: "group-hover:border-emerald-500",
    iconBg: "bg-emerald-500/10 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-cream-50",
  },
];

export default function SocialSection({ showHeader = true, className = "" }) {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className={`py-24 bg-cream-200 border-t border-chocolate-700/10 relative overflow-hidden ${className}`}>
      {/* Subtle Background Architectural Hairline */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="max-w-7xl mx-auto h-full border-x border-chocolate-700/10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {showHeader && (
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <EVAANAMGeometricMark size={38} className="mx-auto mb-1" />
            <span className="micro-label">DIGITAL NETWORK &amp; COMMUNITY</span>
            <h2 className="editorial-heading text-4xl sm:text-5xl text-chocolate-950">
              Follow The Floor
            </h2>
            <p className="text-sm text-chocolate-600 font-light leading-relaxed">
              Behind the scenes, on the floor and between the details. Connect directly with our official operational channels across Delhi NCR.
            </p>
          </div>
        )}

        {/* Animated Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SOCIAL_ACCOUNTS.map((acc, index) => {
            const Icon = acc.icon;
            const isHovered = hoveredCard === acc.id;

            return (
              <a
                key={acc.id}
                href={acc.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredCard(acc.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative bg-cream-100/90 border border-chocolate-700/15 p-8 flex flex-col justify-between transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl hover:bg-cream-50 ${acc.gradientBorder} overflow-hidden`}
                style={{
                  animationDelay: `${index * 80}ms`,
                }}
              >
                {/* Top Subtle Animated Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-gradient-to-r group-hover:from-bronze-500/40 group-hover:via-bronze-500 group-hover:to-bronze-500/40 transition-all duration-500" />

                {/* Shimmer effect highlight */}
                <div
                  className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-cream-50/40 to-transparent pointer-events-none"
                />

                <div className="space-y-5 relative z-10">
                  {/* Card Header: Icon + Badge */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center border border-chocolate-700/10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm ${acc.iconBg}`}
                    >
                      <Icon className="w-5 h-5 transition-transform duration-300" />
                    </div>

                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] uppercase font-mono tracking-wider font-semibold px-2.5 py-1 bg-cream-200 text-chocolate-700 border border-chocolate-700/10 group-hover:border-bronze-500/40 transition-colors">
                        {acc.badge}
                      </span>
                    </div>
                  </div>

                  {/* Micro Category Tag */}
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.22em] font-semibold text-bronze-600 block mb-1">
                      {acc.tag}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl text-chocolate-950 font-medium group-hover:text-bronze-700 transition-colors duration-300 leading-snug">
                      {acc.title}
                    </h3>
                    <p className="font-mono text-xs text-chocolate-500 mt-1">
                      {acc.handle}
                    </p>
                  </div>

                  {/* Bio & Details */}
                  <p className="text-xs text-chocolate-600 font-light leading-relaxed">
                    {acc.bio}
                  </p>
                </div>

                {/* Card Footer: Live Status & Arrow */}
                <div className="mt-8 pt-5 border-t border-chocolate-700/10 flex items-center justify-between relative z-10">
                  <div className="flex items-center space-x-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bronze-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-bronze-500"></span>
                    </span>
                    <span className="text-[11px] font-sans text-chocolate-500 font-medium">
                      {acc.statusText}
                    </span>
                  </div>

                  <div className="flex items-center space-x-1 text-xs uppercase tracking-[0.18em] font-semibold text-chocolate-900 group-hover:text-bronze-600 transition-colors">
                    <span className="text-[11px]">Connect</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-bronze-500 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
