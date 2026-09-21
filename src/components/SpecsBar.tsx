import React from 'react';
import { SHOE_DATA } from '../data/shoeData';

export const SpecsBar: React.FC = () => {
  return (
    <section
      id="specs"
      className="border-b border-white/10 bg-[#09090c] py-6 sm:py-8 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-4 items-center">
          
          {/* 5 Technical Metric Columns (Image 2 exact aesthetic) */}
          {SHOE_DATA.metrics.map((metric, idx) => (
            <div
              key={metric.label}
              className={`flex flex-col ${
                idx !== 0 ? 'lg:border-l lg:border-white/10 lg:pl-6' : ''
              } group`}
            >
              <span className="font-serif text-xl sm:text-2xl font-bold text-white tracking-wider group-hover:text-[#c91c28] transition-colors">
                {metric.value}
              </span>
              <span className="text-[10px] tracking-[0.2em] font-bold text-neutral-400 uppercase mt-1">
                {metric.label}
              </span>
              <span className="text-[9px] tracking-wider text-neutral-400 font-mono">
                {metric.sub}
              </span>
            </div>
          ))}

          {/* Far Right Badge: Jordan Tribute Signature (Matches Image 2 Italy signature) */}
          <div className="flex flex-col justify-center items-start lg:items-end lg:border-l lg:border-white/10 lg:pl-6 col-span-2 md:col-span-1">
            <div className="font-editorial italic text-lg sm:text-xl text-[#e2c275] tracking-wide font-normal leading-none">
              Much Love & Respect
            </div>
            <div className="text-[9px] font-mono tracking-[0.25em] text-neutral-400 uppercase mt-1 flex items-center gap-1.5">
              <span>MICHAEL JORDAN</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#c91c28]" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
