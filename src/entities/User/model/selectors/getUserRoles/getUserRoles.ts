import { type StoreSchema } from '@/app/providers/storeProvider'
import { createSelector } from '@reduxjs/toolkit'
import { UserRoles } from '../../conts/userConst'

export const getUserRoles = (state: StoreSchema): UserRoles[] | undefined => state.user.authData?.roles

export const isUserAdmin = createSelector(
  getUserRoles,
  (roles) => roles?.includes(UserRoles.ADMIN)
)

export const isUserManager = createSelector(
  getUserRoles,
  (roles) => roles?.includes(UserRoles.MANAGER)
)
