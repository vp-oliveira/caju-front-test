import { RouteObject } from 'react-router-dom'

import { NewUser } from './NewUser.container'

export const newUserRoutes: RouteObject[] = [
  { path: '/new-user', element: <NewUser /> }
]
