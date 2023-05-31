import { type StoreSchema } from 'app/providers/storeProvider/config/StoreSchema'

export const getUserAuthDate = (state: StoreSchema) => state.user.authData
