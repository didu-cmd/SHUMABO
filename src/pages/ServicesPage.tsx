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
  ChevronRight
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageRoute) => void;
  onRequestQuote: (context?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onRequestQuote }) => {
  // Active Interactive State
  const [activePipelineStep, setActivePipelineStep] = useState<number>(0);
  const [selectedIncoterm, setSelectedIncoterm] = useState<'FOB' | 'CFR' | 'CIF' | 'FCA'>('FOB');

  // Trade Service Profiler State
  const [profilerCommodity, setProfilerCommodity] = useState<string>('Specialty Coffee');
  const [profilerVolume, setProfilerVolume] = useState<string>('1 x 20ft FCL (~19.2 MT)');
  const [profilerIncoterm, setProfilerIncoterm] = useState<string>('FOB Port of Djibouti');
  const [profilerRegion, setProfilerRegion] = useState<string>('Europe (Rotterdam / Hamburg)');

  // 6-Phase Export Execution Pipeline
  const pipelinePhases = [
    {
      step: '01',
      title: 'Origin Sourcing & Lot Aggregation',
      tagline: 'Farm-gate, cooperative, and ECX trading floor representation',
      timing: 'Day 1 – 7',
      location: 'Regional Growing Zones & ECX Centers',
      icon: Search,
      image: '/src/assets/images/about_ethiopian_highlands_1791913738798.jpg',
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
      image: '/src/assets/images/about_quality_inspection_1791913761072.jpg',
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
      image: '/src/assets/images/services_coffee_cupping_1791914146177.jpg',
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
      image: '/src/assets/images/about_quality_inspection_1791913761072.jpg',
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
      image: '/src/assets/images/services_port_logistics_1791914145402.jpg',
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
      image: '/src/assets/images/services_port_logistics_1791914145402.jpg',
      description:
        'At the Port of Djibouti, containers undergo final surveyor inspection (SGS / Bureau Veritas upon request) before being loaded onto scheduled ocean liners (Maersk, MSC, CMA CGM, ESLSE). The clean on-board Ocean Bill of Lading is released and dispatched for banking negotiation.',
      deliverables: [
        'Full Set (3/3) Clean on Board Ocean Bill of Lading',
        'Independent Pre-Shipment Surveyor Certificate (SGS/BV)',
        'Container Fumigation & Cleanliness Certificate',
        'Original Document Courier Package via DHL'
      ],
      shumaboRole: 'Coordinates port terminal handling, ship loading, and releases full original shipping documents.',
      buyerRole: 'Takes delivery of goods at destination discharge port upon document presentation.'
    }
  ];

  // Incoterms Allocation Data
  const incotermDetails = {
    FOB: {
      name: 'FOB · Free On Board (Port of Djibouti)',
      summary: 'The standard baseline for Ethiopian commodity trade. Shumabo handles all inland transport, Ethiopian customs, and loading onto the ocean vessel in Djibouti. Buyer contracts ocean freight.',
      shumaboCovers: [
        'Inland freight from Ethiopian origin to Djibouti',
        'Ethiopian export customs clearance and statutory fees',
        'Port of Djibouti terminal handling charges (THC)',
        'Loading costs onto the export ocean vessel',
        'Preparation of full standard export document dossier'
      ],
      buyerCovers: [
        'Ocean freight shipping line booking & freight charges',
        'Marine transit insurance (Institute Cargo Clauses)',
        'Destination seaport terminal handling & customs import clearance',
        'Inland transport at destination country'
      ]
    },
    CFR: {
      name: 'CFR · Cost and Freight (Named Destination Seaport)',
      summary: 'Shumabo manages the entire export process through to the arrival of the ocean vessel at the buyer’s chosen destination seaport. Ocean freight charges are prepaid by Shumabo.',
      shumaboCovers: [
        'All FOB origin costs and export customs in Ethiopia/Djibouti',
        'Loading onto ocean container vessel',
        'Prepaid ocean freight carriage to destination port of discharge',
        'Issuance of Clean On Board Ocean Bill of Lading'
      ],
      buyerCovers: [
        'Marine cargo insurance during ocean transit',
        'Destination seaport discharge handling and import duties',
        'Customs clearance in destination country'
      ]
    },
    CIF: {
      name: 'CIF · Cost, Insurance and Freight (Named Destination Seaport)',
      summary: 'Comprehensive risk-mitigated arrangement. Shumabo arranges export handling, prepaid ocean freight, and marine transit insurance policy (Institute Cargo Clauses A / All Risks).',
      shumaboCovers: [
        'All FOB origin and Djibouti export operations',
        'Prepaid ocean freight to destination seaport',
        'Marine cargo transit insurance policy (minimum 110% CIF contract value)',
        'Complete original negotiable document package'
      ],
      buyerCovers: [
        'Destination seaport import tariffs and local customs handling',
        'Onward trucking or rail transport from destination seaport'
      ]
    },
    FCA: {
      name: 'FCA · Free Carrier (Named Ethiopian Dry Port / Addis Ababa)',
      summary: 'For buyers operating integrated East African logistics chains. Shumabo delivers export-cleared cargo to the nominated inland dry port terminal (e.g. Modjo Dry Port) in Ethiopia.',
      shumaboCovers: [
        'Commodity sourcing, laboratory testing, and export packing',
        'Delivery to nominated Ethiopian dry port container terminal',
        'Ethiopian export customs clearance'
      ],
      buyerCovers: [
        'Inland haulage from dry port to Port of Djibouti',
        'Port of Djibouti stevedoring and ocean vessel freight',
        'Marine transit insurance and all onward transport'
      ]
    }
  };

  const handleApplyProfiler = () => {
    const profilerSummary = `TAILORED TRADE SERVICE INQUIRY: Commodity: ${profilerCommodity} | Scale: ${profilerVolume} | Terms: ${profilerIncoterm} | Target Discharge Port: ${profilerRegion}.`;
    onRequestQuote(profilerSummary);
  };

  return (
    <div className="bg-[#F8F5EF] text-[#2B1D16] min-h-screen font-body selection:bg-[#B88B50] selection:text-white">
      {/* =========================================================================
          HERO: COMMERCIAL TRADE ARCHITECTURE
         ========================================================================= */}
      <section className="bg-[#2B1D16] text-[#EAE1D3] py-20 border-b border-[#59351F]/50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#B88B50_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-eyebrow-label text-[#B88B50] block mb-3 font-body">
            TRADE OPERATIONS & EXPORT FACILITATION
          </span>
          <h1 className="text-main-heading font-display font-bold text-white mb-5 text-balance">
            End-to-End Export Execution Architecture.
          </h1>
          <p className="text-intro-paragraph font-body max-w-3xl mx-auto text-[#EAE1D3]/85 leading-relaxed mb-6">
            From highland farm-gate aggregation and Q-cupping laboratories to the Port of Djibouti export corridor, Shumabo structures transparent, risk-managed commercial commodity transactions for international buyers.
          </p>

          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs text-[#EAE1D3] border border-white/15">
            <ShieldCheck className="w-4 h-4 text-[#B88B50]" />
            <span>FOB Djibouti · CFR / CIF Global Ports · L/C at Sight & CAD Banking</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SCOPE TRANSPARENCY NOTICE
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-white border border-[#E5DED2] rounded-2xl p-5 sm:p-6 shadow-xs flex items-start gap-4 font-body">
          <div className="w-10 h-10 rounded-xl bg-[#59351F]/10 text-[#59351F] flex items-center justify-center shrink-0 mt-0.5">
            <ShieldAlert className="w-5 h-5 text-[#B88B50]" />
          </div>
          <div className="text-xs text-[#6F6258] leading-relaxed">
            <strong className="text-[#2B1D16] block uppercase tracking-wider mb-1 font-body">
              Commercial Scope & Operational Transparency:
            </strong>
            Shumabo Import & Export functions as an authorized Ethiopian commodity trading and export coordination firm. We do not claim proprietary ownership of private international ocean container fleets or underwriting institutions; instead, we contract accredited ocean carriers (Maersk, MSC, CMA CGM, Ethiopian Shipping Lines) and independent survey agencies (SGS, Bureau Veritas) under formal commercial agreements.
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE 6-PHASE EXPORT PIPELINE JOURNEY (Elevated Core Feature)
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 font-body">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-eyebrow-label text-[#B88B50] block mb-1">
            INTERACTIVE EXPORT LIFECYCLE
          </span>
          <h2 className="text-section-heading font-display font-bold text-[#2B1D16]">
            The 6-Phase Ethiopian Export Journey.
          </h2>
          <p className="text-xs sm:text-sm text-[#6F6258] mt-2 leading-relaxed">
            Use the arrow controls below to cycle through each operational phase, inspecting statutory document deliverables, timelines, and mutual responsibilities.
          </p>
        </div>

        {/* Active Phase Deep-Dive Detailed Display Card with Flanking Left & Right Swipe Buttons */}
        {(() => {
          const current = pipelinePhases[activePipelineStep];
          const CurrentIcon = current.icon;

          return (
            <div className="relative max-w-5xl mx-auto flex items-center">
              {/* Left Swipe Button */}
              <button
                onClick={() => setActivePipelineStep((prev) => (prev > 0 ? prev - 1 : pipelinePhases.length - 1))}
                className="absolute -left-4 sm:-left-6 lg:-left-7 z-20 p-3.5 sm:p-4 rounded-full bg-[#2B1D16] hover:bg-[#59351F] text-[#EAE1D3] hover:text-white border-2 border-[#B88B50] shadow-xl transition-all cursor-pointer flex items-center justify-center shrink-0"
                aria-label="Previous export phase"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Main Card Container */}
              <div className="w-full bg-white rounded-2xl border border-[#E5DED2] shadow-sm overflow-hidden animate-in fade-in duration-300">
                <div className="px-6 pt-6 pb-2 text-center bg-[#F8F5EF] border-b border-[#E5DED2]">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#B88B50] block mb-1">
                    Phase {current.step} of 06 · {current.timing}
                  </span>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-[#2B1D16]">
                    {current.title}
                  </h3>
                  <span className="text-xs text-[#6F6258] font-body block mt-0.5">
                    {current.location}
                  </span>
                </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                {/* Left Visual Column with Authentic Documentary Photography */}
                <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full bg-[#2B1D16] overflow-hidden border-b lg:border-b-0 lg:border-r border-[#E5DED2]">
                  <img
                    src={current.image}
                    alt={current.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B1D16] via-[#2B1D16]/40 to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6 text-[#EAE1D3]">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-mono bg-[#B88B50] text-[#2B1D16] px-2 py-0.5 rounded font-bold">
                        PHASE {current.step} OF 06
                      </span>
                      <span className="text-xs text-[#EAE1D3]/80 font-mono">
                        {current.timing} · {current.location}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white leading-tight">
                      {current.title}
                    </h3>
                    <p className="text-xs text-[#EAE1D3]/80 mt-1 italic font-body">
                      "{current.tagline}"
                    </p>
                  </div>
                </div>

                {/* Right Operational Dossier Column */}
                <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-[#59351F] uppercase font-bold tracking-wider mb-2">
                      <CurrentIcon className="w-4 h-4 text-[#B88B50]" />
                      <span>Operational Scope & Execution</span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#6F6258] leading-relaxed mb-6 font-body">
                      {current.description}
                    </p>

                    {/* Official Document Deliverables */}
                    <div className="bg-[#F8F5EF] rounded-xl border border-[#E5DED2] p-4 mb-6">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#59351F] block mb-2.5">
                        Statutory Document Deliverables & Certifications:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {current.deliverables.map((doc, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-[#2B1D16]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#B88B50] shrink-0" />
                            <span className="font-medium text-[11px]">{doc}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Roles Allocation Matrix */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-body">
                      <div className="p-3.5 rounded-xl border border-[#E5DED2] bg-white">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#59351F] block mb-1">
                          Shumabo Operational Action:
                        </span>
                        <p className="text-[#6F6258] text-[11px] leading-relaxed">
                          {current.shumaboRole}
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl border border-[#E5DED2] bg-white">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#B88B50] block mb-1">
                          Buyer Action / Milestone:
                        </span>
                        <p className="text-[#6F6258] text-[11px] leading-relaxed">
                          {current.buyerRole}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Navigation Footer */}
                  <div className="pt-4 border-t border-[#E5DED2] flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <button
                        disabled={activePipelineStep === 0}
                        onClick={() => setActivePipelineStep((prev) => Math.max(0, prev - 1))}
                        className="px-3 py-1.5 text-xs font-medium rounded-lg border border-[#E5DED2] hover:bg-[#F8F5EF] disabled:opacity-40 cursor-pointer"
                      >
                        ← Previous Phase
                      </button>
                      <button
                        disabled={activePipelineStep === pipelinePhases.length - 1}
                        onClick={() => setActivePipelineStep((prev) => Math.min(pipelinePhases.length - 1, prev + 1))}
                        className="px-3 py-1.5 text-xs font-medium rounded-lg border border-[#E5DED2] hover:bg-[#F8F5EF] disabled:opacity-40 cursor-pointer"
                      >
                        Next Phase →
                      </button>
                    </div>

                    <button
                      onClick={() => onRequestQuote(`Phase ${current.step}: ${current.title}`)}
                      className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#59351F] hover:bg-[#2B1D16] rounded-lg transition-colors cursor-pointer shadow-xs whitespace-nowrap"
                    >
                      <span>Inquire About This Phase</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Swipe Button */}
            <button
              onClick={() => setActivePipelineStep((prev) => (prev < pipelinePhases.length - 1 ? prev + 1 : 0))}
              className="absolute -right-4 sm:-right-6 lg:-right-7 z-20 p-3.5 sm:p-4 rounded-full bg-[#2B1D16] hover:bg-[#59351F] text-[#EAE1D3] hover:text-white border-2 border-[#B88B50] shadow-xl transition-all cursor-pointer flex items-center justify-center shrink-0"
              aria-label="Next export phase"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
          );
        })()}
      </section>

      {/* =========================================================================
          INTERACTIVE INCOTERMS 2020 ALLOCATION MATRIX (Elevated Feature)
         ========================================================================= */}
      <section className="bg-white border-y border-[#E5DED2] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-body">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-eyebrow-label text-[#B88B50] block mb-1">
              INCOTERMS 2020 CONTRACT CONVENTIONS
            </span>
            <h2 className="text-section-heading font-display font-bold text-[#2B1D16]">
              Clear Allocation of Costs, Risk & Freight.
            </h2>
            <p className="text-xs sm:text-sm text-[#6F6258] mt-2 leading-relaxed">
              International agricultural commodity procurement operates under standardized ICC Incoterms. Toggle below to compare obligations under our primary delivery terms.
            </p>
          </div>

          {/* Incoterm Switcher Buttons */}
          <div className="flex items-center justify-center gap-2 max-w-xl mx-auto mb-8 bg-[#F8F5EF] p-1.5 rounded-xl border border-[#E5DED2]">
            {(['FOB', 'CFR', 'CIF', 'FCA'] as const).map((term) => (
              <button
                key={term}
                onClick={() => setSelectedIncoterm(term)}
                className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                  selectedIncoterm === term
                    ? 'bg-[#59351F] text-white shadow-xs'
                    : 'text-[#6F6258] hover:text-[#2B1D16]'
                }`}
              >
                {term}
              </button>
            ))}
          </div>

          {/* Active Incoterm Detailed Card */}
          {(() => {
            const data = incotermDetails[selectedIncoterm];
            return (
              <div className="bg-[#F8F5EF] rounded-2xl border border-[#E5DED2] p-6 sm:p-8 max-w-5xl mx-auto shadow-xs">
                <div className="mb-6 pb-4 border-b border-[#E5DED2]">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#2B1D16]">
                    {data.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6F6258] mt-1 leading-relaxed">
                    {data.summary}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs font-body">
                  {/* Shumabo Obligation */}
                  <div className="p-5 rounded-xl bg-white border border-[#E5DED2] shadow-xs">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#59351F] mb-3">
                      <CheckCircle2 className="w-4 h-4 text-[#B88B50]" />
                      <span>Shumabo Sourcing & Export Responsibilities:</span>
                    </div>
                    <ul className="space-y-2 text-[#6F6258]">
                      {data.shumaboCovers.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#59351F] mt-1.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Buyer Obligation */}
                  <div className="p-5 rounded-xl bg-white border border-[#E5DED2] shadow-xs">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B88B50] mb-3">
                      <Scale className="w-4 h-4 text-[#B88B50]" />
                      <span>Buyer Procurement Responsibilities:</span>
                    </div>
                    <ul className="space-y-2 text-[#6F6258]">
                      {data.buyerCovers.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#B88B50] mt-1.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E5DED2] flex flex-wrap items-center justify-between gap-4 text-xs">
                  <span className="text-[#6F6258]">
                    All contracts governed by standard Incoterms® 2020 international commercial rules.
                  </span>
                  <button
                    onClick={() => onRequestQuote(`Contract Terms Discussion: ${selectedIncoterm}`)}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#59351F] hover:bg-[#2B1D16] rounded-lg transition-colors cursor-pointer"
                  >
                    <span>Request Quotation on {selectedIncoterm} Basis</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* =========================================================================
          THE ETHIO-DJIBOUTI TRADE CORRIDOR BLUEPRINT (Visual Schematic)
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 font-body">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-eyebrow-label text-[#B88B50] block mb-1">
            STRATEGIC CORRIDOR SCHEMATIC
          </span>
          <h2 className="text-section-heading font-display font-bold text-[#2B1D16]">
            Highland Terroirs to the Red Sea Gateway.
          </h2>
          <p className="text-xs sm:text-sm text-[#6F6258] mt-2 leading-relaxed">
            The Port of Djibouti serves as the premier deep-water maritime gateway for Ethiopian agricultural commodities, offering rapid connection to Europe, the GCC, Asia, and the Americas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-[#E5DED2] shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#59351F] text-[#B88B50] flex items-center justify-center mb-4">
              <Building2 className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-mono font-bold text-[#B88B50] block mb-1">
              NODE 01 · ORIGIN HUBS
            </span>
            <h4 className="font-display text-lg font-bold text-[#2B1D16] mb-2">
              Addis Ababa & Modjo Dry Port
            </h4>
            <p className="text-xs text-[#6F6258] leading-relaxed mb-3">
              Central consolidation hub where coffee, sesame, grains, and pulses from Oromia, Sidama, Amhara, and Tigray are graded, packed into export bags, stuffed into 20ft dry ocean containers, and cleared through Ethiopian export customs.
            </p>
            <span className="text-[11px] font-mono text-[#59351F] font-semibold block">
              Transit: 24 – 48 Hours to Djibouti Port
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E5DED2] shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#59351F] text-[#B88B50] flex items-center justify-center mb-4">
              <Anchor className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-mono font-bold text-[#B88B50] block mb-1">
              NODE 02 · SEAPORT GATEWAY
            </span>
            <h4 className="font-display text-lg font-bold text-[#2B1D16] mb-2">
              Doraleh Terminal (Port of Djibouti)
            </h4>
            <p className="text-xs text-[#6F6258] leading-relaxed mb-3">
              State-of-the-art deep-water container terminal on the Bab-el-Mandeb Strait. Direct stevedoring onto major ocean liner services (Maersk, MSC, CMA CGM, Ethiopian Shipping Lines) with SGS pre-boarding surveys.
            </p>
            <span className="text-[11px] font-mono text-[#59351F] font-semibold block">
              Capacity: 1.6M TEU Annual Handling
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E5DED2] shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#59351F] text-[#B88B50] flex items-center justify-center mb-4">
              <Ship className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-mono font-bold text-[#B88B50] block mb-1">
              NODE 03 · GLOBAL PORTS
            </span>
            <h4 className="font-display text-lg font-bold text-[#2B1D16] mb-2">
              Red Sea, Gulf & Global Seaports
            </h4>
            <p className="text-xs text-[#6F6258] leading-relaxed mb-3">
              Direct ocean routes connecting the Horn of Africa to international trade centers: Jebel Ali (4–7 days), Rotterdam & Hamburg (18–22 days), Qingdao (16–20 days), and New York (24–30 days).
            </p>
            <span className="text-[11px] font-mono text-[#59351F] font-semibold block">
              Delivery: Worldwide Seaports
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE TRADE SERVICE CONFIGURATOR (Buyer Readiness Tool)
         ========================================================================= */}
      <section className="bg-[#2B1D16] text-[#EAE1D3] py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 font-body">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-eyebrow-label text-[#B88B50] block mb-1">
              COMMERCIAL READINESS CONFIGURATOR
            </span>
            <h2 className="text-section-heading font-display font-bold text-white">
              Calibrate Your Trade Service Profile.
            </h2>
            <p className="text-xs sm:text-sm text-[#EAE1D3]/80 mt-2 leading-relaxed">
              Select your commodity, volume scale, and target destination to generate an aligned service package and export workflow.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 text-xs">
              <div>
                <label className="font-bold text-[#B88B50] block mb-1.5 uppercase tracking-wider text-[10px]">
                  Target Commodity:
                </label>
                <select
                  value={profilerCommodity}
                  onChange={(e) => setProfilerCommodity(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-[#2B1D16] border border-white/20 text-white"
                >
                  <option value="Specialty Coffee">Specialty Washed & Natural Coffee</option>
                  <option value="Whitish Humera Sesame">Whitish Humera Sesame Seeds</option>
                  <option value="Highland Teff">Highland Magna White Teff</option>
                  <option value="White Pea Beans">Canning White Pea Beans / Pulses</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-[#B88B50] block mb-1.5 uppercase tracking-wider text-[10px]">
                  Order Scale:
                </label>
                <select
                  value={profilerVolume}
                  onChange={(e) => setProfilerVolume(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-[#2B1D16] border border-white/20 text-white"
                >
                  <option value="1 x 20ft FCL (~19.2 MT)">1 x 20ft FCL (Trial Container)</option>
                  <option value="3–5 x 20ft FCL (~60–100 MT)">3–5 x 20ft FCL (Multi-Container)</option>
                  <option value="10+ Container Annual Contract">10+ Container Annual Supply</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-[#B88B50] block mb-1.5 uppercase tracking-wider text-[10px]">
                  Incoterms Preference:
                </label>
                <select
                  value={profilerIncoterm}
                  onChange={(e) => setProfilerIncoterm(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-[#2B1D16] border border-white/20 text-white"
                >
                  <option value="FOB Port of Djibouti">FOB Port of Djibouti</option>
                  <option value="CFR Destination Seaport">CFR Destination Seaport</option>
                  <option value="CIF (With Marine Insurance)">CIF (With Marine Insurance)</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-[#B88B50] block mb-1.5 uppercase tracking-wider text-[10px]">
                  Destination Seaport:
                </label>
                <select
                  value={profilerRegion}
                  onChange={(e) => setProfilerRegion(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-[#2B1D16] border border-white/20 text-white"
                >
                  <option value="Europe (Rotterdam / Hamburg)">Europe (Rotterdam / Hamburg / Antwerp)</option>
                  <option value="Middle East (Jebel Ali / Jeddah)">Middle East (Jebel Ali / Jeddah)</option>
                  <option value="East Asia (Qingdao / Shanghai / Yokohama)">East Asia (Qingdao / Yokohama)</option>
                  <option value="North America (New York / Houston)">North America (New York / Houston)</option>
                </select>
              </div>
            </div>

            {/* Generated Profile Summary */}
            <div className="p-5 rounded-xl bg-white/10 border border-white/15 text-xs text-[#EAE1D3] space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#B88B50] block font-bold">
                RECOMMENDED EXPORT SERVICE PACKAGE:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <span className="text-[#EAE1D3]/70 block text-[10px] uppercase">Packaging Standard</span>
                  <strong className="text-white block mt-0.5">
                    {profilerCommodity.includes('Coffee')
                      ? '60kg Jute with GrainPro Hermetic Oxygen-Barrier Liner'
                      : '50kg Double-Stitched PP Food-Grade Multi-Ply Bags'}
                  </strong>
                </div>

                <div>
                  <span className="text-[#EAE1D3]/70 block text-[10px] uppercase">Inspection & Audit</span>
                  <strong className="text-white block mt-0.5">
                    ECTA Liquoring / ECX Sortex Laboratory Clearance + SGS Pre-Shipment
                  </strong>
                </div>

                <div>
                  <span className="text-[#EAE1D3]/70 block text-[10px] uppercase">Export Timeline</span>
                  <strong className="text-white block mt-0.5">
                    18 – 24 Days from L/C Opening to Djibouti Ocean Vessel Departure
                  </strong>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <p className="text-[11px] text-[#EAE1D3]/70 text-center sm:text-left">
                Ready to review pricing components, seasonal crop samples, or contract drafts?
              </p>
              <button
                onClick={handleApplyProfiler}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#2B1D16] bg-[#B88B50] hover:bg-white rounded-lg transition-colors cursor-pointer whitespace-nowrap shadow-xs"
              >
                <span>Initiate Tailored Trade Inquiry</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FAQ / OPERATIONAL ASSURANCE SECTION
         ========================================================================= */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 font-body">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-eyebrow-label text-[#B88B50] block mb-1">
            COMMERCIAL QUESTIONS
          </span>
          <h2 className="text-section-heading font-display font-bold text-[#2B1D16]">
            Frequently Asked Trade Operations Questions.
          </h2>
        </div>

        <div className="space-y-4 text-xs font-body">
          <div className="p-5 rounded-xl bg-white border border-[#E5DED2] shadow-xs">
            <h4 className="font-display text-sm font-bold text-[#2B1D16] mb-1.5">
              How are commercial payment instruments structured under Ethiopian export law?
            </h4>
            <p className="text-[#6F6258] leading-relaxed">
              In accordance with National Bank of Ethiopia regulations, all international commodity transactions are settled through authorized commercial banking channels via an Irrevocable Letter of Credit (L/C at Sight) or Cash Against Documents (CAD) through first-class international correspondent banks.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-[#E5DED2] shadow-xs">
            <h4 className="font-display text-sm font-bold text-[#2B1D16] mb-1.5">
              Can buyers request independent third-party surveyors at origin?
            </h4>
            <p className="text-[#6F6258] leading-relaxed">
              Yes. International buyers frequently appoint independent inspection agencies such as SGS, Bureau Veritas, or Cotecna to conduct pre-shipment quality verification, container cleanliness audits, and joint sealing before containers depart for the Port of Djibouti.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-[#E5DED2] shadow-xs">
            <h4 className="font-display text-sm font-bold text-[#2B1D16] mb-1.5">
              How are pre-shipment approval samples dispatched?
            </h4>
            <p className="text-[#6F6258] leading-relaxed">
              Before final container stuffing, 300g to 500g physical representative samples are prepared from the segregated export lot and dispatched via international air courier (DHL or FedEx Express) with moisture-sealed packaging and laboratory grading certificates.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
