import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Phone, Mail, MapPin, ShieldCheck, X } from "lucide-react";
import { InstagramIcon, FacebookIcon, YoutubeIcon } from "./SocialIcons";
import { COMPANY_INFO } from "../data/evaanamData";
import EVAANAMGeometricMark from "./EVAANAMGeometricMark";

export default function Footer() {
  const [legalModal, setLegalModal] = useState(null); // 'privacy' | 'terms' | null

  return (
    <>
      <footer className="bg-chocolate-950 dark:bg-night-950 text-cream-200 pt-20 pb-12 border-t border-chocolate-800 dark:border-bronze-500/15 transition-colors duration-400">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Top Brand Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-16 border-b border-chocolate-800 dark:border-night-800">
            {/* Column 1: Brand & Positioning */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3.5">
                <EVAANAMGeometricMark size={40} darkTheme={true} className="shrink-0" />
                <div className="flex flex-col items-start">
                  <div className="flex items-center space-x-2">
                    <span className="font-serif text-3xl font-semibold tracking-[0.2em] text-cream-50 uppercase">
                      EVAANAM
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-bronze-500 inline-block mb-1"></span>
                  </div>
                  <p className="text-xs uppercase tracking-[0.2em] text-bronze-400 font-medium mt-1">
                    {COMPANY_INFO.tagline}
                  </p>
                </div>
              </div>
              <p className="text-sm text-cream-300/80 font-light leading-relaxed max-w-md">
                Trained, verified and professionally supervised event crews for luxury weddings, corporate summits, international exhibitions and mega-scale activations across Delhi NCR.
              </p>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-bronze-400 hover:text-cream-50 font-semibold border-b border-bronze-500/50 pb-1 transition-colors"
                >
                  <span>Request Crew For Your Floor</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Column 2: Navigation Links */}
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.25em] font-semibold text-bronze-400">
                Navigation
              </p>
              <ul className="space-y-2.5 text-xs font-sans text-cream-300/80">
                <li>
                  <Link to="/" className="hover:text-cream-50 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-cream-50 transition-colors">
                    Specialist Services (27 Roles)
                  </Link>
                </li>
                <li>
                  <Link to="/venues" className="hover:text-cream-50 transition-colors">
                    Venue Directory (40+ Venues)
                  </Link>
                </li>
                <li>
                  <Link to="/why-us" className="hover:text-cream-50 transition-colors">
                    Why Us &amp; Operations System
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="hover:text-cream-50 transition-colors">
                    Floor Visual Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/testimonials" className="hover:text-cream-50 transition-colors text-amber-300">
                    Client Testimonials (5.0 ★)
                  </Link>
                </li>
                <li>
                  <Link to="/location" className="hover:text-cream-50 transition-colors text-bronze-300">
                    Office Location &amp; Google Map
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-cream-50 transition-colors">
                    Contact &amp; Manpower Booking
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Social & Community */}
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.25em] font-semibold text-bronze-400">
                Follow The Floor
              </p>
              <div className="space-y-3 text-xs text-cream-300/80">
                <a
                  href={COMPANY_INFO.socials.instagramHospitality.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start space-x-2 hover:text-cream-50 transition-colors"
                >
                  <InstagramIcon className="w-4 h-4 text-bronze-400 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="block font-medium text-cream-100">Hospitality Desk</span>
                    <span className="text-[11px] text-cream-400/70">{COMPANY_INFO.socials.instagramHospitality.handle}</span>
                  </div>
                </a>
                <a
                  href={COMPANY_INFO.socials.instagramCorporate.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start space-x-2 hover:text-cream-50 transition-colors"
                >
                  <InstagramIcon className="w-4 h-4 text-bronze-400 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="block font-medium text-cream-100">Corporate &amp; Expos</span>
                    <span className="text-[11px] text-cream-400/70">{COMPANY_INFO.socials.instagramCorporate.handle}</span>
                  </div>
                </a>
                <div className="flex items-center space-x-4 pt-1">
                  <a
                    href={COMPANY_INFO.socials.facebook.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded bg-chocolate-900 dark:bg-night-800 hover:bg-bronze-600 hover:text-chocolate-950 text-cream-300 transition-colors"
                    aria-label="Facebook"
                  >
                    <FacebookIcon className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={COMPANY_INFO.socials.youtube.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded bg-chocolate-900 dark:bg-night-800 hover:bg-bronze-600 hover:text-chocolate-950 text-cream-300 transition-colors"
                    aria-label="YouTube"
                  >
                    <YoutubeIcon className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Column 4: Contact & Operations Desk */}
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.25em] font-semibold text-bronze-400">
                Operations HQ
              </p>
              <div className="space-y-3 text-xs text-cream-300/80">
                <div className="flex items-start space-x-2.5">
                  <MapPin className="w-4 h-4 text-bronze-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    {COMPANY_INFO.address.line1}, {COMPANY_INFO.address.locality}, {COMPANY_INFO.address.city} – {COMPANY_INFO.address.pincode}
                  </span>
                </div>
                <div className="space-y-1.5 pt-1">
                  <a
                    href={`tel:${COMPANY_INFO.phones[0].number}`}
                    className="flex items-center space-x-2.5 hover:text-bronze-300 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-bronze-400" />
                    <span>{COMPANY_INFO.phones[0].display}</span>
                  </a>
                  <a
                    href={`tel:${COMPANY_INFO.phones[1].number}`}
                    className="flex items-center space-x-2.5 hover:text-bronze-300 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-bronze-400" />
                    <span>{COMPANY_INFO.phones[1].display}</span>
                  </a>
                </div>
                <div className="pt-1">
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="flex items-center space-x-2.5 hover:text-bronze-300 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-bronze-400" />
                    <span>{COMPANY_INFO.email}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Legal & Corporate Credentials Bar */}
          <div className="pt-8 pb-4 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-cream-400/60 font-sans">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <span className="font-semibold text-cream-200">
                {COMPANY_INFO.name}
              </span>
              <span className="hidden sm:inline text-chocolate-700 dark:text-night-dim">|</span>
              <span>CIN: <strong className="text-cream-300 font-mono font-normal">{COMPANY_INFO.cin}</strong></span>
              <span className="hidden sm:inline text-chocolate-700 dark:text-night-dim">|</span>
              <span>GSTIN: <strong className="text-cream-300 font-mono font-normal">{COMPANY_INFO.gstin}</strong></span>
            </div>

            <div className="flex items-center space-x-6">
              <button
                onClick={() => setLegalModal('privacy')}
                className="hover:text-bronze-400 transition-colors underline-offset-4 hover:underline"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setLegalModal('terms')}
                className="hover:text-bronze-400 transition-colors underline-offset-4 hover:underline"
              >
                Terms of Use
              </button>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="pt-4 text-center md:text-left text-[11px] text-cream-400/50 border-t border-chocolate-850 dark:border-night-800">
            <p>© 2026 EVAANAM Manpower &amp; Execution Pvt. Ltd. All rights reserved. Registered under Ministry of Corporate Affairs, Govt. of India.</p>
          </div>
        </div>
      </footer>

      {/* Legal Information Modal */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-night-950/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-cream-100 dark:bg-night-900 text-chocolate-700 dark:text-cream-200 max-w-2xl w-full p-8 md:p-10 shadow-2xl border border-bronze-500/30 max-h-[85vh] overflow-y-auto relative">
            <button
              onClick={() => setLegalModal(null)}
              className="absolute top-6 right-6 p-2 text-chocolate-600 dark:text-cream-300 hover:text-chocolate-900 dark:hover:text-cream-50 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="flex items-center space-x-2 mb-2">
              <ShieldCheck className="w-5 h-5 text-bronze-500" />
              <span className="micro-label">Legal Documentation</span>
            </div>
            
            <h3 className="font-serif text-2xl md:text-3xl text-chocolate-900 dark:text-cream-50 mb-6">
              {legalModal === 'privacy' ? 'Privacy & Data Governance Policy' : 'Terms & Operational Conditions'}
            </h3>

            <div className="space-y-4 text-xs md:text-sm text-chocolate-600 dark:text-night-muted leading-relaxed font-light">
              {legalModal === 'privacy' ? (
                <>
                  <p>
                    EVAANAM Manpower &amp; Execution Pvt. Ltd. (CIN: {COMPANY_INFO.cin}) is committed to safeguarding the privacy and confidential information of our clients, event partners, and workforce personnel.
                  </p>
                  <p>
                    <strong>1. Information Collection:</strong> We collect contact details, event dates, venue specifications, and operational requirements solely for fulfilling manpower contracts, staffing rosters, and regulatory compliance.
                  </p>
                  <p>
                    <strong>2. Confidentiality on High-Profile Floors:</strong> All EVAANAM crew members undergo NDA onboarding protocols. Photography of private client areas, dignitary green rooms, or confidential event materials is strictly prohibited.
                  </p>
                  <p>
                    <strong>3. Data Security:</strong> Client event dossiers and crew verification records are stored on encrypted infrastructure and never sold or shared with unassociated third parties.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    These terms govern the engagement and deployment of trained event manpower by EVAANAM Manpower &amp; Execution Pvt. Ltd. for events across Delhi NCR.
                  </p>
                  <p>
                    <strong>1. Deployment &amp; Briefing:</strong> Manpower rosters are finalized following requirement sign-off. Pre-shift muster takes place on-site ahead of event call-time.
                  </p>
                  <p>
                    <strong>2. Verified Backup Buffer:</strong> EVAANAM coordinates stand-by personnel to maintain operational continuity on active event floors.
                  </p>
                  <p>
                    <strong>3. Statutory Compliance:</strong> All deployed personnel adhere to regulatory guidelines, state labor compliances, and verified identity screening before reaching venue floors.
                  </p>
                </>
              )}
            </div>

            <div className="mt-8 pt-6 border-t border-chocolate-700/15 dark:border-night-700 flex justify-end">
              <button
                onClick={() => setLegalModal(null)}
                className="btn-primary"
              >
                Close Document
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
