import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit'

import { userActions } from '../../slice/userSlice'

import { type StoreSchema } from '@/app/providers/storeProvider'
import { USER_AUTH_DATA_KEY } from '@/shared/const/localStorage'

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
