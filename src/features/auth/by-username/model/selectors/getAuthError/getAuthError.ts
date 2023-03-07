import { type StoreSchema } from 'app/providers/storeProvider/config/StoreSchema'
import { type AuthFormErrorsIndex } from '../../types/loginSchema'

export const getAuthError = (state: StoreSchema): AuthFormErrorsIndex | undefined => state?.loginForm?.error
