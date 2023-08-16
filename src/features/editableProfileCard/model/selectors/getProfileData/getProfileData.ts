import { type StoreSchema } from '@/app/providers/storeProvider/config/StoreSchema'

export const getProfileData = (state: StoreSchema) => state.profile?.data
