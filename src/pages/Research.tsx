import { useState } from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../data/mockData';
import { Search } from 'lucide-react';

export function Research() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const categories = Array.from(new Set(articles.map(a => a.category)));
  
  const filteredArticles = activeCategory 
    ? articles.filter(a => a.category === activeCategory)
    : articles;

  return (
    <div className="pb-12">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="font-headline text-5xl font-bold mb-4">Research Archive</h1>
        <p className="font-body text-xl text-dark/70">
          Independent, contrarian analysis of Bursa Malaysia's overlooked corners.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Sidebar Filters */}
        <div className="md:col-span-3">
          <div className="sticky top-6 border border-dark bg-card p-5">
            <h3 className="font-mono text-sm tracking-widest uppercase mb-4 text-dark border-b border-dark pb-2">Categories</h3>
            <ul className="space-y-3 font-headline">
              <li>
                <button 
                  onClick={() => setActiveCategory(null)}
                  className={`block w-full text-left transition-colors hover:text-teal ${!activeCategory ? 'font-bold text-teal' : 'text-dark/80'}`}
                >
                  All Research
                </button>
              </li>
              {categories.map(cat => (
                <li key={cat}>
                  <button 
                    onClick={() => setActiveCategory(cat)}
                    className={`block w-full text-left transition-colors hover:text-orange ${activeCategory === cat ? 'font-bold text-orange' : 'text-dark/80'}`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 pt-6 border-t border-dark/10">
              <div className="relative">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-dark/40" />
                <input 
                  type="text" 
                  placeholder="Search ticker or keyword" 
                  className="w-full bg-paper border border-dark/20 pl-9 pr-3 py-2 font-mono text-xs focus:outline-none focus:border-teal"
                  disabled
                />
              </div>
              <p className="font-mono text-[10px] text-dark/40 mt-2 italic text-center">(Search mock disabled)</p>
            </div>
          </div>
        </div>

        {/* Article List */}
        <div className="md:col-span-9 space-y-6">
          {filteredArticles.map((article, idx) => (
            <div key={article.id} className="group relative border-b border-dashed border-dark mb-6 pb-6">
               <div className="py-2 flex flex-col md:flex-row gap-6 items-start">
                 <div className="shrink-0 w-32 font-mono text-xs text-dark/70 pt-1">
                   <div className="vintage-badge mb-2">{article.category}</div>
                   <div className="mt-2">{article.date}</div>
                   <div className="mt-1">By {article.author}</div>
                 </div>
                 
                 <div>
                    <h2 className="font-headline text-3xl font-bold mb-3 leading-[1.1] group-hover:text-teal group-hover:underline transition-colors cursor-pointer">
                      <Link to={`/research/${article.slug}`}>{article.title}</Link>
                    </h2>
                    <p className="font-body text-dark/90 leading-[1.5] mb-3 text-[15px]">
                      {article.summary}
                    </p>
                    <Link to={`/research/${article.slug}`} className="font-mono text-[13px] uppercase tracking-wide text-dark hover:underline font-bold">
                      Read Report &rarr;
                    </Link>
                 </div>
               </div>
            </div>
          ))}
          
          {filteredArticles.length === 0 && (
            <div className="text-center py-20 font-headline text-xl text-dark/50 italic border border-dashed border-dark/20">
              No articles found in this category.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
