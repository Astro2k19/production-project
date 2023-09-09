import { type StoreSchema } from '@/app/providers/storeProvider'

export const getProfileData = (state: StoreSchema) => state.profile?.data
