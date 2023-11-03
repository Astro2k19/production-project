import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { setFeatureFlag } from '@/shared/lib/features'

import { setJsonSettings } from '../services/setJsonSettings'
import { type User, type UserSchema } from '../types/userTypes'

const initialState: UserSchema = {
    authData: undefined,
    _inited: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthDate: (state, action: PayloadAction<User>) => {
            state.authData = action.payload
            setFeatureFlag(action.payload.features)
        },
        initAuthData: state => {
            state._inited = true
        },
        logOut: state => {
            state.authData = undefined
        },
    },
    extraReducers: builder => {
        builder.addCase(setJsonSettings.fulfilled, (state, { payload }) => {
            if (state.authData) {
                state.authData.jsonSettings = payload
            }
        })
    },
})

export const { actions: userActions } = userSlice

export const { reducer: userReducer } = userSlice
