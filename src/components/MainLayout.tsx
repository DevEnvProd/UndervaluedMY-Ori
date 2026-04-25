import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Newspaper } from 'lucide-react';
import clsx from 'clsx';
import { motion } from 'motion/react';

export function MainLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Research', path: '/research' },
    { name: 'Screener', path: '/screener' },
    { name: 'Learn', path: '/learn' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-body text-dark">
      <header className="border-b-4 border-double border-dark bg-paper py-6 px-4 shrink-0 mb-4">
        <div className="max-w-6xl mx-auto">
          {/* Top Date & Issue Bar */}
          <div className="flex justify-between items-center text-xs md:text-sm font-mono border-b border-dark/30 pb-2 mb-6 uppercase tracking-widest text-dark/70">
            <span>Vol. IV — Est. 2019</span>
            <span>Kuala Lumpur, Malaysia</span>
            <span>{new Date().toLocaleDateString('en-MY', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>

          {/* Masthead */}
          <div className="text-center mb-8 flex flex-col items-center justify-center">
            <Link to="/" className="flex flex-col items-center group">
              <h1 className="font-headline text-5xl md:text-7xl tracking-[-2px] text-dark mb-0 leading-none uppercase group-hover:text-teal transition-colors">
                UNDERVALUED MY
              </h1>
              <p className="font-body italic text-[14px] tracking-[2px] uppercase border-t border-dark mt-2 pt-1">
                Find gems. Ignore noise. Invest with conviction. — Established MMXIX
              </p>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="border-t border-b border-dark py-3">
            <ul className="flex flex-wrap justify-center gap-6 md:gap-12">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
                return (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className={clsx(
                        'font-headline font-bold text-sm md:text-base uppercase tracking-widest transition-colors relative',
                        isActive ? 'text-orange' : 'text-dark hover:text-teal'
                      )}
                    >
                      {link.name}
                      {isActive && (
                        <motion.div
                          layoutId="nav-underline"
                          className="absolute -bottom-1 left-0 right-0 h-[2px] bg-orange"
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-1 bg-paper px-4 py-8 md:py-12">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>

      <footer className="bg-dark text-cream py-12 px-4 shrink-0 border-t-8 border-teal">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="font-headline text-2xl font-bold mb-4">UNDERVALUED<br/>MALAYSIA</h2>
            <p className="font-body text-cream/70 text-sm max-w-xs">
              Independent research focusing on intrinsic value, margin of safety, and contrarian opportunities in Bursa Malaysia.
            </p>
          </div>
          <div>
            <h3 className="font-mono text-sm tracking-widest mb-4 text-orange uppercase">Quick Links</h3>
            <ul className="space-y-2 font-headline text-sm">
              <li><Link to="/about" className="hover:text-teal transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="hover:text-teal transition-colors">Mock Portfolio</Link></li>
              <li><Link to="/screener" className="hover:text-teal transition-colors">Value Screener</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-mono text-sm tracking-widest mb-4 text-orange uppercase">Disclaimer</h3>
            <p className="font-body text-cream/50 text-xs leading-relaxed max-w-sm">
              All information provided on this platform is for educational and informational purposes only and does not constitute financial advice. The "Mock Portfolio" represents hypothetical scenarios and should not be construed as investment recommendations. Always conduct independent research or consult a licensed financial advisor before making investment decisions.
            </p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-cream/20 text-center font-mono text-xs text-cream/40 flex items-center justify-center gap-2">
           <Newspaper size={14} />
           <span>&copy; {new Date().getFullYear()} UNDERVALUED MY. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
