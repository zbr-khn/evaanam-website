import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";
import { InstagramIcon, FacebookIcon, YoutubeIcon, WhatsappIcon } from "./SocialIcons";
import { COMPANY_INFO } from "../data/evaanamData";
import EVAANAMGeometricMark from "./EVAANAMGeometricMark";

export default function Footer() {
  return (
    <footer className="bg-chocolate-950 dark:bg-night-950 text-cream-200 pt-20 pb-12 border-t-2 border-chocolate-800 dark:border-bronze-500/20 transition-colors duration-400">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Brand Grid: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-chocolate-800 dark:border-night-800">
          
          {/* Column 1: Brand & Positioning (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center space-x-3.5">
              <EVAANAMGeometricMark size={40} darkTheme={true} className="shrink-0" />
              <div className="flex flex-col items-start">
                <div className="flex items-center space-x-2">
                  <span className="font-serif text-3xl font-semibold tracking-[0.2em] text-cream-50 uppercase">
                    EVAANAM
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block mb-1" />
                </div>
                <p className="text-xs uppercase tracking-[0.2em] text-amber-400 font-medium mt-1 font-mono">
                  {COMPANY_INFO.tagline}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-cream-300/80 font-light leading-relaxed max-w-sm">
              Trained, verified and professionally supervised event crews for luxury weddings, corporate summits, international exhibitions and large-scale activations across Delhi NCR.
            </p>

            <div className="pt-2">
              <Link
                to="/contact"
                className="btn-primary group py-3 px-6 text-xs font-bold uppercase tracking-wider inline-flex items-center space-x-2"
              >
                <span>Request Floor Deployment</span>
                <ArrowUpRight className="w-4 h-4 ml-1 text-bronze-300 dark:text-night-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Column 2: All Website Pages Navigation (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-xs uppercase tracking-[0.25em] font-extrabold text-amber-400 font-mono">
              All Pages
            </p>
            <ul className="space-y-2.5 text-xs font-sans text-cream-300/80">
              <li>
                <Link to="/" className="hover:text-amber-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-amber-300 transition-colors">
                  Services &amp; Roles
                </Link>
              </li>
              <li>
                <Link to="/venues" className="hover:text-amber-300 transition-colors">
                  Venue Directory
                </Link>
              </li>
              <li>
                <Link to="/why-us" className="hover:text-amber-300 transition-colors">
                  Why Us System
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-amber-300 transition-colors">
                  Visual Gallery
                </Link>
              </li>
              <li>
                <Link to="/location" className="hover:text-amber-300 transition-colors">
                  Location &amp; Map
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-300 transition-colors">
                  Contact &amp; Booking
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Specialized Divisions & Features (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-xs uppercase tracking-[0.25em] font-extrabold text-amber-400 font-mono">
              Divisions &amp; Tools
            </p>
            <ul className="space-y-2.5 text-xs font-sans text-cream-300/80">
              <li>
                <Link to="/services" className="hover:text-amber-300 transition-colors">
                  Wedding Hospitality (14 Roles)
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-amber-300 transition-colors">
                  Corporate &amp; Summits (13 Roles)
                </Link>
              </li>
              <li>
                <Link to="/services#calculator-section" className="hover:text-amber-300 transition-colors text-amber-300 font-medium">
                  Roster Manpower Calculator
                </Link>
              </li>
              <li>
                <Link to="/venues" className="hover:text-amber-300 transition-colors">
                  Five-Star Hotel Banquets (20)
                </Link>
              </li>
              <li>
                <Link to="/venues" className="hover:text-amber-300 transition-colors">
                  Mega Convention Arenas (20)
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-amber-300 transition-colors">
                  Executive Celebrity Escorts
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-amber-300 transition-colors">
                  Privacy &amp; Data Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="hover:text-amber-300 transition-colors">
                  Terms &amp; Operational Agreement
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact, Social & Dispatch (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-xs uppercase tracking-[0.25em] font-extrabold text-amber-400 font-mono">
              Operations Hub
            </p>
            <div className="space-y-3 text-xs text-cream-300/80">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {COMPANY_INFO.address.full}
                </span>
              </div>

              <div className="space-y-1.5 pt-1">
                <Link
                  to="/contact"
                  className="flex items-center space-x-2.5 hover:text-amber-300 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span className="font-mono">Central Requisition Desk</span>
                </Link>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center space-x-2.5 hover:text-amber-300 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                  <span className="font-mono">{COMPANY_INFO.email}</span>
                </a>
              </div>

              {/* Social Channels Strip */}
              <div className="pt-2 flex items-center space-x-3">
                <a
                  href={COMPANY_INFO.socials.instagramHospitality.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-sm bg-chocolate-900 dark:bg-night-800 hover:bg-amber-500 hover:text-night-950 text-cream-300 transition-all shadow-sm"
                  aria-label="Instagram Hospitality"
                  title="Instagram Weddings"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href={COMPANY_INFO.socials.instagramCorporate.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-sm bg-chocolate-900 dark:bg-night-800 hover:bg-emerald-500 hover:text-night-950 text-cream-300 transition-all shadow-sm"
                  aria-label="Instagram Corporate"
                  title="Instagram Corporate"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href={COMPANY_INFO.socials.youtube.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-sm bg-chocolate-900 dark:bg-night-800 hover:bg-red-500 hover:text-night-950 text-cream-300 transition-all shadow-sm"
                  aria-label="YouTube Channel"
                  title="YouTube"
                >
                  <YoutubeIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href={COMPANY_INFO.socials.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-sm bg-chocolate-900 dark:bg-night-800 hover:bg-blue-500 hover:text-night-950 text-cream-300 transition-all shadow-sm"
                  aria-label="Facebook Page"
                  title="Facebook"
                >
                  <FacebookIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://wa.me/?text=Hello%20Event%20Operations%2C%20I%20would%20like%20to%20inquire%20about%20event%20crew%20deployment."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-sm bg-chocolate-900 dark:bg-night-800 hover:bg-emerald-600 hover:text-night-950 text-cream-300 transition-all shadow-sm"
                  aria-label="WhatsApp Operations"
                  title="WhatsApp"
                >
                  <WhatsappIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Corporate Credentials Bar */}
        <div className="pt-8 pb-4 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-cream-400/60 font-sans">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="font-bold text-cream-200">
              {COMPANY_INFO.name}
            </span>
            <span className="hidden sm:inline text-chocolate-700 dark:text-night-dim">|</span>
            <span>Registry: <strong className="text-cream-300 font-mono font-normal">Delhi NCR Operations</strong></span>
            <span className="hidden sm:inline text-chocolate-700 dark:text-night-dim">|</span>
            <span>Standards: <strong className="text-cream-300 font-mono font-normal">Five-Star Vetted &amp; Verified</strong></span>
          </div>

          <div className="flex items-center space-x-6">
            <Link
              to="/privacy-policy"
              className="hover:text-amber-400 transition-colors underline-offset-4 hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-and-conditions"
              className="hover:text-amber-400 transition-colors underline-offset-4 hover:underline"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-4 text-center md:text-left text-[11px] text-cream-400/50 border-t border-chocolate-850 dark:border-night-800 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© 2026 {COMPANY_INFO.name}. All rights reserved.</p>
          <p className="text-[10px] font-mono text-amber-400/70">Engineered for Flawless Hospitality Floors</p>
        </div>
      </div>
    </footer>
  );
}
