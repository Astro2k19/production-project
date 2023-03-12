import { type StoreSchema } from 'app/providers/storeProvider/config/StoreSchema'

export const getProfileError = (state: StoreSchema): string | undefined => state.profile?.error
