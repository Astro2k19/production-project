import { createAsyncThunk } from '@reduxjs/toolkit'
import { type AsyncThunkConfig } from 'app/providers/storeProvider'
import { AxiosError } from 'axios'
import { type Profile } from '../../types/profile'

export const fetchProfileData = createAsyncThunk<Profile, undefined, AsyncThunkConfig<string>>(
  'profile/fetchProfileData',
  async (_, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI
    try {
      const response = await extra.api.get('/profile')

      if (!response.data) {
        return rejectWithValue('SERVER_ERROR')
      }

      return response.data
    } catch (e: any) {
      return rejectWithValue(e.code)
    }
  })
