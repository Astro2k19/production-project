import { type StoreSchema } from 'app/providers/storeProvider/config/StoreSchema'
import { type LoginFormSchema } from '../../types/loginSchema'

export const getAuthLoading = (state: StoreSchema): boolean => state?.loginForm?.isLoading ?? false
