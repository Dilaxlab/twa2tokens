'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesDropdown(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileOpen]);

  const services = [
    { title: 'Exchange & Trading', href: '/services/exchange-trading', icon: 'fa-chart-line' },
    { title: 'DeFi Protocols', href: '/services/defi-protocols', icon: 'fa-link' },
    { title: 'Token Issuance & RWA', href: '/services/token-issuance', icon: 'fa-coins' },
    { title: 'NFT & Metaverse', href: '/services/nft-metaverse', icon: 'fa-cube' },
    { title: 'Blockchain Engineering', href: '/services/blockchain-engineering', icon: 'fa-microchip' },
    { title: 'Strategy & Compliance', href: '/services/strategy-compliance', icon: 'fa-shield-halved' },
    { title: 'Crypto Wallets', href: '/services/crypto-wallets', icon: 'fa-wallet' },
    { title: 'Crypto Marketing', href: '/services/crypto-marketing', icon: 'fa-bullhorn' },
    { title: 'AI & Emerging Tech', href: '/services/ai-blockchain', icon: 'fa-robot' },
  ];

  const navLinks = [
    { title: 'Home', href: '/', icon: 'fa-house' },
    { title: 'About us', href: '/about', icon: 'fa-circle-info' },
    { title: 'Industries', href: '/industries', icon: 'fa-layer-group' },
    { title: 'Ventures', href: '/ventures', icon: 'fa-building' },
    { title: 'How it Works', href: '/#process', icon: 'fa-diagram-project' },
    { title: 'Contact', href: '/contact', icon: 'fa-envelope' },
  ];

  return (
    <>
      <header className="floating-topbar">
        <div className={`floating-topbar-inner ${isScrolled ? 'scrolled' : ''}`}>
          {/* Logo */}
          <Link
            href="/"
            className="brand-logo flex items-center gap-3"
            onClick={() => setMobileOpen(false)}
          >
            <div className="flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                <path
                  d="M4 18V6M7 21V3M10 17V7M13 20V4M16 16V8M20 18V6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <span className="font-semibold text-[14px] sm:text-[15px] tracking-[0.16em] uppercase text-white font-sans">
                RWA2TOKENS
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="nav-menu-links">
            <Link href="/" className={pathname === '/' ? 'active' : ''}>
              Home
            </Link>
            <Link href="/about" className={pathname === '/about' ? 'active' : ''}>
              About us
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1.5 ${pathname.startsWith('/services') ? 'active' : ''}`}
                onClick={() => setServicesDropdown(!servicesDropdown)}
              >
                <span>Services</span>
                <i className="fa-solid fa-chevron-down text-[9px] opacity-70"></i>
              </button>

              {servicesDropdown && (
                <div className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-64 z-[1100]">
                  <div className="bg-[#0B0D13]/95 border border-white/10 rounded-2xl p-2 shadow-[0_25px_60px_rgba(0,0,0,0.95)] backdrop-blur-2xl">
                    {services.map((s, idx) => (
                      <Link
                        key={idx}
                        href={s.href}
                        className="flex items-center gap-3 px-3 py-2 rounded-xl text-xs text-slate-300 hover:text-white hover:bg-white/[0.08] transition-colors"
                      >
                        <i className={`fa-solid ${s.icon} text-[#FF7A1B] text-xs w-4`}></i>
                        <span>{s.title}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/industries" className={pathname === '/industries' ? 'active' : ''}>
              Industries
            </Link>
            <Link href="/ventures" className={pathname === '/ventures' ? 'active' : ''}>
              Ventures
            </Link>
            <a href="/#process">How it Works</a>
            <Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>
              Contact
            </Link>
          </nav>

          {/* Right Area: Launch button and mobile hamburger */}
          <div className="flex items-center gap-2.5">
            {/* Desktop Launch Button (hidden on mobile and tablet) */}
            <Link href="/contact" className="launch-btn hidden lg:inline-flex">
              <span>Start a Project</span>
              <i className="fa-solid fa-arrow-right text-[11px]"></i>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="lg:hidden w-10 h-10 rounded-full bg-white/10 hover:bg-white/15 active:scale-95 border border-white/15 flex items-center justify-center text-white cursor-pointer transition-all"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation"
            >
              <i className={`fa-solid ${mobileOpen ? 'fa-xmark' : 'fa-bars'} text-sm`}></i>
            </button>
          </div>
        </div>
      </header>

      {/* ════════════════ MOBILE DRAWER ════════════════ */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[1200] bg-[#050507]/98 backdrop-blur-2xl lg:hidden flex flex-col justify-between pt-24 px-6 pb-8 overflow-y-auto">
          {/* Header row in mobile drawer */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
            <div className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                <path
                  d="M4 18V6M7 21V3M10 17V7M13 20V4M16 16V8M20 18V6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <span className="font-semibold text-sm tracking-wider uppercase text-white font-mono">
                Navigation
              </span>
            </div>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-slate-300 hover:text-white"
            >
              <i className="fa-solid fa-xmark text-sm"></i>
            </button>
          </div>

          {/* Main Links */}
          <div className="space-y-2 flex-grow">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className={`flex items-center justify-between px-4 py-3.5 rounded-2xl text-base font-semibold transition-all ${
                pathname === '/'
                  ? 'bg-[#FF7A1B]/15 text-[#FF7A1B] border border-[#FF7A1B]/30'
                  : 'text-slate-200 hover:bg-white/5'
              }`}
            >
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-house text-sm w-5 text-center text-[#FF7A1B]"></i>
                <span>Home</span>
              </div>
              <i className="fa-solid fa-chevron-right text-xs opacity-50"></i>
            </Link>

            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className={`flex items-center justify-between px-4 py-3.5 rounded-2xl text-base font-semibold transition-all ${
                pathname === '/about'
                  ? 'bg-[#FF7A1B]/15 text-[#FF7A1B] border border-[#FF7A1B]/30'
                  : 'text-slate-200 hover:bg-white/5'
              }`}
            >
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-circle-info text-sm w-5 text-center text-[#FF7A1B]"></i>
                <span>About us</span>
              </div>
              <i className="fa-solid fa-chevron-right text-xs opacity-50"></i>
            </Link>

            {/* Services Accordion in Mobile */}
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden">
              <button
                type="button"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between px-4 py-3.5 text-base font-semibold text-slate-200 hover:bg-white/5 transition-all"
              >
                <div className="flex items-center gap-3">
                  <i className="fa-solid fa-cube text-sm w-5 text-center text-[#FF7A1B]"></i>
                  <span>Services</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#FF7A1B]/15 text-[#FF7A1B] border border-[#FF7A1B]/30">
                    9 Areas
                  </span>
                </div>
                <i
                  className={`fa-solid fa-chevron-down text-xs transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180 text-[#FF7A1B]' : 'opacity-50'}`}
                ></i>
              </button>

              {mobileServicesOpen && (
                <div className="px-3 pb-3 pt-1 space-y-1 bg-black/40 border-t border-white/[0.06]">
                  {services.map((s, idx) => (
                    <Link
                      key={idx}
                      href={s.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                        pathname === s.href
                          ? 'bg-[#FF7A1B]/20 text-white font-semibold'
                          : 'text-slate-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <i className={`fa-solid ${s.icon} text-[#FF7A1B] text-xs w-4`}></i>
                      <span>{s.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/industries"
              onClick={() => setMobileOpen(false)}
              className={`flex items-center justify-between px-4 py-3.5 rounded-2xl text-base font-semibold transition-all ${
                pathname === '/industries'
                  ? 'bg-[#FF7A1B]/15 text-[#FF7A1B] border border-[#FF7A1B]/30'
                  : 'text-slate-200 hover:bg-white/5'
              }`}
            >
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-layer-group text-sm w-5 text-center text-[#FF7A1B]"></i>
                <span>Industries</span>
              </div>
              <i className="fa-solid fa-chevron-right text-xs opacity-50"></i>
            </Link>

            <Link
              href="/ventures"
              onClick={() => setMobileOpen(false)}
              className={`flex items-center justify-between px-4 py-3.5 rounded-2xl text-base font-semibold transition-all ${
                pathname === '/ventures'
                  ? 'bg-[#FF7A1B]/15 text-[#FF7A1B] border border-[#FF7A1B]/30'
                  : 'text-slate-200 hover:bg-white/5'
              }`}
            >
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-building text-sm w-5 text-center text-[#FF7A1B]"></i>
                <span>Ventures</span>
              </div>
              <i className="fa-solid fa-chevron-right text-xs opacity-50"></i>
            </Link>

            <a
              href="/#process"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-between px-4 py-3.5 rounded-2xl text-base font-semibold text-slate-200 hover:bg-white/5 transition-all"
            >
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-diagram-project text-sm w-5 text-center text-[#FF7A1B]"></i>
                <span>How it Works</span>
              </div>
              <i className="fa-solid fa-chevron-right text-xs opacity-50"></i>
            </a>

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className={`flex items-center justify-between px-4 py-3.5 rounded-2xl text-base font-semibold transition-all ${
                pathname === '/contact'
                  ? 'bg-[#FF7A1B]/15 text-[#FF7A1B] border border-[#FF7A1B]/30'
                  : 'text-slate-200 hover:bg-white/5'
              }`}
            >
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-envelope text-sm w-5 text-center text-[#FF7A1B]"></i>
                <span>Contact</span>
              </div>
              <i className="fa-solid fa-chevron-right text-xs opacity-50"></i>
            </Link>
          </div>

          {/* Bottom Launch App CTA */}
          <div className="pt-6 mt-6 border-t border-white/10">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="launch-btn !flex w-full py-4 text-center justify-center font-bold text-base shadow-[0_0_30px_rgba(255,122,27,0.4)]"
            >
              <span>Start a Project</span>
              <i className="fa-solid fa-arrow-right text-xs"></i>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
