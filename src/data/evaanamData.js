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
  // 9 Wedding Hospitality Photos
  {
    id: "w1",
    category: "wedding",
    categoryLabel: "Wedding Hospitality",
    title: "Grand Chandelier Ballroom Service",
    subtitle: "ITC Maurya Ballroom · VIP Table Stewards",
    aspect: "tall",
    src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
    desc: "Precision banquet alignment and discreet high-touch hospitality for 600+ guests."
  },
  {
    id: "w2",
    category: "wedding",
    categoryLabel: "Wedding Hospitality",
    title: "Traditional Welcome & Aarti Protocol",
    subtitle: "The Leela Palace · Welcome Hostesses",
    aspect: "wide",
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
    desc: "Ceremonial greetings and floral shower welcome for high-profile wedding entourage."
  },
  {
    id: "w3",
    category: "wedding",
    categoryLabel: "Wedding Hospitality",
    title: "Palace Courtyard Mandap Supervision",
    subtitle: "ITC Grand Bharat · Floor Supervisors",
    aspect: "square",
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    desc: "Continuous coordination between ritual pandits, wedding planners, and hospitality runners."
  },
  {
    id: "w4",
    category: "wedding",
    categoryLabel: "Wedding Hospitality",
    title: "VIP Bridal Shadow Escort",
    subtitle: "Taj Palace · Dedicated Personal Shadows",
    aspect: "tall",
    src: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=80",
    desc: "Attentive bridal assistance, dress trail management, and immediate touch-up coordination."
  },
  {
    id: "w5",
    category: "wedding",
    categoryLabel: "Wedding Hospitality",
    title: "Guest Concierge & Key Distribution",
    subtitle: "JW Marriott Aerocity · Helpdesk Crew",
    aspect: "wide",
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    desc: "Seamless check-in flow and hamper distribution for 450 residential destination wedding attendees."
  },
  {
    id: "w6",
    category: "wedding",
    categoryLabel: "Wedding Hospitality",
    title: "Sangeet Stage Runner Coordination",
    subtitle: "The Oberoi · Backstage Show Runners",
    aspect: "square",
    src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80",
    desc: "Backstage green-room cues and choreography synchronization during live celebrity performances."
  },
  {
    id: "w7",
    category: "wedding",
    categoryLabel: "Wedding Hospitality",
    title: "Fine Dining Silver Service",
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
    src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
    desc: "24-hour continuous support managing midnight transfers, baraat setups, and morning breakfast transitions."
  },
  {
    id: "w9",
    category: "wedding",
    categoryLabel: "Wedding Hospitality",
    title: "Procession & Aisle Marshaling",
    subtitle: "Andaz Delhi · Ushers & Floor Leads",
    aspect: "square",
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
    desc: "Calm, dignified crowd circulation directing guests seamlessly from cocktail lawns to banquet hall."
  },

  // 10 Corporate & Expo Photos
  {
    id: "c1",
    category: "corporate",
    categoryLabel: "Corporate & Expos",
    title: "Plenary Hall Stage Management",
    subtitle: "Bharat Mandapam · Corporate Show Runners",
    aspect: "wide",
    src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80",
    desc: "Precision timing, teleprompter liaison, and dignitary stage handover for 1,200 delegates."
  },
  {
    id: "c2",
    category: "corporate",
    categoryLabel: "Corporate & Expos",
    title: "Digital Badge Printing & Express Check-In",
    subtitle: "Yashobhoomi (IICC) · Registration Crew",
    aspect: "tall",
    src: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&w=1200&q=80",
    desc: "High-throughput QR scanning desks processing 3,000+ attendees during morning peak hours."
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
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    desc: "Discreet catering coordination and meeting room facilitation for global enterprise leaders."
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
    subtitle: "Pullman Aerocity · Professional Models & Ushers",
    aspect: "square",
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    desc: "Trophy handover decorum and onstage dignitary alignment during annual corporate gala."
  },
  {
    id: "c7",
    category: "corporate",
    categoryLabel: "Corporate & Expos",
    title: "Multi-Hall Breakout Session Management",
    subtitle: "India Habitat Centre · Session Supervisors",
    aspect: "wide",
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80",
    desc: "Microphone distribution, live Q&A coordination, and punctual room changeovers."
  },
  {
    id: "c8",
    category: "corporate",
    categoryLabel: "Corporate & Expos",
    title: "Large Arena Crowd Control & Marshalling",
    subtitle: "Indira Gandhi Indoor Stadium · Bulk Event Crew",
    aspect: "tall",
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
    desc: "Access control, concourse directional marshaling, and safety protocol enforcement."
  },
  {
    id: "c9",
    category: "corporate",
    categoryLabel: "Corporate & Expos",
    title: "Diplomatic Conclave Protocol Support",
    subtitle: "Vigyan Bhawan · Protocol Ushers & Security Liaison",
    aspect: "square",
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80",
    desc: "Strict protocol adherence for ministry delegates, ambassador escorts, and security teams."
  },
  {
    id: "c10",
    category: "corporate",
    categoryLabel: "Corporate & Expos",
    title: "Backstage Production & Technical Verification",
    subtitle: "Jawaharlal Nehru Stadium · Production Supervisors",
    aspect: "wide",
    src: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80",
    desc: "Rigging inspection, cue sheet synchronization, and artist escort across major arena concourses."
  },

  // 6 Behind The Scenes & Operational Extra Photos
  {
    id: "b1",
    category: "bts",
    categoryLabel: "Behind The Scenes",
    title: "Pre-Shift Crew Muster & Grooming Audit",
    subtitle: "ITC Maurya · Floor Supervisors",
    aspect: "tall",
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    desc: "Detailed briefing on VIP guest profiles, banquet flow timing, uniform inspection, and communications sync."
  },
  {
    id: "b2",
    category: "bts",
    categoryLabel: "Behind The Scenes",
    title: "Two-Way Radio Comms & Zone Deployment",
    subtitle: "Pragati Maidan · Operations Coordinators",
    aspect: "wide",
    src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    desc: "Live channel testing and multi-hall perimeter station assignments prior to delegate doors opening."
  },
  {
    id: "b3",
    category: "bts",
    categoryLabel: "Behind The Scenes",
    title: "VIP Green Room & Dressing Suite Prep",
    subtitle: "The Leela Palace · Hospitality Leads",
    aspect: "square",
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    desc: "Hamper placement, private refreshment staging, and ceremonial escort standby."
  },
  {
    id: "b4",
    category: "bts",
    categoryLabel: "Behind The Scenes",
    title: "Backstage Cue Lineup & Artist Escort",
    subtitle: "Bharat Mandapam · Show Runners",
    aspect: "tall",
    src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80",
    desc: "Timing synchronization between stage teleprompters, lighting desks, and guest speakers."
  },
  {
    id: "b5",
    category: "bts",
    categoryLabel: "Behind The Scenes",
    title: "Midnight Banquet Floor Transition",
    subtitle: "Taj Palace · Overnight Crew",
    aspect: "wide",
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
    desc: "Swift ballroom resetting from cocktail reception to breakfast symposium layout."
  },
  {
    id: "b6",
    category: "bts",
    categoryLabel: "Behind The Scenes",
    title: "Dignitary Motorcade Reception Alignment",
    subtitle: "Vigyan Bhawan · Protocol Leads",
    aspect: "square",
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80",
    desc: "Porch arrival coordination, umbrella protocols, and direct executive escort to the main plenary."
  }
];
