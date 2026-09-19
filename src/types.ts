export interface BusinessConfig {
  companyName: string;
  phone: string;
  phoneRaw: string;
  email: string;
  logoUrl: string;
  logoSvgUrl: string;
  addressNotice: string;
  address: string;
  city: string;
  state: string;
  stateCode: string;
  zip: string;
  country: string;
  serviceRadiusKm: number;
  serviceAreaDescription: string;
  businessHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  socialLinks: {
    facebook: string;
    instagram: string;
    googleBusiness: string;
  };
}

export interface RemodelingService {
  id: string;
  name: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  imageUrl: string;
  category: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Kitchens' | 'Bathrooms' | 'Living Areas' | 'Additions' | 'Flooring' | 'Interiors' | 'Exteriors' | 'Before & After';
  location: string;
  projectType: string;
  description: string;
  imageUrl: string;
  aspect?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface EstimateFormData {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  projectType: string;
  estimatedBudget: string;
  preferredContact: 'phone' | 'text' | 'email';
  projectDetails: string;
  photos: File[];
}
