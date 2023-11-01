import type { PayloadAction } from '@reduxjs/toolkit'

import { type ApiError } from '@/shared/api/api'
import { buildSlice } from '@/shared/lib/store/buildSlice'

import { loginByUsername } from '../services/loginByUsername/loginByUsername'
import { type LoginFormSchema } from '../types/loginSchema'

const initialState: LoginFormSchema = {
    username: '',
    password: '',
    isLoading: false,
}

export const authSlice = buildSlice({
    name: 'authForm',
    initialState,
    reducers: {
        setUsername(state, action: PayloadAction<string>) {
            state.username = action.payload
        },
        setPassword(state, action: PayloadAction<string>) {
            state.password = action.payload
        },
    },
    extraReducers: builder => {
        builder
            .addCase(loginByUsername.pending, state => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(loginByUsername.fulfilled, state => {
                state.isLoading = false
            })
            .addCase(loginByUsername.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload as ApiError
            })
    },
})

export const { actions: authActions, useActions: useAuthActions } = authSlice
export const { reducer: authReducer } = authSlice
