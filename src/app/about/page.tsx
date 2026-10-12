import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About — Rwa2tokens | The Full-Stack Web3 Tokenization Partner',
  description: "We didn't build one blockchain company. We built four. Learn about the origin, beliefs, and specialist teams behind Rwa2tokens.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
<div className="page-hero-bg"></div>
<div className="hero-grid" style={{ opacity: "0.4" }}></div>
<div className="container">
<div className="page-hero-content">
<div className="breadcrumb">
<Link href="/">Home</Link>
<i className="fa-solid fa-chevron-right"></i>
<span>About</span>
</div>
<div className="badge"><i className="fa-solid fa-users"></i>  Our Story</div>
<h1>We didn't build<br /><span className="text-gradient">one blockchain company.</span><br />We built four.</h1>
<p className="page-hero-desc" style={{ marginTop: "20px" }}>A portfolio of specialist ventures, united by a shared infrastructure, network, and strategic direction.</p>
</div>
</div>
</section>
<section className="section" style={{ background: "var(--bg-secondary)" }}>
<div className="container">
<div className="about-layout">
<div className="about-img-wrap animate-up">
<img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80" alt="Specialist team collaborating" loading="lazy" />
<div className="about-img-overlay"></div>
</div>
<div className="about-text animate-up delay-2">
<div className="section-tag">Origin Story</div>
<h2>Built on a simple<br /><span className="text-gradient">observation.</span></h2>
<p>We were founded on a simple observation: the Web3 industry rewards specialists. The exchanges built by dedicated exchange teams outperform those built by generalists. The tokenomics models designed by people who've seen a hundred token launches are more robust than those designed by people on their first.</p>
<p>So instead of building one company that claims to do everything, we built a portfolio of specialist ventures — each with deep expertise in a specific segment of the stack. Exchange infrastructure. Token economics and DeFi. Institutional-grade tokenization. Fast-to-market Web3 products.</p>
<p>Four disciplines. Four dedicated teams. One ecosystem.</p>
<p style={{ color: "var(--text-primary)", fontWeight: "500" }}>What that means for you: when you work with us, you don't get a team that's learning on the job. You get people who have built exactly what you're building — multiple times — and who can bring the right specialist to every problem your project surfaces.</p>
</div>
</div>
</div>
</section>
<div className="stats-strip">
<div className="container">
<div className="stats-grid">
<div className="stat-item animate-up"><div className="stat-num">400+</div><div className="stat-lbl">Specialist Engineers</div></div>
<div className="stat-item animate-up delay-1"><div className="stat-num">1,000+</div><div className="stat-lbl">Projects Completed</div></div>
<div className="stat-item animate-up delay-2"><div className="stat-num">$2B+</div><div className="stat-lbl">Token Value Advised</div></div>
<div className="stat-item animate-up delay-3"><div className="stat-num">40+</div><div className="stat-lbl">Jurisdictions Covered</div></div>
</div>
</div>
</div>
<section className="section-sm" style={{ background: "var(--bg-primary)" }}>
<div className="container">
<div className="img-block" style={{ height: "340px" }}>
<img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80" alt="Financial data and analytics" loading="lazy" />
<div className="img-overlay"></div>
<div style={{ position: "absolute", bottom: "28px", left: "32px", zIndex: "2" }}>
<p style={{ fontSize: "0.73rem", color: "rgba(255,255,255,0.70)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "5px" }}>Our Approach</p>
<h3 style={{ fontSize: "1.5rem", fontWeight: "800", letterSpacing: "-0.02em", maxWidth: "500px", color: "#fff" }}>Economic design is as important as code.</h3>
</div>
</div>
</div>
</section>
<section className="section" style={{ background: "var(--bg-secondary)" }}>
<div className="container">
<div className="section-header center animate-up">
<div className="section-tag">What We Believe</div>
<h2 className="section-title">Four principles that shape<br /><span className="text-gradient">every engagement.</span></h2>
</div>
<div className="principles-grid">
<div className="principle-card animate-up">
<div className="card-icon icon-blue" style={{ marginBottom: "16px" }}><i className="fa-solid fa-lock"></i></div>
<h4>Security before speed.</h4>
<p>The history of DeFi is full of projects that moved fast and lost user funds. Every contract we deploy has been audited. Every system we build has been stress-tested. We don't ship what we haven't challenged.</p>
</div>
<div className="principle-card animate-up delay-1">
<div className="card-icon icon-green" style={{ marginBottom: "16px" }}><i className="fa-solid fa-scale-balanced"></i></div>
<h4>Compliance creates longevity.</h4>
<p>Regulatory grey areas don't stay grey. Projects built without compliance consideration eventually face consequences. We help clients build structures that will still be standing when the rules are fully written.</p>
</div>
<div className="principle-card animate-up delay-2">
<div className="card-icon icon-purple" style={{ marginBottom: "16px" }}><i className="fa-solid fa-users"></i></div>
<h4>Specialists over generalists.</h4>
<p>There is no such thing as a one-size-fits-all blockchain team. We invest in depth over breadth at the venture level — so clients get genuine experts, not people who learned your domain the week before your kickoff.</p>
</div>
<div className="principle-card animate-up delay-3">
<div className="card-icon icon-amber" style={{ marginBottom: "16px" }}><i className="fa-solid fa-chart-line"></i></div>
<h4>Economic design is as important as code.</h4>
<p>A technically perfect protocol with broken incentives fails. We approach every project through the lens of both engineering and economic design. The system has to work, and it has to work sustainably.</p>
</div>
</div>
</div>
</section>
<section className="cta-strip">
<div className="container">
<div className="cta-inner animate-up">
<div className="badge">Work with us</div>
<h2>Ready to build your<br /><span className="text-gradient">Web3 project?</span></h2>
<p>Tell us what you're building. We'll connect you with the right specialist — typically within 24 hours.</p>
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
