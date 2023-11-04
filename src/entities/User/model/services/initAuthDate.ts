import { createAsyncThunk } from '@reduxjs/toolkit'

import { type AsyncThunkConfig } from '@/app/providers/storeProvider'

import { USER_AUTH_DATA_KEY } from '@/shared/const/localStorage'

import { fetchUserDataById } from '../../api/userApi'
import { User } from '../types/userTypes'

export const initAuthDate = createAsyncThunk<User, undefined, AsyncThunkConfig>(
    'user/initAuthDate',
    async (newJsonSettings, thunkAPI) => {
        const { rejectWithValue, dispatch } = thunkAPI

        try {
            const userId = localStorage.getItem(USER_AUTH_DATA_KEY)

            if (!userId) {
                return rejectWithValue('User is not signed in!')
            }

            const response = await dispatch(
                fetchUserDataById(JSON.parse(userId)),
            ).unwrap()
            console.log(response, 'response')

            return response
        } catch (e) {
            return rejectWithValue('Error')
        }
    },
)
