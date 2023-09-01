import { createSelector } from '@reduxjs/toolkit'

import { getProfileData } from '../getProfileData/getProfileData'

import { type Profile } from '@/entities/Profile'
import { getUserAuthDate, type User } from '@/entities/User'

export const canEditProfile = createSelector(
  getUserAuthDate,
  getProfileData,
  (user?: User, profile?: Profile) => user?.id === profile?.id
)
