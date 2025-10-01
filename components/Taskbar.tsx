'use client'

import React, { useState, useRef, useEffect } from 'react'

interface MenuItem {
  label?: string
  action?: () => void
  href?: string
  divider?: boolean
  shortcut?: string
}

interface MenuData {
  label: string
  items: MenuItem[]
}

interface CleanTaskbarProps {
  isAuthenticated: boolean
  currentUser: any
  onLogout: () => void
  onNewOrder?: () => void
  onOpenWallet?: () => void
  onToggleDevSidebar?: () => void
}

const CleanTaskbar: React.FC<CleanTaskbarProps> = ({ 
  isAuthenticated, 
  currentUser, 
  onLogout,
  onNewOrder,
  onOpenWallet,
  onToggleDevSidebar
}) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [showBitcoinSuite, setShowBitcoinSuite] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenu(null)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    document.addEventListener('mousedown', handleClickOutside)
    
    return () => {
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const menus: MenuData[] = [
    {
      label: 'Bitcoin Exchange',
      items: [
        { label: 'Home', action: () => { window.location.href = '/' }},
        { divider: true },
        { label: 'About Bitcoin Exchange', action: () => alert('Bitcoin Exchange v1.0\n\nThe CPU of the World\'s Economy\nDecentralized exchange on Bitcoin SV\n\n© 2025 The Bitcoin Corporation LTD\nRegistered in England and Wales • Company No. 16735102\nAll rights reserved\n\nBuilt with BSV Teranode integration') },
        { label: 'Features', action: () => {} },
        { divider: true },
        { label: 'Preferences...', shortcut: '⌘,', action: () => {} },
        { label: 'Exchange Settings...', action: () => {} },
        { divider: true },
        { label: 'Hide Bitcoin Exchange', shortcut: '⌘H', action: () => {} },
        { label: 'Hide Others', shortcut: '⌥⌘H', action: () => {} },
        { divider: true },
        { label: isAuthenticated ? 'Disconnect Wallet' : 'Connect Wallet', shortcut: '⌘Q', action: isAuthenticated ? onLogout : () => {} }
      ]
    },
    {
      label: 'Trading',
      items: [
        { label: 'New Order', shortcut: '⌘N', action: onNewOrder || (() => {}) },
        { label: 'Order History', shortcut: '⌘H', action: () => {} },
        { label: 'Portfolio', shortcut: '⌘P', action: () => {} },
        { divider: true },
        { label: 'Market Data', action: () => {} },
        { label: 'Price Alerts', action: () => {} },
        { divider: true },
        { label: 'Import Orders', action: () => {} },
        { label: 'Export Trades', action: () => {} },
        { label: 'Trading Report', action: () => {} }
      ]
    },
    {
      label: 'Markets',
      items: [
        { label: 'Bitcoin Apps Tokens', action: () => {} },
        { label: 'Computational Resources', action: () => {} },
        { label: 'AI Services', action: () => {} },
        { divider: true },
        { label: 'Market Analytics', action: () => {} },
        { label: 'Volume Analysis', action: () => {} },
        { label: 'Price Discovery', action: () => {} }
      ]
    },
    {
      label: 'Bitcoin Apps',
      items: [
        { label: 'Bitcoin Writer', href: 'https://bitcoin-writer.vercel.app' },
        { label: 'Bitcoin Drive', href: 'https://bitcoin-drive.vercel.app' },
        { label: 'Bitcoin Music', href: 'https://bitcoin-music.vercel.app' },
        { label: 'Bitcoin Video', href: 'https://bitcoin-video-nine.vercel.app/' },
        { label: 'Bitcoin Art', href: 'https://bitcoin-art.vercel.app' },
        { label: 'Bitcoin Education', href: 'https://bitcoin-education-theta.vercel.app' },
        { label: 'Bitcoin Jobs', href: 'https://bitcoin-jobs.vercel.app' },
        { divider: true },
        { label: 'Apps Store', href: 'https://www.bitcoinapps.store' },
      ]
    },
    {
      label: 'Developer',
      items: [
        { label: 'API Documentation', action: () => {} },
        { label: 'Exchange SDK', action: () => {} },
        { label: 'Trading Bots', action: () => {} },
        { label: 'Market Data Feed', action: () => {} },
        { divider: true },
        { label: 'Toggle Dev Console', action: onToggleDevSidebar, shortcut: '⌘D' },
        { label: 'Network Stats', action: () => {} },
      ]
    }
  ]

  return (
    <div ref={menuRef} className="bg-gray-900 border-b border-gray-700 text-white select-none relative z-50">
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center px-4 py-1 text-sm">
        {menus.map((menu) => (
          <div key={menu.label} className="relative">
            <button
              className={`px-3 py-1 rounded transition-colors ${
                activeMenu === menu.label
                  ? 'bg-[#ffa500] text-black'
                  : 'hover:bg-gray-800'
              }`}
              onClick={() => setActiveMenu(activeMenu === menu.label ? null : menu.label)}
            >
              {menu.label}
            </button>
            
            {activeMenu === menu.label && (
              <div className="absolute top-full left-0 mt-1 w-56 bg-gray-800 border border-gray-600 rounded-md shadow-xl z-50">
                {menu.items.map((item, index) => (
                  item.divider ? (
                    <div key={index} className="border-t border-gray-600 my-1" />
                  ) : (
                    <button
                      key={index}
                      className="w-full text-left px-4 py-2 text-sm hover:bg-gray-700 flex justify-between items-center"
                      onClick={() => {
                        if (item.action) item.action()
                        if (item.href) window.open(item.href, '_blank')
                        setActiveMenu(null)
                      }}
                    >
                      <span>{item.label}</span>
                      {item.shortcut && (
                        <span className="text-gray-400 text-xs font-mono">{item.shortcut}</span>
                      )}
                    </button>
                  )
                ))}
              </div>
            )}
          </div>
        ))}
        
        {/* Right side - user info */}
        <div className="ml-auto flex items-center space-x-2">
          {isAuthenticated && currentUser ? (
            <div className="flex items-center space-x-2 text-xs">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-300">{currentUser.name}</span>
            </div>
          ) : (
            <div className="flex items-center space-x-2 text-xs">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span className="text-gray-400">Not Connected</span>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex items-center justify-between px-4 py-2">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-[#ffa500] rounded-sm flex items-center justify-center">
            <span className="text-black font-bold text-sm">₿</span>
          </div>
          <span className="font-medium">Exchange</span>
        </div>
        
        <button
          className="p-2"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu Dropdown */}
      {showMobileMenu && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          {menus.map((menu) => (
            <div key={menu.label} className="border-b border-gray-700 last:border-b-0">
              <div className="px-4 py-2 font-medium text-[#ffa500]">{menu.label}</div>
              {menu.items.map((item, index) => (
                !item.divider && (
                  <button
                    key={index}
                    className="w-full text-left px-6 py-2 text-sm hover:bg-gray-700"
                    onClick={() => {
                      if (item.action) item.action()
                      if (item.href) window.open(item.href, '_blank')
                      setShowMobileMenu(false)
                    }}
                  >
                    {item.label}
                  </button>
                )
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default CleanTaskbar