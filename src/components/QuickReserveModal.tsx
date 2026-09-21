import React, { useState } from 'react';
import { X, Check, ShieldCheck, ArrowRight, Sparkles, Box } from 'lucide-react';
import { SHOE_DATA } from '../data/shoeData';

interface QuickReserveModalProps {
  isOpen: boolean;
  onClose: () => void;
  currency: 'PHP' | 'USD';
  onConfirmed: () => void;
}

export const QuickReserveModal: React.FC<QuickReserveModalProps> = ({
  isOpen,
  onClose,
  currency,
  onConfirmed
}) => {
  const [selectedSize, setSelectedSize] = useState('US 9.5');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const currentSizeObj = SHOE_DATA.sizes.find(s => s.usSize === selectedSize);
  const formattedPrice = currency === 'PHP' ? `₱${SHOE_DATA.pricePHP.toLocaleString()} PHP` : `$${SHOE_DATA.priceUSD} USD`;

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    onConfirmed();
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-[#0d0d12] border border-[#c91c28]/40 rounded-sm p-6 sm:p-8 relative shadow-2xl animate-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-white p-1"
          aria-label="Close Reserve Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#c91c28]/20 border border-[#c91c28] flex items-center justify-center text-[#c91c28]">
              <Check className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-white uppercase">
              Allotment Secured
            </h3>
            <p className="text-xs text-neutral-300 font-light max-w-xs mx-auto">
              Your priority hold for size <strong className="text-white">{selectedSize}</strong> has been logged. Our concierge will send your dispatch confirmation to <strong className="text-white">{email}</strong>.
            </p>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#c91c28] uppercase">
                QUICK ALLOCATION
              </span>
              <span className="text-[10px] font-mono text-neutral-500">
                DZ5485-201
              </span>
            </div>

            <h3 className="font-serif text-2xl font-bold text-white uppercase mb-4">
              Reserve Air Jordan 1
            </h3>

            <div className="flex items-center gap-4 bg-[#14141b] p-3 rounded-xs border border-white/10 mb-6">
              <img
                src="./images/side-profile.jpg"
                alt="Air Jordan 1 Love Letter"
                className="w-16 h-12 object-cover rounded-xs"
              />
              <div className="flex-1">
                <span className="block text-xs font-bold text-white font-serif">
                  High OG 'Love Letter'
                </span>
                <span className="text-[11px] font-mono text-[#e2c275]">
                  {formattedPrice}
                </span>
              </div>
            </div>

            <form onSubmit={handleQuickSubmit} className="space-y-4">
              <div>
                <label className="block text-[10px] font-mono tracking-wider text-neutral-400 uppercase mb-2">
                  CHOOSE SIZE (US MEN):
                </label>
                <div className="grid grid-cols-4 gap-1.5">
                  {SHOE_DATA.sizes.map((sz) => (
                    <button
                      type="button"
                      key={sz.usSize}
                      disabled={!sz.available}
                      onClick={() => setSelectedSize(sz.usSize)}
                      className={`py-2 px-1 rounded-xs text-xs font-mono transition-all border ${
                        selectedSize === sz.usSize
                          ? 'bg-[#c91c28] border-[#c91c28] text-white font-bold'
                          : sz.available
                          ? 'bg-white/5 border-white/10 text-neutral-300 hover:border-white/20'
                          : 'opacity-30 border-white/5 cursor-not-allowed line-through'
                      }`}
                    >
                      {sz.usSize.replace('US ', '')}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block text-[10px] font-mono text-neutral-400 uppercase mb-1">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Marcus Vance"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#111116] border border-white/15 focus:border-[#c91c28] text-white text-xs px-3 py-2 rounded-xs outline-none font-sans"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono text-neutral-400 uppercase mb-1">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="marcus@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#111116] border border-white/15 focus:border-[#c91c28] text-white text-xs px-3 py-2 rounded-xs outline-none font-sans"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#c91c28] hover:bg-[#b01822] text-white font-bold text-xs tracking-[0.25em] uppercase flex items-center justify-center gap-2 transition-all shadow-xl shadow-[#c91c28]/25"
                >
                  <span>CONFIRM RESERVATION</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[10px] text-neutral-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero Risk • Confirmation within 15 mins</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
