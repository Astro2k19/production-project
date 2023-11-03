import { createAsyncThunk } from '@reduxjs/toolkit'

import { type AsyncThunkConfig } from '@/app/providers/storeProvider'

import { defineJsonOptions } from '../../api/userApi'
import { getUserAuthDate } from '../selectors/getUserAuthDate/getUserAuthDate'
import { getUserJsonSettings } from '../selectors/jsonSettingsSelectors'
import { JsonSettings } from '../types/jsonSettings'

export const setJsonSettings = createAsyncThunk<
    JsonSettings,
    JsonSettings,
    AsyncThunkConfig
>('profile/updateProfileData', async (newJsonSettings, thunkAPI) => {
    const { rejectWithValue, dispatch, getState } = thunkAPI

    try {
        const userDate = getUserAuthDate(getState())
        const jsonSettings = getUserJsonSettings(getState())

        if (!userDate) {
            return rejectWithValue('No user date!')
        }

        const response = await dispatch(
            defineJsonOptions({
                userId: userDate.id,
                jsonSettings: {
                    ...jsonSettings,
                    ...newJsonSettings,
                },
            }),
        ).unwrap()

        if (!response.jsonSettings) {
            return rejectWithValue('No user json settings!')
        }

        return response.jsonSettings
    } catch (e) {
        return rejectWithValue('Error')
    }
})
