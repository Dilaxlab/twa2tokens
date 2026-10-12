import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Strategy & Compliance — Rwa2tokens',
  description: 'Expert strategy, regulatory structuring, and security auditing for Web3 projects. Build with confidence. Launch with clarity.',
};

export default function StrategyCompliancePage() {
  return (
    <>
      <section className="page-hero">
<div className="page-hero-bg"></div><div className="hero-grid" style={{ opacity: "0.4" }}></div>
<div className="container">
<div className="page-hero-content">
<div className="breadcrumb"><Link href="/">Home</Link><i className="fa-solid fa-chevron-right"></i><a href="#">Services</a><i className="fa-solid fa-chevron-right"></i><span>Strategy & Compliance</span></div>
<div className="badge"><i className="fa-solid fa-shield-halved"></i>  Strategy & Compliance</div>
<h1>Build with confidence.<br /><span className="text-gradient">Launch with clarity.</span></h1>
<p className="page-hero-desc" style={{ marginTop: "18px" }}>Expert strategy, regulatory structuring, and security auditing — for teams that want to move fast without the risks that sink Web3 projects.</p>
</div>
</div>
</section>
<section style={{ background: "var(--bg-secondary)" }}>
<div className="container">
<img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=80" alt="Legal and compliance" loading="lazy" className="svc-hero-img" />
</div>
</section>
<section className="features-section" style={{ background: "var(--bg-secondary)" }}>
<div className="container">
<div className="features-intro animate-up">
<div className="section-tag">Overview</div>
<h2 className="section-title">The regulatory landscape<br /><span className="text-gradient">is shifting fast.</span></h2>
<p>Jurisdictions that were permissive are tightening. New frameworks — MiCA, MAS regulations, evolving SEC guidance — are changing what you need to do before you launch. At the same time, smart contract exploits have cost the industry billions. The projects that survive are the ones that took strategy and security seriously from the start. Our consulting practice covers blockchain go-to-market strategy, regulatory compliance structuring in key jurisdictions, tokenomics economic modelling, and independent security auditing.</p>
</div>
<div className="features-columns">
<div className="feat-group animate-up">
<h3><i className="fa-solid fa-compass" style={{ color: "var(--accent-amber)", marginRight: "10px" }}></i>Strategy & Go-to-Market</h3>
<div className="feat-list">
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>Blockchain market entry and go-to-market strategy</div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>Token classification and regulatory opinion support</div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>MiCA, SEC, MAS, FCA compliance structuring</div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>AML / KYC programme design and implementation</div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>Smart contract security audit (manual and automated)</div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>Penetration testing for Web3 platforms</div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>Token economic modelling and stress testing</div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>Competitive landscape and market positioning analysis</div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>Investor pitch narrative and whitepaper advisory</div>
</div>
</div>
<div className="feat-group animate-up delay-2">
<h3><i className="fa-solid fa-gavel" style={{ color: "var(--accent-blue)", marginRight: "10px" }}></i>Legal & Licensing Services</h3>
<div className="feat-list">
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>Cryptocurrency exchange licensing and registration support<span className="feat-new">NEW</span></div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>Cryptocurrency litigation services<span className="feat-new">NEW</span></div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>Cryptocurrency exchange legal advisory<span className="feat-new">NEW</span></div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>Company incorporation in crypto-friendly jurisdictions<span className="feat-new">NEW</span></div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>Token and fund allocation advisory<span className="feat-new">NEW</span></div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>Blockchain / Web3 consulting — technology selection, feasibility, roadmap<span className="feat-new">NEW</span></div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>Whitepaper, litepaper, and pitch deck preparation<span className="feat-new">NEW</span></div>
<div className="feat-item"><div className="feat-check"><i className="fa-solid fa-check"></i></div>Online reputation management (ORM) for Web3 projects<span className="feat-new">NEW</span></div>
</div>
<div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "14px", marginTop: "32px" }}>
<div className="card" style={{ textAlign: "center", padding: "20px" }}><div className="stat-num" style={{ fontSize: "1.8rem" }}>40+</div><div className="stat-lbl">Jurisdictions</div></div>
<div className="card" style={{ textAlign: "center", padding: "20px" }}><div className="stat-num" style={{ fontSize: "1.8rem" }}>$2B+</div><div className="stat-lbl">Token Value Advised</div></div>
</div>
</div>
</div>
</div>
</section>
<section className="cta-strip">
<div className="container">
<div className="cta-inner animate-up">
<h2>Ready to structure your<br /><span className="text-gradient">Web3 project correctly?</span></h2>
<p>Our strategy and compliance specialists work across 40+ jurisdictions. Start a conversation today.</p>
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
