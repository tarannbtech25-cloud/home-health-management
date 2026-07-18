import { useState } from 'react';
import { Plus, Target, Users, TrendingUp, Percent } from 'lucide-react';
import DataTable from '../../components/ui/DataTable';
import Button from '../../components/ui/Button';
import Modal from '../../components/ui/Modal';
import FormField from '../../components/ui/FormField';
import Badge from '../../components/ui/Badge';
import ChartCard from '../../components/charts/ChartCard';
import BarChart from '../../components/charts/BarChart';
import DoughnutChart from '../../components/charts/DoughnutChart';
import {
  campaigns as initialCampaigns,
  marketingSummary,
  leadSourceData,
  campaignPerformanceData,
} from '../../data/marketing';
import './Marketing.css';

const statusVariant = {
  Active: 'success',
  Paused: 'warning',
  Completed: 'info',
  Planned: 'default',
};

const columns = [
  { key: 'name', label: 'Campaign', render: (val) => <span className="campaign-name">{val}</span> },
  { key: 'channel', label: 'Channel', render: (val) => <Badge variant="info">{val}</Badge> },
  { key: 'status', label: 'Status', render: (val) => <Badge variant={statusVariant[val] || 'default'}>{val}</Badge> },
  { key: 'budget', label: 'Budget', render: (val) => `$${val.toLocaleString()}` },
  {
    key: 'spent',
    label: 'Spent',
    render: (val, row) => (
      <div className="spent-cell">
        <span>${val.toLocaleString()}</span>
        <div className="spent-bar">
          <div className="spent-bar__fill" style={{ width: `${row.budget > 0 ? (val / row.budget * 100) : 0}%` }} />
        </div>
      </div>
    ),
  },
  { key: 'leads', label: 'Leads' },
  { key: 'conversions', label: 'Conversions' },
  { key: 'roi', label: 'ROI', render: (val) => <span className={`roi-value ${val !== 'N/A' ? 'roi-value--positive' : ''}`}>{val}</span> },
];

const emptyForm = { name: '', channel: '', status: 'Planned', startDate: '', endDate: '', budget: '' };

export default function Marketing() {
  const [campaignsList, setCampaignsList] = useState(initialCampaigns);
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [editing, setEditing] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (editing) {
      setCampaignsList(campaignsList.map(c => c.id === editing.id ? { ...c, ...form, budget: Number(form.budget) } : c));
    } else {
      setCampaignsList([...campaignsList, { ...form, id: Date.now(), budget: Number(form.budget), spent: 0, leads: 0, conversions: 0, roi: 'N/A' }]);
    }
    setModalOpen(false);
    setEditing(null);
    setForm(emptyForm);
  };

  const openEdit = (campaign) => {
    setEditing(campaign);
    setForm({ name: campaign.name, channel: campaign.channel, status: campaign.status, startDate: campaign.startDate, endDate: campaign.endDate, budget: String(campaign.budget) });
    setModalOpen(true);
  };

  const summaryCards = [
    { label: 'Total Leads', value: marketingSummary.totalLeads, icon: Users, color: '#2563EB', bg: '#EFF6FF' },
    { label: 'Converted', value: marketingSummary.convertedLeads, icon: Target, color: '#10B981', bg: '#ECFDF5' },
    { label: 'Conversion Rate', value: marketingSummary.conversionRate, icon: Percent, color: '#8B5CF6', bg: '#F5F3FF' },
    { label: 'Average ROI', value: marketingSummary.avgROI, icon: TrendingUp, color: '#F59E0B', bg: '#FFFBEB' },
  ];

  return (
    <div className="marketing-page" id="marketing-page">
      {/* Summary */}
      <div className="marketing-summary">
        {summaryCards.map((card) => {
          const Icon = card.icon;
          return (
            <div key={card.label} className="marketing-stat-card">
              <div className="marketing-stat-card__icon" style={{ backgroundColor: card.bg }}>
                <Icon size={22} color={card.color} />
              </div>
              <div className="marketing-stat-card__content">
                <span className="marketing-stat-card__value">{card.value}</span>
                <span className="marketing-stat-card__label">{card.label}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts */}
      <div className="marketing-charts">
        <ChartCard title="Lead Sources" subtitle="Distribution by channel">
          <DoughnutChart data={leadSourceData} />
        </ChartCard>
        <ChartCard title="Campaign Performance" subtitle="Leads vs conversions">
          <BarChart data={campaignPerformanceData} />
        </ChartCard>
      </div>

      {/* Campaigns Table */}
      <div className="marketing-table-section">
        <div className="marketing-table-header">
          <h2 className="marketing-table-title">Campaigns</h2>
          <Button icon={Plus} onClick={() => { setEditing(null); setForm(emptyForm); setModalOpen(true); }}>
            New Campaign
          </Button>
        </div>
        <DataTable columns={columns} data={campaignsList} onEdit={openEdit} onDelete={null} onView={null} actions={true} />
      </div>

      {/* Add/Edit Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={() => { setModalOpen(false); setEditing(null); }}
        title={editing ? 'Edit Campaign' : 'New Campaign'}
        footer={
          <>
            <Button variant="secondary" onClick={() => setModalOpen(false)}>Cancel</Button>
            <Button onClick={handleSubmit}>{editing ? 'Update' : 'Create Campaign'}</Button>
          </>
        }
      >
        <div className="marketing-form-grid">
          <FormField label="Campaign Name" name="name" value={form.name} onChange={handleChange} required />
          <FormField label="Channel" name="channel" type="select" value={form.channel} onChange={handleChange} options={['Email', 'Social Media', 'Google Ads', 'Referrals', 'Content', 'Events']} required />
          <FormField label="Start Date" name="startDate" type="date" value={form.startDate} onChange={handleChange} required />
          <FormField label="End Date" name="endDate" type="date" value={form.endDate} onChange={handleChange} required />
          <FormField label="Budget ($)" name="budget" type="number" value={form.budget} onChange={handleChange} required />
          <FormField label="Status" name="status" type="select" value={form.status} onChange={handleChange} options={['Planned', 'Active', 'Paused', 'Completed']} />
        </div>
      </Modal>
    </div>
  );
}
