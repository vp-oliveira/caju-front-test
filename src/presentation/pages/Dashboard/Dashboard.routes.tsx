import { RouteObject } from 'react-router-dom'

import { Dashboard } from './Dashboard.container'

export const dashboardRoutes: RouteObject[] = [
  { path: '/dashboard', element: <Dashboard /> },
  { path: '*', element: <Dashboard /> }
]
