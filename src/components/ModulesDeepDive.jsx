import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { coreModules } from '../data/modulesData';

export default function ModulesDeepDive({ onOpenDemo }) {
  const [activeTab, setActiveTab] = useState(coreModules[0].id);
  const currentModule = coreModules.find((m) => m.id === activeTab) || coreModules[0];

  return (
    <section id="modules" className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            System Modules
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1 mb-3">
            Five Core Airport Operations Modules
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            SmartAir SriLanka connects travelers, check-in terminals, control centers, ramp handlers, and surveillance into one reliable operational workflow.
          </p>
        </div>

        {/* Clean Pill/Tab Selector */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {coreModules.map((mod) => {
            const isActive = mod.id === activeTab;
            return (
              <button
                key={mod.id}
                onClick={() => setActiveTab(mod.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-[#f5f6f8] hover:bg-slate-200 text-slate-700'
                }`}
              >
                {mod.moduleNumber}: {mod.name}
              </button>
            );
          })}
        </div>

        {/* Selected Module Display Card */}
        <div className="bg-[#f5f6f8] rounded-[2rem] border border-slate-200/70 p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Text & Features */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-semibold px-3 py-1 bg-white text-slate-600 rounded-full border border-slate-200 shadow-2xs">
                  {currentModule.targetUser}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-3 mb-2">
                  {currentModule.name}
                </h3>
                <h4 className="text-sm font-medium text-slate-500">
                  {currentModule.subtitle}
                </h4>
              </div>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {currentModule.description}
              </p>

              {/* Feature List */}
              <div className="space-y-2.5 pt-2">
                {currentModule.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-slate-700">
                    <div className="w-5 h-5 rounded-full bg-white border border-slate-300 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-slate-800" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Technology Stack Tags */}
              <div className="pt-2 flex flex-wrap gap-2">
                {currentModule.techStack.map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-white text-slate-700 text-xs font-medium rounded-lg border border-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Button */}
              <div className="pt-2">
                <button
                  onClick={onOpenDemo}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#00aaff] hover:bg-[#0095e0] text-white font-semibold text-sm rounded-full transition-colors"
                >
                  <span>Interactive Overview</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Right: Real Photography of Module in Action */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white h-72 sm:h-96 relative">
                <img
                  src={currentModule.image}
                  alt={currentModule.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs p-4 rounded-xl border border-slate-200 text-xs text-slate-700 font-medium flex items-center justify-between">
                  <span>{currentModule.metric}</span>
                  <span className="text-[#00aaff] font-semibold">{currentModule.moduleNumber}</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
