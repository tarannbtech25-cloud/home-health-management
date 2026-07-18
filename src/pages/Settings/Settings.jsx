import { useState } from 'react';
import { Building2, Palette, Bell, User, Key, Save, Shield, Globe } from 'lucide-react';
import FormField from '../../components/ui/FormField';
import Button from '../../components/ui/Button';
import './Settings.css';

const sections = [
  { id: 'company', label: 'Company Profile', icon: Building2 },
  { id: 'appearance', label: 'Appearance', icon: Palette },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'profile', label: 'User Profile', icon: User },
  { id: 'api', label: 'API Settings', icon: Key },
];

export default function Settings() {
  const [activeSection, setActiveSection] = useState('company');
  const [saved, setSaved] = useState(false);

  const [company, setCompany] = useState({
    name: 'Home Health AI',
    email: 'admin@homehealth.ai',
    phone: '(555) 000-1234',
    address: '123 Healthcare Blvd, Suite 100',
    city: 'Los Angeles',
    state: 'CA',
    zip: '90001',
    website: 'https://homehealth.ai',
  });

  const [notifications, setNotifications] = useState({
    emailAlerts: true,
    smsAlerts: false,
    pushNotifications: true,
    weeklyDigest: true,
    patientAlerts: true,
    financialAlerts: true,
    hrAlerts: false,
    marketingAlerts: true,
  });

  const [profile, setProfile] = useState({
    firstName: 'Admin',
    lastName: 'User',
    email: 'admin@homehealth.ai',
    phone: '(555) 000-1234',
    role: 'Super Admin',
    timezone: 'America/Los_Angeles',
  });

  const [apiSettings, setApiSettings] = useState({
    apiKey: 'hh-ai-xxxx-xxxx-xxxx-xxxx',
    aiModel: 'gpt-4',
    webhookUrl: '',
    rateLimit: '100',
  });

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleCompanyChange = (e) => setCompany({ ...company, [e.target.name]: e.target.value });
  const handleProfileChange = (e) => setProfile({ ...profile, [e.target.name]: e.target.value });
  const handleApiChange = (e) => setApiSettings({ ...apiSettings, [e.target.name]: e.target.value });

  const toggleNotif = (key) => {
    setNotifications({ ...notifications, [key]: !notifications[key] });
  };

  return (
    <div className="settings-page" id="settings-page">
      {/* Sidebar Nav */}
      <div className="settings-nav">
        {sections.map((s) => {
          const Icon = s.icon;
          return (
            <button
              key={s.id}
              className={`settings-nav__item ${activeSection === s.id ? 'settings-nav__item--active' : ''}`}
              onClick={() => setActiveSection(s.id)}
            >
              <Icon size={18} />
              <span>{s.label}</span>
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="settings-content">
        {/* Company Profile */}
        {activeSection === 'company' && (
          <div className="settings-section animate-fade-in">
            <div className="settings-section__header">
              <Building2 size={22} />
              <div>
                <h2>Company Profile</h2>
                <p>Manage your organization's basic information</p>
              </div>
            </div>
            <div className="settings-form-grid">
              <FormField label="Company Name" name="name" value={company.name} onChange={handleCompanyChange} />
              <FormField label="Email" name="email" type="email" value={company.email} onChange={handleCompanyChange} />
              <FormField label="Phone" name="phone" value={company.phone} onChange={handleCompanyChange} />
              <FormField label="Website" name="website" value={company.website} onChange={handleCompanyChange} />
              <div className="settings-form-full">
                <FormField label="Address" name="address" value={company.address} onChange={handleCompanyChange} />
              </div>
              <FormField label="City" name="city" value={company.city} onChange={handleCompanyChange} />
              <FormField label="State" name="state" value={company.state} onChange={handleCompanyChange} />
              <FormField label="ZIP Code" name="zip" value={company.zip} onChange={handleCompanyChange} />
            </div>
            <div className="settings-section__footer">
              <Button icon={Save} onClick={handleSave} variant={saved ? 'success' : 'primary'}>
                {saved ? 'Saved!' : 'Save Changes'}
              </Button>
            </div>
          </div>
        )}

        {/* Appearance */}
        {activeSection === 'appearance' && (
          <div className="settings-section animate-fade-in">
            <div className="settings-section__header">
              <Palette size={22} />
              <div>
                <h2>Appearance</h2>
                <p>Customize the look and feel of your dashboard</p>
              </div>
            </div>
            <div className="appearance-options">
              <div className="theme-selector">
                <h3>Theme</h3>
                <div className="theme-cards">
                  <div className="theme-card theme-card--active">
                    <div className="theme-card__preview theme-card__preview--light">
                      <div className="theme-preview-sidebar" />
                      <div className="theme-preview-content">
                        <div className="theme-preview-bar" />
                        <div className="theme-preview-cards">
                          <div className="theme-preview-card" />
                          <div className="theme-preview-card" />
                        </div>
                      </div>
                    </div>
                    <span>Light</span>
                  </div>
                  <div className="theme-card">
                    <div className="theme-card__preview theme-card__preview--dark">
                      <div className="theme-preview-sidebar" />
                      <div className="theme-preview-content">
                        <div className="theme-preview-bar" />
                        <div className="theme-preview-cards">
                          <div className="theme-preview-card" />
                          <div className="theme-preview-card" />
                        </div>
                      </div>
                    </div>
                    <span>Dark</span>
                  </div>
                  <div className="theme-card">
                    <div className="theme-card__preview theme-card__preview--system">
                      <div className="theme-preview-sidebar" />
                      <div className="theme-preview-content">
                        <div className="theme-preview-bar" />
                        <div className="theme-preview-cards">
                          <div className="theme-preview-card" />
                          <div className="theme-preview-card" />
                        </div>
                      </div>
                    </div>
                    <span>System</span>
                  </div>
                </div>
              </div>
              <div className="color-selector">
                <h3>Accent Color</h3>
                <div className="color-options">
                  {['#2563EB', '#10B981', '#8B5CF6', '#EC4899', '#F59E0B', '#06B6D4'].map((c) => (
                    <button
                      key={c}
                      className={`color-swatch ${c === '#2563EB' ? 'color-swatch--active' : ''}`}
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Notifications */}
        {activeSection === 'notifications' && (
          <div className="settings-section animate-fade-in">
            <div className="settings-section__header">
              <Bell size={22} />
              <div>
                <h2>Notifications</h2>
                <p>Configure how and when you receive notifications</p>
              </div>
            </div>
            <div className="notifications-list">
              {[
                { key: 'emailAlerts', label: 'Email Alerts', desc: 'Receive notifications via email' },
                { key: 'smsAlerts', label: 'SMS Alerts', desc: 'Receive text message notifications' },
                { key: 'pushNotifications', label: 'Push Notifications', desc: 'Browser push notifications' },
                { key: 'weeklyDigest', label: 'Weekly Digest', desc: 'Receive a weekly summary email' },
                { key: 'patientAlerts', label: 'Patient Alerts', desc: 'Notifications for patient updates' },
                { key: 'financialAlerts', label: 'Financial Alerts', desc: 'Revenue and expense notifications' },
                { key: 'hrAlerts', label: 'HR Alerts', desc: 'Employee and attendance notifications' },
                { key: 'marketingAlerts', label: 'Marketing Alerts', desc: 'Campaign performance updates' },
              ].map((item) => (
                <div key={item.key} className="notification-toggle">
                  <div className="notification-toggle__info">
                    <span className="notification-toggle__label">{item.label}</span>
                    <span className="notification-toggle__desc">{item.desc}</span>
                  </div>
                  <button
                    className={`toggle-switch ${notifications[item.key] ? 'toggle-switch--on' : ''}`}
                    onClick={() => toggleNotif(item.key)}
                    role="switch"
                    aria-checked={notifications[item.key]}
                  >
                    <span className="toggle-switch__thumb" />
                  </button>
                </div>
              ))}
            </div>
            <div className="settings-section__footer">
              <Button icon={Save} onClick={handleSave} variant={saved ? 'success' : 'primary'}>
                {saved ? 'Saved!' : 'Save Changes'}
              </Button>
            </div>
          </div>
        )}

        {/* User Profile */}
        {activeSection === 'profile' && (
          <div className="settings-section animate-fade-in">
            <div className="settings-section__header">
              <User size={22} />
              <div>
                <h2>User Profile</h2>
                <p>Update your personal information and preferences</p>
              </div>
            </div>
            <div className="profile-header">
              <div className="profile-avatar-large">
                <span>AD</span>
              </div>
              <div>
                <h3>{profile.firstName} {profile.lastName}</h3>
                <p>{profile.role}</p>
                <Button variant="outline" size="sm">Change Avatar</Button>
              </div>
            </div>
            <div className="settings-form-grid">
              <FormField label="First Name" name="firstName" value={profile.firstName} onChange={handleProfileChange} />
              <FormField label="Last Name" name="lastName" value={profile.lastName} onChange={handleProfileChange} />
              <FormField label="Email" name="email" type="email" value={profile.email} onChange={handleProfileChange} />
              <FormField label="Phone" name="phone" value={profile.phone} onChange={handleProfileChange} />
              <FormField label="Role" name="role" value={profile.role} onChange={handleProfileChange} />
              <FormField label="Timezone" name="timezone" type="select" value={profile.timezone} onChange={handleProfileChange} options={['America/New_York', 'America/Chicago', 'America/Denver', 'America/Los_Angeles', 'America/Phoenix']} />
            </div>
            <div className="settings-section__footer">
              <Button icon={Save} onClick={handleSave} variant={saved ? 'success' : 'primary'}>
                {saved ? 'Saved!' : 'Save Changes'}
              </Button>
            </div>
          </div>
        )}

        {/* API Settings */}
        {activeSection === 'api' && (
          <div className="settings-section animate-fade-in">
            <div className="settings-section__header">
              <Key size={22} />
              <div>
                <h2>API Settings</h2>
                <p>Configure API keys and integrations</p>
              </div>
            </div>
            <div className="api-warning">
              <Shield size={18} />
              <span>Keep your API keys secure. Never share them publicly.</span>
            </div>
            <div className="settings-form-grid">
              <FormField label="API Key" name="apiKey" value={apiSettings.apiKey} onChange={handleApiChange} />
              <FormField label="AI Model" name="aiModel" type="select" value={apiSettings.aiModel} onChange={handleApiChange} options={['gpt-4', 'gpt-4-turbo', 'gpt-3.5-turbo', 'claude-3']} />
              <FormField label="Webhook URL" name="webhookUrl" value={apiSettings.webhookUrl} onChange={handleApiChange} placeholder="https://..." />
              <FormField label="Rate Limit (req/min)" name="rateLimit" type="number" value={apiSettings.rateLimit} onChange={handleApiChange} />
            </div>
            <div className="settings-section__footer">
              <Button icon={Save} onClick={handleSave} variant={saved ? 'success' : 'primary'}>
                {saved ? 'Saved!' : 'Save Changes'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
