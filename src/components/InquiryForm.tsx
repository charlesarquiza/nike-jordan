import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Box, Sparkles, X, Download } from 'lucide-react';
import { SHOE_DATA } from '../data/shoeData';
import { InquiryFormData } from '../types';

interface InquiryFormProps {
  currency: 'PHP' | 'USD';
  selectedSize?: string;
  onReservationSuccess: () => void;
}

export const InquiryForm: React.FC<InquiryFormProps> = ({
  currency,
  selectedSize = 'US 9.5',
  onReservationSuccess
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    size: selectedSize,
    deliveryOption: 'express_concierge',
    message: '',
    agreePrivacy: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedBookingCode, setSubmittedBookingCode] = useState<string | null>(null);

  const priceFormatted = currency === 'PHP' ? `₱${SHOE_DATA.pricePHP.toLocaleString()} PHP` : `$${SHOE_DATA.priceUSD} USD`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreePrivacy) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const code = `AJ1-LL-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedBookingCode(code);
      onReservationSuccess();
    }, 800);
  };

  return (
    <section
      id="inquire"
      className="py-20 lg:py-28 bg-[#070709] border-b border-white/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Inquiry Header & Allocation Specs (Matches Image 2 Left) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#c91c28] uppercase block mb-3">
                BEGIN YOUR JOURNEY
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide uppercase leading-tight mb-6">
                Reserve Your<br />Air Jordan 1.
              </h2>
              <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed mb-8">
                Each pair of the <strong className="text-white font-medium">Air Jordan 1 Retro High OG 'Love Letter'</strong> is 
                released in strictly controlled allocations. Complete your reservation details to confirm sizing availability 
                with our Nike flagship allocation desk.
              </p>

              {/* Product Dossier Card */}
              <div className="p-5 rounded-xs bg-[#0c0c10] border border-white/10 space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                    STYLE CODE
                  </span>
                  <span className="text-xs font-mono font-bold text-white">
                    {SHOE_DATA.styleCode}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                    COLORWAY
                  </span>
                  <span className="text-xs font-medium text-neutral-200 text-right max-w-[200px] truncate">
                    {SHOE_DATA.colorway}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                    RETAIL ALLOCATION
                  </span>
                  <span className="text-sm font-mono font-bold text-[#e2c275]">
                    {priceFormatted}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs text-neutral-300 pt-1">
                  <Box className="w-4 h-4 text-[#c91c28]" />
                  <span>Includes Commemorative Box & Leather Hangtag</span>
                </div>
              </div>
            </div>

            {/* Concierge Guarantee */}
            <div className="mt-8 flex items-center gap-3 text-xs text-neutral-400">
              <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
              <span>100% Guaranteed Authentic Nike PH Allocation • Global Insured Dispatch</span>
            </div>
          </div>

          {/* Right Column: Form (Exact layout from Image 2) */}
          <div className="lg:col-span-7 bg-[#0b0b0f] border border-white/10 p-6 sm:p-8 lg:p-10 rounded-sm shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* First Name & Last Name (Side by Side like Image 2) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-mono tracking-[0.2em] text-neutral-400 uppercase mb-2">
                    FIRST NAME *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Marcus"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full bg-[#111116] border border-white/15 focus:border-[#c91c28] focus:bg-[#14141c] text-white text-xs px-4 py-3.5 rounded-xs outline-none transition-all placeholder:text-neutral-600 font-sans"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono tracking-[0.2em] text-neutral-400 uppercase mb-2">
                    LAST NAME *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vance"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full bg-[#111116] border border-white/15 focus:border-[#c91c28] focus:bg-[#14141c] text-white text-xs px-4 py-3.5 rounded-xs outline-none transition-all placeholder:text-neutral-600 font-sans"
                  />
                </div>
              </div>

              {/* Email & Phone (Side by Side like Image 2) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-mono tracking-[0.2em] text-neutral-400 uppercase mb-2">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#111116] border border-white/15 focus:border-[#c91c28] focus:bg-[#14141c] text-white text-xs px-4 py-3.5 rounded-xs outline-none transition-all placeholder:text-neutral-600 font-sans"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono tracking-[0.2em] text-neutral-400 uppercase mb-2">
                    PHONE / MOBILE *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+63 912 345 6789"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#111116] border border-white/15 focus:border-[#c91c28] focus:bg-[#14141c] text-white text-xs px-4 py-3.5 rounded-xs outline-none transition-all placeholder:text-neutral-600 font-sans"
                  />
                </div>
              </div>

              {/* Shoe Size Selection Matrix */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-[10px] font-mono tracking-[0.2em] text-neutral-400 uppercase">
                    SELECT US MEN'S SHOE SIZE *
                  </label>
                  <span className="text-[10px] font-mono text-[#c91c28]">
                    {SHOE_DATA.sizes.find(s => s.usSize === formData.size)?.cm || '27.5 cm'}
                  </span>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {SHOE_DATA.sizes.map((size) => (
                    <button
                      type="button"
                      key={size.usSize}
                      disabled={!size.available}
                      onClick={() => setFormData({ ...formData, size: size.usSize })}
                      className={`py-2 px-1 text-center rounded-xs text-xs font-mono transition-all border ${
                        formData.size === size.usSize
                          ? 'bg-[#c91c28] border-[#c91c28] text-white font-bold'
                          : size.available
                          ? 'bg-[#121218] border-white/10 text-neutral-300 hover:border-white/30'
                          : 'bg-black/40 border-white/5 text-neutral-600 cursor-not-allowed line-through'
                      }`}
                    >
                      <div className="leading-tight">{size.usSize.replace('US ', '')}</div>
                      <div className="text-[9px] opacity-70">{size.available ? `${size.stockCount} left` : 'Sold'}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Delivery Tier Preference */}
              <div>
                <label className="block text-[10px] font-mono tracking-[0.2em] text-neutral-400 uppercase mb-2">
                  FULFILLMENT PREFERENCE
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <label
                    className={`p-3 rounded-xs border cursor-pointer flex items-center gap-3 transition-all ${
                      formData.deliveryOption === 'express_concierge'
                        ? 'bg-white/10 border-[#c91c28]'
                        : 'bg-[#111116] border-white/10 text-neutral-400'
                    }`}
                  >
                    <input
                      type="radio"
                      name="delivery"
                      checked={formData.deliveryOption === 'express_concierge'}
                      onChange={() => setFormData({ ...formData, deliveryOption: 'express_concierge' })}
                      className="accent-[#c91c28]"
                    />
                    <div>
                      <span className="block text-white font-medium">VIP White-Glove Courier</span>
                      <span className="text-[10px] text-neutral-400">Insured Hand Delivery & Verification</span>
                    </div>
                  </label>

                  <label
                    className={`p-3 rounded-xs border cursor-pointer flex items-center gap-3 transition-all ${
                      formData.deliveryOption === 'standard'
                        ? 'bg-white/10 border-[#c91c28]'
                        : 'bg-[#111116] border-white/10 text-neutral-400'
                    }`}
                  >
                    <input
                      type="radio"
                      name="delivery"
                      checked={formData.deliveryOption === 'standard'}
                      onChange={() => setFormData({ ...formData, deliveryOption: 'standard' })}
                      className="accent-[#c91c28]"
                    />
                    <div>
                      <span className="block text-white font-medium">Standard Secured Transit</span>
                      <span className="text-[10px] text-neutral-400">Tracked Express Air Dispatch</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Message (Like Image 2 textarea) */}
              <div>
                <label className="block text-[10px] font-mono tracking-[0.2em] text-neutral-400 uppercase mb-2">
                  MESSAGE / SPECIAL COLLECTOR INSTRUCTIONS
                </label>
                <textarea
                  rows={3}
                  placeholder="Include any specific delivery instructions, gift notes, or collection vault requests..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#111116] border border-white/15 focus:border-[#c91c28] focus:bg-[#14141c] text-white text-xs px-4 py-3 rounded-xs outline-none transition-all placeholder:text-neutral-600 font-sans"
                />
              </div>

              {/* Checkbox and Submit Button (Exact replica of Image 2) */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                <label className="flex items-center gap-2.5 text-xs text-neutral-400 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    required
                    checked={formData.agreePrivacy}
                    onChange={(e) => setFormData({ ...formData, agreePrivacy: e.target.checked })}
                    className="accent-[#c91c28] rounded-xs w-4 h-4 cursor-pointer"
                  />
                  <span>I agree to the Allocation Terms & Privacy Policy</span>
                </label>

                <button
                  type="submit"
                  disabled={isSubmitting || !formData.agreePrivacy}
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#c91c28] hover:bg-[#b01822] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold text-xs tracking-[0.25em] uppercase flex items-center justify-center gap-3 transition-all duration-300 shadow-xl shadow-[#c91c28]/25"
                >
                  <span>{isSubmitting ? 'PROCESSING...' : 'SUBMIT INQUIRY'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </form>
          </div>

        </div>

      </div>

      {/* Confirmation Modal */}
      {submittedBookingCode && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-[#0e0e13] border border-[#c91c28]/40 rounded-sm p-6 sm:p-8 relative shadow-2xl animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setSubmittedBookingCode(null)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#c91c28]/20 border border-[#c91c28] flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-[#c91c28]" />
              </div>

              <span className="text-[10px] font-mono tracking-[0.25em] text-[#c91c28] uppercase">
                RESERVATION CONFIRMED
              </span>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white uppercase mt-1 mb-2">
                Allotment Secured
              </h3>

              <p className="text-xs text-neutral-300 mb-6 font-light">
                Thank you, {formData.firstName}. Your reservation for the <strong className="text-white">Air Jordan 1 Retro High OG 'Love Letter' ({formData.size})</strong> has been logged in our allocation roster.
              </p>

              {/* Booking Code Card */}
              <div className="w-full bg-black/60 border border-white/10 p-4 rounded-xs text-left mb-6 font-mono text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-neutral-400">Reference:</span>
                  <span className="text-white font-bold">{submittedBookingCode}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Shoe Size:</span>
                  <span className="text-white">{formData.size}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Price:</span>
                  <span className="text-[#e2c275]">{priceFormatted}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Style Code:</span>
                  <span className="text-white">DZ5485-201</span>
                </div>
              </div>

              <button
                onClick={() => {
                  window.print();
                }}
                className="w-full py-2.5 bg-white/10 hover:bg-white/20 text-neutral-200 text-xs font-mono uppercase tracking-wider rounded-xs flex items-center justify-center gap-2 mb-3"
              >
                <Download className="w-4 h-4" />
                Print / Save Receipt
              </button>

              <button
                onClick={() => setSubmittedBookingCode(null)}
                className="w-full py-3 bg-[#c91c28] text-white text-xs font-bold uppercase tracking-[0.2em] rounded-xs"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
