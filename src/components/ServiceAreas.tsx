import React from 'react';
import { MapPin, Navigation, Compass, Phone, CheckCircle, Info } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/businessConfig';

interface ServiceAreasProps {
  onOpenEstimate: () => void;
}

export const ServiceAreas: React.FC<ServiceAreasProps> = ({ onOpenEstimate }) => {
  return (
    <section id="service-areas" className="py-20 bg-[#f4f8fc] border-b border-[#e2ecf4] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-[#d4e4f2] text-[#0d3356] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Compass className="w-3.5 h-3.5 text-[#307ab4]" />
            <span>Local Service Coverage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#132537] tracking-tight mb-4">
            Serving Homeowners Throughout North Carolina
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {BUSINESS_CONFIG.serviceAreaDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Service Area Card Details */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-[#e2ecf4] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#eef5fa] border border-[#d4e4f2] flex items-center justify-center text-[#307ab4]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#132537]">Regional Remodeling Radius</h3>
                  <p className="text-xs text-slate-500 font-medium">Approx. {BUSINESS_CONFIG.serviceRadiusKm} km service perimeter</p>
                </div>
              </div>

              {/* Exact Address Update Box — strictly following requirements */}
              <div className="space-y-4 rounded-xl bg-[#f8fbfe] p-5 border border-[#e2ecf4]">
                <div className="border-b border-[#e2ecf4] pb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Primary Service Location
                  </span>
                  <span className="text-sm font-semibold text-[#132537]">
                    {BUSINESS_CONFIG.address}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 border-b border-[#e2ecf4] pb-3">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      City
                    </span>
                    <span className="text-sm font-semibold text-[#132537]">
                      {BUSINESS_CONFIG.city}
                    </span>
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      ZIP
                    </span>
                    <span className="text-sm font-semibold text-[#132537]">
                      {BUSINESS_CONFIG.zip}
                    </span>
                  </div>
                </div>

                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    State / Region
                  </span>
                  <span className="text-sm font-semibold text-[#132537]">
                    {BUSINESS_CONFIG.state}, {BUSINESS_CONFIG.country}
                  </span>
                </div>

                <div className="pt-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Additional Service Areas
                  </span>
                  <span className="text-sm font-semibold text-[#132537]">
                    [AREAS TO BE ADDED]
                  </span>
                </div>
              </div>

              <div className="mt-4 flex items-start gap-2 text-xs text-slate-500">
                <Info className="w-4 h-4 text-[#307ab4] flex-shrink-0 mt-0.5" />
                <span>The exact physical street address and specific town list will be configured in <code className="font-mono bg-white border border-[#d4e4f2] text-[#0d3356] px-1 py-0.5 rounded">src/data/businessConfig.ts</code> as soon as confirmed. No fake street addresses or fake towns are used.</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#eef4fa] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-sm font-semibold text-[#132537]">Unsure if your project is in range?</span>
              <a
                href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#307ab4] hover:text-[#0d3356] transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call {BUSINESS_CONFIG.phone}</span>
              </a>
            </div>
          </div>

          {/* Visual Coverage Graphic */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-[#e2ecf4] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Navigation className="w-5 h-5 text-[#307ab4]" />
                  <h3 className="text-lg font-bold text-[#132537]">North Carolina Service Perimeter</h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#eef5fa] text-[#0d3356] text-xs font-bold border border-[#d4e4f2]">
                  Active Service
                </span>
              </div>

              <p className="text-sm text-slate-600 mb-6">
                Our remodeling crews are dispatched locally to provide on-site estimates, architectural consultations, and full construction oversight throughout the region.
              </p>

              {/* Graphic Representation */}
              <div className="relative h-64 rounded-xl overflow-hidden bg-[#081d33] border border-[#0f2d4a] flex items-center justify-center p-6 text-center">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#307ab4_1px,transparent_1px)] [background-size:16px_16px]"></div>
                
                {/* Concentric rings representing ~60 km radius */}
                <div className="relative w-48 h-48 rounded-full border border-[#307ab4]/25 flex items-center justify-center animate-pulse">
                  <div className="w-36 h-36 rounded-full border border-[#307ab4]/45 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-[#307ab4]/15 border border-[#307ab4]/70 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-[#4ea5dc] shadow-[0_0_15px_#4ea5dc]"></div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-[#081d33]/90 backdrop-blur-xs p-3 rounded-lg border border-white/10 text-left">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-white">North Carolina Primary Hub</p>
                      <p className="text-[11px] text-slate-400">~60 km surrounding radius coverage</p>
                    </div>
                    <span className="text-xs font-bold text-[#4ea5dc]">Serving NC</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <button
                type="button"
                onClick={onOpenEstimate}
                className="w-full py-3.5 px-4 rounded-xl bg-[#0d3356] hover:bg-[#154370] text-white text-sm font-bold shadow-sm transition-all"
              >
                Check Project Availability & Get Free Estimate
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
