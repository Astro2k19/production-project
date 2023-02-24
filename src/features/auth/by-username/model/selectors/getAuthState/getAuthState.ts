import { type StoreShema } from 'app/providers/storeProvider/config/StoreShema'

export const getAuthState = (state: StoreShema) => state.authForm
