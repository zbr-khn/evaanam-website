import React from "react";
import { ArrowUpRight } from "lucide-react";
import { InstagramIcon, FacebookIcon, YoutubeIcon } from "./SocialIcons";
import { COMPANY_INFO } from "../data/evaanamData";

export default function FollowTheFloor({ showHeader = true }) {
  return (
    <section className="py-20 bg-cream-100/60 border-t border-chocolate-700/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {showHeader && (
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="micro-label">Instagram &amp; Community</span>
            <h2 className="editorial-heading text-3xl sm:text-4xl lg:text-5xl mt-2 mb-3">
              Follow The Floor
            </h2>
            <p className="text-sm text-chocolate-600 font-light leading-relaxed">
              Behind the scenes, on the floor and between the details. Live snapshots of our deployment teams across Delhi NCR's most prestigious event venues.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Hospitality Instagram */}
          <div className="card-luxury p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group hover:border-bronze-500/50 transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-full bg-cream-200 border border-bronze-500/30 flex items-center justify-center text-bronze-600">
                  <InstagramIcon className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono font-medium px-2.5 py-1 bg-bronze-500/10 text-bronze-700 rounded-sm">
                  101 Posts
                </span>
              </div>

              <div>
                <span className="micro-label text-bronze-600">Wedding &amp; Five-Star Floors</span>
                <h3 className="font-serif text-2xl text-chocolate-950 font-medium mt-1">
                  {COMPANY_INFO.socials.instagramHospitality.handle}
                </h3>
                <p className="text-xs text-chocolate-500 font-serif italic mt-1">
                  {COMPANY_INFO.socials.instagramHospitality.bio}
                </p>
              </div>

              <p className="text-xs text-chocolate-600 font-light leading-relaxed pt-2">
                Real-time glimpses into bridal shadow escorts, floral welcoming ceremonies, silver service banquet setups, and concierge desks across ITC Maurya, Taj Palace, and The Leela.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-chocolate-700/10 flex items-center justify-between">
              <a
                href={COMPANY_INFO.socials.instagramHospitality.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.18em] font-semibold text-chocolate-900 group-hover:text-bronze-600 transition-colors"
              >
                <span>View Hospitality Feed</span>
                <ArrowUpRight className="w-4 h-4 text-bronze-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <span className="text-[11px] text-chocolate-400 font-mono">@instagram</span>
            </div>
          </div>

          {/* Card 2: Corporate & Operations Instagram */}
          <div className="card-luxury p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group hover:border-bronze-500/50 transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-full bg-cream-200 border border-bronze-500/30 flex items-center justify-center text-bronze-600">
                  <InstagramIcon className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono font-medium px-2.5 py-1 bg-bronze-500/10 text-bronze-700 rounded-sm">
                  Operations Feed
                </span>
              </div>

              <div>
                <span className="micro-label text-bronze-600">Corporate Summits &amp; Expos</span>
                <h3 className="font-serif text-2xl text-chocolate-950 font-medium mt-1">
                  {COMPANY_INFO.socials.instagramCorporate.handle}
                </h3>
                <p className="text-xs text-chocolate-500 font-serif italic mt-1">
                  {COMPANY_INFO.socials.instagramCorporate.bio}
                </p>
              </div>

              <p className="text-xs text-chocolate-600 font-light leading-relaxed pt-2">
                Operational rosters, trade fair check-in stations, stage show runners, and crowd marshaling across Bharat Mandapam, Yashobhoomi, and India Exposition Mart.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-chocolate-700/10 flex items-center justify-between">
              <a
                href={COMPANY_INFO.socials.instagramCorporate.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.18em] font-semibold text-chocolate-900 group-hover:text-bronze-600 transition-colors"
              >
                <span>View Corporate Feed</span>
                <ArrowUpRight className="w-4 h-4 text-bronze-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <span className="text-[11px] text-chocolate-400 font-mono">@instagram</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
