import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { fetchProfileData } from '../services/fetchProfileData/fetctProfileData'
import { updateProfileData } from '../services/updateProfileData/updateProfileData'
import { type Profile, type ProfileSchema } from 'entities/Profile'

const initialState: ProfileSchema = {
  data: undefined,
  isLoading: false,
  readonly: true,
  error: undefined
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfileData: (state, action: PayloadAction<DeepPartial<Profile>>) => {
      state.formData = {
        ...state.formData,
        ...action.payload as Profile
      }
    },
    setReadonly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload
    },
    cancelUpdate: (state) => {
      state.formData = state.data
      state.readonly = true
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProfileData.pending, (state, action) => {
      state.isLoading = true
    })
      .addCase(fetchProfileData.fulfilled, (state, action) => {
        state.isLoading = false
        state.data = action.payload
        state.formData = action.payload
      })
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
      .addCase(updateProfileData.pending, (state, action) => {
        state.isLoading = true
        state.validateProfileErrors = undefined
      })
      .addCase(updateProfileData.fulfilled, (state, action) => {
        state.isLoading = false
        state.data = action.payload
        state.formData = action.payload
        state.validateProfileErrors = undefined
      })
      .addCase(updateProfileData.rejected, (state, action) => {
        state.isLoading = false
        state.validateProfileErrors = action.payload
      })
  }
})

export const { actions: profileActions } = profileSlice

export const { reducer: profileReducer } = profileSlice
