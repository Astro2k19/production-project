import { type StoreSchema } from 'app/providers/storeProvider/config/StoreSchema'
import { type LoginFormSchema } from '../../types/loginSchema'

export const getAuthError = (state: StoreSchema): string | undefined => state?.loginForm?.error
