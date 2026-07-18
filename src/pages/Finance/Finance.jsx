import { useState } from 'react';
import { Plus, ArrowUpRight, ArrowDownRight, Wallet, Receipt, PiggyBank, AlertCircle, CreditCard, TrendingUp } from 'lucide-react';
import DataTable from '../../components/ui/DataTable';
import Tabs from '../../components/ui/Tabs';
import Button from '../../components/ui/Button';
import Modal from '../../components/ui/Modal';
import FormField from '../../components/ui/FormField';
import Badge from '../../components/ui/Badge';
import ChartCard from '../../components/charts/ChartCard';
import BarChart from '../../components/charts/BarChart';
import LineChart from '../../components/charts/LineChart';
import {
  revenueRecords as initialRevenue,
  expenseRecords as initialExpenses,
  financeSummary,
  financeChartData,
  profitTrendData,
} from '../../data/finance';
import './Finance.css';

const revenueCols = [
  { key: 'date', label: 'Date' },
  { key: 'category', label: 'Category', render: (val) => <Badge variant="info">{val}</Badge> },
  { key: 'description', label: 'Description' },
  { key: 'amount', label: 'Amount', render: (val) => <span className="amount amount--positive">${val.toLocaleString()}</span> },
  { key: 'status', label: 'Status', render: (val) => <Badge variant={val === 'Received' ? 'success' : 'warning'}>{val}</Badge> },
];

const expenseCols = [
  { key: 'date', label: 'Date' },
  { key: 'category', label: 'Category', render: (val) => <Badge variant="purple">{val}</Badge> },
  { key: 'description', label: 'Description' },
  { key: 'amount', label: 'Amount', render: (val) => <span className="amount amount--negative">${val.toLocaleString()}</span> },
  { key: 'status', label: 'Status', render: (val) => <Badge variant={val === 'Paid' ? 'success' : 'warning'}>{val}</Badge> },
];

const tabs = [
  { id: 'revenue', label: 'Revenue', icon: ArrowUpRight },
  { id: 'expenses', label: 'Expenses', icon: ArrowDownRight },
];

const emptyRevForm = { date: '', category: '', description: '', amount: '', status: 'Pending' };
const emptyExpForm = { date: '', category: '', description: '', amount: '', status: 'Pending' };

export default function Finance() {
  const [activeTab, setActiveTab] = useState('revenue');
  const [revenue, setRevenue] = useState(initialRevenue);
  const [expenses, setExpenses] = useState(initialExpenses);
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState(emptyRevForm);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    const record = { ...form, id: Date.now(), amount: Number(form.amount) };
    if (activeTab === 'revenue') {
      setRevenue([record, ...revenue]);
    } else {
      setExpenses([record, ...expenses]);
    }
    setModalOpen(false);
    setForm(emptyRevForm);
  };

  const summaryCards = [
    { label: 'Total Revenue', value: financeSummary.totalRevenue, icon: Wallet, color: '#2563EB', bg: '#EFF6FF' },
    { label: 'Total Expenses', value: financeSummary.totalExpenses, icon: CreditCard, color: '#EF4444', bg: '#FEF2F2' },
    { label: 'Net Profit', value: financeSummary.netProfit, icon: PiggyBank, color: '#10B981', bg: '#ECFDF5' },
    { label: 'Profit Margin', value: financeSummary.profitMargin, icon: TrendingUp, color: '#8B5CF6', bg: '#F5F3FF' },
    { label: 'Outstanding', value: financeSummary.outstandingInvoices, icon: Receipt, color: '#F59E0B', bg: '#FFFBEB' },
    { label: 'Overdue', value: financeSummary.overduePayments, icon: AlertCircle, color: '#EF4444', bg: '#FEF2F2' },
  ];

  return (
    <div className="finance-page" id="finance-page">
      {/* Summary cards */}
      <div className="finance-summary">
        {summaryCards.map((card) => {
          const Icon = card.icon;
          return (
            <div key={card.label} className="finance-summary-card">
              <div className="finance-summary-card__icon" style={{ backgroundColor: card.bg }}>
                <Icon size={20} color={card.color} />
              </div>
              <div className="finance-summary-card__content">
                <span className="finance-summary-card__label">{card.label}</span>
                <span className="finance-summary-card__value">{card.value}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts */}
      <div className="finance-charts">
        <ChartCard title="Revenue vs Expenses" subtitle="Monthly comparison">
          <BarChart data={financeChartData} />
        </ChartCard>
        <ChartCard title="Profit Trend" subtitle="Monthly net profit">
          <LineChart data={profitTrendData} />
        </ChartCard>
      </div>

      {/* Data Tables */}
      <div className="finance-table-section">
        <div className="finance-table-header">
          <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
          <Button icon={Plus} onClick={() => { setForm(emptyRevForm); setModalOpen(true); }}>
            {activeTab === 'revenue' ? 'Add Revenue' : 'Add Expense'}
          </Button>
        </div>

        {activeTab === 'revenue' ? (
          <DataTable columns={revenueCols} data={revenue} actions={false} />
        ) : (
          <DataTable columns={expenseCols} data={expenses} actions={false} />
        )}
      </div>

      {/* Add Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={activeTab === 'revenue' ? 'Add Revenue Record' : 'Add Expense Record'}
        footer={
          <>
            <Button variant="secondary" onClick={() => setModalOpen(false)}>Cancel</Button>
            <Button onClick={handleSubmit}>Save Record</Button>
          </>
        }
      >
        <div className="finance-form-grid">
          <FormField label="Date" name="date" type="date" value={form.date} onChange={handleChange} required />
          <FormField
            label="Category"
            name="category"
            type="select"
            value={form.category}
            onChange={handleChange}
            options={activeTab === 'revenue'
              ? ['Medicare', 'Medicaid', 'Private Insurance', 'Private Pay', 'Grants']
              : ['Payroll', 'Supplies', 'Insurance', 'Technology', 'Marketing', 'Rent', 'Utilities', 'Training', 'Vehicle']
            }
            required
          />
          <FormField label="Description" name="description" value={form.description} onChange={handleChange} required />
          <FormField label="Amount ($)" name="amount" type="number" value={form.amount} onChange={handleChange} required />
          <FormField label="Status" name="status" type="select" value={form.status} onChange={handleChange} options={activeTab === 'revenue' ? ['Received', 'Pending'] : ['Paid', 'Pending']} />
        </div>
      </Modal>
    </div>
  );
}
