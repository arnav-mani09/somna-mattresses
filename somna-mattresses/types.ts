export interface SubMattress {
  name: string;
  discount: number;
  description: string;
  rating: number;
  feel: string[];
  support: number; // percentage
  pressureRelief: number; // percentage
}

export interface MattressCategory {
  id: number;
  name: string;
  fromPrice: number;
  originalPrice: number;
  imageUrl: string;
  imageBadge: string;
  height: number;
  subMattresses: SubMattress[];
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  quote: string;
  rating: number;
}
