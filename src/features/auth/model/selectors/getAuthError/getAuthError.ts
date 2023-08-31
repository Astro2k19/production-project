import { type StoreSchema } from '@/app/providers/storeProvider'

export const getAuthError = (state: StoreSchema) => state?.loginForm?.error
