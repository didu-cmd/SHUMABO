import React, { useState, useEffect } from 'react';
import { InquiryRecord } from '../types';
import {
  Lock,
  Download,
  Search,
  Filter,
  CheckCircle,
  Clock,
  ArrowUpDown,
  X,
  FileSpreadsheet,
  AlertCircle,
  Save,
  MessageSquare
} from 'lucide-react';

interface AdminPortalProps {
  onClose: () => void;
}

export const AdminPortal: React.FC<AdminPortalProps> = ({ onClose }) => {
  const [token, setToken] = useState<string | null>(localStorage.getItem('shumabo_admin_token'));
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const [inquiries, setInquiries] = useState<InquiryRecord[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadError, setLoadError] = useState('');

  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [selectedInquiry, setSelectedInquiry] = useState<InquiryRecord | null>(null);

  const [statusEdit, setStatusEdit] = useState<InquiryRecord['status']>('New');
  const [notesEdit, setNotesEdit] = useState('');
  const [isSavingNotes, setIsSavingNotes] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Attempt login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!passwordInput.trim()) return;

    setIsLoggingIn(true);
    setLoginError('');

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: passwordInput })
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Invalid credentials');
      }

      setToken(data.token);
      localStorage.setItem('shumabo_admin_token', data.token);
      setPasswordInput('');
    } catch (err: any) {
      setLoginError(err.message || 'Authentication failed');
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem('shumabo_admin_token');
    setInquiries([]);
  };

  // Fetch inquiries when logged in
  const fetchInquiries = async () => {
    if (!token) return;
    setIsLoading(true);
    setLoadError('');

    try {
      const res = await fetch('/api/inquiries', {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (res.status === 401 || res.status === 403) {
        handleLogout();
        throw new Error('Session expired. Please log in again.');
      }

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Could not fetch records');

      setInquiries(data.inquiries || []);
    } catch (err: any) {
      setLoadError(err.message || 'Error loading inquiries');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      fetchInquiries();
    }
  }, [token]);

  const handleSelectInquiry = (inq: InquiryRecord) => {
    setSelectedInquiry(inq);
    setStatusEdit(inq.status);
    setNotesEdit(inq.internalNotes || '');
    setSaveSuccess(false);
  };

  const handleUpdateInquiry = async () => {
    if (!selectedInquiry || !token) return;
    setIsSavingNotes(true);
    setSaveSuccess(false);

    try {
      const res = await fetch(`/api/inquiries/${selectedInquiry.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          status: statusEdit,
          internalNotes: notesEdit
        })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to update record');

      // Update in local state
      setInquiries((prev) =>
        prev.map((item) => (item.id === selectedInquiry.id ? data.inquiry : item))
      );
      setSelectedInquiry(data.inquiry);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 2500);
    } catch (err: any) {
      alert(`Update failed: ${err.message}`);
    } finally {
      setIsSavingNotes(false);
    }
  };

  const downloadCsv = () => {
    if (inquiries.length === 0) return;
    const headers = ['ID', 'Reference', 'Date', 'Company', 'Contact', 'Email', 'Product', 'Quantity', 'Destination', 'Status'];
    const rows = inquiries.map((i) => [
      i.id,
      i.referenceCode,
      i.createdAt,
      `"${i.companyName}"`,
      `"${i.fullName}"`,
      i.businessEmail,
      `"${i.productOfInterest}"`,
      `${i.estimatedQuantity} ${i.quantityUnit}`,
      `"${i.destinationCountry}"`,
      i.status
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `shumabo_inquiries_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredInquiries = inquiries.filter((inq) => {
    const matchesSearch =
      inq.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inq.destinationCountry.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inq.referenceCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inq.productOfInterest.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === 'All' || inq.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="flex flex-col h-full bg-[#FAF8F7] font-body">
      {/* Top Bar */}
      <div className="bg-[#800D18] text-white px-6 py-4 flex items-center justify-between border-b border-[#A90F1C]/40">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center border border-white/15">
            <Lock className="w-4 h-4 text-[#C51B2A]" />
          </div>
          <div>
            <h2 className="font-display text-lg font-bold text-white tracking-wide">
              Shumabo Commercial Lead Desk
            </h2>
            <span className="text-[11px] text-[#FAF8F7]/85 tracking-wider uppercase font-semibold font-body">
              Authorized Lead Management & Export Inquiries
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {token && (
            <button
              onClick={handleLogout}
              className="text-xs text-white/80 hover:text-white px-3 py-1.5 rounded-lg border border-[#A90F1C] hover:bg-[#A90F1C] transition-colors cursor-pointer font-body"
            >
              Sign Out
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 text-white/80 hover:text-white rounded-full hover:bg-white/10 cursor-pointer"
            aria-label="Close admin desk"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Content Body */}
      {!token ? (
        /* Login Screen */
        <div className="flex-1 flex items-center justify-center p-6 bg-[#FAF8F7] font-body">
          <form
            onSubmit={handleLogin}
            className="bg-white border border-[#E6DCDD] rounded-2xl p-8 max-w-md w-full shadow-md font-body"
          >
            <div className="text-center mb-6">
              <span className="text-eyebrow-label text-[#A90F1C] block mb-1">
                Trade Officer Portal
              </span>
              <h3 className="font-display text-2xl font-bold text-[#241719] mt-1">
                Authenticate Access
              </h3>
              <p className="text-xs text-[#6F6062] mt-2">
                Enter authorized commercial passphrase to manage buyer inquiries and export CSV records.
              </p>
              <p className="text-[11px] text-[#A90F1C] bg-[#F1ECEA] py-1 px-2 rounded mt-2 font-mono">
                Default pass: <span className="font-bold">shumabo2026</span>
              </p>
            </div>

            {loginError && (
              <div className="mb-4 p-3 rounded bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{loginError}</span>
              </div>
            )}

            <div className="mb-5">
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#241719] mb-1.5">
                Administrative Passphrase
              </label>
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Enter trade desk passphrase"
                className="w-full px-3.5 py-2.5 text-sm rounded bg-[#FAF8F7] border border-[#E6DCDD] focus:border-[#A90F1C] focus:bg-white text-[#241719]"
                autoFocus
              />
            </div>

            <button
              type="submit"
              disabled={isLoggingIn}
              className="w-full py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#A90F1C] hover:bg-[#800D18] rounded transition-colors cursor-pointer shadow-xs disabled:opacity-50"
            >
              {isLoggingIn ? 'Verifying...' : 'Access Inquiry Desk'}
            </button>
          </form>
        </div>
      ) : (
        /* Main Dashboard */
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden bg-[#FAF8F7]">
          {/* Left Column: Lead List & Filters */}
          <div className="w-full md:w-1/2 lg:w-5/12 border-r border-[#E6DCDD] flex flex-col h-full bg-white">
            {/* Toolbar */}
            <div className="p-4 border-b border-[#E6DCDD] space-y-3 bg-[#FAF8F7]/60">
              <div className="flex items-center gap-2">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-[#6F6062] absolute left-3 top-2.5" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search company, country, ref..."
                    className="w-full pl-9 pr-3 py-1.5 text-xs rounded bg-white border border-[#E6DCDD] focus:border-[#A90F1C] text-[#241719]"
                  />
                </div>
                <button
                  onClick={downloadCsv}
                  title="Export CSV"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#A90F1C] bg-white border border-[#E6DCDD] hover:bg-[#F1ECEA] rounded transition-colors cursor-pointer shrink-0"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>CSV</span>
                </button>
              </div>

              {/* Status Segmented Control */}
              <div className="flex items-center gap-1 overflow-x-auto pb-1 text-xs no-scrollbar">
                {['All', 'New', 'Reviewing', 'Quoted', 'Negotiating', 'Won', 'Closed'].map(
                  (st) => (
                    <button
                      key={st}
                      onClick={() => setStatusFilter(st)}
                      className={`px-2.5 py-1 rounded text-[11px] font-medium whitespace-nowrap transition-colors cursor-pointer ${
                        statusFilter === st
                          ? 'bg-[#A90F1C] text-white shadow-xs'
                          : 'text-[#6F6062] hover:bg-[#F1ECEA]'
                      }`}
                    >
                      {st}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Inquiry List */}
            <div className="flex-1 overflow-y-auto divide-y divide-[#E6DCDD]">
              {isLoading ? (
                <div className="p-8 text-center text-xs text-[#6F6062]">
                  Loading commercial inquiries...
                </div>
              ) : filteredInquiries.length === 0 ? (
                <div className="p-8 text-center text-xs text-[#6F6062]">
                  No inquiries found matching criteria.
                </div>
              ) : (
                filteredInquiries.map((inq) => {
                  const isSelected = selectedInquiry?.id === inq.id;
                  const dateFormatted = new Date(inq.createdAt).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric'
                  });

                  return (
                    <div
                      key={inq.id}
                      onClick={() => handleSelectInquiry(inq)}
                      className={`p-4 cursor-pointer transition-colors ${
                        isSelected
                          ? 'bg-[#F1ECEA] border-l-4 border-[#A90F1C]'
                          : 'hover:bg-[#FAF8F7]'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="font-mono font-bold text-[#A90F1C]">
                          {inq.referenceCode}
                        </span>
                        <span className="text-[11px] text-[#6F6062]">{dateFormatted}</span>
                      </div>

                      <div className="flex items-baseline justify-between gap-2">
                        <h4 className="text-sm font-semibold text-[#241719] truncate">
                          {inq.companyName}
                        </h4>
                        <span
                          className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded ${
                            inq.status === 'New'
                              ? 'bg-amber-100 text-amber-800'
                              : inq.status === 'Reviewing'
                              ? 'bg-blue-100 text-blue-800'
                              : inq.status === 'Quoted'
                              ? 'bg-purple-100 text-purple-800'
                              : inq.status === 'Won'
                              ? 'bg-emerald-100 text-emerald-800'
                              : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {inq.status}
                        </span>
                      </div>

                      <div className="text-xs text-[#6F6062] mt-1 flex items-center justify-between">
                        <span className="truncate">{inq.productOfInterest}</span>
                        <span className="font-mono font-medium text-[#241719] shrink-0 ml-2">
                          {inq.estimatedQuantity} {inq.quantityUnit}
                        </span>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>

          {/* Right Column: Inquiry Details & Action */}
          <div className="w-full md:w-1/2 lg:w-7/12 flex flex-col h-full overflow-y-auto bg-[#FAF8F7] p-6">
            {selectedInquiry ? (
              <div className="space-y-6">
                {/* Top Summary */}
                <div className="bg-white p-5 rounded-lg border border-[#E6DCDD] shadow-xs">
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#E6DCDD]">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[#A90F1C] font-bold block">
                        Quotation Dossier
                      </span>
                      <h3 className="font-display text-xl font-bold text-[#241719]">
                        {selectedInquiry.referenceCode}
                      </h3>
                    </div>
                    <div className="text-right text-xs text-[#6F6062]">
                      Submitted {new Date(selectedInquiry.createdAt).toLocaleString()}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 text-xs">
                    <div>
                      <span className="text-[#6F6062] block">Company:</span>
                      <strong className="text-sm text-[#241719]">
                        {selectedInquiry.companyName}
                      </strong>
                    </div>
                    <div>
                      <span className="text-[#6F6062] block">Contact Officer:</span>
                      <strong className="text-sm text-[#241719]">
                        {selectedInquiry.fullName}
                        {selectedInquiry.jobTitle ? ` (${selectedInquiry.jobTitle})` : ''}
                      </strong>
                    </div>
                    <div>
                      <span className="text-[#6F6062] block">Email:</span>
                      <a
                        href={`mailto:${selectedInquiry.businessEmail}`}
                        className="text-[#A90F1C] underline font-medium"
                      >
                        {selectedInquiry.businessEmail}
                      </a>
                    </div>
                    <div>
                      <span className="text-[#6F6062] block">Phone / WhatsApp:</span>
                      <span className="text-[#241719] font-mono">
                        {selectedInquiry.phoneWhatsapp || 'Not provided'}
                      </span>
                    </div>
                    <div>
                      <span className="text-[#6F6062] block">Buyer Country:</span>
                      <span className="text-[#241719] font-medium">
                        {selectedInquiry.businessCountry}
                      </span>
                    </div>
                    <div>
                      <span className="text-[#6F6062] block">Destination Discharge Port:</span>
                      <span className="text-[#241719] font-medium">
                        {selectedInquiry.destinationCountry}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Commodity Requirement Details */}
                <div className="bg-white p-5 rounded-lg border border-[#E6DCDD] shadow-xs space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#A90F1C]">
                    Commodity Parameters
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs bg-[#FAF8F7] p-3 rounded border border-[#E6DCDD]">
                    <div>
                      <span className="text-[#6F6062] block">Product:</span>
                      <strong className="text-[#241719]">{selectedInquiry.productOfInterest}</strong>
                    </div>
                    <div>
                      <span className="text-[#6F6062] block">Quantity:</span>
                      <strong className="text-[#241719] font-mono">
                        {selectedInquiry.estimatedQuantity} {selectedInquiry.quantityUnit}
                      </strong>
                    </div>
                    <div>
                      <span className="text-[#6F6062] block">Trade Terms:</span>
                      <strong className="text-[#241719]">{selectedInquiry.deliveryTerms || 'FOB Djibouti'}</strong>
                    </div>
                    <div>
                      <span className="text-[#6F6062] block">Packaging:</span>
                      <span className="text-[#241719]">{selectedInquiry.packagingPreference || 'Standard'}</span>
                    </div>
                    <div>
                      <span className="text-[#6F6062] block">Timeline:</span>
                      <span className="text-[#241719]">{selectedInquiry.purchasingTimeline || 'Not specified'}</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-xs text-[#6F6062] font-semibold block mb-1">
                      Buyer Message & Specifications:
                    </span>
                    <div className="p-3 rounded bg-[#FAF8F7] text-xs text-[#241719] leading-relaxed whitespace-pre-wrap border border-[#E6DCDD]">
                      {selectedInquiry.message}
                    </div>
                  </div>
                </div>

                {/* Internal Commercial Management */}
                <div className="bg-white p-5 rounded-lg border border-[#E6DCDD] shadow-xs space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#A90F1C]">
                      Trade Desk Status & Internal Notes
                    </h4>
                    {saveSuccess && (
                      <span className="text-xs text-emerald-700 font-semibold flex items-center gap-1">
                        <CheckCircle className="w-3.5 h-3.5" /> Updated successfully
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#6F6062] mb-1">
                        Pipeline Status
                      </label>
                      <select
                        value={statusEdit}
                        onChange={(e) => setStatusEdit(e.target.value as InquiryRecord['status'])}
                        className="w-full px-3 py-2 text-xs rounded bg-[#FAF8F7] border border-[#E6DCDD] text-[#241719] font-medium"
                      >
                        <option value="New">New (Unreviewed)</option>
                        <option value="Reviewing">Reviewing Specifications</option>
                        <option value="Quoted">Quotation Dispatched</option>
                        <option value="Negotiating">Negotiating Terms</option>
                        <option value="Won">Deal Agreed (Sales Contract)</option>
                        <option value="Closed">Closed / Inactive</option>
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-[#6F6062] mb-1">
                        Internal Follow-up Notes
                      </label>
                      <textarea
                        rows={3}
                        value={notesEdit}
                        onChange={(e) => setNotesEdit(e.target.value)}
                        placeholder="e.g. Quotation sent on FOB Djibouti basis. Waiting for buyer's inspection agency confirmation..."
                        className="w-full px-3 py-2 text-xs rounded bg-[#FAF8F7] border border-[#E6DCDD] text-[#241719]"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end pt-2">
                    <button
                      onClick={handleUpdateInquiry}
                      disabled={isSavingNotes}
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#A90F1C] hover:bg-[#800D18] rounded transition-colors cursor-pointer disabled:opacity-50"
                    >
                      <Save className="w-3.5 h-3.5" />
                      <span>{isSavingNotes ? 'Saving...' : 'Update Lead Status'}</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 text-[#6F6062]">
                <MessageSquare className="w-12 h-12 mb-3 text-[#A90F1C] opacity-40" />
                <h3 className="font-display text-lg font-bold text-[#241719]">
                  Select an inquiry from the list
                </h3>
                <p className="text-xs text-[#6F6062] max-w-sm mt-1">
                  Review buyer specifications, update commercial status, take follow-up notes, and export records for your trade team.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
