'use client'

import { useState } from 'react'
import TaskBar from '../components/TaskBar'
import DevSidebar from '../components/DevSidebar'
import Dock from '../components/Dock'
import ProofOfConceptBanner from '../components/ProofOfConceptBanner'
import TradingInterface from '../components/TradingInterface'

interface Token {
  id: string
  symbol: string
  name: string
  type: 'bex' | 'compute' | 'ai' | 'storage'
  price: number
  change24h: number
  volume24h: number
  marketCap: string
  available?: number
  unit?: string
  description: string
  icon?: React.ReactNode
  tradingVolume?: number
  users?: number
}

export default function BitcoinExchange() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [, setCurrentUser] = useState<{ name: string; address: string } | null>(null)
  const [showDevSidebar] = useState(true)
  const [isDevSidebarCollapsed, setIsDevSidebarCollapsed] = useState(false)
  const [, setSelectedToken] = useState<Token | null>(null)

  // const config = {
  //   context: {
  //     appName: 'Bitcoin Exchange',
  //     exchangeUrl: 'https://bitcoin-exchange.vercel.app',
  //     branding: {
  //       name: 'Bitcoin Exchange',
  //       color: '#ffa500'
  //     }
  //   },
  //   showDevSidebar: false,
  //   showDock: true,
  //   showPocBar: true
  // }

  const handleLogin = () => {
    // Mock authentication - in real app this would connect to HandCash/wallet
    setIsAuthenticated(true)
    setCurrentUser({ name: 'Demo User', address: 'bc1q...' })
  }


  const handleTokenSelect = (token: Token) => {
    setSelectedToken(token)
  }

  return (
      <div className="min-h-screen bg-black text-white flex flex-col">
        {/* 1. Proof of Concept Banner - Top */}
        <ProofOfConceptBanner />
        
        {/* 2. TaskBar - Below PoC */}
        <TaskBar />
        
        {/* 3. DevSidebar - Left side */}
        {showDevSidebar && (
          <DevSidebar 
            isCollapsed={isDevSidebarCollapsed}
            onToggleCollapse={() => setIsDevSidebarCollapsed(!isDevSidebarCollapsed)}
          />
        )}

        {/* Main Content Container */}
        <div className="flex flex-1 relative" style={{ marginTop: '72px' }}>

          {/* Main Content */}
          <main className={`flex-1 transition-all duration-300 ${
            showDevSidebar 
              ? (isDevSidebarCollapsed ? 'ml-[60px]' : 'ml-[200px]') 
              : 'ml-0'
          }`}>
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 border-b border-gray-800">
              <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="text-center">
                  <h1 className="text-5xl font-thin mb-4" style={{ letterSpacing: '-0.02em' }}>
                    Bitcoin <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Exchange</span>
                  </h1>
                  <p className="text-xl text-gray-300 mb-2 font-light">
                    An Exchange of Exchanges
                  </p>
                  <p className="text-gray-400 max-w-2xl mx-auto font-light">
                    The user interface for the blockchain itself. A window into the mempool and the firehose of tokenized data 
                    being settled by BitcoinSV nodes using the Teranode architecture. Legacy exchanges can't compete.
                  </p>
                  
                  {/* Stats Bar */}
                  <div className="flex justify-center items-center space-x-8 mt-6 text-sm">
                    <div className="text-center">
                      <div className="text-green-500 font-mono text-lg font-light">2.4M</div>
                      <div className="text-gray-400 font-light">24h Volume (BSV)</div>
                    </div>
                    <div className="text-center">
                      <div className="text-emerald-500 font-mono text-lg font-light">847</div>
                      <div className="text-gray-400 font-light">Active Pairs</div>
                    </div>
                    <div className="text-center">
                      <div className="text-cyan-500 font-mono text-lg font-light">1.2M</div>
                      <div className="text-gray-400 font-light">TX/second</div>
                    </div>
                    <div className="text-center">
                      <div className="text-green-400 font-mono text-lg font-light">$51.23</div>
                      <div className="text-gray-400 font-light">BSV Price</div>
                    </div>
                  </div>

                  {/* Quick Connect */}
                  {!isAuthenticated && (
                    <div className="mt-6">
                      <button 
                        onClick={handleLogin}
                        className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-black rounded-full font-medium hover:shadow-lg hover:shadow-green-500/20 transition-all"
                      >
                        Connect Wallet to Start Trading
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Trading Interface */}
            <div className="max-w-7xl mx-auto px-6 py-8">
              <TradingInterface onSelectToken={handleTokenSelect} />
            </div>

            {/* Market Categories */}
            <div className="max-w-7xl mx-auto px-6 py-8">
              <h2 className="text-3xl font-thin mb-6 text-center" style={{ letterSpacing: '-0.02em' }}>Market Categories</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* $bEX Ecosystem */}
                <div className="bg-gray-950 border border-gray-800 rounded-lg p-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-green-500 text-2xl">🔥</span>
                    </div>
                    <h3 className="text-xl font-light mb-2">$bEX Firehose</h3>
                    <p className="text-gray-400 text-sm mb-4">
                      Direct access to the Teranode data stream. Trade at the speed of settlement, not network congestion.
                    </p>
                    <div className="text-2xl font-mono font-light text-green-500">∞ TPS</div>
                    <div className="text-sm text-gray-400">Unlimited Scale</div>
                  </div>
                </div>

                {/* Bitcoin Apps */}
                <div className="bg-gray-950 border border-gray-800 rounded-lg p-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-blue-500 text-2xl">₿</span>
                    </div>
                    <h3 className="text-xl font-light mb-2">Bitcoin Apps</h3>
                    <p className="text-gray-400 text-sm mb-4">
                      Trade tokens from the Bitcoin Apps ecosystem - Writer, Video, Art, Music, Education, Jobs and more.
                    </p>
                    <div className="text-2xl font-mono font-light text-blue-500">7 Tokens</div>
                    <div className="text-sm text-gray-400">$12.4M Market Cap</div>
                  </div>
                </div>

                {/* Computational Resources */}
                <div className="bg-gray-950 border border-gray-800 rounded-lg p-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-emerald-500 text-2xl">⚡</span>
                    </div>
                    <h3 className="text-xl font-light mb-2">Compute Resources</h3>
                    <p className="text-gray-400 text-sm mb-4">
                      Access GPU, CPU, and storage resources on-demand. Pay per use with instant settlement.
                    </p>
                    <div className="text-2xl font-mono font-light text-emerald-500">4 Resources</div>
                    <div className="text-sm text-gray-400">$6.8M Total Value</div>
                  </div>
                </div>

                {/* AI Services */}
                <div className="bg-gray-950 border border-gray-800 rounded-lg p-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-purple-500 text-2xl">🤖</span>
                    </div>
                    <h3 className="text-xl font-light mb-2">AI Services</h3>
                    <p className="text-gray-400 text-sm mb-4">
                      AI inference, training, and specialized services. Power the next generation of applications.
                    </p>
                    <div className="text-2xl font-mono font-light text-purple-500">3 Services</div>
                    <div className="text-sm text-gray-400">$14.4M Capacity</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Composite Services Preview */}
            <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 border-t border-gray-800">
              <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-thin mb-4" style={{ letterSpacing: '-0.02em' }}>
                    Next-Gen <span className="text-green-500">Exchange</span>
                  </h2>
                  <p className="text-gray-400 max-w-3xl mx-auto">
                    While legacy exchanges struggle with 7 TPS and high fees, $bEX operates directly on Teranode's 
                    trillion-transaction-per-second infrastructure. The old exchanges are already obsolete.
                  </p>
                </div>

                <div className="bg-gray-950/50 border border-gray-700 rounded-lg p-6">
                  <div className="text-center text-gray-400">
                    <div className="text-4xl mb-4">📊</div>
                    <h3 className="text-xl font-medium mb-2 text-white">Legacy vs. Next-Gen Comparison</h3>
                    <div className="flex justify-center items-center space-x-4 text-sm">
                      <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded">Legacy: 7 TPS</span>
                      <span>vs</span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded">$bEX: 1M+ TPS</span>
                      <span>|</span>
                      <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded">$50+ fees</span>
                      <span>vs</span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-500 rounded">$0.0001 fees</span>
                    </div>
                    <p className="mt-4 text-sm">
                      Built on BSV Teranode architecture - the only blockchain that can handle global-scale trading
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>

        {/* Footer */}
        <footer className="border-t border-gray-800 bg-gray-950">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h4 className="font-medium mb-4">Bitcoin Exchange</h4>
                <p className="text-sm text-gray-400">
                  The decentralized exchange for Bitcoin Apps and computational resources.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-4">Markets</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Bitcoin Apps Tokens</li>
                  <li>Computational Resources</li>
                  <li>AI Services</li>
                  <li>Storage Solutions</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-4">Developers</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>API Documentation</li>
                  <li>Exchange SDK</li>
                  <li>Trading Bots</li>
                  <li>Market Data</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-4">Powered By</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>BSV Blockchain</li>
                  <li>Teranode Technology</li>
                  <li>Bitcoin OS</li>
                  <li>Open BSV License</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
              <p>© 2025 Bitcoin Exchange. Part of the Bitcoin Apps ecosystem.</p>
            </div>
          </div>
        </footer>
        
        {/* Dock */}
        <Dock />
      </div>
  )
}