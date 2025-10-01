'use client'

import React, { useState, useEffect } from 'react'
import { 
  Wallet, Mail, Music, FileText, HardDrive, Calendar, Search, 
  Table, Share2, Briefcase, Store, TrendingUp, Palette, Video, 
  GraduationCap, Paintbrush, Clock, Wifi, Volume2, Battery 
} from 'lucide-react'

interface DockApp {
  id?: string
  name: string
  icon: any
  color: string
  url?: string
  disabled?: boolean
  current?: boolean
  isImage?: boolean
}

const Dock: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const getIconColor = (colorClass: string): string => {
    const colorMap: { [key: string]: string } = {
      'text-orange-500': '#f97316',
      'text-bitcoin-orange': '#f7931a',
      'text-yellow-500': '#eab308',
      'text-red-500': '#ef4444',
      'text-purple-500': '#a855f7',
      'text-fuchsia-500': '#d946ef',
      'text-green-500': '#22c55e',
      'text-blue-500': '#3b82f6',
      'text-gray-500': '#6b7280',
      'text-sky-400': '#38bdf8',
      'text-cyan-500': '#06b6d4',
      'text-cyan-400': '#22d3ee'
    }
    return colorMap[colorClass] || '#ffffff'
  }

  const dockApps: DockApp[] = [
    { name: 'Bitcoin Apps Store', icon: Store, color: 'text-orange-500', url: 'https://www.bitcoinapps.store/' },
    { name: 'Bitcoin Exchange', icon: TrendingUp, color: 'text-orange-500', current: true },
    { name: 'Bitcoin Wallet', icon: Wallet, color: 'text-yellow-500', url: 'https://bitcoin-wallet-sable.vercel.app' },
    { name: 'Bitcoin Writer', icon: FileText, color: 'text-orange-500', url: 'https://bitcoin-writer.vercel.app' },
    { name: 'Bitcoin Drive', icon: HardDrive, color: 'text-green-500', url: 'https://bitcoin-drive.vercel.app' },
    { name: 'Bitcoin Email', icon: Mail, color: 'text-red-500', url: 'https://bitcoin-email.vercel.app' },
    { name: 'Bitcoin Music', icon: Music, color: 'text-purple-500', url: 'https://bitcoin-music.vercel.app' },
    { name: 'Bitcoin Video', icon: Video, color: 'text-purple-500', url: 'https://bitcoin-video-nine.vercel.app/' },
    { name: 'Bitcoin Art', icon: Palette, color: 'text-orange-500', url: 'https://bitcoin-art.vercel.app' },
    { name: 'Bitcoin Paint', icon: Paintbrush, color: 'text-yellow-500', url: 'https://bitcoin-paint.vercel.app' },
    { name: 'Bitcoin Education', icon: GraduationCap, color: 'text-blue-500', url: 'https://bitcoin-education-theta.vercel.app' },
    { name: 'Bitcoin Search', icon: Search, color: 'text-blue-500', url: 'https://bitcoin-search.vercel.app' },
    { name: 'Bitcoin Jobs', icon: Briefcase, color: 'text-cyan-400', url: 'https://bitcoin-jobs.vercel.app/' },
    { name: 'Bitcoin Calendar', icon: Calendar, color: 'text-fuchsia-500', url: 'https://bitcoin-calendar.vercel.app' },
    { name: 'Bitcoin Spreadsheet', icon: Table, color: 'text-sky-400', url: 'https://bitcoin-spreadsheet.vercel.app' },
  ]

  const handleAppClick = (app: DockApp) => {
    if (!app.disabled && app.url && !app.current) {
      window.open(app.url, '_blank')
    }
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pb-4">
      <div className="bg-gray-900/90 backdrop-blur-lg border border-gray-700 rounded-2xl px-4 py-2 shadow-2xl">
        <div className="flex items-center space-x-2">
          {/* App icons */}
          <div className="flex space-x-1">
            {dockApps.map((app) => {
              const Icon = app.icon
              return (
                <button
                  key={app.name}
                  className={`
                    relative p-3 rounded-xl transition-all duration-200 hover:scale-110 hover:bg-white/10
                    ${app.current ? 'bg-[#ffa500]/20 border border-[#ffa500]/50' : ''}
                    ${app.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                  `}
                  onClick={() => handleAppClick(app)}
                  title={app.name}
                  disabled={app.disabled}
                >
                  <Icon 
                    className="w-6 h-6" 
                    style={{ color: getIconColor(app.color) }}
                  />
                  {app.current && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#ffa500] rounded-full"></div>
                  )}
                </button>
              )
            })}
          </div>
          
          <div className="w-px h-8 bg-gray-600 mx-2" />
          
          {/* System indicators */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1 text-gray-400">
              <Wifi className="w-4 h-4" />
              <Volume2 className="w-4 h-4" />
              <Battery className="w-4 h-4" />
            </div>
            
            <div className="text-sm text-gray-300 font-mono">
              {mounted && currentTime.toLocaleTimeString([], { 
                hour: '2-digit', 
                minute: '2-digit' 
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dock