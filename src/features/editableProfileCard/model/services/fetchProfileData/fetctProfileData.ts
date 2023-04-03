import { createAsyncThunk } from '@reduxjs/toolkit'
import { type AsyncThunkConfig } from 'app/providers/storeProvider'
import { type Profile } from 'entities/Profile'

export const fetchProfileData = createAsyncThunk<Profile, string, AsyncThunkConfig<string>>(
  'profile/fetchProfileData',
  async (profileId, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI
    try {
      const response = await extra.api.get<Profile>(`/profile/${profileId}`)

      if (!response.data) {
        return rejectWithValue('SERVER_ERROR')
      }

      return response.data
    } catch (e) {
      return rejectWithValue('SERVER_ERROR')
    }
  })
