import React, { useState } from 'react';
import { ProductSpecification } from '../types';
import { ArrowUpRight, X, Layers, PackageCheck, Globe2, FileCheck, SlidersHorizontal, Calendar, Mountain, Sparkles } from 'lucide-react';

interface ProductCardProps {
  product: ProductSpecification;
  onRequestQuote: (productName: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onRequestQuote }) => {
  const [showSpecsModal, setShowSpecsModal] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Close modal on Escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowSpecsModal(false);
      }
    };
    if (showSpecsModal) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [showSpecsModal]);

  return (
    <>
      {/* Modernized Box Container with strict boundary containment and outline */}
      <div className="relative flex flex-col h-full bg-white rounded-2xl border border-[#E6DCDD] hover:border-[#A90F1C] shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden group">
        {/* Contained Top Visual Media Box */}
        <div className="relative aspect-4/3 w-full bg-[#F1ECEA] overflow-hidden border-b border-[#E6DCDD]">
          {!imageError ? (
            <img
              src={product.image}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#F1ECEA] text-[#A90F1C]">
              <Layers className="w-10 h-10 mb-2 opacity-50" />
              <span className="font-display text-lg font-bold">{product.name}</span>
              <span className="text-xs text-[#6F6062] mt-1 font-body">Ethiopian Export Quality</span>
            </div>
          )}

          {/* Frosted Modern Category Badge */}
          <div className="absolute top-3 left-3 z-10 backdrop-blur-md bg-[#800D18]/85 text-white border border-white/15 px-3 py-1 text-[10px] font-semibold tracking-wider uppercase rounded-md shadow-xs font-body">
            {product.category}
          </div>

          {/* Container Load capacity badge */}
          {product.containerLoad20ft && (
            <div className="absolute top-3 right-3 z-10 backdrop-blur-md bg-white/95 text-[#A90F1C] border border-[#E6DCDD] px-2.5 py-0.5 text-[10px] font-bold font-mono tracking-wide rounded-md shadow-xs">
              20ft FCL: {product.containerLoad20ft.split('/')[0].trim()}
            </div>
          )}
        </div>

        {/* Content Box with generous internal padding */}
        <div className="p-6 flex-1 flex flex-col justify-between bg-white">
          <div>
            {/* Grade Tier & Origin Kicker */}
            <div className="flex items-center justify-between text-xs text-[#6F6062] mb-1 font-body">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#A90F1C] truncate max-w-[65%]">
                {product.gradeTier}
              </span>
              {product.altitude && (
                <span className="text-[11px] font-mono text-[#6F6062] shrink-0">
                  {product.altitude.split(' ')[0]}
                </span>
              )}
            </div>

            {/* Product Title in Solene Display Serif */}
            <h3 className="text-subsection-heading font-display font-bold text-[#241719] group-hover:text-[#A90F1C] transition-colors leading-tight mb-1 text-balance">
              {product.name}
            </h3>

            {/* Botanical Classification */}
            {product.botanicalName && (
              <p className="text-xs italic text-[#6F6062]/80 font-body mb-2">
                {product.botanicalName}
              </p>
            )}

            {/* Flavor / Characteristic Profile Highlight */}
            {product.flavorOrProfile && (
              <div className="p-2.5 rounded-lg bg-[#FAF8F7] border border-[#E6DCDD] mb-3 text-[11px] font-body text-[#A90F1C]">
                <strong className="text-[#241719] block font-semibold text-[10px] uppercase tracking-wider">
                  Target Sensory & Physical Profile:
                </strong>
                <span className="italic line-clamp-1">{product.flavorOrProfile}</span>
              </div>
            )}

            {/* Concise Product Description */}
            <p className="text-xs sm:text-sm text-[#6F6062] font-body leading-relaxed line-clamp-2 mb-4">
              {product.description}
            </p>

            {/* Inset Specifications Panel strictly contained inside the card */}
            <div className="bg-[#FAF8F7] border border-[#E6DCDD] rounded-xl p-3.5 space-y-2 mb-5">
              <span className="text-[10px] uppercase tracking-wider font-semibold text-[#A90F1C] block font-body">
                Verified Export Parameters
              </span>
              <div className="space-y-1.5 font-body">
                {product.keySpecs.slice(0, 3).map((spec, idx) => (
                  <div key={idx} className="flex items-baseline justify-between text-xs gap-2 pt-1 border-t border-[#E6DCDD] first:border-0 first:pt-0">
                    <span className="text-[#6F6062] text-[11px] font-medium truncate max-w-[50%]">
                      {spec.label}
                    </span>
                    <span className="font-semibold text-[#241719] text-[11px] text-right truncate max-w-[50%] font-mono">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Row strictly contained within card padding */}
          <div className="pt-2 flex items-center gap-2.5 font-body">
            <button
              onClick={() => onRequestQuote(product.name)}
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#A90F1C] hover:bg-[#800D18] rounded-lg transition-all duration-200 cursor-pointer shadow-xs whitespace-nowrap group/btn"
            >
              <span>Request Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </button>

            <button
              onClick={() => setShowSpecsModal(true)}
              className="inline-flex items-center justify-center gap-1 py-2.5 px-3 text-xs font-semibold uppercase tracking-wider text-[#A90F1C] bg-white hover:bg-[#FAF8F7] border border-[#E6DCDD] rounded-lg transition-colors cursor-pointer whitespace-nowrap"
              title="View full export specifications"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#C51B2A]" />
              <span>Specs</span>
            </button>
          </div>
        </div>
      </div>

      {/* Full Export Specifications Modal */}
      {showSpecsModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] border border-[#E6DCDD] font-body">
            {/* Modal Header */}
            <div className="bg-[#800D18] text-white px-6 py-4 flex items-center justify-between border-b border-[#A90F1C]/40">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#FAF8F7]/85 block font-body">
                  Complete Export Technical Dossier
                </span>
                <h3 className="font-display text-xl font-bold text-white">
                  {product.name}
                </h3>
              </div>
              <button
                onClick={() => setShowSpecsModal(false)}
                className="p-1.5 text-white/80 hover:text-white rounded-full hover:bg-white/10 cursor-pointer transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 bg-[#FAF8F7]">
              {/* Quick Info Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 bg-white p-4 rounded-xl border border-[#E6DCDD] text-xs">
                <div>
                  <span className="text-[#6F6062] block">Grade Classification:</span>
                  <strong className="text-[#241719] font-semibold">{product.gradeTier}</strong>
                </div>
                <div>
                  <span className="text-[#6F6062] block">Origin Region:</span>
                  <strong className="text-[#241719] font-semibold">{product.originRegions?.join(', ')}</strong>
                </div>
                <div>
                  <span className="text-[#6F6062] block">Harvest Season:</span>
                  <strong className="text-[#241719] font-semibold">{product.harvestSeason}</strong>
                </div>
                {product.altitude && (
                  <div>
                    <span className="text-[#6F6062] block">Growing Altitude:</span>
                    <strong className="text-[#241719] font-semibold">{product.altitude}</strong>
                  </div>
                )}
                {product.containerLoad20ft && (
                  <div>
                    <span className="text-[#6F6062] block">20ft FCL Capacity:</span>
                    <strong className="text-[#241719] font-semibold font-mono">{product.containerLoad20ft}</strong>
                  </div>
                )}
                <div>
                  <span className="text-[#6F6062] block">Port of Dispatch:</span>
                  <strong className="text-[#241719] font-semibold">Port of Djibouti Gateway</strong>
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#A90F1C] mb-2 font-display">
                  Commercial & Agricultural Overview
                </h4>
                <p className="text-xs sm:text-sm text-[#6F6062] leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* All Verified Key Specs Table */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#A90F1C] mb-3 font-display">
                  Detailed Laboratory & Physical Parameters
                </h4>
                <div className="bg-white rounded-xl border border-[#E6DCDD] divide-y divide-[#E6DCDD] overflow-hidden">
                  {product.keySpecs.map((spec, i) => (
                    <div key={i} className="flex items-center justify-between p-3.5 text-xs hover:bg-[#FAF8F7]">
                      <span className="text-[#6F6062] font-medium">{spec.label}</span>
                      <span className="font-mono font-semibold text-[#241719]">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Packaging & Incoterms info */}
              <div className="bg-white p-4 rounded-xl border border-[#E6DCDD] space-y-2 text-xs">
                <div className="flex items-start gap-2">
                  <PackageCheck className="w-4 h-4 text-[#A90F1C] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#241719] block">Standard Export Packaging:</strong>
                    <span className="text-[#6F6062]">60kg / 50kg export bags with moisture-barrier protection tailored for ocean transit.</span>
                  </div>
                </div>
                <div className="flex items-start gap-2 pt-2 border-t border-[#E6DCDD]">
                  <Globe2 className="w-4 h-4 text-[#A90F1C] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#241719] block">Incoterms & Freight:</strong>
                    <span className="text-[#6F6062]">Quoted on FOB Port of Djibouti or CFR/CIF destination port basis per buyer preference.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-white px-6 py-4 border-t border-[#E6DCDD] flex items-center justify-between">
              <span className="text-xs text-[#6F6062]">
                Official Shumabo Commercial Specifications
              </span>
              <button
                onClick={() => {
                  setShowSpecsModal(false);
                  onRequestQuote(product.name);
                }}
                className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#A90F1C] hover:bg-[#800D18] rounded-lg transition-colors cursor-pointer shadow-xs"
              >
                <span>Request Quotation for {product.name}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
