import { type StoreSchema } from 'app/providers/storeProvider/config/StoreSchema'
import { type LoginFormSchema } from '../../types/loginSchema'

export const getAuthState = (state: StoreSchema): LoginFormSchema | undefined => state?.loginForm
