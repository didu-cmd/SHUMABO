import React from 'react';
import { PageRoute } from '../types';
import { BuyerChecklist } from '../components/BuyerChecklist';
import {
  FileText,
  CreditCard,
  ArrowUpRight,
  Compass,
  ShieldCheck
} from 'lucide-react';

interface ExportPageProps {
  onNavigate: (page: PageRoute) => void;
  onRequestQuote: (initialNote?: string) => void;
}

export const ExportPage: React.FC<ExportPageProps> = ({ onNavigate, onRequestQuote }) => {
  return (
    <div className="bg-[#F8F5EF] text-[#2B1D16] min-h-screen">
      {/* Export Header: Plain Brown with Description (Services Page Style) */}
      <section className="bg-[#2B1D16] text-[#EAE1D3] py-20 border-b border-[#59351F]/50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#B88B50_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-eyebrow-label text-[#B88B50] block mb-3 font-body">
            TRADE & SHIPPING PROTOCOL
          </span>
          <h1 className="text-main-heading font-display font-bold text-white mb-5 text-balance">
            From Ethiopian Origins to International Markets.
          </h1>
          <p className="text-intro-paragraph font-body max-w-3xl mx-auto text-[#EAE1D3]/85 leading-relaxed mb-6">
            A comprehensive commercial guide to specifications, Incoterms, trade documentation, and shipping workflows via the Port of Djibouti maritime corridor.
          </p>

          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs text-[#EAE1D3] border border-white/15">
            <ShieldCheck className="w-4 h-4 text-[#B88B50]" />
            <span>ICC Incoterms® 2020 · Port of Djibouti Corridor · Full Negotiable Document Dossier</span>
          </div>
        </div>
      </section>

      {/* Main Trade Parameters Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Interactive Procurement Checklist Tool */}
        <div>
          <BuyerChecklist
            onApplyToChecklistQuote={(notes) => {
              onRequestQuote(notes);
            }}
          />
        </div>

        {/* Section: Trade Terms & Payment */}
        <div className="bg-white rounded-2xl border border-[#E5DED2] p-8 sm:p-10 shadow-xs font-body">
          <div className="max-w-2xl mb-8">
            <span className="text-eyebrow-label text-[#B88B50] block mb-1">
              Commercial Structures
            </span>
            <h2 className="text-section-heading font-display font-bold text-[#2B1D16]">
              Trade Terms & Payment Instruments
            </h2>
            <p className="text-xs sm:text-sm text-[#6F6258] mt-2 leading-relaxed font-body">
              We structure export contracts strictly under ICC Incoterms® 2020 and recognized international banking standards:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Incoterms */}
            <div className="space-y-4 font-body">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#59351F] flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#B88B50]" />
                <span>Applicable Incoterms® 2020</span>
              </h3>
              <div className="space-y-3 text-xs">
                <div className="p-4 rounded-xl bg-[#F8F5EF] border border-[#E5DED2]">
                  <strong className="text-sm font-display text-[#2B1D16] block">FOB Port of Djibouti (Free on Board)</strong>
                  <p className="text-[#6F6258] mt-1 font-body">
                    Baseline standard for most commercial buyers. Shumabo manages inland Ethiopian transport, export clearance, and loading onto ocean vessel at Djibouti. Ocean freight contracted by buyer.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#F8F5EF] border border-[#E5DED2]">
                  <strong className="text-sm font-display text-[#2B1D16] block">CFR / CIF Destination Port</strong>
                  <p className="text-[#6F6258] mt-1 font-body">
                    Available on major container routes. Shumabo books marine freight (and marine cargo insurance for CIF) to buyer’s specified discharge port.
                  </p>
                </div>
              </div>
            </div>

            {/* Payment Instruments */}
            <div className="space-y-4 font-body">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#59351F] flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-[#B88B50]" />
                <span>Commercial Payment Mechanisms</span>
              </h3>
              <div className="space-y-3 text-xs">
                <div className="p-4 rounded-xl bg-[#F8F5EF] border border-[#E5DED2]">
                  <strong className="text-sm font-display text-[#2B1D16] block">Irrevocable Letter of Credit (L/C at Sight)</strong>
                  <p className="text-[#6F6258] mt-1 font-body">
                    Opened by a recognized first-class international bank, confirmed in accordance with agreed contract terms. Standard instrument for bulk volume shipments.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#F8F5EF] border border-[#E5DED2]">
                  <strong className="text-sm font-display text-[#2B1D16] block">Cash Against Documents (CAD) / T.T. Structures</strong>
                  <p className="text-[#6F6258] mt-1 font-body">
                    Discussed for established trade relationships or trial orders, structured around commercial proforma requirements and Ethiopian National Bank regulations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section: Standard Commercial Documentation */}
        <div className="bg-white rounded-2xl border border-[#E5DED2] p-8 sm:p-10 shadow-xs font-body">
          <div className="max-w-2xl mb-8">
            <span className="text-eyebrow-label text-[#B88B50] block mb-1">
              Regulatory Compliance
            </span>
            <h2 className="text-section-heading font-display font-bold text-[#2B1D16]">
              Standard Commercial Export Documentation
            </h2>
            <p className="text-xs sm:text-sm text-[#6F6258] mt-2 leading-relaxed font-body">
              International export consignments from Ethiopia are accompanied by a complete statutory shipping dossier:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: 'Commercial Invoice',
                desc: 'Full specification of commodity description, net and gross weights, unit price, Incoterm basis, and container numbers.'
              },
              {
                title: 'Packing List',
                desc: 'Detailed breakdown of bag counts, tare weights, container seals, and pallet configurations.'
              },
              {
                title: 'Ocean Bill of Lading (B/L)',
                desc: 'Full set clean on board Bills of Lading issued by the ocean carrier consigned according to L/C instructions.'
              },
              {
                title: 'Certificate of Origin',
                desc: 'Issued by the Ethiopian Chamber of Commerce certifying Ethiopian cultivation origin.'
              },
              {
                title: 'Phytosanitary Certificate',
                desc: 'Issued by the Ethiopian Ministry of Agriculture certifying plant health and absence of quarantine pests.'
              },
              {
                title: 'Quality & Weight Certificate',
                desc: 'Statutory inspection report (ECTA for coffee, or independent inspection agencies like SGS upon contract agreement).'
              },
              {
                title: 'Fumigation Certificate',
                desc: 'Issued following certified treatment of containers prior to seal affixation.'
              },
              {
                title: 'Non-GMO / Purity Analysis',
                desc: 'Provided upon contract specification for sesame seeds and food-grade grains.'
              },
              {
                title: 'Custom Destination Documents',
                desc: 'Any embassy legalizations or specific certificates clarified during quotation discussions.'
              }
            ].map((doc, i) => (
              <div key={i} className="p-4 rounded-xl bg-[#F8F5EF] border border-[#E5DED2] text-xs">
                <div className="flex items-center gap-2 mb-1.5">
                  <FileText className="w-4 h-4 text-[#B88B50]" />
                  <strong className="text-[#2B1D16] font-display">{doc.title}</strong>
                </div>
                <p className="text-[#6F6258] leading-relaxed font-body">{doc.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Maritime Corridor & Djibouti Transit */}
        <div className="bg-[#2B1D16] text-[#EAE1D3] rounded-2xl p-8 sm:p-10 font-body">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-4">
              <span className="text-eyebrow-label text-[#B88B50] block">
                Trade Geography
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                The Port of Djibouti Gateway
              </h3>
              <p className="text-xs sm:text-sm text-[#EAE1D3]/85 leading-relaxed font-body">
                As a landlinked nation, Ethiopia’s sea trade connects to world oceans via the modern multimodal corridor connecting Addis Ababa to the deepwater container terminals at the <strong>Port of Djibouti</strong> (including Doraleh Container Terminal).
              </p>
              <p className="text-xs sm:text-sm text-[#EAE1D3]/80 leading-relaxed font-body">
                Commodities are stuffed in 20ft dry containers, inspected, cleared through Ethiopian customs, and loaded on scheduled container vessels operating weekly liner services to Europe, the Middle East, India, China, Southeast Asia, and North America.
              </p>
            </div>

            <div className="md:col-span-5 bg-[#59351F]/40 border border-[#B88B50]/30 rounded-xl p-6 space-y-3 text-xs">
              <h4 className="font-bold uppercase tracking-wider text-[#B88B50] font-body">
                Typical Maritime Transit Windows
              </h4>
              <ul className="space-y-2 text-[#EAE1D3]/80 font-body">
                <li>• <strong>Red Sea / Arabian Gulf:</strong> ~5–12 days transit</li>
                <li>• <strong>Mediterranean / Southern Europe:</strong> ~14–22 days transit</li>
                <li>• <strong>Northwestern Europe (Rotterdam/Antwerp):</strong> ~20–30 days transit</li>
                <li>• <strong>East Asia & China:</strong> ~20–32 days transit</li>
                <li>• <strong>North America East Coast:</strong> ~30–45 days transit</li>
              </ul>
              <p className="text-[11px] text-[#EAE1D3]/60 italic pt-2 border-t border-[#59351F] font-body">
                *Transit times are estimates dependent on carrier schedules and routing.
              </p>
            </div>
          </div>
        </div>

        {/* Ready to Discuss Export CTA */}
        <div className="text-center py-6 font-body">
          <h3 className="font-display text-2xl font-bold text-[#2B1D16] mb-3">
            Ready to Discuss Your Export Requirements?
          </h3>
          <p className="text-xs sm:text-sm text-[#6F6258] max-w-lg mx-auto mb-6 font-body">
            Contact our trade desk with your target specifications, container volume, and destination discharge port.
          </p>
          <button
            onClick={() => onRequestQuote()}
            className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#59351F] hover:bg-[#2B1D16] rounded-lg transition-colors cursor-pointer shadow-xs"
          >
            <span>Submit Export Quotation Request</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
