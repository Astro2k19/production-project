import { type StoreSchema } from 'app/providers/storeProvider/config/StoreSchema'

export const getProfileIsLoading = (state: StoreSchema): boolean | undefined => state.profile?.isLoading
