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
  type: 'app' | 'compute' | 'ai' | 'storage'
  price: number
  change24h: number
  volume24h: number
  marketCap: string
  available?: number
  unit?: string
  description: string
}

export default function BitcoinExchange() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [currentUser, setCurrentUser] = useState<{ name: string; address: string } | null>(null)
  const [showDevSidebar, setShowDevSidebar] = useState(true)
  const [selectedToken, setSelectedToken] = useState<Token | null>(null)
  const [openWindows, setOpenWindows] = useState<string[]>(['Exchange'])
  const [activeWindow, setActiveWindow] = useState<string | null>('Exchange')

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

  const handleLogout = () => {
    setIsAuthenticated(false)
    setCurrentUser(null)
  }

  const handleNewOrder = () => {
    console.log('New order clicked')
  }

  const handleOpenWallet = () => {
    console.log('Open wallet clicked')
  }

  const handleToggleDevSidebar = () => {
    setShowDevSidebar(!showDevSidebar)
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
        {showDevSidebar && <DevSidebar />}

        {/* Main Content Container */}
        <div className="flex flex-1 relative" style={{ marginTop: '72px' }}>

          {/* Main Content */}
          <main className={`flex-1 transition-all duration-300 ${showDevSidebar ? 'ml-[200px]' : 'ml-0'}`}>
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-purple-900/20 via-orange-900/20 to-blue-900/20 border-b border-gray-800">
              <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="text-center">
                  <h1 className="text-4xl font-light mb-4">
                    Bitcoin <span className="text-[#ffa500]">Exchange</span>
                  </h1>
                  <p className="text-xl text-gray-300 mb-2">
                    The CPU of the World's Economy
                  </p>
                  <p className="text-gray-400 max-w-2xl mx-auto">
                    Trade Bitcoin App tokens and computational resources. Powered by BSV Teranode - 
                    supporting billions to trillions of transactions per second.
                  </p>
                  
                  {/* Stats Bar */}
                  <div className="flex justify-center items-center space-x-8 mt-6 text-sm">
                    <div className="text-center">
                      <div className="text-[#ffa500] font-mono text-lg">2.4M</div>
                      <div className="text-gray-400">24h Volume (BSV)</div>
                    </div>
                    <div className="text-center">
                      <div className="text-green-500 font-mono text-lg">847</div>
                      <div className="text-gray-400">Active Pairs</div>
                    </div>
                    <div className="text-center">
                      <div className="text-blue-500 font-mono text-lg">1.2M</div>
                      <div className="text-gray-400">TX/second</div>
                    </div>
                    <div className="text-center">
                      <div className="text-purple-500 font-mono text-lg">$51.23</div>
                      <div className="text-gray-400">BSV Price</div>
                    </div>
                  </div>

                  {/* Quick Connect */}
                  {!isAuthenticated && (
                    <div className="mt-6">
                      <button 
                        onClick={handleLogin}
                        className="px-8 py-3 bg-[#ffa500] text-black rounded-lg font-medium hover:bg-[#ffb833] transition-colors"
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
              <h2 className="text-2xl font-light mb-6 text-center">Market Categories</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Bitcoin Apps */}
                <div className="bg-gray-950 border border-gray-800 rounded-lg p-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-blue-500 text-2xl">₿</span>
                    </div>
                    <h3 className="text-xl font-medium mb-2">Bitcoin Apps</h3>
                    <p className="text-gray-400 text-sm mb-4">
                      Trade tokens from the Bitcoin Apps ecosystem - Writer, Video, Art, Music, Education, Jobs and more.
                    </p>
                    <div className="text-2xl font-mono text-blue-500">7 Tokens</div>
                    <div className="text-sm text-gray-400">$12.4M Market Cap</div>
                  </div>
                </div>

                {/* Computational Resources */}
                <div className="bg-gray-950 border border-gray-800 rounded-lg p-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-green-500 text-2xl">⚡</span>
                    </div>
                    <h3 className="text-xl font-medium mb-2">Compute Resources</h3>
                    <p className="text-gray-400 text-sm mb-4">
                      Access GPU, CPU, and storage resources on-demand. Pay per use with instant settlement.
                    </p>
                    <div className="text-2xl font-mono text-green-500">4 Resources</div>
                    <div className="text-sm text-gray-400">$6.8M Total Value</div>
                  </div>
                </div>

                {/* AI Services */}
                <div className="bg-gray-950 border border-gray-800 rounded-lg p-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-purple-500 text-2xl">🤖</span>
                    </div>
                    <h3 className="text-xl font-medium mb-2">AI Services</h3>
                    <p className="text-gray-400 text-sm mb-4">
                      AI inference, training, and specialized services. Power the next generation of applications.
                    </p>
                    <div className="text-2xl font-mono text-purple-500">3 Services</div>
                    <div className="text-sm text-gray-400">$14.4M Capacity</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Composite Services Preview */}
            <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 border-t border-gray-800">
              <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-light mb-4">
                    Composite <span className="text-[#ffa500]">Creation</span>
                  </h2>
                  <p className="text-gray-400 max-w-3xl mx-auto">
                    Combine app tokens with computational resources for complex workflows. 
                    Create a Hollywood movie by buying $bVideo + $bArt + $B_GPU_H100 + $B_AI_RENDER - then sell tickets!
                  </p>
                </div>

                <div className="bg-gray-950/50 border border-gray-700 rounded-lg p-6">
                  <div className="text-center text-gray-400">
                    <div className="text-4xl mb-4">🎬</div>
                    <h3 className="text-xl font-medium mb-2 text-white">Personal Hollywood Movie Example</h3>
                    <div className="flex justify-center items-center space-x-4 text-sm">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded">$bVideo</span>
                      <span>+</span>
                      <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded">$bArt</span>
                      <span>+</span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded">$B_GPU_H100</span>
                      <span>+</span>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded">$B_AI_RENDER</span>
                      <span>=</span>
                      <span className="px-3 py-1 bg-[#ffa500]/20 text-[#ffa500] rounded">Your Movie NFT</span>
                    </div>
                    <p className="mt-4 text-sm">
                      Coming soon: One-click composite purchases for complex digital creations
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