import React, { Suspense, useMemo } from 'react'
import { Route, Routes } from 'react-router-dom'
import { PageLoader } from 'widgets/pageLoader'
import { routerConfig } from '../config/config'
import { PageError } from 'widgets/PageError'
import { ErrorBoundary } from 'react-error-boundary'
import { useAppSelector } from 'shared/lib/hooks/useAppSelector'
import { getUserAuthDate } from 'entities/User'

export const AppRouter: React.FC = () => {
  const isAuth = useAppSelector(getUserAuthDate)

  const accessibleRoutes = useMemo(() => routerConfig.filter(route => {
    if (route.isProtected && !isAuth) {
      return false
    }

    return true
  }), [isAuth])

  return (
      <Routes>
          {accessibleRoutes.map(({ element, path }) => (
              <Route key={path} path={path} element={
                  <Suspense fallback={<PageLoader />}>
                      <div className='page-wrapper'>
                          <ErrorBoundary FallbackComponent={PageError}>
                              {element}
                          </ErrorBoundary>
                      </div>
                  </Suspense>
                    } />
          ))}
      </Routes>
  )
}
