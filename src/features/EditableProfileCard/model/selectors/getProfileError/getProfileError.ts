import { type StoreSchema } from '@/app/providers/storeProvider'

export const getProfileError = (state: StoreSchema) => state.profile?.error
