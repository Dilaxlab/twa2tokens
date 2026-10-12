import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#07080B] text-slate-400 py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-white/[0.08]">
          {/* Brand Col */}
          <div className="md:col-span-5 max-w-sm">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#FF7A1B] to-[#E65100] flex items-center justify-center text-white shadow-[0_0_15px_rgba(255,122,27,0.35)]">
                <svg width="15" height="15" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="7.5" stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.15)" />
                  <circle cx="10" cy="10" r="3" fill="white" />
                </svg>
              </div>
              <span className="font-bold text-lg text-white">
                RWA<span className="text-[#FF7A1B]">2TOKENS</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              The Full-Stack Web3 Tokenization Partner. Engineering the infrastructure, compliance, and liquidity that
              powers the decentralized real-world asset economy.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: 'fa-x-twitter', href: 'https://x.com' },
                { icon: 'fa-linkedin-in', href: 'https://linkedin.com' },
                { icon: 'fa-telegram', href: 'https://telegram.org' },
                { icon: 'fa-discord', href: 'https://discord.com' },
              ].map((s, idx) => (
                <a
                  key={idx}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#FF7A1B] hover:bg-[#FF7A1B]/10 transition-colors"
                >
                  <i className={`fa-brands ${s.icon} text-xs`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Links Cols */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h5 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">Services</h5>
              <ul className="space-y-2.5 text-xs text-slate-400">
                <li><Link href="/services/exchange-trading" className="hover:text-white transition-colors">Exchange &amp; Trading</Link></li>
                <li><Link href="/services/defi-protocols" className="hover:text-white transition-colors">DeFi Protocols</Link></li>
                <li><Link href="/services/token-issuance" className="hover:text-white transition-colors">Token Issuance &amp; RWA</Link></li>
                <li><Link href="/services/nft-metaverse" className="hover:text-white transition-colors">NFT &amp; Metaverse</Link></li>
                <li><Link href="/services/blockchain-engineering" className="hover:text-white transition-colors">Blockchain Engineering</Link></li>
                <li><Link href="/services/strategy-compliance" className="hover:text-white transition-colors">Strategy &amp; Compliance</Link></li>
                <li><Link href="/services/crypto-wallets" className="hover:text-white transition-colors">Crypto Wallets</Link></li>
                <li><Link href="/services/ai-blockchain" className="hover:text-white transition-colors">AI &amp; Emerging Tech</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">Company</h5>
              <ul className="space-y-2.5 text-xs text-slate-400">
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/ventures" className="hover:text-white transition-colors">Ventures</Link></li>
                <li><Link href="/industries" className="hover:text-white transition-colors">Industries</Link></li>
                <li><a href="/#process" className="hover:text-white transition-colors">How It Works</a></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">Legal</h5>
              <ul className="space-y-2.5 text-xs text-slate-400">
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="/contact" className="text-[#FF7A1B] hover:underline font-semibold">Start a Project →</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Rwa2tokens. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-300">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
