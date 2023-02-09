import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routerConfig } from '../config/config'

export const AppRouter: React.FC = () => {
  return (
      <Suspense fallback={<div>LOADING...</div>}>
          <Routes>
              {routerConfig.map(({ element, path }) => (
                  <Route key={path} path={path} element={
                      <div className='page-wrapper'>
                          {element}
                      </div>
                    } />
              ))}
          </Routes>
      </Suspense>
  )
}
