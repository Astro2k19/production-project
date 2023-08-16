import { type StoreSchema } from '@/app/providers/storeProvider/config/StoreSchema'

export const getAuthLoading = (state: StoreSchema): boolean => state?.loginForm?.isLoading ?? false
