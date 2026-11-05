import React, { useState } from 'react';
import {
  Monitor,
  Cloud,
  Network,
  Headphones,
  ShieldCheck,
  Check,
  Wrench,
  Terminal,
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

interface SkillsProps {
  isDark: boolean;
}

export const Skills: React.FC<SkillsProps> = ({ isDark }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getIcon = (name: string) => {
    switch (name) {
      case 'Monitor':
        return <Monitor className="w-5 h-5 text-cyan-400" />;
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-blue-400" />;
      case 'Network':
        return <Network className="w-5 h-5 text-emerald-400" />;
      case 'Headphones':
        return <Headphones className="w-5 h-5 text-cyan-300" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-purple-400" />;
      default:
        return <Wrench className="w-5 h-5 text-cyan-400" />;
    }
  };

  const filteredCategories =
    selectedCategory === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Technical{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Skills &amp; Expertise
            </span>
          </h2>
          <p
            className={`mt-3 text-base sm:text-lg ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            Specialized toolkit built from over a decade and a half of enterprise administration and end-user support.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20'
                  : isDark
                  ? 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              All Skills ({skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)})
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20'
                    : isDark
                    ? 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {cat.title} ({cat.skills.length})
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className={`rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between ${
                isDark
                  ? 'bg-navy-900/50 border-slate-800 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/5'
                  : 'bg-white border-slate-200 hover:border-blue-300 hover:shadow-md'
              }`}
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60">
                      {getIcon(category.iconName)}
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-white">
                        {category.title}
                      </h3>
                      <span className="text-[11px] font-mono text-cyan-400">
                        {category.skills.length} competencies
                      </span>
                    </div>
                  </div>
                </div>

                <p
                  className={`text-xs leading-relaxed mb-5 ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  {category.description}
                </p>

                {/* Skills Badges */}
                <div className="space-y-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className={`flex items-center p-3 rounded-xl border text-sm font-medium transition-all ${
                        isDark
                          ? 'bg-slate-950/60 border-slate-800/90 text-slate-200 hover:border-slate-700 hover:bg-slate-900/80'
                          : 'bg-slate-50 border-slate-200/90 text-slate-800 hover:border-slate-300 hover:bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-5 h-5 rounded-md bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                          <Check className="w-3.5 h-3.5 text-cyan-400" />
                        </div>
                        <span>{skill}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>


            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
