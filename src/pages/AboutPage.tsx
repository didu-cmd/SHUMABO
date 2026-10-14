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
      title: 'Independent Pre-Shipment Inspection (Placeholder)',
      authority: 'SGS / Bureau Veritas / Cotecna Coordination',
      type: 'Third-Party Verification (Buyer Option)',
      description: 'Independent surveyor inspection coordinated at port of departure upon buyer request, inspecting weight, container sealing, container integrity, and independent sampling.',
      status: 'Available per Buyer Contract Terms'
    },
    {
      id: 'specialty',
      title: 'Specialty & Organic Traceability (Per Lot Confirmation)',
      authority: 'Regional Cooperative Unions & Organic Certifiers',
      type: 'Specialized Lot Certification',
      description: 'Traceable certifications (EU Organic, USDA NOP, Rainforest Alliance) confirmed on specific cooperative lots upon harvest availability and pre-season booking.',
      status: 'Confirmed upon Lot Specification'
    }
  ];

  return (
    <div className="bg-[#F8F5EF] text-[#2B1D16] min-h-screen">
      {/* =========================================================================
          1. ABOUT HEADER: PLAIN BROWN WITH DESCRIPTION (Services Page Style)
         ========================================================================= */}
      <section className="bg-[#2B1D16] text-[#EAE1D3] py-20 border-b border-[#59351F]/50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#B88B50_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-eyebrow-label text-[#B88B50] block mb-3 font-body">
            ORIGIN & CORPORATE PROFILE
          </span>
          <h1 className="text-main-heading font-display font-bold text-white mb-5 text-balance">
            Rooted in Ethiopian Origins. Built for Global Trade.
          </h1>
          <p className="text-intro-paragraph font-body max-w-3xl mx-auto text-[#EAE1D3]/85 leading-relaxed mb-6">
            Shumabo Import & Export connects the rich agricultural heritage of Ethiopia with international procurement departments through quality-conscious sourcing, verified commercial specifications, and direct export discussions.
          </p>

          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs text-[#EAE1D3] border border-white/15">
            <ShieldCheck className="w-4 h-4 text-[#B88B50]" />
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
            <span className="text-eyebrow-label text-[#B88B50] block">
              Our Foundations
            </span>
            <h2 className="text-section-heading font-display font-bold text-[#2B1D16] leading-tight text-balance">
              An Established Commercial Partner in Ethiopian Commodities.
            </h2>
            <p className="text-xs sm:text-sm text-[#6F6258] font-body leading-relaxed">
              Operating from the diplomatic and commercial capital of Addis Ababa, Shumabo Import & Export was established to provide a transparent, dependable trade channel for international buyers of Ethiopian agricultural goods.
            </p>
            <p className="text-xs sm:text-sm text-[#6F6258] font-body leading-relaxed">
              Ethiopia is globally celebrated as the botanical origin of Arabica coffee and one of the world's most vital suppliers of natural white sesame seeds and nutrient-dense highland grains. However, successful international trade requires more than agricultural abundance—it demands rigorous export grading, moisture containment, prompt shipping documentation, and clear commercial contracts.
            </p>
            <p className="text-xs sm:text-sm text-[#6F6258] font-body leading-relaxed">
              Rather than making generic promises, Shumabo operates on a specification-first approach: we evaluate your exact technical requirements, confirm crop availability across verified regional origins, and coordinate commercial delivery through the modern trade corridor connecting Addis Ababa to the Port of Djibouti.
            </p>

            {/* Proposed Mission & Vision Inset */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-5 rounded-2xl border border-[#E5DED2] shadow-xs">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#B88B50] block font-body mb-1">
                  Proposed Mission
                </span>
                <p className="text-xs text-[#2B1D16] font-display italic leading-snug">
                  "To connect Ethiopian agricultural commodities with international buyers through quality-conscious sourcing, transparent commercial discussions, and lasting business relationships."
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-[#E5DED2] shadow-xs">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#B88B50] block font-body mb-1">
                  Proposed Vision
                </span>
                <p className="text-xs text-[#2B1D16] font-display italic leading-snug">
                  "To build meaningful commercial connections between Ethiopian agricultural opportunities and international markets."
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual of Quality Inspection on Raised African Beds */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#E5DED2] shadow-lg bg-[#EAE1D3] aspect-4/3">
              <img
                src="/src/assets/images/about_quality_inspection_1791913761072.jpg"
                alt="Agricultural trade inspection of coffee and grains on traditional raised African drying beds"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B1D16]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-body">
                <span className="text-[10px] uppercase tracking-wider text-[#B88B50] font-semibold block">
                  Quality Inspection At Origin
                </span>
                <span>High-altitude sun drying & defect analysis across Ethiopian cooperatives.</span>
              </div>
            </div>

            {/* Floating Metric Inset */}
            <div className="mt-4 p-4 rounded-xl bg-white border border-[#E5DED2] shadow-xs flex items-center justify-between font-body text-xs">
              <div>
                <span className="text-[#6F6258] block">Primary Loading Port:</span>
                <strong className="text-[#2B1D16] font-semibold">Port of Djibouti Maritime Gateway</strong>
              </div>
              <div className="text-right">
                <span className="text-[#6F6258] block">Transit Line:</span>
                <strong className="text-[#59351F] font-semibold">Direct Electrified Rail & Road</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. OUR CORE VALUES (INTERACTIVE VALUE PILLARS)
         ========================================================================= */}
      <section className="py-24 bg-white border-t border-b border-[#E5DED2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-eyebrow-label text-[#B88B50] block mb-1">
              Core Principles
            </span>
            <h2 className="text-section-heading font-display font-bold text-[#2B1D16] text-balance">
              The Values That Guide Our Commercial Trade.
            </h2>
            <p className="text-xs sm:text-sm text-[#6F6258] mt-3 font-body leading-relaxed">
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
                        ? 'bg-[#59351F] text-white border-[#59351F] shadow-sm'
                        : 'bg-[#F8F5EF] text-[#2B1D16] border-[#E5DED2] hover:bg-[#EAE1D3]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider font-display">
                        0{idx + 1}. {val.title}
                      </span>
                      <span className={`text-[10px] font-mono font-semibold ${isActive ? 'text-[#B88B50]' : 'text-[#6F6258]'}`}>
                        Pillar
                      </span>
                    </div>
                    <p className={`text-xs mt-1 truncate ${isActive ? 'text-[#EAE1D3]' : 'text-[#6F6258]'}`}>
                      {val.subtitle}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Value Detail Display Panel */}
            <div className="lg:col-span-7 bg-[#F8F5EF] rounded-2xl p-8 sm:p-10 border border-[#E5DED2] shadow-xs">
              <div className="flex items-center gap-2 mb-2 font-body text-xs text-[#B88B50] font-semibold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-[#B88B50]" />
                <span>Pillar 0{activeValueTab + 1} Deep Dive</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#2B1D16] mb-2">
                {coreValues[activeValueTab].title}
              </h3>
              <p className="text-xs font-semibold text-[#59351F] uppercase tracking-wider mb-6 font-body">
                {coreValues[activeValueTab].subtitle}
              </p>

              <p className="text-xs sm:text-sm text-[#6F6258] font-body leading-relaxed mb-8">
                {coreValues[activeValueTab].description}
              </p>

              <div className="p-4 rounded-xl bg-white border border-[#E5DED2] flex items-start gap-3 text-xs font-body">
                <CheckCircle2 className="w-5 h-5 text-[#59351F] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#2B1D16] block">Commercial Assurance:</strong>
                  <span className="text-[#6F6258]">{coreValues[activeValueTab].detail}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. STATUTORY COMPLIANCE & QUALITY VERIFICATION FRAMEWORK (CERTIFICATIONS)
         ========================================================================= */}
      <section className="py-24 bg-[#F8F5EF] border-b border-[#E5DED2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-eyebrow-label text-[#B88B50] block mb-1">
              Quality & Compliance Architecture
            </span>
            <h2 className="text-section-heading font-display font-bold text-[#2B1D16] text-balance">
              Statutory Certification & Quality Verification Framework.
            </h2>
            <p className="text-xs sm:text-sm text-[#6F6258] mt-3 font-body leading-relaxed">
              We operate strictly within verified statutory export standards. Below is our formal compliance framework detailing mandatory regulatory inspections, export bodies, and optional pre-shipment surveyor coordination:
            </p>
          </div>

          {/* Compliance Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-body">
            {complianceFramework.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-[#E5DED2] p-6 flex flex-col justify-between hover:border-[#B88B50] transition-colors shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-lg bg-[#F8F5EF] text-[#59351F] border border-[#E5DED2] flex items-center justify-center">
                      <Award className="w-4 h-4 text-[#B88B50]" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#59351F] font-semibold bg-[#EAE1D3]/50 px-2.5 py-0.5 rounded">
                      {item.type}
                    </span>
                  </div>

                  <h3 className="font-display text-base font-bold text-[#2B1D16] mb-1 leading-tight">
                    {item.title}
                  </h3>
                  <span className="text-[11px] text-[#B88B50] font-semibold block mb-3 font-body">
                    Issuing Authority: {item.authority}
                  </span>

                  <p className="text-xs text-[#6F6258] leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E5DED2] flex items-center gap-1.5 text-[11px] text-[#59351F] font-medium">
                  <Check className="w-3.5 h-3.5 text-emerald-700" />
                  <span>{item.status}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Transparency Advisory Box */}
          <div className="mt-10 p-5 rounded-2xl bg-white border border-[#E5DED2] text-xs font-body text-[#6F6258] leading-relaxed flex items-start gap-3.5 shadow-xs">
            <ShieldCheck className="w-5 h-5 text-[#B88B50] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#2B1D16] block uppercase tracking-wider mb-0.5">
                Statutory Compliance Transparency Note:
              </strong>
              Shumabo Import & Export coordinates statutory certifications directly through official Ethiopian governmental bodies (ECTA, ECX, Ministry of Agriculture, Chamber of Commerce). Private third-party certifications (e.g. Fair Trade, Demeter) or specialized laboratory surveyor inspections (SGS, Bureau Veritas) are verified on individual cooperative lots upon buyer request and formal agreement.
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. WHAT WE DO: SOURCING CORRIDORS & BUYER FOOTPRINT
         ========================================================================= */}
      <section className="py-24 bg-white border-b border-[#E5DED2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-eyebrow-label text-[#B88B50] block">
                Trade Capabilities
              </span>
              <h2 className="text-section-heading font-display font-bold text-[#2B1D16] text-balance">
                Our Sourcing Corridors & Regional Focus.
              </h2>
              <p className="text-xs sm:text-sm text-[#6F6258] font-body leading-relaxed">
                We coordinate wholesale shipments tailored to the logistics and specifications of commercial importers. Our sourcing footprint spans Ethiopia’s distinct agricultural zones:
              </p>

              <div className="space-y-3 font-body text-xs">
                <div className="p-4 rounded-xl bg-[#F8F5EF] border border-[#E5DED2]">
                  <div className="flex items-center gap-2 text-[#59351F] font-bold uppercase tracking-wider mb-1">
                    <Coffee className="w-4 h-4 text-[#B88B50]" />
                    <span>Specialty Arabica Highland Corridors</span>
                  </div>
                  <p className="text-[#6F6258]">
                    Yirgacheffe, Sidamo, Guji, Limu, Djimmah. Altitudes up to 2,200m ASL producing washed & natural micro-lots and commercial Grade 2–4 container lots.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F8F5EF] border border-[#E5DED2]">
                  <div className="flex items-center gap-2 text-[#59351F] font-bold uppercase tracking-wider mb-1">
                    <Wheat className="w-4 h-4 text-[#B88B50]" />
                    <span>Humera & Wollega Sesame Hubs</span>
                  </div>
                  <p className="text-[#6F6258]">
                    Tigray (Humera), Gondar, and Wollega. Known globally for white appearance, high natural oil yield (&gt;50%), and suitability for tahini and bakery lines.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F8F5EF] border border-[#E5DED2]">
                  <div className="flex items-center gap-2 text-[#59351F] font-bold uppercase tracking-wider mb-1">
                    <Layers className="w-4 h-4 text-[#B88B50]" />
                    <span>Highland Teff & Pulses Basins</span>
                  </div>
                  <p className="text-[#6F6258]">
                    Shewa plateau, Gojjam, and the Great Rift Valley. Ivory teff, red kidney beans, chickpeas, and white pea beans prepared for bulk export.
                  </p>
                </div>
              </div>
            </div>

            {/* Buyer Footprint Box */}
            <div className="lg:col-span-6 bg-[#2B1D16] text-[#EAE1D3] rounded-2xl p-8 sm:p-10 font-body">
              <span className="text-eyebrow-label text-[#B88B50] block mb-2">
                International Destination Ports
              </span>
              <h3 className="font-display text-2xl font-bold text-white mb-4">
                Serving Global Import Markets
              </h3>
              <p className="text-xs sm:text-sm text-[#EAE1D3]/80 leading-relaxed mb-6 font-body">
                We coordinate containerized shipments to major international seaports via regular ocean liner connections from the Port of Djibouti:
              </p>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="p-3.5 rounded-xl bg-[#59351F]/40 border border-[#B88B50]/30">
                  <strong className="text-white block font-display">Western Europe</strong>
                  <span className="text-[#EAE1D3]/70 text-[11px] block mt-0.5">Rotterdam, Antwerp, Hamburg, Genoa</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#59351F]/40 border border-[#B88B50]/30">
                  <strong className="text-white block font-display">Middle East & GCC</strong>
                  <span className="text-[#EAE1D3]/70 text-[11px] block mt-0.5">Jebel Ali (Dubai), Jeddah, Dammam</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#59351F]/40 border border-[#B88B50]/30">
                  <strong className="text-white block font-display">East Asia & China</strong>
                  <span className="text-[#EAE1D3]/70 text-[11px] block mt-0.5">Shanghai, Ningbo, Qingdao, Singapore</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#59351F]/40 border border-[#B88B50]/30">
                  <strong className="text-white block font-display">North America</strong>
                  <span className="text-[#EAE1D3]/70 text-[11px] block mt-0.5">New York, Houston, Savannah, Montreal</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#59351F] text-xs text-[#EAE1D3]/60 flex items-center justify-between">
                <span>Standard Container Load: 20ft FCL (~19 MT)</span>
                <span className="text-[#B88B50] font-semibold">Bulk & Bagged Options</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. CONVERSION CALL TO ACTION
         ========================================================================= */}
      <section className="py-24 bg-[#F8F5EF] font-body">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-eyebrow-label text-[#B88B50] block mb-2">
            Start a Direct Commercial Dialogue
          </span>
          <h2 className="text-section-heading font-display font-bold text-[#2B1D16] mb-4 text-balance">
            Discuss Your Agricultural Sourcing Program with Shumabo.
          </h2>
          <p className="text-xs sm:text-sm text-[#6F6258] max-w-xl mx-auto mb-8 font-body">
            Tell our trading team what commodities, volume, and destination your business requires. We will review availability and prepare a structured commercial quotation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onRequestQuote()}
              className="px-8 py-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#59351F] hover:bg-[#2B1D16] rounded-lg transition-colors cursor-pointer shadow-xs"
            >
              Request a Commercial Quote
            </button>
            <button
              onClick={() => onNavigate('products')}
              className="px-8 py-4 text-xs font-semibold uppercase tracking-wider text-[#59351F] bg-white border border-[#E5DED2] hover:bg-[#EAE1D3] rounded-lg transition-colors cursor-pointer"
            >
              Explore Commodity Catalog
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
