import React from 'react';
import { projectInfo } from '../data/modulesData';

export default function Hero({ onOpenDemo }) {
  return (
    <section className="pt-8 pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Title - Exact Reference Style */}
        <div className="mb-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight">
            Smart Airport
          </h1>
        </div>

        {/* Subtle Horizontal Divider Line - Exact Reference Style */}
        <div className="w-full h-px bg-slate-200/90 mb-8" />

        {/* Split Layout: Sub-headline (Left) vs Descriptive Paragraph (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-12">
          
          {/* Left Column: Bold Sub-headline */}
          <div className="lg:col-span-5">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 leading-snug tracking-tight">
              {projectInfo.heroSubheadline}
            </h2>
          </div>

          {/* Right Column: Natural Descriptive Paragraph */}
          <div className="lg:col-span-7">
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              {projectInfo.heroDescription}
            </p>
          </div>
        </div>

        {/* Wide Panoramic Hero Banner Card - Matching Reference Image 2 ("Reshape the move of the world") */}
        <div className="relative rounded-[2rem] overflow-hidden min-h-[340px] sm:min-h-[420px] lg:min-h-[460px] flex items-center justify-center shadow-sm">
          
          {/* Real High-Resolution Aviation Image */}
          <img 
            src="https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=1600&q=80" 
            alt="Aircraft departing over runway" 
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Calm, Soft Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/25 to-slate-950/20" />

          {/* Centered Minimalist Typography (Exact Reference Style: "Reshape the move of the world") */}
          <div className="relative z-10 text-center px-4 max-w-3xl">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight drop-shadow-sm mb-4">
              Reshape the move of the world
            </h2>
            <p className="text-white/90 text-sm sm:text-base font-normal max-w-xl mx-auto drop-shadow-xs mb-6">
              Centralized Proxmox architecture and intelligent terminal systems built for Sri Lanka's international aviation hubs.
            </p>
            <button
              onClick={onOpenDemo}
              className="px-6 py-2.5 bg-[#00aaff] hover:bg-[#0095e0] text-white font-semibold text-sm rounded-full shadow-md transition-all active:scale-95"
            >
              Explore Live Modules
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
