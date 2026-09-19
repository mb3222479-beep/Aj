import { BusinessConfig, RemodelingService, ProjectItem, FaqItem } from '../types';

export const BUSINESS_CONFIG: BusinessConfig = {
  companyName: "A&J Remodeling Contracting Services",
  phone: "+1 919-591-8157",
  phoneRaw: "+19195918157",
  email: "[EMAIL TO BE ADDED]", // Easily update this with your company email address
  logoUrl: "/assets/images/aj-remodeling-logo.png",
  logoSvgUrl: "/assets/images/aj-remodeling-logo.svg",
  addressNotice: "Exact street address will be updated soon.",
  address: "[ADDRESS TO BE ADDED]", // Update with your physical office or shop address
  city: "[CITY TO BE ADDED]",
  state: "North Carolina",
  stateCode: "NC",
  zip: "[ZIP TO BE ADDED]",
  country: "USA",
  serviceRadiusKm: 60,
  serviceAreaDescription: "North Carolina and surrounding areas within approximately 60 km of the company's primary service area.",
  businessHours: {
    weekdays: "Monday – Friday: 8:00 AM – 6:00 PM",
    saturday: "Saturday: 9:00 AM – 3:00 PM",
    sunday: "Sunday: Closed",
  },
  socialLinks: {
    facebook: "", // Add link when available (e.g., https://facebook.com/ajremodeling)
    instagram: "", // Add link when available (e.g., https://instagram.com/ajremodeling)
    googleBusiness: "", // Add link when available
  },
};

