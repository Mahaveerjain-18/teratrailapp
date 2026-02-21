import './TopModeTabs.css'

export default function TopModeTabs({ active, onChange }) {
  const tabs = [
    { id: 'private', label: 'Private Lobby', icon: '🔒' },
    { id: 'single', label: 'Single Player', icon: '👤' },
    { id: 'club', label: 'My Club', icon: '👥' },
  ]

  return (
    <div className="mode-tabs">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`mode-tabs__tab ${active === tab.id ? 'mode-tabs__tab--active' : ''}`}
          onClick={() => onChange(tab.id)}
          id={`mode-tab-${tab.id}`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
