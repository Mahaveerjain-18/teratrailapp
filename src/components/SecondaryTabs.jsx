import './SecondaryTabs.css'

export default function SecondaryTabs({ active, onChange }) {
  const tabs = [
    { id: 'leaderboard', label: 'Leaderboard' },
    { id: 'events', label: 'Events' },
    { id: 'territories', label: 'Territories' },
    { id: 'history', label: 'History' },
  ]

  return (
    <div className="secondary-tabs">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`secondary-tabs__tab ${active === tab.id ? 'secondary-tabs__tab--active' : ''}`}
          onClick={() => onChange(tab.id)}
          id={`sec-tab-${tab.id}`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
