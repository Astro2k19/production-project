import { createAsyncThunk } from '@reduxjs/toolkit'
import { type AxiosError as AxiosErrorType } from 'axios'

import { type AsyncThunkConfig } from '@/app/providers/storeProvider'
import { type Profile } from '@/entities/Profile'
import { type ApiError } from '@/shared/api/api'

export const fetchProfileData = createAsyncThunk<Profile, string, AsyncThunkConfig<ApiError>>(
  'profile/fetchProfileData',
  async (profileId, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI
    try {
      const response = await extra.api.get<Profile>(`/profile/${profileId}`)

      if (!response.data) {
        return rejectWithValue({
          code: '500',
          message: 'No data'
        })
      }

      return response.data
    } catch (e) {
      const error = e as AxiosErrorType

      if (error.response) {
        return rejectWithValue({
          code: error.response.status.toString(),
          message: error.message
        })
      }

      return rejectWithValue({
        code: '500',
        message: 'Server Error'
      })
    }
  })
