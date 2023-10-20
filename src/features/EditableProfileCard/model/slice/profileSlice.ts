import { type PayloadAction, createSlice } from '@reduxjs/toolkit'

import { type Profile, type ValidateProfileError } from '@/entities/Profile'

import { type ApiError } from '@/shared/api/api'

import { fetchProfileData } from '../services/fetchProfileData/fetctProfileData'
import { updateProfileData } from '../services/updateProfileData/updateProfileData'
import { type ProfileSchema } from '../types/editableProfileCard'

const initialState: ProfileSchema = {
	data: undefined,
	isLoading: false,
	readonly: true,
	error: undefined,
}

export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		setProfileData: (
			state,
			action: PayloadAction<DeepPartial<Profile>>,
		) => {
			state.formData = {
				...state.formData,
				...(action.payload as Profile),
			}
		},
		setReadonly: (state, action: PayloadAction<boolean>) => {
			state.readonly = action.payload
		},
		cancelUpdate: state => {
			state.formData = state.data
			state.readonly = true
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchProfileData.pending, state => {
				state.isLoading = true
			})
			.addCase(fetchProfileData.fulfilled, (state, action) => {
				state.isLoading = false
				state.data = action.payload
				state.formData = action.payload
			})
			.addCase(fetchProfileData.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload as ApiError
			})
			.addCase(updateProfileData.pending, state => {
				state.isLoading = true
				state.validateProfileErrors = undefined
			})
			.addCase(updateProfileData.fulfilled, (state, action) => {
				state.isLoading = false
				state.readonly = true
				state.data = action.payload
				state.formData = action.payload
				state.validateProfileErrors = undefined
			})
			.addCase(updateProfileData.rejected, (state, action) => {
				state.isLoading = false
				state.validateProfileErrors =
					action.payload as ValidateProfileError[]
			})
	},
})

export const { actions: profileActions } = profileSlice

export const { reducer: profileReducer } = profileSlice
