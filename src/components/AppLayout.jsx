import { Outlet } from 'react-router-dom'
import BottomTabBar from './BottomTabBar'
import './AppLayout.css'

export default function AppLayout() {
  return (
    <div className="app-layout">
      <div className="app-layout__content">
        <Outlet />
      </div>
      <BottomTabBar />
    </div>
  )
}
