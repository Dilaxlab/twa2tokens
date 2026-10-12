import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service — Rwa2tokens',
  description: 'Terms of service and engagement guidelines for Rwa2tokens.',
};

export default function TermsPage() {
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
              <span>Terms of Service</span>
            </div>
            <div className="badge">
              <i className="fa-solid fa-scale-balanced"></i> Legal Terms
            </div>
            <h1>Terms of Service</h1>
            <p className="page-hero-desc" style={{ marginTop: '18px' }}>
              These terms govern the use of Rwa2tokens digital properties, advisory materials, and engineering engagements.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--hub-surface)', padding: '64px 0' }}>
        <div className="hub-container" style={{ maxWidth: '800px', lineHeight: '1.8', color: 'var(--hub-text)' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>1. Scope of Services</h2>
          <p style={{ marginBottom: '24px', color: 'var(--hub-muted)' }}>
            Rwa2tokens provides blockchain engineering, DeFi protocol development, real-world asset tokenization architecture, smart contract auditing, and advisory services. Specific deliverables, SLAs, and warranties are governed by signed Master Services Agreements (MSAs) and Statements of Work (SOWs).
          </p>

          <h2 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>2. Intellectual Property</h2>
          <p style={{ marginBottom: '24px', color: 'var(--hub-muted)' }}>
            Unless otherwise agreed in a specific Statement of Work, custom smart contracts, client frontends, and bespoke architectures developed for clients become client property upon full settlement of contracted compensation.
          </p>

          <h2 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>3. Regulatory &amp; Investment Disclaimer</h2>
          <p style={{ marginBottom: '24px', color: 'var(--hub-muted)' }}>
            Information provided on this website does not constitute financial, investment, or legal advice. Token issuers and clients remain responsible for complying with the securities, AML/KYC, and tax regulations of their respective operating jurisdictions.
          </p>

          <h2 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>4. Governing Law</h2>
          <p style={{ color: 'var(--hub-muted)' }}>
            These terms are governed in accordance with international digital commerce practices and applicable jurisdiction laws designated in formal client agreements.
          </p>
        </div>
      </section>
    </>
  );
}
