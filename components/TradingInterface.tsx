'use client'

import React, { useState } from 'react'
import { 
  TrendingUp, 
  TrendingDown, 
  Search, 
  RefreshCw, 
  BarChart3,
  Cpu,
  HardDrive,
  Zap,
  Video,
  Palette,
  BookOpen,
  Music,
  FileText,
  Briefcase,
  Mail,
  DollarSign
} from 'lucide-react'

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
  icon: React.ReactNode
  tradingVolume?: number
  users?: number
}

interface TradingInterfaceProps {
  onSelectToken: (token: Token) => void
}

const TradingInterface: React.FC<TradingInterfaceProps> = ({ onSelectToken }) => {
  const [activeTab, setActiveTab] = useState<'bex' | 'compute' | 'ai' | 'storage' | 'all'>('bex')
  const [selectedToken, setSelectedToken] = useState<Token | null>(null)
  const [orderType, setOrderType] = useState<'buy' | 'sell'>('buy')
  const [searchQuery, setSearchQuery] = useState('')
  const [priceFilter, setPriceFilter] = useState<'all' | 'under0.1' | '0.1to1' | 'over1'>('all')

  // bEX Tokens - All Bitcoin Apps Exchange Tokens
  const bexTokens: Token[] = [
    {
      id: 'bwriter',
      symbol: '$bWriter',
      name: 'Bitcoin Writer Exchange',
      type: 'bex',
      price: 0.42,
      change24h: 12.5,
      volume24h: 142000,
      marketCap: '$2.4M',
      users: 85000,
      description: 'Trade document shares and writing portfolios',
      icon: <FileText className="w-4 h-4" />
    },
    {
      id: 'bmusic',
      symbol: '$bMusic',
      name: 'Bitcoin Music Exchange',
      type: 'bex',
      price: 0.37,
      change24h: 18.2,
      volume24h: 98000,
      marketCap: '$1.8M',
      users: 62000,
      description: 'Trade music rights and artist portfolios',
      icon: <Music className="w-4 h-4" />
    },
    {
      id: 'bjobs',
      symbol: '$bJobs',
      name: 'Bitcoin Jobs Exchange',
      type: 'bex',
      price: 0.28,
      change24h: 9.7,
      volume24h: 67000,
      marketCap: '$1.2M',
      users: 45000,
      description: 'Trade employment contracts and skill tokens',
      icon: <Briefcase className="w-4 h-4" />
    },
    {
      id: 'bwallet',
      symbol: '$bWallet',
      name: 'Bitcoin Wallet Exchange',
      type: 'bex',
      price: 0.55,
      change24h: 15.3,
      volume24h: 156000,
      marketCap: '$3.1M',
      users: 120000,
      description: 'Trade wallet services and payment flows',
      icon: <DollarSign className="w-4 h-4" />
    },
    {
      id: 'bemail',
      symbol: '$bEmail',
      name: 'Bitcoin Email Exchange',
      type: 'bex',
      price: 0.31,
      change24h: 22.1,
      volume24h: 89000,
      marketCap: '$1.5M',
      users: 78000,
      description: 'Trade email reputation and communication rights',
      icon: <Mail className="w-4 h-4" />
    },
    {
      id: 'bcode',
      symbol: '$bCode',
      name: 'Bitcoin Code Exchange',
      type: 'bex',
      price: 0.63,
      change24h: 28.4,
      volume24h: 234000,
      marketCap: '$4.2M',
      users: 95000,
      description: 'Trade code repositories and development rights',
      icon: <BookOpen className="w-4 h-4" />
    },
    {
      id: 'bos',
      symbol: '$bOS',
      name: 'Bitcoin OS Exchange',
      type: 'bex',
      price: 1.25,
      change24h: 45.8,
      volume24h: 567000,
      marketCap: '$12.8M',
      users: 250000,
      description: 'Trade computational resources and OS services',
      icon: <Zap className="w-4 h-4" />
    }
  ]

  // Bitcoin Apps Tokens
  const appTokens: Token[] = [
    {
      id: 'bwriter-app',
      symbol: '$bWriter',
      name: 'Bitcoin Writer',
      type: 'bex',
      price: 0.42,
      change24h: 12.5,
      volume24h: 142000,
      marketCap: '$2.4M',
      description: 'Write, encrypt, and store documents on Bitcoin',
      icon: <FileText className="w-4 h-4" />
    },
    {
      id: 'bvideo',
      symbol: '$bVideo',
      name: 'Bitcoin Video',
      type: 'bex',
      price: 0.35,
      change24h: 8.4,
      volume24h: 84000,
      marketCap: '$1.7M',
      description: 'Video streaming and storage on Bitcoin',
      icon: <Video className="w-4 h-4" />
    },
    {
      id: 'bart',
      symbol: '$bArt',
      name: 'Bitcoin Art',
      type: 'bex',
      price: 0.33,
      change24h: 14.2,
      volume24h: 78000,
      marketCap: '$1.6M',
      description: 'Digital art marketplace and creation tools',
      icon: <Palette className="w-4 h-4" />
    },
    {
      id: 'bmusic-app',
      symbol: '$bMusic',
      name: 'Bitcoin Music',
      type: 'bex',
      price: 0.37,
      change24h: 12.8,
      volume24h: 68000,
      marketCap: '$1.4M',
      description: 'Decentralized music streaming',
      icon: <Music className="w-4 h-4" />
    },
    {
      id: 'beducation',
      symbol: '$bEducation',
      name: 'Bitcoin Education',
      type: 'bex',
      price: 0.19,
      change24h: 11.7,
      volume24h: 41000,
      marketCap: '$890K',
      description: 'Comprehensive learning platform',
      icon: <BookOpen className="w-4 h-4" />
    },
    {
      id: 'bjobs-app',
      symbol: '$bJobs',
      name: 'Bitcoin Jobs',
      type: 'bex',
      price: 0.45,
      change24h: 22.3,
      volume24h: 156000,
      marketCap: '$2.8M',
      description: 'Decentralized work marketplace',
      icon: <Briefcase className="w-4 h-4" />
    },
    {
      id: 'bemail-app',
      symbol: '$bEmail',
      name: 'Bitcoin Email',
      type: 'bex',
      price: 0.24,
      change24h: 5.7,
      volume24h: 54000,
      marketCap: '$1.1M',
      description: 'Encrypted email service',
      icon: <Mail className="w-4 h-4" />
    }
  ]

  // Computational Resource Tokens
  const computeTokens: Token[] = [
    {
      id: 'gpu-rtx4090',
      symbol: '$B_GPU_RTX4090',
      name: 'NVIDIA RTX 4090',
      type: 'compute',
      price: 0.0012,
      change24h: 3.2,
      volume24h: 45000,
      marketCap: '$890K',
      available: 247,
      unit: 'BSV/hour',
      description: 'High-end gaming and AI GPU compute',
      icon: <Cpu className="w-4 h-4" />
    },
    {
      id: 'gpu-h100',
      symbol: '$B_GPU_H100',
      name: 'NVIDIA H100',
      type: 'compute',
      price: 0.0089,
      change24h: 15.7,
      volume24h: 234000,
      marketCap: '$4.2M',
      available: 89,
      unit: 'BSV/hour',
      description: 'Enterprise AI training GPU',
      icon: <Cpu className="w-4 h-4" />
    },
    {
      id: 'cpu-xeon',
      symbol: '$B_CPU_XEON',
      name: 'Intel Xeon Platinum',
      type: 'compute',
      price: 0.0003,
      change24h: -1.2,
      volume24h: 67000,
      marketCap: '$1.2M',
      available: 1247,
      unit: 'BSV/hour',
      description: 'Enterprise CPU compute power',
      icon: <Cpu className="w-4 h-4" />
    },
    {
      id: 'storage-ssd',
      symbol: '$B_STORAGE_SSD',
      name: 'SSD Storage',
      type: 'storage',
      price: 0.00015,
      change24h: 2.1,
      volume24h: 123000,
      marketCap: '$890K',
      available: 50000,
      unit: 'BSV/GB/month',
      description: 'High-speed SSD storage',
      icon: <HardDrive className="w-4 h-4" />
    }
  ]

  // AI Service Tokens
  const aiTokens: Token[] = [
    {
      id: 'ai-inference',
      symbol: '$B_AI_INFERENCE',
      name: 'AI Inference',
      type: 'ai',
      price: 0.0008,
      change24h: 18.9,
      volume24h: 345000,
      marketCap: '$3.4M',
      available: 89,
      unit: 'BSV/request',
      description: 'AI model inference requests',
      icon: <Zap className="w-4 h-4" />
    },
    {
      id: 'ai-training',
      symbol: '$B_AI_TRAINING',
      name: 'AI Training',
      type: 'ai',
      price: 0.0156,
      change24h: 25.3,
      volume24h: 567000,
      marketCap: '$8.9M',
      available: 23,
      unit: 'BSV/epoch',
      description: 'AI model training compute',
      icon: <Zap className="w-4 h-4" />
    },
    {
      id: 'ai-render',
      symbol: '$B_AI_RENDER',
      name: 'AI Video Render',
      type: 'ai',
      price: 0.0045,
      change24h: 31.2,
      volume24h: 234000,
      marketCap: '$2.1M',
      available: 156,
      unit: 'BSV/minute',
      description: 'AI-powered video rendering',
      icon: <Video className="w-4 h-4" />
    }
  ]

  const allTokens = [...bexTokens, ...appTokens, ...computeTokens, ...aiTokens]

  const getFilteredTokens = () => {
    let tokens = allTokens
    
    if (activeTab !== 'all') {
      tokens = tokens.filter(token => {
        if (activeTab === 'bex') return token.type === 'bex'
        if (activeTab === 'compute') return token.type === 'compute' || token.type === 'storage'
        if (activeTab === 'ai') return token.type === 'ai'
        if (activeTab === 'storage') return token.type === 'storage'
        return true
      })
    }

    if (searchQuery) {
      tokens = tokens.filter(token => 
        token.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        token.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
        token.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    if (priceFilter !== 'all') {
      tokens = tokens.filter(token => {
        if (priceFilter === 'under0.1') return token.price < 0.1
        if (priceFilter === '0.1to1') return token.price >= 0.1 && token.price < 1
        if (priceFilter === 'over1') return token.price >= 1
        return true
      })
    }

    return tokens
  }

  const handleTokenSelect = (token: Token) => {
    setSelectedToken(token)
    onSelectToken(token)
  }

  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Token List */}
      <div className="col-span-4 bg-gray-950 border border-gray-800 rounded-lg p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-light">Available Tokens</h2>
          <RefreshCw className="w-4 h-4 text-gray-400 cursor-pointer hover:text-white" />
        </div>
        
        {/* Tabs */}
        <div className="flex gap-1 mb-4">
          {[
            { id: 'bex', label: 'bEX Tokens', count: bexTokens.length },
            { id: 'compute', label: 'Compute', count: computeTokens.length },
            { id: 'ai', label: 'AI', count: aiTokens.length },
            { id: 'all', label: 'All', count: allTokens.length }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as 'bex' | 'all' | 'compute' | 'ai' | 'storage')}
              className={`px-3 py-1.5 text-xs rounded font-light ${
                activeTab === tab.id
                  ? 'bg-green-500/20 text-green-500 border border-green-500'
                  : 'bg-gray-900 text-gray-400 border border-gray-800 hover:text-white'
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>

        {/* Search and Filter */}
        <div className="mb-4 space-y-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search tokens..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-900 border border-gray-800 rounded focus:border-green-500 outline-none text-sm"
            />
          </div>
          <select
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value as 'all' | 'under0.1' | '0.1to1' | 'over1')}
            className="w-full px-3 py-2 bg-gray-900 border border-gray-800 rounded text-sm"
          >
            <option value="all">All Prices</option>
            <option value="under0.1">Under 0.1 BSV</option>
            <option value="under1">Under 1 BSV</option>
            <option value="over1">Over 1 BSV</option>
          </select>
        </div>

        {/* Token List */}
        <div className="space-y-2 max-h-[600px] overflow-y-auto">
          {getFilteredTokens().map((token) => (
            <div
              key={token.id}
              onClick={() => handleTokenSelect(token)}
              className={`p-3 border rounded-lg cursor-pointer transition-all ${
                selectedToken?.id === token.id 
                  ? 'bg-green-500/10 border-green-500' 
                  : 'bg-gray-900 border-gray-800 hover:border-gray-700'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-2">
                  <div className="p-1.5 bg-green-500/20 rounded">
                    {token.icon}
                  </div>
                  <div>
                    <div className="font-medium text-sm">{token.symbol}</div>
                    <div className="text-xs text-gray-500">{token.name}</div>
                    <div className="text-xs text-gray-400 mt-1">{token.description}</div>
                    {token.available && (
                      <div className="text-xs text-green-500 mt-1">
                        Available: {token.available.toLocaleString()} {token.unit?.split('/')[1] || 'units'}
                      </div>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">
                    {token.price.toFixed(token.price < 0.01 ? 6 : 4)} BSV
                  </div>
                  {token.unit && (
                    <div className="text-xs text-gray-500">{token.unit}</div>
                  )}
                  <div className={`text-xs flex items-center justify-end gap-1 mt-1 ${
                    token.change24h >= 0 ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {token.change24h >= 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                    {Math.abs(token.change24h)}%
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trading Panel */}
      <div className="col-span-5 space-y-6">
        {/* Chart Area */}
        <div className="bg-gray-950 border border-gray-800 rounded-lg p-4 h-[300px]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-light">
              {selectedToken ? selectedToken.symbol : 'Select a token'}
            </h3>
            {selectedToken && (
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="text-lg font-medium">
                    {selectedToken.price.toFixed(selectedToken.price < 0.01 ? 6 : 4)} BSV
                  </div>
                  {selectedToken.unit && (
                    <div className="text-xs text-gray-500">{selectedToken.unit}</div>
                  )}
                </div>
                <div className={`flex items-center gap-1 ${
                  selectedToken.change24h >= 0 ? 'text-green-500' : 'text-red-500'
                }`}>
                  {selectedToken.change24h >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                  <span className="text-sm">{selectedToken.change24h >= 0 ? '+' : ''}{selectedToken.change24h}%</span>
                </div>
              </div>
            )}
          </div>
          <div className="flex items-center justify-center h-[200px] text-gray-500">
            <BarChart3 className="w-12 h-12 opacity-20" />
            <span className="ml-4">Chart coming soon</span>
          </div>
        </div>

        {/* Order Form */}
        <div className="bg-gray-950 border border-gray-800 rounded-lg p-4">
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setOrderType('buy')}
              className={`flex-1 py-2 rounded font-medium ${
                orderType === 'buy' 
                  ? 'bg-green-500/20 text-green-500 border border-green-500' 
                  : 'bg-gray-900 text-gray-400 border border-gray-800'
              }`}
            >
              Buy {selectedToken?.type === 'compute' || selectedToken?.type === 'ai' ? 'Access' : 'Tokens'}
            </button>
            <button
              onClick={() => setOrderType('sell')}
              className={`flex-1 py-2 rounded font-medium ${
                orderType === 'sell' 
                  ? 'bg-red-500/20 text-red-500 border border-red-500' 
                  : 'bg-gray-900 text-gray-400 border border-gray-800'
              }`}
            >
              Sell {selectedToken?.type === 'compute' || selectedToken?.type === 'ai' ? 'Access' : 'Tokens'}
            </button>
          </div>

          {selectedToken && (
            <div className="space-y-3">
              <div>
                <label className="text-xs text-gray-400 mb-1 block">
                  Price ({selectedToken.unit || 'BSV per token'})
                </label>
                <input
                  type="number"
                  step={selectedToken.price < 0.01 ? "0.000001" : "0.0001"}
                  placeholder={selectedToken.price.toFixed(selectedToken.price < 0.01 ? 6 : 4)}
                  className="w-full px-3 py-2 bg-gray-900 border border-gray-800 rounded focus:border-[#ffa500] outline-none"
                />
              </div>
              <div>
                <label className="text-xs text-gray-400 mb-1 block">
                  {selectedToken.type === 'compute' || selectedToken.type === 'ai' 
                    ? `Duration ${selectedToken.unit?.includes('hour') ? '(hours)' : selectedToken.unit?.includes('request') ? '(requests)' : '(units)'}`
                    : 'Amount (Tokens)'
                  }
                </label>
                <input
                  type="number"
                  placeholder="0"
                  className="w-full px-3 py-2 bg-gray-900 border border-gray-800 rounded focus:border-[#ffa500] outline-none"
                />
              </div>
              <div>
                <label className="text-xs text-gray-400 mb-1 block">Total (BSV)</label>
                <input
                  type="number"
                  step="0.00001"
                  placeholder="0.00000"
                  disabled
                  className="w-full px-3 py-2 bg-gray-900 border border-gray-800 rounded opacity-50"
                />
              </div>
              <button className={`w-full py-3 rounded font-medium ${
                orderType === 'buy' 
                  ? 'bg-green-500 text-black hover:bg-green-400' 
                  : 'bg-red-500 text-white hover:bg-red-400'
              }`}>
                {orderType === 'buy' ? 'Buy' : 'Sell'} {selectedToken.symbol}
              </button>
            </div>
          )}

          {!selectedToken && (
            <div className="text-center text-gray-500 py-8">
              Select a token to start trading
            </div>
          )}
        </div>
      </div>

      {/* Market Info */}
      <div className="col-span-3 space-y-6">
        {selectedToken && (
          <div className="bg-gray-950 border border-gray-800 rounded-lg p-4">
            <h3 className="text-sm font-light mb-3">Token Details</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Symbol:</span>
                <span>{selectedToken.symbol}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Type:</span>
                <span className="capitalize">{selectedToken.type}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Market Cap:</span>
                <span>{selectedToken.marketCap}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">24h Volume:</span>
                <span>{(selectedToken.volume24h / 1000).toFixed(1)}K BSV</span>
              </div>
              {selectedToken.available && (
                <div className="flex justify-between">
                  <span className="text-gray-400">Available:</span>
                  <span className="text-green-500">{selectedToken.available.toLocaleString()}</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Market Overview */}
        <div className="bg-gray-950 border border-gray-800 rounded-lg p-4">
          <h3 className="text-sm font-light mb-3">Market Overview</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">Total Markets:</span>
              <span>{allTokens.length}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">App Tokens:</span>
              <span>{appTokens.length}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Compute Resources:</span>
              <span>{computeTokens.length}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">AI Services:</span>
              <span>{aiTokens.length}</span>
            </div>
            <div className="flex justify-between border-t border-gray-800 pt-2 mt-2">
              <span className="text-gray-400">24h Total Volume:</span>
              <span className="text-[#ffa500]">2.4M BSV</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TradingInterface