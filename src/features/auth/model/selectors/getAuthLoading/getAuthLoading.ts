import { type StoreSchema } from '@/app/providers/storeProvider'

export const getAuthLoading = (state: StoreSchema): boolean => state?.loginForm?.isLoading ?? false
