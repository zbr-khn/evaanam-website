import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone, ArrowUpRight, ShieldCheck } from "lucide-react";
import { COMPANY_INFO } from "../data/evaanamData";
import EVAANAMGeometricMark from "./EVAANAMGeometricMark";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "../context/ThemeContext";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Venues", path: "/venues" },
  { name: "Why Us", path: "/why-us" },
  { name: "Gallery", path: "/gallery" },
  { name: "Location", path: "/location" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? "bg-cream-100/85 dark:bg-night-950/85 backdrop-blur-2xl border-b border-chocolate-700/10 dark:border-white/10 py-3 shadow-[0_4px_24px_rgba(0,0,0,0.12)]"
            : "bg-cream-100/50 dark:bg-night-950/60 backdrop-blur-xl border-b border-chocolate-700/5 dark:border-white/5 py-4 sm:py-5"
        }`}
      >
        <div className="w-full px-4 sm:px-8 lg:px-10 xl:px-14 flex items-center justify-between">
          {/* Brand Logo / Wordmark (Far Left Corner) */}
          <Link
            to="/"
            className="group flex items-center space-x-3 focus:outline-none shrink-0"
            aria-label="EVAANAM Home"
          >
            <EVAANAMGeometricMark
              size={34}
              darkTheme={isDark}
              className="shrink-0 group-hover:scale-105 transition-transform duration-300"
            />
            <div className="flex flex-col items-start">
              <div className="flex items-center space-x-1.5">
                <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-[0.18em] text-chocolate-950 dark:text-cream-50 uppercase group-hover:text-amber-500 transition-colors duration-300">
                  EVAANAM
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block mb-1"></span>
              </div>
              <span className="text-[8px] sm:text-[8.5px] uppercase tracking-[0.26em] font-sans font-semibold text-amber-700 dark:text-amber-400/90 -mt-1 hidden sm:block">
                Hospitality &amp; Operations
              </span>
            </div>
          </Link>

          {/* Live Status Pill (Hidden on mobile) */}
          <div className="hidden xl:flex items-center space-x-2 px-3 py-1 rounded-full backdrop-blur-md bg-emerald-500/10 border border-emerald-500/25 text-emerald-600 dark:text-emerald-400 text-[10.5px] font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold tracking-wider">DELHI NCR · OPERATIONS ACTIVE</span>
          </div>

          {/* Desktop Navigation Links (Generous Breathing Room) */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6 2xl:space-x-8" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative py-1 text-[11.5px] xl:text-xs uppercase tracking-[0.18em] font-bold transition-all duration-300 font-sans whitespace-nowrap ${
                    isActive
                      ? "text-chocolate-950 dark:text-cream-50 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-amber-500 font-extrabold"
                      : "text-chocolate-700 dark:text-night-muted hover:text-amber-600 dark:hover:text-cream-50"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Right Controls (Theme Toggle + CTA) */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-5 shrink-0 pl-2">
            <ThemeToggle />

            <Link
              to="/contact"
              className="btn-primary group py-3 px-6 text-[11px] xl:text-xs shadow-lg backdrop-blur-md"
            >
              <span>Request Manpower</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-2 text-amber-300 dark:text-night-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </Link>
          </div>

          {/* Mobile Menu Toggle & Theme Quick Toggle */}
          <div className="flex items-center space-x-2 lg:hidden shrink-0">
            <ThemeToggle isMobile={true} />

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-xl text-chocolate-800 dark:text-cream-100 hover:text-amber-500 focus:outline-none transition-colors border border-chocolate-700/10 dark:border-white/15 bg-cream-100/80 dark:bg-night-900/80 backdrop-blur-md"
              aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-amber-500" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Navigation Overlay with Luxury Glassmorphism */}
      <div
        className={`fixed inset-0 z-40 bg-cream-100/95 dark:bg-night-950/95 backdrop-blur-3xl text-chocolate-700 dark:text-cream-50 lg:hidden transition-all duration-400 ease-in-out flex flex-col justify-between pt-24 pb-8 px-6 sm:px-10 overflow-y-auto ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        <div className="flex flex-col space-y-6 pt-4">
          {/* Mobile Appearance Row */}
          <div className="flex items-center justify-between p-4 bg-white/40 dark:bg-white/[0.04] border border-chocolate-700/10 dark:border-white/10 rounded-2xl backdrop-blur-md">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-chocolate-800 dark:text-cream-100 block">
                Atmosphere &amp; Theme
              </span>
              <span className="text-[11px] text-chocolate-500 dark:text-night-muted">
                {isDark ? "Evening Mode Active" : "Daytime Mode Active"}
              </span>
            </div>
            <ThemeToggle isMobile={true} />
          </div>

          <div className="micro-label">Navigation</div>
          <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
            {NAV_LINKS.map((link, index) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-2xl sm:text-3xl font-serif font-light transition-all flex items-center justify-between py-2 border-b border-chocolate-700/10 dark:border-white/10 ${
                    isActive
                      ? "text-chocolate-950 dark:text-cream-50 font-normal pl-2 border-amber-500"
                      : "text-chocolate-600 dark:text-night-muted hover:text-chocolate-900 dark:hover:text-cream-50"
                  }`
                }
              >
                <span>{link.name}</span>
                <span className="text-xs font-mono font-normal text-amber-600 dark:text-amber-400 tracking-widest">
                  0{index + 1}
                </span>
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Mobile Menu Footer Info */}
        <div className="pt-8 border-t border-chocolate-700/15 dark:border-white/10 space-y-6">
          <Link
            to="/contact"
            className="w-full btn-primary py-4 text-center justify-center text-sm shadow-xl"
          >
            Request Manpower On Floor
          </Link>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans text-chocolate-600 dark:text-night-muted">
            <div>
              <p className="micro-label mb-1">Direct Operations</p>
              <div className="space-y-1">
                {COMPANY_INFO.phones.map((phone, idx) => (
                  <a
                    key={idx}
                    href={`tel:${phone.number}`}
                    className="flex items-center space-x-2 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-500" />
                    <span>{phone.display}</span>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="micro-label mb-1">HQ &amp; Registered Desk</p>
              <p className="text-chocolate-500 dark:text-night-dim text-[11px] leading-relaxed">
                {COMPANY_INFO.address.full}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
