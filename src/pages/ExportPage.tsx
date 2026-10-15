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
    <div className="bg-[#FAF8F7] text-[#241719] min-h-screen">
      {/* Export Header: Plain Crimson with Description */}
      <section className="bg-[#800D18] text-white py-20 border-b border-[#A90F1C]/40 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C51B2A_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-eyebrow-label text-[#FAF8F7]/85 block mb-3 font-body">
            TRADE & SHIPPING PROTOCOL
          </span>
          <h1 className="text-main-heading font-display font-bold text-white mb-5 text-balance">
            From Ethiopian Origins to International Markets.
          </h1>
          <p className="text-intro-paragraph font-body max-w-3xl mx-auto text-[#FAF8F7]/90 leading-relaxed mb-6">
            A comprehensive commercial guide to specifications, Incoterms, trade documentation, and shipping workflows via the Port of Djibouti maritime corridor.
          </p>

          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs text-white border border-white/20">
            <ShieldCheck className="w-4 h-4 text-[#C51B2A]" />
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
        <div className="bg-white rounded-2xl border border-[#E6DCDD] p-8 sm:p-10 shadow-xs font-body">
          <div className="max-w-2xl mb-8">
            <span className="text-eyebrow-label text-[#A90F1C] block mb-1">
              Commercial Structures
            </span>
            <h2 className="text-section-heading font-display font-bold text-[#241719]">
              Trade Terms & Payment Instruments
            </h2>
            <p className="text-xs sm:text-sm text-[#6F6062] mt-2 leading-relaxed font-body">
              We structure export contracts strictly under ICC Incoterms® 2020 and recognized international banking standards:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Incoterms */}
            <div className="space-y-4 font-body">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#A90F1C] flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#C51B2A]" />
                <span>Applicable Incoterms® 2020</span>
              </h3>
              <div className="space-y-3 text-xs">
                <div className="p-4 rounded-xl bg-[#FAF8F7] border border-[#E6DCDD]">
                  <strong className="text-sm font-display text-[#241719] block">FOB Port of Djibouti (Free on Board)</strong>
                  <p className="text-[#6F6062] mt-1 font-body">
                    Baseline standard for most commercial buyers. Shumabo manages inland Ethiopian transport, export clearance, and loading onto ocean vessel at Djibouti. Ocean freight contracted by buyer.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#FAF8F7] border border-[#E6DCDD]">
                  <strong className="text-sm font-display text-[#241719] block">CFR / CIF Destination Port</strong>
                  <p className="text-[#6F6062] mt-1 font-body">
                    Available on major container routes. Shumabo books marine freight (and marine cargo insurance for CIF) to buyer’s specified discharge port.
                  </p>
                </div>
              </div>
            </div>

            {/* Payment Instruments */}
            <div className="space-y-4 font-body">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#A90F1C] flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-[#C51B2A]" />
                <span>Commercial Payment Mechanisms</span>
              </h3>
              <div className="space-y-3 text-xs">
                <div className="p-4 rounded-xl bg-[#FAF8F7] border border-[#E6DCDD]">
                  <strong className="text-sm font-display text-[#241719] block">Irrevocable Letter of Credit (L/C at Sight)</strong>
                  <p className="text-[#6F6062] mt-1 font-body">
                    Opened by a recognized first-class international bank, confirmed in accordance with agreed contract terms. Standard instrument for bulk volume shipments.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#FAF8F7] border border-[#E6DCDD]">
                  <strong className="text-sm font-display text-[#241719] block">Cash Against Documents (CAD) / T.T. Structures</strong>
                  <p className="text-[#6F6062] mt-1 font-body">
                    Discussed for established trade relationships or trial orders, structured around commercial proforma requirements and Ethiopian National Bank regulations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section: Standard Commercial Documentation */}
        <div className="bg-white rounded-2xl border border-[#E6DCDD] p-8 sm:p-10 shadow-xs font-body">
          <div className="max-w-2xl mb-8">
            <span className="text-eyebrow-label text-[#A90F1C] block mb-1">
              Regulatory Compliance
            </span>
            <h2 className="text-section-heading font-display font-bold text-[#241719]">
              Standard Commercial Export Documentation
            </h2>
            <p className="text-xs sm:text-sm text-[#6F6062] mt-2 leading-relaxed font-body">
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
                title: 'ECTA / ECX Quality Certificate',
                desc: 'Statutory grading report confirming moisture percentage, purity, and sensory profile.'
              }
            ].map((doc, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-[#FAF8F7] border border-[#E6DCDD] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2 text-xs font-mono text-[#A90F1C]">
                    <FileText className="w-4 h-4" />
                    <span>Document 0{idx + 1}</span>
                  </div>
                  <h3 className="font-display text-base font-bold text-[#241719] mb-1">
                    {doc.title}
                  </h3>
                  <p className="text-xs text-[#6F6062] leading-relaxed">
                    {doc.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="bg-[#800D18] rounded-3xl p-8 sm:p-12 text-white text-center space-y-6">
          <span className="text-eyebrow-label text-[#FAF8F7]/85 block font-body">
            Direct Trade Inquiries
          </span>
          <h2 className="text-section-heading font-display font-bold text-white">
            Ready to Plan Your Export Consignment?
          </h2>
          <p className="text-xs sm:text-sm text-[#FAF8F7]/90 max-w-2xl mx-auto font-body leading-relaxed">
            Submit your specific commodity and port destination requirements for a prompt proforma review.
          </p>
          <button
            onClick={() => onRequestQuote('General Export Consignment Inquiry')}
            className="inline-flex items-center gap-2 px-8 py-4 text-xs font-semibold uppercase tracking-wider text-[#241719] bg-white hover:bg-[#FAF8F7] rounded-xl transition-all shadow-md cursor-pointer font-body"
          >
            <span>Request a Commercial Quotation</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
