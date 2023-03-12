import { createAsyncThunk } from '@reduxjs/toolkit'
import { type AsyncThunkConfig } from 'app/providers/storeProvider'
import { type Profile } from 'entities/Profile'
import { getProfileFormData } from '../../selectors/getProfileFormData/getProfileFormData'

export const updateProfileData = createAsyncThunk<Profile, undefined, AsyncThunkConfig<string>>(
  'profile/updateProfileData',
  async (_, thunkAPI) => {
    const { rejectWithValue, extra, getState } = thunkAPI

    try {
      const formData = getProfileFormData(getState())
      const response = await extra.api.put('/profile', formData)

      if (!response.data) {
        return rejectWithValue('SERVER_ERROR')
      }

      return response.data
    } catch (e) {
      return rejectWithValue('asdf')
    }
  })
