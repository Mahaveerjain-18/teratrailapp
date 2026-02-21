import { useNavigate } from 'react-router-dom'
import './LandingPage.css'

export default function LandingPage() {
  const navigate = useNavigate()

  return (
    <div className="landing">
      {/* Animated background */}
      <div className="landing__bg">
        <div className="landing__orb landing__orb--1" />
        <div className="landing__orb landing__orb--2" />
        <div className="landing__orb landing__orb--3" />
        <div className="landing__grid" />
      </div>

      <main className="landing__content">
        {/* Badge */}
        <div className="landing__badge animate-fade-in">
          <span className="landing__badge-dot" />
          Walking Tracker
        </div>

        {/* Hero */}
        <h1 className="landing__title animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <span className="landing__title-accent">Terra</span>Trail
        </h1>

        <p className="landing__tagline animate-fade-in" style={{ animationDelay: '0.2s' }}>
          See your walks come alive
        </p>

        <p className="landing__description animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Track your walks and runs with real-time path visualization on a beautiful dark map.
          No clutter, no noise — just your journey.
        </p>

        {/* CTA */}
        <button
          className="landing__cta animate-fade-in"
          style={{ animationDelay: '0.4s' }}
          onClick={() => navigate('/login')}
          id="btn-start-walking"
        >
          <span className="landing__cta-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
          </span>
          Start Walking
        </button>

        {/* Features */}
        <div className="landing__features animate-fade-in" style={{ animationDelay: '0.55s' }}>
          <div className="landing__feature">
            <div className="landing__feature-icon">📍</div>
            <span>Live Tracking</span>
          </div>
          <div className="landing__feature">
            <div className="landing__feature-icon">🗺️</div>
            <span>Path Visualization</span>
          </div>
          <div className="landing__feature">
            <div className="landing__feature-icon">⚡</div>
            <span>Real-Time Metrics</span>
          </div>
        </div>
      </main>

      <footer className="landing__footer animate-fade-in" style={{ animationDelay: '0.7s' }}>
        Built with ❤️ for CodeDay Hackathon
      </footer>
    </div>
  )
}
