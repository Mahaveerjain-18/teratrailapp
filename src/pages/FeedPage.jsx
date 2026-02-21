import { useAuthContext } from '../context/AuthContext'
import './FeedPage.css'

const MOCK_FEED = [
  {
    id: 1,
    user: 'TrailRunner99',
    action: 'completed a walk',
    distance: 3.2,
    time: '32 min',
    when: '2 hours ago',
    likes: 5,
  },
  {
    id: 2,
    user: 'WalkingWolf',
    action: 'claimed a new territory',
    area: 'MG Road Area',
    when: '4 hours ago',
    likes: 12,
  },
  {
    id: 3,
    user: 'UrbanExplorer',
    action: 'completed a walk',
    distance: 5.1,
    time: '48 min',
    when: '5 hours ago',
    likes: 8,
  },
  {
    id: 4,
    user: 'StepMaster',
    action: 'joined the club',
    when: '1 day ago',
    likes: 3,
  },
  {
    id: 5,
    user: 'PathFinder',
    action: 'completed a walk',
    distance: 2.0,
    time: '20 min',
    when: '1 day ago',
    likes: 6,
  },
]

export default function FeedPage() {
  const { user } = useAuthContext()

  return (
    <div className="feed">
      <div className="feed__header">
        <h2 className="feed__title">Activity Feed</h2>
        <p className="feed__subtitle">See what others are up to</p>
      </div>

      <div className="feed__list">
        {MOCK_FEED.map((item) => (
          <div key={item.id} className="feed__card">
            <div className="feed__card-top">
              <div className="feed__card-avatar">
                {item.user.charAt(0).toUpperCase()}
              </div>
              <div className="feed__card-info">
                <span className="feed__card-user">{item.user}</span>
                <span className="feed__card-when">{item.when}</span>
              </div>
            </div>
            <p className="feed__card-action">
              {item.action}
              {item.distance && (
                <span className="feed__card-highlight"> · {item.distance} km in {item.time}</span>
              )}
              {item.area && (
                <span className="feed__card-highlight"> · {item.area}</span>
              )}
            </p>
            <div className="feed__card-bottom">
              <button className="feed__like-btn">❤️ {item.likes}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
