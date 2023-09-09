import { type StoreSchema } from '@/app/providers/storeProvider'

export const getProfileFormData = (state: StoreSchema) => state.profile?.formData
