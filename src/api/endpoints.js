// Placeholder API endpoints — returns mock data
// Replace these with real API calls when backend is ready


const API_BASE = 'http://127.0.0.1:8000';


export const API = {
  dashboard: {
    get: () => fetch(`${API_BASE}/dashboard`),
  },
  employees: {
    list: () => fetch(`${API_BASE}/employees`),
    create: (data) =>
      fetch(`${API_BASE}/employees`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }),
    update: (id, data) =>
      fetch(`${API_BASE}/employees/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }),
    delete: (id) =>
      fetch(`${API_BASE}/employees/${id}`, { method: 'DELETE' }),
  },
  finance: {
    getRevenue: () => fetch(`${API_BASE}/finance/revenue`),
    getExpenses: () => fetch(`${API_BASE}/finance/expenses`),
    createRevenue: (data) =>
      fetch(`${API_BASE}/finance/revenue`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }),
    createExpense: (data) =>
      fetch(`${API_BASE}/finance/expenses`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }),
  },
  marketing: {
    getCampaigns: () => fetch(`${API_BASE}/marketing/campaigns`),
    createCampaign: (data) =>
      fetch(`${API_BASE}/marketing/campaigns`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }),
    updateCampaign: (id, data) =>
      fetch(`${API_BASE}/marketing/campaigns/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }),
  },
  chat: {
    send: (message) =>
      fetch(`${API_BASE}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      }),
  },
  reports: {
    generate: (type, dateRange) =>
      fetch(`${API_BASE}/reports/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, dateRange }),
      }),
    export: (reportId, format) =>
      fetch(`${API_BASE}/reports/${reportId}/export?format=${format}`),
  },
};
