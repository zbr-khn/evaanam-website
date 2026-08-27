// EVAANAM Verified Data Store
// Source of truth for EVAANAM Manpower & Execution Pvt. Ltd.

export const COMPANY_INFO = {
  name: "EVAANAM Manpower & Execution Pvt. Ltd.",
  shortName: "EVAANAM",
  tagline: "Trained Event Manpower & Crew in Delhi NCR",
  cin: "U78300DL2026PTC468049",
  gstin: "07AAJCE8033H1ZK",
  phones: [
    { label: "Operations Line 1", number: "9310039929", display: "+91 93100 39929" },
    { label: "Operations Line 2", number: "7678622843", display: "+91 76786 22843" },
  ],
  email: "ops@evaanam.com",
  address: {
    line1: "C-58, 1st Floor, Block-C, Johri Farm",
    locality: "New Friends Colony",
    city: "New Delhi",
    region: "South Delhi",
    pincode: "110025",
    country: "India",
    full: "C-58, 1st Floor, Block-C, Johri Farm, New Friends Colony, New Delhi, South Delhi – 110025"
  },
  socials: {
    instagramHospitality: {
      handle: "@evaanamhospitalitypvt.ltd",
      url: "https://instagram.com/evaanamhospitalitypvt.ltd",
      title: "EVAANAM Hospitality Pvt. Ltd.",
      bio: "Wedding hospitality crew · Five-star floors · Delhi NCR",
      postsCount: 101
    },
    instagramCorporate: {
      handle: "@evaanampvt.ltd",
      url: "https://instagram.com/evaanampvt.ltd",
      title: "EVAANAM Corporate & Operations",
      bio: "Corporate summits, expos & large activations across Delhi NCR"
    },
    facebook: {
      name: "EVAANAM Operations",
      handle: "EVAANAM Official",
      url: "https://www.facebook.com/share/1UVz6xkxaY/"
    },
    youtube: {
      name: "EVAANAM Crew On The Floor",
      handle: "@evaanam_pvt._ltd",
      url: "https://youtube.com/@evaanam_pvt._ltd"
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
    desc: "Dedicated EVAANAM Floor Supervisors monitor zone performance, coordinate meal rotations, and liaise directly with event planners.",
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
  // 9 Wedding Hospitality Photos (Including User Uploaded Floor Photos)
  {
    id: "w1",
    category: "wedding",
    categoryLabel: "Wedding Hospitality",
    title: "Grand Banquet Table & Service Alignment",
    subtitle: "ITC Maurya Ballroom · VIP Table Stewards",
    aspect: "tall",
    src: "./images/gallery-weddings/IMG-6449-JPG.jpg",
    desc: "Precision banquet alignment and discreet high-touch hospitality for wedding guests."
  },
  {
    id: "w2",
    category: "wedding",
    categoryLabel: "Wedding Hospitality",
    title: "Ceremonial Welcome & Aarti Hostesses",
    subtitle: "The Leela Palace · Welcome Hostesses",
    aspect: "wide",
    src: "./images/gallery-weddings/IMG-6650-JPG.jpg",
    desc: "Ceremonial greetings and floral welcome for high-profile wedding entourage."
  },
  {
    id: "w3",
    category: "wedding",
    categoryLabel: "Wedding Hospitality",
    title: "Palace Courtyard Mandap Supervision",
    subtitle: "ITC Grand Bharat · Floor Supervisors",
    aspect: "square",
    src: "./images/gallery-weddings/IMG-2923-JPG.jpg",
    desc: "Continuous coordination between ritual pandits, wedding planners, and hospitality runners."
  },
  {
    id: "w4",
    category: "wedding",
    categoryLabel: "Wedding Hospitality",
    title: "VIP Bridal & Groom Shadow Escort",
    subtitle: "Taj Palace · Dedicated Personal Shadows",
    aspect: "tall",
    src: "./images/gallery-weddings/IMG-20260301-WA0010-jpg.jpg",
    desc: "Attentive bridal assistance, attire care, and immediate touch-up coordination."
  },
  {
    id: "w5",
    category: "wedding",
    categoryLabel: "Wedding Hospitality",
    title: "Guest Concierge & Hamper Distribution",
    subtitle: "JW Marriott Aerocity · Helpdesk Crew",
    aspect: "wide",
    src: "./images/gallery-weddings/IMG-20260305-WA0003-jpg.jpg",
    desc: "Seamless check-in flow and hamper distribution for residential wedding attendees."
  },
  {
    id: "w6",
    category: "wedding",
    categoryLabel: "Wedding Hospitality",
    title: "Sangeet Stage Runner Coordination",
    subtitle: "The Oberoi · Backstage Show Runners",
    aspect: "square",
    src: "./images/gallery-weddings/IMG-20260509-WA0009(1)-jpg.jpg",
    desc: "Backstage green-room cues and choreography synchronization during live celebrity performances."
  },
  {
    id: "w7",
    category: "wedding",
    categoryLabel: "Wedding Hospitality",
    title: "Fine Dining Silver Service & Stewards",
    subtitle: "The Westin Gurgaon · Trained Stewards",
    aspect: "wide",
    src: "./images/gallery-weddings/IMG-0856.avif",
    desc: "Discreet multi-course plated dinner service for state dignitaries and family elders."
  },
  {
    id: "w8",
    category: "wedding",
    categoryLabel: "Wedding Hospitality",
    title: "Overnight Reception & Transition Desk",
    subtitle: "Roseate House · Night Desk Crew",
    aspect: "tall",
    src: "./images/gallery-weddings/IMG-7056.avif",
    desc: "24-hour continuous support managing transfers, baraat setups, and morning transitions."
  },
  {
    id: "w9",
    category: "wedding",
    categoryLabel: "Wedding Hospitality",
    title: "Procession & Aisle Marshaling",
    subtitle: "Andaz Delhi · Ushers & Floor Leads",
    aspect: "square",
    src: "./images/gallery-weddings/IMG-7965.avif",
    desc: "Calm, dignified crowd circulation directing guests seamlessly from cocktail lawns to banquet hall."
  },

  // 10 Corporate & Expo Photos (Including User Uploaded Floor Photos)
  {
    id: "c1",
    category: "corporate",
    categoryLabel: "Corporate & Expos",
    title: "Plenary Hall Stage Management & Registration",
    subtitle: "Bharat Mandapam · Corporate Floor Team",
    aspect: "wide",
    src: "./images/gallery-corporate/IMG-20250419-WA0007-jpg.jpg",
    desc: "Precision timing, registration desk coordination, and delegate check-in management."
  },
  {
    id: "c2",
    category: "corporate",
    categoryLabel: "Corporate & Expos",
    title: "Digital Badge Printing & Express Check-In",
    subtitle: "Yashobhoomi (IICC) · Registration Crew",
    aspect: "tall",
    src: "./images/gallery-corporate/IMG-20250419-WA0011-jpg.jpg",
    desc: "High-throughput QR scanning desks processing attendees during morning peak hours."
  },
  {
    id: "c3",
    category: "corporate",
    categoryLabel: "Corporate & Expos",
    title: "Global Tech Expo Stall Engagement",
    subtitle: "Pragati Maidan (IECC) · Exhibition Stall Crew",
    aspect: "square",
    src: "./images/gallery-corporate/IMG-20251023-WA0046-jpg.jpg",
    desc: "Lead qualification, collateral dissemination, and executive booth hosting."
  },
  {
    id: "c4",
    category: "corporate",
    categoryLabel: "Corporate & Expos",
    title: "C-Suite VIP Lounge Hospitality",
    subtitle: "Leela Ambience Convention · Corporate Hostesses",
    aspect: "tall",
    src: "./images/gallery-corporate/IMG-20251108-WA0002-jpg.jpg",
    desc: "Discreet catering coordination and meeting room facilitation for enterprise leaders."
  },
  {
    id: "c5",
    category: "corporate",
    categoryLabel: "Corporate & Expos",
    title: "Automotive Brand Activation Pavilion",
    subtitle: "India Exposition Mart (IEML) · Brand Ambassadors",
    aspect: "wide",
    src: "./images/gallery-corporate/IMG-20260221-WA0010-jpg.jpg",
    desc: "Product unveiling walkthroughs and interactive simulator onboarding."
  },
  {
    id: "c6",
    category: "corporate",
    categoryLabel: "Corporate & Expos",
    title: "Leadership Gala Awards & Felicitations",
    subtitle: "Pullman Aerocity · Professional Ushers & Crew",
    aspect: "square",
    src: "./images/gallery-corporate/IMG-20260309-WA0022-jpg-(1).jpg",
    desc: "Trophy handover decorum and onstage dignitary alignment during annual corporate gala."
  },
  {
    id: "c7",
    category: "corporate",
    categoryLabel: "Corporate & Expos",
    title: "Executive Convention Floor Operations",
    subtitle: "India Habitat Centre · Event Crew",
    aspect: "wide",
    src: "./images/gallery-corporate/IMG.png",
    desc: "Full floor management, badge issuance, and delegate directional guidance."
  },
  {
    id: "c8",
    category: "corporate",
    categoryLabel: "Corporate & Expos",
    title: "Exhibition Roster Briefing & Floor Alignment",
    subtitle: "Pragati Maidan (IECC) · Exhibition Crew",
    aspect: "wide",
    src: "./images/gallery-corporate/Screenshot 2026-08-28 012011.png",
    desc: "Pre-event briefing, hall entrance access control, and delegate crowd circulation."
  },

  // 9 Behind The Scenes & Operational Deployments (No Captions)
  {
    id: "b1",
    category: "bts",
    categoryLabel: "Behind The Scenes",
    title: "",
    subtitle: "",
    aspect: "tall",
    src: "./images/gallery-bts/Screenshot 2026-08-28 014230.png",
    desc: ""
  },
  {
    id: "b2",
    category: "bts",
    categoryLabel: "Behind The Scenes",
    title: "",
    subtitle: "",
    aspect: "wide",
    src: "./images/gallery-bts/Screenshot 2026-08-28 014407.png",
    desc: ""
  },
  {
    id: "b3",
    category: "bts",
    categoryLabel: "Behind The Scenes",
    title: "",
    subtitle: "",
    aspect: "square",
    src: "./images/gallery-bts/Screenshot 2026-08-28 014432.png",
    desc: ""
  },
  {
    id: "b4",
    category: "bts",
    categoryLabel: "Behind The Scenes",
    title: "",
    subtitle: "",
    aspect: "tall",
    src: "./images/gallery-bts/Screenshot 2026-08-28 014736.png",
    desc: ""
  },
  {
    id: "b5",
    category: "bts",
    categoryLabel: "Behind The Scenes",
    title: "",
    subtitle: "",
    aspect: "wide",
    src: "./images/gallery-bts/Screenshot 2026-08-28 014815.png",
    desc: ""
  },
  {
    id: "b6",
    category: "bts",
    categoryLabel: "Behind The Scenes",
    title: "",
    subtitle: "",
    aspect: "square",
    src: "./images/gallery-bts/Screenshot 2026-08-28 015039.png",
    desc: ""
  },
  {
    id: "b7",
    category: "bts",
    categoryLabel: "Behind The Scenes",
    title: "",
    subtitle: "",
    aspect: "wide",
    src: "./images/gallery-bts/Screenshot 2026-08-28 015124.png",
    desc: ""
  },
  {
    id: "b8",
    category: "bts",
    categoryLabel: "Behind The Scenes",
    title: "",
    subtitle: "",
    aspect: "tall",
    src: "./images/gallery-bts/Screenshot 2026-08-28 015214.png",
    desc: ""
  },
  {
    id: "b9",
    category: "bts",
    categoryLabel: "Behind The Scenes",
    title: "",
    subtitle: "",
    aspect: "square",
    src: "./images/gallery-bts/Screenshot 2026-08-28 015319.png",
    desc: ""
  },

  // 5 Brand Activations & Executive Celebrity Highlight Moments
  {
    id: "h1",
    category: "activations",
    categoryLabel: "Executive & Activations",
    title: "Celebrity Escort & Keynote Coordination: Boman Irani",
    subtitle: "Luxury Conclave · VIP Personal Escort",
    aspect: "tall",
    src: "./images/home-highlights/boman.png",
    desc: "Dedicated green-room liaison, stage handover, and protocol escort for celebrity keynote speaker Boman Irani."
  },
  {
    id: "h2",
    category: "activations",
    categoryLabel: "Executive & Activations",
    title: "Artist Liaison & Backstage Escort: Rajpal Yadav",
    subtitle: "Live Event Arena · Artist Show Runners",
    aspect: "tall",
    src: "./images/home-highlights/rajpal.png",
    desc: "Close-protection escort, backstage queue coordination, and stage entry synchronization for actor Rajpal Yadav."
  },
  {
    id: "h3",
    category: "activations",
    categoryLabel: "Executive & Activations",
    title: "Tech Experience Pavilion: Vivo Smartphone",
    subtitle: "Brand Activation Pavilion · Experience Crew",
    aspect: "wide",
    src: "./images/home-highlights/vivo.png",
    desc: "Product demonstration crew, experiential booth staffing, and customer walkthrough facilitation."
  },
  {
    id: "h4",
    category: "activations",
    categoryLabel: "Executive & Activations",
    title: "Aviation Summit & Corporate Assembly: IndiGo",
    subtitle: "Corporate Conclave · Registration & Usher Crew",
    aspect: "wide",
    src: "./images/home-highlights/indigo.png",
    desc: "High-level aviation conclave management, executive seating ushering, and plenary coordination."
  },
  {
    id: "h5",
    category: "activations",
    categoryLabel: "Executive & Activations",
    title: "Corporate Summit Floor Operations: Pronto",
    subtitle: "Convention Floor · Operations Crew",
    aspect: "square",
    src: "./images/home-highlights/pronto.png",
    desc: "Full venue staffing, stage timing synchronization, and multi-hall delegate flow management."
  }
];

export const FEATURED_HIGHLIGHTS = [
  {
    id: "hl-boman",
    tag: "Celebrity VIP Protocol",
    title: "Celebrity Keynote Escort: Boman Irani",
    client: "Executive Gala",
    src: "./images/home-highlights/boman.png",
    desc: "High-touch green room coordination and stage entry liaison."
  },
  {
    id: "hl-rajpal",
    tag: "Artist Management",
    title: "Live Arena Artist Liaison: Rajpal Yadav",
    client: "Live Production",
    src: "./images/home-highlights/rajpal.png",
    desc: "Backstage cue synchronisation and close-protection escort."
  },
  {
    id: "hl-vivo",
    tag: "Brand Activation",
    title: "Experience Pavilion: Vivo",
    client: "Product Launch",
    src: "./images/home-highlights/vivo.png",
    desc: "Interactive product demo crew and attendee walkthroughs."
  },
  {
    id: "hl-indigo",
    tag: "Corporate Conclave",
    title: "Aviation Conclave: IndiGo",
    client: "Corporate Assembly",
    src: "./images/home-highlights/indigo.png",
    desc: "Executive ushering and plenary floor operations."
  },
  {
    id: "hl-pronto",
    tag: "Summit Operations",
    title: "Floor Operations: Pronto",
    client: "Annual Summit",
    src: "./images/home-highlights/pronto.png",
    desc: "Full floor deployment and delegate flow management."
  }
];

export const TESTIMONIALS = [
  {
    id: "t1",
    quote: "The team was professional and well-trained. They made our conference seamless.",
    author: "Arsh",
    role: "Tech Company Lead",
    location: "Noida",
    category: "Corporate & Tech",
    rating: 5,
    eventCount: "Annual Tech Conference"
  },
  {
    id: "t2",
    quote: "We've worked with many staffing agencies, but Evaanam stands out for their reliability.",
    author: "Manoj",
    role: "Senior Event Planner",
    location: "Mumbai",
    category: "Event Production",
    rating: 5,
    eventCount: "Multi-City Roadshows"
  },
  {
    id: "t3",
    quote: "Last-minute request handled perfectly. Will definitely work with them again.",
    author: "Sahil",
    role: "Wedding Host",
    location: "Delhi",
    category: "Wedding Hospitality",
    rating: 5,
    eventCount: "Grand Wedding Reception"
  },
  {
    id: "t4",
    quote: "Our event had zero manpower issues – Evaanam handled everything like pros.",
    author: "Satyansh",
    role: "Corporate Operations Lead",
    location: "Delhi",
    category: "Corporate Summit",
    rating: 5,
    eventCount: "National Leadership Summit"
  },
  {
    id: "t5",
    quote: "As a promoter, I finally feel respected and paid on time. Thank you Evaanam!",
    author: "Sujal",
    role: "Event Crew & Promoter",
    location: "Gurgaon",
    category: "Workforce & Talent",
    rating: 5,
    eventCount: "Exhibition Roster"
  },
  {
    id: "t6",
    quote: "Quick response time and reliable service. Highly recommend Evaanam for any event.",
    author: "Jay Prakash",
    role: "Exhibition Manager",
    location: "Delhi NCR",
    category: "Trade Expos",
    rating: 5,
    eventCount: "Pragati Maidan Expo"
  },
  {
    id: "t7",
    quote: "Professionalism at its best! The staff arrived on time and were perfectly groomed.",
    author: "Rohan",
    role: "Brand Manager",
    location: "Delhi NCR",
    category: "Brand Activations",
    rating: 5,
    eventCount: "Consumer Brand Pavilion"
  },
  {
    id: "t8",
    quote: "We've been using Evaanam for all our mall activations. Consistent quality every time.",
    author: "Priya",
    role: "Marketing Head",
    location: "Delhi NCR",
    category: "Retail Activations",
    rating: 5,
    eventCount: "Mall Tour Series"
  },
  {
    id: "t9",
    quote: "The team handled our high-profile corporate event with discretion and efficiency.",
    author: "Devendar",
    role: "Event Coordinator",
    location: "Delhi NCR",
    category: "VIP Corporate Conclave",
    rating: 5,
    eventCount: "Dignitary Conclave"
  },
  {
    id: "t10",
    quote: "Best manpower partner in Delhi NCR. Their staff are always well-trained and presentable.",
    author: "Prayanshu",
    role: "Luxury Wedding Planner",
    location: "Delhi NCR",
    category: "Wedding Hospitality",
    rating: 5,
    eventCount: "Destination Wedding Series"
  }
];
