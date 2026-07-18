import { NavLink, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  DollarSign,
  Megaphone,
  Bot,
  BarChart3,
  Settings,
  Heart,
  ChevronLeft,
  LogOut,
} from 'lucide-react';
import './Sidebar.css';

const navItems = [
  { path: '/', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/hr', label: 'HR Management', icon: Users },
  { path: '/finance', label: 'Finance', icon: DollarSign },
  { path: '/marketing', label: 'Marketing', icon: Megaphone },
  { path: '/ai-assistant', label: 'AI Assistant', icon: Bot },
  { path: '/reports', label: 'Reports', icon: BarChart3 },
  { path: '/settings', label: 'Settings', icon: Settings },
];

export default function Sidebar({ isOpen, onClose }) {
  const location = useLocation();

  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={onClose} />}
      <aside className={`sidebar ${isOpen ? 'sidebar--open' : ''}`} id="sidebar">
        <div className="sidebar__header">
          <div className="sidebar__brand">
            <div className="sidebar__logo">
              <Heart size={22} color="white" />
            </div>
            <div className="sidebar__brand-text">
              <span className="sidebar__brand-name">Home Health</span>
              <span className="sidebar__brand-tag">AI Dashboard</span>
            </div>
          </div>
          <button className="sidebar__close-btn" onClick={onClose} aria-label="Close sidebar">
            <ChevronLeft size={20} />
          </button>
        </div>

        <nav className="sidebar__nav">
          <ul className="sidebar__list">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={`sidebar__link ${isActive ? 'sidebar__link--active' : ''}`}
                    onClick={() => window.innerWidth < 1024 && onClose()}
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="sidebar__footer">
          <div className="sidebar__user">
            <div className="sidebar__avatar">
              <span>AD</span>
            </div>
            <div className="sidebar__user-info">
              <span className="sidebar__user-name">Admin User</span>
              <span className="sidebar__user-role">Super Admin</span>
            </div>
          </div>
          <button className="sidebar__logout" title="Log out">
            <LogOut size={18} />
          </button>
        </div>
      </aside>
    </>
  );
}
