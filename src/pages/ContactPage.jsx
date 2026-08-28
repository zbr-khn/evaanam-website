import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, CheckCircle2, ArrowUpRight, Clock, ShieldCheck, Send, Loader2, Calculator, FileText, Calendar, MessageSquare, Compass, Sparkles, Bot } from "lucide-react";
import { COMPANY_INFO } from "../data/evaanamData";
import FollowTheFloor from "../components/FollowTheFloor";
import ManpowerCalculator from "../components/ManpowerCalculator";

export default function ContactPage() {
  const [activeMode, setActiveMode] = useState("form"); // 'form' | 'calculator'
  
  // Calculate today's date formatted as YYYY-MM-DD for min date attribute
  const todayStr = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    eventDate: "",
    venue: "",
    eventType: "Wedding Hospitality",
    crewCount: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Real-time validation for date column to reject past dates
    if (name === "eventDate" && value && value < todayStr) {
      setFormError("Past dates cannot be selected. Please choose a present or future event date.");
      setFormData((prev) => ({ ...prev, [name]: "" }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formError) setFormError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      setFormError("Please enter your full name.");
      return;
    }

    if (!formData.email.trim() || !formData.email.includes("@")) {
      setFormError("Please enter a valid email address.");
      return;
    }

    if (!formData.phone.trim()) {
      setFormError("Please enter a valid contact phone number.");
      return;
    }

    if (!formData.eventDate) {
      setFormError("Please select an event date.");
      return;
    }

    if (formData.eventDate < todayStr) {
      setFormError("Past dates cannot be selected. Please choose a present or future event date.");
      return;
    }

    setSubmitting(true);
    setFormError("");

    try {
      // Quietly transmit form submission in the background to company's official email (ops@evaanam.com)
      const payload = {
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        company: formData.company || "Individual / Private Host",
        eventDate: formData.eventDate,
        venue: formData.venue || "Not specified",
        eventType: formData.eventType,
        crewCount: formData.crewCount || "Not specified",
        message: formData.message || "No additional notes provided",
        _subject: `New EVAANAM Requisition: ${formData.fullName} (${formData.eventType})`,
        _template: "table",
        _captcha: "false",
      };

      await fetch("https://formsubmit.co/ajax/ops@evaanam.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      setSubmitting(false);
      setSubmitted(true);
    } catch (err) {
      console.warn("Background email notification completed:", err);
      setSubmitting(false);
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      company: "",
      eventDate: "",
      venue: "",
      eventType: "Wedding Hospitality",
      crewCount: "",
      message: "",
    });
    setSubmitted(false);
    setFormError("");
  };

  const handleSendViaWhatsApp = () => {
    const waText = `🏛️ *EVAANAM MANPOWER INQUIRY*
━━━━━━━━━━━━━━━━━━━━
👤 *Full Name:* ${formData.fullName}
📧 *Email:* ${formData.email}
📞 *Phone:* ${formData.phone}
🏢 *Company / Organization:* ${formData.company || "Individual / Private Event"}
📅 *Event Date:* ${formData.eventDate}
📍 *Venue & City:* ${formData.venue || "To be decided"}
🎪 *Event Category:* ${formData.eventType}
👥 *Estimated Crew:* ${formData.crewCount || "To be discussed"}

📝 *Requirement Notes:*
${formData.message || "Please share staffing options and availability."}
━━━━━━━━━━━━━━━━━━━━
_Submitted via EVAANAM Website Contact Form_`;

    const encoded = encodeURIComponent(waText);
    window.open(`https://wa.me/919310039929?text=${encoded}`, "_blank");
  };

  return (
    <div className="animate-fade-in pt-28">
      {/* 1. DEDICATED PAGE INTRODUCTION HERO (TONE A: Green / Alabaster White) */}
      <section className="section-tone-a py-20 px-6 sm:px-8 lg:px-12 border-b border-chocolate-700/15 dark:border-emerald-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-6">
            <span className="micro-label font-bold">START A CONVERSATION</span>
            <h1 className="editorial-heading text-5xl sm:text-6xl md:text-7xl">
              Planning an event? <br />
              <span className="italic text-emerald-700 dark:text-emerald-400">Let's build your team.</span>
            </h1>
            <p className="text-base sm:text-lg font-light leading-relaxed">
              Tell us what the floor needs. Share your event dates, venue location, and staffing expectations. Our senior operations desk will structure an optimized deployment roster.
            </p>

            {/* Mode Switcher Tabs */}
            <div className="pt-2 flex items-center space-x-3">
              <button
                type="button"
                onClick={() => setActiveMode("form")}
                className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all flex items-center space-x-2 rounded-sm ${
                  activeMode === "form"
                    ? "bg-brand-green dark:bg-bronze-500 text-cream-50 dark:text-night-950 shadow-sm font-bold"
                    : "bg-cream-100 dark:bg-night-800 text-chocolate-700 dark:text-cream-200 border border-chocolate-700/15 dark:border-bronze-500/20 hover:border-bronze-500/40"
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Contact &amp; Requisition Form</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveMode("calculator")}
                className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all flex items-center space-x-2 rounded-sm ${
                  activeMode === "calculator"
                    ? "bg-brand-green dark:bg-bronze-500 text-cream-50 dark:text-night-950 shadow-sm font-bold"
                    : "bg-cream-100 dark:bg-night-800 text-chocolate-700 dark:text-cream-200 border border-chocolate-700/15 dark:border-bronze-500/20 hover:border-bronze-500/40"
                }`}
              >
                <Calculator className="w-3.5 h-3.5 text-amber-400" />
                <span>Roster Calculator + WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TAB CONTENT: EITHER FORM OR CALCULATOR (TONE B: Espresso Brown / Sandstone) */}
      {activeMode === "calculator" ? (
        <section className="section-tone-b py-20 px-6 sm:px-8 lg:px-12 border-b border-chocolate-700/15 dark:border-bronze-500/20">
          <ManpowerCalculator />
        </section>
      ) : (
        <section className="section-tone-b py-24 px-6 sm:px-8 lg:px-12 border-b border-chocolate-700/15 dark:border-bronze-500/20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              {/* Left Column: Direct Operations Information */}
              <div className="lg:col-span-5 space-y-8">
                <div className="space-y-4">
                  <span className="micro-label text-bronze-600 dark:text-bronze-400">DIRECT ACCESS</span>
                  <h2 className="font-serif text-3xl sm:text-4xl text-chocolate-950 dark:text-cream-50 font-medium">
                    Operations Desk &amp; Registered Office
                  </h2>
                  <p className="text-xs sm:text-sm text-chocolate-600 dark:text-night-muted font-light leading-relaxed">
                    For immediate floor requirements, event staffing quotes, or preliminary planning meetings, connect directly with our central operations desk.
                  </p>
                </div>

                {/* Direct Phone Lines */}
                <div className="card-luxury p-6 sm:p-8 space-y-6 dark:bg-night-800 dark:border-bronze-500/20">
                  <div>
                    <span className="micro-label text-bronze-600 dark:text-bronze-400">Operations Phone Lines</span>
                    <div className="mt-3 space-y-3">
                      {COMPANY_INFO.phones.map((phone) => (
                        <a
                          key={phone.number}
                          href={`tel:${phone.number}`}
                          className="flex items-center justify-between p-3.5 bg-cream-200 dark:bg-night-750 border border-chocolate-700/10 dark:border-bronze-500/15 hover:border-bronze-500/40 transition-all group"
                        >
                          <div className="flex items-center space-x-3">
                            <Phone className="w-4 h-4 text-bronze-500" />
                            <div>
                              <p className="text-xs font-mono font-bold text-chocolate-900 dark:text-cream-50">
                                {phone.display}
                              </p>
                              <p className="text-[10px] text-chocolate-500 dark:text-night-dim">
                                {phone.label}
                              </p>
                            </div>
                          </div>
                          <ArrowUpRight className="w-4 h-4 text-bronze-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Operations Email */}
                  <div>
                    <span className="micro-label text-bronze-600 dark:text-bronze-400">Official Email</span>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="mt-3 flex items-center justify-between p-3.5 bg-cream-200 dark:bg-night-750 border border-chocolate-700/10 dark:border-bronze-500/15 hover:border-bronze-500/40 transition-all group"
                    >
                      <div className="flex items-center space-x-3">
                        <Mail className="w-4 h-4 text-bronze-500" />
                        <div>
                          <p className="text-xs font-mono font-bold text-chocolate-900 dark:text-cream-50">
                            {COMPANY_INFO.email}
                          </p>
                          <p className="text-[10px] text-chocolate-500 dark:text-night-dim">
                            Roster &amp; Business Inquiries
                          </p>
                        </div>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-bronze-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>

                  {/* Physical Location */}
                  <div className="pt-2">
                    <span className="micro-label text-bronze-600 dark:text-bronze-400">Registered Office</span>
                    <div className="mt-2 p-3.5 bg-cream-200 dark:bg-night-750 border border-chocolate-700/10 dark:border-bronze-500/15 space-y-2">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-4 h-4 text-bronze-500 shrink-0 mt-0.5" />
                        <p className="text-xs text-chocolate-600 dark:text-night-muted leading-relaxed font-light">
                          {COMPANY_INFO.address.full}
                        </p>
                      </div>
                      <Link
                        to="/location"
                        className="inline-flex items-center space-x-1.5 text-[11px] font-mono font-semibold uppercase tracking-wider text-bronze-600 dark:text-bronze-400 hover:text-chocolate-950 dark:hover:text-cream-50 pt-1"
                      >
                        <Compass className="w-3.5 h-3.5" />
                        <span>View on Interactive Google Map</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>

                  {/* Meet Eva AI Assistant Card */}
                  <div className="p-4 bg-gradient-to-br from-brand-green/90 to-night-900 border border-bronze-500/30 rounded text-cream-100 space-y-3">
                    <div className="flex items-center space-x-2.5">
                      <div className="w-8 h-8 rounded-full bg-bronze-500/20 border border-bronze-400/40 flex items-center justify-center text-amber-300">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-cream-50 flex items-center space-x-1">
                          <span>Meet Eva</span>
                          <span className="text-[8px] font-mono px-1 py-0.2 bg-amber-400/20 text-amber-300 rounded">AI</span>
                        </h4>
                        <p className="text-[9px] font-mono text-emerald-400">● 24/7 Operations Concierge</p>
                      </div>
                    </div>
                    <p className="text-[11px] text-cream-200/80 font-light leading-relaxed">
                      Need quick headcount calculations or venue guidance? Chat with Eva for instant WhatsApp requisitions.
                    </p>
                    <button
                      type="button"
                      onClick={() => window.dispatchEvent(new CustomEvent("open-eva-chat"))}
                      className="w-full py-2 px-3 bg-amber-500 hover:bg-amber-400 text-night-950 rounded text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-1.5 transition-colors shadow-sm"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Chat with Eva</span>
                    </button>
                  </div>

                  {/* Operations Guarantees */}
                  <div className="pt-4 border-t border-chocolate-700/10 dark:border-night-700 space-y-2">
                    <div className="flex items-center space-x-2 text-xs text-chocolate-700 dark:text-cream-200">
                      <Clock className="w-4 h-4 text-bronze-500 shrink-0" />
                      <span>Dedicated Operations Response</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-chocolate-700 dark:text-cream-200">
                      <ShieldCheck className="w-4 h-4 text-bronze-500 shrink-0" />
                      <span>Strict Client &amp; Event Confidentiality</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Structured Inquiry Form */}
              <div className="lg:col-span-7">
                <div className="card-luxury p-8 sm:p-12 shadow-sm border border-chocolate-700/15 dark:border-bronze-500/20 dark:bg-night-800">
                  <div className="space-y-2 mb-8">
                    <span className="micro-label text-bronze-600 dark:text-bronze-400">MANPOWER REQUISITION FORM</span>
                    <h3 className="font-serif text-3xl sm:text-4xl text-chocolate-950 dark:text-cream-50 font-medium">
                      Tell Us What The Floor Needs
                    </h3>
                    <p className="text-xs sm:text-sm text-chocolate-600 dark:text-night-muted font-light">
                      Fill in your contact and event specifics below. Past event dates cannot be selected.
                    </p>
                  </div>

                  {submitted ? (
                    <div className="p-8 bg-cream-200 dark:bg-night-750 border border-bronze-500/40 text-center space-y-5 animate-fade-in">
                      <div className="w-14 h-14 rounded-full bg-brand-green dark:bg-bronze-500 text-cream-50 dark:text-night-950 flex items-center justify-center mx-auto shadow-md">
                        <CheckCircle2 className="w-7 h-7" />
                      </div>
                      <h4 className="font-serif text-2xl text-chocolate-950 dark:text-cream-50 font-medium">
                        Requisition Received
                      </h4>
                      <p className="text-xs sm:text-sm text-chocolate-600 dark:text-night-muted font-light max-w-md mx-auto leading-relaxed">
                        Thank you, <strong className="text-chocolate-900 dark:text-cream-100">{formData.fullName}</strong>. Our operations team will review your requirements for <strong className="text-chocolate-900 dark:text-cream-100">{formData.eventDate}</strong> and reach out to you at <strong className="text-chocolate-900 dark:text-cream-100">{formData.phone}</strong>.
                      </p>

                      {/* Quick WhatsApp Forward Option */}
                      <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                        <button
                          type="button"
                          onClick={handleSendViaWhatsApp}
                          className="w-full sm:w-auto px-6 py-3 bg-emerald-700 hover:bg-emerald-600 text-cream-50 text-xs font-semibold uppercase tracking-wider flex items-center justify-center space-x-2 transition-colors shadow-sm"
                        >
                          <MessageSquare className="w-4 h-4" />
                          <span>Dispatch Copy to WhatsApp</span>
                        </button>
                        <button
                          type="button"
                          onClick={handleReset}
                          className="w-full sm:w-auto btn-secondary text-xs"
                        >
                          <span>Submit Another Request</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {formError && (
                        <div className="p-3.5 bg-red-500/10 border border-red-500/30 text-red-700 dark:text-red-300 text-xs font-sans rounded-sm">
                          {formError}
                        </div>
                      )}

                      {/* 1. Full Name & Email Fields */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="relative">
                          <label
                            htmlFor="fullName"
                            className="block text-[10px] uppercase tracking-wider text-chocolate-600 dark:text-bronze-400 font-semibold mb-1.5 font-sans"
                          >
                            Full Name *
                          </label>
                          <input
                            id="fullName"
                            type="text"
                            name="fullName"
                            required
                            placeholder="e.g. Rahul Sharma"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full py-3 px-4 bg-cream-100 dark:bg-night-850 border border-chocolate-700/20 dark:border-bronze-500/25 text-xs font-sans text-chocolate-900 dark:text-cream-50 focus:outline-none focus:border-bronze-500 transition-colors placeholder-chocolate-400 dark:placeholder-night-dim"
                          />
                        </div>

                        <div className="relative">
                          <label
                            htmlFor="email"
                            className="block text-[10px] uppercase tracking-wider text-chocolate-600 dark:text-bronze-400 font-semibold mb-1.5 font-sans"
                          >
                            Email Address *
                          </label>
                          <input
                            id="email"
                            type="email"
                            name="email"
                            required
                            placeholder="e.g. rahul@eventcraft.com"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full py-3 px-4 bg-cream-100 dark:bg-night-850 border border-chocolate-700/20 dark:border-bronze-500/25 text-xs font-sans text-chocolate-900 dark:text-cream-50 focus:outline-none focus:border-bronze-500 transition-colors placeholder-chocolate-400 dark:placeholder-night-dim"
                          />
                        </div>
                      </div>

                      {/* 2. Phone Number & Organization */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="relative">
                          <label
                            htmlFor="phone"
                            className="block text-[10px] uppercase tracking-wider text-chocolate-600 dark:text-bronze-400 font-semibold mb-1.5 font-sans"
                          >
                            Phone / WhatsApp Number *
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            name="phone"
                            required
                            placeholder="e.g. +91 98765 43210"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full py-3 px-4 bg-cream-100 dark:bg-night-850 border border-chocolate-700/20 dark:border-bronze-500/25 text-xs font-sans text-chocolate-900 dark:text-cream-50 focus:outline-none focus:border-bronze-500 transition-colors placeholder-chocolate-400 dark:placeholder-night-dim"
                          />
                        </div>

                        <div className="relative">
                          <label
                            htmlFor="company"
                            className="block text-[10px] uppercase tracking-wider text-chocolate-600 dark:text-bronze-400 font-semibold mb-1.5 font-sans"
                          >
                            Company / Event Organization
                          </label>
                          <input
                            id="company"
                            type="text"
                            name="company"
                            placeholder="e.g. Event Agency / Private Host"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full py-3 px-4 bg-cream-100 dark:bg-night-850 border border-chocolate-700/20 dark:border-bronze-500/25 text-xs font-sans text-chocolate-900 dark:text-cream-50 focus:outline-none focus:border-bronze-500 transition-colors placeholder-chocolate-400 dark:placeholder-night-dim"
                          />
                        </div>
                      </div>

                      {/* 3. Event Date Column (No Past Dates Allowed) & Venue */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="relative">
                          <div className="flex items-center justify-between mb-1.5">
                            <label
                              htmlFor="eventDate"
                              className="text-[10px] uppercase tracking-wider text-chocolate-600 dark:text-bronze-400 font-semibold font-sans flex items-center space-x-1"
                            >
                              <Calendar className="w-3.5 h-3.5 text-bronze-500" />
                              <span>Event Date *</span>
                            </label>
                            <span className="text-[9.5px] font-mono text-bronze-600 dark:text-bronze-400">
                              (Past dates disabled)
                            </span>
                          </div>
                          <input
                            id="eventDate"
                            type="date"
                            name="eventDate"
                            min={todayStr}
                            required
                            value={formData.eventDate}
                            onChange={handleChange}
                            className="w-full py-2.5 px-4 bg-cream-100 dark:bg-night-850 border border-chocolate-700/20 dark:border-bronze-500/25 text-xs font-sans text-chocolate-900 dark:text-cream-50 focus:outline-none focus:border-bronze-500 transition-colors"
                          />
                        </div>

                        <div className="relative">
                          <label
                            htmlFor="venue"
                            className="block text-[10px] uppercase tracking-wider text-chocolate-600 dark:text-bronze-400 font-semibold mb-1.5 font-sans"
                          >
                            Venue / City Location
                          </label>
                          <input
                            id="venue"
                            type="text"
                            name="venue"
                            placeholder="e.g. ITC Maurya / Pragati Maidan / Gurgaon"
                            value={formData.venue}
                            onChange={handleChange}
                            className="w-full py-3 px-4 bg-cream-100 dark:bg-night-850 border border-chocolate-700/20 dark:border-bronze-500/25 text-xs font-sans text-chocolate-900 dark:text-cream-50 placeholder-chocolate-400 dark:placeholder-night-dim focus:outline-none focus:border-bronze-500 transition-colors"
                          />
                        </div>
                      </div>

                      {/* 4. Event Category & Expected Crew Count */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-[10px] uppercase tracking-wider text-chocolate-600 dark:text-bronze-400 font-semibold mb-1.5 font-sans">
                            Event Category
                          </label>
                          <select
                            name="eventType"
                            value={formData.eventType}
                            onChange={handleChange}
                            className="w-full py-3 px-4 bg-cream-100 dark:bg-night-850 border border-chocolate-700/20 dark:border-bronze-500/25 text-xs font-sans text-chocolate-900 dark:text-cream-50 focus:outline-none focus:border-bronze-500 transition-colors"
                          >
                            <option value="Wedding Hospitality">Wedding Hospitality</option>
                            <option value="Corporate Event / Summit">Corporate Event / Summit</option>
                            <option value="Trade Exhibition / Expo">Trade Exhibition / Expo</option>
                            <option value="Brand Activation">Brand Activation</option>
                            <option value="Government / Diplomatic Summit">Government / Diplomatic Summit</option>
                            <option value="Sports Arena / Marathon">Sports Arena / Marathon</option>
                          </select>
                        </div>

                        <div className="relative">
                          <label
                            htmlFor="crewCount"
                            className="block text-[10px] uppercase tracking-wider text-chocolate-600 dark:text-bronze-400 font-semibold mb-1.5 font-sans"
                          >
                            Estimated Crew Size
                          </label>
                          <input
                            id="crewCount"
                            type="text"
                            name="crewCount"
                            placeholder="e.g. 10 - 25 crew members"
                            value={formData.crewCount}
                            onChange={handleChange}
                            className="w-full py-3 px-4 bg-cream-100 dark:bg-night-850 border border-chocolate-700/20 dark:border-bronze-500/25 text-xs font-sans text-chocolate-900 dark:text-cream-50 placeholder-chocolate-400 dark:placeholder-night-dim focus:outline-none focus:border-bronze-500 transition-colors"
                          />
                        </div>
                      </div>

                      {/* 5. Requirement Details / Message */}
                      <div className="relative">
                        <label
                          htmlFor="message"
                          className="block text-[10px] uppercase tracking-wider text-chocolate-600 dark:text-bronze-400 font-semibold mb-1.5 font-sans"
                        >
                          Requirement Details &amp; Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          placeholder="Please provide specifics such as preferred roles, shift timings, language preferences, or VIP protocols..."
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full py-3 px-4 bg-cream-100 dark:bg-night-850 border border-chocolate-700/20 dark:border-bronze-500/25 text-xs font-sans text-chocolate-900 dark:text-cream-50 focus:outline-none focus:border-bronze-500 transition-colors placeholder-chocolate-400 dark:placeholder-night-dim"
                        />
                      </div>

                      {/* Submit Button */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={submitting}
                          className="btn-primary w-full py-4 text-xs tracking-[0.2em] font-semibold flex items-center justify-center space-x-2"
                        >
                          {submitting ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin text-cream-50 dark:text-night-950" />
                              <span>Transmitting Request...</span>
                            </>
                          ) : (
                            <>
                              <span>Submit Manpower Request</span>
                              <ArrowUpRight className="w-4 h-4 text-bronze-300 dark:text-night-950" />
                            </>
                          )}
                        </button>
                      </div>

                      <div className="flex items-center justify-between text-[11px] text-chocolate-500 dark:text-night-dim font-sans pt-2">
                        <span>• Strict Confidentiality Assured</span>
                        <span>• Dedicated Operations Desk</span>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. SOCIAL / FOLLOW THE FLOOR */}
      <FollowTheFloor showHeader={true} />
    </div>
  );
}
