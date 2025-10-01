'use client'

import { Bitcoin } from 'lucide-react'

interface OSTaskbarProps {
  openWindows: string[]
  activeWindow: string | null
  onWindowClick: (window: string) => void
}

export default function OSTaskbar({ openWindows, activeWindow, onWindowClick }: OSTaskbarProps) {
  return (
    <div className="taskbar relative h-10 flex items-center justify-between px-4 hidden md:flex z-50 bg-gray-800/95 backdrop-blur-sm border-b border-gray-700">
      <div className="flex items-center space-x-2">
        <button className="p-1 hover:bg-white/10 rounded transition-colors">
          <Bitcoin className="w-4 h-4 text-[#ffa500]" />
        </button>
        
        <div className="border-l border-gray-600 h-6 mx-2" />
        
        {/* Open Windows */}
        <div className="flex space-x-1">
          {openWindows.map((window) => (
            <button
              key={window}
              className={`px-3 py-1 rounded text-sm transition-colors ${
                activeWindow === window 
                  ? 'bg-[#ffa500] text-black' 
                  : 'bg-gray-800 hover:bg-gray-700 text-white'
              }`}
              onClick={() => onWindowClick(window)}
            >
              {window}
            </button>
          ))}
        </div>
      </div>
      
      {/* Right side - system status */}
      <div className="flex items-center space-x-2 text-sm text-gray-300">
        <span>Exchange Active</span>
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
      </div>
    </div>
  )
}