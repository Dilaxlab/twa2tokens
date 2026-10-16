'use client';

import { useState } from 'react';
import Link from 'next/link';

interface PracticeArea {

  title: string;
  desc: string;
  href: string;

  image: string;
}

export default function WhatWeBuildAccordion() {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const practiceAreas: PracticeArea[] = [
    {
      title: 'Exchange & Trading',
      desc: 'CEX, DEX, AMM, P2P, AI-powered, and white-label trading platforms.',
      href: '/services/exchange-trading',

      image:
        'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1400&q=80',
    },
    {
      title: 'DeFi Protocols',
      desc: 'Lending, yield farming, insurance, cross-chain bridges, DAO governance.',
      href: '/services/defi-protocols',

      image:
        'https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&w=1400&q=80',
    },
    {
      title: 'Token Issuance & RWA',
      desc: 'ICO/IDO/STO/ETO, presale platforms, real-world asset tokenization, digital securities.',
      href: '/services/token-issuance',

      image: '/images/Token Issuance & RWA.jpeg',
    },
    {
      title: 'NFT & Metaverse',
      desc: 'Marketplaces, launchpads, GameFi, metaverse worlds, NFT staking & lending.',
      href: '/services/nft-metaverse',

      image:
        'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=1400&q=80',
    },
    {
      title: 'Blockchain Engineering',
      desc: 'Custom chains, smart contracts, dApps, wallets, Layer-2, industry verticals.',
      href: '/services/blockchain-engineering',

      image:
        'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80',
    },
    {
      title: 'Strategy & Compliance',
      desc: 'Consulting, regulatory structuring, licensing, security auditing.',
      href: '/services/strategy-compliance',

      image:
        'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=80',
    },
    {
      title: 'Crypto Wallet Solutions',
      desc: 'Mobile, desktop, hardware, MPC, custodial, non-custodial, and WaaS wallets.',
      href: '/services/crypto-wallets',

      image:
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1400&q=80',
    },
    {
      title: 'Crypto Marketing & Growth',
      desc: 'NFT marketing, ICO campaigns, influencer, Discord, listing services.',
      href: '/services/crypto-marketing',

      image:
        'https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=1400&q=80',
    },
    {
      title: 'AI & Emerging Technologies',
      desc: 'AI crypto tokens, AI-powered exchanges, blockchain-AI integration.',
      href: '/services/ai-blockchain',

      image:
        'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=1400&q=80',
    },
  ];

  return (
    <section
      className="py-28 relative bg-[#07090E] text-white overflow-hidden border-t border-b border-white/[0.08]"
      id="services"
    >
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-[radial-gradient(ellipse,rgba(255,132,50,0.08)_0%,transparent_70%)] blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Top Header Text (Matching tZERO Style) */}
        <div className="max-w-4xl mb-16">
          <div className="hero-pill-badge mb-4 inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A1B]"></span>
            <span className="text-xs font-semibold tracking-widest uppercase text-slate-300">
              What We Build.
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Nine practice areas.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8432] via-[#FFA756] to-[#FF8432]">
               One seamless partner.
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed font-normal max-w-3xl">
            Every capability is led by a specialist team — deep expertise without the fragmentation
            of working with multiple vendors. Pick a practice area, or tell us what you need and
            we’ll guide you.
          </p>
        </div>

        {/* Two-Column Layout (Matching uploaded image) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Pill Badge */}
          <div className="lg:col-span-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Value Highlights</span>
            </div>
          </div>

          {/* Right Column: Interactive Hover List & Expanding Card */}
          <div className="lg:col-span-9 space-y-0">
            {practiceAreas.map((item, idx) => {
              const isExpanded = activeIdx === idx;

              return (
                <div
                  key={idx}
                  onMouseEnter={() => setActiveIdx(idx)}
                  className="transition-all duration-300 ease-out border-b border-white/10 first:border-t"
                >
                  {isExpanded ? (
                    /* ── EXPANDED CARD (Exact image and layout from each service page) ── */
                    <div className="my-4 rounded-2xl bg-[#0f1524] border border-white/20 shadow-[0_20px_45px_rgba(0,0,0,0.85)] overflow-hidden transition-all duration-500 ease-out animate-in fade-in-50">
                      <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
                        {/* Left Side: Content Details */}
                        <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                          <div>
                            {/* Number & Status */}


                            {/* Title */}
                            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug mb-3">
                              {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm text-slate-300 leading-relaxed font-normal mb-6">
                              {item.desc}
                            </p>
                          </div>

                          {/* CTA Button */}
                          <div>
                            <Link
                              href={item.href}
                              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FF8432] to-[#D86317] text-[#050507] text-xs font-bold hover:shadow-[0_0_25px_rgba(255,122,27,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all"
                            >
                              <span>Learn more</span>
                              <i className="fa-solid fa-arrow-right text-[10px]"></i>
                            </Link>
                          </div>
                        </div>

                        {/* Right Side: Exact Image from that Service Page */}
                        <div className="md:col-span-5 min-h-[220px] sm:min-h-[260px] relative overflow-hidden rounded-xl border border-white/10 group/img m-3 sm:m-4 bg-black/40">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-700"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1524]/90 via-[#0f1524]/20 to-transparent"></div>
                          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-slate-300">
                            <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-xs text-white">
                              {item.title}
                            </span>
                            <span className="text-[#FF8432] font-bold">{item.num}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* ── COLLAPSED ROW (Simple text row with smooth hover trigger) ── */
                    <button
                      type="button"
                      onClick={() => setActiveIdx(idx)}
                      onMouseEnter={() => setActiveIdx(idx)}
                      className="w-full py-5 px-3 flex items-center justify-between text-left cursor-pointer group transition-all"
                    >
                      <div className="flex items-center gap-5">
                        <span className="text-xs font-mono font-bold text-slate-500 group-hover:text-[#FF8432] transition-colors">
                          {item.num}
                        </span>
                        <span className="text-lg sm:text-xl font-bold text-slate-300 group-hover:text-white transition-colors">
                          {item.title}
                        </span>
                      </div>


                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
