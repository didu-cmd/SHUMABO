import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { ServicesPage } from './pages/ServicesPage';
import { ExportPage } from './pages/ExportPage';
import { ContactPage } from './pages/ContactPage';
import { AdminPortal } from './components/AdminPortal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [adminOpen, setAdminOpen] = useState(false);
  const [selectedProductForQuote, setSelectedProductForQuote] = useState<string>('Ethiopian Coffee');

  // Handle URL hash changes or navigation
  useEffect(() => {
    const handleHashChange = () => {
      const rawHash = window.location.hash.replace('#', '');
      if (['home', 'about', 'products', 'services', 'export', 'contact'].includes(rawHash)) {
        setCurrentPage(rawHash as PageRoute);
      } else if (rawHash === 'portal' || rawHash === 'admin') {
        setAdminOpen(true);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageRoute) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRequestQuote = (productName?: string) => {
    if (productName) {
      setSelectedProductForQuote(productName);
    }
    setCurrentPage('contact');
    window.location.hash = 'contact';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F7] text-[#241719] selection:bg-[#A90F1C]/20 selection:text-[#241719]">
      {/* 1. Header (Top Bar Contract: 3 zones separated by gap-8) */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onRequestQuote={handleRequestQuote}
      />

      {/* 2. Main Page Content View */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onRequestQuote={handleRequestQuote}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onRequestQuote={() => handleRequestQuote()}
          />
        )}

        {currentPage === 'products' && (
          <ProductsPage
            onNavigate={handleNavigate}
            onRequestQuote={handleRequestQuote}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onRequestQuote={(ctx) => handleRequestQuote(ctx)}
          />
        )}

        {currentPage === 'export' && (
          <ExportPage
            onNavigate={handleNavigate}
            onRequestQuote={() => {
              handleRequestQuote();
            }}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            initialProduct={selectedProductForQuote}
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* 3. Footer */}
      <Footer
        onNavigate={handleNavigate}
        onRequestQuote={() => handleRequestQuote()}
        onOpenAdmin={() => setAdminOpen(true)}
      />

      {/* 4. Admin Portal Modal */}
      {adminOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-5xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] border border-[#E6DCDD]">
            <AdminPortal onClose={() => setAdminOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
}
