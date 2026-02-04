
import React from 'react';
import { 
  Code2, Layout, Smartphone, Terminal, Rocket, 
  Database, Shield, Monitor 
} from 'lucide-react';
import { Project, Skill, Service, TimelineItem, Testimonial } from './types';

export const SKILLS: Skill[] = [
  { name: 'React / Next.js', level: 95, icon: 'Layout' },
  { name: 'TypeScript / JS', level: 92, icon: 'Code2' },
  { name: 'Node.js', level: 85, icon: 'Terminal' },
  { name: 'UI/UX Design', level: 88, icon: 'Monitor' },
  { name: 'Firebase / Supabase', level: 82, icon: 'Database' },
  { name: 'Cybersecurity', level: 70, icon: 'Shield' },
  { name: 'HTML / CSS / Tailwind', level: 98, icon: 'Layout' },
  { name: 'System Architecture', level: 80, icon: 'Rocket' },
];

export const SERVICES: Service[] = [
  { 
    title: 'Website Development', 
    description: 'High-performance, SEO-optimized landing pages and business sites built with modern tech stacks.', 
    icon: 'Monitor' 
  },
  { 
    title: 'Web Applications', 
    description: 'Scalable SaaS solutions and custom web apps with complex state management and real-time features.', 
    icon: 'Layout' 
  },
  { 
    title: 'Mobile App UI', 
    description: 'Stunning and intuitive user interfaces for iOS and Android, focusing on seamless user journeys.', 
    icon: 'Smartphone' 
  },
  { 
    title: 'Automation Scripts', 
    description: 'Custom Python/Node scripts to automate repetitive business tasks and data extraction.', 
    icon: 'Terminal' 
  },
  { 
    title: 'Startup Consulting', 
    description: 'Technical guidance for founders on architecture, scaling, and digital product strategy.', 
    icon: 'Rocket' 
  },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Nexus SaaS Platform',
    description: 'A comprehensive management tool for remote teams with real-time collaboration.',
    image: 'https://picsum.photos/seed/nexus/800/500',
    tags: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: '2',
    title: 'Aura Crypto Wallet',
    description: 'Secure, multi-chain digital asset wallet with real-time market insights.',
    image: 'https://picsum.photos/seed/aura/800/500',
    tags: ['Next.js', 'Ethers.js', 'Tailwind', 'Web3'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: '3',
    title: 'Zenith E-Commerce',
    description: 'Next-gen shopping experience with AI-powered recommendations.',
    image: 'https://picsum.photos/seed/zenith/800/500',
    tags: ['React', 'Supabase', 'Stripe', 'Framer Motion'],
    liveUrl: '#',
    githubUrl: '#'
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    year: '2023 - Present',
    title: 'Founder & Lead Developer',
    company: 'Skyline Tech Solutions',
    description: 'Leading a team of 10 developers in building enterprise-grade digital products.'
  },
  {
    year: '2021 - 2023',
    title: 'Senior Frontend Engineer',
    company: 'InnovateX Labs',
    description: 'Spearheaded the UI migration of a legacy system to a modern React architecture.'
  },
  {
    year: '2019 - 2021',
    title: 'Full Stack Developer',
    company: 'StartUp Hub',
    description: 'Developed and maintained multiple MVP products for early-stage startups.'
  },
  {
    year: '2018',
    title: 'Freelance Web Developer',
    company: 'Self-Employed',
    description: 'Started my journey building custom websites for local businesses.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sarah Johnson',
    role: 'CEO at FlowState',
    text: 'Vikesh is a visionary developer. He not only builds what you ask for but enhances the entire vision of the product.',
    image: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    name: 'Marcus Chen',
    role: 'CTO at BrightEdge',
    text: 'One of the most efficient developers I have ever worked with. His attention to detail and performance optimization is top-tier.',
    image: 'https://i.pravatar.cc/150?u=marcus'
  },
  {
    name: 'Elena Rodriguez',
    role: 'Product Manager at Zenith',
    text: 'Technical expertise matched with a deep understanding of business goals. Highly recommended for any complex project.',
    image: 'https://i.pravatar.cc/150?u=elena'
  }
];
