import { type StoreSchema } from '@/app/providers/storeProvider'

export const getUserInited = (state: StoreSchema) => state.user._inited
