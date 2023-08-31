import { type RouteProps } from 'react-router-dom'
import { HomePage } from '@/pages/Home'
import { AboutPage } from '@/pages/About'
import { NotFoundPage } from '@/pages/NotFound'
import { Profile } from '@/pages/Profile'
import { ArticlesPage } from '@/pages/Articles'
import { ArticleSinglePage } from '@/pages/ArticleSingle'
import { ArticleEditPage } from '@/pages/ArticleEditPage'
import { AdminPanel } from '@/pages/AdminPanel'
import { ForbiddenPage } from '@/pages/ForbiddenPage'
import { UserRoles } from '@/entities/User'
import { appPaths } from '@/shared/types/router'

export type ProtectedRouteProps = RouteProps & {
  isProtected?: boolean
  requiredRoles?: UserRoles[]
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
    path: `${appPaths.article}:id`,
    element: <ArticleSinglePage/>,
    isProtected: true
  },
  {
    path: appPaths.admin,
    element: <AdminPanel/>,
    isProtected: true,
    requiredRoles: [UserRoles.ADMIN, UserRoles.MANAGER]
  },
  {
    path: appPaths.forbidden_page,
    element: <ForbiddenPage/>,
    isProtected: true
  },
  {
    path: appPaths.not_found,
    element: <NotFoundPage/>
  }
]
