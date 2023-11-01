import { createListenerMiddleware } from '@reduxjs/toolkit'

import { USER_AUTH_DATA_KEY } from '@/shared/const/localStorage'
import { setFeatureFlag } from '@/shared/lib/features'

import { userActions } from '../../slice/userSlice'
import { User } from '../../types/userTypes'

export const initUserDataMiddleware = createListenerMiddleware()
initUserDataMiddleware.startListening({
    actionCreator: userActions.initAuthData,
    effect: (action, { dispatch }) => {
        const userData = localStorage.getItem(USER_AUTH_DATA_KEY)
        if (userData) {
            const parsedUser = JSON.parse(userData) as User
            dispatch(userActions.setAuthDate(parsedUser))
            setFeatureFlag(parsedUser.features)
        }
    },
})
