import { LucideIcon } from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface PortfolioItem {
  title: string;
  category: string;
  image: string;
  technologies: string[];
  href: string;
}

export interface Testimonial {
  name: string;
  company: string;
  review: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  featured: boolean;
  features: string[];
}