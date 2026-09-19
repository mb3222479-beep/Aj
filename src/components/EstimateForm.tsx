import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  Upload, 
  X, 
  FileText, 
  Phone, 
  Mail, 
  MapPin, 
  AlertCircle, 
  ArrowRight,
  Info
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/businessConfig';

interface EstimateFormProps {
  initialService?: string;
  isModal?: boolean;
  onClose?: () => void;
}

export const EstimateForm: React.FC<EstimateFormProps> = ({ 
  initialService = '', 
  isModal = false,
  onClose 
}) => {
  useEffect(() => {
    if (!isModal) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && onClose) onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isModal, onClose]);

  const idPrefix = isModal ? 'est-modal-' : 'est-inline-';

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: '',
    projectType: initialService || 'Kitchen Remodeling',
    estimatedBudget: '$10,000 - $25,000',
    preferredContact: 'phone',
    projectDetails: '',
  });

  const [photos, setPhotos] = useState<File[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const projectTypes = [
    'Kitchen Remodeling',
    'Bathroom Remodeling',
    'Whole Home Remodeling',
    'Home Addition',
    'Basement Remodeling',
    'Flooring',
    'Interior Remodeling',
    'Exterior Remodeling',
    'Painting / Drywall',
    'Carpentry',
    'Other'
  ];

  const budgetOptions = [
    'Under $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000+',
    'Need Consultation to Determine'
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.city.trim()) {
      newErrors.city = 'City in North Carolina is required';
    }
    if (!formData.projectType) {
      newErrors.projectType = 'Please select a project type';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      setPhotos(prev => [...prev, ...newFiles].slice(0, 5)); // Cap at 5 photos
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const newFiles = Array.from(e.dataTransfer.files);
      setPhotos(prev => [...prev, ...newFiles].slice(0, 5));
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const removePhoto = (index: number) => {
    setPhotos(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable front-end submission processing
    // NOTE: Ready to connect to email/backend service (e.g. EmailJS, Resend, Formspree, CRM)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      city: '',
      projectType: initialService || 'Kitchen Remodeling',
      estimatedBudget: '$10,000 - $25,000',
      preferredContact: 'phone',
      projectDetails: '',
    });
    setPhotos([]);
    setErrors({});
    setIsSuccess(false);
  };

  const formContent = (
    <div className="bg-white rounded-2xl border border-[#e2ecf4] shadow-xl p-6 sm:p-10 relative">
      {isModal && onClose && (
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
          aria-label="Close estimate form"
        >
          <X className="w-5 h-5" />
        </button>
      )}

      {/* Headline & intro */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-white p-1.5 rounded-lg border border-[#d4e4f2] shadow-xs inline-block">
            <img
              src={BUSINESS_CONFIG.logoSvgUrl}
              alt="A&J Remodeling Contracting Services logo"
              className="h-10 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#eef5fa] border border-[#d4e4f2] text-[#0d3356] text-xs font-bold uppercase tracking-wider shadow-xs">
            <span>Complimentary Consultation</span>
          </div>
        </div>
        <h2 id="estimate-form-heading" className="text-2xl sm:text-3xl font-extrabold text-[#132537] tracking-tight">
          Request Your Free Remodeling Estimate
        </h2>
        <p className="text-sm text-slate-600 mt-2 leading-relaxed">
          Tell us about your project in North Carolina. We will review your goals and get in touch to discuss ideas, scheduling, and estimates.
        </p>
      </div>

      {isSuccess ? (
        <div 
          id="estimate-success-state"
          className="py-12 px-6 text-center rounded-xl bg-emerald-50/80 border border-emerald-200 animate-fadeIn"
        >
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-bold text-emerald-950 mb-2">Thank you!</h3>
          <p className="text-base text-emerald-900 max-w-lg mx-auto font-medium leading-relaxed">
            Your estimate request has been received. {BUSINESS_CONFIG.companyName} will contact you soon.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0d3356] hover:bg-[#154370] text-white font-bold text-sm shadow-sm transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Need immediate assistance? Call {BUSINESS_CONFIG.phone}</span>
            </a>
            <button
              type="button"
              onClick={resetForm}
              className="px-5 py-3 rounded-lg border border-emerald-300 text-emerald-900 font-semibold text-sm hover:bg-emerald-100/50"
            >
              Submit Another Request
            </button>
          </div>

          {/* Form Connection Documentation Reminder */}
          <div className="mt-8 pt-4 border-t border-emerald-200/60 text-xs text-emerald-800 text-left">
            <p className="font-semibold">Backend Integration Note:</p>
            <p className="text-emerald-700 mt-0.5">
              This form is structured and ready for your preferred service (EmailJS, Formspree, Resend, or your CRM webhook). Form payloads are validated and captured cleanly in client state.
            </p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Full Name */}
            <div>
              <label htmlFor={`${idPrefix}fullName`} className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id={`${idPrefix}fullName`}
                name="fullName"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="John Doe"
                aria-required="true"
                aria-invalid={Boolean(errors.fullName)}
                aria-describedby={errors.fullName ? `${idPrefix}fullName-error` : undefined}
                className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                  errors.fullName ? 'border-red-400 bg-red-50/30 focus:border-red-500' : 'border-slate-300 focus:border-[#307ab4]'
                }`}
              />
              {errors.fullName && (
                <p id={`${idPrefix}fullName-error`} role="alert" className="text-xs text-red-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.fullName}
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor={`${idPrefix}phone`} className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id={`${idPrefix}phone`}
                name="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="(919) 555-0123"
                aria-required="true"
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? `${idPrefix}phone-error` : undefined}
                className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                  errors.phone ? 'border-red-400 bg-red-50/30 focus:border-red-500' : 'border-slate-300 focus:border-[#307ab4]'
                }`}
              />
              {errors.phone && (
                <p id={`${idPrefix}phone-error`} role="alert" className="text-xs text-red-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.phone}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Email Address */}
            <div>
              <label htmlFor={`${idPrefix}email`} className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id={`${idPrefix}email`}
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="john@example.com"
                aria-required="true"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? `${idPrefix}email-error` : undefined}
                className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                  errors.email ? 'border-red-400 bg-red-50/30 focus:border-red-500' : 'border-slate-300 focus:border-[#307ab4]'
                }`}
              />
              {errors.email && (
                <p id={`${idPrefix}email-error`} role="alert" className="text-xs text-red-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.email}
                </p>
              )}
            </div>

            {/* City */}
            <div>
              <label htmlFor={`${idPrefix}city`} className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                City / Town in NC <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id={`${idPrefix}city`}
                name="city"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                placeholder="e.g. Raleigh, Cary, Durham, etc."
                aria-required="true"
                aria-invalid={Boolean(errors.city)}
                aria-describedby={errors.city ? `${idPrefix}city-error` : undefined}
                className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                  errors.city ? 'border-red-400 bg-red-50/30 focus:border-red-500' : 'border-slate-300 focus:border-[#307ab4]'
                }`}
              />
              {errors.city && (
                <p id={`${idPrefix}city-error`} role="alert" className="text-xs text-red-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.city}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Project Type Dropdown */}
            <div>
              <label htmlFor={`${idPrefix}projectType`} className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Project Type <span className="text-red-500">*</span>
              </label>
              <select
                id={`${idPrefix}projectType`}
                name="projectType"
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm focus:outline-none focus:border-[#307ab4] transition-colors cursor-pointer"
              >
                {projectTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* Estimated Budget */}
            <div>
              <label htmlFor={`${idPrefix}estimatedBudget`} className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Estimated Budget Range
              </label>
              <select
                id={`${idPrefix}estimatedBudget`}
                name="estimatedBudget"
                value={formData.estimatedBudget}
                onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm focus:outline-none focus:border-[#307ab4] transition-colors cursor-pointer"
              >
                {budgetOptions.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Preferred Contact Method */}
          <div role="radiogroup" aria-labelledby={`${idPrefix}contact-method-label`}>
            <label id={`${idPrefix}contact-method-label`} className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Preferred Contact Method
            </label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: 'phone', label: 'Phone Call' },
                { id: 'text', label: 'Text Message' },
                { id: 'email', label: 'Email' }
              ].map(method => (
                <label
                  key={method.id}
                  className={`flex items-center justify-center p-3 rounded-xl border text-xs sm:text-sm font-semibold cursor-pointer transition-all ${
                    formData.preferredContact === method.id
                      ? 'border-[#307ab4] bg-[#eef5fa] text-[#0d3356]'
                      : 'border-slate-200 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  <input
                    type="radio"
                    name={`${idPrefix}preferredContact`}
                    value={method.id}
                    checked={formData.preferredContact === method.id}
                    onChange={() => setFormData({ ...formData, preferredContact: method.id as any })}
                    className="sr-only"
                  />
                  <span>{method.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div>
            <label htmlFor={`${idPrefix}projectDetails`} className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Project Details & Goals
            </label>
            <textarea
              id={`${idPrefix}projectDetails`}
              name="projectDetails"
              rows={4}
              value={formData.projectDetails}
              onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
              placeholder="Tell us about the space, what you want to remodel or change, any special features or timeline..."
              className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#307ab4] transition-colors resize-y"
            ></textarea>
          </div>

          {/* Upload Project Photos (supports drag & drop + file selection) */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Upload Project Photos (Optional)
            </label>
            <div
              onDragEnter={handleDrag}
              onDragOver={handleDrag}
              onDragLeave={handleDrag}
              onDrop={handleDrop}
              className={`p-6 border-2 border-dashed rounded-xl text-center transition-colors ${
                dragActive ? 'border-[#307ab4] bg-[#eef5fa]' : 'border-slate-300 bg-slate-50 hover:bg-slate-100/50'
              }`}
            >
              <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
              <p className="text-xs sm:text-sm text-slate-700 font-medium">
                Drag and drop your photos here, or{' '}
                <label htmlFor={`${idPrefix}photoUpload`} className="text-[#307ab4] font-bold cursor-pointer hover:underline">
                  browse files
                </label>
              </p>
              <p className="text-[11px] text-slate-400 mt-1">
                Accepted image formats (JPG, PNG, WEBP). Up to 5 files.
              </p>
              <input
                type="file"
                id={`${idPrefix}photoUpload`}
                multiple
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>

            {/* Photo Preview List */}
            {photos.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {photos.map((file, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-xs font-medium text-slate-800"
                  >
                    <FileText className="w-3.5 h-3.5 text-[#307ab4]" />
                    <span className="max-w-[150px] truncate">{file.name}</span>
                    <button
                      type="button"
                      onClick={() => removePhoto(idx)}
                      className="text-slate-400 hover:text-red-500 ml-1 cursor-pointer"
                      aria-label={`Remove photo ${file.name}`}
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Submission button */}
          <div className="pt-2">
            <button
              type="submit"
              id={`${idPrefix}submit-estimate-form-btn`}
              disabled={isSubmitting}
              className="w-full py-4 px-6 rounded-xl bg-[#0d3356] hover:bg-[#154370] text-white text-base font-bold shadow-md shadow-[#0d3356]/20 transition-all flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
            >
              {isSubmitting ? (
                <span>Submitting Estimate Request...</span>
              ) : (
                <>
                  <span>Request Free Estimate</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </div>

          <div className="text-center pt-2">
            <p className="text-xs text-slate-500">
              Prefer calling directly? Contact us at{' '}
              <a href={`tel:${BUSINESS_CONFIG.phoneRaw}`} className="text-[#307ab4] font-bold hover:underline">
                {BUSINESS_CONFIG.phone}
              </a>
            </p>
          </div>
        </form>
      )}
    </div>
  );

  if (isModal) {
    return (
      <div 
        className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
        onClick={(e) => {
          if (e.target === e.currentTarget && onClose) onClose();
        }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="estimate-form-heading"
      >
        <div 
          className="max-w-3xl w-full"
          onClick={(e) => e.stopPropagation()}
        >
          {formContent}
        </div>
      </div>
    );
  }

  return (
    <section id="free-estimate" className="py-20 bg-[#f4f8fc] border-b border-[#e2ecf4] scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {formContent}
      </div>
    </section>
  );
};
