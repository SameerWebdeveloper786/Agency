// FIX: Import React to provide the 'React' namespace for types like React.ReactNode.
import React from 'react';

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
}

export type PortfolioCategory = 'Web' | 'App' | 'UI/UX';

export interface PortfolioProject {
  id: number;
  title: string;
  category: PortfolioCategory;
  image: string;
  industry: string;
  tools: string[];
  problem: string;
  solution: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  company: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface Experience {
  year: string;
  role: string;
  company: string;
  description: string;
}

export type BlogCategory = 'Technology' | 'Design' | 'Business' | 'SEO';

export interface BlogPost {
  id: number;
  title: string;
  category: BlogCategory;
  date: string;
  excerpt: string;
  image: string;
}
