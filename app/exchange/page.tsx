'use client'

import { useState, useEffect } from 'react'
import ProofOfConceptBanner from '../../components/ProofOfConceptBanner'
import TaskBar from '../../components/TaskBar'
import DevSidebar from '../../components/DevSidebar'
import Dock from '../../components/Dock'
import Footer from '../../components/Footer'
import TradingInterface from '../../components/TradingInterface'

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

export default function ExchangePage() {
  const [isDevSidebarCollapsed, setIsDevSidebarCollapsed] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [selectedToken, setSelectedToken] = useState<Token | null>(null)
  const [orderType, setOrderType] = useState<'market' | 'limit'>('market')
  const [side, setSide] = useState<'buy' | 'sell'>('buy')
  const [amount, setAmount] = useState('')
  const [price, setPrice] = useState('')

  // Static order book data to avoid hydration mismatch
  const sellOrders = [
    { price: 51.30, amount: 1247.83, total: 63910 },
    { price: 51.29, amount: 892.45, total: 45782 },
    { price: 51.28, amount: 1563.21, total: 80134 },
    { price: 51.27, amount: 734.67, total: 37669 },
    { price: 51.26, amount: 1098.34, total: 56289 }
  ]

  const buyOrders = [
    { price: 51.22, amount: 945.12, total: 48394 },
    { price: 51.21, amount: 1234.56, total: 63234 },
    { price: 51.20, amount: 678.90, total: 34758 },
    { price: 51.19, amount: 1456.78, total: 74589 },
    { price: 51.18, amount: 823.45, total: 42156 }
  ]

  const recentTrades = [
    { time: '14:23:45', price: 51.23, amount: 245.67, type: 'buy' as const },
    { time: '14:23:42', price: 51.22, amount: 89.34, type: 'sell' as const },
    { time: '14:23:38', price: 51.24, amount: 156.78, type: 'buy' as const },
    { time: '14:23:35', price: 51.21, amount: 67.89, type: 'sell' as const },
    { time: '14:23:31', price: 51.25, amount: 234.56, type: 'buy' as const },
    { time: '14:23:28', price: 51.20, amount: 123.45, type: 'sell' as const },
    { time: '14:23:24', price: 51.23, amount: 345.67, type: 'buy' as const },
    { time: '14:23:21', price: 51.19, amount: 78.90, type: 'sell' as const },
    { time: '14:23:17', price: 51.26, amount: 189.23, type: 'buy' as const },
    { time: '14:23:14', price: 51.18, amount: 456.78, type: 'sell' as const }
  ]

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleTokenSelect = (token: Token) => {
    setSelectedToken(token)
  }

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
        
        {/* Exchange Header */}
        <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-4xl font-thin mb-2" style={{ letterSpacing: '-0.02em' }}>
                  <span className="text-white">Bitcoin</span>{' '}
                  <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Exchange</span>
                </h1>
                <p className="text-gray-400 font-light">Trade all bEX tokens from the Bitcoin Apps ecosystem</p>
              </div>
              <div className="flex space-x-6">
                <div className="text-center">
                  <div className="text-green-500 font-mono text-xl font-light">$51.23</div>
                  <div className="text-gray-500 text-xs">BSV/USD</div>
                </div>
                <div className="text-center">
                  <div className="text-emerald-500 font-mono text-xl font-light">7</div>
                  <div className="text-gray-500 text-xs">bEX Tokens</div>
                </div>
                <div className="text-center">
                  <div className="text-cyan-500 font-mono text-xl font-light">$25.2M</div>
                  <div className="text-gray-500 text-xs">Total Market Cap</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-black">
          <div className="h-full flex">
            {/* Main Trading Interface */}
            <div className="flex-1">
              <TradingInterface onSelectToken={handleTokenSelect} />
            </div>

            {/* Order Form - Side Panel */}
            <div className="w-80 bg-gray-950 border-l border-gray-800 p-6">
              <h2 className="text-xl font-light mb-6">Quick Trade</h2>
              
              {selectedToken ? (
                <>
                  <div className="mb-4">
                    <div className="text-sm text-gray-400 mb-2">Selected Token</div>
                    <div className="flex items-center space-x-2 p-3 bg-gray-900 rounded">
                      <span className="text-lg font-medium">{selectedToken.symbol}</span>
                      <span className="text-gray-500 text-sm">{selectedToken.name}</span>
                    </div>
                  </div>

                  {/* Buy/Sell Toggle */}
                  <div className="flex mb-4">
                    <button
                      onClick={() => setSide('buy')}
                      className={`flex-1 py-2 font-medium transition-colors ${
                        side === 'buy' 
                          ? 'bg-green-500 text-black' 
                          : 'bg-gray-900 text-gray-400 hover:bg-gray-800'
                      }`}
                    >
                      Buy
                    </button>
                    <button
                      onClick={() => setSide('sell')}
                      className={`flex-1 py-2 font-medium transition-colors ${
                        side === 'sell' 
                          ? 'bg-red-500 text-white' 
                          : 'bg-gray-900 text-gray-400 hover:bg-gray-800'
                      }`}
                    >
                      Sell
                    </button>
                  </div>

                  {/* Order Type */}
                  <div className="mb-4">
                    <div className="text-sm text-gray-400 mb-2">Order Type</div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setOrderType('market')}
                        className={`px-3 py-1 text-sm rounded ${
                          orderType === 'market'
                            ? 'bg-green-500/20 text-green-500 border border-green-500'
                            : 'bg-gray-900 text-gray-400 border border-gray-700'
                        }`}
                      >
                        Market
                      </button>
                      <button
                        onClick={() => setOrderType('limit')}
                        className={`px-3 py-1 text-sm rounded ${
                          orderType === 'limit'
                            ? 'bg-green-500/20 text-green-500 border border-green-500'
                            : 'bg-gray-900 text-gray-400 border border-gray-700'
                        }`}
                      >
                        Limit
                      </button>
                    </div>
                  </div>

                  {/* Amount Input */}
                  <div className="mb-4">
                    <div className="text-sm text-gray-400 mb-2">Amount</div>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="0.00"
                      className="w-full p-3 bg-gray-900 border border-gray-700 rounded text-white placeholder-gray-500 focus:border-green-500 focus:outline-none"
                    />
                  </div>

                  {/* Price Input (for limit orders) */}
                  {orderType === 'limit' && (
                    <div className="mb-4">
                      <div className="text-sm text-gray-400 mb-2">Price</div>
                      <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="0.00"
                        className="w-full p-3 bg-gray-900 border border-gray-700 rounded text-white placeholder-gray-500 focus:border-green-500 focus:outline-none"
                      />
                    </div>
                  )}

                  {/* Order Summary */}
                  <div className="mb-4 p-3 bg-gray-900 rounded">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Fee (0.1%)</span>
                      <span className="text-gray-300">0.00 BSV</span>
                    </div>
                    <div className="flex justify-between text-sm mt-2">
                      <span className="text-gray-400">Total</span>
                      <span className="text-white font-medium">0.00 BSV</span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    className={`w-full py-3 font-medium rounded transition-colors ${
                      side === 'buy'
                        ? 'bg-green-500 text-black hover:bg-green-400'
                        : 'bg-red-500 text-white hover:bg-red-400'
                    }`}
                  >
                    {side === 'buy' ? 'Buy' : 'Sell'} {selectedToken.symbol}
                  </button>
                </>
              ) : (
                <div className="text-center py-12 text-gray-400">
                  <div className="text-4xl mb-4">📊</div>
                  <p>Select a token to start trading</p>
                </div>
              )}
            </div>
          </div>

          {/* Order Book & Trade History */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
            {/* Order Book */}
            <div className="bg-gray-950 border border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-light mb-4">Order Book</h3>
              <div className="space-y-2">
                <div className="grid grid-cols-3 text-xs text-gray-500 pb-2 border-b border-gray-800">
                  <span>Price</span>
                  <span className="text-right">Amount</span>
                  <span className="text-right">Total</span>
                </div>
                {/* Sell Orders */}
                <div className="space-y-1">
                  {sellOrders.map((order, i) => (
                    <div key={`sell-${i}`} className="grid grid-cols-3 text-sm">
                      <span className="text-red-400 font-mono">{order.price.toFixed(2)}</span>
                      <span className="text-right text-gray-400">{order.amount.toFixed(2)}</span>
                      <span className="text-right text-gray-400">{order.total.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
                <div className="py-2 border-y border-gray-800">
                  <div className="text-center text-lg font-mono text-green-500">51.23</div>
                  <div className="text-center text-xs text-gray-500">Spread: 0.02</div>
                </div>
                {/* Buy Orders */}
                <div className="space-y-1">
                  {buyOrders.map((order, i) => (
                    <div key={`buy-${i}`} className="grid grid-cols-3 text-sm">
                      <span className="text-green-400 font-mono">{order.price.toFixed(2)}</span>
                      <span className="text-right text-gray-400">{order.amount.toFixed(2)}</span>
                      <span className="text-right text-gray-400">{order.total.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Trades */}
            <div className="bg-gray-950 border border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-light mb-4">Recent Trades</h3>
              <div className="space-y-2">
                <div className="grid grid-cols-4 text-xs text-gray-500 pb-2 border-b border-gray-800">
                  <span>Time</span>
                  <span>Price</span>
                  <span className="text-right">Amount</span>
                  <span className="text-right">Type</span>
                </div>
                {recentTrades.map((trade, i) => (
                  <div key={i} className="grid grid-cols-4 text-sm">
                    <span className="text-gray-500 text-xs">
                      {trade.time}
                    </span>
                    <span className={`font-mono ${trade.type === 'buy' ? 'text-green-400' : 'text-red-400'}`}>
                      {trade.price.toFixed(2)}
                    </span>
                    <span className="text-right text-gray-400">
                      {trade.amount.toFixed(2)}
                    </span>
                    <span className={`text-right text-xs ${trade.type === 'buy' ? 'text-green-500' : 'text-red-500'}`}>
                      {trade.type.toUpperCase()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Advanced Trading Features */}
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="p-6 bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-lg border border-gray-700">
              <h3 className="text-xl font-light mb-4 text-green-500">Advanced Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-normal mb-2">Cross-Exchange Arbitrage</h4>
                  <p className="text-sm text-gray-400">
                    Automatically identify and execute profitable arbitrage opportunities across integrated exchanges.
                  </p>
                  <button className="mt-3 px-4 py-2 bg-green-500/20 text-green-500 border border-green-500 rounded text-sm hover:bg-green-500/30 transition-colors">
                    Enable Arbitrage Bot
                  </button>
                </div>
                <div>
                  <h4 className="font-normal mb-2">Liquidity Aggregation</h4>
                  <p className="text-sm text-gray-400">
                    Access deep liquidity from multiple sources for best execution and minimal slippage.
                  </p>
                  <button className="mt-3 px-4 py-2 bg-green-500/20 text-green-500 border border-green-500 rounded text-sm hover:bg-green-500/30 transition-colors">
                    View Liquidity Map
                  </button>
                </div>
                <div>
                  <h4 className="font-normal mb-2">Composite Orders</h4>
                  <p className="text-sm text-gray-400">
                    Bundle multiple token purchases for complex workflows like AI rendering or content creation.
                  </p>
                  <button className="mt-3 px-4 py-2 bg-green-500/20 text-green-500 border border-green-500 rounded text-sm hover:bg-green-500/30 transition-colors">
                    Create Composite
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <Dock />
    </div>
  )
}