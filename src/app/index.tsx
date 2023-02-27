import React, { useEffect } from 'react'
import { classNames } from 'shared/lib'

import 'app/styles/index.scss'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { USER_AUTH_DATA_KEY } from 'shared/const/localStorage'
import { useDispatch } from 'react-redux'
import { userActions } from 'entities/User'

export const App: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const userData = localStorage.getItem(USER_AUTH_DATA_KEY)
    if (userData) {
      console.log(JSON.parse(userData))
      dispatch(userActions.setAuthDate(JSON.parse(userData)))
    }
  }, [])

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
