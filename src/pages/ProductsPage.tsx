import React, { useState } from 'react';
import { PageRoute } from '../types';
import { productsData } from '../data/productsData';
import { ProductCard } from '../components/ProductCard';
import {
  Search,
  ArrowUpRight,
  LayoutGrid,
  TableProperties,
  ShieldCheck,
  PackageCheck,
  Ship,
  FileCheck2,
  X
} from 'lucide-react';

interface ProductsPageProps {
  onNavigate: (page: PageRoute) => void;
  onRequestQuote: (productName?: string) => void;
}

const MAIN_PRODUCT_IDS = [
  'yirgacheffe-washed-grade1',
  'whitish-humera-sesame',
  'ethiopian-ivory-white-teff',
  'white-pea-beans-canning'
];

export const ProductsPage: React.FC<ProductsPageProps> = ({ onNavigate, onRequestQuote }) => {
  const [catalogScope, setCatalogScope] = useState<'main' | 'all'>('main');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  const mainProducts = productsData.filter((p) => MAIN_PRODUCT_IDS.includes(p.id));
  const basePool = catalogScope === 'main' ? mainProducts : productsData;

  const filteredProducts = basePool.filter((p) => {
    const matchesCat = catalogScope === 'main' || activeCategory === 'All' || p.category === activeCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      p.name.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.gradeTier.toLowerCase().includes(query) ||
      p.originRegions.some((r) => r.toLowerCase().includes(query)) ||
      (p.botanicalName && p.botanicalName.toLowerCase().includes(query));

    return matchesCat && matchesSearch;
  });

  return (
    <div className="bg-[#FAF8F7] text-[#241719] min-h-screen">
      {/* 1. PRODUCTS HEADER */}
      <section className="bg-[#800D18] text-[#FAF8F7] py-20 border-b border-[#A90F1C]/40 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C51B2A_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-eyebrow-label text-[#C51B2A] block mb-3 font-body font-bold">
            ETHIOPIAN AGRICULTURAL EXPORT PORTFOLIO
          </span>
          <h1 className="text-main-heading font-display font-bold text-white mb-5 text-balance">
            Our 4 Main Export Products.
          </h1>
          <p className="text-intro-paragraph font-body max-w-3xl mx-auto text-[#FAF8F7]/90 leading-relaxed mb-6">
            Shumabo Import & Export procures, quality-grades, and ships Ethiopia's four flagship agricultural commodities directly from accredited origin zones to international seaports worldwide.
          </p>

          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs text-[#FAF8F7] border border-white/20">
            <ShieldCheck className="w-4 h-4 text-[#C51B2A]" />
            <span>Specialty Arabica Coffee · Sortexed Humera Sesame · Magna White Teff · Canning-Grade Pulses</span>
          </div>
        </div>
      </section>

      {/* 3. TOOLBAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#E6DCDD] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 font-body">
          <div className="text-xs text-[#6F6062] font-medium">
            Showing Shumabo's <span className="font-bold text-[#241719]">4 Main Export Commodities</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-[#6F6062] absolute left-3 top-2.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search origin, grade, spec..."
                className="w-full pl-9 pr-8 py-1.5 text-xs rounded-lg bg-[#FAF8F7] border border-[#E6DCDD] focus:border-[#A90F1C] focus:bg-white text-[#241719]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-2.5 text-[#6F6062] hover:text-[#241719] cursor-pointer"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <div className="flex items-center bg-[#FAF8F7] p-1 rounded-lg border border-[#E6DCDD] self-end sm:self-auto shrink-0">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-md text-xs font-medium cursor-pointer transition-colors flex items-center gap-1.5 ${
                  viewMode === 'grid'
                    ? 'bg-white text-[#A90F1C] shadow-xs font-semibold'
                    : 'text-[#6F6062] hover:text-[#241719]'
                }`}
                title="Curated Grid Catalog View"
              >
                <LayoutGrid className="w-4 h-4" />
                <span className="text-[11px] hidden sm:inline">Grid</span>
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`p-1.5 rounded-md text-xs font-medium cursor-pointer transition-colors flex items-center gap-1.5 ${
                  viewMode === 'table'
                    ? 'bg-white text-[#A90F1C] shadow-xs font-semibold'
                    : 'text-[#6F6062] hover:text-[#241719]'
                }`}
                title="Technical Specifications Matrix View"
              >
                <TableProperties className="w-4 h-4" />
                <span className="text-[11px] hidden sm:inline">Specs Table</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRODUCTS VIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-body">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-[#E6DCDD] p-8">
            <h3 className="font-display text-xl font-bold text-[#241719]">No commodities match your criteria</h3>
            <p className="text-xs text-[#6F6062] mt-2 mb-6 max-w-md mx-auto">
              Looking for a specific coffee micro-lot, sesame grading tolerance, or custom bagging requirement?
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => {
                  setSearchQuery('');
                  setCatalogScope('main');
                }}
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#A90F1C] bg-[#FAF8F7] border border-[#E6DCDD] rounded-lg hover:bg-[#F1ECEA] cursor-pointer"
              >
                Reset to 4 Main Products
              </button>
              <button
                onClick={() => onRequestQuote('Custom Agricultural Commodity')}
                className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#A90F1C] rounded-lg hover:bg-[#800D18] cursor-pointer"
              >
                Submit Sourcing Inquiry
              </button>
            </div>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onRequestQuote={(prodName) => onRequestQuote(prodName)}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-[#E6DCDD] overflow-hidden shadow-xs">
            <div className="p-4 bg-[#FAF8F7] border-b border-[#E6DCDD] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#A90F1C]">
                Technical Laboratory Parameters & Container Load Matrix ({filteredProducts.length} Commodities)
              </span>
              <span className="text-[11px] text-[#6F6062] font-mono">
                Standard Basis: 20ft Dry FCL · FOB Port of Djibouti
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#800D18] text-[#FAF8F7] text-[11px] uppercase tracking-wider border-b border-[#A90F1C]/40">
                    <th className="py-3.5 px-4 font-semibold">Commodity & Grade</th>
                    <th className="py-3.5 px-4 font-semibold">Category</th>
                    <th className="py-3.5 px-4 font-semibold">Origin & Elevation</th>
                    <th className="py-3.5 px-4 font-semibold">Moisture</th>
                    <th className="py-3.5 px-4 font-semibold">Purity / Screen</th>
                    <th className="py-3.5 px-4 font-semibold">20ft FCL Payload</th>
                    <th className="py-3.5 px-4 font-semibold">Harvest Season</th>
                    <th className="py-3.5 px-4 font-semibold text-right">Inquire</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E6DCDD] text-[#241719]">
                  {filteredProducts.map((product) => {
                    const moistureSpec =
                      product.keySpecs.find((s) => s.label.toLowerCase().includes('moisture'))?.value || 'Max 11.5%';
                    const puritySpec =
                      product.keySpecs.find(
                        (s) => s.label.toLowerCase().includes('purity') || s.label.toLowerCase().includes('screen')
                      )?.value || 'Sortex Cleaned';

                    return (
                      <tr key={product.id} className="hover:bg-[#FAF8F7] transition-colors">
                        <td className="py-4 px-4">
                          <strong className="font-display text-sm font-bold text-[#241719] block">
                            {product.name}
                          </strong>
                          <span className="text-[11px] text-[#C51B2A] font-medium block">
                            {product.gradeTier}
                          </span>
                        </td>
                        <td className="py-4 px-4 font-mono text-[11px] text-[#6F6062]">
                          {product.category}
                        </td>
                        <td className="py-4 px-4">
                          <span className="block font-medium">{product.originRegions[0]}</span>
                          <span className="text-[10px] text-[#6F6062] font-mono">{product.altitude || 'Highland'}</span>
                        </td>
                        <td className="py-4 px-4 font-mono font-semibold text-[#A90F1C]">
                          {moistureSpec}
                        </td>
                        <td className="py-4 px-4 font-mono">
                          {puritySpec}
                        </td>
                        <td className="py-4 px-4 font-mono font-medium">
                          {product.containerLoad20ft || '19 MT'}
                        </td>
                        <td className="py-4 px-4 text-[11px] text-[#6F6062]">
                          {product.harvestSeason ? product.harvestSeason.split('·')[0].trim() : 'Oct – Jan'}
                        </td>
                        <td className="py-4 px-4 text-right">
                          <button
                            onClick={() => onRequestQuote(product.name)}
                            className="inline-flex items-center gap-1 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white bg-[#A90F1C] hover:bg-[#800D18] rounded transition-colors cursor-pointer whitespace-nowrap shadow-xs"
                          >
                            <span>Quote</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </section>

      {/* 5. CROP HARVEST SCHEDULE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-body">
        <div className="bg-white rounded-2xl border border-[#E6DCDD] p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
              <span className="text-eyebrow-label text-[#C51B2A] block mb-1 font-bold">
                Commercial Crop Seasonality
              </span>
              <h3 className="font-display text-2xl font-bold text-[#241719]">
                Harvest & Ocean Shipping Windows for Our 4 Main Commodities.
              </h3>
              <p className="text-xs sm:text-sm text-[#6F6062] mt-1">
                Standard agricultural timeline for forward contracting and container booking.
              </p>
            </div>
            <div className="inline-flex items-center gap-3 text-xs text-[#6F6062]">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C51B2A]" />
                Harvest Window
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#A90F1C]" />
                Peak Export Window
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-[#FAF8F7] border border-[#E6DCDD]">
              <strong className="text-sm font-display font-bold text-[#241719] block mb-1">
                1. Arabica Specialty Coffee
              </strong>
              <div className="text-[11px] font-mono text-[#C51B2A] font-semibold mb-2">
                Harvest: Oct – Jan · Peak Ship: Jan – Aug
              </div>
              <p className="text-[11px] text-[#6F6062] leading-relaxed">
                Yirgacheffe and Sidama/Guji parchment milling commences in December. First container bills of lading issued late January through Port of Djibouti.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF8F7] border border-[#E6DCDD]">
              <strong className="text-sm font-display font-bold text-[#241719] block mb-1">
                2. Whitish Humera Sesame
              </strong>
              <div className="text-[11px] font-mono text-[#C51B2A] font-semibold mb-2">
                Harvest: Oct – Dec · Peak Ship: Nov – Jun
              </div>
              <p className="text-[11px] text-[#6F6062] leading-relaxed">
                Machine-cleaned, 99.5% optical sortexed Humera white sesame ships promptly in November following intensive sun drying and optical color sorting.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF8F7] border border-[#E6DCDD]">
              <strong className="text-sm font-display font-bold text-[#241719] block mb-1">
                3. Magna White Teff Grain
              </strong>
              <div className="text-[11px] font-mono text-[#C51B2A] font-semibold mb-2">
                Harvest: Nov – Feb · Peak Ship: Jan – Sep
              </div>
              <p className="text-[11px] text-[#6F6062] leading-relaxed">
                Cleaned Magna White Teff available in 25kg/50kg export bags with complete phytosanitary health clearance and gluten-free certification.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF8F7] border border-[#E6DCDD]">
              <strong className="text-sm font-display font-bold text-[#241719] block mb-1">
                4. White Pea Beans (Canning)
              </strong>
              <div className="text-[11px] font-mono text-[#C51B2A] font-semibold mb-2">
                Harvest: Oct – Jan · Peak Ship: Year-Round
              </div>
              <p className="text-[11px] text-[#6F6062] leading-relaxed">
                Canning-grade navy beans stored in climate-managed warehouses for continuous 24 MT container dispatch to international food canners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. EXPORT PACKAGING STANDARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-body">
        <div className="bg-white rounded-2xl border border-[#E6DCDD] p-6 sm:p-8 shadow-xs">
          <div className="max-w-3xl mb-8">
            <span className="text-eyebrow-label text-[#C51B2A] block mb-1 font-bold">
              Commercial Packaging & Handling
            </span>
            <h3 className="font-display text-2xl font-bold text-[#241719]">
              Standard Export Packaging & Container Capacities.
            </h3>
            <p className="text-xs sm:text-sm text-[#6F6062] mt-1">
              Every shipment is packed to withstand tropical transit and ocean freight without degradation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-[#FAF8F7] border border-[#E6DCDD]">
              <div className="w-8 h-8 rounded-lg bg-[#A90F1C] text-[#FAF8F7] flex items-center justify-center mb-3">
                <PackageCheck className="w-4 h-4" />
              </div>
              <h4 className="font-display text-sm font-bold text-[#241719] mb-1">
                Hermetic Jute Bags
              </h4>
              <p className="text-xs text-[#6F6062] leading-relaxed">
                60 kg traditional natural jute bags with internal multi-barrier GrainPro liners protecting moisture and cup flavor.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF8F7] border border-[#E6DCDD]">
              <div className="w-8 h-8 rounded-lg bg-[#A90F1C] text-[#FAF8F7] flex items-center justify-center mb-3">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h4 className="font-display text-sm font-bold text-[#241719] mb-1">
                Polypropylene Bags
              </h4>
              <p className="text-xs text-[#6F6062] leading-relaxed">
                25 kg and 50 kg multi-ply woven PP export bags with UV resistance and food-grade inner coatings for sesame seeds and grains.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF8F7] border border-[#E6DCDD]">
              <div className="w-8 h-8 rounded-lg bg-[#A90F1C] text-[#FAF8F7] flex items-center justify-center mb-3">
                <Ship className="w-4 h-4" />
              </div>
              <h4 className="font-display text-sm font-bold text-[#241719] mb-1">
                20ft FCL Payloads
              </h4>
              <p className="text-xs text-[#6F6062] leading-relaxed">
                19.2 Metric Tons (320 bags) for coffee; 19.0 MT for sesame; 20.0 MT for teff; 24.0 MT for pulses.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF8F7] border border-[#E6DCDD]">
              <div className="w-8 h-8 rounded-lg bg-[#A90F1C] text-[#FAF8F7] flex items-center justify-center mb-3">
                <FileCheck2 className="w-4 h-4" />
              </div>
              <h4 className="font-display text-sm font-bold text-[#241719] mb-1">
                Export Clearances
              </h4>
              <p className="text-xs text-[#6F6062] leading-relaxed">
                Official ECTA cupping certificate, Phytosanitary quarantine certificate, Chamber Certificate of Origin, and ocean B/L.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CUSTOM SOURCING INQUIRY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-24 font-body">
        <div className="bg-white border border-[#E6DCDD] rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xs">
          <div className="max-w-xl">
            <span className="text-eyebrow-label text-[#C51B2A] block mb-1 font-bold">
              Custom Commercial Orders
            </span>
            <h3 className="font-display text-2xl font-bold text-[#241719]">
              Have Specific Origin, Grade, or Bag Stencil Requirements?
            </h3>
            <p className="text-xs sm:text-sm text-[#6F6062] mt-2 leading-relaxed">
              If your desired commodity variety, screen size, moisture limit, or customized packaging is not listed above, describe your parameters. Our trade desk provides tailored export quotations.
            </p>
          </div>
          <button
            onClick={() => onRequestQuote('Custom Agricultural Sourcing Inquiry')}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#A90F1C] hover:bg-[#800D18] rounded-lg transition-colors cursor-pointer whitespace-nowrap shadow-xs"
          >
            <span>Inquire About Custom Sourcing</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
