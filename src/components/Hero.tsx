import React, { useState } from 'react';
import { ArrowRight, Play, Eye, Sparkles, Layers, Info, Check, Share2 } from 'lucide-react';
import { SHOE_DATA } from '../data/shoeData';

interface HeroProps {
  currency: 'PHP' | 'USD';
  onReserveClick: () => void;
  onExploreAnatomy: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  currency,
  onReserveClick,
  onExploreAnatomy,
}) => {
  const [selectedPartId, setSelectedPartId] = useState<string | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const selectedPart = SHOE_DATA.explodedParts.find((p) => p.id === selectedPartId);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex flex-col justify-center overflow-hidden border-b border-white/10"
    >
      {/* Background ambient radial gradients (Image 2 dark luxury red glow) */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#c91c28]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-neutral-900/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-30 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Copy (Matches Image 2 Left Side) */}
          <div className="lg:col-span-6 flex flex-col justify-center z-10">
            {/* Brand Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-[1px] w-6 bg-[#c91c28]" />
              <span className="text-[11px] font-bold tracking-[0.28em] text-[#c91c28] uppercase">
                AIR JORDAN 1 RETRO HIGH OG
              </span>
              <span className="text-[10px] font-mono text-neutral-400 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                DZ5485-201
              </span>
            </div>

            {/* Main Headline (Exact Typography styling from Image 2) */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.08] mb-6 uppercase">
              BORN ON COURT.<br />
              <span className="text-neutral-100">MADE TO BE</span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-400">
                REMEMBERED.
              </span>
            </h1>

            {/* Editorial Description */}
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-xl mb-8 font-light">
              A pure expression of court mastery, artisanal leathercraft, and Michael Jordan's farewell letter to the game. 
              The <strong className="text-neutral-200 font-medium">Air Jordan 1 Retro High OG 'Love Letter'</strong> redefines 
              the iconic 1985 silhouette with rich Shadow Brown nubuck, Soft Pearl tumbled leather, aged Sail cupsole, and Team Red traction.
            </p>

            {/* Price & Stock Badge */}
            <div className="flex flex-wrap items-center gap-4 mb-8 text-xs">
              <div className="bg-white/5 border border-white/10 px-3.5 py-2 rounded-xs flex items-center gap-2">
                <span className="text-neutral-400 uppercase tracking-widest text-[10px]">Official Retail:</span>
                <span className="text-white font-mono font-bold text-sm">
                  {currency === 'PHP' ? '₱9,895 PHP' : '$185 USD'}
                </span>
              </div>
              <div className="bg-[#c91c28]/10 border border-[#c91c28]/30 px-3.5 py-2 rounded-xs flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#c91c28] animate-pulse" />
                <span className="text-[#f87171] uppercase tracking-wider text-[11px] font-medium">
                  Limited Tier 1 SNKRS Allocation
                </span>
              </div>
            </div>

            {/* Action Buttons (Matches Image 2 primary red CTA + secondary ghost button) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                id="hero-reserve-button"
                onClick={onReserveClick}
                className="px-8 py-3.5 bg-[#c91c28] hover:bg-[#b01822] text-white font-semibold text-xs tracking-[0.25em] uppercase flex items-center justify-center gap-3 transition-all duration-300 shadow-xl shadow-[#c91c28]/25 group active:scale-[0.98]"
              >
                <span>RESERVE PAIR</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-explore-anatomy-button"
                onClick={onExploreAnatomy}
                className="px-6 py-3.5 bg-transparent border border-white/20 hover:border-white/50 text-neutral-200 hover:text-white font-medium text-xs tracking-[0.2em] uppercase flex items-center justify-center gap-2.5 transition-all duration-300 hover:bg-white/5"
              >
                <Play className="w-3.5 h-3.5 fill-current text-[#c91c28]" />
                <span>EXPLORE ANATOMY</span>
              </button>

              <button
                id="hero-share-link-button"
                onClick={handleShare}
                className="p-3.5 text-neutral-400 hover:text-white bg-white/5 border border-white/10 hover:border-white/25 rounded-xs transition-colors self-center sm:self-auto"
                title="Share this release link"
              >
                {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
              </button>
            </div>

            {/* Sub-quote reference from Jordan's Love Letter */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3 text-xs text-neutral-400 font-editorial italic">
              <span>"Dear Basketball... Much Love and Respect."</span>
              <span className="text-neutral-500 font-sans not-italic text-[10px] uppercase tracking-wider">— MJ Collar Inscription</span>
            </div>
          </div>

          {/* Right Column: Image 1 Hero Image (Exploded Sneaker Deconstruction) */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center">
            
            {/* Visual Frame & Halo */}
            <div className="relative w-full max-w-lg lg:max-w-none rounded-xl overflow-hidden border border-white/10 bg-[#0c0c10] shadow-2xl group">
              
              {/* Image 1: Exploded Sneaker Breakdown Diagram */}
              <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden flex items-center justify-center bg-[#0d0d12]">
                <img
                  id="hero-exploded-sneaker-image"
                  src="./images/hero-exploded.jpg"
                  alt="Air Jordan 1 High OG Exploded Deconstruction Anatomy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain p-2 sm:p-4 transition-transform duration-700 group-hover:scale-[1.02]"
                />

                {/* Hotspot Pins overlaid on the diagram corresponding to Image 1 parts */}
                {SHOE_DATA.explodedParts.map((part) => {
                  const isSelected = selectedPartId === part.id;
                  return (
                    <button
                      key={part.id}
                      id={`hero-hotspot-${part.id}`}
                      onClick={() => setSelectedPartId(isSelected ? null : part.id)}
                      style={{ top: `${part.position.y}%`, left: `${part.position.x}%` }}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 group/pin transition-all duration-300 focus:outline-none ${
                        isSelected ? 'scale-125' : 'hover:scale-110'
                      }`}
                      aria-label={`Inspect ${part.name}`}
                    >
                      <span className="relative flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center">
                        {/* Pulse Ring */}
                        <span
                          className={`absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping ${
                            isSelected ? 'bg-[#c91c28]' : 'bg-white/40'
                          }`}
                        />
                        {/* Core Dot */}
                        <span
                          className={`relative inline-flex rounded-full h-3.5 w-3.5 sm:h-4 sm:w-4 items-center justify-center border text-[9px] font-bold ${
                            isSelected
                              ? 'bg-[#c91c28] border-white text-white shadow-lg shadow-[#c91c28]'
                              : 'bg-black/80 border-white/60 text-white group-hover/pin:border-[#c91c28] group-hover/pin:bg-[#c91c28]'
                          }`}
                        >
                          +
                        </span>
                      </span>
                    </button>
                  );
                })}

                {/* Watermark/Caption badge bottom */}
                <div className="absolute bottom-3 left-3 right-3 bg-black/75 backdrop-blur-md border border-white/10 px-3 py-2 rounded-xs flex items-center justify-between text-[11px] text-neutral-300">
                  <span className="flex items-center gap-1.5 font-mono tracking-wider">
                    <Layers className="w-3.5 h-3.5 text-[#c91c28]" />
                    IMAGE 1 • ANATOMY DECONSTRUCTED
                  </span>
                  <span className="text-[10px] text-neutral-400">
                    Click <strong className="text-[#c91c28]">+</strong> pins to inspect layers
                  </span>
                </div>
              </div>

              {/* Detail drawer when a hotspot is clicked */}
              {selectedPart && (
                <div
                  id="hotspot-info-drawer"
                  className="p-4 bg-gradient-to-r from-[#14141a] to-[#0c0c10] border-t border-[#c91c28]/40 animate-in fade-in slide-in-from-bottom-2 duration-300"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#c91c28]">
                          LAYER INSPECTOR
                        </span>
                        <span className="text-[10px] text-neutral-400 font-mono">
                          {selectedPart.color}
                        </span>
                      </div>
                      <h4 className="font-serif font-bold text-white text-sm sm:text-base">
                        {selectedPart.name}
                      </h4>
                      <p className="text-xs text-neutral-300 mt-1">
                        {selectedPart.summary}
                      </p>
                      <p className="text-[11px] text-neutral-400 mt-1 font-light">
                        {selectedPart.details}
                      </p>
                    </div>
                    <button
                      onClick={() => setSelectedPartId(null)}
                      className="text-neutral-400 hover:text-white text-xs px-2 py-1 rounded bg-white/5 border border-white/10"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Interactive Selector for Mobile / Quick touch access */}
            <div className="w-full mt-4 flex items-center justify-between gap-2 overflow-x-auto pb-2 scrollbar-none">
              <span className="text-[10px] tracking-wider uppercase text-neutral-400 whitespace-nowrap font-mono">
                Deconstructed Parts:
              </span>
              <div className="flex items-center gap-1.5 overflow-x-auto py-1">
                {SHOE_DATA.explodedParts.slice(0, 5).map((part) => (
                  <button
                    key={part.id}
                    onClick={() => setSelectedPartId(part.id)}
                    className={`px-2.5 py-1 text-[10px] tracking-wider rounded-xs whitespace-nowrap transition-all font-mono ${
                      selectedPartId === part.id
                        ? 'bg-[#c91c28] text-white'
                        : 'bg-white/5 text-neutral-300 hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    {part.name}
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
