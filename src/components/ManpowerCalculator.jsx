import React, { useState, useMemo } from "react";
import { Plus, Minus, Check, Trash2, Send, Calculator, Users, Calendar, MapPin, Sparkles, RefreshCw, Copy, CheckCheck } from "lucide-react";
import { WEDDING_ROLES, CORPORATE_ROLES, COMPANY_INFO } from "../data/evaanamData";
import { WhatsappIcon } from "./SocialIcons";
import EVAANAMGeometricMark from "./EVAANAMGeometricMark";

// Combine all roles with default initial selections
const ALL_AVAILABLE_ROLES = [
  ...WEDDING_ROLES.map((r) => ({ ...r, category: "Wedding Hospitality", defaultQty: r.id === "shadows" ? 2 : r.id === "welcome-hostesses" ? 4 : 0 })),
  ...CORPORATE_ROLES.map((r) => ({ ...r, category: "Corporate & Expos", defaultQty: r.id === "corp-registration-crew" ? 4 : 0 })),
];

export default function ManpowerCalculator({ className = "" }) {
  const [categoryFilter, setCategoryFilter] = useState("all"); // 'all' | 'Wedding Hospitality' | 'Corporate & Expos' | 'selected'
  const [searchTerm, setSearchTerm] = useState("");
  const [copied, setCopied] = useState(false);

  // Quantities stored by role id
  const [quantities, setQuantities] = useState(() => {
    const initial = {};
    ALL_AVAILABLE_ROLES.forEach((r) => {
      if (r.defaultQty > 0) {
        initial[r.id] = r.defaultQty;
      }
    });
    return initial;
  });

  // Event & Client Metadata
  const [eventDetails, setEventDetails] = useState({
    clientName: "",
    phone: "",
    eventType: "Luxury Wedding Reception",
    eventDate: "",
    venue: "",
    shiftDays: "1 Day (Single Shift)",
    specialNotes: "",
  });

  // Increment count
  const handleIncrement = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  // Decrement count
  const handleDecrement = (id) => {
    setQuantities((prev) => {
      const current = prev[id] || 0;
      if (current <= 1) {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      }
      return { ...prev, [id]: current - 1 };
    });
  };

  // Remove role entirely
  const handleRemoveRole = (id) => {
    setQuantities((prev) => {
      const copy = { ...prev };
      delete copy[id];
      return copy;
    });
  };

  // Reset entire calculator
  const handleReset = () => {
    setQuantities({});
  };

  // Set direct number input
  const handleCountChange = (id, val) => {
    const num = parseInt(val, 10);
    if (isNaN(num) || num <= 0) {
      handleRemoveRole(id);
    } else {
      setQuantities((prev) => ({ ...prev, [id]: Math.min(num, 200) }));
    }
  };

  // Calculations
  const selectedRolesList = useMemo(() => {
    return ALL_AVAILABLE_ROLES.filter((r) => (quantities[r.id] || 0) > 0).map((r) => ({
      ...r,
      count: quantities[r.id] || 0,
    }));
  }, [quantities]);

  const totalCrewCount = useMemo(() => {
    return Object.values(quantities).reduce((sum, qty) => sum + (qty || 0), 0);
  }, [quantities]);

  // Recommended supervisor ratio: 1 per 12 crew members (minimum 1 if > 0 crew)
  const recommendedSupervisors = useMemo(() => {
    if (totalCrewCount === 0) return 0;
    return Math.max(1, Math.ceil(totalCrewCount / 12));
  }, [totalCrewCount]);

  // Filtered list for role selection
  const visibleRoles = useMemo(() => {
    return ALL_AVAILABLE_ROLES.filter((r) => {
      const matchesCategory =
        categoryFilter === "all"
          ? true
          : categoryFilter === "selected"
          ? (quantities[r.id] || 0) > 0
          : r.category === categoryFilter;

      const matchesSearch =
        searchTerm === "" ||
        r.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        r.desc.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [categoryFilter, searchTerm, quantities]);

  // Format WhatsApp message
  const generateWhatsAppMessage = () => {
    const nameStr = eventDetails.clientName.trim() || "Event Planner / Client";
    const phoneStr = eventDetails.phone.trim() || "Not specified";
    const dateStr = eventDetails.eventDate.trim() || "Upcoming Date";
    const venueStr = eventDetails.venue.trim() || "Delhi NCR Venue";
    const typeStr = eventDetails.eventType;
    const shiftStr = eventDetails.shiftDays;
    const notesStr = eventDetails.specialNotes.trim();

    let rosterBreakdown = "";
    selectedRolesList.forEach((item, idx) => {
      rosterBreakdown += `• ${item.title}: *${item.count} crew*\n`;
    });

    if (selectedRolesList.length === 0) {
      rosterBreakdown = "• Custom Manpower Inquiry (General Roster)\n";
    }

    const message = `🏛️ *EVAANAM MANPOWER REQUISITION*
━━━━━━━━━━━━━━━━━━━━
👤 *Client Name:* ${nameStr}
📞 *Contact Number:* ${phoneStr}
🎪 *Event Type:* ${typeStr}
📅 *Event Dates / Duration:* ${dateStr} (${shiftStr})
📍 *Venue & Location:* ${venueStr}

📋 *CALCULATED CREW ROSTER:*
${rosterBreakdown}
⭐ *Auto-Recommended Supervisors:* ${recommendedSupervisors} Floor Lead(s)
👥 *ESTIMATED TOTAL CREW:* *${totalCrewCount} Personnel*
${notesStr ? `\n📝 *Special Instructions:*\n${notesStr}` : ""}
━━━━━━━━━━━━━━━━━━━━
_Requisition configured via EVAANAM Operational Manpower Calculator_`;

    return message;
  };

  // Submit via WhatsApp + Quietly send background email to ops@evaanam.com
  const handleSubmitWhatsApp = (e) => {
    e.preventDefault();
    const rawMsg = generateWhatsAppMessage();

    // Quietly transmit to company's official email (ops@evaanam.com) in background
    try {
      fetch("https://formsubmit.co/ajax/ops@evaanam.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          clientName: eventDetails.clientName || "Event Host",
          phone: eventDetails.phone || "Not provided",
          eventDate: eventDetails.eventDate || "Upcoming",
          venue: eventDetails.venue || "Delhi NCR",
          eventType: eventDetails.eventType,
          shiftDuration: eventDetails.shiftDays,
          totalCrewCount: totalCrewCount,
          recommendedSupervisors: recommendedSupervisors,
          specialNotes: eventDetails.specialNotes || "None",
          rosterSummary: rawMsg,
          _subject: `New Roster Calculator Requisition: ${eventDetails.clientName || "Client"} (${totalCrewCount} Crew)`,
          _template: "table",
          _captcha: "false",
        }),
      }).catch((err) => console.warn("Background email notification:", err));
    } catch (err) {}

    const encoded = encodeURIComponent(rawMsg);
    const waUrl = `https://wa.me/919310039929?text=${encoded}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  // Copy summary to clipboard
  const handleCopySummary = () => {
    const rawMsg = generateWhatsAppMessage();
    navigator.clipboard.writeText(rawMsg);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className={`w-full max-w-7xl mx-auto ${className}`}>
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
        <EVAANAMGeometricMark size={40} className="mx-auto mb-2" />
        <span className="micro-label">INTERACTIVE ROSTER ESTIMATOR</span>
        <h2 className="editorial-heading text-4xl sm:text-5xl text-chocolate-950 dark:text-cream-50">
          Manpower Floor Calculator
        </h2>
        <p className="text-sm text-chocolate-600 dark:text-night-muted font-light leading-relaxed">
          Configure your exact crew requirements role-by-role. Calculate coverage instantly and dispatch your customized roster directly to our operations desk on WhatsApp.
        </p>
      </div>

      {/* Main Grid: Left Configurator + Right Real-Time Dossier */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* LEFT COLUMN: Role Selector & Customizer (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Controls Bar: Category Tabs & Search */}
          <div className="p-4 bg-cream-100 dark:bg-night-800 border border-chocolate-700/15 dark:border-bronze-500/20 rounded-sm space-y-4 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3">
              {/* Category Filter Tabs */}
              <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 sm:pb-0">
                <button
                  type="button"
                  onClick={() => setCategoryFilter("all")}
                  className={`px-3.5 py-1.5 text-[11px] uppercase tracking-wider font-semibold transition-all ${
                    categoryFilter === "all"
                      ? "bg-brand-green dark:bg-bronze-500 text-cream-50 dark:text-night-950"
                      : "bg-cream-200 dark:bg-night-750 text-chocolate-700 dark:text-night-muted hover:text-chocolate-950 dark:hover:text-cream-50"
                  }`}
                >
                  All (27)
                </button>
                <button
                  type="button"
                  onClick={() => setCategoryFilter("Wedding Hospitality")}
                  className={`px-3.5 py-1.5 text-[11px] uppercase tracking-wider font-semibold transition-all ${
                    categoryFilter === "Wedding Hospitality"
                      ? "bg-brand-green dark:bg-bronze-500 text-cream-50 dark:text-night-950"
                      : "bg-cream-200 dark:bg-night-750 text-chocolate-700 dark:text-night-muted hover:text-chocolate-950 dark:hover:text-cream-50"
                  }`}
                >
                  Weddings (14)
                </button>
                <button
                  type="button"
                  onClick={() => setCategoryFilter("Corporate & Expos")}
                  className={`px-3.5 py-1.5 text-[11px] uppercase tracking-wider font-semibold transition-all ${
                    categoryFilter === "Corporate & Expos"
                      ? "bg-brand-green dark:bg-bronze-500 text-cream-50 dark:text-night-950"
                      : "bg-cream-200 dark:bg-night-750 text-chocolate-700 dark:text-night-muted hover:text-chocolate-950 dark:hover:text-cream-50"
                  }`}
                >
                  Corporate &amp; Expos (13)
                </button>
                <button
                  type="button"
                  onClick={() => setCategoryFilter("selected")}
                  className={`px-3.5 py-1.5 text-[11px] uppercase tracking-wider font-semibold transition-all flex items-center space-x-1.5 ${
                    categoryFilter === "selected"
                      ? "bg-bronze-500 text-chocolate-950 font-bold"
                      : "bg-cream-200 dark:bg-night-750 text-chocolate-700 dark:text-night-muted hover:text-chocolate-950 dark:hover:text-cream-50"
                  }`}
                >
                  <span>Selected</span>
                  <span className="w-4 h-4 rounded-full bg-chocolate-900 dark:bg-night-950 text-cream-50 text-[9px] flex items-center justify-center">
                    {selectedRolesList.length}
                  </span>
                </button>
              </div>

              {/* Quick Search */}
              <input
                type="text"
                placeholder="Search roles (e.g. Hostess, Shadow, Runner)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full sm:w-56 px-3 py-1.5 bg-cream-50 dark:bg-night-850 border border-chocolate-700/15 dark:border-bronze-500/20 text-xs text-chocolate-900 dark:text-cream-100 placeholder-chocolate-400 dark:placeholder-night-dim focus:outline-none focus:border-bronze-500"
              />
            </div>
          </div>

          {/* Role List Cards */}
          <div className="space-y-3 max-h-[640px] overflow-y-auto pr-1">
            {visibleRoles.map((role) => {
              const currentCount = quantities[role.id] || 0;
              const isSelected = currentCount > 0;

              return (
                <div
                  key={role.id}
                  className={`p-4 sm:p-5 border transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                    isSelected
                      ? "bg-cream-50 dark:bg-night-800 border-bronze-500/60 shadow-sm"
                      : "bg-cream-100/80 dark:bg-night-850/80 border-chocolate-700/10 dark:border-bronze-500/15 hover:border-chocolate-700/30 dark:hover:border-bronze-500/30"
                  }`}
                >
                  {/* Left: Role Info */}
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-[9.5px] uppercase font-mono tracking-wider px-2 py-0.5 bg-cream-200 dark:bg-night-750 text-chocolate-600 dark:text-bronze-300 border border-chocolate-700/10 dark:border-bronze-500/20">
                        {role.category}
                      </span>
                      {isSelected && (
                        <span className="text-[10px] font-semibold text-bronze-600 dark:text-bronze-400 font-mono">
                          ✓ ACTIVE ON ROSTER
                        </span>
                      )}
                    </div>
                    <h4 className="font-serif text-lg sm:text-xl font-medium text-chocolate-950 dark:text-cream-50">
                      {role.title}
                    </h4>
                    <p className="text-xs text-chocolate-600 dark:text-night-muted font-light leading-relaxed line-clamp-2">
                      {role.desc}
                    </p>
                  </div>

                  {/* Right: Quantity Adjuster */}
                  <div className="flex items-center space-x-2 self-end sm:self-center shrink-0">
                    {isSelected ? (
                      <div className="flex items-center space-x-1.5 bg-cream-200 dark:bg-night-750 p-1 border border-bronze-500/40 rounded-sm">
                        <button
                          type="button"
                          onClick={() => handleDecrement(role.id)}
                          className="w-8 h-8 rounded bg-cream-50 dark:bg-night-850 text-chocolate-800 dark:text-cream-100 hover:bg-bronze-500 hover:text-chocolate-950 transition-colors flex items-center justify-center focus:outline-none"
                          aria-label={`Decrease ${role.title} count`}
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>

                        <input
                          type="number"
                          min="0"
                          max="200"
                          value={currentCount}
                          onChange={(e) => handleCountChange(role.id, e.target.value)}
                          className="w-12 text-center bg-transparent font-mono font-bold text-sm text-chocolate-950 dark:text-cream-50 focus:outline-none"
                          aria-label={`${role.title} count`}
                        />

                        <button
                          type="button"
                          onClick={() => handleIncrement(role.id)}
                          className="w-8 h-8 rounded bg-cream-50 dark:bg-night-850 text-chocolate-800 dark:text-cream-100 hover:bg-bronze-500 hover:text-chocolate-950 transition-colors flex items-center justify-center focus:outline-none"
                          aria-label={`Increase ${role.title} count`}
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>

                        <button
                          type="button"
                          onClick={() => handleRemoveRole(role.id)}
                          className="w-8 h-8 rounded text-chocolate-400 hover:text-red-600 hover:bg-red-500/10 transition-colors flex items-center justify-center"
                          title="Remove from roster"
                          aria-label={`Remove ${role.title}`}
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => handleIncrement(role.id)}
                        className="px-4 py-2 border border-chocolate-700/20 dark:border-bronze-500/30 bg-cream-50 dark:bg-night-800 hover:bg-brand-green dark:hover:bg-bronze-500 hover:text-cream-50 dark:hover:text-night-950 text-chocolate-800 dark:text-cream-100 text-xs font-semibold uppercase tracking-wider transition-all flex items-center space-x-1.5"
                      >
                        <Plus className="w-3.5 h-3.5 text-bronze-500" />
                        <span>Add To Roster</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT COLUMN: Real-Time Requisition Summary & WhatsApp Submission (5 Cols) */}
        <div className="lg:col-span-5 sticky top-28 space-y-6">
          <div className="p-6 sm:p-8 bg-cream-100 dark:bg-night-800 border-2 border-bronze-500/40 dark:border-bronze-500/40 shadow-xl rounded-sm space-y-6 relative overflow-hidden">
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-bronze-400 via-bronze-500 to-bronze-400" />

            <div className="flex items-center justify-between border-b border-chocolate-700/10 dark:border-night-700 pb-4">
              <div>
                <span className="micro-label text-bronze-600 dark:text-bronze-400">OPERATIONAL DOSSIER</span>
                <h3 className="font-serif text-2xl text-chocolate-950 dark:text-cream-50 font-medium">
                  Roster Breakdown
                </h3>
              </div>
              <div className="text-right">
                <span className="font-serif text-3xl sm:text-4xl font-semibold text-chocolate-950 dark:text-cream-50 block leading-none">
                  {totalCrewCount}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-bronze-600 dark:text-bronze-400 font-mono">
                  Total Crew
                </span>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 gap-3 p-3 bg-cream-200/80 dark:bg-night-850 rounded border border-chocolate-700/10 dark:border-bronze-500/15 text-xs font-sans">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-chocolate-500 dark:text-night-muted block">
                  Roles Configured
                </span>
                <strong className="text-sm text-chocolate-950 dark:text-cream-50 font-mono">
                  {selectedRolesList.length} Categories
                </strong>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-chocolate-500 dark:text-night-muted block">
                  Recommended Leads
                </span>
                <strong className="text-sm text-bronze-600 dark:text-bronze-400 font-mono">
                  {recommendedSupervisors} Duty Supervisor(s)
                </strong>
              </div>
            </div>

            {/* Selected Roles Breakdown Summary */}
            <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
              {selectedRolesList.length === 0 ? (
                <div className="py-6 text-center text-xs text-chocolate-500 dark:text-night-muted italic">
                  No roles selected yet. Add roles from the left panel to build your deployment roster.
                </div>
              ) : (
                selectedRolesList.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between py-1.5 px-2 bg-cream-50 dark:bg-night-750 border border-chocolate-700/5 dark:border-bronze-500/10 text-xs font-sans"
                  >
                    <span className="text-chocolate-800 dark:text-cream-100 font-medium truncate max-w-[200px]">
                      {item.title}
                    </span>
                    <span className="font-mono font-bold text-bronze-600 dark:text-bronze-300">
                      {item.count} crew
                    </span>
                  </div>
                ))
              )}
            </div>

            {/* Event Specification Inputs */}
            <form onSubmit={handleSubmitWhatsApp} className="space-y-4 pt-2 border-t border-chocolate-700/10 dark:border-night-700">
              <span className="micro-label block text-bronze-600 dark:text-bronze-400">
                Event &amp; Contact Details
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Your Full Name *"
                  required
                  value={eventDetails.clientName}
                  onChange={(e) => setEventDetails({ ...eventDetails, clientName: e.target.value })}
                  className="w-full px-3 py-2.5 bg-cream-50 dark:bg-night-850 border border-chocolate-700/15 dark:border-bronze-500/20 text-xs text-chocolate-900 dark:text-cream-100 placeholder-chocolate-400 dark:placeholder-night-dim focus:outline-none focus:border-bronze-500"
                />

                <input
                  type="tel"
                  placeholder="Contact Mobile *"
                  required
                  value={eventDetails.phone}
                  onChange={(e) => setEventDetails({ ...eventDetails, phone: e.target.value })}
                  className="w-full px-3 py-2.5 bg-cream-50 dark:bg-night-850 border border-chocolate-700/15 dark:border-bronze-500/20 text-xs text-chocolate-900 dark:text-cream-100 placeholder-chocolate-400 dark:placeholder-night-dim focus:outline-none focus:border-bronze-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[9.5px] uppercase font-mono tracking-wider text-chocolate-500 dark:text-night-muted mb-1">
                    Event Date (Past dates disabled)
                  </label>
                  <input
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                    value={eventDetails.eventDate}
                    onChange={(e) => {
                      const val = e.target.value;
                      const today = new Date().toISOString().split("T")[0];
                      if (val && val < today) return;
                      setEventDetails({ ...eventDetails, eventDate: val });
                    }}
                    className="w-full px-3 py-2 bg-cream-50 dark:bg-night-850 border border-chocolate-700/15 dark:border-bronze-500/20 text-xs text-chocolate-900 dark:text-cream-100 placeholder-chocolate-400 dark:placeholder-night-dim focus:outline-none focus:border-bronze-500"
                  />
                </div>

                <div>
                  <label className="block text-[9.5px] uppercase font-mono tracking-wider text-chocolate-500 dark:text-night-muted mb-1">
                    Venue Location
                  </label>
                  <input
                    type="text"
                    placeholder="Venue (e.g. Taj Palace, Delhi)"
                    value={eventDetails.venue}
                    onChange={(e) => setEventDetails({ ...eventDetails, venue: e.target.value })}
                    className="w-full px-3 py-2 bg-cream-50 dark:bg-night-850 border border-chocolate-700/15 dark:border-bronze-500/20 text-xs text-chocolate-900 dark:text-cream-100 placeholder-chocolate-400 dark:placeholder-night-dim focus:outline-none focus:border-bronze-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <select
                  value={eventDetails.eventType}
                  onChange={(e) => setEventDetails({ ...eventDetails, eventType: e.target.value })}
                  className="w-full px-3 py-2.5 bg-cream-50 dark:bg-night-850 border border-chocolate-700/15 dark:border-bronze-500/20 text-xs text-chocolate-900 dark:text-cream-100 focus:outline-none focus:border-bronze-500"
                >
                  <option value="Luxury Wedding Hospitality">Luxury Wedding Hospitality</option>
                  <option value="Corporate Summit / AGM">Corporate Summit / AGM</option>
                  <option value="International Trade Expo">International Trade Expo</option>
                  <option value="Brand Activation / Launch">Brand Activation / Launch</option>
                  <option value="Government Conclave">Government Conclave</option>
                  <option value="Sports Arena & Marathon">Sports Arena &amp; Marathon</option>
                </select>

                <select
                  value={eventDetails.shiftDays}
                  onChange={(e) => setEventDetails({ ...eventDetails, shiftDays: e.target.value })}
                  className="w-full px-3 py-2.5 bg-cream-50 dark:bg-night-850 border border-chocolate-700/15 dark:border-bronze-500/20 text-xs text-chocolate-900 dark:text-cream-100 focus:outline-none focus:border-bronze-500"
                >
                  <option value="1 Day (Single Shift)">1 Day (Single Shift)</option>
                  <option value="2 Days (Multi-Day)">2 Days (Multi-Day)</option>
                  <option value="3+ Days (Full Conclave)">3+ Days (Full Conclave)</option>
                  <option value="24/7 Multi-Shift Coverage">24/7 Multi-Shift Coverage</option>
                </select>
              </div>

              <textarea
                rows={2}
                placeholder="Any special uniform, language, or VIP preferences..."
                value={eventDetails.specialNotes}
                onChange={(e) => setEventDetails({ ...eventDetails, specialNotes: e.target.value })}
                className="w-full px-3 py-2 bg-cream-50 dark:bg-night-850 border border-chocolate-700/15 dark:border-bronze-500/20 text-xs text-chocolate-900 dark:text-cream-100 placeholder-chocolate-400 dark:placeholder-night-dim focus:outline-none focus:border-bronze-500"
              />

              {/* Action Buttons */}
              <div className="pt-2 space-y-2.5">
                {/* PRIMARY WHATSAPP SUBMIT BUTTON */}
                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-cream-50 font-sans text-xs font-semibold uppercase tracking-[0.18em] transition-all flex items-center justify-center space-x-2.5 shadow-md active:scale-[0.99]"
                >
                  <WhatsappIcon className="w-4 h-4 text-emerald-200" />
                  <span>Submit Requisition via WhatsApp</span>
                </button>

                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    onClick={handleCopySummary}
                    className="flex-1 py-2.5 px-3 bg-cream-200 dark:bg-night-750 hover:bg-cream-300 dark:hover:bg-night-700 text-chocolate-800 dark:text-cream-100 text-[11px] font-semibold uppercase tracking-wider border border-chocolate-700/10 dark:border-bronze-500/20 transition-colors flex items-center justify-center space-x-1.5"
                  >
                    {copied ? (
                      <>
                        <CheckCheck className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Roster Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-bronze-600" />
                        <span>Copy Summary</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="py-2.5 px-3 bg-cream-200 dark:bg-night-750 hover:bg-cream-300 dark:hover:bg-night-700 text-chocolate-600 dark:text-night-muted text-[11px] font-semibold uppercase tracking-wider border border-chocolate-700/10 dark:border-bronze-500/20 transition-colors flex items-center justify-center space-x-1"
                    title="Clear Roster"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Reset</span>
                  </button>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-[10px] text-chocolate-500 dark:text-night-dim font-mono">
                <span>• Direct 24/7 Operations Desk</span>
                <span>• Priority Dispatch</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
