import React, { useState, lazy, Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import MobileStickyCTA from "./components/MobileStickyCTA";
import FloatingActions from "./components/FloatingActions";
import SignaturePreloader from "./components/SignaturePreloader";
import CustomCursor from "./components/CustomCursor";
import GeometricMarginFrame from "./components/GeometricMarginFrame";
import DynamicScrollGradient from "./components/DynamicScrollGradient";
import EVAANAMChatbot from "./components/EVAANAMChatbot";
import useScrollBackground from "./hooks/useScrollBackground";

// Code-split pages for instant client performance and lightweight bundle execution
const HomePage = lazy(() => import("./pages/HomePage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const VenuesPage = lazy(() => import("./pages/VenuesPage"));
const WhyUsPage = lazy(() => import("./pages/WhyUsPage"));
const GalleryPage = lazy(() => import("./pages/GalleryPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const LocationPage = lazy(() => import("./pages/LocationPage"));

function PageLoadingSkeleton() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-28 bg-transparent">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-10 h-10 rounded-full border-2 border-amber-500/30 border-t-amber-500 animate-spin" />
        <span className="text-[11px] font-mono tracking-widest text-amber-700 dark:text-amber-400 uppercase font-bold">
          Aligning Floor...
        </span>
      </div>
    </div>
  );
}

function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center pt-32 pb-20 px-6 text-center bg-transparent">
      <div className="max-w-md space-y-6">
        <span className="micro-label text-amber-700 dark:text-amber-400 font-bold">PAGE NOT FOUND</span>
        <h1 className="editorial-heading text-5xl text-chocolate-950 dark:text-cream-50">
          The requested floor does not exist.
        </h1>
        <p className="text-sm text-chocolate-600 dark:text-night-muted font-light leading-relaxed">
          The page you are looking for may have been moved or is undergoing operational reorganization.
        </p>
        <div className="pt-4 flex items-center justify-center space-x-4">
          <Link to="/" className="btn-primary">
            Return to Homepage
          </Link>
          <Link to="/services" className="btn-secondary">
            View Services
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  
  // Register global scroll background color shifts
  useScrollBackground();

  return (
    <div className="flex flex-col min-h-screen bg-transparent text-chocolate-700 dark:text-cream-200 font-sans selection:bg-bronze-500 selection:text-chocolate-950 transition-colors duration-400 relative">
      {/* Dynamic Scroll-Driven Ambient Atmospheric Gradient */}
      <DynamicScrollGradient />

      {/* Luxury Custom Dynamic Cursor (Desktop) */}
      <CustomCursor />

      {/* Architectural Geometric Margin Frame & Lines */}
      <GeometricMarginFrame />

      <ScrollToTop />
      
      {/* Signature Preloader component */}
      {showPreloader && (
        <SignaturePreloader onComplete={() => setShowPreloader(false)} />
      )}

      <Navbar />

      <main className="flex-grow">
        <Suspense fallback={<PageLoadingSkeleton />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/venues" element={<VenuesPage />} />
            <Route path="/why-us" element={<WhyUsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/location" element={<LocationPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>

      {/* Floating Actions: Live Progress Back-To-Top + Dedicated WhatsApp Button */}
      <FloatingActions />

      {/* EVAANAM AI Operations Concierge Chatbot */}
      <EVAANAMChatbot />

      <Footer />
      <MobileStickyCTA />
    </div>
  );
}
