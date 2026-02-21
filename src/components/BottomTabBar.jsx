import { useLocation, useNavigate } from 'react-router-dom'
import './BottomTabBar.css'

const tabs = [
  { id: 'play', path: '/play', label: 'Play', icon: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
    </svg>
  )},
  { id: 'me', path: '/me', label: 'Me', icon: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
    </svg>
  )},
  { id: 'feed', path: '/feed', label: 'Feed', icon: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  )},
  { id: 'start', path: '/start', label: 'Start', icon: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
    </svg>
  )},
]

export default function BottomTabBar() {
  const location = useLocation()
  const navigate = useNavigate()

  const activeTab = tabs.find(t => location.pathname.startsWith(t.path))?.id || 'play'

  return (
    <nav className="bottom-bar">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`bottom-bar__tab ${activeTab === tab.id ? 'bottom-bar__tab--active' : ''}`}
          onClick={() => navigate(tab.path)}
          id={`tab-${tab.id}`}
        >
          <span className="bottom-bar__icon">{tab.icon}</span>
          <span className="bottom-bar__label">{tab.label}</span>
        </button>
      ))}
    </nav>
  )
}
