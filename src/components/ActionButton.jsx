import './ActionButton.css'

export default function ActionButton({ variant = 'start', onClick, disabled = false }) {
  const config = {
    start: { label: 'Start Walking', icon: '▶', className: 'action-btn--start' },
    stop: { label: 'Stop', icon: '■', className: 'action-btn--stop' },
    newWalk: { label: 'Start New Walk', icon: '↻', className: 'action-btn--start' },
  }

  const { label, icon, className } = config[variant]

  return (
    <button
      className={`action-btn ${className}`}
      onClick={onClick}
      disabled={disabled}
      id={`btn-${variant}`}
    >
      <span className="action-btn__icon">{icon}</span>
      <span className="action-btn__label">{label}</span>
    </button>
  )
}
