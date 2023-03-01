import { type StoreSchema } from 'app/providers/storeProvider/config/StoreSchema'

export const getAuthUsername = (state: StoreSchema): string => state?.loginForm?.username ?? ''
