import { createAsyncThunk } from '@reduxjs/toolkit'

import { type AsyncThunkConfig } from '@/app/providers/storeProvider'

import { type Profile } from '@/entities/Profile'
import { ValidateProfileError } from '@/entities/Profile'

import { getProfileFormData } from '../../selectors/editableProfileCardSelectors'
import { validateErrors } from '../validateErrors/validateErrors'

export const updateProfileData = createAsyncThunk<
    Profile,
    undefined,
    AsyncThunkConfig<ValidateProfileError[]>
>('profile/updateProfileData', async (_, thunkAPI) => {
    const { rejectWithValue, extra, getState } = thunkAPI

    try {
        const formData = getProfileFormData(getState())
        const errors = validateErrors(formData)

        if (errors.length) {
            return rejectWithValue(errors)
        }

        const response = await extra.api.put(
            `/profile/${formData?.id}`,
            formData,
        )

        if (!response.data) {
            return rejectWithValue([ValidateProfileError.SERVER_ERROR])
        }

        return response.data
    } catch (e) {
        return rejectWithValue([ValidateProfileError.SERVER_ERROR])
    }
})
