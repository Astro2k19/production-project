import { type StoreSchema } from '@/app/providers/storeProvider'

export const getProfileValidateErrors = (state: StoreSchema) => state.profile?.validateProfileErrors
