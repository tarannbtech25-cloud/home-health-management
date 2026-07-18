import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const defaultOptions = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: '70%',
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        font: { family: "'Inter', sans-serif", size: 12 },
        color: '#64748B',
        usePointStyle: true,
        pointStyle: 'circle',
        padding: 16,
      },
    },
    tooltip: {
      backgroundColor: '#0F172A',
      titleFont: { family: "'Inter', sans-serif", size: 12 },
      bodyFont: { family: "'Inter', sans-serif", size: 12 },
      padding: 10,
      borderColor: 'rgba(255,255,255,0.1)',
      borderWidth: 1,
      cornerRadius: 8,
    },
  },
};

export default function DoughnutChart({ data, options = {} }) {
  const merged = {
    ...defaultOptions,
    ...options,
    plugins: { ...defaultOptions.plugins, ...options.plugins },
  };

  return (
    <div style={{ height: '100%', minHeight: 240 }}>
      <Doughnut data={data} options={merged} />
    </div>
  );
}
