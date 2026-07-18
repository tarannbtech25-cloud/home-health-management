import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const defaultOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      backgroundColor: '#0F172A',
      titleFont: { family: "'Inter', sans-serif", size: 12 },
      bodyFont: { family: "'Inter', sans-serif", size: 12 },
      padding: 10,
      borderColor: 'rgba(255,255,255,0.1)',
      borderWidth: 1,
      cornerRadius: 8,
      displayColors: false,
    },
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: { font: { family: "'Inter', sans-serif", size: 11 }, color: '#94A3B8' },
      border: { display: false },
    },
    y: {
      grid: { color: '#F1F5F9' },
      ticks: { font: { family: "'Inter', sans-serif", size: 11 }, color: '#94A3B8' },
      border: { display: false },
    },
  },
  interaction: {
    intersect: false,
    mode: 'index',
  },
};

export default function LineChart({ data, options = {} }) {
  const merged = {
    ...defaultOptions,
    ...options,
    plugins: { ...defaultOptions.plugins, ...options.plugins },
    scales: { ...defaultOptions.scales, ...options.scales },
  };

  return (
    <div style={{ height: '100%', minHeight: 240 }}>
      <Line data={data} options={merged} />
    </div>
  );
}
