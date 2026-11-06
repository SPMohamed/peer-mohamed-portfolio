import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MessageSquare,
  MapPin,
  Copy,
  Check,
  Send,
  FileDown,
  ArrowUpRight,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface ContactProps {
  isDark: boolean;
  onDownloadCv: () => void;
}

export const Contact: React.FC<ContactProps> = ({ isDark, onDownloadCv }) => {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [senderSubject, setSenderSubject] = useState('');
  const [senderMessage, setSenderMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2200);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(
      senderSubject || `Portfolio Inquiry from ${senderName || 'Recruiter'}`
    );
    const mailtoBody = encodeURIComponent(
      `Name: ${senderName}\nEmail: ${senderEmail}\n\nMessage:\n${senderMessage}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background radial gradient */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/10 via-blue-600/10 to-indigo-600/5 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider mb-3 border ${
              isDark
                ? 'text-cyan-400 bg-cyan-950/60 border-cyan-500/30'
                : 'text-cyan-800 bg-cyan-50 border-cyan-200'
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Initiate Direct Communication</span>
          </div>
          <h2
            className={`text-3xl sm:text-5xl font-extrabold tracking-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Let&apos;s Connect and Build{' '}
            <span
              className={`text-transparent bg-clip-text bg-gradient-to-r ${
                isDark
                  ? 'from-cyan-400 via-blue-400 to-electric-500'
                  : 'from-cyan-600 via-blue-600 to-electric-700'
              }`}
            >
              Reliable IT Environments.
            </span>
          </h2>
          <p
            className={`mt-4 text-base sm:text-lg ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            Looking for an experienced IT Support Engineer or System Administrator with 15+ years of hands-on expertise? Reach out directly via email, phone, or WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Communication Channels & CV Box */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div
              className={`p-5 rounded-2xl border transition-all duration-200 group ${
                isDark
                  ? 'bg-navy-900/60 border-slate-800 hover:border-cyan-500/40'
                  : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center border ${
                      isDark
                        ? 'bg-cyan-500/10 border-cyan-500/20'
                        : 'bg-cyan-50 border-cyan-200'
                    }`}
                  >
                    <Mail
                      className={`w-5 h-5 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}
                    />
                  </div>
                  <div>
                    <div
                      className={`text-[11px] font-mono uppercase tracking-wider ${
                        isDark ? 'text-slate-400' : 'text-slate-500'
                      }`}
                    >
                      Email Address
                    </div>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className={`font-semibold text-sm sm:text-base transition-colors ${
                        isDark
                          ? 'text-white hover:text-cyan-400'
                          : 'text-slate-900 hover:text-blue-600'
                      }`}
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => copyToClipboard(personalInfo.email, 'email')}
                    title="Copy Email"
                    className={`p-2 rounded-lg transition-colors ${
                      isDark
                        ? 'bg-slate-800/60 hover:bg-slate-700/80 text-slate-300'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
                    }`}
                  >
                    {copiedType === 'email' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    title="Send Email"
                    className={`p-2 rounded-lg transition-colors ${
                      isDark
                        ? 'bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400'
                        : 'bg-cyan-50 hover:bg-cyan-100 text-cyan-700 border border-cyan-200'
                    }`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div
              className={`p-5 rounded-2xl border transition-all duration-200 group ${
                isDark
                  ? 'bg-navy-900/60 border-slate-800 hover:border-blue-500/40'
                  : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center border ${
                      isDark
                        ? 'bg-blue-500/10 border-blue-500/20'
                        : 'bg-blue-50 border-blue-200'
                    }`}
                  >
                    <Phone
                      className={`w-5 h-5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}
                    />
                  </div>
                  <div>
                    <div
                      className={`text-[11px] font-mono uppercase tracking-wider ${
                        isDark ? 'text-slate-400' : 'text-slate-500'
                      }`}
                    >
                      Phone Number
                    </div>
                    <a
                      href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                      className={`font-semibold text-sm sm:text-base transition-colors ${
                        isDark
                          ? 'text-white hover:text-blue-400'
                          : 'text-slate-900 hover:text-blue-600'
                      }`}
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                    title="Copy Phone"
                    className={`p-2 rounded-lg transition-colors ${
                      isDark
                        ? 'bg-slate-800/60 hover:bg-slate-700/80 text-slate-300'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
                    }`}
                  >
                    {copiedType === 'phone' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                  <a
                    href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                    title="Call Phone"
                    className={`p-2 rounded-lg transition-colors ${
                      isDark
                        ? 'bg-blue-500/10 hover:bg-blue-500/20 text-blue-400'
                        : 'bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200'
                    }`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div
              className={`p-5 rounded-2xl border transition-all duration-200 group ${
                isDark
                  ? 'bg-navy-900/60 border-slate-800 hover:border-emerald-500/40'
                  : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center border ${
                      isDark
                        ? 'bg-emerald-500/10 border-emerald-500/20'
                        : 'bg-emerald-50 border-emerald-200'
                    }`}
                  >
                    <MessageSquare
                      className={`w-5 h-5 ${
                        isDark ? 'text-emerald-400' : 'text-emerald-600'
                      }`}
                    />
                  </div>
                  <div>
                    <div
                      className={`text-[11px] font-mono uppercase tracking-wider ${
                        isDark ? 'text-slate-400' : 'text-slate-500'
                      }`}
                    >
                      WhatsApp Messaging
                    </div>
                    <span
                      className={`font-semibold text-sm sm:text-base ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      +91 9894668866
                    </span>
                  </div>
                </div>

                <a
                  href={personalInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-emerald-500 hover:bg-emerald-600 text-white shadow-sm transition-colors"
                >
                  <span>Chat Now</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div
              className={`p-5 rounded-2xl border ${
                isDark
                  ? 'bg-navy-900/60 border-slate-800'
                  : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-3.5">
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center border ${
                    isDark
                      ? 'bg-slate-800/80 border-slate-700/60'
                      : 'bg-slate-100 border-slate-200'
                  }`}
                >
                  <MapPin
                    className={`w-5 h-5 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}
                  />
                </div>
                <div>
                  <div
                    className={`text-[11px] font-mono uppercase tracking-wider ${
                      isDark ? 'text-slate-400' : 'text-slate-500'
                    }`}
                  >
                    Geographic Location
                  </div>
                  <div
                    className={`font-semibold text-sm sm:text-base ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {personalInfo.location}
                  </div>
                  <div
                    className={`text-xs font-mono mt-0.5 ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    Open to Relocation &amp; On-Site Support
                  </div>
                </div>
              </div>
            </div>

            {/* Official CV Download Banner Card */}
            <div
              className={`p-6 rounded-2xl border relative overflow-hidden ${
                isDark
                  ? 'bg-gradient-to-br from-slate-900 via-navy-900 to-slate-900 border-slate-700/80 shadow-lg'
                  : 'bg-gradient-to-br from-slate-100 to-white border-slate-200 shadow-md'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div
                    className={`flex items-center gap-1.5 text-xs font-mono ${
                      isDark ? 'text-cyan-400' : 'text-cyan-700 font-semibold'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Official Curriculum Vitae</span>
                  </div>
                  <h3
                    className={`font-bold text-lg ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    Download Full Resume
                  </h3>
                  <p
                    className={`text-xs ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    Original verified 2-page CV containing complete historical credentials.
                  </p>
                </div>
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border ${
                    isDark
                      ? 'bg-cyan-500/10 border-cyan-500/20'
                      : 'bg-cyan-50 border-cyan-200'
                  }`}
                >
                  <FileDown
                    className={`w-6 h-6 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}
                  />
                </div>
              </div>

              <div
                className={`mt-4 pt-4 border-t flex items-center justify-between ${
                  isDark ? 'border-slate-800' : 'border-slate-200'
                }`}
              >
                <div
                  className={`text-[11px] font-mono ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  <span>Format: PDF</span> • <span>Size: 448 KB</span>
                </div>
                <button
                  onClick={onDownloadCv}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-md transition-all active:scale-95"
                >
                  <FileDown className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Fast Message Composer */}
          <div className="lg:col-span-7">
            <div
              className={`p-6 sm:p-8 rounded-2xl border ${
                isDark
                  ? 'bg-navy-900/60 border-slate-800 shadow-xl'
                  : 'bg-white border-slate-200 shadow-md'
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3
                    className={`text-xl font-bold ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    Send Direct Message
                  </h3>
                  <p
                    className={`text-xs sm:text-sm mt-1 ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    Send a quick hiring opportunity, interview invitation, or IT support inquiry.
                  </p>
                </div>
                <div
                  className={`hidden sm:flex items-center gap-1 text-xs font-mono px-2.5 py-1 rounded-full border ${
                    isDark
                      ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
                      : 'text-emerald-800 bg-emerald-50 border-emerald-200'
                  }`}
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Direct to Inbox</span>
                </div>
              </div>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>
                    Your email client is opening with your message prefilled for S. Peer Mohamed!
                  </span>
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label
                      className={`text-xs font-mono font-medium ${
                        isDark ? 'text-slate-300' : 'text-slate-700'
                      }`}
                    >
                      Your Name / Company
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe / Tech Corp"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm font-sans focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all ${
                        isDark
                          ? 'bg-slate-950/70 border-slate-800 text-white placeholder-slate-500'
                          : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      className={`text-xs font-mono font-medium ${
                        isDark ? 'text-slate-300' : 'text-slate-700'
                      }`}
                    >
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm font-sans focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all ${
                        isDark
                          ? 'bg-slate-950/70 border-slate-800 text-white placeholder-slate-500'
                          : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    className={`text-xs font-mono font-medium ${
                      isDark ? 'text-slate-300' : 'text-slate-700'
                    }`}
                  >
                    Subject / Role Opportunity
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Senior IT Support Engineer Role / Interview Schedule"
                    value={senderSubject}
                    onChange={(e) => setSenderSubject(e.target.value)}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm font-sans focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all ${
                      isDark
                        ? 'bg-slate-950/70 border-slate-800 text-white placeholder-slate-500'
                        : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    className={`text-xs font-mono font-medium ${
                      isDark ? 'text-slate-300' : 'text-slate-700'
                    }`}
                  >
                    Message Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Hello Peer Mohamed, we reviewed your profile and would like to discuss..."
                    value={senderMessage}
                    onChange={(e) => setSenderMessage(e.target.value)}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm font-sans focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all resize-none ${
                      isDark
                        ? 'bg-slate-950/70 border-slate-800 text-white placeholder-slate-500'
                        : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-electric-600 hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/20 active:scale-[0.99] transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email Client</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
