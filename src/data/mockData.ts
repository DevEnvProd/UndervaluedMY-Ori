import { winboxArticles } from './winboxArticles';
export interface Article {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: 'Value Picks' | 'Contrarian Research' | 'Small-Cap Discovery' | 'Special Situations' | 'Deep Dives' | 'Sponsored';
  date: string;
  author: string;
  content?: string;
  readTime: string;
  imagePlaceholder?: string;
}

export const articles: Article[] = [...winboxArticles];

export const portfolio = [
  { ticker: '3182.KL', name: 'Genting Berhad', avgCost: 4.10, currentPrice: 4.88, weight: '8.5%', thesis: 'SOTP Discount' },
  { ticker: '4715.KL', name: 'Genting Malaysia', avgCost: 2.30, currentPrice: 2.75, weight: '5.0%', thesis: 'RevPAR Recovery' },
  { ticker: '1015.KL', name: 'AMMB Holdings', avgCost: 3.65, currentPrice: 4.25, weight: '12.0%', thesis: 'P/B Re-rating' },
  { ticker: '5225.KL', name: 'IHH Healthcare', avgCost: 5.70, currentPrice: 6.10, weight: '9.0%', thesis: 'Defensive Moat' },
  { ticker: '1961.KL', name: 'IOI Properties', avgCost: 1.15, currentPrice: 2.20, weight: '15.5%', thesis: 'Asset Play' }
];
