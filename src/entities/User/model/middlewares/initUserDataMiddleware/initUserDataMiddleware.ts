import { createListenerMiddleware } from '@reduxjs/toolkit'
import { USER_AUTH_DATA_KEY } from 'shared/const/localStorage'
import { userActions } from '../../slice/userSlice'

export const initUserDataMiddleware = createListenerMiddleware()
initUserDataMiddleware.startListening({
  actionCreator: userActions.initAuthData,
  effect: (action, { dispatch }) => {
    const userData = localStorage.getItem(USER_AUTH_DATA_KEY)
    if (userData) {
      dispatch(userActions.setAuthDate(JSON.parse(userData)))
    }
  }
})
