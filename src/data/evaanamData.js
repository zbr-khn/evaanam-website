// EVAANAM Verified Data Store
// Source of truth for EVAANAM Event Workforce & Operations (Generic Showcase)

export const COMPANY_INFO = {
  name: "EVAANAM Event Workforce & Operations",
  shortName: "EVAANAM",
  tagline: "Trained Event Manpower & Crew in Delhi NCR",
  cin: "DEMO-DL-2026-REG",
  gstin: "07AAXXX0000X0ZX",
  phones: [
    { label: "Operations Requisition Desk", number: "01100000000", display: "+91 (0) 11 0000 0000" },
  ],
  email: "contact@eventworkforce.demo",
  address: {
    line1: "Central Operations Hub",
    locality: "Connaught Place / South Delhi Corridor",
    city: "New Delhi",
    region: "Delhi NCR",
    pincode: "110001",
    country: "India",
    full: "Central Operations Hub, New Delhi, Delhi NCR – 110001, India"
  },
  socials: {
    instagramHospitality: {
      handle: "@luxuryhospitality.demo",
      url: "https://instagram.com",
      title: "Luxury Hospitality Operations",
      bio: "Wedding hospitality crew · Five-star floors · Delhi NCR",
      postsCount: 120
    },
    instagramCorporate: {
      handle: "@corporateoperations.demo",
      url: "https://instagram.com",
      title: "Corporate Summits & Operations",
      bio: "Corporate summits, expos & large activations across Delhi NCR"
    },
    facebook: {
      name: "Event Operations Platform",
      handle: "@eventoperations.demo",
      url: "https://facebook.com"
    },
    youtube: {
      name: "Floor Deployments & Highlights",
      handle: "@eventoperations.demo",
      url: "https://youtube.com"
    }
  },
  stats: [
    { value: 200, suffix: "+", label: "Professional Crew Network", desc: "Vetted, verified and ready for deployment across NCR" },
    { value: 300, suffix: "+", label: "Projects Delivered", desc: "Luxury weddings, international summits & trade expos" },
    { value: 30, suffix: "+", label: "Premium Venues Served", desc: "Five-star hotel ballrooms & premier convention arenas" },
    { value: 24, suffix: " Hrs", label: "Rapid Deployment Turnaround", desc: "Emergency standby & backup rosters always on call" },
  ]
};

export const WEDDING_ROLES = [
  { id: "shadows", title: "Shadows", desc: "Dedicated personal shadows for bride, groom, and family principals ensuring effortless timing and immediate assistance throughout multi-day ceremonies." },
  { id: "runners", title: "Runners", desc: "High-agility crew handling backstage communication, urgent logistical transfers, and real-time coordination between stage and green rooms." },
  { id: "helpdesk-crew", title: "Helpdesk Crew", desc: "Warm, articulate personnel managing hotel guest concierge, room key handover, welcome hampers, and itinerary guidance." },
  { id: "logistics-coordinators", title: "Logistics Coordinators", desc: "Precision fleet managers overseeing airport transfers, vehicle marshaling, luggage tracking, and vendor load-ins." },
  { id: "welcome-hostesses", title: "Welcome Hostesses", desc: "Impeccably groomed hostesses conducting traditional greetings, floral aartis, and gracious lobby receptions." },
  { id: "floor-supervisors", title: "Floor Supervisors", desc: "Experienced operational heads supervising floor discipline, zone coverage, replenishment timing, and client liaison." },
  { id: "stewards", title: "Stewards", desc: "Trained five-star banquet stewards providing polished table service, VIP seating hospitality, and discreet attention." },
  { id: "wait-crew", title: "Wait Crew", desc: "Uniformed food & beverage crew versed in high-volume luxury catering, silver service etiquette, and swift clearing." },
  { id: "ushers", title: "Ushers", desc: "Poised crew members managing guest seating, procession aisle clearance, ceremony movement, and banquet orientation." },
  { id: "registration-crew", title: "Registration Crew", desc: "Tech-savvy check-in desk managers handling digital RSVP verification, wristband distribution, and gift registry." },
  { id: "vendor-managers", title: "Vendor Managers", desc: "On-floor mediators aligning sound, light, decor, floral, and DJ timelines with planner schedules." },
  { id: "night-desk-crew", title: "Night Desk Crew", desc: "Dedicated overnight shift crew safeguarding continuity, early morning setups, and late-night guest needs." },
  { id: "welcome-tilak-crew", title: "Welcome & Tilak Crew", desc: "Specialized ceremonial staff delivering traditional auspicious welcomes with cultural warmth and elegance." },
  { id: "vip-shadows", title: "VIP Shadows", desc: "Discreet, security-aware hosts assigned to dignitary and celebrity guests with refined protocol training." },
];

