import React, { useState } from 'react';
import { ArrowRight, Hammer, CheckCircle2, ChevronRight } from 'lucide-react';
import { SERVICES_LIST } from '../data/businessConfig';
import { RemodelingService } from '../types';

interface ServicesGridProps {
  onSelectService: (service: RemodelingService) => void;
  onOpenEstimate: (serviceName?: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({
  onSelectService,
  onOpenEstimate,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Interior', 'Structural', 'Finishes', 'Craftsmanship', 'Custom'];

  const filteredServices = selectedCategory === 'All'
    ? SERVICES_LIST
    : SERVICES_LIST.filter(s => s.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <section id="services" className="py-20 bg-[#f4f8fc] border-b border-[#e2ecf4] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-[#d4e4f2] text-[#0d3356] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Hammer className="w-3.5 h-3.5 text-[#307ab4]" />
            <span>Comprehensive Residential Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#132537] tracking-tight mb-4">
            Our Residential Remodeling Services
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From single-room upgrades to complete home transformations, A&J Remodeling Contracting Services provides dependable, quality-focused craftsmanship for North Carolina homeowners.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                id={`filter-services-${cat.toLowerCase()}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0d3356] text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:text-[#0d3356] border border-[#d4e4f2] hover:border-[#307ab4]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 12 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, idx) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="group bg-white rounded-2xl border border-[#e2ecf4] hover:border-[#307ab4]/60 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Service Card Image */}
                <div className="relative h-52 sm:h-56 overflow-hidden bg-slate-100">
                  <img
                    src={service.imageUrl}
                    alt={`${service.name} by A&J Remodeling Contracting Services`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-md text-[11px] font-bold text-[#0d3356] border border-[#e2ecf4] uppercase tracking-wider shadow-sm">
                    {service.category}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#307ab4] mb-1">
                    <span>0{idx + 1}</span>
                    <span>•</span>
                    <span className="truncate">{service.tagline}</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#132537] tracking-tight mb-2 group-hover:text-[#307ab4] transition-colors">
                    {service.name}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                    {service.shortDescription}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 pt-3 border-t border-[#eef4fa]">
                    {service.features.slice(0, 2).map((feat, fidx) => (
                      <div key={fidx} className="flex items-center gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#307ab4] flex-shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between gap-3 border-t border-[#eef4fa]">
                <button
                  type="button"
                  id={`learn-more-${service.id}`}
                  onClick={() => onSelectService(service)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0d3356] hover:text-[#307ab4] transition-colors cursor-pointer"
                >
                  <span>Learn More</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  id={`quick-estimate-${service.id}`}
                  onClick={() => onOpenEstimate(service.name)}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#eef5fa] hover:bg-[#0d3356] text-[#0d3356] hover:text-white text-xs font-bold transition-all shadow-2xs cursor-pointer"
                >
                  <span>Get Estimate</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner within Services */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#081d33] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md border border-[#0f2d4a]">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl font-bold">Have a Custom or Specialized Remodeling Project?</h3>
            <p className="text-sm text-slate-300">
              We handle custom architectural requests throughout North Carolina. Contact us to discuss your vision.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onOpenEstimate()}
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#307ab4] hover:bg-[#20669b] text-white text-sm font-bold shadow-md shadow-sky-950/40 transition-all cursor-pointer"
          >
            <span>Request Free Estimate</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
