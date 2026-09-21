import React from 'react';
import { Quote } from 'lucide-react';

export const TestimonialQuote: React.FC = () => {
  return (
    <section
      id="heritage-quote"
      className="py-24 sm:py-32 bg-[#060608] relative overflow-hidden border-b border-white/10"
    >
      {/* Red Taillight / Court Horizon Atmospheric Glow (Directly matching Image 2 rear red lighting) */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#c91c28]/15 via-[#c91c28]/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-3/4 max-w-2xl h-1 bg-[#c91c28]/60 blur-sm rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        
        {/* Large Decorative Quote Icon */}
        <div className="mb-8 text-[#c91c28] opacity-80">
          <Quote className="w-12 h-12 rotate-180 mx-auto" />
        </div>

        {/* Editorial Heritage Quote (Image 2 exact typography and scale) */}
        <blockquote className="font-editorial italic text-2xl sm:text-3xl md:text-4xl text-neutral-100 font-normal leading-relaxed tracking-wide mb-10 max-w-4xl">
          "The Air Jordan 1 Retro High OG is not just a sneaker. It is an enduring statement of who you are, 
          the relentless dedication you pour into your craft, and the standard of excellence you refuse to compromise."
        </blockquote>

        {/* Attribution Details */}
        <div className="flex flex-col items-center">
          <span className="font-serif text-sm tracking-[0.25em] text-white uppercase font-bold">
            MICHAEL JORDAN
          </span>
          <span className="text-[10px] font-mono tracking-[0.3em] text-[#c91c28] uppercase mt-1">
            "MUCH LOVE AND RESPECT" — 1985–2026
          </span>
          <span className="text-[9px] tracking-[0.2em] text-neutral-400 uppercase font-mono mt-0.5">
            AIR JORDAN RETRO HIGH OG • DZ5485-201
          </span>
        </div>

      </div>
    </section>
  );
};
