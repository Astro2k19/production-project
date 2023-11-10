import { type RouteProps } from 'react-router-dom'

import { AboutPage } from '@/pages/About'
import { AdminPanel } from '@/pages/AdminPanel'
import { ArticleEditPage } from '@/pages/ArticleEditPage'
import { ArticleSinglePage } from '@/pages/ArticleSingle'
import { ArticlesPage } from '@/pages/Articles'
import { ForbiddenPage } from '@/pages/ForbiddenPage'
import { HomePage } from '@/pages/Home'
import { NotFoundPage } from '@/pages/NotFound'
import { Profile } from '@/pages/Profile'

import { UserRoles } from '@/entities/User'

import {
    getRouteAbout,
    getRouteAdminPanel,
    getRouteArticleEdit,
    getRouteArticleNew,
    getRouteArticleSingle,
    getRouteArticles,
    getRouteForbidden,
    getRouteMain,
    getRouteNotFound,
    getRouteProfile,
} from '@/shared/const/router'

export type ProtectedRouteProps = RouteProps & {
    isProtected?: boolean
    requiredRoles?: UserRoles[]
}

export const routerConfig: ProtectedRouteProps[] = [
    {
        path: getRouteMain(),
        element: <HomePage />,
    },
    {
        path: getRouteAbout(),
        element: <AboutPage />,
    },
    {
        path: getRouteProfile(':id'),
        element: <Profile />,
        isProtected: true,
    },
    {
        path: getRouteArticles(),
        element: <ArticlesPage />,
        isProtected: true,
    },
    {
        path: getRouteArticleEdit(':id'),
        element: <ArticleEditPage />,
        isProtected: true,
    },
    {
        path: getRouteArticleNew(),
        element: <ArticleEditPage />,
        isProtected: true,
    },
    {
        path: getRouteArticleSingle(':id'),
        element: <ArticleSinglePage />,
        isProtected: true,
    },
    {
        path: getRouteAdminPanel(),
        element: <AdminPanel />,
        isProtected: true,
        requiredRoles: [UserRoles.ADMIN, UserRoles.MANAGER],
    },
    {
        path: getRouteForbidden(),
        element: <ForbiddenPage />,
        isProtected: true,
    },
    {
        path: getRouteNotFound(),
        element: <NotFoundPage />,
    },
]
