import { type StoreSchema } from '@/app/providers/storeProvider/config/StoreSchema'

export const getProfileValidateErrors = (state: StoreSchema) => state.profile?.validateProfileErrors
