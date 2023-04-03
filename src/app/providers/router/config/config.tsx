import { type RouteProps } from 'react-router-dom'
import { HomePage } from 'pages/Home'
import { AboutPage } from 'pages/About'
import { NotFoundPage } from 'pages/NotFound'
import { Profile } from 'pages/Profile'
import { appPaths, AppRoutes } from 'shared/config/routerConfig/routerConfig'
import { ArticlesPage } from 'pages/Articles'
import { ArticleSinglePage } from 'pages/ArticleSingle'

export type ProtectedRouteProps = RouteProps & {
  isProtected?: boolean
}

export const routerConfig: ProtectedRouteProps[] = [
  {
    path: appPaths[AppRoutes.HOME],
    element: <HomePage/>
  },
  {
    path: appPaths[AppRoutes.ABOUT],
    element: <AboutPage/>
  },
  {
    path: `${appPaths[AppRoutes.PROFILE]}:id`,
    element: <Profile/>,
    isProtected: true
  },
  {
    path: appPaths[AppRoutes.ARTICLES],
    element: <ArticlesPage/>,
    isProtected: true
  },
  {
    path: `${appPaths[AppRoutes.ARTICLE_SINGLE]}:id`,
    element: <ArticleSinglePage/>,
    isProtected: true
  },
  {
    path: appPaths[AppRoutes.NOT_FOUND],
    element: <NotFoundPage/>
  }
]
