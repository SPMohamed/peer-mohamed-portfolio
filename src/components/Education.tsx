import React from 'react';
import {
  GraduationCap,
  Award,
  Globe,
  Users,
  Briefcase,
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
        return <Briefcase className={`w-5 h-5 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`} />;
      case 'Users':
        return <Users className={`w-5 h-5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />;
      case 'Globe':
        return <Globe className={`w-5 h-5 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />;
      default:
        return <Award className={`w-5 h-5 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`} />;
    }
  };

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* ================= Part 1: Career Highlights ================= */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider mb-3 border ${
                isDark
                  ? 'text-cyan-400 bg-cyan-950/60 border-cyan-500/30'
                  : 'text-cyan-800 bg-cyan-50 border-cyan-200'
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>Career Highlights</span>
            </div>
            <h2
              className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              Key{' '}
              <span
                className={`text-transparent bg-clip-text bg-gradient-to-r ${
                  isDark ? 'from-cyan-400 to-blue-500' : 'from-cyan-600 to-blue-600'
                }`}
              >
                Career Highlights
              </span>
            </h2>
            <p
              className={`mt-3 text-base sm:text-lg ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              Proven track record and core milestones accumulated over 15+ years in IT systems and infrastructure.
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
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform border ${
                      isDark ? 'bg-slate-800/80 border-slate-700/60' : 'bg-slate-100 border-slate-200'
                    }`}
                  >
                    {getHighlightIcon(highlight.iconName)}
                  </div>
                  {highlight.badge && (
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold border ${
                        isDark
                          ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
                          : 'bg-cyan-50 text-cyan-700 border-cyan-200'
                      }`}
                    >
                      {highlight.badge}
                    </span>
                  )}
                </div>

                <h3
                  className={`text-lg font-bold transition-colors ${
                    isDark
                      ? 'text-white group-hover:text-cyan-400'
                      : 'text-slate-900 group-hover:text-blue-600'
                  }`}
                >
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
              <div
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider mb-2 border ${
                  isDark
                    ? 'text-blue-400 bg-blue-950/60 border-blue-500/30'
                    : 'text-blue-800 bg-blue-50 border-blue-200'
                }`}
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Academic Background</span>
              </div>
              <h3
                className={`text-2xl font-bold tracking-tight ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
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
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5 border ${
                          isDark
                            ? 'bg-cyan-500/10 border-cyan-500/20'
                            : 'bg-cyan-50 border-cyan-200'
                        }`}
                      >
                        <BookOpen
                          className={`w-5 h-5 ${
                            isDark ? 'text-cyan-400' : 'text-cyan-600'
                          }`}
                        />
                      </div>
                      <div>
                        <h4
                          className={`font-bold text-base ${
                            isDark ? 'text-white' : 'text-slate-900'
                          }`}
                        >
                          {edu.degree}
                        </h4>
                        <p
                          className={`text-xs mt-1 ${
                            isDark ? 'text-slate-400' : 'text-slate-600'
                          }`}
                        >
                          {edu.type}
                        </p>
                      </div>
                    </div>

                    <span
                      className={`text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full border shrink-0 ${
                        idx === 0
                          ? isDark
                            ? 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30'
                            : 'bg-cyan-50 text-cyan-800 border-cyan-200'
                          : isDark
                          ? 'bg-slate-800 text-slate-400 border-slate-700'
                          : 'bg-slate-100 text-slate-700 border-slate-200'
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
              <div
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider mb-2 border ${
                  isDark
                    ? 'text-emerald-400 bg-emerald-950/60 border-emerald-500/30'
                    : 'text-emerald-800 bg-emerald-50 border-emerald-200'
                }`}
              >
                <Languages className="w-3.5 h-3.5" />
                <span>Languages</span>
              </div>
              <h3
                className={`text-2xl font-bold tracking-tight ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
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
                        <h4
                          className={`font-bold text-base ${
                            isDark ? 'text-white' : 'text-slate-900'
                          }`}
                        >
                          {lang.name}
                        </h4>
                        <p
                          className={`text-xs mt-0.5 ${
                            isDark ? 'text-slate-400' : 'text-slate-600'
                          }`}
                        >
                          {lang.proficiency}
                        </p>
                      </div>
                    </div>
                    <CheckCircle2
                      className={`w-4 h-4 ${
                        isDark ? 'text-emerald-400' : 'text-emerald-600'
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Saudi Arabia Language Note */}
            <div
              className={`p-4 rounded-xl border font-mono text-xs flex items-start gap-2.5 ${
                isDark
                  ? 'bg-black/30 border-slate-800 text-slate-400'
                  : 'bg-slate-50 border-slate-200 text-slate-700'
              }`}
            >
              <Globe
                className={`w-4 h-4 shrink-0 mt-0.5 ${
                  isDark ? 'text-cyan-400' : 'text-cyan-600'
                }`}
              />
              <span>
                Arabic language skills honed through 4 years of professional IT operations in Saudi Arabia.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
