import { type StoreSchema } from 'app/providers/storeProvider/config/StoreSchema'
import { type LoginFormSchema } from '../../types/loginSchema'

export const getAuthPassword = (state: StoreSchema): string => state?.loginForm?.password ?? ''
