import React from 'react';
import { Check, ArrowRight, ShieldCheck, HeartHandshake, Eye, Award } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/businessConfig';

interface AboutSectionProps {
  onOpenEstimate: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenEstimate }) => {
  const principles = [
    {
      title: "Personalized Remodeling Solutions",
      description: "We don't believe in one-size-fits-all packages. Every home has its own flow, architecture, and quirks, and we tailor our work to respect your vision and routine."
    },
    {
      title: "Meticulous Attention to Detail",
      description: "From straight grout lines and tight miters to smooth drywall finishes and clean cuts, our focus remains on precision at every stage of construction."
    },
    {
      title: "Quality-Focused Workmanship",
      description: "We build for longevity using proven building practices, solid structural fasteners, moisture barriers, and reputable materials made to endure."
    },
    {
      title: "Serving North Carolina Homeowners",
      description: "We are deeply committed to delivering reliable residential renovation services to homeowners across North Carolina and communities within our service area."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white border-b border-[#e2ecf4] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Side */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#d4e4f2] aspect-[4/5] bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1000&q=80"
                  alt="Craftsmanship and carpentry details during home renovation"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Floating Quality Callout */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white p-5 rounded-xl shadow-xl border border-[#d4e4f2] max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#eef5fa] text-[#307ab4] flex items-center justify-center flex-shrink-0">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#132537]">Homeowner First</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Clear communication and clean, respectful job sites.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content Side */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-xl border border-[#d4e4f2] shadow-xs inline-block">
                <img
                  src={BUSINESS_CONFIG.logoSvgUrl}
                  alt="A&J Remodeling Contracting Services logo"
                  className="h-10 w-auto object-contain"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#eef5fa] border border-[#d4e4f2] text-[#0d3356] text-xs font-bold uppercase tracking-wider shadow-xs">
                <span>Our Philosophy &amp; Standards</span>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#132537] tracking-tight leading-tight">
              About {BUSINESS_CONFIG.companyName}
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              At <strong>{BUSINESS_CONFIG.companyName}</strong>, we are residential remodeling and home renovation contractors dedicated to helping homeowners upgrade and optimize their living environments. We believe remodeling should be an exciting and transparent journey, not an overwhelming ordeal.
            </p>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Our residential services span kitchen and bathroom renovations, whole-home updates, room additions, flooring, painting, drywall, and custom millwork. By listening closely to your ideas, maintaining transparent scopes of work, and respecting your family’s home, we deliver transformations you will enjoy for years to come.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {principles.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#f8fbfe] border border-[#e2ecf4]">
                  <div className="flex items-center gap-2 text-[#307ab4] mb-1.5">
                    <Check className="w-4 h-4 stroke-[3]" />
                    <h3 className="text-sm font-bold text-[#132537]">{item.title}</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                type="button"
                onClick={onOpenEstimate}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0d3356] hover:bg-[#154370] text-white font-bold text-sm shadow-sm transition-all cursor-pointer"
              >
                <span>Request a Free Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
