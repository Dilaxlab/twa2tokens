import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Crypto Wallets — Rwa2tokens',
  description: 'Mobile, desktop, hardware, MPC, custodial, non-custodial, and WaaS wallets. Secure by design. Built for real users.',
};

export default function CryptoWalletsPage() {
  return (
    <>
      <section className="page-hero">
<div className="page-hero-bg"></div><div className="hero-grid" style={{ opacity: "0.4" }}></div>
<div className="container">
<div className="page-hero-content">
<div className="breadcrumb"><Link href="/">Home</Link><i className="fa-solid fa-chevron-right"></i><a href="#">Services</a><i className="fa-solid fa-chevron-right"></i><span>Crypto Wallets</span></div>
<div className="badge"><i className="fa-solid fa-wallet"></i>  Crypto Wallets</div>
<h1>Secure by design.<br /><span className="text-gradient">Built for real users.</span></h1>
<p className="page-hero-desc" style={{ marginTop: "18px" }}>Every wallet type — from hardware to browser extension to Wallet-as-a-Service. We build custodial, non-custodial, MPC, and multi-sig wallets that pass the toughest security audits.</p>
</div>
</div>
</section>
<section style={{ background: "var(--bg-secondary)" }}>
<div className="container">
<img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1400&q=80" alt="Digital security technology" loading="lazy" className="svc-hero-img" />
</div>
</section>
<section className="features-section" style={{ background: "var(--bg-secondary)" }}>
<div className="container">
<div className="features-intro animate-up">
<div className="section-tag">Overview</div>
<h2 className="section-title">Every wallet type<br /><span className="text-gradient">for every use case.</span></h2>
<p>Security is non-negotiable when it comes to crypto wallets. A single vulnerability means irreversible loss for your users. Our wallet development team builds across the full spectrum — from simple custodial wallets for fintech apps that want to add crypto, to advanced MPC and multi-sig architectures for institutional custody, to consumer-friendly non-custodial mobile wallets and MetaMask-like browser extensions. All wallets are audited, penetration tested, and built with defence-in-depth principles from the ground up.</p>
</div>
<div className="features-columns">
<div className="feat-group animate-up">
<h3><i className="fa-solid fa-lock" style={{ color: "var(--accent-cyan)", marginRight: "10px" }}></i>Wallet Development Services</h3>
<div className="feat-list">
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>Custodial cryptocurrency wallet development<span className="feat-new">NEW</span></div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>Non-custodial cryptocurrency wallet development<span className="feat-new">NEW</span></div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>Mobile cryptocurrency wallet (iOS & Android)<span className="feat-new">NEW</span></div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>Desktop cryptocurrency wallet development<span className="feat-new">NEW</span></div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>Web-based cryptocurrency wallet development<span className="feat-new">NEW</span></div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>Hardware cryptocurrency wallet development<span className="feat-new">NEW</span></div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>Multi-signature (multi-sig) wallet development<span className="feat-new">NEW</span></div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>MPC (Multi-Party Computation) wallet development<span className="feat-new">NEW</span></div>
</div>
</div>
<div className="feat-group animate-up delay-2">
<h3><i className="fa-solid fa-puzzle-piece" style={{ color: "var(--accent-purple)", marginRight: "10px" }}></i>Specialised & Integrated Wallets</h3>
<div className="feat-list">
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>Coin-specific wallet development (Bitcoin, Ethereum, etc.)<span className="feat-new">NEW</span></div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>MetaMask-like browser extension wallet<span className="feat-new">NEW</span></div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>TRON wallet development<span className="feat-new">NEW</span></div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>Solana wallet development<span className="feat-new">NEW</span></div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>Wallet-as-a-Service (WaaS) SDK integration<span className="feat-new">NEW</span></div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>Cross-chain wallet development<span className="feat-new">NEW</span></div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>Cryptocurrency payment gateway development<span className="feat-new">NEW</span></div>
</div>
<div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "14px", marginTop: "32px" }}>
<div className="card" style={{ textAlign: "center", padding: "20px" }}><div className="stat-num" style={{ fontSize: "1.8rem" }}>15+</div><div className="stat-lbl">Wallet Types</div></div>
<div className="card" style={{ textAlign: "center", padding: "20px" }}><div className="stat-num" style={{ fontSize: "1.8rem" }}>100%</div><div className="stat-lbl">Audited</div></div>
<div className="card" style={{ textAlign: "center", padding: "20px" }}><div className="stat-num" style={{ fontSize: "1.8rem" }}>20+</div><div className="stat-lbl">Chains</div></div>
</div>
</div>
</div>
</div>
</section>
<section className="cta-strip">
<div className="container">
<div className="cta-inner animate-up">
<h2>Need a wallet that<br /><span className="text-gradient">users actually trust?</span></h2>
<p>Security audits, penetration testing, multi-chain support. Our wallet team delivers all of it.</p>
<div className="cta-btns">
<Link href="/contact" className="btn btn-primary btn-lg">Start a Project →</Link>
<Link href="/ventures" className="btn btn-ghost btn-lg">View Our Ventures</Link>
</div>
</div>
</div>
</section>
    </>
  );
}
