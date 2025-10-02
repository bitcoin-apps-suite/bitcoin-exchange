'use client';

import React from 'react';
import '../marketing.css';
import './dark.css';

const DarkMarketingPage: React.FC = () => {
  return (
    <div className="marketing-page dark-theme">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="hero-gradient"></div>
          <div className="hero-grid"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-logo">
            <span className="bitcoin-symbol">₿</span>
          </div>
          
          <h1 className="hero-title">
            <span className="title-bitcoin">BITCOIN</span>
            <span className="title-exchange">EXCHANGE</span>
          </h1>
          
          <p className="hero-subtitle">
            An exchange of exchanges. The user interface for the blockchain itself - 
            a window into the mempool and the firehose of tokenized data powered by Teranode.
          </p>
          
          <div className="hero-buttons">
            <button className="cta-primary">
              <span>Launch Exchange</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button className="cta-secondary">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-9-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Watch Demo</span>
            </button>
          </div>
          
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">∞ TPS</div>
              <div className="stat-label">Teranode Scale</div>
            </div>
            <div className="stat">
              <div className="stat-number">$0.0001</div>
              <div className="stat-label">Per Trade</div>
            </div>
            <div className="stat">
              <div className="stat-number">7</div>
              <div className="stat-label">bEX Tokens</div>
            </div>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="app-preview">
            <div className="app-window">
              <div className="window-header">
                <div className="window-controls">
                  <div className="control close"></div>
                  <div className="control minimize"></div>
                  <div className="control maximize"></div>
                </div>
                <div className="window-title">Bitcoin Exchange</div>
              </div>
              <div className="window-content">
                <div className="mock-sidebar">
                  <div className="mock-nav-item active">📊 bEX Tokens <span className="badge">7</span></div>
                  <div className="mock-nav-item">⚡ Compute</div>
                  <div className="mock-nav-item">🤖 AI Services <span className="badge">3</span></div>
                  <div className="mock-nav-item">💾 Storage</div>
                </div>
                <div className="mock-trading-list">
                  <div className="mock-trade">
                    <div className="trade-icon"></div>
                    <div className="trade-content">
                      <div className="trade-symbol">$bWriter</div>
                      <div className="trade-name">Bitcoin Writer Exchange</div>
                      <div className="trade-description">Document shares & writing portfolios</div>
                    </div>
                    <div className="trade-meta">
                      <div className="trade-price">0.42 BSV</div>
                      <div className="trade-change positive">+12.5%</div>
                    </div>
                  </div>
                  <div className="mock-trade">
                    <div className="trade-icon"></div>
                    <div className="trade-content">
                      <div className="trade-symbol">$bMusic</div>
                      <div className="trade-name">Bitcoin Music Exchange</div>
                      <div className="trade-description">Music rights & artist portfolios</div>
                    </div>
                    <div className="trade-meta">
                      <div className="trade-price">0.37 BSV</div>
                      <div className="trade-change positive">+18.2%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">
              NEXT-GENERATION EXCHANGE INFRASTRUCTURE
            </h2>
            <p className="section-subtitle">
              Built on BSV Teranode architecture for unlimited scale and instant settlement of all Bitcoin Apps tokens.
            </p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon bitcoin">
                <span>₿</span>
              </div>
              <h3 className="feature-title">TERANODE POWERED</h3>
              <p className="feature-description">
                Direct access to the blockchain firehose. Trade at the speed of settlement, 
                not network congestion. Trillions of transactions per second.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon exchange">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="feature-title">ALL bEX TOKENS</h3>
              <p className="feature-description">
                Trade every Bitcoin Apps exchange token in one interface. 
                $bWriter, $bMusic, $bJobs, $bWallet, $bEmail, $bCode, and $bOS.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon liquidity">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="feature-title">INSTANT LIQUIDITY</h3>
              <p className="feature-description">
                Cross-exchange arbitrage and liquidity aggregation. 
                Best execution across all Bitcoin Apps ecosystem exchanges.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon indexer">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="feature-title">INDEXER NETWORK</h3>
              <p className="feature-description">
                847 indexer nodes processing the data firehose. 
                Real-time mempool visibility and market data feeds.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon fees">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="feature-title">MICRO FEES</h3>
              <p className="feature-description">
                $0.0001 trading fees enabled by BSV's massive scale. 
                No gas wars, no network congestion, just pure efficiency.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon composite">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="feature-title">COMPOSITE ORDERS</h3>
              <p className="feature-description">
                Bundle multiple token purchases for complex workflows. 
                Buy $bVideo + $bArt + compute resources in one transaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="section-container">
          <h2 className="section-title">TRUSTED BY INNOVATORS</h2>
          
          <div className="testimonials-grid">
            <div className="testimonial">
              <div className="testimonial-content">
                "Bitcoin Exchange represents the future of decentralized trading. 
                Finally, an exchange that operates at the speed of the blockchain itself."
              </div>
              <div className="testimonial-author">
                <div className="author-avatar"></div>
                <div className="author-info">
                  <div className="author-name">Dr. Craig Wright</div>
                  <div className="author-title">Creator of Bitcoin</div>
                </div>
              </div>
            </div>
            
            <div className="testimonial">
              <div className="testimonial-content">
                "The ability to trade computational resources as liquid assets has revolutionized 
                how we approach infrastructure scaling."
              </div>
              <div className="testimonial-author">
                <div className="author-avatar"></div>
                <div className="author-info">
                  <div className="author-name">Maria Santos</div>
                  <div className="author-title">CTO, TechFlow Ventures</div>
                </div>
              </div>
            </div>
            
            <div className="testimonial">
              <div className="testimonial-content">
                "Cross-exchange arbitrage opportunities and instant settlement make this 
                the most efficient trading platform I've ever used."
              </div>
              <div className="testimonial-author">
                <div className="author-avatar"></div>
                <div className="author-info">
                  <div className="author-name">Alex Chen</div>
                  <div className="author-title">Founder, Quantum Trading</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">
            READY TO TRADE THE FUTURE?
          </h2>
          <p className="cta-subtitle">
            Join the next generation of exchange infrastructure. Connect your Bitcoin wallet and start trading 
            bEX tokens, computational resources, and AI services at Teranode scale.
          </p>
          
          <div className="cta-buttons">
            <button className="cta-primary large">
              <span>LAUNCH BITCOIN EXCHANGE</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          <div className="cta-features">
            <div className="cta-feature">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Instant settlement</span>
            </div>
            <div className="cta-feature">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Teranode powered</span>
            </div>
            <div className="cta-feature">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>All bEX tokens</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="bitcoin-symbol">₿</span>
              <span className="brand-text">
                <span className="brand-bitcoin">BITCOIN</span>
                <span className="brand-exchange">EXCHANGE</span>
              </span>
            </div>
            <p className="footer-tagline">
              Decentralized • Scalable • Unstoppable
            </p>
          </div>
          
          <div className="footer-links">
            <div className="link-group">
              <h4>Product</h4>
              <a href="#features">Features</a>
              <a href="#tokens">bEX Tokens</a>
              <a href="#api">Trading API</a>
              <a href="#indexers">Indexer Network</a>
            </div>
            
            <div className="link-group">
              <h4>Company</h4>
              <a href="#about">About</a>
              <a href="#team">Team</a>
              <a href="#careers">Careers</a>
              <a href="#press">Press</a>
            </div>
            
            <div className="link-group">
              <h4>Resources</h4>
              <a href="#docs">Documentation</a>
              <a href="#support">Support</a>
              <a href="#community">Community</a>
              <a href="#blog">Blog</a>
            </div>
            
            <div className="link-group">
              <h4>Legal</h4>
              <a href="#privacy">Privacy</a>
              <a href="#terms">Terms</a>
              <a href="#compliance">Compliance</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            © 2025 The Bitcoin Corporation LTD (16735102). Built on Bitcoin Teranode technology.
          </div>
          <div className="footer-social">
            <a href="#" className="social-link">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" className="social-link">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="#" className="social-link">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DarkMarketingPage;