export const CORPORATE_ROLES = [
  { id: "promoters-brand-ambassadors", title: "Promoters & Brand Ambassadors", desc: "Articulate brand representatives trained in product demonstration, key talking points, and high-impact delegate engagement." },
  { id: "corp-floor-supervisors", title: "Floor Supervisors", desc: "Seasoned event managers managing multi-hall logistics, shift rotations, break schedules, and emergency response." },
  { id: "volunteers", title: "Volunteers", desc: "Energetic, educated teams driving directional guidance, session attendance, mic running, and delegate assistance." },
  { id: "models", title: "Models", desc: "Professional poise for stage reveals, product unveilings, award felicitation, and luxury gala hosting." },
  { id: "show-runners", title: "Show Runners", desc: "Backstage stage managers synchronizing speaker green rooms, teleprompters, AV cues, and stage handovers." },
  { id: "corp-registration-crew", title: "Registration & Helpdesk Crew", desc: "High-speed badge printing, QR code scanning, delegate kit distribution, and information desk support." },
  { id: "brand-activation-crew", title: "Brand Activation Crew", desc: "Dynamic teams executing interactive tech kiosks, VR stations, photobooths, and gamified brand experiences." },
  { id: "exhibition-stall-crew", title: "Exhibition Stall Crew", desc: "Bilingual stall managers trained in lead capture, brochure distribution, and high-touch buyer hospitality." },
  { id: "entertainment-crew", title: "Entertainment Crew", desc: "Artist managers handling green room riders, backstage security, stage transit, and soundcheck liaison." },
  { id: "production-supervisors", title: "Production Supervisors", desc: "Technical coordinators ensuring stage safety, truss rigging oversight, LED wall uptime, and vendor sync." },
  { id: "corporate-hostesses", title: "Corporate Hostesses", desc: "Refined hosts managing C-suite VIP lounges, boardroom meetings, international delegations, and protocol." },
  { id: "bulk-event-crew", title: "Bulk Event Crew", desc: "Scalable 50–200+ crew deployments for massive crowd marshaling, entry gating, and arena logistics." },
  { id: "bouncers", title: "Bouncers", desc: "Certified, disciplined executive security personnel for red carpets, backstage containment, and access management." },
];

export const EVENT_TYPES = [
  {
    title: "Weddings",
    subtitle: "Five-Star Floors & Multi-Day Celebrations",
    desc: "From sangeet choreography runners to VIP personal shadows and overnight hospitality desks across palace & luxury resort properties.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80",
    tags: ["VIP Shadows", "Welcome Hostesses", "Helpdesk", "Runners"]
  },
  {
    title: "Corporate Events",
    subtitle: "Conferences, AGMs & Leadership Summits",
    desc: "Seamless delegate registration, C-suite boardroom hostesses, stage show runners, and multi-hall session supervisors.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80",
    tags: ["Registration Desks", "Show Runners", "Lounge Hostesses", "Supervisors"]
  },
  {
    title: "Brand Activations",
    subtitle: "Experiential Roadshows & Product Launches",
    desc: "Charismatic brand ambassadors, interactive booth facilitators, and lead-generation teams that elevate brand perception.",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1000&q=80",
    tags: ["Brand Ambassadors", "Tech Kiosk Leads", "Crowd Engagement"]
  },
  {
    title: "Exhibitions",
    subtitle: "International Trade Expos & Industry Fairs",
    desc: "Multi-hall crowd marshals, stall hosts, badge printing desks, and bilingual booth managers across Pragati Maidan, Yashobhoomi & IEML.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=80",
    tags: ["Exhibition Stall Crew", "Badge Check-in", "Hall Marshals"]
  },
  {
    title: "Government Events",
    subtitle: "Diplomatic Summits & High-Security Conclaves",
    desc: "Strictly verified, protocol-trained personnel adhering to highest security clearances, state protocol, and dignitary decorum.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=80",
    tags: ["Protocol Ushers", "Verified Crew", "VIP Security Escorts"]
  },
  {
    title: "Sports Events",
    subtitle: "Stadium Marathons, Tournaments & Arenas",
    desc: "High-volume volunteer coordination, athlete holding areas, timing check marshals, and VIP stadium box hospitality.",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1000&q=80",
    tags: ["Arena Marshals", "Kit Distribution", "Athlete Hospitality"]
  },
];

