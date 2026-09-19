import React, { useEffect } from 'react';
import { X, BookOpen, Code, Image, MapPin, Mail, Star, Server, Globe, Compass, Check } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/businessConfig';

interface SetupGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SetupGuideModal: React.FC<SetupGuideModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;
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
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const guides = [
    {
      id: "replace-images",
      icon: <Image className="w-5 h-5 text-[#307ab4]" />,
      title: "1. How to Replace Images",
      content: `All image URLs are centralized in \`src/data/businessConfig.ts\`. You can easily replace any URL with your real project photographs.
      
• Service Photos: Update the \`imageUrl\` field for each service in the \`SERVICES_LIST\` array.
• Gallery Photos: Update the \`imageUrl\` and descriptions in \`GALLERY_PROJECTS\`.
• Hero Image: Change the background URL in \`src/components/Hero.tsx\`.
• Before/After Comparison: Update \`beforeImage\` and \`afterImage\` in \`src/components/BeforeAfterSlider.tsx\`.

Tip: You can place your own optimized images in the \`/public/\` folder (e.g., \`/public/kitchen-remodel.jpg\`) and reference them directly.`
    },
    {
      id: "business-address",
      icon: <MapPin className="w-5 h-5 text-[#307ab4]" />,
      title: "2. How to Add the Actual Business Address",
      content: `Open \`src/data/businessConfig.ts\` and update the following fields:

\`\`\`ts
address: "123 Main Street, Suite 100", // Your confirmed physical address
city: "Raleigh", // Your city
zip: "27601", // Your postal code
\`\`\`

The website header, service area section, contact section, footer, and Schema.org JSON-LD will update everywhere automatically.`
    },
    {
      id: "business-email",
      icon: <Mail className="w-5 h-5 text-[#307ab4]" />,
      title: "3. How to Add Company Email",
      content: `Open \`src/data/businessConfig.ts\` and set:

\`\`\`ts
email: "contact@ajremodelingnc.com", // Your company email
\`\`\`

Once updated, an email contact link will appear in the contact section and footer.`
    },
    {
      id: "customer-reviews",
      icon: <Star className="w-5 h-5 text-[#307ab4]" />,
      title: "4. How to Add Genuine Customer Reviews",
      content: `In \`src/components/Testimonials.tsx\`, replace the placeholder items in the array with your real client testimonials or verified Google Business reviews:

\`\`\`ts
{
  author: "Sarah M.",
  rating: 5,
  projectType: "Kitchen Remodel",
  location: "Raleigh, NC",
  quote: "A&J Remodeling completely transformed our 1980s kitchen. Punctual, clean, and top-tier craftsmanship."
}
\`\`\``
    },
    {
      id: "form-backend",
      icon: <Server className="w-5 h-5 text-[#307ab4]" />,
      title: "5. How to Connect the Estimate Form to Email / Backend",
      content: `The lead estimate form is located in \`src/components/EstimateForm.tsx\`. It validates all inputs and captures files. To forward submissions directly to your email or CRM:

• Option A: Formspree (Easiest, zero-backend). Change the \`<form>\` action to your Formspree endpoint \`https://formspree.io/f/YOUR_FORM_ID\`.
• Option B: EmailJS (Sends directly to your Gmail/Outlook). Add your EmailJS public key and service ID in \`handleSubmit\`.
• Option C: Webhook / Zapier. Send a \`fetch('/api/estimate', { method: 'POST', body: formData })\` to connect to HubSpot, Jobber, or Google Sheets.`
    },
    {
      id: "deployment",
      icon: <Globe className="w-5 h-5 text-[#307ab4]" />,
      title: "6. How to Deploy the Website",
      content: `This website is built with Vite and React and compiles to a standard, static \`dist/\` folder.

• Deploying to Vercel: Run \`vercel\` in your terminal or link your GitHub repository. Framework: Vite. Build command: \`npm run build\`. Output directory: \`dist\`.
• Deploying to Netlify: Run \`netlify deploy\` or link GitHub. Publish directory: \`dist\`.
• Deploying to Firebase Hosting: Run \`firebase init hosting\`, choose \`dist\` as your public directory, and run \`firebase deploy\`.`
    },
    {
      id: "custom-domain",
      icon: <Code className="w-5 h-5 text-[#307ab4]" />,
      title: "7. How to Connect a Custom Domain",
      content: `1. In your hosting platform (Vercel, Netlify, Cloudflare, or Firebase), go to Project Settings → Domains.
2. Enter your custom domain name (e.g., \`ajremodelingnc.com\`).
3. Add the provided DNS records (usually an A record pointing to host IP or a CNAME pointing to the hosting alias) at your domain registrar (GoDaddy, Namecheap, Google Domains).
4. Wait for SSL certificate provisioning (usually 5–15 minutes).`
    },
    {
      id: "service-areas",
      icon: <Compass className="w-5 h-5 text-[#307ab4]" />,
      title: "8. How to Update Service Areas",
      content: `Open \`src/data/businessConfig.ts\` to adjust your service radius or add specific towns:

\`\`\`ts
serviceRadiusKm: 60, // Change radius
serviceAreaDescription: "North Carolina and surrounding areas within approximately 60 km of the company's primary service area."
\`\`\`

You can also list specific North Carolina municipalities or counties in the \`Additional Service Areas\` array.`
    }
  ];

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="setup-guide-heading"
    >
      <div 
        className="relative bg-white rounded-2xl max-w-4xl w-full shadow-2xl border border-slate-200 overflow-hidden transform transition-all max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b border-[#132d48] bg-[#0d3356] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#307ab4] flex items-center justify-center text-white">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 id="setup-guide-heading" className="text-xl font-bold">
                Owner Setup & Customization Guide
              </h3>
              <p className="text-xs text-slate-300">
                A&J Remodeling Contracting Services — Step-by-step instructions
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close guide"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-slate-700">
          <div className="bg-[#f8fbfe] border border-[#d4e4f2] rounded-xl p-4 text-xs text-[#0d3356]">
            <strong>Central Configuration:</strong> All primary business information (company name, phone number, address status, services, gallery projects, and FAQs) lives in <code className="bg-white px-1.5 py-0.5 rounded border border-[#d4e4f2] font-mono text-[#0d3356]">src/data/businessConfig.ts</code>.
          </div>

          <div className="space-y-6">
            {guides.map((item) => (
              <div key={item.id} className="p-5 rounded-xl border border-[#e2ecf4] bg-[#f8fbfe]">
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="w-7 h-7 rounded-md bg-white border border-[#d4e4f2] flex items-center justify-center shadow-xs">
                    {item.icon}
                  </div>
                  <h4 className="text-base font-bold text-[#132537]">{item.title}</h4>
                </div>
                <div className="text-xs sm:text-sm text-slate-600 whitespace-pre-line leading-relaxed font-sans">
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 bg-[#f4f8fc] border-t border-[#e2ecf4] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-lg bg-[#0d3356] hover:bg-[#154370] text-white font-bold text-sm shadow-xs transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
