import { createSelector } from '@reduxjs/toolkit'

import { StoreSchema } from '@/app/providers/storeProvider'

import { Profile } from '@/entities/Profile'
import { User, getUserAuthDate } from '@/entities/User'

export const getProfileData = (state: StoreSchema) => state.profile?.data
export const canEditProfile = createSelector(
	getUserAuthDate,
	getProfileData,
	(user?: User, profile?: Profile) => user?.id === profile?.id,
)
export const getProfileError = (state: StoreSchema) => state.profile?.error
export const getProfileFormData = (state: StoreSchema) =>
	state.profile?.formData
export const getProfileIsLoading = (state: StoreSchema): boolean | undefined =>
	state.profile?.isLoading
export const getProfileReadonly = (state: StoreSchema): boolean | undefined =>
	state.profile?.readonly
export const getProfileValidateErrors = (state: StoreSchema) =>
	state.profile?.validateProfileErrors
