import React, { useState, useEffect, useRef } from "react";
import {
  Sparkles,
  Send,
  X,
  MessageSquare,
  Bot,
  User,
  CheckCircle2,
  Calendar,
  MapPin,
  Users,
  Clock,
  Phone,
  ShieldCheck,
  ChevronRight,
  RefreshCw,
} from "lucide-react";
import { COMPANY_INFO, WEDDING_ROLES, CORPORATE_ROLES } from "../data/evaanamData";

/**
 * EVAANAMChatbot - "Eva · AI Operations Assistant"
 * Inverse Theme Color Palette:
 * - In Light Mode: Chat window renders in Dark Mode theme (#081F18 Deep British Racing Green & Gold)
 * - In Dark Mode: Chat window renders in Light Mode theme (#FCFAF6 Crisp Alabaster White & Rich Chocolate)
 */
export default function EVAANAMChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Namaste & Welcome. I am Eva, your 24/7 Operations Assistant at EVAANAM. What type of event manpower do you require?",
      options: [
        { label: "💍 Luxury Wedding Hospitality", value: "Wedding Hospitality" },
        { label: "🏢 Corporate Summit & Expo", value: "Corporate & Expos" },
        { label: "🚀 Brand Activation / Pavilion", value: "Brand Activation" },
        { label: "💬 Go Straight to Direct Consultation", value: "Direct Consultation" },
      ],
    },
  ]);

  const [chatData, setChatData] = useState({
    eventType: "",
    headcount: "",
    venueLocation: "",
    timeline: "",
  });

  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Global custom event listener so any button on the site can trigger Eva
  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-eva-chat", handleOpen);
    return () => window.removeEventListener("open-eva-chat", handleOpen);
  }, []);

  const handleOptionSelect = (option) => {
    const userMsg = {
      id: Date.now(),
      sender: "user",
      text: option.label,
    };
    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      processNextStep(option.value);
      setIsTyping(false);
    }, 450);
  };

  const processNextStep = (val) => {
    if (val === "Direct Consultation") {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          sender: "bot",
          text: "Understood! Let's connect you directly with our Senior Operations Desk via WhatsApp or direct line.",
          options: [
            { label: "📱 Chat on WhatsApp Now", value: "OPEN_WHATSAPP_DIRECT" },
            { label: "📞 Call Operations Desk", value: "CALL_OPS_DIRECT" },
            { label: "🔄 Start Requisition Again", value: "START_OVER" },
          ],
        },
      ]);
      return;
    }

    if (val === "OPEN_WHATSAPP_DIRECT") {
      const url = `https://wa.me/919310039929?text=${encodeURIComponent(
        "Hello Eva & Operations Desk, I would like to schedule a direct consultation for manpower staffing."
      )}`;
      window.open(url, "_blank", "noopener,noreferrer");
      return;
    }

    if (val === "CALL_OPS_DIRECT") {
      window.location.href = "tel:+919310039929";
      return;
    }

    if (val === "START_OVER") {
      resetChat();
      return;
    }

    // Step 1: Event Type Chosen -> Ask Headcounts
    if (!chatData.eventType) {
      setChatData((prev) => ({ ...prev, eventType: val }));
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          sender: "bot",
          text: `Noted: ${val}. How many crew members or specialized personnel do you estimate needing on the floor?`,
          options: [
            { label: "👥 4 to 12 Crew (VIP Shadows & Reception)", value: "4-12 Crew" },
            { label: "👥 15 to 30 Crew (Full Ballroom & Stewards)", value: "15-30 Crew" },
            { label: "👥 35 to 75 Crew (Multi-Hall / Mega Expo)", value: "35-75 Crew" },
            { label: "👥 80+ Crew (Arena / Stadium Operations)", value: "80+ Crew" },
            { label: "❓ Unsure — Need Guidance", value: "Guidance Needed" },
          ],
        },
      ]);
      return;
    }

    // Step 2: Headcount Chosen -> Ask Venue Location
    if (!chatData.headcount) {
      setChatData((prev) => ({ ...prev, headcount: val }));
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          sender: "bot",
          text: "Understood. Where is your event or venue floor situated in Delhi NCR?",
          options: [
            { label: "📍 South / Central Delhi (Taj / Leela / IHC)", value: "South/Central Delhi" },
            { label: "📍 Aerocity / IGI Hospitality District", value: "Aerocity Hub" },
            { label: "📍 Gurgaon / CyberCity / Golf Course Rd", value: "Gurgaon Hotels" },
            { label: "📍 Pragati Maidan (IECC) / Bharat Mandapam", value: "Pragati Maidan" },
            { label: "📍 Yashobhoomi (IICC) / Dwarka Mega Expo", value: "Yashobhoomi Dwarka" },
            { label: "📍 IEML / Greater Noida Trade Grounds", value: "IEML Greater Noida" },
          ],
        },
      ]);
      return;
    }

    // Step 3: Venue Location Chosen -> Ask Timeline
    if (!chatData.venueLocation) {
      setChatData((prev) => ({ ...prev, venueLocation: val }));
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          sender: "bot",
          text: "Perfect. When is your event scheduled?",
          options: [
            { label: "⚡ Urgent (Within next 48 to 72 hours)", value: "Next 48-72h" },
            { label: "🗓️ This Coming Week", value: "This Week" },
            { label: "📅 Next Month / Upcoming Season", value: "Upcoming Month" },
          ],
        },
      ]);
      return;
    }

    // Step 4: Final Summary & WhatsApp Transfer
    if (!chatData.timeline) {
      const finalTimeline = val;
      setChatData((prev) => ({ ...prev, timeline: finalTimeline }));

      const summaryText = `📋 Requisition Summary:\n• Event: ${chatData.eventType}\n• Scale: ${chatData.headcount}\n• Venue Hub: ${chatData.venueLocation}\n• Urgency: ${finalTimeline}`;

      // Transmit background email backup to ops@evaanam.com
      try {
        fetch("https://formsubmit.co/ajax/ops@evaanam.com", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            client: "Eva AI Chat Requisition",
            eventType: chatData.eventType,
            headcount: chatData.headcount,
            location: chatData.venueLocation,
            timeline: finalTimeline,
            _subject: `New Eva Requisition: ${chatData.eventType} (${chatData.headcount})`,
            _template: "table",
          }),
        }).catch(() => {});
      } catch (err) {}

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          sender: "bot",
          text: `${summaryText}\n\nYour deployment requisition has been structured! Tap below to forward this brief directly to our on-duty WhatsApp dispatch manager for instant availability & rates.`,
          options: [
            { label: "💬 Send Brief to WhatsApp Now", value: "DISPATCH_WHATSAPP_FINAL" },
            { label: "📞 Call Senior Operations Desk", value: "CALL_OPS_DIRECT" },
            { label: "🔄 Start a New Inquiry", value: "START_OVER" },
          ],
        },
      ]);
      return;
    }

    if (val === "DISPATCH_WHATSAPP_FINAL") {
      const waMsg = `*New Manpower Requisition via Eva Assistant*\n\n• *Event Scope:* ${chatData.eventType || "General"}\n• *Crew Scale:* ${chatData.headcount || "Standard"}\n• *Venue Location:* ${chatData.venueLocation || "Delhi NCR"}\n• *Timeline:* ${chatData.timeline || "Upcoming"}\n\n_Please confirm crew availability, shift rates, and supervisor allocation._`;
      const url = `https://wa.me/919310039929?text=${encodeURIComponent(waMsg)}`;
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const resetChat = () => {
    setChatData({
      eventType: "",
      headcount: "",
      venueLocation: "",
      timeline: "",
    });
    setMessages([
      {
        id: Date.now(),
        sender: "bot",
        text: "Let's start fresh! What type of event or manpower execution do you require?",
        options: [
          { label: "💍 Luxury Wedding Hospitality", value: "Wedding Hospitality" },
          { label: "🏢 Corporate Summit & Expo", value: "Corporate & Expos" },
          { label: "🚀 Brand Activation / Pavilion", value: "Brand Activation" },
          { label: "💬 Go Straight to Direct Consultation", value: "Direct Consultation" },
        ],
      },
    ]);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-6 right-3 sm:right-6 z-50 w-[92vw] sm:w-[410px] h-[560px] max-h-[85vh] bg-[#081F18] dark:bg-[#FCFAF6] border-2 border-bronze-400/60 dark:border-chocolate-700/20 rounded-lg shadow-2xl flex flex-col overflow-hidden animate-fade-in text-cream-50 dark:text-chocolate-950">
      
      {/* Header Bar: Eva Branding (Inverse Theme) */}
      <div className="p-4 bg-[#051410] dark:bg-[#F3ECE2] text-cream-50 dark:text-chocolate-950 border-b border-bronze-500/30 dark:border-chocolate-700/15 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="relative w-10 h-10 rounded-full bg-cream-100/15 dark:bg-chocolate-900/10 border border-bronze-400/60 dark:border-bronze-500/50 flex items-center justify-center text-amber-300 dark:text-bronze-600 shadow-inner">
            <Sparkles className="w-5 h-5 animate-pulse" />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-[#051410] dark:border-[#F3ECE2]" />
          </div>
          <div>
            <h3 className="font-serif text-base font-semibold tracking-wide flex items-center space-x-1.5 text-cream-50 dark:text-chocolate-950">
              <span>Eva</span>
              <span className="text-[9.5px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.5 bg-bronze-500/30 dark:bg-brand-green dark:text-cream-50 text-amber-300 rounded">
                AI Assistant
              </span>
            </h3>
            <p className="text-[10px] font-mono text-bronze-300 dark:text-chocolate-600 flex items-center space-x-1">
              <span>24/7 Operations Concierge · Verified Requisitions</span>
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-1">
          <button
            onClick={resetChat}
            title="Restart Chat with Eva"
            className="p-1.5 text-cream-300 hover:text-cream-50 dark:text-chocolate-600 dark:hover:text-chocolate-950 transition-colors rounded"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 text-cream-300 hover:text-cream-50 dark:text-chocolate-600 dark:hover:text-chocolate-950 transition-colors rounded"
            aria-label="Close Chat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Chat Messages Area (Inverse Theme Palette) */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-[#081F18]/95 dark:bg-[#FCFAF6]">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
          >
            <div
              className={`max-w-[85%] p-3.5 rounded-sm text-xs leading-relaxed ${
                msg.sender === "user"
                  ? "bg-bronze-500 dark:bg-brand-green text-night-950 dark:text-cream-50 font-semibold rounded-br-none shadow-md"
                  : "bg-[#0E2F25] dark:bg-[#EFE6D8] border border-bronze-500/30 dark:border-chocolate-700/15 text-cream-50 dark:text-chocolate-950 rounded-bl-none shadow-md"
              }`}
            >
              <p className="whitespace-pre-line">{msg.text}</p>
            </div>

            {/* Interactive Action Options / Chips */}
            {msg.options && msg.options.length > 0 && (
              <div className="mt-2.5 flex flex-col space-y-1.5 w-full max-w-[90%]">
                {msg.options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleOptionSelect(opt)}
                    className={`text-left text-[11.5px] px-3.5 py-2.5 rounded transition-all duration-200 border flex items-center justify-between shadow-sm ${
                      opt.value.includes("WHATSAPP")
                        ? "bg-emerald-600 hover:bg-emerald-700 text-white font-bold border-emerald-500 shadow-md"
                        : opt.value.includes("CALL")
                        ? "bg-amber-600 hover:bg-amber-700 text-white font-bold border-amber-500 shadow-md"
                        : "bg-[#0F352A] dark:bg-[#F3ECE2] hover:bg-bronze-500 hover:text-night-950 dark:hover:bg-brand-green dark:hover:text-cream-50 border-bronze-500/30 dark:border-chocolate-700/20 text-cream-100 dark:text-chocolate-900 font-semibold"
                    }`}
                  >
                    <span>{opt.label}</span>
                    <ChevronRight className="w-3.5 h-3.5 opacity-70 shrink-0 ml-1" />
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center space-x-1.5 p-3 bg-[#0E2F25] dark:bg-[#EFE6D8] border border-bronze-500/30 dark:border-chocolate-700/15 rounded-sm w-fit">
            <span className="text-[10px] font-mono text-amber-300 dark:text-bronze-600 mr-1 font-bold">Eva is preparing</span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 dark:bg-bronze-600 animate-bounce" />
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 dark:bg-bronze-600 animate-bounce [animation-delay:0.2s]" />
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 dark:bg-bronze-600 animate-bounce [animation-delay:0.4s]" />
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Summary Pill Bar */}
      {(chatData.eventType || chatData.headcount || chatData.venueLocation) && (
        <div className="px-3.5 py-2 bg-[#051410] dark:bg-[#EFE6D8] border-t border-bronze-500/20 dark:border-chocolate-700/15 text-[10px] font-mono text-cream-200 dark:text-chocolate-800 flex items-center justify-between overflow-x-auto whitespace-nowrap">
          <span>Requisition: {chatData.eventType || "General"}</span>
          {chatData.headcount && <span>• {chatData.headcount}</span>}
          {chatData.venueLocation && <span>• {chatData.venueLocation}</span>}
        </div>
      )}

      {/* Bottom Security / Trust Footer Note */}
      <div className="p-3 bg-[#051410] dark:bg-[#F3ECE2] border-t border-bronze-500/20 dark:border-chocolate-700/15 flex items-center justify-center space-x-1.5 text-[10px] font-mono text-bronze-300 dark:text-chocolate-600">
        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
        <span>Verified 1-Tap Option Flow · Direct WhatsApp Dispatch</span>
      </div>
    </div>
  );
}
