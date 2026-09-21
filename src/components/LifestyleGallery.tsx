import React, { useState } from 'react';
import { ArrowRight, X, ZoomIn, Camera } from 'lucide-react';
import { SHOE_DATA } from '../data/shoeData';

export const LifestyleGallery: React.FC = () => {
  const [activeModalImage, setActiveModalImage] = useState<string | null>(null);

  return (
    <section
      id="gallery"
      className="py-20 lg:py-28 bg-[#09090c] border-b border-white/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Editorial Row (Matches Image 2 "LIVE WITHOUT COMPROMISE / A LIFESTYLE BEYOND DRIVE") */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#c91c28] uppercase block mb-3">
              LIVE WITHOUT COMPROMISE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide uppercase leading-tight">
              A LIFESTYLE BEYOND<br />THE COURT.
            </h2>
          </div>

          <a
            href="#inquire"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-white hover:text-[#c91c28] uppercase group transition-colors self-start md:self-auto"
          >
            <span>VIEW LOOKBOOK ARCHIVE</span>
            <ArrowRight className="w-4 h-4 text-[#c91c28] group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 3-Photo Editorial Grid (Matches Image 2 Triptych) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {SHOE_DATA.gallery.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActiveModalImage(item.image)}
              className="group relative rounded-sm overflow-hidden border border-white/10 bg-[#0c0c10] cursor-pointer"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] sm:aspect-[3/4] w-full overflow-hidden bg-[#111116]">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-95 group-hover:brightness-105"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Top Tag */}
                <div className="absolute top-4 left-4">
                  <span className="text-[9px] font-mono tracking-widest text-[#c91c28] uppercase bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-xs border border-white/10">
                    {item.tag}
                  </span>
                </div>

                {/* Zoom Icon on Hover */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-full bg-black/60 text-white backdrop-blur-md border border-white/20">
                  <ZoomIn className="w-3.5 h-3.5" />
                </div>

                {/* Bottom Caption */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-serif text-base sm:text-lg font-bold text-white tracking-wide uppercase group-hover:text-[#c91c28] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-400 font-light mt-0.5">
                    {item.subtitle}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeModalImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setActiveModalImage(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center">
            <button
              onClick={() => setActiveModalImage(null)}
              className="absolute -top-12 right-0 p-2 text-neutral-400 hover:text-white rounded-full bg-white/10 border border-white/20"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={activeModalImage}
              alt="Editorial View Full Screen"
              referrerPolicy="no-referrer"
              className="max-h-[85vh] w-auto object-contain rounded border border-white/10 shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};
