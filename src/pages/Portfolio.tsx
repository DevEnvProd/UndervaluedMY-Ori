import { portfolio } from '../data/mockData';
import { PieChart, Info } from 'lucide-react';

export function Portfolio() {
  const totalValue = 100000; // Mock total value

  return (
    <div className="pb-16 max-w-5xl mx-auto">
       <div className="text-center mb-12">
        <h1 className="font-headline text-5xl font-bold mb-4">Value Portfolio</h1>
        <p className="font-body text-xl text-dark/70">
          Putting skin in the game. Our hypothetical high-conviction value holdings.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Stats */}
        <div className="bg-card border border-dark p-6 relative overflow-hidden">
           <div className="absolute top-0 right-0 p-4 opacity-10"><PieChart size={100} /></div>
           <p className="font-mono text-xs tracking-widest text-dark/70 uppercase mb-2">Total NAV (Mock)</p>
           <p className="font-headline text-4xl font-bold text-teal">RM {totalValue.toLocaleString()}</p>
        </div>
        <div className="bg-card border border-dark p-6">
           <p className="font-mono text-xs tracking-widest text-dark/70 uppercase mb-2">Cash Allocation</p>
           <p className="font-headline text-4xl font-bold text-orange">50.0%</p>
           <p className="font-mono text-[10px] uppercase text-dark/60 mt-2 italic">Waiting for fat pitches</p>
        </div>
        <div className="bg-card border border-dark p-6">
           <p className="font-mono text-xs tracking-widest text-dark/70 uppercase mb-2">Gaming/Hospitality</p>
           <p className="font-headline text-4xl font-bold text-dark">13.5%</p>
           <p className="font-mono text-[10px] uppercase text-dark/60 mt-2 italic">Contrarian overweight</p>
        </div>
      </div>

      <div className="bg-paper border border-dark mb-12 relative">
         <div className="absolute -top-3 left-6 bg-paper px-2 text-xs font-mono font-bold uppercase tracking-widest">
           Current Holdings
         </div>
         
         <div className="overflow-x-auto p-4 md:p-6">
           <table className="w-full text-left font-body text-lg">
             <thead>
               <tr className="border-b-2 border-dark font-mono text-xs uppercase tracking-widest text-dark">
                 <th className="py-3 px-2 font-bold">Asset</th>
                 <th className="py-3 px-2 font-bold text-right">Avg Cost</th>
                 <th className="py-3 px-2 font-bold text-right">Last Price</th>
                 <th className="py-3 px-2 font-bold text-center">Appreciation</th>
                 <th className="py-3 px-2 font-bold text-right">Weight</th>
               </tr>
             </thead>
             <tbody>
               {portfolio.map(pos => {
                 const change = ((pos.currentPrice - pos.avgCost) / pos.avgCost) * 100;
                 return (
                   <tr key={pos.ticker} className="border-b border-dashed border-dark hover:bg-card transition-colors">
                     <td className="py-4 px-2">
                       <div className="font-headline font-bold text-xl">{pos.name}</div>
                       <div className="stock-ticker mt-1 inline-block">{pos.ticker}</div>
                       <div className="text-sm italic text-dark/80 mt-2"><span className="note-bg font-bold font-mono no-italic text-[10px] uppercase mr-1">THESIS</span> {pos.thesis}</div>
                     </td>
                     <td className="py-4 px-2 text-right font-mono">RM {pos.avgCost.toFixed(2)}</td>
                     <td className="py-4 px-2 text-right font-mono">RM {pos.currentPrice.toFixed(2)}</td>
                     <td className="py-4 px-2 text-center font-mono text-sm">
                       <span className={change >= 0 ? 'text-teal' : 'text-red-700'}>
                         {change >= 0 ? '+' : ''}{change.toFixed(1)}%
                       </span>
                     </td>
                     <td className="py-4 px-2 text-right font-mono font-bold">{pos.weight}</td>
                   </tr>
                 );
               })}
             </tbody>
           </table>
         </div>
      </div>

      <div className="bg-card p-6 border border-dark flex gap-4 items-start">
         <Info className="text-teal shrink-0 mt-1" />
         <div>
           <h4 className="font-headline font-bold text-xl mb-2">Manager's Commentary</h4>
           <div className="font-body text-dark/80 space-y-4">
             <p>As of late October 2023, we continue to maintain a heavily conservative stance with 50% cash, waiting for broader market capitulation. However, our <span className="hand-drawn-underline font-bold">contrarian gaming bet</span> is taking shape. We view both Genting Berhad and Genting Malaysia as structurally sound businesses currently operating under a cloud of temporary uncertainty.</p>
             <p>For Genting Berhad (3182), the SOTP discount is simply too large to ignore. We don't need management to unlock value; we simply need the core businesses to resume normalized cash flow generation, which will inevitably drag the holding company's valuation upwards.</p>
           </div>
         </div>
      </div>
    </div>
  );
}
