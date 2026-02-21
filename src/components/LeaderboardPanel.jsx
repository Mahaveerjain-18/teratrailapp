import './LeaderboardPanel.css'

const MOCK_LEADERBOARD = [
  { rank: 1, name: 'TrailRunner99', distance: 48.5, walks: 32 },
  { rank: 2, name: 'WalkingWolf', distance: 42.1, walks: 28 },
  { rank: 3, name: 'UrbanExplorer', distance: 38.7, walks: 25 },
  { rank: 4, name: 'StepMaster', distance: 31.2, walks: 22 },
  { rank: 5, name: 'PathFinder', distance: 27.9, walks: 19 },
  { rank: 6, name: 'NightWalker', distance: 23.4, walks: 16 },
  { rank: 7, name: 'CityRunner', distance: 19.1, walks: 14 },
  { rank: 8, name: 'MorningHiker', distance: 15.6, walks: 11 },
]

const RANK_COLORS = { 1: '#f5c542', 2: '#c0c0c0', 3: '#cd7f32' }

export default function LeaderboardPanel({ currentUser }) {
  return (
    <div className="leaderboard">
      <div className="leaderboard__header">
        <h3 className="leaderboard__title">🏆 Leaderboard</h3>
        <span className="leaderboard__period">This Week</span>
      </div>
      <div className="leaderboard__list">
        {MOCK_LEADERBOARD.map((entry) => (
          <div
            key={entry.rank}
            className={`leaderboard__row ${entry.name === currentUser ? 'leaderboard__row--me' : ''}`}
          >
            <span
              className="leaderboard__rank"
              style={{ color: RANK_COLORS[entry.rank] || 'var(--text-secondary)' }}
            >
              {entry.rank}
            </span>
            <div className="leaderboard__avatar">
              {entry.name.charAt(0).toUpperCase()}
            </div>
            <div className="leaderboard__info">
              <span className="leaderboard__name">{entry.name}</span>
              <span className="leaderboard__meta">{entry.walks} walks</span>
            </div>
            <span className="leaderboard__distance">{entry.distance} km</span>
          </div>
        ))}
      </div>
    </div>
  )
}