export const SERVICES_LIST: RemodelingService[] = [
  {
    id: "kitchen-remodeling",
    name: "Kitchen Remodeling",
    tagline: "Custom layouts, cabinetry, islands & modern surfaces",
    shortDescription: "Complete kitchen transformations from custom cabinetry and countertops to open-concept reconfiguration and premium finishes.",
    fullDescription: "The kitchen is the heart of your home. A&J Remodeling Contracting Services works with North Carolina homeowners to transform cramped or outdated kitchens into spacious, highly functional spaces designed for modern living and cooking.",
    features: [
      "Custom & semi-custom cabinet installation",
      "Granite, quartz & solid surface countertops",
      "Kitchen island design & open layout conversions",
      "Tile backsplashes & undermount task lighting",
      "Fixture upgrades, sinks & plumbing rough-ins"
    ],
    imageUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    category: "Interior"
  },
  {
    id: "bathroom-remodeling",
    name: "Bathroom Remodeling",
    tagline: "Spa-like retreats, walk-in showers & modern vanities",
    shortDescription: "Full bathroom renovations including custom tile work, walk-in showers, vanity upgrades, and space optimization.",
    fullDescription: "From primary en-suite sanctuaries to refreshed powder rooms, we upgrade worn materials, modernize plumbing, and install elegant tile to create clean, durable, and relaxing bathrooms.",
    features: [
      "Custom tile walk-in showers with frameless glass",
      "Single & double vanity installations with quartz tops",
      "Soaking tub installations & tub-to-shower conversions",
      "Waterproofing systems & designer floor tile",
      "Ventilation, modern lighting & water-saving fixtures"
    ],
    imageUrl: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80",
    category: "Interior"
  },
  {
    id: "whole-home-remodeling",
    name: "Whole Home Remodeling",
    tagline: "Comprehensive whole-property transformations",
    shortDescription: "Complete interior and structural renovations to revitalize every corner of your home with cohesive styling.",
    fullDescription: "Whether you recently purchased an older North Carolina home or need to modernize an existing residence for your growing needs, our whole-home renovation services handle every step with dedicated project coordination.",
    features: [
      "Wall removal & open floor plan reconfigurations",
      "Cohesive material palettes & unified flooring throughout",
      "Electrical, plumbing & HVAC coordination",
      "Interior trim, casing, baseboards & architectural details",
      "Turnkey scheduling from demolition to final walkthrough"
    ],
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    category: "Whole Home"
  },
  {
    id: "home-additions",
    name: "Home Additions",
    tagline: "Expand your square footage with seamless additions",
    shortDescription: "Seamless room expansions, second-story bump-outs, and dedicated suite additions designed to match your existing structure.",
    fullDescription: "Need more room to grow without the hassle of moving? We build durable, code-compliant room additions that blend naturally with your home's existing roofline, siding, and architectural design.",
    features: [
      "Primary suite & bedroom additions",
      "Expanded family rooms & four-season sunrooms",
      "Seamless roof integration & matching exterior siding",
      "Structural framing, foundation work & insulation",
      "Complete interior finishing & HVAC tie-ins"
    ],
    imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    category: "Structural"
  },
  {
    id: "basement-remodeling",
    name: "Basement Remodeling",
    tagline: "Turn unused lower-level square footage into living space",
    shortDescription: "Transform dark, unused basements into entertainment lounges, guest quarters, home offices, or rec rooms.",
    fullDescription: "Unlock valuable square footage right under your feet. We handle proper moisture barriers, insulation, drywall, lighting, and custom layouts to create comfortable, dry, and welcoming lower-level spaces.",
    features: [
      "Moisture-conscious insulation & subfloor systems",
      "Home theater & entertainment living spaces",
      "Guest bedrooms & dedicated lower-level bathrooms",
      "Recessed LED pot lighting & acoustic drywall",
      "Wet bars, storage solutions & fitness rooms"
    ],
    imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    category: "Interior"
  },
  {
    id: "flooring",
    name: "Flooring",
    tagline: "Hardwood, luxury vinyl plank, tile & laminate",
    shortDescription: "Precision installation of hardwood, luxury vinyl plank (LVP), porcelain tile, and durable contemporary flooring surfaces.",
    fullDescription: "Flooring establishes the foundation of your home's atmosphere. We install high-performance materials suited for active households, pets, and moisture-prone areas with meticulous leveling and transitions.",
    features: [
      "Solid & engineered hardwood installations",
      "Waterproof Luxury Vinyl Plank (LVP) & tile",
      "Large-format porcelain & natural stone tiling",
      "Subfloor repair, leveling & noise underlayment",
      "Flush transition strips & stair tread retrofits"
    ],
    imageUrl: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1200&q=80",
    category: "Finishes"
  },
  {
    id: "interior-remodeling",
    name: "Interior Remodeling",
    tagline: "Custom layouts, structural framing & space optimization",
    shortDescription: "Revitalize entryways, dining rooms, hallways, and living spaces with modern flow, lighting, and finishes.",
    fullDescription: "Make every square foot of your home purposeful. From removing non-load-bearing partitions to creating architectural accent walls, we modernize interior spaces for comfort and functionality.",
    features: [
      "Open-concept reconfigurations",
      "Accent walls, shiplap & custom paneling",
      "Staircase upgrades & railing replacements",
      "Recessed lighting layouts & electrical updates",
      "Closet organizational build-outs"
    ],
    imageUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    category: "Interior"
  },
  {
    id: "exterior-remodeling",
    name: "Exterior Remodeling",
    tagline: "Boost curb appeal, weather resistance & outdoor living",
    shortDescription: "Exterior transformations including porch upgrades, siding renewal, trim work, entry doors, and deck improvements.",
    fullDescription: "Protect your investment against North Carolina weather while elevating curb appeal. We remodel facades, porticos, exterior trim, and outdoor areas with durable, low-maintenance materials.",
    features: [
      "Covered porches, porticos & front entryway overhauls",
      "Fiber cement, composite & vinyl siding updates",
      "Durable exterior trim & fascia replacement",
      "Exterior door replacements & weather sealing",
      "Patio & deck remodeling"
    ],
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    category: "Exterior"
  },
  {
    id: "painting-drywall",
    name: "Painting & Drywall",
    tagline: "Flawless wall prep, smooth taping & crisp brushwork",
    shortDescription: "Professional sheetrock hanging, seamless taping, texture matching, and premium interior and exterior painting.",
    fullDescription: "A great remodeling project depends on a flawless finish. Our drywall and painting services ensure crisp corners, smooth transitions, and durable color application that stands the test of time.",
    features: [
      "New drywall installation & Level 4/5 smooth finishing",
      "Drywall patching, water damage repair & texture blending",
      "Comprehensive interior wall, ceiling & trim painting",
      "Zero-VOC & low-odor premium paint options",
      "Meticulous surface sanding, caulking & tape lines"
    ],
    imageUrl: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=80",
    category: "Finishes"
  },
  {
    id: "carpentry",
    name: "Carpentry",
    tagline: "Finish carpentry, custom mantels, trim & built-ins",
    shortDescription: "Custom architectural millwork, crown molding, built-in shelving, decorative beams, and structural framing.",
    fullDescription: "Elevate your interior with custom woodwork. Our carpentry solutions provide tailored architectural character, from timeless coffered ceilings to bespoke fireplace mantels and storage benches.",
    features: [
      "Crown molding, baseboard & decorative casing",
      "Custom fireplace mantels & floating hearths",
      "Built-in bookcases, mudroom drop zones & benches",
      "Wainscoting, board & batten, and wall paneling",
      "Interior door hanging & hardware installation"
    ],
    imageUrl: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1200&q=80",
    category: "Craftsmanship"
  },
  {
    id: "room-renovations",
    name: "Room Renovations",
    tagline: "Dedicated bedrooms, home offices, nurseries & studios",
    shortDescription: "Focused single-room transformations to convert underutilized rooms into productive and inviting living spaces.",
    fullDescription: "Whether you need a sound-dampened remote work office, an updated nursery, or a refreshed guest suite, we optimize individual rooms with tailored electrical, lighting, and finishes.",
    features: [
      "Dedicated home office builds with custom storage",
      "Primary bedroom suite renovations",
      "Acoustic insulation & sound isolation techniques",
      "Custom closet conversions & organizers",
      "Modern lighting controls & USB charging outlets"
    ],
    imageUrl: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80",
    category: "Interior"
  },
  {
    id: "custom-remodeling",
    name: "Custom Remodeling",
    tagline: "Tailored architectural projects to fit your exact vision",
    shortDescription: "Specialized residential projects customized to your family's unique lifestyle, architectural preferences, and space demands.",
    fullDescription: "Have a distinctive idea that doesn't fit standard remodeling packages? We collaborate directly with you to turn custom residential sketches and ideas into sturdy, well-engineered reality.",
    features: [
      "Bespoke home layout modifications",
      "Specialty storage & architectural niche builds",
      "Multi-purpose flexible living spaces",
      "Accessibility & aging-in-place remodeling adaptations",
      "Material sourcing & custom finish coordination"
    ],
    imageUrl: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    category: "Custom"
  }
];