export const WHY_US_PILLARS = [
  {
    number: "01",
    title: "No Last-Minute Ghosting",
    subtitle: "Verified bench backup for every deployment",
    desc: "We maintain an active, fully briefed standby bench for every deployment. If any crew member faces an emergency, stand-by personnel are mobilized before doors open."
  },
  {
    number: "02",
    title: "Verified & Background-Checked Crew",
    subtitle: "Identity-verified and briefed before deployment",
    desc: "Every crew member undergoes a comprehensive verification process including government ID validation, address verification, and background checks."
  },
  {
    number: "03",
    title: "Uniformed, Groomed, On-Brand",
    subtitle: "Presentable, trained teams matching venue and client standards",
    desc: "From formal black-tie banquet attire to customized brand merchandise, our teams adhere to uncompromising grooming, posture, and hygiene benchmarks."
  },
  {
    number: "04",
    title: "Rapid Replacement Capability",
    subtitle: "Trained substitutes dispatched when needed",
    desc: "Our central operations desk coordinates teams across Delhi NCR with mobile supervisors ready to deploy relief personnel to active floors."
  },
  {
    number: "05",
    title: "One Point of Contact, Zero Chaos",
    subtitle: "A single coordinator manages the entire requirement",
    desc: "You deal directly with an assigned Senior Operations Manager who oversees rosters, briefings, meal breaks, and reporting. Zero friction for your production team."
  },
  {
    number: "06",
    title: "Premium Venue Experience",
    subtitle: "Teams experienced on five-star and major venue floors",
    desc: "Our crew knows the service corridors, loading docks, and operational guidelines of premier hotels and convention centers across Delhi NCR."
  },
];

export const WORKFORCE_SYSTEM_STAGES = [
  {
    number: "01",
    name: "Recruitment",
    summary: "Screening for aptitude, poise & communication",
    desc: "Face-to-face evaluation assessing spoken English/Hindi fluency, hospitality mindset, punctuality, and composure under pressure.",
    deliverable: "Thoroughly screened candidate selection"
  },
  {
    number: "02",
    name: "Verification",
    summary: "Multi-point identity & background clearance",
    desc: "Government identity validation, address verification, and background clearance.",
    deliverable: "Verified crew database"
  },
  {
    number: "03",
    name: "Grooming & Training",
    summary: "Five-star hospitality & operational protocols",
    desc: "Mandatory training modules covering table etiquette, posture, crisis de-escalation, radio etiquette, and client confidentiality.",
    deliverable: "Standardized grooming manual compliance"
  },
  {
    number: "04",
    name: "Crew Profile",
    summary: "Skillset matching & digital roster dossier",
    desc: "Tailored crew dossiers matched to event specifics (e.g. VIP language requirements, tech aptitude for badge apps, or physical agility for load-ins).",
    deliverable: "Pre-event crew roster shared with client"
  },
  {
    number: "05",
    name: "Deployment",
    summary: "Punctual mobilization & pre-shift briefing",
    desc: "Crew mobilizes in advance of call-time for venue walk-through, role alignment, uniform inspection, and communications sync.",
    deliverable: "Punctual on-site muster"
  },
  {
    number: "06",
    name: "Live Supervision",
    summary: "Active on-ground management & standby buffer",
    desc: "Dedicated Floor Supervisors monitor zone performance, coordinate meal rotations, and liaise directly with event planners.",
    deliverable: "Real-time floor coordination"
  },
  {
    number: "07",
    name: "Performance Review",
    summary: "Post-event audit & quality indexing",
    desc: "Systematic client feedback collection, crew performance scoring, and operational incident logs to continuously refine standards.",
    deliverable: "Comprehensive event handover report"
  },
];

