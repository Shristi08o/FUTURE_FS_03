
import { Campaign, Product } from '../types';

const MOCK_CAMPAIGNS: Campaign[] = [
  {
    id: 'c1',
    title: 'Cyber-Pulse Original',
    description: 'The timeless flavor, augmented for the 2026 sensory grid.',
    image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&q=80&w=800',
    tag: 'Flow Core'
  },
  {
    id: 'c2',
    title: 'Lavender Chill Zero',
    description: 'Digital wellness meets effervescent relaxation.',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=800',
    tag: 'Limited 2026'
  }
];

const MOCK_PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Coke Flow Obsidian',
    category: 'Zero Sugar',
    price: '$4.00',
    image: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a?auto=format&fit=crop&q=80&w=400',
    accentColor: '#FF0033',
    gridSpan: 'md:col-span-2 md:row-span-2'
  },
  {
    id: 'p2',
    name: 'Digital Lavender Coke',
    category: 'Relax',
    price: '$4.50',
    image: 'https://images.unsplash.com/photo-1543253687-c931c8e01820?auto=format&fit=crop&q=80&w=400',
    accentColor: '#BCA0DC',
    gridSpan: 'md:col-span-1 md:row-span-1'
  },
  {
    id: 'p3',
    name: 'Smart Can 2026',
    category: 'Hardware',
    price: '$25.00',
    image: 'https://images.unsplash.com/photo-1629203851022-39c64237d1d2?auto=format&fit=crop&q=80&w=400',
    accentColor: '#ffffff',
    gridSpan: 'md:col-span-1 md:row-span-1'
  },
  {
    id: 'p4',
    name: 'Pulse Energy',
    category: 'Energy',
    price: '$5.00',
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&q=80&w=400',
    accentColor: '#FF0033',
    gridSpan: 'md:col-span-1 md:row-span-2'
  },
  {
    id: 'p5',
    name: 'Neo-Mint Sprite',
    category: 'Crisp',
    price: '$4.00',
    image: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&q=80&w=400',
    accentColor: '#9ef7e2',
    gridSpan: 'md:col-span-1 md:row-span-1'
  }
];

export const getCampaigns = async (): Promise<Campaign[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(MOCK_CAMPAIGNS), 800);
  });
};

export const getProducts = async (): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(MOCK_PRODUCTS), 1200);
  });
};
