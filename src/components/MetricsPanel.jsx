import './MetricsPanel.css'

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
}

function formatDistance(meters) {
  return (meters / 1000).toFixed(2)
}

export default function MetricsPanel({ distance, elapsed, className = '' }) {
  return (
    <div className={`metrics-panel ${className}`}>
      <div className="metric">
        <span className="metric-value">{formatDistance(distance)}</span>
        <span className="metric-label">km</span>
      </div>
      <div className="metric-divider" />
      <div className="metric">
        <span className="metric-value">{formatTime(elapsed)}</span>
        <span className="metric-label">time</span>
      </div>
    </div>
  )
}
