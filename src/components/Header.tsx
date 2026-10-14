import React, { useState } from 'react';
import { PageRoute } from '../types';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
  onRequestQuote: (productName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, onRequestQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { label: string; page: PageRoute }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About', page: 'about' },
    { label: 'Products', page: 'products' },
    { label: 'Services', page: 'services' },
    { label: 'Export', page: 'export' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleLinkClick = (page: PageRoute) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F8F5EF]/95 backdrop-blur-md border-b border-[#E5DED2] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand Wordmark with verified company logo */}
          <div className="flex items-center shrink-0">
            <button
              onClick={() => handleLinkClick('home')}
              className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none"
              aria-label="Shumabo Import and Export Home"
            >
              <img
                src="/images/shumabo-logo.jpg"
                alt="Shumabo Import & Export Logo"
                className="w-11 h-11 object-cover rounded-md shadow-xs border border-[#E5DED2] bg-white transition-transform group-hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (!target.src.includes('cdn.corenexis.com')) {
                    target.src = 'https://cdn.corenexis.com/f/ClpfhXXRk1S.jpg';
                  }
                }}
              />
              <div className="flex flex-col">
                <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#2B1D16] leading-none">
                  SHUMABO
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#B88B50] mt-1 font-body">
                  Import & Export
                </span>
              </div>
            </button>
          </div>

          {/* Zone 2: Navigation Links in Inspires font exclusively */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium font-body text-[#2B1D16]/80">
            {navLinks.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleLinkClick(item.page)}
                  className={`relative py-1 whitespace-nowrap shrink-0 transition-colors cursor-pointer hover:text-[#59351F] font-body text-[14px] ${
                    isActive ? 'text-[#59351F] font-semibold' : 'text-[#6F6258]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#B88B50] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action in Inspires font */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onRequestQuote()}
              className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider font-body text-white bg-[#59351F] rounded-lg hover:bg-[#2B1D16] transition-all shadow-xs cursor-pointer whitespace-nowrap shrink-0 group"
            >
              <span>Request a Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#2B1D16] hover:text-[#59351F] focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E5DED2] bg-[#F8F5EF] px-4 pt-3 pb-6 shadow-lg animate-in slide-in-from-top-2 font-body">
          <div className="space-y-2">
            {navLinks.map((item) => (
              <button
                key={item.page}
                onClick={() => handleLinkClick(item.page)}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-base font-medium transition-colors cursor-pointer font-body ${
                  currentPage === item.page
                    ? 'bg-[#EAE1D3] text-[#59351F] font-semibold'
                    : 'text-[#2B1D16] hover:bg-[#EAE1D3]/50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-3 border-t border-[#E5DED2]">
              <button
                onClick={() => {
                  onRequestQuote();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold uppercase tracking-wider font-body text-white bg-[#59351F] rounded-lg hover:bg-[#2B1D16] transition-colors cursor-pointer shadow-xs"
              >
                <span>Request a Quote</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
