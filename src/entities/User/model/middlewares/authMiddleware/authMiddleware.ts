import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit'

import { type StoreSchema } from '@/app/providers/storeProvider'

import {
    LOCAL_STORAGE_DESIGN_KEY,
    USER_AUTH_DATA_KEY,
} from '@/shared/const/localStorage'

import { userActions } from '../../slice/userSlice'

export const authMiddleware = createListenerMiddleware()
authMiddleware.startListening({
    matcher: isAnyOf(userActions.setAuthDate, userActions.logOut),
    effect: (action, listenerApi) => {
        if (userActions.logOut.type === action.type) {
            localStorage.removeItem(USER_AUTH_DATA_KEY)
        } else {
            const { user } = listenerApi.getState() as StoreSchema
            localStorage.setItem(
                USER_AUTH_DATA_KEY,
                JSON.stringify(user.authData?.id),
            )
            localStorage.setItem(
                LOCAL_STORAGE_DESIGN_KEY,
                user.authData?.features?.isAppRedesigned ? 'new' : 'old',
            )
        }
    },
})
