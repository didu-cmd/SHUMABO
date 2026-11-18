import React, { useState } from 'react';
import { PageRoute } from '../types';
import {
  Search,
  Scale,
  FileSpreadsheet,
  FileCheck2,
  PackageCheck,
  Ship,
  MessageSquare,
  ArrowUpRight,
  ShieldAlert,
  ShieldCheck,
  Clock,
  Layers,
  CheckCircle2,
  Calendar,
  FileText,
  SlidersHorizontal,
  Compass,
  ArrowRight,
  Truck,
  Anchor,
  Building2,
  Microscope,
  Award,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Cog,
  Wrench,
  Hammer,
  Boxes
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageRoute) => void;
  onRequestQuote: (context?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onRequestQuote }) => {
  // Active Trade Division tab: 'export' or 'import'
  const [tradeDivision, setTradeDivision] = useState<'export' | 'import'>('export');

  // Active Interactive State for Export Pipeline
  const [activePipelineStep, setActivePipelineStep] = useState<number>(0);
  const [selectedIncoterm, setSelectedIncoterm] = useState<'FOB' | 'CFR' | 'CIF' | 'FCA'>('FOB');

  // Trade Service Profiler State
  const [profilerCommodity, setProfilerCommodity] = useState<string>('Specialty Coffee');
  const [profilerVolume, setProfilerVolume] = useState<string>('1 x 20ft FCL (~19.2 MT)');
  const [profilerIncoterm, setProfilerIncoterm] = useState<string>('FOB Port of Djibouti');
  const [profilerRegion, setProfilerRegion] = useState<string>('Europe (Rotterdam / Hamburg)');

  // 4 Import Categories requested by client
  const importCategories = [
    {
      id: 'machinery',
      title: 'Industrial Machinery',
      subtitle: 'Production & Manufacturing Systems',
      icon: Cog,
      image: 'https://cdn.corenexis.com/f/EwsazJSz.jpg',
      description: 'Sourcing and procurement coordination for industrial production machinery, factory automation lines, and manufacturing equipment meeting international engineering standards.',
      items: [
        'Industrial production & assembly machinery',
        'Advanced manufacturing equipment',
        'Agro-processing & milling machinery',
        'Packaging & bottling automation lines'
      ]
    },
    {
      id: 'construction',
      title: 'Construction Equipment',
      subtitle: 'Heavy Machinery & Earthmoving Assets',
      icon: Wrench,
      image: 'https://cdn.corenexis.com/f/vXGZZQiM.jpg',
      description: 'Import coordination for heavy construction and infrastructure development equipment, ensuring reliable duty handling and shipping logistics.',
      items: [
        'Hydraulic excavators & backhoes',
        'Mobile construction & tower cranes',
        'Wheel loaders & dump trucks',
        'Compaction & road grading machinery'
      ]
    },
    {
      id: 'steel',
      title: 'Iron & Steel Products',
      subtitle: 'Structural & Manufacturing Metals',
      icon: Hammer,
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop',
      description: 'Wholesale procurement and import of certified structural iron and steel products for large-scale construction, fabrication, and civil engineering projects.',
      items: [
        'High-tensile steel reinforcing bars (rebar)',
        'Hot-rolled and cold-rolled steel coils',
        'Galvanized metal sheets & plates',
        'Structural steel beams, channels & angles'
      ]
    },
    {
      id: 'materials',
      title: 'Industrial Materials',
      subtitle: 'Raw Supplies & Engineering Consumables',
      icon: Boxes,
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop',
      description: 'Reliable sourcing of essential industrial raw materials, piping systems, and construction consumables for manufacturing plants and infrastructure builders.',
      items: [
        'Industrial pipes & tubing systems',
        'Valves, flanges & industrial fittings',
        'Construction and manufacturing raw materials',
        'Specialized industrial maintenance supplies'
      ]
    }
  ];

  // 6-Phase Export Execution Pipeline
  const pipelinePhases = [
    {
      step: '01',
      title: 'Origin Sourcing & Lot Aggregation',
      tagline: 'Farm-gate, cooperative, and ECX trading floor representation',
      timing: 'Day 1 – 7',
      location: 'Regional Growing Zones & ECX Centers',
      icon: Search,
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=800&auto=format&fit=crop',
      description:
        'We evaluate availability across active harvest pools in Sidama, Yirgacheffe, Guji, Humera, and the Rift Valley. Each lot is traced to its origin cooperative or ECX primary warehouse, ensuring verified authenticity and strict adherence to export quotas.',
      deliverables: [
        'ECX Warehouse Receipt Verification',
        'Initial Origin Traceability Dossier',
        'Physical Pre-Milling Crop Audit'
      ],
      shumaboRole: 'Verifies physical availability, origin integrity, and preliminary volume reservations.',
      buyerRole: 'Confirms target grade tier, acceptable harvest years, and target delivery window.'
    },
    {
      step: '02',
      title: 'Laboratory Grading & Q-Cupping Audit',
      tagline: 'Certified ECTA sensory scoring & optical Sortex testing',
      timing: 'Day 7 – 12',
      location: 'Central Liquoring Unit & Commercial Labs (Addis Ababa)',
      icon: Microscope,
      image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800&auto=format&fit=crop',
      description:
        'Commodity samples undergo rigorous laboratory examination. Coffee is cupped according to SCA protocols by certified Q-graders at the Ethiopian Coffee & Tea Authority (ECTA). Sesame and grains undergo optical Sortex 99.5% purity testing, moisture analysis, and defect tolerance counting.',
      deliverables: [
        'Official ECTA Liquoring / Grading Certificate',
        'Moisture & Water Activity Laboratory Report',
        'Physical Screen Sizing / Seed Count Analysis',
        'Pre-Shipment Cupping Sample Dispatch (DHL/FedEx)'
      ],
      shumaboRole: 'Conducts laboratory grading, prepares physical samples, and submits lots for statutory certification.',
      buyerRole: 'Reviews and approves physical pre-shipment sample and laboratory parameters.'
    },
    {
      step: '03',
      title: 'Packaging Engineering & Hermetic Sealing',
      tagline: 'Multi-layer GrainPro liners, PP bags, and custom stencils',
      timing: 'Day 12 – 16',
      location: 'Export Processing & Dry Mills',
      icon: PackageCheck,
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop',
      description:
        'Agricultural commodities are packed to withstand equatorial maritime transit. Specialty coffee is sealed in 60kg multi-layer GrainPro hermetic oxygen-barrier liners inside natural jute sacks. Sesame and pulses are double-stitched into new 50kg food-grade PP bags with buyer-specified bilingual stencils.',
      deliverables: [
        'Packaging Integrity & Tare Weight Audit',
        'Custom Buyer Marking & Lot Number Stencils',
        'Container Floor Desiccant & Liner Verification'
      ],
      shumaboRole: 'Oversees precision packaging, hermetic sealing, and application of buyer shipping marks.',
      buyerRole: 'Provides container stenciling artwork, marking standards, and bag label text.'
    },
    {
      step: '04',
      title: 'Statutory Documentation & Central Bank Clearance',
      tagline: 'National Bank of Ethiopia compliance & phytosanitary certificates',
      timing: 'Day 16 – 20',
      location: 'Ministry of Agriculture & Commercial Banks (Addis Ababa)',
      icon: FileCheck2,
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop',
      description:
        'All export documentation is prepared in strict compliance with National Bank of Ethiopia foreign exchange directives and international trade conventions. Statutory phytosanitary certificates, non-GMO declarations, and Certificates of Origin are issued prior to customs release.',
      deliverables: [
        'Federal Ministry of Agriculture Phytosanitary Certificate',
        'Certificate of Origin (Chamber of Commerce / GSP / Eur.1)',
        'Commercial Invoice & Packing List',
        'Irrevocable Letter of Credit (L/C at Sight) / CAD Audit'
      ],
      shumaboRole: 'Coordinates all statutory government clearances, phytosanitary seals, and banking instruments.',
      buyerRole: 'Opens valid Letter of Credit (L/C) through prime international correspondent bank.'
    },
    {
      step: '05',
      title: 'Modjo Dry Port to Djibouti Transport Corridor',
      tagline: 'Electrified Ethio-Djibouti Railway & bonded transport',
      timing: 'Day 20 – 24',
      location: '750 km Inland Logistics Highway',
      icon: Truck,
      image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=800&auto=format&fit=crop',
      description:
        'Containers are staged at the Modjo Intermodal Dry Port and transported along the 750 km Ethio-Djibouti corridor via the modern electrified railway or bonded commercial heavy transport fleet directly to the maritime terminals at Djibouti.',
      deliverables: [
        'Inland Overland Consignment Note',
        'GPS Container Seal Verification',
        'Djibouti Border Transit Clearance'
      ],
      shumaboRole: 'Manages inland haulage, border customs transit, and container arrival staging at Djibouti.',
      buyerRole: 'Receives regular GPS shipment milestone notifications and arrival advisories.'
    },
    {
      step: '06',
      title: 'Port of Djibouti Staging & Ocean Bill of Lading',
      tagline: 'Doraleh Container Terminal stevedoring & ocean vessel departure',
      timing: 'Day 24 – 28',
      location: 'Doraleh Container Terminal (Port of Djibouti)',
      icon: Ship,
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=800&auto=format&fit=crop',
      description:
        'Containers undergo port security staging at the Doraleh Container Terminal (DCT) before being loaded onto scheduled container vessels operated by major ocean liners (MSC, CMA CGM, Hapag-Lloyd, Maersk). Full clean on-board Bills of Lading are issued upon vessel departure.',
      deliverables: [
        'Clean On-Board Ocean Bill of Lading (B/L)',
        'Port Terminal Weight Verification (SOLAS VGM)',
        'Final Document Dossier Dispatch via Courier'
      ],
      shumaboRole: 'Supervises container loading at Djibouti, secures B/L issuance, and dispatches courier document set.',
      buyerRole: 'Takes possession of original negotiable B/L upon payment execution or L/C negotiation.'
    }
  ];

  const handleNextPipeline = () => {
    setActivePipelineStep((prev) => (prev + 1) % pipelinePhases.length);
  };

  const handlePrevPipeline = () => {
    setActivePipelineStep((prev) => (prev - 1 + pipelinePhases.length) % pipelinePhases.length);
  };

  return (
    <div className="bg-[#FAF8F7] text-[#241719] min-h-screen">
      {/* =========================================================================
          1. SERVICES HEADER: PLAIN CRIMSON WITH DESCRIPTION
         ========================================================================= */}
      <section className="bg-[#800D18] text-white py-20 border-b border-[#A90F1C]/40 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C51B2A_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-eyebrow-label text-[#FAF8F7]/85 block mb-3 font-body">
            INTERNATIONAL TRADE DIVISIONS
          </span>
          <h1 className="text-main-heading font-display font-bold text-white mb-5 text-balance">
            Global Import & Export Services.
          </h1>
          <p className="text-intro-paragraph font-body max-w-3xl mx-auto text-[#FAF8F7]/90 leading-relaxed mb-6">
            Shumabo Import & Export operates across both international import and export trade, connecting Ethiopia with world markets through professional logistics and verified commodity sourcing.
          </p>

          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs text-white border border-white/20">
            <ShieldCheck className="w-4 h-4 text-[#C51B2A]" />
            <span>Agricultural Export Execution · Industrial Machinery & Construction Equipment Import</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. TRADE DIVISION SELECTOR TABS (EXPORT VS IMPORT)
         ========================================================================= */}
      <section className="py-12 bg-white border-b border-[#E6DCDD] sticky top-20 z-30 shadow-xs">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => setTradeDivision('export')}
            className={`w-full sm:w-auto px-8 py-4 rounded-xl font-display text-base font-bold transition-all cursor-pointer flex items-center justify-center gap-3 border ${
              tradeDivision === 'export'
                ? 'bg-[#800D18] text-white border-[#800D18] shadow-md'
                : 'bg-[#FAF8F7] text-[#241719] border-[#E6DCDD] hover:bg-[#F1ECEA]'
            }`}
          >
            <Ship className="w-5 h-5 text-[#C51B2A]" />
            <span>Export Services (Agricultural Commodities)</span>
          </button>

          <button
            onClick={() => setTradeDivision('import')}
            className={`w-full sm:w-auto px-8 py-4 rounded-xl font-display text-base font-bold transition-all cursor-pointer flex items-center justify-center gap-3 border ${
              tradeDivision === 'import'
                ? 'bg-[#800D18] text-white border-[#800D18] shadow-md'
                : 'bg-[#FAF8F7] text-[#241719] border-[#E6DCDD] hover:bg-[#F1ECEA]'
            }`}
          >
            <Building2 className="w-5 h-5 text-[#C51B2A]" />
            <span>Import Services (Machinery & Steel)</span>
          </button>
        </div>
      </section>

      {/* =========================================================================
          3. IMPORT SERVICES DIVISION (IF SELECTED)
         ========================================================================= */}
      {tradeDivision === 'import' && (
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-body">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-eyebrow-label text-[#A90F1C] block mb-1">
              Import Division
            </span>
            <h2 className="text-section-heading font-display font-bold text-[#241719] text-balance">
              Industrial Machinery, Construction Equipment & Steel Imports.
            </h2>
            <p className="text-xs sm:text-sm text-[#6F6062] mt-3 leading-relaxed">
              We facilitate reliable import procurement for industrial clients, manufacturing plants, construction enterprises, and infrastructure developers in Ethiopia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {importCategories.map((cat) => {
              const IconComp = cat.icon;
              return (
                <div
                  key={cat.id}
                  className="bg-white rounded-3xl border border-[#E6DCDD] overflow-hidden shadow-xs hover:shadow-xl transition-all flex flex-col justify-between"
                >
                  <div className="relative aspect-21/9 bg-[#F1ECEA] overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#800D18]/80 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-xl text-[11px] font-semibold text-[#800D18] flex items-center gap-1.5 border border-white/20">
                      <IconComp className="w-3.5 h-3.5 text-[#A90F1C]" />
                      <span>{cat.subtitle}</span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-[#241719] mb-2">
                        {cat.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#6F6062] leading-relaxed mb-5">
                        {cat.description}
                      </p>

                      <div className="space-y-2 mb-6">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#A90F1C] block mb-2">
                          Core Product Lines:
                        </span>
                        {cat.items.map((item, iIdx) => (
                          <div key={iIdx} className="flex items-center gap-2.5 text-xs text-[#241719]">
                            <CheckCircle2 className="w-4 h-4 text-[#A90F1C] shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => onRequestQuote(`Import Inquiry: ${cat.title}`)}
                      className="w-full py-3.5 px-6 rounded-xl bg-[#A90F1C] hover:bg-[#800D18] text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                    >
                      <span>Request Import Quotation</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* =========================================================================
          4. EXPORT SERVICES DIVISION (IF SELECTED)
         ========================================================================= */}
      {tradeDivision === 'export' && (
        <>
          {/* 6-Phase Export Execution Pipeline */}
          <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-eyebrow-label text-[#A90F1C] block mb-1">
                Step-by-Step Export Lifecycle
              </span>
              <h2 className="text-section-heading font-display font-bold text-[#241719] text-balance">
                The 6-Phase Export Execution Pipeline.
              </h2>
              <p className="text-xs sm:text-sm text-[#6F6062] mt-3 font-body leading-relaxed">
                Explore how Shumabo coordinates every stage of international commodity trade from origin harvest to ocean bill of lading issuance. Click through each phase below.
              </p>
            </div>

            {/* Active Phase Deep Dive Card with Left & Right Swipe Buttons */}
            <div className="relative max-w-5xl mx-auto">
              <button
                onClick={handlePrevPipeline}
                className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white border border-[#E6DCDD] shadow-lg text-[#241719] hover:bg-[#800D18] hover:text-white hover:border-[#800D18] flex items-center justify-center transition-all cursor-pointer"
                aria-label="Previous Phase"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNextPipeline}
                className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white border border-[#E6DCDD] shadow-lg text-[#241719] hover:bg-[#800D18] hover:text-white hover:border-[#800D18] flex items-center justify-center transition-all cursor-pointer"
                aria-label="Next Phase"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="bg-white rounded-3xl border border-[#E6DCDD] p-8 sm:p-12 shadow-xl font-body">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="px-3 py-1 rounded-full bg-[#FAF8F7] text-[#A90F1C] border border-[#E6DCDD] text-xs font-mono font-bold">
                        Phase {pipelinePhases[activePipelineStep].step} of 06
                      </span>
                      <span className="text-xs text-[#6F6062] font-semibold uppercase tracking-wider">
                        {pipelinePhases[activePipelineStep].timing} · {pipelinePhases[activePipelineStep].location}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#241719] mb-2">
                        {pipelinePhases[activePipelineStep].title}
                      </h3>
                      <p className="text-xs font-semibold text-[#A90F1C] uppercase tracking-wider mb-4">
                        {pipelinePhases[activePipelineStep].tagline}
                      </p>
                      <p className="text-xs sm:text-sm text-[#6F6062] leading-relaxed">
                        {pipelinePhases[activePipelineStep].description}
                      </p>
                    </div>

                    <div className="bg-[#FAF8F7] p-5 rounded-2xl border border-[#E6DCDD] space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#241719]">
                        Key Deliverables & Documentation:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {pipelinePhases[activePipelineStep].deliverables.map((del, dIdx) => (
                          <div key={dIdx} className="flex items-center gap-2 text-[#6F6062]">
                            <CheckCircle2 className="w-4 h-4 text-[#A90F1C] shrink-0" />
                            <span>{del}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2">
                      <div className="p-4 rounded-xl bg-white border border-[#E6DCDD]">
                        <strong className="text-[#241719] block mb-1">Shumabo Execution Role:</strong>
                        <p className="text-[#6F6062]">{pipelinePhases[activePipelineStep].shumaboRole}</p>
                      </div>
                      <div className="p-4 rounded-xl bg-white border border-[#E6DCDD]">
                        <strong className="text-[#241719] block mb-1">Buyer Collaboration:</strong>
                        <p className="text-[#6F6062]">{pipelinePhases[activePipelineStep].buyerRole}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-[#E6DCDD]">
                      <button
                        onClick={handlePrevPipeline}
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#6F6062] hover:text-[#241719] bg-[#FAF8F7] hover:bg-[#F1ECEA] border border-[#E6DCDD] rounded-lg transition-colors cursor-pointer"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        <span>Previous Phase</span>
                      </button>
                      <span className="text-xs text-[#6F6062] font-mono">
                        {activePipelineStep + 1} / {pipelinePhases.length}
                      </span>
                      <button
                        onClick={handleNextPipeline}
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#A90F1C] hover:bg-[#800D18] rounded-lg transition-colors cursor-pointer"
                      >
                        <span>Next Phase</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="lg:col-span-5 relative">
                    <div className="relative rounded-2xl overflow-hidden border border-[#E6DCDD] shadow-lg bg-[#F1ECEA] aspect-4/3">
                      <img
                        src={pipelinePhases[activePipelineStep].image}
                        alt={pipelinePhases[activePipelineStep].title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#800D18]/70 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-body">
                        <span className="text-[10px] uppercase tracking-wider text-[#FAF8F7]/85 font-semibold block">
                          Phase {pipelinePhases[activePipelineStep].step} Operations
                        </span>
                        <span>{pipelinePhases[activePipelineStep].location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Incoterms & Trade Terms Calculator / Selector */}
          <section className="py-24 bg-white border-t border-b border-[#E6DCDD]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 font-body">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-eyebrow-label text-[#A90F1C] block mb-1">
                  Incoterms® 2020 Standards
                </span>
                <h2 className="text-section-heading font-display font-bold text-[#241719] text-balance">
                  International Commercial Terms.
                </h2>
                <p className="text-xs sm:text-sm text-[#6F6062] mt-3 leading-relaxed">
                  We structure contracts transparently under official ICC Incoterms® 2020 definitions. Select an Incoterm below to inspect responsibilities.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                {[
                  { id: 'FOB', name: 'FOB (Free on Board)', subtitle: 'Port of Djibouti Baseline' },
                  { id: 'CFR', name: 'CFR (Cost and Freight)', subtitle: 'Ocean Freight Included' },
                  { id: 'CIF', name: 'CIF (Cost, Insurance & Freight)', subtitle: 'Marine Cargo Insurance' },
                  { id: 'FCA', name: 'FCA (Free Carrier)', subtitle: 'Addis Ababa / Modjo Dry Port' }
                ].map((term) => {
                  const isSelected = selectedIncoterm === term.id;
                  return (
                    <button
                      key={term.id}
                      onClick={() => setSelectedIncoterm(term.id as any)}
                      className={`p-4 rounded-xl border text-center transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#800D18] text-white border-[#800D18] shadow-md'
                          : 'bg-[#FAF8F7] text-[#241719] border-[#E6DCDD] hover:bg-[#F1ECEA]'
                      }`}
                    >
                      <strong className="font-display text-sm block mb-1">{term.name}</strong>
                      <span className={`text-[11px] ${isSelected ? 'text-[#FAF8F7]/85' : 'text-[#6F6062]'}`}>{term.subtitle}</span>
                    </button>
                  );
                })}
              </div>

              <div className="bg-[#FAF8F7] rounded-3xl border border-[#E6DCDD] p-8 sm:p-10 shadow-xs">
                {selectedIncoterm === 'FOB' && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between border-b border-[#E6DCDD] pb-4">
                      <div>
                        <span className="text-xs text-[#A90F1C] font-mono font-bold uppercase tracking-wider">Incoterms® 2020 Standard</span>
                        <h3 className="font-display text-2xl font-bold text-[#241719]">FOB Port of Djibouti (Free on Board)</h3>
                      </div>
                      <span className="px-3 py-1 bg-white text-[#241719] rounded-lg border border-[#E6DCDD] text-xs font-semibold">Most Popular for Importers</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#6F6062] leading-relaxed">
                      Under FOB Port of Djibouti, Shumabo is responsible for all inland Ethiopian transport from origin to the port terminal, export clearance, government phytosanitary certifications, and loading the cargo on board the ocean vessel at Djibouti. Risk transfers to the buyer once goods are on board the vessel.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 text-xs">
                      <div className="bg-white p-5 rounded-2xl border border-[#E6DCDD] space-y-2">
                        <strong className="text-[#A90F1C] block uppercase tracking-wider">Shumabo Obligations (Seller):</strong>
                        <ul className="space-y-1.5 text-[#6F6062]">
                          <li>• Farm-gate/cooperative aggregation & milling</li>
                          <li>• Packaging & hermetic GrainPro sealing</li>
                          <li>• Inland rail/road transit to Port of Djibouti</li>
                          <li>• ECTA & Ministry of Agriculture export clearance</li>
                          <li>• Loading on board vessel at Doraleh Terminal</li>
                        </ul>
                      </div>
                      <div className="bg-white p-5 rounded-2xl border border-[#E6DCDD] space-y-2">
                        <strong className="text-[#241719] block uppercase tracking-wider">Buyer Obligations:</strong>
                        <ul className="space-y-1.5 text-[#6F6062]">
                          <li>• Ocean freight booking & ocean carrier contract</li>
                          <li>• Marine cargo insurance (recommended)</li>
                          <li>• Destination port customs clearance & import duties</li>
                          <li>• Inland haulage from discharge port to warehouse</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {selectedIncoterm === 'CFR' && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between border-b border-[#E6DCDD] pb-4">
                      <div>
                        <span className="text-xs text-[#A90F1C] font-mono font-bold uppercase tracking-wider">Incoterms® 2020 Standard</span>
                        <h3 className="font-display text-2xl font-bold text-[#241719]">CFR (Cost and Freight)</h3>
                      </div>
                      <span className="px-3 py-1 bg-white text-[#241719] rounded-lg border border-[#E6DCDD] text-xs font-semibold">Managed Ocean Freight</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#6F6062] leading-relaxed">
                      Shumabo contracts and pays for ocean freight to the named destination discharge port. Risk transfers to the buyer once goods are loaded on board the vessel at Djibouti port.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 text-xs">
                      <div className="bg-white p-5 rounded-2xl border border-[#E6DCDD] space-y-2">
                        <strong className="text-[#A90F1C] block uppercase tracking-wider">Shumabo Obligations (Seller):</strong>
                        <ul className="space-y-1.5 text-[#6F6062]">
                          <li>• All FOB obligations (origin, milling, customs)</li>
                          <li>• Ocean carrier freight booking to destination port</li>
                          <li>• Delivery of original Bill of Lading to buyer</li>
                        </ul>
                      </div>
                      <div className="bg-white p-5 rounded-2xl border border-[#E6DCDD] space-y-2">
                        <strong className="text-[#241719] block uppercase tracking-wider">Buyer Obligations:</strong>
                        <ul className="space-y-1.5 text-[#6F6062]">
                          <li>• Marine cargo insurance coverage</li>
                          <li>• Destination discharge port customs clearance</li>
                          <li>• Final inland transportation to warehouse</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {selectedIncoterm === 'CIF' && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between border-b border-[#E6DCDD] pb-4">
                      <div>
                        <span className="text-xs text-[#A90F1C] font-mono font-bold uppercase tracking-wider">Incoterms® 2020 Standard</span>
                        <h3 className="font-display text-2xl font-bold text-[#241719]">CIF (Cost, Insurance and Freight)</h3>
                      </div>
                      <span className="px-3 py-1 bg-white text-[#241719] rounded-lg border border-[#E6DCDD] text-xs font-semibold">Fully Insured Transit</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#6F6062] leading-relaxed">
                      Identical to CFR, with the addition that Shumabo also procures minimum-institute-cargo-clause marine insurance against the buyer's risk of loss or damage during transit.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 text-xs">
                      <div className="bg-white p-5 rounded-2xl border border-[#E6DCDD] space-y-2">
                        <strong className="text-[#A90F1C] block uppercase tracking-wider">Shumabo Obligations (Seller):</strong>
                        <ul className="space-y-1.5 text-[#6F6062]">
                          <li>• All CFR obligations (origin, customs, freight)</li>
                          <li>• Marine cargo insurance policy procurement (ICC-C or better)</li>
                        </ul>
                      </div>
                      <div className="bg-white p-5 rounded-2xl border border-[#E6DCDD] space-y-2">
                        <strong className="text-[#241719] block uppercase tracking-wider">Buyer Obligations:</strong>
                        <ul className="space-y-1.5 text-[#6F6062]">
                          <li>• Destination port customs clearance & import duties</li>
                          <li>• Inland delivery from destination port</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {selectedIncoterm === 'FCA' && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between border-b border-[#E6DCDD] pb-4">
                      <div>
                        <span className="text-xs text-[#A90F1C] font-mono font-bold uppercase tracking-wider">Incoterms® 2020 Standard</span>
                        <h3 className="font-display text-2xl font-bold text-[#241719]">FCA (Free Carrier - Addis Ababa / Modjo)</h3>
                      </div>
                      <span className="px-3 py-1 bg-white text-[#241719] rounded-lg border border-[#E6DCDD] text-xs font-semibold">Inland Delivery Basis</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#6F6062] leading-relaxed">
                      Shumabo delivers the goods cleared for export to the carrier nominated by the buyer at the named inland place in Ethiopia (such as Modjo Dry Port or Addis Ababa warehouse).
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 text-xs">
                      <div className="bg-white p-5 rounded-2xl border border-[#E6DCDD] space-y-2">
                        <strong className="text-[#A90F1C] block uppercase tracking-wider">Shumabo Obligations (Seller):</strong>
                        <ul className="space-y-1.5 text-[#6F6062]">
                          <li>• Commodity processing, bagging & export clearance</li>
                          <li>• Delivery to nominated carrier at inland terminal</li>
                        </ul>
                      </div>
                      <div className="bg-white p-5 rounded-2xl border border-[#E6DCDD] space-y-2">
                        <strong className="text-[#241719] block uppercase tracking-wider">Buyer Obligations:</strong>
                        <ul className="space-y-1.5 text-[#6F6062]">
                          <li>• Inland transit from Modjo to Port of Djibouti</li>
                          <li>• Ocean freight, insurance, and import clearance</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Trade Service Profiler */}
          <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 font-body">
            <div className="bg-white rounded-3xl border border-[#E6DCDD] p-8 sm:p-12 shadow-xl">
              <div className="max-w-2xl mb-10">
                <span className="text-eyebrow-label text-[#A90F1C] block mb-1">
                  Interactive Export Profiler
                </span>
                <h2 className="text-section-heading font-display font-bold text-[#241719]">
                  Configure Your Sourcing Parameters.
                </h2>
                <p className="text-xs sm:text-sm text-[#6F6062] mt-2 leading-relaxed">
                  Select your commodity profile and logistics preferences to generate a preliminary commercial summary for your inquiry.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div>
                  <label className="block text-xs font-semibold text-[#6F6062] mb-1.5">Commodity Category</label>
                  <select
                    value={profilerCommodity}
                    onChange={(e) => setProfilerCommodity(e.target.value)}
                    className="w-full px-3 py-2.5 text-xs rounded-xl bg-[#FAF8F7] border border-[#E6DCDD] text-[#241719] font-medium"
                  >
                    <option value="Specialty Coffee">Specialty Arabica Coffee</option>
                    <option value="Sesame Seeds">Whitish Humera Sesame Seeds</option>
                    <option value="White Teff">Magna White Teff Grain</option>
                    <option value="Canning Pulses">White Pea Beans (Canning Grade)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#6F6062] mb-1.5">Estimated Volume</label>
                  <select
                    value={profilerVolume}
                    onChange={(e) => setProfilerVolume(e.target.value)}
                    className="w-full px-3 py-2.5 text-xs rounded-xl bg-[#FAF8F7] border border-[#E6DCDD] text-[#241719] font-medium"
                  >
                    <option value="1 x 20ft FCL (~19.2 MT)">1 x 20ft FCL (~19.2 Metric Tons)</option>
                    <option value="2 x 20ft FCL (~38.4 MT)">2 x 20ft FCL (~38.4 Metric Tons)</option>
                    <option value="5 x 20ft FCL (~96 MT)">5 x 20ft FCL (~96 Metric Tons)</option>
                    <option value="Bulk Multi-Container Program">Bulk Multi-Container Season Program</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#6F6062] mb-1.5">Commercial Terms</label>
                  <select
                    value={profilerIncoterm}
                    onChange={(e) => setProfilerIncoterm(e.target.value)}
                    className="w-full px-3 py-2.5 text-xs rounded-xl bg-[#FAF8F7] border border-[#E6DCDD] text-[#241719] font-medium"
                  >
                    <option value="FOB Port of Djibouti">FOB Port of Djibouti (Baseline)</option>
                    <option value="CFR Destination Port">CFR Destination Port</option>
                    <option value="CIF Destination Port">CIF Destination Port (Insured)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#6F6062] mb-1.5">Destination Market</label>
                  <select
                    value={profilerRegion}
                    onChange={(e) => setProfilerRegion(e.target.value)}
                    className="w-full px-3 py-2.5 text-xs rounded-xl bg-[#FAF8F7] border border-[#E6DCDD] text-[#241719] font-medium"
                  >
                    <option value="Europe (Rotterdam / Hamburg)">Europe (Rotterdam / Hamburg)</option>
                    <option value="Middle East (Jebel Ali / Jeddah)">Middle East (Jebel Ali / Jeddah)</option>
                    <option value="North America (Houston / New York)">North America (Houston / New York)</option>
                    <option value="Asia Pacific (Shanghai / Tokyo)">Asia Pacific (Shanghai / Tokyo)</option>
                  </select>
                </div>
              </div>

              <div className="bg-[#FAF8F7] border border-[#E6DCDD] rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="space-y-1 text-xs">
                  <span className="text-[#A90F1C] font-mono font-bold uppercase tracking-wider block">Generated Trade Configuration</span>
                  <p className="text-[#241719] font-display text-sm font-bold">
                    {profilerCommodity} · {profilerVolume} · {profilerIncoterm} · {profilerRegion}
                  </p>
                  <p className="text-[#6F6062]">Ready for formal quotation review by Shumabo's Addis Ababa export trade desk.</p>
                </div>

                <button
                  onClick={() => onRequestQuote(`Profiler Sourcing Request:\n• Product: ${profilerCommodity}\n• Volume: ${profilerVolume}\n• Incoterms: ${profilerIncoterm}\n• Market: ${profilerRegion}`)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#A90F1C] hover:bg-[#800D18] rounded-xl transition-colors cursor-pointer shrink-0 shadow-xs"
                >
                  <span>Transfer to Quote Form</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};
