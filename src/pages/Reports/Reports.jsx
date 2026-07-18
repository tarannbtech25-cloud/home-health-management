import { useState } from 'react';
import { FileText, Download, Calendar, Clock, BarChart3, Users, DollarSign, Megaphone, TrendingUp, Activity } from 'lucide-react';
import Tabs from '../../components/ui/Tabs';
import Button from '../../components/ui/Button';
import './Reports.css';

const reportTabs = [
  { id: 'daily', label: 'Daily', icon: Clock },
  { id: 'weekly', label: 'Weekly', icon: Calendar },
  { id: 'monthly', label: 'Monthly', icon: BarChart3 },
];

const reports = {
  daily: [
    {
      id: 1,
      title: 'Daily Operations Summary',
      description: 'Patient visits, staff attendance, and daily metrics overview',
      icon: Activity,
      color: '#2563EB',
      bg: '#EFF6FF',
      date: 'July 17, 2026',
      metrics: [
        { label: 'Patient Visits', value: '47' },
        { label: 'Staff Present', value: '142' },
        { label: 'Revenue', value: '$12,400' },
        { label: 'New Leads', value: '8' },
      ],
    },
    {
      id: 2,
      title: 'Staff Attendance Report',
      description: 'Detailed breakdown of employee attendance and time tracking',
      icon: Users,
      color: '#10B981',
      bg: '#ECFDF5',
      date: 'July 17, 2026',
      metrics: [
        { label: 'Present', value: '142' },
        { label: 'Absent', value: '9' },
        { label: 'On Leave', value: '5' },
        { label: 'Remote', value: '18' },
      ],
    },
    {
      id: 3,
      title: 'Daily Financial Snapshot',
      description: 'Revenue received, expenses paid, and cash flow for today',
      icon: DollarSign,
      color: '#F59E0B',
      bg: '#FFFBEB',
      date: 'July 17, 2026',
      metrics: [
        { label: 'Revenue', value: '$12,400' },
        { label: 'Expenses', value: '$5,800' },
        { label: 'Net', value: '$6,600' },
        { label: 'Invoices Sent', value: '12' },
      ],
    },
  ],
  weekly: [
    {
      id: 4,
      title: 'Weekly Performance Report',
      description: 'Comprehensive overview of all departments for the past week',
      icon: TrendingUp,
      color: '#8B5CF6',
      bg: '#F5F3FF',
      date: 'Week of July 14–17, 2026',
      metrics: [
        { label: 'Total Visits', value: '312' },
        { label: 'Revenue', value: '$86,200' },
        { label: 'Avg Attendance', value: '94.2%' },
        { label: 'New Patients', value: '28' },
      ],
    },
    {
      id: 5,
      title: 'Weekly Marketing Report',
      description: 'Campaign performance, lead generation, and conversion metrics',
      icon: Megaphone,
      color: '#EC4899',
      bg: '#FDF2F8',
      date: 'Week of July 14–17, 2026',
      metrics: [
        { label: 'Leads', value: '82' },
        { label: 'Conversions', value: '34' },
        { label: 'Conv. Rate', value: '41.5%' },
        { label: 'Ad Spend', value: '$3,200' },
      ],
    },
  ],
  monthly: [
    {
      id: 6,
      title: 'Monthly Executive Summary',
      description: 'High-level business metrics and KPI trends for the month',
      icon: BarChart3,
      color: '#2563EB',
      bg: '#EFF6FF',
      date: 'July 2026',
      metrics: [
        { label: 'Revenue', value: '$284,500' },
        { label: 'Expenses', value: '$142,300' },
        { label: 'Profit', value: '$142,200' },
        { label: 'Growth', value: '+12.5%' },
      ],
    },
    {
      id: 7,
      title: 'Monthly HR Report',
      description: 'Employee metrics, hiring, retention, and training completion',
      icon: Users,
      color: '#10B981',
      bg: '#ECFDF5',
      date: 'July 2026',
      metrics: [
        { label: 'Total Staff', value: '174' },
        { label: 'New Hires', value: '4' },
        { label: 'Turnover', value: '1.8%' },
        { label: 'Training', value: '92%' },
      ],
    },
    {
      id: 8,
      title: 'Monthly Financial Report',
      description: 'Complete financial statements including P&L and cash flow',
      icon: DollarSign,
      color: '#F59E0B',
      bg: '#FFFBEB',
      date: 'July 2026',
      metrics: [
        { label: 'Gross Revenue', value: '$284,500' },
        { label: 'Operating Exp', value: '$142,300' },
        { label: 'EBITDA', value: '$142,200' },
        { label: 'Margin', value: '50.0%' },
      ],
    },
  ],
};

export default function Reports() {
  const [activeTab, setActiveTab] = useState('daily');

  const handleExport = (format) => {
    // Placeholder — no actual export
    alert(`Export as ${format.toUpperCase()} — This feature will be available when connected to the backend.`);
  };

  return (
    <div className="reports-page" id="reports-page">
      <div className="reports-header">
        <Tabs tabs={reportTabs} activeTab={activeTab} onTabChange={setActiveTab} />
        <div className="reports-export-btns">
          <Button variant="outline" size="sm" icon={Download} onClick={() => handleExport('pdf')}>PDF</Button>
          <Button variant="outline" size="sm" icon={Download} onClick={() => handleExport('excel')}>Excel</Button>
          <Button variant="outline" size="sm" icon={Download} onClick={() => handleExport('csv')}>CSV</Button>
        </div>
      </div>

      <div className="reports-grid">
        {reports[activeTab].map((report) => {
          const Icon = report.icon;
          return (
            <div key={report.id} className="report-card">
              <div className="report-card__header">
                <div className="report-card__icon" style={{ backgroundColor: report.bg }}>
                  <Icon size={22} color={report.color} />
                </div>
                <div className="report-card__info">
                  <h3 className="report-card__title">{report.title}</h3>
                  <p className="report-card__description">{report.description}</p>
                </div>
              </div>
              <div className="report-card__date">
                <Calendar size={14} />
                <span>{report.date}</span>
              </div>
              <div className="report-card__metrics">
                {report.metrics.map((m) => (
                  <div key={m.label} className="report-metric">
                    <span className="report-metric__value">{m.value}</span>
                    <span className="report-metric__label">{m.label}</span>
                  </div>
                ))}
              </div>
              <div className="report-card__actions">
                <Button variant="ghost" size="sm" icon={FileText}>View Full Report</Button>
                <Button variant="outline" size="sm" icon={Download}>Download</Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
