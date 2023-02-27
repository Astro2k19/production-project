import { type StoreSchema } from 'app/providers/storeProvider/config/StoreSchema'
import { type CounterSchema } from '../../types/CounterSchema'

export const getCounter = (state: StoreSchema): CounterSchema => state.counter
