import { type StoreSchema } from 'app/providers/storeProvider/config/StoreSchema'
import { type User } from 'entities/User'

export const getUserAuthDate = (state: StoreSchema): User | undefined => state.user.authData
