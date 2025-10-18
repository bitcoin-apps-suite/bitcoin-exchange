'use client'

import { useState, useEffect } from 'react'
import ProofOfConceptBanner from '../../components/ProofOfConceptBanner'
import TaskBar from '../../components/TaskBar'
import DevSidebar from '../../components/DevSidebar'
import DockManager from '../../components/DockManager'
import Footer from '../../components/Footer'

export default function DocsPage() {
  const [isDevSidebarCollapsed, setIsDevSidebarCollapsed] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [activeSection, setActiveSection] = useState('getting-started')

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const sections = [
    { id: 'getting-started', title: 'Getting Started', icon: '🚀' },
    { id: 'trading-guide', title: 'Trading Guide', icon: '📊' },
    { id: 'blockchain', title: 'Blockchain Features', icon: '⛓️' },
    { id: 'api-integration', title: 'API Integration', icon: '🔌' },
    { id: 'advanced', title: 'Advanced Features', icon: '⚡' },
    { id: 'troubleshooting', title: 'Troubleshooting', icon: '🔧' }
  ]

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
        
        {/* Header */}
        <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <h1 className="text-3xl font-thin mb-2">
              Bitcoin Exchange <span className="text-green-500">Documentation</span>
            </h1>
            <p className="text-gray-400">Complete trading guide and API reference</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <nav className="sticky top-8">
                <h2 className="text-lg font-medium mb-4 text-green-500">Documentation</h2>
                <ul className="space-y-2">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <button
                        onClick={() => setActiveSection(section.id)}
                        className={`w-full text-left p-3 rounded-lg transition-colors flex items-center space-x-3 ${
                          activeSection === section.id
                            ? 'bg-green-500/10 text-green-500 border border-green-500/30'
                            : 'text-gray-400 hover:text-white hover:bg-gray-900'
                        }`}
                      >
                        <span className="text-lg">{section.icon}</span>
                        <span className="text-sm">{section.title}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="prose prose-invert max-w-none">
                
                {activeSection === 'getting-started' && (
                  <div>
                    <h2 className="text-2xl font-light mb-6 text-green-500">Getting Started</h2>
                    
                    <div className="bg-gray-950 border border-gray-800 rounded-lg p-6 mb-8">
                      <h3 className="text-xl font-normal mb-4">Welcome to Bitcoin Exchange</h3>
                      <p className="text-gray-300 mb-4">
                        Bitcoin Exchange is the decentralized exchange for the Bitcoin ecosystem, enabling trading of 
                        tokenized exchanges, Bitcoin Apps tokens, computational resources, and AI services.
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li>Trade tokenized exchanges like $BINANCE, $COINBASE, $KRAKEN</li>
                        <li>Access Bitcoin Apps ecosystem tokens</li>
                        <li>Purchase computational resources (GPU, CPU, storage)</li>
                        <li>Utilize AI services with instant settlement</li>
                      </ul>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-gray-950 border border-gray-800 rounded-lg p-6">
                        <h4 className="text-lg font-normal mb-3 text-green-500">Quick Start</h4>
                        <ol className="list-decimal list-inside space-y-2 text-gray-300 text-sm">
                          <li>Connect your HandCash or compatible wallet</li>
                          <li>Fund your account with BSV</li>
                          <li>Browse available tokens and resources</li>
                          <li>Place your first trade</li>
                        </ol>
                      </div>
                      <div className="bg-gray-950 border border-gray-800 rounded-lg p-6">
                        <h4 className="text-lg font-normal mb-3 text-green-500">Key Features</h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm">
                          <li>Cross-exchange arbitrage</li>
                          <li>Liquidity aggregation</li>
                          <li>Composite order execution</li>
                          <li>Real-time settlement on BSV</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {activeSection === 'trading-guide' && (
                  <div>
                    <h2 className="text-2xl font-light mb-6 text-green-500">Trading Guide</h2>
                    
                    <div className="space-y-8">
                      <div className="bg-gray-950 border border-gray-800 rounded-lg p-6">
                        <h3 className="text-xl font-normal mb-4">Market Types</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-lg font-normal mb-2 text-green-400">Exchange Tokens</h4>
                            <p className="text-gray-300 text-sm mb-2">
                              Trade equity in major exchanges as liquid tokens.
                            </p>
                            <ul className="text-sm text-gray-400 space-y-1">
                              <li>• $BINANCE - Binance exchange token</li>
                              <li>• $COINBASE - Coinbase equity token</li>
                              <li>• $KRAKEN - Kraken platform token</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-lg font-normal mb-2 text-green-400">Compute Resources</h4>
                            <p className="text-gray-300 text-sm mb-2">
                              Purchase computational power on-demand.
                            </p>
                            <ul className="text-sm text-gray-400 space-y-1">
                              <li>• GPU hours for AI training</li>
                              <li>• CPU cycles for processing</li>
                              <li>• Storage space allocation</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-950 border border-gray-800 rounded-lg p-6">
                        <h3 className="text-xl font-normal mb-4">Order Types</h3>
                        <div className="space-y-4">
                          <div className="border-l-2 border-green-500 pl-4">
                            <h4 className="font-normal text-green-400">Market Orders</h4>
                            <p className="text-sm text-gray-300">Execute immediately at current market price</p>
                          </div>
                          <div className="border-l-2 border-blue-500 pl-4">
                            <h4 className="font-normal text-blue-400">Limit Orders</h4>
                            <p className="text-sm text-gray-300">Set specific price for execution</p>
                          </div>
                          <div className="border-l-2 border-purple-500 pl-4">
                            <h4 className="font-normal text-purple-400">Composite Orders</h4>
                            <p className="text-sm text-gray-300">Bundle multiple resources for complex workflows</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeSection === 'blockchain' && (
                  <div>
                    <h2 className="text-2xl font-light mb-6 text-green-500">Blockchain Features</h2>
                    
                    <div className="space-y-8">
                      <div className="bg-gray-950 border border-gray-800 rounded-lg p-6">
                        <h3 className="text-xl font-normal mb-4">Portfolio Management on BSV</h3>
                        <p className="text-gray-300 mb-4">
                          Save your trading portfolio directly to the Bitcoin SV blockchain for permanent record keeping and verification.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-gray-900 p-4 rounded">
                            <h4 className="font-normal text-green-400 mb-2">Blockchain Storage</h4>
                            <p className="text-sm text-gray-300">Portfolio snapshots saved as on-chain data</p>
                          </div>
                          <div className="bg-gray-900 p-4 rounded">
                            <h4 className="font-normal text-green-400 mb-2">Trade Verification</h4>
                            <p className="text-sm text-gray-300">All trades verified and timestamped on BSV</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-950 border border-gray-800 rounded-lg p-6">
                        <h3 className="text-xl font-normal mb-4">NFT & Tokenization</h3>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-normal text-green-400 mb-2">Exchange NFTs</h4>
                            <p className="text-sm text-gray-300 mb-2">
                              Create NFTs representing your trading positions or portfolio milestones.
                            </p>
                          </div>
                          <div>
                            <h4 className="font-normal text-green-400 mb-2">Portfolio Tokenization</h4>
                            <p className="text-sm text-gray-300 mb-2">
                              Convert your portfolio into tradeable tokens that others can invest in.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-950 border border-gray-800 rounded-lg p-6">
                        <h3 className="text-xl font-normal mb-4">Smart Contracts</h3>
                        <p className="text-gray-300 mb-4">
                          Monitor and interact with smart contracts powering the exchange infrastructure.
                        </p>
                        <div className="bg-gray-900 p-4 rounded">
                          <p className="text-sm text-gray-400">
                            <span className="text-green-500">Status:</span> All contracts operating normally<br/>
                            <span className="text-green-500">Explorer:</span> View on whatsonchain.com
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeSection === 'api-integration' && (
                  <div>
                    <h2 className="text-2xl font-light mb-6 text-green-500">API Integration</h2>
                    
                    <div className="bg-gray-950 border border-gray-800 rounded-lg p-6 mb-8">
                      <h3 className="text-xl font-normal mb-4">Getting Started with the API</h3>
                      <p className="text-gray-300 mb-4">
                        The Bitcoin Exchange API provides programmatic access to all trading and market data functionality.
                      </p>
                      <div className="bg-gray-900 p-4 rounded">
                        <code className="text-green-400 text-sm">
                          Base URL: https://api.bitcoin-exchange.vercel.app/v1
                        </code>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-gray-950 border border-gray-800 rounded-lg p-6">
                        <h4 className="text-lg font-normal mb-3 text-green-400">Authentication</h4>
                        <p className="text-sm text-gray-300 mb-3">Use API keys for authenticated requests</p>
                        <code className="text-xs text-gray-400 bg-gray-900 p-2 rounded block">
                          Authorization: Bearer YOUR_API_KEY
                        </code>
                      </div>
                      <div className="bg-gray-950 border border-gray-800 rounded-lg p-6">
                        <h4 className="text-lg font-normal mb-3 text-green-400">Rate Limits</h4>
                        <p className="text-sm text-gray-300 mb-3">API usage limits by tier</p>
                        <ul className="text-xs text-gray-400 space-y-1">
                          <li>• Free: 100 requests/hour</li>
                          <li>• Pro: 1,000 requests/hour</li>
                          <li>• Enterprise: Unlimited</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gray-950 border border-gray-800 rounded-lg p-6">
                      <h3 className="text-xl font-normal mb-4">Common Endpoints</h3>
                      <div className="space-y-4">
                        <div className="bg-gray-900 p-4 rounded">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="px-2 py-1 bg-green-500 text-black text-xs rounded">GET</span>
                            <code className="text-green-400">/markets</code>
                          </div>
                          <p className="text-sm text-gray-300">Get all available trading pairs</p>
                        </div>
                        <div className="bg-gray-900 p-4 rounded">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded">POST</span>
                            <code className="text-green-400">/orders</code>
                          </div>
                          <p className="text-sm text-gray-300">Place a new trading order</p>
                        </div>
                        <div className="bg-gray-900 p-4 rounded">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="px-2 py-1 bg-green-500 text-black text-xs rounded">GET</span>
                            <code className="text-green-400">/orderbook/:pair</code>
                          </div>
                          <p className="text-sm text-gray-300">Get order book for specific trading pair</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeSection === 'advanced' && (
                  <div>
                    <h2 className="text-2xl font-light mb-6 text-green-500">Advanced Features</h2>
                    
                    <div className="space-y-8">
                      <div className="bg-gray-950 border border-gray-800 rounded-lg p-6">
                        <h3 className="text-xl font-normal mb-4">Cross-Exchange Arbitrage</h3>
                        <p className="text-gray-300 mb-4">
                          Automatically identify and execute profitable arbitrage opportunities across integrated exchanges.
                        </p>
                        <div className="bg-gray-900 p-4 rounded">
                          <h4 className="font-normal text-green-400 mb-2">Setup Requirements</h4>
                          <ul className="text-sm text-gray-300 space-y-1">
                            <li>• Minimum 10 BSV balance</li>
                            <li>• API access to 2+ exchanges</li>
                            <li>• Risk tolerance settings</li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-gray-950 border border-gray-800 rounded-lg p-6">
                        <h3 className="text-xl font-normal mb-4">Liquidity Aggregation</h3>
                        <p className="text-gray-300 mb-4">
                          Access deep liquidity from multiple sources for best execution and minimal slippage.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-gray-900 p-4 rounded">
                            <h4 className="font-normal text-green-400 mb-2">Supported Exchanges</h4>
                            <ul className="text-sm text-gray-300 space-y-1">
                              <li>• Binance</li>
                              <li>• Coinbase Pro</li>
                              <li>• Kraken</li>
                              <li>• KuCoin</li>
                            </ul>
                          </div>
                          <div className="bg-gray-900 p-4 rounded">
                            <h4 className="font-normal text-green-400 mb-2">Benefits</h4>
                            <ul className="text-sm text-gray-300 space-y-1">
                              <li>• Better prices</li>
                              <li>• Reduced slippage</li>
                              <li>• Faster execution</li>
                              <li>• Lower fees</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-950 border border-gray-800 rounded-lg p-6">
                        <h3 className="text-xl font-normal mb-4">Composite Orders</h3>
                        <p className="text-gray-300 mb-4">
                          Bundle multiple token purchases for complex workflows like AI rendering or content creation.
                        </p>
                        <div className="bg-gray-900 p-4 rounded">
                          <h4 className="font-normal text-green-400 mb-2">Example: AI Video Generation</h4>
                          <div className="text-sm text-gray-300 space-y-1">
                            <div>1. Purchase GPU tokens for rendering</div>
                            <div>2. Buy storage tokens for output</div>
                            <div>3. Acquire AI model access tokens</div>
                            <div>4. Execute all purchases atomically</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeSection === 'troubleshooting' && (
                  <div>
                    <h2 className="text-2xl font-light mb-6 text-green-500">Troubleshooting</h2>
                    
                    <div className="space-y-6">
                      <div className="bg-gray-950 border border-gray-800 rounded-lg p-6">
                        <h3 className="text-xl font-normal mb-4">Common Issues</h3>
                        
                        <div className="space-y-4">
                          <div className="border-l-2 border-red-500 pl-4">
                            <h4 className="font-normal text-red-400 mb-2">Transaction Failed</h4>
                            <p className="text-sm text-gray-300 mb-2">
                              Your transaction failed to process on the blockchain.
                            </p>
                            <ul className="text-sm text-gray-400 space-y-1">
                              <li>• Check your BSV balance for fees</li>
                              <li>• Verify network connectivity</li>
                              <li>• Try again with higher fee</li>
                            </ul>
                          </div>

                          <div className="border-l-2 border-yellow-500 pl-4">
                            <h4 className="font-normal text-yellow-400 mb-2">Order Not Filled</h4>
                            <p className="text-sm text-gray-300 mb-2">
                              Your limit order hasn't been executed.
                            </p>
                            <ul className="text-sm text-gray-400 space-y-1">
                              <li>• Check if price has reached your limit</li>
                              <li>• Ensure sufficient liquidity exists</li>
                              <li>• Consider using market order instead</li>
                            </ul>
                          </div>

                          <div className="border-l-2 border-blue-500 pl-4">
                            <h4 className="font-normal text-blue-400 mb-2">API Connection Issues</h4>
                            <p className="text-sm text-gray-300 mb-2">
                              Cannot connect to trading API.
                            </p>
                            <ul className="text-sm text-gray-400 space-y-1">
                              <li>• Verify API key is valid</li>
                              <li>• Check rate limit status</li>
                              <li>• Ensure proper authentication headers</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-950 border border-gray-800 rounded-lg p-6">
                        <h3 className="text-xl font-normal mb-4">Getting Help</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-normal text-green-400 mb-2">Community Support</h4>
                            <ul className="text-sm text-gray-300 space-y-1">
                              <li>• GitHub Issues</li>
                              <li>• Discord Community</li>
                              <li>• Telegram Channel</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-normal text-green-400 mb-2">Technical Support</h4>
                            <ul className="text-sm text-gray-300 space-y-1">
                              <li>• Email: support@bitcoin-exchange.app</li>
                              <li>• Response time: 24-48 hours</li>
                              <li>• Include transaction IDs</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <DockManager />
    </div>
  )
}