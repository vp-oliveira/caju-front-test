import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { dashboardRoutes } from '../pages/Dashboard/Dashboard.routes'
import { newUserRoutes } from '../pages/NewUser/NewUser.routes'

//Add all pages routes
const convertToSingleArray = [...dashboardRoutes, ...newUserRoutes]

const router = createBrowserRouter(convertToSingleArray)

export const Routes = () => {
  return <RouterProvider router={router} />
}
