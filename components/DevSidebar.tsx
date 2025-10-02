import React from 'react';
import { ChevronLeft, ChevronRight, TrendingUp, DollarSign, BarChart3, Settings, HelpCircle, Github, BookOpen, Activity } from 'lucide-react';
import './DevSidebar.css';

interface DevSidebarProps {
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

const DevSidebar: React.FC<DevSidebarProps> = ({ isCollapsed, onToggleCollapse }) => {

  const menuItems: Array<{
    icon?: React.ComponentType<{ size?: number }>;
    label?: string;
    path?: string;
    divider?: boolean;
    external?: boolean;
  }> = [
    { icon: TrendingUp, label: 'Trading', path: '/trading' },
    { icon: DollarSign, label: 'Markets', path: '/markets' },
    { icon: BarChart3, label: 'Analytics', path: '/analytics' },
    { divider: true },
    { icon: Activity, label: 'API Status', path: '/status' },
    { icon: BookOpen, label: 'Documentation', path: '/docs' },
    { icon: Github, label: 'GitHub', path: 'https://github.com/bitcoin-exchange', external: true },
    { divider: true },
    { icon: Settings, label: 'Settings', path: '/settings' },
    { icon: HelpCircle, label: 'Help', path: '/help' }
  ];

  return (
    <div className={`dev-sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <button
        className="sidebar-toggle"
        onClick={onToggleCollapse}
        title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      >
        {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </button>

      <div className="sidebar-content">
        {menuItems.map((item, index) => {
          if (item.divider) {
            return <div key={index} className="sidebar-divider" />;
          }

          const Icon = item.icon!;
          return (
            <a
              key={index}
              href={item.external ? item.path : '#'}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              className="sidebar-item"
              title={isCollapsed ? item.label : undefined}
            >
              <Icon size={18} />
              {!isCollapsed && <span>{item.label}</span>}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default DevSidebar;