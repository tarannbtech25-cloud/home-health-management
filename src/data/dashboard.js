// Dashboard mock data
export const kpiData = [
  {
    id: 'revenue',
    label: 'Total Revenue',
    value: '$284,500',
    trend: '+12.5%',
    trendUp: true,
    icon: 'DollarSign',
    color: 'blue',
  },
  {
    id: 'expenses',
    label: 'Total Expenses',
    value: '$142,300',
    trend: '+3.2%',
    trendUp: false,
    icon: 'CreditCard',
    color: 'red',
  },
  {
    id: 'profit',
    label: 'Net Profit',
    value: '$142,200',
    trend: '+22.1%',
    trendUp: true,
    icon: 'TrendingUp',
    color: 'green',
  },
  {
    id: 'patients',
    label: 'Active Patients',
    value: '1,284',
    trend: '+8.3%',
    trendUp: true,
    icon: 'Heart',
    color: 'pink',
  },
  {
    id: 'present',
    label: 'Staff Present',
    value: '142',
    trend: '94.2%',
    trendUp: true,
    icon: 'UserCheck',
    color: 'green',
  },
  {
    id: 'absent',
    label: 'Staff Absent',
    value: '9',
    trend: '5.8%',
    trendUp: false,
    icon: 'UserX',
    color: 'amber',
  },
  {
    id: 'leads',
    label: 'New Leads',
    value: '328',
    trend: '+18.7%',
    trendUp: true,
    icon: 'Users',
    color: 'purple',
  },
  {
    id: 'campaigns',
    label: 'Active Campaigns',
    value: '12',
    trend: '+2',
    trendUp: true,
    icon: 'Megaphone',
    color: 'indigo',
  },
];

export const revenueChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Revenue',
      data: [18500, 22400, 19800, 24500, 28900, 26700, 31200, 29800, 34500, 32100, 36800, 38400],
      borderColor: '#2563EB',
      backgroundColor: 'rgba(37, 99, 235, 0.08)',
      fill: true,
      tension: 0.4,
      pointRadius: 4,
      pointHoverRadius: 6,
      pointBackgroundColor: '#2563EB',
      pointBorderColor: '#fff',
      pointBorderWidth: 2,
    },
  ],
};

export const profitChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Revenue',
      data: [18500, 22400, 19800, 24500, 28900, 26700, 31200, 29800, 34500, 32100, 36800, 38400],
      backgroundColor: 'rgba(37, 99, 235, 0.8)',
      borderRadius: 6,
      barThickness: 18,
    },
    {
      label: 'Expenses',
      data: [12000, 13500, 11800, 14200, 15600, 14800, 16200, 15900, 17800, 16500, 18200, 19100],
      backgroundColor: 'rgba(239, 68, 68, 0.7)',
      borderRadius: 6,
      barThickness: 18,
    },
  ],
};

export const salesTrendData = {
  labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
  datasets: [
    {
      label: 'Sales',
      data: [42, 55, 48, 62, 58, 71],
      borderColor: '#10B981',
      backgroundColor: 'rgba(16, 185, 129, 0.08)',
      fill: true,
      tension: 0.4,
      pointRadius: 4,
      pointHoverRadius: 6,
      pointBackgroundColor: '#10B981',
      pointBorderColor: '#fff',
      pointBorderWidth: 2,
    },
  ],
};

export const attendanceChartData = {
  labels: ['Present', 'Absent', 'On Leave', 'Remote'],
  datasets: [
    {
      data: [142, 9, 5, 18],
      backgroundColor: ['#10B981', '#EF4444', '#F59E0B', '#3B82F6'],
      borderWidth: 0,
      hoverOffset: 6,
    },
  ],
};

export const marketingOverviewData = {
  labels: ['Email', 'Social Media', 'Google Ads', 'Referrals', 'Content', 'Events'],
  datasets: [
    {
      label: 'Leads Generated',
      data: [85, 120, 95, 72, 58, 44],
      backgroundColor: [
        'rgba(37, 99, 235, 0.8)',
        'rgba(16, 185, 129, 0.8)',
        'rgba(245, 158, 11, 0.8)',
        'rgba(139, 92, 246, 0.8)',
        'rgba(236, 72, 153, 0.8)',
        'rgba(6, 182, 212, 0.8)',
      ],
      borderRadius: 6,
      barThickness: 28,
    },
  ],
};

export const recentActivity = [
  {
    id: 1,
    type: 'patient',
    message: 'New patient John Miller admitted to Physical Therapy',
    time: '10 minutes ago',
    icon: 'UserPlus',
  },
  {
    id: 2,
    type: 'finance',
    message: 'Invoice #INV-2847 — $3,200 received from Medicare',
    time: '25 minutes ago',
    icon: 'DollarSign',
  },
  {
    id: 3,
    type: 'hr',
    message: 'Sarah Johnson completed annual compliance training',
    time: '1 hour ago',
    icon: 'Award',
  },
  {
    id: 4,
    type: 'marketing',
    message: 'Email campaign "Summer Wellness" achieved 32% open rate',
    time: '2 hours ago',
    icon: 'Mail',
  },
  {
    id: 5,
    type: 'alert',
    message: 'Staff scheduling conflict detected for next Monday',
    time: '3 hours ago',
    icon: 'AlertTriangle',
  },
  {
    id: 6,
    type: 'patient',
    message: 'Patient Maria Garcia discharged — care plan completed',
    time: '4 hours ago',
    icon: 'CheckCircle',
  },
];
