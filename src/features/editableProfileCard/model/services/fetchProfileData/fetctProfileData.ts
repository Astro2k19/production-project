import { createAsyncThunk } from '@reduxjs/toolkit'
import { type AsyncThunkConfig } from 'app/providers/storeProvider'
import { type Profile } from 'entities/Profile'

export const fetchProfileData = createAsyncThunk<Profile, undefined, AsyncThunkConfig<string>>(
  'profile/fetchProfileData',
  async (_, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI
    try {
      const response = await extra.api.get<Profile>('/profile')
      console.log(response, 'response')

      if (!response.data) {
        return rejectWithValue('SERVER_ERROR')
      }

      return response.data
    } catch (e) {
      return rejectWithValue('SERVER_ERROR')
    }
  })
