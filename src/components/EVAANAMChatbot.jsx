import React, { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, Bot, User, Sparkles, ArrowUpRight, Phone, CheckCircle2, ChevronRight, RefreshCw, Heart } from "lucide-react";
import { COMPANY_INFO } from "../data/evaanamData";
import EVAANAMGeometricMark from "./EVAANAMGeometricMark";

/**
 * Eva · AI Operations Assistant
 * Guides clients through event scope, manpower headcounts, venue selection,
 * or direct 1-on-1 consultation, and dispatches directly to WhatsApp & email.
 */
export default function EVAANAMChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [chatData, setChatData] = useState({
    eventType: "",
    headcount: "",
    venueLocation: "",
    timeline: "",
  });
  const messagesEndRef = useRef(null);

  // Listen for global open event from marketing banners across the site
  useEffect(() => {
    const handleOpenChat = () => setIsOpen(true);
    window.addEventListener("open-eva-chat", handleOpenChat);
    return () => window.removeEventListener("open-eva-chat", handleOpenChat);
  }, []);

  // Initial welcome message from Eva
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: 1,
          sender: "bot",
          text: "Hi there! I'm Eva, your AI Operations Assistant at EVAANAM. 👋 I can help you estimate manpower rosters, check venue feasibility, or connect you directly with our dispatch team. What are you planning?",
          options: [
            { label: "💍 Luxury Wedding Hospitality", value: "Wedding Hospitality" },
            { label: "🏢 Corporate Summit & Expo", value: "Corporate & Expos" },
            { label: "🚀 Brand Activation / Pavilion", value: "Brand Activation" },
            { label: "💬 Go Straight to Direct Consultation", value: "Direct Consultation" },
          ],
        },
      ]);
    }
  }, []);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, isOpen]);

  const addBotResponse = (text, options = [], delay = 550) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          sender: "bot",
          text,
          options,
        },
      ]);
    }, delay);
  };

  const handleOptionSelect = (option) => {
    // Add user message
    const userMsg = { id: Date.now(), sender: "user", text: option.label || option.value };
    setMessages((prev) => [...prev, userMsg]);

    const val = option.value;

    // 1. Direct consultation shortcut
    if (val === "Direct Consultation" || val === "Direct Call") {
      setChatData((prev) => ({ ...prev, eventType: "Direct Consultation Request" }));
      addBotResponse(
        "I'd be delighted to connect you directly with our senior operations team on WhatsApp or phone for immediate roster availability.",
        [
          { label: "⚡ Connect on WhatsApp Dispatch", value: "LAUNCH_WHATSAPP" },
          { label: "📞 Call Operations Desk Directly", value: "CALL_OPS" },
          { label: "🔄 Ask Eva Something Else", value: "RESET_CHAT" },
        ]
      );
      return;
    }

    // 2. Launch WhatsApp or Actions
    if (val === "LAUNCH_WHATSAPP") {
      launchWhatsApp();
      return;
    }
    if (val === "CALL_OPS") {
      window.open(`tel:${COMPANY_INFO.phone.dispatch}`, "_self");
      return;
    }
    if (val === "RESET_CHAT") {
      resetChat();
      return;
    }

    // 3. Step Progression
    if (!chatData.eventType) {
      setChatData((prev) => ({ ...prev, eventType: val }));
      addBotResponse(
        `Wonderful! For ${val}, approximately how many personnel or crew roles do you estimate needing?`,
        [
          { label: "5 – 15 Stewards / Hostesses", value: "5-15 Crew" },
          { label: "15 – 40 Core Operations Floor", value: "15-40 Crew" },
          { label: "50 – 150+ Full Venue Deployment", value: "50-150+ Large Deployment" },
          { label: "Not sure / Need Eva's Recommendation", value: "Roster Recommendation Needed" },
        ]
      );
    } else if (!chatData.headcount) {
      setChatData((prev) => ({ ...prev, headcount: val }));
      addBotResponse(
        "Got it. Which venue or city/region will this event take place in?",
        [
          { label: "5-Star Luxury Hotel (ITC / Taj / Leela / Oberoi)", value: "5-Star Luxury Hotel" },
          { label: "Convention Centre (Pragati Maidan / Yashobhoomi)", value: "Convention / Arena" },
          { label: "Delhi NCR Banquet / Luxury Farm", value: "Delhi NCR Banquet/Farm" },
          { label: "Destination / Outside NCR", value: "Destination / Outside NCR" },
          { label: "Venue Not Decided Yet", value: "Venue Pending" },
        ]
      );
    } else if (!chatData.venueLocation) {
      setChatData((prev) => ({ ...prev, venueLocation: val }));
      addBotResponse(
        "And what is your target event date or deployment timeline?",
        [
          { label: "Within 24 – 48 Hours (Urgent)", value: "Urgent 24-48 Hours" },
          { label: "Within Next 2 – 4 Weeks", value: "Upcoming Month" },
          { label: "Future Quarter / In Planning", value: "Future Planning" },
          { label: "Date Flexible / In Consultation", value: "Date Flexible" },
        ]
      );
    } else if (!chatData.timeline) {
      const updatedData = { ...chatData, timeline: val };
      setChatData(updatedData);

      // Send silent email copy in background
      silentEmailDispatch(updatedData);

      addBotResponse(
        "Perfect! I've summarized your requisition briefing. You can now transfer this directly to our 24/7 WhatsApp Operations Dispatch for instant roster booking.",
        [
          { label: "⚡ Send Requisition to WhatsApp Dispatch", value: "LAUNCH_WHATSAPP" },
          { label: "📞 Speak with Operations Lead", value: "CALL_OPS" },
          { label: "🔄 Start New Requisition with Eva", value: "RESET_CHAT" },
        ]
      );
    }
  };

  const handleCustomSend = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const text = inputText.trim();
    setInputText("");

    // Add user message
    setMessages((prev) => [...prev, { id: Date.now(), sender: "user", text }]);

    // Smart response based on text keywords
    const lower = text.toLowerCase();
    if (lower.includes("price") || lower.includes("cost") || lower.includes("rate") || lower.includes("quotation")) {
      addBotResponse(
        "Our manpower rates depend on deployment tier (Stewards, VIP Shadows, Bouncers, Stage Runners). Would you like our operations desk to generate a customized quote for you on WhatsApp?",
        [
          { label: "⚡ Get Instant Quote on WhatsApp", value: "LAUNCH_WHATSAPP" },
          { label: "💬 Go Straight to Consultation", value: "Direct Consultation" },
        ]
      );
    } else if (lower.includes("urgent") || lower.includes("today") || lower.includes("tomorrow") || lower.includes("now")) {
      addBotResponse(
        "For urgent / 24-hour turnaround deployments, our fast-response dispatch coordinators in Delhi NCR can mobilize immediately.",
        [
          { label: "⚡ Dispatch Urgent WhatsApp Request", value: "LAUNCH_WHATSAPP" },
          { label: "📞 Call +91 93100 39929 Directly", value: "CALL_OPS" },
        ]
      );
    } else {
      addBotResponse(
        `Thanks for sharing! Would you like me to forward these details to our operations desk on WhatsApp so they can prepare your staff roster?`,
        [
          { label: "⚡ Forward to WhatsApp Dispatch", value: "LAUNCH_WHATSAPP" },
          { label: "💬 Speak with Operations Coordinator", value: "Direct Consultation" },
          { label: "🔄 Ask Eva Another Question", value: "RESET_CHAT" },
        ]
      );
    }
  };

  const launchWhatsApp = () => {
    const summary = `*EVAANAM MANPOWER REQUISITION (PREPARED BY EVA)*\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `• *Scope:* ${chatData.eventType || "Staffing Consultation"}\n` +
      `• *Headcount Tier:* ${chatData.headcount || "To be discussed"}\n` +
      `• *Venue / Location:* ${chatData.venueLocation || "Delhi NCR / Pan-India"}\n` +
      `• *Timeline:* ${chatData.timeline || "In Planning"}\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `_Transferred via Eva · EVAANAM AI Operations Assistant_`;

    const encoded = encodeURIComponent(summary);
    window.open(`https://wa.me/919310039929?text=${encoded}`, "_blank");
  };

  const silentEmailDispatch = async (data) => {
    try {
      await fetch("https://formsubmit.co/ajax/ops@evaanam.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `[Eva AI Assistant Lead] ${data.eventType} - ${data.venueLocation}`,
          PreparedBy: "Eva (AI Assistant)",
          EventType: data.eventType,
          HeadcountRequirement: data.headcount,
          VenueLocation: data.venueLocation,
          Timeline: data.timeline,
          Timestamp: new Date().toISOString(),
        }),
      });
    } catch (err) {
      console.warn("Silent chat log dispatch notice:", err);
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

  return (
    <>
      {/* Floating Trigger: Meet Eva */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-2 select-none">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="group flex items-center space-x-3 bg-brand-green dark:bg-night-800 text-cream-50 dark:text-cream-100 pl-3.5 pr-4 py-2.5 rounded-full border border-bronze-500/40 shadow-xl hover:border-bronze-500 hover:shadow-2xl hover:scale-105 transition-all duration-300 focus:outline-none"
            aria-label="Chat with Eva · AI Operations Assistant"
          >
            {/* Animated Avatar Icon */}
            <div className="relative w-8 h-8 rounded-full bg-cream-100/10 border border-bronze-400/50 flex items-center justify-center text-amber-300">
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping" />
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full" />
            </div>

            <div className="flex flex-col items-start pr-0.5 text-left">
              <span className="text-[11.5px] font-sans font-bold uppercase tracking-wider text-cream-50 flex items-center space-x-1">
                <span>Meet Eva</span>
                <span className="text-[9px] px-1.5 py-0.2 bg-bronze-500/30 text-amber-300 rounded font-mono">AI</span>
              </span>
              <span className="text-[9px] font-mono text-bronze-300">
                Online 24/7 · WhatsApp
              </span>
            </div>
          </button>
        )}
      </div>

      {/* Floating Interactive Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-4 sm:right-6 z-50 w-[92vw] sm:w-[410px] h-[570px] max-h-[86vh] bg-cream-100 dark:bg-night-850 border border-chocolate-700/20 dark:border-bronze-500/30 rounded-lg shadow-2xl flex flex-col overflow-hidden animate-fade-in text-chocolate-900 dark:text-cream-100">
          
          {/* Header Bar: Eva Branding */}
          <div className="p-4 bg-brand-green dark:bg-night-900 text-cream-50 border-b border-chocolate-700/20 dark:border-bronze-500/20 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10 rounded-full bg-cream-200/15 border border-bronze-400/50 flex items-center justify-center text-amber-300 shadow-inner">
                <Sparkles className="w-5 h-5" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-night-900" />
              </div>
              <div>
                <h3 className="font-serif text-base font-medium tracking-wide text-cream-50 flex items-center space-x-1.5">
                  <span>Eva</span>
                  <span className="text-[9.5px] font-mono uppercase tracking-wider px-1.5 py-0.5 bg-bronze-500/30 text-amber-300 rounded">
                    AI Assistant
                  </span>
                </h3>
                <p className="text-[10px] font-mono text-bronze-300 flex items-center space-x-1">
                  <span>24/7 Operations Concierge · WhatsApp Dispatch</span>
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-1">
              <button
                onClick={resetChat}
                title="Restart Chat with Eva"
                className="p-1.5 text-cream-200/70 hover:text-cream-50 transition-colors rounded"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-cream-200/70 hover:text-cream-50 transition-colors rounded"
                aria-label="Close Chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Chat Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-cream-100/70 dark:bg-night-900/60">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[85%] p-3.5 rounded-sm text-xs leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-brand-green dark:bg-bronze-500 text-cream-50 dark:text-night-950 rounded-br-none shadow-sm"
                      : "bg-cream-200/90 dark:bg-night-800 border border-chocolate-700/10 dark:border-bronze-500/20 text-chocolate-950 dark:text-cream-100 rounded-bl-none shadow-sm"
                  }`}
                >
                  <p>{msg.text}</p>
                </div>

                {/* Interactive Action Options / Chips */}
                {msg.options && msg.options.length > 0 && (
                  <div className="mt-2.5 flex flex-col space-y-1.5 w-full max-w-[90%]">
                    {msg.options.map((opt, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleOptionSelect(opt)}
                        className={`text-left text-[11.5px] px-3.5 py-2 rounded transition-all duration-200 border flex items-center justify-between ${
                          opt.value.includes("WHATSAPP")
                            ? "bg-emerald-600 hover:bg-emerald-700 text-white font-semibold border-emerald-500 shadow-sm"
                            : opt.value.includes("CALL")
                            ? "bg-amber-600 hover:bg-amber-700 text-white font-semibold border-amber-500 shadow-sm"
                            : "bg-cream-100 dark:bg-night-750 hover:bg-cream-300 dark:hover:bg-night-700 border-chocolate-700/15 dark:border-bronze-500/20 text-chocolate-800 dark:text-cream-200 hover:text-chocolate-950 dark:hover:text-cream-50"
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
              <div className="flex items-center space-x-1.5 p-3 bg-cream-200/90 dark:bg-night-800 border border-chocolate-700/10 dark:border-bronze-500/20 rounded-sm w-fit">
                <span className="text-[10px] font-mono text-bronze-500 mr-1 font-semibold">Eva is thinking</span>
                <span className="w-1.5 h-1.5 rounded-full bg-bronze-500 animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-bronze-500 animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-bronze-500 animate-bounce [animation-delay:0.4s]" />
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Summary Pill Bar */}
          {(chatData.eventType || chatData.headcount || chatData.venueLocation) && (
            <div className="px-3 py-1.5 bg-cream-200 dark:bg-night-800 border-t border-chocolate-700/10 dark:border-bronze-500/15 text-[10px] font-mono text-chocolate-600 dark:text-night-dim flex items-center justify-between overflow-x-auto whitespace-nowrap">
              <span>Scope: {chatData.eventType || "General"}</span>
              {chatData.headcount && <span>• {chatData.headcount}</span>}
              {chatData.venueLocation && <span>• {chatData.venueLocation}</span>}
            </div>
          )}

          {/* Bottom Free-Text Input Bar */}
          <form
            onSubmit={handleCustomSend}
            className="p-3 bg-cream-100 dark:bg-night-850 border-t border-chocolate-700/15 dark:border-bronze-500/20 flex items-center space-x-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask Eva anything about manpower..."
              className="flex-1 px-3.5 py-2 text-xs rounded bg-cream-200 dark:bg-night-800 border border-chocolate-700/15 dark:border-bronze-500/20 text-chocolate-950 dark:text-cream-50 placeholder:text-chocolate-400 dark:placeholder:text-night-dim focus:outline-none focus:border-bronze-500"
            />
            <button
              type="submit"
              className="p-2 bg-brand-green dark:bg-bronze-500 text-cream-50 dark:text-night-950 rounded hover:bg-bronze-500 dark:hover:bg-bronze-400 transition-colors focus:outline-none"
              aria-label="Send message to Eva"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
