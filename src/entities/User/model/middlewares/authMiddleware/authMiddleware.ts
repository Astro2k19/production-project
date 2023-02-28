import { type StoreSchema } from 'app/providers/storeProvider/config/StoreSchema'
import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit'
import { USER_AUTH_DATA_KEY } from 'shared/const/localStorage'
import { userActions } from '../../slice/userSlice'

export const authMiddleware = createListenerMiddleware()
authMiddleware.startListening({
  matcher: isAnyOf(userActions.setAuthDate, userActions.logOut),
  effect: (action, listenerApi) => {
    if (userActions.logOut.type === action.type) {
      localStorage.removeItem(USER_AUTH_DATA_KEY)
    } else {
      localStorage.setItem(USER_AUTH_DATA_KEY, JSON.stringify((listenerApi.getState() as StoreSchema).user.authData))
    }
  }
})
