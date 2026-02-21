import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, ProtectedRoute } from './context/AuthContext'
import AppLayout from './components/AppLayout'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import PlayPage from './pages/PlayPage'
import ProfilePage from './pages/ProfilePage'
import FeedPage from './pages/FeedPage'
import TrackingPage from './pages/TrackingPage'

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Authenticated routes with bottom tab bar */}
        <Route
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/play" element={<PlayPage />} />
          <Route path="/me" element={<ProfilePage />} />
          <Route path="/feed" element={<FeedPage />} />
          <Route path="/start" element={<TrackingPage />} />
        </Route>

        {/* Legacy redirect */}
        <Route path="/track" element={<Navigate to="/start" replace />} />
      </Routes>
    </AuthProvider>
  )
}
