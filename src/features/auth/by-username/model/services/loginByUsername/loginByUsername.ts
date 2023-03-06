import { createAsyncThunk } from '@reduxjs/toolkit'
import { type User, userActions } from 'entities/User'
import { type AsyncThunkConfig } from 'app/providers/storeProvider'

interface loginByUsernameProps {
  username: string
  password: string
}

export const loginByUsername = createAsyncThunk<User, loginByUsernameProps, AsyncThunkConfig<string>>(
  'login/loginByUsername',
  async (userData, thunkAPI) => {
    const { dispatch, rejectWithValue, extra } = thunkAPI

    try {
      const response = await extra.api.post('/login', userData)

      if (!response.data) {
        return rejectWithValue('SERVER_ERROR')
      }

      dispatch(userActions.setAuthDate(response.data))

      return response.data
    } catch (e) {
      console.log(e)
      return rejectWithValue(e.code)
    }
  })
