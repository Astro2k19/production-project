import { configureStore } from '@reduxjs/toolkit'
import { type StoreShema } from 'app/providers/storeProvider/config/StoreShema'
import { counterReducer } from 'enteties/Counter'
import { type Store } from 'redux'

export const createReduxStore = (initialState?: StoreShema): Store => {
  return configureStore<StoreShema>({
    reducer: {
      counter: counterReducer
    },
    preloadedState: initialState
  })
}
