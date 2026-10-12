import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI & Emerging Technologies — Rwa2tokens',
  description: 'AI-powered exchanges, AI-native crypto tokens, and deep blockchain-AI integrations.',
};

export default function AiBlockchainPage() {
  return (
    <>
      <section className="page-hero">
<div className="page-hero-bg"></div><div className="hero-grid" style={{ opacity: "0.4" }}></div>
<div className="container">
<div className="page-hero-content">
<div className="breadcrumb"><Link href="/">Home</Link><i className="fa-solid fa-chevron-right"></i><a href="#">Services</a><i className="fa-solid fa-chevron-right"></i><span>AI & Emerging Tech</span></div>
<div className="badge"><i className="fa-solid fa-robot"></i>  AI & Emerging Technologies</div>
<h1>The next frontier:<br /><span className="text-gradient">intelligence built into the chain.</span></h1>
<p className="page-hero-desc" style={{ marginTop: "18px" }}>AI-powered exchanges and bots, AI-native crypto token development, and deep blockchain AI integrations that automate what used to require human intervention.</p>
</div>
</div>
</section>
<section style={{ background: "var(--bg-secondary)" }}>
<div className="container">
<img src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=1400&q=80" alt="Artificial intelligence and neural networks" loading="lazy" className="svc-hero-img" />
</div>
</section>
<section className="features-section" style={{ background: "var(--bg-secondary)" }}>
<div className="container">
<div className="features-intro animate-up">
<div className="section-tag">Overview</div>
<h2 className="section-title">AI meets blockchain.<br /><span className="text-gradient">Where both get smarter.</span></h2>
<p>The convergence of AI and blockchain is not a trend — it's a structural shift in how financial systems, protocols, and applications will operate. AI brings adaptive intelligence to on-chain systems that were previously static and rule-based. Blockchain brings transparency and verifiability to AI decisions. Our emerging technologies practice builds across both sides of this intersection — from AI-powered trading and market-making systems, to AI tokens with generative capabilities, to blockchain infrastructures that use AI for fraud detection, risk management, and protocol optimisation.</p>
</div>
<div className="features-columns">
<div className="feat-group animate-up">
<h3><i className="fa-solid fa-brain" style={{ color: "var(--accent-cyan)", marginRight: "10px" }}></i>AI-Powered Exchange & Trading</h3>
<div className="feat-list">
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>AI-powered crypto trading bot development<span className="feat-new">NEW</span></div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>AI market-making bot integration for exchanges<span className="feat-new">NEW</span></div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>AI-based risk management and anomaly detection systems<span className="feat-new">NEW</span></div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>Predictive analytics for order book and liquidity management<span className="feat-new">NEW</span></div>
</div>
<h3 style={{ marginTop: "32px" }}><i className="fa-solid fa-coins" style={{ color: "var(--accent-amber)", marginRight: "10px" }}></i>AI Crypto Token Development</h3>
<div className="feat-list">
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>AI crypto token development (token with embedded AI utility)<span className="feat-new">NEW</span></div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>GPT-4 / LLM-integrated decentralised application development<span className="feat-new">NEW</span></div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>AI-generated NFT collection development<span className="feat-new">NEW</span></div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>AI-powered token distribution and vesting mechanism design<span className="feat-new">NEW</span></div>
</div>
</div>
<div className="feat-group animate-up delay-2">
<h3><i className="fa-solid fa-network-wired" style={{ color: "var(--accent-purple)", marginRight: "10px" }}></i>Blockchain AI Integration</h3>
<div className="feat-list">
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>On-chain AI oracle development (AI-powered data feeds)<span className="feat-new">NEW</span></div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>AI smart contract audit assistant (automated vulnerability scanning)<span className="feat-new">NEW</span></div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>AI-powered KYC / AML compliance automation<span className="feat-new">NEW</span></div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>AI fraud detection for DeFi protocols and lending platforms<span className="feat-new">NEW</span></div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>ML-based tokenomics optimisation and simulation<span className="feat-new">NEW</span></div>
</div>
<div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "14px", marginTop: "32px" }}>
<div className="card" style={{ textAlign: "center", padding: "20px" }}><div className="stat-num" style={{ fontSize: "1.8rem" }}>AI+</div><div className="stat-lbl">Native Builds</div></div>
<div className="card" style={{ textAlign: "center", padding: "20px" }}><div className="stat-num" style={{ fontSize: "1.8rem" }}>13</div><div className="stat-lbl">AI Capabilities</div></div>
<div className="card" style={{ textAlign: "center", padding: "20px" }}><div className="stat-num" style={{ fontSize: "1.8rem" }}>400+</div><div className="stat-lbl">Engineers</div></div>
</div>
</div>
</div>
</div>
</section>
<section className="cta-strip">
<div className="container">
<div className="cta-inner animate-up">
<h2>Ready to build at the<br /><span className="text-gradient">intersection of AI and blockchain?</span></h2>
<p>Our emerging technologies team works at the cutting edge of what's possible. Tell us what you're building.</p>
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
