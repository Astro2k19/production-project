import { type RouteProps } from 'react-router-dom'
import { HomePage } from 'pages/Home'
import { AboutPage } from 'pages/About'
import { NotFound } from 'pages/NotFound'
import { Profile } from 'pages/Profile'
import { appPaths, AppRoutes } from 'shared/config/routerConfig/routerConfig'

export const routerConfig: RouteProps[] = [
  {
    path: appPaths[AppRoutes.HOME],
    element: <HomePage/>
  },
  {
    path: appPaths[AppRoutes.ABOUT],
    element: <AboutPage/>
  },
  {
    path: appPaths[AppRoutes.PROFILE],
    element: <Profile/>
  },
  {
    path: appPaths[AppRoutes.NOT_FOUND],
    element: <NotFound/>
  }
]
