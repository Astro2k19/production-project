import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { type User, type UserSchema } from '../types/userTypes'

const initialState: UserSchema = {
  authData: undefined
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthDate: (state, action: PayloadAction<User>) => {
      state.authData = action.payload
    },
    logOut: (state) => {
      state.authData = undefined
    }
  }
})

export const { actions: userActions } = userSlice

export const { reducer: userReducer } = userSlice