import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <button
        onClick={scrollToTop}
        aria-label="Scroll back to top of page"
        className="p-3 rounded-full bg-[#800D18] hover:bg-[#A90F1C] text-white shadow-lg transition-transform hover:scale-105 border border-white/20 cursor-pointer flex items-center justify-center"
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </div>
  );
};
