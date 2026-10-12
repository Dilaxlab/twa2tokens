import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact — Rwa2tokens | Start a Web3 Project',
  description: "Tell us what you're building. We'll connect you with the right specialist within 24 hours. No commitment required.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
<div className="page-hero-bg"></div>
<div className="hero-grid" style={{ opacity: "0.4" }}></div>
<div className="container">
<div className="page-hero-content">
<div className="breadcrumb"><Link href="/">Home</Link><i className="fa-solid fa-chevron-right"></i><span>Contact</span></div>
<div className="badge"><i className="fa-regular fa-envelope"></i>  Get in Touch</div>
<h1>Tell us what<br /><span className="text-gradient">you're building.</span></h1>
<p className="page-hero-desc" style={{ marginTop: "18px" }}>Whether you have a detailed spec or just an idea, we'll connect you with the right specialist within 24 hours. No commitment required.</p>
</div>
</div>
</section>
<section className="section" style={{ background: "var(--bg-secondary)" }}>
<div className="container">
<div className="contact-layout">

<div className="contact-form-card animate-up">
<h3>Project Brief</h3>
<ContactForm />
</div>

<div className="contact-sidebar animate-up delay-2">
<div className="contact-info">
<h4><i className="fa-solid fa-clock" style={{ color: "var(--accent-blue)", marginRight: "8px" }}></i>Response Time</h4>
<p>We respond to all project briefs within 24 hours during business days. For urgent enquiries, email us directly.</p>
</div>
<div className="contact-info">
<h4><i className="fa-solid fa-sitemap" style={{ color: "var(--accent-purple)", marginRight: "8px" }}></i>Direct Venture Routing</h4>
<p style={{ marginBottom: "14px" }}>Not sure which team you need? Use the project brief form and we'll route it for you. Or reach out to a specific venture:</p>
<div className="venture-routes">
<div className="venture-route-item"><i className="fa-solid fa-microchip"></i> The Blockchain Studio — Engineering</div>
<div className="venture-route-item"><i className="fa-solid fa-chart-pie"></i> The Token Strategists — Strategy</div>
<div className="venture-route-item"><i className="fa-solid fa-building-columns"></i> The Tokenization Platform — RWA</div>
<div className="venture-route-item"><i className="fa-solid fa-rocket"></i> The Web3 Product Studio — Launch</div>
</div>
</div>
<div className="contact-info">
<h4><i className="fa-solid fa-globe" style={{ color: "var(--accent-cyan)", marginRight: "8px" }}></i>Global Reach</h4>
<p>We work with clients across 40+ jurisdictions, from founders at idea stage to institutions with $50M+ to deploy.</p>
</div>
<div className="contact-info">
<h4><i className="fa-brands fa-telegram" style={{ color: "var(--accent-blue)", marginRight: "8px" }}></i>Community</h4>
<div style={{ display: "flex", gap: "10px", marginTop: "12px" }}>
<a href="#" className="social-btn" aria-label="Twitter"><i className="fa-brands fa-x-twitter"></i></a>
<a href="#" className="social-btn" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
<a href="#" className="social-btn" aria-label="Telegram"><i className="fa-brands fa-telegram"></i></a>
<a href="#" className="social-btn" aria-label="Discord"><i className="fa-brands fa-discord"></i></a>
</div>
</div>
</div>
</div>
</div>
</section>
    </>
  );
}
