import { type StoreSchema } from '@/app/providers/storeProvider'

export const getAuthPassword = (state: StoreSchema): string => state?.loginForm?.password ?? ''
