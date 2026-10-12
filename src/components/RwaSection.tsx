'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';

interface OfferingCard {
  category: 'assets' | 'issuance' | 'compliance';
  title: string;
  desc: string;
  regTag: string;
  status: string;
  statusType: 'active' | 'pending';
  minInvestment: string;
  subLabel: string;
  bannerType: string;
  imageSrc?: string;
}

export default function RwaSection() {
  const [activeTab, setActiveTab] = useState<'assets' | 'issuance' | 'compliance'>('assets');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const offerings: OfferingCard[] = [
    // ── Asset Classes (8) ──
    {
      category: 'assets',
      title: 'Real Estate',
      desc: 'Residential, commercial, and fractional property ownership with rent and revenue distribution.',
      regTag: 'Reg D 506c',
      status: 'Active',
      statusType: 'active',
      minInvestment: '$1,000',
      subLabel: 'Min. Investment',
      bannerType: 'real-estate',
      imageSrc: '/images/1.jpeg',
    },
    {
      category: 'assets',
      title: 'Commodities & Metals',
      desc: 'Gold, silver, and physical commodities backed by verifiable, audited reserves.',
      regTag: 'Reg S / STO',
      status: 'Active',
      statusType: 'active',
      minInvestment: '$500',
      subLabel: 'Min. Investment',
      bannerType: 'commodities',
      imageSrc: '/images/2.jpeg',
    },
    {
      category: 'assets',
      title: 'Treasuries & Bonds',
      desc: 'Tokenized government treasuries, money-market instruments, and fixed-income products.',
      regTag: 'Reg D / S',
      status: 'Active',
      statusType: 'active',
      minInvestment: '$10,000',
      subLabel: 'Min. Investment',
      bannerType: 'treasuries',
      imageSrc: '/images/3.jpeg',
    },
    {
      category: 'assets',
      title: 'Funds & Private Equity',
      desc: 'Hedge funds, venture funds, and private equity vehicles with on-chain NAV and automated reporting.',
      regTag: 'Reg D 506c',
      status: 'Active',
      statusType: 'active',
      minInvestment: '$25,000',
      subLabel: 'Min. Investment',
      bannerType: 'funds',
      imageSrc: '/images/4.jpeg',
    },
    {
      category: 'assets',
      title: 'Private Credit & Debt',
      desc: 'Loans, receivables, and structured debt instruments with transparent servicing.',
      regTag: 'Senior Pool',
      status: 'Active',
      statusType: 'active',
      minInvestment: '$5,000',
      subLabel: 'Min. Investment',
      bannerType: 'credit',
      imageSrc: '/images/5.jpeg',
    },
    {
      category: 'assets',
      title: 'IP & Royalties',
      desc: 'Music, film, patents, and revenue-sharing rights tokenized as income-bearing assets.',
      regTag: 'ERC-1155',
      status: 'Active',
      statusType: 'active',
      minInvestment: '$250',
      subLabel: 'Min. Investment',
      bannerType: 'royalties',
      imageSrc: '/images/6.jpeg',
    },
    {
      category: 'assets',
      title: 'Art & Collectibles',
      desc: 'High-value art, luxury goods, and collectibles with fractional ownership.',
      regTag: 'Museum Grade',
      status: 'Active',
      statusType: 'active',
      minInvestment: '$1,000',
      subLabel: 'Min. Investment',
      bannerType: 'art',
      imageSrc: '/images/7.jpeg',
    },
    {
      category: 'assets',
      title: 'Carbon & Environmental',
      desc: 'Carbon credits and impact assets with transparent, verifiable on-chain provenance.',
      regTag: 'Verra / Gold Std',
      status: 'Active',
      statusType: 'active',
      minInvestment: '$100',
      subLabel: 'Min. Investment',
      bannerType: 'carbon',
      imageSrc: '/images/8.jpeg',
    },

    // ── Issuance & Infrastructure (5) ──
    {
      category: 'issuance',
      title: 'SPV Setup & Legal Wrappers',
      desc: 'Special-purpose vehicle formation and tokenization wrappers connecting physical assets to digital securities.',
      regTag: '40+ Jurisdictions',
      status: 'Active',
      statusType: 'active',
      minInvestment: 'Turnkey',
      subLabel: 'Setup Speed',
      bannerType: 'spv',
      imageSrc: '/images/2-1.jpeg',
    },
    {
      category: 'issuance',
      title: 'STO Launchpad Engine',
      desc: 'End-to-end security-token offering platform for compliant primary offerings and white-label investor onboarding.',
      regTag: 'ERC-3643 / T-REX',
      status: 'Active',
      statusType: 'active',
      minInvestment: 'Turnkey',
      subLabel: 'Deployment',
      bannerType: 'sto',
      imageSrc: '/images/22.jpeg',
    },
    {
      category: 'issuance',
      title: 'Token Lifecycle Management',
      desc: 'Programmable vesting schedules, claim portals, cap-table administration, and automated corporate actions.',
      regTag: 'Smart Governance',
      status: 'Active',
      statusType: 'active',
      minInvestment: 'Automated',
      subLabel: 'Administration',
      bannerType: 'lifecycle',
      imageSrc: '/images/23.jpeg',
    },
    {
      category: 'issuance',
      title: 'Secondary Marketplace & ATS',
      desc: 'Compliant secondary trading venues and liquidity protocols giving tokenized real assets institutional depth.',
      regTag: 'ATS / MTF Ready',
      status: 'Active',
      statusType: 'active',
      minInvestment: 'Institutional',
      subLabel: 'Execution',
      bannerType: 'secondary',
      imageSrc: '/images/24.jpeg',
    },
    {
      category: 'issuance',
      title: 'Cross-Chain Liquidity & Bridges',
      desc: 'Multi-chain interoperability, atomic swaps, and unified liquidity routing across EVM and institutional rollups.',
      regTag: 'CCIP / LayerZero',
      status: 'Active',
      statusType: 'active',
      minInvestment: 'Decentralized',
      subLabel: 'Routing',
      bannerType: 'bridges',
      imageSrc: '/images/25.jpeg',
    },

    // ── Compliance & Investor Ops (5) ──
    {
      category: 'compliance',
      title: 'Investor Identity & KYC/AML',
      desc: 'Reusable on-chain zero-knowledge identity, sanction screening, and automated investor qualification.',
      regTag: 'ERC-735 / DID',
      status: 'Active',
      statusType: 'active',
      minInvestment: 'Automated',
      subLabel: 'Verification',
      bannerType: 'identity',
      imageSrc: '/images/31.jpeg',
    },
    {
      category: 'compliance',
      title: 'Smart Cap Table & Whitelisting',
      desc: 'Automated real-time cap-table synchronization, transfer restrictions, and jurisdiction-based investor locks.',
      regTag: 'ERC-1400',
      status: 'Active',
      statusType: 'active',
      minInvestment: 'Real-time',
      subLabel: 'Compliance',
      bannerType: 'captable',
      imageSrc: '/images/32.jpeg',
    },
    {
      category: 'compliance',
      title: 'Distribution & Dividend Engine',
      desc: 'Direct multi-currency USDC and fiat dividend streaming, yield distribution, and automated tax withholding.',
      regTag: 'Smart Waterfalls',
      status: 'Active',
      statusType: 'active',
      minInvestment: 'Automated',
      subLabel: 'Tax 1099/K-1',
      bannerType: 'distribution',
      imageSrc: '/images/33.jpeg',
    },
    {
      category: 'compliance',
      title: 'NAV Tracking & Reporting',
      desc: 'Real-time portfolio valuation, audited Net Asset Value feeds, and self-service multi-currency investor dashboards.',
      regTag: 'Chainlink Oracle',
      status: 'Active',
      statusType: 'active',
      minInvestment: 'Daily Feeds',
      subLabel: 'NAV Audit',
      bannerType: 'nav',
      imageSrc: '/images/34.jpeg',
    },
    {
      category: 'compliance',
      title: 'Institutional MPC Custody',
      desc: 'Bank-grade digital asset custody, multi-party computation (MPC) keys, and segregated treasury vault architecture.',
      regTag: 'SOC 2 Type II',
      status: 'Active',
      statusType: 'active',
      minInvestment: 'Bank Grade',
      subLabel: 'Multi-Sig / MPC',
      bannerType: 'custody',
      imageSrc: '/images/35.jpeg',
    },
  ];

  const currentCards = offerings.filter(c => c.category === activeTab);

  const tabs: { key: 'assets' | 'issuance' | 'compliance'; label: string }[] = [
    { key: 'assets', label: 'Asset Classes' },
    { key: 'issuance', label: 'Issuance & Infrastructure' },
    { key: 'compliance', label: 'Compliance & Investor Ops' },
  ];

  const handlePrevTab = () => {
    const curIdx = tabs.findIndex(t => t.key === activeTab);
    const prevIdx = (curIdx - 1 + tabs.length) % tabs.length;
    setActiveTab(tabs[prevIdx].key);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  const handleNextTab = () => {
    const curIdx = tabs.findIndex(t => t.key === activeTab);
    const nextIdx = (curIdx + 1) % tabs.length;
    setActiveTab(tabs[nextIdx].key);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -380, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 380, behavior: 'smooth' });
    }
  };

  // Helper to render crisp banner art matching tZERO cards
  const renderBanner = (type: string, title: string, imageSrc?: string) => {
    if (imageSrc) {
      return (
        <div className="w-full h-full relative overflow-hidden group/img bg-[#0c1424]">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141d30]/80 via-transparent to-black/10"></div>
        </div>
      );
    }

    switch (type) {
      case 'commodities':
        // C3 Bullion gold geometric pattern like in screenshot
        return (
          <div className="w-full h-full bg-[#1b1710] relative flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#b89758_1px,transparent_1px)] [background-size:12px_12px] opacity-30"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-[#2a1f0a] via-[#483713] to-[#1a1408] opacity-80"></div>
            <div className="relative z-10 flex flex-col items-center gap-1.5">
              <div className="w-12 h-12 rounded-full border border-[#eab308]/60 bg-[#eab308]/15 flex items-center justify-center text-[#fbbf24] text-xl shadow-[0_0_20px_rgba(234,179,8,0.35)]">
                <i className="fa-solid fa-cubes-stacked"></i>
              </div>
              <span className="text-xs font-serif font-bold tracking-widest text-[#fde047] uppercase">Bullion &amp; Metals</span>
            </div>
          </div>
        );

      case 'sto':
      case 'real-estate':
        // Kondoo Digital fiery plasma / glowing nebula style from screenshot
        return (
          <div className="w-full h-full bg-[#0a0710] relative flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,100,20,0.45)_0%,rgba(180,40,0,0.15)_45%,transparent_75%)] animate-pulse"></div>
            <div className="absolute inset-0 bg-[radial-gradient(#ff6a00_1px,transparent_1px)] [background-size:16px_16px] opacity-25"></div>
            <div className="relative z-10 flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#ff5500] to-[#ffaa00] flex items-center justify-center text-black font-black text-xl shadow-[0_0_25px_rgba(255,115,0,0.6)]">
                <i className={type === 'real-estate' ? 'fa-solid fa-city' : 'fa-solid fa-rocket'}></i>
              </div>
              <span className="text-xs font-mono font-bold tracking-wider text-orange-200 uppercase">{title}</span>
            </div>
          </div>
        );

      case 'lifecycle':
      case 'treasuries':
        // KNOWPIA 3D ribbon / blue holographic style from screenshot
        return (
          <div className="w-full h-full bg-[#080e1c] relative flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.35)_0%,rgba(14,116,144,0.15)_50%,transparent_75%)]"></div>
            <div className="relative z-10 flex flex-col items-center gap-1.5">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#38bdf8] via-[#0284c7] to-[#0369a1] flex items-center justify-center text-white text-xl shadow-[0_0_25px_rgba(56,189,248,0.5)]">
                <i className="fa-solid fa-chart-line"></i>
              </div>
              <span className="text-xs font-bold tracking-wider text-cyan-200 uppercase">{title}</span>
            </div>
          </div>
        );

      case 'carbon':
        return (
          <div className="w-full h-full bg-[#06140e] relative flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.35)_0%,transparent_70%)]"></div>
            <div className="relative z-10 flex flex-col items-center gap-1.5">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#16a34a] to-[#4ade80] flex items-center justify-center text-black text-xl shadow-[0_0_20px_rgba(34,197,94,0.4)]">
                <i className="fa-solid fa-leaf"></i>
              </div>
              <span className="text-xs font-mono font-bold text-emerald-300 uppercase">Carbon &amp; ESG</span>
            </div>
          </div>
        );

      default:
        // Elegant dark blue metallic geometric banner
        return (
          <div className="w-full h-full bg-[#0d1527] relative flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.25)_0%,transparent_70%)]"></div>
            <div className="relative z-10 flex flex-col items-center gap-1.5">
              <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white text-lg shadow-lg">
                <i className="fa-solid fa-shield-halved"></i>
              </div>
              <span className="text-xs font-mono font-bold text-slate-300 uppercase">{title}</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section className="py-24 relative bg-[#070b14] text-white overflow-hidden border-t border-b border-white/[0.08]" id="rwa">
      {/* Deep blue gradient glow in background like tZERO */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-[radial-gradient(ellipse,rgba(30,58,138,0.25)_0%,transparent_70%)] blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="hero-pill-badge mb-4 inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A1B]"></span>
            <span className="text-xs font-semibold tracking-widest uppercase text-slate-300">
              RWA Tokenization — End to End
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Your real-world asset,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8432] via-[#FFA756] to-[#FF8432]">
              fully on-chain.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed font-normal">
            Tokenization is our namesake and our deepest specialty. We take an asset from legal structuring through
            issuance, distribution, and lifecycle management — so it stays compliant, liquid, and investable.
          </p>
        </div>

        {/* ── tZERO Style Carousel Header with Arrows & Clean Text Tabs ── */}
        <div className="flex items-center justify-center gap-4 sm:gap-8 pb-6 border-b border-white/15 mb-10 select-none">
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={handlePrevTab}
            aria-label="Previous Category"
            className="w-9 h-9 rounded-full border border-white/25 bg-white/5 hover:bg-white/15 text-white/80 hover:text-white flex items-center justify-center transition-all cursor-pointer shrink-0"
          >
            <i className="fa-solid fa-arrow-left text-sm"></i>
          </button>

          {/* Text Tabs */}
          <div className="flex items-center gap-6 sm:gap-12 overflow-x-auto no-scrollbar py-1">
            {tabs.map(tab => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => {
                    setActiveTab(tab.key);
                    if (scrollContainerRef.current) {
                      scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                    }
                  }}
                  className={`text-xl sm:text-3xl font-bold tracking-tight whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-white scale-100'
                      : 'text-slate-500 hover:text-slate-300 scale-95'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={handleNextTab}
            aria-label="Next Category"
            className="w-9 h-9 rounded-full border border-white/25 bg-white/5 hover:bg-white/15 text-white/80 hover:text-white flex items-center justify-center transition-all cursor-pointer shrink-0"
          >
            <i className="fa-solid fa-arrow-right text-sm"></i>
          </button>
        </div>

        {/* ── Cards Slider / Carousel (Exact Look as Uploaded Screenshot) ── */}
        <div className="relative group/carousel">
          {/* Floating Left Scroll Arrow (Desktop) */}
          <button
            type="button"
            onClick={scrollLeft}
            aria-label="Scroll Left"
            className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#0f172a]/90 border border-white/20 text-white shadow-xl items-center justify-center hover:bg-white/20 transition-all cursor-pointer"
          >
            <i className="fa-solid fa-chevron-left text-sm"></i>
          </button>

          {/* Horizontal Slider */}
          <div
            ref={scrollContainerRef}
            className="flex items-stretch gap-6 overflow-x-auto scroll-smooth pb-6 pt-2 px-1 no-scrollbar"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {currentCards.map((card, idx) => (
              <div
                key={idx}
                style={{ scrollSnapAlign: 'start' }}
                className="w-[300px] sm:w-[350px] shrink-0 rounded-2xl bg-[#141d30]/90 border border-white/15 p-5 flex flex-col justify-between hover:border-white/35 hover:shadow-[0_15px_35px_rgba(0,0,0,0.7)] transition-all duration-300"
              >
                <div>
                  {/* Top Banner Image (Aspect Video like tZERO image) */}
                  <div className="aspect-[16/10] w-full rounded-xl overflow-hidden mb-4 border border-white/10 shadow-inner">
                    {renderBanner(card.bannerType, card.title, card.imageSrc)}
                  </div>

                  {/* Badges Row (Reg Tag on Left, Status Dot on Right) */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full border border-white/20 bg-white/5 text-[11px] font-mono font-medium text-slate-300">
                      {card.regTag}
                    </span>

                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-200">
                      <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse"></span>
                      {card.status}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                    {card.title}
                  </h3>

                  {/* Description (Exact User Content) */}
                  <p className="text-xs sm:text-[13px] text-slate-300/90 leading-relaxed font-normal min-h-[58px]">
                    {card.desc}
                  </p>
                </div>

                {/* Bottom Row: Min Investment + Get Started Button */}
                <div className="mt-5 pt-4 border-t border-white/10 flex items-end justify-between gap-3">
                  
                  <Link
                    href="/contact"
                    className="px-4 py-2 rounded-lg border border-white/20 bg-white/5 hover:bg-white/15 hover:border-white/40 text-white text-xs font-semibold flex items-center gap-1.5 transition-all"
                  >
                    <span>Get Started</span>
                    <i className="fa-solid fa-chevron-right text-[10px]"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Floating Right Scroll Arrow (Desktop) */}
          <button
            type="button"
            onClick={scrollRight}
            aria-label="Scroll Right"
            className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#0f172a]/90 border border-white/20 text-white shadow-xl items-center justify-center hover:bg-white/20 transition-all cursor-pointer"
          >
            <i className="fa-solid fa-chevron-right text-sm"></i>
          </button>
        </div>

        {/* Carousel Pagination Indicator Hint */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <span className="text-xs text-slate-400 font-mono">
            Showing {currentCards.length} {tabs.find(t => t.key === activeTab)?.label} — Swipe or use arrows to explore
          </span>
        </div>

      </div>
    </section>
  );
}
