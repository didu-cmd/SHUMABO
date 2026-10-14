import React, { useState } from 'react';
import { PageRoute } from '../types';
import { InquiryForm } from '../components/InquiryForm';
import { faqData } from '../data/faqData';
import {
  MapPin,
  ChevronDown,
  ChevronUp,
  Clock,
  Building,
  ShieldCheck,
  Phone,
  Mail
} from 'lucide-react';

interface ContactPageProps {
  initialProduct?: string;
  initialMessage?: string;
  onNavigate: (page: PageRoute) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  initialProduct = 'Ethiopian Coffee',
  onNavigate
}) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');
  const [faqCategory, setFaqCategory] = useState<string>('All');

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  const faqCategories = ['All', 'Products', 'Inquiries', 'Shipping & Logistics', 'Commercial Terms'];

  const filteredFaqs = faqData.filter(
    (f) => faqCategory === 'All' || f.category === faqCategory
  );

  return (
    <div className="bg-[#F8F5EF] text-[#2B1D16] min-h-screen">
      {/* Contact Header: Plain Brown with Description (Services Page Style) */}
      <section className="bg-[#2B1D16] text-[#EAE1D3] py-20 border-b border-[#59351F]/50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#B88B50_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-eyebrow-label text-[#B88B50] block mb-3 font-body">
            COMMERCIAL COMMUNICATIONS
          </span>
          <h1 className="text-main-heading font-display font-bold text-white mb-5 text-balance">
            Connect with Our Trading Desk.
          </h1>
          <p className="text-intro-paragraph font-body max-w-3xl mx-auto text-[#EAE1D3]/85 leading-relaxed mb-6">
            Begin a commercial dialogue with Shumabo Import & Export. Submit your commodity specifications, volume, and destination requirements for review.
          </p>

          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs text-[#EAE1D3] border border-white/15">
            <ShieldCheck className="w-4 h-4 text-[#B88B50]" />
            <span>B2B Wholesale Inquiries · Pre-Shipment Sample Requests · Formal Proforma Invoicing</span>
          </div>
        </div>
      </section>

      {/* Main Grid: Form + Commercial Desk Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Commercial Desk Credentials & Guidelines */}
          <div className="lg:col-span-5 space-y-8 font-body">
            <div className="bg-white rounded-2xl border border-[#E5DED2] p-6 sm:p-8 shadow-xs">
              <span className="text-eyebrow-label text-[#B88B50] block mb-2">
                Origin Headquarters
              </span>
              <h3 className="font-display text-2xl font-bold text-[#2B1D16] mb-4">
                Shumabo Import & Export
              </h3>

              <div className="space-y-4 text-xs text-[#6F6258] border-b border-[#E5DED2] pb-6 font-body">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#B88B50] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#2B1D16] block">Corporate Headquarters:</strong>
                    <span>Bole Sub-City, Woreda 03, Addis Ababa, Ethiopia</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#B88B50] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#2B1D16] block">Office Telephone:</strong>
                    <span>+251 11 552 4890 / +251 11 663 9022</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#B88B50] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#2B1D16] block">Commercial Email:</strong>
                    <span>renderreal87@gmail.com (Primary Inquiries & Quotation Desk)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Building className="w-4 h-4 text-[#B88B50] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#2B1D16] block">Outbound Trade Corridor:</strong>
                    <span>Multimodal rail/road corridor connecting Addis Ababa to the Port of Djibouti container terminals</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#B88B50] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#2B1D16] block">Trading Desk Hours:</strong>
                    <span>Monday – Friday: 08:30 – 17:30 EAT (East Africa Time, UTC+3)</span>
                  </div>
                </div>
              </div>

              {/* Inquiry Protocol Advice */}
              <div className="pt-6 font-body">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#59351F] mb-3">
                  Inquiry Response Protocol
                </h4>
                <p className="text-xs text-[#6F6258] leading-relaxed mb-4">
                  Each export inquiry is routed to our commodity specialists who verify seasonal crop availability, inspect current grade benchmarks, and calculate ocean freight estimates.
                </p>
                <div className="p-3 bg-[#F8F5EF] rounded-xl border border-[#E5DED2] text-[11px] text-[#59351F]">
                  <strong>Commercial Policy:</strong> We respect confidentiality. Details provided in quotation requests are used exclusively for evaluating your commercial sourcing request.
                </div>
              </div>
            </div>

            {/* Quick Product Inquiry Selector */}
            <div className="bg-white rounded-2xl border border-[#E5DED2] p-6 shadow-xs font-body">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#2B1D16] mb-3">
                Frequent Inquiry Categories
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {[
                  'Ethiopian Coffee',
                  'Sesame Seeds',
                  'Grains',
                  'Other Agricultural Commodities'
                ].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => onNavigate('products')}
                    className="p-2.5 rounded-lg bg-[#F8F5EF] hover:bg-[#EAE1D3] text-[#59351F] font-medium text-left transition-colors cursor-pointer border border-[#E5DED2]"
                  >
                    {cat} →
                  </button>
                ))}
              </div>
            </div>

            {/* Google Map Location Card */}
            <div className="bg-white rounded-2xl border border-[#E5DED2] p-6 shadow-xs font-body">
              <span className="text-eyebrow-label text-[#B88B50] block mb-2">
                Geographic Headquarters
              </span>
              <h4 className="font-display text-base font-bold text-[#2B1D16] mb-3">
                Addis Ababa Office Map
              </h4>
              <div className="w-full h-52 rounded-xl overflow-hidden border border-[#E5DED2] relative bg-[#F8F5EF]">
                <iframe
                  title="Shumabo Headquarters Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126115.01826359!2d38.74689!3d9.03204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <span className="text-[11px] text-[#6F6258] block mt-2 text-center">
                Bole Sub-City, Woreda 03, Addis Ababa, Ethiopia
              </span>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <InquiryForm initialProduct={initialProduct} />
          </div>
        </div>
      </section>

      {/* Frequently Asked Commercial Questions */}
      <section className="py-20 bg-white border-t border-[#E5DED2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-eyebrow-label text-[#B88B50] block mb-1">
              Commercial Clarity
            </span>
            <h2 className="text-section-heading font-display font-bold text-[#2B1D16]">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-[#6F6258] mt-2 font-body">
              Objective commercial answers regarding specifications, container orders, documentation, and trade procedures.
            </p>
          </div>

          {/* FAQ Category Filters in Inspires font */}
          <div className="flex items-center justify-center gap-1.5 flex-wrap mb-8 font-body">
            {faqCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFaqCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors cursor-pointer ${
                  faqCategory === cat
                    ? 'bg-[#59351F] text-white'
                    : 'bg-[#F8F5EF] text-[#6F6258] hover:bg-[#EAE1D3]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordion List */}
          <div className="space-y-3">
            {filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-xl border border-[#E5DED2] bg-[#F8F5EF] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-base sm:text-lg font-bold text-[#2B1D16] pr-4">
                      {faq.question}
                    </span>
                    <span className="text-[#59351F] shrink-0">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-[#6F6258] leading-relaxed border-t border-[#E5DED2]/60 pt-3 bg-white font-body">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
