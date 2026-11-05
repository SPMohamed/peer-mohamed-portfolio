import React from 'react';
import {
  FileDown,
  Mail,
  ChevronRight,
  ShieldCheck,
  Server,
  MapPin,
  Clock,
  Terminal,
  Activity,
  CheckCircle,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { NetworkCanvas } from './NetworkCanvas';
import { StatsCounter } from './StatsCounter';

interface HeroProps {
  isDark: boolean;
  onDownloadCv: () => void;
}

export const Hero: React.FC<HeroProps> = ({ isDark, onDownloadCv }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background Interactive Network Canvas */}
      <NetworkCanvas isDark={isDark} />

      {/* Ambient gradient glow orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & Action Buttons */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wide glass-panel-dark border border-cyan-500/30 text-cyan-300 shadow-sm shadow-cyan-500/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-semibold">{personalInfo.availability}</span>
              <span className="text-slate-500">|</span>
              <span className="flex items-center gap-1 text-slate-300">
                <MapPin className="w-3 h-3 text-cyan-400" />
                {personalInfo.location}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">
                Keeping IT Systems
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-electric-500">
                Secure, Connected
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-slate-200 to-slate-400">
                &amp; Running Smoothly.
              </span>
            </h1>

            {/* Subheadline */}
            <p
              className={`text-lg sm:text-xl font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0 ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              {personalInfo.subheadline}
            </p>

            {/* Quick Experience Badges */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-lg mx-auto lg:mx-0">
              <div
                className={`p-3 rounded-xl border text-center transition-all ${
                  isDark
                    ? 'bg-slate-900/60 border-slate-800 text-slate-100'
                    : 'bg-white/80 border-slate-200 text-slate-900 shadow-sm'
                }`}
              >
                <div className="text-xl sm:text-2xl font-bold text-cyan-400 font-mono">
                  <StatsCounter end={15} suffix="+" />
                </div>
                <div className="text-[11px] sm:text-xs text-slate-400 font-medium mt-0.5">
                  Years Experience
                </div>
              </div>

              <div
                className={`p-3 rounded-xl border text-center transition-all ${
                  isDark
                    ? 'bg-slate-900/60 border-slate-800 text-slate-100'
                    : 'bg-white/80 border-slate-200 text-slate-900 shadow-sm'
                }`}
              >
                <div className="text-xl sm:text-2xl font-bold text-blue-400 font-mono">
                  <StatsCounter end={500} suffix="+" />
                </div>
                <div className="text-[11px] sm:text-xs text-slate-400 font-medium mt-0.5">
                  Users Supported
                </div>
              </div>

              <div
                className={`p-3 rounded-xl border text-center transition-all ${
                  isDark
                    ? 'bg-slate-900/60 border-slate-800 text-slate-100'
                    : 'bg-white/80 border-slate-200 text-slate-900 shadow-sm'
                }`}
              >
                <div className="text-xl sm:text-2xl font-bold text-emerald-400 font-mono">
                  <StatsCounter end={4} suffix=" Yrs" />
                </div>
                <div className="text-[11px] sm:text-xs text-slate-400 font-medium mt-0.5">
                  Saudi Arabia Exp
                </div>
              </div>
            </div>

            {/* Action Buttons: Download CV, Contact Me, View Experience */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-4">
              <button
                onClick={onDownloadCv}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-electric-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <FileDown className="w-5 h-5 group-hover:animate-bounce" />
                <span>Download My CV</span>
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className={`inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold border transition-all duration-200 ${
                  isDark
                    ? 'bg-slate-900/80 hover:bg-slate-800 text-white border-slate-700 hover:border-cyan-500/50'
                    : 'bg-white hover:bg-slate-50 text-slate-900 border-slate-300 shadow-sm'
                }`}
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </button>

              <button
                onClick={() => scrollTo('experience')}
                className={`inline-flex items-center gap-1.5 px-4 py-3.5 rounded-xl text-sm font-medium transition-all ${
                  isDark
                    ? 'text-slate-400 hover:text-cyan-400'
                    : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                <span>View My Experience</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Live Terminal Status Line */}
            <div
              className={`p-3 rounded-lg border font-mono text-xs flex items-center justify-between gap-2 max-w-xl mx-auto lg:mx-0 ${
                isDark
                  ? 'bg-black/40 border-slate-800 text-slate-400'
                  : 'bg-slate-100 border-slate-300 text-slate-600'
              }`}
            >
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-cyan-400">peer@it-infrastructure:~$</span>
                <span className="text-emerald-400">systemctl status enterprise-core</span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 text-emerald-400 font-semibold">
                <Activity className="w-3 h-3 animate-pulse" />
                <span>active (running)</span>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Profile Headshot & Hardware Architecture Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Outer decorative glowing rings */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 opacity-30 blur-xl animate-pulse-subtle" />
              
              {/* Main Profile Card Container */}
              <div
                className={`relative rounded-2xl p-4 sm:p-5 border transition-all ${
                  isDark
                    ? 'bg-navy-900/90 border-slate-700/80 shadow-2xl shadow-black/60'
                    : 'bg-white border-slate-200 shadow-xl'
                }`}
              >
                {/* Photo with Frame */}
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-800 border border-slate-700/60 shadow-inner group">
                  <img
                    src="./profile.jpg"
                    alt="S. Peer Mohamed - IT Support Engineer & System Administrator"
                    className="w-full h-full object-cover object-top filter brightness-95 group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                  {/* Subtle inner gradient shadow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Photo Overlay Info */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 font-mono">
                      <Server className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Windows Server &amp; M365</span>
                    </div>
                    <div className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 text-emerald-300 font-medium">
                      <CheckCircle className="w-3 h-3 text-emerald-400" />
                      <span>Verified</span>
                    </div>
                  </div>
                </div>

                {/* Profile Card Footer Summary */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-base font-bold text-white tracking-wide">
                        {personalInfo.name}
                      </h2>
                      <p className="text-xs text-cyan-400 font-mono">
                        {personalInfo.title}
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      15+ Yrs
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-slate-400 pt-1">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Immediate Joiner</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Active Directory / DNS</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
