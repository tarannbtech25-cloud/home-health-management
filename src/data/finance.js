// Finance mock data
export const revenueRecords = [
  { id: 1, date: '2026-07-15', category: 'Medicare', description: 'Medicare reimbursement — Batch #2847', amount: 45200, status: 'Received' },
  { id: 2, date: '2026-07-14', category: 'Medicaid', description: 'Medicaid payment — Q3 billing cycle', amount: 28400, status: 'Received' },
  { id: 3, date: '2026-07-12', category: 'Private Insurance', description: 'Blue Cross Blue Shield — Claims batch', amount: 18900, status: 'Pending' },
  { id: 4, date: '2026-07-10', category: 'Private Pay', description: 'Direct patient payments — July week 2', amount: 8750, status: 'Received' },
  { id: 5, date: '2026-07-08', category: 'Medicare', description: 'Medicare reimbursement — Batch #2846', amount: 52100, status: 'Received' },
  { id: 6, date: '2026-07-05', category: 'Private Insurance', description: 'Aetna — Claims settlement', amount: 14600, status: 'Received' },
  { id: 7, date: '2026-07-03', category: 'Grants', description: 'State home health improvement grant', amount: 25000, status: 'Received' },
  { id: 8, date: '2026-07-01', category: 'Medicare', description: 'Medicare reimbursement — Batch #2845', amount: 48300, status: 'Received' },
  { id: 9, date: '2026-06-28', category: 'Medicaid', description: 'Medicaid payment — June final', amount: 31200, status: 'Received' },
  { id: 10, date: '2026-06-25', category: 'Private Pay', description: 'Direct patient payments — June week 4', amount: 9200, status: 'Received' },
];

export const expenseRecords = [
  { id: 1, date: '2026-07-15', category: 'Payroll', description: 'Staff payroll — Week 28', amount: 68500, status: 'Paid' },
  { id: 2, date: '2026-07-14', category: 'Supplies', description: 'Medical supplies — McKesson order', amount: 4200, status: 'Paid' },
  { id: 3, date: '2026-07-12', category: 'Insurance', description: 'Professional liability insurance — Q3', amount: 12800, status: 'Paid' },
  { id: 4, date: '2026-07-10', category: 'Technology', description: 'EHR software subscription — Monthly', amount: 3500, status: 'Paid' },
  { id: 5, date: '2026-07-08', category: 'Payroll', description: 'Staff payroll — Week 27', amount: 67200, status: 'Paid' },
  { id: 6, date: '2026-07-05', category: 'Marketing', description: 'Digital marketing — Google Ads', amount: 5800, status: 'Paid' },
  { id: 7, date: '2026-07-03', category: 'Rent', description: 'Office space lease — July', amount: 8500, status: 'Paid' },
  { id: 8, date: '2026-07-01', category: 'Utilities', description: 'Electric, water, internet — July', amount: 2100, status: 'Pending' },
  { id: 9, date: '2026-06-28', category: 'Training', description: 'Staff compliance training program', amount: 4800, status: 'Paid' },
  { id: 10, date: '2026-06-25', category: 'Vehicle', description: 'Fleet fuel & maintenance', amount: 3600, status: 'Paid' },
];

export const financeSummary = {
  totalRevenue: '$284,500',
  totalExpenses: '$142,300',
  netProfit: '$142,200',
  profitMargin: '50.0%',
  outstandingInvoices: '$47,500',
  overduePayments: '$8,200',
};

export const financeChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Revenue',
      data: [38500, 42400, 39800, 44500, 48900, 46700, 51200],
      backgroundColor: 'rgba(37, 99, 235, 0.8)',
      borderRadius: 6,
      barThickness: 20,
    },
    {
      label: 'Expenses',
      data: [22000, 23500, 21800, 24200, 25600, 24800, 26200],
      backgroundColor: 'rgba(239, 68, 68, 0.7)',
      borderRadius: 6,
      barThickness: 20,
    },
  ],
};

export const profitTrendData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Net Profit',
      data: [16500, 18900, 18000, 20300, 23300, 21900, 25000],
      borderColor: '#10B981',
      backgroundColor: 'rgba(16, 185, 129, 0.08)',
      fill: true,
      tension: 0.4,
      pointRadius: 5,
      pointHoverRadius: 7,
      pointBackgroundColor: '#10B981',
      pointBorderColor: '#fff',
      pointBorderWidth: 2,
    },
  ],
};
