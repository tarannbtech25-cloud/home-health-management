import { UserPlus, DollarSign, Award, Mail, AlertTriangle, CheckCircle, ArrowRight, Plus, FileText, Calendar } from 'lucide-react';
import KPICard from '../../components/ui/KPICard';
import ChartCard from '../../components/charts/ChartCard';
import LineChart from '../../components/charts/LineChart';
import BarChart from '../../components/charts/BarChart';
import DoughnutChart from '../../components/charts/DoughnutChart';
import Button from '../../components/ui/Button';
import {
  kpiData,
  revenueChartData,
  profitChartData,
  salesTrendData,
  attendanceChartData,
  marketingOverviewData,
  recentActivity,
} from '../../data/dashboard';
import './Dashboard.css';

const activityIcons = { UserPlus, DollarSign, Award, Mail, AlertTriangle, CheckCircle };

const activityColors = {
  patient: '#2563EB',
  finance: '#10B981',
  hr: '#8B5CF6',
  marketing: '#EC4899',
  alert: '#F59E0B',
};

export default function Dashboard() {
  return (
    <div className="dashboard" id="dashboard-page">
      {/* KPI Cards */}
      <div className="dashboard__kpis">
        {kpiData.map((kpi, i) => (
          <KPICard key={kpi.id} {...kpi} className={`stagger-${i + 1}`} />
        ))}
      </div>

      {/* Charts Row 1 */}
      <div className="dashboard__charts-row">
        <ChartCard title="Revenue Trend" subtitle="Monthly revenue over the past year">
          <LineChart data={revenueChartData} />
        </ChartCard>
        <ChartCard title="Revenue vs Expenses" subtitle="Monthly comparison">
          <BarChart data={profitChartData} />
        </ChartCard>
      </div>

      {/* Charts Row 2 */}
      <div className="dashboard__charts-row dashboard__charts-row--3col">
        <ChartCard title="Sales Trend" subtitle="Weekly sales performance">
          <LineChart data={salesTrendData} />
        </ChartCard>
        <ChartCard title="Staff Attendance" subtitle="Today's breakdown">
          <DoughnutChart data={attendanceChartData} />
        </ChartCard>
        <ChartCard title="Marketing Channels" subtitle="Leads by source">
          <BarChart data={marketingOverviewData} options={{ plugins: { legend: { display: false } } }} />
        </ChartCard>
      </div>

      {/* Bottom Row */}
      <div className="dashboard__bottom">
        {/* Recent Activity */}
        <div className="dashboard__activity">
          <div className="dashboard__section-header">
            <h2 className="dashboard__section-title">Recent Activity</h2>
            <button className="dashboard__view-all">
              View All <ArrowRight size={14} />
            </button>
          </div>
          <div className="dashboard__activity-list">
            {recentActivity.map((item) => {
              const Icon = activityIcons[item.icon] || CheckCircle;
              const color = activityColors[item.type] || '#64748B';
              return (
                <div key={item.id} className="activity-item">
                  <div className="activity-item__icon" style={{ backgroundColor: `${color}14`, color }}>
                    <Icon size={16} />
                  </div>
                  <div className="activity-item__content">
                    <p className="activity-item__message">{item.message}</p>
                    <span className="activity-item__time">{item.time}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="dashboard__quick-actions">
          <h2 className="dashboard__section-title">Quick Actions</h2>
          <div className="quick-actions-grid">
            <button className="quick-action-card">
              <div className="quick-action-card__icon" style={{ background: '#EFF6FF' }}>
                <Plus size={20} color="#2563EB" />
              </div>
              <span className="quick-action-card__label">Add Employee</span>
            </button>
            <button className="quick-action-card">
              <div className="quick-action-card__icon" style={{ background: '#ECFDF5' }}>
                <DollarSign size={20} color="#10B981" />
              </div>
              <span className="quick-action-card__label">Record Payment</span>
            </button>
            <button className="quick-action-card">
              <div className="quick-action-card__icon" style={{ background: '#F5F3FF' }}>
                <FileText size={20} color="#8B5CF6" />
              </div>
              <span className="quick-action-card__label">Generate Report</span>
            </button>
            <button className="quick-action-card">
              <div className="quick-action-card__icon" style={{ background: '#FFF7ED' }}>
                <Calendar size={20} color="#F59E0B" />
              </div>
              <span className="quick-action-card__label">Schedule Visit</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
