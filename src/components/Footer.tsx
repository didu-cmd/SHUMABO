import React from 'react';
import { PageRoute } from '../types';
import { Lock } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageRoute) => void;
  onRequestQuote: () => void;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onRequestQuote, onOpenAdmin }) => {
  return (
    <footer className="bg-[#2B1D16] text-[#EAE1D3] border-t border-[#59351F]/40 pt-16 pb-12 font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#59351F]/60">
          {/* Col 1: Brand & Origin (span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/shumabo-logo.jpg"
                alt="Shumabo Import & Export"
                className="w-10 h-10 object-cover rounded-md border border-[#B88B50]/40 bg-white"
              />
              <div>
                <span className="font-display text-2xl font-bold tracking-tight text-white block">
                  SHUMABO
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#B88B50] font-semibold block font-body">
                  Import & Export · Ethiopia
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#EAE1D3]/80 leading-relaxed max-w-sm font-body">
              Connecting Ethiopian agricultural commodities with international procurement departments through quality-conscious sourcing, verified commercial specifications, and direct export discussions.
            </p>

            {/* Direct Contact Details with SVG Icons */}
            <div className="space-y-2 text-xs text-[#EAE1D3]/80 font-body pt-1">
              <div className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-[#B88B50] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Office Phone: +251 11 552 4890 / +251 11 663 9022</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-[#B88B50] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Commercial Email: renderreal87@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-[#B88B50] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Headquarters: Bole Sub-City, Addis Ababa, Ethiopia</span>
              </div>
            </div>

            {/* Social Links with SVG Icons */}
            <div className="pt-2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#B88B50] font-semibold block mb-2 font-body">
                Official Trade Channels & Social Desk
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-lg bg-[#59351F]/60 hover:bg-[#B88B50] text-[#EAE1D3] hover:text-[#2B1D16] flex items-center justify-center transition-colors border border-[#B88B50]/30"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter / X"
                  className="w-9 h-9 rounded-lg bg-[#59351F]/60 hover:bg-[#B88B50] text-[#EAE1D3] hover:text-[#2B1D16] flex items-center justify-center transition-colors border border-[#B88B50]/30"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://whatsapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Trade Chat"
                  className="w-9 h-9 rounded-lg bg-[#59351F]/60 hover:bg-[#B88B50] text-[#EAE1D3] hover:text-[#2B1D16] flex items-center justify-center transition-colors border border-[#B88B50]/30"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.45 1.28 4.95L2 22l5.25-1.34c1.45.79 3.08 1.21 4.79 1.21 5.52 0 10-4.48 10-10s-4.48-10-10-10zm0 18.15c-1.5 0-2.97-.4-4.24-1.16l-.3-.18-3.12.8.83-3.04-.2-.31a8.14 8.14 0 0 1-1.25-4.32c0-4.5 3.67-8.17 8.17-8.17s8.17 3.67 8.17 8.17-3.67 8.17-8.17 8.17zm4.48-6.13c-.25-.13-1.48-.73-1.71-.82-.23-.09-.39-.13-.56.13-.17.25-.64.82-.79.99-.15.17-.31.19-.56.06s-1.07-.39-2.04-1.26c-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.52.11-.11.25-.29.37-.44.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.77-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31s-.88.86-.88 2.1 0.9 2.43 1.02 2.6c.12.17 1.77 2.7 4.29 3.79.6.26 1.07.42 1.44.54.61.19 1.17.16 1.61.1.49-.07 1.48-.6 1.69-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.29z" />
                  </svg>
                </a>
                <a
                  href="mailto:renderreal87@gmail.com"
                  aria-label="Email Commercial Desk"
                  className="w-9 h-9 rounded-lg bg-[#59351F]/60 hover:bg-[#B88B50] text-[#EAE1D3] hover:text-[#2B1D16] flex items-center justify-center transition-colors border border-[#B88B50]/30"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-8V6l8 5 8-5v2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Commodities */}
          <div>
            <h4 className="text-eyebrow-label text-[#B88B50] mb-4">
              Export Commodities
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#EAE1D3]/80 font-body">
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Ethiopian Specialty Coffee
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Humera & Wollega Sesame
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Ethiopian Teff & Highland Grains
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Export Pulses & Oilseeds
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Custom Agricultural Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Company & Information */}
          <div>
            <h4 className="text-eyebrow-label text-[#B88B50] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#EAE1D3]/80 font-body">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Shumabo
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Commercial Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('export')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Export & Trade Terms
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact & Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Commercial Inquiries & Portal */}
          <div>
            <h4 className="text-eyebrow-label text-[#B88B50] mb-4">
              Commercial Desk
            </h4>
            <p className="text-xs text-[#EAE1D3]/80 leading-relaxed mb-4 font-body">
              We respond to qualified importers and commercial sourcing inquiries worldwide.
            </p>
            <button
              onClick={onRequestQuote}
              className="inline-flex items-center justify-center w-full px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#2B1D16] bg-[#B88B50] hover:bg-[#B88B50]/90 rounded-lg transition-colors cursor-pointer shadow-xs mb-3 font-body"
            >
              Request Sourcing Quote
            </button>
            <button
              onClick={onOpenAdmin}
              className="inline-flex items-center gap-1.5 text-xs text-[#EAE1D3]/60 hover:text-[#B88B50] transition-colors cursor-pointer font-body"
            >
              <Lock className="w-3 h-3" />
              <span>Commercial Lead Portal</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar & Commercial Disclosure */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#EAE1D3]/60 font-body">
          <p>© {new Date().getFullYear()} Shumabo Import & Export. All rights reserved. Addis Ababa, Ethiopia.</p>
          <p className="text-center md:text-right max-w-xl">
            Inquiries submitted via this portal represent commercial requests for quotation and do not constitute binding sales contracts or shipping guarantees until formally confirmed via mutual proforma invoices.
          </p>
        </div>
      </div>
    </footer>
  );
};
