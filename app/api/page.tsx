'use client'

import { useState, useEffect } from 'react'
import ProofOfConceptBanner from '../../components/ProofOfConceptBanner'
import TaskBar from '../../components/TaskBar'
import DevSidebar from '../../components/DevSidebar'
import DockManager from '../../components/DockManager'
import Footer from '../../components/Footer'

export default function APIPage() {
  const [isDevSidebarCollapsed, setIsDevSidebarCollapsed] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [activeEndpoint, setActiveEndpoint] = useState('overview')

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const endpoints = [
    { id: 'overview', title: 'Overview', icon: '📋' },
    { id: 'authentication', title: 'Authentication', icon: '🔐' },
    { id: 'markets', title: 'Markets', icon: '📊' },
    { id: 'trading', title: 'Trading', icon: '💱' },
    { id: 'websockets', title: 'WebSockets', icon: '🔌' },
    { id: 'errors', title: 'Error Codes', icon: '⚠️' }
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
              Bitcoin Exchange <span className="text-green-500">API</span>
            </h1>
            <p className="text-gray-400">RESTful API for trading and market data access</p>
            <div className="mt-4">
              <div className="inline-block px-4 py-2 bg-green-500/10 border border-green-500 rounded-full text-green-500 text-sm">
                Base URL: https://api.bitcoin-exchange.vercel.app/v1
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <nav className="sticky top-8">
                <h2 className="text-lg font-medium mb-4 text-green-500">API Reference</h2>
                <ul className="space-y-2">
                  {endpoints.map((endpoint) => (
                    <li key={endpoint.id}>
                      <button
                        onClick={() => setActiveEndpoint(endpoint.id)}
                        className={`w-full text-left p-3 rounded-lg transition-colors flex items-center space-x-3 ${
                          activeEndpoint === endpoint.id
                            ? 'bg-green-500/10 text-green-500 border border-green-500/30'
                            : 'text-gray-400 hover:text-white hover:bg-gray-900'
                        }`}
                      >
                        <span className="text-lg">{endpoint.icon}</span>
                        <span className="text-sm">{endpoint.title}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              
              {activeEndpoint === 'overview' && (
                <div>
                  <h2 className="text-2xl font-light mb-6 text-green-500">API Overview</h2>
                  
                  <div className="bg-gray-950 border border-gray-800 rounded-lg p-6 mb-8">
                    <h3 className="text-xl font-normal mb-4">Welcome to Bitcoin Exchange API</h3>
                    <p className="text-gray-300 mb-4">
                      The Bitcoin Exchange API provides programmatic access to all exchange functionality, 
                      including trading, market data, and account management.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-gray-900 p-4 rounded">
                        <h4 className="text-green-400 font-normal mb-2">REST API</h4>
                        <p className="text-sm text-gray-300">Standard HTTP endpoints for all operations</p>
                      </div>
                      <div className="bg-gray-900 p-4 rounded">
                        <h4 className="text-green-400 font-normal mb-2">WebSockets</h4>
                        <p className="text-sm text-gray-300">Real-time market data and order updates</p>
                      </div>
                      <div className="bg-gray-900 p-4 rounded">
                        <h4 className="text-green-400 font-normal mb-2">Rate Limits</h4>
                        <p className="text-sm text-gray-300">Tiered limits based on subscription level</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-950 border border-gray-800 rounded-lg p-6">
                      <h4 className="text-lg font-normal mb-3 text-green-500">Quick Start</h4>
                      <ol className="list-decimal list-inside space-y-2 text-gray-300 text-sm">
                        <li>Register for API access</li>
                        <li>Generate API key pair</li>
                        <li>Make your first request</li>
                        <li>Implement error handling</li>
                      </ol>
                    </div>
                    <div className="bg-gray-950 border border-gray-800 rounded-lg p-6">
                      <h4 className="text-lg font-normal mb-3 text-green-500">Rate Limits</h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li><span className="text-green-400">Free:</span> 100 requests/hour</li>
                        <li><span className="text-green-400">Pro:</span> 1,000 requests/hour</li>
                        <li><span className="text-green-400">Enterprise:</span> Unlimited</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeEndpoint === 'authentication' && (
                <div>
                  <h2 className="text-2xl font-light mb-6 text-green-500">Authentication</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-gray-950 border border-gray-800 rounded-lg p-6">
                      <h3 className="text-xl font-normal mb-4">API Key Authentication</h3>
                      <p className="text-gray-300 mb-4">
                        All API requests require authentication using API keys. Include your API key in the Authorization header.
                      </p>
                      <div className="bg-gray-900 p-4 rounded">
                        <code className="text-green-400 text-sm">
                          Authorization: Bearer YOUR_API_KEY
                        </code>
                      </div>
                    </div>

                    <div className="bg-gray-950 border border-gray-800 rounded-lg p-6">
                      <h3 className="text-xl font-normal mb-4">Generating API Keys</h3>
                      <ol className="list-decimal list-inside space-y-2 text-gray-300">
                        <li>Log in to your Bitcoin Exchange account</li>
                        <li>Navigate to API Settings</li>
                        <li>Click "Generate New API Key"</li>
                        <li>Set permissions and restrictions</li>
                        <li>Store your keys securely</li>
                      </ol>
                    </div>

                    <div className="bg-gray-950 border border-red-800 rounded-lg p-6">
                      <h3 className="text-xl font-normal mb-4 text-red-400">Security Best Practices</h3>
                      <ul className="space-y-2 text-gray-300">
                        <li>• Never share your API keys</li>
                        <li>• Use different keys for different applications</li>
                        <li>• Rotate keys regularly</li>
                        <li>• Restrict key permissions to minimum required</li>
                        <li>• Use IP restrictions when possible</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeEndpoint === 'markets' && (
                <div>
                  <h2 className="text-2xl font-light mb-6 text-green-500">Market Data</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-gray-950 border border-gray-800 rounded-lg p-6">
                      <h3 className="text-xl font-normal mb-4">Get All Markets</h3>
                      <div className="flex items-center space-x-2 mb-4">
                        <span className="px-2 py-1 bg-green-500 text-black text-xs rounded font-mono">GET</span>
                        <code className="text-green-400">/markets</code>
                      </div>
                      <p className="text-gray-300 mb-4">Returns all available trading pairs and their current status.</p>
                      
                      <h4 className="font-normal text-green-400 mb-2">Response Example:</h4>
                      <div className="bg-gray-900 p-4 rounded overflow-x-auto">
                        <pre className="text-sm text-gray-300">
{`{
  "data": [
    {
      "symbol": "BWRITER/BSV",
      "base": "BWRITER",
      "quote": "BSV",
      "status": "active",
      "minTradeSize": "0.001",
      "maxTradeSize": "1000000",
      "priceStep": "0.00001",
      "volumeStep": "0.001"
    }
  ]
}`}
                        </pre>
                      </div>
                    </div>

                    <div className="bg-gray-950 border border-gray-800 rounded-lg p-6">
                      <h3 className="text-xl font-normal mb-4">Get Order Book</h3>
                      <div className="flex items-center space-x-2 mb-4">
                        <span className="px-2 py-1 bg-green-500 text-black text-xs rounded font-mono">GET</span>
                        <code className="text-green-400">/orderbook/:symbol</code>
                      </div>
                      <p className="text-gray-300 mb-4">Returns current order book for a trading pair.</p>
                      
                      <h4 className="font-normal text-green-400 mb-2">Parameters:</h4>
                      <ul className="text-sm text-gray-300 mb-4 space-y-1">
                        <li><code className="text-green-400">symbol</code> - Trading pair symbol (e.g., BWRITER/BSV)</li>
                        <li><code className="text-green-400">limit</code> - Number of orders to return (default: 50, max: 1000)</li>
                      </ul>

                      <h4 className="font-normal text-green-400 mb-2">Response Example:</h4>
                      <div className="bg-gray-900 p-4 rounded overflow-x-auto">
                        <pre className="text-sm text-gray-300">
{`{
  "symbol": "BWRITER/BSV",
  "bids": [
    ["51.23", "1000.5"],
    ["51.22", "500.0"]
  ],
  "asks": [
    ["51.24", "750.0"],
    ["51.25", "1200.0"]
  ],
  "timestamp": 1640995200000
}`}
                        </pre>
                      </div>
                    </div>

                    <div className="bg-gray-950 border border-gray-800 rounded-lg p-6">
                      <h3 className="text-xl font-normal mb-4">Get Trade History</h3>
                      <div className="flex items-center space-x-2 mb-4">
                        <span className="px-2 py-1 bg-green-500 text-black text-xs rounded font-mono">GET</span>
                        <code className="text-green-400">/trades/:symbol</code>
                      </div>
                      <p className="text-gray-300 mb-4">Returns recent trade history for a trading pair.</p>
                      
                      <div className="bg-gray-900 p-4 rounded overflow-x-auto">
                        <pre className="text-sm text-gray-300">
{`{
  "data": [
    {
      "id": "12345",
      "price": "51.23",
      "quantity": "100.0",
      "side": "buy",
      "timestamp": 1640995200000
    }
  ]
}`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeEndpoint === 'trading' && (
                <div>
                  <h2 className="text-2xl font-light mb-6 text-green-500">Trading</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-gray-950 border border-gray-800 rounded-lg p-6">
                      <h3 className="text-xl font-normal mb-4">Place Order</h3>
                      <div className="flex items-center space-x-2 mb-4">
                        <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded font-mono">POST</span>
                        <code className="text-green-400">/orders</code>
                      </div>
                      <p className="text-gray-300 mb-4">Create a new trading order.</p>
                      
                      <h4 className="font-normal text-green-400 mb-2">Request Body:</h4>
                      <div className="bg-gray-900 p-4 rounded overflow-x-auto mb-4">
                        <pre className="text-sm text-gray-300">
{`{
  "symbol": "BWRITER/BSV",
  "side": "buy",
  "type": "limit",
  "quantity": "100.0",
  "price": "51.23",
  "timeInForce": "GTC"
}`}
                        </pre>
                      </div>

                      <h4 className="font-normal text-green-400 mb-2">Parameters:</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li><code className="text-green-400">symbol</code> - Trading pair symbol</li>
                        <li><code className="text-green-400">side</code> - Order side (buy/sell)</li>
                        <li><code className="text-green-400">type</code> - Order type (market/limit)</li>
                        <li><code className="text-green-400">quantity</code> - Order quantity</li>
                        <li><code className="text-green-400">price</code> - Order price (required for limit orders)</li>
                        <li><code className="text-green-400">timeInForce</code> - Time in force (GTC/IOC/FOK)</li>
                      </ul>
                    </div>

                    <div className="bg-gray-950 border border-gray-800 rounded-lg p-6">
                      <h3 className="text-xl font-normal mb-4">Get Orders</h3>
                      <div className="flex items-center space-x-2 mb-4">
                        <span className="px-2 py-1 bg-green-500 text-black text-xs rounded font-mono">GET</span>
                        <code className="text-green-400">/orders</code>
                      </div>
                      <p className="text-gray-300 mb-4">Get your active and historical orders.</p>
                      
                      <div className="bg-gray-900 p-4 rounded overflow-x-auto">
                        <pre className="text-sm text-gray-300">
{`{
  "data": [
    {
      "id": "order123",
      "symbol": "BWRITER/BSV",
      "side": "buy",
      "type": "limit",
      "quantity": "100.0",
      "price": "51.23",
      "filled": "50.0",
      "remaining": "50.0",
      "status": "partially_filled",
      "timestamp": 1640995200000
    }
  ]
}`}
                        </pre>
                      </div>
                    </div>

                    <div className="bg-gray-950 border border-gray-800 rounded-lg p-6">
                      <h3 className="text-xl font-normal mb-4">Cancel Order</h3>
                      <div className="flex items-center space-x-2 mb-4">
                        <span className="px-2 py-1 bg-red-500 text-white text-xs rounded font-mono">DELETE</span>
                        <code className="text-green-400">/orders/:orderId</code>
                      </div>
                      <p className="text-gray-300 mb-4">Cancel an existing order.</p>
                      
                      <div className="bg-gray-900 p-4 rounded overflow-x-auto">
                        <pre className="text-sm text-gray-300">
{`{
  "id": "order123",
  "status": "cancelled",
  "timestamp": 1640995200000
}`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeEndpoint === 'websockets' && (
                <div>
                  <h2 className="text-2xl font-light mb-6 text-green-500">WebSocket API</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-gray-950 border border-gray-800 rounded-lg p-6">
                      <h3 className="text-xl font-normal mb-4">Connection</h3>
                      <p className="text-gray-300 mb-4">
                        Connect to real-time market data and order updates via WebSocket.
                      </p>
                      <div className="bg-gray-900 p-4 rounded">
                        <code className="text-green-400 text-sm">
                          wss://ws.bitcoin-exchange.vercel.app/v1/stream
                        </code>
                      </div>
                    </div>

                    <div className="bg-gray-950 border border-gray-800 rounded-lg p-6">
                      <h3 className="text-xl font-normal mb-4">Subscribe to Order Book</h3>
                      <p className="text-gray-300 mb-4">Subscribe to real-time order book updates.</p>
                      
                      <h4 className="font-normal text-green-400 mb-2">Subscribe Message:</h4>
                      <div className="bg-gray-900 p-4 rounded overflow-x-auto mb-4">
                        <pre className="text-sm text-gray-300">
{`{
  "method": "subscribe",
  "params": {
    "channel": "orderbook",
    "symbol": "BWRITER/BSV"
  },
  "id": 1
}`}
                        </pre>
                      </div>

                      <h4 className="font-normal text-green-400 mb-2">Update Message:</h4>
                      <div className="bg-gray-900 p-4 rounded overflow-x-auto">
                        <pre className="text-sm text-gray-300">
{`{
  "channel": "orderbook",
  "symbol": "BWRITER/BSV",
  "data": {
    "bids": [["51.23", "1000.5"]],
    "asks": [["51.24", "750.0"]],
    "timestamp": 1640995200000
  }
}`}
                        </pre>
                      </div>
                    </div>

                    <div className="bg-gray-950 border border-gray-800 rounded-lg p-6">
                      <h3 className="text-xl font-normal mb-4">Available Channels</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-gray-900 p-4 rounded">
                          <h4 className="text-green-400 font-normal mb-2">orderbook</h4>
                          <p className="text-sm text-gray-300">Real-time order book updates</p>
                        </div>
                        <div className="bg-gray-900 p-4 rounded">
                          <h4 className="text-green-400 font-normal mb-2">trades</h4>
                          <p className="text-sm text-gray-300">Live trade execution data</p>
                        </div>
                        <div className="bg-gray-900 p-4 rounded">
                          <h4 className="text-green-400 font-normal mb-2">ticker</h4>
                          <p className="text-sm text-gray-300">24h price and volume statistics</p>
                        </div>
                        <div className="bg-gray-900 p-4 rounded">
                          <h4 className="text-green-400 font-normal mb-2">orders</h4>
                          <p className="text-sm text-gray-300">Personal order updates (auth required)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeEndpoint === 'errors' && (
                <div>
                  <h2 className="text-2xl font-light mb-6 text-green-500">Error Codes</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-gray-950 border border-gray-800 rounded-lg p-6">
                      <h3 className="text-xl font-normal mb-4">HTTP Status Codes</h3>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                          <span className="px-2 py-1 bg-green-500 text-black text-xs rounded font-mono w-12 text-center">200</span>
                          <span className="text-gray-300">Success - Request completed successfully</span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className="px-2 py-1 bg-yellow-500 text-black text-xs rounded font-mono w-12 text-center">400</span>
                          <span className="text-gray-300">Bad Request - Invalid request parameters</span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className="px-2 py-1 bg-orange-500 text-black text-xs rounded font-mono w-12 text-center">401</span>
                          <span className="text-gray-300">Unauthorized - Invalid API key</span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className="px-2 py-1 bg-red-500 text-white text-xs rounded font-mono w-12 text-center">403</span>
                          <span className="text-gray-300">Forbidden - Insufficient permissions</span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className="px-2 py-1 bg-red-500 text-white text-xs rounded font-mono w-12 text-center">404</span>
                          <span className="text-gray-300">Not Found - Resource does not exist</span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className="px-2 py-1 bg-red-500 text-white text-xs rounded font-mono w-12 text-center">429</span>
                          <span className="text-gray-300">Rate Limited - Too many requests</span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className="px-2 py-1 bg-red-500 text-white text-xs rounded font-mono w-12 text-center">500</span>
                          <span className="text-gray-300">Internal Error - Server error</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-950 border border-gray-800 rounded-lg p-6">
                      <h3 className="text-xl font-normal mb-4">Application Error Codes</h3>
                      <div className="bg-gray-900 p-4 rounded overflow-x-auto mb-4">
                        <pre className="text-sm text-gray-300">
{`{
  "error": {
    "code": "INSUFFICIENT_BALANCE",
    "message": "Insufficient balance to place order",
    "details": {
      "required": "100.0",
      "available": "50.0",
      "currency": "BSV"
    }
  }
}`}
                        </pre>
                      </div>

                      <div className="space-y-3">
                        <div className="border-l-2 border-red-500 pl-4">
                          <code className="text-red-400 font-mono text-sm">INSUFFICIENT_BALANCE</code>
                          <p className="text-gray-300 text-sm">Account balance too low for operation</p>
                        </div>
                        <div className="border-l-2 border-red-500 pl-4">
                          <code className="text-red-400 font-mono text-sm">INVALID_SYMBOL</code>
                          <p className="text-gray-300 text-sm">Trading pair does not exist</p>
                        </div>
                        <div className="border-l-2 border-red-500 pl-4">
                          <code className="text-red-400 font-mono text-sm">ORDER_NOT_FOUND</code>
                          <p className="text-gray-300 text-sm">Order ID does not exist</p>
                        </div>
                        <div className="border-l-2 border-red-500 pl-4">
                          <code className="text-red-400 font-mono text-sm">MARKET_CLOSED</code>
                          <p className="text-gray-300 text-sm">Market is temporarily unavailable</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-950 border border-gray-800 rounded-lg p-6">
                      <h3 className="text-xl font-normal mb-4">Rate Limiting</h3>
                      <p className="text-gray-300 mb-4">
                        When rate limits are exceeded, the API returns a 429 status code with retry information.
                      </p>
                      <div className="bg-gray-900 p-4 rounded overflow-x-auto">
                        <pre className="text-sm text-gray-300">
{`HTTP/1.1 429 Too Many Requests
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 0
X-RateLimit-Reset: 1640995260
Retry-After: 60

{
  "error": {
    "code": "RATE_LIMIT_EXCEEDED",
    "message": "API rate limit exceeded",
    "retryAfter": 60
  }
}`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>

      <Footer />
      <DockManager />
    </div>
  )
}