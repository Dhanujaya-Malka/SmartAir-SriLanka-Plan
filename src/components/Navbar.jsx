import React, { useState } from 'react';
import { Menu, Search, X } from 'lucide-react';

export default function Navbar({ onOpenDemo }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Left: Square Rounded Hamburger Menu Button (Exact Reference Style) */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="w-12 h-12 rounded-2xl border border-slate-200/90 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-700 shadow-xs transition-colors shrink-0"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Center: Clean Floating Pill Navbar (Exact Reference Style) */}
          <nav className="hidden md:flex items-center gap-8 bg-white border border-slate-200/90 rounded-full px-6 py-2 shadow-xs">
            
            {/* Logo: Wave Icon + Name */}
            <a href="#" className="flex items-center gap-2.5 group">
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
                <span className="font-bold text-[15px] tracking-tight text-slate-900">
                  SmartAir
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  SriLanka
                </span>
              </div>
            </a>

            {/* Nav Links */}
            <a 
              href="#modules" 
              className="text-[14px] font-medium text-slate-700 hover:text-slate-950 transition-colors"
            >
              Modules
            </a>
            <a 
              href="#architecture" 
              className="text-[14px] font-medium text-slate-700 hover:text-slate-950 transition-colors"
            >
              Architecture
            </a>
            <a 
              href="#innovations" 
              className="text-[14px] font-medium text-slate-700 hover:text-slate-950 transition-colors"
            >
              Innovations
            </a>
            <a 
              href="#academic" 
              className="text-[14px] font-medium text-slate-700 hover:text-slate-950 transition-colors"
            >
              About
            </a>

            {/* Blue Primary Pill Button (Exact Reference Style: "Contact" / "View Demo") */}
            <button
              onClick={onOpenDemo}
              className="px-6 py-2 bg-[#00aaff] hover:bg-[#0095e0] text-white text-[14px] font-semibold rounded-full shadow-xs transition-colors"
            >
              View Demo
            </button>
          </nav>

          {/* Right: Square Rounded Search Button (Exact Reference Style) */}
          <button 
            onClick={() => {
              const el = document.getElementById('modules');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            aria-label="Search"
            className="w-12 h-12 rounded-2xl border border-slate-200/90 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-700 shadow-xs transition-colors shrink-0"
          >
            <Search className="w-5 h-5" />
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 mx-4 p-5 bg-white border border-slate-200 rounded-2xl shadow-lg space-y-3 animate-fadeIn">
          <a
            href="#modules"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-700 font-medium hover:text-slate-950"
          >
            Modules
          </a>
          <a
            href="#architecture"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-700 font-medium hover:text-slate-950"
          >
            Architecture
          </a>
          <a
            href="#innovations"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-700 font-medium hover:text-slate-950"
          >
            Innovations
          </a>
          <a
            href="#academic"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-700 font-medium hover:text-slate-950"
          >
            Project Specs & About
          </a>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full py-2.5 bg-[#00aaff] hover:bg-[#0095e0] text-white font-semibold rounded-xl text-sm"
            >
              View System Demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
