import { createAsyncThunk } from '@reduxjs/toolkit'
import { type AsyncThunkConfig } from 'app/providers/storeProvider'
import { type Profile, ValidateProfileErrors } from 'entities/Profile'
import { getProfileFormData } from '../../selectors/getProfileFormData/getProfileFormData'
import { validateErrors } from '../validateErrors/validateErrors'

export const updateProfileData = createAsyncThunk<Profile, undefined, AsyncThunkConfig<ValidateProfileErrors[]>>(
  'profile/updateProfileData',
  async (_, thunkAPI) => {
    const { rejectWithValue, extra, getState } = thunkAPI

    try {
      const formData = getProfileFormData(getState())
      const errors = validateErrors(formData)

      if (errors.length) {
        return rejectWithValue(errors)
      }

      const response = await extra.api.put('/profile', formData)

      if (!response.data) {
        return rejectWithValue([ValidateProfileErrors.SERVER_ERROR])
      }

      return response.data
    } catch (e) {
      return rejectWithValue([ValidateProfileErrors.SERVER_ERROR])
    }
  })
