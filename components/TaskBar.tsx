import React, { useState, useRef, useEffect } from 'react';
import './TaskBar.css';

interface MenuItem {
  label?: string;
  action?: () => void;
  href?: string;
  divider?: boolean;
  shortcut?: string;
  external?: boolean;
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
        { label: 'About Bitcoin Exchange', action: () => alert('Bitcoin Exchange v1.0\n\nAn Exchange of Exchanges\n\n© 2025 The Bitcoin Corporation LTD') },
        { divider: true },
        { label: '$BEXCHANGE Token', action: () => window.location.href = '/token' },
        { label: 'Exchange Dashboard', action: () => window.location.href = '/exchange' },
        { divider: true },
        { label: 'Preferences...', shortcut: '⌘,', action: () => console.log('Preferences') },
        { divider: true },
        { label: 'Hide Bitcoin Exchange', shortcut: '⌘H', action: () => console.log('Hide') },
        { label: 'Hide Others', shortcut: '⌥⌘H', action: () => console.log('Hide Others') },
        { label: 'Show All', action: () => console.log('Show All') },
        { divider: true },
        { label: 'Quit Bitcoin Exchange', shortcut: '⌘Q', action: () => console.log('Quit') }
      ]
    },
    {
      label: 'File',
      items: [
        { label: 'New Portfolio', shortcut: '⌘N', action: () => console.log('New Portfolio') },
        { label: 'Open Portfolio...', shortcut: '⌘O', action: () => console.log('Open Portfolio') },
        { label: 'Recent Portfolios', action: () => console.log('Recent') },
        { divider: true },
        { label: 'Close Portfolio', shortcut: '⌘W', action: () => console.log('Close') },
        { label: 'Save Portfolio', shortcut: '⌘S', action: () => console.log('Save') },
        { label: 'Save As...', shortcut: '⇧⌘S', action: () => console.log('Save As') },
        { divider: true },
        { label: 'Export Trading Data...', action: () => console.log('Export') },
        { label: 'Import Portfolio...', action: () => console.log('Import') }
      ]
    },
    {
      label: 'Trading',
      items: [
        { label: 'Buy Exchange Token', shortcut: '⌘B', action: () => console.log('Buy') },
        { label: 'Sell Exchange Token', shortcut: '⌘S', action: () => console.log('Sell') },
        { divider: true },
        { label: 'Market Orders', action: () => console.log('Market Orders') },
        { label: 'Limit Orders', action: () => console.log('Limit Orders') },
        { label: 'Stop Loss Orders', action: () => console.log('Stop Orders') },
        { divider: true },
        { label: 'Order History', action: () => console.log('Order History') },
        { label: 'Trade History', action: () => console.log('Trade History') }
      ]
    },
    {
      label: 'Blockchain',
      items: [
        { label: 'Save Portfolio to Blockchain', action: () => console.log('Save to Blockchain') },
        { label: 'Verify Trade on BSV', action: () => console.log('Verify Trade') },
        { divider: true },
        { label: 'Create Exchange NFT', action: () => console.log('Create NFT') },
        { label: 'Tokenize Portfolio', action: () => console.log('Tokenize') },
        { divider: true },
        { label: 'Smart Contract Status', action: () => console.log('Contract Status') },
        { label: 'Blockchain Explorer', href: 'https://whatsonchain.com/', external: true }
      ]
    },
    {
      label: 'Portfolio',
      items: [
        { label: 'Dashboard', shortcut: '⌘D', action: () => console.log('Dashboard') },
        { label: 'Holdings', action: () => console.log('Holdings') },
        { label: 'Performance', action: () => console.log('Performance') },
        { divider: true },
        { label: 'Risk Analysis', action: () => console.log('Risk Analysis') },
        { label: 'Diversification Report', action: () => console.log('Diversification') },
        { divider: true },
        { label: 'Transactions', action: () => console.log('Transactions') },
        { label: 'Tax Reports', action: () => console.log('Tax Reports') }
      ]
    },
    {
      label: 'View',
      items: [
        { label: 'Show Toolbar', action: () => console.log('Show Toolbar') },
        { label: 'Show Sidebar', shortcut: '⌥⌘S', action: () => console.log('Toggle sidebar') },
        { label: 'Show Price Charts', action: () => console.log('Show Charts') },
        { divider: true },
        { label: 'Enter Full Screen', shortcut: '⌃⌘F', action: () => document.documentElement.requestFullscreen() },
        { divider: true },
        { label: 'Actual Size', shortcut: '⌘0', action: () => console.log('Actual Size') },
        { label: 'Zoom In', shortcut: '⌘+', action: () => console.log('Zoom In') },
        { label: 'Zoom Out', shortcut: '⌘-', action: () => console.log('Zoom Out') }
      ]
    },
    {
      label: 'Tools',
      items: [
        { label: 'Price Alerts', action: () => console.log('Price Alerts') },
        { label: 'Auto-Rebalancing', action: () => console.log('Auto-Rebalancing') },
        { divider: true },
        { label: 'Paper Trading', action: () => console.log('Paper Trading') },
        { label: 'Backtesting', action: () => console.log('Backtesting') },
        { divider: true },
        { label: 'API Keys', action: () => console.log('API Keys') },
        { label: 'Webhooks', action: () => console.log('Webhooks') }
      ]
    },
    {
      label: 'Window',
      items: [
        { label: 'Minimize', shortcut: '⌘M', action: () => console.log('Minimize') },
        { label: 'Zoom', action: () => console.log('Zoom') },
        { divider: true },
        { label: 'Bring All to Front', action: () => console.log('Bring All to Front') },
        { divider: true },
        { label: 'Documentation', action: () => window.location.href = '/docs' },
        { label: 'API Reference', action: () => window.location.href = '/api' },
        { label: 'Contracts Hub', action: () => window.location.href = '/contracts' }
      ]
    },
    {
      label: 'Help',
      items: [
        { label: 'Bitcoin Exchange Help', shortcut: '⌘?', action: () => console.log('Help') },
        { divider: true },
        { label: 'Trading Guide', action: () => window.location.href = '/docs' },
        { label: 'API Documentation', action: () => window.location.href = '/api' },
        { label: 'GitHub Repository', href: 'https://github.com/bitcoin-apps-suite/bitcoin-exchange', external: true },
        { divider: true },
        { label: 'Report an Issue', href: 'https://github.com/bitcoin-apps-suite/bitcoin-exchange/issues', external: true },
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
      {/* bApps Menu Button - Green B */}
      <button
        className="bapps-menu-btn"
        onClick={() => {
          setShowBAppsMenu(!showBAppsMenu);
          setActiveMenu(null);
        }}
        title="Bitcoin Apps"
      >
        <span className="bitcoin-logo green">B</span>
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