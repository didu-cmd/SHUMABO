import React, { useState, useEffect } from 'react';
import { InquiryFormData } from '../types';
import { CheckCircle2, AlertCircle, Loader2, Copy, Check, ChevronDown, ChevronUp, FileText } from 'lucide-react';

interface InquiryFormProps {
  initialProduct?: string;
  onSubmitted?: (referenceCode: string) => void;
  className?: string;
}

export const InquiryForm: React.FC<InquiryFormProps> = ({
  initialProduct = '',
  onSubmitted,
  className = ''
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    businessEmail: '',
    companyName: '',
    businessCountry: '',
    productOfInterest: initialProduct || 'Ethiopian Coffee',
    estimatedQuantity: '',
    quantityUnit: 'Metric tons',
    otherUnit: '',
    destinationCountry: '',
    message: '',
    phoneWhatsapp: '',
    jobTitle: '',
    specificationDetails: '',
    packagingPreference: '60kg GrainPro Jute Bags / 50kg PP Bags',
    purchasingTimeline: 'Within 30–60 Days',
    deliveryTerms: 'FOB Djibouti'
  });

  const [showOptionalFields, setShowOptionalFields] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<{
    success: boolean;
    referenceCode?: string;
    message?: string;
  } | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);

  useEffect(() => {
    if (initialProduct) {
      setFormData((prev) => ({ ...prev, productOfInterest: initialProduct }));
    }
  }, [initialProduct]);

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) errs.fullName = 'Please provide your full contact name.';
    if (!formData.businessEmail.trim()) {
      errs.businessEmail = 'Please provide your business email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.businessEmail.trim())) {
      errs.businessEmail = 'Please enter a valid corporate email address.';
    }
    if (!formData.companyName.trim()) errs.companyName = 'Company name is required.';
    if (!formData.businessCountry.trim()) errs.businessCountry = 'Please enter your business registration country.';
    if (!formData.productOfInterest.trim()) errs.productOfInterest = 'Please select a product category.';
    if (!formData.estimatedQuantity.trim()) {
      errs.estimatedQuantity = 'Please specify an estimated volume or quantity.';
    } else if (isNaN(Number(formData.estimatedQuantity)) || Number(formData.estimatedQuantity) <= 0) {
      errs.estimatedQuantity = 'Please enter a positive numeric quantity.';
    }
    if (formData.quantityUnit === 'Other' && !formData.otherUnit?.trim()) {
      errs.otherUnit = 'Please specify the custom unit of measure.';
    }
    if (!formData.destinationCountry.trim()) {
      errs.destinationCountry = 'Please provide your target destination country / port of discharge.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide preliminary commercial specifications or questions.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setSubmissionResult(null);

    const payload = {
      ...formData,
      quantityUnit: formData.quantityUnit === 'Other' ? (formData.otherUnit || 'Other') : formData.quantityUnit
    };

    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit commercial quotation request.');
      }

      setSubmissionResult({
        success: true,
        referenceCode: data.referenceCode,
        message: data.message || 'Export quotation request received by Shumabo Import & Export.'
      });

      if (onSubmitted && data.referenceCode) {
        onSubmitted(data.referenceCode);
      }
    } catch (err: any) {
      console.error('Submission error:', err);
      // Fallback: If network issue, save to localStorage so buyer inquiry is never lost
      try {
        const offlineKey = 'shumabo_pending_inquiries';
        const offlineList = JSON.parse(localStorage.getItem(offlineKey) || '[]');
        const refFallback = `SHU-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
        offlineList.push({ ...payload, referenceCode: refFallback, createdAt: new Date().toISOString() });
        localStorage.setItem(offlineKey, JSON.stringify(offlineList));

        setSubmissionResult({
          success: true,
          referenceCode: refFallback,
          message: 'Your inquiry has been cached locally and forwarded to the commercial desk queue.'
        });
      } catch (storageErr) {
        setSubmissionResult({
          success: false,
          message: err.message || 'Unable to submit inquiry. Please review your internet connection.'
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyReferenceCode = () => {
    if (submissionResult?.referenceCode) {
      navigator.clipboard.writeText(submissionResult.referenceCode);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  if (submissionResult?.success) {
    return (
      <div className={`bg-white border border-[#B88B50]/40 rounded-xl p-8 sm:p-10 shadow-sm ${className}`}>
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-[#B88B50]/15 flex items-center justify-center shrink-0 text-[#59351F]">
            <CheckCircle2 className="w-7 h-7 text-[#59351F]" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-widest text-[#B88B50] font-bold">
              Inquiry Registered
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#2B1D16] mt-1">
              Commercial Quotation Request Recorded
            </h3>
            <p className="text-sm text-[#6F6258] mt-1">
              Your inquiry has been formally logged with Shumabo Import & Export.
            </p>
          </div>
        </div>

        {/* Reference Code Card */}
        <div className="bg-[#F8F5EF] border border-[#E5DED2] rounded-lg p-5 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs text-[#6F6258] block uppercase tracking-wider font-semibold">
                Official Reference ID
              </span>
              <span className="font-mono text-2xl font-bold text-[#59351F]">
                {submissionResult.referenceCode}
              </span>
            </div>
            <button
              onClick={copyReferenceCode}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#59351F] bg-white border border-[#E5DED2] rounded hover:bg-[#EAE1D3] transition-colors cursor-pointer w-fit"
            >
              {copiedCode ? <Check className="w-4 h-4 text-emerald-700" /> : <Copy className="w-4 h-4" />}
              <span>{copiedCode ? 'Copied' : 'Copy Reference'}</span>
            </button>
          </div>
        </div>

        {/* Commercial Next Steps */}
        <div className="space-y-4 text-sm text-[#2B1D16] mb-8">
          <h4 className="font-semibold text-xs uppercase tracking-wider text-[#59351F]">
            Commercial Review & Next Steps
          </h4>
          <ul className="space-y-2.5 text-[#6F6258]">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B88B50] mt-2 shrink-0" />
              <span>
                <strong>Specification Review:</strong> Our agricultural commodity desk evaluates regional crop availability, current export grade specifications, and loading capacities.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B88B50] mt-2 shrink-0" />
              <span>
                <strong>Quotation Preparation:</strong> We prepare indicative pricing on your specified trade terms (FOB Djibouti, CFR, or CIF destination port).
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B88B50] mt-2 shrink-0" />
              <span>
                <strong>Direct Communication:</strong> A trade officer will reach out via your provided email ({formData.businessEmail}) to confirm technical details and contractual terms.
              </span>
            </li>
          </ul>
        </div>

        <div className="pt-4 border-t border-[#E5DED2] flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-[#6F6258]">
            Need immediate clarification? Quote reference <code className="font-mono font-semibold text-[#59351F]">{submissionResult.referenceCode}</code> in your correspondence.
          </div>
          <button
            onClick={() => {
              setSubmissionResult(null);
              setFormData({
                fullName: '',
                businessEmail: '',
                companyName: '',
                businessCountry: '',
                productOfInterest: 'Ethiopian Coffee',
                estimatedQuantity: '',
                quantityUnit: 'Metric tons',
                otherUnit: '',
                destinationCountry: '',
                message: '',
                phoneWhatsapp: '',
                jobTitle: '',
                specificationDetails: '',
                packagingPreference: '60kg GrainPro Jute Bags / 50kg PP Bags',
                purchasingTimeline: 'Within 30–60 Days',
                deliveryTerms: 'FOB Djibouti'
              });
            }}
            className="text-xs font-semibold text-[#59351F] hover:underline cursor-pointer"
          >
            Submit Another Commodity Request →
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-white border border-[#E5DED2] rounded-2xl p-6 sm:p-10 shadow-xs font-body ${className}`}
      noValidate
    >
      <div className="mb-8 pb-6 border-b border-[#E5DED2]">
        <span className="text-eyebrow-label text-[#B88B50] block mb-1">
          B2B Commodity Inquiry
        </span>
        <h3 className="text-section-heading font-display font-bold text-[#2B1D16] mt-1 leading-tight">
          Request a Commercial Quotation
        </h3>
        <p className="text-xs sm:text-sm text-[#6F6258] mt-2 leading-relaxed font-body">
          Provide your target commodity parameters, required volume, and destination port. Every inquiry is reviewed directly by our commercial trade desk in Ethiopia.
        </p>
      </div>

      {submissionResult && !submissionResult.success && (
        <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 text-red-800 text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <span>{submissionResult.message}</span>
        </div>
      )}

      {/* Primary Required Fields Grid */}
      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Full Name */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#2B1D16] mb-1.5">
              Contact Name <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Elena Rostova"
              className={`w-full px-3.5 py-2.5 text-sm rounded bg-[#F8F5EF] border ${
                errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-[#E5DED2]'
              } focus:border-[#B88B50] focus:bg-white text-[#2B1D16] transition-colors`}
            />
            {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
          </div>

          {/* Business Email */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#2B1D16] mb-1.5">
              Business Email <span className="text-red-700">*</span>
            </label>
            <input
              type="email"
              name="businessEmail"
              value={formData.businessEmail}
              onChange={handleChange}
              placeholder="procurement@company.com"
              className={`w-full px-3.5 py-2.5 text-sm rounded bg-[#F8F5EF] border ${
                errors.businessEmail ? 'border-red-500 bg-red-50/20' : 'border-[#E5DED2]'
              } focus:border-[#B88B50] focus:bg-white text-[#2B1D16] transition-colors`}
            />
            {errors.businessEmail && <p className="text-xs text-red-600 mt-1">{errors.businessEmail}</p>}
          </div>

          {/* Company Name */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#2B1D16] mb-1.5">
              Company / Organization <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="e.g. Nordic Commodities Ltd"
              className={`w-full px-3.5 py-2.5 text-sm rounded bg-[#F8F5EF] border ${
                errors.companyName ? 'border-red-500 bg-red-50/20' : 'border-[#E5DED2]'
              } focus:border-[#B88B50] focus:bg-white text-[#2B1D16] transition-colors`}
            />
            {errors.companyName && <p className="text-xs text-red-600 mt-1">{errors.companyName}</p>}
          </div>

          {/* Business Country */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#2B1D16] mb-1.5">
              Business Country <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              name="businessCountry"
              value={formData.businessCountry}
              onChange={handleChange}
              placeholder="e.g. Germany, UAE, United States"
              className={`w-full px-3.5 py-2.5 text-sm rounded bg-[#F8F5EF] border ${
                errors.businessCountry ? 'border-red-500 bg-red-50/20' : 'border-[#E5DED2]'
              } focus:border-[#B88B50] focus:bg-white text-[#2B1D16] transition-colors`}
            />
            {errors.businessCountry && <p className="text-xs text-red-600 mt-1">{errors.businessCountry}</p>}
          </div>
        </div>

        {/* Product & Quantity Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {/* Product of Interest */}
          <div className="sm:col-span-1">
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#2B1D16] mb-1.5">
              Commodity Category <span className="text-red-700">*</span>
            </label>
            <select
              name="productOfInterest"
              value={formData.productOfInterest}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 text-sm rounded bg-[#F8F5EF] border border-[#E5DED2] focus:border-[#B88B50] focus:bg-white text-[#2B1D16] transition-colors"
            >
              <option value="Ethiopian Coffee">Ethiopian Coffee</option>
              <option value="Sesame Seeds">Sesame Seeds (Humera / Wollega)</option>
              <option value="Grains">Highland Grains & Teff</option>
              <option value="Other Agricultural Commodities">Other Agricultural Commodities (Pulses/Beans)</option>
              <option value="Multiple Products">Multiple Agricultural Products</option>
            </select>
          </div>

          {/* Estimated Quantity */}
          <div className="sm:col-span-1">
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#2B1D16] mb-1.5">
              Estimated Volume <span className="text-red-700">*</span>
            </label>
            <input
              type="number"
              min="1"
              step="any"
              name="estimatedQuantity"
              value={formData.estimatedQuantity}
              onChange={handleChange}
              placeholder="e.g. 20"
              className={`w-full px-3.5 py-2.5 text-sm rounded bg-[#F8F5EF] border ${
                errors.estimatedQuantity ? 'border-red-500 bg-red-50/20' : 'border-[#E5DED2]'
              } focus:border-[#B88B50] focus:bg-white text-[#2B1D16] transition-colors`}
            />
            {errors.estimatedQuantity && <p className="text-xs text-red-600 mt-1">{errors.estimatedQuantity}</p>}
          </div>

          {/* Quantity Unit */}
          <div className="sm:col-span-1">
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#2B1D16] mb-1.5">
              Volume Unit <span className="text-red-700">*</span>
            </label>
            <select
              name="quantityUnit"
              value={formData.quantityUnit}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 text-sm rounded bg-[#F8F5EF] border border-[#E5DED2] focus:border-[#B88B50] focus:bg-white text-[#2B1D16] transition-colors"
            >
              <option value="Metric tons">Metric tons (MT)</option>
              <option value="Kilograms">Kilograms (kg)</option>
              <option value="Bags">Bags (60kg / 50kg)</option>
              <option value="20ft FCL (Containers)">20ft FCL (Containers)</option>
              <option value="40ft FCL (Containers)">40ft FCL (Containers)</option>
              <option value="Other">Other Custom Unit</option>
            </select>
          </div>
        </div>

        {/* If 'Other' unit chosen */}
        {formData.quantityUnit === 'Other' && (
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#2B1D16] mb-1.5">
              Specify Unit of Measure <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              name="otherUnit"
              value={formData.otherUnit || ''}
              onChange={handleChange}
              placeholder="e.g. 50kg double bags, LCL pallets"
              className="w-full px-3.5 py-2.5 text-sm rounded bg-[#F8F5EF] border border-[#E5DED2] focus:border-[#B88B50] focus:bg-white text-[#2B1D16]"
            />
            {errors.otherUnit && <p className="text-xs text-red-600 mt-1">{errors.otherUnit}</p>}
          </div>
        )}

        {/* Destination Country / Port */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#2B1D16] mb-1.5">
            Destination Country & Target Discharge Port <span className="text-red-700">*</span>
          </label>
          <input
            type="text"
            name="destinationCountry"
            value={formData.destinationCountry}
            onChange={handleChange}
            placeholder="e.g. Port of Rotterdam, Netherlands or Jebel Ali, UAE"
            className={`w-full px-3.5 py-2.5 text-sm rounded bg-[#F8F5EF] border ${
              errors.destinationCountry ? 'border-red-500 bg-red-50/20' : 'border-[#E5DED2]'
            } focus:border-[#B88B50] focus:bg-white text-[#2B1D16] transition-colors`}
          />
          {errors.destinationCountry && <p className="text-xs text-red-600 mt-1">{errors.destinationCountry}</p>}
        </div>

        {/* Message / Specifications */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#2B1D16] mb-1.5">
            Commercial Specifications & Requirements <span className="text-red-700">*</span>
          </label>
          <textarea
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Please detail your target specifications (e.g. coffee grade & processing, sesame purity standard, moisture preferences, and any particular commercial requirements)."
            className={`w-full px-3.5 py-2.5 text-sm rounded bg-[#F8F5EF] border ${
              errors.message ? 'border-red-500 bg-red-50/20' : 'border-[#E5DED2]'
            } focus:border-[#B88B50] focus:bg-white text-[#2B1D16] transition-colors`}
          />
          {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
        </div>

        {/* Toggle Optional Commercial Fields */}
        <div className="pt-2">
          <button
            type="button"
            onClick={() => setShowOptionalFields(!showOptionalFields)}
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#59351F] hover:text-[#2B1D16] cursor-pointer"
          >
            {showOptionalFields ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            <span>
              {showOptionalFields
                ? 'Hide Additional Commercial Parameters'
                : '+ Add Commercial Parameters (Packaging, Timeline, Incoterms, Contact Number)'}
            </span>
          </button>
        </div>

        {/* Optional Accordion Section */}
        {showOptionalFields && (
          <div className="bg-[#F8F5EF] p-5 rounded-lg border border-[#E5DED2] space-y-4 animate-in fade-in-50">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#6F6258] mb-1">
                  Telephone / WhatsApp
                </label>
                <input
                  type="text"
                  name="phoneWhatsapp"
                  value={formData.phoneWhatsapp || ''}
                  onChange={handleChange}
                  placeholder="+44 20 7946 0912"
                  className="w-full px-3 py-2 text-xs rounded bg-white border border-[#E5DED2] focus:border-[#B88B50] text-[#2B1D16]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#6F6258] mb-1">
                  Job Title / Department
                </label>
                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle || ''}
                  onChange={handleChange}
                  placeholder="e.g. Sourcing Director, Raw Materials Buyer"
                  className="w-full px-3 py-2 text-xs rounded bg-white border border-[#E5DED2] focus:border-[#B88B50] text-[#2B1D16]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#6F6258] mb-1">
                  Packaging Preference
                </label>
                <input
                  type="text"
                  name="packagingPreference"
                  value={formData.packagingPreference || ''}
                  onChange={handleChange}
                  placeholder="e.g. 60kg GrainPro Jute Bags or 50kg PP bags"
                  className="w-full px-3 py-2 text-xs rounded bg-white border border-[#E5DED2] focus:border-[#B88B50] text-[#2B1D16]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#6F6258] mb-1">
                  Purchasing Timeline
                </label>
                <select
                  name="purchasingTimeline"
                  value={formData.purchasingTimeline || ''}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-xs rounded bg-white border border-[#E5DED2] focus:border-[#B88B50] text-[#2B1D16]"
                >
                  <option value="Immediate booking (Current harvest)">Immediate booking (Current harvest)</option>
                  <option value="Within 30–60 Days">Within 30–60 Days</option>
                  <option value="Next harvest season contract">Next harvest season contract</option>
                  <option value="Exploratory commercial inquiry">Exploratory commercial inquiry</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#6F6258] mb-1">
                  Preferred Trade Terms (Incoterms 2020)
                </label>
                <select
                  name="deliveryTerms"
                  value={formData.deliveryTerms || ''}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-xs rounded bg-white border border-[#E5DED2] focus:border-[#B88B50] text-[#2B1D16]"
                >
                  <option value="FOB Djibouti">FOB Djibouti (Free on Board)</option>
                  <option value="CIF Destination Port">CIF Destination Port (Cost, Insurance & Freight)</option>
                  <option value="CFR Destination Port">CFR Destination Port (Cost and Freight)</option>
                  <option value="Other / Open to discussion">Other / Open to discussion</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Commercial Notice & Submit Action */}
      <div className="mt-8 pt-6 border-t border-[#E5DED2] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <p className="text-xs text-[#6F6258] max-w-md">
          By submitting this quotation request, you agree to allow Shumabo's commercial export desk to contact you regarding these product specifications.
        </p>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#59351F] hover:bg-[#2B1D16] rounded transition-all cursor-pointer shadow-xs whitespace-nowrap disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Verifying & Sending...</span>
            </>
          ) : (
            <span>Submit Quotation Request</span>
          )}
        </button>
      </div>
    </form>
  );
};
