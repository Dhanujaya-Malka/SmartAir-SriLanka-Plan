import React from 'react';
import { architecturePoints } from '../data/modulesData';

export default function ArchitectureSection({ onOpenDemo }) {
  return (
    <section id="architecture" className="py-16 bg-[#f7f8fa] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            System Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1 mb-3">
            Centralized Virtualization & Lightweight Thin Clients
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Instead of placing high-cost, high-maintenance desktop PCs at every check-in desk, SmartAir SriLanka consolidates all processing onto a centralized Proxmox server cluster. Terminal counters use stateless Raspberry Pi thin clients.
          </p>
        </div>

        {/* 2-Column Section: Image Banner on Left + 4 Value Points on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Left Column: Clean Real Infrastructure Image */}
          <div className="lg:col-span-5 rounded-[2rem] overflow-hidden border border-slate-200 bg-white relative min-h-[300px]">
            <img 
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80" 
              alt="Centralized server virtualization"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent flex flex-col justify-end p-8 text-white">
              <span className="text-xs font-semibold tracking-wider uppercase text-slate-300">
                Server Infrastructure
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                Proxmox Virtual Environment
              </h3>
              <p className="text-xs text-slate-200 mt-2">
                Stateless client sessions, live snapshot backups, and high availability clustering.
              </p>
            </div>
          </div>

          {/* Right Column: 4 Architecture Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {architecturePoints.map((point, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-base font-bold text-slate-900 mb-2">
                    {point.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {point.desc}
                  </p>
                </div>
                <div className="pt-4 mt-3 border-t border-slate-100 text-[11px] font-semibold text-slate-500">
                  Infrastructure Spec 0{idx + 1}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
