import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'DeFi Protocols — Rwa2tokens',
  description: 'Lending, yield farming, cross-chain bridges, and DAO governance. We design and build the DeFi protocols that make decentralised finance real.',
};

export default function DefiProtocolsPage() {
  return (
    <>
      <section className="page-hero">
<div className="page-hero-bg"></div>
<div className="hero-grid" style={{ opacity: "0.4" }}></div>
<div className="container">
<div className="page-hero-content">
<div className="breadcrumb"><Link href="/">Home</Link><i className="fa-solid fa-chevron-right"></i><a href="#">Services</a><i className="fa-solid fa-chevron-right"></i><span>DeFi Protocols</span></div>
<div className="badge"><i className="fa-solid fa-link"></i>  DeFi & Financial Protocols</div>
<h1>The financial system<br /><span className="text-gradient">doesn't need banks.</span><br />It needs better code.</h1>
<p className="page-hero-desc" style={{ marginTop: "18px" }}>We design and build the DeFi protocols that make decentralised finance real — from lending markets to cross-chain liquidity infrastructure.</p>
</div>
</div>
</section>
<section style={{ background: "var(--bg-secondary)" }}>
<div className="container">
<img src="https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&w=1400&q=80" alt="Ethereum DeFi" loading="lazy" className="svc-hero-img" />
</div>
</section>
<section className="features-section" style={{ background: "var(--bg-secondary)" }}>
<div className="container">
<div className="features-intro animate-up">
<div className="section-tag">Our Approach</div>
<h2 className="section-title">DeFi is an economic<br /><span className="text-gradient">design problem.</span></h2>
<p>Building DeFi protocols is not just a development challenge — it's an economic design problem. A lending market with the wrong liquidation parameters destroys user funds. A yield protocol with poorly modelled incentives collapses within weeks. We approach every DeFi project with both the technical depth and the economic rigour it demands. Our DeFi practice spans the full protocol stack: economic modelling and tokenomics, smart contract development with security-first architecture, governance system design, and the on-chain and off-chain infrastructure that keeps a protocol running at scale.</p>
</div>
<div className="features-columns">
<div className="feat-group animate-up">
<h3><i className="fa-solid fa-code" style={{ color: "var(--accent-purple)", marginRight: "10px" }}></i>Core DeFi Protocol Services</h3>
<div className="feat-list">
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>DeFi protocol architecture and economic design</div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>Lending and borrowing platforms (over-collateralised)</div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>Yield farming and staking contract systems</div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>Automated liquidity pool design (Uniswap V3-style)</div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>Cross-chain bridge and interoperability infrastructure</div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>Stablecoin protocol development (algorithmic and collateralised)</div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>DAO governance contracts and treasury management</div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>Flash loan architecture and MEV protection</div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>Oracle integration (Chainlink, Pyth, custom solutions)</div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>Protocol analytics dashboard</div>
</div>
</div>
<div className="feat-group animate-up delay-2">
<h3><i className="fa-solid fa-expand" style={{ color: "var(--accent-cyan)", marginRight: "10px" }}></i>Expanded DeFi Solutions</h3>
<div className="feat-list">
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>DeFi insurance platform development<span className="feat-new">NEW</span></div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>DeFi synthetic assets development<span className="feat-new">NEW</span></div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>DeFi solutions for eCommerce platforms<span className="feat-new">NEW</span></div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>DeFi crowdfunding platform development<span className="feat-new">NEW</span></div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>DeFi real estate platform development<span className="feat-new">NEW</span></div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>DeFi tokenization development<span className="feat-new">NEW</span></div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>Whitelabel swap exchange development (PancakeSwap / Uniswap-style)<span className="feat-new">NEW</span></div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>DeFi smart contract development and auditing</div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>DeFi token development services</div>
</div>
</div>
</div>
</div>
</section>
<section className="cta-strip">
<div className="container">
<div className="cta-inner animate-up">
<h2>Ready to build your<br /><span className="text-gradient">DeFi protocol?</span></h2>
<p>Tell us about your protocol. We'll connect you with the right DeFi specialist within 24 hours.</p>
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
