import { createAsyncThunk } from '@reduxjs/toolkit'
import { type User, userActions } from 'entities/User'
import axios, { AxiosError } from 'axios'
import i18n from 'shared/config/i18n/i18n'
import { type AuthFormErrors } from '../../../ui/AuthForm/AuthForm'

interface loginByUsernameProps {
  username: string
  password: string
}

export const loginByUsername = createAsyncThunk<User, loginByUsernameProps, { rejectValue: string }>(
  'login/loginByUsername',
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:8000/login', userData)

      if (!response.data || response.status !== 200) {
        return thunkAPI.rejectWithValue('SERVER_ERROR')
      }

      thunkAPI.dispatch(userActions.setAuthDate(response.data))

      return response.data
    } catch (e) {
      console.log(e)
      return thunkAPI.rejectWithValue(e.code)
    }
  })
