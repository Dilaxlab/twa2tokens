import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Industries We Serve — Rwa2tokens',
  description:
    'Tailored blockchain and tokenization architecture for Real Estate, Banking, Asset Management, Commodities, Private Credit, Art, Energy, and Gaming.',
};

export default function IndustriesPage() {
  const industries = [
    {
      icon: 'fa-city',
      title: 'Real Estate & Property',
      desc: 'Residential portfolios, commercial developments, real estate syndicates, and fractional vacation home ownership. Automate rental income distributions and secondary liquidity.',
      features: ['Fractional deed ownership', 'Automated rent distributions', 'Cap table management', 'Secondary market liquidity'],
    },
    {
      icon: 'fa-piggy-bank',
      title: 'Banking, Fintech & Payments',
      desc: 'Next-generation payment rails, stablecoin settlement networks, and programmable cash infrastructure for banks, neo-banks, and fintech innovators.',
      features: ['Cross-border settlement', 'Fiat-backed stablecoins', 'Programmable escrows', 'Instant treasury reconciliation'],
    },
    {
      icon: 'fa-briefcase',
      title: 'Funds, Asset Management & Private Equity',
      desc: 'Hedge funds, VC funds, and private equity vehicles structured with on-chain NAV, real-time auditing, automated carry/hurdle distributions, and KYC gates.',
      features: ['Tokenized LP interests', 'Real-time NAV tracking', 'Automated waterfalls', 'Accredited investor portals'],
    },
    {
      icon: 'fa-oil-can',
      title: 'Commodities & Natural Resources',
      desc: 'Gold, silver, precious metals, crude oil, and agricultural bulk reserves verified by independent third-party custodians and on-chain Proof of Reserves.',
      features: ['Proof of Reserves (PoR)', 'Fractional vault storage', 'Physical redemption flows', 'Global spot arbitrage'],
    },
    {
      icon: 'fa-file-shield',
      title: 'Insurance & Private Credit',
      desc: 'Structured credit pools, trade finance receivables, consumer loan originations, and parametric catastrophe insurance with transparent risk monitoring.',
      features: ['Parametric claims payouts', 'Undercollateralized lending pools', 'Invoice factoring', 'Risk tranching'],
    },
    {
      icon: 'fa-diamond',
      title: 'Art, Luxury & Collectibles',
      desc: 'Museum-grade fine art, collectible watches, rare vintage automobiles, and luxury wine collections tokenized for global fractional co-ownership.',
      features: ['Provenance tracking', 'Fractional ownership deeds', 'Custodial insurance vaults', 'Secondary royalty splits'],
    },
    {
      icon: 'fa-solar-panel',
      title: 'Energy, Carbon & Sustainability',
      desc: 'Renewable energy projects, solar infrastructure bonds, and verifiably retired voluntary carbon credits with end-to-end traceability.',
      features: ['Carbon credit issuance', 'Renewable yield bonds', 'IoT oracle verification', 'ESG compliance reporting'],
    },
    {
      icon: 'fa-gamepad',
      title: 'Gaming, Entertainment & IP',
      desc: 'Interactive GameFi assets, cross-title inventory items, entertainment franchises, music streaming royalties, and tokenized patent portfolios.',
      features: ['True digital ownership', 'Interoperable assets', 'Automated streaming payouts', 'Creator royalty enforcement'],
    },
  ];

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
              <span>Industries</span>
            </div>
            <div className="badge">
              <i className="fa-solid fa-layer-group"></i> Specialist Sectors
            </div>
            <h1>
              Built for the sectors bringing<br />
              <span className="text-gradient">real value on-chain.</span>
            </h1>
            <p className="page-hero-desc" style={{ marginTop: '18px', marginBottom: '32px' }}>
              Tokenization looks different in every industry. We tailor architecture, compliance, and investor experience to the exact asset class and regulatory framework you operate in.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/contact" className="btn btn-primary btn-lg">
                Discuss Your Asset Class →
              </Link>
              <Link href="/services/token-issuance" className="btn btn-ghost btn-lg">
                Token Issuance Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--hub-surface)', padding: '72px 0' }}>
        <div className="hub-container">
          <div className="hub-section-header centered">
            <span className="hub-eyebrow">Sector-Specific Architecture</span>
            <h2>Domain Expertise for Every Asset Class</h2>
            <p>Every industry faces unique legal requirements, liquidity dynamics, and investor profiles. Here is how we engineer solutions for each.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginTop: '36px' }}>
            {industries.map((ind, i) => (
              <div
                key={i}
                className="hub-rwa-card"
                style={{
                  padding: '32px',
                  background: 'var(--hub-bg)',
                  borderRadius: 'var(--radius)',
                  border: '1px solid var(--hub-border)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'var(--transition)',
                }}
              >
                <div>
                  <div className="hub-rwa-card-icon" style={{ marginBottom: '16px' }}>
                    <i className={`fa-solid ${ind.icon}`} style={{ fontSize: '1.4rem', color: 'var(--lba-orange)' }}></i>
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '12px', color: 'var(--hub-text)' }}>
                    {ind.title}
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--hub-muted)', lineHeight: '1.6', marginBottom: '20px' }}>
                    {ind.desc}
                  </p>
                </div>
                <div style={{ borderTop: '1px solid var(--hub-border)', paddingTop: '16px' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#FF7A1B', display: 'block', marginBottom: '8px' }}>
                    Key Capabilities
                  </span>
                  <ul style={{ padding: 0, margin: 0, display: 'grid', gridTemplateColumns: '1fr', gap: '6px' }}>
                    {ind.features.map((f, fi) => (
                      <li key={fi} style={{ fontSize: '0.85rem', color: 'var(--hub-text)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <i className="fa-solid fa-check" style={{ color: 'var(--lba-orange)', fontSize: '0.75rem' }}></i>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="cta-strip">
        <div className="container">
          <div className="cta-strip-inner">
            <div className="cta-strip-text">
              <h2>Ready to tokenize your industry&apos;s assets?</h2>
              <p>Schedule an architecture discovery session with our tokenization engineers and legal compliance experts.</p>
            </div>
            <div className="cta-strip-actions">
              <Link href="/contact" className="btn btn-primary">
                Start a Project →
              </Link>
              <Link href="/ventures" className="btn btn-secondary">
                View Our Ventures
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
