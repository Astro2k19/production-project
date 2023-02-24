import { createAsyncThunk } from '@reduxjs/toolkit'
import { type User } from 'entities/User'
import axios from 'axios'

interface loginByUsernameProps {
  username: string
  password: string
}

export const loginByUsername = createAsyncThunk<User, loginByUsernameProps, { rejectValue: string }>('login/loginByUsername', async (userData, thunkAPI) => {
  try {
    const response = await axios.post('http://localhost:8000', userData)

    if (!response.data || response.status !== 200) {
      return thunkAPI.rejectWithValue('error')
    }

    return response.data
  } catch (e) {
    return thunkAPI.rejectWithValue('Password or username is wrong')
  }
})
