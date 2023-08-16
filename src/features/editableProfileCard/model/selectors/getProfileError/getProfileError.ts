import { type StoreSchema } from '@/app/providers/storeProvider/config/StoreSchema'

export const getProfileError = (state: StoreSchema) => state.profile?.error
