import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { heroCards } from '../data/modulesData';

export default function FeatureCarousel({ onOpenDemo }) {
  const [scrollIndex, setScrollIndex] = useState(0);

  const prevSlide = () => {
    setScrollIndex((prev) => (prev === 0 ? heroCards.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setScrollIndex((prev) => (prev === heroCards.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header row with Title on Left and Carousel Controls on Right (Exact Reference Style) */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Core Modules & Architecture
            </h2>
          </div>

          {/* Clean Carousel Navigation Buttons (Exact Reference Style: circular button with > ) */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              aria-label="Previous card"
              className="w-10 h-10 rounded-full border border-slate-300 hover:border-slate-800 bg-white flex items-center justify-center text-slate-700 transition-colors shadow-xs"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next card"
              className="w-10 h-10 rounded-full border border-slate-300 hover:border-slate-800 bg-white flex items-center justify-center text-slate-700 transition-colors shadow-xs"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Feature Cards Grid (Exact Reference Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {heroCards.map((card, idx) => (
            <div
              key={card.id}
              className={`flex flex-col justify-between bg-[#f5f6f8] hover:bg-[#eef1f4] p-7 rounded-[2rem] transition-all duration-300 border border-slate-200/60 ${
                idx === scrollIndex ? 'ring-1 ring-slate-400' : ''
              }`}
            >
              {/* Card Title at the Top (Exact Reference Style) */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 leading-snug tracking-tight min-h-[56px]">
                  {card.title}
                </h3>

                {/* Real High-Resolution Image in Rounded Container (Exact Reference Style) */}
                <div className="my-6 rounded-2xl overflow-hidden bg-white border border-slate-200/80 shadow-xs h-44">
                  <img
                    src={card.image}
                    alt={card.imageAlt || card.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Natural Descriptive Body Paragraph at the Bottom (Exact Reference Style) */}
              <div className="space-y-4">
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {card.description}
                </p>

                <div className="pt-2 border-t border-slate-200/70 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span>{card.tag}</span>
                  <button 
                    onClick={onOpenDemo}
                    className="text-[#00aaff] hover:text-[#0095e0] font-semibold hover:underline"
                  >
                    Details
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
