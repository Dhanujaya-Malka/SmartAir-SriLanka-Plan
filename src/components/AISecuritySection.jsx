import React from 'react';
import { 
  Eye, 
  ShieldAlert, 
  Lock, 
  Radio, 
  AlertTriangle, 
  CheckCircle, 
  Camera, 
  UserX, 
  Ban, 
  Terminal,
  ArrowRight
} from 'lucide-react';

export default function AISecuritySection({ onOpenDemo }) {
  return (
    <section id="ai-security" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00aaff]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-bold border border-rose-500/30 mb-4">
            <Radio className="w-3.5 h-3.5 animate-pulse text-rose-400" />
            <span>AI Surveillance & Automated Threat Intervention</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Sub-Second Facial Watchlist Sync & 1-Click Freeze
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Eliminating the traditional lag between security footage review and gate intervention. Smart Air SriLanka runs edge YOLOv8 detection and OpenCV facial recognition directly across terminal CCTV streams.
          </p>
        </div>

        {/* Security Pipeline Flow Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Left: Terminal CCTV & Threat Detection Feed (Mock Visual) */}
          <div className="lg:col-span-7 bg-slate-950 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs font-mono">
              <div className="flex items-center gap-2">
                <Camera className="w-4 h-4 text-emerald-400" />
                <span className="text-slate-300">STREAM: CCTV-CAM-BIA-T1-GATE-B4</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                <span className="text-rose-400 font-bold">LIVE RECOGNITION (60 FPS)</span>
              </div>
            </div>

            {/* Simulated Camera Viewfinder */}
            <div className="my-6 rounded-2xl bg-slate-900 border border-slate-800 p-6 relative overflow-hidden">
              <div className="absolute top-3 left-3 text-[10px] font-mono text-slate-500">
                AI ENGINE: YOLOv8-SURVEILLANCE + OPENCV-FACE
              </div>
              <div className="absolute bottom-3 left-3 text-[10px] font-mono text-slate-500">
                LATENCY: 142ms | RESOLUTION: 4K UHD
              </div>

              {/* Target Box Simulated */}
              <div className="max-w-md mx-auto my-6 border-2 border-dashed border-rose-500 bg-rose-500/10 rounded-xl p-4 relative">
                <span className="absolute -top-3 left-4 px-2 py-0.5 bg-rose-600 text-white text-[10px] font-bold rounded uppercase tracking-wider">
                  Target Identified: 98.6% Confidence
                </span>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg bg-slate-800 border border-rose-500/50 flex items-center justify-center text-rose-400 shrink-0">
                    <UserX className="w-8 h-8" />
                  </div>
                  <div className="space-y-1 text-xs">
                    <div className="font-bold text-white text-sm">WATCHLIST MATCH: #LK-SEC-889</div>
                    <div className="text-slate-300">Category: Interpol Red Notice / Local Alert</div>
                    <div className="text-slate-400 font-mono text-[11px]">Flight: UL-504 (Seat 14A) | Gate B04</div>
                  </div>
                </div>
              </div>

              {/* 1-Click Action Interlock */}
              <div className="bg-slate-950/90 rounded-xl p-4 border border-rose-500/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs space-y-0.5 text-center sm:text-left">
                  <div className="font-bold text-rose-400 flex items-center gap-1.5 justify-center sm:justify-start">
                    <ShieldAlert className="w-4 h-4 text-rose-500" />
                    Automated Operations Desk Override
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Dispatches instant kill-switch to Gate B04 turnstile & baggage conveyor.
                  </div>
                </div>
                <button
                  onClick={onOpenDemo}
                  className="px-5 py-2.5 bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-rose-600/30 transition-all flex items-center gap-2 shrink-0 active:scale-95"
                >
                  <Ban className="w-4 h-4" />
                  <span>Execute 1-Click Freeze</span>
                </button>
              </div>
            </div>

            {/* Edge Security Metric Badges */}
            <div className="grid grid-cols-3 gap-3 text-center text-xs font-mono">
              <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                <span className="text-slate-400 text-[10px] block">Inference Speed</span>
                <span className="font-bold text-[#00aaff] text-sm">&lt;200 ms</span>
              </div>
              <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                <span className="text-slate-400 text-[10px] block">Cross-Module Sync</span>
                <span className="font-bold text-emerald-400 text-sm">Instant</span>
              </div>
              <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                <span className="text-slate-400 text-[10px] block">PPBM Offload</span>
                <span className="font-bold text-amber-400 text-sm">Auto-Flagged</span>
              </div>
            </div>

          </div>

          {/* Right: Security Logic & Explanation */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700 space-y-3">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
                <Lock className="w-4 h-4" />
                <span>1. Multi-Stream Facial Scan</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                YOLOv8 runs passenger bounding-box segmentation while OpenCV feature vector algorithms extract 128 facial landmarks for comparison against high-priority aviation databases.
              </p>
            </div>

            <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700 space-y-3">
              <div className="flex items-center gap-2 text-[#00aaff] font-bold text-sm">
                <Radio className="w-4 h-4" />
                <span>2. Real-Time Operations Alert (Module 3)</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Within milliseconds of a positive correlation, an audible priority modal pops up on the Duty Officer's central screen with the suspect's current location, passenger name, and boarding gate.
              </p>
            </div>

            <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <CheckCircle className="w-4 h-4" />
                <span>3. 1-Click Boarding Invalidation & Bag Hold</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Clicking "Freeze" instantly revokes the electronic boarding pass QR code, turns the gate turnstile red, and instructs Module 4 ramp baggage crew to hold the suspect luggage off the flight.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenDemo}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#00aaff] to-[#0088cc] hover:from-[#0095e0] hover:to-[#0077b3] text-white font-bold text-sm rounded-full shadow-lg shadow-sky-500/25 transition-all"
              >
                <span>Launch Interactive Threat Simulation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
