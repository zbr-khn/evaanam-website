import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Navigation, Phone, Mail, Clock, Train, Car, Plane, Compass, ExternalLink, Copy, Check, ArrowUpRight, ShieldCheck } from "lucide-react";
import { COMPANY_INFO } from "../data/evaanamData";
import GeometricDivider from "../components/GeometricDivider";

export default function LocationPage() {
  const [copied, setCopied] = useState(false);
  const [mapType, setMapType] = useState("roadmap"); // 'roadmap' | 'satellite'

  const fullAddress = "C-58, 1st Floor, Block-C, Johri Farm, New Friends Colony, New Delhi, Delhi – 110025";
  const googleMapsSearchUrl = "https://www.google.com/maps/search/?api=1&query=C-58+Block-C+Johri+Farm+New+Friends+Colony+New+Delhi+110025";
  const embedMapUrl = `https://maps.google.com/maps?q=C-58%2C%201st%20Floor%2C%20Block-C%2C%20Johri%20Farm%2C%20New%20Friends%20Colony%2C%20New%20Delhi%20110025&t=${mapType === "satellite" ? "k" : ""}&z=16&ie=UTF8&iwloc=&output=embed`;

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="animate-fade-in pt-28">
      {/* 1. HERO SECTION */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-transparent border-b border-chocolate-700/10 dark:border-bronze-500/15">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-6">
            <span className="micro-label flex items-center space-x-1.5 text-bronze-600 dark:text-bronze-400">
              <Compass className="w-3.5 h-3.5" />
              <span>OFFICE LOCATION &amp; OPERATIONS BASE</span>
            </span>
            <h1 className="editorial-heading text-5xl sm:text-6xl md:text-7xl text-chocolate-950 dark:text-cream-50">
              Where we operate, <br />
              <span className="italic text-bronze-600 dark:text-bronze-400">and where to find us.</span>
            </h1>
            <p className="text-base sm:text-lg text-chocolate-600 dark:text-night-muted font-light leading-relaxed">
              Our central operations office is situated in New Friends Colony, South Delhi — strategically connected to Ring Road and Mathura Road for rapid crew deployment across Delhi, Aerocity, Gurgaon, and Noida.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={googleMapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center space-x-2 text-xs"
              >
                <Navigation className="w-4 h-4 text-cream-50 dark:text-night-950" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                type="button"
                onClick={handleCopyAddress}
                className="btn-secondary flex items-center space-x-2 text-xs"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-bronze-500" />}
                <span>{copied ? "Address Copied!" : "Copy Full Address"}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE GOOGLE MAP & LOCATION DOSSIER */}
      <section className="py-16 px-6 sm:px-8 lg:px-12 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Interactive Map Container */}
            <div className="lg:col-span-8 space-y-4">
              {/* Map Header & Controls */}
              <div className="flex items-center justify-between p-4 bg-cream-200 dark:bg-night-800 border border-chocolate-700/15 dark:border-bronze-500/20 rounded-t-sm">
                <div className="flex items-center space-x-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-chocolate-900 dark:text-cream-50">
                    Live Operations Base · New Delhi
                  </span>
                </div>

                {/* Map View Toggle Buttons */}
                <div className="flex items-center space-x-1.5 text-xs font-sans">
                  <button
                    type="button"
                    onClick={() => setMapType("roadmap")}
                    className={`px-3 py-1 text-[11px] font-semibold uppercase tracking-wider rounded transition-all ${
                      mapType === "roadmap"
                        ? "bg-brand-green dark:bg-bronze-500 text-cream-50 dark:text-night-950"
                        : "text-chocolate-600 dark:text-night-muted hover:text-chocolate-900 dark:hover:text-cream-50"
                    }`}
                  >
                    Map
                  </button>
                  <button
                    type="button"
                    onClick={() => setMapType("satellite")}
                    className={`px-3 py-1 text-[11px] font-semibold uppercase tracking-wider rounded transition-all ${
                      mapType === "satellite"
                        ? "bg-brand-green dark:bg-bronze-500 text-cream-50 dark:text-night-950"
                        : "text-chocolate-600 dark:text-night-muted hover:text-chocolate-900 dark:hover:text-cream-50"
                    }`}
                  >
                    Satellite
                  </button>
                </div>
              </div>

              {/* Embedded Google Map Iframe */}
              <div className="relative w-full h-[450px] sm:h-[540px] bg-night-900 border-x border-b border-chocolate-700/15 dark:border-bronze-500/20 shadow-md overflow-hidden rounded-b-sm">
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
                <div className="absolute bottom-4 left-4 p-3 bg-night-900/90 backdrop-blur-md border border-bronze-500/30 text-cream-100 text-xs font-mono space-y-1 shadow-lg pointer-events-none hidden sm:block">
                  <div className="flex items-center space-x-1.5 text-bronze-400 font-bold">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>EVAANAM Manpower &amp; Execution</span>
                  </div>
                  <p className="text-[11px] text-cream-300">Johri Farm, New Friends Colony, New Delhi</p>
                  <p className="text-[10px] text-cream-400/80">LAT 28.5630° N · LON 77.2750° E</p>
                </div>
              </div>

              {/* Transit & Commute Highlights Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 bg-cream-100 dark:bg-night-800 border border-chocolate-700/10 dark:border-bronze-500/15 rounded-sm space-y-1">
                  <div className="flex items-center space-x-2 text-bronze-600 dark:text-bronze-400">
                    <Train className="w-4 h-4" />
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider">Metro Access</span>
                  </div>
                  <p className="text-xs text-chocolate-900 dark:text-cream-100 font-medium">Sukhdev Vihar / Jamia Station</p>
                  <p className="text-[11px] text-chocolate-500 dark:text-night-dim">Magenta Line (~1.2 km / 4 mins)</p>
                </div>

                <div className="p-4 bg-cream-100 dark:bg-night-800 border border-chocolate-700/10 dark:border-bronze-500/15 rounded-sm space-y-1">
                  <div className="flex items-center space-x-2 text-bronze-600 dark:text-bronze-400">
                    <Car className="w-4 h-4" />
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider">Arterial Roads</span>
                  </div>
                  <p className="text-xs text-chocolate-900 dark:text-cream-100 font-medium">Ring Road &amp; Mathura Road</p>
                  <p className="text-[11px] text-chocolate-500 dark:text-night-dim">Direct access to DND &amp; Ashram</p>
                </div>

                <div className="p-4 bg-cream-100 dark:bg-night-800 border border-chocolate-700/10 dark:border-bronze-500/15 rounded-sm space-y-1">
                  <div className="flex items-center space-x-2 text-bronze-600 dark:text-bronze-400">
                    <Plane className="w-4 h-4" />
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider">Airport Corridor</span>
                  </div>
                  <p className="text-xs text-chocolate-900 dark:text-cream-100 font-medium">IGI Airport (T3 / T1)</p>
                  <p className="text-[11px] text-chocolate-500 dark:text-night-dim">~25 mins via Outer Ring Road</p>
                </div>
              </div>
            </div>

            {/* Right Column: Office Details Card */}
            <div className="lg:col-span-4 space-y-6">
              <div className="card-luxury p-8 space-y-6 dark:bg-night-800 dark:border-bronze-500/20 shadow-md">
                <div>
                  <span className="micro-label text-bronze-600 dark:text-bronze-400">REGISTERED OFFICE</span>
                  <h3 className="font-serif text-2xl text-chocolate-950 dark:text-cream-50 font-medium mt-1">
                    Central Operations Base
                  </h3>
                </div>

                {/* Address Box */}
                <div className="p-4 bg-cream-200 dark:bg-night-750 border border-chocolate-700/10 dark:border-bronze-500/15 rounded-sm space-y-2">
                  <div className="flex items-start space-x-2.5">
                    <MapPin className="w-4 h-4 text-bronze-500 shrink-0 mt-1" />
                    <div className="text-xs text-chocolate-700 dark:text-cream-100 leading-relaxed font-light">
                      <strong className="block font-semibold text-chocolate-950 dark:text-cream-50">EVAANAM Manpower &amp; Execution Pvt. Ltd.</strong>
                      C-58, 1st Floor, Block-C,<br />
                      Johri Farm, New Friends Colony,<br />
                      New Delhi, Delhi – 110025
                    </div>
                  </div>
                </div>

                {/* Phone Lines */}
                <div className="space-y-3">
                  <span className="micro-label text-bronze-600 dark:text-bronze-400">OPERATIONS HOTLINES</span>
                  {COMPANY_INFO.phones.map((phone) => (
                    <a
                      key={phone.number}
                      href={`tel:${phone.number}`}
                      className="flex items-center justify-between p-3 bg-cream-100 dark:bg-night-750 border border-chocolate-700/10 dark:border-bronze-500/15 hover:border-bronze-500/40 transition-all group"
                    >
                      <div className="flex items-center space-x-2.5">
                        <Phone className="w-3.5 h-3.5 text-bronze-500" />
                        <div>
                          <p className="text-xs font-mono font-bold text-chocolate-900 dark:text-cream-50">
                            {phone.display}
                          </p>
                          <p className="text-[10px] text-chocolate-500 dark:text-night-dim">
                            {phone.label}
                          </p>
                        </div>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-bronze-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  ))}
                </div>

                {/* Official Email */}
                <div>
                  <span className="micro-label text-bronze-600 dark:text-bronze-400">OFFICIAL EMAIL</span>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="mt-2 flex items-center justify-between p-3 bg-cream-100 dark:bg-night-750 border border-chocolate-700/10 dark:border-bronze-500/15 hover:border-bronze-500/40 transition-all group"
                  >
                    <div className="flex items-center space-x-2.5">
                      <Mail className="w-3.5 h-3.5 text-bronze-500" />
                      <div>
                        <p className="text-xs font-mono font-bold text-chocolate-900 dark:text-cream-50">
                          {COMPANY_INFO.email}
                        </p>
                        <p className="text-[10px] text-chocolate-500 dark:text-night-dim">
                          Operations &amp; Requisition Desk
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-bronze-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

                {/* Working Hours */}
                <div className="pt-2 border-t border-chocolate-700/10 dark:border-night-700 space-y-2">
                  <div className="flex items-center space-x-2 text-xs text-chocolate-700 dark:text-cream-200">
                    <Clock className="w-4 h-4 text-bronze-500 shrink-0" />
                    <span>Office Desk: Mon – Sat (9:30 AM – 7:30 PM)</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-chocolate-700 dark:text-cream-200">
                    <ShieldCheck className="w-4 h-4 text-bronze-500 shrink-0" />
                    <span>24/7 On-Call Event Floor Dispatch</span>
                  </div>
                </div>

                {/* Get Directions Action */}
                <div className="pt-2">
                  <a
                    href={googleMapsSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-bronze w-full py-3.5 text-xs text-center flex items-center justify-center space-x-2"
                  >
                    <span>Get Turn-by-Turn Directions</span>
                    <ExternalLink className="w-3.5 h-3.5 text-night-950" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GeometricDivider label="DELHI NCR DISPATCH HUBS" />

      {/* 3. DELHI NCR REGIONAL COVERAGE CORRIDORS */}
      <section className="py-16 px-6 sm:px-8 lg:px-12 bg-transparent">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="micro-label text-bronze-600 dark:text-bronze-400">DISPATCH HUBS</span>
            <h2 className="editorial-heading text-3xl sm:text-4xl text-chocolate-950 dark:text-cream-50">
              Regional Coverage Corridors
            </h2>
            <p className="text-xs sm:text-sm text-chocolate-600 dark:text-night-muted font-light">
              Our floor teams operate with pre-mapped muster points across every major hospitality and exhibition precinct in the National Capital Region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Hub 1 */}
            <div className="card-luxury p-6 space-y-3 dark:bg-night-800">
              <span className="text-[10px] font-mono uppercase text-bronze-600 dark:text-bronze-400 tracking-wider font-semibold">
                CORRIDOR 01 · CENTRAL &amp; SOUTH
              </span>
              <h4 className="font-serif text-xl font-medium text-chocolate-950 dark:text-cream-50">
                Lutyens &amp; Diplomatic Enclave
              </h4>
              <p className="text-xs text-chocolate-600 dark:text-night-muted font-light leading-relaxed">
                ITC Maurya, Taj Palace, The Leela Palace, Vigyan Bhawan, and Bharat Mandapam.
              </p>
            </div>

            {/* Hub 2 */}
            <div className="card-luxury p-6 space-y-3 dark:bg-night-800">
              <span className="text-[10px] font-mono uppercase text-bronze-600 dark:text-bronze-400 tracking-wider font-semibold">
                CORRIDOR 02 · AEROCITY &amp; IGI
              </span>
              <h4 className="font-serif text-xl font-medium text-chocolate-950 dark:text-cream-50">
                Aerocity Hospitality District
              </h4>
              <p className="text-xs text-chocolate-600 dark:text-night-muted font-light leading-relaxed">
                Andaz Delhi, JW Marriott, Roseate House, Pullman, and Worldmark Convention ballrooms.
              </p>
            </div>

            {/* Hub 3 */}
            <div className="card-luxury p-6 space-y-3 dark:bg-night-800">
              <span className="text-[10px] font-mono uppercase text-bronze-600 dark:text-bronze-400 tracking-wider font-semibold">
                CORRIDOR 03 · GURGAON &amp; NH-48
              </span>
              <h4 className="font-serif text-xl font-medium text-chocolate-950 dark:text-cream-50">
                Gurgaon &amp; Sohna Road
              </h4>
              <p className="text-xs text-chocolate-600 dark:text-night-muted font-light leading-relaxed">
                The Oberoi, The Westin, ITC Grand Bharat, DLF CyberHub, and Karma Lakelands.
              </p>
            </div>

            {/* Hub 4 */}
            <div className="card-luxury p-6 space-y-3 dark:bg-night-800">
              <span className="text-[10px] font-mono uppercase text-bronze-600 dark:text-bronze-400 tracking-wider font-semibold">
                CORRIDOR 04 · DWARKA &amp; NOIDA
              </span>
              <h4 className="font-serif text-xl font-medium text-chocolate-950 dark:text-cream-50">
                Mega Exhibition Centres
              </h4>
              <p className="text-xs text-chocolate-600 dark:text-night-muted font-light leading-relaxed">
                Yashobhoomi (IICC Dwarka), Pragati Maidan (IECC), and India Exposition Mart (IEML).
              </p>
            </div>
          </div>

          <div className="text-center pt-4">
            <Link to="/contact" className="btn-primary px-8 py-4 text-xs tracking-widest font-semibold uppercase">
              Schedule an Operations Meeting
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
