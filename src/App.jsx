import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import MobileStickyCTA from "./components/MobileStickyCTA";
import SignaturePreloader from "./components/SignaturePreloader";

import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import VenuesPage from "./pages/VenuesPage";
import WhyUsPage from "./pages/WhyUsPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";

function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center pt-32 pb-20 px-6 text-center bg-cream-200">
      <div className="max-w-md space-y-6">
        <span className="micro-label text-bronze-600">PAGE NOT FOUND</span>
        <h1 className="editorial-heading text-5xl text-chocolate-950">
          The requested floor does not exist.
        </h1>
        <p className="text-sm text-chocolate-600 font-light leading-relaxed">
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

  return (
    <div className="flex flex-col min-h-screen bg-cream-200 text-chocolate-700 font-sans selection:bg-bronze-500 selection:text-chocolate-950">
      <ScrollToTop />
      
      {/* Signature Preloader component */}
      {showPreloader && (
        <SignaturePreloader onComplete={() => setShowPreloader(false)} />
      )}

      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/venues" element={<VenuesPage />} />
          <Route path="/why-us" element={<WhyUsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />
      <MobileStickyCTA />
    </div>
  );
}
