import React from 'react';
import {
  Mail,
  ChevronRight,
  Server,
  MapPin,
  ShieldCheck,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { NetworkCanvas } from './NetworkCanvas';
import { StatsCounter } from './StatsCounter';

interface HeroProps {
  isDark: boolean;
}

export const Hero: React.FC<HeroProps> = ({ isDark }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[88vh] flex items-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background Interactive Network Canvas */}
      <NetworkCanvas isDark={isDark} />

      {/* Subtle ambient lighting */}
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
          
          {/* Left Column: Headline, Summary & CTA Buttons */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Location Pill */}
            <div
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wide border shadow-sm ${
                isDark
                  ? 'border-cyan-500/30 bg-cyan-950/40 text-cyan-300'
                  : 'border-cyan-500/30 bg-cyan-50 text-cyan-800'
              }`}
            >
              <MapPin className={`w-3.5 h-3.5 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`} />
              <span>{personalInfo.location}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12]">
              <span
                className={`text-transparent bg-clip-text bg-gradient-to-r ${
                  isDark
                    ? 'from-white via-slate-100 to-slate-300'
                    : 'from-slate-900 via-slate-800 to-slate-900'
                }`}
              >
                Keeping IT Systems
              </span>
              <br />
              <span
                className={`text-transparent bg-clip-text bg-gradient-to-r ${
                  isDark
                    ? 'from-cyan-400 via-blue-400 to-electric-500'
                    : 'from-cyan-600 via-blue-600 to-electric-700'
                }`}
              >
                Secure, Connected
              </span>
              <br />
              <span
                className={`text-transparent bg-clip-text bg-gradient-to-r ${
                  isDark
                    ? 'from-slate-100 via-slate-200 to-slate-400'
                    : 'from-slate-800 via-slate-700 to-slate-900'
                }`}
              >
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

            {/* Verified Statistics */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-lg mx-auto lg:mx-0">
              <div
                className={`p-3.5 rounded-xl border text-center transition-all ${
                  isDark
                    ? 'bg-slate-900/60 border-slate-800 text-slate-100'
                    : 'bg-white/80 border-slate-200 text-slate-900 shadow-sm'
                }`}
              >
                <div
                  className={`text-xl sm:text-2xl font-bold font-mono ${
                    isDark ? 'text-cyan-400' : 'text-cyan-600'
                  }`}
                >
                  <StatsCounter end={15} suffix="+" />
                </div>
                <div
                  className={`text-[11px] sm:text-xs font-medium mt-0.5 ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  Years Experience
                </div>
              </div>

              <div
                className={`p-3.5 rounded-xl border text-center transition-all ${
                  isDark
                    ? 'bg-slate-900/60 border-slate-800 text-slate-100'
                    : 'bg-white/80 border-slate-200 text-slate-900 shadow-sm'
                }`}
              >
                <div
                  className={`text-xl sm:text-2xl font-bold font-mono ${
                    isDark ? 'text-blue-400' : 'text-blue-600'
                  }`}
                >
                  <StatsCounter end={500} suffix="+" />
                </div>
                <div
                  className={`text-[11px] sm:text-xs font-medium mt-0.5 ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  Users Supported
                </div>
              </div>

              <div
                className={`p-3.5 rounded-xl border text-center transition-all ${
                  isDark
                    ? 'bg-slate-900/60 border-slate-800 text-slate-100'
                    : 'bg-white/80 border-slate-200 text-slate-900 shadow-sm'
                }`}
              >
                <div
                  className={`text-xl sm:text-2xl font-bold font-mono ${
                    isDark ? 'text-emerald-400' : 'text-emerald-600'
                  }`}
                >
                  <StatsCounter end={4} suffix=" Yrs" />
                </div>
                <div
                  className={`text-[11px] sm:text-xs font-medium mt-0.5 ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  Saudi Arabia Exp
                </div>
              </div>
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-4">
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

          </div>

          {/* Right Column: Clean, Professional Headshot Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Outer decorative gradient glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 opacity-25 blur-xl" />
              
              {/* Profile Card Container */}
              <div
                className={`relative rounded-2xl p-5 border transition-all ${
                  isDark
                    ? 'bg-navy-900/90 border-slate-800 shadow-2xl shadow-black/50'
                    : 'bg-white border-slate-200 shadow-xl'
                }`}
              >
                {/* Photo */}
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-800 border border-slate-700/60 shadow-inner group">
                  <img
                    src="./profile.jpg"
                    alt="S. Peer Mohamed - IT Support Engineer & System Administrator"
                    className="w-full h-full object-cover object-top filter brightness-95 group-hover:scale-102 transition-transform duration-500"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Subtle lower tag */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 font-mono text-[11px]">
                      <Server className="w-3.5 h-3.5 text-cyan-400" />
                      <span>IT Support &amp; System Administration</span>
                    </div>
                  </div>
                </div>

                {/* Profile Card Footer */}
                <div
                  className={`mt-4 pt-4 border-t space-y-2 ${
                    isDark ? 'border-slate-800/80' : 'border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h2
                        className={`text-base font-bold tracking-wide ${
                          isDark ? 'text-white' : 'text-slate-900'
                        }`}
                      >
                        {personalInfo.name}
                      </h2>
                      <p
                        className={`text-xs font-mono ${
                          isDark ? 'text-cyan-400' : 'text-cyan-700 font-medium'
                        }`}
                      >
                        {personalInfo.title}
                      </p>
                    </div>
                    <span
                      className={`px-2.5 py-1 rounded-full text-[11px] font-semibold font-mono border ${
                        isDark
                          ? 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                          : 'bg-blue-50 text-blue-700 border-blue-200'
                      }`}
                    >
                      15+ Years Exp
                    </span>
                  </div>

                  <div
                    className={`grid grid-cols-2 gap-2 text-[11px] font-mono pt-1 ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      <MapPin
                        className={`w-3.5 h-3.5 ${
                          isDark ? 'text-cyan-400' : 'text-cyan-600'
                        }`}
                      />
                      <span>Tenkasi, Tamil Nadu</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck
                        className={`w-3.5 h-3.5 ${
                          isDark ? 'text-emerald-400' : 'text-emerald-600'
                        }`}
                      />
                      <span>Enterprise IT Systems</span>
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
