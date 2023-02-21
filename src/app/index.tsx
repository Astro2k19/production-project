import React from 'react'
import { classNames } from 'shared/lib'

import 'app/styles/index.scss'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'

export const App: React.FC = () => {
  return (
      <div className={classNames(['app'])} >
          <Navbar />
          <div className="page-content">
              <Sidebar />
              <AppRouter />
          </div>
      </div>
  )
}
