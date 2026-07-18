import { useLocation } from 'react-router-dom';
import { Menu, Bell, Search, ChevronDown } from 'lucide-react';
import './TopBar.css';

const pageTitles = {
  '/': 'Dashboard',
  '/hr': 'HR Management',
  '/finance': 'Finance',
  '/marketing': 'Marketing',
  '/ai-assistant': 'AI Assistant',
  '/reports': 'Reports',
  '/settings': 'Settings',
};

const pageSubtitles = {
  '/': 'Welcome back! Here\'s your business overview',
  '/hr': 'Manage employees, attendance, and performance',
  '/finance': 'Track revenue, expenses, and profitability',
  '/marketing': 'Monitor campaigns, leads, and conversions',
  '/ai-assistant': 'Chat with your AI-powered healthcare assistant',
  '/reports': 'Generate and export business reports',
  '/settings': 'Configure your dashboard preferences',
};

export default function TopBar({ onMenuClick }) {
  const location = useLocation();
  const title = pageTitles[location.pathname] || 'Dashboard';
  const subtitle = pageSubtitles[location.pathname] || '';

  return (
    <header className="topbar" id="topbar">
      <div className="topbar__left">
        <button className="topbar__menu-btn" onClick={onMenuClick} aria-label="Toggle sidebar">
          <Menu size={22} />
        </button>
        <div className="topbar__title-group">
          <h1 className="topbar__title">{title}</h1>
          <p className="topbar__subtitle">{subtitle}</p>
        </div>
      </div>
      <div className="topbar__right">
        <div className="topbar__search">
          <Search size={16} />
          <input type="text" placeholder="Search anything..." className="topbar__search-input" />
        </div>
        <button className="topbar__icon-btn" aria-label="Notifications" id="notifications-btn">
          <Bell size={20} />
          <span className="topbar__badge">3</span>
        </button>
        <div className="topbar__profile">
          <div className="topbar__profile-avatar">
            <span>AD</span>
          </div>
          <div className="topbar__profile-info">
            <span className="topbar__profile-name">Admin</span>
            <ChevronDown size={14} />
          </div>
        </div>
      </div>
    </header>
  );
}
