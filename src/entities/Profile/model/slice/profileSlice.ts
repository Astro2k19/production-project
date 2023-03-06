import { createSlice } from '@reduxjs/toolkit'
import { type ProfileSchema } from '../types/profile'
import { fetchProfileData } from 'entities/Profile'

const initialState: ProfileSchema = {
  data: undefined,
  isLoading: false,
  readonly: true,
  error: undefined
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProfileData.pending, (state, action) => {
      state.isLoading = true
    })
      .addCase(fetchProfileData.fulfilled, (state, action) => {
        state.isLoading = false
        state.data = action.payload
      })
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const { actions: profileActions } = profileSlice

export const { reducer: profileReducer } = profileSlice
