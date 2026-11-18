import React, { useState } from 'react';
import { ShieldCheck, FileText, ExternalLink, ZoomIn, X, Download, Award } from 'lucide-react';

interface BusinessCredentialsSectionProps {
  // Optional callback or navigation if needed
}

interface LicenseDoc {
  id: string;
  title: string;
  subtitle: string;
  authority: string;
  url: string;
  description: string;
}

export const BusinessCredentialsSection: React.FC<BusinessCredentialsSectionProps> = () => {
  const [selectedDoc, setSelectedDoc] = useState<LicenseDoc | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const licenses: LicenseDoc[] = [
    {
      id: 'license-1',
      title: 'Commercial Business License (Primary)',
      subtitle: 'Federal Democratic Republic of Ethiopia Ministry of Trade & Regional Integration',
      authority: 'Ministry of Trade & Regional Integration',
      url: 'https://cdn.corenexis.com/f/P20JcUkp.jpg',
      description: 'Official statutory trade registration authorizing Shumabo Import & Export PLC to engage in wholesale international agricultural commodity trading, import-export operations, and commercial supply.'
    },
    {
      id: 'license-2',
      title: 'Export Trade Registration & Certification',
      subtitle: 'Addis Ababa City Administration Trade Bureau & Sectoral Authority',
      authority: 'Addis Ababa Trade Bureau',
      url: 'https://cdn.corenexis.com/f/LnsghfCO.jpg',
      description: 'Official regional commercial registration and export licensing confirming lawful operation within the Bole commercial district of Addis Ababa for agricultural export consignments.'
    }
  ];

  const handleOpenModal = (doc: LicenseDoc) => {
    setSelectedDoc(doc);
    setZoomLevel(1);
  };

  const handleCloseModal = () => {
    setSelectedDoc(null);
    setZoomLevel(1);
  };

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.25, 2.0));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.25, 0.75));
  };

  return (
    <section className="py-24 bg-[#FAF8F7] border-t border-b border-[#E6DCDD] relative overflow-hidden">
      {/* Subtle decorative background pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#A90F1C_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#A90F1C]/10 text-[#A90F1C] text-xs font-semibold uppercase tracking-wider mb-3 font-body border border-[#A90F1C]/20">
            <Award className="w-4 h-4 text-[#A90F1C]" />
            <span>Statutory Verification & Compliance</span>
          </div>
          <h2 className="text-section-heading font-display font-bold text-[#241719] text-balance mb-4">
            Officially Registered. Professionally Trusted.
          </h2>
          <p className="text-xs sm:text-sm text-[#6F6062] font-body leading-relaxed">
            Transparency and accountability are at the heart of our business. Explore our official business documentation and learn more about the credentials behind Shumabo Import & Export.
          </p>
        </div>

        {/* Document Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {licenses.map((doc) => (
            <div
              key={doc.id}
              onClick={() => handleOpenModal(doc)}
              className="bg-white rounded-2xl border border-[#E6DCDD] p-6 shadow-xs hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col justify-between relative overflow-hidden"
            >
              {/* Official crimson brand accent bar at top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#800D18] via-[#A90F1C] to-[#C51B2A]" />

              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4 pt-1">
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#A90F1C] bg-[#FAF8F7] px-3 py-1 rounded-lg border border-[#E6DCDD]">
                    <FileText className="w-3.5 h-3.5 text-[#C51B2A]" />
                    <span>Official Document</span>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#6F6062] group-hover:text-[#A90F1C] transition-colors flex items-center gap-1">
                    <span>Click to Inspect</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>

                {/* Document Title */}
                <h3 className="font-display text-xl font-bold text-[#241719] mb-1 group-hover:text-[#A90F1C] transition-colors">
                  {doc.title}
                </h3>
                <p className="text-xs font-semibold text-[#A90F1C] uppercase tracking-wider mb-4 font-body">
                  {doc.authority}
                </p>

                {/* Document Frame Thumbnail */}
                <div className="relative rounded-xl overflow-hidden border border-[#E6DCDD] bg-[#FAF8F7] aspect-4/3 shadow-inner mb-4 group-hover:border-[#A90F1C] transition-colors">
                  <img
                    src={doc.url}
                    alt={doc.title}
                    className="w-full h-full object-cover object-top filter contrast-[1.02] transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-[#800D18]/90 text-white px-4 py-2 rounded-xl text-xs font-semibold tracking-wider flex items-center gap-2 shadow-lg backdrop-blur-xs">
                      <ZoomIn className="w-4 h-4 text-[#C51B2A]" />
                      <span>View Full Document</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-[#6F6062] font-body leading-relaxed">
                  {doc.description}
                </p>
              </div>

              {/* Footer action bar */}
              <div className="mt-6 pt-4 border-t border-[#E6DCDD] flex items-center justify-between text-xs font-semibold text-[#A90F1C] font-body">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#A90F1C]" />
                  <span>Verified Statutory Registration</span>
                </span>
                <span className="underline group-hover:text-[#800D18]">View Details →</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =========================================================================
          INTERACTIVE FULLSCREEN DOCUMENT VIEWER MODAL
         ========================================================================= */}
      {selectedDoc && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] border border-[#E6DCDD]">
            {/* Modal Header */}
            <div className="px-6 py-4 bg-[#800D18] text-white flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#A90F1C] flex items-center justify-center border border-white/25">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-base sm:text-lg font-bold text-white">
                    {selectedDoc.title}
                  </h3>
                  <span className="text-[11px] text-[#FAF8F7]/85 font-body block">
                    {selectedDoc.subtitle}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={selectedDoc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  aria-label="Download original document"
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-medium"
                >
                  <Download className="w-4 h-4" />
                  <span className="hidden sm:inline">Download</span>
                </a>
                <button
                  onClick={handleCloseModal}
                  aria-label="Close document viewer"
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body: Document Viewport with Zoom Controls */}
            <div className="flex-1 overflow-auto p-4 sm:p-8 bg-[#FAF8F7] flex items-center justify-center relative select-none">
              {/* Zoom Toolbar overlay */}
              <div className="absolute top-4 right-4 z-20 flex items-center gap-1 bg-white/90 backdrop-blur-md p-1.5 rounded-xl border border-[#E6DCDD] shadow-md">
                <button
                  onClick={handleZoomOut}
                  className="px-2.5 py-1 text-xs font-bold text-[#241719] hover:bg-[#FAF8F7] rounded-lg transition-colors cursor-pointer"
                  title="Zoom Out"
                >
                  -
                </button>
                <span className="text-xs font-mono px-2 text-[#A90F1C]">{Math.round(zoomLevel * 100)}%</span>
                <button
                  onClick={handleZoomIn}
                  className="px-2.5 py-1 text-xs font-bold text-[#241719] hover:bg-[#FAF8F7] rounded-lg transition-colors cursor-pointer"
                  title="Zoom In"
                >
                  +
                </button>
              </div>

              <div className="max-w-3xl w-full flex items-center justify-center overflow-auto p-2">
                <img
                  src={selectedDoc.url}
                  alt={selectedDoc.title}
                  style={{ transform: `scale(${zoomLevel})`, transition: 'transform 0.2s ease-out' }}
                  className="w-auto h-auto max-h-[70vh] object-contain rounded-xl shadow-2xl border border-[#E6DCDD] bg-white origin-center"
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-white border-t border-[#E6DCDD] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#6F6062] font-body shrink-0">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#A90F1C]" />
                <span>Verified Legal Instrument — Shumabo Import & Export PLC (Addis Ababa, Ethiopia)</span>
              </div>
              <button
                onClick={handleCloseModal}
                className="px-5 py-2 rounded-xl bg-[#800D18] hover:bg-[#A90F1C] text-white font-semibold transition-colors cursor-pointer"
              >
                Close Viewer
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
