import { type StoreSchema } from '@/app/providers/storeProvider'

export const getUserAuthDate = (state: StoreSchema) => state.user.authData
