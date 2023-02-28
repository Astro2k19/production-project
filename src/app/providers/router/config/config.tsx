import { type RouteProps } from 'react-router-dom'
import { HomePage } from 'pages/Home'
import { AboutPage } from 'pages/About'
import { NotFound } from 'pages/NotFound'
import { appPaths, AppRoutes } from 'shared/config/routerConfig/routerConfig'

export const routerConfig: RouteProps[] = [
  {
    path: appPaths[AppRoutes.MAIN],
    element: <HomePage/>
  },
  {
    path: appPaths[AppRoutes.ABOUT],
    element: <AboutPage/>
  },
  {
    path: appPaths[AppRoutes.NOT_FOUND],
    element: <NotFound/>
  }
]
