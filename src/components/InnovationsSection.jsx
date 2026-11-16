import React from 'react';
import { smartInnovations } from '../data/modulesData';

export default function InnovationsSection({ onOpenDemo }) {
  return (
    <section id="innovations" className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Innovative Features
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1 mb-3">
            Engineered for Modern Airport Challenges
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Practical, purpose-built features that solve real passenger delays, improve safety compliance, and safeguard critical data.
          </p>
        </div>

        {/* 6 Clean Cards with Real Photography */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {smartInnovations.map((item, idx) => (
            <div 
              key={idx}
              className="bg-[#f5f6f8] rounded-[2rem] p-6 border border-slate-200/70 hover:border-slate-300 transition-colors flex flex-col justify-between"
            >
              <div>
                {/* Category and Subtitle */}
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                  <span className="font-semibold">{item.category}</span>
                  <span className="text-[11px] bg-white px-2.5 py-0.5 rounded-full border border-slate-200 font-medium">
                    {item.subtitle}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>

                {/* Real High-Resolution Image */}
                <div className="rounded-xl overflow-hidden mb-4 h-36 bg-white border border-slate-200/80">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/60">
                <button
                  onClick={onOpenDemo}
                  className="text-xs font-semibold text-[#00aaff] hover:text-[#0095e0] hover:underline"
                >
                  Interactive Simulation →
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
