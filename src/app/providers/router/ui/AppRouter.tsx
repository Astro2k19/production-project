import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { PageLoader } from 'widgets/pageLoader'
import { routerConfig } from '../config/config'

export const AppRouter: React.FC = () => {
  return (
      <Routes>
          {routerConfig.map(({ element, path }) => (
              <Route key={path} path={path} element={
                  <Suspense fallback={<PageLoader />}>
                      <div className='page-wrapper'>
                          {element}
                      </div>
                  </Suspense>
                    } />
          ))}
      </Routes>
  )
}
