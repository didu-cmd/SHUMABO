export interface ProductSpecification {
  category: 'Coffee' | 'Sesame' | 'Grains' | 'Commodities';
  id: string;
  name: string;
  botanicalName?: string;
  gradeTier: string;
  tagline: string;
  description: string;
  image: string;
  originRegions: string[];
  altitude?: string;
  flavorOrProfile?: string;
  harvestSeason?: string;
  keySpecs: { label: string; value: string }[];
  packagingOptions: string[];
  minOrderQuantity: string;
  containerLoad20ft?: string;
  commercialNotes: string;
}

export interface InquiryFormData {
  fullName: string;
  businessEmail: string;
  companyName: string;
  businessCountry: string;
  productOfInterest: string;
  estimatedQuantity: string;
  quantityUnit: string;
  otherUnit?: string;
  destinationCountry: string;
  message: string;
  phoneWhatsapp?: string;
  jobTitle?: string;
  specificationDetails?: string;
  packagingPreference?: string;
  purchasingTimeline?: string;
  deliveryTerms?: string;
}

export interface InquiryRecord extends InquiryFormData {
  id: string;
  referenceCode: string;
  createdAt: string;
  status: 'New' | 'Reviewing' | 'Quoted' | 'Negotiating' | 'Won' | 'Closed';
  internalNotes?: string;
}

export type PageRoute = 'home' | 'about' | 'products' | 'services' | 'export' | 'contact' | 'admin';
