import React from 'react';
import { projectInfo } from '../data/modulesData';

export default function Footer({ onOpenDemo }) {
  return (
    <footer className="bg-white border-t border-slate-200/90 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-100">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <svg 
                className="w-7 h-7" 
                viewBox="0 0 32 32" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M6 10C6 14.4183 9.58172 18 14 18H18C22.4183 18 26 21.5817 26 26" 
                  stroke="#10b981" 
                  strokeWidth="3.5" 
                  strokeLinecap="round"
                />
                <path 
                  d="M6 16C6 20.4183 9.58172 24 14 24H18C22.4183 24 26 27.5817 26 32" 
                  stroke="#00aaff" 
                  strokeWidth="3.5" 
                  strokeLinecap="round"
                />
                <circle cx="10" cy="8" r="3" fill="#00aaff" />
                <circle cx="22" cy="8" r="3" fill="#10b981" />
              </svg>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-lg text-slate-900">SmartAir</span>
                <span className="text-xs font-semibold text-slate-500">SriLanka</span>
              </div>
            </div>

            <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
              Next-generation airport management platform replacing legacy counter workstations with centralized Proxmox virtualization and Raspberry Pi thin clients.
            </p>

            <div className="text-xs text-slate-500">
              {projectInfo.universityProject} • {projectInfo.location}
            </div>
          </div>

          {/* Nav links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Platform
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#modules" className="hover:text-slate-900 transition-colors">Core Modules</a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-slate-900 transition-colors">Architecture</a>
              </li>
              <li>
                <a href="#innovations" className="hover:text-slate-900 transition-colors">Innovations</a>
              </li>
              <li>
                <a href="#academic" className="hover:text-slate-900 transition-colors">Academic Specs</a>
              </li>
            </ul>
          </div>

          {/* Modules Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Modules
            </h4>
            <ul className="space-y-2 text-xs text-slate-500">
              <li>Module 01: Passenger Portal</li>
              <li>Module 02: Self-Service Kiosks</li>
              <li>Module 03: Airport Operations</li>
              <li>Module 04: Baggage Handling</li>
              <li>Module 05: CCTV Surveillance</li>
            </ul>
          </div>

          {/* Quick Action */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Interactive Demo
            </h4>
            <p className="text-xs text-slate-500">
              Test the airport operations simulation and seat clustering algorithm.
            </p>
            <button
              onClick={onOpenDemo}
              className="w-full py-2 px-4 bg-[#00aaff] hover:bg-[#0095e0] text-white text-xs font-semibold rounded-full transition-colors"
            >
              View System Demo
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} SmartAir SriLanka. University Software Engineering Project.
          </div>
          <div>
            Clean, Minimalist Enterprise Architecture
          </div>
        </div>

      </div>
    </footer>
  );
}
