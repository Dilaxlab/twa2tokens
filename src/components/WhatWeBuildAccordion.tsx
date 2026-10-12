'use client';

import { useState } from 'react';
import Link from 'next/link';

interface PracticeArea {
  num: string;
  title: string;
  desc: string;
  href: string;
  tag: 'Active' | 'Expanding';
  icon: string;
  image: string;
  features: string[];
}

export default function WhatWeBuildAccordion() {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const practiceAreas: PracticeArea[] = [
    {
      num: '01',
      title: 'Exchange & Trading',
      desc: 'CEX, DEX, AMM, P2P, AI-powered, and white-label trading platforms.',
      href: '/services/exchange-trading',
      tag: 'Active',
      icon: 'fa-chart-line',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80',
      features: ['Centralised (CEX) & Decentralised (DEX)', '100K TPS High-Frequency Matching Engine', 'White-label Launch in 4–8 Weeks', 'Multi-currency Wallet & Liquidity Routing'],
    },
    {
      num: '02',
      title: 'DeFi Protocols',
      desc: 'Lending, yield farming, insurance, cross-chain bridges, DAO governance.',
      href: '/services/defi-protocols',
      tag: 'Active',
      icon: 'fa-link',
      image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&w=800&q=80',
      features: ['Over-collateralised Lending & Borrowing', 'Automated Liquidity Pool (AMM) Architecture', 'Cross-chain Interoperability Bridges', 'DAO Governance & Treasury Smart Contracts'],
    },
    {
      num: '03',
      title: 'Token Issuance & RWA',
      desc: 'ICO/IDO/STO/ETO, presale platforms, real-world asset tokenization, digital securities.',
      href: '/services/token-issuance',
      tag: 'Active',
      icon: 'fa-coins',
      image: 'https://images.unsplash.com/photo-1621504450181-5d356f61d307?auto=format&fit=crop&w=800&q=80',
      features: ['Regulated Security Token (STO) Platforms', 'Real-World Asset (RWA) Tokenization Engine', 'KYC/AML Accredited Investor Onboarding', 'Cap Table Management across 40+ Jurisdictions'],
    },
    {
      num: '04',
      title: 'NFT & Metaverse',
      desc: 'Marketplaces, launchpads, GameFi, metaverse worlds, NFT staking & lending.',
      href: '/services/nft-metaverse',
      tag: 'Active',
      icon: 'fa-cube',
      image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=800&q=80',
      features: ['Multi-chain NFT Marketplace (ERC-721/1155)', 'Immersive 3D Metaverse World Creation', 'GameFi Play-to-Earn Economics', 'Fractional NFT & Staking Protocols'],
    },
    {
      num: '05',
      title: 'Blockchain Engineering',
      desc: 'Custom chains, smart contracts, dApps, wallets, Layer-2, industry verticals.',
      href: '/services/blockchain-engineering',
      tag: 'Active',
      icon: 'fa-microchip',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      features: ['Custom Layer-1 & Layer-2 Rollups', 'Solidity, Rust & Vyper Smart Contracts', 'Formal Verification & Multi-step Audits', 'Cosmos SDK, Substrate, EVM & Solana'],
    },
    {
      num: '06',
      title: 'Strategy & Compliance',
      desc: 'Consulting, regulatory structuring, licensing, security auditing.',
      href: '/services/strategy-compliance',
      tag: 'Active',
      icon: 'fa-shield-halved',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80',
      features: ['Tokenomics Modelling & Simulation', 'Regulatory Licensing & Legal Opinions', 'SPV Formation & Asset Structuring', 'Enterprise Security & Smart Contract Audits'],
    },
    {
      num: '07',
      title: 'Crypto Wallet Solutions',
      desc: 'Mobile, desktop, hardware, MPC, custodial, non-custodial, and WaaS wallets.',
      href: '/services/crypto-wallets',
      tag: 'Active',
      icon: 'fa-wallet',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
      features: ['Multi-party Computation (MPC) Security', 'Cross-platform Mobile Wallets (iOS & Android)', 'Non-custodial & Account Abstraction', 'Wallet-as-a-Service (WaaS) Integration'],
    },
    {
      num: '08',
      title: 'Crypto Marketing & Growth',
      desc: 'NFT marketing, ICO campaigns, influencer, Discord, listing services.',
      href: '/services/crypto-marketing',
      tag: 'Active',
      icon: 'fa-bullhorn',
      image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=800&q=80',
      features: ['Full-cycle Token Launch Marketing', 'Top Tier Exchange Listing Advisory', 'Global Crypto KOL & Influencer Campaigns', 'Community Growth on Discord & Telegram'],
    },
    {
      num: '09',
      title: 'AI & Emerging Technologies',
      desc: 'AI crypto tokens, AI-powered exchanges, blockchain-AI integration.',
      href: '/services/ai-blockchain',
      tag: 'Expanding',
      icon: 'fa-robot',
      image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=800&q=80',
      features: ['Autonomous On-chain AI Agent Networks', 'AI Predictive Trading & Liquidity Arbitrage', 'Decentralized AI Model Compute Networks', 'Smart Contract AI Oracles & Automation'],
    },
  ];

  return (
    <section className="relative py-28 border-t border-b border-white/[0.08] bg-[#07080C]" id="services">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse,rgba(255,132,50,0.08)_0%,transparent_70%)] pointer-events-none blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="hero-pill-badge mb-4 inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A1B]"></span>
            <span>What We Build</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Nine practice areas.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A1B] via-[#FFA756] to-[#FF8432]">
              One seamless partner.
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Every capability is led by a specialist team — deep expertise without the fragmentation of working with multiple vendors. Pick a practice area, or tell us what you need and we’ll guide you.
          </p>
        </div>

        {/* Interactive Accordion Module */}
        <div className="space-y-3">
          {practiceAreas.map((item, idx) => {
            const isExpanded = activeIdx === idx;

            return (
              <div
                key={idx}
                className={`transition-all duration-500 ease-out rounded-2xl overflow-hidden border ${
                  isExpanded
                    ? 'bg-[#0E1018]/95 border-[#FF7A1B]/40 shadow-[0_16px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(255,122,27,0.12)]'
                    : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-white/15'
                }`}
              >
                {/* Accordion Row Button */}
                <button
                  type="button"
                  onClick={() => setActiveIdx(isExpanded ? -1 : idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer transition-colors"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-4 sm:gap-6 min-w-0">
                    <span
                      className={`text-sm sm:text-base font-mono font-bold transition-colors ${
                        isExpanded ? 'text-[#FF7A1B]' : 'text-slate-500'
                      }`}
                    >
                      {item.num}
                    </span>
                    <span
                      className={`text-lg sm:text-xl font-bold truncate transition-colors ${
                        isExpanded ? 'text-white' : 'text-slate-200'
                      }`}
                    >
                      {item.title}
                    </span>
                    <span
                      className={`text-[10px] sm:text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full border shrink-0 hidden sm:inline-block ${
                        item.tag === 'Expanding'
                          ? 'bg-[#FF7A1B]/15 border-[#FF7A1B]/35 text-[#FF7A1B]'
                          : 'bg-white/5 border-white/10 text-slate-300'
                      }`}
                    >
                      {item.tag}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${
                        isExpanded
                          ? 'bg-[#FF7A1B]/20 text-[#FF7A1B] rotate-180'
                          : 'bg-white/5 text-slate-400'
                      }`}
                    >
                      <i className="fa-solid fa-chevron-down text-xs"></i>
                    </div>
                  </div>
                </button>

                {/* Expanded Animated Content */}
                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-white/[0.06] animate-in fade-in-0 duration-500">
                    <div className="flex flex-col-reverse md:flex-row md:items-center gap-6 lg:gap-8 pt-4">
                      {/* Left: Content Details */}
                      <div className="md:w-3/5 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <span className="w-2 h-2 rounded-full bg-[#FF7A1B] animate-ping"></span>
                            <span className="text-xs font-mono text-[#FF7A1B] uppercase tracking-wider font-semibold">
                              Practice Area {item.num} · {item.tag}
                            </span>
                          </div>

                          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
                            {item.title}
                          </h3>

                          <p className="text-base text-slate-300 leading-relaxed mb-5">
                            {item.desc}
                          </p>

                          {/* Capability bullets */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                            {item.features.map((feat, fIdx) => (
                              <div
                                key={fIdx}
                                className="flex items-center gap-2 text-xs text-slate-300 bg-white/[0.03] border border-white/[0.06] rounded-lg px-3 py-2"
                              >
                                <i className="fa-solid fa-check text-[#FF7A1B] text-[10px] shrink-0"></i>
                                <span className="truncate">{feat}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* CTA Link */}
                        <div className="pt-2">
                          <Link
                            href={item.href}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#FF8432] to-[#D86317] text-[#050507] font-bold text-sm shadow-[0_0_25px_rgba(255,122,27,0.35)] hover:shadow-[0_0_35px_rgba(255,122,27,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all"
                          >
                            <span>Learn more</span>
                            <i className="fa-solid fa-arrow-right text-xs"></i>
                          </Link>
                        </div>
                      </div>

                      {/* Right: Rich Image / Visual Showcase */}
                      <div className="md:w-2/5 max-h-[300px] h-[260px] sm:h-[300px] rounded-xl overflow-hidden relative border border-white/10 group">
                        <img
                          src={item.image}
                          alt={item.title}
                          loading="lazy"
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050507]/90 via-[#050507]/20 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-black/60 backdrop-blur-md border border-white/15 flex items-center justify-center text-[#FF7A1B]">
                              <i className={`fa-solid ${item.icon} text-sm`}></i>
                            </div>
                            <span className="text-xs font-semibold text-white tracking-wide">
                              {item.title}
                            </span>
                          </div>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#FF7A1B]/20 text-[#FF7A1B] border border-[#FF7A1B]/40">
                            {item.num}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
