import React, { useState } from 'react';
import { ArrowRight, Layers, Shield, Sparkles, Wind, CheckCircle, ChevronRight } from 'lucide-react';
import { SHOE_DATA } from '../data/shoeData';

export const AnatomySection: React.FC = () => {
  const [activeLayerIndex, setActiveLayerIndex] = useState(0);

  const activePart = SHOE_DATA.explodedParts[activeLayerIndex];

  return (
    <section
      id="anatomy"
      className="py-20 lg:py-28 bg-[#070709] border-b border-white/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Subtitle */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-8">
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#c91c28] uppercase block mb-3">
              THE INTERIOR & ANATOMY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide uppercase leading-tight">
              ATHLETE FOCUSED.
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-sm text-neutral-400 font-light leading-relaxed">
              A bespoke footbed designed to connect foot to ground. Pure tactile materials, anatomical ankle lock, 
              and encapsulated Air-Sole cushioning for seamless all-day immersion.
            </p>
          </div>
        </div>

        {/* Interactive Anatomy Explorer Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0b0b0e] border border-white/10 rounded-lg p-6 sm:p-8 lg:p-10 shadow-2xl">
          
          {/* Left / Center Viewport: Highlighting Image 1 exploded diagram or interior comfort visual */}
          <div className="lg:col-span-7 flex flex-col items-center">
            
            <div className="relative w-full aspect-[4/3] rounded-md overflow-hidden bg-[#0d0d12] border border-white/10 flex items-center justify-center p-4">
              
              <img
                src="./images/hero-exploded.jpg"
                alt="Deconstructed Air Jordan 1 Layers"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain filter contrast-[1.05]"
              />

              {/* Indicator of which layer is currently highlighted */}
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded border border-white/10 text-xs">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#c91c28] block">
                  LAYER {activeLayerIndex + 1} OF {SHOE_DATA.explodedParts.length}
                </span>
                <span className="text-white font-serif font-bold text-sm">
                  {activePart.name}
                </span>
              </div>

              {/* Bottom Layer Indicator */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md px-4 py-2.5 rounded border border-white/10 flex items-center justify-between text-xs">
                <span className="text-neutral-300 font-mono text-[11px]">
                  {activePart.summary}
                </span>
                <span className="text-[#e2c275] text-[10px] font-mono tracking-widest uppercase">
                  1985 AIR SPEC
                </span>
              </div>

            </div>

            {/* Step navigation dots */}
            <div className="flex items-center gap-2 mt-5">
              {SHOE_DATA.explodedParts.map((part, idx) => (
                <button
                  key={part.id}
                  onClick={() => setActiveLayerIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    activeLayerIndex === idx
                      ? 'w-8 bg-[#c91c28]'
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`View ${part.name}`}
                />
              ))}
            </div>

          </div>

          {/* Right Column: Interactive Layer Breakdown List */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-4">
            
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#c91c28]" />
                DECONSTRUCTED LAYERS
              </span>
              <span className="text-[10px] font-mono text-neutral-400">
                CLICK TO ISOLATE
              </span>
            </div>

            {/* Scrollable list of all 9 layers */}
            <div className="space-y-2 max-h-[380px] overflow-y-auto pr-2">
              {SHOE_DATA.explodedParts.map((part, idx) => {
                const isActive = activeLayerIndex === idx;
                return (
                  <button
                    key={part.id}
                    onClick={() => setActiveLayerIndex(idx)}
                    className={`w-full text-left p-3 rounded-xs border transition-all flex items-center justify-between group ${
                      isActive
                        ? 'bg-white/10 border-[#c91c28] pl-4'
                        : 'bg-white/5 border-white/5 hover:border-white/20 hover:bg-white/[0.08]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-mono ${isActive ? 'text-[#c91c28]' : 'text-neutral-400'}`}>
                          0{idx + 1}
                        </span>
                        <h4 className="text-xs font-serif font-bold text-white tracking-wider">
                          {part.name}
                        </h4>
                      </div>
                      <p className="text-[11px] text-neutral-400 font-light mt-0.5 line-clamp-1">
                        {part.summary}
                      </p>
                    </div>

                    <ChevronRight className={`w-4 h-4 transition-transform ${
                      isActive ? 'text-[#c91c28] translate-x-1' : 'text-neutral-400 group-hover:text-white'
                    }`} />
                  </button>
                );
              })}
            </div>

            {/* Technical Detail Card for Active Layer */}
            <div className="p-4 bg-gradient-to-br from-[#161620] to-[#0d0d12] rounded border border-white/10 mt-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#c91c28] block mb-1">
                LAYER COMPOSITION
              </span>
              <p className="text-xs text-neutral-200 leading-relaxed font-light">
                {activePart.details}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
