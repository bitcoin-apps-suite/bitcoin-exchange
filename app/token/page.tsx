'use client'

import { useState, useEffect } from 'react'
import ProofOfConceptBanner from '../../components/ProofOfConceptBanner'
import TaskBar from '../../components/TaskBar'
import DevSidebar from '../../components/DevSidebar'
import Dock from '../../components/Dock'
import Footer from '../../components/Footer'

export default function TokenPage() {
  const [isDevSidebarCollapsed, setIsDevSidebarCollapsed] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <ProofOfConceptBanner />
      <TaskBar />
      
      <DevSidebar 
        isCollapsed={isDevSidebarCollapsed}
        onToggleCollapse={() => setIsDevSidebarCollapsed(!isDevSidebarCollapsed)}
      />

      <div className={`flex-1 transition-all duration-300 ${
        !isMobile ? (isDevSidebarCollapsed ? 'ml-[60px]' : 'ml-[200px]') : 'ml-0'
      }`} style={{ marginTop: '72px' }}>
        
        <div className="token-container max-w-7xl mx-auto px-6">
          {/* Hero Section */}
          <section className="token-hero min-h-[50vh] flex flex-col items-center justify-center py-20 text-center">
            <h1 className="text-5xl font-thin mb-4">
              <span className="text-white">The</span>{' '}
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                Bitcoin Exchange
              </span>{' '}
              <span className="text-white">Token</span>
            </h1>
            <p className="text-xl text-gray-300 mb-6 font-light">
              An exchange of exchanges - where all tokens trade
            </p>
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full text-black font-medium tracking-wider">
              $bEX
            </div>
          </section>

          {/* Philosophy Section */}
          <section className="py-16 border-t border-gray-800">
            <h2 className="text-3xl font-thin text-center mb-12">Our Exchange Philosophy</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-300 mb-6 font-light">
                Bitcoin Exchange is the <strong className="text-green-500 font-normal">user interface for the blockchain itself</strong> - 
                a window into the mempool and the firehose of tokenized data being settled by BitcoinSV nodes 
                using the Teranode architecture.
              </p>
              <p className="text-lg text-gray-300 mb-8 font-light">
                The $bEX token represents our approach to creating a sustainable economic model for 
                indexing massive amounts of computational resources and blockchain data while rewarding 
                contributors and liquidity providers.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="border-l-2 border-green-500 pl-6">
                  <h3 className="text-xl font-normal text-green-500 mb-2">Universal Liquidity</h3>
                  <p className="text-gray-400 font-light">Cross-exchange aggregation and settlement</p>
                </div>
                <div className="border-l-2 border-green-500 pl-6">
                  <h3 className="text-xl font-normal text-green-500 mb-2">Computational Markets</h3>
                  <p className="text-gray-400 font-light">Trade GPU, CPU, storage as liquid assets</p>
                </div>
                <div className="border-l-2 border-green-500 pl-6">
                  <h3 className="text-xl font-normal text-green-500 mb-2">Teranode Scale</h3>
                  <p className="text-gray-400 font-light">Billions to trillions of TX per second</p>
                </div>
              </div>
            </div>
          </section>

          {/* Token Model Section */}
          <section className="py-16 border-t border-gray-800">
            <h2 className="text-3xl font-thin text-center mb-12">The $bEX Token Model</h2>
            <div className="space-y-8">
              <div className="border-l-2 border-gray-700 pl-8">
                <h3 className="text-2xl font-light mb-6 text-green-500">How It Works</h3>
                <ul className="space-y-4 text-gray-300">
                  <li>
                    <strong className="text-green-400 font-normal">Exchange Fees:</strong> 0.1% trading fee across all pairs, 
                    distributed to $bEX holders proportionally
                  </li>
                  <li>
                    <strong className="text-green-400 font-normal">Liquidity Mining:</strong> Provide liquidity to earn 
                    $bEX tokens based on volume and spread efficiency
                  </li>
                  <li>
                    <strong className="text-green-400 font-normal">Data Indexing:</strong> Stake $bEX to run indexer nodes 
                    that process the Teranode firehose and earn rewards
                  </li>
                  <li>
                    <strong className="text-green-400 font-normal">Cross-Exchange Arbitrage:</strong> $bEX holders get priority 
                    access to arbitrage opportunities across integrated exchanges
                  </li>
                </ul>
              </div>

              <div className="border-l-2 border-red-900 pl-8">
                <h3 className="text-2xl font-light mb-6 text-red-400">Important Notices</h3>
                <ul className="space-y-4 text-gray-300">
                  <li>
                    <strong className="text-red-400 font-normal">High Throughput Requirements:</strong> Operating exchange 
                    infrastructure requires significant computational resources
                  </li>
                  <li>
                    <strong className="text-red-400 font-normal">Regulatory Compliance:</strong> Exchange operations must 
                    comply with local regulations in all jurisdictions
                  </li>
                  <li>
                    <strong className="text-red-400 font-normal">Not a Security:</strong> $bEX is a utility token for 
                    exchange operations, not an investment contract
                  </li>
                  <li>
                    <strong className="text-red-400 font-normal">Technical Risk:</strong> Trading and liquidity provision 
                    involve technical and financial risks
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Business Model Section */}
          <section className="py-16 border-t border-gray-800">
            <h2 className="text-3xl font-thin text-center mb-12">Exchange Economics</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-300 text-center mb-12 font-light">
                Building the computational backbone for the world&apos;s economy through 
                decentralized exchange infrastructure.
              </p>

              <div className="mb-12">
                <h3 className="text-2xl font-light mb-8 text-center text-green-500">Revenue Streams</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="border border-gray-800 p-6 text-center hover:border-green-500/50 transition-colors">
                    <h4 className="text-lg font-normal text-green-400 mb-2">Spot Trading</h4>
                    <p className="text-gray-400 text-sm mb-4">Token-to-token exchange</p>
                    <p className="text-2xl font-thin text-white">0.1% fee</p>
                  </div>
                  <div className="border border-green-500 bg-green-500/5 p-6 text-center">
                    <h4 className="text-lg font-normal text-green-400 mb-2">Compute Markets</h4>
                    <p className="text-gray-400 text-sm mb-4">GPU/CPU resource trading</p>
                    <p className="text-2xl font-thin text-white">0.5% fee</p>
                  </div>
                  <div className="border border-gray-800 p-6 text-center hover:border-green-500/50 transition-colors">
                    <h4 className="text-lg font-normal text-green-400 mb-2">Data Feeds</h4>
                    <p className="text-gray-400 text-sm mb-4">Real-time market data API</p>
                    <p className="text-2xl font-thin text-white">$99/month</p>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-light mb-8 text-center text-green-500">Infrastructure Costs</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="border border-gray-800 p-6 text-center">
                    <h4 className="text-lg font-normal text-gray-400 mb-2">Indexing Nodes</h4>
                    <p className="text-gray-500 text-sm mb-4">Teranode data processing</p>
                    <p className="text-2xl font-thin text-gray-300">100 TB/day</p>
                  </div>
                  <div className="border border-gray-800 p-6 text-center">
                    <h4 className="text-lg font-normal text-gray-400 mb-2">Order Matching</h4>
                    <p className="text-gray-500 text-sm mb-4">High-frequency trading engine</p>
                    <p className="text-2xl font-thin text-gray-300">1M TPS</p>
                  </div>
                  <div className="border border-gray-800 p-6 text-center">
                    <h4 className="text-lg font-normal text-gray-400 mb-2">Settlement Layer</h4>
                    <p className="text-gray-500 text-sm mb-4">On-chain transaction processing</p>
                    <p className="text-2xl font-thin text-gray-300">10K TPS</p>
                  </div>
                </div>
              </div>

              <div className="border border-green-500/30 rounded-lg p-8">
                <h3 className="text-xl font-light mb-6 text-center text-green-500">Value Flow</h3>
                <div className="flex flex-col items-center space-y-4 text-center">
                  <div className="flex items-center space-x-2">
                    <span className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-full text-sm">
                      Trading Fees + Data Subscriptions
                    </span>
                    <span className="text-green-500">→</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-full text-sm">
                      Revenue Pool (minus infrastructure)
                    </span>
                    <span className="text-green-500">→</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-full text-sm">
                      Distribution to $bEX holders
                    </span>
                    <span className="text-green-500">→</span>
                  </div>
                  <div className="px-4 py-2 bg-green-500/10 border border-green-500 rounded-full text-sm">
                    Liquidity providers and indexer operators rewarded
                  </div>
                </div>
                <p className="text-center mt-6 text-sm text-gray-400">
                  The Bitcoin Exchange enables seamless trading of all Bitcoin ecosystem tokens and computational resources,
                  creating deep liquidity pools that power the decentralized economy.
                </p>
              </div>
            </div>
          </section>

          {/* How to Participate Section */}
          <section className="py-16 border-t border-gray-800">
            <h2 className="text-3xl font-thin text-center mb-12">How to Earn $bEX Tokens</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 border border-green-500 rounded-full flex items-center justify-center text-green-500 font-light">
                  1
                </div>
                <h3 className="text-lg font-normal mb-2">Provide Liquidity</h3>
                <p className="text-sm text-gray-400">Add tokens to liquidity pools and earn from trading fees</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 border border-green-500 rounded-full flex items-center justify-center text-green-500 font-light">
                  2
                </div>
                <h3 className="text-lg font-normal mb-2">Run Indexer Node</h3>
                <p className="text-sm text-gray-400">Process blockchain data and earn indexing rewards</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 border border-green-500 rounded-full flex items-center justify-center text-green-500 font-light">
                  3
                </div>
                <h3 className="text-lg font-normal mb-2">Market Making</h3>
                <p className="text-sm text-gray-400">Provide tight spreads and deep order books</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 border border-green-500 rounded-full flex items-center justify-center text-green-500 font-light">
                  4
                </div>
                <h3 className="text-lg font-normal mb-2">Referral Program</h3>
                <p className="text-sm text-gray-400">Bring traders and earn from their volume</p>
              </div>
            </div>

            <div className="border-l-2 border-green-500/30 pl-8 max-w-4xl mx-auto">
              <h3 className="text-xl font-light mb-6 text-green-500">What We Value</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300">
                <li className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>Deep liquidity provision</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>Cross-exchange arbitrage</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>High-volume trading</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>Infrastructure contributions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>Market data analysis</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>API integrations</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Token Stats Section */}
          <section className="py-16 border-t border-gray-800">
            <h2 className="text-3xl font-thin text-center mb-12">Token Statistics</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-6 border border-gray-800 hover:border-green-500/30 transition-colors">
                <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-3">Total Supply</h3>
                <p className="text-3xl font-thin text-green-500">21,000,000</p>
                <p className="text-sm text-gray-400 mt-1">$bEX tokens</p>
              </div>
              <div className="text-center p-6 border border-gray-800 hover:border-green-500/30 transition-colors">
                <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-3">Circulating</h3>
                <p className="text-3xl font-thin text-green-500">0</p>
                <p className="text-sm text-gray-400 mt-1">Tokens in circulation</p>
              </div>
              <div className="text-center p-6 border border-gray-800 hover:border-green-500/30 transition-colors">
                <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-3">Liquidity Pools</h3>
                <p className="text-3xl font-thin text-green-500">0</p>
                <p className="text-sm text-gray-400 mt-1">Active pools</p>
              </div>
              <div className="text-center p-6 border border-gray-800 hover:border-green-500/30 transition-colors">
                <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-3">Network</h3>
                <p className="text-3xl font-thin text-green-500">BSV</p>
                <p className="text-sm text-gray-400 mt-1">Teranode</p>
              </div>
            </div>
          </section>

          {/* Legal Section */}
          <section className="py-16 border-t border-gray-800">
            <h2 className="text-3xl font-thin text-center mb-12">Legal & Regulatory Notice</h2>
            <div className="max-w-4xl mx-auto border-l-2 border-red-900 pl-8 space-y-6 text-gray-300">
              <p>
                <strong className="text-red-400 font-normal">Exchange Operations:</strong> The $bEX token enables 
                decentralized exchange operations across the Bitcoin ecosystem. Token holders participate in 
                fee sharing and governance of exchange parameters.
              </p>
              <p>
                <strong className="text-red-400 font-normal">Liquidity Provision:</strong> Providing liquidity involves 
                risk of impermanent loss. Market making and arbitrage activities require sophisticated understanding 
                of trading mechanics and risk management.
              </p>
              <p>
                <strong className="text-red-400 font-normal">Infrastructure Requirements:</strong> Running indexer nodes 
                requires significant computational resources and technical expertise. Node operators must maintain 
                high availability to earn rewards.
              </p>
              <p>
                <strong className="text-red-400 font-normal">Regulatory Compliance:</strong> Users must comply with 
                all applicable laws and regulations in their jurisdiction. Exchange services may not be available 
                in all regions.
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 text-center">
            <h2 className="text-4xl font-thin mb-8">Ready to Power the Exchange?</h2>
            <div className="flex justify-center space-x-4">
              <a 
                href="https://github.com/bitcoin-exchange" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-black rounded-full font-medium hover:shadow-lg hover:shadow-green-500/20 transition-all flex items-center space-x-2"
              >
                <svg height="20" width="20" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                </svg>
                <span>View on GitHub</span>
              </a>
              <a 
                href="/exchange" 
                className="px-6 py-3 border border-green-500 text-green-500 rounded-full font-medium hover:bg-green-500/10 transition-colors"
              >
                Start Trading
              </a>
            </div>
          </section>
        </div>
      </div>

      <Footer />
      <Dock />
    </div>
  )
}