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
      <section className="relative w-full h-[calc(100vh-5rem)] min-h-[500px] bg-[#800D18] overflow-hidden flex items-center justify-center">
        {/* Full-bleed motion graphics video */}
        <video
          ref={videoRef}
          autoPlay
          muted={isMuted}
          loop
          playsInline
          poster="https://cdn.videotourl.net/thumbnails/fd1ba77b-71f5-4943-b4bd-32cd10b542e9.jpg"
          className="w-full h-full object-cover object-center"
        >
          <source src="https://cdn.videotourl.net/videos/fd1ba77b-71f5-4943-b4bd-32cd10b542e9.mp4" type="video/mp4" />
          <source src="https://videotourl.net/v/fd1ba77b-71f5-4943-b4bd-32cd10b542e9" type="video/mp4" />
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
            <span className="text-[11px] uppercase tracking-[0.2em] font-body font-semibold text-[#FAF8F7]/85 group-hover:text-white drop-shadow-sm">
              Explore
            </span>
            <div className="w-8 h-8 rounded-full bg-black/35 group-hover:bg-[#A90F1C] text-[#FAF8F7] group-hover:text-white border border-white/20 flex items-center justify-center backdrop-blur-xs transition-colors shadow-sm">
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
        className="relative py-24 lg:py-32 bg-[#800D18] text-[#FAF8F7] border-b border-[#A90F1C]/40 overflow-hidden"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Eyebrow Label in Inspires font */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="text-eyebrow-label text-[#FAF8F7] px-4 py-1.5 bg-[#A90F1C]/80 border border-white/20 rounded-md">
              ETHIOPIAN AGRICULTURAL COMMODITIES
            </span>
          </div>

          {/* Primary Headline in Solene Display Serif font with line-height between 1.0 and 1.12 */}
          <h1 className="text-hero-headline font-display text-white mb-6 text-balance font-bold leading-[1.08]">
            Ethiopian Excellence. Global Trade.
          </h1>

          {/* Supporting Copy in Inspires font */}
          <p className="text-intro-paragraph font-body text-[#FAF8F7]/90 max-w-3xl mx-auto mb-10 font-normal leading-relaxed text-balance">
            Connecting Ethiopian agricultural commodities with international buyers through quality-focused sourcing, clear commercial discussions, and a commitment to building lasting business relationships.
          </p>

          {/* Primary Action Buttons in Inspires font */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto font-body">
            <button
              onClick={() => onNavigate('products')}
              className="w-full sm:w-auto px-8 py-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#A90F1C] hover:bg-[#C51B2A] rounded-lg transition-all shadow-md cursor-pointer whitespace-nowrap"
            >
              Explore Our Products
            </button>
            <button
              onClick={scrollToQuote}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-semibold uppercase tracking-wider text-[#241719] bg-white hover:bg-[#FAF8F7] rounded-lg transition-all shadow-md cursor-pointer whitespace-nowrap border border-[#E6DCDD]"
            >
              <span>Request a Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Commercial Trade Corridors Strip */}
          <div className="mt-16 pt-8 border-t border-white/20 grid grid-cols-2 md:grid-cols-4 gap-6 text-left font-body">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#FAF8F7]/80 font-semibold block">Origin Sourcing</span>
              <p className="text-xs text-white font-medium mt-0.5">Addis Ababa, Ethiopia</p>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#FAF8F7]/80 font-semibold block">Sea Gateway</span>
              <p className="text-xs text-white font-medium mt-0.5">Port of Djibouti Corridor</p>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#FAF8F7]/80 font-semibold block">Core Commodities</span>
              <p className="text-xs text-white font-medium mt-0.5">Coffee, Sesame, Grains</p>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#FAF8F7]/80 font-semibold block">Trade Terms</span>
              <p className="text-xs text-white font-medium mt-0.5">FOB Djibouti, CFR, CIF</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
           MODERNIZED AGRICULTURAL PORTFOLIO SECTION
          ========================================================================= */}
      <section id="discovery" className="py-24 bg-[#FAF8F7] border-b border-[#E6DCDD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <span className="text-eyebrow-label text-[#A90F1C] block mb-1">
                Agricultural Portfolio
              </span>
              <h2 className="text-section-heading font-display font-bold text-[#241719] text-balance">
                Products That Connect Origin to Opportunity.
              </h2>
              <p className="text-xs sm:text-sm text-[#6F6062] mt-3 font-body leading-relaxed">
                Explore key agricultural commodity categories sourced across Ethiopia's fertile highland plateaus and river basins. Every box below is structured for wholesale commercial inquiry.
              </p>
            </div>
            <button
              onClick={() => onNavigate('products')}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A90F1C] hover:text-[#241719] cursor-pointer whitespace-nowrap self-start md:self-auto font-body"
            >
              <span>View Full Technical Catalog</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

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
      <section className="py-20 bg-white border-b border-[#E6DCDD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-eyebrow-label text-[#A90F1C] block mb-1">
              Commercial Principles
            </span>
            <h2 className="text-section-heading font-display font-bold text-[#241719] text-balance">
              Built Around Your Buying Requirements.
            </h2>
            <p className="text-xs sm:text-sm text-[#6F6062] mt-3 font-body leading-relaxed">
              International trade succeeds on rigorous specifications and commercial clarity. We align our export coordination directly with buyer requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#FAF8F7] border border-[#E6DCDD] flex flex-col justify-between">
              <div>
                <span className="font-display text-2xl font-bold text-[#A90F1C] block mb-3">01.</span>
                <h3 className="text-base font-bold text-[#241719] mb-2 font-display">
                  Quality-Conscious Sourcing
                </h3>
                <p className="text-xs sm:text-sm text-[#6F6062] font-body leading-relaxed">
                  Understanding product specifications, moisture thresholds, purity levels, and grade expectations before quotation.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-[#E6DCDD] text-[11px] font-semibold text-[#A90F1C] uppercase tracking-wider font-body">
                Specification-First Review
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F7] border border-[#E6DCDD] flex flex-col justify-between">
              <div>
                <span className="font-display text-2xl font-bold text-[#A90F1C] block mb-3">02.</span>
                <h3 className="text-base font-bold text-[#241719] mb-2 font-display">
                  Commercially Focused Quotations
                </h3>
                <p className="text-xs sm:text-sm text-[#6F6062] font-body leading-relaxed">
                  Providing transparent pricing structured around confirmed quantities, target destination seaports, packaging, and agreed Incoterms.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-[#E6DCDD] text-[11px] font-semibold text-[#A90F1C] uppercase tracking-wider font-body">
                FOB & CIF Calculations
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F7] border border-[#E6DCDD] flex flex-col justify-between">
              <div>
                <span className="font-display text-2xl font-bold text-[#A90F1C] block mb-3">03.</span>
                <h3 className="text-base font-bold text-[#241719] mb-2 font-display">
                  Bulk-Order Discussions
                </h3>
                <p className="text-xs sm:text-sm text-[#6F6062] font-body leading-relaxed">
                  Tailored communication channels for wholesale procurement teams, coffee roasters, food packers, and commodity distributors.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-[#E6DCDD] text-[11px] font-semibold text-[#A90F1C] uppercase tracking-wider font-body">
                Container & Bulk Lots
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F7] border border-[#E6DCDD] flex flex-col justify-between">
              <div>
                <span className="font-display text-2xl font-bold text-[#A90F1C] block mb-3">04.</span>
                <h3 className="text-base font-bold text-[#241719] mb-2 font-display">
                  Clear Business Communication
                </h3>
                <p className="text-xs sm:text-sm text-[#6F6062] font-body leading-relaxed">
                  Direct disclosure of necessary export paperwork, realistic timelines, and practical commercial next steps from inquiry to contract.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-[#E6DCDD] text-[11px] font-semibold text-[#A90F1C] uppercase tracking-wider font-body">
                Transparent Trade Protocol
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
           COMPANY INTRODUCTION
          ========================================================================= */}
      <section className="py-24 bg-[#800D18] text-[#FAF8F7] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-eyebrow-label text-[#FAF8F7]/85 block">
                Company Introduction
              </span>
              <h2 className="text-section-heading font-display font-bold text-white text-balance leading-tight">
                Rooted in Ethiopia. Focused on Global Opportunity.
              </h2>
              <p className="text-sm sm:text-base text-[#FAF8F7]/90 font-body leading-relaxed">
                Shumabo Import & Export is an Ethiopian trading company operating from Addis Ababa, dedicated to bridging Ethiopian agricultural commodities with international wholesale buyers, roasters, and food processors.
              </p>
              <p className="text-xs sm:text-sm text-[#FAF8F7]/80 font-body leading-relaxed">
                Ethiopia's unique geography produces some of the world's finest specialty Arabica coffees, high-oil Whitish Humera sesame, and protein-dense pulses. Our business focus centers on understanding your commercial specifications, facilitating transparent price discussions, and coordinating responsible export delivery.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4 font-body">
                <button
                  onClick={() => onNavigate('about')}
                  className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#241719] bg-white hover:bg-[#FAF8F7] rounded-lg transition-colors cursor-pointer"
                >
                  Discover Shumabo
                </button>
                <button
                  onClick={() => onNavigate('export')}
                  className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white border border-white/30 hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                >
                  Export Terms & Logistics
                </button>
              </div>
            </div>

            {/* Editorial Box */}
            <div className="lg:col-span-5 bg-[#A90F1C]/40 border border-white/20 rounded-2xl p-8 lg:p-10 backdrop-blur-xs">
              <span className="text-eyebrow-label text-white block mb-4">
                Our Sourcing Commitment
              </span>
              <blockquote className="font-display text-xl sm:text-2xl text-white italic leading-snug mb-6">
                "We do not promise vague abstractions. We focus on verifiable grades, clear commercial contracts, and direct communication with every international trade partner."
              </blockquote>
              <div className="border-t border-white/20 pt-4 text-xs text-[#FAF8F7]/80 font-body">
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
      <section className="py-24 bg-white border-b border-[#E6DCDD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-eyebrow-label text-[#A90F1C] block mb-1">
              International Trade Parameters
            </span>
            <h2 className="text-section-heading font-display font-bold text-[#241719] text-balance">
              Your Next Agricultural Sourcing Conversation Starts Here.
            </h2>
            <p className="text-xs sm:text-sm text-[#6F6062] mt-3 font-body leading-relaxed">
              We welcome detailed discussions on specific trade requirements. Bring your purchasing parameters to the table:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: FileCheck2,
                title: 'Quality & Specification Alignment',
                desc: 'Confirming coffee screen sizes, sesame purity percentages, moisture tolerances, and grade standards.'
              },
              {
                icon: Package,
                title: 'Container Load Planning',
                desc: 'Calculating 20ft Full Container Load (FCL) capacities and secure moisture-barrier bag linings.'
              },
              {
                icon: Ship,
                title: 'Port of Djibouti Corridor',
                desc: 'Coordinating efficient multimodal transport from Addis Ababa to Djibouti maritime container vessels.'
              },
              {
                icon: Scale,
                title: 'ICC Incoterms 2020 Compliance',
                desc: 'Structuring transparent FOB Djibouti or CIF destination port commercial contracts.'
              },
              {
                icon: Shield,
                title: 'Statutory Documentation Dossier',
                desc: 'Providing ECTA certificates, ECX grading, phytosanitary clearance, and Certificate of Origin.'
              },
              {
                icon: Building,
                title: 'Direct Wholesale Discussions',
                desc: 'Working directly with import procurement directors, roastery buyers, and commodity distributors.'
              }
            ].map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl bg-[#FAF8F7] border border-[#E6DCDD] flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#E6DCDD] flex items-center justify-center text-[#A90F1C] mb-4 shadow-xs">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-[#241719] mb-2 font-display">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6F6062] font-body leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-[#E6DCDD] flex items-center justify-between text-xs font-semibold text-[#A90F1C] font-body">
                    <span>Export Protocol</span>
                    <span>→</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <button
              onClick={() => onNavigate('export')}
              className="inline-flex items-center gap-2 px-8 py-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#A90F1C] hover:bg-[#800D18] rounded-xl transition-all shadow-md cursor-pointer font-body"
            >
              <span>Explore Complete Export & Shipping Guide</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
           COMMERCIAL QUOTATION INQUIRY SECTION
          ========================================================================= */}
      <section ref={quoteSectionRef} id="inquiry-form-section" className="py-24 bg-[#FAF8F7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-eyebrow-label text-[#A90F1C] block mb-1">
              Direct Trade Desk Inquiry
            </span>
            <h2 className="text-section-heading font-display font-bold text-[#241719] text-balance">
              Request a Commercial Quotation.
            </h2>
            <p className="text-xs sm:text-sm text-[#6F6062] mt-3 font-body leading-relaxed">
              Submit your commodity specifications, estimated volume, target destination port, and delivery terms. Our trade desk responds promptly with formal proforma calculations.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-[#E6DCDD] shadow-xl p-8 sm:p-12">
            <InquiryForm
              initialProduct="Ethiopian Coffee"
              onSubmitted={(code) => {
                console.log('Inquiry submitted successfully with reference:', code);
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
