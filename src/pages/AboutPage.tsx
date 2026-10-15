import React, { useState } from 'react';
import { PageRoute } from '../types';
import {
  MapPin,
  CheckCircle2,
  ShieldCheck,
  FileCheck2,
  Layers,
  ArrowUpRight,
  Award,
  Globe2,
  Wheat,
  Coffee,
  Check,
  Sparkles,
  Search,
  Scale
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageRoute) => void;
  onRequestQuote: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onRequestQuote }) => {
  const [activeValueTab, setActiveValueTab] = useState<number>(0);

  const coreValues = [
    {
      title: 'Origin Integrity & Traceability',
      subtitle: 'From Highland Farmers to International Seaports',
      description:
        'We believe authenticity begins at origin. Every coffee lot, sesame seed batch, and grain shipment is traceable to its verified regional growing zone—whether the high-altitude forests of Guji and Yirgacheffe or the fertile plains of Humera and Gondar.',
      detail: 'Verifiable regional origin declarations on all commercial shipping invoices.'
    },
    {
      title: 'Scientific Quality Compliance',
      subtitle: 'Moisture, Purity & Physical Grading',
      description:
        'Commodity trade is governed by rigorous tolerances. We align strictly with contract laboratory specifications: green coffee moisture regulated strictly below 11.5%, Humera sesame purity exceeding 99% machine cleaned/sortexed, and grains analyzed for minimum admixtures.',
      detail: 'Pre-shipment laboratory testing and official moisture retention checks.'
    },
    {
      title: 'Commercial Transparency',
      subtitle: 'Clear Pricing Structures & Honest Timelines',
      description:
        'We never quote speculative prices or promise unachievable shipping dates. Our commercial offers clearly delineate FOB Djibouti baseline costs, ocean carrier freight indices, and realistic harvest availability to ensure complete buyer confidence.',
      detail: 'Itemized cost basis without hidden handling surcharges.'
    },
    {
      title: 'Contractual Reliability',
      subtitle: 'Incoterms® 2020 & First-Class Banking',
      description:
        'International trade succeeds on dependable execution. We structure transactions using standard ICC Incoterms rules and recognized banking instruments, ensuring transparent milestones from warehouse packing to container bill of lading issuance.',
      detail: 'Strict execution under Irrevocable Letters of Credit and CAD terms.'
    },
    {
      title: 'Enduring Buyer Partnerships',
      subtitle: 'Built for Multi-Harvest Collaboration',
      description:
        'We prioritize long-term commercial relationships over one-off spot deals. By understanding our buyers’ processing lines, roastery profiles, and packing schedules, we build seasonal supply programs that importers can rely on harvest after harvest.',
      detail: 'Dedicated trade officers assigned to recurrent client accounts.'
    }
  ];

  const complianceFramework = [
    {
      id: 'ecta',
      title: 'ECTA Coffee Export Quality Registration',
      authority: 'Ethiopian Coffee & Tea Authority',
      type: 'Statutory Export Regulatory Mandate',
      description: 'Official sensory evaluation (cupping), moisture analysis, screen grading, and export clearance registration for green coffee beans prior to container loading.',
      status: 'Statutory Verification for All Coffee Exports'
    },
    {
      id: 'ecx',
      title: 'ECX Commodity Standard Certification',
      authority: 'Ethiopian Commodity Exchange',
      type: 'Quality Grading & Warehouse Verification',
      description: 'Standardized grading system confirming purity, oil content, and moisture benchmarks for oilseeds (sesame) and cereal grains traded through statutory commercial channels.',
      status: 'Standard Export Trade Grade Compliance'
    },
    {
      id: 'phyto',
      title: 'International Phytosanitary Certification',
      authority: 'Ministry of Agriculture Plant Health Directorate',
      type: 'International Quarantine Health Document',
      description: 'Statutory inspection certifying that agricultural commodities are inspected, free from injurious quarantine pests, and treated according to importing country regulations.',
      status: 'Furnished with Every Export Consignment'
    },
    {
      id: 'coo',
      title: 'Official Certificate of Origin',
      authority: 'Ethiopian Chamber of Commerce & Sectoral Associations',
      type: 'Legal Origin Verification',
      description: 'Document validating the Ethiopian origin of goods for destination customs clearance, preferential trade agreements, and bilateral tariff compliance.',
      status: 'Issued per Container Bill of Lading'
    },
    {
      id: 'sgs',
      title: 'Independent Pre-Shipment Inspection (SGS / Bureau Veritas)',
      authority: 'SGS / Bureau Veritas / Cotecna Coordination',
      type: 'Third-Party Verification (Buyer Option)',
      description: 'Independent surveyor inspection coordinated at port of departure upon buyer request, inspecting weight, container sealing, container integrity, and independent sampling.',
      status: 'Available per Buyer Contract Terms'
    },
    {
      id: 'specialty',
      title: 'Specialty & Organic Lot Certification',
      authority: 'Regional Cooperative Unions & Organic Certifiers',
      type: 'Specialized Lot Certification',
      description: 'Traceable certifications (EU Organic, USDA NOP, Rainforest Alliance) confirmed on specific cooperative lots upon harvest availability and pre-season booking.',
      status: 'Confirmed upon Lot Specification'
    }
  ];

  return (
    <div className="bg-[#FAF8F7] text-[#241719] min-h-screen">
      {/* =========================================================================
          1. ABOUT HEADER: PLAIN CRIMSON WITH DESCRIPTION
         ========================================================================= */}
      <section className="bg-[#800D18] text-white py-20 border-b border-[#A90F1C]/40 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C51B2A_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-eyebrow-label text-[#FAF8F7]/85 block mb-3 font-body">
            ORIGIN & CORPORATE PROFILE
          </span>
          <h1 className="text-main-heading font-display font-bold text-white mb-5 text-balance">
            Rooted in Ethiopian Origins. Built for Global Trade.
          </h1>
          <p className="text-intro-paragraph font-body max-w-3xl mx-auto text-[#FAF8F7]/90 leading-relaxed mb-6">
            Shumabo Import & Export connects the rich agricultural heritage of Ethiopia with international procurement departments through quality-conscious sourcing, verified commercial specifications, and direct export discussions.
          </p>

          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs text-white border border-white/20">
            <ShieldCheck className="w-4 h-4 text-[#C51B2A]" />
            <span>Addis Ababa HQ · Regional Farm-Gate Sourcing · Direct Port of Djibouti Freight Corridor</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. CORPORATE NARRATIVE & SOURCING PHILOSOPHY
         ========================================================================= */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Narrative with Editorial Callout */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-eyebrow-label text-[#A90F1C] block">
              Our Foundations
            </span>
            <h2 className="text-section-heading font-display font-bold text-[#241719] leading-tight text-balance">
              An Established Commercial Partner in Ethiopian Commodities.
            </h2>
            <p className="text-xs sm:text-sm text-[#6F6062] font-body leading-relaxed">
              Operating from the diplomatic and commercial capital of Addis Ababa, Shumabo Import & Export was established to provide a transparent, dependable trade channel for international buyers of Ethiopian agricultural goods.
            </p>
            <p className="text-xs sm:text-sm text-[#6F6062] font-body leading-relaxed">
              Ethiopia is globally celebrated as the botanical origin of Arabica coffee and one of the world's most vital suppliers of natural white sesame seeds and nutrient-dense highland grains. However, successful international trade requires more than agricultural abundance—it demands rigorous export grading, moisture containment, prompt shipping documentation, and clear commercial contracts.
            </p>
            <p className="text-xs sm:text-sm text-[#6F6062] font-body leading-relaxed">
              Rather than making generic promises, Shumabo operates on a specification-first approach: we evaluate your exact technical requirements, confirm crop availability across verified regional origins, and coordinate commercial delivery through the modern trade corridor connecting Addis Ababa to the Port of Djibouti.
            </p>

            {/* Proposed Mission & Vision Inset */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-5 rounded-2xl border border-[#E6DCDD] shadow-xs">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#A90F1C] block font-body mb-1">
                  Proposed Mission
                </span>
                <p className="text-xs text-[#241719] font-display italic leading-snug">
                  "To connect Ethiopian agricultural commodities with international buyers through quality-conscious sourcing, transparent commercial discussions, and lasting business relationships."
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-[#E6DCDD] shadow-xs">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#A90F1C] block font-body mb-1">
                  Proposed Vision
                </span>
                <p className="text-xs text-[#241719] font-display italic leading-snug">
                  "To build meaningful commercial connections between Ethiopian agricultural opportunities and international markets."
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual of Quality Inspection */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#E6DCDD] shadow-lg bg-[#F1ECEA] aspect-4/3">
              <img
                src="/images/about_quality_inspection_1791913761072.jpg"
                alt="Agricultural trade inspection of coffee and grains on traditional raised African drying beds"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#800D18]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-body">
                <span className="text-[10px] uppercase tracking-wider text-[#FAF8F7]/90 font-semibold block">
                  Quality Inspection At Origin
                </span>
                <span>High-altitude sun drying & defect analysis across Ethiopian cooperatives.</span>
              </div>
            </div>

            {/* Floating Metric Inset */}
            <div className="mt-4 p-4 rounded-xl bg-white border border-[#E6DCDD] shadow-xs flex items-center justify-between font-body text-xs">
              <div>
                <span className="text-[#6F6062] block">Primary Loading Port:</span>
                <strong className="text-[#241719] font-semibold">Port of Djibouti Maritime Gateway</strong>
              </div>
              <div className="text-right">
                <span className="text-[#6F6062] block">Transit Line:</span>
                <strong className="text-[#A90F1C] font-semibold">Direct Electrified Rail & Road</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. OUR CORE VALUES (INTERACTIVE VALUE PILLARS)
         ========================================================================= */}
      <section className="py-24 bg-white border-t border-b border-[#E6DCDD]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-eyebrow-label text-[#A90F1C] block mb-1">
              Core Principles
            </span>
            <h2 className="text-section-heading font-display font-bold text-[#241719] text-balance">
              The Values That Guide Our Commercial Trade.
            </h2>
            <p className="text-xs sm:text-sm text-[#6F6062] mt-3 font-body leading-relaxed">
              International agricultural commodity procurement requires dependable partners. Our operating model is built on five core pillars:
            </p>
          </div>

          {/* Interactive Values Selector */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Value Selector Tabs */}
            <div className="lg:col-span-5 space-y-2.5 font-body">
              {coreValues.map((val, idx) => {
                const isActive = activeValueTab === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveValueTab(idx)}
                    className={`w-full text-left p-4 rounded-xl transition-all cursor-pointer border ${
                      isActive
                        ? 'bg-[#800D18] text-white border-[#800D18] shadow-sm'
                        : 'bg-[#FAF8F7] text-[#241719] border-[#E6DCDD] hover:bg-[#F1ECEA]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider font-display">
                        0{idx + 1}. {val.title}
                      </span>
                      <span className={`text-[10px] font-mono font-semibold ${isActive ? 'text-[#FAF8F7]/85' : 'text-[#6F6062]'}`}>
                        Pillar
                      </span>
                    </div>
                    <p className={`text-xs mt-1 truncate ${isActive ? 'text-[#FAF8F7]/90' : 'text-[#6F6062]'}`}>
                      {val.subtitle}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Value Detail Display Panel */}
            <div className="lg:col-span-7 bg-[#FAF8F7] rounded-2xl p-8 sm:p-10 border border-[#E6DCDD] shadow-xs">
              <div className="flex items-center gap-2 mb-2 font-body text-xs text-[#A90F1C] font-semibold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-[#A90F1C]" />
                <span>Pillar 0{activeValueTab + 1} Deep Dive</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#241719] mb-2">
                {coreValues[activeValueTab].title}
              </h3>
              <p className="text-xs font-semibold text-[#A90F1C] uppercase tracking-wider mb-6 font-body">
                {coreValues[activeValueTab].subtitle}
              </p>

              <p className="text-xs sm:text-sm text-[#6F6062] font-body leading-relaxed mb-8">
                {coreValues[activeValueTab].description}
              </p>

              <div className="p-4 rounded-xl bg-white border border-[#E6DCDD] flex items-start gap-3 text-xs font-body">
                <CheckCircle2 className="w-5 h-5 text-[#A90F1C] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#241719] block">Commercial Assurance:</strong>
                  <span className="text-[#6F6062]">{coreValues[activeValueTab].detail}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. STATUTORY COMPLIANCE & QUALITY VERIFICATION FRAMEWORK
         ========================================================================= */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-eyebrow-label text-[#A90F1C] block mb-1">
            Statutory Compliance
          </span>
          <h2 className="text-section-heading font-display font-bold text-[#241719] text-balance">
            Export Standards & Quality Verification.
          </h2>
          <p className="text-xs sm:text-sm text-[#6F6062] mt-3 font-body leading-relaxed">
            Every export consignment from Ethiopia is regulated by statutory authorities and verified through rigorous pre-shipment inspections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {complianceFramework.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl border border-[#E6DCDD] p-6 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-[#6F6062] mb-2 font-body">
                  <span className="font-mono text-[11px] font-semibold text-[#A90F1C]">{item.authority}</span>
                  <span className="text-[10px] font-medium bg-[#FAF8F7] px-2 py-0.5 rounded border border-[#E6DCDD]">{item.type}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-[#241719] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#6F6062] font-body leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>
              <div className="pt-3 border-t border-[#E6DCDD] text-xs font-semibold text-[#A90F1C] font-body">
                ✓ {item.status}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          5. CALL TO ACTION BANNER
         ========================================================================= */}
      <section className="py-20 bg-[#800D18] text-white border-t border-[#A90F1C]/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-eyebrow-label text-[#FAF8F7]/85 block font-body">
            Begin Your Sourcing Dialogue
          </span>
          <h2 className="text-section-heading font-display font-bold text-white text-balance">
            Ready to Discuss Your Commodity Requirements?
          </h2>
          <p className="text-xs sm:text-sm text-[#FAF8F7]/90 max-w-2xl mx-auto font-body leading-relaxed">
            Connect with Shumabo's trading desk in Addis Ababa to discuss green coffee lots, sesame shipments, or grain procurement volumes.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 font-body">
            <button
              onClick={onRequestQuote}
              className="inline-flex items-center gap-2 px-8 py-4 text-xs font-semibold uppercase tracking-wider text-[#241719] bg-white hover:bg-[#FAF8F7] rounded-xl transition-all shadow-md cursor-pointer"
            >
              <span>Request a Commercial Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('products')}
              className="inline-flex items-center gap-2 px-8 py-4 text-xs font-semibold uppercase tracking-wider text-white border border-white/30 hover:bg-white/10 rounded-xl transition-all cursor-pointer"
            >
              <span>Explore Product Catalog</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
