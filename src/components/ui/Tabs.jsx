import './Tabs.css';

export default function Tabs({ tabs, activeTab, onTabChange }) {
  return (
    <div className="tabs" id="tabs">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`tabs__tab ${activeTab === tab.id ? 'tabs__tab--active' : ''}`}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.icon && <tab.icon size={16} />}
          <span>{tab.label}</span>
          {tab.count !== undefined && (
            <span className="tabs__count">{tab.count}</span>
          )}
        </button>
      ))}
    </div>
  );
}
