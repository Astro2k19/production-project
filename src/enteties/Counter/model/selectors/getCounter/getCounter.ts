import { type StoreShema } from 'app/providers/storeProvider/config/StoreShema'
import { type CounterShema } from '../../types/CounterShema'

export const getCounter = (state: StoreShema): CounterShema => state.counter
