import './HistoryPanel.css'

const MOCK_HISTORY = [
  { id: 1, date: 'Today', time: '08:30 AM', distance: 2.4, duration: '24:10', path: 'Morning Walk' },
  { id: 2, date: 'Yesterday', time: '06:15 PM', distance: 1.8, duration: '18:45', path: 'Evening Jog' },
  { id: 3, date: 'Feb 19', time: '07:00 AM', distance: 3.1, duration: '32:20', path: 'Long Run' },
  { id: 4, date: 'Feb 18', time: '05:45 PM', distance: 1.2, duration: '12:55', path: 'Quick Walk' },
  { id: 5, date: 'Feb 17', time: '08:00 AM', distance: 2.7, duration: '28:30', path: 'Weekend Trail' },
]

export default function HistoryPanel() {
  return (
    <div className="history">
      <div className="history__header">
        <h3 className="history__title">📋 Walk History</h3>
        <span className="history__count">{MOCK_HISTORY.length} walks</span>
      </div>
      <div className="history__list">
        {MOCK_HISTORY.map((walk) => (
          <div key={walk.id} className="history__row">
            <div className="history__icon">🏃</div>
            <div className="history__info">
              <span className="history__name">{walk.path}</span>
              <span className="history__meta">{walk.date} · {walk.time}</span>
            </div>
            <div className="history__stats">
              <span className="history__distance">{walk.distance} km</span>
              <span className="history__duration">{walk.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
