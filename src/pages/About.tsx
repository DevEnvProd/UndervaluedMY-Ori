export function About() {
  return (
    <div className="max-w-3xl mx-auto pb-16">
      <div className="text-center mb-16 border-b-4 border-double border-dark/20 pb-12">
         <h1 className="font-headline text-5xl font-bold mb-6">About Us</h1>
         <p className="font-body text-xl text-dark/70 font-style: italic">
           Seeking truth in footnotes since 2019.
         </p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="font-headline text-3xl font-bold mb-4 font-style: italic">Our Philosophy</h2>
          <div className="font-body text-lg leading-relaxed space-y-4">
            <p>
              UNDERVALUED MY is a fictional manifestation of classical value investing applied to the modern Malaysian stock market. We believe the market is a voting machine in the short run, but a weighing machine in the long run.
            </p>
            <p>
              We ignore macroeconomic forecasts, charting patterns, and market punditry. Instead, we focus exclusively on <strong className="font-bold hand-drawn-underline">business fundamentals, intrinsic value, and the margin of safety</strong>.
            </p>
            <p>
              Our research process involves reading the footnotes, dissecting management incentives, and taking the other side of popular trades when the price is right.
            </p>
          </div>
        </section>

        <section className="bg-card p-8 border border-dark border-dashed">
          <h2 className="font-headline text-2xl font-bold mb-6">Fictional Fund Managers</h2>
          
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
               <div className="w-16 h-16 rounded bg-dark text-cream flex items-center justify-center font-headline text-2xl font-bold shrink-0">TJ</div>
               <div>
                 <h3 className="font-headline text-xl font-bold">Thomas J. (Chief Fictional Analyst)</h3>
                 <p className="font-body text-sm text-dark/90 mt-1 leading-[1.6]">Specializes in holding company discounts, real estate asset plays, and the gaming/hospitality sector. Loves a good sum-of-the-parts analysis.</p>
               </div>
            </div>
            
             <div className="flex gap-6 items-start">
               <div className="w-16 h-16 rounded bg-teal text-cream flex items-center justify-center font-headline text-2xl font-bold shrink-0">EK</div>
               <div>
                 <h3 className="font-headline text-xl font-bold">Eddie K. (Contrarian Lead)</h3>
                 <p className="font-body text-sm text-dark/90 mt-1 leading-[1.6]">Hunts for net-nets and turnaround situations. If everyone hates a stock, Eddie is probably reading its annual report.</p>
               </div>
            </div>
          </div>
        </section>

        <section className="bg-paper border-t border-b border-dark/20 py-8 text-center">
           <h2 className="font-mono text-sm tracking-widest text-orange uppercase font-bold mb-4">Contact</h2>
           <p className="font-body text-lg">
             Have a pitch or found a hidden gem? <br/>
             <a href="mailto:tips@undervalued.my" className="font-bold text-teal hover:underline mt-2 inline-block">tips@undervalued.my</a>
           </p>
        </section>
      </div>
    </div>
  );
}
