import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Dashboard from './pages/Dashboard/Dashboard';
import HR from './pages/HR/HR';
import Finance from './pages/Finance/Finance';
import Marketing from './pages/Marketing/Marketing';
import AIAssistant from './pages/AIAssistant/AIAssistant';
import Reports from './pages/Reports/Reports';
import Settings from './pages/Settings/Settings';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/hr" element={<HR />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/ai-assistant" element={<AIAssistant />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