export const FIVE_STAR_HOTELS = [
  { name: "ITC Maurya", location: "Diplomatic Enclave, New Delhi", type: "Luxury Hotel & Banquets" },
  { name: "ITC Grand Bharat", location: "Gurgaon / Manesar", type: "Luxury Retreat & Golf Resort" },
  { name: "The Leela Palace, New Delhi", location: "Chanakyapuri, New Delhi", type: "Ultra-Luxury Palace" },
  { name: "Taj Palace, New Delhi", location: "Chanakyapuri, New Delhi", type: "Grand Convention Hotel" },
  { name: "The Oberoi, New Delhi", location: "Dr. Zakir Hussain Marg", type: "Iconic Five-Star Landmark" },
  { name: "JW Marriott Aerocity", location: "Aerocity, New Delhi", type: "Large-Scale Ballroom Venue" },
  { name: "Shangri-La Eros", location: "Connaught Place, New Delhi", type: "Luxury Hospitality & Events" },
  { name: "The Lalit", location: "Barakhamba Road, New Delhi", type: "Premier Convention Suites" },
  { name: "Le Meridien", location: "Windsor Place, New Delhi", type: "Contemporary Luxury Ballroom" },
  { name: "Hyatt Regency Delhi", location: "Bhikaji Cama Place, New Delhi", type: "Five-Star Banquet Destination" },
  { name: "Andaz Delhi", location: "Aerocity, New Delhi", type: "Concept Luxury & Courtyard Lawns" },
  { name: "Roseate House", location: "Aerocity, New Delhi", type: "Boutique Hospitality & Ballrooms" },
  { name: "Pullman Aerocity", location: "Aerocity, New Delhi", type: "Mega Convention Space" },
  { name: "Crowne Plaza Okhla", location: "Okhla Phase I, New Delhi", type: "Corporate & Social Ballrooms" },
  { name: "DoubleTree by Hilton, Gurgaon", location: "Golf Course Road, Gurgaon", type: "Executive Banquet Floors" },
  { name: "Radisson Blu, Gurgaon", location: "Sohna Road, Gurgaon", type: "Convention & Wedding Floors" },
  { name: "Trident, Gurgaon", location: "Udyog Vihar, Gurgaon", type: "Resort-Style Luxury" },
  { name: "The Westin, Gurgaon", location: "MG Road, Gurgaon", type: "Grand Ballroom & Lawns" },
  { name: "The Ashok", location: "Chanakyapuri, New Delhi", type: "Heritage State Banquets" },
  { name: "Grand Hyatt Delhi", location: "Vasant Kunj, New Delhi", type: "Five-Star Luxury Experience" },
];

export const CONVENTION_AND_ARENAS = [
  { name: "Pragati Maidan (IECC)", location: "Mathura Road, New Delhi", type: "International Exhibition Complex" },
  { name: "Yashobhoomi (IICC)", location: "Sector 25, Dwarka", type: "Asia's Premier Mega Convention Centre" },
  { name: "Bharat Mandapam", location: "Pragati Maidan, New Delhi", type: "Apex G20 Summit Centre" },
  { name: "India Habitat Centre", location: "Lodhi Road, New Delhi", type: "Cultural & Corporate Conclaves" },
  { name: "Jawaharlal Nehru Stadium", location: "Pragati Vihar, New Delhi", type: "Mega Stadium & Concourse" },
  { name: "Thyagaraj Sports Complex", location: "INA Colony, New Delhi", type: "Multi-Purpose Indoor Arena" },
  { name: "Indira Gandhi Indoor Stadium", location: "ITO, New Delhi", type: "Large-Scale Arena & Sports Complex" },
  { name: "Aerocity Convention Centre", location: "Aerocity Hospitality District", type: "Global Summit Hub" },
  { name: "Epicentre, Gurgaon", location: "Sector 44, Gurgaon", type: "Corporate & Cultural Center" },
  { name: "NSIC Exhibition Complex, Okhla", location: "Okhla Industrial Area", type: "Industrial & Consumer Expos" },
  { name: "Leela Ambience Convention Hotel", location: "East Delhi / Shahdara", type: "Largest Pillarless Ballroom" },
  { name: "India Exposition Mart (IEML)", location: "Greater Noida", type: "World-Class Trade Fair Grounds" },
  { name: "Talkatora Stadium", location: "President's Estate, New Delhi", type: "Indoor Arena & Plenary Hall" },
  { name: "Major Dhyan Chand National Stadium", location: "India Gate, New Delhi", type: "National Sports Venue" },
  { name: "Constitution Club of India", location: "Rafi Marg, New Delhi", type: "Dignitary Conferences" },
  { name: "Vigyan Bhawan", location: "Maulana Azad Road, New Delhi", type: "Government State Plenary Centre" },
  { name: "The Ashoka Convention Centre", location: "Chanakyapuri, New Delhi", type: "Diplomatic Event Floor" },
  { name: "Noida Stadium Grounds", location: "Sector 21A, Noida", type: "Open-Air Mega Event Arena" },
  { name: "DLF CyberHub Corporate Venues", location: "Cyber City, Gurgaon", type: "Executive Brand Activations" },
  { name: "Kaara, Gurgaon", location: "Sohna Road, Gurgaon", type: "Luxury Wedding Lawn & Banquets" },
];

