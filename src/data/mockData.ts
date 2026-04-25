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

export const articles: Article[] = [
  {
    id: '1',
    slug: 'genting-undervalued-conglomerate-or-value-trap',
    title: 'GENTING (3182): Undervalued Conglomerate or Value Trap?',
    summary: 'A sum-of-the-parts (SOTP) analysis reveals Genting Berhad is trading at a staggering holding company discount. Are investors missing the forest for the trees?',
    category: 'Deep Dives',
    date: 'OCTOBER 15, 2023',
    author: 'T.J.',
    readTime: '12 MIN READ',
    imagePlaceholder: 'Analysis Chart',
    content: `When a holding company trades at a massive discount to its parts, value investors smell blood in the water. Genting Berhad (3182.KL) currently trades at roughly half of its intrinsic value if you simply sum up its public holdings in Genting Singapore, Genting Malaysia, and Genting Plantations.\\n\\nBut why the discount?\\n\\nMarkets hate uncertainty and complex corporate structures. Mr. Market is punishing Genting for its capital-intensive side projects (like the Empire Resorts investments) and the pandemic hangover affecting its core leisure business.\\n\\n**The Margin of Safety**\\nAt current prices, buyers of Genting essentially get the Plantations, the unlisted Power assets, and the oil & gas blocks for *free*. This is the classic margin of safety Benjamin Graham built his philosophy on.\\n\\nHowever, we must ask: Is there a catalyst to close this gap? Share buybacks have been minimal. Dividends are conservative. The true contrarian thesis here is patience—waiting for the global travel recovery to fully reflect in Genting Singapore\'s earnings, which will inevitably force a re-rating of the parent company.\\n\\n*Are we catching a falling knife, or buying a dollar for fifty cents? The financials suggest the latter.*`
  },
  {
    id: '2',
    slug: 'genm-institutional-selling-overdone',
    title: 'GENM: Why Institutional Selling May Be Overdone',
    summary: 'Foreign outflows have hammered Genting Malaysia. We look at why the fundamentals suggest a strong turnaround is already underway.',
    category: 'Contrarian Research',
    date: 'NOVEMBER 02, 2023',
    author: 'E. Khong',
    readTime: '8 MIN READ'
  },
  {
    id: '3',
    slug: 'hospitality-reits-genting',
    title: 'Hospitality REITs Attached to Genting: Hidden Value?',
    summary: 'An exploration of listed and unlisted real estate assets orbiting the Genting ecosystem and the implied yields being ignored.',
    category: 'Value Picks',
    date: 'SEPTEMBER 28, 2023',
    author: 'T.J.',
    readTime: '10 MIN READ'
  },
  {
    id: '4',
    slug: 'platinum-entertainment-closer-look',
    title: 'Platinum Entertainment: A Closer Look at the Numbers',
    summary: 'A deep dive into the financial health and hidden assets of Platinum Entertainment as it positions for regional expansion.',
    category: 'Sponsored',
    date: 'OCTOBER 30, 2023',
    author: 'Guest Analyst',
    readTime: '6 MIN READ'
  },
  {
    id: '5',
    slug: 'finding-net-nets-bursa',
    title: 'Hunting for Net-Nets on Bursa Malaysia',
    summary: 'Are there still companies trading below their Net Current Asset Value (NCAV) in Malaysia today? We ran the screen.',
    category: 'Small-Cap Discovery',
    date: 'DECEMBER 12, 2023',
    author: 'C.W. Lin',
    readTime: '15 MIN READ'
  }
];

export const portfolio = [
  { ticker: '3182.KL', name: 'Genting Berhad', avgCost: 4.10, currentPrice: 4.88, weight: '8.5%', thesis: 'SOTP Discount' },
  { ticker: '4715.KL', name: 'Genting Malaysia', avgCost: 2.30, currentPrice: 2.75, weight: '5.0%', thesis: 'RevPAR Recovery' },
  { ticker: '1015.KL', name: 'AMMB Holdings', avgCost: 3.65, currentPrice: 4.25, weight: '12.0%', thesis: 'P/B Re-rating' },
  { ticker: '5225.KL', name: 'IHH Healthcare', avgCost: 5.70, currentPrice: 6.10, weight: '9.0%', thesis: 'Defensive Moat' },
  { ticker: '1961.KL', name: 'IOI Properties', avgCost: 1.15, currentPrice: 2.20, weight: '15.5%', thesis: 'Asset Play' }
];
