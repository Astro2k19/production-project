import { type StoreSchema } from '@/app/providers/storeProvider/config/StoreSchema'

export const getProfileReadonly = (state: StoreSchema): boolean | undefined => state.profile?.readonly
