import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy — Rwa2tokens',
  description: 'Privacy policy and data governance practices at Rwa2tokens.',
};

export default function PrivacyPage() {
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
              <span>Privacy Policy</span>
            </div>
            <div className="badge">
              <i className="fa-solid fa-shield-halved"></i> Legal &amp; Compliance
            </div>
            <h1>Privacy Policy</h1>
            <p className="page-hero-desc" style={{ marginTop: '18px' }}>
              Your privacy is fundamental to our architecture. This document outlines how Rwa2tokens collects, handles, and protects confidential project information and personal data.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--hub-surface)', padding: '64px 0' }}>
        <div className="hub-container" style={{ maxWidth: '800px', lineHeight: '1.8', color: 'var(--hub-text)' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>1. Information We Collect</h2>
          <p style={{ marginBottom: '24px', color: 'var(--hub-muted)' }}>
            We collect information provided directly through our project inquiry and contact forms, including names, project briefs, corporate email addresses, and technical specifications. We do not sell or monetize personal or proprietary project data.
          </p>

          <h2 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>2. Use of Information</h2>
          <p style={{ marginBottom: '24px', color: 'var(--hub-muted)' }}>
            Information is strictly utilized to evaluate architecture feasibility, formulate project scopes, match technical leads, and execute mutual non-disclosure agreements prior to development kickoff.
          </p>

          <h2 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>3. Data Security &amp; Confidentiality</h2>
          <p style={{ marginBottom: '24px', color: 'var(--hub-muted)' }}>
            All incoming communications, project documentation, and smart contract audit requests are encrypted in transit and at rest. Access is restricted to authorized venture partners and security engineers under strict confidentiality terms.
          </p>

          <h2 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>4. Contact Us</h2>
          <p style={{ color: 'var(--hub-muted)' }}>
            For privacy inquiries or data erasure requests, please contact our legal counsel at <a href="mailto:privacy@rwa2tokens.com" style={{ color: 'var(--lba-orange)', textDecoration: 'underline' }}>privacy@rwa2tokens.com</a>.
          </p>
        </div>
      </section>
    </>
  );
}
