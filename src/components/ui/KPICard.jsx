import { TrendingUp, TrendingDown, DollarSign, CreditCard, Heart, UserCheck, UserX, Users, Megaphone } from 'lucide-react';
import './KPICard.css';

const iconMap = {
  DollarSign, CreditCard, TrendingUp, Heart, UserCheck, UserX, Users, Megaphone,
};

const colorMap = {
  blue: { bg: 'var(--color-primary-50)', icon: 'var(--color-primary)', border: 'var(--color-primary-200)' },
  green: { bg: 'var(--color-accent-50)', icon: 'var(--color-accent)', border: 'var(--color-accent-100)' },
  red: { bg: '#FEF2F2', icon: 'var(--color-danger)', border: '#FECACA' },
  amber: { bg: '#FFFBEB', icon: 'var(--color-warning)', border: '#FDE68A' },
  pink: { bg: '#FDF2F8', icon: '#EC4899', border: '#FBCFE8' },
  purple: { bg: '#F5F3FF', icon: '#8B5CF6', border: '#DDD6FE' },
  indigo: { bg: '#EEF2FF', icon: '#6366F1', border: '#C7D2FE' },
};

export default function KPICard({ label, value, trend, trendUp, icon, color = 'blue', className = '' }) {
  const IconComponent = iconMap[icon] || DollarSign;
  const colors = colorMap[color] || colorMap.blue;

  return (
    <div className={`kpi-card ${className}`}>
      <div className="kpi-card__icon-wrap" style={{ backgroundColor: colors.bg, border: `1px solid ${colors.border}` }}>
        <IconComponent size={22} color={colors.icon} />
      </div>
      <div className="kpi-card__content">
        <span className="kpi-card__label">{label}</span>
        <span className="kpi-card__value">{value}</span>
      </div>
      <div className={`kpi-card__trend ${trendUp ? 'kpi-card__trend--up' : 'kpi-card__trend--down'}`}>
        {trendUp ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
        <span>{trend}</span>
      </div>
    </div>
  );
}
