import { type RouteProps } from 'react-router-dom'
import { Home } from 'pages/Home'
import { About } from 'pages/About'
import { NotFound } from 'pages/NotFound'
import { appPaths, AppRoutes } from 'shared/config/routerConfig'

export const routerConfig: RouteProps[] = [
  {
    path: appPaths[AppRoutes.MAIN],
    element: <Home/>
  },
  {
    path: appPaths[AppRoutes.ABOUT],
    element: <About/>
  },
  {
    path: appPaths[AppRoutes.NOT_FOUND],
    element: <NotFound/>
  }
]
