import React, { useState, useRef, useEffect } from 'react';
import { PageRoute } from '../types';
import { productsData } from '../data/productsData';
import { ProductCard } from '../components/ProductCard';
import { InquiryForm } from '../components/InquiryForm';
import {
  ArrowDown,
  ArrowUpRight,
  Shield,
  FileCheck2,
  Package,
  Ship,
  Scale,
  Layers,
  ChevronRight,
  Volume2,
  VolumeX,
  Play,
  Pause,
  MapPin,
  Building
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageRoute) => void;
  onRequestQuote: (productName?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onRequestQuote }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const quoteSectionRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsMuted(true);
        if (videoRef.current) {
          videoRef.current.muted = true;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const scrollToHero = () => {
    heroSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToQuote = () => {
    if (quoteSectionRef.current) {
      quoteSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      onRequestQuote();
    }
  };

  return (
    <div className="space-y-0">
      {/* =========================================================================
          FIRST PAGE: PURE MOTION GRAPHICS VIDEO
          No text, no headlines, no cards — just the motion graphics video in full.
         ========================================================================= */}
      <section className="relative w-full h-[calc(100vh-5rem)] min-h-[500px] bg-[#2B1D16] overflow-hidden flex items-center justify-center">
        {/* Full-bleed motion graphics video */}
        <video
          ref={videoRef}
          autoPlay
          muted={isMuted}
          loop
          playsInline
          poster="/images/hero-video-poster.jpg"
          className="w-full h-full object-cover object-center"
        >
          <source src="/videos/shumabo-welcome.mp4" type="video/mp4" />
        </video>

        {/* Minimal Audio & Playback Controls in corner */}
        <div className="absolute top-5 right-5 z-20 flex items-center gap-2">
          <button
            onClick={togglePlay}
            className="p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white/90 backdrop-blur-md border border-white/10 transition-colors cursor-pointer"
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
          <button
            onClick={toggleMute}
            className="p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white/90 backdrop-blur-md border border-white/10 transition-colors cursor-pointer"
            aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>

        {/* Discreet Downward Indicator to proceed directly to the Hero Page beneath it */}
        <div className="absolute bottom-6 inset-x-0 z-20 flex justify-center">
          <button
            onClick={scrollToHero}
            className="group flex flex-col items-center gap-1.5 p-2 text-white/80 hover:text-white transition-colors cursor-pointer focus:outline-none"
            aria-label="Proceed to home page content beneath video"
          >
            <span className="text-[11px] uppercase tracking-[0.2em] font-body font-semibold text-[#EAE1D3]/80 group-hover:text-white drop-shadow-sm">
              Explore
            </span>
            <div className="w-8 h-8 rounded-full bg-black/35 group-hover:bg-[#B88B50] text-[#EAE1D3] group-hover:text-[#2B1D16] border border-white/20 flex items-center justify-center backdrop-blur-xs transition-colors shadow-sm">
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </div>
          </button>
        </div>
      </section>

      {/* =========================================================================
          HERO PAGE: STARTS DIRECTLY BENEATH THE MOTION GRAPHICS VIDEO
         ========================================================================= */}
      <section
        ref={heroSectionRef}
        id="hero-content"
        className="relative py-24 lg:py-32 bg-[#2B1D16] text-[#EAE1D3] border-b border-[#59351F]/40 overflow-hidden"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Eyebrow Label in Inspires font */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="text-eyebrow-label text-[#B88B50] px-4 py-1.5 bg-[#59351F]/70 border border-[#B88B50]/30 rounded-md">
              ETHIOPIAN AGRICULTURAL COMMODITIES
            </span>
          </div>

          {/* Primary Headline in Solene Display Serif font with line-height between 1.0 and 1.12 */}
          <h1 className="text-hero-headline font-display text-white mb-6 text-balance font-bold leading-[1.08]">
            Ethiopian Excellence. Global Trade.
          </h1>

          {/* Supporting Copy in Inspires font */}
          <p className="text-intro-paragraph font-body text-[#EAE1D3] max-w-3xl mx-auto mb-10 font-normal leading-relaxed text-balance">
            Connecting Ethiopian agricultural commodities with international buyers through quality-focused sourcing, clear commercial discussions, and a commitment to building lasting business relationships.
          </p>

          {/* Primary Action Buttons in Inspires font */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto font-body">
            <button
              onClick={() => onNavigate('products')}
              className="w-full sm:w-auto px-8 py-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#59351F] hover:bg-[#B88B50] rounded-lg transition-all shadow-md cursor-pointer whitespace-nowrap"
            >
              Explore Our Products
            </button>
            <button
              onClick={scrollToQuote}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-semibold uppercase tracking-wider text-[#2B1D16] bg-[#B88B50] hover:bg-[#EAE1D3] rounded-lg transition-all shadow-md cursor-pointer whitespace-nowrap"
            >
              <span>Request a Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Commercial Trade Corridors Strip */}
          <div className="mt-16 pt-8 border-t border-[#59351F]/60 grid grid-cols-2 md:grid-cols-4 gap-6 text-left font-body">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#B88B50] font-semibold block">Origin Sourcing</span>
              <p className="text-xs text-white font-medium mt-0.5">Addis Ababa, Ethiopia</p>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#B88B50] font-semibold block">Sea Gateway</span>
              <p className="text-xs text-white font-medium mt-0.5">Port of Djibouti Corridor</p>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#B88B50] font-semibold block">Core Commodities</span>
              <p className="text-xs text-white font-medium mt-0.5">Coffee, Sesame, Grains</p>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#B88B50] font-semibold block">Trade Terms</span>
              <p className="text-xs text-white font-medium mt-0.5">FOB Djibouti, CFR, CIF</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          MODERNIZED AGRICULTURAL PORTFOLIO SECTION
          Every content item is strictly contained inside the given box and outline.
         ========================================================================= */}
      <section id="discovery" className="py-24 bg-[#F8F5EF] border-b border-[#E5DED2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <span className="text-eyebrow-label text-[#B88B50] block mb-1">
                Agricultural Portfolio
              </span>
              <h2 className="text-section-heading font-display font-bold text-[#2B1D16] text-balance">
                Products That Connect Origin to Opportunity.
              </h2>
              <p className="text-xs sm:text-sm text-[#6F6258] mt-3 font-body leading-relaxed">
                Explore key agricultural commodity categories sourced across Ethiopia's fertile highland plateaus and river basins. Every box below is structured for wholesale commercial inquiry.
              </p>
            </div>
            <button
              onClick={() => onNavigate('products')}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#59351F] hover:text-[#2B1D16] cursor-pointer whitespace-nowrap self-start md:self-auto font-body"
            >
              <span>View Full Technical Catalog</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Modernized Portfolio Grid with uniform height and strictly contained outlines */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {productsData.slice(0, 4).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onRequestQuote={(prodName) => onRequestQuote(prodName)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          WHY SHUMABO: BUILT AROUND YOUR BUYING REQUIREMENTS
         ========================================================================= */}
      <section className="py-20 bg-white border-b border-[#E5DED2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-eyebrow-label text-[#B88B50] block mb-1">
              Commercial Principles
            </span>
            <h2 className="text-section-heading font-display font-bold text-[#2B1D16] text-balance">
              Built Around Your Buying Requirements.
            </h2>
            <p className="text-xs sm:text-sm text-[#6F6258] mt-3 font-body leading-relaxed">
              International trade succeeds on rigorous specifications and commercial clarity. We align our export coordination directly with buyer requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Principle 1 */}
            <div className="p-6 rounded-2xl bg-[#F8F5EF] border border-[#E5DED2] flex flex-col justify-between">
              <div>
                <span className="font-display text-2xl font-bold text-[#B88B50] block mb-3">01.</span>
                <h3 className="text-base font-bold text-[#2B1D16] mb-2 font-display">
                  Quality-Conscious Sourcing
                </h3>
                <p className="text-xs sm:text-sm text-[#6F6258] font-body leading-relaxed">
                  Understanding product specifications, moisture thresholds, purity levels, and grade expectations before quotation.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-[#E5DED2] text-[11px] font-semibold text-[#59351F] uppercase tracking-wider font-body">
                Specification-First Review
              </div>
            </div>

            {/* Principle 2 */}
            <div className="p-6 rounded-2xl bg-[#F8F5EF] border border-[#E5DED2] flex flex-col justify-between">
              <div>
                <span className="font-display text-2xl font-bold text-[#B88B50] block mb-3">02.</span>
                <h3 className="text-base font-bold text-[#2B1D16] mb-2 font-display">
                  Commercially Focused Quotations
                </h3>
                <p className="text-xs sm:text-sm text-[#6F6258] font-body leading-relaxed">
                  Providing transparent pricing structured around confirmed quantities, target destination seaports, packaging, and agreed Incoterms.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-[#E5DED2] text-[11px] font-semibold text-[#59351F] uppercase tracking-wider font-body">
                FOB & CIF Calculations
              </div>
            </div>

            {/* Principle 3 */}
            <div className="p-6 rounded-2xl bg-[#F8F5EF] border border-[#E5DED2] flex flex-col justify-between">
              <div>
                <span className="font-display text-2xl font-bold text-[#B88B50] block mb-3">03.</span>
                <h3 className="text-base font-bold text-[#2B1D16] mb-2 font-display">
                  Bulk-Order Discussions
                </h3>
                <p className="text-xs sm:text-sm text-[#6F6258] font-body leading-relaxed">
                  Tailored communication channels for wholesale procurement teams, coffee roasters, food packers, and commodity distributors.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-[#E5DED2] text-[11px] font-semibold text-[#59351F] uppercase tracking-wider font-body">
                Container & Bulk Lots
              </div>
            </div>

            {/* Principle 4 */}
            <div className="p-6 rounded-2xl bg-[#F8F5EF] border border-[#E5DED2] flex flex-col justify-between">
              <div>
                <span className="font-display text-2xl font-bold text-[#B88B50] block mb-3">04.</span>
                <h3 className="text-base font-bold text-[#2B1D16] mb-2 font-display">
                  Clear Business Communication
                </h3>
                <p className="text-xs sm:text-sm text-[#6F6258] font-body leading-relaxed">
                  Direct disclosure of necessary export paperwork, realistic timelines, and practical commercial next steps from inquiry to contract.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-[#E5DED2] text-[11px] font-semibold text-[#59351F] uppercase tracking-wider font-body">
                Transparent Trade Protocol
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          COMPANY INTRODUCTION
         ========================================================================= */}
      <section className="py-24 bg-[#2B1D16] text-[#EAE1D3] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-eyebrow-label text-[#B88B50] block">
                Company Introduction
              </span>
              <h2 className="text-section-heading font-display font-bold text-white text-balance leading-tight">
                Rooted in Ethiopia. Focused on Global Opportunity.
              </h2>
              <p className="text-sm sm:text-base text-[#EAE1D3]/90 font-body leading-relaxed">
                Shumabo Import & Export is an Ethiopian trading company operating from Addis Ababa, dedicated to bridging Ethiopian agricultural commodities with international wholesale buyers, roasters, and food processors.
              </p>
              <p className="text-xs sm:text-sm text-[#EAE1D3]/80 font-body leading-relaxed">
                Ethiopia's unique geography produces some of the world's finest specialty Arabica coffees, high-oil Whitish Humera sesame, and protein-dense pulses. Our business focus centers on understanding your commercial specifications, facilitating transparent price discussions, and coordinating responsible export delivery.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4 font-body">
                <button
                  onClick={() => onNavigate('about')}
                  className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#2B1D16] bg-[#B88B50] hover:bg-[#EAE1D3] rounded-lg transition-colors cursor-pointer"
                >
                  Discover Shumabo
                </button>
                <button
                  onClick={() => onNavigate('export')}
                  className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white border border-[#59351F] hover:bg-[#59351F] rounded-lg transition-colors cursor-pointer"
                >
                  Export Terms & Logistics
                </button>
              </div>
            </div>

            {/* Editorial Box */}
            <div className="lg:col-span-5 bg-[#59351F]/40 border border-[#B88B50]/30 rounded-2xl p-8 lg:p-10 backdrop-blur-xs">
              <span className="text-eyebrow-label text-[#B88B50] block mb-4">
                Our Sourcing Commitment
              </span>
              <blockquote className="font-display text-xl sm:text-2xl text-white italic leading-snug mb-6">
                "We do not promise vague abstractions. We focus on verifiable grades, clear commercial contracts, and direct communication with every international trade partner."
              </blockquote>
              <div className="border-t border-[#59351F] pt-4 text-xs text-[#EAE1D3]/70 font-body">
                <strong className="text-white block">Shumabo Commercial Trade Desk</strong>
                <span>Addis Ababa, Ethiopia · Global Gateway via Port of Djibouti</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          EXPORT AND INTERNATIONAL TRADE SECTION
         ========================================================================= */}
      <section className="py-24 bg-white border-b border-[#E5DED2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-eyebrow-label text-[#B88B50] block mb-1">
              International Trade Parameters
            </span>
            <h2 className="text-section-heading font-display font-bold text-[#2B1D16] text-balance">
              Your Next Agricultural Sourcing Conversation Starts Here.
            </h2>
            <p className="text-xs sm:text-sm text-[#6F6258] mt-3 font-body leading-relaxed">
              We welcome detailed discussions on specific trade requirements. Bring your purchasing parameters to the table:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: FileCheck2,
                title: 'Product Specifications & Grades',
                desc: 'Coffee processing (washed/natural), screen size, sesame purity (99%+ sortexed), moisture limits.'
              },
              {
                icon: Scale,
                title: 'Estimated Quantities & Contracts',
                desc: 'From single 20ft container trial shipments (~19 MT) to scheduled seasonal supply contracts.'
              },
              {
                icon: Ship,
                title: 'Destination Seaport & Freight Basis',
                desc: 'Quotations structured on FOB Djibouti or CFR / CIF to European, Middle Eastern, Asian, or American ports.'
              },
              {
                icon: Package,
                title: 'Packaging & Private Stenciling',
                desc: '60kg GrainPro lined jute bags, 50kg PP bags, bulk container liners, and buyer stenciling marks.'
              },
              {
                icon: Shield,
                title: 'Quality & Phytosanitary Inspection',
                desc: 'Statutory Ethiopian inspection certificates and independent surveyor coordination (SGS / Bureau Veritas).'
              },
              {
                icon: Layers,
                title: 'Target Delivery Timelines',
                desc: 'Alignment with Ethiopian harvest cycles, crop availability, and seasonal shipping windows.'
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-6 rounded-xl bg-[#F8F5EF] border border-[#E5DED2]">
                  <div className="w-10 h-10 rounded-lg bg-[#59351F] text-[#B88B50] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-[#2B1D16] mb-1.5 font-display">{item.title}</h3>
                  <p className="text-xs text-[#6F6258] font-body leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center font-body">
            <button
              onClick={() => onNavigate('export')}
              className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#59351F] hover:bg-[#2B1D16] rounded-lg transition-colors cursor-pointer"
            >
              <span>Discuss Your Export Requirements</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          HOW IT WORKS (THREE-STAGE PROTOCOL)
         ========================================================================= */}
      <section className="py-24 bg-[#F8F5EF] border-b border-[#E5DED2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-eyebrow-label text-[#B88B50] block mb-1">
              Inquiry Journey
            </span>
            <h2 className="text-section-heading font-display font-bold text-[#2B1D16]">
              How Commercial Inquiries Progress.
            </h2>
            <p className="text-xs sm:text-sm text-[#6F6258] mt-3 font-body">
              A clear three-stage protocol designed to turn buyer specifications into concrete quotations without ambiguity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-2xl border border-[#E5DED2] shadow-xs relative">
              <span className="text-[11px] font-bold tracking-widest uppercase text-[#B88B50] block mb-2 font-body">
                STEP 01
              </span>
              <h3 className="font-display text-xl font-bold text-[#2B1D16] mb-3">
                Share Your Requirements
              </h3>
              <p className="text-xs sm:text-sm text-[#6F6258] font-body leading-relaxed">
                The buyer selects a product category and submits target quantity, destination port, desired grade, and preliminary specifications via our quotation form.
              </p>
              <div className="mt-6 pt-4 border-t border-[#E5DED2] text-xs text-[#59351F] font-semibold font-body">
                Takes 2–3 minutes
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-2xl border border-[#E5DED2] shadow-xs relative">
              <span className="text-[11px] font-bold tracking-widest uppercase text-[#B88B50] block mb-2 font-body">
                STEP 02
              </span>
              <h3 className="font-display text-xl font-bold text-[#2B1D16] mb-3">
                Review and Discuss
              </h3>
              <p className="text-xs sm:text-sm text-[#6F6258] font-body leading-relaxed">
                Our Ethiopian trade desk reviews regional crop availability, current export pricing indices, and technical feasibility, then initiates direct communication.
              </p>
              <div className="mt-6 pt-4 border-t border-[#E5DED2] text-xs text-[#59351F] font-semibold font-body">
                Direct trade officer alignment
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-2xl border border-[#E5DED2] shadow-xs relative">
              <span className="text-[11px] font-bold tracking-widest uppercase text-[#B88B50] block mb-2 font-body">
                STEP 03
              </span>
              <h3 className="font-display text-xl font-bold text-[#2B1D16] mb-3">
                Agree on Next Steps
              </h3>
              <p className="text-xs sm:text-sm text-[#6F6258] font-body leading-relaxed">
                Both parties discuss formal proforma invoices, payment terms (L/C / CAD), pre-shipment inspection, packaging stencils, and contract milestones.
              </p>
              <div className="mt-6 pt-4 border-t border-[#E5DED2] text-xs text-[#59351F] font-semibold font-body">
                Contractual confirmation
              </div>
            </div>
          </div>

          <div className="mt-10 p-4 rounded-xl bg-[#EAE1D3]/50 border border-[#E5DED2] text-center max-w-2xl mx-auto text-xs text-[#59351F] font-body">
            <strong>Important distinction:</strong> An inquiry submission is an initial commercial consultation and quotation request. It does not constitute a confirmed purchase contract or cargo booking.
          </div>
        </div>
      </section>

      {/* =========================================================================
          TESTIMONIALS SECTION (Added after Inquiry Journey)
         ========================================================================= */}
      <section className="py-24 bg-white border-b border-[#E5DED2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-eyebrow-label text-[#B88B50] block mb-1">
              Global Buyer Testimonials
            </span>
            <h2 className="text-section-heading font-display font-bold text-[#2B1D16]">
              Trusted by International Importers & Roasters.
            </h2>
            <p className="text-xs sm:text-sm text-[#6F6258] mt-3 font-body">
              Read how international wholesale buyers experience Shumabo's specification-first export coordination and transparent trade communication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-[#F8F5EF] p-8 rounded-2xl border border-[#E5DED2] flex flex-col justify-between font-body">
              <div>
                <div className="flex items-center gap-1 text-[#B88B50] mb-4 text-sm font-bold">
                  ★★★★★
                </div>
                <p className="text-xs sm:text-sm text-[#2B1D16] italic leading-relaxed mb-6">
                  "Working with Shumabo for our specialty Yirgacheffe coffee imports has been exceptionally smooth. Their moisture testing and pre-shipment documentation match exact European specialty roaster standards."
                </p>
              </div>
              <div className="pt-4 border-t border-[#E5DED2]">
                <strong className="block text-xs font-bold text-[#2B1D16]">Managing Director</strong>
                <span className="text-[11px] text-[#6F6258]">Hamburg Specialty Coffee Importer, Germany</span>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-[#F8F5EF] p-8 rounded-2xl border border-[#E5DED2] flex flex-col justify-between font-body">
              <div>
                <div className="flex items-center gap-1 text-[#B88B50] mb-4 text-sm font-bold">
                  ★★★★★
                </div>
                <p className="text-xs sm:text-sm text-[#2B1D16] italic leading-relaxed mb-6">
                  "For Whitish Humera sesame seeds, purity and oil content are critical. Shumabo delivered 99.5% sortexed lots with transparent FOB Djibouti pricing and flawless vessel scheduling."
                </p>
              </div>
              <div className="pt-4 border-t border-[#E5DED2]">
                <strong className="block text-xs font-bold text-[#2B1D16]">Head of Commodity Procurement</strong>
                <span className="text-[11px] text-[#6F6258]">Dubai Agri-Trading Enterprise, UAE</span>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-[#F8F5EF] p-8 rounded-2xl border border-[#E5DED2] flex flex-col justify-between font-body">
              <div>
                <div className="flex items-center gap-1 text-[#B88B50] mb-4 text-sm font-bold">
                  ★★★★★
                </div>
                <p className="text-xs sm:text-sm text-[#2B1D16] italic leading-relaxed mb-6">
                  "Their three-stage inquiry protocol gives us absolute confidence. Quotations are clear, Incoterms are transparent, and communication is direct and professional from start to finish."
                </p>
              </div>
              <div className="pt-4 border-t border-[#E5DED2]">
                <strong className="block text-xs font-bold text-[#2B1D16]">Senior Import Manager</strong>
                <span className="text-[11px] text-[#6F6258]">Singapore Food Ingredients Group</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          HOMEPAGE CONVERSION SECTION (INQUIRY FORM)
         ========================================================================= */}
      <section ref={quoteSectionRef} id="quote-form-section" className="py-24 bg-[#F8F5EF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-eyebrow-label text-[#B88B50] block mb-1">
              Direct Commercial Sourcing
            </span>
            <h2 className="text-section-heading font-display font-bold text-[#2B1D16]">
              Tell Us What Your Business Needs.
            </h2>
            <p className="text-xs sm:text-sm text-[#6F6258] mt-2 max-w-xl mx-auto font-body">
              Share your product requirements, estimated quantity, and destination country. Start a focused commercial discussion with Shumabo Import & Export.
            </p>
          </div>

          <InquiryForm
            initialProduct="Ethiopian Coffee"
            onSubmitted={() => {
              quoteSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
            }}
          />
        </div>
      </section>
    </div>
  );
};
