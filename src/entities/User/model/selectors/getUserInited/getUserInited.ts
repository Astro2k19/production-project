import { type StoreSchema } from 'app/providers/storeProvider/config/StoreSchema'

export const getUserInited = (state: StoreSchema) => state.user._inited
