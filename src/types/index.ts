export interface TestimonialType {
  id: number;
  name: string;
  age?: string;
  role?: string;
  content: string;
  image: string;
}

export interface ModuleType {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface AudienceType {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface BenefitType {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface StatType {
  id: number;
  value: string;
  label: string;
}