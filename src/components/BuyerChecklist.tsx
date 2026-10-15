import React, { useState } from 'react';
import { CheckSquare, Square, ArrowUpRight } from 'lucide-react';

interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  recommendedDetail: string;
}

const CHECKLIST_ITEMS: ChecklistItem[] = [
  {
    id: 'spec',
    title: '1. Desired Commodity Grade & Processing Method',
    description: 'Specific grade, processing method (washed or natural), purity percentage, or moisture tolerance.',
    recommendedDetail: 'e.g. Washed Grade 1 Yirgacheffe, or 99.5% sortexed Humera sesame with max 6% moisture'
  },
  {
    id: 'volume',
    title: '2. Volume / Container Count',
    description: 'Estimated metric tonnage or number of 20ft Full Container Loads (FCL).',
    recommendedDetail: 'Standard FCL coffee: ~19.2 MT (320 bags); Sesame: ~19 MT (380 bags)'
  },
  {
    id: 'destination',
    title: '3. Target Discharge Seaport & Customs Country',
    description: 'Exact port of entry (e.g. Rotterdam, Antwerp, Jebel Ali, Jeddah, Hamburg, Houston).',
    recommendedDetail: 'Sea shipments routed via the Port of Djibouti maritime corridor'
  },
  {
    id: 'packaging',
    title: '4. Packaging & Bag Labeling Specifications',
    description: 'Bag type and lining required to protect commodity against maritime moisture.',
    recommendedDetail: 'e.g. 60kg jute bags with GrainPro hermetic liner, or 50kg double woven PP bags'
  },
  {
    id: 'incoterms',
    title: '5. Preferred Incoterms 2020 Basis',
    description: 'FOB Djibouti (buyer books sea freight) or CFR/CIF (seller quotes ocean shipping & insurance).',
    recommendedDetail: 'FOB Port of Djibouti is customary baseline; CIF available on major liner routes'
  },
  {
    id: 'documents',
    title: '6. Destination Regulatory Documentation Demands',
    description: 'Any destination-specific certificates required by your country’s customs authority.',
    recommendedDetail: 'Phytosanitary, Certificate of Origin, Quality/Weight Inspection, Fumigation'
  }
];

interface BuyerChecklistProps {
  onApplyToChecklistQuote: (preparedNotes: string) => void;
}

export const BuyerChecklist: React.FC<BuyerChecklistProps> = ({ onApplyToChecklistQuote }) => {
  const [checkedIds, setCheckedIds] = useState<string[]>(['spec', 'volume', 'destination']);

  const toggleCheck = (id: string) => {
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const completedCount = checkedIds.length;
  const progressPercent = Math.round((completedCount / CHECKLIST_ITEMS.length) * 100);

  const handleApply = () => {
    const activeItems = CHECKLIST_ITEMS.filter((item) => checkedIds.includes(item.id));
    const summary = activeItems
      .map((item) => `• ${item.title}: Prepared to confirm (${item.recommendedDetail})`)
      .join('\n');
    const preparedNotes = `Pre-Quotation Checklist Alignment:\n${summary}`;
    onApplyToChecklistQuote(preparedNotes);
  };

  return (
    <div className="bg-white border border-[#E6DCDD] rounded-2xl p-6 sm:p-8 shadow-xs font-body">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E6DCDD]">
        <div>
          <span className="text-eyebrow-label text-[#A90F1C] block mb-1">
            Procurement Tool
          </span>
          <h3 className="font-display text-2xl font-bold text-[#241719] mt-1">
            Information to Prepare Before Requesting a Quote
          </h3>
          <p className="text-xs sm:text-sm text-[#6F6062] mt-1 font-body">
            Ensure your procurement inquiry includes essential trade parameters for an expedited commercial review.
          </p>
        </div>

        {/* Readiness Meter */}
        <div className="bg-[#FAF8F7] p-4 rounded-xl border border-[#E6DCDD] text-right shrink-0">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#6F6062] block font-body">
            Inquiry Readiness
          </span>
          <div className="flex items-baseline justify-end gap-1.5 mt-0.5">
            <span className="font-mono text-2xl font-bold text-[#A90F1C]">{progressPercent}%</span>
            <span className="text-xs text-[#6F6062]">({completedCount}/{CHECKLIST_ITEMS.length})</span>
          </div>
          <div className="w-32 h-1.5 bg-[#E6DCDD] rounded-full mt-2 overflow-hidden">
            <div
              className="h-full bg-[#A90F1C] rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Checklist Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        {CHECKLIST_ITEMS.map((item) => {
          const isChecked = checkedIds.includes(item.id);
          return (
            <div
              key={item.id}
              onClick={() => toggleCheck(item.id)}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                isChecked
                  ? 'border-[#A90F1C]/60 bg-[#FAF8F7]'
                  : 'border-[#E6DCDD] bg-white hover:border-[#A90F1C]/30'
              }`}
            >
              <div className="flex items-start gap-3">
                <button
                  type="button"
                  className="mt-0.5 text-[#A90F1C] focus:outline-none cursor-pointer"
                  aria-label={`Toggle ${item.title}`}
                >
                  {isChecked ? (
                    <CheckSquare className="w-5 h-5 text-[#A90F1C]" />
                  ) : (
                    <Square className="w-5 h-5 text-[#6F6062]/60" />
                  )}
                </button>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#241719] font-display">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#6F6062] mt-1 leading-relaxed font-body">
                    {item.description}
                  </p>
                  <p className="text-[11px] text-[#A90F1C] font-medium mt-1.5 font-body">
                    {item.recommendedDetail}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Action Footer */}
      <div className="pt-4 border-t border-[#E6DCDD] flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-body">
        <p className="text-xs text-[#6F6062]">
          Checking items highlights details you are ready to confirm with Shumabo's trading desk.
        </p>
        <button
          onClick={handleApply}
          className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#A90F1C] hover:bg-[#800D18] rounded-lg transition-colors cursor-pointer shadow-xs whitespace-nowrap"
        >
          <span>Transfer Selected Items to Quote Form</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
