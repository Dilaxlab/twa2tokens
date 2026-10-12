import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ventures — Rwa2tokens | Four Specialist Web3 Teams',
  description: 'Rwa2tokens operates through four specialist ventures: The Blockchain Studio, The Token Strategists, The Tokenization Platform, and The Web3 Product Studio.',
};

export default function VenturesPage() {
  return (
    <>
      <section className="page-hero">
<div className="page-hero-bg"></div>
<div className="hero-grid" style={{ opacity: "0.4" }}></div>
<div className="container">
<div className="page-hero-content">
<div className="breadcrumb"><Link href="/">Home</Link><i className="fa-solid fa-chevron-right"></i><span>Ventures</span></div>
<div className="badge"><i className="fa-solid fa-building"></i>  Our Portfolio</div>
<h1>One portfolio.<br /><span className="text-gradient">Four specialist teams.</span></h1>
<p className="page-hero-desc" style={{ marginTop: "18px" }}>We operate through a portfolio of independent specialist companies, each with deep expertise in a specific segment of the Web3 stack. Every client engagement is led by genuine specialists, not generalists stretching their remit.</p>
</div>
</div>
</section>
<section className="section-sm" style={{ background: "var(--bg-secondary)" }}>
<div className="container">
<div className="img-block" style={{ height: "320px" }}>
<img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80" alt="Specialist teams at work" loading="lazy" />
<div className="img-overlay"></div>
<div style={{ position: "absolute", bottom: "28px", left: "32px", zIndex: "2" }}>
<p style={{ fontSize: "0.73rem", color: "rgba(255,255,255,0.70)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "5px" }}>Portfolio</p>
<h3 style={{ fontSize: "1.5rem", fontWeight: "800", letterSpacing: "-0.02em", color: "#fff" }}>Deep expertise. Independent teams. Shared infrastructure.</h3>
</div>
</div>
</div>
</section>
<section className="section" style={{ background: "var(--bg-primary)" }}>
<div className="container">
<div className="ventures-grid">

<div className="venture-card animate-up">
<div className="venture-num">VENTURE 01</div>
<div className="card-icon icon-blue" style={{ marginBottom: "16px" }}><i className="fa-solid fa-microchip"></i></div>
<h3>The Blockchain Studio</h3>
<p className="venture-tagline">The engineering engine of the portfolio. Built to deliver at any scale.</p>
<p>Our blockchain development studio is one of the most experienced in the industry — with over a decade of project delivery, a team of 400+ specialist engineers, and more than a thousand completed builds spanning exchanges, DeFi protocols, NFT platforms, metaverse environments, GameFi products, and custom blockchain infrastructure.</p>
<div className="venture-caps">
<div className="venture-cap"><i className="fa-solid fa-check"></i> CEX & DEX development</div>
<div className="venture-cap"><i className="fa-solid fa-check"></i> DeFi protocol development</div>
<div className="venture-cap"><i className="fa-solid fa-check"></i> NFT marketplace and launchpad</div>
<div className="venture-cap"><i className="fa-solid fa-check"></i> GameFi and P2E game economies</div>
<div className="venture-cap"><i className="fa-solid fa-check"></i> Smart contract development and audit</div>
<div className="venture-cap"><i className="fa-solid fa-check"></i> Custom blockchain development</div>
<div className="venture-cap"><i className="fa-solid fa-check"></i> Crypto wallet development</div>
<div className="venture-cap"><i className="fa-solid fa-check"></i> AI-powered blockchain solutions</div>
</div>
<div className="venture-stats">
<div className="v-stat"><div className="num text-gradient">400+</div><div className="lbl">Engineers</div></div>
<div className="v-stat"><div className="num text-gradient">1,000+</div><div className="lbl">Projects Built</div></div>
<div className="v-stat"><div className="num text-gradient">10+</div><div className="lbl">Years Experience</div></div>
</div>
</div>

<div className="venture-card animate-up delay-1">
<div className="venture-num">VENTURE 02</div>
<div className="card-icon icon-purple" style={{ marginBottom: "16px" }}><i className="fa-solid fa-chart-pie"></i></div>
<h3>The Token Strategists</h3>
<p className="venture-tagline">Strategy-first thinking for token economies that last beyond the launch.</p>
<p>Token economics is a discipline where the thinking matters as much as the code. This venture works with protocol founders and DeFi teams on the architecture of their token economy — the incentive design, distribution mechanics, governance structure, and regulatory positioning that determines whether a project succeeds or fails after launch.</p>
<div className="venture-caps">
<div className="venture-cap"><i className="fa-solid fa-check"></i> Tokenomics design and economic modelling</div>
<div className="venture-cap"><i className="fa-solid fa-check"></i> DeFi protocol architecture</div>
<div className="venture-cap"><i className="fa-solid fa-check"></i> Cross-chain strategy and bridge development</div>
<div className="venture-cap"><i className="fa-solid fa-check"></i> Regulatory compliance structuring</div>
<div className="venture-cap"><i className="fa-solid fa-check"></i> ICO / IDO advisory and launch management</div>
<div className="venture-cap"><i className="fa-solid fa-check"></i> DAO governance design</div>
<div className="venture-cap"><i className="fa-solid fa-check"></i> Investor and community strategy</div>
</div>
<div className="venture-stats">
<div className="v-stat"><div className="num text-gradient">$2B+</div><div className="lbl">Token Value Advised</div></div>
<div className="v-stat"><div className="num text-gradient">200+</div><div className="lbl">Protocol Projects</div></div>
<div className="v-stat"><div className="num text-gradient">40+</div><div className="lbl">Jurisdictions</div></div>
</div>
</div>

<div className="venture-card animate-up">
<div className="venture-num">VENTURE 03</div>
<div className="card-icon icon-cyan" style={{ marginBottom: "16px" }}><i className="fa-solid fa-building-columns"></i></div>
<h3>The Tokenization Platform</h3>
<p className="venture-tagline">Institutional-grade infrastructure for real-world asset tokenization and regulated digital securities.</p>
<p>The tokenization of real-world assets — real estate, private equity, infrastructure, commodities, and more — represents the largest near-term opportunity in blockchain. This venture provides the complete technology stack for compliant digital asset issuance — from KYC-verified investor onboarding to cap table management, primary offering mechanics, and secondary trading infrastructure.</p>
<div className="venture-caps">
<div className="venture-cap"><i className="fa-solid fa-check"></i> Real-world asset (RWA) tokenization engine</div>
<div className="venture-cap"><i className="fa-solid fa-check"></i> Security token offering (STO) platform</div>
<div className="venture-cap"><i className="fa-solid fa-check"></i> Investor onboarding with KYC/AML compliance</div>
<div className="venture-cap"><i className="fa-solid fa-check"></i> Cap table management and equity tokenization</div>
<div className="venture-cap"><i className="fa-solid fa-check"></i> Regulated primary market infrastructure</div>
<div className="venture-cap"><i className="fa-solid fa-check"></i> Secondary market and liquidity management</div>
<div className="venture-cap"><i className="fa-solid fa-check"></i> Multi-jurisdiction regulatory compliance</div>
</div>
<div className="venture-stats">
<div className="v-stat"><div className="num text-gradient">40+</div><div className="lbl">Jurisdictions</div></div>
<div className="v-stat"><div className="num text-gradient">100%</div><div className="lbl">Compliant Issuance</div></div>
</div>
</div>

<div className="venture-card animate-up delay-1">
<div className="venture-num">VENTURE 04</div>
<div className="card-icon icon-green" style={{ marginBottom: "16px" }}><i className="fa-solid fa-rocket"></i></div>
<h3>The Web3 Product Studio</h3>
<p className="venture-tagline">Fast, product-led delivery for crypto entrepreneurs who need to ship and scale.</p>
<p>Not every project needs a custom build from first principles. This venture has developed a portfolio of battle-tested white-label products — exchanges, NFT platforms, DeFi tools, and crypto wallets — that can be customised and launched in a fraction of the time a ground-up build would take. From concept to live product in weeks, not months.</p>
<div className="venture-caps">
<div className="venture-cap"><i className="fa-solid fa-check"></i> White-label crypto exchange (CEX and DEX)</div>
<div className="venture-cap"><i className="fa-solid fa-check"></i> NFT marketplace and launchpad</div>
<div className="venture-cap"><i className="fa-solid fa-check"></i> DeFi platform development</div>
<div className="venture-cap"><i className="fa-solid fa-check"></i> dApp development and integration</div>
<div className="venture-cap"><i className="fa-solid fa-check"></i> Crypto wallet development</div>
<div className="venture-cap"><i className="fa-solid fa-check"></i> Smart contract development and audit</div>
<div className="venture-cap"><i className="fa-solid fa-check"></i> AI-integrated exchange and trading tools</div>
</div>
<div className="venture-stats">
<div className="v-stat"><div className="num text-gradient">4–8wk</div><div className="lbl">Launch Timeline</div></div>
<div className="v-stat"><div className="num text-gradient">White-label</div><div className="lbl">Ready-to-Ship</div></div>
</div>
</div>
</div>
</div>
</section>
<section className="cta-strip">
<div className="container">
<div className="cta-inner animate-up">
<div className="badge">Get started</div>
<h2>Not sure which venture<br /><span className="text-gradient">fits your project?</span></h2>
<p>Fill in the project brief and our team will route your enquiry to the right venture and get back to you within 24 hours.</p>
<div className="cta-btns">
<Link href="/contact" className="btn btn-primary btn-lg">Start a Project →</Link>
<Link href="/about" className="btn btn-ghost btn-lg">Learn About Us</Link>
</div>
</div>
</div>
</section>
    </>
  );
}
