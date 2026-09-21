import React, { useState } from 'react';
import { ArrowRight, Compass, Maximize2, ShieldCheck, Sparkles } from 'lucide-react';
import { SHOE_DATA } from '../data/shoeData';

interface SilhouetteSectionProps {
  onExploreMore: () => void;
}

export const SilhouetteSection: React.FC<SilhouetteSectionProps> = ({ onExploreMore }) => {
  const [activeAngle, setActiveAngle] = useState<'side' | 'craft' | 'interior'>('side');

  const angleImages = {
    side: {
      src: './images/side-profile.jpg',
      alt: 'Air Jordan 1 High OG Love Letter Side Profile',
      title: 'SIDE PROFILE SILHOUETTE',
      caption: 'The unmistakable 1985 high-top collar geometry in Shadow Brown nubuck & Soft Pearl tumbled leather.'
    },
    craft: {
      src: './images/craft-detail.jpg',
      alt: 'Air Jordan 1 High OG Nubuck Leather & Wings Logo',
      title: 'ARTISANAL HEEL & WINGS EMBOSSING',
      caption: 'Light British Tan ankle overlay embossed with Peter Moore’s Wings logo and tribute embroidery.'
    },
    interior: {
      src: './images/interior-comfort.jpg',
      alt: 'Air Jordan 1 Interior Collar & Air-Sole Unit',
      title: 'INTERNAL ARCHITECTURE & COMFORT',
      caption: 'Ergonomic footbed with encapsulated Air-Sole cushion in the heel for lasting impact absorption.'
    }
  };

  const currentView = angleImages[activeAngle];

  return (
    <section
      id="silhouette"
      className="py-20 lg:py-28 bg-[#070709] border-b border-white/10 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#c91c28]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Block (Matches Image 2 "THE FLAGSHIP / V10") */}
        <div className="max-w-2xl mb-12">
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#c91c28] uppercase block mb-3">
            THE FLAGSHIP SILHOUETTE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide uppercase mb-4">
            RETRO HIGH OG.
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed mb-6">
            An uncompromising fusion of 1985 court authority, timeless poise, and bespoke leatherwork. 
            Every contour, contrast stitch, and perforated radius serves a purpose born from relentless championship ambition.
          </p>
          <a
            href="#craftsmanship"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-white hover:text-[#c91c28] uppercase group transition-colors"
          >
            <span>EXPLORE CRAFTSMANSHIP & DETAILS</span>
            <ArrowRight className="w-4 h-4 text-[#c91c28] group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Cinematic Wide Image Showcase (Matches the Red Sports Car profile in Image 2) */}
        <div className="relative rounded-lg overflow-hidden border border-white/10 bg-[#0b0b0e] shadow-2xl">
          
          {/* Main Visual Display */}
          <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden flex items-center justify-center bg-radial from-[#181820] to-[#08080a]">
            <img
              src={currentView.src}
              alt={currentView.alt}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center transition-all duration-700 ease-out hover:scale-[1.015]"
            />

            {/* Ambient Red Rim Highlight Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-transparent opacity-80" />

            {/* In-image caption and view specs */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-8 max-w-md z-10">
              <span className="text-[10px] font-mono tracking-[0.2em] text-[#c91c28] uppercase block mb-1">
                {currentView.title}
              </span>
              <p className="text-xs sm:text-sm text-neutral-200 font-light drop-shadow-md">
                {currentView.caption}
              </p>
            </div>

            {/* Angle Switcher Controls in bottom-right corner */}
            <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-8 z-10 flex items-center gap-1.5 bg-black/70 backdrop-blur-md p-1.5 rounded-sm border border-white/10">
              <button
                onClick={() => setActiveAngle('side')}
                className={`px-3 py-1.5 text-[10px] font-mono tracking-wider rounded-xs transition-all uppercase ${
                  activeAngle === 'side'
                    ? 'bg-[#c91c28] text-white font-bold'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                Profile
              </button>
              <button
                onClick={() => setActiveAngle('craft')}
                className={`px-3 py-1.5 text-[10px] font-mono tracking-wider rounded-xs transition-all uppercase ${
                  activeAngle === 'craft'
                    ? 'bg-[#c91c28] text-white font-bold'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                Leather Grain
              </button>
              <button
                onClick={() => setActiveAngle('interior')}
                className={`px-3 py-1.5 text-[10px] font-mono tracking-wider rounded-xs transition-all uppercase ${
                  activeAngle === 'interior'
                    ? 'bg-[#c91c28] text-white font-bold'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                Interior
              </button>
            </div>

          </div>

          {/* Bottom specification chips */}
          <div className="p-4 sm:p-6 bg-[#0a0a0d] border-t border-white/5 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-[#c91c28]">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-wider text-neutral-400">Authentic Build</span>
                <span className="text-xs font-semibold text-white">1985 High OG Spec</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-[#c91c28]">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-wider text-neutral-400">Leather Patina</span>
                <span className="text-xs font-semibold text-white">Matures With Age</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-[#c91c28]">
                <Compass className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-wider text-neutral-400">Cushioning</span>
                <span className="text-xs font-semibold text-white">Nike Air-Sole Unit</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-[#c91c28]">
                <Maximize2 className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-wider text-neutral-400">Traction Grip</span>
                <span className="text-xs font-semibold text-white">Team Red Rubber</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
