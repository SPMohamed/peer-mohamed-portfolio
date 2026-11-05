import React from 'react';
import {
  Server,
  ArrowUp,
  MapPin,
  Mail,
  Phone,
  MessageSquare,
  ShieldCheck,
  FileDown,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface FooterProps {
  isDark: boolean;
  onDownloadCv: () => void;
}

export const Footer: React.FC<FooterProps> = ({ isDark, onDownloadCv }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`border-t transition-colors duration-300 ${
        isDark
          ? 'bg-navy-950 border-slate-800 text-slate-400'
          : 'bg-slate-100 border-slate-200 text-slate-600'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Identity Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20">
                <Server className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-white tracking-tight">
                  {personalInfo.name}
                </h3>
                <p className="text-xs font-mono text-cyan-400">
                  {personalInfo.title}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm leading-relaxed max-w-sm">
              Providing enterprise-grade system administration, Windows Server management, cloud productivity (M365), and reliable technical support.
            </p>


          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-cyan-400 transition-colors">
                  Technical Skills
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-cyan-400 transition-colors">
                  Professional Experience
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-cyan-400 transition-colors">
                  Education &amp; Credentials
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">
                  Contact &amp; Connect
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact Info */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold">
              Contact Details
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm font-mono">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={personalInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  WhatsApp Direct Chat
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onDownloadCv}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
              >
                <FileDown className="w-3.5 h-3.5 text-cyan-400" />
                <span>Download CV (PDF)</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-2 text-slate-400">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>&copy; {currentYear} {personalInfo.name}. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-400">Designed with modern SaaS standards</span>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
