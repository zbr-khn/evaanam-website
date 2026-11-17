import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Navigation, Phone, Mail, Clock, Train, Car, Plane, Compass, Copy, Check, ArrowUpRight, ShieldCheck } from "lucide-react";
import { COMPANY_INFO } from "../data/evaanamData";
import GeometricDivider from "../components/GeometricDivider";

export default function LocationPage() {
  const [copied, setCopied] = useState(false);
  const [mapType, setMapType] = useState("roadmap"); // 'roadmap' | 'satellite'

  const fullAddress = COMPANY_INFO.address.full;
  const embedMapUrl = `https://maps.google.com/maps?q=New%20Delhi%2C%20India&t=${mapType === "satellite" ? "k" : ""}&z=12&ie=UTF8&iwloc=&output=embed`;

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="animate-fade-in pt-28">
      {/* 1. HERO SECTION */}
      <section className="relative py-20 px-6 sm:px-8 lg:px-12 border-b border-chocolate-700/10 dark:border-white/10 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-amber-500/10 dark:bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-800 dark:text-amber-300 text-xs font-mono font-medium">
              <Compass className="w-3.5 h-3.5" />
              <span>OFFICE LOCATION &amp; OPERATIONS BASE</span>
            </div>
            <h1 className="editorial-heading text-5xl sm:text-6xl md:text-7xl text-chocolate-950 dark:text-cream-50">
              Where we operate, <br />
              <span className="italic text-glow-amber">and where to find us.</span>
            </h1>
            <p className="text-base sm:text-lg text-chocolate-600 dark:text-night-muted font-light leading-relaxed">
              Our central operations hub coordinates workforce deployments across Delhi NCR, strategically serving luxury hotel ballrooms and convention arenas across South Delhi, Aerocity, Gurgaon, and Noida.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={handleCopyAddress}
                className="btn-primary group flex items-center space-x-2.5 text-xs font-bold px-6 py-3.5"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-night-950" />}
                <span>{copied ? "Address Copied to Clipboard!" : "Copy Full Office Address"}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE GOOGLE MAP & LOCATION DOSSIER */}
      <section className="py-16 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Interactive Map Container */}
            <div className="lg:col-span-8 space-y-4">
              {/* Map Header & Controls */}
              <div className="flex items-center justify-between p-4 glass-card rounded-2xl">
                <div className="flex items-center space-x-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-chocolate-900 dark:text-cream-50">
                    Live Operations Base · New Delhi
                  </span>
                </div>

                {/* Map View Toggle Buttons */}
                <div className="flex items-center space-x-1.5 text-xs font-sans">
                  <button
                    type="button"
                    onClick={() => setMapType("roadmap")}
                    className={`px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-full transition-all border ${
                      mapType === "roadmap"
                        ? "bg-gradient-to-r from-amber-500 to-amber-600 text-night-950 border-amber-400 shadow-sm"
                        : "text-chocolate-600 dark:text-night-muted hover:text-chocolate-900 dark:hover:text-cream-50 border-transparent"
                    }`}
                  >
                    Map
                  </button>
                  <button
                    type="button"
                    onClick={() => setMapType("satellite")}
                    className={`px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-full transition-all border ${
                      mapType === "satellite"
                        ? "bg-gradient-to-r from-amber-500 to-amber-600 text-night-950 border-amber-400 shadow-sm"
                        : "text-chocolate-600 dark:text-night-muted hover:text-chocolate-900 dark:hover:text-cream-50 border-transparent"
                    }`}
                  >
                    Satellite
                  </button>
                </div>
              </div>

              {/* Embedded Google Map Iframe */}
              <div className="relative w-full h-[450px] sm:h-[540px] bg-night-900 rounded-3xl overflow-hidden glass-card shadow-2xl p-1.5">
                <div className="w-full h-full rounded-2xl overflow-hidden relative">
                  <iframe
                    title="EVAANAM Office Google Map Location"
                    src={embedMapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />

                  {/* Floating Map Overlay Badge */}
                  <div className="absolute bottom-4 left-4 p-4 rounded-2xl bg-night-950/85 backdrop-blur-xl border border-white/10 text-cream-100 text-xs font-mono space-y-1 shadow-2xl pointer-events-none hidden sm:block">
                    <div className="flex items-center space-x-2 text-amber-400 font-bold">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>EVAANAM Operations Hub</span>
                    </div>
                    <p className="text-[11px] text-cream-300">Central Business District, New Delhi</p>
                    <p className="text-[10px] text-cream-400/80">Delhi NCR Operations Corridor</p>
                  </div>
                </div>
              </div>

              {/* Transit & Commute Highlights Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-5 glass-card rounded-2xl space-y-1.5 hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center space-x-2 text-amber-600 dark:text-amber-400">
                    <Train className="w-4 h-4" />
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider">Metro Access</span>
                  </div>
                  <p className="text-xs text-chocolate-900 dark:text-cream-100 font-medium">Jamia Millia Islamia</p>
                  <p className="text-[11px] text-chocolate-500 dark:text-night-dim">Magenta Line Corridor</p>
                </div>

                <div className="p-5 glass-card rounded-2xl space-y-1.5 hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center space-x-2 text-amber-600 dark:text-amber-400">
                    <Car className="w-4 h-4" />
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider">Arterial Roads</span>
                  </div>
                  <p className="text-xs text-chocolate-900 dark:text-cream-100 font-medium">Ring Road &amp; Mathura Road</p>
                  <p className="text-[11px] text-chocolate-500 dark:text-night-dim">Direct access to DND &amp; Ashram</p>
                </div>

                <div className="p-5 glass-card rounded-2xl space-y-1.5 hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center space-x-2 text-amber-600 dark:text-amber-400">
                    <Plane className="w-4 h-4" />
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider">Airport Corridor</span>
                  </div>
                  <p className="text-xs text-chocolate-900 dark:text-cream-100 font-medium">IGI Airport (T3 / T1)</p>
                  <p className="text-[11px] text-chocolate-500 dark:text-night-dim">~25 mins via Outer Ring Road</p>
                </div>
              </div>
            </div>

            {/* Right Column: Office Details Card */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-8 space-y-6 glass-card rounded-3xl shadow-xl">
                <div>
                  <span className="micro-label text-amber-700 dark:text-amber-400 font-bold">OPERATIONS HUB</span>
                  <h3 className="font-serif text-2xl text-chocolate-950 dark:text-cream-50 font-medium mt-1">
                    Central Operations Base
                  </h3>
                </div>

                {/* Address Box */}
                <div className="p-4 rounded-2xl bg-white/50 dark:bg-white/[0.03] border border-chocolate-700/10 dark:border-white/10 space-y-2 backdrop-blur-sm">
                  <div className="flex items-start space-x-2.5">
                    <MapPin className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-1" />
                    <div className="text-xs text-chocolate-700 dark:text-cream-100 leading-relaxed font-light">
                      <strong className="block font-semibold text-chocolate-950 dark:text-cream-50">{COMPANY_INFO.name}</strong>
                      {COMPANY_INFO.address.full}
                    </div>
                  </div>
                </div>

                {/* Phone Lines */}
                <div className="space-y-3">
                  <span className="micro-label text-amber-700 dark:text-amber-400 font-bold">OPERATIONS HOTLINES</span>
                  {COMPANY_INFO.phones.map((phone) => (
                    <a
                      key={phone.number}
                      href={`tel:${phone.number}`}
                      className="flex items-center justify-between p-3.5 rounded-2xl bg-white/40 dark:bg-white/[0.03] border border-chocolate-700/10 dark:border-white/10 hover:border-amber-400 transition-all group backdrop-blur-sm"
                    >
                      <div className="flex items-center space-x-2.5">
                        <Phone className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                        <div>
                          <p className="text-xs font-mono font-bold text-chocolate-900 dark:text-cream-50">
                            {phone.display}
                          </p>
                          <p className="text-[10px] text-chocolate-500 dark:text-night-dim">
                            {phone.label}
                          </p>
                        </div>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  ))}
                </div>

                {/* Official Email */}
                <div>
                  <span className="micro-label text-amber-700 dark:text-amber-400 font-bold">OFFICIAL EMAIL</span>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="mt-2 flex items-center justify-between p-3.5 rounded-2xl bg-white/40 dark:bg-white/[0.03] border border-chocolate-700/10 dark:border-white/10 hover:border-amber-400 transition-all group backdrop-blur-sm"
                  >
                    <div className="flex items-center space-x-2.5">
                      <Mail className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                      <div>
                        <p className="text-xs font-mono font-bold text-chocolate-900 dark:text-cream-50">
                          {COMPANY_INFO.email}
                        </p>
                        <p className="text-[10px] text-chocolate-500 dark:text-night-dim">
                          Operations &amp; Requisition Desk
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

                {/* Working Hours */}
                <div className="pt-2 border-t border-chocolate-700/10 dark:border-white/10 space-y-2">
                  <div className="flex items-center space-x-2 text-xs text-chocolate-700 dark:text-cream-200">
                    <Clock className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                    <span>Office Desk: Mon - Sat (9:30 AM to 7:30 PM)</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-chocolate-700 dark:text-cream-200">
                    <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>24/7 On-Call Event Floor Dispatch</span>
                  </div>
                </div>

                {/* Action button: Copy Address */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleCopyAddress}
                    className="btn-secondary w-full py-3.5 text-xs text-center flex items-center justify-center space-x-2 font-bold cursor-pointer rounded-full"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4 text-amber-500" />}
                    <span>{copied ? "Address Copied!" : "Copy Full Office Address"}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GeometricDivider label="DELHI NCR DISPATCH HUBS" />

      {/* 3. DELHI NCR REGIONAL COVERAGE CORRIDORS */}
      <section className="py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-800 dark:text-amber-300 text-xs font-mono font-medium">
              DISPATCH HUBS
            </span>
            <h2 className="editorial-heading text-3xl sm:text-4xl text-chocolate-950 dark:text-cream-50 mt-2">
              Regional Coverage Corridors
            </h2>
            <p className="text-xs sm:text-sm text-chocolate-600 dark:text-night-muted font-light">
              Our floor teams operate with pre-mapped muster points across every major hospitality and exhibition precinct in the National Capital Region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Hub 1 */}
            <div className="p-6 space-y-3 glass-card glass-card-hover rounded-2xl group cursor-pointer">
              <span className="text-[10px] font-mono uppercase text-amber-600 dark:text-amber-400 tracking-wider font-extrabold block">
                CORRIDOR 01 · CENTRAL &amp; SOUTH
              </span>
              <h4 className="font-serif text-xl font-medium text-chocolate-950 dark:text-cream-50 group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">
                Lutyens &amp; Diplomatic Enclave
              </h4>
              <p className="text-xs text-chocolate-600 dark:text-night-muted font-light leading-relaxed">
                ITC Maurya, Taj Palace, The Leela Palace, Vigyan Bhawan, and Bharat Mandapam.
              </p>
            </div>

            {/* Hub 2 */}
            <div className="p-6 space-y-3 glass-card glass-card-hover rounded-2xl group cursor-pointer">
              <span className="text-[10px] font-mono uppercase text-amber-600 dark:text-amber-400 tracking-wider font-extrabold block">
                CORRIDOR 02 · AEROCITY &amp; IGI
              </span>
              <h4 className="font-serif text-xl font-medium text-chocolate-950 dark:text-cream-50 group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">
                Aerocity Hospitality District
              </h4>
              <p className="text-xs text-chocolate-600 dark:text-night-muted font-light leading-relaxed">
                Andaz Delhi, JW Marriott, Roseate House, Pullman, and Worldmark Convention ballrooms.
              </p>
            </div>

            {/* Hub 3 */}
            <div className="p-6 space-y-3 glass-card glass-card-hover rounded-2xl group cursor-pointer">
              <span className="text-[10px] font-mono uppercase text-amber-600 dark:text-amber-400 tracking-wider font-extrabold block">
                CORRIDOR 03 · GURGAON &amp; NH-48
              </span>
              <h4 className="font-serif text-xl font-medium text-chocolate-950 dark:text-cream-50 group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">
                Gurgaon &amp; Sohna Road
              </h4>
              <p className="text-xs text-chocolate-600 dark:text-night-muted font-light leading-relaxed">
                The Oberoi, The Westin, ITC Grand Bharat, DLF CyberHub, and Karma Lakelands.
              </p>
            </div>

            {/* Hub 4 */}
            <div className="p-6 space-y-3 glass-card glass-card-hover rounded-2xl group cursor-pointer">
              <span className="text-[10px] font-mono uppercase text-amber-600 dark:text-amber-400 tracking-wider font-extrabold block">
                CORRIDOR 04 · DWARKA &amp; NOIDA
              </span>
              <h4 className="font-serif text-xl font-medium text-chocolate-950 dark:text-cream-50 group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">
                Mega Exhibition Centres
              </h4>
              <p className="text-xs text-chocolate-600 dark:text-night-muted font-light leading-relaxed">
                Yashobhoomi (IICC Dwarka), Pragati Maidan (IECC), and India Exposition Mart (IEML).
              </p>
            </div>
          </div>

          <div className="text-center pt-4">
            <Link to="/contact" className="btn-primary px-8 py-4 font-bold group inline-flex items-center justify-center space-x-2">
              <span>Schedule an Operations Meeting</span>
              <ArrowUpRight className="w-4 h-4 ml-1 text-night-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
