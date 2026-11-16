export const projectInfo = {
  name: "SmartAir SriLanka",
  tagline: "Next-Generation Smart Airport Management",
  heroHeadline: "Next-Generation Smart Airport Management.",
  heroSubheadline: "Legacy Systems Don't Forgive Delays. We Make Sure You Never Have To.",
  heroDescription: "SmartAir SriLanka is a modern airport management platform that replaces outdated, high-maintenance legacy PCs with a centralized Proxmox-based architecture and lightweight Raspberry Pi thin clients. We integrate real-time security synchronization, zero-data-at-rest terminals, and seamless cross-module data flow to ensure an efficient, delay-free experience for every passenger and flight.",
  universityProject: "University Software Engineering Capstone Project",
  location: "Bandaranaike International Airport (BIA) & Colombo Regional Terminals",
};

export const heroCards = [
  {
    id: 1,
    title: "Centralized Thin-Client Architecture",
    category: "Infrastructure",
    description: "Running on Proxmox Virtualization with Raspberry Pi thin clients. Ensures zero-data-at-rest at the counters, instant session roaming between desks, and 90% reduced hardware costs.",
    tag: "Proxmox Virtualization + Raspberry Pi",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Centralized enterprise server architecture"
  },
  {
    id: 2,
    title: "Next-Gen Self-Service Kiosks",
    category: "Passenger Terminal",
    description: "Ubuntu Openbox hardened kiosks featuring One-Tap Group Seat Clustering and Dynamic Queue-Aware Gate Routing for an unmatched, quick passenger check-in experience.",
    tag: "Hardened Kiosk Shell",
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Airport terminal self-service passenger check-in"
  },
  {
    id: 3,
    title: "Pure Flight Operations & Baggage",
    category: "Operations Control",
    description: "Centralized control for Flight Lifecycle, Live Loadsheet calculation (MTOW), and automated Baggage Safety Reconciliation (PPBM) for gate no-shows.",
    tag: "Real-time MTOW Sync",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Airport apron and automated ground baggage handling"
  },
  {
    id: 4,
    title: "Real-Time Watchlist & Gate Security",
    category: "Surveillance & Safety",
    description: "Integrated optical surveillance that identifies flagged passengers in real-time, delivering immediate alerts to the Operations Desk for a 1-click boarding & baggage hold.",
    tag: "Automated Gate Interlock",
    image: "https://images.unsplash.com/photo-1473862170180-84427c485aca?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Modern airport concourse with synchronized terminal security"
  },
];

export const coreModules = [
  {
    id: "mod-1",
    moduleNumber: "Module 01",
    name: "Passenger Portal",
    subtitle: "Mobile and Web Application for Travelers",
    targetUser: "Passengers & Airline Customers",
    description: "A clean passenger interface providing flight tracking, automated e-ticketing, dynamic QR boarding passes, and proactive flight change notifications directly on passenger devices.",
    image: "https://images.unsplash.com/photo-1508873696983-2df5703bc20d?auto=format&fit=crop&w=1000&q=80",
    features: [
      "Real-time flight status & delay updates delivered instantly",
      "Dynamic encrypted QR Code e-Ticket generation",
      "Interactive seat map preview and baggage allowance check",
      "Mobile-friendly digital boarding pass export"
    ],
    techStack: ["React", "FastAPI", "WebSockets", "PostgreSQL"],
    metric: "Instant notifications & real-time gate updates"
  },
  {
    id: "mod-2",
    moduleNumber: "Module 02",
    name: "Self-Service Kiosk",
    subtitle: "Hardened Terminal System (Ubuntu Openbox)",
    targetUser: "Airport Check-in Areas",
    description: "A locked-down terminal environment designed to give travelers a fast, self-guided check-in. Passengers can scan their passport, choose seats together, and print boarding passes in under 45 seconds.",
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1000&q=80",
    features: [
      "One-Tap Group Seat Clustering for families and travel groups",
      "Dynamic Queue-Aware Gate Routing to reduce checkpoint delays",
      "Instant Missed-Flight Rebooking directly on screen",
      "Hardened Linux desktop shell with zero exposed desktop menus"
    ],
    techStack: ["Next.js / React", "Ubuntu Openbox", "CUPS Thermal Print API", "USB Barcode Scanner"],
    metric: "45-second average transaction time"
  },
  {
    id: "mod-3",
    moduleNumber: "Module 03",
    name: "Airport Operations & Central Control",
    subtitle: "Central Flight Dispatch & Safety Desk",
    targetUser: "Flight Dispatchers & Airport Operations Staff",
    description: "The primary control center for flight tracking and aircraft readiness. Ground staff monitor flight statuses, calculate mathematical Maximum Takeoff Weight (MTOW) loadsheets, and respond to security alerts.",
    image: "https://images.unsplash.com/photo-1520437358207-323b43b50729?auto=format&fit=crop&w=1000&q=80",
    features: [
      "Flight Lifecycle tracking (Scheduled, Boarding, Final Call, Departed)",
      "Live Loadsheet calculation and Center of Gravity verification",
      "1-Click Ticket & Baggage Freeze upon verified security notice",
      "Gate no-show reconciliation and manifest sync"
    ],
    techStack: ["React Dashboard", "Python Computational Engine", "Redis Pub/Sub"],
    metric: "Live MTOW verification & immediate security response"
  },
  {
    id: "mod-4",
    moduleNumber: "Module 04",
    name: "Baggage Handling & Reconciliation",
    subtitle: "Luggage Weighing & ICAO Safety Compliance",
    targetUser: "Check-in Staff & Ramp Handlers",
    description: "Synchronizes physical baggage scale readings with flight manifests. If a passenger checks bags but does not show up at the gate, the system prompts immediate offloading in line with mandatory international safety rules.",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1000&q=80",
    features: [
      "Accurate scale load logging synced directly to flight manifest",
      "Automated Baggage Offloading trigger when a passenger no-shows (PPBM)",
      "Baggage status tracking at cargo ramp loading points",
      "Baggage count and weight sync with Operations Loadsheet"
    ],
    techStack: ["IoT Serial Scale Bridge", "Node.js Services", "PostgreSQL"],
    metric: "100% compliance with ICAO unaccompanied baggage rules"
  },
  {
    id: "mod-5",
    moduleNumber: "Module 05",
    name: "AI & Terminal Surveillance",
    subtitle: "Crowd Density Estimation & Watchlist Matching",
    targetUser: "Airport Security & Terminal Operations",
    description: "Processes CCTV camera feeds to estimate queue lengths and detect flagged individuals against security watchlists, ensuring crowd flow balance and immediate gate intervention when necessary.",
    image: "https://images.unsplash.com/photo-1473862170180-84427c485aca?auto=format&fit=crop&w=1000&q=80",
    features: [
      "Queue crowd counting to guide passengers toward the fastest security lane",
      "Facial matching against authorized watchlists with instant ops desk alerts",
      "Direct integration with Operations Desk for one-click gate lock",
      "Optimized edge processing to protect passenger privacy"
    ],
    techStack: ["Python", "YOLOv8", "OpenCV", "RTSP Camera Streams"],
    metric: "Real-time queue balancing & sub-second detection"
  }
];

