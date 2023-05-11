import { type RouteProps } from 'react-router-dom'
import { HomePage } from 'pages/Home'
import { AboutPage } from 'pages/About'
import { NotFoundPage } from 'pages/NotFound'
import { Profile } from 'pages/Profile'
import { appPaths, AppRoutes } from 'shared/config/routerConfig/routerConfig'
import { ArticlesPage } from 'pages/Articles'
import { ArticleSinglePage } from 'pages/ArticleSingle'
import { ArticleEditPage } from 'pages/ArticleEditPage'

export type ProtectedRouteProps = RouteProps & {
  isProtected?: boolean
}

export const routerConfig: ProtectedRouteProps[] = [
  {
    path: appPaths.home,
    element: <HomePage/>
  },
  {
    path: appPaths.about,
    element: <AboutPage/>
  },
  {
    path: `${appPaths.profile}:id`,
    element: <Profile/>,
    isProtected: true
  },
  {
    path: appPaths.articles,
    element: <ArticlesPage/>,
    isProtected: true
  },
  {
    path: appPaths.article_edit,
    element: <ArticleEditPage/>,
    isProtected: true
  },
  {
    path: appPaths.article_new,
    element: <ArticleEditPage/>,
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
