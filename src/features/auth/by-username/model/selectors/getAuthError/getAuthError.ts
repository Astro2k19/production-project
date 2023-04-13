import { type StoreSchema } from 'app/providers/storeProvider/config/StoreSchema'

export const getAuthError = (state: StoreSchema) => state?.loginForm?.error
