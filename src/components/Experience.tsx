import React from 'react';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle,
  Building2,
  Globe2,
  Sparkles,
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';

interface ExperienceProps {
  isDark: boolean;
}

export const Experience: React.FC<ExperienceProps> = ({ isDark }) => {
  return (
    <section id="experience" className="py-20 relative">
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
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career History</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Professional{' '}
            <span
              className={`text-transparent bg-clip-text bg-gradient-to-r ${
                isDark ? 'from-cyan-400 to-blue-500' : 'from-cyan-600 to-blue-600'
              }`}
            >
              Experience
            </span>
          </h2>
          <p
            className={`mt-3 text-base sm:text-lg ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            Chronological track record of system administration, infrastructure upkeep, and technical field engineering.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center Line */}
          <div
            className={`absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b ${
              isDark
                ? 'from-cyan-500 via-blue-500 to-slate-800'
                : 'from-cyan-400 via-blue-400 to-slate-300'
            }`}
            aria-hidden="true"
          />

          <div className="space-y-12">
            {experienceData.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.company + item.period}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline node icon */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
                    <div
                      className={`w-9 h-9 rounded-full border-2 flex items-center justify-center shadow-lg ${
                        isDark
                          ? 'bg-navy-950 border-cyan-400 shadow-cyan-500/30'
                          : 'bg-white border-blue-500 shadow-blue-500/20'
                      }`}
                    >
                      {index === 0 ? (
                        <Sparkles
                          className={`w-4 h-4 animate-pulse ${
                            isDark ? 'text-cyan-300' : 'text-cyan-600'
                          }`}
                        />
                      ) : index === 1 ? (
                        <Globe2
                          className={`w-4 h-4 ${
                            isDark ? 'text-blue-400' : 'text-blue-600'
                          }`}
                        />
                      ) : (
                        <Building2
                          className={`w-4 h-4 ${
                            isDark ? 'text-slate-400' : 'text-slate-600'
                          }`}
                        />
                      )}
                    </div>
                  </div>

                  {/* Spacer for mobile indent */}
                  <div className="pl-12 sm:pl-0 sm:w-1/2 sm:px-8 w-full">
                    <div
                      className={`rounded-2xl p-6 sm:p-7 border transition-all duration-300 group hover:-translate-y-1 ${
                        isDark
                          ? 'bg-navy-900/60 border-slate-800 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/5'
                          : 'bg-white border-slate-200 hover:border-blue-400 hover:shadow-lg'
                      }`}
                    >
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold border ${
                            isDark
                              ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
                              : 'bg-cyan-50 text-cyan-700 border-cyan-200'
                          }`}
                        >
                          <Calendar className="w-3 h-3" />
                          {item.period}
                        </span>

                        {item.badge && (
                          <span
                            className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${
                              index === 0
                                ? isDark
                                  ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                                  : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                                : index === 1
                                ? isDark
                                  ? 'bg-blue-500/10 text-blue-400 border-blue-500/30'
                                  : 'bg-blue-50 text-blue-700 border-blue-200'
                                : isDark
                                ? 'bg-slate-800 text-slate-300 border-slate-700'
                                : 'bg-slate-100 text-slate-700 border-slate-200'
                            }`}
                          >
                            {item.badge}
                          </span>
                        )}
                      </div>

                      {/* Role & Company */}
                      <h3
                        className={`text-xl font-bold transition-colors ${
                          isDark
                            ? 'text-white group-hover:text-cyan-400'
                            : 'text-slate-900 group-hover:text-blue-600'
                        }`}
                      >
                        {item.role}
                      </h3>

                      <div
                        className={`flex flex-wrap items-center gap-3 mt-1 mb-4 text-xs font-mono ${
                          isDark ? 'text-slate-400' : 'text-slate-600'
                        }`}
                      >
                        <span
                          className={`font-semibold flex items-center gap-1 ${
                            isDark ? 'text-slate-200' : 'text-slate-800'
                          }`}
                        >
                          <Building2
                            className={`w-3.5 h-3.5 ${
                              isDark ? 'text-cyan-400' : 'text-cyan-600'
                            }`}
                          />
                          {item.company}
                        </span>
                        {item.location && (
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-slate-500" />
                            {item.location}
                          </span>
                        )}
                      </div>

                      {/* Responsibilities strictly from CV */}
                      <ul
                        className={`space-y-2.5 border-t pt-4 ${
                          isDark ? 'border-slate-800/80' : 'border-slate-200'
                        }`}
                      >
                        {item.responsibilities.map((resp, rIdx) => (
                          <li
                            key={rIdx}
                            className={`flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed ${
                              isDark ? 'text-slate-300' : 'text-slate-700'
                            }`}
                          >
                            <CheckCircle
                              className={`w-4 h-4 shrink-0 mt-0.5 ${
                                isDark ? 'text-cyan-400' : 'text-cyan-600'
                              }`}
                            />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>


                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
