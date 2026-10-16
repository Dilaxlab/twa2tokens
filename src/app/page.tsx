import type { Metadata } from 'next';
import Link from 'next/link';
import RwaSection from '@/components/RwaSection';
import WhatWeBuildAccordion from '@/components/WhatWeBuildAccordion';

export const metadata: Metadata = {
  title: 'RWA4Tokens — Unlocking Real-World Value for Programmable Finance',
  description:
    'RWA4Tokens is a technology-led ecosystem connecting real-world assets, digital intelligence, tokenization workflows and the infrastructure of modern capital markets.',
};

export default function HomePage() {
  const heroTags = [
    { label: 'Asset Intelligence', icon: 'fa-brain' },
    { label: 'Digital Twins', icon: 'fa-cube' },
    { label: 'Tokenization & Issuance', icon: 'fa-coins' },
    { label: 'Market Connectivity', icon: 'fa-network-wired' },
  ];

  const capabilities = [
    {
      num: 'CAPABILITY 01',
      title: 'Asset Intelligence',
      desc: 'Inventory, provenance, documentation, valuation workflows and AI-enabled physical and information digital twins.',
      icon: 'fa-brain',
      accent: 'from-[#FF8432] to-[#FFA756]',
      borderGlow: 'hover:border-[#FF8432]/50 hover:shadow-[0_0_35px_rgba(255,132,50,0.18)]',
    },
    {
      num: 'CAPABILITY 02',
      title: 'Tokenization Infrastructure',
      desc: 'Token economics, rights definition, issuance workflows, smart-contract orchestration and compliance decision gates.',
      icon: 'fa-cubes-stacked',
      accent: 'from-[#FFA756] to-[#FF7A1B]',
      borderGlow: 'hover:border-[#FFA756]/50 hover:shadow-[0_0_35px_rgba(255,167,86,0.18)]',
    },
    {
      num: 'CAPABILITY 03',
      title: 'Monetization Connectivity',
      desc: 'Integration pathways for eligible offerings, regulated intermediaries, investor servicing, custody, payments and secondary-market venues.',
      icon: 'fa-arrow-progress',
      accent: 'from-[#FF7A1B] to-[#D86317]',
      borderGlow: 'hover:border-[#FF7A1B]/50 hover:shadow-[0_0_35px_rgba(216,99,23,0.18)]',
    },
  ];

  const opportunities = [
    {
      num: '01',
      title: 'Emerging Infrastructure',
      desc: 'The physical and digital systems enabling asset discovery, verification, digital representation and trusted transaction workflows.',
      tags: [
        'AI & Agents',
        'Digital Twins',
        'Geospatial Data',
        'Blockchain',
        'Identity',
        'Custody',
        'Payments',
        'Settlement',
      ],
      icon: 'fa-server',
    },
    {
      num: '02',
      title: 'New Assets & Markets',
      desc: 'Asset categories with growing opportunities for digital ownership records, licensing, fractional economic interests and new distribution models.',
      tags: [
        'Patent Models & IP',
        'Historic Collectibles',
        'Real Estate',
        'Infrastructure',
        'Commodities',
        'Media Rights',
        'Data Assets',
      ],
      icon: 'fa-gem',
    },
    {
      num: '03',
      title: 'Capital Formation & Market Structure',
      desc: 'The legal, regulatory, financial and operational framework needed to structure offerings and connect appropriately eligible assets with participants and market partners.',
      tags: [
        'Asset SPVs',
        'Independent Valuation',
        'Regulatory Classification',
        'KYC / AML',
        'Primary Issuance',
        'Transfer Restrictions',
        'ATS Integration',
        'Investor Reporting',
      ],
      icon: 'fa-scale-balanced',
    },
  ];

  return (
    <div className="min-h-screen bg-[#050507] text-white selection:bg-[#FF7A1B] selection:text-black overflow-x-hidden">
      
      {/* ════════════════ HERO SECTION ════════════════ */}
      <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-[#050507] flex items-center">
        {/* Deep Space Atmosphere & Amber Glow Behind Globe */}
        <div className="absolute top-1/2 -translate-y-1/2 right-[-5%] lg:right-[0%] w-[700px] lg:w-[950px] h-[700px] lg:h-[950px] bg-[radial-gradient(circle,rgba(255,132,50,0.28)_0%,rgba(216,99,23,0.12)_45%,transparent_70%)] pointer-events-none blur-3xl"></div>
        <div className="absolute top-0 right-1/4 w-[500px] h-[400px] bg-[radial-gradient(ellipse,rgba(255,132,50,0.12)_0%,transparent_70%)] pointer-events-none blur-2xl"></div>
        <div className="hero-grid opacity-25"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(5,5,7,0.85)_100%)] pointer-events-none"></div>

        <div className="max-w-[1380px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 xl:col-span-7 z-10 max-w-2xl">
              
              {/* Location & Infrastructure Pill Badge */}
              <div className="hero-pill-badge mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#FF8432] animate-pulse"></span>
                <span className="text-[12px] sm:text-[13px] font-medium text-slate-200 tracking-wide">
                  New York · United States · Global Real-World Asset Infrastructure
                </span>
              </div>

              {/* Bold Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] xl:text-[62px] font-black text-white tracking-tight leading-[1.08] mb-6">
                Unlocking Real-World Value for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8432] via-[#FFA756] to-[#FF8432]">
                  Programmable Finance.
                </span>
              </h1>

              {/* Description */}
              <p className="text-[16px] sm:text-[18px] text-slate-300 leading-relaxed font-normal mb-8 max-w-xl">
                RWA4Tokens is a technology-led ecosystem connecting real-world assets, digital intelligence, tokenization workflows and the infrastructure of modern capital markets.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <a
                  href="#platform"
                  className="px-6 sm:px-8 py-3.5 rounded-full text-sm font-bold text-[#050507] bg-gradient-to-r from-[#FF8432] to-[#D86317] shadow-[0_0_25px_rgba(255,122,27,0.45)] hover:shadow-[0_0_35px_rgba(255,122,27,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
                >
                  <span>Explore the Platform</span>
                  <i className="fa-solid fa-arrow-right text-xs"></i>
                </a>
                <a
                  href="#thesis"
                  className="px-6 sm:px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-white/[0.04] border border-white/15 hover:bg-white/[0.09] hover:border-white/30 transition-all flex items-center gap-2"
                >
                  <span>Our Market Thesis</span>
                </a>
              </div>

              {/* Four Feature Badges Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-6 border-t border-white/10">
                {heroTags.map((tag, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs font-medium text-slate-300"
                  >
                    <i className={`fa-solid ${tag.icon} text-[#FF8432] text-[11px]`}></i>
                    <span className="truncate">{tag.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual: Large Glowing Crystal Earth Globe */}
            <div className="lg:col-span-5 xl:col-span-5 relative flex justify-center lg:justify-end items-center">
              <div className="relative w-full max-w-[450px] sm:max-w-[520px] md:max-w-[580px] lg:max-w-[620px] aspect-square flex items-center justify-center">
                <div className="absolute inset-4 rounded-full bg-[radial-gradient(circle,#FF8432_0%,rgba(216,99,23,0.35)_45%,transparent_72%)] opacity-50 blur-3xl animate-pulse pointer-events-none"></div>
                <div className="absolute -inset-10 rounded-full bg-[radial-gradient(circle,rgba(255,132,50,0.2)_0%,transparent_65%)] blur-3xl pointer-events-none"></div>

                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <img
                    src="/images/crystal-globe-sphere.png"
                    alt="Global Real-World Asset Infrastructure"
                    className="w-full h-full object-contain filter drop-shadow-[0_0_55px_rgba(255,132,50,0.55)] transition-transform duration-700 hover:scale-[1.02]"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════ THE PLATFORM SECTION ════════════════ */}
      <section className="relative py-28 border-t border-b border-white/[0.08] bg-[#07080B]" id="platform">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,rgba(255,132,50,0.1)_0%,transparent_70%)] blur-[140px] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="hero-pill-badge mb-4 inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF8432]"></span>
              <span className="text-xs font-semibold tracking-widest uppercase text-slate-300">
                The Platform
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-5">
              One ecosystem across Asset Intelligence,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8432] via-[#FFA756] to-[#FF8432]">
                Tokenization and Monetization.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              An integrated technology architecture designed to help asset owners and qualified ecosystem participants move from physical asset records to digital representations, structured offerings and potential market access—subject to independent verification, legal review and partner onboarding.
            </p>
          </div>

          {/* Capabilities 3-Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {capabilities.map((cap, idx) => (
              <div
                key={idx}
                className={`group p-8 rounded-2xl bg-[#0D0F16]/90 backdrop-blur-xl border border-white/10 ${cap.borderGlow} transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-[#FF8432] tracking-widest uppercase">
                      {cap.num}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#FF8432] text-lg group-hover:scale-110 group-hover:bg-[#FF8432]/10 transition-all">
                      <i className={`fa-solid ${cap.icon}`}></i>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-[#FFA756] transition-colors">
                    {cap.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {cap.desc}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-white/[0.08] flex items-center gap-2 text-xs font-mono text-slate-400 group-hover:text-white transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF8432]"></span>
                  <span>Integrated Architecture</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ════════════════ WHAT WE BUILD (NINE PRACTICE AREAS) ════════════════ */}
      <WhatWeBuildAccordion />

      {/* ════════════════ RWA TOKENIZATION — END TO END ════════════════ */}
      <RwaSection />

      {/* ════════════════ OUR THESIS SECTION ════════════════ */}
      <section className="relative py-28 overflow-hidden bg-[#050507]" id="thesis">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[radial-gradient(circle,rgba(255,132,50,0.14)_0%,transparent_70%)] blur-[120px] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-gradient-to-b from-[#0F121C] to-[#0A0C13] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden">
            
            <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle,rgba(255,132,50,0.12)_0%,transparent_70%)] pointer-events-none"></div>

            <div className="hero-pill-badge mb-6 inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF8432]"></span>
              <span className="text-xs font-semibold tracking-widest uppercase text-slate-300">
                Our Thesis
              </span>
            </div>

            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-snug tracking-tight mb-8">
              “Digital intelligence makes assets more visible. Tokenization can make rights more transferable. Trusted compliance and market infrastructure turn that potential into responsible, scalable capital formation.”
            </blockquote>

            <div className="flex items-center gap-3 pt-6 border-t border-white/10">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#FF8432] to-[#FFA756] flex items-center justify-center text-[#050507] font-bold text-xs">
                <i className="fa-solid fa-gem"></i>
              </div>
              <div>
                <div className="text-sm font-bold text-white tracking-wide">RWA4Tokens Strategic Framework</div>
                <div className="text-xs text-slate-400 font-mono">Real-World Assets · Programmable Capital</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════ THE OPPORTUNITY SECTION ════════════════ */}
      <section className="relative py-28 border-t border-b border-white/[0.08] bg-[#07080B]" id="opportunity">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="hero-pill-badge mb-4 inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF8432]"></span>
              <span className="text-xs font-semibold tracking-widest uppercase text-slate-300">
                The Opportunity
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              Three forces reshaping{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8432] via-[#FFA756] to-[#FF8432]">
                real-world asset markets.
              </span>
            </h2>
          </div>

          {/* 3 Forces Pillar Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {opportunities.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#0D0F16]/90 border border-white/10 hover:border-white/25 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF8432] to-[#FFA756] font-mono mb-4">
                    {item.num}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed font-normal mb-6">
                    {item.desc}
                  </p>
                </div>

                {/* Badges/Tags Cloud */}
                <div className="pt-6 border-t border-white/10">
                  <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400 mb-3">
                    Key Drivers &amp; Components
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 hover:border-[#FF8432]/40 text-xs font-medium text-slate-200 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ════════════════ PARTNER WITH US SECTION ════════════════ */}
      <section className="relative py-32 overflow-hidden bg-[#050507]" id="partner">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[380px] bg-[radial-gradient(circle,rgba(255,132,50,0.18)_0%,transparent_70%)] blur-[140px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="hero-pill-badge mb-6 inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF8432]"></span>
            <span className="text-xs font-semibold tracking-widest uppercase text-slate-300">
              Partner With Us
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-6">
            Building the connective infrastructure for the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8432] via-[#FFA756] to-[#FF8432]">
              next generation of assets.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Engage with us on technology integration, asset onboarding, compliance architecture, custody, distribution and market partnerships.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:partnerships@rwa4tokens.com?subject=RWA4Tokens%20Collaboration"
              className="px-8 py-4 rounded-full text-base font-bold text-[#050507] bg-gradient-to-r from-[#FF8432] to-[#D86317] shadow-[0_0_30px_rgba(255,122,27,0.45)] hover:shadow-[0_0_45px_rgba(255,122,27,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2.5"
            >
              <span>Start a Conversation</span>
              <i className="fa-solid fa-arrow-right text-xs"></i>
            </a>
          </div>

          <div className="mt-8 text-xs font-mono text-slate-400">
            partnerships@rwa4tokens.com · Global Ecosystem Collaboration
          </div>
        </div>
      </section>

    </div>
  );
}
