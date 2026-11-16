# SmartAir SriLanka — Next-Gen Smart Airport Management Platform

![Aviation Banner](https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=1600&q=80)

An enterprise-level airport management platform engineered for university software engineering capstone evaluation and real-world deployment across Sri Lankan aviation hubs (Bandaranaike International Airport - BIA / Colombo).

## 🛫 Overview

**SmartAir SriLanka** replaces expensive, high-maintenance legacy desktop PCs at terminal counters with a centralized **Proxmox Virtual Environment** and lightweight **Raspberry Pi thin clients**. The platform integrates real-time security coordination, zero-data-at-rest terminals, and cross-module synchronization to eliminate passenger delays and maintain compliance with international aviation standards (ICAO Annex 17).

---

## 🏛️ System Architecture

```
                          +------------------------------------------+
                          |        Proxmox VE Cluster (Host)         |
                          |  - Centralized Flight Database & FSM     |
                          |  - Ephemeral RAM VDI Sessions            |
                          |  - 10-Second ZFS Anti-Ransomware Backup  |
                          +--------------------+---------------------+
                                               |
                     +-------------------------+-------------------------+
                     |                         |                         |
       +-------------v-------------+ +---------v---------+ +-------------v-------------+
       |   Raspberry Pi Thin Client| |  Ubuntu Openbox   | |    YOLOv8 Edge Camera     |
       |   Check-in & Gate Counters| |  Self-Service     | |    Surveillance Node      |
       |   (Zero-Data-at-Rest)     | |  Kiosk Terminal   | |    (Queue & Watchlist)    |
       +---------------------------+ +-------------------+ +---------------------------+
```

### Key Architectural Strengths
1. **Zero-Data-at-Rest:** Terminals execute entirely in volatile memory. No passenger records or flight manifests are stored on the counter hardware, eliminating physical data theft risks.
2. **Instant Session Roaming:** If a physical counter desk experiences a hardware issue, airline staff can move to any other terminal and resume their exact active session within seconds.
3. **10-Second Hypervisor Snapshot Rollback:** Rapid recovery from malware, network disruptions, or unauthorized modifications via automated Proxmox ZFS snapshots.
4. **90% Hardware Cost Reduction:** Replaces $1,200-$1,800 legacy workstations with durable $85 Raspberry Pi thin clients consuming under 15W.

---

## 📦 Core Modules

- **Module 01: Passenger Portal (Mobile/Web App)**
  - Real-time flight tracking, push notifications, encrypted dynamic QR boarding passes, and luggage allowance calculations.
- **Module 02: Self-Service Kiosks (Terminal System)**
  - Hardened Ubuntu Openbox shell, passport/barcode scan, seat matrix, thermal pass printing, and instant missed-flight rebooking.
- **Module 03: Airport Operations & Central Control Center**
  - Central flight lifecycle state machine, real-time Loadsheet calculations (Maximum Takeoff Weight - MTOW & Center of Gravity), and emergency overrides.
- **Module 04: Baggage Handling & Safety Reconciliation**
  - Live baggage scale synchronization (kg precision) and automated baggage offload dispatch adhering to Positive Passenger Baggage Matching (PPBM) international safety rules.
- **Module 05: AI & Surveillance Intelligence**
  - YOLOv8 optical queue depth estimation and OpenCV facial recognition against authorized security watchlists with sub-second matching.

---

## 💡 Smart Innovations

1. **One-Tap Group Seat Clustering:** Intelligent proximity algorithm that seats traveling parties and families together in adjacent seats with one click.
2. **Dynamic Queue-Aware Gate Routing:** Terminal cameras track security lane waiting times and route passengers to the least congested checkpoint on their boarding passes.
3. **Instant Missed-Flight Rebooking:** Kiosk interface allowing delayed passengers to select and re-ticket onto the next available flight in 30 seconds.
4. **Live Watchlist & 1-Click Operations Freeze:** Instant incident alert on Duty Officer console to invalidate boarding passes and freeze baggage loading.
5. **Positive Passenger Baggage Matching (PPBM):** Automatic warning and offload dispatch if a passenger fails to board before gate closure.

---

## 🛠️ Tech Stack

- **Frontend:** React 18, Vite, Tailwind CSS, Lucide React
- **Architecture:** Proxmox VE (Virtualization), Raspberry Pi 4/5 (Thin Clients)
- **Kiosk Shell:** Debian / Ubuntu Openbox minimal kiosk mode
- **Backend & AI:** Python (FastAPI, YOLOv8, OpenCV), Node.js, WebSockets, PostgreSQL, Redis

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/DhanujayaMalka/SmartAir-SriLanka.git

# Navigate to project directory
cd SmartAir-SriLanka

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production
```bash
npm run build
```

---

## 🎓 Academic Credentials

- **Project:** University Software Engineering Capstone Project
- **Target Feasibility:** Bandaranaike International Airport (BIA / Colombo), Sri Lanka
- **Developer:** Dhanujaya Malka (`nanayak-cs24009@stu.kln.ac.lk`)
- **Institution:** Department of Computer Systems Engineering / Computer Science
