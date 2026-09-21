import React from 'react';
import { Instagram, Youtube, Facebook, Twitter, ArrowUp, Github } from 'lucide-react';
import { SHOE_DATA } from '../data/shoeData';

interface FooterProps {
  onOpenGitHubGuide: () => void;
  onOpenReserve: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenGitHubGuide, onOpenReserve }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050507] border-t border-white/10 pt-16 pb-12 text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row (Exact layout from Image 2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 pb-16 border-b border-white/10">
          
          {/* Col 1-2: Brand Crest & Monogram (Matches Image 2 Aurelio Rosso logo) */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-sm border border-[#c91c28]/60 bg-[#140c0f] flex items-center justify-center p-1.5 shadow-lg">
                <svg viewBox="0 0 24 24" className="w-full h-full fill-current text-[#c91c28]">
                  <path d="M12 2L14.2 8.3H20.8L15.4 12.2L17.5 18.5L12 14.6L6.5 18.5L8.6 12.2L3.2 8.3H9.8L12 2Z" />
                  <circle cx="12" cy="12" r="2" fill="currentColor" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-sm tracking-[0.25em] text-white uppercase font-bold">
                  JORDAN RETRO
                </span>
                <span className="text-[9px] tracking-[0.3em] text-[#c91c28] uppercase font-mono">
                  HIGH OG • LOVE LETTER
                </span>
              </div>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm mb-6 font-light">
              Official artisanal presentation of the Air Jordan 1 Retro High OG "Love Letter" (Style Code: {SHOE_DATA.styleCode}). 
              Engineered with premium nubuck leather, vintage aged cupsole, and Michael Jordan's farewell inscription.
            </p>

            <div className="flex items-center gap-3">
              <button
                onClick={onOpenGitHubGuide}
                className="inline-flex items-center gap-2 text-xs font-mono text-neutral-300 hover:text-white bg-white/5 border border-white/10 hover:border-white/20 px-3 py-1.5 rounded-xs transition-all"
              >
                <Github className="w-3.5 h-3.5 text-[#c91c28]" />
                <span>GitHub Pages Ready</span>
              </button>
            </div>
          </div>

          {/* Col 3: The Collection */}
          <div>
            <h4 className="text-[10px] font-mono tracking-[0.25em] text-white uppercase font-bold mb-4">
              THE COLLECTION
            </h4>
            <ul className="space-y-2.5 text-xs font-light">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Retro High OG
                </a>
              </li>
              <li>
                <a href="#silhouette" className="hover:text-white transition-colors">
                  1985 Silhouette
                </a>
              </li>
              <li>
                <a href="#specs" className="hover:text-white transition-colors">
                  Specifications
                </a>
              </li>
              <li>
                <button onClick={onOpenReserve} className="hover:text-[#c91c28] transition-colors text-left">
                  Size Availability
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Experience */}
          <div>
            <h4 className="text-[10px] font-mono tracking-[0.25em] text-white uppercase font-bold mb-4">
              EXPERIENCE
            </h4>
            <ul className="space-y-2.5 text-xs font-light">
              <li>
                <a href="#anatomy" className="hover:text-white transition-colors">
                  Anatomy Deconstructed
                </a>
              </li>
              <li>
                <a href="#craftsmanship" className="hover:text-white transition-colors">
                  Leather Patina
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Lookbook Gallery
                </a>
              </li>
              <li>
                <a href="#inquire" className="hover:text-white transition-colors">
                  VIP Concierge
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: About */}
          <div>
            <h4 className="text-[10px] font-mono tracking-[0.25em] text-white uppercase font-bold mb-4">
              ABOUT
            </h4>
            <ul className="space-y-2.5 text-xs font-light">
              <li>
                <a href="#heritage-quote" className="hover:text-white transition-colors">
                  Love The Game
                </a>
              </li>
              <li>
                <a href="#craftsmanship" className="hover:text-white transition-colors">
                  Artisanal Suede
                </a>
              </li>
              <li>
                <a href="#specs" className="hover:text-white transition-colors">
                  Style DZ5485-201
                </a>
              </li>
              <li>
                <a href="https://www.nike.com/ph/t/air-jordan-1-retro-high-og-love-letter-mens-shoes-Pz6fZ9/DZ5485-201" target="_blank" rel="noreferrer" className="hover:text-[#c91c28] transition-colors">
                  Nike PH Official Store ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Col 6: Stay Connected & Back To Top */}
          <div>
            <h4 className="text-[10px] font-mono tracking-[0.25em] text-white uppercase font-bold mb-4">
              STAY CONNECTED
            </h4>
            
            <div className="flex items-center gap-3 mb-6">
              <a href="#" className="w-8 h-8 rounded-sm bg-white/5 border border-white/10 hover:border-[#c91c28] hover:text-white flex items-center justify-center transition-all">
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-8 h-8 rounded-sm bg-white/5 border border-white/10 hover:border-[#c91c28] hover:text-white flex items-center justify-center transition-all">
                <Youtube className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-8 h-8 rounded-sm bg-white/5 border border-white/10 hover:border-[#c91c28] hover:text-white flex items-center justify-center transition-all">
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-8 h-8 rounded-sm bg-white/5 border border-white/10 hover:border-[#c91c28] hover:text-white flex items-center justify-center transition-all">
                <Twitter className="w-3.5 h-3.5" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-neutral-300 hover:text-white uppercase transition-colors"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#c91c28]" />
            </button>
          </div>

        </div>

        {/* Bottom Legal Row (Matches Image 2 Copyright and Legal) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-neutral-400">
          <div>
            © 2026 AIR JORDAN RETRO HIGH OG • NIKE INC. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-neutral-300 transition-colors">
              PRIVACY POLICY
            </a>
            <a href="#" className="hover:text-neutral-300 transition-colors">
              TERMS OF USE
            </a>
            <a href="#" className="hover:text-neutral-300 transition-colors">
              AUTHENTICITY VERIFICATION
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
