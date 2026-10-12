import type { Metadata } from 'next';
import Link from 'next/link';
import RwaSection from '@/components/RwaSection';
import WhatWeBuildAccordion from '@/components/WhatWeBuildAccordion';

export const metadata: Metadata = {
  title: 'Rwa2tokens — The Full-Stack Web3 Tokenization Partner',
  description:
    'Real-world assets securitization and monetization. From token design to trading infrastructure. From DeFi protocols to real-world asset issuance.',
};

export default function HomePage() {
  const stats = [
    { num: '400+', label: 'Engineers' },
    { num: '1,000+', label: 'Projects' },
    { num: '40+', label: 'Jurisdictions' },
  ];

  const packages = [
    {
      num: 'Suite 01',
      title: 'RWA Tokenization Suite',
      desc: 'SPV structuring, token issuance, investor dashboard, and compliant distribution — everything needed to bring a single asset on-chain.',
    },
    {
      num: 'Suite 02',
      title: 'Security Token (STO) Suite',
      desc: 'Launchpad, accreditation and KYC, primary issuance, and a compliant secondary marketplace.',
    },
    {
      num: 'Suite 03',
      title: 'Exchange-in-a-Box',
      desc: 'White-label CEX or DEX with matching engine, wallets, liquidity setup, and admin panel.',
    },
    {
      num: 'Suite 04',
      title: 'DeFi Protocol Suite',
      desc: 'Lending and borrowing, staking, and yield modules with on-chain governance and audited contracts.',
    },
    {
      num: 'Suite 05',
      title: 'Token Launch Suite',
      desc: 'Tokenomics design, smart contracts, presale/IDO platform, vesting, and listing support.',
    },
  ];

  const industries = [
    { icon: 'fa-city', name: 'Real Estate & Property' },
    { icon: 'fa-piggy-bank', name: 'Banking, Fintech & Payments' },
    { icon: 'fa-briefcase', name: 'Funds, Asset Management & Private Equity' },
    { icon: 'fa-oil-can', name: 'Commodities & Natural Resources' },
    { icon: 'fa-file-shield', name: 'Insurance & Private Credit' },
    { icon: 'fa-diamond', name: 'Art, Luxury & Collectibles' },
    { icon: 'fa-solar-panel', name: 'Energy, Carbon & Sustainability' },
    { icon: 'fa-gamepad', name: 'Gaming, Entertainment & IP' },
  ];

  const chains = [
    { name: 'Ethereum', icon: 'fa-brands fa-ethereum' },
    { name: 'Solana', icon: 'fa-solid fa-circle-dot' },
    { name: 'Polygon', icon: 'fa-solid fa-hexagon-nodes' },
    { name: 'BNB Chain', icon: 'fa-solid fa-link' },
    { name: 'Avalanche', icon: 'fa-solid fa-mountain-sun' },
    { name: 'Arbitrum & Layer-2s', icon: 'fa-solid fa-layer-group' },
    { name: 'Cosmos', icon: 'fa-solid fa-atom' },
    { name: 'Polkadot / Substrate', icon: 'fa-solid fa-circle-nodes' },
    { name: 'TON', icon: 'fa-brands fa-telegram' },
    { name: 'Hyperledger', icon: 'fa-solid fa-building-lock' },
  ];

  const steps = [
    {
      num: '1',
      title: 'Discovery',
      desc: 'Tell us what you’re building. We’ll match you with the right specialist venture and schedule an initial consultation — typically within 24 hours.',
    },
    {
      num: '2',
      title: 'Scoping & Architecture',
      desc: 'We define technical architecture, tokenomics model (if applicable), compliance requirements, and delivery roadmap. You receive a detailed proposal with milestones and deliverables.',
    },
    {
      num: '3',
      title: 'Build & Iterate',
      desc: 'Our specialist team builds, tests, and iterates. You have direct access to the development team through regular sprint reviews. Security auditing runs in parallel — not as an afterthought.',
    },
    {
      num: '4',
      title: 'Launch & Scale',
      desc: 'We handle mainnet deployment, liquidity setup, exchange listing support, and post-launch monitoring. Ongoing maintenance and scaling support available.',
    },
  ];

  const engagementModels = [
    {
      title: 'End-to-end Build',
      desc: 'We own delivery from architecture to launch — ideal when you want a single accountable partner.',
      icon: 'fa-cube',
    },
    {
      title: 'White-label Deployment',
      desc: 'Launch on one of our productized suites and brand it as your own.',
      icon: 'fa-rocket',
    },
    {
      title: 'Dedicated Team / Staff Augmentation',
      desc: 'Embed our specialists into your team to extend in-house capacity without the hiring overhead.',
      icon: 'fa-users-gear',
    },
    {
      title: 'Advisory & Architecture',
      desc: 'Tokenomics, compliance structuring, and technical architecture when you need direction before you build.',
      icon: 'fa-compass-drafting',
    },
  ];

  const whyChooseUs = [
    {
      title: 'Depth without fragmentation.',
      desc: 'Most blockchain agencies specialise in one area and outsource the rest. We house specialists across every major Web3 discipline under a single roof — so your project doesn’t fall apart at the handoffs.',
      icon: 'fa-layer-group',
    },
    {
      title: 'Built for every stage.',
      desc: 'Whether you’re a founder with a whitepaper or an institution preparing to tokenize a $50M asset portfolio, our ventures are sized and structured to serve you.',
      icon: 'fa-chart-line',
    },
    {
      title: 'Compliance isn’t an afterthought.',
      desc: 'With dedicated regulatory expertise spanning 40+ jurisdictions and institutional-grade KYC/AML infrastructure, we build projects that regulators recognise and investors trust — from day one.',
      icon: 'fa-scale-balanced',
    },
    {
      title: 'Speed with substance.',
      desc: 'Our white-label products mean you can launch a fully functional exchange, NFT platform, or DeFi product in weeks, not months — without sacrificing quality or security.',
      icon: 'fa-bolt',
    },
    {
      title: 'Interoperable by design.',
      desc: 'We build on open standards and support all major chains — EVM-compatible, Solana, Cosmos, Substrate, Hyperledger — so your product isn’t locked into a single ecosystem.',
      icon: 'fa-network-wired',
    },
    {
      title: 'Security-first engineering.',
      desc: 'Every smart contract we deploy undergoes mandatory multi-step security auditing — automated analysis, manual review, and formal verification before any mainnet deployment.',
      icon: 'fa-shield-halved',
    },
  ];

  return (
    <div className="min-h-screen bg-[#050507] text-white selection:bg-[#FF7A1B] selection:text-black overflow-x-hidden">
      {/* ════════════════ HERO SECTION ════════════════ */}
      <section className="relative pt-32 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#050507] flex items-center">
        {/* Deep Space Atmosphere & Amber Glow Behind Globe */}
        <div className="absolute top-1/2 -translate-y-1/2 right-[-5%] lg:right-[0%] w-[700px] lg:w-[950px] h-[700px] lg:h-[950px] bg-[radial-gradient(circle,rgba(255,132,50,0.28)_0%,rgba(216,99,23,0.12)_45%,transparent_70%)] pointer-events-none blur-3xl"></div>
        <div className="absolute top-0 right-1/4 w-[500px] h-[400px] bg-[radial-gradient(ellipse,rgba(255,132,50,0.12)_0%,transparent_70%)] pointer-events-none blur-2xl"></div>
        <div className="hero-grid opacity-25"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(5,5,7,0.85)_100%)] pointer-events-none"></div>

        <div className="max-w-[1380px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 xl:col-span-6 z-10 max-w-xl">
              {/* Pill Badge */}
              <div className="hero-pill-badge mb-6 inline-flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-[#FF8432] shrink-0">
                  <path d="M7 0L8.5 5.5L14 7L8.5 8.5L7 14L5.5 8.5L0 7L5.5 5.5L7 0Z" fill="currentColor" />
                </svg>
                <span className="text-[12px] sm:text-[13px] font-normal text-slate-200">
                  Web3 Development · DeFi Protocols · Asset Tokenization · Blockchain Engineering
                </span>
              </div>

              {/* Bold Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[58px] xl:text-[64px] font-extrabold text-white tracking-tight leading-[1.08] mb-5">
                The Full-Stack Web3<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8432] via-[#FFA756] to-[#FF8432]">
                  Tokenization Partner.
                </span>
              </h1>

              {/* Sub-Headline */}
              <h2 className="text-xl sm:text-2xl lg:text-[25px] font-semibold text-slate-100 tracking-tight leading-snug mb-5">
                Real-world assets securitization and monetization
              </h2>

              {/* Descriptions */}
              <div className="space-y-4 mb-8">
                <p className="text-[15px] sm:text-[16px] text-slate-300 leading-relaxed font-normal">
                  From token design to trading infrastructure. From DeFi protocols to real-world asset issuance. We build the Web3 economy — end to end.
                </p>
                <p className="text-[14px] sm:text-[15px] text-slate-400 leading-relaxed font-normal">
                  We bring together specialist teams under one ecosystem. Whether you’re launching a token, building a decentralised exchange, tokenizing real-world assets, or scaling a Web3 product — we have the depth, the architecture, and the infrastructure to deliver it.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a href="#services" className="hero-btn-primary">
                  <span>Explore Services →</span>
                </a>
                <Link href="/contact" className="hero-btn-secondary">
                  <span>Book a Discovery Call</span>
                </Link>
              </div>
            </div>

            {/* Right Visual: Large Glowing Crystal Earth Globe */}
            <div className="lg:col-span-6 xl:col-span-6 relative flex justify-center lg:justify-end items-center">
              <div className="relative w-full max-w-[480px] sm:max-w-[560px] md:max-w-[620px] lg:max-w-[680px] xl:max-w-[760px] aspect-square flex items-center justify-center lg:-mr-6 xl:-mr-12">
                <div className="absolute inset-4 rounded-full bg-[radial-gradient(circle,#FF8432_0%,rgba(216,99,23,0.35)_45%,transparent_72%)] opacity-45 blur-3xl animate-pulse pointer-events-none"></div>
                <div className="absolute -inset-10 rounded-full bg-[radial-gradient(circle,rgba(255,132,50,0.18)_0%,transparent_65%)] blur-3xl pointer-events-none"></div>

                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <img
                    src="/images/crystal-globe-sphere.png"
                    alt="Crystal Earth Globe"
                    className="w-full h-full object-contain filter drop-shadow-[0_0_55px_rgba(255,132,50,0.5)] transition-transform duration-700 hover:scale-[1.02]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════ STATS STRIP ════════════════ */}
      <section className="relative py-12 border-t border-b border-white/[0.08] bg-[#090A0E]/70 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {stats.map((s, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col items-center justify-center text-center hover:border-[#FF7A1B]/30 transition-all hover:bg-white/[0.04]"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A1B] to-[#FFA756] tracking-tight mb-2">
                  {s.num}
                </div>
                <div className="text-sm sm:text-base font-semibold text-slate-200 tracking-wide">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ WHAT WE BUILD (NINE PRACTICE AREAS ACCORDION) ════════════════ */}
      <WhatWeBuildAccordion />

      {/* ════════════════ RWA TOKENIZATION — END TO END ════════════════ */}
      <RwaSection />

      {/* ════════════════ LAUNCH PACKAGES ════════════════ */}
      <section className="relative py-28" id="packages">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="hero-pill-badge mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A1B]"></span>
              <span>Launch Packages</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Productized suites.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A1B] to-[#FFA756]">
                Live in weeks.
              </span>
            </h2>
            <p className="mt-4 text-slate-300 text-base sm:text-lg">
              For teams that want a faster path to market, we package our most-requested builds into fixed-scope launch suites. Each suite is white-label, audit-ready, and configurable — a proven starting point you own outright, not a template you rent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg, idx) => (
              <div key={idx} className="glass-card p-8 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono font-bold text-[#FF7A1B] uppercase tracking-wider mb-2">
                    {pkg.num}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{pkg.title}</h3>
                  <p className="text-sm text-slate-300/80 leading-relaxed mb-6">{pkg.desc}</p>
                </div>
                <Link
                  href="/contact"
                  className="text-xs font-semibold text-slate-200 hover:text-[#FF7A1B] flex items-center gap-1.5 transition-colors pt-4 border-t border-white/[0.08]"
                >
                  <span>Request Scope</span>
                  <i className="fa-solid fa-chevron-right text-[9px]"></i>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ INDUSTRIES WE SERVE ════════════════ */}
      <section className="relative py-28 border-t border-b border-white/[0.08] bg-[#08090D]/60" id="industries">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="hero-pill-badge mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A1B]"></span>
              <span>Industries We Serve</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Built for the sectors bringing<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A1B] to-[#FFA756]">
                real value on-chain.
              </span>
            </h2>
            <p className="mt-4 text-slate-300 text-base sm:text-lg">
              Tokenization looks different in every industry. We tailor architecture, compliance, and investor experience to the asset class you operate in.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {industries.map((ind, idx) => (
              <div key={idx} className="glass-card p-6 flex flex-col items-center text-center group">
                <div className="w-12 h-12 rounded-2xl bg-[#FF7A1B]/10 border border-[#FF7A1B]/20 flex items-center justify-center text-[#FF7A1B] text-xl mb-4 group-hover:scale-110 transition-transform">
                  <i className={`fa-solid ${ind.icon}`}></i>
                </div>
                <span className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                  {ind.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ SUPPORTED CHAINS & STANDARDS ════════════════ */}
      <section className="relative py-24 border-b border-white/[0.08]" id="chains">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="hero-pill-badge mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A1B]"></span>
              <span>Supported Chains &amp; Standards</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Interoperable <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A1B] to-[#FFA756]">by default.</span>
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base">
              We build on open standards and deploy across the ecosystems your project and your investors already use — never locking you into a single chain.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {chains.map((c, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/10 hover:border-[#FF7A1B]/40 text-xs sm:text-sm font-medium text-slate-200 transition-colors"
              >
                <i className={`${c.icon} text-[#FF7A1B]`}></i>
                <span>{c.name}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {['ERC-20', 'ERC-721', 'ERC-1155', 'ERC-3643 (T-REX)', 'Security Token Standards'].map((std, i) => (
              <span
                key={i}
                className="px-4 py-1.5 rounded-full bg-[#FF7A1B]/10 border border-[#FF7A1B]/20 text-[#FF7A1B] text-xs font-mono font-semibold"
              >
                {std}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ HOW IT WORKS — CLIENT JOURNEY ════════════════ */}
      <section className="relative py-28" id="process">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="hero-pill-badge mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A1B]"></span>
              <span>How It Works — Client Journey</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              From first conversation<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A1B] to-[#FFA756]">
                to live product.
              </span>
            </h2>
            <p className="mt-4 text-slate-300 text-base">Here’s how every engagement unfolds.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st, idx) => (
              <div key={idx} className="glass-card p-7 relative">
                <div className="text-3xl font-black text-[#FF7A1B]/30 font-mono mb-3">0{st.num}</div>
                <h3 className="text-lg font-bold text-white mb-2">{st.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ ENGAGEMENT MODELS ════════════════ */}
      <section className="relative py-28 border-t border-white/[0.08] bg-[#08090D]/50" id="engagement">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="hero-pill-badge mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A1B]"></span>
              <span>Engagement Models</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Work with us the way<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A1B] to-[#FFA756]">
                that fits your stage.
              </span>
            </h2>
            <p className="mt-4 text-slate-300 text-base sm:text-lg">
              Not every project needs the same shape of partnership. Choose the engagement model that matches where you are today — and scale up or down as you grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {engagementModels.map((m, idx) => (
              <div key={idx} className="glass-card p-8 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#FF7A1B]/10 border border-[#FF7A1B]/20 flex items-center justify-center text-[#FF7A1B] text-xl mb-5">
                    <i className={`fa-solid ${m.icon}`}></i>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{m.title}</h3>
                  <p className="text-sm text-slate-300/80 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ WHY RWA2TOKENS ════════════════ */}
      <section className="relative py-28 border-t border-white/[0.08]" id="why-us">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="hero-pill-badge mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A1B]"></span>
              <span>Why RWA2Tokens</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Why choose us.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((w, idx) => (
              <div key={idx} className="glass-card p-8 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#FF7A1B]/10 border border-[#FF7A1B]/20 flex items-center justify-center text-[#FF7A1B] text-xl mb-5">
                    <i className={`fa-solid ${w.icon}`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{w.title}</h3>
                  <p className="text-sm text-slate-300/80 leading-relaxed">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ FINAL CTA SECTION ════════════════ */}
      <section className="relative py-32 overflow-hidden border-t border-white/[0.08]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#FF7A1B]/15 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="hero-pill-badge mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A1B]"></span>
            <span>Ready to build?</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-6">
            Ready to build your<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A1B] to-[#FFA756]">
              Web3 project?
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto mb-10 leading-relaxed">
            Tell us what you’re building. We’ll connect you with the right specialist — typically within 24 hours. No commitment required.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="hero-btn-primary">
              <span>Start a Project →</span>
            </Link>
            <Link href="/contact" className="hero-btn-secondary">
              <span>Schedule a Discovery Call</span>
            </Link>
          </div>
          <p className="text-xs text-slate-400 mt-6 font-mono">No commitment required. Response within 24 hours.</p>
        </div>
      </section>
    </div>
  );
}
