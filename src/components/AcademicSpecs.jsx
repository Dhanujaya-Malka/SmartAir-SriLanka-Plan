import React from 'react';
import { Check } from 'lucide-react';

export default function AcademicSpecs() {
  const sections = [
    {
      title: "System Architecture & Patterns",
      points: [
        "Distributed Event-Driven Architecture with WebSockets for real-time messaging",
        "Finite State Machine (FSM) governing complete flight lifecycles",
        "Stateless Client Architecture with Centralized Hypervisor Session Management",
        "Automated Positive Passenger Baggage Reconciliation (PPBM) safety lock"
      ]
    },
    {
      title: "Hardware & Infrastructure Topology",
      points: [
        "Hypervisor: Proxmox VE (Debian Linux Kernel, KVM/QEMU, ZFS mirrored storage)",
        "Thin Clients: Raspberry Pi 4 / 5 boards with Gigabit Ethernet / PoE",
        "Self-Service Terminals: Hardened Ubuntu Openbox minimal kiosk shell",
        "Peripherals: Standard USB passport/barcode readers & thermal boarding pass printers"
      ]
    },
    {
      title: "Terminal Security & Operations",
      points: [
        "Zero-Data-at-Rest prevents sensitive passenger records on public counter stations",
        "10-Second Hypervisor Snapshot Rollback for rapid system disaster recovery",
        "Instant Session Roaming allows staff to switch desks without losing ongoing work",
        "100% compliance with ICAO Annex 17 unaccompanied baggage security mandates"
      ]
    },
    {
      title: "Sri Lankan Aviation Feasibility",
      points: [
        "Tailored to modernize Bandaranaike International Airport (BIA / Colombo)",
        "Over 90% savings on counter hardware expenditures compared to legacy PC renewals",
        "Eliminates counter downtime with hot-swappable Raspberry Pi replacements",
        "Full project documentation and presentation defense ready"
      ]
    }
  ];

  return (
    <section id="academic" className="py-16 bg-[#f7f8fa] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Academic Project Specifications
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1 mb-3">
            University Software Engineering Capstone
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Developed as an enterprise software engineering demonstration combining systems architecture, network virtualization, and real-time aviation operations.
          </p>
        </div>

        {/* 4 Clean Academic Spec Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {sections.map((sec, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-2xs"
            >
              <h3 className="text-base font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">
                {sec.title}
              </h3>
              <div className="space-y-3">
                {sec.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <Check className="w-4 h-4 text-slate-800 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Sri Lanka Airport Note Banner */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs sm:text-sm text-slate-600">
            <span className="font-bold text-slate-900">Project Title: </span>
            SmartAir SriLanka — Modern Airport Management Platform (University Capstone Project)
          </div>
          <div className="text-xs font-semibold px-3 py-1 bg-slate-100 text-slate-700 rounded-full border border-slate-200">
            Colombo, Sri Lanka
          </div>
        </div>

      </div>
    </section>
  );
}
