export interface NavItem {
  title: string;
  href: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
 	position?: string;
  image?: string;
  rating: number;
  message: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}