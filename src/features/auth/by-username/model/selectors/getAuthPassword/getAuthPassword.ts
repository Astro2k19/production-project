import { type StoreSchema } from 'app/providers/storeProvider/config/StoreSchema'

export const getAuthPassword = (state: StoreSchema): string => state?.loginForm?.password ?? ''
