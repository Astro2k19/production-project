import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'
import { type StoreShema } from 'app/providers/storeProvider/config/StoreShema'
import { type Store } from 'redux'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { authReducer } from 'features/auth/by-username'

export const createReduxStore = (initialState?: StoreShema): Store => {
  const storeReducer: ReducersMapObject<StoreShema> = {
    counter: counterReducer,
    user: userReducer,
    authForm: authReducer
  }

  return configureStore<StoreShema>({
    reducer: storeReducer,
    preloadedState: initialState
  })
}
