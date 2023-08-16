import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { PageLoader } from '@/widgets/pageLoader'
import { type ProtectedRouteProps, routerConfig } from '../config/config'
import { PageError } from '@/widgets/PageError'
import { ErrorBoundary } from 'react-error-boundary'
import { ProtectedRoute } from '@/app/providers/router/ui/ProtectedRoute'
import { RoleGuard } from '@/app/providers/router/ui/RoleGuard'

export const AppRouter: React.FC = () => {
  const renderWithProtectedRoutes = (route: ProtectedRouteProps) => {
    const element = (
        <Suspense fallback={<PageLoader/>}>
            <ErrorBoundary FallbackComponent={PageError}>
                {route.element}
            </ErrorBoundary>
        </Suspense>
    )

    return <Route
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
  }

  return (
      <Routes>
          {routerConfig.map(renderWithProtectedRoutes)}
      </Routes>
  )
}
