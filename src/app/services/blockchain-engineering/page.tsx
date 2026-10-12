import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blockchain Engineering — Rwa2tokens',
  description: 'Smart contracts, custom chains, production dApps, and wallets. Blockchain engineering at the level serious projects demand.',
};

export default function BlockchainEngineeringPage() {
  return (
    <>
      <section className="page-hero">
<div className="page-hero-bg"></div><div className="hero-grid" style={{ opacity: "0.4" }}></div>
<div className="container">
<div className="page-hero-content">
<div className="breadcrumb"><Link href="/">Home</Link><i className="fa-solid fa-chevron-right"></i><a href="#">Services</a><i className="fa-solid fa-chevron-right"></i><span>Blockchain Engineering</span></div>
<div className="badge"><i className="fa-solid fa-microchip"></i>  Blockchain Engineering</div>
<h1>The infrastructure that<br /><span className="text-gradient">doesn't fail under pressure.</span></h1>
<p className="page-hero-desc" style={{ marginTop: "18px" }}>Smart contracts. Custom chains. Production dApps. Wallets built for real users. Blockchain engineering at the level serious projects demand.</p>
</div>
</div>
</section>
<section style={{ background: "var(--bg-secondary)" }}>
<div className="container">
<img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80" alt="Circuit board technology" loading="lazy" className="svc-hero-img" />
</div>
</section>
<section className="features-section" style={{ background: "var(--bg-secondary)" }}>
<div className="container">
<div className="features-intro animate-up">
<div className="section-tag">Overview</div>
<h2 className="section-title">Production-grade<br /><span className="text-gradient">from the first commit.</span></h2>
<p>Blockchain projects fail most often at the infrastructure layer — not because of bad ideas, but because of smart contracts that weren't properly audited, dApps that can't handle load, or wallets that sacrifice security for user experience. Our engineering practice is built around one principle: production-grade from the first commit. We support all major EVM-compatible chains, Solana, Cosmos SDK, Hyperledger, Stellar, Hedera Hashgraph, and have built custom Layer-1 networks from scratch. Our smart contract team follows rigorous security-first practices with mandatory multi-step audits before any mainnet deployment.</p>
</div>
<div className="features-columns">
<div className="feat-group animate-up">
<h3><i className="fa-solid fa-cubes" style={{ color: "var(--accent-green)", marginRight: "10px" }}></i>Core Blockchain Development</h3>
<div className="feat-list">
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>Custom blockchain / Layer-1 development (Cosmos SDK, Substrate)</div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>Private blockchain development<span className="feat-new">NEW</span></div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>Smart contract development (Solidity, Rust, Vyper)</div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>Smart contract security audit and formal verification</div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>Smart contract upgrades & maintenance (proxy patterns)<span className="feat-new">NEW</span></div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>dApp development (React, Next.js, Ethers.js, web3.js)</div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>Custodial and non-custodial wallet development</div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>Multi-signature wallet architecture</div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>Layer-2 scaling solutions (Optimistic and ZK-rollups)</div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>Subgraph development (The Graph protocol)</div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>On-chain analytics and indexing infrastructure</div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>API development and blockchain system integration</div>
</div>
<h3 style={{ marginTop: "32px" }}><i className="fa-solid fa-network-wired" style={{ color: "var(--accent-blue)", marginRight: "10px" }}></i>Multi-Chain & Protocol Dev</h3>
<div className="feat-list">
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>Hyperledger blockchain development<span className="feat-new">NEW</span></div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>Stellar blockchain development<span className="feat-new">NEW</span></div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>Hedera Hashgraph development<span className="feat-new">NEW</span></div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>Ethereum smart contract & token development (ERC-20, ERC-721, ERC-1155)<span className="feat-new">NEW</span></div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>BEP-20 token development (Binance Smart Chain)<span className="feat-new">NEW</span></div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>Tron dApp development<span className="feat-new">NEW</span></div>
</div>
</div>
<div className="feat-group animate-up delay-2">
<h3><i className="fa-solid fa-industry" style={{ color: "var(--accent-amber)", marginRight: "10px" }}></i>Industry Vertical Solutions</h3>
<div className="feat-list">
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>Blockchain for finance and banking<span className="feat-new">NEW</span></div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>Blockchain for cybersecurity<span className="feat-new">NEW</span></div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>Supply chain management solutions<span className="feat-new">NEW</span></div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>Blockchain IoT development<span className="feat-new">NEW</span></div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>EMR and EHR software development (healthcare)<span className="feat-new">NEW</span></div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>Blockchain for pharma industry<span className="feat-new">NEW</span></div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>Blockchain payment remittance platform<span className="feat-new">NEW</span></div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>Sports betting dApp development<span className="feat-new">NEW</span></div>
</div>
<div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "14px", marginTop: "32px" }}>
<div className="card" style={{ textAlign: "center", padding: "20px" }}><div className="stat-num" style={{ fontSize: "1.8rem" }}>10+</div><div className="stat-lbl">Years Experience</div></div>
<div className="card" style={{ textAlign: "center", padding: "20px" }}><div className="stat-num" style={{ fontSize: "1.8rem" }}>400+</div><div className="stat-lbl">Engineers</div></div>
<div className="card" style={{ textAlign: "center", padding: "20px" }}><div className="stat-num" style={{ fontSize: "1.8rem" }}>15+</div><div className="stat-lbl">Chains Supported</div></div>
<div className="card" style={{ textAlign: "center", padding: "20px" }}><div className="stat-num" style={{ fontSize: "1.8rem" }}>100%</div><div className="stat-lbl">Audited Before Deploy</div></div>
</div>
</div>
</div>
</div>
</section>
<section className="cta-strip">
<div className="container">
<div className="cta-inner animate-up">
<h2>Ready to build<br /><span className="text-gradient">production-grade blockchain infrastructure?</span></h2>
<p>Our engineering team follows security-first principles from the first commit. Tell us what you need.</p>
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
