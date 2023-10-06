import React, { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Route, Routes } from 'react-router-dom'

import { type ProtectedRouteProps, routerConfig } from '../config/routerConfig'

import { ProtectedRoute } from './ProtectedRoute'
import { RoleGuard } from './RoleGuard'

import { PageError } from '@/widgets/PageError'
import { PageLoader } from '@/widgets/pageLoader'

export const AppRouter: React.FC = () => {
  const renderWithProtectedRoutes = (route: ProtectedRouteProps) => {
    const element = (
        <Suspense fallback={<PageLoader/>}>
            <ErrorBoundary FallbackComponent={PageError}>
                {route.element}
            </ErrorBoundary>
        </Suspense>
    )

    return (
        <Route
                key={route.path}
                path={route.path}
                element={
                    route.isProtected
                      ? (
                          <RoleGuard requiredRoles={route.requiredRoles}>
                              <ProtectedRoute>
                                  {element}
                              </ProtectedRoute>
                          </RoleGuard>
                        )
                      : (
                          element
                        )
                }
                />
    )
  }

  return (
      <Routes>
          {routerConfig.map(renderWithProtectedRoutes)}
      </Routes>
  )
}
