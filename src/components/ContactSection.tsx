import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Compass, 
  Clock, 
  Mail, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Building2,
  ExternalLink,
  Info
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/businessConfig';

interface ContactSectionProps {
  onOpenEstimate: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenEstimate }) => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formState.name.trim()) errs.name = 'Please provide your name';
    if (!formState.phone.trim()) errs.phone = 'Please provide your phone number';
    if (!formState.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      errs.email = 'Please enter a valid email';
    }
    if (!formState.message.trim()) errs.message = 'Please provide a brief message';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  return (
    <section id="contact" className="py-20 bg-[#f4f8fc] border-b border-[#e2ecf4] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-[#d4e4f2] text-[#0d3356] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#132537] tracking-tight mb-4">
            Contact A&J Remodeling Contracting Services
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Reach out by phone, send a message through our form, or request a free project estimate. We look forward to discussing your North Carolina renovation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Business Information Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#e2ecf4] shadow-xs space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#132537] tracking-tight mb-1">
                  {BUSINESS_CONFIG.companyName}
                </h3>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Residential Remodeling Contractor
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#eef4fa]">
                <div className="w-10 h-10 rounded-xl bg-[#eef5fa] text-[#307ab4] border border-[#d4e4f2] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase text-slate-400 block mb-0.5">Direct Phone</span>
                  <a
                    href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                    id="contact-phone-direct-link"
                    className="text-lg font-bold text-[#132537] hover:text-[#307ab4] transition-colors"
                  >
                    {BUSINESS_CONFIG.phone}
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">Click to call directly from your phone</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#eef4fa]">
                <div className="w-10 h-10 rounded-xl bg-[#eef5fa] text-[#307ab4] border border-[#d4e4f2] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase text-slate-400 block mb-0.5">Location</span>
                  <span className="text-sm font-bold text-[#132537] block">
                    {BUSINESS_CONFIG.state}, {BUSINESS_CONFIG.country}
                  </span>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Physical street address: <span className="font-semibold text-slate-700">Address will be added</span>
                  </p>
                </div>
              </div>

              {/* Service Area */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#eef4fa]">
                <div className="w-10 h-10 rounded-xl bg-[#eef5fa] text-[#307ab4] border border-[#d4e4f2] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase text-slate-400 block mb-0.5">Service Area</span>
                  <p className="text-sm font-semibold text-[#132537]">
                    {BUSINESS_CONFIG.serviceAreaDescription}
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#eef4fa]">
                <div className="w-10 h-10 rounded-xl bg-[#eef5fa] text-[#307ab4] border border-[#d4e4f2] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase text-slate-400 block mb-1">Hours of Operation</span>
                  <div className="space-y-1 text-xs text-slate-600">
                    <p>{BUSINESS_CONFIG.businessHours.weekdays}</p>
                    <p>{BUSINESS_CONFIG.businessHours.saturday}</p>
                    <p>{BUSINESS_CONFIG.businessHours.sunday}</p>
                  </div>
                </div>
              </div>

              {/* Call to action card */}
              <div className="pt-4 border-t border-[#eef4fa]">
                <button
                  type="button"
                  onClick={onOpenEstimate}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#0d3356] hover:bg-[#154370] text-white text-sm font-bold shadow-sm transition-all"
                >
                  Request a Free Estimate Online
                </button>
              </div>
            </div>

            {/* Google Maps Placeholder Card */}
            <div className="bg-white p-6 rounded-2xl border border-[#e2ecf4] shadow-xs overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#307ab4]" />
                  <h4 className="text-sm font-bold text-[#132537]">Map & Coverage Area</h4>
                </div>
                <span className="text-[11px] font-semibold text-[#0d3356] bg-[#eef5fa] border border-[#d4e4f2] px-2 py-0.5 rounded uppercase tracking-wider">
                  North Carolina
                </span>
              </div>

              {/* Clean Map Placeholder Graphic */}
              <div className="relative h-44 rounded-xl overflow-hidden bg-[#f8fbfe] border border-[#e2ecf4] flex flex-col items-center justify-center p-4 text-center">
                <div className="w-10 h-10 rounded-full bg-white shadow-xs border border-[#d4e4f2] flex items-center justify-center text-[#307ab4] mb-2">
                  <MapPin className="w-5 h-5" />
                </div>
                <p className="text-xs font-bold text-[#132537]">
                  Google Maps Location Placeholder
                </p>
                <p className="text-[11px] text-slate-500 mt-1 max-w-xs">
                  An interactive Google Maps embed will be activated here once the physical street address is finalized.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-10 rounded-2xl border border-[#e2ecf4] shadow-xs">
              <div className="mb-6">
                <span className="text-xs font-bold text-[#307ab4] uppercase tracking-wider block mb-1">
                  Send a Message
                </span>
                <h3 className="text-2xl font-bold text-[#132537]">
                  How Can We Help You?
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Submit your inquiry and we will get back to you promptly.
                </p>
              </div>

              {submitted ? (
                <div className="py-10 px-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center animate-fadeIn">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                  <h4 className="text-xl font-bold text-emerald-950 mb-1">Message Received!</h4>
                  <p className="text-sm text-emerald-800 font-medium">
                    Thank you for reaching out to {BUSINESS_CONFIG.companyName}. We will respond to your inquiry shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: '', phone: '', email: '', message: '' });
                    }}
                    className="mt-6 px-4 py-2 rounded-lg bg-[#0d3356] text-white text-xs font-bold"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Jane Smith"
                      aria-required="true"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'contact-name-error' : undefined}
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                        errors.name ? 'border-red-400 bg-red-50/30' : 'border-slate-300 focus:border-[#307ab4]'
                      }`}
                    />
                    {errors.name && (
                      <p id="contact-name-error" role="alert" className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="contact-phone"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="+1 919-591-8157"
                        aria-required="true"
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={errors.phone ? 'contact-phone-error' : undefined}
                        className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                          errors.phone ? 'border-red-400 bg-red-50/30' : 'border-slate-300 focus:border-[#307ab4]'
                        }`}
                      />
                      {errors.phone && (
                        <p id="contact-phone-error" role="alert" className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="jane@example.com"
                        aria-required="true"
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? 'contact-email-error' : undefined}
                        className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                          errors.email ? 'border-red-400 bg-red-50/30' : 'border-slate-300 focus:border-[#307ab4]'
                        }`}
                      />
                      {errors.email && (
                        <p id="contact-email-error" role="alert" className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Tell us about your home and remodeling questions..."
                      aria-required="true"
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'contact-message-error' : undefined}
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors resize-y ${
                        errors.message ? 'border-red-400 bg-red-50/30' : 'border-slate-300 focus:border-[#307ab4]'
                      }`}
                    ></textarea>
                    {errors.message && (
                      <p id="contact-message-error" role="alert" className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    id="submit-contact-form-btn"
                    disabled={loading}
                    className="w-full py-3.5 px-6 rounded-xl bg-[#0d3356] hover:bg-[#154370] text-white text-sm font-bold shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {loading ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#4ea5dc]" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <div className="pt-2 text-center text-xs text-slate-500">
                    Looking for a comprehensive quote? Use our{' '}
                    <button
                      type="button"
                      onClick={onOpenEstimate}
                      className="text-[#307ab4] font-bold hover:underline cursor-pointer"
                    >
                      Detailed Estimate Request Form
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
