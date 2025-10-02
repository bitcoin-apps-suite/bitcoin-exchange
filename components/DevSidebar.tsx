import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { 
  ChevronLeft, 
  ChevronRight, 
  TrendingUp, 
  DollarSign, 
  BarChart3, 
  BookOpen, 
  Activity, 
  Zap,
  Package,
  Terminal,
  FileText,
  Wrench,
  GitBranch,
  Flower2
} from 'lucide-react';
import './DevSidebar.css';

interface DevSidebarProps {
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

const DevSidebar: React.FC<DevSidebarProps> = ({ isCollapsed, onToggleCollapse }) => {
  const [issueCount, setIssueCount] = useState<number>(0);
  const pathname = usePathname();

  useEffect(() => {
    // Fetch GitHub issue count
    fetch('https://api.github.com/repos/bitcoin-apps-suite/bitcoin-exchange/issues?state=open')
      .then(res => res.json())
      .then(issues => setIssueCount(Array.isArray(issues) ? issues.length : 0))
      .catch(() => setIssueCount(0));
  }, []);

  const menuItems: Array<{
    path?: string;
    icon?: React.ComponentType<{ size: number }>;
    label?: string;
    badge?: string;
    divider?: boolean;
    section?: string;
    external?: boolean;
  }> = [
    // Token & Core at top
    { path: '/token', icon: DollarSign, label: '$BEXCHANGE', badge: 'NEW' },
    { path: '/exchange', icon: TrendingUp, label: 'Exchange Dashboard' },
    { path: '/grants', icon: Flower2, label: 'GRANTS' },
    
    // Traders Section
    { divider: true },
    { section: 'TRADERS' },
    { path: '/markets', icon: BarChart3, label: 'Market Analysis', badge: '847' },
    { path: '/arbitrage', icon: Zap, label: 'Cross-Exchange Arbitrage' },
    { path: '/liquidity', icon: Package, label: 'Liquidity Pools', badge: '12' },
    
    // $bEX Infrastructure
    { divider: true },
    { section: '$bEX INFRASTRUCTURE' },
    { path: '/teranode', icon: Zap, label: 'Teranode Stream' },
    { path: '/indexers', icon: Activity, label: 'Indexer Nodes', badge: '847' },
    { path: '/firehose', icon: TrendingUp, label: 'Data Firehose' },
    { path: '/settlements', icon: BarChart3, label: 'Settlement Layer' },
    
    // Blockchain Operations
    { divider: true },
    { section: 'BLOCKCHAIN' },
    { path: '/exchange', icon: TrendingUp, label: 'Live Exchange' },
    { path: '/api', icon: Terminal, label: 'API Reference' },
    { path: '/contracts', icon: FileText, label: 'Smart Contracts', badge: issueCount > 0 ? String(issueCount) : '4' },
    { path: '/sdk', icon: Package, label: 'Exchange SDK' },
    { path: '/webhooks', icon: Wrench, label: 'Webhooks & Events' },
    
    // System
    { divider: true },
    { path: '/docs', icon: BookOpen, label: 'Documentation' },
    { path: 'https://github.com/bitcoin-apps-suite/bitcoin-exchange', icon: GitBranch, label: 'GitHub', external: true },
    { path: '/status', icon: Activity, label: 'System Status', badge: 'OK' },
    { path: '/changelog', icon: FileText, label: 'Changelog' }
  ];

  return (
    <div className={`dev-sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="dev-sidebar-header">
        {!isCollapsed && (
          <div className="dev-sidebar-title">
            <Zap className="dev-sidebar-logo" />
            <span>Exchange Hub</span>
          </div>
        )}
        <button 
          className="dev-sidebar-toggle"
          onClick={onToggleCollapse}
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      <nav className="dev-sidebar-nav">
        {menuItems.map((item, index) => {
          if (item.divider) {
            return <div key={index} className="dev-sidebar-divider" />;
          }

          if (item.section) {
            return !isCollapsed ? (
              <div key={index} className="dev-sidebar-section">
                {item.section}
              </div>
            ) : null;
          }

          if (!item.icon) return null;
          
          const Icon = item.icon;
          const isActive = pathname === item.path;

          if (item.external) {
            return (
              <a
                key={`${item.path}-${index}`}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className={`dev-sidebar-item ${isActive ? 'active' : ''}`}
                title={isCollapsed ? item.label : undefined}
              >
                <Icon size={20} />
                {!isCollapsed && (
                  <>
                    <span className="dev-sidebar-label">{item.label}</span>
                    {item.badge && <span className="dev-sidebar-badge">{item.badge}</span>}
                  </>
                )}
              </a>
            );
          }

          return (
            <Link
              key={`${item.path}-${index}`}
              href={item.path || '/'}
              className={`dev-sidebar-item ${isActive ? 'active' : ''}`}
              title={isCollapsed ? item.label : undefined}
            >
              <Icon size={20} />
              {!isCollapsed && (
                <>
                  <span className="dev-sidebar-label">{item.label}</span>
                  {item.badge && <span className="dev-sidebar-badge">{item.badge}</span>}
                </>
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default DevSidebar;