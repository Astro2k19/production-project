import { createAsyncThunk } from '@reduxjs/toolkit'
import { type User, userActions } from 'entities/User'
import axios from 'axios'
import i18n from 'shared/config/i18n/i18n'

interface loginByUsernameProps {
  username?: string
  password?: string
}

export const loginByUsername = createAsyncThunk<User, loginByUsernameProps, { rejectValue: string }>('login/loginByUsername', async (userData, thunkAPI) => {
  try {
    const response = await axios.post('http://localhost:8000/login', userData)

    if (!response.data || response.status >= 400) {
      return thunkAPI.rejectWithValue('Oops! Something went wrong. Please, try again!')
    }

    thunkAPI.dispatch(userActions.setAuthDate(response.data))

    return response.data
  } catch (e) {
    return thunkAPI.rejectWithValue('Password or username is wrong!')
  }
})
