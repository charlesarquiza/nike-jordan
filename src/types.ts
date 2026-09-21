export interface AnatomyHotspot {
  id: string;
  title: string;
  description: string;
  position: { x: number; y: number }; // percentage coordinates
  layerIndex: number;
}

export interface ShoeSpecification {
  label: string;
  sublabel: string;
  detail: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  tag: string;
}

export interface ShoeSizeStock {
  usSize: string;
  ukSize: string;
  euSize: string;
  cm: string;
  available: boolean;
  stockCount: number;
}

export interface InquiryFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  size: string;
  deliveryOption: 'standard' | 'express_concierge';
  message: string;
  agreePrivacy: boolean;
}
