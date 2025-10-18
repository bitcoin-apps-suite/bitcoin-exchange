'use client'

import { useState } from 'react'
import TaskBar from '../components/TaskBar'
import DevSidebar from '../components/DevSidebar'
import DockManager from '../components/DockManager'
import ProofOfConceptBanner from '../components/ProofOfConceptBanner'
import TickerSidebar from '../components/TickerSidebar'
import MarketTable from '../components/MarketTable'

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


  const handleTokenSelect = (token: Token | { symbol: string; name: string; price: number }) => {
    // Convert MarketData to Token format if needed
    setSelectedToken(token as Token)
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
          <main className={`flex-1 transition-all duration-300 pr-[280px] lg:pr-[280px] md:pr-[60px] sm:pr-0 ${
            showDevSidebar 
              ? (isDevSidebarCollapsed ? 'ml-[70px]' : 'ml-[220px]') 
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

            {/* Market Table */}
            <div className="max-w-7xl mx-auto px-6 py-8">
              <MarketTable onTokenSelect={handleTokenSelect} />
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
        
        {/* Ticker Sidebar */}
        <TickerSidebar />
        
        {/* Dock */}
        <DockManager />
      </div>
  )
}