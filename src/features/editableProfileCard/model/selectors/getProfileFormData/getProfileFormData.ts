import { type StoreSchema } from '@/app/providers/storeProvider/config/StoreSchema'

export const getProfileFormData = (state: StoreSchema) => state.profile?.formData