export const GALLERY_IMAGES = [
  // 9 Wedding Hospitality Photos (Generic Curated Unsplash Luxury Event Photography)
  {
    id: "w1",
    category: "wedding",
    categoryLabel: "Wedding Hospitality",
    title: "Grand Banquet Table & Service Alignment",
    subtitle: "ITC Maurya Ballroom · VIP Table Stewards",
    aspect: "tall",
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    desc: "Precision banquet alignment and discreet high-touch hospitality for wedding guests."
  },
  {
    id: "w2",
    category: "wedding",
    categoryLabel: "Wedding Hospitality",
    title: "Ceremonial Welcome & Aarti Hostesses",
    subtitle: "The Leela Palace · Welcome Hostesses",
    aspect: "wide",
    src: "https://images.unsplash.com/photo-1519225438865-c8160e1d09e3?auto=format&fit=crop&w=1200&q=80",
    desc: "Ceremonial greetings and floral welcome for high-profile wedding entourage."
  },
  {
    id: "w3",
    category: "wedding",
    categoryLabel: "Wedding Hospitality",
    title: "Palace Courtyard Mandap Supervision",
    subtitle: "ITC Grand Bharat · Floor Supervisors",
    aspect: "square",
    src: "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=1200&q=80",
    desc: "Continuous coordination between ritual pandits, wedding planners, and hospitality runners."
  },
  {
    id: "w4",
    category: "wedding",
    categoryLabel: "Wedding Hospitality",
    title: "VIP Bridal & Groom Shadow Escort",
    subtitle: "Taj Palace · Dedicated Personal Shadows",
    aspect: "tall",
    src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
    desc: "Attentive bridal assistance, attire care, and immediate touch-up coordination."
  },
  {
    id: "w5",
    category: "wedding",
    categoryLabel: "Wedding Hospitality",
    title: "Guest Concierge & Hamper Distribution",
    subtitle: "JW Marriott Aerocity · Helpdesk Crew",
    aspect: "wide",
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    desc: "Seamless check-in flow and hamper distribution for residential wedding attendees."
  },
  {
    id: "w6",
    category: "wedding",
    categoryLabel: "Wedding Hospitality",
    title: "Sangeet Stage Runner Coordination",
    subtitle: "The Oberoi · Backstage Show Runners",
    aspect: "square",
    src: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=1200&q=80",
    desc: "Backstage green-room cues and choreography synchronization during live celebrity performances."
  },
  {
    id: "w7",
    category: "wedding",
    categoryLabel: "Wedding Hospitality",
    title: "Fine Dining Silver Service & Stewards",
    subtitle: "The Westin Gurgaon · Trained Stewards",
    aspect: "wide",
    src: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80",
    desc: "Discreet multi-course plated dinner service for state dignitaries and family elders."
  },
  {
    id: "w8",
    category: "wedding",
    categoryLabel: "Wedding Hospitality",
    title: "Overnight Reception & Transition Desk",
    subtitle: "Roseate House · Night Desk Crew",
    aspect: "tall",
    src: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
    desc: "24-hour continuous support managing transfers, baraat setups, and morning transitions."
  },
  {
    id: "w9",
    category: "wedding",
    categoryLabel: "Wedding Hospitality",
    title: "Procession & Aisle Marshaling",
    subtitle: "Andaz Delhi · Ushers & Floor Leads",
    aspect: "square",
    src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
    desc: "Calm, dignified crowd circulation directing guests seamlessly from cocktail lawns to banquet hall."
  },

  // 10 Corporate & Expo Photos (Generic Curated Unsplash Corporate Photography)
  {
    id: "c1",
    category: "corporate",
    categoryLabel: "Corporate & Expos",
    title: "Plenary Hall Stage Management & Registration",
    subtitle: "Bharat Mandapam · Corporate Floor Team",
    aspect: "wide",
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    desc: "Precision timing, registration desk coordination, and delegate check-in management."
  },
  {
    id: "c2",
    category: "corporate",
    categoryLabel: "Corporate & Expos",
    title: "Digital Badge Printing & Express Check-In",
    subtitle: "Yashobhoomi (IICC) · Registration Crew",
    aspect: "tall",
    src: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1200&q=80",
    desc: "High-throughput QR scanning desks processing attendees during morning peak hours."
  },
  {
    id: "c3",
    category: "corporate",
    categoryLabel: "Corporate & Expos",
    title: "Global Tech Expo Stall Engagement",
    subtitle: "Pragati Maidan (IECC) · Exhibition Stall Crew",
    aspect: "square",
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
    desc: "Lead qualification, collateral dissemination, and executive booth hosting."
  },
  {
    id: "c4",
    category: "corporate",
    categoryLabel: "Corporate & Expos",
    title: "C-Suite VIP Lounge Hospitality",
    subtitle: "Leela Ambience Convention · Corporate Hostesses",
    aspect: "tall",
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    desc: "Discreet catering coordination and meeting room facilitation for enterprise leaders."
  },
  {
    id: "c5",
    category: "corporate",
    categoryLabel: "Corporate & Expos",
    title: "Automotive Brand Activation Pavilion",
    subtitle: "India Exposition Mart (IEML) · Brand Ambassadors",
    aspect: "wide",
    src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80",
    desc: "Product unveiling walkthroughs and interactive simulator onboarding."
  },
  {
    id: "c6",
    category: "corporate",
    categoryLabel: "Corporate & Expos",
    title: "Leadership Gala Awards & Felicitations",
    subtitle: "Pullman Aerocity · Professional Ushers & Crew",
    aspect: "square",
    src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80",
    desc: "Trophy handover decorum and onstage dignitary alignment during annual corporate gala."
  },
  {
    id: "c7",
    category: "corporate",
    categoryLabel: "Corporate & Expos",
    title: "Executive Convention Floor Operations",
    subtitle: "India Habitat Centre · Event Crew",
    aspect: "wide",
    src: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=1200&q=80",
    desc: "Full floor management, badge issuance, and delegate directional guidance."
  },
  {
    id: "c8",
    category: "corporate",
    categoryLabel: "Corporate & Expos",
    title: "Exhibition Roster Briefing & Floor Alignment",
    subtitle: "Pragati Maidan (IECC) · Exhibition Crew",
    aspect: "wide",
    src: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&w=1200&q=80",
    desc: "Pre-event briefing, hall entrance access control, and delegate crowd circulation."
  },

  // 9 Behind The Scenes & Operational Deployments (Generic Curated Unsplash Event Staging)
  {
    id: "b1",
    category: "bts",
    categoryLabel: "Behind The Scenes",
    title: "Audio-Visual Console & Production Sync",
    subtitle: "Plenary Hall Tech Control",
    aspect: "tall",
    src: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=80",
    desc: "Stage AV coordination and live lighting cues sync."
  },
  {
    id: "b2",
    category: "bts",
    categoryLabel: "Behind The Scenes",
    title: "Pre-Shift Crew Muster & Briefing",
    subtitle: "Convention Staging Corridor",
    aspect: "wide",
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    desc: "Floor assignments and timing synchronization before doors open."
  },
  {
    id: "b3",
    category: "bts",
    categoryLabel: "Behind The Scenes",
    title: "Radio Channel Coordination",
    subtitle: "Backstage Operations Desk",
    aspect: "square",
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    desc: "Continuous wireless communication across all active zones."
  },
  {
    id: "b4",
    category: "bts",
    categoryLabel: "Behind The Scenes",
    title: "Fine Dining Place Setting Inspection",
    subtitle: "Grand Ballroom Alignment",
    aspect: "tall",
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
    desc: "Precision silver service verification prior to guest seating."
  },
  {
    id: "b5",
    category: "bts",
    categoryLabel: "Behind The Scenes",
    title: "Stage Rigging & Lighting Check",
    subtitle: "Arena Production Rig",
    aspect: "wide",
    src: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80",
    desc: "Overhead safety inspection and stage luminaire focusing."
  },
  {
    id: "b6",
    category: "bts",
    categoryLabel: "Behind The Scenes",
    title: "Wireless Microphone Soundcheck",
    subtitle: "Auditorium Technical Run",
    aspect: "square",
    src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80",
    desc: "Frequency tuning and acoustics calibration for keynote speakers."
  },
  {
    id: "b7",
    category: "bts",
    categoryLabel: "Behind The Scenes",
    title: "Uniform & Grooming Alignment",
    subtitle: "Crew Assembly Area",
    aspect: "wide",
    src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
    desc: "Standardized grooming check adhering to five-star manual."
  },
  {
    id: "b8",
    category: "bts",
    categoryLabel: "Behind The Scenes",
    title: "Logistics Load-In & Material Movement",
    subtitle: "Docking Bay & Service Lift",
    aspect: "tall",
    src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    desc: "Careful transport of fragile banquet and exhibition assets."
  },
  {
    id: "b9",
    category: "bts",
    categoryLabel: "Behind The Scenes",
    title: "Central Operations Command",
    subtitle: "Master Event Control",
    aspect: "square",
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    desc: "Real-time headcount tracking and dispatch coordination."
  },

  // 5 Brand Activations & Executive Celebrity Highlight Moments (Generic High-Profile Formats)
  {
    id: "h1",
    category: "activations",
    categoryLabel: "Executive & Activations",
    title: "Celebrity Escort & Keynote Coordination",
    subtitle: "Luxury Conclave · VIP Personal Escort",
    aspect: "tall",
    src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80",
    desc: "Dedicated green-room liaison, stage handover, and protocol escort for celebrity keynote speakers."
  },
  {
    id: "h2",
    category: "activations",
    categoryLabel: "Executive & Activations",
    title: "Artist Liaison & Backstage Escort",
    subtitle: "Live Event Arena · Artist Show Runners",
    aspect: "tall",
    src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
    desc: "Close-protection escort, backstage queue coordination, and stage entry synchronization for featured performers."
  },
  {
    id: "h3",
    category: "activations",
    categoryLabel: "Executive & Activations",
    title: "Tech Experience Pavilion & Brand Activation",
    subtitle: "Brand Activation Pavilion · Experience Crew",
    aspect: "wide",
    src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80",
    desc: "Product demonstration crew, experiential booth staffing, and customer walkthrough facilitation."
  },
  {
    id: "h4",
    category: "activations",
    categoryLabel: "Executive & Activations",
    title: "Aviation Summit & Corporate Leadership Assembly",
    subtitle: "Corporate Conclave · Registration & Usher Crew",
    aspect: "wide",
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    desc: "High-level aviation conclave management, executive seating ushering, and plenary coordination."
  },
  {
    id: "h5",
    category: "activations",
    categoryLabel: "Executive & Activations",
    title: "Corporate Summit Floor Operations & Pavilion Leads",
    subtitle: "Convention Floor · Operations Crew",
    aspect: "square",
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
    desc: "Full venue staffing, stage timing synchronization, and multi-hall delegate flow management."
  }
];

