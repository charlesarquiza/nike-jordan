import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Feather, Flame, Award, Scissors } from 'lucide-react';

export const CraftsmanshipSection: React.FC = () => {
  const [activeMaterial, setActiveMaterial] = useState(0);

  const materials = [
    {
      name: 'Shadow Brown Nubuck',
      origin: 'Full-Grain Bovine',
      desc: 'Sanded velvety nap that absorbs and catches light softly, paired with durable tear-resistance.',
      tag: 'TEXTURED OVERLAY'
    },
    {
      name: 'Soft Pearl Tumbled Leather',
      origin: 'Natural Cowhide',
      desc: 'Supple, textured grain across the toe box and quarter panels, engineered to mold to the wearer’s foot.',
      tag: 'PREMIUM BASE'
    },
    {
      name: 'Collar Tribute Inscription',
      origin: 'Blind Debossed',
      desc: 'Concealed inside the ankle collar is the poignant sign-off from Michael Jordan: "Much Love and Respect."',
      tag: 'HERITAGE DETAIL'
    },
    {
      name: 'Team Red Carbon Outsole',
      origin: 'Vulcanized Rubber',
      desc: 'High-wear density carbon compound featuring concentric pivot ring grooves inspired by court footwork.',
      tag: 'TRACTION & GRIP'
    },
  ];

  return (
    <section
      id="craftsmanship"
      className="py-20 lg:py-28 bg-[#09090c] border-b border-white/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Macro Craftsmanship Photography with Brass Commemorative Plaque (Image 2 style) */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="relative rounded-lg overflow-hidden border border-white/10 bg-[#0d0d12] shadow-2xl group">
              
              {/* Macro Image */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden">
                <img
                  src="./images/craft-detail.jpg"
                  alt="Air Jordan 1 Love Letter Nubuck Leather & Stitching Craftsmanship"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />

                {/* Commemorative Golden/Brass Plaque (Exact replica of Aurelio Rosso plaque in Image 2) */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-gradient-to-b from-[#e2c275] via-[#c5a059] to-[#997732] p-[1px] rounded-xs shadow-2xl">
                  <div className="bg-[#12100a] px-6 py-2.5 rounded-xs flex items-center gap-3 border border-[#e2c275]/40 text-center">
                    <div className="w-2 h-2 rounded-full bg-[#e2c275]" />
                    <div className="flex flex-col">
                      <span className="font-serif text-[11px] sm:text-xs tracking-[0.25em] text-[#e2c275] uppercase font-bold">
                        AIR JORDAN 1 RETRO HIGH OG
                      </span>
                      <span className="text-[9px] tracking-[0.3em] text-[#c5a059] uppercase font-mono">
                        LOVE LETTER • DZ5485-201
                      </span>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-[#e2c275]" />
                  </div>
                </div>

              </div>

              {/* Bottom Craft Attributes */}
              <div className="p-4 sm:p-6 bg-[#0c0c10] border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs">
                <div className="flex items-center gap-2 text-neutral-300">
                  <Scissors className="w-4 h-4 text-[#c91c28]" />
                  <span>Precision Tonal Stitching</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-300">
                  <Flame className="w-4 h-4 text-[#c91c28]" />
                  <span>Patina Aging Over Time</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-300">
                  <Award className="w-4 h-4 text-[#c91c28]" />
                  <span>Limited Global Tier Allocation</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Editorial Text & Material Selector */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#c91c28] uppercase block mb-3">
              CRAFTSMANSHIP
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide uppercase leading-tight mb-6">
              OBSESSION IN<br />EVERY DETAIL.
            </h2>

            <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed mb-8">
              From the hand-selected tumbled cowhide to the meticulously brushed nubuck panels, 
              every element is curated for connoisseurs of the game. Rather than deteriorating, 
              these natural organic leathers yield a rich, storied patina with every mile walked.
            </p>

            {/* Interactive Material Cards */}
            <div className="space-y-3 mb-8">
              {materials.map((mat, idx) => (
                <button
                  key={mat.name}
                  onClick={() => setActiveMaterial(idx)}
                  className={`w-full text-left p-3.5 rounded-xs border transition-all ${
                    activeMaterial === idx
                      ? 'bg-white/10 border-[#c91c28] pl-5'
                      : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/[0.07]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-white tracking-wider font-serif">
                      {mat.name}
                    </span>
                    <span className="text-[9px] font-mono tracking-widest text-[#c91c28] uppercase">
                      {mat.tag}
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-400 font-light leading-snug">
                    {mat.desc}
                  </p>
                </button>
              ))}
            </div>

            <a
              href="#anatomy"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-white hover:text-[#c91c28] uppercase group transition-colors"
            >
              <span>DECONSTRUCT THE 9 LAYERS</span>
              <ArrowRight className="w-4 h-4 text-[#c91c28] group-hover:translate-x-1 transition-transform" />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};
