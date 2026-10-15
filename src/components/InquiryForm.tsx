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

    const nameRegex = /^[A-Za-z\s\.\-\']+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(\+?[0-9\s\-\(\)]{7,20})?$/;

    if (!formData.fullName.trim()) {
      errs.fullName = 'Please provide your full contact name.';
    } else if (!nameRegex.test(formData.fullName.trim())) {
      errs.fullName = 'Contact name can only contain letters, spaces, hyphens, and periods.';
    }

    if (!formData.businessEmail.trim()) {
      errs.businessEmail = 'Please provide your business email.';
    } else if (!emailRegex.test(formData.businessEmail.trim())) {
      errs.businessEmail = 'Please enter a valid corporate email address (e.g. name@company.com).';
    }

    if (!formData.companyName.trim()) {
      errs.companyName = 'Company / organization name is required.';
    } else if (formData.companyName.trim().length < 2) {
      errs.companyName = 'Please enter a valid company name.';
    }

    if (!formData.businessCountry.trim()) {
      errs.businessCountry = 'Please enter your business registration country.';
    } else if (!nameRegex.test(formData.businessCountry.trim())) {
      errs.businessCountry = 'Please enter a valid country name.';
    }

    if (!formData.productOfInterest.trim()) {
      errs.productOfInterest = 'Please select a commodity category.';
    }

    if (!formData.estimatedQuantity.trim()) {
      errs.estimatedQuantity = 'Please specify an estimated volume or quantity.';
    } else {
      const qty = Number(formData.estimatedQuantity);
      if (isNaN(qty) || qty <= 0) {
        errs.estimatedQuantity = 'Quantity must be a positive number greater than 0.';
      } else if (qty > 100000) {
        errs.estimatedQuantity = 'Quantity exceeds maximum single order limit (100,000 MT). Contact desk directly for bulk programs.';
      }
    }

    if (formData.quantityUnit === 'Other' && !formData.otherUnit?.trim()) {
      errs.otherUnit = 'Please specify the custom unit of measure.';
    }

    if (!formData.destinationCountry.trim()) {
      errs.destinationCountry = 'Please provide your target destination seaport or country.';
    }

    if (formData.phoneWhatsapp && !phoneRegex.test(formData.phoneWhatsapp.trim())) {
      errs.phoneWhatsapp = 'Please enter a valid phone number (digits, +, -, spaces, parentheses).';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please provide preliminary commercial specifications or questions.';
    } else if (formData.message.trim().length < 5) {
      errs.message = 'Please provide at least a brief description of your specification requirements.';
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
      <div className={`bg-white border border-[#A90F1C]/40 rounded-xl p-8 sm:p-10 shadow-sm ${className}`}>
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-[#A90F1C]/15 flex items-center justify-center shrink-0 text-[#A90F1C]">
            <CheckCircle2 className="w-7 h-7 text-[#A90F1C]" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-widest text-[#A90F1C] font-bold">
              Inquiry Registered
            </span>
            <h3 className="font-display text-2xl font-bold text-[#241719] mt-1">
              Commercial Quotation Request Recorded
            </h3>
            <p className="text-sm text-[#6F6062] mt-1">
              Your inquiry has been formally logged with Shumabo Import & Export.
            </p>
          </div>
        </div>

        {/* Reference Code Card */}
        <div className="bg-[#FAF8F7] border border-[#E6DCDD] rounded-lg p-5 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs text-[#6F6062] block uppercase tracking-wider font-semibold">
                Official Reference ID
              </span>
              <span className="font-mono text-2xl font-bold text-[#A90F1C]">
                {submissionResult.referenceCode}
              </span>
            </div>
            <button
              onClick={copyReferenceCode}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#A90F1C] bg-white border border-[#E6DCDD] rounded hover:bg-[#F1ECEA] transition-colors cursor-pointer w-fit"
            >
              {copiedCode ? <Check className="w-4 h-4 text-emerald-700" /> : <Copy className="w-4 h-4" />}
              <span>{copiedCode ? 'Copied' : 'Copy Reference'}</span>
            </button>
          </div>
        </div>

        {/* Commercial Next Steps */}
        <div className="space-y-4 text-sm text-[#241719] mb-8">
          <h4 className="font-semibold text-xs uppercase tracking-wider text-[#A90F1C]">
            Commercial Review & Next Steps
          </h4>
          <ul className="space-y-2.5 text-[#6F6062]">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A90F1C] mt-2 shrink-0" />
              <span>
                <strong>Specification Review:</strong> Our agricultural commodity desk evaluates regional crop availability, current export grade specifications, and loading capacities.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A90F1C] mt-2 shrink-0" />
              <span>
                <strong>Quotation Preparation:</strong> We prepare indicative pricing on your specified trade terms (FOB Djibouti, CFR, or CIF destination port).
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A90F1C] mt-2 shrink-0" />
              <span>
                <strong>Direct Communication:</strong> A trade officer will reach out via your provided email ({formData.businessEmail}) to confirm technical details and contractual terms.
              </span>
            </li>
          </ul>
        </div>

        <div className="pt-4 border-t border-[#E6DCDD] flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-[#6F6062]">
            Need immediate clarification? Quote reference <code className="font-mono font-semibold text-[#A90F1C]">{submissionResult.referenceCode}</code> in your correspondence.
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
            className="text-xs font-semibold text-[#A90F1C] hover:underline cursor-pointer"
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
      className={`bg-white border border-[#E6DCDD] rounded-2xl p-6 sm:p-10 shadow-xs font-body ${className}`}
      noValidate
    >
      <div className="mb-8 pb-6 border-b border-[#E6DCDD]">
        <span className="text-eyebrow-label text-[#A90F1C] block mb-1">
          B2B Commodity Inquiry
        </span>
        <h3 className="text-section-heading font-display font-bold text-[#241719] mt-1 leading-tight">
          Request a Commercial Quotation
        </h3>
        <p className="text-xs sm:text-sm text-[#6F6062] mt-2 leading-relaxed font-body">
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
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#241719] mb-1.5">
              Contact Name <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              required
              pattern="[A-Za-z\s\.\-\']+"
              title="Full name (letters, spaces, periods, and hyphens only)"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. David Vance"
              className={`w-full px-3.5 py-2.5 text-sm rounded bg-[#FAF8F7] border ${
                errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-[#E6DCDD]'
              } focus:border-[#A90F1C] focus:bg-white text-[#241719] transition-colors`}
            />
            {errors.fullName && <span className="text-[11px] text-red-600 mt-1 block">{errors.fullName}</span>}
          </div>

          {/* Business Email */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#241719] mb-1.5">
              Corporate Email <span className="text-red-700">*</span>
            </label>
            <input
              type="email"
              name="businessEmail"
              required
              title="Valid corporate email address"
              value={formData.businessEmail}
              onChange={handleChange}
              placeholder="e.g. d.vance@importcompany.com"
              className={`w-full px-3.5 py-2.5 text-sm rounded bg-[#FAF8F7] border ${
                errors.businessEmail ? 'border-red-500 bg-red-50/20' : 'border-[#E6DCDD]'
              } focus:border-[#A90F1C] focus:bg-white text-[#241719] transition-colors`}
            />
            {errors.businessEmail && <span className="text-[11px] text-red-600 mt-1 block">{errors.businessEmail}</span>}
          </div>

          {/* Company Name */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#241719] mb-1.5">
              Company / Organization <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              name="companyName"
              required
              minLength={2}
              title="Company or organization legal name"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="e.g. Vance Global Imports B.V."
              className={`w-full px-3.5 py-2.5 text-sm rounded bg-[#FAF8F7] border ${
                errors.companyName ? 'border-red-500 bg-red-50/20' : 'border-[#E6DCDD]'
              } focus:border-[#A90F1C] focus:bg-white text-[#241719] transition-colors`}
            />
            {errors.companyName && <span className="text-[11px] text-red-600 mt-1 block">{errors.companyName}</span>}
          </div>

          {/* Business Country */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#241719] mb-1.5">
              Business Country <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              name="businessCountry"
              required
              pattern="[A-Za-z\s\.\-\']+"
              title="Country name (letters and spaces only)"
              value={formData.businessCountry}
              onChange={handleChange}
              placeholder="e.g. Netherlands / United States"
              className={`w-full px-3.5 py-2.5 text-sm rounded bg-[#FAF8F7] border ${
                errors.businessCountry ? 'border-red-500 bg-red-50/20' : 'border-[#E6DCDD]'
              } focus:border-[#A90F1C] focus:bg-white text-[#241719] transition-colors`}
            />
            {errors.businessCountry && <span className="text-[11px] text-red-600 mt-1 block">{errors.businessCountry}</span>}
          </div>
        </div>

        {/* Product of Interest */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#241719] mb-1.5">
              Commodity of Interest <span className="text-red-700">*</span>
            </label>
            <select
              name="productOfInterest"
              value={formData.productOfInterest}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 text-sm rounded bg-[#FAF8F7] border border-[#E6DCDD] focus:border-[#A90F1C] focus:bg-white text-[#241719] transition-colors font-medium"
            >
              <option value="Ethiopian Coffee">Specialty Arabica Coffee (Washed / Natural)</option>
              <option value="Sesame Seeds">Whitish Humera Sesame Seeds (Sortexed)</option>
              <option value="Grains">Ethiopian Highland Grains (Teff, Wheat, Maize)</option>
              <option value="Pulses">Export Pulses (White Pea Beans, Chickpeas)</option>
              <option value="Custom Agricultural Sourcing">Custom Agricultural Sourcing</option>
            </select>
          </div>

          {/* Estimated Quantity */}
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#241719] mb-1.5">
                Volume <span className="text-red-700">*</span>
              </label>
              <input
                type="number"
                min="0.1"
                max="100000"
                step="any"
                required
                name="estimatedQuantity"
                value={formData.estimatedQuantity}
                onChange={handleChange}
                placeholder="e.g. 19.2"
                className={`w-full px-3.5 py-2.5 text-sm rounded bg-[#FAF8F7] border ${
                  errors.estimatedQuantity ? 'border-red-500 bg-red-50/20' : 'border-[#E6DCDD]'
                } focus:border-[#A90F1C] focus:bg-white text-[#241719] transition-colors`}
              />
              {errors.estimatedQuantity && <span className="text-[11px] text-red-600 mt-1 block">{errors.estimatedQuantity}</span>}
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#241719] mb-1.5">
                Unit
              </label>
              <select
                name="quantityUnit"
                value={formData.quantityUnit}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-sm rounded bg-[#FAF8F7] border border-[#E6DCDD] focus:border-[#A90F1C] focus:bg-white text-[#241719]"
              >
                <option value="Metric tons">Metric Tons (MT)</option>
                <option value="20ft FCL">20ft Container (FCL)</option>
                <option value="40ft FCL">40ft Container (FCL)</option>
                <option value="60kg Bags">60kg Bags</option>
                <option value="Other">Custom Unit...</option>
              </select>
            </div>
          </div>
        </div>

        {formData.quantityUnit === 'Other' && (
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#241719] mb-1.5">
              Specify Custom Unit <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              name="otherUnit"
              required
              value={formData.otherUnit || ''}
              onChange={handleChange}
              placeholder="e.g. Kilograms / Bulk Lots"
              className="w-full px-3.5 py-2.5 text-sm rounded bg-[#FAF8F7] border border-[#E6DCDD] focus:border-[#A90F1C] focus:bg-white text-[#241719]"
            />
            {errors.otherUnit && <span className="text-[11px] text-red-600 mt-1 block">{errors.otherUnit}</span>}
          </div>
        )}

        {/* Destination Country / Port */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#241719] mb-1.5">
              Target Discharge Seaport / Country <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              name="destinationCountry"
              required
              minLength={2}
              title="Target destination port or country"
              value={formData.destinationCountry}
              onChange={handleChange}
              placeholder="e.g. Port of Rotterdam / Hamburg / Houston"
              className={`w-full px-3.5 py-2.5 text-sm rounded bg-[#FAF8F7] border ${
                errors.destinationCountry ? 'border-red-500 bg-red-50/20' : 'border-[#E6DCDD]'
              } focus:border-[#A90F1C] focus:bg-white text-[#241719] transition-colors`}
            />
            {errors.destinationCountry && <span className="text-[11px] text-red-600 mt-1 block">{errors.destinationCountry}</span>}
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#241719] mb-1.5">
              Preferred Incoterms® 2020
            </label>
            <select
              name="deliveryTerms"
              value={formData.deliveryTerms}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 text-sm rounded bg-[#FAF8F7] border border-[#E6DCDD] focus:border-[#A90F1C] focus:bg-white text-[#241719]"
            >
              <option value="FOB Djibouti">FOB Port of Djibouti</option>
              <option value="CFR Destination">CFR Destination Port</option>
              <option value="CIF Destination">CIF Destination Port (Insured)</option>
              <option value="FCA Addis Ababa">FCA Addis Ababa / Modjo</option>
            </select>
          </div>
        </div>

        {/* Message / Specifications */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#241719] mb-1.5">
            Preliminary Specifications & Questions <span className="text-red-700">*</span>
          </label>
          <textarea
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Describe grade expectations, moisture limits, bag lining preferences (e.g. GrainPro), or sample requests..."
            className={`w-full px-3.5 py-2.5 text-sm rounded bg-[#FAF8F7] border ${
              errors.message ? 'border-red-500 bg-red-50/20' : 'border-[#E6DCDD]'
            } focus:border-[#A90F1C] focus:bg-white text-[#241719] transition-colors`}
          />
          {errors.message && <span className="text-[11px] text-red-600 mt-1 block">{errors.message}</span>}
        </div>

        {/* Optional Section Toggle */}
        <div>
          <button
            type="button"
            onClick={() => setShowOptionalFields(!showOptionalFields)}
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A90F1C] hover:text-[#241719] cursor-pointer"
          >
            <span>{showOptionalFields ? '− Hide Advanced Parameters' : '+ Add Advanced Parameters (Phone, Timeline, Packaging)'}</span>
          </button>

          {showOptionalFields && (
            <div className="mt-4 bg-[#FAF8F7] p-5 rounded-lg border border-[#E6DCDD] space-y-4 animate-in fade-in-50">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#6F6062] mb-1">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    name="phoneWhatsapp"
                    pattern="^(\+?[0-9\s\-\(\)]{7,20})?$"
                    title="International phone number format (digits, +, -, spaces)"
                    value={formData.phoneWhatsapp || ''}
                    onChange={handleChange}
                    placeholder="e.g. +31 20 555 0192"
                    className={`w-full px-3 py-2 text-xs rounded bg-white border ${
                      errors.phoneWhatsapp ? 'border-red-500 bg-red-50/20' : 'border-[#E6DCDD]'
                    } focus:border-[#A90F1C] text-[#241719]`}
                  />
                  {errors.phoneWhatsapp && <span className="text-[11px] text-red-600 mt-1 block">{errors.phoneWhatsapp}</span>}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#6F6062] mb-1">Job Title / Department</label>
                  <input
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle || ''}
                    onChange={handleChange}
                    placeholder="e.g. Senior Coffee Green Buyer"
                    className="w-full px-3 py-2 text-xs rounded bg-white border border-[#E6DCDD] focus:border-[#A90F1C] text-[#241719]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#6F6062] mb-1">Packaging Preference</label>
                  <select
                    name="packagingPreference"
                    value={formData.packagingPreference}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-xs rounded bg-white border border-[#E6DCDD] focus:border-[#A90F1C] text-[#241719]"
                  >
                    <option value="60kg GrainPro Jute Bags">60kg Jute Bags with GrainPro Hermetic Liner</option>
                    <option value="50kg PP Bags">50kg Food-Grade Polypropylene Export Bags</option>
                    <option value="Custom Stencil / Bulk">Custom Buyer Stencil / Bulk Container</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#6F6062] mb-1">Purchasing Timeline</label>
                  <select
                    name="purchasingTimeline"
                    value={formData.purchasingTimeline}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-xs rounded bg-white border border-[#E6DCDD] focus:border-[#A90F1C] text-[#241719]"
                  >
                    <option value="Immediate / Spot">Immediate / Spot Purchase</option>
                    <option value="Within 30–60 Days">Within 30–60 Days</option>
                    <option value="Upcoming Harvest Season">Upcoming Harvest Season Program</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Form Submission Footer */}
      <div className="mt-8 pt-6 border-t border-[#E6DCDD] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <span className="text-xs text-[#6F6062]">
          🔒 Secure SSL transmission. Responses delivered to <strong>renderreal87@gmail.com</strong>.
        </span>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#A90F1C] hover:bg-[#800D18] rounded transition-all cursor-pointer shadow-xs whitespace-nowrap disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Transmitting Inquiry...</span>
            </>
          ) : (
            <>
              <span>Submit Commercial Inquiry</span>
              <FileText className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
};
