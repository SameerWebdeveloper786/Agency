
import React from 'react';
import type { Service, PortfolioProject, Testimonial, Skill, Experience, BlogPost } from '../types';

// Icons for Services
const WebDevIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>;
const AppDevIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>;
const UiUxIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>;
const SpeedIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>;
const MaintenanceIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>;
const BrandingIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>;

export const SERVICES_DATA: Service[] = [
  { icon: <WebDevIcon />, title: 'Web Development', description: 'Building responsive, high-performance websites from scratch.', details: ['WordPress/CMS', 'HTML/CSS/JS', 'React & Next.js', 'E-commerce Solutions'] },
  { icon: <AppDevIcon />, title: 'Mobile App Development', description: 'Creating seamless cross-platform mobile experiences.', details: ['React Native & Expo', 'iOS & Android Apps', 'API Integration', 'Push Notifications'] },
  { icon: <UiUxIcon />, title: 'UI/UX Design', description: 'Designing intuitive and beautiful user interfaces.', details: ['User Research', 'Wireframing & Prototyping', 'Interaction Design', 'Design Systems'] },
  { icon: <SpeedIcon />, title: 'Website Speed Optimization', description: 'Making your website lightning-fast for better UX and SEO.', details: ['Asset Optimization', 'Code Minification', 'Caching Strategies', 'Core Web Vitals'] },
  { icon: <MaintenanceIcon />, title: 'Website Maintenance', description: 'Keeping your digital assets secure and up-to-date.', details: ['Security Audits', 'Regular Backups', 'Plugin/Theme Updates', 'Performance Monitoring'] },
  { icon: <BrandingIcon />, title: 'Branding & Digital Strategy', description: 'Defining your brand identity and digital roadmap.', details: ['Brand Guidelines', 'Logo Design', 'Market Analysis', 'Content Strategy'] },
];

export const PORTFOLIO_DATA: PortfolioProject[] = [
  { id: 1, title: 'QuantumLeap CRM', category: 'Web', image: 'https://picsum.photos/seed/quantum/600/400', industry: 'SaaS / Tech', tools: ['React', 'Node.js', 'PostgreSQL'], problem: 'Client needed a scalable CRM to manage sales pipelines.', solution: 'Developed a custom, high-performance CRM with real-time analytics and a modular architecture.' },
  { id: 2, title: 'Aether Mobile Banking', category: 'App', image: 'https://picsum.photos/seed/aether/600/400', industry: 'FinTech', tools: ['React Native', 'Firebase'], problem: 'A bank required a modern, secure mobile app for its customers.', solution: 'Built a cross-platform app with biometric login, transaction history, and bill payment features.' },
  { id: 3, title: 'Nova Design System', category: 'UI/UX', image: 'https://picsum.photos/seed/nova/600/400', industry: 'E-commerce', tools: ['Figma', 'Storybook'], problem: 'An e-commerce brand had inconsistent UI across its platforms.', solution: 'Created a comprehensive design system with reusable components, ensuring brand consistency.' },
  { id: 4, title: 'Zenith Landing Page', category: 'Web', image: 'https://picsum.photos/seed/zenith/600/400', industry: 'Marketing', tools: ['Next.js', 'Tailwind CSS'], problem: 'A marketing campaign needed a high-converting landing page.', solution: 'Designed and built a fast, A/B tested landing page that increased conversions by 35%.' },
  { id: 5, title: 'ConnectApp Social', category: 'App', image: 'https://picsum.photos/seed/connect/600/400', industry: 'Social Media', tools: ['React Native', 'GraphQL'], problem: 'A startup wanted to create a niche social networking app.', solution: 'Developed an MVP with core features like profiles, posting, and real-time chat.' },
  { id: 6, title: 'Vertex UI Refresh', category: 'UI/UX', image: 'https://picsum.photos/seed/vertex/600/400', industry: 'Corporate', tools: ['Adobe XD', 'Illustrator'], problem: 'An established company website looked outdated and was hard to navigate.', solution: 'Redesigned the entire user interface and experience, focusing on modern aesthetics and improved user flows.' },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  { quote: 'Sameer Digital Lab transformed our online presence. Their attention to detail and technical expertise are second to none. Our traffic has increased by 200%!', name: 'Jane Doe', company: 'CEO, QuantumLeap' },
  { quote: 'The mobile app they developed is flawless. It\'s fast, intuitive, and our users love it. A truly professional and collaborative team.', name: 'John Smith', company: 'CTO, Aether Bank' },
  { quote: 'Working with them was a breeze. They understood our vision perfectly and delivered a design that exceeded all our expectations. Highly recommended!', name: 'Emily White', company: 'Head of Product, Nova Retail' },
];