export const GALLERY_PROJECTS: ProjectItem[] = [
  {
    id: "project-1",
    title: "Modern Open-Concept Kitchen Overhaul",
    category: "Kitchens",
    location: "North Carolina",
    projectType: "Full Kitchen Remodel",
    description: "Replaced compartmentalized cabinets with bright shaker cabinetry, quartz waterfall island, subway tile, and modern pendant lighting.",
    imageUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "project-2",
    title: "Luxury Primary En-Suite Walk-In Shower",
    category: "Bathrooms",
    location: "North Carolina",
    projectType: "Master Bathroom Renovation",
    description: "Converted outdated tub/shower combo into a curbless glass enclosure with herringbone porcelain tile, matte black fixtures, and double vanity.",
    imageUrl: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "project-3",
    title: "Cohesive Living Room & Hearth Modernization",
    category: "Living Areas",
    location: "North Carolina",
    projectType: "Interior Living Renovation",
    description: "Engineered hardwood flooring installation, custom floor-to-ceiling fireplace mantel, recessed LED lighting, and fresh warm neutral palette.",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "project-4",
    title: "Light-Filled Sunroom & Family Addition",
    category: "Additions",
    location: "North Carolina",
    projectType: "Home Addition Expansion",
    description: "Built a 350-sq-ft four-season room addition featuring vaulted wood-beam ceilings, insulated low-E windows, and seamless exterior siding integration.",
    imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "project-5",
    title: "Wide-Plank European Oak Flooring Throughout",
    category: "Flooring",
    location: "North Carolina",
    projectType: "Whole-Floor Hardwood Installation",
    description: "Removed mixed worn carpeting and vinyl, prepped and leveled subfloors, and installed uniform wide-plank hardwood with flush transitions.",
    imageUrl: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "project-6",
    title: "Craftsman Dining & Foyer Millwork",
    category: "Interiors",
    location: "North Carolina",
    projectType: "Interior Carpentry & Finish",
    description: "Custom board-and-batten wainscoting, crown molding installation, and tailored interior door trim for classic Southern charm.",
    imageUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "project-7",
    title: "Welcoming Covered Front Porch Renovation",
    category: "Exteriors",
    location: "North Carolina",
    projectType: "Exterior Renovation",
    description: "Structural porch rebuild with composite decking, beadboard ceiling, painted square columns, and craftsman front entryway door.",
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "project-8",
    title: "Complete Kitchen Transformation (Before & After)",
    category: "Before & After",
    location: "North Carolina",
    projectType: "Space Reconfiguration",
    description: "Replaced 1990s dark oak cabinetry and laminate counters with expansive center island, custom cabinets, and open flow into the dining area.",
    imageUrl: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "project-9",
    title: "Finished Lower-Level Entertainment Lounge",
    category: "Living Areas",
    location: "North Carolina",
    projectType: "Basement Transformation",
    description: "Converted unfinished concrete basement into a temperature-controlled recreation lounge with luxury vinyl flooring and wet bar.",
    imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
  }
];