export const FEATURED_HIGHLIGHTS = [
  {
    id: "hl-keynote",
    tag: "Celebrity VIP Protocol",
    title: "Celebrity Keynote Escort",
    client: "Executive Gala",
    src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80",
    desc: "High-touch green room coordination and stage entry liaison."
  },
  {
    id: "hl-artist",
    tag: "Artist Management",
    title: "Live Arena Artist Liaison",
    client: "Live Production",
    src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
    desc: "Backstage cue synchronisation and close-protection escort."
  },
  {
    id: "hl-tech",
    tag: "Brand Activation",
    title: "Experience Pavilion: Tech Innovation",
    client: "Product Launch",
    src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80",
    desc: "Interactive product demo crew and attendee walkthroughs."
  },
  {
    id: "hl-summit",
    tag: "Corporate Conclave",
    title: "Aviation & Leadership Conclave",
    client: "Corporate Assembly",
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    desc: "Executive ushering and plenary floor operations."
  },
  {
    id: "hl-trade",
    tag: "Summit Operations",
    title: "Floor Operations: Trade Summit",
    client: "Annual Summit",
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
    desc: "Full floor deployment and delegate flow management."
  }
];

export const TESTIMONIALS = [
  {
    id: "t1",
    quote: "The team was professional and well-trained. They made our conference seamless.",
    author: "Operations Lead",
    role: "Global Tech Summit",
    location: "Noida",
    category: "Corporate & Tech",
    rating: 5,
    eventCount: "Annual Tech Conference"
  },
  {
    id: "t2",
    quote: "We've worked with many staffing agencies, but Evaanam stands out for their reliability.",
    author: "Senior Event Producer",
    role: "National Roadshows",
    location: "Mumbai",
    category: "Event Production",
    rating: 5,
    eventCount: "Multi-City Roadshows"
  },
  {
    id: "t3",
    quote: "Last-minute request handled perfectly. Will definitely work with them again.",
    author: "Wedding Hospitality Chair",
    role: "Grand Wedding Reception",
    location: "Delhi",
    category: "Wedding Hospitality",
    rating: 5,
    eventCount: "Grand Wedding Reception"
  },
  {
    id: "t4",
    quote: "Our event had zero manpower issues – Evaanam handled everything like pros.",
    author: "Corporate Operations Director",
    role: "National Leadership Summit",
    location: "Delhi",
    category: "Corporate Summit",
    rating: 5,
    eventCount: "National Leadership Summit"
  },
  {
    id: "t5",
    quote: "As a promoter, I finally feel respected and paid on time. Thank you Evaanam!",
    author: "Lead Team Supervisor",
    role: "Exhibition Roster",
    location: "Gurgaon",
    category: "Workforce & Talent",
    rating: 5,
    eventCount: "Exhibition Roster"
  },
  {
    id: "t6",
    quote: "Quick response time and reliable service. Highly recommend Evaanam for any event.",
    author: "Trade Fair Coordinator",
    role: "Pragati Maidan Expo",
    location: "Delhi NCR",
    category: "Trade Expos",
    rating: 5,
    eventCount: "Pragati Maidan Expo"
  },
  {
    id: "t7",
    quote: "Professionalism at its best! The staff arrived on time and were perfectly groomed.",
    author: "Brand Experience Manager",
    role: "Consumer Brand Pavilion",
    location: "Delhi NCR",
    category: "Brand Activations",
    rating: 5,
    eventCount: "Consumer Brand Pavilion"
  },
  {
    id: "t8",
    quote: "We've been using Evaanam for all our activations. Consistent quality every time.",
    author: "Marketing Operations Lead",
    role: "Retail Experience Series",
    location: "Delhi NCR",
    category: "Retail Activations",
    rating: 5,
    eventCount: "Retail Series"
  },
  {
    id: "t9",
    quote: "The team handled our high-profile corporate event with discretion and efficiency.",
    author: "VIP Conclave Coordinator",
    role: "Dignitary Conclave",
    location: "Delhi NCR",
    category: "VIP Corporate Conclave",
    rating: 5,
    eventCount: "Dignitary Conclave"
  },
  {
    id: "t10",
    quote: "Best manpower partner in Delhi NCR. Their staff are always well-trained and presentable.",
    author: "Senior Luxury Wedding Planner",
    role: "Destination Wedding Series",
    location: "Delhi NCR",
    category: "Wedding Hospitality",
    rating: 5,
    eventCount: "Destination Wedding Series"
  }
];