export const smartInnovations = [
  {
    category: "Passenger Experience",
    title: "One-Tap Group Seat Clustering",
    subtitle: "Module 02 & Module 05",
    description: "When friends or families check in together, a single tap automatically clusters their seats side-by-side using an intelligent proximity algorithm, avoiding tedious individual seat selection.",
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=600&q=80"
  },
  {
    category: "Queue Management",
    title: "Dynamic Queue-Aware Gate Routing",
    subtitle: "Module 02 & Module 05",
    description: "Terminal cameras continuously calculate checkpoint waiting times. When a boarding pass is printed, the system prints directions directing the traveler to the currently fastest security gate.",
    image: "https://images.unsplash.com/photo-1473862170180-84427c485aca?auto=format&fit=crop&w=600&q=80"
  },
  {
    category: "Traveler Recovery",
    title: "Instant Missed-Flight Rebooking",
    subtitle: "Module 02 Self-Service",
    description: "If a delayed passenger misses their flight, the kiosk presents the next available departure and allows immediate rebooking with one click, without requiring long waits in service queues.",
    image: "https://images.unsplash.com/photo-1508873696983-2df5703bc20d?auto=format&fit=crop&w=600&q=80"
  },
  {
    category: "Security & Operations",
    title: "Live Watchlist & 1-Click Freeze",
    subtitle: "Module 03 & Module 05",
    description: "If a camera identifies a person on a security watchlist, an alert with photo verification appears on the Duty Desk. One click locks the gate turnstile and pauses baggage loading.",
    image: "https://images.unsplash.com/photo-1520437358207-323b43b50729?auto=format&fit=crop&w=600&q=80"
  },
  {
    category: "Aviation Safety Standard",
    title: "Baggage Safety Reconciliation (PPBM)",
    subtitle: "Module 03 & Module 04",
    description: "Strictly enforces international aviation rules: if a checked-in passenger does not board the aircraft, an immediate notification is sent to ground crew to remove their luggage.",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80"
  },
  {
    category: "System Resilience",
    title: "Zero-Data-at-Rest & 10s Rollback",
    subtitle: "Central Proxmox Architecture",
    description: "Terminals store zero passenger data on local hardware. In the event of any hardware or network fault, Proxmox hypervisor snapshots restore complete terminal state in 10 seconds.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80"
  }
];

export const architecturePoints = [
  {
    title: "Zero Data-at-Rest",
    desc: "Raspberry Pi terminals run in memory. No passenger records, passport data, or tickets are saved locally, ensuring total security if a counter unit is physically removed."
  },
  {
    title: "Instant Session Roaming",
    desc: "If any counter workstation is displaced or needs servicing, staff can move to any other desk, log in, and pick up their exact active session instantly."
  },
  {
    title: "10-Second Snapshot Rollback",
    desc: "Central Proxmox hypervisor snapshots allow the entire terminal fleet to be restored to a known healthy state in seconds in case of software disruptions."
  },
  {
    title: "90% Lower Hardware Cost",
    desc: "Replacing high-maintenance desktop PCs ($1,200/unit) with durable, energy-efficient Raspberry Pi thin clients ($85/unit) cuts terminal hardware costs drastically."
  }
];
