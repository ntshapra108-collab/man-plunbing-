export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  iconName: string;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  description: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  role: 'Homeowner' | 'Restaurant Owner' | 'Apartment Manager' | 'Shop Owner' | 'Office Administrator';
  rating: number;
  text: string;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
