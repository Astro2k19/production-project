import { createSelector } from '@reduxjs/toolkit'
import { getUserAuthDate, type User } from 'entities/User'
import { getProfileData } from '../getProfileData/getProfileData'
import { type Profile } from 'entities/Profile'

export const canEditProfile = createSelector(
  getUserAuthDate,
  getProfileData,
  (user?: User, profile?: Profile) => user?.id === profile?.id
)
