import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureCarousel from './components/FeatureCarousel';
import ArchitectureSection from './components/ArchitectureSection';
import ModulesDeepDive from './components/ModulesDeepDive';
import InnovationsSection from './components/InnovationsSection';
import AISecuritySection from './components/AISecuritySection';
import AcademicSpecs from './components/AcademicSpecs';
import Footer from './components/Footer';
import InteractiveSimModal from './components/InteractiveSimModal';

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const handleOpenDemo = () => {
    setIsDemoModalOpen(true);
  };

  const handleCloseDemo = () => {
    setIsDemoModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#00aaff]/20 selection:text-[#0088cc]">
      {/* Top Navigation */}
      <Navbar onOpenDemo={handleOpenDemo} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section: Exact Reference Split-Layout */}
        <Hero onOpenDemo={handleOpenDemo} />

        {/* Feature Cards Carousel: Reference Style Rounded Grey Cards */}
        <FeatureCarousel onOpenDemo={handleOpenDemo} />

        {/* The 5 Core Modules Deep Dive */}
        <ModulesDeepDive onOpenDemo={handleOpenDemo} />

        {/* Centralized Proxmox Thin-Client Architecture */}
        <ArchitectureSection onOpenDemo={handleOpenDemo} />

        {/* Breakthrough Innovations (Next-Level Features) */}
        <InnovationsSection onOpenDemo={handleOpenDemo} />

        {/* AI & Computer Vision Surveillance Pipeline */}
        <AISecuritySection onOpenDemo={handleOpenDemo} />

        {/* University Capstone Engineering Specifications */}
        <AcademicSpecs />
      </main>

      {/* Footer */}
      <Footer onOpenDemo={handleOpenDemo} />

      {/* Interactive Sandbox Demo Modal */}
      <InteractiveSimModal 
        isOpen={isDemoModalOpen} 
        onClose={handleCloseDemo} 
      />
    </div>
  );
}
