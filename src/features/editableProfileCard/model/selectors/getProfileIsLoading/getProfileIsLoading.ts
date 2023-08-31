import { type StoreSchema } from '@/app/providers/storeProvider'

export const getProfileIsLoading = (state: StoreSchema): boolean | undefined => state.profile?.isLoading
