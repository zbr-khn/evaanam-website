import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Phone, Mail, MapPin, ShieldCheck, X, Sparkles, Compass } from "lucide-react";
import { InstagramIcon, FacebookIcon, YoutubeIcon, WhatsappIcon } from "./SocialIcons";
import { COMPANY_INFO } from "../data/evaanamData";
import EVAANAMGeometricMark from "./EVAANAMGeometricMark";

export default function Footer() {
  const [legalModal, setLegalModal] = useState(null); // 'privacy' | 'terms' | null

  return (
    <>
      <footer className="bg-chocolate-950 dark:bg-night-950 text-cream-200 pt-20 pb-12 border-t-2 border-chocolate-800 dark:border-bronze-500/20 transition-colors duration-400">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Top Brand Grid: 5 Distinct Columns */}
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
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block mb-1"></span>
                  </div>
                  <p className="text-xs uppercase tracking-[0.2em] text-amber-400 font-medium mt-1 font-mono">
                    {COMPANY_INFO.tagline}
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-cream-300/80 font-light leading-relaxed max-w-sm">
                Trained, verified and professionally supervised event crews for luxury weddings, corporate summits, international exhibitions and mega-scale activations across Delhi NCR.
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
                  <Link to="/" className="hover:text-amber-300 transition-colors flex items-center space-x-1.5">
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-amber-300 transition-colors flex items-center space-x-1.5">
                    <span>Services &amp; Roles</span>
                  </Link>
                </li>
                <li>
                  <Link to="/venues" className="hover:text-amber-300 transition-colors flex items-center space-x-1.5">
                    <span>Venue Directory</span>
                  </Link>
                </li>
                <li>
                  <Link to="/why-us" className="hover:text-amber-300 transition-colors flex items-center space-x-1.5">
                    <span>Why Us System™</span>
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="hover:text-amber-300 transition-colors flex items-center space-x-1.5">
                    <span>Visual Gallery</span>
                  </Link>
                </li>
                <li>
                  <Link to="/location" className="hover:text-amber-300 transition-colors flex items-center space-x-1.5">
                    <span>Location &amp; Map</span>
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-amber-300 transition-colors flex items-center space-x-1.5">
                    <span>Contact &amp; Booking</span>
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
                    Roster Manpower Calculator ⚡
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
                  <button
                    onClick={() => window.dispatchEvent(new CustomEvent("open-eva-chat"))}
                    className="hover:text-amber-300 transition-colors text-left flex items-center space-x-1.5 cursor-pointer text-amber-400 font-medium"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Eva AI Operations Concierge</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact, Social & Dispatch (3 Cols) */}
            <div className="lg:col-span-3 space-y-4">
              <p className="text-xs uppercase tracking-[0.25em] font-extrabold text-amber-400 font-mono">
                Operations HQ
              </p>
              <div className="space-y-3 text-xs text-cream-300/80">
                <div className="flex items-start space-x-2.5">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    {COMPANY_INFO.address.street}, {COMPANY_INFO.address.locality}, {COMPANY_INFO.address.city} – {COMPANY_INFO.address.pincode}
                  </span>
                </div>

                <div className="space-y-1.5 pt-1">
                  {COMPANY_INFO.phones.map((phone) => (
                    <a
                      key={phone.number}
                      href={`tel:${phone.number}`}
                      className="flex items-center space-x-2.5 hover:text-amber-300 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-amber-400" />
                      <span className="font-mono">{phone.display}</span>
                    </a>
                  ))}
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
                    href="https://wa.me/919310039929"
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
              <span>CIN: <strong className="text-cream-300 font-mono font-normal">{COMPANY_INFO.cin}</strong></span>
              <span className="hidden sm:inline text-chocolate-700 dark:text-night-dim">|</span>
              <span>GSTIN: <strong className="text-cream-300 font-mono font-normal">{COMPANY_INFO.gstin}</strong></span>
            </div>

            <div className="flex items-center space-x-6">
              <button
                onClick={() => setLegalModal('privacy')}
                className="hover:text-amber-400 transition-colors underline-offset-4 hover:underline cursor-pointer"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setLegalModal('terms')}
                className="hover:text-amber-400 transition-colors underline-offset-4 hover:underline cursor-pointer"
              >
                Terms of Use
              </button>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="pt-4 text-center md:text-left text-[11px] text-cream-400/50 border-t border-chocolate-850 dark:border-night-800 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p>© 2026 EVAANAM Manpower &amp; Execution Pvt. Ltd. All rights reserved. Registered under Ministry of Corporate Affairs, Govt. of India.</p>
            <p className="text-[10px] font-mono text-amber-400/70">Engineered for Flawless Hospitality Floors</p>
          </div>
        </div>
      </footer>

      {/* Legal Information Modal */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-night-950/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-cream-100 dark:bg-night-900 text-chocolate-700 dark:text-cream-200 max-w-2xl w-full p-8 md:p-10 shadow-2xl border-2 border-amber-500/40 max-h-[85vh] overflow-y-auto relative rounded-sm">
            <button
              onClick={() => setLegalModal(null)}
              className="absolute top-6 right-6 p-2 text-chocolate-600 dark:text-cream-300 hover:text-chocolate-900 dark:hover:text-cream-50 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="flex items-center space-x-2 mb-2">
              <ShieldCheck className="w-5 h-5 text-amber-500" />
              <span className="micro-label text-amber-700 dark:text-amber-400 font-bold">Legal Documentation</span>
            </div>
            
            <h3 className="font-serif text-2xl md:text-3xl text-chocolate-950 dark:text-cream-50 mb-6 font-medium">
              {legalModal === 'privacy' ? 'Privacy & Data Governance Policy' : 'Terms & Operational Conditions'}
            </h3>

            <div className="space-y-4 text-xs md:text-sm text-chocolate-700 dark:text-night-muted leading-relaxed font-light">
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
                className="btn-primary group font-bold"
              >
                <span>Close Document</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