export const SKILLS_DATA: Skill[] = [
    { name: 'React / Next.js', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'UI/UX Design (Figma)', level: 85 },
    { name: 'Node.js / Express', level: 80 },
    { name: 'React Native', level: 88 },
    { name: 'Database (SQL/NoSQL)', level: 75 },
];

export const EXPERIENCE_DATA: Experience[] = [
    { year: '2022 - Present', role: 'Founder & Lead Developer', company: 'Sameer Digital Lab', description: 'Leading a team of creators to deliver high-impact digital solutions for clients worldwide, from startups to established enterprises.' },
    { year: '2020 - 2022', role: 'Senior Frontend Engineer', company: 'TechCorp Inc.', description: 'Architected and built scalable user interfaces for a flagship SaaS product, mentoring junior developers and improving performance by 40%.' },
    { year: '2018 - 2020', role: 'Full-Stack Developer', company: 'Innovate Solutions', description: 'Developed and maintained full-stack web applications for various clients, working with technologies like React, Node.js, and PHP.' },
];

export const BLOG_POSTS_DATA: BlogPost[] = [
    { id: 1, title: '10 UI/UX Trends to Watch in 2024', category: 'Design', date: 'October 26, 2023', excerpt: 'From AI-driven design to immersive 3D interfaces, discover the trends shaping the future of digital experiences.', image: 'https://picsum.photos/seed/blog1/600/400' },
    { id: 2, title: 'Why Your Business Needs a High-Performance Website', category: 'Business', date: 'October 15, 2023', excerpt: 'Speed isn\'t just a feature; it\'s crucial for user retention, conversion, and SEO. Learn why and how to optimize.', image: 'https://picsum.photos/seed/blog2/600/400' },
    { id: 3, title: 'Mastering React Native: A Guide for Beginners', category: 'Technology', date: 'September 30, 2023', excerpt: 'A comprehensive walkthrough of getting started with React Native for cross-platform app development.', image: 'https://picsum.photos/seed/blog3/600/400' },
    { id: 4, title: 'The Ultimate SEO Checklist for New Websites', category: 'SEO', date: 'September 12, 2023', excerpt: 'Launch your website with confidence. Follow this checklist to ensure your on-page and technical SEO is on point from day one.', image: 'https://picsum.photos/seed/blog4/600/400' },
];

export const SEO_DATA = {
    home: {
        title: 'Sameer Digital Lab | Premium Web & App Development Agency',
        description: 'Sameer Digital Lab is a world-class digital agency specializing in futuristic web development, mobile apps, and UI/UX design. We build high-end, animated, and performant digital experiences.',
    },
    services: {
        title: 'Our Services | Sameer Digital Lab',
        description: 'Explore our range of expert services, including web & mobile app development, UI/UX design, speed optimization, maintenance, and digital strategy. Elevate your brand with us.',
    },
    portfolio: {
        title: 'Our Work | Sameer Digital Lab',
        description: 'Browse our portfolio of stunning websites, mobile apps, and UI/UX projects. See how we solve complex problems with creative and technical excellence.',
    },
    about: {
        title: 'About Us | Sameer Digital Lab',
        description: 'Learn about Sameer Digital Lab, our mission, skills, and experience. Discover why we are the right partner for your next digital project.',
    },
    blog: {
        title: 'Our Blog | Sameer Digital Lab',
        description: 'Read insights on technology, design, SEO, and business from the experts at Sameer Digital Lab. Stay ahead of the curve with our latest articles.',
    },
    contact: {
        title: 'Contact Us | Sameer Digital Lab',
        description: 'Ready to start your project? Get in touch with Sameer Digital Lab for a free quote. Let\'s build something amazing together.',
    },
};
