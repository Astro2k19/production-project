import { type StoreSchema } from '@/app/providers/storeProvider'

export const getProfileReadonly = (state: StoreSchema): boolean | undefined => state.profile?.readonly
