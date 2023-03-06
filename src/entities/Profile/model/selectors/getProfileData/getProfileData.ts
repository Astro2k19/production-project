import { type StoreSchema } from 'app/providers/storeProvider/config/StoreSchema'
import { type Profile } from '../../types/profile'

export const getProfileData = (state: StoreSchema): Profile | undefined => state.profile?.data