export const FAQ_LIST: FaqItem[] = [
  {
    id: "faq-1",
    question: "What remodeling services does A&J Remodeling Contracting Services provide?",
    answer: "A&J Remodeling Contracting Services provides comprehensive residential remodeling and home renovation solutions throughout North Carolina. Our services include kitchen remodeling, bathroom remodeling, whole-home renovations, home additions, basement remodeling, flooring installation, interior and exterior remodeling, painting and drywall, custom carpentry, and room renovations."
  },
  {
    id: "faq-2",
    question: "What areas do you serve?",
    answer: "We proudly serve homeowners in North Carolina and surrounding communities within approximately 60 kilometers of our primary service area. If you are unsure whether your property falls within our service radius, please contact us at +1 919-591-8157."
  },
  {
    id: "faq-3",
    question: "Do you offer free estimates?",
    answer: "Yes, we provide free, no-obligation estimates for residential remodeling projects. You can request an estimate online through our form or call us directly at +1 919-591-8157 to discuss your project scope."
  },
  {
    id: "faq-4",
    question: "How do I request a remodeling estimate?",
    answer: "Requesting an estimate is simple. Either fill out the 'Request Your Free Remodeling Estimate' form on this website—where you can select your project type, budget range, and upload project photos—or call us at +1 919-591-8157 to speak with our team directly."
  },
  {
    id: "faq-5",
    question: "How long does a remodeling project take?",
    answer: "Project duration varies depending on the scope and complexity of the work, material lead times, and structural considerations. Single-room updates like a bathroom remodel take less time than large-scale additions or whole-home renovations. During our initial consultation and planning phase, we discuss a realistic timeline tailored to your specific project."
  },
  {
    id: "faq-6",
    question: "How much does home remodeling cost?",
    answer: "Remodeling costs depend on factors such as square footage, current space condition, material selections (e.g., custom cabinetry versus prefabricated, tile choices, and fixtures), and any plumbing or structural modifications needed. We work with you to understand your budget expectations and provide clear, transparent project estimates."
  },
  {
    id: "faq-7",
    question: "Can I send photos of my project?",
    answer: "Yes, absolutely! Our online estimate form includes a dedicated photo upload section where you can attach photos of your current space, architectural sketches, or inspiration pictures. This helps us better understand your goals prior to our consultation."
  },
  {
    id: "faq-8",
    question: "Do you handle kitchen and bathroom remodeling?",
    answer: "Yes. Kitchen and bathroom remodeling are among our most requested residential services. We handle everything from layout redesign, cabinetry, and countertops to custom tile showers, lighting, and plumbing fixtures."
  },
  {
    id: "faq-9",
    question: "Do you work on whole-home renovations?",
    answer: "Yes. We manage whole-home remodeling projects for homeowners who wish to modernize an entire residence, open up floor plans, install cohesive flooring throughout, or update multiple living areas in a structured, phased process."
  },
  {
    id: "faq-10",
    question: "How can I contact A&J Remodeling Contracting Services?",
    answer: "You can reach us by phone at +1 919-591-8157, by submitting our online contact or free estimate forms, or by scheduling an in-person consultation for your home in North Carolina."
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Contact Us",
    description: "Reach out via our online estimate form or call +1 919-591-8157 to share the basics of your home remodeling ideas and space."
  },
  {
    step: "02",
    title: "Discuss Your Project",
    description: "We review your goals, examine your existing layout, discuss your functional preferences, and review your desired timeline and budget."
  },
  {
    step: "03",
    title: "Plan & Estimate",
    description: "Receive a clear, transparent remodeling estimate detailing the scope of work, material recommendations, and realistic project milestones."
  },
  {
    step: "04",
    title: "Transform Your Space",
    description: "Our craftsmen execute the work with clean job-site practices, continuous communication, and focused attention to detail until final walkthrough."
  }
];

export const WHY_CHOOSE_REASONS = [
  {
    title: "Personalized Remodeling Solutions",
    description: "Every home and family is unique. We tailor our recommendations and project approach to your specific lifestyle, spatial needs, and design tastes."
  },
  {
    title: "Attention to Detail",
    description: "From precise tile alignment and seamless drywall joints to flush trim lines, quality craftsmanship is defined by the fine details."
  },
  {
    title: "Clear Communication",
    description: "You are kept informed at every stage. We communicate promptly regarding schedules, decisions, and project milestones."
  },
  {
    title: "Quality-Focused Workmanship",
    description: "We prioritize solid building practices, durable materials, and proper installation techniques built to last in North Carolina homes."
  },
  {
    title: "Professional Project Planning",
    description: "Careful preparation before demolition minimizes surprises and ensures a smooth, organized renovation experience from start to finish."
  },
  {
    title: "Wide Range of Remodeling Services",
    description: "From single-room updates to whole-home overhauls, additions, and custom carpentry, we handle your project under one unified team."
  },
  {
    title: "Local Service in North Carolina",
    description: "As a local contractor serving North Carolina and communities within ~60 km, we understand regional home styles and building requirements."
  }
];
