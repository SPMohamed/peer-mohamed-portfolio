import React, { useState, useEffect } from 'react';
import {
  Server,
  FileDown,
  Moon,
  Sun,
  Menu,
  X,
  Phone,
  Mail,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
  onDownloadCv: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isDark,
  toggleTheme,
  onDownloadCv,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'experience', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isDark
            ? 'bg-navy-950/80 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3.5'
            : 'bg-white/85 backdrop-blur-md border-b border-slate-200/90 shadow-md shadow-slate-200/50 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Identity */}
          <a
            href="#hero"
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="S. Peer Mohamed Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-200">
              <Server className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight group-hover:text-cyan-400 transition-colors">
                {personalInfo.name}
              </span>
              <p
                className={`text-xs ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                } hidden sm:block font-mono`}
              >
                {personalInfo.title}
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? isDark
                        ? 'text-cyan-400 bg-cyan-950/40 border border-cyan-500/30'
                        : 'text-blue-600 bg-blue-50 border border-blue-200'
                      : isDark
                      ? 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className={`p-2 rounded-xl transition-all duration-200 border ${
                isDark
                  ? 'bg-slate-900/80 border-slate-700/80 text-yellow-400 hover:bg-slate-800'
                  : 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Download CV Button */}
            <button
              onClick={onDownloadCv}
              className="relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-electric-600 hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30 active:scale-95 transition-all duration-200"
            >
              <FileDown className="w-4 h-4" />
              <span>Download CV</span>
            </button>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className={`p-2 rounded-lg border ${
                isDark
                  ? 'bg-slate-900 border-slate-700 text-yellow-400'
                  : 'bg-slate-100 border-slate-300 text-slate-700'
              }`}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Open menu"
              className={`p-2 rounded-lg border ${
                isDark
                  ? 'bg-slate-900 border-slate-700 text-slate-200'
                  : 'bg-slate-100 border-slate-300 text-slate-700'
              }`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          className={`sm:hidden border-b px-4 pt-3 pb-6 space-y-3 transition-all ${
            isDark
              ? 'bg-navy-950/95 border-slate-800 backdrop-blur-xl'
              : 'bg-white/95 border-slate-200 backdrop-blur-xl'
          }`}
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={`text-left px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  activeSection === link.href.replace('#', '')
                    ? isDark
                      ? 'text-cyan-400 bg-cyan-950/50'
                      : 'text-blue-600 bg-blue-50'
                    : isDark
                    ? 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800/50 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onDownloadCv();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-md"
            >
              <FileDown className="w-4 h-4" />
              <span>Download CV (PDF)</span>
            </button>

            <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-2">
              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="flex items-center justify-center gap-1.5 p-2 rounded-lg bg-slate-800/40 text-slate-300 border border-slate-700/50"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>Call</span>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center justify-center gap-1.5 p-2 rounded-lg bg-slate-800/40 text-slate-300 border border-slate-700/50"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
