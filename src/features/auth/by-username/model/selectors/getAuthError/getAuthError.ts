import { type StoreSchema } from 'app/providers/storeProvider/config/StoreSchema'

export const getAuthError = (state: StoreSchema): string | undefined => state?.loginForm?.error
