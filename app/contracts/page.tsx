'use client'

import { useState, useEffect } from 'react'
import ProofOfConceptBanner from '../../components/ProofOfConceptBanner'
import TaskBar from '../../components/TaskBar'
import DevSidebar from '../../components/DevSidebar'
import Dock from '../../components/Dock'
import Footer from '../../components/Footer'

export default function ContractsPage() {
  const [isDevSidebarCollapsed, setIsDevSidebarCollapsed] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const contracts = [
    {
      name: 'Exchange Core',
      address: '1ExchangeCoreContractAddress...',
      status: 'active',
      type: 'Trading Engine',
      description: 'Main trading and order matching contract',
      deployedAt: '2024-01-15',
      txCount: '1,234,567'
    },
    {
      name: 'Liquidity Pool',
      address: '1LiquidityPoolContractAddr...',
      status: 'active', 
      type: 'AMM',
      description: 'Automated market maker for continuous liquidity',
      deployedAt: '2024-01-15',
      txCount: '987,654'
    },
    {
      name: 'Token Registry',
      address: '1TokenRegistryContractAdd...',
      status: 'active',
      type: 'Registry',
      description: 'Registry of all tradeable tokens and their metadata',
      deployedAt: '2024-01-15',
      txCount: '456,789'
    },
    {
      name: 'Governance',
      address: '1GovernanceContractAddres...',
      status: 'active',
      type: 'Governance',
      description: '$BEXCHANGE token governance and voting',
      deployedAt: '2024-01-15',
      txCount: '123,456'
    }
  ]

  const tabs = [
    { id: 'overview', title: 'Overview', icon: '📋' },
    { id: 'contracts', title: 'Smart Contracts', icon: '📜' },
    { id: 'transactions', title: 'Recent Transactions', icon: '🔄' },
    { id: 'governance', title: 'Governance', icon: '🗳️' }
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
              Bitcoin Exchange <span className="text-green-500">Contracts</span>
            </h1>
            <p className="text-gray-400">Smart contract infrastructure and governance hub</p>
            <div className="flex items-center space-x-4 mt-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-300">All systems operational</span>
              </div>
              <div className="text-sm text-gray-400">
                Network: <span className="text-green-500">Bitcoin SV</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Tab Navigation */}
          <div className="flex space-x-1 mb-8 bg-gray-900 rounded-lg p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
                  activeTab === tab.id
                    ? 'bg-green-500 text-black'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
              >
                <span>{tab.icon}</span>
                <span className="text-sm font-medium">{tab.title}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-gray-950 border border-gray-800 rounded-lg p-6 text-center">
                  <h3 className="text-2xl font-thin text-green-500 mb-2">4</h3>
                  <p className="text-gray-400 text-sm">Active Contracts</p>
                </div>
                <div className="bg-gray-950 border border-gray-800 rounded-lg p-6 text-center">
                  <h3 className="text-2xl font-thin text-green-500 mb-2">2.8M</h3>
                  <p className="text-gray-400 text-sm">Total Transactions</p>
                </div>
                <div className="bg-gray-950 border border-gray-800 rounded-lg p-6 text-center">
                  <h3 className="text-2xl font-thin text-green-500 mb-2">$12.4M</h3>
                  <p className="text-gray-400 text-sm">Total Value Locked</p>
                </div>
                <div className="bg-gray-950 border border-gray-800 rounded-lg p-6 text-center">
                  <h3 className="text-2xl font-thin text-green-500 mb-2">99.9%</h3>
                  <p className="text-gray-400 text-sm">Uptime</p>
                </div>
              </div>

              {/* Architecture Overview */}
              <div className="bg-gray-950 border border-gray-800 rounded-lg p-6">
                <h2 className="text-2xl font-light mb-6 text-green-500">Exchange Architecture</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-normal mb-4">Core Components</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-green-500 text-sm">🔧</span>
                        </div>
                        <div>
                          <h4 className="font-normal text-green-400">Trading Engine</h4>
                          <p className="text-sm text-gray-300">Order matching and trade execution</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-blue-500 text-sm">💧</span>
                        </div>
                        <div>
                          <h4 className="font-normal text-blue-400">Liquidity Pools</h4>
                          <p className="text-sm text-gray-300">Automated market making and liquidity provision</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-purple-500 text-sm">📊</span>
                        </div>
                        <div>
                          <h4 className="font-normal text-purple-400">Token Registry</h4>
                          <p className="text-sm text-gray-300">Asset metadata and trading pair management</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-normal mb-4">Governance Features</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-green-500 text-sm">🗳️</span>
                        </div>
                        <div>
                          <h4 className="font-normal text-green-400">Voting System</h4>
                          <p className="text-sm text-gray-300">$BEXCHANGE token-weighted governance</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-yellow-500 text-sm">⚙️</span>
                        </div>
                        <div>
                          <h4 className="font-normal text-yellow-400">Parameter Updates</h4>
                          <p className="text-sm text-gray-300">Trading fees, limits, and system configuration</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-red-500 text-sm">🛡️</span>
                        </div>
                        <div>
                          <h4 className="font-normal text-red-400">Emergency Controls</h4>
                          <p className="text-sm text-gray-300">Circuit breakers and pause mechanisms</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-gray-950 border border-gray-800 rounded-lg p-6">
                <h2 className="text-2xl font-light mb-6 text-green-500">Recent Contract Activity</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-900 rounded">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div>
                        <p className="text-sm font-medium">Exchange Core updated</p>
                        <p className="text-xs text-gray-400">Gas optimization and performance improvements</p>
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">2 hours ago</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-900 rounded">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div>
                        <p className="text-sm font-medium">New liquidity pool deployed</p>
                        <p className="text-xs text-gray-400">BWRITER/BSV trading pair activated</p>
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">1 day ago</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-900 rounded">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <div>
                        <p className="text-sm font-medium">Governance proposal passed</p>
                        <p className="text-xs text-gray-400">Trading fee reduction to 0.05% approved</p>
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">3 days ago</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'contracts' && (
            <div className="space-y-6">
              <div className="bg-gray-950 border border-gray-800 rounded-lg p-6">
                <h2 className="text-2xl font-light mb-6 text-green-500">Smart Contracts</h2>
                <div className="grid gap-6">
                  {contracts.map((contract, index) => (
                    <div key={index} className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-normal text-green-400 mb-1">{contract.name}</h3>
                          <p className="text-sm text-gray-300 mb-2">{contract.description}</p>
                          <div className="flex items-center space-x-4 text-xs text-gray-400">
                            <span>Type: {contract.type}</span>
                            <span>Deployed: {contract.deployedAt}</span>
                            <span>Transactions: {contract.txCount}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className={`w-2 h-2 rounded-full ${
                            contract.status === 'active' ? 'bg-green-500' : 'bg-red-500'
                          }`}></div>
                          <span className={`text-xs ${
                            contract.status === 'active' ? 'text-green-500' : 'text-red-500'
                          }`}>
                            {contract.status}
                          </span>
                        </div>
                      </div>
                      <div className="bg-gray-950 p-3 rounded font-mono text-xs text-gray-400 mb-4">
                        {contract.address}
                      </div>
                      <div className="flex space-x-2">
                        <button className="px-3 py-1 bg-green-500/20 text-green-500 border border-green-500 rounded text-xs hover:bg-green-500/30 transition-colors">
                          View on Explorer
                        </button>
                        <button className="px-3 py-1 bg-gray-800 text-gray-300 border border-gray-700 rounded text-xs hover:bg-gray-700 transition-colors">
                          View Source
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'transactions' && (
            <div className="space-y-6">
              <div className="bg-gray-950 border border-gray-800 rounded-lg p-6">
                <h2 className="text-2xl font-light mb-6 text-green-500">Recent Transactions</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-800">
                        <th className="text-left py-3 text-sm font-medium text-gray-400">Transaction Hash</th>
                        <th className="text-left py-3 text-sm font-medium text-gray-400">Contract</th>
                        <th className="text-left py-3 text-sm font-medium text-gray-400">Method</th>
                        <th className="text-left py-3 text-sm font-medium text-gray-400">Value</th>
                        <th className="text-left py-3 text-sm font-medium text-gray-400">Time</th>
                        <th className="text-left py-3 text-sm font-medium text-gray-400">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[...Array(10)].map((_, i) => {
                        const isSuccess = Math.random() > 0.1
                        return (
                          <tr key={i} className="border-b border-gray-800/50">
                            <td className="py-3">
                              <code className="text-green-400 text-xs font-mono">
                                {Math.random().toString(36).substring(2, 15)}...
                              </code>
                            </td>
                            <td className="py-3 text-sm text-gray-300">
                              {contracts[Math.floor(Math.random() * contracts.length)].name}
                            </td>
                            <td className="py-3 text-sm text-gray-300">
                              {['trade', 'addLiquidity', 'removeLiquidity', 'vote'][Math.floor(Math.random() * 4)]}
                            </td>
                            <td className="py-3 text-sm text-gray-300">
                              {(Math.random() * 1000).toFixed(2)} BSV
                            </td>
                            <td className="py-3 text-sm text-gray-400">
                              {new Date(Date.now() - i * 60000 * Math.random() * 100).toLocaleTimeString()}
                            </td>
                            <td className="py-3">
                              <span className={`px-2 py-1 rounded text-xs ${
                                isSuccess 
                                  ? 'bg-green-500/20 text-green-500' 
                                  : 'bg-red-500/20 text-red-500'
                              }`}>
                                {isSuccess ? 'Success' : 'Failed'}
                              </span>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'governance' && (
            <div className="space-y-6">
              <div className="bg-gray-950 border border-gray-800 rounded-lg p-6">
                <h2 className="text-2xl font-light mb-6 text-green-500">Governance Dashboard</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gray-900 p-4 rounded-lg text-center">
                    <h3 className="text-lg font-normal text-green-400 mb-2">Total Voting Power</h3>
                    <p className="text-2xl font-thin text-white">10.5M $BEXCHANGE</p>
                  </div>
                  <div className="bg-gray-900 p-4 rounded-lg text-center">
                    <h3 className="text-lg font-normal text-green-400 mb-2">Active Proposals</h3>
                    <p className="text-2xl font-thin text-white">3</p>
                  </div>
                  <div className="bg-gray-900 p-4 rounded-lg text-center">
                    <h3 className="text-lg font-normal text-green-400 mb-2">Participation Rate</h3>
                    <p className="text-2xl font-thin text-white">67%</p>
                  </div>
                </div>

                <h3 className="text-xl font-normal mb-4">Active Proposals</h3>
                <div className="space-y-4">
                  <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-normal text-green-400 mb-2">Proposal #23: Reduce Trading Fees</h4>
                        <p className="text-sm text-gray-300 mb-3">
                          Reduce spot trading fees from 0.1% to 0.05% to increase competitiveness and trading volume.
                        </p>
                        <div className="flex items-center space-x-4 text-xs text-gray-400">
                          <span>Proposed by: 0x1234...5678</span>
                          <span>Voting ends: 2025-01-15</span>
                        </div>
                      </div>
                      <span className="px-2 py-1 bg-green-500/20 text-green-500 border border-green-500 rounded text-xs">
                        Active
                      </span>
                    </div>
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-400">Voting Progress</span>
                        <span className="text-gray-400">72% participation</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2 mb-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{width: '72%'}}></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-400">
                        <span>For: 6.8M (85%)</span>
                        <span>Against: 1.2M (15%)</span>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-green-500 text-black rounded font-medium hover:bg-green-400 transition-colors">
                      Vote Now
                    </button>
                  </div>

                  <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-normal text-green-400 mb-2">Proposal #24: Add New Trading Pair</h4>
                        <p className="text-sm text-gray-300 mb-3">
                          Add BMUSIC/BSV trading pair to the exchange with standard parameters.
                        </p>
                        <div className="flex items-center space-x-4 text-xs text-gray-400">
                          <span>Proposed by: 0x9876...5432</span>
                          <span>Voting ends: 2025-01-18</span>
                        </div>
                      </div>
                      <span className="px-2 py-1 bg-green-500/20 text-green-500 border border-green-500 rounded text-xs">
                        Active
                      </span>
                    </div>
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-400">Voting Progress</span>
                        <span className="text-gray-400">45% participation</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2 mb-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{width: '45%'}}></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-400">
                        <span>For: 3.9M (92%)</span>
                        <span>Against: 0.3M (8%)</span>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-green-500 text-black rounded font-medium hover:bg-green-400 transition-colors">
                      Vote Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
      <Dock />
    </div>
  )
}