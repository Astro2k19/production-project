import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { type LoginFormSchema } from '../types/loginSchema'
import { loginByUsername } from '../services/loginByUsername/loginByUsername'

const initialState: LoginFormSchema = {
  username: '',
  password: '',
  isLoading: false
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
      state.error = undefined
      state.isLoading = true
    })
      .addCase(loginByUsername.fulfilled, (state) => {
        state.isLoading = false
      })
      .addCase(loginByUsername.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const { actions: authActions } = authSlice
export const { reducer: authReducer } = authSlice
