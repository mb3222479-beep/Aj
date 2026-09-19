import React, { useEffect } from 'react';
import { X, Check, ArrowRight, Phone, Calendar, Hammer } from 'lucide-react';
import { RemodelingService } from '../types';
import { BUSINESS_CONFIG } from '../data/businessConfig';

interface ServiceDetailModalProps {
  service: RemodelingService | null;
  onClose: () => void;
  onOpenEstimate: (prefillService?: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onOpenEstimate,
}) => {
  useEffect(() => {
    if (!service) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
    >
      <div 
        className="relative bg-white rounded-2xl max-w-3xl w-full shadow-2xl border border-zinc-200 overflow-hidden transform transition-all max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with image */}
        <div className="relative h-56 sm:h-72 w-full flex-shrink-0">
          <img
            src={service.imageUrl}
            alt={service.name}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          
          <button
            type="button"
            id="close-service-modal-btn"
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors focus:outline-none cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="inline-block px-3 py-1 rounded-md bg-[#0d3356] border border-[#307ab4]/60 text-white text-xs font-bold uppercase tracking-wider mb-2">
              {service.category} Remodeling
            </span>
            <h2 id="service-modal-title" className="text-2xl sm:text-3xl font-extrabold text-white">
              {service.name}
            </h2>
            <p className="text-sm text-slate-200 mt-1">{service.tagline}</p>
          </div>
        </div>

        {/* Content body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#307ab4] mb-2">Service Overview</h3>
            <p className="text-base text-slate-700 leading-relaxed">
              {service.fullDescription}
            </p>
          </div>

          <div className="border-t border-[#e2ecf4] pt-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#307ab4] mb-3">
              What This Service Typically Includes
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-800">
                  <div className="w-4 h-4 rounded-full bg-[#eef5fa] text-[#307ab4] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#f8fbfe] border border-[#e2ecf4] rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase font-bold text-slate-500">Service Coverage</p>
              <p className="text-sm font-semibold text-[#132537] mt-0.5">
                North Carolina & communities within ~60 km
              </p>
            </div>
            <a
              href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#307ab4] hover:text-[#0d3356] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>{BUSINESS_CONFIG.phone}</span>
            </a>
          </div>
        </div>

        {/* Modal Footer CTAs */}
        <div className="p-4 sm:p-6 bg-[#f8fbfe] border-t border-[#e2ecf4] flex flex-col sm:flex-row items-center justify-end gap-3 flex-shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-[#d4e4f2] text-slate-700 font-semibold text-sm hover:bg-[#eef5fa] transition-colors cursor-pointer"
          >
            Close
          </button>
          <button
            type="button"
            id="service-modal-estimate-btn"
            onClick={() => {
              onClose();
              onOpenEstimate(service.name);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-[#0d3356] hover:bg-[#154370] text-white font-bold text-sm shadow-sm transition-all cursor-pointer"
          >
            <span>Request Estimate for {service.name}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
