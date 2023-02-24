import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'
import { type StoreShema } from 'app/providers/storeProvider/config/StoreShema'
import { counterReducer } from 'entities/Counter'
import { type Store } from 'redux'
import { userReducer } from 'entities/User'

export const createReduxStore = (initialState?: StoreShema): Store => {
  const storeReducer: ReducersMapObject<StoreShema> = {
    counter: counterReducer,
    user: userReducer
  }

  return configureStore<StoreShema>({
    reducer: storeReducer,
    preloadedState: initialState
  })
}
