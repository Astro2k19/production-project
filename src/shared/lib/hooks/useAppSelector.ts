import { type TypedUseSelectorHook, useSelector } from 'react-redux'
import { type RootState } from 'app/providers/storeProvider'
import { type StoreSchema } from 'app/providers/storeProvider/config/StoreSchema'
export const useAppSelector: TypedUseSelectorHook<StoreSchema> = useSelector
