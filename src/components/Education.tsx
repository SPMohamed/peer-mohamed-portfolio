import React from 'react';
import {
  GraduationCap,
  Award,
  Globe,
  Zap,
  FileCheck,
  Compass,
  CheckCircle2,
  Languages,
  BookOpen,
} from 'lucide-react';
import { educationData, highlightsData, languagesData } from '../data/portfolioData';

interface EducationProps {
  isDark: boolean;
}

export const Education: React.FC<EducationProps> = ({ isDark }) => {
  const getHighlightIcon = (name: string) => {
    switch (name) {
      case 'Briefcase':
        return <Award className="w-5 h-5 text-cyan-400" />;
      case 'Users':
        return <Globe className="w-5 h-5 text-blue-400" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-indigo-400" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-amber-400" />;
      case 'FileCheck':
        return <FileCheck className="w-5 h-5 text-emerald-400" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-cyan-300" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* ================= Part 1: Career Highlights & Credentials ================= */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>Career Highlights</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Verified{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Credentials &amp; Availability
              </span>
            </h2>
            <p
              className={`mt-3 text-base sm:text-lg ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              Essential operational qualifications and readiness indicators verified directly from curriculum vitae.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {highlightsData.map((highlight) => (
              <div
                key={highlight.title}
                className={`p-6 rounded-2xl border transition-all duration-300 group hover:-translate-y-1 ${
                  isDark
                    ? 'bg-navy-900/50 border-slate-800 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/5'
                    : 'bg-white border-slate-200 hover:border-blue-400 hover:shadow-md'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getHighlightIcon(highlight.iconName)}
                  </div>
                  {highlight.badge && (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      {highlight.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {highlight.title}
                </h3>
                <p
                  className={`text-xs sm:text-sm mt-2 leading-relaxed ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  {highlight.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= Part 2: Education & Languages ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Education Column */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-blue-400 bg-blue-950/60 border border-blue-500/30 mb-2">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Academic Foundation</span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-white">
                Education
              </h3>
            </div>

            <div className="space-y-4">
              {educationData.map((edu, idx) => (
                <div
                  key={edu.degree}
                  className={`p-5 rounded-2xl border transition-all duration-300 ${
                    isDark
                      ? 'bg-navy-900/60 border-slate-800 hover:border-slate-700'
                      : 'bg-white border-slate-200 shadow-sm'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0 mt-0.5">
                        <BookOpen className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-base text-white">
                          {edu.degree}
                        </h4>
                        <p className="text-xs text-slate-400 mt-1">
                          {edu.type}
                        </p>
                      </div>
                    </div>

                    <span
                      className={`text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full border shrink-0 ${
                        idx === 0
                          ? 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30'
                          : 'bg-slate-800 text-slate-400 border-slate-700'
                      }`}
                    >
                      {edu.badge}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages Column */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 mb-2">
                <Languages className="w-3.5 h-3.5" />
                <span>Multilingual Fluency</span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-white">
                Languages
              </h3>
            </div>

            <div className="space-y-4">
              {languagesData.map((lang) => (
                <div
                  key={lang.name}
                  className={`p-5 rounded-2xl border transition-all ${
                    isDark
                      ? 'bg-navy-900/60 border-slate-800 hover:border-slate-700'
                      : 'bg-white border-slate-200 shadow-sm'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl" role="img" aria-label={lang.name}>
                        {lang.flag}
                      </span>
                      <div>
                        <h4 className="font-bold text-base text-white">
                          {lang.name}
                        </h4>
                        <p className="text-xs text-slate-400 mt-0.5">
                          {lang.proficiency}
                        </p>
                      </div>
                    </div>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/50" />
                  </div>
                </div>
              ))}
            </div>

            {/* Saudi Arabia Language Note */}
            <div
              className={`p-4 rounded-xl border font-mono text-xs text-slate-400 flex items-start gap-2.5 ${
                isDark ? 'bg-black/30 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}
            >
              <Globe className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>
                Arabic language skills honed through 4 continuous years of professional IT operations in Saudi Arabia.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
