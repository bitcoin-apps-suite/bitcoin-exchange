import React, { useState, useRef, useEffect } from 'react';
import './TaskBar.css';

interface MenuItem {
  label?: string;
  action?: () => void;
  href?: string;
  divider?: boolean;
  shortcut?: string;
}

interface MenuData {
  label: string;
  items: MenuItem[];
}

const TaskBar: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [showBAppsMenu, setShowBAppsMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const bitcoinApps = [
    { name: 'Bitcoin Apps Store', color: '#f97316', url: 'https://www.bitcoinapps.store/' },
    { name: 'Bitcoin Auth', color: '#ef4444', url: '#', disabled: true },
    { name: 'Bitcoin Calendar', color: '#d946ef', url: 'https://bitcoin-calendar.vercel.app' },
    { name: 'Bitcoin Chat', color: '#ff6500', url: '#', disabled: true },
    { name: 'Bitcoin Code', color: '#06b6d4', url: 'https://bitcoin-code.vercel.app/' },
    { name: 'Bitcoin Domains', color: '#eab308', url: '#', disabled: true },
    { name: 'Bitcoin Draw', color: '#10b981', url: '#', disabled: true },
    { name: 'Bitcoin Drive', color: '#22c55e', url: 'https://bitcoin-drive.vercel.app' },
    { name: 'Bitcoin Email', color: '#06b6d4', url: 'https://bitcoin-email.vercel.app' },
    { name: 'Bitcoin Exchange', color: '#10b981', url: '#', current: true },
    { name: 'Bitcoin Jobs', color: '#6b7280', url: 'https://bitcoin-jobs.vercel.app/' },
    { name: 'Bitcoin Music', color: '#8b5cf6', url: 'https://bitcoin-music.vercel.app' },
    { name: 'Bitcoin Paint', color: '#a855f7', url: 'https://bitcoin-paint.vercel.app' },
    { name: 'Bitcoin Pics', color: '#ec4899', url: '#', disabled: true },
    { name: 'Bitcoin Registry', color: '#f43f5e', url: '#', disabled: true },
    { name: 'Bitcoin Search', color: '#6b7280', url: 'https://bitcoin-search.vercel.app' },
    { name: 'Bitcoin Shares', color: '#f43f5e', url: 'https://bitcoin-shares.vercel.app', disabled: true },
    { name: 'Bitcoin Spreadsheets', color: '#3b82f6', url: 'https://bitcoin-spreadsheet.vercel.app' },
    { name: 'Bitcoin Video', color: '#65a30d', url: 'https://bitcoin-video-nine.vercel.app' },
    { name: 'Bitcoin Wallet', color: '#f59e0b', url: 'https://bitcoin-wallet-sable.vercel.app' },
    { name: 'Bitcoin Writer', color: '#ff9500', url: 'https://bitcoin-writer.vercel.app' }
  ];

  const menus: MenuData[] = [
    {
      label: 'Bitcoin Exchange',
      items: [
        { label: 'About Bitcoin Exchange', action: () => alert('Bitcoin Exchange v1.0\n\nDecentralized trading on Bitcoin SV\n\n© 2025 The Bitcoin Corporation LTD') },
        { divider: true },
        { label: 'Preferences...', shortcut: '⌘,', action: () => console.log('Preferences') },
        { divider: true },
        { label: 'Quit', shortcut: '⌘Q', action: () => console.log('Quit') }
      ]
    },
    {
      label: 'Trading',
      items: [
        { label: 'Buy Bitcoin', shortcut: '⌘B', action: () => console.log('Buy') },
        { label: 'Sell Bitcoin', shortcut: '⌘S', action: () => console.log('Sell') },
        { divider: true },
        { label: 'Market Orders', action: () => console.log('Market Orders') },
        { label: 'Limit Orders', action: () => console.log('Limit Orders') },
        { label: 'Stop Orders', action: () => console.log('Stop Orders') }
      ]
    },
    {
      label: 'Portfolio',
      items: [
        { label: 'Dashboard', shortcut: '⌘D', action: () => console.log('Dashboard') },
        { label: 'Holdings', action: () => console.log('Holdings') },
        { label: 'Transactions', action: () => console.log('Transactions') }
      ]
    },
    {
      label: 'View',
      items: [
        { label: 'Toggle Sidebar', shortcut: '⌥⌘S', action: () => console.log('Toggle sidebar') },
        { label: 'Toggle Dark Mode', shortcut: '⌥⌘D', action: () => console.log('Toggle dark mode') },
        { divider: true },
        { label: 'Enter Full Screen', shortcut: '⌃⌘F', action: () => document.documentElement.requestFullscreen() }
      ]
    },
    {
      label: 'Window',
      items: [
        { label: 'Minimize', shortcut: '⌘M', action: () => console.log('Minimize') },
        { label: 'Zoom', action: () => console.log('Zoom') }
      ]
    },
    {
      label: 'Help',
      items: [
        { label: 'Trading Guide', action: () => console.log('Trading Guide') },
        { label: 'API Documentation', href: 'https://docs.bitcoin-exchange.com' },
        { divider: true },
        { label: 'Contact Support', action: () => console.log('Support') }
      ]
    }
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
        setShowBAppsMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div 
      ref={menuRef}
      className="taskbar"
    >
      {/* bApps Menu Button - Multicolored B */}
      <button
        className="bapps-menu-btn"
        onClick={() => {
          setShowBAppsMenu(!showBAppsMenu);
          setActiveMenu(null);
        }}
        title="Bitcoin Apps"
      >
        <span className="bitcoin-logo">B</span>
      </button>

      {/* bApps Dropdown */}
      {showBAppsMenu && (
        <div className="bapps-menu-dropdown">
          <div className="bapps-menu-header">
            Bitcoin Apps Suite
          </div>
          {bitcoinApps.map((app) => (
            <div
              key={app.name}
              className={`bapps-menu-item ${app.current ? 'current' : ''} ${app.disabled ? 'disabled' : ''}`}
              onClick={() => {
                if (!app.disabled && !app.current && app.url !== '#') {
                  window.location.href = app.url;
                }
              }}
            >
              <span className="bapps-menu-icon" style={{ color: app.color }}>₿</span>
              <span className="bapps-menu-name">{app.name}</span>
              {app.current && <span className="bapps-menu-badge">Current</span>}
              {app.disabled && <span className="bapps-menu-badge">Soon</span>}
            </div>
          ))}
        </div>
      )}

      {/* Regular Menu Items */}
      <div className="taskbar-menus">
        {menus.map((menu) => (
          <div key={menu.label} className="menu-container">
            <button
              className={`menu-button ${activeMenu === menu.label ? 'active' : ''}`}
              onClick={() => setActiveMenu(activeMenu === menu.label ? null : menu.label)}
              onMouseEnter={() => activeMenu && setActiveMenu(menu.label)}
            >
              {menu.label}
            </button>

            {activeMenu === menu.label && (
              <div className="menu-dropdown">
                {menu.items.map((item, index) => (
                  item.divider ? (
                    <div key={index} className="menu-divider" />
                  ) : item.href ? (
                    <a
                      key={index}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="menu-item"
                    >
                      <span>{item.label}</span>
                      {item.shortcut && <span className="menu-shortcut">{item.shortcut}</span>}
                    </a>
                  ) : (
                    <button
                      key={index}
                      className="menu-item"
                      onClick={() => {
                        item.action?.();
                        setActiveMenu(null);
                      }}
                    >
                      <span>{item.label}</span>
                      {item.shortcut && <span className="menu-shortcut">{item.shortcut}</span>}
                    </button>
                  )
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskBar;