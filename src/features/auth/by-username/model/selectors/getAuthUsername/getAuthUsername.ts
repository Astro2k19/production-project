import { type StoreSchema } from 'app/providers/storeProvider/config/StoreSchema'
import { type LoginFormSchema } from '../../types/loginSchema'

export const getAuthUsername = (state: StoreSchema): string => state?.loginForm?.username ?? ''
