import React from 'react';
import {
  Server,
  Cloud,
  Network,
  LifeBuoy,
  Shield,
  Layers,
  MapPin,
  Calendar,
  CheckCircle2,
  Cpu,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface AboutProps {
  isDark: boolean;
}

export const About: React.FC<AboutProps> = ({ isDark }) => {
  const pillars = [
    {
      title: "IT Infrastructure",
      description: "End-to-end management of on-premises servers, workstations, storage backups, and network peripherals.",
      icon: Layers,
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "Windows Server Administration",
      description: "Installation, policy configuration, domain management, role provisioning, and critical security updates.",
      icon: Server,
      color: "from-cyan-500 to-blue-600",
    },
    {
      title: "Microsoft 365",
      description: "Tenant administration, exchange/Outlook email configuration, user licensing, and cloud productivity management.",
      icon: Cloud,
      color: "from-blue-600 to-cyan-400",
    },
    {
      title: "Active Directory",
      description: "User account lifecycle, Group Policy Objects (GPO), domain security credentials, and access permissions.",
      icon: Shield,
      color: "from-indigo-500 to-blue-500",
    },
    {
      title: "Network Management",
      description: "DNS, DHCP, TCP/IP configurations, LAN/WAN switches, subnetting, and rapid connectivity troubleshooting.",
      icon: Network,
      color: "from-teal-500 to-cyan-500",
    },
    {
      title: "Technical Support",
      description: "Tier 1 & Tier 2 remote desktop resolution, hardware repair, printer fleets, CCTV, and end-user satisfaction.",
      icon: LifeBuoy,
      color: "from-cyan-500 to-emerald-500",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
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
            <Cpu className="w-3.5 h-3.5" />
            <span>Professional Profile</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            About{' '}
            <span
              className={`text-transparent bg-clip-text bg-gradient-to-r ${
                isDark ? 'from-cyan-400 to-blue-500' : 'from-cyan-600 to-blue-600'
              }`}
            >
              S. Peer Mohamed
            </span>
          </h2>
          <p
            className={`mt-3 text-base sm:text-lg ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            Senior IT Support Engineer and System Administrator committed to uptime, data integrity, and seamless enterprise operations.
          </p>
        </div>

        {/* Executive Summary Card */}
        <div
          className={`rounded-2xl p-6 sm:p-8 border mb-16 relative overflow-hidden transition-all ${
            isDark
              ? 'bg-navy-900/60 border-slate-800 shadow-xl'
              : 'bg-white border-slate-200 shadow-md'
          }`}
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div
                className={`flex items-center gap-2 font-mono text-sm ${
                  isDark ? 'text-cyan-400' : 'text-cyan-700'
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    isDark ? 'bg-cyan-400' : 'bg-cyan-600'
                  }`}
                ></span>
                <span>Verified CV Professional Summary</span>
              </div>
              <blockquote
                className={`text-lg sm:text-xl font-normal leading-relaxed italic ${
                  isDark ? 'text-slate-200' : 'text-slate-800'
                }`}
              >
                &ldquo;{personalInfo.summary}&rdquo;
              </blockquote>

              <div
                className={`flex flex-wrap items-center gap-4 pt-2 text-xs font-mono ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <MapPin
                    className={`w-4 h-4 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}
                  />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar
                    className={`w-4 h-4 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}
                  />
                  <span>15+ Years Working Experience</span>
                </div>
                <div
                  className={`flex items-center gap-1.5 ${
                    isDark ? 'text-emerald-400' : 'text-emerald-600'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>500+ Users Supported</span>
                </div>
              </div>
            </div>

            <div
              className={`lg:col-span-4 border-t lg:border-t-0 lg:border-l pt-6 lg:pt-0 lg:pl-8 space-y-3 font-mono text-xs ${
                isDark ? 'border-slate-800/80' : 'border-slate-200'
              }`}
            >
              <div
                className={`p-3 rounded-xl border ${
                  isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  Primary Domain
                </div>
                <div
                  className={`font-semibold mt-0.5 ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  Enterprise IT &amp; SysAdmin
                </div>
              </div>
              <div
                className={`p-3 rounded-xl border ${
                  isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  International Experience
                </div>
                <div
                  className={`font-semibold mt-0.5 ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  Saudi Arabia (2014 – 2018)
                </div>
              </div>
              <div
                className={`p-3 rounded-xl border ${
                  isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  Language Capabilities
                </div>
                <div
                  className={`font-semibold mt-0.5 ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  English, Tamil, Arabic
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="space-y-4">
          <div className="text-left">
            <h3
              className={`text-xl font-bold tracking-tight ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              Core Technical Competencies
            </h3>
            <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              The foundational pillars developed across 15+ years of active field practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-2">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className={`p-6 rounded-2xl border transition-all duration-300 group hover:-translate-y-1 ${
                    isDark
                      ? 'bg-navy-900/50 border-slate-800 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/5'
                      : 'bg-white border-slate-200 hover:border-blue-400 hover:shadow-md'
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${pillar.color} p-0.5 mb-4 shadow-md group-hover:scale-105 transition-transform`}
                  >
                    <div
                      className={`w-full h-full rounded-[10px] flex items-center justify-center ${
                        isDark ? 'bg-navy-950' : 'bg-white'
                      }`}
                    >
                      <Icon
                        className={`w-6 h-6 ${isDark ? 'text-cyan-300' : 'text-cyan-600'}`}
                      />
                    </div>
                  </div>
                  <h4
                    className={`text-lg font-bold transition-colors ${
                      isDark
                        ? 'text-white group-hover:text-cyan-400'
                        : 'text-slate-900 group-hover:text-blue-600'
                    }`}
                  >
                    {pillar.title}
                  </h4>
                  <p
                    className={`text-sm mt-2 leading-relaxed ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
