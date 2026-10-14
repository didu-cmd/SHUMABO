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
    <div className="min-h-screen flex flex-col bg-[#F8F5EF] text-[#2B1D16] selection:bg-[#B88B50]/30 selection:text-[#2B1D16]">
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

      {/* 3. Quiet Editorial Footer */}
      <Footer
        onNavigate={handleNavigate}
        onRequestQuote={() => handleRequestQuote()}
        onOpenAdmin={() => setAdminOpen(true)}
      />

      {/* 4. Authorized Commercial Lead Desk (Admin Modal) */}
      {adminOpen && <AdminPortal onClose={() => setAdminOpen(false)} />}
    </div>
  );
}
