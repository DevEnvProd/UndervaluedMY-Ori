import { Link } from 'react-router-dom';
import { articles, portfolio } from '../data/mockData';
import { ArrowRight, ChevronRight, TrendingUp, AlertTriangle } from 'lucide-react';

export function Home() {
  const featuredArticle = articles.find(a => a.id === '1');
  const recentArticles = articles.filter(a => a.id !== '1').slice(0, 3);
  const gamingArticles = articles.filter(a => a.title.includes('GENTING') || a.title.includes('GENM') || a.title.includes('Gaming'));

  return (
    <div className="space-y-12 pb-12">
      {/* Top Section: Featured + Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Main Featured Article (Newspaper Lead Story) */}
        <div className="lg:col-span-8 bg-card border-b border-dashed border-dark pb-6 mb-4 relative group">
           <div className="absolute top-0 right-0 vintage-badge !text-paper !bg-teal border-teal z-10 !rotate-2 shadow-md">
             FEATURED REPORT
           </div>
           
           <h2 className="font-headline text-4xl md:text-5xl font-bold leading-[1.1] mb-4 group-hover:text-teal group-hover:underline transition-colors mt-8">
             <Link to={`/research/${featuredArticle?.slug}`}>{featuredArticle?.title}</Link>
           </h2>
           
           <div className="flex gap-4 items-center mb-6 border-y border-dark py-2">
             <span className="font-mono text-sm text-dark font-bold uppercase">{featuredArticle?.category}</span>
             <span className="font-mono text-xs text-dark/70">{featuredArticle?.date}</span>
             <span className="font-mono text-xs text-dark/70">By {featuredArticle?.author}</span>
           </div>
           
           <p className="font-body text-[16px] leading-[1.5] mb-6 text-justify">
             <span className="drop-cap">{featuredArticle?.summary.charAt(0)}</span>
             {featuredArticle?.summary.slice(1)}
           </p>
           
           <div className="bg-paper p-4 border border-dark italic font-headline text-dark mb-6 flex gap-3 items-start">
             <AlertTriangle className="text-orange shrink-0 mt-1" size={20} />
             <p>"When a holding company trades at a massive discount to its parts, value investors smell blood in the water. The <span className="note-bg">Margin of Safety</span> has rarely been wider."</p>
           </div>
           
           <Link to={`/research/${featuredArticle?.slug}`} className="inline-flex items-center gap-2 font-headline font-bold text-teal hover:text-orange transition-colors">
             Read Full Analysis <ArrowRight size={18} />
           </Link>
        </div>

        {/* Sidebar: Margin of Safety Meter & Recent Activity */}
        <div className="lg:col-span-4 space-y-8 border-l border-dark pl-6">
          
          {/* Visual Gauge Mock */}
          <div className="border-2 border-dark p-4 bg-card text-center relative max-w-sm mx-auto">
            <strong className="block text-sm uppercase tracking-widest mb-3">MARGIN OF SAFETY METER</strong>
            <div className="h-3 bg-[#E4E3E0] border border-dark relative my-4">
               <div className="h-full bg-orange w-[72%]"></div>
            </div>
            <div className="font-mono text-[11px] uppercase">
              Current Market Opportunity: <strong>HIGH</strong>
            </div>
          </div>

          {/* Quick Portfolio Update */}
          <div className="border-t border-dark pt-4">
            <h3 className="font-headline font-bold text-xl mb-4 border-b border-dark pb-2 flex justify-between items-end uppercase">
              <span>The Morning Ticker</span>
              < TrendingUp size={18} className="text-teal mb-1" />
            </h3>
            <ul className="space-y-4">
              {portfolio.slice(0,3).map(pos => (
                <li key={pos.ticker} className="flex justify-between items-center border-b border-dashed border-dark pb-3 last:border-0 hover:bg-paper transition-colors">
                  <div>
                    <p className="font-headline text-[15px] font-bold"><span className="stock-ticker">{pos.ticker.split('.')[0]}</span> {pos.name}</p>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-sm block">{pos.currentPrice.toFixed(2)}</span>
                  </div>
                </li>
              ))}
            </ul>
             <Link to="/portfolio" className="block text-center border border-dark font-mono text-xs uppercase tracking-widest py-2 hover:bg-dark hover:text-cream transition-colors mt-6">
              View Full Portfolio
            </Link>
          </div>
          
        </div>
      </div>

      {/* Grid: Latest Research */}
      <div className="pt-8 border-t-2 border-dark">
        <div className="flex justify-between items-baseline mb-8">
           <h2 className="font-headline text-3xl font-bold uppercase tracking-wide">Latest Research</h2>
           <Link to="/research" className="font-mono text-sm text-teal hover:underline flex items-center gap-1">All Articles <ChevronRight size={14}/></Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentArticles.map(article => (
            <div key={article.id} className="border-b border-dashed border-dark pb-4 flex flex-col h-full group">
              <span className="vintage-badge mb-3 self-start">{article.category}</span>
              <h3 className="font-headline text-2xl font-bold mb-3 flex-1 leading-[1.1] group-hover:text-teal group-hover:underline transition-colors cursor-pointer">
                <Link to={`/research/${article.slug}`}>{article.title}</Link>
              </h3>
              <p className="font-body text-dark/90 text-[14px] line-clamp-3 mb-4 leading-relaxed">
                {article.summary}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Sector Pitch */}
      <div className="bg-teal text-cream p-8 md:p-12 relative overflow-hidden mt-12 rounded-sm">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
        <div className="max-w-3xl relative z-10">
          <span className="font-mono text-sm tracking-widest text-orange font-bold uppercase mb-4 block">Sector Spotlight</span>
          <h2 className="font-headline text-4xl mb-4">Hidden Gem: The Gaming Sector</h2>
          <p className="font-body text-lg text-cream/90 mb-8 leading-relaxed">
            Institutional selling has created an <span className="hand-drawn-underline text-cream whitespace-nowrap">irrational discount</span> in Malaysian hospitality and gaming operators. We dive deep into why the assets of Genting ecosystem companies are significantly mispriced.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/screener" className="bg-orange text-dark font-headline font-bold px-6 py-3 hover:bg-highlight hover:-translate-y-0.5 transition-transform">
              Explore Gaming Screener
            </Link>
            <Link to="/research/genting-undervalued-conglomerate-or-value-trap" className="border border-cream/30 text-cream font-headline font-bold px-6 py-3 hover:bg-cream/10 transition-colors">
              Read Genting Deep Dive
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
