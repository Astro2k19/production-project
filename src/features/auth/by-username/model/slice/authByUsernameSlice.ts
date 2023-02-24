import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { type AuthFormSchema } from '../types/authForm'
import { loginByUsername } from '../services/loginByUsername/loginByUsername'

const initialState: AuthFormSchema = {
  username: '',
  password: ''
}

export const authSlice = createSlice({
  name: 'authForm',
  initialState,
  reducers: {
    setUsername (state, action: PayloadAction<string>) {
      state.username = action.payload
    },
    setPassword (state, action: PayloadAction<string>) {
      state.password = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loginByUsername.pending, (state) => {
      state.loading = true
    })
      .addCase(loginByUsername.fulfilled, (state) => {
        state.loading = true
      })
      .addCase(loginByUsername.rejected, (state, action) => {
        state.error = action.payload
      })
  }
})

export const { actions: authActions } = authSlice

export const { reducer: authReducer } = authSlice
