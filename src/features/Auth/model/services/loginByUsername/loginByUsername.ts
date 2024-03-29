import { createAsyncThunk } from '@reduxjs/toolkit'
import { type AxiosError } from 'axios'

import { type AsyncThunkConfig } from '@/app/providers/storeProvider'

import { type User, userActions } from '@/entities/User'

import { type ApiError } from '@/shared/api/api'

interface loginByUsernameProps {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<
    User,
    loginByUsernameProps,
    AsyncThunkConfig<ApiError>
>('common/loginByUsername', async (userData, thunkAPI) => {
    const { dispatch, rejectWithValue, extra } = thunkAPI

    try {
        const response = await extra.api.post('/login', userData)

        if (!response.data) {
            return rejectWithValue({
                code: '500',
                message: 'No data',
            })
        }

        dispatch(userActions.setAuthDate(response.data))

        return response.data
    } catch (e) {
        const error = e as AxiosError

        if (error.response) {
            return rejectWithValue({
                code: error.response.status.toString(),
                message: error.message,
            })
        }

        return rejectWithValue({
            code: '500',
            message: 'Server Error',
        })
    }
})
