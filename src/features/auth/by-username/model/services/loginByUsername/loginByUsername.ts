import { createAsyncThunk } from '@reduxjs/toolkit'
import { type User, userActions } from 'entities/User'
import axios from 'axios'

interface loginByUsernameProps {
  username: string
  password: string
}

export const loginByUsername = createAsyncThunk<User, loginByUsernameProps, { rejectValue: string }>(
  'login/loginByUsername',
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:8000/login', userData)

      if (!response.data) {
        return thunkAPI.rejectWithValue('SERVER_ERROR')
      }

      thunkAPI.dispatch(userActions.setAuthDate(response.data))

      return response.data
    } catch (e) {
      console.log(e)
      return thunkAPI.rejectWithValue(e.code)
    }
  })
