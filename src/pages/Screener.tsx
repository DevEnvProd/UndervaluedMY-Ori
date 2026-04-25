import { useState } from 'react';
import { Filter, SlidersHorizontal, AlertCircle } from 'lucide-react';

const mockStocks = [
  { ticker: '3182', name: 'GENTING', sector: 'Gaming/Hospitality', pb: 0.55, fcf: 'Positive', netNet: false },
  { ticker: '4715', name: 'GENM', sector: 'Gaming/Hospitality', pb: 0.85, fcf: 'Positive', netNet: false },
  { ticker: '7113', name: 'TOPGLOV', sector: 'Healthcare', pb: 0.95, fcf: 'Negative', netNet: false },
  { ticker: '5183', name: 'PETRONM', sector: 'Energy', pb: 0.45, fcf: 'Positive', netNet: true },
  { ticker: '1961', name: 'IOIPG', sector: 'Property', pb: 0.35, fcf: 'Positive', netNet: false },
  { ticker: '6012', name: 'MAXIS', sector: 'Telco', pb: 4.50, fcf: 'Positive', netNet: false },
  { ticker: '4197', name: 'MBSB', sector: 'Finance', pb: 0.40, fcf: 'Positive', netNet: false },
];

export function Screener() {
  const [activeScreen, setActiveScreen] = useState('All');

  const getFilteredStocks = () => {
    switch (activeScreen) {
      case 'Gaming Deep Value':
        return mockStocks.filter(s => s.sector === 'Gaming/Hospitality' && s.pb < 1.0 && s.fcf === 'Positive');
      case 'Net-Nets':
        return mockStocks.filter(s => s.netNet);
      case 'Deep Discount (P/B < 0.5)':
        return mockStocks.filter(s => s.pb < 0.5);
      default:
        return mockStocks;
    }
  };

  const filtered = getFilteredStocks();

  return (
    <div className="pb-16 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="font-headline text-5xl font-bold mb-4">Value Screener</h1>
        <p className="font-body text-xl text-dark/70">
          Filter the noise. Find the discounts. (Mock Data Version)
        </p>
      </div>

      <div className="bg-paper border border-dark/20 p-4 mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex gap-2 items-center text-sm font-mono text-dark font-bold uppercase">
          <Filter size={16} /> Pre-set Screens:
        </div>
        <div className="flex flex-wrap gap-2">
          {['All', 'Net-Nets', 'Deep Discount (P/B < 0.5)', 'Gaming Deep Value'].map(screen => (
             <button
                key={screen}
                onClick={() => setActiveScreen(screen)}
                className={`font-mono text-xs px-4 py-2 border transition-colors ${
                  activeScreen === screen 
                  ? 'bg-dark text-cream border-dark' 
                  : 'bg-paper border-dark hover:border-dark hover:bg-card'
                }`}
             >
               {screen}
             </button>
          ))}
        </div>
        <button className="flex gap-2 items-center font-mono text-xs uppercase text-teal hover:underline ml-auto md:ml-4">
           <SlidersHorizontal size={14} /> Custom Filters
        </button>
      </div>

      <div className="bg-paper border border-dark shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left font-body">
            <thead>
              <tr className="bg-card border-b border-dark font-mono text-xs uppercase tracking-widest text-dark">
                <th className="p-4 font-bold border-r border-dark/20">Ticker</th>
                <th className="p-4 font-bold border-r border-dark/20">Company</th>
                <th className="p-4 font-bold border-r border-dark/20">Sector</th>
                <th className="p-4 font-bold text-right border-r border-dark/20">P/B Ratio</th>
                <th className="p-4 font-bold text-center border-r border-dark/20">FCF Yield</th>
                <th className="p-4 font-bold text-center">Net-Net Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(stock => (
                <tr key={stock.ticker} className="border-b border-dashed border-dark hover:bg-card transition-colors group">
                  <td className="p-4 border-r border-dark/20"><span className="stock-ticker">{stock.ticker}</span></td>
                  <td className="p-4 font-headline text-xl font-bold group-hover:text-teal group-hover:underline transition-colors cursor-pointer border-r border-dark/20">{stock.name}</td>
                  <td className="p-4 text-dark/80 text-[15px] border-r border-dark/20">{stock.sector}</td>
                  <td className="p-4 text-right font-mono text-sm border-r border-dark/20">
                    <span className={stock.pb < 1 ? 'note-bg px-2 py-1 rounded' : ''}>
                      {stock.pb.toFixed(2)}x
                    </span>
                  </td>
                  <td className="p-4 text-center border-r border-dark/20">
                     <span className={`text-xs px-2 py-1 uppercase tracking-wider font-mono ${stock.fcf === 'Positive' ? 'text-green-700' : 'text-red-700'}`}>
                       {stock.fcf}
                     </span>
                  </td>
                  <td className="p-4 text-center font-mono text-xl text-orange">
                    {stock.netNet ? '✓' : '-'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && (
           <div className="p-8 text-center text-dark/50 italic font-headline text-lg">
             No companies match the current criteria.
           </div>
        )}
      </div>

      <div className="mt-8 bg-paper p-4 border-l-4 border-orange flex gap-3 text-sm italic font-body text-dark/70">
         <AlertCircle size={20} className="text-orange shrink-0" />
         <p>Data is for illustrative purposes only. All real screening should be conducted on live data platforms like Bursa Marketplace or proprietary Bloomberg terminals before capital allocation.</p>
      </div>
    </div>
  );
}
