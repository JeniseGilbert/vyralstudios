import { StationProps } from '../../types';

export const stationsData: Omit<StationProps, 'isActive' | 'onActivate'>[] = [
  {
    id: 'tech',
    name: 'Tech Support',
    description: 'Professional tech assistance for all your digital needs',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-600"><rect width="14" height="8" x="5" y="2" rx="2"></rect><rect width="14" height="8" x="5" y="14" rx="2"></rect><path d="M10 10v4"></path><path d="M14 10v4"></path></svg>',
    position: { x: -200, y: 100 },
    color: '#2563eb',
    glowColor: '#93c5fd'
  },
  {
    id: 'merch',
    name: 'VYRAL Merch',
    description: 'Explore and shop our latest merchandise collection',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-pink-600"><path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path><path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path><path d="M12 3v6"></path></svg>',
    position: { x: 0, y: -50 },
    color: '#e11d48',
    glowColor: '#fda4af'
  },
  {
    id: 'graphics',
    name: 'Graphics & Printing',
    description: 'Custom designs and t-shirt printing services',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-amber-600"><path d="M4 15v3c0 1.1.9 2 2 2h3"></path><path d="M2 11h20"></path><path d="M15 4h3c1.1 0 2 .9 2 2v3"></path><path d="m3 16 18-18"></path><path d="m16 3-4 4 4 4"></path><path d="m8 13-4 4 4 4"></path></svg>',
    position: { x: 200, y: 100 },
    color: '#d97706',
    glowColor: '#fcd34d'
  },
  {
    id: 'dj',
    name: 'DJ Studio',
    description: 'Professional DJ services for events and productions',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-600"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="2"></circle><path d="m22 12-4-2v4l4-2z"></path><path d="m6 12 4-2v4l-4-2z"></path><path d="m12 6-2 4h4l-2-4z"></path><path d="m12 18-2-4h4l-2 4z"></path></svg>',
    position: { x: 0, y: 200 },
    color: '#9333ea',
    glowColor: '#d8b4fe'
  }
];