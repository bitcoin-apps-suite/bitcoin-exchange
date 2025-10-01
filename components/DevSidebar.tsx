'use client'

import React, { useState } from 'react'
import { 
  Terminal, 
  Code, 
  Activity, 
  Settings, 
  Database, 
  TrendingUp,
  Cpu,
  HardDrive,
  Network,
  ChevronDown,
  ChevronRight
} from 'lucide-react'

interface DevSidebarProps {
  isVisible: boolean
  onClose: () => void
}

const DevSidebar: React.FC<DevSidebarProps> = ({ isVisible, onClose }) => {
  const [activeSection, setActiveSection] = useState<string>('api')
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['api', 'trading']))

  const toggleSection = (section: string) => {
    const newExpanded = new Set(expandedSections)
    if (newExpanded.has(section)) {
      newExpanded.delete(section)
    } else {
      newExpanded.add(section)
    }
    setExpandedSections(newExpanded)
  }

  if (!isVisible) return null

  return (
    <div className="fixed left-0 top-0 bottom-0 w-80 bg-gray-950 border-r border-gray-800 text-white z-40 overflow-y-auto">
      <div className="p-4 pt-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-medium flex items-center gap-2">
            <Terminal className="w-5 h-5 text-[#ffa500]" />
            Exchange Dev Console
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            ×
          </button>
        </div>

        {/* API Section */}
        <div className="mb-4">
          <button
            onClick={() => toggleSection('api')}
            className="w-full flex items-center justify-between p-2 hover:bg-gray-800 rounded"
          >
            <div className="flex items-center gap-2">
              <Code className="w-4 h-4" />
              <span>API & SDK</span>
            </div>
            {expandedSections.has('api') ? 
              <ChevronDown className="w-4 h-4" /> : 
              <ChevronRight className="w-4 h-4" />
            }
          </button>
          
          {expandedSections.has('api') && (
            <div className="ml-6 mt-2 space-y-1">
              <div className="text-sm text-gray-400 p-2">REST API Endpoints:</div>
              <div className="text-xs font-mono bg-gray-900 p-2 rounded">
                GET /api/v1/markets<br/>
                GET /api/v1/orderbook/:pair<br/>
                POST /api/v1/orders<br/>
                GET /api/v1/portfolio<br/>
                WS /ws/market-data
              </div>
              <button className="text-xs text-[#ffa500] hover:underline">
                View Full Documentation
              </button>
            </div>
          )}
        </div>

        {/* Trading Section */}
        <div className="mb-4">
          <button
            onClick={() => toggleSection('trading')}
            className="w-full flex items-center justify-between p-2 hover:bg-gray-800 rounded"
          >
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              <span>Trading Engine</span>
            </div>
            {expandedSections.has('trading') ? 
              <ChevronDown className="w-4 h-4" /> : 
              <ChevronRight className="w-4 h-4" />
            }
          </button>
          
          {expandedSections.has('trading') && (
            <div className="ml-6 mt-2 space-y-2">
              <div className="text-sm space-y-1">
                <div className="flex justify-between">
                  <span className="text-gray-400">Order Processing:</span>
                  <span className="text-green-500">98.7ms avg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Match Engine:</span>
                  <span className="text-green-500">Active</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Liquidity:</span>
                  <span className="text-yellow-500">$2.4M</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Computational Resources */}
        <div className="mb-4">
          <button
            onClick={() => toggleSection('compute')}
            className="w-full flex items-center justify-between p-2 hover:bg-gray-800 rounded"
          >
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              <span>Compute Resources</span>
            </div>
            {expandedSections.has('compute') ? 
              <ChevronDown className="w-4 h-4" /> : 
              <ChevronRight className="w-4 h-4" />
            }
          </button>
          
          {expandedSections.has('compute') && (
            <div className="ml-6 mt-2 space-y-2">
              <div className="text-xs space-y-1">
                <div className="bg-gray-900 p-2 rounded">
                  <div className="text-[#ffa500] font-mono">$B_GPU_RTX4090</div>
                  <div className="text-gray-400">Price: 0.0012 BSV/hr</div>
                  <div className="text-green-500">Available: 247 units</div>
                </div>
                <div className="bg-gray-900 p-2 rounded">
                  <div className="text-[#ffa500] font-mono">$B_CPU_XEON</div>
                  <div className="text-gray-400">Price: 0.0003 BSV/hr</div>
                  <div className="text-green-500">Available: 1,247 units</div>
                </div>
                <div className="bg-gray-900 p-2 rounded">
                  <div className="text-[#ffa500] font-mono">$B_AI_INFERENCE</div>
                  <div className="text-gray-400">Price: 0.0008 BSV/req</div>
                  <div className="text-green-500">Available: 89 nodes</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Network Stats */}
        <div className="mb-4">
          <button
            onClick={() => toggleSection('network')}
            className="w-full flex items-center justify-between p-2 hover:bg-gray-800 rounded"
          >
            <div className="flex items-center gap-2">
              <Network className="w-4 h-4" />
              <span>Network Stats</span>
            </div>
            {expandedSections.has('network') ? 
              <ChevronDown className="w-4 h-4" /> : 
              <ChevronRight className="w-4 h-4" />
            }
          </button>
          
          {expandedSections.has('network') && (
            <div className="ml-6 mt-2 space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">BSV Price:</span>
                <span className="text-green-500">$51.23</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Network TX/s:</span>
                <span className="text-green-500">1,247,891</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Active Pairs:</span>
                <span className="text-white">847</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">24h Volume:</span>
                <span className="text-[#ffa500]">2.4M BSV</span>
              </div>
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="mt-8 pt-4 border-t border-gray-800">
          <div className="text-sm font-medium mb-3">Quick Actions</div>
          <div className="space-y-2">
            <button className="w-full text-left p-2 text-sm hover:bg-gray-800 rounded">
              Deploy Trading Bot
            </button>
            <button className="w-full text-left p-2 text-sm hover:bg-gray-800 rounded">
              Create Market Pair
            </button>
            <button className="w-full text-left p-2 text-sm hover:bg-gray-800 rounded">
              Export Trade Data
            </button>
            <button className="w-full text-left p-2 text-sm hover:bg-gray-800 rounded">
              API Key Management
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DevSidebar