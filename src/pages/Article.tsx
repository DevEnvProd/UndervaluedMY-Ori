import { useParams, Link } from 'react-router-dom';
import { articles } from '../data/mockData';
import { Download, Share2, Bookmark } from 'lucide-react';

export function Article() {
  const { slug } = useParams();
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="text-center py-20">
        <h1 className="font-headline text-4xl mb-4">Article Not Found</h1>
        <Link to="/research" className="text-teal hover:underline font-mono">← Back to Archive</Link>
      </div>
    );
  }

  // Formatting content just for demonstration if it exists in mock
  const paragraphs = article.content?.split('\\n\\n') || [article.summary];

  return (
    <div className="max-w-4xl mx-auto pb-16">
      <Link to="/research" className="inline-block font-mono text-xs uppercase tracking-widest text-dark/50 hover:text-teal mb-8">
        ← Back to Research
      </Link>
      
      <article className="bg-card border-b border-dashed border-dark p-8 md:p-12 mb-12">
        {/* Header */}
        <header className="mb-10 text-center border-b-4 border-double border-dark pb-8">
          <div className="vintage-badge mb-4 uppercase">
            {article.category}
          </div>
          <h1 className="font-headline text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {article.title}
          </h1>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-mono text-xs text-dark/80 uppercase">
            <span>By <strong>{article.author}</strong></span>
            <span>{article.date}</span>
            <span>{article.readTime}</span>
          </div>
        </header>

        {/* Action Bar */}
        <div className="flex justify-between items-center bg-paper border border-dark p-3 mb-10">
          <div className="flex gap-4">
             <button className="text-dark/60 hover:text-teal transition-colors" title="Share"><Share2 size={18} /></button>
             <button className="text-dark/60 hover:text-orange transition-colors" title="Save"><Bookmark size={18} /></button>
          </div>
          <button className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest hover:text-teal transition-colors">
            <Download size={16} /> <span>Download PDF Summary</span>
          </button>
        </div>

        {/* Content */}
        <div className="font-body text-xl leading-relaxed text-dark max-w-2xl mx-auto space-y-6 relative">
          
          {/* Simulated Margin Note */}
          <div className="hidden lg:block absolute -left-48 top-20 w-40 font-mono text-[11px] leading-tight text-dark border-l border-dark pl-3">
             <span className="note-bg font-bold block bg-[#E88C5C44] px-1 w-fit mb-1">Analyst Note</span>
             Mr. Market historically over-penalizes conglomerates with unlisted assets during high interest rate environments.
          </div>

          <p>
            <span className="drop-cap">{paragraphs[0].charAt(0)}</span>
            {paragraphs[0].slice(1)}
          </p>
          
          {paragraphs.slice(1).map((p, i) => {
            // Randomly insert a sketch chart mock
            if (i === 1) {
              return (
                <div key={i} className="my-10">
                  <p className="mb-6">{p.replace(/\*(.*?)\*/g, '<span class="font-bold">$1</span>')}</p>
                  
                  {article.imagePlaceholder && (
                    <figure className="border border-dark/20 p-2 bg-paper my-10 transform -rotate-1 shadow-sm">
                      <div className="aspect-[16/9] w-full border border-dark/10 bg-card flex flex-col justify-center items-center relative overflow-hidden">
                        {/* Drawn chart effect */}
                        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3d2b1f_1px,transparent_1px)] [background-size:16px_16px]"></div>
                        <svg viewBox="0 0 100 50" className="absolute w-full h-full opacity-60 px-4">
                          <polyline points="0,40 20,35 40,45 60,25 80,30 100,10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" className="text-teal" />
                          <polyline points="0,15 20,20 40,10 60,30 80,25 100,40" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4,4" className="text-orange" />
                        </svg>
                        <span className="absolute bottom-4 right-4 font-mono text-xs border border-dark/20 bg-paper px-2 py-1">Fig 1. SOTP vs Price</span>
                      </div>
                      <figcaption className="font-mono text-xs text-center mt-2 italic text-dark/60">
                        Historical discount to NAV has widened to multi-year highs. (Author's estimates)
                      </figcaption>
                    </figure>
                  )}
                </div>
              );
            }
            
            // Randomly style text with hand drawn underline
            if (p.includes('catalyst')) {
              const parts = p.split('catalyst');
              return (
                <p key={i}>
                  {parts[0]}<span className="hand-drawn-underline font-bold">catalyst</span>{parts[1]}
                </p>
              );
            }

            return <p key={i} dangerouslySetInnerHTML={{__html: p.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold">$1</strong>').replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')}}></p>;
          })}
        </div>

        {/* Subscribe Footer */}
        <div className="mt-16 bg-paper border border-dark p-8 md:p-10 text-center max-w-2xl mx-auto">
          <h3 className="font-headline text-3xl font-bold mb-3">Subscribe for more contrarian ideas</h3>
          <p className="font-body text-dark/80 mb-6 text-[16px]">Join our private newsletter tracking deep value opportunities in Bursa Malaysia.</p>
          <form className="flex max-w-md mx-auto" onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="investor@example.com" className="flex-1 bg-card border border-dark border-r-0 px-4 py-2 font-mono text-sm focus:outline-none focus:bg-white" />
            <button className="bg-dark text-cream font-mono text-sm font-bold uppercase tracking-widest px-6 py-2 hover:bg-teal transition-colors">
              Join
            </button>
          </form>
        </div>
      </article>

      {/* Author Bio */}
      <div className="max-w-2xl mx-auto mt-12 flex gap-6 items-center p-6 border-y border-dark/10">
        <div className="w-16 h-16 rounded-full bg-dark flex items-center justify-center text-cream font-headline text-2xl font-bold shrink-0">
          {article.author.substring(0, 1)}
        </div>
        <div>
          <h4 className="font-headline text-xl font-bold">About {article.author}</h4>
          <p className="font-body text-sm text-dark/70 mt-1">
            An independent contrarian investor focusing on special situations and deep value plays in Southeast Asian markets. Previously managed funds at a regional family office.
          </p>
        </div>
      </div>
    </div>
  );
}
