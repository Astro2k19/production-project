import { type StoreSchema } from '@/app/providers/storeProvider'

export const getAuthUsername = (state: StoreSchema): string => state?.loginForm?.username ?? ''
